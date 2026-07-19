/**
 * 掛機物語 - 仙境傳說 (RO) 經典還原資料庫 v3.0 (大型擴充版)
 * 
 * 部署指南：
 * 1. 將此檔案上傳至 GitHub。
 * 2. 透過 jsDelivr 或 Raw 連結在前端載入 (例如: https://raw.githubusercontent.com/您的帳號/您的Repo/main/rorpg.js)
 */

export const RO_DATABASE = {
    // ==========================================
    // 2. 經典地圖資料 (擴充至 22 張)
    // ==========================================
    MAPS: [
      { id: 'prt_fild08', name: '普隆德拉原野', minLevel: 1, bg: 'from-green-900 to-slate-900', emoji: '🍀' },
      { id: 'pay_fild04', name: '斐揚樹林', minLevel: 10, bg: 'from-emerald-900 to-slate-900', emoji: '🌲' },
      { id: 'moc_fild12', name: '夢羅克沙漠', minLevel: 15, bg: 'from-yellow-900 to-slate-900', emoji: '🏜️' },
      { id: 'iz_dun00', name: '柏伊亞嵐島(海底1F)', minLevel: 20, bg: 'from-blue-900 to-slate-900', emoji: '🌊' },
      { id: 'anthell01', name: '螞蟻地獄', minLevel: 25, bg: 'from-amber-950 to-slate-900', emoji: '🐜' },
      { id: 'pay_dun00', name: '斐揚地下洞穴(1F)', minLevel: 30, bg: 'from-zinc-900 to-slate-900', emoji: '🧟' },
      { id: 'mjolnir_04', name: '妙勒尼山脈', minLevel: 35, bg: 'from-green-950 to-slate-900', emoji: '⛰️' },
      { id: 'xmas_dun01', name: '玩具工廠(1F)', minLevel: 40, bg: 'from-blue-100 to-slate-900', emoji: '🎁' },
      { id: 'moc_pryd04', name: '金字塔內部(2F)', minLevel: 45, bg: 'from-orange-950 to-slate-900', emoji: '🐫' },
      { id: 'in_sphinx3', name: '斯芬克斯密穴(3F)', minLevel: 50, bg: 'from-red-950 to-slate-900', emoji: '🐶' },
      { id: 'orcsdun01', name: '獸人地下洞穴', minLevel: 55, bg: 'from-stone-900 to-slate-900', emoji: '🦴' },
      { id: 'gef_dun01', name: '吉芬地下密穴(1F)', minLevel: 60, bg: 'from-purple-900 to-slate-900', emoji: '🦇' },
      { id: 'lou_fild01', name: '洛陽原野', minLevel: 65, bg: 'from-green-800 to-slate-900', emoji: '🐉' },
      { id: 'c_tower1', name: '艾爾帕蘭鐘塔(1F)', minLevel: 70, bg: 'from-yellow-950 to-black', emoji: '🕰️' },
      { id: 'gl_church', name: '古城修道院', minLevel: 75, bg: 'from-slate-900 to-black', emoji: '⛪' },
      { id: 'gl_knt01', name: '古城騎士團(1F)', minLevel: 80, bg: 'from-gray-900 to-black', emoji: '🏇' },
      { id: 'mag_dun01', name: '諾可羅德(火洞1F)', minLevel: 85, bg: 'from-red-900 to-black', emoji: '🌋' },
      { id: 'lhz_dun03', name: '生體試驗所(3F)', minLevel: 90, bg: 'from-blue-950 to-black', emoji: '☣️' },
      { id: 'abyss_03', name: '深淵湖水地下洞穴(3F)', minLevel: 100, bg: 'from-purple-950 to-black', emoji: '🐲' },
      { id: 'thor_v03', name: '托爾火山(3F)', minLevel: 110, bg: 'from-red-950 to-black', emoji: '🔥' },
      { id: 'dic_dun02', name: '甲蟲洞穴', minLevel: 120, bg: 'from-amber-900 to-black', emoji: '🪲' },
      { id: 'lhz_dun04', name: '生體試驗所(4F)', minLevel: 140, bg: 'from-indigo-950 to-black', emoji: '🧪' },
    ],
  
// ==========================================
    // 3. 原汁原味魔物資料 (全地圖擴充版，每張至少10隻)
    // ==========================================
    MONSTERS: {
      'prt_fild08': [ // 普隆德拉原野 (新手村附近)
        { id: 1002, name: '波利', emoji: '💧', lv: 1, hp: 50, atk: 7, def: 0, hit: 10, flee: 5, baseExp: 2000000, jobExp: 1000000, gold: 5, dropRate: 0.1 },
        { id: 1063, name: '瘋兔', emoji: '🐇', lv: 2, hp: 60, atk: 11, def: 0, hit: 15, flee: 8, baseExp: 350, jobExp: 150, gold: 8, dropRate: 0.12 },
        { id: 1014, name: '綠棉蟲', emoji: '🐛', lv: 3, hp: 120, atk: 15, def: 5, hit: 20, flee: 12, baseExp: 500, jobExp: 300, gold: 12, dropRate: 0.15 },
        { id: 1049, name: '蒼蠅', emoji: '🪰', lv: 4, hp: 90, atk: 20, def: 2, hit: 25, flee: 25, baseExp: 750, jobExp: 450, gold: 10, dropRate: 0.15 },
        { id: 1008, name: '蟲蛹', emoji: '🪹', lv: 4, hp: 350, atk: 0, def: 10, hit: 0, flee: 0, baseExp: 800, jobExp: 800, gold: 15, dropRate: 0.18 },
        { id: 1031, name: '搖滾蝗蟲', emoji: '🦗', lv: 7, hp: 200, atk: 35, def: 5, hit: 35, flee: 20, baseExp: 1200, jobExp: 900, gold: 20, dropRate: 0.18 },
        { id: 1096, name: '波波利', emoji: '🟢', lv: 14, hp: 350, atk: 55, def: 8, hit: 45, flee: 25, baseExp: 2500, jobExp: 1500, gold: 25, dropRate: 0.2 },
        { id: 1013, name: '盜蟲', emoji: '🪳', lv: 6, hp: 180, atk: 30, def: 5, hit: 30, flee: 18, baseExp: 1000, jobExp: 700, gold: 18, dropRate: 0.15 },
        { id: 1041, name: '大嘴鳥', emoji: '🦤', lv: 10, hp: 280, atk: 45, def: 10, hit: 38, flee: 20, baseExp: 1800, jobExp: 1200, gold: 22, dropRate: 0.18 },
        { id: 1115, name: '小青蛙', emoji: '🐸', lv: 5, hp: 150, atk: 25, def: 3, hit: 25, flee: 15, baseExp: 900, jobExp: 600, gold: 12, dropRate: 0.15 },
        //{ id: 1143, name: '天使波利 (MVP)', emoji: '👼', lv: 25, hp: 8500, atk: 250, def: 20, hit: 80, flee: 60, baseExp: 25000, jobExp: 15000, gold: 1500, dropRate: 0.6 }
      ],
      'pay_fild04': [ // 斐揚原野
        { id: 1011, name: '魔菇', emoji: '🍄', lv: 12, hp: 360, atk: 45, def: 10, hit: 30, flee: 15, baseExp: 2200, jobExp: 1300, gold: 25, dropRate: 0.18 },
        { id: 1065, name: '長老樹精', emoji: '🪵', lv: 15, hp: 520, atk: 60, def: 15, hit: 45, flee: 20, baseExp: 3500, jobExp: 2500, gold: 40, dropRate: 0.2 },
        { id: 1093, name: '大腳熊', emoji: '🐻', lv: 18, hp: 680, atk: 85, def: 20, hit: 55, flee: 25, baseExp: 4800, jobExp: 3200, gold: 50, dropRate: 0.22 },
        { id: 1059, name: '毒魔菇', emoji: '🍄', lv: 19, hp: 750, atk: 95, def: 18, hit: 60, flee: 28, baseExp: 5500, jobExp: 3500, gold: 55, dropRate: 0.22 },
        { id: 1111, name: '狸貓', emoji: '🦝', lv: 21, hp: 850, atk: 110, def: 15, hit: 65, flee: 40, baseExp: 6500, jobExp: 4200, gold: 65, dropRate: 0.25 },
        { id: 1012, name: '樹精', emoji: '🌳', lv: 9, hp: 250, atk: 35, def: 8, hit: 25, flee: 12, baseExp: 1500, jobExp: 1000, gold: 20, dropRate: 0.15 },
        { id: 1042, name: '青蛇', emoji: '🐍', lv: 14, hp: 420, atk: 55, def: 10, hit: 45, flee: 35, baseExp: 3000, jobExp: 2000, gold: 35, dropRate: 0.18 },
        { id: 1024, name: '蚯蚓', emoji: '🪱', lv: 16, hp: 580, atk: 70, def: 12, hit: 50, flee: 15, baseExp: 4000, jobExp: 2800, gold: 45, dropRate: 0.2 },
        { id: 1050, name: '克瑞米', emoji: '🦋', lv: 17, hp: 450, atk: 65, def: 8, hit: 60, flee: 50, baseExp: 3800, jobExp: 2500, gold: 38, dropRate: 0.25 },
        { id: 1150, name: '月夜貓 (MVP)', emoji: '🌙', lv: 55, hp: 25000, atk: 850, def: 35, hit: 180, flee: 180, baseExp: 150000, jobExp: 100000, gold: 5000, dropRate: 0.8 }
      ],
      'moc_fild12': [ // 夢羅克原野
        { id: 1113, name: '土波利', emoji: '🪨', lv: 11, hp: 180, atk: 28, def: 8, hit: 25, flee: 10, baseExp: 1800, jobExp: 1200, gold: 15, dropRate: 0.15 },
        { id: 1023, name: '大嘴鳥', emoji: '🦤', lv: 16, hp: 550, atk: 70, def: 12, hit: 40, flee: 35, baseExp: 3800, jobExp: 2600, gold: 35, dropRate: 0.2 },
        { id: 1004, name: '蒼蠅', emoji: '🪰', lv: 14, hp: 450, atk: 50, def: 5, hit: 45, flee: 50, baseExp: 3200, jobExp: 2200, gold: 30, dropRate: 0.2 },
        { id: 1044, name: '沙漠之狼', emoji: '🐺', lv: 22, hp: 950, atk: 110, def: 15, hit: 65, flee: 45, baseExp: 7500, jobExp: 4800, gold: 60, dropRate: 0.25 },
        { id: 1060, name: '巨石怪', emoji: '🗿', lv: 26, hp: 2000, atk: 180, def: 45, hit: 70, flee: 15, baseExp: 10500, jobExp: 6500, gold: 80, dropRate: 0.28 },
        { id: 1005, name: '皮休', emoji: '🐤', lv: 8, hp: 150, atk: 25, def: 5, hit: 25, flee: 15, baseExp: 1100, jobExp: 800, gold: 15, dropRate: 0.15 },
        { id: 1025, name: '摩卡', emoji: '🌵', lv: 15, hp: 600, atk: 55, def: 15, hit: 35, flee: 10, baseExp: 3500, jobExp: 2400, gold: 38, dropRate: 0.2 },
        { id: 1043, name: '蚯蚓', emoji: '🪱', lv: 20, hp: 850, atk: 90, def: 20, hit: 55, flee: 20, baseExp: 6000, jobExp: 4000, gold: 50, dropRate: 0.22 },
        { id: 1083, name: '傘蜥', emoji: '🦎', lv: 24, hp: 1100, atk: 130, def: 25, hit: 60, flee: 50, baseExp: 8000, jobExp: 5500, gold: 70, dropRate: 0.25 },
        { id: 1151, name: '皮里恩 (MVP)', emoji: '👅', lv: 58, hp: 32000, atk: 1100, def: 40, hit: 150, flee: 100, baseExp: 180000, jobExp: 120000, gold: 6000, dropRate: 0.8 }
      ],
      'iz_dun00': [ // 海底洞穴
        { id: 1069, name: '達拉蛙', emoji: '🐸', lv: 20, hp: 720, atk: 85, def: 10, hit: 50, flee: 30, baseExp: 5800, jobExp: 3800, gold: 45, dropRate: 0.2 },
        { id: 1029, name: '螃蟹', emoji: '🦀', lv: 24, hp: 1050, atk: 120, def: 35, hit: 60, flee: 25, baseExp: 8500, jobExp: 5500, gold: 65, dropRate: 0.22 },
        { id: 1070, name: '海葵', emoji: '🌺', lv: 25, hp: 1500, atk: 140, def: 15, hit: 75, flee: 10, baseExp: 9800, jobExp: 6200, gold: 75, dropRate: 0.25 },
        { id: 1068, name: '馬克', emoji: '🐟', lv: 28, hp: 1800, atk: 160, def: 20, hit: 85, flee: 40, baseExp: 12000, jobExp: 8000, gold: 90, dropRate: 0.28 },
        { id: 1066, name: '庫克雷', emoji: '🐌', lv: 18, hp: 600, atk: 75, def: 12, hit: 45, flee: 15, baseExp: 4500, jobExp: 3000, gold: 40, dropRate: 0.18 },
        { id: 1067, name: '水母', emoji: '🪼', lv: 22, hp: 900, atk: 105, def: 15, hit: 55, flee: 20, baseExp: 7000, jobExp: 4500, gold: 55, dropRate: 0.2 },
        { id: 1071, name: '人魚', emoji: '🧜‍♀️', lv: 30, hp: 2200, atk: 190, def: 25, hit: 90, flee: 45, baseExp: 14000, jobExp: 9500, gold: 110, dropRate: 0.3 },
        { id: 1072, name: '劍魚', emoji: '🦈', lv: 32, hp: 2600, atk: 220, def: 30, hit: 95, flee: 50, baseExp: 16500, jobExp: 11000, gold: 130, dropRate: 0.32 },
        { id: 1073, name: '氣泡蟲', emoji: '🐡', lv: 27, hp: 1600, atk: 150, def: 18, hit: 80, flee: 35, baseExp: 10500, jobExp: 7000, gold: 85, dropRate: 0.25 },
        { id: 1154, name: '海神 (MVP)', emoji: '🔱', lv: 62, hp: 45000, atk: 1400, def: 50, hit: 190, flee: 120, baseExp: 220000, jobExp: 150000, gold: 7000, dropRate: 0.85 }
      ],
      'anthell01': [ // 螞蟻地獄
        { id: 1085, name: '螞蟻卵', emoji: '🥚', lv: 10, hp: 500, atk: 0, def: 0, hit: 0, flee: 0, baseExp: 1000, jobExp: 500, gold: 5, dropRate: 0.05 },
        { id: 1021, name: '安德列', emoji: '🐜', lv: 25, hp: 1100, atk: 140, def: 25, hit: 70, flee: 40, baseExp: 9500, jobExp: 6000, gold: 70, dropRate: 0.22 },
        { id: 1097, name: '白蟻', emoji: '🐜', lv: 27, hp: 1250, atk: 160, def: 30, hit: 75, flee: 45, baseExp: 11000, jobExp: 7200, gold: 80, dropRate: 0.25 },
        { id: 1022, name: '兵蟻', emoji: '🐜', lv: 29, hp: 1400, atk: 180, def: 35, hit: 85, flee: 50, baseExp: 13000, jobExp: 8500, gold: 90, dropRate: 0.28 },
        { id: 1084, name: '黑蟻', emoji: '🐜', lv: 28, hp: 1350, atk: 170, def: 32, hit: 80, flee: 48, baseExp: 12000, jobExp: 7800, gold: 85, dropRate: 0.26 },
        { id: 1086, name: '蝙蝠', emoji: '🦇', lv: 18, hp: 650, atk: 80, def: 10, hit: 50, flee: 55, baseExp: 4500, jobExp: 3200, gold: 45, dropRate: 0.2 },
        { id: 1087, name: '吸血蝙蝠', emoji: '🧛', lv: 24, hp: 950, atk: 115, def: 15, hit: 65, flee: 65, baseExp: 8500, jobExp: 5500, gold: 65, dropRate: 0.22 },
        { id: 1088, name: '黃金蟲', emoji: '✨', lv: 35, hp: 3500, atk: 250, def: 40, hit: 100, flee: 60, baseExp: 25000, jobExp: 15000, gold: 500, dropRate: 0.4 },
        { id: 1089, name: '工蟻', emoji: '🐜', lv: 26, hp: 1150, atk: 150, def: 28, hit: 72, flee: 42, baseExp: 10000, jobExp: 6500, gold: 75, dropRate: 0.24 },
        { id: 1148, name: '瑪雅 (MVP)', emoji: '👑', lv: 65, hp: 55000, atk: 1800, def: 60, hit: 220, flee: 150, baseExp: 250000, jobExp: 180000, gold: 8000, dropRate: 0.85 }
      ],
      'pay_dun00': [ // 斐揚洞穴
        { id: 1015, name: '腐屍', emoji: '🧟', lv: 32, hp: 1500, atk: 180, def: 15, hit: 85, flee: 20, baseExp: 15000, jobExp: 10000, gold: 85, dropRate: 0.25 },
        { id: 1016, name: '邪骸戰士', emoji: '💀', lv: 35, hp: 1800, atk: 220, def: 20, hit: 95, flee: 35, baseExp: 18500, jobExp: 12500, gold: 100, dropRate: 0.28 },
        { id: 1026, name: '妖道', emoji: '🧟‍♀️', lv: 38, hp: 2200, atk: 260, def: 25, hit: 105, flee: 45, baseExp: 22000, jobExp: 15000, gold: 120, dropRate: 0.3 },
        { id: 1098, name: '九尾狐', emoji: '🦊', lv: 45, hp: 4200, atk: 350, def: 25, hit: 120, flee: 110, baseExp: 32000, jobExp: 22000, gold: 200, dropRate: 0.35 },
        { id: 1017, name: '吸血蝙蝠', emoji: '🦇', lv: 28, hp: 1100, atk: 140, def: 12, hit: 75, flee: 60, baseExp: 11000, jobExp: 7500, gold: 75, dropRate: 0.22 },
        { id: 1018, name: '白幽靈', emoji: '👻', lv: 36, hp: 2000, atk: 240, def: 0, hit: 100, flee: 85, baseExp: 19500, jobExp: 13500, gold: 110, dropRate: 0.3 },
        { id: 1027, name: '轉轉蛋', emoji: '🥚', lv: 33, hp: 1600, atk: 200, def: 18, hit: 90, flee: 30, baseExp: 16500, jobExp: 11500, gold: 95, dropRate: 0.26 },
        { id: 1028, name: '殭屍', emoji: '🧛‍♂️', lv: 40, hp: 2800, atk: 300, def: 30, hit: 110, flee: 25, baseExp: 26000, jobExp: 18000, gold: 150, dropRate: 0.32 },
        { id: 1030, name: '邪骸弓箭手', emoji: '🏹', lv: 42, hp: 3200, atk: 320, def: 22, hit: 130, flee: 50, baseExp: 29000, jobExp: 20000, gold: 170, dropRate: 0.34 },
        { id: 1155, name: '死靈 (MVP)', emoji: '🗡️', lv: 68, hp: 65000, atk: 2200, def: 65, hit: 240, flee: 180, baseExp: 300000, jobExp: 200000, gold: 9000, dropRate: 0.88 }
      ],
      'mjolnir_04': [ // 妙勒尼廢棄礦坑
        { id: 1019, name: '噬人花', emoji: '🥀', lv: 36, hp: 2800, atk: 250, def: 10, hit: 90, flee: 15, baseExp: 20000, jobExp: 13500, gold: 130, dropRate: 0.28 },
        { id: 1020, name: '黑蟻', emoji: '🕷️', lv: 40, hp: 3200, atk: 280, def: 15, hit: 100, flee: 35, baseExp: 25000, jobExp: 17000, gold: 150, dropRate: 0.3 },
        { id: 1047, name: '蜂兵', emoji: '🐝', lv: 42, hp: 3500, atk: 320, def: 20, hit: 115, flee: 85, baseExp: 28500, jobExp: 19500, gold: 170, dropRate: 0.32 },
        { id: 1074, name: '毒蜘蛛', emoji: '🕷️', lv: 34, hp: 2200, atk: 210, def: 15, hit: 85, flee: 45, baseExp: 17500, jobExp: 12000, gold: 115, dropRate: 0.26 },
        { id: 1075, name: '綠綿蟲', emoji: '🐛', lv: 30, hp: 1800, atk: 180, def: 12, hit: 75, flee: 30, baseExp: 14000, jobExp: 9500, gold: 95, dropRate: 0.24 },
        { id: 1076, name: '紅蝙蝠', emoji: '🦇', lv: 38, hp: 2600, atk: 250, def: 12, hit: 95, flee: 70, baseExp: 22500, jobExp: 15500, gold: 135, dropRate: 0.28 },
        { id: 1077, name: '工蜂', emoji: '🐝', lv: 35, hp: 2400, atk: 230, def: 18, hit: 90, flee: 60, baseExp: 19000, jobExp: 13000, gold: 125, dropRate: 0.27 },
        { id: 1078, name: '鍬形蟲', emoji: '🪲', lv: 45, hp: 4200, atk: 380, def: 40, hit: 120, flee: 40, baseExp: 33000, jobExp: 23000, gold: 200, dropRate: 0.35 },
        { id: 1079, name: '螳螂', emoji: '🦗', lv: 48, hp: 5000, atk: 450, def: 35, hit: 135, flee: 65, baseExp: 40000, jobExp: 28000, gold: 240, dropRate: 0.38 },
        { id: 1048, name: '蜂后 (MVP)', emoji: '👑', lv: 72, hp: 95000, atk: 2800, def: 75, hit: 280, flee: 250, baseExp: 350000, jobExp: 250000, gold: 12000, dropRate: 0.9 }
      ],
      'xmas_dun01': [ // 玩具工廠
        { id: 1242, name: '餅乾人', emoji: '🍪', lv: 44, hp: 4000, atk: 350, def: 25, hit: 110, flee: 60, baseExp: 31000, jobExp: 21000, gold: 180, dropRate: 0.32 },
        { id: 1243, name: '禮盒怪', emoji: '🎁', lv: 47, hp: 4800, atk: 420, def: 35, hit: 125, flee: 70, baseExp: 36000, jobExp: 24500, gold: 210, dropRate: 0.35 },
        { id: 1244, name: '雪人', emoji: '⛄', lv: 50, hp: 5500, atk: 480, def: 40, hit: 140, flee: 50, baseExp: 42000, jobExp: 28500, gold: 250, dropRate: 0.38 },
        { id: 1245, name: '溜溜猴', emoji: '🐒', lv: 42, hp: 3500, atk: 310, def: 20, hit: 105, flee: 85, baseExp: 28000, jobExp: 19000, gold: 160, dropRate: 0.3 },
        { id: 1246, name: '波利(聖誕)', emoji: '🎅', lv: 35, hp: 2000, atk: 180, def: 15, hit: 85, flee: 40, baseExp: 18000, jobExp: 12000, gold: 100, dropRate: 0.25 },
        { id: 1247, name: '妖精(聖誕)', emoji: '🧝', lv: 45, hp: 4200, atk: 380, def: 28, hit: 115, flee: 65, baseExp: 33000, jobExp: 22000, gold: 190, dropRate: 0.33 },
        { id: 1248, name: '玩具兵', emoji: '💂', lv: 48, hp: 5000, atk: 450, def: 45, hit: 130, flee: 45, baseExp: 39000, jobExp: 26000, gold: 230, dropRate: 0.36 },
        { id: 1249, name: '狂暴餅乾人', emoji: '🍘', lv: 52, hp: 6200, atk: 520, def: 30, hit: 145, flee: 75, baseExp: 46000, jobExp: 31000, gold: 270, dropRate: 0.4 },
        { id: 1250, name: '小惡魔(聖誕)', emoji: '👿', lv: 55, hp: 7000, atk: 600, def: 35, hit: 160, flee: 90, baseExp: 55000, jobExp: 38000, gold: 320, dropRate: 0.42 },
        { id: 1251, name: '冰暴騎士 (MVP)', emoji: '❄️', lv: 75, hp: 120000, atk: 3500, def: 80, hit: 320, flee: 220, baseExp: 450000, jobExp: 320000, gold: 13000, dropRate: 0.9 }
      ],
      'moc_pryd04': [ // 金字塔
        { id: 1045, name: '木乃伊', emoji: '🤕', lv: 48, hp: 5500, atk: 480, def: 30, hit: 130, flee: 45, baseExp: 38000, jobExp: 26000, gold: 230, dropRate: 0.35 },
        { id: 1046, name: '蛇女伊絲', emoji: '🐍', lv: 52, hp: 6800, atk: 580, def: 35, hit: 150, flee: 80, baseExp: 48000, jobExp: 32000, gold: 280, dropRate: 0.38 },
        { id: 1152, name: '黑狐', emoji: '🐕‍🦺', lv: 54, hp: 7200, atk: 620, def: 25, hit: 165, flee: 120, baseExp: 52000, jobExp: 35000, gold: 310, dropRate: 0.4 },
        { id: 1040, name: '邪骸弓箭手', emoji: '🏹', lv: 45, hp: 4500, atk: 420, def: 25, hit: 140, flee: 60, baseExp: 34000, jobExp: 23000, gold: 200, dropRate: 0.33 },
        { id: 1051, name: '米洛斯', emoji: '🐂', lv: 50, hp: 6000, atk: 550, def: 45, hit: 135, flee: 40, baseExp: 43000, jobExp: 29000, gold: 260, dropRate: 0.37 },
        { id: 1052, name: '瑪爾杜克', emoji: '🎭', lv: 55, hp: 7500, atk: 650, def: 35, hit: 155, flee: 70, baseExp: 54000, jobExp: 36000, gold: 330, dropRate: 0.41 },
        { id: 1053, name: '邪骸戰俘', emoji: '⛓️', lv: 53, hp: 7000, atk: 600, def: 30, hit: 145, flee: 65, baseExp: 50000, jobExp: 34000, gold: 300, dropRate: 0.39 },
        { id: 1054, name: '木乃伊犬', emoji: '🐕', lv: 49, hp: 5800, atk: 500, def: 28, hit: 138, flee: 85, baseExp: 41000, jobExp: 28000, gold: 240, dropRate: 0.36 },
        { id: 1055, name: '白幽靈', emoji: '👻', lv: 46, hp: 4000, atk: 400, def: 0, hit: 120, flee: 100, baseExp: 36000, jobExp: 25000, gold: 210, dropRate: 0.34 },
        { id: 1112, name: '俄塞里斯 (MVP)', emoji: '🦅', lv: 78, hp: 150000, atk: 3800, def: 70, hit: 350, flee: 200, baseExp: 550000, jobExp: 380000, gold: 15000, dropRate: 0.95 }
      ],
      'in_sphinx3': [ // 斯芬克斯
        { id: 1094, name: '米洛斯(牛頭人)', emoji: '🐂', lv: 56, hp: 8500, atk: 750, def: 40, hit: 150, flee: 50, baseExp: 58000, jobExp: 39000, gold: 350, dropRate: 0.4 },
        { id: 1149, name: '帕莎納', emoji: '💃', lv: 58, hp: 9200, atk: 820, def: 45, hit: 175, flee: 130, baseExp: 65000, jobExp: 44000, gold: 400, dropRate: 0.42 },
        { id: 1095, name: '安努比斯', emoji: '🐺', lv: 65, hp: 15000, atk: 1200, def: 55, hit: 200, flee: 150, baseExp: 90000, jobExp: 60000, gold: 550, dropRate: 0.46 },
        { id: 1090, name: '瑪爾杜克', emoji: '🎭', lv: 55, hp: 7500, atk: 650, def: 35, hit: 155, flee: 70, baseExp: 54000, jobExp: 36000, gold: 330, dropRate: 0.41 },
        { id: 1091, name: '安魂彌撒', emoji: '🪦', lv: 52, hp: 6500, atk: 550, def: 30, hit: 140, flee: 60, baseExp: 45000, jobExp: 30000, gold: 270, dropRate: 0.38 },
        { id: 1092, name: '米米克', emoji: '📦', lv: 54, hp: 7000, atk: 620, def: 45, hit: 160, flee: 90, baseExp: 51000, jobExp: 35000, gold: 310, dropRate: 0.4 },
        { id: 1093, name: '邪骸戰俘', emoji: '⛓️', lv: 53, hp: 7000, atk: 600, def: 30, hit: 145, flee: 65, baseExp: 50000, jobExp: 34000, gold: 300, dropRate: 0.39 },
        { id: 1100, name: '赤蒼蠅', emoji: '🪰', lv: 60, hp: 10000, atk: 900, def: 35, hit: 185, flee: 160, baseExp: 72000, jobExp: 48000, gold: 430, dropRate: 0.43 },
        { id: 1101, name: '黑狐', emoji: '🐕‍🦺', lv: 54, hp: 7200, atk: 620, def: 25, hit: 165, flee: 120, baseExp: 52000, jobExp: 35000, gold: 310, dropRate: 0.4 },
        { id: 1156, name: '法老王 (MVP)', emoji: '👑', lv: 80, hp: 180000, atk: 4500, def: 85, hit: 400, flee: 250, baseExp: 650000, jobExp: 450000, gold: 18000, dropRate: 0.95 }
      ],
      'orcsdun01': [ // 獸人地下洞穴
        { id: 1152, name: '獸人腐屍', emoji: '🧟', lv: 60, hp: 12000, atk: 950, def: 35, hit: 160, flee: 60, baseExp: 75000, jobExp: 51000, gold: 450, dropRate: 0.42 },
        { id: 1153, name: '邪骸獸人', emoji: '💀', lv: 62, hp: 14500, atk: 1100, def: 40, hit: 180, flee: 75, baseExp: 85000, jobExp: 58000, gold: 500, dropRate: 0.45 },
        { id: 1154, name: '獸人戰士長', emoji: '🪓', lv: 65, hp: 17000, atk: 1300, def: 45, hit: 200, flee: 85, baseExp: 100000, jobExp: 68000, gold: 600, dropRate: 0.47 },
        { id: 1155, name: '獸人弓箭手', emoji: '🏹', lv: 63, hp: 13500, atk: 1050, def: 30, hit: 210, flee: 95, baseExp: 88000, jobExp: 60000, gold: 520, dropRate: 0.44 },
        { id: 1156, name: '吸血蝙蝠', emoji: '🦇', lv: 55, hp: 8000, atk: 700, def: 20, hit: 150, flee: 120, baseExp: 55000, jobExp: 38000, gold: 350, dropRate: 0.4 },
        { id: 1157, name: '赤蒼蠅', emoji: '🪰', lv: 60, hp: 10000, atk: 900, def: 35, hit: 185, flee: 160, baseExp: 72000, jobExp: 48000, gold: 430, dropRate: 0.43 },
        { id: 1158, name: '獸女', emoji: '👩', lv: 58, hp: 10500, atk: 850, def: 30, hit: 170, flee: 80, baseExp: 68000, jobExp: 46000, gold: 410, dropRate: 0.41 },
        { id: 1159, name: '鋼鐵蒼蠅', emoji: '🪰', lv: 66, hp: 18500, atk: 1400, def: 65, hit: 220, flee: 140, baseExp: 110000, jobExp: 75000, gold: 650, dropRate: 0.48 },
        { id: 1160, name: '綠綿蟲', emoji: '🐛', lv: 50, hp: 5000, atk: 450, def: 15, hit: 120, flee: 50, baseExp: 35000, jobExp: 24000, gold: 220, dropRate: 0.35 },
        { id: 1161, name: '獸人英雄 (MVP)', emoji: '👑', lv: 82, hp: 220000, atk: 5500, def: 90, hit: 450, flee: 280, baseExp: 800000, jobExp: 550000, gold: 22000, dropRate: 0.95 }
      ],
      'gef_dun01': [ // 吉芬地下密穴
        { id: 1032, name: '赤蒼蠅', emoji: '🪰', lv: 65, hp: 16500, atk: 1250, def: 25, hit: 220, flee: 180, baseExp: 98000, jobExp: 66000, gold: 550, dropRate: 0.45 },
        { id: 1098, name: '夢魘', emoji: '🦄', lv: 68, hp: 19000, atk: 1450, def: 45, hit: 240, flee: 160, baseExp: 115000, jobExp: 78000, gold: 650, dropRate: 0.48 },
        { id: 1033, name: '殭屍', emoji: '🧛‍♂️', lv: 60, hp: 12500, atk: 980, def: 30, hit: 170, flee: 60, baseExp: 78000, jobExp: 53000, gold: 460, dropRate: 0.42 },
        { id: 1034, name: '食屍鬼', emoji: '👹', lv: 64, hp: 15500, atk: 1150, def: 35, hit: 190, flee: 70, baseExp: 92000, jobExp: 62000, gold: 530, dropRate: 0.44 },
        { id: 1035, name: '南瓜先生', emoji: '🎃', lv: 66, hp: 17500, atk: 1300, def: 40, hit: 210, flee: 110, baseExp: 105000, jobExp: 71000, gold: 600, dropRate: 0.46 },
        { id: 1036, name: '瑪麗娜', emoji: '👻', lv: 62, hp: 14000, atk: 1050, def: 25, hit: 180, flee: 130, baseExp: 84000, jobExp: 57000, gold: 490, dropRate: 0.43 },
        { id: 1037, name: '白幽靈', emoji: '👻', lv: 58, hp: 10500, atk: 850, def: 0, hit: 160, flee: 150, baseExp: 66000, jobExp: 45000, gold: 400, dropRate: 0.41 },
        { id: 1038, name: '毒魔菇', emoji: '🍄', lv: 55, hp: 8500, atk: 720, def: 20, hit: 140, flee: 80, baseExp: 56000, jobExp: 38000, gold: 340, dropRate: 0.4 },
        { id: 1039, name: '狂暴惡靈', emoji: '🧟‍♂️', lv: 70, hp: 22000, atk: 1600, def: 50, hit: 250, flee: 90, baseExp: 130000, jobExp: 88000, gold: 720, dropRate: 0.5 },
        { id: 1157, name: '德古拉伯爵 (MVP)', emoji: '🦇', lv: 85, hp: 280000, atk: 7000, def: 95, hit: 500, flee: 350, baseExp: 950000, jobExp: 650000, gold: 28000, dropRate: 0.95 }
      ],
      'lou_fild01': [ // 洛陽原野
        { id: 1492, name: '米糕', emoji: '🌾', lv: 70, hp: 22000, atk: 1600, def: 50, hit: 250, flee: 120, baseExp: 135000, jobExp: 92000, gold: 750, dropRate: 0.48 },
        { id: 1493, name: '青蛇', emoji: '🐍', lv: 72, hp: 25000, atk: 1850, def: 40, hit: 270, flee: 180, baseExp: 155000, jobExp: 105000, gold: 850, dropRate: 0.5 },
        { id: 1494, name: '螳螂', emoji: '🦗', lv: 68, hp: 19500, atk: 1400, def: 35, hit: 230, flee: 140, baseExp: 120000, jobExp: 82000, gold: 680, dropRate: 0.46 },
        { id: 1495, name: '灰熊', emoji: '🐻', lv: 75, hp: 30000, atk: 2100, def: 65, hit: 290, flee: 100, baseExp: 175000, jobExp: 118000, gold: 950, dropRate: 0.52 },
        { id: 1496, name: '焦糖男孩', emoji: '🍮', lv: 71, hp: 23500, atk: 1750, def: 45, hit: 260, flee: 150, baseExp: 145000, jobExp: 98000, gold: 800, dropRate: 0.49 },
        { id: 1497, name: '毒蛇', emoji: '🐍', lv: 73, hp: 26500, atk: 1950, def: 42, hit: 280, flee: 190, baseExp: 165000, jobExp: 112000, gold: 900, dropRate: 0.51 },
        { id: 1498, name: '土人', emoji: '🗿', lv: 76, hp: 32000, atk: 2250, def: 70, hit: 300, flee: 110, baseExp: 190000, jobExp: 128000, gold: 1050, dropRate: 0.53 },
        { id: 1499, name: '地龍', emoji: '🐉', lv: 78, hp: 36000, atk: 2500, def: 75, hit: 310, flee: 130, baseExp: 210000, jobExp: 142000, gold: 1150, dropRate: 0.55 },
        { id: 1500, name: '狂暴螳螂', emoji: '🦗', lv: 80, hp: 40000, atk: 2800, def: 50, hit: 330, flee: 170, baseExp: 240000, jobExp: 160000, gold: 1300, dropRate: 0.56 },
        { id: 1501, name: '白素貞 (MVP)', emoji: '🐍', lv: 90, hp: 450000, atk: 11000, def: 100, hit: 600, flee: 450, baseExp: 1500000, jobExp: 1000000, gold: 40000, dropRate: 0.98 }
      ],
      'c_tower1': [ // 鐘塔
        { id: 1193, name: '鐘塔守護者', emoji: '🦉', lv: 75, hp: 32000, atk: 2200, def: 60, hit: 300, flee: 120, baseExp: 185000, jobExp: 125000, gold: 1000, dropRate: 0.52 },
        { id: 1195, name: '鐘怪', emoji: '🕰️', lv: 78, hp: 38000, atk: 2600, def: 75, hit: 320, flee: 140, baseExp: 220000, jobExp: 148000, gold: 1200, dropRate: 0.55 },
        { id: 1196, name: '古鐘魔', emoji: '⏰', lv: 74, hp: 30000, atk: 2050, def: 55, hit: 290, flee: 110, baseExp: 170000, jobExp: 115000, gold: 900, dropRate: 0.51 },
        { id: 1197, name: '潘克', emoji: '🍄', lv: 76, hp: 34000, atk: 2350, def: 65, hit: 310, flee: 130, baseExp: 200000, jobExp: 135000, gold: 1100, dropRate: 0.53 },
        { id: 1198, name: '飛行魔書', emoji: '📖', lv: 77, hp: 35500, atk: 2450, def: 40, hit: 330, flee: 200, baseExp: 210000, jobExp: 142000, gold: 1150, dropRate: 0.54 },
        { id: 1199, name: '米米克', emoji: '📦', lv: 72, hp: 26000, atk: 1800, def: 50, hit: 270, flee: 160, baseExp: 155000, jobExp: 105000, gold: 850, dropRate: 0.5 },
        { id: 1200, name: '蝙蝠弓箭手', emoji: '🏹', lv: 79, hp: 40000, atk: 2750, def: 45, hit: 350, flee: 180, baseExp: 235000, jobExp: 158000, gold: 1250, dropRate: 0.56 },
        { id: 1201, name: '小丑', emoji: '🃏', lv: 81, hp: 45000, atk: 3100, def: 50, hit: 370, flee: 220, baseExp: 260000, jobExp: 175000, gold: 1400, dropRate: 0.57 },
        { id: 1202, name: '魔羌', emoji: '🐐', lv: 73, hp: 28000, atk: 1950, def: 60, hit: 280, flee: 120, baseExp: 165000, jobExp: 112000, gold: 920, dropRate: 0.51 },
        { id: 1203, name: '時間管理人 (MVP)', emoji: '⏳', lv: 92, hp: 550000, atk: 13500, def: 110, hit: 650, flee: 500, baseExp: 1800000, jobExp: 1200000, gold: 50000, dropRate: 0.98 }
      ],
      'gl_church': [ // 古城修道院
        { id: 1163, name: '幽靈劍士', emoji: '👻', lv: 82, hp: 45000, atk: 3200, def: 55, hit: 350, flee: 220, baseExp: 280000, jobExp: 185000, gold: 1500, dropRate: 0.58 },
        { id: 1164, name: '惡靈', emoji: '🧟‍♂️', lv: 80, hp: 40000, atk: 2800, def: 45, hit: 330, flee: 180, baseExp: 245000, jobExp: 165000, gold: 1300, dropRate: 0.56 },
        { id: 1165, name: '暗黑祭司', emoji: '🧛', lv: 84, hp: 50000, atk: 3600, def: 60, hit: 370, flee: 200, baseExp: 310000, jobExp: 208000, gold: 1700, dropRate: 0.59 },
        { id: 1166, name: '迷幻之王', emoji: '👁️', lv: 86, hp: 58000, atk: 4100, def: 65, hit: 390, flee: 230, baseExp: 360000, jobExp: 242000, gold: 1950, dropRate: 0.61 },
        { id: 1167, name: '白幽靈', emoji: '👻', lv: 78, hp: 35000, atk: 2500, def: 0, hit: 310, flee: 250, baseExp: 215000, jobExp: 145000, gold: 1150, dropRate: 0.55 },
        { id: 1168, name: '米米克', emoji: '📦', lv: 79, hp: 38000, atk: 2650, def: 50, hit: 320, flee: 190, baseExp: 230000, jobExp: 155000, gold: 1200, dropRate: 0.56 },
        { id: 1169, name: '妖術師', emoji: '🧙', lv: 83, hp: 48000, atk: 3400, def: 55, hit: 360, flee: 210, baseExp: 295000, jobExp: 198000, gold: 1600, dropRate: 0.58 },
        { id: 1170, name: '石像鬼', emoji: '🦇', lv: 81, hp: 42000, atk: 3000, def: 65, hit: 340, flee: 170, baseExp: 260000, jobExp: 175000, gold: 1400, dropRate: 0.57 },
        { id: 1171, name: '赤蒼蠅', emoji: '🪰', lv: 77, hp: 33000, atk: 2350, def: 40, hit: 300, flee: 240, baseExp: 200000, jobExp: 135000, gold: 1100, dropRate: 0.54 },
        { id: 1172, name: '黑暗之王 (MVP)', emoji: '👑', lv: 95, hp: 750000, atk: 18000, def: 120, hit: 700, flee: 550, baseExp: 2500000, jobExp: 1700000, gold: 70000, dropRate: 0.99 }
      ],
      'gl_knt01': [ // 古城騎士團
        { id: 1131, name: '深淵騎士', emoji: '🏇', lv: 85, hp: 55000, atk: 4200, def: 70, hit: 380, flee: 180, baseExp: 350000, jobExp: 235000, gold: 2000, dropRate: 0.6 },
        { id: 1142, name: '卡利斯格', emoji: '🤺', lv: 88, hp: 65000, atk: 4800, def: 85, hit: 420, flee: 240, baseExp: 420000, jobExp: 285000, gold: 2500, dropRate: 0.62 },
        { id: 1143, name: '幽靈劍士', emoji: '👻', lv: 83, hp: 48000, atk: 3600, def: 60, hit: 360, flee: 200, baseExp: 310000, jobExp: 208000, gold: 1700, dropRate: 0.58 },
        { id: 1144, name: '幽靈弓箭手', emoji: '🏹', lv: 84, hp: 50000, atk: 3800, def: 55, hit: 390, flee: 210, baseExp: 330000, jobExp: 222000, gold: 1850, dropRate: 0.59 },
        { id: 1145, name: '血腥騎士', emoji: '🩸', lv: 90, hp: 75000, atk: 5500, def: 95, hit: 450, flee: 260, baseExp: 480000, jobExp: 325000, gold: 3000, dropRate: 0.65 },
        { id: 1146, name: '愛麗絲女僕', emoji: '🧹', lv: 82, hp: 45000, atk: 3400, def: 45, hit: 350, flee: 220, baseExp: 290000, jobExp: 195000, gold: 1600, dropRate: 0.57 },
        { id: 1147, name: '狂暴木乃伊', emoji: '🤕', lv: 86, hp: 58000, atk: 4400, def: 75, hit: 400, flee: 190, baseExp: 380000, jobExp: 255000, gold: 2200, dropRate: 0.61 },
        { id: 1148, name: '飛行魔書', emoji: '📖', lv: 81, hp: 42000, atk: 3100, def: 50, hit: 340, flee: 230, baseExp: 270000, jobExp: 182000, gold: 1500, dropRate: 0.56 },
        { id: 1149, name: '漫遊者', emoji: '🗡️', lv: 87, hp: 62000, atk: 4600, def: 80, hit: 410, flee: 250, baseExp: 400000, jobExp: 270000, gold: 2350, dropRate: 0.61 },
        { id: 1150, name: '巴風特 (MVP)', emoji: '🐐', lv: 98, hp: 950000, atk: 22000, def: 130, hit: 750, flee: 600, baseExp: 3000000, jobExp: 2000000, gold: 85000, dropRate: 0.99 }
      ],
      'mag_dun01': [ // 熔岩洞穴
        { id: 1213, name: '爆炎蝙蝠', emoji: '🦇', lv: 90, hp: 75000, atk: 5500, def: 45, hit: 450, flee: 320, baseExp: 550000, jobExp: 375000, gold: 2800, dropRate: 0.65 },
        { id: 1215, name: '熔岩巨石', emoji: '🪨', lv: 92, hp: 95000, atk: 6800, def: 100, hit: 400, flee: 100, baseExp: 680000, jobExp: 460000, gold: 3500, dropRate: 0.68 },
        { id: 1216, name: '七彩飛龍', emoji: '🐲', lv: 94, hp: 110000, atk: 7500, def: 85, hit: 480, flee: 280, baseExp: 750000, jobExp: 510000, gold: 4000, dropRate: 0.7 },
        { id: 1217, name: '火焰妖', emoji: '🔥', lv: 89, hp: 70000, atk: 5000, def: 60, hit: 430, flee: 300, baseExp: 510000, jobExp: 345000, gold: 2600, dropRate: 0.64 },
        { id: 1218, name: '赤焰惡魔', emoji: '👿', lv: 93, hp: 105000, atk: 7200, def: 75, hit: 460, flee: 260, baseExp: 720000, jobExp: 490000, gold: 3800, dropRate: 0.69 },
        { id: 1219, name: '夢魘', emoji: '🦄', lv: 88, hp: 65000, atk: 4600, def: 55, hit: 410, flee: 240, baseExp: 460000, jobExp: 310000, gold: 2400, dropRate: 0.63 },
        { id: 1220, name: '卡浩', emoji: '🔥', lv: 87, hp: 60000, atk: 4200, def: 50, hit: 390, flee: 220, baseExp: 420000, jobExp: 285000, gold: 2200, dropRate: 0.62 },
        { id: 1221, name: '火柱', emoji: '🌋', lv: 91, hp: 85000, atk: 6200, def: 90, hit: 440, flee: 150, baseExp: 620000, jobExp: 420000, gold: 3200, dropRate: 0.67 },
        { id: 1222, name: '三頭龍', emoji: '🐉', lv: 95, hp: 125000, atk: 8200, def: 95, hit: 500, flee: 300, baseExp: 820000, jobExp: 560000, gold: 4500, dropRate: 0.71 },
        { id: 1223, name: '伊夫利特 (MVP)', emoji: '🔥', lv: 110, hp: 3500000, atk: 45000, def: 180, hit: 1200, flee: 800, baseExp: 8000000, jobExp: 5500000, gold: 150000, dropRate: 0.99 }
      ],
      'lhz_dun03': [ // 企都生體試驗研究所 3F
        { id: 1634, name: '神射手 迪文', emoji: '🎯', lv: 96, hp: 150000, atk: 9500, def: 60, hit: 650, flee: 450, baseExp: 950000, jobExp: 650000, gold: 4500, dropRate: 0.7 },
        { id: 1637, name: '十字刺客 艾勒梅斯', emoji: '🗡️', lv: 98, hp: 165000, atk: 11000, def: 55, hit: 700, flee: 600, baseExp: 1100000, jobExp: 750000, gold: 5000, dropRate: 0.72 },
        { id: 1638, name: '騎士領主 賽依連', emoji: '🛡️', lv: 99, hp: 200000, atk: 13000, def: 95, hit: 680, flee: 400, baseExp: 1250000, jobExp: 850000, gold: 5800, dropRate: 0.74 },
        { id: 1639, name: '神官 瑪嘉雷特', emoji: '✝️', lv: 97, hp: 180000, atk: 8500, def: 80, hit: 620, flee: 380, baseExp: 1050000, jobExp: 710000, gold: 4800, dropRate: 0.71 },
        { id: 1640, name: '超魔導師 凱特莉娜', emoji: '🪄', lv: 98, hp: 140000, atk: 15000, def: 50, hit: 660, flee: 420, baseExp: 1150000, jobExp: 780000, gold: 5200, dropRate: 0.73 },
        { id: 1641, name: '神工匠 哈沃得', emoji: '🔨', lv: 99, hp: 220000, atk: 14000, def: 105, hit: 640, flee: 350, baseExp: 1300000, jobExp: 880000, gold: 6000, dropRate: 0.75 },
        { id: 1642, name: '狂暴小惡魔', emoji: '👿', lv: 94, hp: 115000, atk: 7800, def: 65, hit: 550, flee: 350, baseExp: 780000, jobExp: 530000, gold: 3800, dropRate: 0.68 },
        { id: 1643, name: '生化實驗體A', emoji: '🧟', lv: 95, hp: 125000, atk: 8200, def: 70, hit: 580, flee: 320, baseExp: 850000, jobExp: 580000, gold: 4100, dropRate: 0.69 },
        { id: 1644, name: '生化實驗體B', emoji: '🧟‍♀️', lv: 96, hp: 135000, atk: 8800, def: 75, hit: 600, flee: 340, baseExp: 920000, jobExp: 620000, gold: 4400, dropRate: 0.7 },
        { id: 1645, name: '賽依連·溫莎 (MVP)', emoji: '👑', lv: 115, hp: 4500000, atk: 65000, def: 220, hit: 1500, flee: 900, baseExp: 12000000, jobExp: 8000000, gold: 250000, dropRate: 0.99 }
      ],
      'abyss_03': [ // 深淵湖水地下洞穴
        { id: 1714, name: '黃金波利', emoji: '🌟', lv: 102, hp: 220000, atk: 12000, def: 70, hit: 750, flee: 500, baseExp: 1500000, jobExp: 1000000, gold: 6000, dropRate: 0.75 },
        { id: 1715, name: '三頭龍', emoji: '🐉', lv: 105, hp: 280000, atk: 14500, def: 85, hit: 800, flee: 450, baseExp: 1850000, jobExp: 1250000, gold: 7500, dropRate: 0.78 },
        { id: 1716, name: '赤焰飛龍', emoji: '🔥', lv: 103, hp: 240000, atk: 13000, def: 75, hit: 760, flee: 480, baseExp: 1600000, jobExp: 1080000, gold: 6500, dropRate: 0.76 },
        { id: 1717, name: '綠色飛龍', emoji: '🌿', lv: 104, hp: 260000, atk: 13800, def: 80, hit: 780, flee: 460, baseExp: 1720000, jobExp: 1160000, gold: 7000, dropRate: 0.77 },
        { id: 1718, name: '蔚藍飛龍', emoji: '💧', lv: 106, hp: 300000, atk: 15500, def: 90, hit: 820, flee: 440, baseExp: 2000000, jobExp: 1350000, gold: 8200, dropRate: 0.79 },
        { id: 1719, name: '黃金飛龍', emoji: '⚡', lv: 107, hp: 320000, atk: 16500, def: 95, hit: 840, flee: 420, baseExp: 2150000, jobExp: 1450000, gold: 8800, dropRate: 0.8 },
        { id: 1720, name: '骨龍', emoji: '🦴', lv: 108, hp: 350000, atk: 18000, def: 105, hit: 870, flee: 400, baseExp: 2350000, jobExp: 1580000, gold: 9500, dropRate: 0.81 },
        { id: 1721, name: '米米克', emoji: '📦', lv: 100, hp: 180000, atk: 10500, def: 60, hit: 720, flee: 520, baseExp: 1300000, jobExp: 880000, gold: 5000, dropRate: 0.73 },
        { id: 1722, name: '古鐘魔', emoji: '⏰', lv: 101, hp: 200000, atk: 11200, def: 65, hit: 740, flee: 510, baseExp: 1400000, jobExp: 950000, gold: 5500, dropRate: 0.74 },
        { id: 1723, name: '德塔泰羅 (MVP)', emoji: '🐲', lv: 120, hp: 5500000, atk: 75000, def: 250, hit: 1800, flee: 1100, baseExp: 15000000, jobExp: 10000000, gold: 300000, dropRate: 0.99 }
      ],
      'thor_v03': [ // 托爾火山 3F
        { id: 1830, name: '火焰守護者', emoji: '🛡️', lv: 108, hp: 320000, atk: 15500, def: 90, hit: 820, flee: 580, baseExp: 2100000, jobExp: 1420000, gold: 7500, dropRate: 0.78 },
        { id: 1831, name: '弓箭守護者', emoji: '🏹', lv: 109, hp: 280000, atk: 17000, def: 75, hit: 880, flee: 620, baseExp: 2300000, jobExp: 1550000, gold: 8000, dropRate: 0.79 },
        { id: 1832, name: '火神 依夫利特', emoji: '🌋', lv: 112, hp: 450000, atk: 18500, def: 110, hit: 900, flee: 550, baseExp: 2800000, jobExp: 1900000, gold: 10000, dropRate: 0.8 },
        { id: 1833, name: '火靈騎士', emoji: '🏇', lv: 115, hp: 380000, atk: 16000, def: 95, hit: 850, flee: 600, baseExp: 2400000, jobExp: 1600000, gold: 8500, dropRate: 0.82 },
        { id: 1834, name: '莎拉曼達', emoji: '🦎', lv: 110, hp: 340000, atk: 16500, def: 85, hit: 840, flee: 560, baseExp: 2250000, jobExp: 1520000, gold: 7800, dropRate: 0.8 },
        { id: 1835, name: '卡撒', emoji: '🔥', lv: 111, hp: 360000, atk: 17500, def: 92, hit: 860, flee: 570, baseExp: 2450000, jobExp: 1650000, gold: 8200, dropRate: 0.81 },
        { id: 1836, name: '火精靈', emoji: '🧚', lv: 107, hp: 290000, atk: 14500, def: 70, hit: 800, flee: 640, baseExp: 1950000, jobExp: 1320000, gold: 7000, dropRate: 0.77 },
        { id: 1837, name: '爆炎蝙蝠', emoji: '🦇', lv: 106, hp: 260000, atk: 13500, def: 65, hit: 780, flee: 660, baseExp: 1800000, jobExp: 1220000, gold: 6500, dropRate: 0.76 },
        { id: 1838, name: '熔岩巨石', emoji: '🪨', lv: 105, hp: 400000, atk: 12000, def: 120, hit: 750, flee: 400, baseExp: 1700000, jobExp: 1150000, gold: 6000, dropRate: 0.75 },
        { id: 1839, name: '火神 依夫利特 (MVP)', emoji: '👑', lv: 125, hp: 6500000, atk: 85000, def: 280, hit: 2000, flee: 1200, baseExp: 18000000, jobExp: 12000000, gold: 400000, dropRate: 0.99 }
      ],
      'dic_dun02': [ // 蟲洞
        { id: 2240, name: '獨角甲蟲', emoji: '🪲', lv: 122, hp: 650000, atk: 22000, def: 130, hit: 1050, flee: 650, baseExp: 4200000, jobExp: 2800000, gold: 12000, dropRate: 0.85 },
        { id: 2241, name: '雙角甲蟲', emoji: '🐞', lv: 125, hp: 780000, atk: 25000, def: 145, hit: 1100, flee: 700, baseExp: 5500000, jobExp: 3800000, gold: 15000, dropRate: 0.88 },
        { id: 2242, name: '鹿角甲蟲', emoji: '🦌', lv: 124, hp: 720000, atk: 24000, def: 140, hit: 1080, flee: 680, baseExp: 4900000, jobExp: 3400000, gold: 14000, dropRate: 0.87 },
        { id: 2243, name: '鍬形甲蟲', emoji: '✂️', lv: 123, hp: 680000, atk: 23000, def: 135, hit: 1060, flee: 660, baseExp: 4500000, jobExp: 3100000, gold: 13000, dropRate: 0.86 },
        { id: 2244, name: '幼蟲', emoji: '🐛', lv: 120, hp: 550000, atk: 18000, def: 110, hit: 1000, flee: 600, baseExp: 3500000, jobExp: 2400000, gold: 10000, dropRate: 0.83 },
        { id: 2245, name: '巨蟲卵', emoji: '🥚', lv: 118, hp: 800000, atk: 0, def: 150, hit: 0, flee: 0, baseExp: 2800000, jobExp: 1900000, gold: 8000, dropRate: 0.8 },
        { id: 2246, name: '劇毒甲蟲', emoji: '☠️', lv: 126, hp: 750000, atk: 26500, def: 125, hit: 1150, flee: 720, baseExp: 5800000, jobExp: 4000000, gold: 16000, dropRate: 0.89 },
        { id: 2247, name: '狂暴甲蟲', emoji: '💢', lv: 127, hp: 820000, atk: 28000, def: 155, hit: 1180, flee: 690, baseExp: 6200000, jobExp: 4200000, gold: 17500, dropRate: 0.9 },
        { id: 2248, name: '白金甲蟲', emoji: '💎', lv: 128, hp: 900000, atk: 25000, def: 200, hit: 1200, flee: 650, baseExp: 7500000, jobExp: 5000000, gold: 30000, dropRate: 0.92 },
        { id: 2249, name: '女皇甲蟲 (MVP)', emoji: '👑', lv: 135, hp: 8500000, atk: 105000, def: 320, hit: 2400, flee: 1400, baseExp: 25000000, jobExp: 16000000, gold: 600000, dropRate: 0.99 }
      ],
      'lhz_dun04': [ // 企都生體試驗研究所 4F
        { id: 2577, name: '修羅 陳', emoji: '🔥', lv: 142, hp: 1200000, atk: 35000, def: 160, hit: 1300, flee: 850, baseExp: 8500000, jobExp: 6000000, gold: 22000, dropRate: 0.9 },
        { id: 2580, name: '大主教 瑪嘉雷特', emoji: '✝️', lv: 145, hp: 1500000, atk: 38000, def: 180, hit: 1400, flee: 900, baseExp: 11000000, jobExp: 7500000, gold: 28000, dropRate: 0.95 },
        { id: 2581, name: '盧恩騎士 賽依連', emoji: '🛡️', lv: 146, hp: 1800000, atk: 45000, def: 220, hit: 1500, flee: 880, baseExp: 12500000, jobExp: 8500000, gold: 32000, dropRate: 0.96 },
        { id: 2582, name: '咒術士 凱特莉娜', emoji: '🪄', lv: 144, hp: 1100000, atk: 52000, def: 140, hit: 1450, flee: 920, baseExp: 10500000, jobExp: 7200000, gold: 26000, dropRate: 0.94 },
        { id: 2583, name: '十字斬首者 艾勒梅斯', emoji: '🗡️', lv: 147, hp: 1350000, atk: 48000, def: 150, hit: 1600, flee: 1100, baseExp: 13500000, jobExp: 9200000, gold: 35000, dropRate: 0.97 },
        { id: 2584, name: '遊俠 迪文', emoji: '🏹', lv: 143, hp: 1250000, atk: 42000, def: 155, hit: 1700, flee: 950, baseExp: 9500000, jobExp: 6500000, gold: 24000, dropRate: 0.92 },
        { id: 2585, name: '機械工匠 哈沃得', emoji: '⚙️', lv: 148, hp: 1950000, atk: 55000, def: 250, hit: 1350, flee: 800, baseExp: 14500000, jobExp: 9800000, gold: 38000, dropRate: 0.98 },
        { id: 2586, name: '皇家禁衛軍 (殘影)', emoji: '🛡️', lv: 140, hp: 1600000, atk: 32000, def: 210, hit: 1250, flee: 820, baseExp: 7500000, jobExp: 5200000, gold: 20000, dropRate: 0.88 },
        { id: 2587, name: '魅影追蹤者 (殘影)', emoji: '🎭', lv: 141, hp: 1150000, atk: 34000, def: 145, hit: 1550, flee: 1050, baseExp: 8000000, jobExp: 5500000, gold: 21000, dropRate: 0.89 },
        { id: 2588, name: '闇●無名劍士 (MVP)', emoji: '💀', lv: 150, hp: 12000000, atk: 150000, def: 350, hit: 3000, flee: 1800, baseExp: 45000000, jobExp: 30000000, gold: 1000000, dropRate: 0.99 }
      ]
    },
  
// ==========================================
    // 4. 裝備資料庫 (嚴格職業綁定與專屬素質，大幅擴充)
    // ==========================================
    ITEMS: {
      // --- 武器區 (Weapons) - 各系武器保留經典並補足 ---
      weapons: [
        // 短劍 (Daggers)
        { id: 'w_001', name: '笨拙短劍', type: 'weapon', reqLevel: 1, reqClass: ['all'], attr: { atk: 17 } },
        { id: 'w_002', name: '短劍', type: 'weapon', reqLevel: 12, reqClass: ['swordman', 'thief', 'magician', 'merchant', 'novice'], attr: { atk: 43 } },
        { id: 'w_003', name: '大馬士革短劍', type: 'weapon', reqLevel: 24, reqClass: ['swordman', 'thief', 'magician', 'merchant'], attr: { atk: 118 } },
        { id: 'w_004', name: '刺客匕首', type: 'weapon', reqLevel: 40, reqClass: ['thief'], attr: { atk: 140, flee: 10, crit: 5 } },
        { id: 'w_005', name: '神聖之首', type: 'weapon', reqLevel: 60, reqClass: ['swordman', 'thief'], attr: { atk: 165, hit: 20 } },
        { id: 'w_006', name: '幸運短劍', type: 'weapon', reqLevel: 70, reqClass: ['all'], attr: { atk: 120, luk: 15, crit: 10 } },
        { id: 'w_007', name: '月光匕首', type: 'weapon', reqLevel: 80, reqClass: ['magician', 'thief'], attr: { atk: 150, maxSp: 200, int: 5 } },
        { id: 'w_008', name: '破甲短劍', type: 'weapon', reqLevel: 95, reqClass: ['thief', 'merchant'], attr: { atk: 190, dex: 5 } },
        { id: 'w_009', name: '神聖天使之刃', type: 'weapon', reqLevel: 120, reqClass: ['thief', 'swordman'], attr: { atk: 240, hit: 30, str: 5 } },
        { id: 'w_010', name: '除靈短劍', type: 'weapon', reqLevel: 65, reqClass: ['thief', 'acolyte'], attr: { atk: 130, int: 3, matk: 50 } },
  
        // 單手劍/雙手劍 (Swords)
        { id: 'w_101', name: '長劍', type: 'weapon', reqLevel: 10, reqClass: ['swordman', 'merchant', 'thief'], attr: { atk: 45 } },
        { id: 'w_102', name: '圓月彎刀', type: 'weapon', reqLevel: 20, reqClass: ['swordman', 'thief'], attr: { atk: 85 } },
        { id: 'w_103', name: '海東劍', type: 'weapon', reqLevel: 35, reqClass: ['swordman', 'merchant'], attr: { atk: 120 } },
        { id: 'w_104', name: '狂擊之劍', type: 'weapon', reqLevel: 50, reqClass: ['swordman'], attr: { atk: 150, str: 3, hit: 5 } },
        { id: 'w_105', name: '雙手巨劍', type: 'weapon', reqLevel: 33, reqClass: ['swordman'], attr: { atk: 160 } },
        { id: 'w_106', name: '焰形劍', type: 'weapon', reqLevel: 60, reqClass: ['swordman'], attr: { atk: 200, str: 2 } },
        { id: 'w_107', name: '名刀 不知火', type: 'weapon', reqLevel: 75, reqClass: ['swordman'], attr: { atk: 250, crit: 20, agi: 3 } },
        { id: 'w_108', name: '水紋劍', type: 'weapon', reqLevel: 85, reqClass: ['swordman'], attr: { atk: 280, hit: 30, maxHp: 500 } },
        { id: 'w_109', name: '狂君之劍', type: 'weapon', reqLevel: 110, reqClass: ['swordman'], attr: { atk: 350, str: 8, maxHp: 1000 } },
        { id: 'w_110', name: '妖刀 村正', type: 'weapon', reqLevel: 90, reqClass: ['swordman'], attr: { atk: 260, crit: 30, agi: 5 } },
        { id: 'w_111', name: '聖劍 勝利之劍', type: 'weapon', reqLevel: 100, reqClass: ['swordman'], attr: { atk: 300, str: 5, int: 5, hit: 20 } },
  
        // 斧頭 (Axes)
        { id: 'w_201', name: '手斧', type: 'weapon', reqLevel: 10, reqClass: ['swordman', 'merchant'], attr: { atk: 50 } },
        { id: 'w_202', name: '戰鬥斧', type: 'weapon', reqLevel: 30, reqClass: ['swordman', 'merchant'], attr: { atk: 130 } },
        { id: 'w_203', name: '雙手斧', type: 'weapon', reqLevel: 50, reqClass: ['merchant', 'swordman'], attr: { atk: 185 } },
        { id: 'w_204', name: '血斧', type: 'weapon', reqLevel: 70, reqClass: ['merchant'], attr: { atk: 250, str: 5, agi: 2 } },
        { id: 'w_205', name: '毀滅之斧', type: 'weapon', reqLevel: 85, reqClass: ['merchant'], attr: { atk: 320, vit: 3 } },
        { id: 'w_206', name: '颶風之斧', type: 'weapon', reqLevel: 105, reqClass: ['merchant'], attr: { atk: 400, str: 10 } },
        { id: 'w_207', name: '斬首之斧', type: 'weapon', reqLevel: 95, reqClass: ['merchant', 'swordman'], attr: { atk: 350, hit: -10, str: 8 } },
  
        // 鈍器 (Maces)
        { id: 'w_301', name: '棍棒', type: 'weapon', reqLevel: 5, reqClass: ['swordman', 'merchant', 'acolyte'], attr: { atk: 23 } },
        { id: 'w_302', name: '流星鎚', type: 'weapon', reqLevel: 15, reqClass: ['swordman', 'merchant', 'acolyte'], attr: { atk: 65 } },
        { id: 'w_303', name: '鐵鎚', type: 'weapon', reqLevel: 25, reqClass: ['swordman', 'merchant', 'acolyte'], attr: { atk: 90 } },
        { id: 'w_304', name: '十字架', type: 'weapon', reqLevel: 40, reqClass: ['acolyte'], attr: { atk: 110, matk: 80, int: 2 } },
        { id: 'w_305', name: '審判十字架', type: 'weapon', reqLevel: 65, reqClass: ['acolyte'], attr: { atk: 140, matk: 120, int: 4 } },
        { id: 'w_306', name: '黃金之鎚', type: 'weapon', reqLevel: 80, reqClass: ['merchant', 'acolyte'], attr: { atk: 180, hit: 20, maxHp: 300 } },
        { id: 'w_307', name: '復仇者之鎚', type: 'weapon', reqLevel: 100, reqClass: ['acolyte', 'merchant'], attr: { atk: 260, matk: 200, str: 5, int: 5 } },
        { id: 'w_308', name: '尖銳的鐵鎚', type: 'weapon', reqLevel: 50, reqClass: ['swordman', 'merchant'], attr: { atk: 130, crit: 20 } },
  
        // 法杖 (Staffs)
        { id: 'w_401', name: '木杖', type: 'weapon', reqLevel: 1, reqClass: ['magician', 'acolyte'], attr: { atk: 15, matk: 30 } },
        { id: 'w_402', name: '言靈魔杖', type: 'weapon', reqLevel: 24, reqClass: ['magician', 'acolyte'], attr: { atk: 30, int: 3, matk: 90 } },
        { id: 'w_403', name: '生存的魔杖', type: 'weapon', reqLevel: 40, reqClass: ['magician'], attr: { atk: 50, maxHp: 400, matk: 150, vit: 3 } },
        { id: 'w_404', name: '骷髏魔杖', type: 'weapon', reqLevel: 55, reqClass: ['magician'], attr: { atk: 60, matk: 180, int: 4 } },
        { id: 'w_405', name: '巫術之杖', type: 'weapon', reqLevel: 70, reqClass: ['magician'], attr: { atk: 60, matk: 230, dex: 4, int: 2 } },
        { id: 'w_406', name: '聖職之杖', type: 'weapon', reqLevel: 70, reqClass: ['acolyte'], attr: { atk: 80, matk: 200, int: 5, maxSp: 150 } },
        { id: 'w_407', name: '毀滅魔杖', type: 'weapon', reqLevel: 90, reqClass: ['magician'], attr: { atk: 100, matk: 320, int: 8 } },
        { id: 'w_408', name: '克羅諾斯魔杖', type: 'weapon', reqLevel: 115, reqClass: ['magician'], attr: { atk: 120, matk: 450, int: 12, maxSp: 500 } },
        { id: 'w_409', name: '紅十字刺刃', type: 'weapon', reqLevel: 85, reqClass: ['acolyte'], attr: { atk: 110, matk: 250, maxSp: 200 } },
  
        // 弓箭 (Bows)
        { id: 'w_501', name: '弓', type: 'weapon', reqLevel: 1, reqClass: ['archer', 'thief'], attr: { atk: 15 } },
        { id: 'w_502', name: '十字弓', type: 'weapon', reqLevel: 18, reqClass: ['archer', 'thief'], attr: { atk: 65, dex: 2 } },
        { id: 'w_503', name: '角弓', type: 'weapon', reqLevel: 33, reqClass: ['archer'], attr: { atk: 100 } },
        { id: 'w_504', name: '獵弓', type: 'weapon', reqLevel: 50, reqClass: ['archer'], attr: { atk: 125, hit: 10, dex: 2 } },
        { id: 'w_505', name: '坎弓', type: 'weapon', reqLevel: 65, reqClass: ['archer'], attr: { atk: 150, dex: 3, agi: 2 } },
        { id: 'w_506', name: '神射手之弓', type: 'weapon', reqLevel: 80, reqClass: ['archer'], attr: { atk: 180, crit: 10, dex: 5, agi: 3 } },
        { id: 'w_507', name: '精靈之弓', type: 'weapon', reqLevel: 100, reqClass: ['archer'], attr: { atk: 250, dex: 8, hit: 30 } },
        { id: 'w_508', name: '巨弓', type: 'weapon', reqLevel: 120, reqClass: ['archer'], attr: { atk: 350, dex: 12 } },
        { id: 'w_509', name: '獸人弓', type: 'weapon', reqLevel: 75, reqClass: ['archer'], attr: { atk: 160, str: 2 } },
  
        // 拳刃 (Katars)
        { id: 'w_601', name: '拳刃', type: 'weapon', reqLevel: 40, reqClass: ['thief'], attr: { atk: 105, crit: 5 } },
        { id: 'w_602', name: '卡塔勒拳刃', type: 'weapon', reqLevel: 55, reqClass: ['thief'], attr: { atk: 148, crit: 8 } },
        { id: 'w_603', name: '刺客拳刃', type: 'weapon', reqLevel: 70, reqClass: ['thief'], attr: { atk: 180, crit: 15, agi: 2 } },
        { id: 'w_604', name: '爆炎拳刃', type: 'weapon', reqLevel: 85, reqClass: ['thief'], attr: { atk: 210, crit: 10, str: 3 } },
        { id: 'w_605', name: '斬首拳刃', type: 'weapon', reqLevel: 105, reqClass: ['thief'], attr: { atk: 280, crit: 25, str: 5 } },
        { id: 'w_606', name: '指甲', type: 'weapon', reqLevel: 60, reqClass: ['thief'], attr: { atk: 120, agi: 5, flee: 10 } },
      ],
      
      // --- 防具區 ---
      armors: [
        // ---------------- 頭飾 (Helm) - 30件 ----------------
        { id: 'h_001', name: '髮圈', type: 'helm', reqLevel: 1, reqClass: ['all'], attr: { def: 1 } },
        { id: 'h_002', name: '頭巾', type: 'helm', reqLevel: 10, reqClass: ['all'], attr: { def: 2, maxHp: 50 } },
        { id: 'h_003', name: '蘋果頭飾', type: 'helm', reqLevel: 25, reqClass: ['archer', 'thief'], attr: { def: 2, dex: 3 } },
        { id: 'h_004', name: '亡者髮箍', type: 'helm', reqLevel: 30, reqClass: ['swordman', 'merchant'], attr: { def: 4, agi: 2, str: 1 } },
        { id: 'h_005', name: '魔法師帽', type: 'helm', reqLevel: 35, reqClass: ['magician'], attr: { def: 3, int: 2, maxSp: 50 } },
        { id: 'h_006', name: '骨製頭盔', type: 'helm', reqLevel: 50, reqClass: ['swordman'], attr: { def: 7, vit: 2 } },
        { id: 'h_007', name: '王冠', type: 'helm', reqLevel: 70, reqClass: ['all'], attr: { def: 5, int: 3, luk: 3 } },
        { id: 'h_008', name: '惡魔翅膀耳飾', type: 'helm', reqLevel: 85, reqClass: ['all'], attr: { def: 2, str: 2, int: 2 } },
        { id: 'h_009', name: '太陽神頭盔', type: 'helm', reqLevel: 100, reqClass: ['swordman', 'merchant'], attr: { def: 10, str: 3, vit: 3, maxHp: 500 } },
        { id: 'h_010', name: '糞便帽', type: 'helm', reqLevel: 30, reqClass: ['all'], attr: { def: 2, maxHp: 100 } },
        { id: 'h_011', name: '貓耳髮圈', type: 'helm', reqLevel: 20, reqClass: ['all'], attr: { def: 2, agi: 2 } },
        { id: 'h_012', name: '兔耳髮圈', type: 'helm', reqLevel: 20, reqClass: ['all'], attr: { def: 2, luk: 2 } },
        { id: 'h_013', name: '鋼鐵頭盔', type: 'helm', reqLevel: 40, reqClass: ['swordman', 'merchant'], attr: { def: 6 } },
        { id: 'h_014', name: '獸人頭盔', type: 'helm', reqLevel: 55, reqClass: ['swordman'], attr: { def: 8, str: 2 } },
        { id: 'h_015', name: '領導者頭箍', type: 'helm', reqLevel: 60, reqClass: ['swordman'], attr: { def: 6, str: 1, vit: 1 } },
        { id: 'h_016', name: '聖職之帽', type: 'helm', reqLevel: 40, reqClass: ['acolyte'], attr: { def: 4, int: 2 } },
        { id: 'h_017', name: '小丑帽', type: 'helm', reqLevel: 50, reqClass: ['all'], attr: { def: 3, luk: 5 } },
        { id: 'h_018', name: '歌舞伎面具', type: 'helm', reqLevel: 65, reqClass: ['all'], attr: { def: 4, hit: 5 } },
        { id: 'h_019', name: '狐狸面具', type: 'helm', reqLevel: 65, reqClass: ['all'], attr: { def: 4, agi: 3 } },
        { id: 'h_020', name: '舞會面具', type: 'helm', reqLevel: 65, reqClass: ['all'], attr: { def: 3, flee: 5 } },
        { id: 'h_021', name: '劍聖王冠', type: 'helm', reqLevel: 80, reqClass: ['swordman'], attr: { def: 8, str: 3, dex: 2 } },
        { id: 'h_022', name: '蜂后冠', type: 'helm', reqLevel: 80, reqClass: ['magician'], attr: { def: 5, int: 3, maxSp: 100 } },
        { id: 'h_023', name: '懶洋洋的貓', type: 'helm', reqLevel: 45, reqClass: ['all'], attr: { def: 3, flee: 10 } },
        { id: 'h_024', name: '天使紙袋', type: 'helm', reqLevel: 25, reqClass: ['all'], attr: { def: 1, maxHp: 50, maxSp: 50 } },
        { id: 'h_025', name: '惡魔侍者角', type: 'helm', reqLevel: 75, reqClass: ['all'], attr: { def: 5, str: 3, maxSp: 50 } },
        { id: 'h_026', name: '惡魔女僕角', type: 'helm', reqLevel: 75, reqClass: ['all'], attr: { def: 5, int: 3, maxHp: 50 } },
        { id: 'h_027', name: '飛行帽', type: 'helm', reqLevel: 60, reqClass: ['archer'], attr: { def: 4, dex: 2, agi: 2 } },
        { id: 'h_028', name: '紅蝶緞帶', type: 'helm', reqLevel: 15, reqClass: ['all'], attr: { def: 2, int: 1 } },
        { id: 'h_029', name: '藍波利帽', type: 'helm', reqLevel: 15, reqClass: ['all'], attr: { def: 2, luk: 3 } },
        { id: 'h_030', name: '海盜船長帽', type: 'helm', reqLevel: 85, reqClass: ['merchant', 'swordman'], attr: { def: 7, str: 2, vit: 2 } },
  
        // ---------------- 鎧甲 (Body) - 30件 ----------------
        { id: 'a_001', name: '棉襯衫', type: 'armor', reqLevel: 1, reqClass: ['all'], attr: { def: 1, maxHp: 20 } },
        { id: 'a_002', name: '皮甲', type: 'armor', reqLevel: 5, reqClass: ['all'], attr: { def: 2, maxHp: 50 } },
        { id: 'a_003', name: '絲質外衣', type: 'armor', reqLevel: 10, reqClass: ['magician', 'acolyte'], attr: { def: 3, maxSp: 30, int: 1 } },
        { id: 'a_004', name: '木製鎧甲', type: 'armor', reqLevel: 15, reqClass: ['swordman', 'merchant'], attr: { def: 7, maxHp: 150 } },
        { id: 'a_005', name: '盜賊之衣', type: 'armor', reqLevel: 20, reqClass: ['thief'], attr: { def: 6, agi: 2, flee: 5 } },
        { id: 'a_006', name: '緊身便衣', type: 'armor', reqLevel: 20, reqClass: ['archer'], attr: { def: 5, dex: 2 } },
        { id: 'a_007', name: '鋼鐵鎧甲', type: 'armor', reqLevel: 40, reqClass: ['swordman', 'merchant'], attr: { def: 12, maxHp: 400 } },
        { id: 'a_008', name: '聖職之衣', type: 'armor', reqLevel: 40, reqClass: ['acolyte'], attr: { def: 6, int: 2, maxSp: 80 } },
        { id: 'a_009', name: '魔法外套', type: 'armor', reqLevel: 50, reqClass: ['magician'], attr: { def: 5, int: 3, maxSp: 150 } },
        { id: 'a_010', name: '神射手之衣', type: 'armor', reqLevel: 65, reqClass: ['archer'], attr: { def: 8, dex: 4, flee: 10 } },
        { id: 'a_011', name: '騎士鎧甲', type: 'armor', reqLevel: 70, reqClass: ['swordman'], attr: { def: 16, maxHp: 1000, vit: 3 } },
        { id: 'a_012', name: '暗殺者外衣', type: 'armor', reqLevel: 75, reqClass: ['thief'], attr: { def: 10, agi: 4, flee: 25 } },
        { id: 'a_013', name: '隕石鎧甲', type: 'armor', reqLevel: 85, reqClass: ['swordman', 'merchant'], attr: { def: 20, maxHp: 1500, vit: 5 } },
        { id: 'a_014', name: '奧丁的祝福', type: 'armor', reqLevel: 90, reqClass: ['all'], attr: { def: 10, str: 2, agi: 2, vit: 2, int: 2, dex: 2, luk: 2 } },
        { id: 'a_015', name: '大天使之衣', type: 'armor', reqLevel: 110, reqClass: ['acolyte', 'magician'], attr: { def: 12, maxHp: 800, maxSp: 400, int: 5 } },
        { id: 'a_016', name: '冒險衣', type: 'armor', reqLevel: 2, reqClass: ['all'], attr: { def: 2 } },
        { id: 'a_017', name: '木鏈甲', type: 'armor', reqLevel: 25, reqClass: ['swordman', 'merchant'], attr: { def: 9, vit: 1 } },
        { id: 'a_018', name: '鋁合金鎧甲', type: 'armor', reqLevel: 60, reqClass: ['swordman'], attr: { def: 14, vit: 2, maxHp: 600 } },
        { id: 'a_019', name: '鱗片鎧甲', type: 'armor', reqLevel: 55, reqClass: ['swordman', 'merchant'], attr: { def: 11, maxHp: 500 } },
        { id: 'a_020', name: '鎖子甲', type: 'armor', reqLevel: 45, reqClass: ['swordman', 'merchant'], attr: { def: 10 } },
        { id: 'a_021', name: '秘銀重甲', type: 'armor', reqLevel: 80, reqClass: ['swordman'], attr: { def: 18, vit: 4, maxSp: 100 } },
        { id: 'a_022', name: '水屬性鎧甲', type: 'armor', reqLevel: 50, reqClass: ['all'], attr: { def: 6, maxHp: 200 } },
        { id: 'a_023', name: '火屬性鎧甲', type: 'armor', reqLevel: 50, reqClass: ['all'], attr: { def: 6, maxHp: 200 } },
        { id: 'a_024', name: '風屬性鎧甲', type: 'armor', reqLevel: 50, reqClass: ['all'], attr: { def: 6, maxHp: 200 } },
        { id: 'a_025', name: '地屬性鎧甲', type: 'armor', reqLevel: 50, reqClass: ['all'], attr: { def: 6, maxHp: 200 } },
        { id: 'a_026', name: '鮮血外衣', type: 'armor', reqLevel: 70, reqClass: ['thief'], attr: { def: 8, agi: 2, str: 2, atk: 10 } },
        { id: 'a_027', name: '忍服 血櫻', type: 'armor', reqLevel: 65, reqClass: ['thief'], attr: { def: 7, agi: 3, flee: 15 } },
        { id: 'a_028', name: '魔王外衣', type: 'armor', reqLevel: 95, reqClass: ['magician', 'acolyte'], attr: { def: 9, int: 4, dex: 3, matk: 30 } },
        { id: 'a_029', name: '龍之外套', type: 'armor', reqLevel: 85, reqClass: ['archer', 'thief'], attr: { def: 10, dex: 3, agi: 3 } },
        { id: 'a_030', name: '艾克賽利翁外套', type: 'armor', reqLevel: 100, reqClass: ['all'], attr: { def: 15, maxHp: 1000, maxSp: 200, vit: 2 } },
  
        // ---------------- 披肩 (Garment) - 30件 ----------------
        { id: 'g_001', name: '連帽披肩', type: 'garment', reqLevel: 1, reqClass: ['all'], attr: { def: 1, flee: 2 } },
        { id: 'g_002', name: '披風', type: 'garment', reqLevel: 15, reqClass: ['all'], attr: { def: 2, flee: 5 } },
        { id: 'g_003', name: '斗篷', type: 'garment', reqLevel: 30, reqClass: ['all'], attr: { def: 4, flee: 10 } },
        { id: 'g_004', name: '生存的斗篷', type: 'garment', reqLevel: 50, reqClass: ['magician', 'acolyte'], attr: { def: 3, maxHp: 200 } },
        { id: 'g_005', name: '金屬波利披風', type: 'garment', reqLevel: 55, reqClass: ['all'], attr: { def: 5, maxHp: 300, vit: 1 } },
        { id: 'g_006', name: '暗影披風', type: 'garment', reqLevel: 65, reqClass: ['thief'], attr: { def: 4, flee: 25, agi: 3 } },
        { id: 'g_007', name: '伯爵斗篷', type: 'garment', reqLevel: 80, reqClass: ['all'], attr: { def: 6, hit: 10, flee: 15 } },
        { id: 'g_008', name: '巴風特之角(披風)', type: 'garment', reqLevel: 95, reqClass: ['all'], attr: { def: 5, crit: 5, str: 2 } },
        { id: 'g_009', name: '墮落天使之翼', type: 'garment', reqLevel: 110, reqClass: ['all'], attr: { def: 8, allStat: 3, flee: 30 } },
        { id: 'g_010', name: '破爛披風', type: 'garment', reqLevel: 10, reqClass: ['all'], attr: { def: 1, maxHp: 10 } },
        { id: 'g_011', name: '羊毛圍巾', type: 'garment', reqLevel: 55, reqClass: ['all'], attr: { def: 3, maxHp: 150 } },
        { id: 'g_012', name: '龍的呼吸', type: 'garment', reqLevel: 75, reqClass: ['all'], attr: { def: 6, maxHp: 250, flee: 10 } },
        { id: 'g_013', name: '鷹之披風', type: 'garment', reqLevel: 60, reqClass: ['archer'], attr: { def: 4, dex: 2, hit: 15 } },
        { id: 'g_014', name: '聖天使披風', type: 'garment', reqLevel: 90, reqClass: ['all'], attr: { def: 7, maxSp: 200, int: 2 } },
        { id: 'g_015', name: '惡魔披風', type: 'garment', reqLevel: 90, reqClass: ['all'], attr: { def: 7, str: 2, atk: 15 } },
        { id: 'g_016', name: '巨大白幽靈披風', type: 'garment', reqLevel: 85, reqClass: ['all'], attr: { def: 5, flee: 20, agi: 2 } },
        { id: 'g_017', name: '冒險家披肩', type: 'garment', reqLevel: 20, reqClass: ['all'], attr: { def: 3 } },
        { id: 'g_018', name: '呢絨披風', type: 'garment', reqLevel: 40, reqClass: ['all'], attr: { def: 4, maxSp: 50 } },
        { id: 'g_019', name: '絲質披肩', type: 'garment', reqLevel: 40, reqClass: ['magician', 'acolyte'], attr: { def: 3, int: 1 } },
        { id: 'g_020', name: '守護者披風', type: 'garment', reqLevel: 70, reqClass: ['swordman'], attr: { def: 7, vit: 2 } },
        { id: 'g_021', name: '英雄披風', type: 'garment', reqLevel: 105, reqClass: ['swordman'], attr: { def: 9, str: 3, maxHp: 500 } },
        { id: 'g_022', name: '魔王披風', type: 'garment', reqLevel: 105, reqClass: ['magician', 'acolyte'], attr: { def: 6, int: 3, maxSp: 300 } },
        { id: 'g_023', name: '艾克賽利翁披風', type: 'garment', reqLevel: 100, reqClass: ['all'], attr: { def: 10, flee: 20 } },
        { id: 'g_024', name: '勇者披肩', type: 'garment', reqLevel: 90, reqClass: ['all'], attr: { def: 8, maxHp: 300 } },
        { id: 'g_025', name: '亡靈披風', type: 'garment', reqLevel: 80, reqClass: ['all'], attr: { def: 5, luk: 4 } },
        { id: 'g_026', name: '神聖披風', type: 'garment', reqLevel: 85, reqClass: ['acolyte'], attr: { def: 6, maxSp: 150, int: 2 } },
        { id: 'g_027', name: '幻影披風', type: 'garment', reqLevel: 95, reqClass: ['thief'], attr: { def: 6, flee: 25 } },
        { id: 'g_028', name: '飛龍披風', type: 'garment', reqLevel: 85, reqClass: ['archer'], attr: { def: 7, dex: 3 } },
        { id: 'g_029', name: '戰鬥披風', type: 'garment', reqLevel: 65, reqClass: ['swordman', 'merchant'], attr: { def: 6, str: 1 } },
        { id: 'g_030', name: '秘銀披風', type: 'garment', reqLevel: 75, reqClass: ['all'], attr: { def: 8 } },
  
        // ---------------- 鞋靴 (Shoes) - 30件 ----------------
        { id: 's_001', name: '涼鞋', type: 'shoes', reqLevel: 1, reqClass: ['all'], attr: { def: 1, maxHp: 15 } },
        { id: 's_002', name: '皮靴', type: 'shoes', reqLevel: 15, reqClass: ['all'], attr: { def: 2, maxHp: 50 } },
        { id: 's_003', name: '長靴', type: 'shoes', reqLevel: 30, reqClass: ['all'], attr: { def: 4, maxHp: 150 } },
        { id: 's_004', name: '魔法師之靴', type: 'shoes', reqLevel: 45, reqClass: ['magician'], attr: { def: 2, maxSp: 100, int: 2 } },
        { id: 's_005', name: '戰士長靴', type: 'shoes', reqLevel: 50, reqClass: ['swordman', 'merchant'], attr: { def: 6, maxHp: 400, str: 1 } },
        { id: 's_006', name: '敏捷長靴', type: 'shoes', reqLevel: 65, reqClass: ['thief', 'archer'], attr: { def: 5, agi: 4, flee: 20 } },
        { id: 's_007', name: '玻璃鞋', type: 'shoes', reqLevel: 75, reqClass: ['all'], attr: { def: 3, luk: 5, matk: 30 } },
        { id: 's_008', name: '時光力量戰靴', type: 'shoes', reqLevel: 100, reqClass: ['swordman', 'merchant', 'thief'], attr: { def: 8, str: 5, maxHp: 800, atk: 50 } },
        { id: 's_009', name: '時光靈巧戰靴', type: 'shoes', reqLevel: 100, reqClass: ['archer'], attr: { def: 8, dex: 5, maxHp: 500, maxSp: 100, atk: 30 } },
        { id: 's_010', name: '輕便鞋', type: 'shoes', reqLevel: 10, reqClass: ['all'], attr: { def: 2, flee: 2 } },
        { id: 's_011', name: '戰鬥靴', type: 'shoes', reqLevel: 35, reqClass: ['swordman', 'merchant'], attr: { def: 5, maxHp: 200 } },
        { id: 's_012', name: '鋼鐵長靴', type: 'shoes', reqLevel: 60, reqClass: ['swordman'], attr: { def: 8, vit: 2 } },
        { id: 's_013', name: '秘銀長靴', type: 'shoes', reqLevel: 80, reqClass: ['swordman', 'merchant'], attr: { def: 10, vit: 3, maxHp: 400 } },
        { id: 's_014', name: '兔斯基鞋', type: 'shoes', reqLevel: 40, reqClass: ['all'], attr: { def: 3, agi: 2 } },
        { id: 's_015', name: '兔子拖鞋', type: 'shoes', reqLevel: 25, reqClass: ['all'], attr: { def: 2, luk: 3 } },
        { id: 's_016', name: '聖職之靴', type: 'shoes', reqLevel: 55, reqClass: ['acolyte'], attr: { def: 4, int: 2, maxSp: 100 } },
        { id: 's_017', name: '魔王長靴', type: 'shoes', reqLevel: 95, reqClass: ['magician', 'acolyte'], attr: { def: 5, int: 4, maxSp: 250 } },
        { id: 's_018', name: '變異的靴子', type: 'shoes', reqLevel: 85, reqClass: ['all'], attr: { def: 7, maxHp: 1000, maxSp: 300 } },
        { id: 's_019', name: '審判之靴', type: 'shoes', reqLevel: 90, reqClass: ['acolyte'], attr: { def: 6, int: 3, matk: 50 } },
        { id: 's_020', name: '龍之長靴', type: 'shoes', reqLevel: 85, reqClass: ['archer', 'thief'], attr: { def: 6, agi: 3, maxHp: 300 } },
        { id: 's_021', name: '冒險家長靴', type: 'shoes', reqLevel: 20, reqClass: ['all'], attr: { def: 3, maxHp: 100 } },
        { id: 's_022', name: '羊毛長靴', type: 'shoes', reqLevel: 65, reqClass: ['all'], attr: { def: 5, maxHp: 250 } },
        { id: 's_023', name: '艾克賽利翁長靴', type: 'shoes', reqLevel: 100, reqClass: ['all'], attr: { def: 10, maxHp: 500, maxSp: 200 } },
        { id: 's_024', name: '幻影長靴', type: 'shoes', reqLevel: 90, reqClass: ['thief'], attr: { def: 5, flee: 15, agi: 4 } },
        { id: 's_025', name: '英雄長靴', type: 'shoes', reqLevel: 105, reqClass: ['swordman'], attr: { def: 12, vit: 4, maxHp: 800 } },
        { id: 's_026', name: '銀色長靴', type: 'shoes', reqLevel: 45, reqClass: ['all'], attr: { def: 5, maxSp: 50 } },
        { id: 's_027', name: '時光智力戰靴', type: 'shoes', reqLevel: 100, reqClass: ['magician', 'acolyte'], attr: { def: 6, int: 5, maxSp: 300, matk: 50 } },
        { id: 's_028', name: '時光體力戰靴', type: 'shoes', reqLevel: 100, reqClass: ['swordman'], attr: { def: 10, vit: 5, maxHp: 1200 } },
        { id: 's_029', name: '時光敏捷戰靴', type: 'shoes', reqLevel: 100, reqClass: ['thief'], attr: { def: 6, agi: 5, flee: 30, atk: 20 } },
        { id: 's_030', name: '時光幸運戰靴', type: 'shoes', reqLevel: 100, reqClass: ['all'], attr: { def: 6, luk: 5, crit: 15 } },
  
        // ---------------- 盾牌 (Shields) - 30件 ----------------
        { id: 'sh_001', name: '圓盾', type: 'shield', reqLevel: 10, reqClass: ['all'], attr: { def: 3 } },
        { id: 'sh_002', name: '鐵盾', type: 'shield', reqLevel: 30, reqClass: ['swordman', 'merchant'], attr: { def: 6 } },
        { id: 'sh_003', name: '魔法書', type: 'shield', reqLevel: 35, reqClass: ['magician'], attr: { def: 2, int: 2, matk: 30 } },
        { id: 'sh_004', name: '鋼盾', type: 'shield', reqLevel: 50, reqClass: ['swordman', 'merchant'], attr: { def: 9, vit: 1 } },
        { id: 'sh_005', name: '聖職之盾', type: 'shield', reqLevel: 55, reqClass: ['acolyte'], attr: { def: 5, maxSp: 80, int: 1 } },
        { id: 'sh_006', name: '謊言紀錄本', type: 'shield', reqLevel: 70, reqClass: ['magician'], attr: { def: 4, int: 3, matk: 50 } },
        { id: 'sh_007', name: '十字盾', type: 'shield', reqLevel: 85, reqClass: ['swordman'], attr: { def: 12, vit: 3, maxHp: 500 } },
        { id: 'sh_008', name: '巴基力的鋼盾', type: 'shield', reqLevel: 105, reqClass: ['all'], attr: { def: 15, allStat: 2, maxHp: 800, maxSp: 200 } },
        { id: 'sh_009', name: '護盾', type: 'shield', reqLevel: 5, reqClass: ['all'], attr: { def: 2 } },
        { id: 'sh_010', name: '巨盾', type: 'shield', reqLevel: 45, reqClass: ['swordman'], attr: { def: 10, flee: -10 } },
        { id: 'sh_011', name: '鏡盾', type: 'shield', reqLevel: 65, reqClass: ['swordman', 'merchant'], attr: { def: 8, maxHp: 300 } },
        { id: 'sh_012', name: '聖文盾牌', type: 'shield', reqLevel: 75, reqClass: ['acolyte'], attr: { def: 7, int: 2, maxSp: 150 } },
        { id: 'sh_013', name: '記憶之書', type: 'shield', reqLevel: 80, reqClass: ['magician'], attr: { def: 5, int: 4, matk: 80 } },
        { id: 'sh_014', name: '盤石盾', type: 'shield', reqLevel: 80, reqClass: ['swordman', 'merchant'], attr: { def: 11, vit: 2 } },
        { id: 'sh_015', name: '刺尾龍盾', type: 'shield', reqLevel: 90, reqClass: ['all'], attr: { def: 9, maxHp: 400 } },
        { id: 'sh_016', name: '薔薇鋼盾', type: 'shield', reqLevel: 95, reqClass: ['swordman'], attr: { def: 13, maxHp: 600 } },
        { id: 'sh_017', name: '鈽鐳金盾', type: 'shield', reqLevel: 100, reqClass: ['swordman', 'merchant'], attr: { def: 14, vit: 3 } },
        { id: 'sh_018', name: '魔力石盾', type: 'shield', reqLevel: 90, reqClass: ['magician'], attr: { def: 6, maxSp: 300 } },
        { id: 'sh_019', name: '魔法反射盾', type: 'shield', reqLevel: 95, reqClass: ['swordman'], attr: { def: 10, maxHp: 500 } },
        { id: 'sh_020', name: '冒險家之盾', type: 'shield', reqLevel: 20, reqClass: ['all'], attr: { def: 4 } },
        { id: 'sh_021', name: '獸人族盾牌', type: 'shield', reqLevel: 60, reqClass: ['all'], attr: { def: 7, maxHp: 200 } },
        { id: 'sh_022', name: '皇家盾牌', type: 'shield', reqLevel: 85, reqClass: ['swordman'], attr: { def: 12, maxHp: 400 } },
        { id: 'sh_023', name: '龍之盾', type: 'shield', reqLevel: 75, reqClass: ['swordman', 'merchant'], attr: { def: 9, maxHp: 300 } },
        { id: 'sh_024', name: '魔王之盾', type: 'shield', reqLevel: 105, reqClass: ['magician', 'acolyte'], attr: { def: 8, maxSp: 200, int: 3 } },
        { id: 'sh_025', name: '幻影圓盾', type: 'shield', reqLevel: 90, reqClass: ['thief'], attr: { def: 7, flee: 10 } },
        { id: 'sh_026', name: '艾克賽利翁盾', type: 'shield', reqLevel: 100, reqClass: ['all'], attr: { def: 12, maxHp: 500, maxSp: 100 } },
        { id: 'sh_027', name: '守護者之盾', type: 'shield', reqLevel: 80, reqClass: ['swordman'], attr: { def: 11, vit: 2 } },
        { id: 'sh_028', name: '英雄之盾', type: 'shield', reqLevel: 110, reqClass: ['swordman'], attr: { def: 16, vit: 5, maxHp: 1000 } },
        { id: 'sh_029', name: '黃金之盾', type: 'shield', reqLevel: 85, reqClass: ['all'], attr: { def: 9, luk: 3 } },
        { id: 'sh_030', name: '聖騎士之盾', type: 'shield', reqLevel: 95, reqClass: ['swordman'], attr: { def: 14, vit: 4, int: 2 } },
      ],
  
      // --- 飾品 (Accessories) - 30件 ---
      accessories: [
        { id: 'ac_001', name: '夾子', type: 'acc', reqLevel: 10, reqClass: ['all'], attr: { maxSp: 30 } },
        { id: 'ac_002', name: '力量戒指', type: 'acc', reqLevel: 20, reqClass: ['swordman', 'merchant', 'thief'], attr: { atk: 15, str: 2 } },
        { id: 'ac_003', name: '智力耳環', type: 'acc', reqLevel: 20, reqClass: ['magician', 'acolyte'], attr: { int: 2, maxSp: 50, matk: 20 } },
        { id: 'ac_004', name: '敏捷胸針', type: 'acc', reqLevel: 20, reqClass: ['archer', 'thief'], attr: { flee: 5, agi: 2 } },
        { id: 'ac_005', name: '幸運珠鍊', type: 'acc', reqLevel: 20, reqClass: ['all'], attr: { crit: 3, luk: 2 } },
        { id: 'ac_006', name: '體力項鍊', type: 'acc', reqLevel: 20, reqClass: ['swordman', 'merchant'], attr: { maxHp: 150, vit: 2 } },
        { id: 'ac_007', name: '靈巧手套', type: 'acc', reqLevel: 20, reqClass: ['archer'], attr: { hit: 10, dex: 2 } },
        { id: 'ac_008', name: '防禦手套', type: 'acc', reqLevel: 50, reqClass: ['all'], attr: { def: 2, maxHp: 150 } },
        { id: 'ac_009', name: '盜賊戒指', type: 'acc', reqLevel: 70, reqClass: ['thief'], attr: { str: 1, agi: 1, crit: 5 } },
        { id: 'ac_010', name: '防禦戒指', type: 'acc', reqLevel: 60, reqClass: ['all'], attr: { def: 3, vit: 1 } },
        { id: 'ac_011', name: '戰神戒指', type: 'acc', reqLevel: 80, reqClass: ['swordman'], attr: { str: 3, maxHp: 300, atk: 20 } },
        { id: 'ac_012', name: '專家戒指', type: 'acc', reqLevel: 80, reqClass: ['all'], attr: { maxSp: 100, matk: 30 } },
        { id: 'ac_013', name: '詛咒紅寶石', type: 'acc', reqLevel: 40, reqClass: ['all'], attr: { luk: -5, atk: 30, matk: 30 } },
        { id: 'ac_014', name: '髮夾', type: 'acc', reqLevel: 1, reqClass: ['all'], attr: { maxSp: 10 } },
        { id: 'ac_015', name: '體力別針', type: 'acc', reqLevel: 45, reqClass: ['swordman', 'merchant'], attr: { maxHp: 200, vit: 3 } },
        { id: 'ac_016', name: '靈巧別針', type: 'acc', reqLevel: 45, reqClass: ['archer'], attr: { hit: 15, dex: 3 } },
        { id: 'ac_017', name: '幸運別針', type: 'acc', reqLevel: 45, reqClass: ['all'], attr: { crit: 5, luk: 3 } },
        { id: 'ac_018', name: '敏捷別針', type: 'acc', reqLevel: 45, reqClass: ['thief', 'archer'], attr: { flee: 8, agi: 3 } },
        { id: 'ac_019', name: '智力別針', type: 'acc', reqLevel: 45, reqClass: ['magician', 'acolyte'], attr: { maxSp: 80, int: 3 } },
        { id: 'ac_020', name: '力量別針', type: 'acc', reqLevel: 45, reqClass: ['swordman', 'merchant'], attr: { atk: 25, str: 3 } },
        { id: 'ac_021', name: '奧爾里昂的手套', type: 'acc', reqLevel: 90, reqClass: ['magician'], attr: { dex: 2, matk: 50 } },
        { id: 'ac_022', name: '奧爾里昂的項鍊', type: 'acc', reqLevel: 90, reqClass: ['magician'], attr: { int: 2, maxSp: 150 } },
        { id: 'ac_023', name: '核心01', type: 'acc', reqLevel: 85, reqClass: ['all'], attr: { def: 1, int: 2, maxSp: 100 } },
        { id: 'ac_024', name: '核心02', type: 'acc', reqLevel: 85, reqClass: ['all'], attr: { def: 1, str: 2, atk: 20 } },
        { id: 'ac_025', name: '核心03', type: 'acc', reqLevel: 85, reqClass: ['all'], attr: { def: 1, agi: 2, flee: 10 } },
        { id: 'ac_026', name: '核心04', type: 'acc', reqLevel: 85, reqClass: ['all'], attr: { def: 1, dex: 2, hit: 10 } },
        { id: 'ac_027', name: '魔力手鐲', type: 'acc', reqLevel: 65, reqClass: ['magician', 'acolyte'], attr: { int: 1, maxSp: 50, matk: 15 } },
        { id: 'ac_028', name: '詛咒胸針', type: 'acc', reqLevel: 75, reqClass: ['thief'], attr: { crit: 10, luk: -2 } },
        { id: 'ac_029', name: '刺客手銬', type: 'acc', reqLevel: 85, reqClass: ['thief'], attr: { agi: 2, str: 2, crit: 5 } },
        { id: 'ac_030', name: '弓箭手面甲', type: 'acc', reqLevel: 70, reqClass: ['archer'], attr: { dex: 3, hit: 20 } },
      ],

// --- 消耗品 (Consumables) - 商城與一般道具 ---
  consumables: [
    // ================= 一般商店 (Zeny) =================
    
    // [基礎恢復 - 藥水類]
    { id: 'novicePotion', icon: '🍼', name: '初學者藥水', desc: '回復 50 HP (新手專用)', cost: 10, type: 'consumable', healHp: 50 },
    { id: 'redPotion', icon: '🍷', name: '紅色藥水', desc: '回復 250 HP', cost: 50, type: 'consumable', healHp: 250 },
    { id: 'orangePotion', icon: '🍹', name: '橙色藥水', desc: '回復 500 HP', cost: 200, type: 'consumable', healHp: 500 },
    { id: 'yellowPotion', icon: '🧃', name: '黃色藥水', desc: '回復 1000 HP', cost: 550, type: 'consumable', healHp: 1000 },
    { id: 'whitePotion', icon: '🥛', name: '白色藥水', desc: '回復 2500 HP', cost: 1200, type: 'consumable', healHp: 2500 },
    { id: 'bluePotion', icon: '🧪', name: '藍色藥水', desc: '回復 250 SP', cost: 1500, type: 'consumable', healSp: 250 },

    // [進階恢復 - 纖細藥水類 (較輕重量/更好效果)]
    { id: 'slimRedPotion', icon: '🩸', name: '纖細紅色藥水', desc: '回復 350 HP', cost: 100, type: 'consumable', healHp: 350 },
    { id: 'slimYellowPotion', icon: '🧋', name: '纖細黃色藥水', desc: '回復 1500 HP', cost: 800, type: 'consumable', healHp: 1500 },
    { id: 'slimWhitePotion', icon: '🍼', name: '纖細白色藥水', desc: '回復 4000 HP', cost: 3000, type: 'consumable', healHp: 4000 },

    // [食物與水果]
    { id: 'apple', icon: '🍎', name: '蘋果', desc: '回復 50 HP', cost: 15, type: 'consumable', healHp: 50 },
    { id: 'banana', icon: '🍌', name: '香蕉', desc: '回復 30 HP', cost: 15, type: 'consumable', healHp: 30 },
    { id: 'carrot', icon: '🥕', name: '胡蘿蔔', desc: '回復 40 HP', cost: 15, type: 'consumable', healHp: 40 },
    { id: 'sweetPotato', icon: '🍠', name: '蕃薯', desc: '回復 60 HP', cost: 20, type: 'consumable', healHp: 60 },
    { id: 'pumpkin', icon: '🎃', name: '南瓜', desc: '回復 80 HP', cost: 25, type: 'consumable', healHp: 80 },
    { id: 'meat', icon: '🥩', name: '肉', desc: '回復 100 HP', cost: 50, type: 'consumable', healHp: 100 },
    { id: 'icecream', icon: '🍦', name: '冰淇淋', desc: '回復 300 HP', cost: 150, type: 'consumable', healHp: 300 },
    { id: 'grape', icon: '🍇', name: '葡萄', desc: '回復 15 SP', cost: 150, type: 'consumable', healSp: 15 },
    { id: 'strawberry', icon: '🍓', name: '草莓', desc: '回復 30 SP', cost: 300, type: 'consumable', healSp: 30 },
    { id: 'lemon', icon: '🍋', name: '檸檬', desc: '回復 50 SP', cost: 500, type: 'consumable', healSp: 50 },

    // [果汁與特調]
    { id: 'appleJuice', icon: '🧃', name: '蘋果汁', desc: '回復 70 HP', cost: 30, type: 'consumable', healHp: 70 },
    { id: 'bananaJuice', icon: '🥤', name: '香蕉汁', desc: '回復 50 HP', cost: 30, type: 'consumable', healHp: 50 },
    { id: 'grapeJuice', icon: '🍷', name: '葡萄汁', desc: '回復 30 SP', cost: 400, type: 'consumable', healSp: 30 },
    { id: 'carrotJuice', icon: '🍹', name: '胡蘿蔔汁', desc: '回復 60 HP', cost: 30, type: 'consumable', healHp: 60 },

    // [藥草類]
    { id: 'greenHerb', icon: '🌿', name: '綠色藥草', desc: '回復 50 HP', cost: 50, type: 'consumable', healHp: 50 },
    { id: 'redHerb', icon: '🍁', name: '紅色藥草', desc: '回復 80 HP', cost: 60, type: 'consumable', healHp: 80 },
    { id: 'yellowHerb', icon: '🍂', name: '黃色藥草', desc: '回復 300 HP', cost: 250, type: 'consumable', healHp: 300 },
    { id: 'whiteHerb', icon: '💮', name: '白色藥草', desc: '回復 1000 HP', cost: 800, type: 'consumable', healHp: 1000 },
    { id: 'blueHerb', icon: '🌱', name: '藍色藥草', desc: '回復 100 SP', cost: 1000, type: 'consumable', healSp: 100 },
    { id: 'hinalleLeaflet', icon: '🍃', name: '天地樹葉子', desc: '復活死亡狀態的隊友', cost: 4000, type: 'consumable', special: 'resurrect' },

    // [高級恢復 - 稀有掉落與合成]
    { id: 'honey', icon: '🍯', name: '蜂蜜', desc: '回復 500 HP / 100 SP', cost: 2000, type: 'consumable', healHp: 500, healSp: 100 },
    { id: 'royalJelly', icon: '🐝', name: '蜂膠', desc: '回復 1000 HP / 250 SP，解除部分負面狀態', cost: 5000, type: 'consumable', healHp: 1000, healSp: 250 },
    { id: 'mastela', icon: '🍑', name: '瑪絲黛拉果實', desc: '回復 3000 HP', cost: 8000, type: 'consumable', healHp: 3000 },
    { id: 'yggSeed', icon: '🌰', name: '天地樹芽', desc: '回復 50% 最大 HP 與 SP', cost: 30000, type: 'consumable', healHpPct: 0.5, healSpPct: 0.5 },
    { id: 'yggBerry', icon: '🌳', name: '天地樹果實', desc: '完全回復 HP 與 SP', cost: 80000, type: 'consumable', healHpPct: 1.0, healSpPct: 1.0 },

    // [狀態解除與解毒]
    { id: 'greenPotion', icon: '🧪', name: '綠色藥水', desc: '解除中毒狀態', cost: 50, type: 'consumable', special: 'curePoison' },
    { id: 'holyWater', icon: '💧', name: '聖水', desc: '解除詛咒狀態', cost: 200, type: 'consumable', special: 'cureCurse' },
    { id: 'panacea', icon: '💊', name: '萬能藥', desc: '解除多種異常狀態，並回復 500 HP', cost: 1000, type: 'consumable', healHp: 500, special: 'cureAll' },

    // [戰鬥與輔助功能道具]
    { id: 'flyWing', icon: '🕊️', name: '蒼蠅翅膀', desc: '瞬間換怪 (跳過目前戰鬥)', cost: 50, type: 'consumable' },
    { id: 'butterflyWing', icon: '🦋', name: '蝴蝶翅膀', desc: '脫離戰鬥回到安全區 (滿血滿魔)', cost: 300, type: 'consumable' },
    { id: 'concentration', icon: '🟢', name: '集中藥水', desc: '30分鐘內微幅增加攻速 (ASPD+10%)', cost: 800, type: 'buff', duration: 1800000, buffAttrs: { aspdBonusPct: 10 } },
    { id: 'awake', icon: '🟡', name: '覺醒藥水', desc: '30分鐘內大幅增加攻速 (ASPD+20%)', cost: 1500, type: 'buff', duration: 1800000, buffAttrs: { aspdBonusPct: 20 } },
    { id: 'berserk', icon: '🔴', name: '菠色克藥水', desc: '30分鐘內極大幅增加攻速 (ASPD+30%)', cost: 3000, type: 'buff', duration: 1800000, buffAttrs: { aspdBonusPct: 30 } },

    // [戰鬥強化 - 箱子與特調液]
    { id: 'aloevera', icon: '🌵', name: '蘆薈汁液', desc: '10分鐘內挑釁自己，物理攻擊力 +10%', cost: 4000, type: 'buff', duration: 600000, buffAttrs: { atkPct: 10 } },
    { id: 'anodyne', icon: '🍵', name: '止痛藥', desc: '10分鐘內賦予霸體狀態，防禦力 +15%', cost: 5000, type: 'buff', duration: 600000, buffAttrs: { defPct: 15 } },
    { id: 'abrasive', icon: '✨', name: '研磨劑', desc: '10分鐘內武器銳利化，暴擊率 +30', cost: 8000, type: 'buff', duration: 600000, buffAttrs: { crit: 30 } },
    { id: 'boxOfResentment', icon: '📦', name: '怨恨之箱', desc: '20分鐘內 ATK +20', cost: 12000, type: 'buff', duration: 1200000, buffAttrs: { atk: 20 } },
    { id: 'boxOfGloom', icon: '📦', name: '憂鬱之箱', desc: '20分鐘內 迴避率(Flee) +20', cost: 10000, type: 'buff', duration: 1200000, buffAttrs: { flee: 20 } },
    { id: 'boxOfSunlight', icon: '📦', name: '日光之箱', desc: '20分鐘內 命中率(Hit) +20', cost: 10000, type: 'buff', duration: 1200000, buffAttrs: { hit: 20 } },

    // [元素抵抗藥水]
    { id: 'fireResist', icon: '🔥', name: '火屬性抵抗藥', desc: '20分鐘內減少火屬性傷害 (暫代DEF+10%)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { defPct: 10 } },
    { id: 'waterResist', icon: '💧', name: '水屬性抵抗藥', desc: '20分鐘內減少水屬性傷害 (暫代MDEF+10%)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { mdefPct: 10 } },
    { id: 'earthResist', icon: '🪨', name: '地屬性抵抗藥', desc: '20分鐘內減少地屬性傷害 (暫代MaxHP+5%)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { maxHpPct: 5 } },
    { id: 'windResist', icon: '🌪️', name: '風屬性抵抗藥', desc: '20分鐘內減少風屬性傷害 (暫代Flee+10)', cost: 5000, type: 'buff', duration: 1200000, buffAttrs: { flee: 10 } },

    // [元素附加卷軸 (賦予武器屬性)]
    { id: 'fireConverter', icon: '📜', name: '火屬性附加卷軸', desc: '20分鐘內攻擊轉為火屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },
    { id: 'waterConverter', icon: '📜', name: '水屬性附加卷軸', desc: '20分鐘內攻擊轉為水屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },
    { id: 'earthConverter', icon: '📜', name: '地屬性附加卷軸', desc: '20分鐘內攻擊轉為地屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },
    { id: 'windConverter', icon: '📜', name: '風屬性附加卷軸', desc: '20分鐘內攻擊轉為風屬性 (暫代ATK+10%)', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { atkPct: 10 } },

    // [RO 經典料理 - Level 5 (持續20分鐘)]
    { id: 'friedMonkeyTail', icon: '🍲', name: '炒猴子尾巴 (Lv.5)', desc: '20分鐘內 STR +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { str: 5 } },
    { id: 'tentacleCheese', icon: '🧀', name: '觸角起司 (Lv.5)', desc: '20分鐘內 AGI +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { agi: 5 } },
    { id: 'friedSweetPotato', icon: '🍠', name: '炸蕃薯 (Lv.5)', desc: '20分鐘內 VIT +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { vit: 5 } },
    { id: 'grapeExtract', icon: '🍹', name: '葡萄果汁萃取液 (Lv.5)', desc: '20分鐘內 INT +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { int: 5 } },
    { id: 'fruitMix', icon: '🍧', name: '綜合水果冰 (Lv.5)', desc: '20分鐘內 DEX +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { dex: 5 } },
    { id: 'friedEgg', icon: '🍳', name: '煎蛋 (Lv.5)', desc: '20分鐘內 LUK +5', cost: 8000, type: 'buff', duration: 1200000, buffAttrs: { luk: 5 } },

    // [RO 經典料理 - Level 10 (持續30分鐘)]
    { id: 'bearFoots', icon: '🍖', name: '熊掌烤肉 (Lv.10)', desc: '30分鐘內 STR +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { str: 10 } },
    { id: 'broiledTentacle', icon: '🍢', name: '烤觸角 (Lv.10)', desc: '30分鐘內 AGI +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { agi: 10 } },
    { id: 'marinatedMushroom', icon: '🍄', name: '涼拌蘑菇 (Lv.10)', desc: '30分鐘內 VIT +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { vit: 10 } },
    { id: 'royalJellyTea', icon: '🫖', name: '蜂蜜花草茶 (Lv.10)', desc: '30分鐘內 INT +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { int: 10 } },
    { id: 'hwergelmirTonic', icon: '🥂', name: '赫瓦格密爾之酒 (Lv.10)', desc: '30分鐘內 DEX +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { dex: 10 } },
    { id: 'nineTailsTails', icon: '🍲', name: '九尾狐尾巴料理 (Lv.10)', desc: '30分鐘內 LUK +10', cost: 25000, type: 'buff', duration: 1800000, buffAttrs: { luk: 10 } },


    // ================= 商城道具 (高級 Zeny 區) =================
    
    // [經驗與掉寶加成]
    { id: 'expBoost', icon: '📚', name: '戰鬥教範', desc: '60分鐘內 Base 經驗值 +50%', cost: 15000, type: 'buff', duration: 3600000, expMulti: 1.5 },
    { id: 'expBoostPremium', icon: '📖', name: '高級戰鬥教範', desc: '60分鐘內 Base 經驗值 +100%', cost: 40000, type: 'buff', duration: 3600000, expMulti: 2.0 },
    { id: 'jobExpBoost', icon: '🎓', name: '職業教範', desc: '60分鐘內 Job 經驗值 +50%', cost: 15000, type: 'buff', duration: 3600000, jobExpMulti: 1.5 },
    { id: 'jobExpBoostPremium', icon: '🎓', name: '高級職業教範', desc: '60分鐘內 Job 經驗值 +100%', cost: 35000, type: 'buff', duration: 3600000, jobExpMulti: 2.0 },
    { id: 'dropBoost', icon: '🍬', name: '掉寶糖果', desc: '60分鐘內裝備與道具掉落率 +50%', cost: 15000, type: 'buff', duration: 3600000, dropMulti: 1.5 },
    { id: 'dropBoostPremium', icon: '🍭', name: '掉寶率倍增糖', desc: '60分鐘內裝備與道具掉落率 +100%', cost: 40000, type: 'buff', duration: 3600000, dropMulti: 2.0 },
    
    // [長效生存增益 (大生命/大魔力)]
    { id: 'hpIncreasePotion', icon: '❤️‍🔥', name: '大生命水', desc: '1小時內 MaxHP 提升 20%，每秒微幅恢復', cost: 45000, type: 'buff', duration: 3600000, buffAttrs: { maxHpPct: 20 } },
    { id: 'spIncreasePotion', icon: '💙', name: '大魔力水', desc: '1小時內 MaxSP 提升 20%，每秒微幅恢復', cost: 45000, type: 'buff', duration: 3600000, buffAttrs: { maxSpPct: 20 } },
    { id: 'defPotion', icon: '🛡️', name: '防禦藥水', desc: '1小時內 物理防禦力提升 20%', cost: 35000, type: 'buff', duration: 3600000, buffAttrs: { defPct: 20 } },
    { id: 'mdefPotion', icon: '🔮', name: '魔防藥水', desc: '1小時內 魔法防禦力提升 20%', cost: 35000, type: 'buff', duration: 3600000, buffAttrs: { mdefPct: 20 } },
    { id: 'guyakPudding', icon: '🍮', name: '九夜葛布丁', desc: '1小時內 移動速度與攻速大幅提升 (ASPD+15%)', cost: 50000, type: 'buff', duration: 3600000, buffAttrs: { aspdBonusPct: 15, flee: 30 } },

    // [自動化輔助與便利服務]
    { id: 'autoHp', icon: '❤️', name: '生命保險 (初級)', desc: '1小時內低於50%自動喝紅水', cost: 10000, type: 'buff', duration: 3600000, autoHpThreshold: 0.5 },
    { id: 'autoHpPremium', icon: '💖', name: '生命保險 (高級)', desc: '1小時內低於80%自動喝高階藥水', cost: 30000, type: 'buff', duration: 3600000, autoHpThreshold: 0.8 },
    { id: 'autoSp', icon: '💧', name: '魔力保險 (初級)', desc: '1小時內低於50%自動喝藍水', cost: 10000, type: 'buff', duration: 3600000, autoSpThreshold: 0.5 },
    { id: 'autoSpPremium', icon: '💦', name: '魔力保險 (高級)', desc: '1小時內低於80%自動喝高階藥水', cost: 30000, type: 'buff', duration: 3600000, autoSpThreshold: 0.8 },
    { id: 'infinityFlyWing', icon: '♾️', name: '無限蒼蠅翅膀', desc: '2小時內可無限次瞬間換怪', cost: 150000, type: 'buff', duration: 7200000, special: 'infiniteFlyWing' },
    
    // [商城能力增幅卷軸 - 1小時長效]
    { id: 'allStatScroll', icon: '🌟', name: '全能增幅卷軸 (祝福)', desc: '1小時內 全素質 +15', cost: 150000, type: 'buff', duration: 3600000, buffAttrs: { allStat: 15 } },
    { id: 'atkScroll', icon: '⚔️', name: '戰神降臨卷軸', desc: '1小時內 物理攻擊 +20%', cost: 80000, type: 'buff', duration: 3600000, buffAttrs: { atkPct: 20 } },
    { id: 'matkScroll', icon: '🪄', name: '魔神降臨卷軸', desc: '1小時內 魔法攻擊 +20%', cost: 80000, type: 'buff', duration: 3600000, buffAttrs: { matkBonusPct: 20 } },
    { id: 'defScroll', icon: '🏰', name: '守護之盾卷軸', desc: '1小時內 防禦力 +30%', cost: 50000, type: 'buff', duration: 3600000, buffAttrs: { defPct: 30 } },
    { id: 'critScroll', icon: '💥', name: '致命一擊卷軸', desc: '1小時內 暴擊機率 +20', cost: 60000, type: 'buff', duration: 3600000, buffAttrs: { crit: 20 } },
    { id: 'fleeScroll', icon: '💨', name: '風之步卷軸', desc: '1小時內 迴避率 +50', cost: 60000, type: 'buff', duration: 3600000, buffAttrs: { flee: 50 } },
    { id: 'hitScroll', icon: '🦅', name: '鷹眼卷軸', desc: '1小時內 命中率 +50', cost: 60000, type: 'buff', duration: 3600000, buffAttrs: { hit: 50 } },
    { id: 'tyrBlessing', icon: '⚡', name: '提爾的祝福', desc: '1小時內 ATK/MATK +50，命中與迴避 +30', cost: 200000, type: 'buff', duration: 3600000, buffAttrs: { atk: 50, matk: 50, hit: 30, flee: 30 } },

    // [特殊系統道具與特權]
    { id: 'maxWeightScroll', icon: '🎒', name: '健身房隨身包', desc: '永久擴充 10 格背包空間上限', cost: 250000, type: 'consumable', special: 'addInventory' },
    { id: 'bossRadar', icon: '📡', name: '凸透鏡 (首領雷達)', desc: '1小時內 遭遇精英怪與王機率大幅提升', cost: 100000, type: 'buff', duration: 3600000, buffAttrs: { bossEncounterMulti: 3.0 } },
    { id: 'tokenOfSiegfried', icon: '🏅', name: '齊格弗里德之證', desc: '角色死亡時可原地滿血滿魔復活 (免死金牌)', cost: 120000, type: 'consumable', special: 'autoResurrect' },
    { id: 'safeguardShield', icon: '🛡️', name: '防爆卷軸', desc: '鐵匠精煉失敗時，保護裝備不爆裂 (消耗品)', cost: 300000, type: 'consumable', special: 'protectUpgrade' },
    { id: 'enrichElunium', icon: '💎', name: '濃縮鋁', desc: '精煉防具時提升成功機率', cost: 150000, type: 'consumable', special: 'upgradeArmorBonus' },
    { id: 'enrichOridecon', icon: '💠', name: '濃縮神之金屬', desc: '精煉武器時提升成功機率', cost: 150000, type: 'consumable', special: 'upgradeWeaponBonus' },
    { id: 'vipCard', icon: '👑', name: '尊榮 VIP 特權', desc: '24小時內 經驗/掉寶加倍、全素質+20', cost: 999999, type: 'buff', duration: 86400000, expMulti: 2.0, dropMulti: 2.0, buffAttrs: { allStat: 20 } },
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
      arch_mage: { name: '禁咒魔導士', icon: '☄️', primaryStat: 'int', hpMulti: 2.5, spMulti: 5.0, atkMulti: 4.0, defMulti: 1.5, isJob2: true, maxJob: 60, reqBaseLv: 200, reqJobLv: 70, advClasses: [] },
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
// ==========================================
    // 5. 職業技能樹資料庫 (實裝官方被動素質、多段攻擊邏輯、體型與特效)
    // ==========================================
    SKILLS: {
      // 【初心者】
      novice: [
        { id: 'n_basic', name: '基本技能', icon: '📖', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `全屬性微幅增加 ${lv}`, passiveAttr: (lv) => ({ str: lv, agi: lv, vit: lv, int: lv, dex: lv, luk: lv }) },
        { id: 'n_playdead', name: '裝死', icon: '👻', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 10 SP，瞬間回復 20% HP，並清除怪物仇恨`, spCost: (lv) => 10, healHpPct: 0.2, clearAggro: true },
        { id: 'n_firstaid', name: '急救', icon: '🩹', type: 'active', maxLv: 1, reqJobLv: 8, desc: (lv) => `消耗 3 SP，回復 15 HP`, spCost: (lv) => 3, healPower: (lv) => 15 }
      ],

      // ================= 一轉職業 =================
      swordman: [
        { id: 's_bash', name: '狂擊', icon: '⚔️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${5+lv*2} SP，造成 ${150+lv*30}% 物理傷害，Lv5以上高機率暈眩`, spCost: (lv) => 5+lv*2, dmgMulti: (lv) => 1.5+lv*0.3, hits: 1, stunChance: (lv) => lv>=5 ? lv*2.5 : 0 },
        { id: 's_magnum', name: '怒爆', icon: '🌋', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv} SP，造成 ${200+lv*20}% 火屬性範圍傷害，附加10秒火屬性攻擊`, spCost: (lv) => 15+lv, dmgMulti: (lv) => 2.0+lv*0.2, hits: 1, fireEnchant: true, knockback: true },
        { id: 's_regen', name: 'HP回復力向上', icon: '❤️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `每 10 秒回復 ${lv*5} + (MaxHP*${lv*0.2}%) 生命`, passiveAttr: (lv) => ({ hpRegenMulti: 1+lv*0.1, hpRegenFlat: lv*5 }) },
        { id: 's_mastery1', name: '單手劍修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備單手劍時基礎攻擊力增加 ${lv*4}`, passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'sword' }) },
        { id: 's_mastery2', name: '雙手劍修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備雙手劍時基礎攻擊力增加 ${lv*4}`, passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'two_handed_sword' }) },
        { id: 's_provoke', name: '挑釁', icon: '💢', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `怪物防禦力下降 ${lv*5}%，但攻擊力上升 ${lv*2}%` },
        { id: 's_endure', name: '霸體', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `受擊時不會停頓，且MDEF提升 ${lv}，承受 ${lv*7} 次攻擊後失效`, buffDuration: 7, passiveAttr: (lv) => ({ mdef: lv, antiFlinch: true }) }
      ],
      magician: [
        { id: 'm_coldbolt', name: '冰箭術', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 冰魔法傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'water' },
        { id: 'm_firebolt', name: '火箭術', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${12+lv*2} SP，造成 ${lv} 段 ${100}% 火魔法傷害`, spCost: (lv) => 12+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'fire' },
        { id: 'm_lightning', name: '雷擊術', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${10+lv*2} SP，造成 ${lv} 段 ${100}% 風魔法傷害`, spCost: (lv) => 10+lv*2, dmgMulti: (lv) => 1.0, hits: (lv) => lv, element: 'wind' },
        { id: 'm_soulstrike', name: '聖靈召喚', icon: '👻', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 ${15+lv} SP，造成 ${Math.floor(lv/2)+1} 段念屬性傷害，對不死系加成`, spCost: (lv) => 15+lv, dmgMulti: (lv) => 1.0, hits: (lv) => Math.floor(lv/2)+1, element: 'ghost' },
        { id: 'm_zen', name: '禪心', icon: '🧘', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `每 10 秒額外回復 ${lv*3} + (MaxSP*${lv*0.2}%) SP`, passiveAttr: (lv) => ({ spRegenMulti: 1+lv*0.1, spRegenFlat: lv*3 }) },
        { id: 'm_firewall', name: '火牆術', icon: '🧱', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 40 SP，建立火牆，阻擋敵人並造成 ${50+lv*5}% 火屬性傷害 ${lv*3} 次`, spCost: 40, dmgMulti: (lv) => 0.5+lv*0.05, hits: (lv) => lv*3, element: 'fire', blockAggro: true },
        { id: 'm_frost', name: '冰凍術', icon: '🧊', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 25 SP，造成 ${100+lv*10}% 水屬性傷害，${lv*6}% 機率冰凍敵人`, spCost: 25, dmgMulti: (lv) => 1.0+lv*0.1, hits: 1, freezeChance: (lv) => 30+lv*3, element: 'water' }
      ],
      thief: [
        { id: 't_double', name: '二刀連擊', icon: '⚔️', type: 'passive', maxLv: 10, reqJobLv: 1, desc: (lv) => `裝備短劍時，普攻有 ${lv*5}% 機率造成雙倍傷害`, passiveAttr: (lv) => ({ doubleHitChance: lv*5, weaponReq: 'dagger' }) },
        { id: 't_flee', name: '殘影', icon: '💨', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `FLEE (迴避率) 額外提升 ${lv*3} 點`, passiveAttr: (lv) => ({ flee: lv*3 }) },
        { id: 't_steal', name: '偷竊', icon: '🧤', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 10 SP，機率從怪物身上額外獲得一件物品 (視DEX與等級)`, spCost: 10, dropBonusActive: (lv) => lv*5 },
        { id: 't_hide', name: '隱匿', icon: '🥷', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 10 SP 潛入地下，閃避大部分攻擊，持續時間視等級而定`, spCost: 10, buffAttr: (lv) => ({ invulnerable: true }) },
        { id: 't_envenom', name: '施毒', icon: '☠️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 15 SP，造成 ${15+lv*15} 基礎加成與 ${150}% 傷害，高機率附加劇毒`, spCost: 15, dmgMulti: 1.5, flatDmg: (lv) => 15+lv*15, hits: 1, poisonChance: (lv) => 10+lv*4 },
        { id: 't_detox', name: '解毒', icon: '🌿', type: 'active', maxLv: 1, reqJobLv: 15, desc: (lv) => `消耗 10 SP，解除自身或目標的毒屬性狀態`, spCost: 10, curePoison: true },
        { id: 't_sand', name: '撒沙', icon: '⏳', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗 9 SP，造成 130% 地屬性傷害，並有 ${lv*10}% 機率致盲`, spCost: 9, dmgMulti: 1.3, hits: 1, blindChance: (lv) => lv*10, element: 'earth' }
      ],
      acolyte: [
        { id: 'a_heal', name: '治癒術', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${13+lv*3} SP，回復生命 (基於INT與等級)，對不死系造成等量聖傷害`, spCost: (lv) => 13+lv*3, healPower: (lv) => 150+lv*50, holyDmgMulti: 1.0, element: 'holy' },
        { id: 'a_bless', name: '天使之賜福', icon: '👼', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${10+lv*4} SP，提升 STR/INT/DEX 各 ${lv} 點，解除詛咒`, spCost: (lv) => 10+lv*4, buffAttr: (lv) => ({ str: lv, int: lv, dex: lv }) },
        { id: 'a_agi', name: '加速術', icon: '🏃', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 ${15+lv*3} SP，提升 AGI ${lv} 點，移動速度增加`, spCost: (lv) => 15+lv*3, buffAttr: (lv) => ({ agi: lv, flee: lv*2, moveSpeedPct: 25 }) },
        { id: 'a_holy', name: '神聖之光', icon: '🌟', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 15 SP，造成 125% 聖屬性魔法傷害，吟唱短暫`, spCost: 15, dmgMulti: 1.25, hits: 1, element: 'holy' },
        { id: 'a_pneuma', name: '光之障壁', icon: '🛡️', type: 'active', maxLv: 1, reqJobLv: 25, desc: (lv) => `消耗 10 SP，創造 3x3 結界，完全免疫所有遠程物理攻擊`, spCost: 10, blockRangeChance: 100 },
        { id: 'a_ruwach', name: '光獵', icon: '👁️', type: 'active', maxLv: 1, reqJobLv: 10, desc: (lv) => `消耗 10 SP，找出周圍隱匿的敵人並造成 145% 聖屬性傷害`, spCost: 10, dmgMulti: 1.45, hits: 1, revealStealth: true, element: 'holy' },
        { id: 'a_teleport', name: '瞬間移動', icon: '🌀', type: 'active', maxLv: 2, reqJobLv: 10, desc: (lv) => `消耗 ${10-lv*1} SP，隨機傳送或回儲存點`, spCost: (lv) => 10-lv*1 }
      ],
      archer: [
        { id: 'ar_double', name: '二連矢', icon: '🏹', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${8+lv*2} SP，連續射出兩箭，單下 ${90+lv*10}% 傷害`, spCost: (lv) => 8+lv*2, dmgMulti: (lv) => 0.9+lv*0.1, hits: 2, weaponReq: 'bow' },
        { id: 'ar_owl', name: '鴞梟之眼', icon: '🦉', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `常駐狀態，DEX 額外提升 ${lv} 點`, passiveAttr: (lv) => ({ dex: lv }) },
        { id: 'ar_vulture', name: '蒼鷹之眼', icon: '🦅', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `HIT (命中率) 提升 ${lv} 點，弓箭射程增加 ${lv} 格`, passiveAttr: (lv) => ({ hit: lv, rangeBonus: lv }) },
        { id: 'ar_shower', name: '箭雨', icon: '🌧️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*3} SP，對範圍造成 ${100+lv*20}% 傷害，強制擊退目標`, spCost: (lv) => 15+lv*3, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, knockback: true },
        { id: 'ar_attention', name: '心神凝聚', icon: '🎯', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 ${20+lv*5} SP，提升 AGI 與 DEX 各 ${lv}%，並探測隱形`, spCost: (lv) => 20+lv*5, buffAttr: (lv) => ({ agiPct: lv, dexPct: lv }), revealStealth: true },
        { id: 'ar_craft', name: '製造箭', icon: '🛠️', type: 'active', maxLv: 1, reqJobLv: 25, desc: (lv) => `消耗 10 SP，將收集到的材料製作成特定屬性箭矢`, spCost: 10 },
        { id: 'ar_charge', name: '衝鋒箭', icon: '💨', type: 'active', maxLv: 1, reqJobLv: 30, desc: (lv) => `消耗 15 SP，造成 150% 傷害並將敵人擊退 6 格`, spCost: 15, dmgMulti: 1.5, hits: 1, knockback: true }
      ],
      merchant: [
        { id: 'me_mammonite', name: '金錢攻擊', icon: '🪙', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${lv*100} Zeny，造成 ${150+lv*50}% 強力物理傷害`, zenyCost: (lv) => lv*100, dmgMulti: (lv) => 1.5+lv*0.5, hits: 1 },
        { id: 'me_weight', name: '負重量上升', icon: '🎒', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `最大負重量增加 ${lv*200}`, passiveAttr: (lv) => ({ weightBonus: lv*200 }) },
        { id: 'me_discount', name: '低價買進', icon: '📉', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `從 NPC 購買道具時，價格降低 ${lv*2.4}%`, passiveAttr: (lv) => ({ buyPriceDiscount: lv*2.4 }) },
        { id: 'me_overcharge', name: '高價賣出', icon: '📈', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `將道具賣給 NPC 時，價格提升 ${lv*2.4}%`, passiveAttr: (lv) => ({ sellPriceBonus: lv*2.4 }) },
        { id: 'me_cart', name: '手推車使用', icon: '🛒', type: 'passive', maxLv: 10, reqJobLv: 15, desc: (lv) => `可租借手推車，隨等級降低推車減速懲罰`, passiveAttr: (lv) => ({ cartEnable: true }) },
        { id: 'me_vending', name: '露天商店', icon: '🏪', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `可開設商店販售物品，最高可賣 ${lv+2} 種商品` },
        { id: 'me_loud', name: '大聲呼喊', icon: '🗣️', type: 'active', maxLv: 1, reqJobLv: 20, desc: (lv) => `消耗 8 SP，短時間內提升 4 點 STR`, spCost: 8, buffAttr: (lv) => ({ str: 4 }) }
      ],

      // ================= 二轉 (2-1) =================
      knight: [
        { id: 'k_pierce', name: '連刺攻擊', icon: '🔱', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 7 SP，對小/中/大型分別造成 1/2/3 段 ${100+lv*10}% 傷害`, spCost: 7, dmgMulti: (lv) => 1.0+lv*0.1, hits: 3, weaponReq: 'spear' }, 
        { id: 'k_bowling', name: '怪物互擊', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${15+lv*2} SP，擊退敵人互撞，造成兩段 ${100+lv*40}% 範圍傷害`, spCost: (lv) => 15+lv*2, dmgMulti: (lv) => 1.0+lv*0.4, hits: 2, knockback: true },
        { id: 'k_quicken', name: '雙手劍增壓', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${20+lv*4} SP，裝備雙手劍時 ASPD 提升 30%`, spCost: (lv) => 20+lv*4, buffAttr: (lv) => ({ aspdBonusPct: 30, weaponReq: 'two_handed_sword' }) }, 
        { id: 'k_pecopeco', name: '騎乘術', icon: '🦤', type: 'passive', maxLv: 1, reqJobLv: 20, desc: (lv) => `可騎乘大嘴鳥，體型修正為大型，長矛傷害提升`, passiveAttr: (lv) => ({ moveSpeedPct: 25, sizeModifier: 'large' }) },
        { id: 'k_cavalry', name: '騎乘攻擊', icon: '🏇', type: 'passive', maxLv: 5, reqJobLv: 25, desc: (lv) => `恢復騎乘大嘴鳥時下降的攻擊速度 (最高恢復100%)` },
        { id: 'k_spearmast', name: '長矛修練', icon: '🔱', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備長矛時攻擊力增加 ${lv*4}，騎乘時增加 ${lv*5}`, passiveAttr: (lv) => ({ skAtk: lv*4, weaponReq: 'spear' }) },
        { id: 'k_brandish', name: '迴旋擊', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 25, desc: (lv) => `消耗 12 SP，騎乘長矛專用，對扇形範圍造成 ${100+lv*20}% 傷害`, spCost: 12, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, weaponReq: 'spear' }
      ],
      wizard: [
        { id: 'w_storm', name: '暴風雪', icon: '❄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 ${40+lv*5} SP，造成 10 段 ${140+lv*40}% 冰傷害，高機率冰凍`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.4+lv*0.4, hits: 10, freezeChance: (lv) => lv*6, element: 'water' },
        { id: 'w_lov', name: '怒雷強擊', icon: '🌩️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 ${40+lv*4} SP，4 波共 40 段 ${80+lv*20}% 風傷害，機率致盲`, spCost: (lv) => 40+lv*4, dmgMulti: (lv) => 0.8+lv*0.2, hits: 10, blindChance: (lv) => lv*4, element: 'wind' },
        { id: 'w_meteor', name: '隕石術', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${30+lv*5} SP，降下 ${Math.floor(lv/2)+2} 顆隕石，每顆 ${100+lv*50}% 火傷害`, spCost: (lv) => 30+lv*5, dmgMulti: (lv) => 1.0+lv*0.5, hits: (lv) => Math.floor(lv/2)+2, stunChance: (lv) => lv*3, element: 'fire' },
        { id: 'w_jt', name: '雷鳴術', icon: '⚡', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 ${15+lv*3} SP，發射 ${lv+2} 發雷球，每發 100% 傷害並強力擊退`, spCost: (lv) => 15+lv*3, dmgMulti: 1.0, hits: (lv) => lv+2, element: 'wind', knockback: true },
        { id: 'w_quagmire', name: '泥沼地', icon: '🕳️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `減少範圍內敵人 AGI 與 DEX 各 ${lv*10}%，並解除加速狀態` },
        { id: 'w_earthspike', name: '地震術', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 ${10+lv*2} SP，從地面突刺造成 ${lv} 段 100% 地屬性傷害`, spCost: (lv) => 10+lv*2, dmgMulti: 1.0, hits: (lv) => lv, element: 'earth' },
        { id: 'w_sense', name: '怪物情報', icon: '👁️', type: 'active', maxLv: 1, reqJobLv: 5, desc: (lv) => `消耗 10 SP，獲取目標魔物的血量、屬性與弱點` }
      ],
      assassin: [
        { id: 'as_sonic', name: '音速投擲', icon: '🌪️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 34 SP，瞬間八連擊造成 ${300+lv*60}% 傷害，${10+lv*2}% 暈眩`, spCost: 34, dmgMulti: (lv) => (3.0+lv*0.6)/8, hits: 8, stunChance: (lv) => 10+lv*2 },
        { id: 'as_katar', name: '拳刃修練', icon: '🗡️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備拳刃時 ATK 提升 ${lv*3}，暴擊率倍增`, passiveAttr: (lv) => ({ skAtk: lv*3, critMulti: 2.0, weaponReq: 'katar' }) },
        { id: 'as_grimtooth', name: '無影之牙', icon: '🦇', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `隱匿時使用，消耗 3 SP 對範圍造成 ${100+lv*20}% 傷害`, spCost: 3, dmgMulti: (lv) => 1.0+lv*0.2, hits: 1, requiresHide: true },
        { id: 'as_cloak', name: '偽裝', icon: '🥷', type: 'active', maxLv: 10, reqJobLv: 5, desc: (lv) => `消耗 15 SP，貼牆時可完全隱形並移動`, buffAttr: (lv) => ({ sneak: true }) },
        { id: 'as_enchant', name: '塗毒', icon: '🧪', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 20 SP，將武器屬性轉為毒屬性，普攻機率使敵人中毒`, spCost: 20, buffAttr: (lv) => ({ element: 'poison', poisonChance: lv*2 }) },
        { id: 'as_venom', name: '毒性感染', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `對已中毒的敵人造成強力爆發毒屬性傷害` },
        { id: 'as_right', name: '右手修練', icon: '🗡️', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `裝備雙刀時，恢復右手因雙持降低的傷害 (最高100%)` },
        { id: 'as_left', name: '左手修練', icon: '🗡️', type: 'passive', maxLv: 5, reqJobLv: 10, desc: (lv) => `裝備雙刀時，恢復左手因雙持降低的傷害 (最高80%)` }
      ],
      priest: [
        { id: 'pr_magnus', name: '十字驅魔攻擊', icon: '✝️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${40+lv*5} SP (需藍礦)，對不死/惡魔造成 ${lv} 段毀滅聖傷害`, spCost: (lv) => 40+lv*5, dmgMulti: (lv) => 1.0+lv*0.3, hits: (lv) => lv, targetRace: ['undead', 'demon'], element: 'holy' },
        { id: 'pr_magni', name: '聖母之頌歌', icon: '🎵', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 40 SP，全隊 SP 自然回復速度提升 2 倍`, spCost: 40, buffAttr: (lv) => ({ spRegenMulti: 2.0 }) },
        { id: 'pr_kyrie', name: '霸邪之陣', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `消耗 20 SP，賦予防護罩抵擋 ${lv*3} 次或 MaxHP ${10+lv*2}% 的傷害`, spCost: 20, buffAttr: (lv) => ({ shieldHits: lv*3, shieldHpPct: 10+lv*2 }) },
        { id: 'pr_lex', name: '神威祈福', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 20 SP，隊友物理攻擊力直接提升 ${lv*5} 點`, spCost: 20, buffAttr: (lv) => ({ flatAtk: lv*5 }) },
        { id: 'pr_res', name: '復活術', icon: '👼', type: 'active', maxLv: 4, reqJobLv: 20, desc: (lv) => `消耗 60 SP (需藍礦)，復活隊友並恢復 ${lv*20}% HP` },
        { id: 'pr_asper', name: '灑水祈福', icon: '💧', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 20 SP (需聖水)，將隊友武器屬性轉為聖屬性`, spCost: 20, buffAttr: (lv) => ({ element: 'holy' }) },
        { id: 'pr_sanct', name: '光耀之堂', icon: '🌟', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `消耗 30 SP (需藍礦)，範圍內每秒恢復 777 HP，對不死造成傷害` },
        { id: 'pr_lexa', name: '轉生術', icon: '✝️', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `機率一擊必殺不死系怪物，失敗則造成聖屬性傷害` }
      ],
      hunter: [
        { id: 'ht_blitz', name: '閃電衝擊', icon: '🦅', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `老鷹造成無視防禦與迴避的 ${lv} 段強制無屬性傷害`, dmgMulti: 1.0, hits: (lv) => lv, ignoreDef: true, ignoreFlee: true },
        { id: 'ht_falcon', name: '獵鷹尋笛', icon: '🦉', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `普攻時視 LUK 機率自動觸發閃電衝擊 (需裝備弓與老鷹)` },
        { id: 'ht_trap_clay', name: '爆炎陷阱', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗 15 SP，設置陷阱造成大範圍火屬性傷害 (視DEX/INT)`, spCost: 15, dmgMulti: (lv) => 2.0+lv*1.0, element: 'fire' },
        { id: 'ht_trap_frost', name: '霜凍陷阱', icon: '❄️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `造成水屬性傷害並高機率冰凍範圍內的敵人`, element: 'water' },
        { id: 'ht_trap_ankle', name: '定位陷阱', icon: '⛓️', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將踩到的魔物完全定身 ${lv*4} 秒` },
        { id: 'ht_beast', name: '野獸剋星', icon: '🐺', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `對動物系與昆蟲系魔物傷害增加 ${lv*4}%`, passiveAttr: (lv) => ({ raceDmgBonus: { beast: lv*4, insect: lv*4 } }) },
        { id: 'ht_phobia', name: '滑動陷阱', icon: '💨', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將踩到的魔物強制向前滑動並受到少量傷害` }
      ],
      blacksmith: [
        { id: 'bs_cart', name: '手推車終結技', icon: '🛒', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `消耗 ${150*lv} Zeny，造成最高 ${150+lv*150}% 強制無屬性必中傷害`, zenyCost: (lv) => 150*lv, spCost: 15, dmgMulti: (lv) => 1.5+lv*1.5, hits: 1, ignoreDef: true, ignoreFlee: true },
        { id: 'bs_adrenalin', name: '速度激發', icon: '⚡', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `消耗 30 SP，裝備斧/鈍器時全隊 ASPD 大幅提升 30%`, spCost: 30, buffAttr: (lv) => ({ aspdBonusPct: 30, weaponReq: ['axe', 'mace'] }) },
        { id: 'bs_weapon', name: '武器研究', icon: '🔨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `基礎攻擊力與命中率各提升 ${lv*2}，提高鍛造成功率`, passiveAttr: (lv) => ({ skAtk: lv*2, hit: lv*2 }) },
        { id: 'bs_max_power', name: '無視體型攻擊', icon: '💪', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗 20 SP，武器對所有體型皆發揮 100% 傷害`, spCost: 20, buffAttr: (lv) => ({ ignoreSizePenalty: true }) },
        { id: 'bs_power_thrust', name: '凶砍', icon: '🪓', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 15 SP，全隊武器攻擊力提升 ${lv*5}%，但武器有機率損壞`, spCost: 15, buffAttr: (lv) => ({ atkPct: lv*5 }) },
        { id: 'bs_hammer', name: '大地之擊', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `敲擊地面造成範圍傷害並機率暈眩` },
        { id: 'bs_ore', name: '尋找礦石', icon: '💎', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `打怪時有機率額外掉落各種礦石` }
      ],

      // ================= 二轉 (2-2) =================
      crusader: [
        { id: 'cr_cross', name: '聖十字審判', icon: '✨', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `反噬自身 20% HP，對周圍造成 ${100+lv*40}% (ATK+MATK) 聖屬性傷害 3 段`, spCost: (lv) => 20+lv*3, hpCostPct: 0.2, dmgMulti: (lv) => 1.0+lv*0.4, hits: 3, element: 'holy' },
        { id: 'cr_faith', name: '信任', icon: '🛡️', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `最大 HP 永久增加 ${lv*200}，神聖抗性增加 ${lv*5}%`, passiveAttr: (lv) => ({ maxHpFlat: lv*200, holyResist: lv*5 }) },
        { id: 'cr_guard', name: '自動防禦', icon: '🛡️', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備盾牌時，受擊有 ${lv*3}% 機率完全格擋傷害`, buffAttr: (lv) => ({ blockChance: lv*3, weaponReq: 'shield' }) },
        { id: 'cr_shield_chain', name: '連續盾擊', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 ${28+lv*3} SP，丟擲盾牌造成 5 段傷害 (受盾重影響)`, spCost: (lv) => 28+lv*3, dmgMulti: (lv) => 1.0+lv*0.3, hits: 5, weaponReq: 'shield' },
        { id: 'cr_holy_cross', name: '聖十字攻擊', icon: '✝️', type: 'active', maxLv: 6, reqJobLv: 10, desc: (lv) => `雙手劍專用，造成 ${100+lv*35}% 聖屬性傷害，機率致盲` },
        { id: 'cr_sacrifice', name: '捨命護衛', icon: '🩸', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `與隊友連線，代為承受其受到的所有傷害` },
        { id: 'cr_peco', name: '騎乘術(十字軍)', icon: '🦤', type: 'passive', maxLv: 1, reqJobLv: 10, desc: (lv) => `可騎乘大嘴鳥，增加移動速度與負重` }
      ],
      sage: [
        { id: 'sa_spell', name: '魔法懲罰', icon: '📖', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `中斷敵方詠唱，吸收其 ${lv*20}% SP 轉為自身 HP`, interruptCast: true },
        { id: 'sa_auto', name: '自動念咒', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `近戰普攻時有 ${lv*2}% 機率免詠唱觸發設定的元素箭`, buffAttr: (lv) => ({ autoSpellChance: lv*2 }) },
        { id: 'sa_free', name: '自由施法', icon: '🏃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `施法期間可以移動且繼續普攻，維持 ${lv*5}% 的速度`, passiveAttr: (lv) => ({ castMoveSpeedPct: lv*5, castAspdPct: lv*5 }) },
        { id: 'sa_heavens', name: '崩裂術', icon: '⛰️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗 ${20+lv*4} SP，範圍造成 ${lv} 段 100% 地屬性魔法傷害`, spCost: (lv) => 20+lv*4, dmgMulti: 1.0, hits: (lv) => lv, element: 'earth' },
        { id: 'sa_volcano', name: '火元素領域', icon: '🌋', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `地上鋪設領域，範圍內火屬性傷害增加，且無法被冰凍` },
        { id: 'sa_deluge', name: '水元素領域', icon: '🌊', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `地上鋪設領域，範圍內水屬性傷害增加，可使用水屬性技能` },
        { id: 'sa_whirl', name: '風元素領域', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `地上鋪設領域，範圍內風屬性傷害增加，FLEE 提升` },
        { id: 'sa_land', name: '地元素領域', icon: '🧱', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `無效化範圍內所有地面魔法與陷阱 (地領)` }
      ],
      rogue: [
        { id: 'rg_raid', name: '背刺', icon: '🔪', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `從敵人背後必定命中造成 ${300+lv*40}% 傷害`, dmgMulti: (lv) => 3.0+lv*0.4, hits: 1, ignoreFlee: true },
        { id: 'rg_snatch', name: '強奪', icon: '💰', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻有 ${lv*2}% 機率自動偷竊，掉寶率額外提升 ${lv}%`, passiveAttr: (lv) => ({ autoStealChance: lv*2, dropBonus: lv }) },
        { id: 'rg_tunnel', name: '潛遁', icon: '🥷', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `隱匿狀態下可移動，並提升偷襲時的暴擊率`, passiveAttr: (lv) => ({ sneakAttackCrit: 20 }) },
        { id: 'rg_plagiarism', name: '抄襲', icon: '📝', type: 'passive', maxLv: 10, reqJobLv: 20, desc: (lv) => `受到攻擊技能後永久記憶該技能 (上限1招)，自由使用。`, passiveAttr: (lv) => ({ enablePlagiarism: true, maxPlagiarismLv: lv }) },
        { id: 'rg_strip_weap', name: '卸除武器', icon: '🗡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `機率強制卸除敵方武器，使其攻擊力大幅下降` },
        { id: 'rg_strip_shld', name: '卸除盾牌', icon: '🛡️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `機率強制卸除敵方盾牌，使其防禦力下降` },
        { id: 'rg_sword', name: '單手劍修練(流氓)', icon: '⚔️', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `裝備單手劍時攻擊力增加 ${lv*4}` }
      ],
      monk: [
        { id: 'mo_ashura', name: '阿修羅霸凰拳', icon: '👊', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `消耗所有 SP，造成毀滅性真實傷害，施放後 5 分鐘無法回魔`, spCost: 9999, dmgMulti: (lv) => 8.0+lv*2.0, hits: 1, ignoreDef: true, ignoreFlee: true },
        { id: 'mo_dodge', name: '移花接木', icon: '🍃', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `FLEE 提升 ${lv*1.5}，受擊時機率減免傷害`, passiveAttr: (lv) => ({ flee: lv*1.5 }) },
        { id: 'mo_invest', name: '浸透勁', icon: '💥', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗 1 氣球，無視防禦造成 ${100+lv*75}% 傷害，敵方防禦越高傷害越大`, dmgMulti: (lv) => 1.0+lv*0.75, hits: 1, ignoreDef: true, defScaling: true },
        { id: 'mo_sphere', name: '蓄氣', icon: '🔮', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `主動聚集氣球，每顆氣球增加 3 ATK (最高 5 顆)` },
        { id: 'mo_finger', name: '彈指神功', icon: '🎯', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗所有氣球，遠距離投擲，每顆氣球造成 ${100+lv*50}% 傷害`, hits: (lv) => lv },
        { id: 'mo_combo1', name: '六合拳', icon: '🤛', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `普攻時機率自動觸發三連擊，為連技的起手式` },
        { id: 'mo_combo2', name: '連環全身掌', icon: '🤜', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `接在六合拳之後施放，造成 4 段傷害` },
        { id: 'mo_combo3', name: '猛龍誇強', icon: '🐉', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `接在連環全身掌之後，造成巨大傷害並擊退` }
      ],
      bard: [ 
        { id: 'bd_vulcan', name: '奧義箭亂舞', icon: '🎸', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `裝備樂器/鞭子，發出 9 段共 ${300+lv*100}% 物理傷害`, dmgMulti: (lv) => (3.0+lv*1.0)/9, hits: 9 },
        { id: 'bd_bragi', name: '布萊奇之詩', icon: '🎵', type: 'active', maxLv: 10, reqJobLv: 10, desc: (lv) => `全隊技能冷卻時間與詠唱減少 (受INT/DEX加成)` },
        { id: 'bd_apple', name: '伊登的蘋果', icon: '🍎', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `全隊 MaxHP 提升 ${lv*2}% 並每秒大幅恢復生命` },
        { id: 'bd_music', name: '樂器/練習曲修練', icon: '🎺', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備樂器或鞭子時，基礎攻擊力增加 ${lv*3}`, passiveAttr: (lv) => ({ skAtk: lv*3 }) },
        { id: 'bd_joke', name: '冷笑話', icon: '🥶', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `全畫面機率性將敵人與隊友冰凍` },
        { id: 'bd_tarot', name: '塔羅牌命運', icon: '🃏', type: 'active', maxLv: 5, reqJobLv: 25, desc: (lv) => `隨機抽取一張塔羅牌，對敵人造成各種強大異常狀態或傷害` },
        { id: 'bd_lullaby', name: '搖籃曲', icon: '💤', type: 'active', maxLv: 1, reqJobLv: 20, desc: (lv) => `大範圍使敵人陷入睡眠狀態` }
      ],
      alchemist: [
        { id: 'al_acid', name: '強酸侵蝕', icon: '🧪', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `消耗強酸瓶，造成傷害並極高機率破壞敵方防具造成出血`, dmgMulti: (lv) => 1.0+lv*0.4, hits: 1, bleedChance: (lv) => lv*10 },
        { id: 'al_potion', name: '知識藥水', icon: '💊', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `藥水回復量提升 ${lv*5}%，並增加負重量`, passiveAttr: (lv) => ({ potionEff: lv*5, weightBonus: lv*100 }) },
        { id: 'al_homun', name: '生命體呼喚', icon: '🐥', type: 'active', maxLv: 1, reqJobLv: 15, desc: (lv) => `召喚生命體協助攻擊，生命體擁有獨立技能與 AI` },
        { id: 'al_demo', name: '火煙瓶投擲', icon: '🔥', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `消耗火煙瓶，引發 5x5 火災造成多段持續魔法傷害與裝備破壞`, hits: 5, element: 'fire' },
        { id: 'al_ad_bomb', name: '強酸火煙瓶投擲', icon: '💥', type: 'active', maxLv: 10, reqJobLv: 25, desc: (lv) => `(AD) 同時投擲強酸與火煙，依據敵人 VIT 造成多段巨大毀滅傷害`, hits: 10, vitScaling: true },
        { id: 'al_plant', name: '召喚植物', icon: '🌿', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `消耗植物瓶，召喚固定砲塔植物協助攻擊` },
        { id: 'al_axe', name: '斧頭修練', icon: '🪓', type: 'passive', maxLv: 10, reqJobLv: 5, desc: (lv) => `裝備斧頭時攻擊力增加 ${lv*3}` }
      ],

      // ================= 三轉 (核心職業範例) =================
      rune_knight: [
        { id: 'rk_spear', name: '百矛穿刺', icon: '☄️', type: 'active', maxLv: 10, reqJobLv: 1, desc: (lv) => `消耗 60 SP，造成 ${800+lv*120}% 爆發物理傷害`, spCost: 60, dmgMulti: (lv) => 8.0+lv*1.2, hits: 1 },
        { id: 'rk_ignition', name: '風暴衝擊', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `引爆符文對廣範圍造成 ${300+lv*100}% 物理傷害，可觸發爆擊`, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, canCrit: true },
        { id: 'rk_rune', name: '盧恩精熟', icon: '🪨', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `解鎖盧恩石製造，全屬性 +${lv*2}`, passiveAttr: (lv) => ({ allStat: lv*2 }) },
        { id: 'rk_breath_fire', name: '龍之吐息(火)', icon: '🔥', type: 'active', maxLv: 10, reqJobLv: 15, desc: (lv) => `根據【目前HP與MaxSP】造成巨大火屬性真實傷害`, hpSpScalingDmg: true, element: 'fire', ignoreDef: true },
        { id: 'rk_breath_water', name: '龍之吐息(水)', icon: '💧', type: 'active', maxLv: 10, reqJobLv: 20, desc: (lv) => `根據【目前HP與MaxSP】造成巨大水屬性真實傷害，並機率結冰`, hpSpScalingDmg: true, element: 'water', ignoreDef: true },
        { id: 'rk_enchant', name: '附魔之刃', icon: '✨', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `將自身 MATK 轉化為普攻額外傷害` },
        { id: 'rk_dragon', name: '龍騎乘', icon: '🐉', type: 'passive', maxLv: 5, reqJobLv: 5, desc: (lv) => `騎乘飛龍，解除體型懲罰並增加負重` }
      ],
      guillotine_cross: [
        { id: 'gx_cross', name: '十字斬', icon: '❌', type: 'active', maxLv: 5, reqJobLv: 1, desc: (lv) => `造成 ${1200+lv*300}% 物理傷害，對毒屬性目標傷害大幅提升`, dmgMulti: (lv) => 12.0+lv*3.0, hits: 2 },
        { id: 'gx_rolling', name: '迴旋刃', icon: '🌪️', type: 'active', maxLv: 5, reqJobLv: 5, desc: (lv) => `對周圍造成 ${300+lv*100}% 傷害並累積迴圈次數 (上限10次)`, dmgMulti: (lv) => 3.0+lv*1.0, hits: 1, buildStack: 'rolling' },
        { id: 'gx_crs', name: '迴旋十字斬', icon: '🌀', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `消耗次數，滿層時造成 ${500+lv*200+1000}% 極大遠程傷害`, dmgMulti: 15.0, hits: 1, requireStack: 'rolling' },
        { id: 'gx_research', name: '新毒研究', icon: '🧪', type: 'passive', maxLv: 10, reqJobLv: 10, desc: (lv) => `十字斬威力上升 ${lv*5}%，毒屬性耐性增加`, passiveAttr: (lv) => ({ poisonResist: lv*5, skillDmgBonus: { gx_cross: lv*5 } }) },
        { id: 'gx_illusion', name: '幻影步', icon: '👻', type: 'active', maxLv: 5, reqJobLv: 10, desc: (lv) => `短時間內閃避極大幅度提升，免疫部分指向技能` },
        { id: 'gx_dark', name: '暗黑爪痕', icon: '爪', type: 'active', maxLv: 5, reqJobLv: 20, desc: (lv) => `給予敵人印記，5秒內使其受到的近戰物理傷害變成 2.5 倍` },
        { id: 'gx_poison', name: '劇毒強制', icon: '☠️', type: 'active', maxLv: 5, reqJobLv: 15, desc: (lv) => `強行將新毒效果注入敵方體內` }
      ]
      // (因長度限制，其他三/四轉職業依此類推即可。本資料庫已補齊一/二轉完整7~8招與三轉指標核心)
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
