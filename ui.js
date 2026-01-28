/**
 * RPG Adventure - UI 介面與事件處理 (v1.0 - Visual & Interaction)
 * 負責：DOM 操作, Canvas 繪圖 (背景/主角/怪物/助手), Modal 邏輯
 */

// Canvas 全域變數
let canvas, ctx;
let clickEffects = [];
let loopsStarted = false;

// 背景圖資源
let bgImage = new Image();
let bgLoaded = false;

// 初始化
window.onload = function() {
    initGame();
};

function initGame() {
    // 1. Canvas 設置
    canvas = document.getElementById('gameCanvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // 綁定輸入事件 (滑鼠 & 觸控)
        canvas.addEventListener('mousedown', handleInput);
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault(); 
            for (let i = 0; i < e.touches.length; i++) {
                handleInput({ clientX: e.touches[i].clientX, clientY: e.touches[i].clientY });
            }
        }, {passive: false});
    }

    // 2. 載入背景圖
    bgImage.src = BG_IMAGE_URL;
    bgImage.onload = () => { bgLoaded = true; };

    // 3. 讀取存檔
    if (typeof load === 'function') load();

    // 4. 初始檢查 (雙系列開局)
    // 如果讀檔後 helpers 還是空的(全新存檔)，則初始化
    if (!g.helpers || g.helpers.length === 0) {
        g.helpers = [
            { 
                id: Date.now(), 
                lv: 1, 
                name: "初學者", 
                series: "MAPLE", 
                camp: "", grp: "", job1: "" 
            },
            { 
                id: Date.now() + 100, 
                lv: 1, 
                name: "初學者", 
                series: "RO",    
                camp: "", grp: "", job1: "" 
            }
        ];
        // 存檔一次以確保狀態
        if (typeof save === 'function') save();
    }
    
    // 確保怪物數值初始化
    if (typeof refreshMonster === 'function') refreshMonster();

    // 5. 啟動迴圈
    if (!loopsStarted) {
        setInterval(tick, 1000); 
        requestAnimationFrame(gameLoop); 
        loopsStarted = true;
    }

    // 6. 初始渲染介面
    updateUI();
}

function resizeCanvas() {
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
    }
}

// === UI 更新 ===

function updateUI() {
    // 貨幣與關卡
    setText('coin-txt', f(g.coins));
    setText('dia-txt', f(g.diamonds));
    setText('sp-txt', g.sp);
    setText('sp-max-txt', getMaxSP(g.playerLv));
    setText('stage-txt', g.stage);
    setText('dps-txt', f(currentDps));

    // 主角狀態
    let pBase = getPlayerDmg(g.playerLv);
    let avgClick = calculateFinalDmg(pBase, 'avg');
    setText('pAtk-title', `⚔️ 主角攻擊力 (Lv.${g.playerLv})`);
    setText('pAtk-val', `單次點擊: ${f(avgClick)}`);

    // 升級按鈕狀態
    let pCost = Math.floor(getPlayerCost(g.playerLv));
    let pBtn = document.getElementById('pUpBtn');
    if (pBtn) {
        pBtn.innerText = `升級 💰${f(pCost)}`;
        pBtn.disabled = g.coins < pCost;
    }

    // 更新技能倒數顯示區
    updateSkillTimersDisplay();

    // 渲染各區塊
    renderHelpers();
    renderRelics();
    renderSkills();
}

function setText(id, val) {
    let el = document.getElementById(id);
    if (el) el.innerText = val;
}

// 顯示技能剩餘時間 (DPS 下方)
function updateSkillTimersDisplay() {
    const container = document.getElementById('skill-timers');
    if (!container) return;
    
    let html = "";
    if (g.activeTimers) {
        SKILL_DB.forEach((s, i) => {
            if (g.activeTimers[i] > 0) {
                html += `<span style="margin-right:12px;">${s.n}: ${g.activeTimers[i]}s</span>`;
            }
        });
    }
    container.innerHTML = html;
}

