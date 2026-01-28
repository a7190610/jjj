/**
 * RPG Artale - UI 介面與事件處理 (v27 - Auto Advance & Locking)
 * 負責：DOM 操作, Canvas 繪圖, Modal 邏輯(含分支鎖定), 自動轉職
 */

let canvas, ctx;
let clickEffects = [];
let loopsStarted = false;

window.onload = function() {
    initGame();
};

function initGame() {
    canvas = document.getElementById('gameCanvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        canvas.addEventListener('mousedown', handleInput);
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault(); 
            for (let i = 0; i < e.touches.length; i++) {
                handleInput({ clientX: e.touches[i].clientX, clientY: e.touches[i].clientY });
            }
        }, {passive: false});
    }

    if (typeof load === 'function') load();

    // 初始檢查 (雙系列開局)
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
    }
    
    if (typeof refreshMonster === 'function') refreshMonster();

    if (!loopsStarted) {
        setInterval(tick, 1000); 
        requestAnimationFrame(gameLoop); 
        loopsStarted = true;
    }

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
    setText('coin-txt', f(g.coins));
    setText('dia-txt', f(g.diamonds));
    setText('sp-txt', g.sp);
    setText('sp-max-txt', getMaxSP(g.playerLv));
    setText('stage-txt', g.stage);
    setText('dps-txt', f(currentDps));

    let pBase = getPlayerDmg(g.playerLv);
    let avgClick = calculateFinalDmg(pBase, 'avg');
    setText('pAtk-title', `⚔️ 主角攻擊力 (Lv.${g.playerLv})`);
    setText('pAtk-val', `單次點擊: ${f(avgClick)}`);

    let pCost = Math.floor(getPlayerCost(g.playerLv));
    let pBtn = document.getElementById('pUpBtn');
    if (pBtn) {
        pBtn.innerText = `升級 💰${f(pCost)}`;
        pBtn.disabled = g.coins < pCost;
    }

    updateSkillTimersDisplay();
    renderHelpers();
    renderRelics();
    renderSkills();
}

