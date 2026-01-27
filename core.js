/**
 * RPG Artale - 核心邏輯 (v21)
 * 負責：State 管理, 傷害計算, 存檔 I/O (含 Base64 匯入匯出)
 */

// 遊戲全域狀態
let g = {
    coins: 0,
    diamonds: 0,
    stage: 1,
    playerLv: 1,
    sp: 10,
    sLvs: [0, 0, 0, 0], // 技能等級
    rLvs: new Array(RELIC_DB.length).fill(0), // 聖物等級
    helpers: [] // 助手列表
};

// 戰鬥暫存變數
let mHp = 1;
let mMaxHp = 1;
let currentDps = 0;
let skillCds = [0, 0, 0, 0];
let activeTimers = [0, 0, 0, 0];
let lastTime = 0; 

// 存檔鍵值 (更新版本號以重置舊存檔結構)
const SAVE_KEY = 'artale_final_lock_v21';

// === 傷害計算核心 ===

/**
 * 計算最終傷害
 * @param {number} base 基礎傷害
 * @param {string} mode 'avg' (期望值用于DPS) | 'roll' (實戰判定)
 * @returns {number|object} 數值或物件 {val, crit}
 */
function calculateFinalDmg(base, mode = 'roll') {
    let dmg = base || 0;

    // Skill 2: 奮力狂擊 (Rage) - 基礎攻擊倍率增加
    if (activeTimers[2] > 0) {
        let rageMult = 2 + (Math.max(1, g.sLvs[2]) - 1) * 0.5;
        dmg *= rageMult;
    }

    // Skill 3: 影分身 (Shadow Partner) - 最終傷害翻倍
    if (activeTimers[3] > 0) {
        dmg *= 2;
    }

    // 聖物加成 (Relics) - 每級 +2%
    let relicSum = 0;
    if (g.rLvs) {
        g.rLvs.forEach(lv => {
            if (lv > 0) relicSum += (lv * 0.02);
        });
    }
    let rawDmg = dmg * (1 + relicSum);

    // Skill 1: 致命爆擊 (Critical)
    let critChance = 0;
    if (activeTimers[1] > 0) {
        critChance = (Math.max(1, g.sLvs[1]) * 0.5) / 100; // 每級 0.5%
        critChance = Math.min(1.0, critChance);
    }

    // 爆擊傷害預設為 200% (2倍)
    if (mode === 'avg') {
        // 平均期望值 = 原始 * (1 + 爆擊率 * (爆擊倍率-1))
        return rawDmg * (1 + critChance);
    } else {
        // 實戰骰骰子
        let isCrit = Math.random() < critChance;
        if (isCrit) {
            return { val: rawDmg * 2, crit: true };
        } else {
            return { val: rawDmg, crit: false };
        }
    }
}

// === 遊戲主迴圈 (Tick) ===
// 每秒執行一次，處理自動攻擊、冷卻、SP回復
function tick() {
    try {
        // 1. 計算基礎數值
        let pClickBase = getPlayerDmg(g.playerLv);
        let helperTotalBase = 0;

        if (g.helpers) {
            g.helpers.forEach(h => {
                // 根據職業階級給予倍率
                let mult = 1;
                if (h.job4) mult = 50;
                else if (h.job3) mult = 20;
                else if (h.job2) mult = 5;
                
                helperTotalBase += getHelperDmg(h.lv, mult);
            });
        }

        // 2. 自動攻擊 (Idle Logic)
        // 主角自動攻擊 = 點擊傷害的 20% (放置收益)
        let playerIdleBase = pClickBase * 0.2;
        let totalIdleBase = playerIdleBase + helperTotalBase;

        // 執行傷害 (Roll)
        let dmgObj = calculateFinalDmg(totalIdleBase, 'roll');
        dealDmg(dmgObj.val, false, dmgObj.crit);

        // 3. 更新 DPS 顯示 (Expectation)
        // 顯示 DPS = 自動傷害期望值 + (點擊期望值 * 4次/秒)
        let avgIdle = calculateFinalDmg(totalIdleBase, 'avg');
        let avgClick = calculateFinalDmg(pClickBase, 'avg');
        currentDps = avgIdle + (avgClick * 4);

        // 4. SP 回復與冷卻
        const maxSP = getMaxSP(g.playerLv);
        if (g.sp < maxSP) g.sp = Math.min(maxSP, g.sp + 1);

        skillCds = skillCds.map(t => Math.max(0, t - 1));
        activeTimers = activeTimers.map(t => Math.max(0, t - 1));

        // 5. 更新介面與存檔
        if (typeof updateUI === 'function') updateUI();
        save();

    } catch (e) {
        console.error("Tick Logic Error:", e);
    }
}

