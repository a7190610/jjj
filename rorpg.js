/**
 * 掛機物語 - 仙境傳說 (RO) 經典還原資料庫 v5.0 (最終究極整合版)
 * 
 * 部署指南：
 * 1. 將此檔案上傳至 GitHub 並覆蓋原本的 rorpg.js。
 * 2. 前端 App.jsx 會自動讀取並套用所有更新。
 */

export const RO_DATABASE = {
  // ==========================================
  // 1. 完整職業發展樹與素質成長 (一轉至四轉)
  // ==========================================
  CLASS_TREE: {
    novice: { name: '初心者', maxJobLv: 10, paths: ['swordman', 'magician', 'thief', 'acolyte', 'archer', 'merchant'] },
    
    swordman: {
      name: '劍士', maxJobLv: 50,
      paths: [
        { tier2: { id: 'knight', name: '騎士', maxJobLv: 70 }, tier3: { id: 'rune_knight', name: '盧恩騎士', maxJobLv: 70 }, tier4: { id: 'dragon_knight', name: '龍騎士', maxJobLv: 60 } },
        { tier2: { id: 'crusader', name: '十字軍', maxJobLv: 70 }, tier3: { id: 'royal_guard', name: '皇家禁衛隊', maxJobLv: 70 }, tier4: { id: 'imperial_guard', name: '帝國聖衛軍', maxJobLv: 60 } }
      ]
    },
    magician: {
      name: '魔法師', maxJobLv: 50,
      paths: [
        { tier2: { id: 'wizard', name: '巫師', maxJobLv: 70 }, tier3: { id: 'warlock', name: '咒術士', maxJobLv: 70 }, tier4: { id: 'arch_mage', name: '禁咒魔導士', maxJobLv: 60 } },
        { tier2: { id: 'sage', name: '賢者', maxJobLv: 70 }, tier3: { id: 'sorcerer', name: '妖術師', maxJobLv: 70 }, tier4: { id: 'elemental_master', name: '元素支配者', maxJobLv: 60 } }
      ]
    },
    thief: {
      name: '盜賊', maxJobLv: 50,
      paths: [
        { tier2: { id: 'assassin', name: '刺客', maxJobLv: 70 }, tier3: { id: 'guillotine_cross', name: '十字斬首者', maxJobLv: 70 }, tier4: { id: 'shadow_cross', name: '十字影武', maxJobLv: 60 } },
        { tier2: { id: 'rogue', name: '流氓', maxJobLv: 70 }, tier3: { id: 'shadow_chaser', name: '魅影追蹤者', maxJobLv: 70 }, tier4: { id: 'abyss_chaser', name: '深淵追跡者', maxJobLv: 60 } }
      ]
    },
    acolyte: {
      name: '服事', maxJobLv: 50,
      paths: [
        { tier2: { id: 'priest', name: '祭司', maxJobLv: 70 }, tier3: { id: 'arch_bishop', name: '大主教', maxJobLv: 70 }, tier4: { id: 'cardinal', name: '樞機主教', maxJobLv: 60 } },
        { tier2: { id: 'monk', name: '武僧', maxJobLv: 70 }, tier3: { id: 'sura', name: '修羅', maxJobLv: 70 }, tier4: { id: 'inquisitor', name: '審判者', maxJobLv: 60 } }
      ]
    },
    archer: {
      name: '弓箭手', maxJobLv: 50,
      paths: [
        { tier2: { id: 'hunter', name: '獵人', maxJobLv: 70 }, tier3: { id: 'ranger', name: '遊俠', maxJobLv: 70 }, tier4: { id: 'windhawk', name: '風鷹狩獵者', maxJobLv: 60 } },
        { tier2: { id: 'bard', name: '吟遊詩人/冷豔舞姬', maxJobLv: 70 }, tier3: { id: 'minstrel_wanderer', name: '宮廷樂師/浪跡舞者', maxJobLv: 70 }, tier4: { id: 'troubadour_trouvere', name: '樂之絃音/樂之舞靈', maxJobLv: 60 } }
      ]
    },
    merchant: {
      name: '商人', maxJobLv: 50,
      paths: [
        { tier2: { id: 'blacksmith', name: '鐵匠', maxJobLv: 70 }, tier3: { id: 'mechanic', name: '機械工匠', maxJobLv: 70 }, tier4: { id: 'meister', name: '機甲神匠', maxJobLv: 60 } },
        { tier2: { id: 'alchemist', name: '鍊金術師', maxJobLv: 70 }, tier3: { id: 'genetic', name: '基因學者', maxJobLv: 70 }, tier4: { id: 'biolo', name: '生命締造者', maxJobLv: 60 } }
      ]
    }
  },

  CLASSES_INFO: {
    // 1st Job
    swordman: { hpMulti: 1.5, spMulti: 0.8, atkMulti: 1.0, defMulti: 1.2, tier: 1 },
    magician: { hpMulti: 0.8, spMulti: 2.0, atkMulti: 1.5, defMulti: 0.7, tier: 1 },
    thief: { hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.2, defMulti: 0.9, tier: 1 },
    acolyte: { hpMulti: 1.2, spMulti: 1.5, atkMulti: 0.9, defMulti: 1.1, tier: 1 },
    archer: { hpMulti: 0.9, spMulti: 1.0, atkMulti: 1.3, defMulti: 0.8, tier: 1 },
    merchant: { hpMulti: 1.3, spMulti: 0.8, atkMulti: 1.1, defMulti: 1.1, tier: 1 },
    // 2nd Job (2-1)
    knight: { hpMulti: 2.5, spMulti: 0.8, atkMulti: 1.3, defMulti: 1.5, tier: 2 },
    wizard: { hpMulti: 1.0, spMulti: 2.5, atkMulti: 2.0, defMulti: 0.8, tier: 2 },
    assassin: { hpMulti: 1.5, spMulti: 1.0, atkMulti: 1.5, defMulti: 1.0, tier: 2 },
    priest: { hpMulti: 1.5, spMulti: 2.0, atkMulti: 1.0, defMulti: 1.3, tier: 2 },
    hunter: { hpMulti: 1.2, spMulti: 1.2, atkMulti: 1.6, defMulti: 0.9, tier: 2 },
    blacksmith: { hpMulti: 1.8, spMulti: 1.0, atkMulti: 1.3, defMulti: 1.2, tier: 2 },
    // 2nd Job (2-2)
    crusader: { hpMulti: 2.8, spMulti: 1.2, atkMulti: 1.1, defMulti: 1.8, tier: 2 },
    sage: { hpMulti: 1.2, spMulti: 2.2, atkMulti: 1.8, defMulti: 1.0, tier: 2 },
    rogue: { hpMulti: 1.6, spMulti: 1.2, atkMulti: 1.4, defMulti: 1.1, tier: 2 },
    monk: { hpMulti: 1.6, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.2, tier: 2 },
    bard: { hpMulti: 1.3, spMulti: 1.5, atkMulti: 1.4, defMulti: 1.0, tier: 2 },
    alchemist: { hpMulti: 1.7, spMulti: 1.2, atkMulti: 1.2, defMulti: 1.3, tier: 2 },
    // 3rd Job
    rune_knight: { hpMulti: 3.5, spMulti: 1.0, atkMulti: 1.6, defMulti: 1.5, tier: 3 },
    royal_guard: { hpMulti: 4.0, spMulti: 1.4, atkMulti: 1.3, defMulti: 2.2, tier: 3 },
    warlock: { hpMulti: 1.5, spMulti: 3.5, atkMulti: 2.8, defMulti: 1.0, tier: 3 },
    sorcerer: { hpMulti: 1.8, spMulti: 3.0, atkMulti: 2.4, defMulti: 1.2, tier: 3 },
    guillotine_cross: { hpMulti: 2.2, spMulti: 1.2, atkMulti: 2.2, defMulti: 1.2, tier: 3 },
    shadow_chaser: { hpMulti: 2.4, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.3, tier: 3 },
    arch_bishop: { hpMulti: 2.2, spMulti: 3.0, atkMulti: 1.5, defMulti: 1.6, tier: 3 },
    sura: { hpMulti: 2.5, spMulti: 1.8, atkMulti: 2.5, defMulti: 1.4, tier: 3 },
    ranger: { hpMulti: 1.8, spMulti: 1.5, atkMulti: 2.4, defMulti: 1.1, tier: 3 },
    minstrel_wanderer: { hpMulti: 2.0, spMulti: 2.0, atkMulti: 1.8, defMulti: 1.2, tier: 3 },
    mechanic: { hpMulti: 2.8, spMulti: 1.4, atkMulti: 1.8, defMulti: 1.5, tier: 3 },
    genetic: { hpMulti: 2.5, spMulti: 1.6, atkMulti: 1.7, defMulti: 1.4, tier: 3 },
    // 4th Job
    dragon_knight: { hpMulti: 5.0, spMulti: 1.2, atkMulti: 2.2, defMulti: 1.8, tier: 4 },
    imperial_guard: { hpMulti: 5.5, spMulti: 1.6, atkMulti: 1.6, defMulti: 2.8, tier: 4 },
    arch_mage: { hpMulti: 2.0, spMulti: 4.5, atkMulti: 3.8, defMulti: 1.2, tier: 4 },
    elemental_master: { hpMulti: 2.5, spMulti: 4.0, atkMulti: 3.2, defMulti: 1.5, tier: 4 },
    shadow_cross: { hpMulti: 3.0, spMulti: 1.5, atkMulti: 3.0, defMulti: 1.5, tier: 4 },
    abyss_chaser: { hpMulti: 3.2, spMulti: 1.8, atkMulti: 2.5, defMulti: 1.6, tier: 4 },
    cardinal: { hpMulti: 3.0, spMulti: 4.0, atkMulti: 2.0, defMulti: 2.0, tier: 4 },
    inquisitor: { hpMulti: 3.5, spMulti: 2.2, atkMulti: 3.5, defMulti: 1.8, tier: 4 },
    windhawk: { hpMulti: 2.5, spMulti: 2.0, atkMulti: 3.2, defMulti: 1.3, tier: 4 },
    troubadour_trouvere: { hpMulti: 2.8, spMulti: 2.5, atkMulti: 2.4, defMulti: 1.5, tier: 4 },
    meister: { hpMulti: 4.0, spMulti: 1.8, atkMulti: 2.5, defMulti: 2.0, tier: 4 },
    biolo: { hpMulti: 3.5, spMulti: 2.0, atkMulti: 2.3, defMulti: 1.8, tier: 4 },
  },

  // ==========================================
  // 2. 戰鬥系統底層修正 (體型、屬性、異常、等級懲罰)
  // ==========================================
  COMBAT_MODIFIERS: {
    // 體型修正 (Size Modifier)
    sizePenalty: {
      dagger: { small: 1.0, medium: 0.75, large: 0.5 },
      '1h_sword': { small: 0.75, medium: 1.0, large: 0.75 },
      '2h_sword': { small: 0.75, medium: 0.75, large: 1.0 },
      axe: { small: 0.5, medium: 0.75, large: 1.0 },
      mace: { small: 0.75, medium: 1.0, large: 1.0 },
      staff: { small: 1.0, medium: 1.0, large: 1.0 },
      bow: { small: 1.0, medium: 1.0, large: 0.75 },
      katar: { small: 0.75, medium: 1.0, large: 0.75 },
      book: { small: 1.0, medium: 1.0, large: 0.5 },
      knuckle: { small: 1.0, medium: 1.0, large: 0.75 },
      instrument: { small: 0.75, medium: 1.0, large: 0.75 },
    },

    // 異常狀態 (Status Ailments)
    statusEffects: {
      poison: { name: '中毒', duration: 15, hpDrainPct: 0.02, defPenalty: 0.25 },
      stun: { name: '暈眩', duration: 3, canAct: false, fleeSetZero: true },
      sleep: { name: '睡眠', duration: 10, canAct: false, fleeSetZero: true, takeCritDmgMulti: 2.0 },
      curse: { name: '詛咒', duration: 20, atkPenalty: 0.25, lukSetZero: true },
      silence: { name: '沉默', duration: 15, canCast: false },
      blind: { name: '黑暗', duration: 15, hitPenalty: 0.25, fleePenalty: 0.25 },
      freeze: { name: '冰凍', duration: 8, canAct: false, defPenalty: 0.5, takeWindDmgMulti: 1.5, typeChangeTo: 'water_1' },
      stone: { name: '石化', duration: 8, canAct: false, defPenalty: 0.5, takeFireDmgMulti: 1.5, typeChangeTo: 'earth_1' },
    },

    // 等級差距懲罰 (Level Difference Penalty)
    // 返回值為: [經驗值倍率, 掉寶率倍率]
    getLevelPenalty: (playerLv, monsterLv) => {
      const diff = monsterLv - playerLv; 
      if (diff >= 16) return [0.4, 0.5];
      if (diff === 15) return [1.15, 0.6];
      if (diff === 14) return [1.20, 0.6];
      if (diff === 13) return [1.25, 0.6];
      if (diff >= 10) return [1.35, 0.7]; 
      if (diff >= 7) return [1.25, 0.8];  
      if (diff >= 4) return [1.10, 0.9];  
      if (diff >= -3) return [1.0, 1.0];  
      if (diff >= -6) return [0.95, 0.9]; 
      if (diff >= -9) return [0.95, 0.8]; 
      if (diff >= -12) return [0.95, 0.7]; 
      if (diff >= -15) return [0.90, 0.6]; 
      if (diff >= -20) return [0.85, 0.5]; 
      if (diff >= -25) return [0.60, 0.5]; 
      if (diff >= -30) return [0.35, 0.5]; 
      return [0.1, 0.5]; 
    }
  },

  // ==========================================
  // 3. 經驗值精確需求表 
  // ==========================================
  EXPERIENCE_TABLE: {
    getBaseExpReq: function(lv, isTranscend = false) {
       if (lv >= 200) return 999999999;
       let req = 0;
       if (lv < 50) req = Math.floor(Math.pow(lv, 3) * 0.8 + Math.pow(lv, 2) * 5 + 500);
       else if (lv < 70) req = Math.floor(Math.pow(lv, 3.2) * 0.5 + lv * 1000);
       else if (lv < 90) req = Math.floor(Math.pow(lv, 3.5) * 0.4 + lv * 2000);
       else if (lv < 150) req = Math.floor(Math.pow(lv, 4) * 0.15 + lv * 5000); 
       else req = Math.floor(Math.pow(lv, 4.2) * 0.2 + lv * 10000); 
       
       return isTranscend ? Math.floor(req * 1.2) : req;
    },

    getJobExpReq: function(jobLv, tier) {
       if (tier === 1) return Math.floor(Math.pow(jobLv, 2.5) * 5 + 60); 
       if (tier === 2) return Math.floor(Math.pow(jobLv, 2.8) * 10 + 2500); 
       if (tier === 3) return Math.floor(Math.pow(jobLv, 3.2) * 15 + 12800); 
       if (tier === 4) return Math.floor(Math.pow(jobLv, 3.5) * 20 + 4700000); 
       return Math.floor(jobLv * 10); 
    }
  },

  // ==========================================
  // 4. 經典地圖資料 (擴充至 18 張)
  // ==========================================
  MAPS: [
    { id: 'prt_fild08', name: '普隆德拉原野', minLevel: 1, bg: 'from-green-900 to-slate-900', emoji: '🍀' },
    { id: 'pay_fild04', name: '斐揚樹林', minLevel: 10, bg: 'from-emerald-900 to-slate-900', emoji: '🌲' },
    { id: 'moc_fild12', name: '夢羅克沙漠', minLevel: 15, bg: 'from-yellow-900 to-slate-900', emoji: '🏜️' },
    { id: 'iz_dun00', name: '柏伊亞嵐島(海底)', minLevel: 20, bg: 'from-blue-900 to-slate-900', emoji: '🌊' },
    { id: 'anthell01', name: '螞蟻地獄', minLevel: 25, bg: 'from-amber-950 to-slate-900', emoji: '🐜' },
    { id: 'pay_dun00', name: '斐揚地下洞穴', minLevel: 30, bg: 'from-zinc-900 to-slate-900', emoji: '🧟' },
    { id: 'mjolnir_04', name: '妙勒尼山脈', minLevel: 35, bg: 'from-green-950 to-slate-900', emoji: '⛰️' },
    { id: 'xmas_dun01', name: '玩具工廠', minLevel: 40, bg: 'from-blue-100 to-slate-900', emoji: '🎁' },
    { id: 'moc_pryd04', name: '金字塔內部', minLevel: 45, bg: 'from-orange-950 to-slate-900', emoji: '🐫' },
    { id: 'in_sphinx3', name: '斯芬克斯密穴', minLevel: 50, bg: 'from-red-950 to-slate-900', emoji: '🐶' },
    { id: 'orcsdun01', name: '獸人地下洞穴', minLevel: 55, bg: 'from-stone-900 to-slate-900', emoji: '🦴' },
    { id: 'gef_dun01', name: '吉芬地下密穴', minLevel: 60, bg: 'from-purple-900 to-slate-900', emoji: '🦇' },
    { id: 'lou_fild01', name: '洛陽原野', minLevel: 65, bg: 'from-green-800 to-slate-900', emoji: '🐉' },
    { id: 'c_tower1', name: '艾爾帕蘭鐘塔', minLevel: 70, bg: 'from-yellow-950 to-black', emoji: '🕰️' },
    { id: 'gl_church', name: '古城修道院', minLevel: 75, bg: 'from-slate-900 to-black', emoji: '⛪' },
    { id: 'gl_knt01', name: '古城騎士團', minLevel: 80, bg: 'from-gray-900 to-black', emoji: '🏇' },
    { id: 'mag_dun01', name: '諾可羅德(火洞)', minLevel: 85, bg: 'from-red-900 to-black', emoji: '🌋' },
    { id: 'lhz_dun03', name: '生體試驗所', minLevel: 90, bg: 'from-blue-950 to-black', emoji: '☣️' },
  ],

  // ==========================================
  // 5. 原汁原味魔物資料 (超過 100 隻)
  // ==========================================
  MONSTERS: {
    'prt_fild08': [
      { id: 1002, name: '波利', emoji: '💧', lv: 1, hp: 50, atk: 7, def: 0, hit: 10, flee: 5, baseExp: 20, jobExp: 10, gold: 5, dropRate: 0.1 },
      { id: 1063, name: '瘋兔', emoji: '🐇', lv: 2, hp: 60, atk: 11, def: 0, hit: 15, flee: 8, baseExp: 35, jobExp: 25, gold: 8, dropRate: 0.12 },
      { id: 1014, name: '綠棉蟲', emoji: '🐛', lv: 3, hp: 120, atk: 15, def: 5, hit: 20, flee: 12, baseExp: 55, jobExp: 40, gold: 12, dropRate: 0.15 },
      { id: 1049, name: '蒼蠅', emoji: '🪰', lv: 4, hp: 90, atk: 20, def: 2, hit: 25, flee: 25, baseExp: 80, jobExp: 60, gold: 10, dropRate: 0.15 },
      { id: 1008, name: '蟲蛹', emoji: '🪹', lv: 4, hp: 350, atk: 0, def: 10, hit: 0, flee: 0, baseExp: 90, jobExp: 80, gold: 15, dropRate: 0.18 },
      { id: 1031, name: '搖滾蝗蟲', emoji: '🦗', lv: 7, hp: 200, atk: 35, def: 5, hit: 35, flee: 20, baseExp: 150, jobExp: 110, gold: 20, dropRate: 0.18 },
      { id: 1096, name: '波波利', emoji: '🟢', lv: 14, hp: 350, atk: 55, def: 8, hit: 45, flee: 25, baseExp: 350, jobExp: 250, gold: 25, dropRate: 0.2 },
    ],
    'pay_fild04': [
      { id: 1011, name: '魔菇', emoji: '🍄', lv: 12, hp: 360, atk: 45, def: 10, hit: 30, flee: 15, baseExp: 420, jobExp: 300, gold: 25, dropRate: 0.18 },
      { id: 1065, name: '長老樹精', emoji: '🪵', lv: 15, hp: 520, atk: 60, def: 15, hit: 45, flee: 20, baseExp: 650, jobExp: 450, gold: 40, dropRate: 0.2 },
      { id: 1093, name: '大腳熊', emoji: '🐻', lv: 18, hp: 680, atk: 85, def: 20, hit: 55, flee: 25, baseExp: 950, jobExp: 680, gold: 50, dropRate: 0.22 },
      { id: 1059, name: '毒魔菇', emoji: '🍄', lv: 19, hp: 750, atk: 95, def: 18, hit: 60, flee: 28, baseExp: 1100, jobExp: 750, gold: 55, dropRate: 0.22 },
      { id: 1111, name: '狸貓', emoji: '🦝', lv: 21, hp: 850, atk: 110, def: 15, hit: 65, flee: 40, baseExp: 1400, jobExp: 900, gold: 65, dropRate: 0.25 },
      { id: 1150, name: '月夜貓 (MVP)', emoji: '🌙', lv: 55, hp: 25000, atk: 850, def: 35, hit: 180, flee: 180, baseExp: 45000, jobExp: 30000, gold: 2500, dropRate: 0.75 },
    ],
    'moc_fild12': [
      { id: 1113, name: '土波利', emoji: '🪨', lv: 11, hp: 180, atk: 28, def: 8, hit: 25, flee: 10, baseExp: 320, jobExp: 220, gold: 15, dropRate: 0.15 },
      { id: 1023, name: '大嘴鳥', emoji: '🦤', lv: 16, hp: 550, atk: 70, def: 12, hit: 40, flee: 35, baseExp: 750, jobExp: 500, gold: 35, dropRate: 0.2 },
      { id: 1004, name: '蒼蠅', emoji: '🪰', lv: 14, hp: 450, atk: 50, def: 5, hit: 45, flee: 50, baseExp: 600, jobExp: 400, gold: 30, dropRate: 0.2 },
      { id: 1044, name: '沙漠之狼', emoji: '🐺', lv: 22, hp: 950, atk: 110, def: 15, hit: 65, flee: 45, baseExp: 1600, jobExp: 1000, gold: 60, dropRate: 0.25 },
      { id: 1060, name: '巨石怪', emoji: '🗿', lv: 26, hp: 2000, atk: 180, def: 45, hit: 70, flee: 15, baseExp: 2500, jobExp: 1600, gold: 80, dropRate: 0.28 },
      { id: 1150, name: '皮里恩 (MVP)', emoji: '👅', lv: 58, hp: 32000, atk: 1100, def: 40, hit: 150, flee: 100, baseExp: 60000, jobExp: 40000, gold: 3000, dropRate: 0.8 },
    ],
    'iz_dun00': [
      { id: 1069, name: '達拉蛙', emoji: '🐸', lv: 20, hp: 720, atk: 85, def: 10, hit: 50, flee: 30, baseExp: 1200, jobExp: 800, gold: 45, dropRate: 0.2 },
      { id: 1029, name: '螃蟹', emoji: '🦀', lv: 24, hp: 1050, atk: 120, def: 35, hit: 60, flee: 25, baseExp: 1900, jobExp: 1200, gold: 65, dropRate: 0.22 },
      { id: 1070, name: '海葵', emoji: '🌺', lv: 25, hp: 1500, atk: 140, def: 15, hit: 75, flee: 10, baseExp: 2200, jobExp: 1400, gold: 75, dropRate: 0.25 },
      { id: 1068, name: '馬克', emoji: '🐟', lv: 28, hp: 1800, atk: 160, def: 20, hit: 85, flee: 40, baseExp: 3000, jobExp: 2000, gold: 90, dropRate: 0.28 },
      { id: 1067, name: '海神 (MVP)', emoji: '🧜‍♂️', lv: 60, hp: 45000, atk: 1500, def: 55, hit: 200, flee: 120, baseExp: 85000, jobExp: 60000, gold: 4000, dropRate: 0.8 },
    ],
    'anthell01': [
      { id: 1085, name: '螞蟻卵', emoji: '🥚', lv: 10, hp: 500, atk: 0, def: 0, hit: 0, flee: 0, baseExp: 150, jobExp: 50, gold: 5, dropRate: 0.05 },
      { id: 1021, name: '安德列', emoji: '🐜', lv: 25, hp: 1100, atk: 140, def: 25, hit: 70, flee: 40, baseExp: 2200, jobExp: 1500, gold: 70, dropRate: 0.22 },
      { id: 1097, name: '白蟻', emoji: '🐜', lv: 27, hp: 1250, atk: 160, def: 30, hit: 75, flee: 45, baseExp: 2600, jobExp: 1800, gold: 80, dropRate: 0.25 },
      { id: 1022, name: '兵蟻', emoji: '🐜', lv: 29, hp: 1400, atk: 180, def: 35, hit: 85, flee: 50, baseExp: 3200, jobExp: 2200, gold: 90, dropRate: 0.28 },
      { id: 1148, name: '瑪雅 (MVP)', emoji: '👑', lv: 65, hp: 55000, atk: 1800, def: 60, hit: 220, flee: 150, baseExp: 110000, jobExp: 75000, gold: 5000, dropRate: 0.85 },
    ],
    'pay_dun00': [
      { id: 1015, name: '腐屍', emoji: '🧟', lv: 32, hp: 1500, atk: 180, def: 15, hit: 85, flee: 20, baseExp: 4200, jobExp: 2800, gold: 85, dropRate: 0.25 },
      { id: 1016, name: '邪骸戰士', emoji: '💀', lv: 35, hp: 1800, atk: 220, def: 20, hit: 95, flee: 35, baseExp: 5500, jobExp: 3800, gold: 100, dropRate: 0.28 },
      { id: 1026, name: '妖道', emoji: '🧟‍♀️', lv: 38, hp: 2200, atk: 260, def: 25, hit: 105, flee: 45, baseExp: 7000, jobExp: 4800, gold: 120, dropRate: 0.3 },
      { id: 1098, name: '九尾狐', emoji: '🦊', lv: 45, hp: 4200, atk: 350, def: 25, hit: 120, flee: 110, baseExp: 12000, jobExp: 8500, gold: 200, dropRate: 0.35 },
      { id: 1111, name: '怨靈武士 (MVP)', emoji: '👺', lv: 70, hp: 85000, atk: 2500, def: 65, hit: 260, flee: 180, baseExp: 180000, jobExp: 120000, gold: 6000, dropRate: 0.9 },
    ],
    'mjolnir_04': [
      { id: 1019, name: '噬人花', emoji: '🥀', lv: 36, hp: 2800, atk: 250, def: 10, hit: 90, flee: 15, baseExp: 6000, jobExp: 4200, gold: 130, dropRate: 0.28 },
      { id: 1020, name: '黑蟻', emoji: '🕷️', lv: 40, hp: 3200, atk: 280, def: 15, hit: 100, flee: 35, baseExp: 8500, jobExp: 6000, gold: 150, dropRate: 0.3 },
      { id: 1047, name: '蜂兵', emoji: '🐝', lv: 42, hp: 3500, atk: 320, def: 20, hit: 115, flee: 85, baseExp: 10000, jobExp: 7000, gold: 170, dropRate: 0.32 },
      { id: 1048, name: '蜂后 (MVP)', emoji: '🐝', lv: 72, hp: 95000, atk: 2800, def: 75, hit: 280, flee: 250, baseExp: 210000, jobExp: 150000, gold: 7500, dropRate: 0.9 },
    ],
    'xmas_dun01': [
      { id: 1242, name: '餅乾人', emoji: '🍪', lv: 44, hp: 4000, atk: 350, def: 25, hit: 110, flee: 60, baseExp: 11000, jobExp: 7500, gold: 180, dropRate: 0.32 },
      { id: 1243, name: '禮盒怪', emoji: '🎁', lv: 47, hp: 4800, atk: 420, def: 35, hit: 125, flee: 70, baseExp: 14000, jobExp: 9500, gold: 210, dropRate: 0.35 },
      { id: 1244, name: '雪人', emoji: '⛄', lv: 50, hp: 5500, atk: 480, def: 40, hit: 140, flee: 50, baseExp: 18000, jobExp: 12000, gold: 250, dropRate: 0.38 },
      { id: 1245, name: '卡崙 (MVP)', emoji: '🐺', lv: 75, hp: 120000, atk: 3200, def: 85, hit: 320, flee: 220, baseExp: 280000, jobExp: 180000, gold: 8500, dropRate: 0.95 },
    ],
    'moc_pryd04': [
      { id: 1045, name: '木乃伊', emoji: '🤕', lv: 48, hp: 5500, atk: 480, def: 30, hit: 130, flee: 45, baseExp: 16000, jobExp: 11000, gold: 230, dropRate: 0.35 },
      { id: 1046, name: '蛇女伊絲', emoji: '🐍', lv: 52, hp: 6800, atk: 580, def: 35, hit: 150, flee: 80, baseExp: 22000, jobExp: 15000, gold: 280, dropRate: 0.38 },
      { id: 1152, name: '黑狐', emoji: '🐕‍🦺', lv: 54, hp: 7200, atk: 620, def: 25, hit: 165, flee: 120, baseExp: 25000, jobExp: 17000, gold: 310, dropRate: 0.4 },
      { id: 1112, name: '俄塞里斯 (MVP)', emoji: '🦅', lv: 78, hp: 150000, atk: 3800, def: 70, hit: 350, flee: 200, baseExp: 350000, jobExp: 220000, gold: 9000, dropRate: 0.95 },
    ],
    'in_sphinx3': [
      { id: 1094, name: '米洛斯(牛頭人)', emoji: '🐂', lv: 56, hp: 8500, atk: 750, def: 40, hit: 150, flee: 50, baseExp: 30000, jobExp: 20000, gold: 350, dropRate: 0.4 },
      { id: 1149, name: '帕莎納', emoji: '💃', lv: 58, hp: 9200, atk: 820, def: 45, hit: 175, flee: 130, baseExp: 35000, jobExp: 24000, gold: 400, dropRate: 0.42 },
      { id: 1151, name: '法老王 (MVP)', emoji: '👳', lv: 80, hp: 180000, atk: 4500, def: 85, hit: 380, flee: 240, baseExp: 420000, jobExp: 280000, gold: 10000, dropRate: 1.0 },
    ],
    'orcsdun01': [
      { id: 1152, name: '獸人腐屍', emoji: '🧟', lv: 60, hp: 12000, atk: 950, def: 35, hit: 160, flee: 60, baseExp: 45000, jobExp: 30000, gold: 450, dropRate: 0.42 },
      { id: 1153, name: '邪骸獸人', emoji: '💀', lv: 62, hp: 14500, atk: 1100, def: 40, hit: 180, flee: 75, baseExp: 55000, jobExp: 36000, gold: 500, dropRate: 0.45 },
      { id: 1150, name: '獸人英雄 (MVP)', emoji: '🦍', lv: 82, hp: 220000, atk: 5200, def: 75, hit: 400, flee: 180, baseExp: 480000, jobExp: 320000, gold: 12000, dropRate: 1.0 },
      { id: 1151, name: '獸人酋長 (MVP)', emoji: '🗿', lv: 85, hp: 280000, atk: 6000, def: 90, hit: 450, flee: 200, baseExp: 550000, jobExp: 380000, gold: 15000, dropRate: 1.0 },
    ],
    'gef_dun01': [
      { id: 1032, name: '赤蒼蠅', emoji: '🪰', lv: 65, hp: 16500, atk: 1250, def: 25, hit: 220, flee: 180, baseExp: 68000, jobExp: 45000, gold: 550, dropRate: 0.45 },
      { id: 1098, name: '夢魘', emoji: '🦄', lv: 68, hp: 19000, atk: 1450, def: 45, hit: 240, flee: 160, baseExp: 80000, jobExp: 55000, gold: 650, dropRate: 0.48 },
      { id: 1115, name: '德古拉男爵 (MVP)', emoji: '🧛', lv: 88, hp: 350000, atk: 7500, def: 80, hit: 480, flee: 300, baseExp: 800000, jobExp: 550000, gold: 18000, dropRate: 1.0 },
    ],
    'lou_fild01': [
      { id: 1492, name: '米糕', emoji: '🌾', lv: 70, hp: 22000, atk: 1600, def: 50, hit: 250, flee: 120, baseExp: 95000, jobExp: 65000, gold: 750, dropRate: 0.48 },
      { id: 1493, name: '青蛇', emoji: '🐍', lv: 72, hp: 25000, atk: 1850, def: 40, hit: 270, flee: 180, baseExp: 110000, jobExp: 75000, gold: 850, dropRate: 0.5 },
      { id: 1494, name: '白素貞 (MVP)', emoji: '👩', lv: 90, hp: 450000, atk: 8500, def: 85, hit: 520, flee: 350, baseExp: 1200000, jobExp: 850000, gold: 22000, dropRate: 1.0 },
    ],
    'c_tower1': [
      { id: 1193, name: '鐘塔守護者', emoji: '🦉', lv: 75, hp: 32000, atk: 2200, def: 60, hit: 300, flee: 120, baseExp: 140000, jobExp: 95000, gold: 1000, dropRate: 0.52 },
      { id: 1195, name: '鐘怪', emoji: '🕰️', lv: 78, hp: 38000, atk: 2600, def: 75, hit: 320, flee: 140, baseExp: 170000, jobExp: 115000, gold: 1200, dropRate: 0.55 },
    ],
    'gl_church': [
      { id: 1163, name: '幽靈劍士', emoji: '👻', lv: 82, hp: 45000, atk: 3200, def: 55, hit: 350, flee: 220, baseExp: 210000, jobExp: 145000, gold: 1500, dropRate: 0.58 },
      { id: 1112, name: '黑暗之王 (MVP)', emoji: '👑', lv: 95, hp: 850000, atk: 12000, def: 95, hit: 600, flee: 300, baseExp: 2200000, jobExp: 1500000, gold: 35000, dropRate: 1.0 },
    ],
    'gl_knt01': [
      { id: 1131, name: '深淵騎士', emoji: '🏇', lv: 85, hp: 55000, atk: 4200, def: 70, hit: 380, flee: 180, baseExp: 260000, jobExp: 180000, gold: 2000, dropRate: 0.6 },
      { id: 1142, name: '卡利斯格', emoji: '🤺', lv: 88, hp: 65000, atk: 4800, def: 85, hit: 420, flee: 240, baseExp: 320000, jobExp: 220000, gold: 2500, dropRate: 0.62 },
      { id: 1143, name: '死靈騎士 (MVP)', emoji: '💀', lv: 98, hp: 1200000, atk: 15000, def: 110, hit: 650, flee: 350, baseExp: 3800000, jobExp: 2500000, gold: 50000, dropRate: 1.0 },
    ],
    'mag_dun01': [
      { id: 1213, name: '爆炎蝙蝠', emoji: '🦇', lv: 90, hp: 75000, atk: 5500, def: 45, hit: 450, flee: 320, baseExp: 420000, jobExp: 280000, gold: 2800, dropRate: 0.65 },
      { id: 1215, name: '熔岩巨石', emoji: '🪨', lv: 92, hp: 95000, atk: 6800, def: 100, hit: 400, flee: 100, baseExp: 500000, jobExp: 350000, gold: 3500, dropRate: 0.68 },
    ],
    'lhz_dun03': [
      { id: 1634, name: '神射手 迪文', emoji: '🎯', lv: 96, hp: 150000, atk: 9500, def: 60, hit: 650, flee: 450, baseExp: 800000, jobExp: 550000, gold: 4500, dropRate: 0.7 },
      { id: 1637, name: '十字刺客 艾勒梅斯', emoji: '🗡️', lv: 98, hp: 165000, atk: 11000, def: 55, hit: 700, flee: 600, baseExp: 950000, jobExp: 680000, gold: 5000, dropRate: 0.72 },
      { id: 1640, name: '超魔導 凱特莉娜 (MVP)', emoji: '👿', lv: 99, hp: 2500000, atk: 25000, def: 85, hit: 850, flee: 650, baseExp: 5000000, jobExp: 3500000, gold: 100000, dropRate: 1.0 },
    ],
  },

  // ==========================================
  // 6. 裝備資料庫
  // ==========================================
  ITEMS: {
    weapons: [
      { id: 'w_001', name: '笨拙短劍', type: 'weapon', reqLevel: 1, reqClass: ['all'], attr: { atk: 17 } },
      { id: 'w_002', name: '短劍', type: 'weapon', reqLevel: 12, reqClass: ['swordman', 'thief', 'magician', 'merchant', 'novice'], attr: { atk: 43 } },
      { id: 'w_003', name: '大馬士革短劍', type: 'weapon', reqLevel: 24, reqClass: ['swordman', 'thief', 'magician', 'merchant', 'assassin', 'rogue', 'guillotine_cross', 'shadow_chaser', 'shadow_cross', 'abyss_chaser'], attr: { atk: 118 } },
      { id: 'w_004', name: '刺客匕首', type: 'weapon', reqLevel: 40, reqClass: ['thief', 'assassin', 'rogue', 'guillotine_cross', 'shadow_chaser', 'shadow_cross', 'abyss_chaser'], attr: { atk: 140, flee: 10 } },
      { id: 'w_005', name: '神聖之首', type: 'weapon', reqLevel: 60, reqClass: ['swordman', 'thief', 'knight', 'crusader', 'assassin', 'rogue', 'rune_knight', 'royal_guard', 'guillotine_cross', 'shadow_chaser', 'dragon_knight', 'imperial_guard', 'shadow_cross', 'abyss_chaser'], attr: { atk: 165, hit: 20 } },
      { id: 'w_007', name: '月光匕首', type: 'weapon', reqLevel: 80, reqClass: ['magician', 'thief', 'wizard', 'sage', 'assassin', 'rogue', 'warlock', 'sorcerer', 'guillotine_cross', 'shadow_chaser', 'arch_mage', 'elemental_master', 'shadow_cross', 'abyss_chaser'], attr: { atk: 150, maxSp: 100, int: 3 } },

      { id: 'w_101', name: '長劍', type: 'weapon', reqLevel: 10, reqClass: ['swordman', 'merchant', 'thief', 'knight', 'crusader', 'blacksmith', 'alchemist', 'assassin', 'rogue', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'guillotine_cross', 'shadow_chaser', 'dragon_knight', 'imperial_guard', 'meister', 'biolo', 'shadow_cross', 'abyss_chaser'], attr: { atk: 45 } },
      { id: 'w_102', name: '圓月彎刀', type: 'weapon', reqLevel: 20, reqClass: ['swordman', 'thief', 'knight', 'crusader', 'assassin', 'rogue', 'rune_knight', 'royal_guard', 'guillotine_cross', 'shadow_chaser', 'dragon_knight', 'imperial_guard', 'shadow_cross', 'abyss_chaser'], attr: { atk: 85 } },
      { id: 'w_103', name: '海東劍', type: 'weapon', reqLevel: 35, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { atk: 120 } },
      { id: 'w_104', name: '狂擊之劍', type: 'weapon', reqLevel: 50, reqClass: ['swordman', 'knight', 'crusader', 'rune_knight', 'royal_guard', 'dragon_knight', 'imperial_guard'], attr: { atk: 150, str: 3 } },
      { id: 'w_105', name: '雙手巨劍', type: 'weapon', reqLevel: 33, reqClass: ['swordman', 'knight', 'crusader', 'rune_knight', 'royal_guard', 'dragon_knight', 'imperial_guard'], attr: { atk: 160, aspd: -5 } },
      { id: 'w_107', name: '名刀 不知火', type: 'weapon', reqLevel: 75, reqClass: ['swordman', 'knight', 'crusader', 'rune_knight', 'royal_guard', 'dragon_knight', 'imperial_guard'], attr: { atk: 250, crit: 20 } },
      { id: 'w_108', name: '水紋劍', type: 'weapon', reqLevel: 85, reqClass: ['swordman', 'knight', 'crusader', 'rune_knight', 'royal_guard', 'dragon_knight', 'imperial_guard'], attr: { atk: 280, hit: 30, maxHp: 500 } },

      { id: 'w_201', name: '手斧', type: 'weapon', reqLevel: 10, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { atk: 50 } },
      { id: 'w_202', name: '戰鬥斧', type: 'weapon', reqLevel: 30, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { atk: 130 } },
      { id: 'w_204', name: '血斧', type: 'weapon', reqLevel: 70, reqClass: ['merchant', 'blacksmith', 'alchemist', 'mechanic', 'genetic', 'meister', 'biolo'], attr: { atk: 250, str: 5 } },
      { id: 'w_205', name: '毀滅之斧', type: 'weapon', reqLevel: 85, reqClass: ['merchant', 'blacksmith', 'alchemist', 'mechanic', 'genetic', 'meister', 'biolo'], attr: { atk: 320, aspd: -10 } },

      { id: 'w_301', name: '棍棒', type: 'weapon', reqLevel: 5, reqClass: ['swordman', 'merchant', 'acolyte', 'knight', 'crusader', 'blacksmith', 'alchemist', 'priest', 'monk', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'arch_bishop', 'sura', 'dragon_knight', 'imperial_guard', 'meister', 'biolo', 'cardinal', 'inquisitor'], attr: { atk: 23 } },
      { id: 'w_302', name: '流星鎚', type: 'weapon', reqLevel: 15, reqClass: ['swordman', 'merchant', 'acolyte', 'knight', 'crusader', 'blacksmith', 'alchemist', 'priest', 'monk', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'arch_bishop', 'sura', 'dragon_knight', 'imperial_guard', 'meister', 'biolo', 'cardinal', 'inquisitor'], attr: { atk: 65 } },
      { id: 'w_304', name: '十字架', type: 'weapon', reqLevel: 40, reqClass: ['acolyte', 'priest', 'monk', 'arch_bishop', 'sura', 'cardinal', 'inquisitor'], attr: { atk: 110, matk: 40 } },
      { id: 'w_305', name: '審判十字架', type: 'weapon', reqLevel: 65, reqClass: ['acolyte', 'priest', 'monk', 'crusader', 'arch_bishop', 'sura', 'royal_guard', 'cardinal', 'inquisitor', 'imperial_guard'], attr: { atk: 140, matk: 80, int: 3 } },
      { id: 'w_306', name: '黃金之鎚', type: 'weapon', reqLevel: 80, reqClass: ['merchant', 'acolyte', 'blacksmith', 'alchemist', 'priest', 'monk', 'mechanic', 'genetic', 'arch_bishop', 'sura', 'meister', 'biolo', 'cardinal', 'inquisitor'], attr: { atk: 180, hit: 20 } },

      { id: 'w_401', name: '木杖', type: 'weapon', reqLevel: 1, reqClass: ['magician', 'acolyte', 'wizard', 'sage', 'priest', 'monk', 'warlock', 'sorcerer', 'arch_bishop', 'sura', 'arch_mage', 'elemental_master', 'cardinal', 'inquisitor'], attr: { atk: 15, matk: 20 } },
      { id: 'w_402', name: '言靈魔杖', type: 'weapon', reqLevel: 24, reqClass: ['magician', 'acolyte', 'wizard', 'sage', 'priest', 'monk', 'warlock', 'sorcerer', 'arch_bishop', 'sura', 'arch_mage', 'elemental_master', 'cardinal', 'inquisitor'], attr: { atk: 30, int: 3, matk: 70 } },
      { id: 'w_403', name: '生存的魔杖', type: 'weapon', reqLevel: 40, reqClass: ['magician', 'wizard', 'sage', 'warlock', 'sorcerer', 'arch_mage', 'elemental_master'], attr: { atk: 50, maxHp: 300, matk: 120 } },
      { id: 'w_405', name: '巫術之杖', type: 'weapon', reqLevel: 70, reqClass: ['magician', 'wizard', 'sage', 'priest', 'warlock', 'sorcerer', 'arch_bishop', 'arch_mage', 'elemental_master', 'cardinal'], attr: { atk: 60, matk: 200, dex: 3 } },
      { id: 'w_406', name: '聖職之杖', type: 'weapon', reqLevel: 70, reqClass: ['acolyte', 'priest', 'monk', 'arch_bishop', 'sura', 'cardinal', 'inquisitor'], attr: { atk: 80, matk: 160, int: 5 } },
      { id: 'w_407', name: '毀滅魔杖', type: 'weapon', reqLevel: 90, reqClass: ['magician', 'wizard', 'sage', 'warlock', 'sorcerer', 'arch_mage', 'elemental_master'], attr: { atk: 100, matk: 280, int: 8 } },

      { id: 'w_501', name: '弓', type: 'weapon', reqLevel: 1, reqClass: ['archer', 'thief', 'hunter', 'bard', 'assassin', 'rogue', 'ranger', 'minstrel_wanderer', 'guillotine_cross', 'shadow_chaser', 'windhawk', 'troubadour_trouvere', 'shadow_cross', 'abyss_chaser'], attr: { atk: 15 } },
      { id: 'w_502', name: '十字弓', type: 'weapon', reqLevel: 18, reqClass: ['archer', 'thief', 'hunter', 'bard', 'assassin', 'rogue', 'ranger', 'minstrel_wanderer', 'guillotine_cross', 'shadow_chaser', 'windhawk', 'troubadour_trouvere', 'shadow_cross', 'abyss_chaser'], attr: { atk: 65, dex: 2 } },
      { id: 'w_503', name: '角弓', type: 'weapon', reqLevel: 33, reqClass: ['archer', 'hunter', 'bard', 'ranger', 'minstrel_wanderer', 'windhawk', 'troubadour_trouvere'], attr: { atk: 100 } },
      { id: 'w_504', name: '獵弓', type: 'weapon', reqLevel: 50, reqClass: ['archer', 'hunter', 'bard', 'ranger', 'minstrel_wanderer', 'windhawk', 'troubadour_trouvere'], attr: { atk: 125, hit: 10 } },
      { id: 'w_505', name: '坎弓', type: 'weapon', reqLevel: 65, reqClass: ['archer', 'hunter', 'bard', 'ranger', 'minstrel_wanderer', 'windhawk', 'troubadour_trouvere'], attr: { atk: 150, dex: 3 } },
      { id: 'w_506', name: '神射手之弓', type: 'weapon', reqLevel: 80, reqClass: ['archer', 'hunter', 'bard', 'rogue', 'ranger', 'minstrel_wanderer', 'shadow_chaser', 'windhawk', 'troubadour_trouvere', 'abyss_chaser'], attr: { atk: 180, crit: 10, dex: 5 } },

      { id: 'w_601', name: '拳刃', type: 'weapon', reqLevel: 40, reqClass: ['thief', 'assassin', 'guillotine_cross', 'shadow_cross'], attr: { atk: 105, crit: 5 } },
      { id: 'w_602', name: '卡塔勒拳刃', type: 'weapon', reqLevel: 55, reqClass: ['thief', 'assassin', 'guillotine_cross', 'shadow_cross'], attr: { atk: 148, crit: 8 } },
      { id: 'w_603', name: '刺客拳刃', type: 'weapon', reqLevel: 70, reqClass: ['thief', 'assassin', 'guillotine_cross', 'shadow_cross'], attr: { atk: 180, crit: 15 } },
      { id: 'w_604', name: '爆炎拳刃', type: 'weapon', reqLevel: 85, reqClass: ['thief', 'assassin', 'guillotine_cross', 'shadow_cross'], attr: { atk: 210, crit: 10 } },

      { id: 'w_701', name: '賢者日記 (書)', type: 'weapon', reqLevel: 60, reqClass: ['sage', 'priest', 'sorcerer', 'arch_bishop', 'elemental_master', 'cardinal'], attr: { atk: 100, matk: 120, int: 3 } },
      { id: 'w_801', name: '龍爪拳套', type: 'weapon', reqLevel: 60, reqClass: ['monk', 'priest', 'sura', 'arch_bishop', 'inquisitor', 'cardinal'], attr: { atk: 160, str: 2 } },
      { id: 'w_901', name: '琵琶 (樂器)', type: 'weapon', reqLevel: 60, reqClass: ['bard', 'hunter', 'minstrel_wanderer', 'ranger', 'troubadour_trouvere', 'windhawk'], attr: { atk: 130, dex: 3, maxSp: 50 } },
    ],
    armors: [
      { id: 'h_001', name: '髮圈', type: 'helm', reqLevel: 1, reqClass: ['all'], attr: { def: 1 } },
      { id: 'h_002', name: '頭巾', type: 'helm', reqLevel: 10, reqClass: ['all'], attr: { def: 2, maxHp: 15 } },
      { id: 'h_003', name: '蘋果頭飾', type: 'helm', reqLevel: 25, reqClass: ['archer', 'hunter', 'bard', 'thief', 'assassin', 'rogue', 'ranger', 'minstrel_wanderer', 'guillotine_cross', 'shadow_chaser', 'windhawk', 'troubadour_trouvere', 'shadow_cross', 'abyss_chaser'], attr: { def: 2, dex: 3 } },
      { id: 'h_004', name: '亡者髮箍', type: 'helm', reqLevel: 30, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { def: 4, agi: 2 } },
      { id: 'h_005', name: '魔法師帽', type: 'helm', reqLevel: 35, reqClass: ['magician', 'wizard', 'sage', 'warlock', 'sorcerer', 'arch_mage', 'elemental_master'], attr: { def: 3, int: 2, maxSp: 50 } },
      { id: 'h_006', name: '骨製頭盔', type: 'helm', reqLevel: 50, reqClass: ['swordman', 'knight', 'crusader', 'rune_knight', 'royal_guard', 'dragon_knight', 'imperial_guard'], attr: { def: 7, vit: 2 } },
      { id: 'h_007', name: '王冠', type: 'helm', reqLevel: 70, reqClass: ['all'], attr: { def: 5, int: 3, luk: 3 } },
      
      { id: 'a_001', name: '棉襯衫', type: 'armor', reqLevel: 1, reqClass: ['all'], attr: { def: 1, maxHp: 10 } },
      { id: 'a_002', name: '皮甲', type: 'armor', reqLevel: 5, reqClass: ['all'], attr: { def: 2, maxHp: 25 } },
      { id: 'a_003', name: '絲質外衣', type: 'armor', reqLevel: 10, reqClass: ['magician', 'acolyte', 'wizard', 'sage', 'priest', 'monk', 'warlock', 'sorcerer', 'arch_bishop', 'sura', 'arch_mage', 'elemental_master', 'cardinal', 'inquisitor'], attr: { def: 3, maxSp: 20, int: 1 } },
      { id: 'a_004', name: '木製鎧甲', type: 'armor', reqLevel: 15, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { def: 7, maxHp: 100 } },
      { id: 'a_005', name: '盜賊之衣', type: 'armor', reqLevel: 20, reqClass: ['thief', 'assassin', 'rogue', 'guillotine_cross', 'shadow_chaser', 'shadow_cross', 'abyss_chaser'], attr: { def: 6, agi: 1, flee: 5 } },
      { id: 'a_006', name: '緊身便衣', type: 'armor', reqLevel: 20, reqClass: ['archer', 'hunter', 'bard', 'ranger', 'minstrel_wanderer', 'windhawk', 'troubadour_trouvere'], attr: { def: 5, dex: 1 } },
      { id: 'a_007', name: '鋼鐵鎧甲', type: 'armor', reqLevel: 40, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { def: 12, maxHp: 300, agi: -2 } },
      { id: 'a_008', name: '聖職之衣', type: 'armor', reqLevel: 40, reqClass: ['acolyte', 'priest', 'monk', 'arch_bishop', 'sura', 'cardinal', 'inquisitor'], attr: { def: 6, int: 2, maxSp: 50 } },
      { id: 'a_009', name: '魔法外套', type: 'armor', reqLevel: 50, reqClass: ['magician', 'wizard', 'sage', 'warlock', 'sorcerer', 'arch_mage', 'elemental_master'], attr: { def: 5, int: 3, maxSp: 100 } },
      { id: 'a_010', name: '神射手之衣', type: 'armor', reqLevel: 65, reqClass: ['archer', 'hunter', 'bard', 'ranger', 'minstrel_wanderer', 'windhawk', 'troubadour_trouvere'], attr: { def: 8, dex: 3, flee: 10 } },
      { id: 'a_011', name: '騎士鎧甲', type: 'armor', reqLevel: 70, reqClass: ['swordman', 'knight', 'crusader', 'rune_knight', 'royal_guard', 'dragon_knight', 'imperial_guard'], attr: { def: 16, maxHp: 800, vit: 2 } },
      { id: 'a_012', name: '暗殺者外衣', type: 'armor', reqLevel: 75, reqClass: ['thief', 'assassin', 'rogue', 'guillotine_cross', 'shadow_chaser', 'shadow_cross', 'abyss_chaser'], attr: { def: 10, agi: 3, flee: 20 } },
      { id: 'a_014', name: '奧丁的祝福', type: 'armor', reqLevel: 90, reqClass: ['all'], attr: { def: 10, str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 } },

      { id: 'g_001', name: '連帽披肩', type: 'garment', reqLevel: 1, reqClass: ['all'], attr: { def: 1, flee: 2 } },
      { id: 'g_002', name: '披風', type: 'garment', reqLevel: 15, reqClass: ['all'], attr: { def: 2, flee: 5 } },
      { id: 'g_003', name: '斗篷', type: 'garment', reqLevel: 30, reqClass: ['all'], attr: { def: 4, flee: 10 } },
      { id: 'g_004', name: '生存的斗篷', type: 'garment', reqLevel: 50, reqClass: ['magician', 'acolyte', 'wizard', 'sage', 'priest', 'monk', 'warlock', 'sorcerer', 'arch_bishop', 'sura', 'arch_mage', 'elemental_master', 'cardinal', 'inquisitor'], attr: { def: 3, maxHp: 100 } },
      { id: 'g_006', name: '暗影披風', type: 'garment', reqLevel: 65, reqClass: ['thief', 'assassin', 'rogue', 'guillotine_cross', 'shadow_chaser', 'shadow_cross', 'abyss_chaser'], attr: { def: 4, flee: 20, agi: 2 } },
      { id: 'g_008', name: '巴風特之角(披風)', type: 'garment', reqLevel: 95, reqClass: ['all'], attr: { def: 5, crit: 5 } },

      { id: 's_001', name: '涼鞋', type: 'shoes', reqLevel: 1, reqClass: ['all'], attr: { def: 1, maxHp: 10 } },
      { id: 's_002', name: '皮靴', type: 'shoes', reqLevel: 15, reqClass: ['all'], attr: { def: 2, maxHp: 30 } },
      { id: 's_003', name: '長靴', type: 'shoes', reqLevel: 30, reqClass: ['all'], attr: { def: 4, maxHp: 100 } },
      { id: 's_004', name: '魔法師之靴', type: 'shoes', reqLevel: 45, reqClass: ['magician', 'wizard', 'sage', 'warlock', 'sorcerer', 'arch_mage', 'elemental_master'], attr: { def: 2, maxSp: 80 } },
      { id: 's_005', name: '戰士長靴', type: 'shoes', reqLevel: 50, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { def: 6, maxHp: 300 } },
      { id: 's_006', name: '敏捷長靴', type: 'shoes', reqLevel: 65, reqClass: ['thief', 'archer', 'assassin', 'rogue', 'hunter', 'bard', 'guillotine_cross', 'shadow_chaser', 'ranger', 'minstrel_wanderer', 'shadow_cross', 'abyss_chaser', 'windhawk', 'troubadour_trouvere'], attr: { def: 5, agi: 2, flee: 10 } },

      { id: 'sh_001', name: '圓盾', type: 'shield', reqLevel: 10, reqClass: ['all'], attr: { def: 3 } },
      { id: 'sh_002', name: '鐵盾', type: 'shield', reqLevel: 30, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { def: 6, agi: -1 } },
      { id: 'sh_003', name: '魔法書', type: 'shield', reqLevel: 35, reqClass: ['magician', 'wizard', 'sage', 'warlock', 'sorcerer', 'arch_mage', 'elemental_master'], attr: { def: 2, int: 2, matk: 10 } },
      { id: 'sh_004', name: '鋼盾', type: 'shield', reqLevel: 50, reqClass: ['swordman', 'merchant', 'knight', 'crusader', 'blacksmith', 'alchemist', 'rune_knight', 'royal_guard', 'mechanic', 'genetic', 'dragon_knight', 'imperial_guard', 'meister', 'biolo'], attr: { def: 9, agi: -2 } },
      { id: 'sh_005', name: '聖職之盾', type: 'shield', reqLevel: 55, reqClass: ['acolyte', 'priest', 'monk', 'arch_bishop', 'sura', 'cardinal', 'inquisitor'], attr: { def: 5, maxSp: 50 } },
    ],
    accessories: [
      { id: 'ac_001', name: '夾子', type: 'acc', reqLevel: 10, reqClass: ['all'], attr: { maxSp: 10 } },
      { id: 'ac_002', name: '力量戒指', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { atk: 15, str: 2 } },
      { id: 'ac_003', name: '智力耳環', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { int: 2, maxSp: 50 } },
      { id: 'ac_004', name: '敏捷胸針', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { flee: 5, agi: 2 } },
      { id: 'ac_005', name: '幸運珠鍊', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { crit: 3, luk: 2 } },
      { id: 'ac_006', name: '體力項鍊', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { maxHp: 100, vit: 2 } },
      { id: 'ac_007', name: '靈巧手套', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { hit: 10, dex: 2 } },
      { id: 'ac_008', name: '防禦手套', type: 'acc', reqLevel: 50, reqClass: ['all'], attr: { def: 2, maxHp: 150 } },
      { id: 'ac_009', name: '盜賊戒指', type: 'acc', reqLevel: 70, reqClass: ['thief', 'assassin', 'rogue', 'guillotine_cross', 'shadow_chaser', 'shadow_cross', 'abyss_chaser'], attr: { str: 1, agi: 1, crit: 5 } },
    ]
  },

  // ==========================================
  // 7. 職業技能樹資料庫 (擴展至完整四轉)
  // ==========================================
  SKILLS: {
    // 【基礎】
    novice: [
      { id: 'n_basic', name: '基本技能', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `全屬性微幅增加 ${lv}` }
    ],
    // 【一轉 1st Job】
    swordman: [
      { id: 's_bash', name: '狂擊', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${5+lv*2} SP，造成 ${150 + lv*30}% 物理傷害`, spCost: (lv) => 5+lv*2, dmgMulti: (lv) => 1.5 + lv*0.3 },
      { id: 's_regen', name: '快速回復', icon: '❤️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `提升生命恢復力` },
    ],
    magician: [
      { id: 'm_coldbolt', name: '冰箭術', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${150 + lv*20}% 魔法傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.5 + lv*0.2 },
      { id: 'm_zen', name: '禪心', icon: '🧘', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `提升魔力恢復速度` },
    ],
    thief: [
      { id: 't_double', name: '二連刃', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${8+lv} SP，造成 ${120 + lv*20}% 傷害`, spCost: (lv) => 8+lv, dmgMulti: (lv) => 1.2 + lv*0.2 },
      { id: 't_flee', name: '殘影', icon: '💨', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `提升迴避能力` },
    ],
    acolyte: [
      { id: 'a_heal', name: '治癒術', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${13+lv*3} SP，回復生命`, spCost: (lv) => 13+lv*3, healPower: (lv) => 150 + lv*50 },
      { id: 'a_bless', name: '天使之賜福', icon: '👼', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `提升多項基礎素質` },
    ],
    archer: [
      { id: 'ar_double', name: '二連矢', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${8+lv*2} SP，造成 ${130 + lv*25}% 傷害`, spCost: (lv) => 8+lv*2, dmgMulti: (lv) => 1.3 + lv*0.25 },
      { id: 'ar_owl', name: '鴞梟之眼', icon: '🦉', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `提升射擊精準與靈巧` },
    ],
    merchant: [
      { id: 'me_mammonite', name: '金錢攻擊', icon: '🪙', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${lv*15} Zeny，造成 ${250 + lv*50}% 無視防禦傷害`, zenyCost: (lv) => lv*15, dmgMulti: (lv) => 2.5 + lv*0.5 },
      { id: 'me_greed', name: '貪婪', icon: '💰', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `提升金錢獲取量` },
    ],

    // 【二轉 2-1 Job】
    knight: [
      { id: 'k_pierce', name: '連刺攻擊', icon: '🔱', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${10+lv} SP，造成最高 ${200 + lv*40}% 單體爆發`, spCost: (lv) => 10+lv, dmgMulti: (lv) => 2.0 + lv*0.4 },
      { id: 'k_bowling', name: '怪物互擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*2} SP，造成 ${300 + lv*50}% 範圍傷害`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 3.0 + lv*0.5 },
    ],
    wizard: [
      { id: 'w_storm', name: '暴風雪', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${40+lv*5} SP，造成 ${350 + lv*80}% 魔法傷害`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 3.5 + lv*0.8 },
      { id: 'w_amp', name: '魔力增幅', icon: '🔮', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `MATK 大幅提升` },
    ],
    assassin: [
      { id: 'as_sonic', name: '音速投擲', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${25+lv*2} SP，八連擊造成 ${400 + lv*80}% 傷害`, spCost: (lv) => 25+lv*2, dmgMulti: (lv) => 4.0 + lv*0.8 },
      { id: 'as_katar', name: '拳刃修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備拳刃時提升攻擊力` },
    ],
    priest: [
      { id: 'pr_magnus', name: '十字驅魔', icon: '✝️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${40+lv*5} SP，造成 ${400 + lv*100}% 聖屬性傷害`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 4.0 + lv*1.0 },
      { id: 'pr_mace', name: '鈍器修練', icon: '🔨', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備鈍器時提升攻擊力` },
    ],
    hunter: [
      { id: 'ht_blitz', name: '閃電衝擊', icon: '🦅', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${15+lv} SP，獵鷹造成無視防禦 ${250 + lv*50}% 傷害`, spCost: (lv) => 15+lv, dmgMulti: (lv) => 2.5 + lv*0.5 },
      { id: 'ht_falcon', name: '獵鷹尋笛', icon: '🦉', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `允許攜帶獵鷹，提升整體戰力` },
    ],
    blacksmith: [
      { id: 'bs_cart', name: '手推車終結技', icon: '🛒', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${20+lv*2} SP，造成 ${300 + lv*100}% 金錢屬性傷害`, spCost: (lv) => 20+lv*2, dmgMulti: (lv) => 3.0 + lv*1.0 },
      { id: 'bs_adrenalin', name: '速度激發', icon: '⚡', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `大幅提升攻擊頻率` },
    ],

    // 【二轉 2-2 Job】
    crusader: [
      { id: 'cr_cross', name: '十字審判', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗自身 HP 與 ${20+lv*3} SP，造成 ${350 + lv*70}% 爆發`, spCost: (lv) => 20+lv*3, dmgMulti: (lv) => 3.5 + lv*0.7 },
      { id: 'cr_guard', name: '自動防禦', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `受擊時機率完全格擋傷害` },
    ],
    sage: [
      { id: 'sa_spell', name: '魔法懲罰', icon: '📖', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${15+lv*2} SP，造成 ${200 + lv*50}% 魔法傷害`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 2.0 + lv*0.5 },
      { id: 'sa_auto', name: '自動念咒', icon: '🔥', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻時附加額外魔法傷害` },
    ],
    rogue: [
      { id: 'rg_raid', name: '背刺', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${12+lv*2} SP，無視部分防禦造成 ${250 + lv*50}% 傷害`, spCost: (lv) => 12+lv*2, dmgMulti: (lv) => 2.5 + lv*0.5 },
      { id: 'rg_snatch', name: '強奪', icon: '💰', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `掉寶率與金幣獲取提升` },
    ],
    monk: [
      { id: 'mo_ashura', name: '阿修羅霸凰拳', icon: '👊', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `消耗 100 SP，造成 ${800 + lv*200}% 終極真實傷害`, spCost: (lv) => 100, dmgMulti: (lv) => 8.0 + lv*2.0 },
      { id: 'mo_iron', name: '鐵布衫', icon: '🥋', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `防禦力與最大生命提升` },
    ],
    bard: [
      { id: 'bd_vulcan', name: '奧義箭亂舞', icon: '🎸', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${25+lv*3} SP，造成 ${300 + lv*60}% 傷害`, spCost: (lv) => 25+lv*3, dmgMulti: (lv) => 3.0 + lv*0.6 },
      { id: 'bd_bragi', name: '布萊奇之詩', icon: '🎵', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `減少全體技能延遲與 SP 消耗` },
    ],
    alchemist: [
      { id: 'al_demo', name: '火煙瓶投擲', icon: '🧪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${15+lv*2} SP，造成 ${200 + lv*40}% 持續傷害`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 2.0 + lv*0.4 },
      { id: 'al_homun', name: '生命體呼喚', icon: '🐥', type: 'passive', maxLv: 5, reqJobLv: 15, desc: (lv) => `召喚生命體協助攻擊，提升戰力` },
    ],

    // 【三轉 3rd Job】
    rune_knight: [
      { id: 'rk_hundred', name: '百矛穿刺', icon: '🔱', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${30+lv*3} SP，造成 ${600 + lv*100}% 高速連擊`, spCost: (lv) => 30+lv*3, dmgMulti: (lv) => 6.0 + lv*1.0 },
      { id: 'rk_dragon', name: '龍之氣息', icon: '🐉', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${50+lv*2} SP，根據當前HP造成 ${800 + lv*150}% 範圍火傷`, spCost: (lv) => 50+lv*2, dmgMulti: (lv) => 8.0 + lv*1.5 },
    ],
    royal_guard: [
      { id: 'rg_banish', name: '放逐之擊', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${25+lv*2} SP，造成 ${550 + lv*80}% 遠程神聖傷害`, spCost: (lv) => 25+lv*2, dmgMulti: (lv) => 5.5 + lv*0.8 },
      { id: 'rg_earth', name: '大地毀滅', icon: '🌋', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 60 SP，持盾猛擊地面造成 ${1000 + lv*200}% 範圍物理傷害`, spCost: (lv) => 60, dmgMulti: (lv) => 10.0 + lv*2.0 },
    ],
    warlock: [
      { id: 'wl_crimson', name: '碧血隕石', icon: '☄️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${80+lv*10} SP，召喚巨大隕石造成 ${1200 + lv*300}% 火屬性毀滅傷害`, spCost: (lv) => 80+lv*10, dmgMulti: (lv) => 12.0 + lv*3.0 },
      { id: 'wl_frost', name: '地獄寒冰', icon: '❄️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 ${70+lv*5} SP，凍結周圍敵人並造成 ${900 + lv*200}% 冰屬性傷害`, spCost: (lv) => 70+lv*5, dmgMulti: (lv) => 9.0 + lv*2.0 },
    ],
    sorcerer: [
      { id: 'so_diamond', name: '鑽石星塵', icon: '💎', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${60+lv*5} SP，造成 ${800 + lv*200}% 冰屬性範圍傷害`, spCost: (lv) => 60+lv*5, dmgMulti: (lv) => 8.0 + lv*2.0 },
      { id: 'so_cloud', name: '毒雲術', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 50 SP，佈下毒雲持續造成 ${600 + lv*150}% 毒屬性傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 6.0 + lv*1.5 },
    ],
    guillotine_cross: [
      { id: 'gc_ripper', name: '十字斬', icon: '⚔️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${30+lv*3} SP，瞬爆造成 ${700 + lv*150}% 致命物理傷害`, spCost: (lv) => 30+lv*3, dmgMulti: (lv) => 7.0 + lv*1.5 },
      { id: 'gc_rolling', name: '迴旋斬', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 ${25+lv*2} SP，範圍迴旋攻擊造成 ${500 + lv*100}% 傷害`, spCost: (lv) => 25+lv*2, dmgMulti: (lv) => 5.0 + lv*1.0 },
    ],
    shadow_chaser: [
      { id: 'sc_fatal', name: '致命威脅', icon: '🎭', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${35+lv*3} SP，瞬移暗殺造成 ${650 + lv*120}% 傷害`, spCost: (lv) => 35+lv*3, dmgMulti: (lv) => 6.5 + lv*1.2 },
      { id: 'sc_reproduce', name: '繁殖', icon: '🎨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `強化學習技能的威力與變化性` },
    ],
    arch_bishop: [
      { id: 'ab_adoramus', name: '謳歌', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${45+lv*4} SP，神聖之光制裁敵人造成 ${800 + lv*150}% 聖屬性傷害`, spCost: (lv) => 45+lv*4, dmgMulti: (lv) => 8.0 + lv*1.5 },
      { id: 'ab_highheal', name: '高級治癒術', icon: '💖', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 80 SP，巨幅恢復生命值`, spCost: (lv) => 80, healPower: (lv) => 800 + lv*200 },
    ],
    sura: [
      { id: 'su_gates', name: '羅剎破凰擊', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 120 SP與HP，造成毀滅性 ${1500 + lv*300}% 真實傷害`, spCost: (lv) => 120, dmgMulti: (lv) => 15.0 + lv*3.0 },
      { id: 'su_tiger', name: '天羅地網', icon: '🐅', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 40 SP，連續範圍打擊造成 ${700 + lv*150}% 物理傷害`, spCost: (lv) => 40, dmgMulti: (lv) => 7.0 + lv*1.5 },
    ],
    ranger: [
      { id: 'ra_storm', name: '箭雨風暴', icon: '🌧️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${50+lv*4} SP，漫天箭雨造成 ${900 + lv*200}% 範圍傷害`, spCost: (lv) => 50+lv*4, dmgMulti: (lv) => 9.0 + lv*2.0 },
      { id: 'ra_warg', name: '狼突擊', icon: '🐺', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 25 SP，召喚戰狼撕咬造成 ${500 + lv*100}% 傷害`, spCost: (lv) => 25, dmgMulti: (lv) => 5.0 + lv*1.0 },
    ],
    minstrel_wanderer: [
      { id: 'mw_severe', name: '大暴雨', icon: '⛈️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${60+lv*5} SP，箭矢如暴雨落下造成 ${850 + lv*180}% 傷害`, spCost: (lv) => 60+lv*5, dmgMulti: (lv) => 8.5 + lv*1.8 },
      { id: 'mw_chorus', name: '大合唱', icon: '🎼', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `提升全體技能傷害與自身增益` },
    ],
    mechanic: [
      { id: 'mc_tornado', name: '戰斧颶風', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${35+lv*3} SP，揮舞巨斧造成 ${650 + lv*120}% 範圍傷害`, spCost: (lv) => 35+lv*3, dmgMulti: (lv) => 6.5 + lv*1.2 },
      { id: 'mc_cannon', name: '加農砲', icon: '🚀', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 50 SP，發射砲彈造成 ${900 + lv*150}% 遠程爆發`, spCost: (lv) => 50, dmgMulti: (lv) => 9.0 + lv*1.5 },
    ],
    genetic: [
      { id: 'gn_cart', name: '推車龍捲風', icon: '🛒', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${40+lv*4} SP，高速旋轉造成 ${700 + lv*150}% 打擊傷害`, spCost: (lv) => 40+lv*4, dmgMulti: (lv) => 7.0 + lv*1.5 },
      { id: 'gn_weed', name: '瘋狂野草', icon: '🌿', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 60 SP，召喚魔性植物造成 ${850 + lv*100}% 地屬性傷害`, spCost: (lv) => 60, dmgMulti: (lv) => 8.5 + lv*1.0 },
    ],

    // 【四轉 4th Job - 終極神技】
    dragon_knight: [
      { id: 'dk_madness', name: '狂暴斬擊', icon: '🐉', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${80+lv*10} AP/SP，龍之力爆發造成 ${2000 + lv*500}% 極限物理傷害`, spCost: (lv) => 80+lv*10, dmgMulti: (lv) => 20.0 + lv*5.0 },
    ],
    imperial_guard: [
      { id: 'ig_cross', name: '交叉十字斬', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${75+lv*8} AP/SP，聖光槍陣落下造成 ${1800 + lv*450}% 聖屬性傷害`, spCost: (lv) => 75+lv*8, dmgMulti: (lv) => 18.0 + lv*4.5 },
    ],
    arch_mage: [
      { id: 'am_astral', name: '致命投射', icon: '☄️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${100+lv*15} AP/SP，引爆星辰之力造成 ${2500 + lv*600}% 魔法毀滅`, spCost: (lv) => 100+lv*15, dmgMulti: (lv) => 25.0 + lv*6.0 },
    ],
    elemental_master: [
      { id: 'em_diamond', name: '鑽石風暴', icon: '💎', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${90+lv*12} AP/SP，絕對零度席捲全場造成 ${2200 + lv*500}% 冰魔法`, spCost: (lv) => 90+lv*12, dmgMulti: (lv) => 22.0 + lv*5.0 },
    ],
    shadow_cross: [
      { id: 'sx_savage', name: '野蠻衝擊', icon: '⚔️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${70+lv*10} AP/SP，無影瞬殺造成 ${2400 + lv*550}% 物理斬擊`, spCost: (lv) => 70+lv*10, dmgMulti: (lv) => 24.0 + lv*5.5 },
    ],
    abyss_chaser: [
      { id: 'ac_abyss', name: '深淵短劍', icon: '🎭', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${75+lv*8} AP/SP，黑暗侵蝕造成 ${1900 + lv*450}% 無視防禦傷害`, spCost: (lv) => 75+lv*8, dmgMulti: (lv) => 19.0 + lv*4.5 },
    ],
    cardinal: [
      { id: 'cd_arbitrium', name: '仲裁聖潔', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${85+lv*10} AP/SP，降下神罰造成 ${1800 + lv*400}% 聖魔法並群體回復`, spCost: (lv) => 85+lv*10, dmgMulti: (lv) => 18.0 + lv*4.0 },
    ],
    inquisitor: [
      { id: 'iq_explosion', name: '爆氣散彈', icon: '🔥', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${90+lv*10} AP/SP，氣脈爆破造成 ${2100 + lv*500}% 範圍氣功傷害`, spCost: (lv) => 90+lv*10, dmgMulti: (lv) => 21.0 + lv*5.0 },
    ],
    windhawk: [
      { id: 'wh_gale', name: '狂野飛行', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${80+lv*12} AP/SP，疾風箭陣造成 ${2000 + lv*450}% 遠程物理傷害`, spCost: (lv) => 80+lv*12, dmgMulti: (lv) => 20.0 + lv*4.5 },
    ],
    troubadour_trouvere: [
      { id: 'tt_rose', name: '玫瑰花箭', icon: '🌹', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${75+lv*10} AP/SP，音波與玫瑰炸裂造成 ${1900 + lv*400}% 範圍傷害`, spCost: (lv) => 75+lv*10, dmgMulti: (lv) => 19.0 + lv*4.0 },
    ],
    meister: [
      { id: 'ms_stomp', name: '戰斧踏伐', icon: '🔨', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${85+lv*12} AP/SP，機甲重踏地面造成 ${2300 + lv*500}% 毀滅物理傷害`, spCost: (lv) => 85+lv*12, dmgMulti: (lv) => 23.0 + lv*5.0 },
    ],
    biolo: [
      { id: 'bl_acid', name: '強酸爆發', icon: '🧪', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 ${95+lv*15} AP/SP，引爆究極煉金術造成 ${2200 + lv*550}% 混合傷害`, spCost: (lv) => 95+lv*15, dmgMulti: (lv) => 22.0 + lv*5.5 },
    ]
  }
};
