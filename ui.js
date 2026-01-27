/**
 * RPG Artale - UI 介面與事件處理 (v21 - Fixed)
 * 負責：DOM 操作, Canvas 繪圖, Modal 邏輯, 事件綁定
 */

// Canvas 全域變數
let canvas, ctx;
let clickEffects = [];
let loopsStarted = false;

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

    // 2. 讀取資料
    if (typeof load === 'function') load();

    // 3. 初始檢查 (新邏輯：雙系列開局)
    // 如果 helpers 為空，初始化兩隻不同系列的初學者
    if (!g.helpers || g.helpers.length === 0) {
        g.helpers = [
            { 
                id: Date.now(), 
                lv: 1, 
                name: "初學者", 
                series: "MAPLE", // 楓葉系列
                camp: "", grp: "", job1: "" 
            },
            { 
                id: Date.now() + 100, 
                lv: 1, 
                name: "初學者", 
                series: "RO",    // 仙境系列
                camp: "", grp: "", job1: "" 
            }
        ];
    }
    
    if (typeof refreshMonster === 'function') refreshMonster();

    // 4. 啟動迴圈
    if (!loopsStarted) {
        setInterval(tick, 1000); // Core Tick
        requestAnimationFrame(gameLoop); // Animation Loop
        loopsStarted = true;
    }

    // 5. 初始渲染
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

    // 渲染各區塊
    renderHelpers();
    renderRelics();
    renderSkills();
}

function setText(id, val) {
    let el = document.getElementById(id);
    if (el) el.innerText = val;
}