// === 渲染助手列表 ===
function renderHelpers() {
    const area = document.getElementById('helper-list');
    if (!area) return;
    area.innerHTML = '';

    if (!g.helpers) return;

    g.helpers.forEach((h, i) => {
        let actionNeeded = false;
        
        // --- 楓葉系列規則 ---
        if (h.series === 'MAPLE') {
            if (!h.camp) actionNeeded = true; // Lv.1 必須選陣營
            else if (h.lv >= 10 && (!h.grp || !h.job1)) actionNeeded = true; // Lv.10 必須一轉
        }
        // --- 仙境系列規則 ---
        else if (h.series === 'RO') {
            if (h.lv >= 10 && (!h.camp || !h.grp || !h.job1)) actionNeeded = true; // Lv.10 必須一轉
        }

        // --- 共通高階轉職規則 ---
        if (h.lv >= 30 && !h.job2) actionNeeded = true;
        else if (h.lv >= 70 && !h.job3) actionNeeded = true;
        else if (h.lv >= 120 && !h.job4) actionNeeded = true;

        // 顯示名稱邏輯
        let dispName = h.name; 
        if (h.series === 'MAPLE' && h.camp && !h.job1) dispName = `[${h.camp}] 初學者`;
        // 職業覆蓋
        dispName = h.job4 || h.job3 || h.job2 || h.job1 || dispName;
        
        // 系列標籤
        let tagHtml = "";
        if (h.series === 'MAPLE') tagHtml = '<span style="color:#ffaacc">[楓]</span>';
        else if (h.series === 'RO') tagHtml = '<span style="color:#ccffff">[仙]</span>';
        
        // 計算倍率與花費
        let tierMult = 1;
        if (h.job4) tierMult = 50;
        else if (h.job3) tierMult = 20;
        else if (h.job2) tierMult = 10;
        else if (h.job1) tierMult = 5;

        let cost = Math.floor(getHelperCost(h.lv, tierMult));
        let baseH = getHelperDmg(h.lv, tierMult);
        
        // DPS 顯示 (含全收集加成)
        let isGrandSlam = (typeof checkGrandSlam === 'function') ? checkGrandSlam() : false;
        let finalBaseH = baseH * (isGrandSlam ? 100 : 1);
        let hDps = calculateFinalDmg(finalBaseH, 'avg');

        // 按鈕狀態
        let isMax = h.lv >= MAX_HELPER_LV;
        let btnDisabled = actionNeeded || g.coins < cost || isMax;
        let btnText = isMax ? "MAX" : (actionNeeded ? "需轉職" : `💰${f(cost)}`);
        
        let jobBtnHtml = actionNeeded 
            ? `<button class="job-btn" onclick="openJobSelection(${i})">進化!</button>` 
            : '';

        let html = `
        <div class="item">
            <div class="info">
                <strong>${tagHtml} ${dispName} <span style="color:#ffcc00">Lv.${h.lv}</span></strong>
                <small>DPS: ${f(hDps)} ${tierMult > 1 ? `(x${tierMult})` : ''}</small>
            </div>
            <div class="btn-group">
                ${jobBtnHtml}
                <button class="up-btn" onclick="upgradeH(${i})" ${btnDisabled ? 'disabled' : ''}>${btnText}</button>
            </div>
        </div>`;
        area.innerHTML += html;
    });
}

function renderRelics() {
    const area = document.getElementById('relic-area');
    if (!area) return;
    area.innerHTML = '';
    
    RELIC_DB.forEach((r, i) => {
        let lv = (g.rLvs && g.rLvs[i]) || 0;
        let isOwned = lv > 0;
        let cost = (lv === 0) ? 10 : lv * 5;
        
        if (!isOwned) {
            area.innerHTML += `<div class="item" style="opacity:0.5; filter:grayscale(1);">
                <div class="info"><strong>???</strong><small>擊敗BOSS解鎖</small></div>
            </div>`;
        } else {
            area.innerHTML += `<div class="item">
                <div class="info">
                    <strong>${r.n} <span style="color:#00e5ff">(Lv.${lv})</span></strong>
                    <b>${r.d}</b>
                </div>
                <button class="up-btn" onclick="upR(${i})" ${g.diamonds < cost ? 'disabled' : ''}>💎${cost}</button>
            </div>`;
        }
    });
}

