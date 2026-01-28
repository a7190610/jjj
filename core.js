/**
 * RPG Artale - 核心邏輯 (v25 - Fix Skill/Monster State)
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
    helpers: [], // 助手列表
    skillCds: [0, 0, 0, 0], // 技能冷卻 (存入檔案)
    activeTimers: [0, 0, 0, 0] // 技能持續時間 (存入檔案)
};

// 戰鬥暫存變數 (不存檔)
let mHp = 1;
let mMaxHp = 1;
let currentDps = 0;
let lastPlayerAtkTime = 0; // 主角自動攻擊計時

// 存檔鍵值 (版本更新)
const SAVE_KEY = 'artale_final_lock_v25';

// === 傷害計算核心 ===

function calculateFinalDmg(base, mode = 'roll') {
    let dmg = base || 0;

    // Skill 2: 奮力狂擊 (Rage)
    if (g.activeTimers[2] > 0) {
        let rageMult = 2 + (Math.max(1, g.sLvs[2]) - 1) * 0.5;
        dmg *= rageMult;
    }

    // Skill 3: 影分身
    if (g.activeTimers[3] > 0) {
        dmg *= 2;
    }

    // 聖物加成
    let relicSum = 0;
    if (g.rLvs) {
        g.rLvs.forEach(lv => {
            if (lv > 0) relicSum += (lv * 0.02);
        });
    }
    let rawDmg = dmg * (1 + relicSum);

    // Skill 1: 致命爆擊
    let critChance = 0;
    if (g.activeTimers[1] > 0) {
        critChance = (Math.max(1, g.sLvs[1]) * 0.5) / 100; 
        critChance = Math.min(1.0, critChance);
    }

    if (mode === 'avg') {
        return rawDmg * (1 + critChance);
    } else {
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
 */
function checkGrandSlam() {
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

    let ownedJobs = new Set();
    g.helpers.forEach(h => {
        if (h.job4) ownedJobs.add(h.job4);
    });

    return ownedJobs.size > 0 && ownedJobs.size === requiredJobs.size;
}

// === 遊戲主迴圈 (Tick) ===
function tick() {
    try {
        let now = Date.now();

        // 1. 計算基礎數值
        let pBaseRaw = getPlayerDmg(g.playerLv);
        let helperTotalRaw = 0;
        
        let isGrandSlam = checkGrandSlam();
        let grandSlamMult = isGrandSlam ? 100 : 1;

        if (g.helpers) {
            g.helpers.forEach(h => {
                let tierMult = 1;
                if (h.job4) tierMult = 50;
                else if (h.job3) tierMult = 20;
                else if (h.job2) tierMult = 10;
                else if (h.job1) tierMult = 5;
                
                let hDmg = getHelperDmg(h.lv, tierMult);
                helperTotalRaw += hDmg;
            });
        }
        
        helperTotalRaw *= grandSlamMult;

        // 2. 實戰傷害
        // 2a. 主角 (3秒一次)
        if (now - lastPlayerAtkTime >= PLAYER_ATK_INTERVAL) {
            let dmgObj = calculateFinalDmg(pBaseRaw, 'roll');
            dealDmg(dmgObj.val, false, dmgObj.crit);
            lastPlayerAtkTime = now;
        }

        // 2b. 助手 (每秒一次)
        let hDmgObj = calculateFinalDmg(helperTotalRaw, 'roll');
        dealDmg(hDmgObj.val, false, hDmgObj.crit);

        // 3. DPS 計算
        let avgPlayerShot = calculateFinalDmg(pBaseRaw, 'avg');
        let avgHelperTick = calculateFinalDmg(helperTotalRaw, 'avg');
        
        let playerAutoDps = avgPlayerShot / (PLAYER_ATK_INTERVAL / 1000); 
        let clickDps = avgPlayerShot * CLICK_CPS_RATIO;
        
        currentDps = playerAutoDps + avgHelperTick + clickDps;

        // 4. 資源與時間管理
        const maxSP = getMaxSP(g.playerLv);
        if (g.sp < maxSP) g.sp = Math.min(maxSP, g.sp + 1);

        // 使用 g.skillCds 而非區域變數
        if (!g.skillCds) g.skillCds = [0,0,0,0];
        if (!g.activeTimers) g.activeTimers = [0,0,0,0];

        g.skillCds = g.skillCds.map(t => Math.max(0, t - 1));
        g.activeTimers = g.activeTimers.map(t => Math.max(0, t - 1));

        // 5. 更新介面與存檔
        if (typeof updateUI === 'function') updateUI();
        save();

    } catch (e) {
        console.error("Tick Logic Error:", e);
    }
}

function dealDmg(amt, isClick = false, isCrit = false) {
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
    let baseCoin = getMonsterCoin(g.stage);
    let coinGain = baseCoin * (isBoss ? 5 : 1);
    let relicGoldBonus = (g.rLvs[2] * 0.05) + (g.rLvs[8] * 0.04);
    coinGain = coinGain * (1 + relicGoldBonus);
    g.coins += Math.floor(coinGain);

    if (isBoss) checkBossDrop();
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
            
            // 防呆與結構修復
            if (!g.rLvs || g.rLvs.length < RELIC_DB.length) {
                g.rLvs = new Array(RELIC_DB.length).fill(0);
            }
            g.sLvs = g.sLvs.map(l => Math.min(100, l));
            
            // 確保技能計時器存在
            if (!g.skillCds) g.skillCds = [0,0,0,0];
            if (!g.activeTimers) g.activeTimers = [0,0,0,0];
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

        if (typeof data.coins !== 'number' || !Array.isArray(data.helpers)) {
            throw new Error("無效的存檔格式");
        }

        if (confirm("確定要覆蓋當前進度嗎？")) {
            g = data;
            // 確保技能陣列存在
            if (!g.skillCds) g.skillCds = [0,0,0,0];
            if (!g.activeTimers) g.activeTimers = [0,0,0,0];
            
            save();
            refreshMonster(); // 關鍵修復：匯入後立即刷新怪物數值
            updateUI(); // 立即刷新介面
            
            // 提示成功但不強制重整，避免 Canvas 初始化問題
            alert("匯入成功！");
        }
    } catch (e) { alert("匯入失敗: 代碼錯誤"); }
}

function resetGame() {
    if (confirm("確定要刪除所有進度重新開始嗎？")) {
        localStorage.removeItem(SAVE_KEY);
        location.reload();
    }
}
