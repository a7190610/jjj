/**
 * RPG Adventure - 核心邏輯 (v29 - Force Reset & Stabilization)
 * 負責：State 管理, 傷害計算, 自動存檔, DPS 公式
 */

// 定義預設遊戲狀態 (用於初始化與存檔修復)
const DEFAULT_STATE = {
    coins: 0,
    diamonds: 0,
    stage: 1,
    playerLv: 1,
    sp: 10,
    sLvs: [0, 0, 0, 0], // 技能等級
    rLvs: new Array(RELIC_DB.length).fill(0), // 聖物等級
    helpers: [], // 助手列表
    skillCds: [0, 0, 0, 0], // 技能冷卻
    activeTimers: [0, 0, 0, 0] // 技能持續時間
};

// 遊戲全域狀態
let g = JSON.parse(JSON.stringify(DEFAULT_STATE));

// 戰鬥暫存變數 (不存檔)
let mHp = 1;
let mMaxHp = 1;
let currentDps = 0;
let lastPlayerAtkTime = 0; // 主角自動攻擊計時

// 存檔鍵值 (更新版本號以強制重置，解決舊存檔導致的白畫面)
const SAVE_KEY = 'artale_final_lock_v29';

// === 傷害計算核心 ===

function calculateFinalDmg(base, mode = 'roll') {
    let dmg = base || 0;

    // 防呆：確保陣列存在
    const timers = g.activeTimers || [0,0,0,0];
    const skills = g.sLvs || [0,0,0,0];

    // Skill 2: 奮力狂擊
    if (timers[2] > 0) {
        let rageMult = 2 + (Math.max(1, skills[2]) - 1) * 0.5;
        dmg *= rageMult;
    }

    // Skill 3: 影分身
    if (timers[3] > 0) {
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
    if (timers[1] > 0) {
        critChance = (Math.max(1, skills[1]) * 0.5) / 100; 
        critChance = Math.min(1.0, critChance);
    }

    if (mode === 'avg') {
        // 平均傷害 (假設爆擊2倍)
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
    
    // 遍歷所有資料庫找出所有 Tier 4 職業
    [JOB_MAPLE, JOB_RO].forEach(db => {
        for (let camp in db) {
            for (let grp in db[camp]) {
                if (db[camp][grp][4]) {
                    let t4 = db[camp][grp][4];
                    if (Array.isArray(t4)) t4.forEach(j => requiredJobs.add(j));
                    else requiredJobs.add(t4);
                }
            }
        }
    });

    let ownedJobs = new Set();
    if (g.helpers) {
        g.helpers.forEach(h => {
            if (h.job4) ownedJobs.add(h.job4);
        });
    }

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
        
        // 應用全收集加成
        helperTotalRaw *= grandSlamMult;

        // 2. 實戰傷害處理
        // 2a. 主角 (每 3 秒一次)
        if (now - lastPlayerAtkTime >= PLAYER_ATK_INTERVAL) {
            let dmgObj = calculateFinalDmg(pBaseRaw, 'roll');
            dealDmg(dmgObj.val, false, dmgObj.crit);
            lastPlayerAtkTime = now;
        }

        // 2b. 助手 (每秒一次)
        let hDmgObj = calculateFinalDmg(helperTotalRaw, 'roll');
        dealDmg(hDmgObj.val, false, hDmgObj.crit);

        // 3. DPS 計算 (面板顯示用)
        // 公式：(主角面板 / 3) + (助手總面板) + (主角面板 * 5)
        let avgPlayerShot = calculateFinalDmg(pBaseRaw, 'avg');
        let avgHelperTick = calculateFinalDmg(helperTotalRaw, 'avg');
        
        // PLAYER_ATK_INTERVAL 是毫秒，轉為秒需除以 1000
        let playerAutoDps = avgPlayerShot / (PLAYER_ATK_INTERVAL / 1000); 
        let clickDps = avgPlayerShot * CLICK_CPS_RATIO;
        
        currentDps = playerAutoDps + avgHelperTick + clickDps;

        // 4. 資源與時間管理
        const maxSP = getMaxSP(g.playerLv);
        if (g.sp < maxSP) g.sp = Math.min(maxSP, g.sp + 1);

        // 倒數計時 (確保陣列存在)
        if (!g.skillCds) g.skillCds = [0,0,0,0];
        if (!g.activeTimers) g.activeTimers = [0,0,0,0];

        g.skillCds = g.skillCds.map(t => Math.max(0, t - 1));
        g.activeTimers = g.activeTimers.map(t => Math.max(0, t - 1));

        // 5. 更新介面與自動存檔
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
    
    let r2 = (g.rLvs && g.rLvs[2]) || 0;
    let r8 = (g.rLvs && g.rLvs[8]) || 0;
    let relicGoldBonus = (r2 * 0.05) + (r8 * 0.04);
    
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
        if (g.rLvs) {
            g.rLvs.forEach((v, i) => { if (v === 0) unowned.push(i); });
        }
        
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

// === 穩健的存檔系統 (Robust Save System) ===

function save() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(g));
    } catch (e) {
        console.warn("Save failed");
    }
}

function load() {
    try {
        const saved = localStorage.getItem(SAVE_KEY);
        if (saved) {
            let loadedData = JSON.parse(saved);
            
            // === 深度合併 (Deep Merge) ===
            // 使用預設值填充缺失的欄位，防止舊存檔缺少新變數導致崩潰
            g = Object.assign({}, DEFAULT_STATE, loadedData);
            
            // 針對陣列做額外檢查，確保長度正確且非 null
            if (!Array.isArray(g.helpers)) g.helpers = [];
            
            if (!Array.isArray(g.skillCds) || g.skillCds.length !== 4) {
                g.skillCds = [0, 0, 0, 0];
            }
            
            if (!Array.isArray(g.activeTimers) || g.activeTimers.length !== 4) {
                g.activeTimers = [0, 0, 0, 0];
            }
            
            if (!Array.isArray(g.sLvs) || g.sLvs.length !== 4) {
                g.sLvs = [0, 0, 0, 0];
            } else {
                g.sLvs = g.sLvs.map(l => Math.min(100, l));
            }

            if (!Array.isArray(g.rLvs) || g.rLvs.length < RELIC_DB.length) {
                let old = g.rLvs || [];
                g.rLvs = new Array(RELIC_DB.length).fill(0);
                old.forEach((v, i) => { if(i < g.rLvs.length) g.rLvs[i] = v; });
            }
        } else {
            // 無存檔，使用預設值
            g = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
    } catch (e) {
        console.error("Load failed, resetting to default:", e);
        g = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
}