function renderSkills() {
    const area = document.getElementById('skill-area');
    if (!area) return;
    area.innerHTML = '';
    
    SKILL_DB.forEach((s, i) => {
        let isL = g.skillCds && g.skillCds[i] > 0;
        let isActive = g.activeTimers && g.activeTimers[i] > 0;
        let currentLvl = (g.sLvs && g.sLvs[i]) || 0;
        let coinCost = (currentLvl + 1) * 500;
        let spCost = getSkillCost(i, Math.max(1, currentLvl));

        let btnText = "施放";
        if (isL) btnText = `${g.skillCds[i]}s`;
        
        let btnStyle = isActive ? 'border: 2px solid #55ff55; color:#55ff55;' : '';
        if (isL) btnStyle = 'opacity: 0.7;';

        // 動態說明文字 (計算當前等級數值)
        let desc = s.d; 
        if (i === 0) desc = `傷害 ${100 + (currentLvl > 0 ? currentLvl - 1 : 0)} 倍`;
        if (i === 1) desc = `爆擊率 ${(currentLvl * 0.5).toFixed(1)}% (30s)`; // 這裡的30s是固定的，若有成長需改公式
        if (i === 2) {
            let dur = 30 + (currentLvl > 0 ? currentLvl - 1 : 0);
            desc = `傷害 ${(2 + (currentLvl > 0 ? currentLvl - 1 : 0) * 0.5).toFixed(1)}倍 (${dur}s)`;
        }
        if (i === 3) {
            let dur = 30 + (currentLvl > 0 ? currentLvl - 1 : 0);
            desc = `傷害翻倍 (${dur}s)`;
        }

        let isMax = currentLvl >= 100;

        area.innerHTML += `<div class="item">
            <div class="info">
                <strong>${s.n} (Lv.${currentLvl}${isMax?' MAX':''})</strong>
                <small>${desc}</small>
                <b style="color:#ff5555; font-size:11px;">消耗: ${spCost} SP</b>
            </div>
            <div class="btn-group">
                <button class="skill-btn" style="${btnStyle}" onclick="useS(${i})" ${currentLvl==0 || isL || (g.sp < spCost && !isActive) ? 'disabled' : ''}>
                    ${g.sp < spCost && !isActive && !isL ? 'SP不足' : btnText}
                </button>
                <button class="up-btn" onclick="upS(${i})" ${isMax || g.coins<coinCost?'disabled':''}>${isMax?'已滿':'升級 💰'+f(coinCost)}</button>
            </div>
        </div>`;
    });
}

// === 互動邏輯 ===

function upgradePlayer() {
    let c = Math.floor(getPlayerCost(g.playerLv));
    if (g.coins >= c) {
        g.coins -= c;
        g.playerLv++;
        updateUI();
        save();
    }
}

