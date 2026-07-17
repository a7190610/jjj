/**
 * 掛機物語 - 仙境傳說 (RO) 經典還原資料庫 v2.0 (大型擴充版)
 * 
 * 部署指南：
 * 1. 將此檔案上傳至 GitHub。
 * 2. 透過 jsDelivr 或 Raw 連結在前端載入 (例如: https://cdn.jsdelivr.net/gh/您的帳號/您的Repo/ro_database.js)
 */

export const RO_DATABASE = {
  // ==========================================
  // 2. 經典地圖資料 (擴充至 18 張)
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
  // 3. 原汁原味魔物資料 (超過 100 隻)
  // ==========================================
  MONSTERS: {
    'prt_fild08': [
      { id: 1002, name: '波利', emoji: '💧', lv: 1, hp: 50, atk: 7, def: 0, hit: 10, flee: 5, baseExp: 200000, jobExp: 100000, gold: 5, dropRate: 0.1 },
      { id: 1063, name: '瘋兔', emoji: '🐇', lv: 2, hp: 60, atk: 11, def: 0, hit: 15, flee: 8, baseExp: 5000, jobExp: 4000, gold: 8, dropRate: 0.12 },
      { id: 1014, name: '綠棉蟲', emoji: '🐛', lv: 3, hp: 120, atk: 15, def: 5, hit: 20, flee: 12, baseExp: 9, jobExp: 7, gold: 12, dropRate: 0.15 },
      { id: 1049, name: '蒼蠅', emoji: '🪰', lv: 4, hp: 90, atk: 20, def: 2, hit: 25, flee: 25, baseExp: 11, jobExp: 9, gold: 10, dropRate: 0.15 },
      { id: 1008, name: '蟲蛹', emoji: '🪹', lv: 4, hp: 350, atk: 0, def: 10, hit: 0, flee: 0, baseExp: 13, jobExp: 13, gold: 15, dropRate: 0.18 },
      { id: 1031, name: '搖滾蝗蟲', emoji: '🦗', lv: 7, hp: 200, atk: 35, def: 5, hit: 35, flee: 20, baseExp: 20, jobExp: 15, gold: 20, dropRate: 0.18 },
      { id: 1096, name: '波波利', emoji: '🟢', lv: 14, hp: 350, atk: 55, def: 8, hit: 45, flee: 25, baseExp: 72, jobExp: 40, gold: 25, dropRate: 0.2 },
    ],
    'pay_fild04': [
      { id: 1011, name: '魔菇', emoji: '🍄', lv: 12, hp: 360, atk: 45, def: 10, hit: 30, flee: 15, baseExp: 65, jobExp: 42, gold: 25, dropRate: 0.18 },
      { id: 1065, name: '長老樹精', emoji: '🪵', lv: 15, hp: 520, atk: 60, def: 15, hit: 45, flee: 20, baseExp: 150, jobExp: 100, gold: 40, dropRate: 0.2 },
      { id: 1093, name: '大腳熊', emoji: '🐻', lv: 18, hp: 680, atk: 85, def: 20, hit: 55, flee: 25, baseExp: 220, jobExp: 145, gold: 50, dropRate: 0.22 },
      { id: 1059, name: '毒魔菇', emoji: '🍄', lv: 19, hp: 750, atk: 95, def: 18, hit: 60, flee: 28, baseExp: 250, jobExp: 160, gold: 55, dropRate: 0.22 },
      { id: 1111, name: '狸貓', emoji: '🦝', lv: 21, hp: 850, atk: 110, def: 15, hit: 65, flee: 40, baseExp: 310, jobExp: 200, gold: 65, dropRate: 0.25 },
      //{ id: 1150, name: '月夜貓 (MVP)', emoji: '🌙', lv: 55, hp: 25000, atk: 850, def: 35, hit: 180, flee: 180, baseExp: 9000, jobExp: 6500, gold: 2500, dropRate: 0.75 },
    ],
    'moc_fild12': [
      { id: 1113, name: '土波利', emoji: '🪨', lv: 11, hp: 180, atk: 28, def: 8, hit: 25, flee: 10, baseExp: 40, jobExp: 30, gold: 15, dropRate: 0.15 },
      { id: 1023, name: '大嘴鳥', emoji: '🦤', lv: 16, hp: 550, atk: 70, def: 12, hit: 40, flee: 35, baseExp: 140, jobExp: 90, gold: 35, dropRate: 0.2 },
      { id: 1004, name: '蒼蠅', emoji: '🪰', lv: 14, hp: 450, atk: 50, def: 5, hit: 45, flee: 50, baseExp: 100, jobExp: 75, gold: 30, dropRate: 0.2 },
      { id: 1044, name: '沙漠之狼', emoji: '🐺', lv: 22, hp: 950, atk: 110, def: 15, hit: 65, flee: 45, baseExp: 280, jobExp: 180, gold: 60, dropRate: 0.25 },
      { id: 1060, name: '巨石怪', emoji: '🗿', lv: 26, hp: 2000, atk: 180, def: 45, hit: 70, flee: 15, baseExp: 500, jobExp: 350, gold: 80, dropRate: 0.28 },
     // { id: 1150, name: '皮里恩 (MVP)', emoji: '👅', lv: 58, hp: 32000, atk: 1100, def: 40, hit: 150, flee: 100, baseExp: 12000, jobExp: 8000, gold: 3000, dropRate: 0.8 },
    ],
    'iz_dun00': [
      { id: 1069, name: '達拉蛙', emoji: '🐸', lv: 20, hp: 720, atk: 85, def: 10, hit: 50, flee: 30, baseExp: 180, jobExp: 120, gold: 45, dropRate: 0.2 },
      { id: 1029, name: '螃蟹', emoji: '🦀', lv: 24, hp: 1050, atk: 120, def: 35, hit: 60, flee: 25, baseExp: 320, jobExp: 210, gold: 65, dropRate: 0.22 },
      { id: 1070, name: '海葵', emoji: '🌺', lv: 25, hp: 1500, atk: 140, def: 15, hit: 75, flee: 10, baseExp: 450, jobExp: 300, gold: 75, dropRate: 0.25 },
      { id: 1068, name: '馬克', emoji: '🐟', lv: 28, hp: 1800, atk: 160, def: 20, hit: 85, flee: 40, baseExp: 580, jobExp: 400, gold: 90, dropRate: 0.28 },
      //{ id: 1067, name: '海神 (MVP)', emoji: '🧜‍♂️', lv: 60, hp: 45000, atk: 1500, def: 55, hit: 200, flee: 120, baseExp: 18000, jobExp: 12000, gold: 4000, dropRate: 0.8 },
    ],
    'anthell01': [
      { id: 1085, name: '螞蟻卵', emoji: '🥚', lv: 10, hp: 500, atk: 0, def: 0, hit: 0, flee: 0, baseExp: 15, jobExp: 5, gold: 5, dropRate: 0.05 },
      { id: 1021, name: '安德列', emoji: '🐜', lv: 25, hp: 1100, atk: 140, def: 25, hit: 70, flee: 40, baseExp: 380, jobExp: 250, gold: 70, dropRate: 0.22 },
      { id: 1097, name: '白蟻', emoji: '🐜', lv: 27, hp: 1250, atk: 160, def: 30, hit: 75, flee: 45, baseExp: 420, jobExp: 280, gold: 80, dropRate: 0.25 },
      { id: 1022, name: '兵蟻', emoji: '🐜', lv: 29, hp: 1400, atk: 180, def: 35, hit: 85, flee: 50, baseExp: 500, jobExp: 320, gold: 90, dropRate: 0.28 },
      //{ id: 1148, name: '瑪雅 (MVP)', emoji: '👑', lv: 65, hp: 55000, atk: 1800, def: 60, hit: 220, flee: 150, baseExp: 22000, jobExp: 15000, gold: 5000, dropRate: 0.85 },
    ],
    'pay_dun00': [
      { id: 1015, name: '腐屍', emoji: '🧟', lv: 32, hp: 1500, atk: 180, def: 15, hit: 85, flee: 20, baseExp: 550, jobExp: 380, gold: 85, dropRate: 0.25 },
      { id: 1016, name: '邪骸戰士', emoji: '💀', lv: 35, hp: 1800, atk: 220, def: 20, hit: 95, flee: 35, baseExp: 680, jobExp: 450, gold: 100, dropRate: 0.28 },
      { id: 1026, name: '妖道', emoji: '🧟‍♀️', lv: 38, hp: 2200, atk: 260, def: 25, hit: 105, flee: 45, baseExp: 850, jobExp: 580, gold: 120, dropRate: 0.3 },
      { id: 1098, name: '九尾狐', emoji: '🦊', lv: 45, hp: 4200, atk: 350, def: 25, hit: 120, flee: 110, baseExp: 1500, jobExp: 1100, gold: 200, dropRate: 0.35 },
      //{ id: 1111, name: '怨靈武士 (MVP)', emoji: '👺', lv: 70, hp: 85000, atk: 2500, def: 65, hit: 260, flee: 180, baseExp: 35000, jobExp: 25000, gold: 6000, dropRate: 0.9 },
    ],
    'mjolnir_04': [
      { id: 1019, name: '噬人花', emoji: '🥀', lv: 36, hp: 2800, atk: 250, def: 10, hit: 90, flee: 15, baseExp: 950, jobExp: 650, gold: 130, dropRate: 0.28 },
      { id: 1020, name: '黑蟻', emoji: '🕷️', lv: 40, hp: 3200, atk: 280, def: 15, hit: 100, flee: 35, baseExp: 1100, jobExp: 800, gold: 150, dropRate: 0.3 },
      { id: 1047, name: '蜂兵', emoji: '🐝', lv: 42, hp: 3500, atk: 320, def: 20, hit: 115, flee: 85, baseExp: 1300, jobExp: 950, gold: 170, dropRate: 0.32 },
      //{ id: 1048, name: '蜂后 (MVP)', emoji: '🐝', lv: 72, hp: 95000, atk: 2800, def: 75, hit: 280, flee: 250, baseExp: 42000, jobExp: 28000, gold: 7500, dropRate: 0.9 },
    ],
    'xmas_dun01': [
      { id: 1242, name: '餅乾人', emoji: '🍪', lv: 44, hp: 4000, atk: 350, def: 25, hit: 110, flee: 60, baseExp: 1400, jobExp: 1050, gold: 180, dropRate: 0.32 },
      { id: 1243, name: '禮盒怪', emoji: '🎁', lv: 47, hp: 4800, atk: 420, def: 35, hit: 125, flee: 70, baseExp: 1750, jobExp: 1300, gold: 210, dropRate: 0.35 },
      { id: 1244, name: '雪人', emoji: '⛄', lv: 50, hp: 5500, atk: 480, def: 40, hit: 140, flee: 50, baseExp: 2200, jobExp: 1600, gold: 250, dropRate: 0.38 },
      //{ id: 1245, name: '卡崙 (MVP)', emoji: '🐺', lv: 75, hp: 120000, atk: 3200, def: 85, hit: 320, flee: 220, baseExp: 55000, jobExp: 38000, gold: 8500, dropRate: 0.95 },
    ],
    'moc_pryd04': [
      { id: 1045, name: '木乃伊', emoji: '🤕', lv: 48, hp: 5500, atk: 480, def: 30, hit: 130, flee: 45, baseExp: 2100, jobExp: 1500, gold: 230, dropRate: 0.35 },
      { id: 1046, name: '蛇女伊絲', emoji: '🐍', lv: 52, hp: 6800, atk: 580, def: 35, hit: 150, flee: 80, baseExp: 2800, jobExp: 1900, gold: 280, dropRate: 0.38 },
      { id: 1152, name: '黑狐', emoji: '🐕‍🦺', lv: 54, hp: 7200, atk: 620, def: 25, hit: 165, flee: 120, baseExp: 3200, jobExp: 2200, gold: 310, dropRate: 0.4 },
      //{ id: 1112, name: '俄塞里斯 (MVP)', emoji: '🦅', lv: 78, hp: 150000, atk: 3800, def: 70, hit: 350, flee: 200, baseExp: 65000, jobExp: 45000, gold: 9000, dropRate: 0.95 },
    ],
    'in_sphinx3': [
      { id: 1094, name: '米洛斯(牛頭人)', emoji: '🐂', lv: 56, hp: 8500, atk: 750, def: 40, hit: 150, flee: 50, baseExp: 3800, jobExp: 2500, gold: 350, dropRate: 0.4 },
      { id: 1149, name: '帕莎納', emoji: '💃', lv: 58, hp: 9200, atk: 820, def: 45, hit: 175, flee: 130, baseExp: 4500, jobExp: 3000, gold: 400, dropRate: 0.42 },
      //{ id: 1151, name: '法老王 (MVP)', emoji: '👳', lv: 80, hp: 180000, atk: 4500, def: 85, hit: 380, flee: 240, baseExp: 80000, jobExp: 55000, gold: 10000, dropRate: 1.0 },
    ],
    'orcsdun01': [
      { id: 1152, name: '獸人腐屍', emoji: '🧟', lv: 60, hp: 12000, atk: 950, def: 35, hit: 160, flee: 60, baseExp: 5500, jobExp: 3800, gold: 450, dropRate: 0.42 },
      { id: 1153, name: '邪骸獸人', emoji: '💀', lv: 62, hp: 14500, atk: 1100, def: 40, hit: 180, flee: 75, baseExp: 6500, jobExp: 4500, gold: 500, dropRate: 0.45 },
      //{ id: 1150, name: '獸人英雄 (MVP)', emoji: '🦍', lv: 82, hp: 220000, atk: 5200, def: 75, hit: 400, flee: 180, baseExp: 95000, jobExp: 65000, gold: 12000, dropRate: 1.0 },
      //{ id: 1151, name: '獸人酋長 (MVP)', emoji: '🗿', lv: 85, hp: 280000, atk: 6000, def: 90, hit: 450, flee: 200, baseExp: 120000, jobExp: 80000, gold: 15000, dropRate: 1.0 },
    ],
    'gef_dun01': [
      { id: 1032, name: '赤蒼蠅', emoji: '🪰', lv: 65, hp: 16500, atk: 1250, def: 25, hit: 220, flee: 180, baseExp: 8000, jobExp: 5500, gold: 550, dropRate: 0.45 },
      { id: 1098, name: '夢魘', emoji: '🦄', lv: 68, hp: 19000, atk: 1450, def: 45, hit: 240, flee: 160, baseExp: 9500, jobExp: 6500, gold: 650, dropRate: 0.48 },
      //{ id: 1115, name: '德古拉男爵 (MVP)', emoji: '🧛', lv: 88, hp: 350000, atk: 7500, def: 80, hit: 480, flee: 300, baseExp: 150000, jobExp: 100000, gold: 18000, dropRate: 1.0 },
    ],
    'lou_fild01': [
      { id: 1492, name: '米糕', emoji: '🌾', lv: 70, hp: 22000, atk: 1600, def: 50, hit: 250, flee: 120, baseExp: 11000, jobExp: 8000, gold: 750, dropRate: 0.48 },
      { id: 1493, name: '青蛇', emoji: '🐍', lv: 72, hp: 25000, atk: 1850, def: 40, hit: 270, flee: 180, baseExp: 13500, jobExp: 9500, gold: 850, dropRate: 0.5 },
      //{ id: 1494, name: '白素貞 (MVP)', emoji: '👩', lv: 90, hp: 450000, atk: 8500, def: 85, hit: 520, flee: 350, baseExp: 200000, jobExp: 140000, gold: 22000, dropRate: 1.0 },
    ],
    'c_tower1': [
      { id: 1193, name: '鐘塔守護者', emoji: '🦉', lv: 75, hp: 32000, atk: 2200, def: 60, hit: 300, flee: 120, baseExp: 16000, jobExp: 11000, gold: 1000, dropRate: 0.52 },
      { id: 1195, name: '鐘怪', emoji: '🕰️', lv: 78, hp: 38000, atk: 2600, def: 75, hit: 320, flee: 140, baseExp: 19000, jobExp: 13500, gold: 1200, dropRate: 0.55 },
    ],
    'gl_church': [
      { id: 1163, name: '幽靈劍士', emoji: '👻', lv: 82, hp: 45000, atk: 3200, def: 55, hit: 350, flee: 220, baseExp: 24000, jobExp: 16000, gold: 1500, dropRate: 0.58 },
      //{ id: 1112, name: '黑暗之王 (MVP)', emoji: '👑', lv: 95, hp: 850000, atk: 12000, def: 95, hit: 600, flee: 300, baseExp: 450000, jobExp: 300000, gold: 35000, dropRate: 1.0 },
    ],
    'gl_knt01': [
      { id: 1131, name: '深淵騎士', emoji: '🏇', lv: 85, hp: 55000, atk: 4200, def: 70, hit: 380, flee: 180, baseExp: 32000, jobExp: 22000, gold: 2000, dropRate: 0.6 },
      { id: 1142, name: '卡利斯格', emoji: '🤺', lv: 88, hp: 65000, atk: 4800, def: 85, hit: 420, flee: 240, baseExp: 40000, jobExp: 28000, gold: 2500, dropRate: 0.62 },
      //{ id: 1143, name: '死靈騎士 (MVP)', emoji: '💀', lv: 98, hp: 1200000, atk: 15000, def: 110, hit: 650, flee: 350, baseExp: 650000, jobExp: 450000, gold: 50000, dropRate: 1.0 },
    ],
    'mag_dun01': [
      { id: 1213, name: '爆炎蝙蝠', emoji: '🦇', lv: 90, hp: 75000, atk: 5500, def: 45, hit: 450, flee: 320, baseExp: 48000, jobExp: 35000, gold: 2800, dropRate: 0.65 },
      { id: 1215, name: '熔岩巨石', emoji: '🪨', lv: 92, hp: 95000, atk: 6800, def: 100, hit: 400, flee: 100, baseExp: 60000, jobExp: 42000, gold: 3500, dropRate: 0.68 },
    ],
    'lhz_dun03': [
      { id: 1634, name: '神射手 迪文', emoji: '🎯', lv: 96, hp: 150000, atk: 9500, def: 60, hit: 650, flee: 450, baseExp: 85000, jobExp: 60000, gold: 4500, dropRate: 0.7 },
      { id: 1637, name: '十字刺客 艾勒梅斯', emoji: '🗡️', lv: 98, hp: 165000, atk: 11000, def: 55, hit: 700, flee: 600, baseExp: 95000, jobExp: 68000, gold: 5000, dropRate: 0.72 },
      //{ id: 1640, name: '超魔導 凱特莉娜 (MVP)', emoji: '👿', lv: 99, hp: 2500000, atk: 25000, def: 85, hit: 850, flee: 650, baseExp: 1000000, jobExp: 750000, gold: 100000, dropRate: 1.0 },
    ],
  },

  // ==========================================
  // 4. 裝備資料庫 (嚴格職業綁定與專屬素質)
  // ==========================================
  ITEMS: {
    // --- 武器區 (Weapons) ---
    weapons: [
      { id: 'w_001', name: '笨拙短劍', type: 'weapon', reqLevel: 1, reqClass: ['all'], attr: { atk: 1700000 } },
      { id: 'w_002', name: '短劍', type: 'weapon', reqLevel: 12, reqClass: ['swordman', 'thief', 'magician', 'merchant', 'novice'], attr: { atk: 43 } },
      { id: 'w_003', name: '大馬士革短劍', type: 'weapon', reqLevel: 24, reqClass: ['swordman', 'thief', 'magician', 'merchant'], attr: { atk: 118 } },
      { id: 'w_004', name: '刺客匕首', type: 'weapon', reqLevel: 40, reqClass: ['thief'], attr: { atk: 140, flee: 10 } },
      { id: 'w_005', name: '神聖之首', type: 'weapon', reqLevel: 60, reqClass: ['swordman', 'thief'], attr: { atk: 165, hit: 20 } },
      { id: 'w_007', name: '月光匕首', type: 'weapon', reqLevel: 80, reqClass: ['magician', 'thief'], attr: { atk: 150, maxSp: 100, int: 3 } },

      { id: 'w_101', name: '長劍', type: 'weapon', reqLevel: 10, reqClass: ['swordman', 'merchant', 'thief'], attr: { atk: 45 } },
      { id: 'w_102', name: '圓月彎刀', type: 'weapon', reqLevel: 20, reqClass: ['swordman', 'thief'], attr: { atk: 85 } },
      { id: 'w_103', name: '海東劍', type: 'weapon', reqLevel: 35, reqClass: ['swordman', 'merchant'], attr: { atk: 120 } },
      { id: 'w_104', name: '狂擊之劍', type: 'weapon', reqLevel: 50, reqClass: ['swordman'], attr: { atk: 150, str: 3 } },
      { id: 'w_105', name: '雙手巨劍', type: 'weapon', reqLevel: 33, reqClass: ['swordman'], attr: { atk: 160, aspd: -5 } },
      { id: 'w_107', name: '名刀 不知火', type: 'weapon', reqLevel: 75, reqClass: ['swordman'], attr: { atk: 250, crit: 20 } },
      { id: 'w_108', name: '水紋劍', type: 'weapon', reqLevel: 85, reqClass: ['swordman'], attr: { atk: 280, hit: 30, maxHp: 500 } },

      { id: 'w_201', name: '手斧', type: 'weapon', reqLevel: 10, reqClass: ['swordman', 'merchant'], attr: { atk: 50 } },
      { id: 'w_202', name: '戰鬥斧', type: 'weapon', reqLevel: 30, reqClass: ['swordman', 'merchant'], attr: { atk: 130 } },
      { id: 'w_204', name: '血斧', type: 'weapon', reqLevel: 70, reqClass: ['merchant'], attr: { atk: 250, str: 5 } },
      { id: 'w_205', name: '毀滅之斧', type: 'weapon', reqLevel: 85, reqClass: ['merchant'], attr: { atk: 320, aspd: -10 } },

      { id: 'w_301', name: '棍棒', type: 'weapon', reqLevel: 5, reqClass: ['swordman', 'merchant', 'acolyte'], attr: { atk: 23 } },
      { id: 'w_302', name: '流星鎚', type: 'weapon', reqLevel: 15, reqClass: ['swordman', 'merchant', 'acolyte'], attr: { atk: 65 } },
      { id: 'w_304', name: '十字架', type: 'weapon', reqLevel: 40, reqClass: ['acolyte'], attr: { atk: 110, matk: 40 } },
      { id: 'w_305', name: '審判十字架', type: 'weapon', reqLevel: 65, reqClass: ['acolyte'], attr: { atk: 140, matk: 80, int: 3 } },
      { id: 'w_306', name: '黃金之鎚', type: 'weapon', reqLevel: 80, reqClass: ['merchant', 'acolyte'], attr: { atk: 180, hit: 20 } },

      { id: 'w_401', name: '木杖', type: 'weapon', reqLevel: 1, reqClass: ['magician', 'acolyte'], attr: { atk: 15, matk: 20 } },
      { id: 'w_402', name: '言靈魔杖', type: 'weapon', reqLevel: 24, reqClass: ['magician', 'acolyte'], attr: { atk: 30, int: 3, matk: 70 } },
      { id: 'w_403', name: '生存的魔杖', type: 'weapon', reqLevel: 40, reqClass: ['magician'], attr: { atk: 50, maxHp: 300, matk: 120 } },
      { id: 'w_405', name: '巫術之杖', type: 'weapon', reqLevel: 70, reqClass: ['magician'], attr: { atk: 60, matk: 200, dex: 3 } },
      { id: 'w_406', name: '聖職之杖', type: 'weapon', reqLevel: 70, reqClass: ['acolyte'], attr: { atk: 80, matk: 160, int: 5 } },
      { id: 'w_407', name: '毀滅魔杖', type: 'weapon', reqLevel: 90, reqClass: ['magician'], attr: { atk: 100, matk: 280, int: 8 } },

      { id: 'w_501', name: '弓', type: 'weapon', reqLevel: 1, reqClass: ['archer', 'thief'], attr: { atk: 15 } },
      { id: 'w_502', name: '十字弓', type: 'weapon', reqLevel: 18, reqClass: ['archer', 'thief'], attr: { atk: 65, dex: 2 } },
      { id: 'w_503', name: '角弓', type: 'weapon', reqLevel: 33, reqClass: ['archer'], attr: { atk: 100 } },
      { id: 'w_504', name: '獵弓', type: 'weapon', reqLevel: 50, reqClass: ['archer'], attr: { atk: 125, hit: 10 } },
      { id: 'w_505', name: '坎弓', type: 'weapon', reqLevel: 65, reqClass: ['archer'], attr: { atk: 150, dex: 3 } },
      { id: 'w_506', name: '神射手之弓', type: 'weapon', reqLevel: 80, reqClass: ['archer'], attr: { atk: 180, crit: 10, dex: 5 } },

      { id: 'w_601', name: '拳刃', type: 'weapon', reqLevel: 40, reqClass: ['thief'], attr: { atk: 105, crit: 5 } },
      { id: 'w_602', name: '卡塔勒拳刃', type: 'weapon', reqLevel: 55, reqClass: ['thief'], attr: { atk: 148, crit: 8 } },
      { id: 'w_603', name: '刺客拳刃', type: 'weapon', reqLevel: 70, reqClass: ['thief'], attr: { atk: 180, crit: 15 } },
      { id: 'w_604', name: '爆炎拳刃', type: 'weapon', reqLevel: 85, reqClass: ['thief'], attr: { atk: 210, crit: 10 } },
    ],
    
    // --- 防具區 ---
    armors: [
      // 頭飾 (Helm)
      { id: 'h_001', name: '髮圈', type: 'helm', reqLevel: 1, reqClass: ['all'], attr: { def: 1 } },
      { id: 'h_002', name: '頭巾', type: 'helm', reqLevel: 10, reqClass: ['all'], attr: { def: 2, maxHp: 15000 } },
      { id: 'h_003', name: '蘋果頭飾', type: 'helm', reqLevel: 25, reqClass: ['archer', 'thief'], attr: { def: 2, dex: 3 } },
      { id: 'h_004', name: '亡者髮箍', type: 'helm', reqLevel: 30, reqClass: ['swordman', 'merchant'], attr: { def: 4, agi: 2 } },
      { id: 'h_005', name: '魔法師帽', type: 'helm', reqLevel: 35, reqClass: ['magician'], attr: { def: 3, int: 2, maxSp: 50 } },
      { id: 'h_006', name: '骨製頭盔', type: 'helm', reqLevel: 50, reqClass: ['swordman'], attr: { def: 7, vit: 2 } },
      { id: 'h_007', name: '王冠', type: 'helm', reqLevel: 70, reqClass: ['all'], attr: { def: 5, int: 3, luk: 3 } },
      
      // 鎧甲 (Body)
      { id: 'a_001', name: '棉襯衫', type: 'armor', reqLevel: 1, reqClass: ['all'], attr: { def: 1, maxHp: 10000 } },
      { id: 'a_002', name: '皮甲', type: 'armor', reqLevel: 5, reqClass: ['all'], attr: { def: 2, maxHp: 25 } },
      { id: 'a_003', name: '絲質外衣', type: 'armor', reqLevel: 10, reqClass: ['magician', 'acolyte'], attr: { def: 3, maxSp: 20, int: 1 } },
      { id: 'a_004', name: '木製鎧甲', type: 'armor', reqLevel: 15, reqClass: ['swordman', 'merchant'], attr: { def: 7, maxHp: 100 } },
      { id: 'a_005', name: '盜賊之衣', type: 'armor', reqLevel: 20, reqClass: ['thief'], attr: { def: 6, agi: 1, flee: 5 } },
      { id: 'a_006', name: '緊身便衣', type: 'armor', reqLevel: 20, reqClass: ['archer'], attr: { def: 5, dex: 1 } },
      { id: 'a_007', name: '鋼鐵鎧甲', type: 'armor', reqLevel: 40, reqClass: ['swordman', 'merchant'], attr: { def: 12, maxHp: 300, agi: -2 } },
      { id: 'a_008', name: '聖職之衣', type: 'armor', reqLevel: 40, reqClass: ['acolyte'], attr: { def: 6, int: 2, maxSp: 50 } },
      { id: 'a_009', name: '魔法外套', type: 'armor', reqLevel: 50, reqClass: ['magician'], attr: { def: 5, int: 3, maxSp: 100 } },
      { id: 'a_010', name: '神射手之衣', type: 'armor', reqLevel: 65, reqClass: ['archer'], attr: { def: 8, dex: 3, flee: 10 } },
      { id: 'a_011', name: '騎士鎧甲', type: 'armor', reqLevel: 70, reqClass: ['swordman'], attr: { def: 16, maxHp: 800, vit: 2 } },
      { id: 'a_012', name: '暗殺者外衣', type: 'armor', reqLevel: 75, reqClass: ['thief'], attr: { def: 10, agi: 3, flee: 20 } },
      { id: 'a_014', name: '奧丁的祝福', type: 'armor', reqLevel: 90, reqClass: ['all'], attr: { def: 10, str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 } },

      // 披肩 (Garment)
      { id: 'g_001', name: '連帽披肩', type: 'garment', reqLevel: 1, reqClass: ['all'], attr: { def: 1, flee: 2 } },
      { id: 'g_002', name: '披風', type: 'garment', reqLevel: 15, reqClass: ['all'], attr: { def: 2, flee: 5 } },
      { id: 'g_003', name: '斗篷', type: 'garment', reqLevel: 30, reqClass: ['all'], attr: { def: 4, flee: 10 } },
      { id: 'g_004', name: '生存的斗篷', type: 'garment', reqLevel: 50, reqClass: ['magician', 'acolyte'], attr: { def: 3, maxHp: 100 } },
      { id: 'g_006', name: '暗影披風', type: 'garment', reqLevel: 65, reqClass: ['thief'], attr: { def: 4, flee: 20, agi: 2 } },
      { id: 'g_008', name: '巴風特之角(披風)', type: 'garment', reqLevel: 95, reqClass: ['all'], attr: { def: 5, crit: 5 } },

      // 鞋靴 (Shoes)
      { id: 's_001', name: '涼鞋', type: 'shoes', reqLevel: 1, reqClass: ['all'], attr: { def: 1, maxHp: 10 } },
      { id: 's_002', name: '皮靴', type: 'shoes', reqLevel: 15, reqClass: ['all'], attr: { def: 2, maxHp: 30 } },
      { id: 's_003', name: '長靴', type: 'shoes', reqLevel: 30, reqClass: ['all'], attr: { def: 4, maxHp: 100 } },
      { id: 's_004', name: '魔法師之靴', type: 'shoes', reqLevel: 45, reqClass: ['magician'], attr: { def: 2, maxSp: 80 } },
      { id: 's_005', name: '戰士長靴', type: 'shoes', reqLevel: 50, reqClass: ['swordman', 'merchant'], attr: { def: 6, maxHp: 300 } },
      { id: 's_006', name: '敏捷長靴', type: 'shoes', reqLevel: 65, reqClass: ['thief', 'archer'], attr: { def: 5, agi: 200, flee: 1000 } },

      // 盾牌 (Shields)
      { id: 'sh_001', name: '圓盾', type: 'shield', reqLevel: 10, reqClass: ['all'], attr: { def: 3 } },
      { id: 'sh_002', name: '鐵盾', type: 'shield', reqLevel: 30, reqClass: ['swordman', 'merchant'], attr: { def: 6, agi: -1 } },
      { id: 'sh_003', name: '魔法書', type: 'shield', reqLevel: 35, reqClass: ['magician'], attr: { def: 2, int: 2, matk: 10 } },
      { id: 'sh_004', name: '鋼盾', type: 'shield', reqLevel: 50, reqClass: ['swordman', 'merchant'], attr: { def: 9, agi: -2 } },
      { id: 'sh_005', name: '聖職之盾', type: 'shield', reqLevel: 55, reqClass: ['acolyte'], attr: { def: 5, maxSp: 50 } },
    ],

    // --- 飾品 (Accessories) ---
    accessories: [
      { id: 'ac_001', name: '夾子', type: 'acc', reqLevel: 10, reqClass: ['all'], attr: { maxSp: 1000 } },
      { id: 'ac_002', name: '力量戒指', type: 'acc', reqLevel: 20, reqClass: ['swordman', 'merchant', 'thief'], attr: { atk: 1500, str: 200 } },
      { id: 'ac_003', name: '智力耳環', type: 'acc', reqLevel: 20, reqClass: ['magician', 'acolyte'], attr: { int: 2, maxSp: 50 } },
      { id: 'ac_004', name: '敏捷胸針', type: 'acc', reqLevel: 20, reqClass: ['archer', 'thief'], attr: { flee: 5, agi: 2 } },
      { id: 'ac_005', name: '幸運珠鍊', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { crit: 3, luk: 2 } },
      { id: 'ac_006', name: '體力項鍊', type: 'acc', reqLevel: 20, reqClass: ['swordman', 'merchant'], attr: { maxHp: 100, vit: 2 } },
      { id: 'ac_007', name: '靈巧手套', type: 'acc', reqLevel: 20, reqClass: ['archer'], attr: { hit: 10, dex: 2 } },
      { id: 'ac_008', name: '防禦手套', type: 'acc', reqLevel: 50, reqClass: ['all'], attr: { def: 2, maxHp: 150 } },
      { id: 'ac_009', name: '盜賊戒指', type: 'acc', reqLevel: 70, reqClass: ['thief'], attr: { str: 1, agi: 1, crit: 5 } },
    ]
  },

  // ==========================================
  // 1. 職業樹與素質成長資料庫 (包含 2-1 與 2-2 轉)
  // ==========================================
  CLASSES: {
    // 【初心者】
    novice: { name: '初心者', icon: '🥚', primaryStat: 'str', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.0, defMulti: 1.0, isJob2: false, maxJob: 10, reqBaseLv: 1, reqJobLv: 1, advClasses: ['swordman', 'magician', 'thief', 'acolyte', 'archer', 'merchant'] },
    
    // 【一轉職業】(1st Job) - 條件: 初心者 Job 10
    swordman: { name: '劍士', icon: '🛡️', primaryStat: 'str', hpMulti: 1.5, spMulti: 0.8, atkMulti: 1.0, defMulti: 1.2, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['knight', 'crusader'] },
    magician: { name: '魔法師', icon: '🔮', primaryStat: 'int', hpMulti: 0.8, spMulti: 2.0, atkMulti: 1.5, defMulti: 0.7, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['wizard', 'sage'] },
    thief: { name: '盜賊', icon: '🗡️', primaryStat: 'agi', hpMulti: 1.0, spMulti: 1.0, atkMulti: 1.2, defMulti: 0.9, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['assassin', 'rogue'] },
    acolyte: { name: '服事', icon: '✨', primaryStat: 'int', hpMulti: 1.2, spMulti: 1.5, atkMulti: 0.9, defMulti: 1.1, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['priest', 'monk'] },
    archer: { name: '弓箭手', icon: '🏹', primaryStat: 'dex', hpMulti: 0.9, spMulti: 1.0, atkMulti: 1.3, defMulti: 0.8, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['hunter', 'bard'] },
    merchant: { name: '商人', icon: '💰', primaryStat: 'str', hpMulti: 1.3, spMulti: 0.8, atkMulti: 1.1, defMulti: 1.1, isJob2: false, maxJob: 50, reqBaseLv: 1, reqJobLv: 10, advClasses: ['blacksmith', 'alchemist'] },
    
    // 【二轉 2-1】 - 條件: 一轉 Job 40
    knight: { name: '騎士', icon: '🏇', primaryStat: 'str', hpMulti: 2.5, spMulti: 0.8, atkMulti: 1.3, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['rune_knight'] },
    wizard: { name: '巫師', icon: '🧙', primaryStat: 'int', hpMulti: 1.0, spMulti: 2.5, atkMulti: 2.0, defMulti: 0.8, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['warlock'] },
    assassin: { name: '十字刺客', icon: '🥷', primaryStat: 'agi', hpMulti: 1.5, spMulti: 1.0, atkMulti: 1.5, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['guillotine_cross'] },
    priest: { name: '神官', icon: '⛪', primaryStat: 'int', hpMulti: 1.5, spMulti: 2.0, atkMulti: 1.0, defMulti: 1.3, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['arch_bishop'] },
    hunter: { name: '神射手', icon: '🦅', primaryStat: 'dex', hpMulti: 1.2, spMulti: 1.2, atkMulti: 1.6, defMulti: 0.9, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['ranger'] },
    blacksmith: { name: '神工匠', icon: '🔨', primaryStat: 'str', hpMulti: 1.8, spMulti: 1.0, atkMulti: 1.3, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['mechanic'] },
    
    // 【二轉 2-2】 - 條件: 一轉 Job 40
    crusader: { name: '十字軍', icon: '🛡️', primaryStat: 'vit', hpMulti: 2.8, spMulti: 1.2, atkMulti: 1.1, defMulti: 1.8, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['royal_guard'] },
    sage: { name: '智者', icon: '📖', primaryStat: 'int', hpMulti: 1.2, spMulti: 2.2, atkMulti: 1.8, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['sorcerer'] },
    rogue: { name: '神行太保', icon: '🎭', primaryStat: 'agi', hpMulti: 1.6, spMulti: 1.2, atkMulti: 1.4, defMulti: 1.1, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['shadow_chaser'] },
    monk: { name: '武術宗師', icon: '👊', primaryStat: 'str', hpMulti: 1.6, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['sura'] },
    bard: { name: '吟遊詩人', icon: '🎸', primaryStat: 'dex', hpMulti: 1.3, spMulti: 1.5, atkMulti: 1.4, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['minstrel_wanderer'] },
    alchemist: { name: '鍊金術師', icon: '🧪', primaryStat: 'str', hpMulti: 1.7, spMulti: 1.2, atkMulti: 1.2, defMulti: 1.3, isJob2: true, maxJob: 70, reqBaseLv: 1, reqJobLv: 40, advClasses: ['genetic'] },

    // 【三轉】 - 條件: 二轉 Base 90, Job 50
    rune_knight: { name: '盧恩騎士', icon: '🐉', primaryStat: 'str', hpMulti: 3.5, spMulti: 1.0, atkMulti: 1.5, defMulti: 1.8, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['dragon_knight'] },
    warlock: { name: '咒術士', icon: '☄️', primaryStat: 'int', hpMulti: 1.5, spMulti: 3.5, atkMulti: 2.5, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['arch_mage'] },
    guillotine_cross: { name: '十字斬首者', icon: '🔪', primaryStat: 'agi', hpMulti: 2.0, spMulti: 1.2, atkMulti: 2.0, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['shadow_cross'] },
    arch_bishop: { name: '大主教', icon: '✝️', primaryStat: 'int', hpMulti: 2.0, spMulti: 2.8, atkMulti: 1.2, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['cardinal'] },
    ranger: { name: '遊俠', icon: '🐺', primaryStat: 'dex', hpMulti: 1.8, spMulti: 1.5, atkMulti: 2.2, defMulti: 1.0, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['windhawk'] },
    mechanic: { name: '機械工匠', icon: '🤖', primaryStat: 'str', hpMulti: 2.8, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.8, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['meister'] },
    royal_guard: { name: '皇家禁衛隊', icon: '🛡️', primaryStat: 'vit', hpMulti: 4.0, spMulti: 1.5, atkMulti: 1.4, defMulti: 2.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['imperial_guard'] },
    sorcerer: { name: '妖術師', icon: '🌌', primaryStat: 'int', hpMulti: 1.8, spMulti: 3.0, atkMulti: 2.2, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['elemental_master'] },
    shadow_chaser: { name: '魅影追蹤者', icon: '🎭', primaryStat: 'agi', hpMulti: 2.2, spMulti: 1.5, atkMulti: 1.8, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['abyss_chaser'] },
    sura: { name: '修羅', icon: '🔥', primaryStat: 'str', hpMulti: 2.5, spMulti: 2.0, atkMulti: 2.5, defMulti: 1.5, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['inquisitor'] },
    minstrel_wanderer: { name: '宮廷樂師', icon: '🎻', primaryStat: 'dex', hpMulti: 2.0, spMulti: 2.2, atkMulti: 1.8, defMulti: 1.2, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['troubadour_trouvere'] },
    genetic: { name: '基因學者', icon: '🧬', primaryStat: 'str', hpMulti: 2.4, spMulti: 1.8, atkMulti: 1.6, defMulti: 1.6, isJob2: true, maxJob: 70, reqBaseLv: 90, reqJobLv: 50, advClasses: ['biolo'] },

    // 【四轉】 - 條件: 三轉 Base 200, Job 70
    dragon_knight: { name: '龍騎士', icon: '🐲', primaryStat: 'str', hpMulti: 5.0, spMulti: 1.5, atkMulti: 2.5, defMulti: 2.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    warlock: { name: '禁咒魔導士', icon: '☄️', primaryStat: 'int', hpMulti: 2.5, spMulti: 5.0, atkMulti: 4.0, defMulti: 1.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    shadow_cross: { name: '十字影武', icon: '💀', primaryStat: 'agi', hpMulti: 3.0, spMulti: 1.8, atkMulti: 3.5, defMulti: 1.8, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    cardinal: { name: '樞機主教', icon: '⚖️', primaryStat: 'int', hpMulti: 3.0, spMulti: 4.0, atkMulti: 1.8, defMulti: 2.0, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    windhawk: { name: '風鷹狩獵者', icon: '🌪️', primaryStat: 'dex', hpMulti: 2.8, spMulti: 2.0, atkMulti: 3.8, defMulti: 1.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    meister: { name: '機甲神匠', icon: '⚙️', primaryStat: 'str', hpMulti: 4.0, spMulti: 2.2, atkMulti: 3.0, defMulti: 2.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    imperial_guard: { name: '帝國聖衛軍', icon: '🏰', primaryStat: 'vit', hpMulti: 6.0, spMulti: 2.0, atkMulti: 2.2, defMulti: 3.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    elemental_master: { name: '元素支配者', icon: '🌌', primaryStat: 'int', hpMulti: 2.8, spMulti: 4.5, atkMulti: 3.5, defMulti: 1.8, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    abyss_chaser: { name: '深淵追跡者', icon: '🌑', primaryStat: 'agi', hpMulti: 3.5, spMulti: 2.2, atkMulti: 3.0, defMulti: 2.2, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    inquisitor: { name: '審判者', icon: '🔥', primaryStat: 'str', hpMulti: 4.0, spMulti: 2.8, atkMulti: 4.0, defMulti: 2.2, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    troubadour_trouvere: { name: '樂之絃音', icon: '🎼', primaryStat: 'dex', hpMulti: 3.0, spMulti: 3.0, atkMulti: 2.8, defMulti: 1.8, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
    biolo: { name: '生命締造者', icon: '🧬', primaryStat: 'str', hpMulti: 3.5, spMulti: 2.5, atkMulti: 2.5, defMulti: 2.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
  },
// ... existing code ...
  // ==========================================
  // 5. 職業技能樹資料庫 (實裝官方被動素質與多段攻擊邏輯)
  // ==========================================
  SKILLS: {
    // 【初心者】
    novice: [
      { id: 'n_basic', name: '基本技能', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `全屬性微幅增加 ${lv}`, passiveAttr: (lv) => ({ str: lv, agi: lv, vit: lv, int: lv, dex: lv, luk: lv }) },
      { id: 'n_playdead', name: '裝死', icon: '👻', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 10 SP，瞬間回復 20% HP 脫離險境`, spCost: (lv) => 10, healHpPct: 0.2 },
      { id: 'n_firstaid', name: '急救', icon: '🩹', type: 'active', maxLv: 1, reqJobLv: 8, desc: (lv) => `消耗 3 SP，回復 15 HP`, spCost: (lv) => 3, healPower: (lv) => 15 }
    ],

    // 【一轉職業】
    swordman: [
      { id: 's_bash', name: '狂擊', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${5+lv*2} SP，造成 ${150 + lv*30}% 物理傷害`, spCost: (lv) => 5+lv*2, dmgMulti: (lv) => 1.5 + lv*0.3, hits: 1 },
      { id: 's_magnum', name: '怒爆', icon: '🌋', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv} SP，造成 ${200 + lv*20}% 火屬性傷害，並附加火屬性攻擊`, spCost: (lv) => 15+lv, dmgMulti: (lv) => 2.0 + lv*0.2, hits: 1 },
      { id: 's_regen', name: '快速回復', icon: '❤️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `每 6 秒回復 ${lv*2}% 最大生命`, passiveAttr: (lv) => ({ hpRegen: lv*2 }) },
      { id: 's_mastery', name: '單手劍修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備單手劍時攻擊力增加 ${lv*4}`, passiveAttr: (lv) => ({ skAtk: lv*4 }) }, // 簡化為直接加 ATK
      { id: 's_provoke', name: '挑釁', icon: '💢', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `怪物防禦力下降 ${lv*5}%，自身攻擊力上升` }
    ],
    magician: [
      { id: 'm_coldbolt', name: '冰箭術', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 冰屬性傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv },
      { id: 'm_firebolt', name: '火箭術', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${12+lv*2} SP，造成 ${lv} 段 ${100}% 火屬性傷害`, spCost: (lv) => 12+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv },
      { id: 'm_zen', name: '禪心', icon: '🧘', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `每 6 秒額外回復 ${lv*3} SP`, passiveAttr: (lv) => ({ spRegen: lv*3 }) },
      { id: 'm_firewall', name: '火牆術', icon: '🧱', type: 'passive', maxLv: 10, reqJobLv: 20, desc: (lv) => `遭受攻擊時有 ${lv*3}% 機率阻擋傷害` }
    ],
    thief: [
      { id: 't_double', name: '二刀連擊', icon: '⚔️', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `裝備短劍時，有 ${lv*5}% 機率造成雙倍傷害`, passiveAttr: (lv) => ({ doubleHitChance: lv*5 }) },
      { id: 't_envenom', name: '施毒', icon: '☠️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 15 SP，造成 ${150 + lv*15}% 傷害並機率附加劇毒`, spCost: (lv) => 15, dmgMulti: (lv) => 1.5 + lv*0.15, hits: 1 },
      { id: 't_flee', name: '殘影', icon: '💨', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `FLEE (迴避率) 額外提升 ${lv*3} 點`, passiveAttr: (lv) => ({ flee: lv*3 }) },
      { id: 't_hide', name: '隱匿', icon: '🥷', type: 'passive', maxLv: 10, reqJobLv: 25, desc: (lv) => `提升暴擊機率 ${lv} 點`, passiveAttr: (lv) => ({ crit: lv }) }
    ],
    acolyte: [
      { id: 'a_heal', name: '治癒術', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${13+lv*3} SP，回復生命 (看INT與等級)`, spCost: (lv) => 13+lv*3, healPower: (lv) => 150 + lv*50 },
      { id: 'a_bless', name: '天使之賜福', icon: '👼', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `常駐 STR/INT/DEX 各提升 ${lv} 點`, passiveAttr: (lv) => ({ str: lv, int: lv, dex: lv }) },
      { id: 'a_agi', name: '加速術', icon: '🏃', type: 'passive', maxLv: 10, reqJobLv: 20, desc: (lv) => `常駐 AGI 提升 ${lv} 點，FLEE 提升 ${lv*2}`, passiveAttr: (lv) => ({ agi: lv, flee: lv*2 }) },
      { id: 'a_holy', name: '神聖之光', icon: '🌟', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 15 SP，造成 200% 聖屬性傷害`, spCost: (lv) => 15, dmgMulti: (lv) => 2.0, hits: 1 }
    ],
    archer: [
      { id: 'ar_double', name: '二連矢', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${8+lv*2} SP，連續射出兩箭，單下 ${100 + lv*10}% 傷害`, spCost: (lv) => 8+lv*2, dmgMulti: (lv) => 1.0 + lv*0.1, hits: 2 },
      { id: 'ar_owl', name: '鴞梟之眼', icon: '🦉', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `DEX 額外提升 ${lv} 點`, passiveAttr: (lv) => ({ dex: lv }) },
      { id: 'ar_vulture', name: '蒼鷹之眼', icon: '🦅', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `HIT (命中率) 額外提升 ${lv*3} 點`, passiveAttr: (lv) => ({ hit: lv*3 }) },
      { id: 'ar_shower', name: '箭雨', icon: '🌧️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*3} SP，對範圍造成 ${150+lv*20}% 傷害`, spCost: (lv) => 15+lv*3, dmgMulti: (lv) => 1.5 + lv*0.2, hits: 1 }
    ],
    merchant: [
      { id: 'me_mammonite', name: '金錢攻擊', icon: '🪙', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${lv*15} Zeny，造成 ${250 + lv*50}% 強力傷害`, zenyCost: (lv) => lv*15, dmgMulti: (lv) => 2.5 + lv*0.5, hits: 1 },
      { id: 'me_greed', name: '貪婪', icon: '💰', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `打怪獲得金幣增加 ${lv*5}%`, passiveAttr: (lv) => ({ goldBonus: lv*5 }) },
      { id: 'me_weight', name: '負重量上升', icon: '🎒', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `最大背包容量增加 ${lv*5} 格` }, // 前端可轉換為背包格數
      { id: 'me_cart', name: '手推車攻擊', icon: '🛒', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${150 + lv*30}% 傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.5 + lv*0.3, hits: 1 }
    ],

    // 【二轉 2-1】
    knight: [
      { id: 'k_pierce', name: '連刺攻擊', icon: '🔱', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 7 SP，對中大型造成多段 ${150 + lv*10}% 傷害`, spCost: (lv) => 7, dmgMulti: (lv) => 1.5 + lv*0.1, hits: 3 }, // 簡化為3段
      { id: 'k_bowling', name: '怪物互擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*2} SP，造成 ${200 + lv*50}% 範圍爆擊`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 2.0 + lv*0.5, hits: 1 },
      { id: 'k_quicken', name: '雙手劍增壓', icon: '⚡', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備雙手劍時大幅提升 ASPD`, passiveAttr: (lv) => ({ aspdBonus: lv*30 }) }, // 數值越大攻速越快
      { id: 'k_pecopeco', name: '騎乘術', icon: '🦤', type: 'passive', maxLv: 1, reqJobLv: 20, desc: (lv) => `可騎乘大嘴鳥，大幅增加移動速度與負重量` }
    ],
    wizard: [
      { id: 'w_storm', name: '暴風雪', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${40+lv*5} SP，造成 10 段 ${140 + lv*40}% 魔法傷害`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.4 + lv*0.4, hits: 10 },
      { id: 'w_amp', name: '魔力增幅', icon: '🔮', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `下一次魔法攻擊提升 ${lv*5}% MATK`, passiveAttr: (lv) => ({ matkBonusPct: lv*5 }) },
      { id: 'w_meteor', name: '隕石術', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${30+lv*5} SP，降下隕石造成多段火屬性傷害`, spCost: (lv) => 30+lv*5, dmgMulti: (lv) => 1.0 + lv*0.2, hits: (lv) => Math.floor(lv/2)+2 }
    ],
    assassin: [
      { id: 'as_sonic', name: '音速投擲', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 34 SP，瞬間八連擊，總共 ${300 + lv*60}% 傷害`, spCost: (lv) => 34, dmgMulti: (lv) => 0.5 + lv*0.075, hits: 8 },
      { id: 'as_katar', name: '拳刃修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備拳刃時 ATK 提升 ${lv*3}，CRI 倍增`, passiveAttr: (lv) => ({ skAtk: lv*3, critMulti: 2 }) },
      { id: 'as_cloak', name: '偽裝', icon: '🥷', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `提升暴擊傷害 ${lv*5}%`, passiveAttr: (lv) => ({ critDmgPct: lv*5 }) }
    ],
    priest: [
      { id: 'pr_magnus', name: '十字驅魔', icon: '✝️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${40+lv*5} SP，對不死/惡魔造成 ${lv} 段毀滅傷害`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.0, hits: (lv) => lv },
      { id: 'pr_magni', name: '聖母之頌歌', icon: '🎵', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `SP 自然回復速度加倍`, passiveAttr: (lv) => ({ spRegenMulti: 2.0 }) },
      { id: 'pr_kyrie', name: '霸邪之陣', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `防禦力增加 ${lv*3}，並有低機率格擋攻擊`, passiveAttr: (lv) => ({ def: lv*3 }) }
    ],
    hunter: [
      { id: 'ht_blitz', name: '閃電衝擊', icon: '🦅', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${10+lv} SP，老鷹造成無視防禦 ${lv} 段傷害`, spCost: (lv) => 10+lv, dmgMulti: (lv) => 1.0, hits: (lv) => lv, ignoreDef: true },
      { id: 'ht_falcon', name: '獵鷹尋笛', icon: '🦉', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `普攻時機率自動觸發閃電衝擊`, passiveAttr: (lv) => ({ autoBlitzChance: 10 }) },
      { id: 'ht_focus', name: '心神凝聚', icon: '🎯', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `AGI 與 DEX 各提升 ${lv}%`, passiveAttr: (lv) => ({ agiPct: lv, dexPct: lv }) }
    ],
    blacksmith: [
      { id: 'bs_cart', name: '手推車終結技', icon: '🛒', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 1500Zeny，造成 ${150 + lv*150}% 強制無屬性傷害`, zenyCost: (lv) => 1500, spCost: (lv) => 15, dmgMulti: (lv) => 1.5 + lv*1.5, hits: 1 },
      { id: 'bs_adrenalin', name: '速度激發', icon: '⚡', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備斧類時 ASPD 提升 30%`, passiveAttr: (lv) => ({ aspdBonusPct: 30 }) },
      { id: 'bs_weapon', name: '武器研究', icon: '🔨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `基礎攻擊力與命中率各提升 ${lv*2}`, passiveAttr: (lv) => ({ skAtk: lv*2, hit: lv*2 }) }
    ],

    // 【二轉 2-2】
    crusader: [
      { id: 'cr_cross', name: '聖十字審判', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗自身 HP/SP，造成 ${100 + lv*40}% 物理+魔法混合傷害 3 段`, spCost: (lv) => 20+lv*3, dmgMulti: (lv) => 1.0 + lv*0.4, hits: 3 },
      { id: 'cr_faith', name: '信任', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `最大 HP 增加 ${lv*200}，神聖抗性增加`, passiveAttr: (lv) => ({ maxHpBonus: lv*200 }) },
      { id: 'cr_guard', name: '自動防禦', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `受擊時有 ${lv*3}% 機率完全格擋傷害`, passiveAttr: (lv) => ({ blockChance: lv*3 }) }
    ],
    sage: [
      { id: 'sa_spell', name: '魔法懲罰', icon: '📖', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${15+lv*2} SP，吸收敵方魔法並轉為自身 HP`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 1.5, hits: 1 },
      { id: 'sa_auto', name: '自動念咒', icon: '🔥', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻時有 ${lv*2}% 機率觸發設定的元素箭`, passiveAttr: (lv) => ({ autoSpellChance: lv*2 }) },
      { id: 'sa_free', name: '自由施法', icon: '🏃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `施法期間可以移動且攻擊速度增加`, passiveAttr: (lv) => ({ aspdBonusPct: lv*2 }) }
    ],
    rogue: [
      { id: 'rg_raid', name: '背刺', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${12+lv*2} SP，必定命中造成 ${300 + lv*40}% 傷害`, spCost: (lv) => 12+lv*2, dmgMulti: (lv) => 3.0 + lv*0.4, hits: 1, ignoreFlee: true },
      { id: 'rg_snatch', name: '強奪', icon: '💰', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `掉寶率額外提升 ${lv*2}%`, passiveAttr: (lv) => ({ dropBonus: lv*2 }) },
      { id: 'rg_tunnel', name: '潛遁', icon: '🥷', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `FLEE 增加 ${lv*5} 點，並提高暴擊率`, passiveAttr: (lv) => ({ flee: lv*5, crit: lv }) }
    ],
    monk: [
      { id: 'mo_ashura', name: '阿修羅霸凰拳', icon: '👊', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `消耗剩餘所有SP(至少100)，造成毀滅性真實傷害`, spCost: (lv) => 100, dmgMulti: (lv) => 10.0 + lv*5.0, hits: 1, ignoreDef: true },
      { id: 'mo_dodge', name: '移花接木', icon: '🍃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `FLEE 提升 ${lv*1.5}，受擊機率減免`, passiveAttr: (lv) => ({ flee: lv*2 }) },
      { id: 'mo_invest', name: '浸透勁', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 20 SP，無視防禦造成 ${100+lv*50}% 傷害`, spCost: (lv) => 20, dmgMulti: (lv) => 1.0 + lv*0.5, hits: 1, ignoreDef: true }
    ],
    bard: [
      { id: 'bd_vulcan', name: '奧義箭亂舞', icon: '🎸', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${25+lv*3} SP，對目標發出 9 段傷害`, spCost: (lv) => 25+lv*3, dmgMulti: (lv) => 0.5 + lv*0.1, hits: 9 },
      { id: 'bd_bragi', name: '布萊奇之詩', icon: '🎵', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `技能冷卻與施法時間減少 ${lv*3}%`, passiveAttr: (lv) => ({ cdrPct: lv*3 }) },
      { id: 'bd_music', name: '樂器修練', icon: '🎺', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備樂器時，基礎攻擊力增加 ${lv*3}`, passiveAttr: (lv) => ({ skAtk: lv*3 }) }
    ],
    alchemist: [
      { id: 'al_demo', name: '火煙瓶投擲', icon: '🧪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${15+lv*2} SP，引發火災造成多段持續傷害`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 1.0 + lv*0.2, hits: 5 },
      { id: 'al_potion', name: '知識藥水', icon: '💊', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `藥水回復量提升 ${lv*5}%`, passiveAttr: (lv) => ({ potionEff: lv*5 }) },
      { id: 'al_homun', name: '生命體呼喚', icon: '🐥', type: 'passive', maxLv: 5, reqJobLv: 15, desc: (lv) => `召喚生命體協助攻擊，普攻時有 ${lv*5}% 機率追加傷害`, passiveAttr: (lv) => ({ autoSpellChance: lv*5 }) }
    ],

    // 【三轉】
    rune_knight: [
      { id: 'rk_spear', name: '百矛穿刺', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，造成 ${800 + lv*120}% 爆發傷害`, spCost: (lv) => 60, dmgMulti: (lv) => 8.0 + lv*1.2, hits: 1 },
      { id: 'rk_rune', name: '盧恩精熟', icon: '🪨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `全屬性 +${lv*2}，解鎖盧恩石力量`, passiveAttr: (lv) => ({ str: lv*2, agi: lv*2, vit: lv*2, int: lv*2, dex: lv*2, luk: lv*2 }) },
      { id: 'rk_breath', name: '龍之吐息', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 50 SP，根據目前 HP 與 SP 造成巨大火屬性傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 10.0 + lv*1.0, hits: 1 }
    ],
    warlock: [
      { id: 'wl_crimson', name: '碧血隕石', icon: '☄️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 80 SP，造成大範圍 ${1300 + lv*700}% 火屬魔法`, spCost: (lv) => 80, dmgMulti: (lv) => 13.0 + lv*7.0, hits: 1 },
      { id: 'wl_chain', name: '連鎖電擊', icon: '⚡', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 60 SP，造成多段連鎖風屬性傷害`, spCost: (lv) => 60, dmgMulti: (lv) => 5.0 + lv*1.0, hits: 5 },
      { id: 'wl_reading', name: '讀取魔咒', icon: '📖', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `最大 SP 增加 ${lv*5}%，MATK 提升`, passiveAttr: (lv) => ({ maxSpPct: lv*5, matkBonusPct: lv*3 }) }
    ],
    guillotine_cross: [
      { id: 'gx_cross', name: '十字斬', icon: '❌', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 25 SP，造成 ${1200 + lv*300}% 物理傷害`, spCost: (lv) => 25, dmgMulti: (lv) => 12.0 + lv*3.0, hits: 2 },
      { id: 'gx_rolling', name: '迴旋刃', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 30 SP，對周圍造成 ${300 + lv*100}% 傷害並累積次數`, spCost: (lv) => 30, dmgMulti: (lv) => 3.0 + lv*1.0, hits: 1 },
      { id: 'gx_research', name: '新毒研究', icon: '🧪', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `攻擊時有 ${lv}% 機率賦予劇毒，毒屬性耐性增加`, passiveAttr: (lv) => ({ poisonChance: lv }) }
    ],
    arch_bishop: [
      { id: 'ab_judex', name: '審判', icon: '⚔️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 40 SP，造成 ${300 + lv*70}% 聖屬魔法`, spCost: (lv) => 40, dmgMulti: (lv) => 3.0 + lv*0.7, hits: 3 },
      { id: 'ab_highheal', name: '高階治癒術', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 70 SP，極大幅度恢復單體生命`, spCost: (lv) => 70, healPower: (lv) => 800 + lv*200 },
      { id: 'ab_sacra', name: '聖典', icon: '📜', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `受到治癒術效果提升 ${lv*4}%`, passiveAttr: (lv) => ({ healRecvPct: lv*4 }) }
    ],
    ranger: [
      { id: 'ra_storm', name: '箭風暴', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 40 SP，造成 ${1000 + lv*80}% 範圍傷害`, spCost: (lv) => 40, dmgMulti: (lv) => 10.0 + lv*0.8, hits: 1 },
      { id: 'ra_aim', name: '瞄準標靶', icon: '🎯', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 50 SP，對大型魔物造成極大傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 5.0 + lv*1.0, hits: 1 }, // 簡化
      { id: 'ra_warg', name: '狼突擊', icon: '🐺', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `普攻時機率召喚狼協同攻擊，傷害視LUK而定`, passiveAttr: (lv) => ({ autoBlitzChance: lv*2 }) }
    ],
    mechanic: [
      { id: 'mc_cannon', name: '加農砲', icon: '💣', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 50 SP，裝甲發射造成 ${700 + lv*300}% 傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 7.0 + lv*3.0, hits: 1 },
      { id: 'mc_axe', name: '斧頭迴旋風暴', icon: '🪓', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 40 SP，裝備斧頭時對周圍造成 ${300 + lv*100}% 傷害`, spCost: (lv) => 40, dmgMulti: (lv) => 3.0 + lv*1.0, hits: 6 },
      { id: 'mc_license', name: '魔導甲執照', icon: '🤖', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `裝備魔導甲時，攻擊力與防禦力大幅提升`, passiveAttr: (lv) => ({ skAtk: lv*10, def: lv*10 }) }
    ],
    royal_guard: [
      { id: 'rg_ray', name: '創世之光', icon: '🌟', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 80 SP，造成極大聖屬性魔法傷害`, spCost: (lv) => 80, dmgMulti: (lv) => 8.0 + lv*2.0, hits: 1 },
      { id: 'rg_vanish', name: '大地毀滅', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 60 SP，造成 ${500 + lv*100}% 物理傷害並降低敵人防禦`, spCost: (lv) => 60, dmgMulti: (lv) => 5.0 + lv*1.0, hits: 1 },
      { id: 'rg_shield', name: '先鋒部隊', icon: '🛡️', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `最大 HP 增加 ${lv*5}%，並增加仇恨值`, passiveAttr: (lv) => ({ maxHpPct: lv*5 }) }
    ],
    sorcerer: [
      { id: 'so_diamond', name: '鑽石星塵', icon: '❄️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 60 SP，造成範圍水屬性傷害並結冰`, spCost: (lv) => 60, dmgMulti: (lv) => 10.0 + lv*2.0, hits: 1 },
      { id: 'so_earth', name: '大地墳場', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 65 SP，造成範圍地屬性傷害並降低防禦`, spCost: (lv) => 65, dmgMulti: (lv) => 10.0 + lv*2.0, hits: 1 },
      { id: 'so_spirit', name: '精靈控制', icon: '🌌', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `增加召喚精靈時的各種素質加成`, passiveAttr: (lv) => ({ matkBonusPct: lv*2, spRegenMulti: 1.0+lv*0.1 }) }
    ],
    shadow_chaser: [
      { id: 'sc_fatal', name: '致命威脅', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 40 SP，瞬間逼近造成 ${600 + lv*150}% 傷害`, spCost: (lv) => 40, dmgMulti: (lv) => 6.0 + lv*1.5, hits: 1 },
      { id: 'sc_triangle', name: '三角射擊', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 50 SP，射出三發箭矢共造成 ${300 + lv*100}% 傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 3.0 + lv*1.0, hits: 3 },
      { id: 'sc_shadow', name: '魅影形態', icon: '🎭', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `FLEE 增加 ${lv*10}，受魔法傷害降低`, passiveAttr: (lv) => ({ flee: lv*10, mdef: lv*5 }) }
    ],
    sura: [
      { id: 'su_hell', name: '羅剎破凰擊', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗大量 HP/SP，HP 越低傷害越高`, spCost: (lv) => 100, dmgMulti: (lv) => 15.0 + lv*3.0, hits: 1, ignoreDef: true },
      { id: 'su_tiger', name: '虎砲', icon: '🐯', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 50 SP，根據消耗的 HP 造成巨大傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 10.0 + lv*2.0, hits: 1 },
      { id: 'su_zen', name: '潛龍昇天', icon: '🐉', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `MaxHP 增加 ${lv*2}%，MaxSP 增加 ${lv*2}%`, passiveAttr: (lv) => ({ maxHpPct: lv*2, maxSpPct: lv*2 }) }
    ],
    minstrel_wanderer: [
      { id: 'mw_rain', name: '大暴雨', icon: '🌧️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 70 SP，降下箭雨造成 ${lv * 12} 段傷害`, spCost: (lv) => 70, dmgMulti: (lv) => 1.0, hits: (lv) => lv*12 },
      { id: 'mw_voice', name: '絕望之歌', icon: '🎤', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 80 SP，造成範圍魔法傷害並機率恐懼`, spCost: (lv) => 80, dmgMulti: (lv) => 8.0 + lv*2.0, hits: 1 },
      { id: 'mw_lesson', name: '聲樂課程', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `增加所有歌曲/舞蹈的持續時間與效果`, passiveAttr: (lv) => ({ maxSp: lv*30 }) }
    ],
    genetic: [
      { id: 'ge_tornado', name: '手推車龍捲風', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗 40 SP，造成 ${500 + lv*100}% 物理傷害`, spCost: (lv) => 40, dmgMulti: (lv) => 5.0 + lv*1.0, hits: 1 },
      { id: 'ge_cannon', name: '手推車加農砲', icon: '💣', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 50 SP，造成極大遠程物理傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 8.0 + lv*1.5, hits: 1 },
      { id: 'ge_sword', name: '劍術修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備單手劍或短劍時，攻擊力提升 ${lv*5}`, passiveAttr: (lv) => ({ skAtk: lv*5 }) }
    ],

    // 【四轉】
    dragon_knight: [
      { id: 'dk_madness', name: '狂暴斬擊', icon: '🐉', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 80 SP，發揮龍之力量造成 ${2000 + lv*500}% 物理爆發`, spCost: (lv) => 80, dmgMulti: (lv) => 20.0 + lv*5.0, hits: 1 },
      { id: 'dk_hack', name: '橫掃斬', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 70 SP，範圍劈砍造成 ${1500 + lv*300}% 傷害`, spCost: (lv) => 70, dmgMulti: (lv) => 15.0 + lv*3.0, hits: 2 },
      { id: 'dk_aura', name: '龍之光環', icon: '✨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `全屬性超幅提升`, passiveAttr: (lv) => ({ atkPct: lv*2, str: lv*3 }) }
    ],
    imperial_guard: [
      { id: 'ig_crossrain', name: '聖十字雨', icon: '🌧️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 70 SP，降下聖光造成 ${1500 + lv*300}% 混合傷害`, spCost: (lv) => 70, dmgMulti: (lv) => 15.0 + lv*3.0, hits: 5 },
      { id: 'ig_judgment', name: '末日審判', icon: '⚖️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 100 SP，造成 ${2500 + lv*500}% 單體聖屬性制裁`, spCost: (lv) => 100, dmgMulti: (lv) => 25.0 + lv*5.0, hits: 1 },
      { id: 'ig_shield', name: '神聖護盾', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `受到傷害減少 ${lv*2}%，防禦力倍增`, passiveAttr: (lv) => ({ defPct: lv*3, mdefPct: lv*3 }) }
    ],
    arch_mage: [
      { id: 'am_hurricane', name: '毀滅風暴', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 120 SP，極大範圍造成 ${3000 + lv*500}% 魔法傷害`, spCost: (lv) => 120, dmgMulti: (lv) => 30.0 + lv*5.0, hits: 1 },
      { id: 'am_comet', name: '隕石連擊', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 150 SP，召喚彗星造成多段極大傷害`, spCost: (lv) => 150, dmgMulti: (lv) => 20.0 + lv*3.0, hits: 5 },
      { id: 'am_magic', name: '魔力極限', icon: '🔮', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `MATK 提升 ${lv*5}%，無視部分魔法防禦`, passiveAttr: (lv) => ({ matkBonusPct: lv*5, ignoreMdef: lv*3 }) }
    ],
    elemental_master: [
      { id: 'em_domain', name: '元素領域', icon: '🔮', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 100 SP，持續造成對應屬性的毀滅魔法傷害`, spCost: (lv) => 100, dmgMulti: (lv) => 25.0 + lv*3.0, hits: 3 },
      { id: 'em_spear', name: '元素爆破', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 90 SP，引爆元素造成 ${2800 + lv*400}% 傷害`, spCost: (lv) => 90, dmgMulti: (lv) => 28.0 + lv*4.0, hits: 1 },
      { id: 'em_mastery', name: '精靈大師', icon: '🌌', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `元素魔法傷害提升 ${lv*3}%`, passiveAttr: (lv) => ({ elementDmgPct: lv*3 }) }
    ],
    shadow_cross: [
      { id: 'sc_savage', name: '猛毒血刃', icon: '🩸', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，暴擊時造成 ${1800 + lv*400}% 致命傷害`, spCost: (lv) => 60, dmgMulti: (lv) => 18.0 + lv*4.0, hits: 1 },
      { id: 'sc_impact', name: '影舞衝擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 80 SP，範圍斬擊造成 ${2000 + lv*350}% 傷害`, spCost: (lv) => 80, dmgMulti: (lv) => 20.0 + lv*3.5, hits: 3 },
      { id: 'sc_shadow', name: '無盡暗影', icon: '🌑', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `暴擊傷害提升 ${lv*10}%，無視體型`, passiveAttr: (lv) => ({ critDmgPct: lv*10 }) }
    ],
    abyss_chaser: [
      { id: 'ac_dagger', name: '深淵短劍', icon: '🗡️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 50 SP，從陰影中造成 ${2200 + lv*300}% 物理傷害`, spCost: (lv) => 50, dmgMulti: (lv) => 22.0 + lv*3.0, hits: 1 },
      { id: 'ac_abyss', name: '深淵爆發', icon: '🌌', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 70 SP，範圍魔法傷害 ${1500 + lv*250}%`, spCost: (lv) => 70, dmgMulti: (lv) => 15.0 + lv*2.5, hits: 1 },
      { id: 'ac_eyes', name: '深淵之眼', icon: '👁️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `物理與魔法傷害皆提升 ${lv*3}%`, passiveAttr: (lv) => ({ atkPct: lv*3, matkBonusPct: lv*3 }) }
    ],
    cardinal: [
      { id: 'ca_arbitrium', name: '仲裁聖光', icon: '⚖️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 90 SP，對目標及其周圍造成巨大聖屬魔法傷害`, spCost: (lv) => 90, dmgMulti: (lv) => 20.0 + lv*4.0, hits: 1 },
      { id: 'ca_heal', name: '神聖治癒', icon: '💖', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 120 SP，全體究極恢復`, spCost: (lv) => 120, healPower: (lv) => 2000 + lv*500 },
      { id: 'ca_faith', name: '絕對信仰', icon: '⛪', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `聖屬性魔法傷害提升 ${lv*5}%`, passiveAttr: (lv) => ({ holyDmgPct: lv*5 }) }
    ],
    inquisitor: [
      { id: 'iq_oleum', name: '聖油洗禮', icon: '🏺', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 80 SP，引爆聖火造成多段物理傷害`, spCost: (lv) => 80, dmgMulti: (lv) => 5.0 + lv*2.0, hits: 5 },
      { id: 'iq_judge', name: '終極審判', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 150 SP，以阿修羅之勢造成 ${3000 + lv*500}% 真實傷害`, spCost: (lv) => 150, dmgMulti: (lv) => 30.0 + lv*5.0, hits: 1, ignoreDef: true },
      { id: 'iq_body', name: '金剛不壞', icon: '🥋', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `受到傷害極大幅度降低`, passiveAttr: (lv) => ({ defPct: lv*5 }) }
    ],
    windhawk: [
      { id: 'wh_gale', name: '狂野飛行', icon: '🦅', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 70 SP，與獵鷹合一造成 ${1500 + lv*350}% 遠程傷害`, spCost: (lv) => 70, dmgMulti: (lv) => 15.0 + lv*3.5, hits: 1 },
      { id: 'wh_storm', name: '無限風暴', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 100 SP，連續射擊造成 10 段傷害`, spCost: (lv) => 100, dmgMulti: (lv) => 2.0 + lv*0.5, hits: 10 },
      { id: 'wh_nature', name: '自然親和', icon: '🍃', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `遠程物理傷害提升 ${lv*4}%`, passiveAttr: (lv) => ({ rangeDmgPct: lv*4 }) }
    ],
    troubadour_trouvere: [
      { id: 'tt_rose', name: '玫瑰花箭', icon: '🌹', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，射出玫瑰造成範圍爆炸 ${1600 + lv*200}% 傷害`, spCost: (lv) => 60, dmgMulti: (lv) => 16.0 + lv*2.0, hits: 2 },
      { id: 'tt_symphony', name: '毀滅交響曲', icon: '🎼', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 90 SP，音波造成極大範圍 ${2500 + lv*300}% 魔法傷害`, spCost: (lv) => 90, dmgMulti: (lv) => 25.0 + lv*3.0, hits: 1 },
      { id: 'tt_stage', name: '終極舞台', icon: '🎭', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `技能 SP 消耗減少 ${lv*2}%，效能提升`, passiveAttr: (lv) => ({ spCostReduction: lv*2 }) }
    ],
    meister: [
      { id: 'ms_stomp', name: '戰斧踏伐', icon: '🪓', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 80 SP，巨斧重擊地面造成 ${2500 + lv*400}% 範圍傷害`, spCost: (lv) => 80, dmgMulti: (lv) => 25.0 + lv*4.0, hits: 1 },
      { id: 'ms_spark', name: '火花衝擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 100 SP，魔導甲全開造成 ${3000 + lv*500}% 傷害`, spCost: (lv) => 100, dmgMulti: (lv) => 30.0 + lv*5.0, hits: 1 },
      { id: 'ms_upgrade', name: '機甲升級', icon: '⚙️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `提升所有機甲技能傷害 ${lv*3}%`, passiveAttr: (lv) => ({ mechDmgPct: lv*3 }) }
    ],
    biolo: [
      { id: 'bi_creeper', name: '爆炸藤蔓', icon: '🌿', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 75 SP，召喚藤蔓引爆造成 ${2000 + lv*300}% 物理傷害`, spCost: (lv) => 75, dmgMulti: (lv) => 20.0 + lv*3.0, hits: 1 },
      { id: 'bi_acid', name: '究極強酸', icon: '🧪', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 120 SP，無視防禦造成 ${2500 + lv*400}% 混合傷害`, spCost: (lv) => 120, dmgMulti: (lv) => 25.0 + lv*4.0, hits: 1, ignoreDef: true },
      { id: 'bi_gene', name: '基因突變', icon: '🧬', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `全屬性增加，生命體能力大幅強化`, passiveAttr: (lv) => ({ allStat: lv*2 }) }
    ]
  },


  // ==========================================
  // 6. RO 底層核心素質公式
  // ==========================================
  FORMULAS: {
    // 狀態升級花費: 經典 RO 公式 (當前數值-1)/10 取整 + 2
    getStatCost: (currentStat) => Math.floor((currentStat - 1) / 10) + 2,

    // Base 經驗值公式 (三次方程模擬 RO 後期地獄)
    getBaseExpReq: (lv) => Math.floor(Math.pow(lv, 3) * 2.5 + lv * 150 + 100),
    
    // Job 經驗值公式
    getJobExpReq: (jobLv, isJob2) => {
      if (isJob2) return Math.floor(Math.pow(jobLv, 3.2) * 3 + jobLv * 300); // 二轉更難練
      return Math.floor(Math.pow(jobLv, 2.8) * 2 + jobLv * 100);
    }
  }
};