function setText(id, val) {
    let el = document.getElementById(id);
    if (el) el.innerText = val;
}

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

    g.helpers.forEach((h, i) => {
        let actionNeeded = false;
        let isAutoEvolve = false; // 是否為自動轉職階段 (Lv.70, Lv.120)
        let nextJobName = "";

        // --- 檢查轉職狀態 ---
        
        // 1. 開局選擇 (Lv.1 / Lv.10) - 需要彈窗
        if (h.series === 'MAPLE') {
            if (!h.camp) actionNeeded = true;
            else if (h.lv >= 10 && (!h.grp || !h.job1)) actionNeeded = true;
        } else if (h.series === 'RO') {
            if (h.lv >= 10 && (!h.camp || !h.grp || !h.job1)) actionNeeded = true;
        }

        // 2. 二轉選擇 (Lv.30) - 需要彈窗 (分支鎖定點)
        if (!actionNeeded && h.lv >= 30 && !h.job2) {
            actionNeeded = true;
        }

        // 3. 三轉 (Lv.70) & 四轉 (Lv.120) - 自動導航
        if (!actionNeeded) {
            if (h.lv >= 70 && !h.job3) {
                actionNeeded = true;
                isAutoEvolve = true;
                nextJobName = getNextJobName(h, 3);
            } else if (h.lv >= 120 && !h.job4) {
                actionNeeded = true;
                isAutoEvolve = true;
                nextJobName = getNextJobName(h, 4);
            }
        }

        // 顯示名稱
        let dispName = h.name; 
        if (h.series === 'MAPLE' && h.camp && !h.job1) dispName = `[${h.camp}] 初學者`;
        dispName = h.job4 || h.job3 || h.job2 || h.job1 || dispName;
        
        let tagHtml = "";
        if (h.series === 'MAPLE') tagHtml = '<span style="color:#ffaacc">[楓]</span>';
        else if (h.series === 'RO') tagHtml = '<span style="color:#ccffff">[仙]</span>';
        
        let tierMult = 1;
        if (h.job4) tierMult = 50;
        else if (h.job3) tierMult = 20;
        else if (h.job2) tierMult = 10;
        else if (h.job1) tierMult = 5;

        let cost = Math.floor(getHelperCost(h.lv, tierMult));
        let baseH = getHelperDmg(h.lv, tierMult);
        
        // 全收集加成
        let isGrandSlam = (typeof checkGrandSlam === 'function') ? checkGrandSlam() : false;
        let finalBaseH = baseH * (isGrandSlam ? 100 : 1);
        let hDps = calculateFinalDmg(finalBaseH, 'avg');

        // 按鈕文字與狀態
        let isMax = h.lv >= MAX_HELPER_LV;
        let btnDisabled = false;
        let btnText = "";
        let jobBtnHtml = "";

        if (isMax) {
            btnText = "MAX";
            btnDisabled = true;
        } else if (actionNeeded) {
            if (isAutoEvolve) {
                // 自動轉職模式：按鈕變成 "進化: [職業名]"
                btnText = `進化: ${nextJobName}`;
                // 花費依然存在 (升級費用)
                if (g.coins < cost) btnDisabled = true; 
            } else {
                // 需要彈窗選擇
                btnText = "需轉職";
                btnDisabled = true;
                jobBtnHtml = `<button class="job-btn" onclick="openJobSelection(${i})">轉職!</button>`;
            }
        } else {
            // 一般升級
            btnText = `💰${f(cost)}`;
            if (g.coins < cost) btnDisabled = true;
        }

        // 這裡的 upgradeH 同時處理升級與自動轉職
        let clickAction = `onclick="upgradeH(${i})"`;

        let html = `
        <div class="item">
            <div class="info">
                <strong>${tagHtml} ${dispName} <span style="color:#ffcc00">Lv.${h.lv}</span></strong>
                <small>DPS: ${f(hDps)} ${tierMult > 1 ? `(x${tierMult})` : ''}</small>
            </div>
            <div class="btn-group">
                ${jobBtnHtml}
                <button class="up-btn" ${clickAction} ${btnDisabled ? 'disabled' : ''}>${btnText}</button>
            </div>
        </div>`;
        area.innerHTML += html;
    });
}