// === 渲染助手列表 ===
function renderHelpers() {
    const area = document.getElementById('helper-list');
    if (!area) return;
    area.innerHTML = '';

    g.helpers.forEach((h, i) => {
        // 判斷是否需要操作 (轉職)
        let actionNeeded = false;
        
        // 檢查順序：系列 -> 陣營 -> 職業群/一轉 -> 二轉 -> 三轉 -> 四轉
        if (!h.series) actionNeeded = true;
        else if (!h.camp) actionNeeded = true;
        else if (!h.grp || !h.job1) actionNeeded = true;
        else if (h.lv >= 30 && !h.job2) actionNeeded = true;
        else if (h.lv >= 60 && !h.job3) actionNeeded = true;
        else if (h.lv >= 120 && !h.job4) actionNeeded = true;

        // 顯示名稱邏輯 (優先顯示最高階職業)
        let dispName = h.job4 || h.job3 || h.job2 || h.job1 || h.grp || h.camp || h.name;
        
        // 系列標籤顏色
        let tagHtml = "";
        if (h.series === 'MAPLE') tagHtml = '<span style="color:#ffaacc">[楓]</span>';
        else if (h.series === 'RO') tagHtml = '<span style="color:#ccffff">[仙]</span>';
        else tagHtml = '<span style="color:#888">[?]</span>';
        
        let cost = Math.floor(getHelperCost(h.lv));
        
        // 計算該助手傷害 (DPS)
        let mult = h.job4?50 : h.job3?20 : h.job2?5 : 1;
        let baseH = getHelperDmg(h.lv, mult);
        let hDps = calculateFinalDmg(baseH, 'avg');

        // 按鈕狀態
        let isMax = h.lv >= MAX_HELPER_LV;
        let btnDisabled = actionNeeded || g.coins < cost || isMax;
        let btnText = isMax ? "MAX" : (actionNeeded ? "需轉職" : `💰${f(cost)}`);
        
        // 轉職按鈕 HTML (如果需要操作，顯示 "進化!")
        let jobBtnHtml = actionNeeded 
            ? `<button class="job-btn" onclick="openJobSelection(${i})">進化!</button>` 
            : '';

        let html = `
        <div class="item">
            <div class="info">
                <strong>${tagHtml} ${dispName} <span style="color:#ffcc00">Lv.${h.lv}</span></strong>
                <small>DPS: ${f(hDps)}</small>
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
        let lv = g.rLvs[i] || 0;
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
        let isL = skillCds[i] > 0;
        let isActive = activeTimers[i] > 0;
        let currentLvl = g.sLvs[i];
        let coinCost = (currentLvl + 1) * 500;
        let spCost = getSkillCost(i, Math.max(1, currentLvl));

        let btnText = isL ? `${skillCds[i]}s` : (isActive ? '作用中' : '施放');
        let btnStyle = isActive ? 'background:#55ff55; color:black; border-color:#00aa00;' : '';
        
        let desc = s.d; 
        if (i === 0) desc = `傷害 ${100 + (currentLvl>0?currentLvl-1:0)} 倍`;
        if (i === 1) desc = `爆擊率 ${(currentLvl*0.5).toFixed(1)}% (30s)`;
        if (i === 2) desc = `傷害 ${(2 + (currentLvl>0?currentLvl-1:0)*0.5).toFixed(1)}倍 (30s)`;
        if (i === 3) desc = `傷害翻倍 (30s)`;

        let isMax = currentLvl >= 100;

        area.innerHTML += `<div class="item">
            <div class="info">
                <strong>${s.n} (Lv.${currentLvl}${isMax?' MAX':''})</strong>
                <small>${desc}</small>
                <b style="color:#ff5555; font-size:11px;">消耗: ${spCost} SP</b>
            </div>
            <div class="btn-group">
                <button class="skill-btn" style="${btnStyle}" onclick="useS(${i})" ${currentLvl==0 || isL || g.sp<spCost?'disabled':''}>
                    ${g.sp<spCost && !isL ? 'SP不足' : btnText}
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

// 計算某系列的最大分支數 (Tier 4 職業總數)
function getSeriesMaxBranches(series) {
    const db = (series === 'MAPLE') ? JOB_MAPLE : JOB_RO;
    if (!db) return 0; // 防呆
    
    let count = 0;
    // 遍歷該系列所有陣營 (Camp)
    for (const campKey in db) {
        const camp = db[campKey];
        // 遍歷該陣營所有職業群 (Group)
        for (const grpKey in camp) {
            const grp = camp[grpKey];
            // 檢查 Tier 4 的定義
            if (grp[4]) {
                // 如果是陣列，長度即為分支數；如果是字串，則為 1
                count += Array.isArray(grp[4]) ? grp[4].length : 1;
            }
        }
    }
    return count;
}

function upgradeH(i) {
    const h = g.helpers[i];
    
    // 檢查轉職狀態
    if (!h.series || !h.camp || !h.grp || !h.job1 ||
        (h.lv >= 30 && !h.job2) ||
        (h.lv >= 60 && !h.job3) ||
        (h.lv >= 120 && !h.job4)) {
        return openJobSelection(i); 
    }
    
    if (h.lv >= MAX_HELPER_LV) return;

    let cost = Math.floor(getHelperCost(h.lv));
    if (g.coins >= cost) {
        g.coins -= cost;
        h.lv++;
        
        // === 新增角色邏輯 (Lv.120) ===
        // 規則：如果該助手升到 120 級，且該系列還有分支未選，則新增一隻同系列的初學者
        if (h.lv === 120) {
            // 1. 計算目前場上該系列的角色數量
            const currentSeriesCount = g.helpers.filter(helper => helper.series === h.series).length;
            // 2. 計算該系列總共可用的分支數量
            const maxSeriesCount = getSeriesMaxBranches(h.series);
            
            // 3. 還有空位才新增
            if (currentSeriesCount < maxSeriesCount) {
                // 決定名字 (雖然顯示會被 series 蓋過，但保持資料完整)
                const newName = "初學者";
                g.helpers.push({ 
                    id: Date.now(), 
                    lv: 1, 
                    name: newName, 
                    series: h.series, // 繼承系列
                    camp: "", 
                    grp: "", 
                    job1: "" 
                });
            }
        }
        
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
    
    // 需有足夠SP 且 無冷卻 且 技能已學習
    if (g.sp >= spCost && skillCds[i] == 0 && g.sLvs[i] > 0) {
        g.sp -= spCost;
        let currentLvl = Math.max(1, g.sLvs[i]);

        if (i === 0) { // 慧心一擊
            let mult = 100 + (currentLvl - 1);
            let pBase = getPlayerDmg(g.playerLv);
            let dmgObj = calculateFinalDmg(pBase, 'roll');
            let totalDmg = dmgObj.val * mult;
            dealDmg(totalDmg, false, dmgObj.crit);
            createClickEffect(canvas.width/2, canvas.height/2 - 50, "💥", "#ff0000");
        } else { // Buff 類
            let duration = SKILL_DB[i].dur;
            if (i === 2 || i === 3) duration = 30 + (currentLvl - 1);
            activeTimers[i] = duration;
        }
        skillCds[i] = SKILL_DB[i].cd;
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

    // 1. 選擇系列 (如果資料缺失，理論上 initGame 會補，但為了舊存檔防呆)
    if (!h.series) {
        title.innerText = "選擇宇宙系列";
        Object.keys(SERIES_DB).forEach(key => {
            createBtn(container, SERIES_DB[key], () => {
                h.series = key;
                openJobSelection(idx); // 下一步
            });
        });
        return;
    }

    // 取得對應的職業資料庫
    const TARGET_DB = (h.series === 'MAPLE') ? JOB_MAPLE : JOB_RO;

    // 2. 選擇陣營 (Camp)
    if (!h.camp) {
        title.innerText = "選擇職業陣營";
        Object.keys(TARGET_DB).forEach(camp => {
            createBtn(container, camp, () => {
                h.camp = camp;
                openJobSelection(idx);
            });
        });
        return;
    }

    // 3. 選擇職業群 (Group) -> 同時綁定 Job1
    if (!h.grp || !h.job1) {
        title.innerText = "選擇職業分支";
        let campData = TARGET_DB[h.camp];
        Object.keys(campData).forEach(grp => {
            // campData[grp][1] 是該群的一轉職業名
            let job1Name = campData[grp][1];
            createBtn(container, `${grp} (${job1Name})`, () => {
                h.grp = grp;
                h.job1 = job1Name;
                finishJob();
            });
        });
        return;
    }

    // 4. 進階轉職 (Tier 2, 3, 4)
    let tier = h.lv >= 120 ? 4 : (h.lv >= 60 ? 3 : 2);
    title.innerText = `第 ${tier} 次轉職`;
    
    // 安全性檢查
    if (TARGET_DB[h.camp] && TARGET_DB[h.camp][h.grp] && TARGET_DB[h.camp][h.grp][tier]) {
        let choices = TARGET_DB[h.camp][h.grp][tier];
        
        if (Array.isArray(choices)) {
            // 多重分支
            choices.forEach(job => {
                createBtn(container, job, () => {
                    h['job'+tier] = job;
                    finishJob();
                });
            });
        } else {
            // 單一分支 (直接點擊確認)
            createBtn(container, `${choices} (確認轉職)`, () => {
                h['job'+tier] = choices;
                finishJob();
            });
        }
    } else {
        container.innerHTML = '<div style="padding:10px; color:#aaa;">暫無可用轉職或等級不足</div>';
    }
}

function createBtn(parent, text, onClick) {
    const btn = document.createElement('button');
    btn.className = 'job-opt';
    btn.innerText = text;
    btn.onclick = onClick;
    parent.appendChild(btn);
}

function finishJob() {
    closeAllModals();
    updateUI();
    save();
    createClickEffect(canvas.width/2, canvas.height/2, "✨ 轉職成功!", "#ffcc00");
}

// === Modal 與 設定 ===

function openSettings() {
    document.getElementById('settings-modal').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('save-data-io').value = '';
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('overlay').style.display = 'none';
}

function switchTab(tabIndex) {
    document.querySelectorAll('.tab').forEach((t, i) => {
        t.classList.toggle('active', i === tabIndex);
    });
    document.querySelectorAll('.panel-content').forEach((p, i) => {
        p.classList.toggle('active', i === tabIndex);
    });
}

// === Canvas 動畫與輸入 ===

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
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let cx = canvas.width / 2;
        let cy = canvas.height / 2;
        let size = 100;

        // 1. 怪物
        let isBoss = g.stage % 10 === 0;
        if (isBoss) {
            ctx.beginPath();
            ctx.arc(cx, cy, size/1.1, 0, Math.PI*2);
            ctx.fillStyle = "rgba(255, 0, 0, 0.15)";
            ctx.fill();
        }

        ctx.fillStyle = isBoss ? "#ff4444" : "#ffaa00";
        ctx.fillRect(cx - size/2, cy - size/2, size, size); 

        // 眼睛
        ctx.fillStyle = "#fff";
        ctx.fillRect(cx - 25, cy - 10, 15, 15);
        ctx.fillRect(cx + 10, cy - 10, 15, 15);
        ctx.fillStyle = "#000";
        ctx.fillRect(cx - 20, cy - 5, 5, 5);
        ctx.fillRect(cx + 15, cy - 5, 5, 5);

        // 2. 血條
        let hpPct = Math.max(0, mHp / mMaxHp);
        let barW = 140;
        let barH = 12;
        let barY = cy - size/2 - 25;
        
        ctx.fillStyle = "#333";
        ctx.fillRect(cx - barW/2, barY, barW, barH);
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(cx - barW/2, barY, barW * hpPct, barH);
        ctx.strokeStyle = "#fff";
        ctx.strokeRect(cx - barW/2, barY, barW, barH);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 2;
        ctx.fillText(`${f(Math.ceil(mHp))} / ${f(mMaxHp)}`, cx, barY - 5);
        ctx.shadowBlur = 0;

        // 3. 助手 (區分顏色)
        let t = Date.now() / 1000;
        if (g.helpers) {
            g.helpers.forEach((h, i) => {
                let radius = 80 + (i % 5) * 25;
                let speed = 0.8 + (i * 0.1);
                let angle = t * speed + i;
                let hx = cx + Math.cos(angle) * radius;
                let hy = cy + Math.sin(angle) * radius;

                // 楓葉系: 藍色, RO系: 粉色
                ctx.fillStyle = (h.series === 'RO') ? "#ff88dd" : "#00e5ff"; 
                ctx.beginPath();
                ctx.arc(hx, hy, 6, 0, Math.PI*2);
                ctx.fill();
            });
        }

        // 4. 飄字
        for (let i = clickEffects.length - 1; i >= 0; i--) {
            let fx = clickEffects[i];
            fx.y += fx.vy;
            fx.life -= 0.02;

            ctx.globalAlpha = Math.max(0, fx.life);
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = fx.color;
            ctx.fillText(fx.text, fx.x, fx.y);
            ctx.globalAlpha = 1;

            if (fx.life <= 0) clickEffects.splice(i, 1);
        }
    }

    requestAnimationFrame(gameLoop);
}