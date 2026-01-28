/**
 * RPG Artale - 核心邏輯 (v22 - Final Logic)
 * 負責：State 管理, 傷害計算, 存檔 I/O, DPS 公式
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
let activeTimers = [0, 0, 0, 0]; // 技能持續時間
let lastPlayerAtkTime = 0; // 主角自動攻擊計時

// 存檔鍵值
const SAVE_KEY = 'artale_final_lock_v22';

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

/**
 * 檢查是否達成全分支收集 (Grand Slam)
 * 條件：楓葉系列與仙境系列的所有 Tier 4 (最終轉職) 職業都至少有一隻
 */
function checkGrandSlam() {
    // 1. 計算總共需要多少種 Tier 4
    let requiredJobs = new Set();
    
    [JOB_MAPLE, JOB_RO].forEach(db => {
        for (let camp in db) {
            for (let grp in db[camp]) {
                let t4 = db[camp][grp][4];
                if (t4) {
                    if (Array.isArray(t4)) t4.forEach(j => requiredJobs.add(j));
                    else requiredJobs.add(t4);
                }
            }
        }
    });

    // 2. 檢查當前擁有的 Tier 4
    let ownedJobs = new Set();
    g.helpers.forEach(h => {
        if (h.job4) ownedJobs.add(h.job4);
    });

    // 3. 比對數量
    // 注意：這裡假設使用者必須練滿該職業到4轉才算收集
    return ownedJobs.size === requiredJobs.size;
}

// === 遊戲主迴圈 (Tick) ===
// 邏輯每秒運算一次 (除了主角攻擊有獨立計時)
function tick() {
    try {
        let now = Date.now();

        // 1. 計算基礎數值 (Base Stats)
        let pBaseRaw = getPlayerDmg(g.playerLv);
        let helperTotalRaw = 0;
        
        // 終局獎勵判定
        let isGrandSlam = checkGrandSlam();
        let grandSlamMult = isGrandSlam ? 100 : 1;

        if (g.helpers) {
            g.helpers.forEach(h => {
                // 轉職倍率 (Tier Multiplier)
                let tierMult = 1;
                if (h.job4) tierMult = 50;      // 4轉/三轉
                else if (h.job3) tierMult = 20; // 3轉/進階二轉
                else if (h.job2) tierMult = 10; // 2轉
                else if (h.job1) tierMult = 5;  // 1轉
                
                let hDmg = getHelperDmg(h.lv, tierMult);
                helperTotalRaw += hDmg;
            });
        }
        
        // 應用終局獎勵於助手總傷
        helperTotalRaw *= grandSlamMult;

        // 2. 實戰傷害處理 (Real Damage)
        // 2a. 主角自動攻擊 (每 3 秒一次)
        if (now - lastPlayerAtkTime >= PLAYER_ATK_INTERVAL) {
            let dmgObj = calculateFinalDmg(pBaseRaw, 'roll');
            dealDmg(dmgObj.val, false, dmgObj.crit);
            lastPlayerAtkTime = now;
        }

        // 2b. 助手自動攻擊 (每秒一次)
        // 這裡假設 tick 是 1秒 執行一次，直接造成助手總傷
        let hDmgObj = calculateFinalDmg(helperTotalRaw, 'roll');
        dealDmg(hDmgObj.val, false, hDmgObj.crit);

        // 3. DPS 面板計算 (Theoretical DPS)
        // 公式：(主角面板/3) + (助手總面板) + (主角面板 * 5)
        let avgPlayerShot = calculateFinalDmg(pBaseRaw, 'avg');
        let avgHelperTick = calculateFinalDmg(helperTotalRaw, 'avg');
        
        let playerAutoDps = avgPlayerShot / (PLAYER_ATK_INTERVAL / 1000); // 除以 3
        let clickDps = avgPlayerShot * CLICK_CPS_RATIO; // 乘以 5
        
        currentDps = playerAutoDps + avgHelperTick + clickDps;

        // 4. SP 回復與技能冷卻
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
    // 呼叫 UI 顯示飄字
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

    // 聖物金幣加成
    let relicGoldBonus = (g.rLvs[2] * 0.05) + (g.rLvs[8] * 0.04);
    coinGain = coinGain * (1 + relicGoldBonus);

    g.coins += Math.floor(coinGain);

    if (isBoss) {
        checkBossDrop();
    }

    g.stage++;
    refreshMonster();
}

function refreshMonster() {
    mMaxHp = getMonsterHp(g.stage);
    mHp = mMaxHp;
}

function checkBossDrop() {
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

// === 存檔系統 ===

function save() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(g));
    } catch (e) {}
}

function load() {
    try {
        const saved = localStorage.getItem(SAVE_KEY);
        if (saved) {
            let loaded = JSON.parse(saved);
            g = { ...g, ...loaded };
            
            // 防呆與修復
            if (!g.rLvs || g.rLvs.length < RELIC_DB.length) {
                g.rLvs = new Array(RELIC_DB.length).fill(0);
            }
            g.sLvs = g.sLvs.map(l => Math.min(100, l));
        }
    } catch (e) {
        console.error("Load failed:", e);
    }
}

function exportSave() {
    try {
        let json = JSON.stringify(g);
        let b64 = btoa(encodeURIComponent(json));
        let ioBox = document.getElementById('save-data-io');
        if (ioBox) {
            ioBox.value = b64;
            ioBox.select();
            try { document.execCommand('copy'); alert("存檔代碼已複製！"); } 
            catch(e) { alert("請手動複製代碼"); }
        }
    } catch (e) { alert("匯出失敗"); }
}

function importSave() {
    try {
        let ioBox = document.getElementById('save-data-io');
        let b64 = ioBox ? ioBox.value.trim() : "";
        if (!b64) return alert("請輸入代碼");

        let json = decodeURIComponent(atob(b64));
        let data = JSON.parse(json);

        if (confirm("確定要覆蓋進度嗎？")) {
            g = data;
            save();
            location.reload();
        }
    } catch (e) { alert("代碼錯誤"); }
}

function resetGame() {
    if (confirm("確定要刪除進度嗎？")) {
        localStorage.removeItem(SAVE_KEY);
        location.reload();
    }
}