// 輔助：預測下一階職業名稱 (用於按鈕顯示)
function getNextJobName(h, targetTier) {
    const db = (h.series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
    if (!db[h.camp] || !db[h.camp][h.grp]) return "???";
    
    const prevTierList = db[h.camp][h.grp][targetTier - 1];
    const targetTierList = db[h.camp][h.grp][targetTier];
    
    if (!Array.isArray(prevTierList) || !Array.isArray(targetTierList)) return "進化"; // 防呆

    // 找到當前職業在上一階陣列中的 Index
    const currentJob = h['job' + (targetTier - 1)];
    const index = prevTierList.indexOf(currentJob);
    
    if (index !== -1 && targetTierList[index]) {
        return targetTierList[index];
    }
    return "進化";
}

function renderRelics() {
    const area = document.getElementById('relic-area');
    if (!area) return;
    area.innerHTML = '';
    RELIC_DB.forEach((r, i) => {
        let lv = g.rLvs[i] || 0;
        let isOwned = lv > 0;
        let cost = (lv === 0) ? 10 : lv * 5;
        if (!isOwned) {
            area.innerHTML += `<div class="item" style="opacity:0.5; filter:grayscale(1);"><div class="info"><strong>???</strong><small>擊敗BOSS解鎖</small></div></div>`;
        } else {
            area.innerHTML += `<div class="item"><div class="info"><strong>${r.n} <span style="color:#00e5ff">(Lv.${lv})</span></strong><b>${r.d}</b></div><button class="up-btn" onclick="upR(${i})" ${g.diamonds < cost ? 'disabled' : ''}>💎${cost}</button></div>`;
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
        let currentLvl = g.sLvs[i];
        let coinCost = (currentLvl + 1) * 500;
        let spCost = getSkillCost(i, Math.max(1, currentLvl));
        let btnText = isL ? `${g.skillCds[i]}s` : "施放";
        let btnStyle = isActive ? 'border: 2px solid #55ff55; color:#55ff55;' : (isL ? 'opacity: 0.7;' : '');
        let desc = s.d; 
        if (i===0) desc = `傷害 ${100+(currentLvl>0?currentLvl-1:0)} 倍`;
        if (i===1) desc = `爆擊率 ${(currentLvl*0.5).toFixed(1)}% (30s)`;
        if (i===2) desc = `傷害 ${(2+(currentLvl>0?currentLvl-1:0)*0.5).toFixed(1)}倍 (30s)`;
        if (i===3) desc = `傷害翻倍 (30s)`;
        let isMax = currentLvl >= 100;
        area.innerHTML += `<div class="item"><div class="info"><strong>${s.n} (Lv.${currentLvl}${isMax?' MAX':''})</strong><small>${desc}</small><b style="color:#ff5555; font-size:11px;">消耗: ${spCost} SP</b></div><div class="btn-group"><button class="skill-btn" style="${btnStyle}" onclick="useS(${i})" ${currentLvl==0||isL||(g.sp<spCost&&!isActive)?'disabled':''}>${g.sp<spCost&&!isActive&&!isL?'SP不足':btnText}</button><button class="up-btn" onclick="upS(${i})" ${isMax||g.coins<coinCost?'disabled':''}>${isMax?'已滿':'升級 💰'+f(coinCost)}</button></div></div>`;
    });
}

// === 升級與自動轉職邏輯 ===

function upgradeH(i) {
    const h = g.helpers[i];
    
    // 檢查是否為需要彈窗的轉職階段 (Lv.1, Lv.10, Lv.30)
    let manualJobNeeded = false;
    if (h.series === 'MAPLE') {
        if (!h.camp) manualJobNeeded = true;
        else if (h.lv >= 10 && (!h.grp || !h.job1)) manualJobNeeded = true;
    } else if (h.series === 'RO') {
        if (h.lv >= 10 && (!h.camp || !h.grp || !h.job1)) manualJobNeeded = true;
    }
    if (h.lv >= 30 && !h.job2) manualJobNeeded = true;

    if (manualJobNeeded) {
        return openJobSelection(i);
    }

    // 檢查是否為自動轉職階段 (Lv.70, Lv.120)
    // 注意：按鈕文字已經變成 "進化: xxx"，點擊時仍會進來這裡
    let autoEvolveTier = 0;
    if (h.lv >= 70 && !h.job3) autoEvolveTier = 3;
    else if (h.lv >= 120 && !h.job4) autoEvolveTier = 4;

    if (autoEvolveTier > 0) {
        // 執行自動轉職
        if (!performAutoEvolve(i, autoEvolveTier)) {
            // 如果錢不夠或失敗
            return; 
        }
        // 自動轉職成功後，不提升等級，或者同時提升等級？
        // 依照慣例，轉職本身消耗一次升級費用
    } else {
        // 一般升級
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
}

// 執行自動轉職 (Tier 3 & 4)
function performAutoEvolve(idx, targetTier) {
    const h = g.helpers[idx];
    
    // 計算費用 (使用當前等級費用)
    let tierMult = (targetTier === 3) ? 10 : 20; // 使用上一階的倍率來算這次轉職費
    let cost = Math.floor(getHelperCost(h.lv, tierMult));
    
    if (g.coins < cost) return false; // 錢不夠

    const db = (h.series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
    const prevTierList = db[h.camp][h.grp][targetTier - 1];
    const targetTierList = db[h.camp][h.grp][targetTier];
    
    // 找出索引
    const currentJob = h['job' + (targetTier - 1)];
    const index = prevTierList.indexOf(currentJob);
    
    if (index !== -1 && targetTierList[index]) {
        // 扣錢
        g.coins -= cost;
        // 賦予新職業
        h['job' + targetTier] = targetTierList[index];
        
        // 特效
        createClickEffect(canvas.width/2, canvas.height/2, `✨ ${h['job'+targetTier]}!`, "#ffcc00");
        
        // 如果是四轉，檢查是否新增角色
        if (targetTier === 4) {
            checkAndAddNextHelper(h.series);
        }
        
        updateUI();
        save();
        return true;
    }
    return false;
}

// 檢查是否需要新增下一隻助手
function checkAndAddNextHelper(series) {
    // 1. 計算該系列總分支數
    const db = (series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
    let totalBranches = 0;
    for (const camp in db) {
        for (const grp in db[camp]) {
            if (db[camp][grp][4]) {
                totalBranches += Array.isArray(db[camp][grp][4]) ? db[camp][grp][4].length : 1;
            }
        }
    }
    
    // 2. 計算場上該系列助手數量
    const currentCount = g.helpers.filter(h => h.series === series).length;
    
    // 3. 若還有空位則新增
    if (currentCount < totalBranches) {
        g.helpers.push({ 
            id: Date.now(), 
            lv: 1, 
            name: "初學者", 
            series: series, 
            camp: "", 
            grp: "", 
            job1: "" 
        });
        setTimeout(() => alert(`新的 ${series === 'MAPLE' ? '楓葉' : '仙境'} 初學者加入了隊伍！`), 300);
    }
}

// === 轉職視窗 (Tier 1 & 2) ===

function openJobSelection(idx) {
    const h = g.helpers[idx];
    const modal = document.getElementById('job-modal');
    const container = document.getElementById('job-options');
    const title = document.getElementById('modal-title');
    container.innerHTML = '';
    modal.style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';

    const TARGET_DB = (h.series === 'MAPLE') ? JOB_MAPLE : JOB_RO;

    // Maple Lv.1 Camp
    if (h.series === 'MAPLE' && !h.camp) {
        title.innerText = "選擇職業陣營 (Lv.1)";
        Object.keys(TARGET_DB).forEach(camp => {
            createBtn(container, camp, () => {
                h.camp = camp;
                closeAllModals(); updateUI(); save();
            });
        });
        return;
    }

    // Lv.10 Job1
    if (!h.grp || !h.job1) {
        title.innerText = "一轉選擇 (Lv.10)";
        // Maple: Grp only (Camp fixed)
        if (h.series === 'MAPLE') {
            let campData = TARGET_DB[h.camp];
            Object.keys(campData).forEach(grp => {
                let job1Name = campData[grp][1];
                createBtn(container, `${grp} (${job1Name})`, () => {
                    h.grp = grp; h.job1 = job1Name; finishJob(idx);
                });
            });
        } 
        // RO: Camp + Grp + Job1
        else {
            Object.keys(TARGET_DB).forEach(camp => {
                let campData = TARGET_DB[camp];
                Object.keys(campData).forEach(grp => {
                    let job1Name = campData[grp][1];
                    createBtn(container, `${camp} - ${job1Name}`, () => {
                        h.camp = camp; h.grp = grp; h.job1 = job1Name; finishJob(idx);
                    });
                });
            });
        }
        return;
    }

    // Lv.30 Job2 (關鍵鎖定)
    if (h.lv >= 30 && !h.job2) {
        title.innerText = "二轉選擇 (Lv.30)";
        let choices = TARGET_DB[h.camp][h.grp][2];
        let takenIndices = getTakenIndices(h.series, h.camp, h.grp);
        
        if (Array.isArray(choices)) {
            choices.forEach((job, index) => {
                // 檢查該 index 是否已被佔用
                if (!takenIndices.has(index)) {
                    createBtn(container, job, () => {
                        h.job2 = job;
                        finishJob(idx);
                    });
                }
            });
        }
        return;
    }
}

// 取得該職業群中已被佔用的分支索引
function getTakenIndices(series, camp, grp) {
    let taken = new Set();
    g.helpers.forEach(h => {
        // 同系列、同陣營、同群組
        if (h.series === series && h.camp === camp && h.grp === grp) {
            // 檢查該助手是否已經選了二轉
            if (h.job2) {
                const db = (series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
                const tier2List = db[camp][grp][2];
                const index = tier2List.indexOf(h.job2);
                if (index !== -1) taken.add(index);
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
    updateUI();
    save();
    createClickEffect(canvas.width/2, canvas.height/2, "✨ 轉職成功!", "#ffcc00");
}

function upgradePlayer() {
    let c = Math.floor(getPlayerCost(g.playerLv));
    if (g.coins >= c) {
        g.coins -= c;
        g.playerLv++;
        updateUI(); save();
    }
}

function upS(i) {
    if (g.sLvs[i] >= 100) return;
    let cost = (g.sLvs[i] + 1) * 500;
    if (g.coins >= cost) { g.coins -= cost; g.sLvs[i]++; updateUI(); save(); }
}

function upR(i) {
    let lv = g.rLvs[i];
    let cost = (lv === 0) ? 10 : lv * 5;
    if (g.diamonds >= cost) { g.diamonds -= cost; g.rLvs[i]++; updateUI(); save(); }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('overlay').style.display = 'none';
    setTimeout(() => { resizeCanvas(); refreshMonster(); }, 300);
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
    if (dmgObj.crit) { txt = "CRIT! " + txt; col = "#ffcc00"; }
    createClickEffect(x, y, txt, col);
}

function createClickEffect(x, y, text, color) {
    clickEffects.push({ x: x + (Math.random()*20 - 10), y: y, text: text, life: 1.0, color: color || "#fff", vy: -2 });
}

function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const dt = timestamp - lastTime;
    lastTime = timestamp;
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (isNaN(mHp) || mHp <= 0) refreshMonster();
        let cx = canvas.width / 2;
        let cy = canvas.height / 2;
        let size = 100;
        let isBoss = g.stage % 10 === 0;
        if (isBoss) { ctx.beginPath(); ctx.arc(cx, cy, size/1.1, 0, Math.PI*2); ctx.fillStyle = "rgba(255, 0, 0, 0.15)"; ctx.fill(); }
        ctx.fillStyle = isBoss ? "#ff4444" : "#ffaa00"; ctx.fillRect(cx - size/2, cy - size/2, size, size);
        ctx.fillStyle = "#fff"; ctx.fillRect(cx - 25, cy - 10, 15, 15); ctx.fillRect(cx + 10, cy - 10, 15, 15);
        ctx.fillStyle = "#000"; ctx.fillRect(cx - 20, cy - 5, 5, 5); ctx.fillRect(cx + 15, cy - 5, 5, 5);
        let hpPct = Math.max(0, mHp / mMaxHp);
        let barW = 140; let barH = 12; let barY = cy - size/2 - 25;
        ctx.fillStyle = "#333"; ctx.fillRect(cx - barW/2, barY, barW, barH);
        ctx.fillStyle = "#00ff00"; ctx.fillRect(cx - barW/2, barY, barW * hpPct, barH);
        ctx.strokeStyle = "#fff"; ctx.strokeRect(cx - barW/2, barY, barW, barH);
        ctx.fillStyle = "#fff"; ctx.font = "bold 12px Arial"; ctx.textAlign = "center"; ctx.shadowColor = "black"; ctx.shadowBlur = 2;
        ctx.fillText(`${f(Math.ceil(mHp))} / ${f(mMaxHp)}`, cx, barY - 5); ctx.shadowBlur = 0;
        let t = Date.now() / 1000;
        if (g.helpers) {
            g.helpers.forEach((h, i) => {
                let radius = 80 + (i % 5) * 25; let speed = 0.8 + (i * 0.1); let angle = t * speed + i;
                let hx = cx + Math.cos(angle) * radius; let hy = cy + Math.sin(angle) * radius;
                ctx.fillStyle = (h.series === 'RO') ? "#ff88dd" : "#00e5ff"; 
                ctx.beginPath(); ctx.arc(hx, hy, 6, 0, Math.PI*2); ctx.fill();
            });
        }
        for (let i = clickEffects.length - 1; i >= 0; i--) {
            let fx = clickEffects[i]; fx.y += fx.vy; fx.life -= 0.02;
            ctx.globalAlpha = Math.max(0, fx.life); ctx.font = "bold 20px Arial"; ctx.fillStyle = fx.color; ctx.fillText(fx.text, fx.x, fx.y); ctx.globalAlpha = 1;
            if (fx.life <= 0) clickEffects.splice(i, 1);
        }
    }
    requestAnimationFrame(gameLoop);
}