function getSeriesMaxBranches(series) {
    const db = (series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
    if (!db) return 0;
    
    let count = 0;
    for (const campKey in db) {
        const camp = db[campKey];
        for (const grpKey in camp) {
            const grp = camp[grpKey];
            if (grp[4]) {
                count += Array.isArray(grp[4]) ? grp[4].length : 1;
            }
        }
    }
    return count;
}

function upgradeH(i) {
    const h = g.helpers[i];
    
    // 轉職卡點檢查 (若需轉職則開啟選單)
    let needJob = false;
    if (h.series === 'MAPLE') {
        if (!h.camp) needJob = true;
        else if (h.lv >= 10 && (!h.grp || !h.job1)) needJob = true;
    } else if (h.series === 'RO') {
        if (h.lv >= 10 && (!h.camp || !h.grp || !h.job1)) needJob = true;
    }
    
    if (h.lv >= 30 && !h.job2) needJob = true;
    if (h.lv >= 70 && !h.job3) needJob = true;
    if (h.lv >= 120 && !h.job4) needJob = true;

    if (needJob) return openJobSelection(i);
    
    if (h.lv >= MAX_HELPER_LV) return;

    let tierMult = 1;
    if (h.job4) tierMult = 50;
    else if (h.job3) tierMult = 20;
    else if (h.job2) tierMult = 10;
    else if (h.job1) tierMult = 5;

    let cost = Math.floor(getHelperCost(h.lv, tierMult));
    
    if (g.coins >= cost) {
        g.coins -= cost;
        h.lv++;
        updateUI();
        save();
    }
}

function upS(i) {
    if (g.sLvs[i] >= 100) return;
    let cost = (g.sLvs[i] + 1) * 500;
    if (g.coins >= cost) {
        g.coins -= cost;
        g.sLvs[i]++;
        updateUI();
        save();
    }
}

function upR(i) {
    let lv = g.rLvs[i];
    let cost = (lv === 0) ? 10 : lv * 5;
    if (g.diamonds >= cost) {
        g.diamonds -= cost;
        g.rLvs[i]++;
        updateUI();
        save();
    }
}

function useS(i) {
    let spCost = getSkillCost(i, Math.max(1, g.sLvs[i]));
    
    if (g.sp >= spCost && g.skillCds[i] == 0 && g.sLvs[i] > 0) {
        g.sp -= spCost;
        let currentLvl = Math.max(1, g.sLvs[i]);

        if (i === 0) { 
            let mult = 100 + (currentLvl - 1);
            let pBase = getPlayerDmg(g.playerLv);
            let dmgObj = calculateFinalDmg(pBase, 'roll');
            let totalDmg = dmgObj.val * mult;
            dealDmg(totalDmg, false, dmgObj.crit);
            createClickEffect(canvas.width/2, canvas.height/2 - 50, "💥", "#ff0000");
        } else { 
            let duration = SKILL_DB[i].dur;
            // 技能持續時間成長
            if (i === 2 || i === 3) duration = 30 + (currentLvl - 1);
            g.activeTimers[i] = duration;
        }
        
        g.skillCds[i] = SKILL_DB[i].cd; // 90s
        updateUI();
    }
}

// === 轉職視窗邏輯 ===

function openJobSelection(idx) {
    const h = g.helpers[idx];
    const modal = document.getElementById('job-modal');
    const container = document.getElementById('job-options');
    const title = document.getElementById('modal-title');
    
    container.innerHTML = '';
    modal.style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';

    const TARGET_DB = (h.series === 'MAPLE') ? JOB_MAPLE : JOB_RO;

    // 楓葉 Lv.1
    if (h.series === 'MAPLE' && !h.camp) {
        title.innerText = "選擇職業陣營 (Lv.1)";
        Object.keys(TARGET_DB).forEach(camp => {
            createBtn(container, camp, () => {
                h.camp = camp;
                closeAllModals();
                updateUI();
                save();
            });
        });
        return;
    }

    // Lv.10 一轉
    if (!h.grp || !h.job1) {
        title.innerText = "一轉選擇 (Lv.10)";
        if (h.series === 'RO') {
            Object.keys(TARGET_DB).forEach(camp => {
                let campData = TARGET_DB[camp];
                Object.keys(campData).forEach(grp => {
                    let job1Name = campData[grp][1];
                    createBtn(container, `${camp} - ${job1Name}`, () => {
                        h.camp = camp;
                        h.grp = grp;
                        h.job1 = job1Name;
                        finishJob(idx);
                    });
                });
            });
        } else {
            // MAPLE
            let campData = TARGET_DB[h.camp];
            Object.keys(campData).forEach(grp => {
                let job1Name = campData[grp][1];
                createBtn(container, `${grp} (${job1Name})`, () => {
                    h.grp = grp;
                    h.job1 = job1Name;
                    finishJob(idx);
                });
            });
        }
        return;
    }

    // 進階轉職 (自動導航或分支鎖定)
    let tier = 0;
    if (h.lv >= 120 && !h.job4) tier = 4;
    else if (h.lv >= 70 && !h.job3) tier = 3;
    else if (h.lv >= 30 && !h.job2) tier = 2;

    if (tier > 0) {
        title.innerText = `第 ${tier} 次轉職 (Lv.${h.lv})`;
        if (TARGET_DB[h.camp] && TARGET_DB[h.camp][h.grp] && TARGET_DB[h.camp][h.grp][tier]) {
            let choices = TARGET_DB[h.camp][h.grp][tier];
            
            // Lv.30 二轉 (需要分支鎖定檢查)
            if (tier === 2) {
                if (Array.isArray(choices)) {
                    let takenIndices = getTakenIndices(h.series, h.camp, h.grp);
                    choices.forEach((job, index) => {
                        if (!takenIndices.has(index)) {
                            createBtn(container, job, () => {
                                h.job2 = job;
                                finishJob(idx);
                            });
                        }
                    });
                } else {
                    createBtn(container, `${choices} (確認)`, () => {
                        h.job2 = choices;
                        finishJob(idx);
                    });
                }
            } 
            // Lv.70 & Lv.120 (自動導航：根據 Index 繼承)
            else {
                // 找出當前職業在上一階陣列中的 Index
                let prevTierList = TARGET_DB[h.camp][h.grp][tier - 1];
                let currentJob = h['job' + (tier - 1)];
                let index = Array.isArray(prevTierList) ? prevTierList.indexOf(currentJob) : 0;
                
                // 防呆：如果找不到索引或目標陣列不存在，給一個預設行為
                let targetJob = "";
                if (Array.isArray(choices) && index !== -1) {
                    targetJob = choices[index];
                } else if (!Array.isArray(choices)) {
                    targetJob = choices;
                }

                if (targetJob) {
                    createBtn(container, `進化為 ${targetJob}`, () => {
                        h['job'+tier] = targetJob;
                        finishJob(idx);
                    });
                } else {
                    container.innerHTML = '<div style="padding:10px;">無法判定轉職路線</div>';
                }
            }
        }
    } else {
        container.innerHTML = '<div style="padding:10px; color:#aaa;">暫無可用轉職</div>';
    }
}

// 取得該職業群中已被佔用的分支索引 (用於二轉鎖定)
function getTakenIndices(series, camp, grp) {
    let taken = new Set();
    g.helpers.forEach(h => {
        if (h.series === series && h.camp === camp && h.grp === grp) {
            if (h.job2) {
                const db = (series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
                const tier2List = db[camp][grp][2];
                if (Array.isArray(tier2List)) {
                    const index = tier2List.indexOf(h.job2);
                    if (index !== -1) taken.add(index);
                }
            }
        }
    });
    return taken;
}

function createBtn(parent, text, onClick) {
    const btn = document.createElement('button');
    btn.className = 'job-opt';
    btn.innerText = text;
    btn.onclick = onClick;
    parent.appendChild(btn);
}

function finishJob(idx) {
    closeAllModals();
    
    // 轉職後檢查是否新增角色 (僅限 Tier 4)
    const h = g.helpers[idx];
    if (h.job4) {
        const currentSeriesCount = g.helpers.filter(helper => helper.series === h.series).length;
        const maxSeriesCount = getSeriesMaxBranches(h.series);
        
        if (currentSeriesCount < maxSeriesCount) {
            g.helpers.push({ 
                id: Date.now(), 
                lv: 1, 
                name: "初學者", 
                series: h.series, 
                camp: "", 
                grp: "", 
                job1: "" 
            });
            setTimeout(() => alert(`新的 ${h.series === 'MAPLE' ? '楓葉' : '仙境'} 初學者加入了隊伍！`), 200);
        }
    }

    updateUI();
    save();
    createClickEffect(canvas.width/2, canvas.height/2, "✨ 轉職成功!", "#ffcc00");
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('overlay').style.display = 'none';
    
    setTimeout(() => {
        resizeCanvas();
        refreshMonster(); 
    }, 300);
}

function switchTab(tabIndex) {
    document.querySelectorAll('.tab').forEach((t, i) => {
        t.classList.toggle('active', i === tabIndex);
    });
    document.querySelectorAll('.panel-content').forEach((p, i) => {
        p.classList.toggle('active', i === tabIndex);
    });
}

function handleInput(e) {
    if (!canvas) return;
    
    let pBase = getPlayerDmg(g.playerLv);
    let dmgObj = calculateFinalDmg(pBase, 'roll');
    dealDmg(dmgObj.val, true, dmgObj.crit);
    
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    let txt = f(dmgObj.val);
    let col = "#fff";
    if (dmgObj.crit) {
        txt = "CRIT! " + txt;
        col = "#ffcc00";
    }
    createClickEffect(x, y, txt, col);
}

function createClickEffect(x, y, text, color) {
    clickEffects.push({
        x: x + (Math.random()*20 - 10),
        y: y,
        text: text,
        life: 1.0,
        color: color || "#fff",
        vy: -2
    });
}

function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const dt = timestamp - lastTime;
    lastTime = timestamp;

    if (ctx && canvas) {
        // 1. 繪製背景 (最底層)
        if (bgLoaded) {
            // 使用 object-cover 效果繪製背景
            let ratio = Math.max(canvas.width / bgImage.width, canvas.height / bgImage.height);
            let centerShift_x = (canvas.width - bgImage.width * ratio) / 2;
            let centerShift_y = (canvas.height - bgImage.height * ratio) / 2;
            ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, centerShift_x, centerShift_y, bgImage.width * ratio, bgImage.height * ratio);
            
            // 疊加一層半透明黑，讓文字更清楚
            ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            // 背景沒載好時的備案
            ctx.fillStyle = "#2c3e50";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // 2. 確保數據安全
        if (isNaN(mHp) || mHp <= 0) {
            refreshMonster();
        }

        let cx = canvas.width / 2;
        let cy = canvas.height / 2;
        let size = 100;

        // 3. 繪製怪物
        let isBoss = g.stage % 10 === 0;
        if (isBoss) {
            ctx.beginPath();
            ctx.arc(cx, cy, size/1.1, 0, Math.PI*2);
            ctx.fillStyle = "rgba(255, 0, 0, 0.3)"; // Boss 光環
            ctx.fill();
        }

        ctx.fillStyle = isBoss ? "#ff4444" : "#ffaa00";
        ctx.fillRect(cx - size/2, cy - size/2, size, size); // 怪物本體

        // 怪物眼睛
        ctx.fillStyle = "#fff";
        ctx.fillRect(cx - 25, cy - 10, 15, 15);
        ctx.fillRect(cx + 10, cy - 10, 15, 15);
        ctx.fillStyle = "#000";
        ctx.fillRect(cx - 20, cy - 5, 5, 5);
        ctx.fillRect(cx + 15, cy - 5, 5, 5);

        // 4. 繪製主角 (藍色方塊，站在怪物左前方)
        let playerX = cx - 120;
        let playerY = cy + 50;
        ctx.fillStyle = "#00ccff";
        ctx.fillRect(playerX, playerY, 40, 40);
        // 主角眼睛
        ctx.fillStyle = "#fff";
        ctx.fillRect(playerX + 25, playerY + 5, 10, 10); 

        // 5. 繪製血條
        let hpPct = Math.max(0, mHp / mMaxHp);
        let barW = 160;
        let barH = 16;
        let barY = cy - size/2 - 30;
        
        // 血條背景
        ctx.fillStyle = "#333";
        ctx.fillRect(cx - barW/2, barY, barW, barH);
        // 血條前景
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(cx - barW/2, barY, barW * hpPct, barH);
        // 血條邊框
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - barW/2, barY, barW, barH);

        // 血量文字 (顯示數值)
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 3;
        ctx.fillText(`${f(Math.ceil(mHp))} / ${f(mMaxHp)}`, cx, barY + 12);
        ctx.shadowBlur = 0;

        // 6. 繪製助手 (繞圈圈)
        let t = Date.now() / 1000;
        if (g.helpers) {
            g.helpers.forEach((h, i) => {
                let radius = 80 + (i % 5) * 30;
                let speed = 0.8 + (i * 0.1);
                let angle = t * speed + i;
                let hx = cx + Math.cos(angle) * radius;
                let hy = cy + Math.sin(angle) * radius;

                // 楓葉系: 藍色, RO系: 粉色
                ctx.fillStyle = (h.series === 'RO') ? "#ff88dd" : "#00e5ff"; 
                ctx.beginPath();
                ctx.arc(hx, hy, 8, 0, Math.PI*2);
                ctx.fill();
                // 助手邊框
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        }

        // 7. 繪製飄字特效
        for (let i = clickEffects.length - 1; i >= 0; i--) {
            let fx = clickEffects[i];
            fx.y += fx.vy;
            fx.life -= 0.02;

            ctx.globalAlpha = Math.max(0, fx.life);
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = fx.color;
            ctx.shadowColor = "black";
            ctx.shadowBlur = 2;
            ctx.fillText(fx.text, fx.x, fx.y);
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;

            if (fx.life <= 0) clickEffects.splice(i, 1);
        }
    }

    requestAnimationFrame(gameLoop);
}