// 造成傷害與怪物死亡判定
function dealDmg(amt, isClick = false, isCrit = false) {
    // 呼叫 UI 顯示飄字 (若存在)
    if (typeof addDamageText === 'function' && (isClick || isCrit)) {
        addDamageText(amt, isCrit);
    }

    mHp -= amt;

    if (mHp <= 0) {
        killMonster();
    }
}

function killMonster() {
    mHp = 0;
    let isBoss = g.stage % 10 === 0;

    // 計算掉落金幣
    let baseCoin = getMonsterCoin(g.stage);
    let coinGain = baseCoin * (isBoss ? 5 : 1);

    // 聖物金幣加成 (Index 2: 黃金羅盤, Index 8: 守望者盾)
    let relicGoldBonus = (g.rLvs[2] * 0.05) + (g.rLvs[8] * 0.04);
    coinGain = coinGain * (1 + relicGoldBonus);

    g.coins += Math.floor(coinGain);

    // Boss 獎勵
    if (isBoss) {
        checkBossDrop();
    }

    // 進下一關
    g.stage++;
    refreshMonster();
}

// 刷新怪物數值
function refreshMonster() {
    mMaxHp = getMonsterHp(g.stage);
    mHp = mMaxHp;
}

function checkBossDrop() {
    // 40% 機率掉落聖物
    if (Math.random() < 0.4) {
        let unowned = [];
        g.rLvs.forEach((v, i) => { if (v === 0) unowned.push(i); });
        
        if (unowned.length > 0) {
            let rIdx = unowned[Math.floor(Math.random() * unowned.length)];
            g.rLvs[rIdx] = 1;
            if(typeof showDropAlert === 'function') showDropAlert(`✨ 獲得聖物: ${RELIC_DB[rIdx].n}!`);
        } else {
            g.diamonds += 10;
            if(typeof showDropAlert === 'function') showDropAlert("💎 已全收集! 獲得鑽石 x10");
        }
    } else {
        g.diamonds += 5;
        if(typeof showDropAlert === 'function') showDropAlert("💎 獲得鑽石 x5");
    }
}

// === 存檔系統 (Save/Load/Import/Export) ===

function save() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(g));
    } catch (e) {
        console.warn("Save failed (Storage full or disabled)");
    }
}

function load() {
    try {
        const saved = localStorage.getItem(SAVE_KEY);
        if (saved) {
            let loaded = JSON.parse(saved);
            // 合併物件以確保新欄位存在
            g = { ...g, ...loaded };
            
            // 修正陣列長度 (防呆)
            if (!g.rLvs || g.rLvs.length < RELIC_DB.length) {
                let old = g.rLvs || [];
                g.rLvs = new Array(RELIC_DB.length).fill(0);
                old.forEach((v, i) => { if(i < g.rLvs.length) g.rLvs[i] = v; });
            }
            // 技能等級上限修正
            g.sLvs = g.sLvs.map(l => Math.min(100, l));
        }
    } catch (e) {
        console.error("Load failed:", e);
    }
}

// 匯出存檔 (Base64)
function exportSave() {
    try {
        let json = JSON.stringify(g);
        let b64 = btoa(encodeURIComponent(json)); // utf-8 safe base64
        let ioBox = document.getElementById('save-data-io');
        if (ioBox) {
            ioBox.value = b64;
            ioBox.select();
            // 嘗試複製到剪貼簿
            try { document.execCommand('copy'); alert("存檔代碼已複製！"); } 
            catch(e) { alert("請手動複製代碼"); }
        }
    } catch (e) {
        alert("匯出失敗: " + e.message);
    }
}

// 匯入存檔
function importSave() {
    try {
        let ioBox = document.getElementById('save-data-io');
        let b64 = ioBox ? ioBox.value.trim() : "";
        if (!b64) return alert("請先輸入存檔代碼");

        let json = decodeURIComponent(atob(b64));
        let data = JSON.parse(json);

        // 簡單驗證
        if (typeof data.coins !== 'number' || !Array.isArray(data.helpers)) {
            throw new Error("無效的存檔格式");
        }

        if (confirm("確定要覆蓋當前進度嗎？")) {
            g = data;
            save();
            location.reload();
        }
    } catch (e) {
        alert("匯入失敗: 代碼錯誤或毀損\n" + e.message);
    }
}

function resetGame() {
    if (confirm("確定要刪除所有進度重新開始嗎？(此動作無法復原)")) {
        localStorage.removeItem(SAVE_KEY);
        location.reload();
    }
}