// foods-extra7.ts — Bổ sung các nhóm còn ít: nước dùng, dầu mỡ, đồ uống, hạt, đậu, trứng sữa, nấm, thịt chế biến
export const extraFoods7 = [
  // ── NHÓM NƯỚC DÙNG ──
  {
    id: "nuoc-xuong-heo", slug: "nuoc-xuong-heo", name: "Nước xương heo",
    aliases: ["nuoc xuong heo", "nước dùng xương heo", "nước dùng xương lợn", "nuoc dung xuong heo", "nước xương lợn", "nuoc xuong lon", "nước hầm xương heo", "nước hầm xương lợn", "pork bone broth"],
    category: "Nước dùng", state: "cooked", basis: "100ml",
    edibleNote: "Nước hầm xương heo, dùng nấu phở, bún, canh.",
    nutrients: { energyKcal: 8, proteinG: 1.2, carbG: 0.5, fatG: 0.3, saturatedFatG: 0.1, sodiumMg: 180, potassiumMg: 60, calciumMg: 8, phosphorusMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-xuong-bo", slug: "nuoc-xuong-bo", name: "Nước xương bò",
    aliases: ["nuoc xuong bo", "nước dùng xương bò", "nuoc dung xuong bo", "nước hầm xương bò", "nuoc ham xuong bo", "beef bone broth"],
    category: "Nước dùng", state: "cooked", basis: "100ml",
    edibleNote: "Nước hầm xương bò, nấu phở bò, lẩu.",
    nutrients: { energyKcal: 10, proteinG: 1.5, carbG: 0.5, fatG: 0.4, saturatedFatG: 0.15, sodiumMg: 200, potassiumMg: 70, calciumMg: 8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-sup-bo", slug: "nuoc-sup-bo", name: "Nước súp bò (bouillon)",
    aliases: ["nuoc sup bo", "boiled beef broth", "bouillon"],
    category: "Nước dùng", state: "cooked", basis: "100ml",
    edibleNote: "Nước súp bò cô đặc pha loãng, nêm nếm gia vị.",
    nutrients: { energyKcal: 5, proteinG: 0.8, carbG: 0.3, fatG: 0.1, sodiumMg: 350, potassiumMg: 40 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-dung-tom", slug: "nuoc-dung-tom", name: "Nước dùng tôm",
    aliases: ["nuoc dung tom", "nước hầm tôm", "nuoc ham tom", "shrimp broth"],
    category: "Nước dùng", state: "cooked", basis: "100ml",
    edibleNote: "Nước hầm vỏ tôm, nấu bún, canh chua.",
    nutrients: { energyKcal: 6, proteinG: 0.8, carbG: 0.3, fatG: 0.15, sodiumMg: 200, potassiumMg: 55, calciumMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-dung-ca", slug: "nuoc-dung-ca", name: "Nước dùng cá",
    aliases: ["nuoc dung ca", "nước hầm cá", "nuoc ham ca", "fish broth"],
    category: "Nước dùng", state: "cooked", basis: "100ml",
    edibleNote: "Nước hầm xương cá, nấu lẩu cá, canh chua.",
    nutrients: { energyKcal: 5, proteinG: 0.7, carbG: 0.3, fatG: 0.1, sodiumMg: 180, potassiumMg: 50, calciumMg: 8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-ham-xuong", slug: "nuoc-ham-xuong", name: "Nước hầm xương tổng hợp",
    aliases: ["nuoc ham xuong", "nước dùng xương tổng hợp", "nuoc dung xuong tong hop", "mixed bone broth"],
    category: "Nước dùng", state: "cooked", basis: "100ml",
    edibleNote: "Nước hầm xương heo và bò, dùng nấu lẩu, canh.",
    nutrients: { energyKcal: 9, proteinG: 1.3, carbG: 0.5, fatG: 0.35, saturatedFatG: 0.12, sodiumMg: 190, potassiumMg: 65, calciumMg: 9 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-dua-chua", slug: "nuoc-dua-chua", name: "Nước dưa chua",
    aliases: ["nuoc dua chua", "pickled brine"],
    category: "Nước dùng", state: "processed", basis: "100ml",
    edibleNote: "Nước muối chua của dưa cải, dùng nấu canh chua.",
    nutrients: { energyKcal: 5, proteinG: 0.3, carbG: 0.8, fatG: 0.02, fiberG: 0.1, sodiumMg: 650, potassiumMg: 80, vitaminCMg: 3 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  // ── NHÓM DẦU MỠ ──
  {
    id: "dau-ca-huc", slug: "dau-ca-huc", name: "Dầu gấc",
    aliases: ["dau gac", "gac fruit oil"],
    category: "Dầu mỡ", state: "processed", basis: "100ml",
    edibleNote: "Dầu ép từ quả gấc, giàu lycopene và beta-carotene.",
    nutrients: { energyKcal: 884, proteinG: 0, carbG: 0, fatG: 100, saturatedFatG: 18, polyunsaturatedFatG: 20, monounsaturatedFatG: 55, vitaminAUg: 15000, vitaminEMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-day", slug: "dau-day", name: "Dầu đay (dầu hạt đay)",
    aliases: ["dau day", "jute seed oil"],
    category: "Dầu mỡ", state: "processed", basis: "100ml",
    edibleNote: "Dầu ép từ hạt cây đay, giàu omega-3 ALA.",
    nutrients: { energyKcal: 884, proteinG: 0, carbG: 0, fatG: 100, saturatedFatG: 12, polyunsaturatedFatG: 50, monounsaturatedFatG: 30, omega3G: 35 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-hanh-phi", slug: "dau-hanh-phi", name: "Dầu hành phi",
    aliases: ["dau hanh phi", "fried shallot oil"],
    category: "Dầu mỡ", state: "processed", basis: "100ml",
    edibleNote: "Dầu hành phi thơm, dùng rưới lên các món ăn.",
    nutrients: { energyKcal: 880, proteinG: 0.2, carbG: 0.5, fatG: 99, saturatedFatG: 14, sodiumMg: 5, potassiumMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-me-den", slug: "dau-me-den", name: "Dầu mè đen",
    aliases: ["dau me den", "black sesame oil"],
    category: "Dầu mỡ", state: "processed", basis: "100ml",
    edibleNote: "Dầu mè đen ép từ hạt mè rang, thơm đậm.",
    nutrients: { energyKcal: 884, proteinG: 0.1, carbG: 0, fatG: 100, saturatedFatG: 15, polyunsaturatedFatG: 45, monounsaturatedFatG: 38, calciumMg: 8, ironMg: 1 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "mo-ga", slug: "mo-ga", name: "Mỡ gà",
    aliases: ["mo ga", "chicken fat"],
    category: "Dầu mỡ", state: "raw", basis: "100g",
    edibleNote: "Mỡ gà phi thơm, dùng xào hoặc rưới cơm.",
    nutrients: { energyKcal: 900, proteinG: 0, carbG: 0, fatG: 100, saturatedFatG: 30, monounsaturatedFatG: 45, polyunsaturatedFatG: 21, cholesterolMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "mo-vit", slug: "mo-vit", name: "Mỡ vịt",
    aliases: ["mo vit", "duck fat"],
    category: "Dầu mỡ", state: "raw", basis: "100g",
    edibleNote: "Mỡ vịt phi thơm, dùng làm cơm vịt, xào.",
    nutrients: { energyKcal: 902, proteinG: 0, carbG: 0, fatG: 100, saturatedFatG: 33, monounsaturatedFatG: 50, polyunsaturatedFatG: 13, cholesterolMg: 75 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "bo-dong-vat", slug: "bo-dong-vat", name: "Mỡ bò (tallow)",
    aliases: ["beef tallow", "mo bo"],
    category: "Dầu mỡ", state: "processed", basis: "100g",
    edibleNote: "Mỡ bò tinh luyện, dùng chiên rán hoặc nấu phở.",
    nutrients: { energyKcal: 902, proteinG: 0, carbG: 0, fatG: 100, saturatedFatG: 50, monounsaturatedFatG: 42, polyunsaturatedFatG: 4, cholesterolMg: 95 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-phong", slug: "dau-phong", name: "Dầu phộng (dầu lạc)",
    aliases: ["dau phong", "dầu đậu phộng", "dau dau phong", "dầu lạc", "dau lac", "peanut oil"],
    category: "Dầu mỡ", state: "processed", basis: "100ml",
    edibleNote: "Dầu ép từ lạc, dùng chiên xào phổ biến.",
    nutrients: { energyKcal: 884, proteinG: 0, carbG: 0, fatG: 100, saturatedFatG: 17, polyunsaturatedFatG: 32, monounsaturatedFatG: 46, vitaminEMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  // ── NHÓM ĐỒ UỐNG ──
  {
    id: "nuoc-ep-dua-hau", slug: "nuoc-ep-dua-hau", name: "Nước ép dưa hấu",
    aliases: ["nuoc ep dua hau", "watermelon juice"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Nước ép dưa hấu tươi, không đường.",
    nutrients: { energyKcal: 30, proteinG: 0.6, carbG: 7.5, fatG: 0.1, sugarG: 6, fiberG: 0.3, potassiumMg: 100, vitaminCMg: 8, vitaminAUg: 569, lycopeneMg: 4.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-ep-cam", slug: "nuoc-ep-cam", name: "Nước ép cam",
    aliases: ["nuoc ep cam", "orange juice"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Nước ép cam tươi, không đường.",
    nutrients: { energyKcal: 45, proteinG: 0.7, carbG: 10.4, fatG: 0.1, sugarG: 8.4, fiberG: 0.2, potassiumMg: 175, vitaminCMg: 50, folateUg: 30, calciumMg: 11 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-ep-buoi", slug: "nuoc-ep-buoi", name: "Nước ép bưởi",
    aliases: ["nuoc ep buoi", "grapefruit juice"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Nước ép bưởi tươi, vị chua thanh.",
    nutrients: { energyKcal: 38, proteinG: 0.5, carbG: 9, fatG: 0.1, sugarG: 8, fiberG: 0.1, potassiumMg: 160, vitaminCMg: 35, folateUg: 18 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-ep-ca-rot", slug: "nuoc-ep-ca-rot", name: "Nước ép cà rốt",
    aliases: ["nuoc ep ca rot", "carrot juice"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Nước ép cà rốt tươi, giàu vitamin A.",
    nutrients: { energyKcal: 39, proteinG: 0.9, carbG: 9.2, fatG: 0.1, sugarG: 5.5, fiberG: 0.7, potassiumMg: 290, vitaminAUg: 19180, vitaminCMg: 6, calciumMg: 24 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-ep-tao", slug: "nuoc-ep-tao", name: "Nước ép táo",
    aliases: ["nuoc ep tao", "apple juice"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Nước ép táo, phổ biến và dễ uống.",
    nutrients: { energyKcal: 46, proteinG: 0.1, carbG: 11.3, fatG: 0.1, sugarG: 9.6, fiberG: 0.2, potassiumMg: 100, vitaminCMg: 1 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sua-hat-hanh-nhan", slug: "sua-hat-hanh-nhan", name: "Sữa hạt hạnh nhân",
    aliases: ["sua hat hanh nhan", "almond milk"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Sữa thực vật từ hạnh nhân, không đường.",
    nutrients: { energyKcal: 17, proteinG: 0.5, carbG: 0.6, fatG: 1.5, saturatedFatG: 0.1, sugarG: 0.3, fiberG: 0.3, potassiumMg: 55, calciumMg: 120, vitaminEMg: 4 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tra-xanh-nguyen-chat", slug: "tra-xanh-nguyen-chat", name: "Trà xanh (nguyên chất)",
    aliases: ["tra xanh", "green tea"],
    category: "Đồ uống", state: "cooked", basis: "100ml",
    edibleNote: "Trà xanh pha từ lá chè tươi hoặc khô, không đường.",
    nutrients: { energyKcal: 1, proteinG: 0.1, carbG: 0, fatG: 0, caffeineMg: 20, potassiumMg: 8, sodiumMg: 1, vitaminCMg: 0.3, folateUg: 5, catechinsMg: 50 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tra-mat", slug: "tra-mat", name: "Trà mật ong",
    aliases: ["tra mat ong", "honey tea"],
    category: "Đồ uống", state: "cooked", basis: "100ml",
    edibleNote: "Trà xanh pha với mật ong, ấm nóng.",
    nutrients: { energyKcal: 16, proteinG: 0, carbG: 4, fatG: 0, sugarG: 4, caffeineMg: 15, sodiumMg: 1, potassiumMg: 6 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tra-thao-moc", slug: "tra-thao-moc", name: "Trà thảo mộc",
    aliases: ["tra thao moc", "herbal tea"],
    category: "Đồ uống", state: "cooked", basis: "100ml",
    edibleNote: "Trà thảo mộc tổng hợp (hoa cúc, cam thảo, gừng...).",
    nutrients: { energyKcal: 1, proteinG: 0, carbG: 0.2, fatG: 0, sodiumMg: 1, potassiumMg: 5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  
  {
    id: "ca-phe-den-da", slug: "ca-phe-den-da", name: "Cà phê đen đá",
    aliases: ["cà phê đen đá", "ca phe", "cafe", "ca phe den da", "cafe den da", "iced black coffee"],
    category: "Đồ uống", state: "cooked", basis: "100ml",
    edibleNote: "Cà phê phin không đường, không sữa, thêm đá.",
    nutrients: { energyKcal: 2, proteinG: 0.1, carbG: 0.3, fatG: 0, caffeineMg: 80, sodiumMg: 2, potassiumMg: 50 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ruou-nep-than", slug: "ruou-nep-than", name: "Rượu nếp",
    aliases: ["ruou nep", "ruou gao", "rice wine"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Rượu nếp truyền thống Việt Nam, nồng độ ~30%.",
    nutrients: { energyKcal: 200, proteinG: 0.1, carbG: 5, fatG: 0, sugarG: 1, sodiumMg: 1, potassiumMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-khoang-tinh-khiet", slug: "nuoc-khoang-tinh-khiet", name: "Nước khoáng tinh khiết",
    aliases: ["nuoc khoang", "nuoc tinh khiet", "mineral water"],
    category: "Đồ uống", state: "processed", basis: "100ml",
    edibleNote: "Nước khoáng đóng chai, không calo.",
    nutrients: { energyKcal: 0, proteinG: 0, carbG: 0, fatG: 0, sodiumMg: 2, potassiumMg: 1, calciumMg: 3, magnesiumMg: 2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  // ── NHÓM HẠT ──
  {
    id: "hat-dua", slug: "hat-dua", name: "Hạt đu đủ",
    aliases: ["hat du du", "papaya seed"],
    category: "Hạt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hạt đu đủ sấy khô, có vị cay nồng, thường dùng làm gia vị hoặc sấy ăn.",
    nutrients: { energyKcal: 390, proteinG: 25, carbG: 35, fatG: 25, saturatedFatG: 5, fiberG: 18, calciumMg: 150, ironMg: 6, potassiumMg: 600 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-bi-rang", slug: "hat-bi-rang", name: "Hạt bí rang",
    aliases: ["hat bi rang", "roasted pumpkin seeds"],
    category: "Hạt", state: "roasted", basis: "100g",
    edibleNote: "Hạt bí rang muối, ăn vặt.",
    nutrients: { energyKcal: 560, proteinG: 30, carbG: 15, fatG: 46, saturatedFatG: 8, fiberG: 6, sodiumMg: 350, potassiumMg: 800, magnesiumMg: 260, zincMg: 7.5, ironMg: 8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-huong-duong-rang", slug: "hat-huong-duong-rang", name: "Hạt hướng dương rang",
    aliases: ["hat huong duong rang", "sunflower seeds roasted"],
    category: "Hạt", state: "roasted", basis: "100g",
    edibleNote: "Hạt hướng dương rang muối, ăn vặt.",
    nutrients: { energyKcal: 585, proteinG: 19, carbG: 25, fatG: 50, saturatedFatG: 5, fiberG: 8, sodiumMg: 380, potassiumMg: 680, vitaminEMg: 26, magnesiumMg: 130 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-de-rang", slug: "hat-de-rang", name: "Hạt dẻ rang",
    aliases: ["hat de rang", "roasted chestnuts"],
    category: "Hạt", state: "roasted", basis: "100g",
    edibleNote: "Hạt dẻ rang chín, vị ngọt bùi.",
    nutrients: { energyKcal: 245, proteinG: 3.2, carbG: 53, fatG: 2.2, saturatedFatG: 0.4, fiberG: 5, sodiumMg: 2, potassiumMg: 500, vitaminCMg: 26, folateUg: 62 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-ngu-coc", slug: "hat-ngu-coc", name: "Hạt ngũ cốc dinh dưỡng",
    aliases: ["hat ngu coc", "mixed cereal grains"],
    category: "Hạt", state: "processed", basis: "100g",
    edibleNote: "Hỗn hợp các loại hạt ngũ cốc (yến mạch, lúa mì, đậu...) ăn sáng.",
    nutrients: { energyKcal: 360, proteinG: 10, carbG: 72, fatG: 4, saturatedFatG: 1, fiberG: 10, sugarG: 8, sodiumMg: 200, ironMg: 5, calciumMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-chum-ngay", slug: "hat-chum-ngay", name: "Hạt chùm ngây",
    aliases: ["hat chum ngay", "moringa seeds"],
    category: "Hạt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hạt chùm ngây khô, giàu dinh dưỡng, có thể rang ăn hoặc nấu.",
    nutrients: { energyKcal: 420, proteinG: 30, carbG: 28, fatG: 22, saturatedFatG: 5, fiberG: 20, calciumMg: 200, ironMg: 10, potassiumMg: 500, vitaminCMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-dau-xanh-kho", slug: "hat-dau-xanh-kho", name: "Hạt đậu xanh (khô)",
    aliases: ["hat dau xanh kho", "mung bean dry"],
    category: "Hạt", state: "dried", basis: "100g",
    edibleNote: "Đậu xanh nguyên hạt khô, nấu chè, làm bánh.",
    nutrients: { energyKcal: 347, proteinG: 24, carbG: 60, fatG: 1.2, saturatedFatG: 0.3, fiberG: 16, sugarG: 6, calciumMg: 130, ironMg: 6, potassiumMg: 1250, folateUg: 625 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-dau-trang-kho", slug: "hat-dau-trang-kho", name: "Hạt đậu trắng (khô)",
    aliases: ["hat dau trang kho", "white bean dry"],
    category: "Hạt", state: "dried", basis: "100g",
    edibleNote: "Đậu trắng hạt khô, dùng nấu súp, chè.",
    nutrients: { energyKcal: 337, proteinG: 22, carbG: 61, fatG: 1, saturatedFatG: 0.25, fiberG: 15, calciumMg: 140, ironMg: 4, potassiumMg: 1200, folateUg: 350 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  // ── NHÓM ĐẬU ──
  {
    id: "dau-den-hat", slug: "dau-den-hat", name: "Đậu đen (hạt)",
    aliases: ["dau den hat", "black bean"],
    category: "Đậu", state: "dried", basis: "100g",
    edibleNote: "Đậu đen hạt khô, nấu chè, nấu xôi.",
    nutrients: { energyKcal: 341, proteinG: 21, carbG: 62, fatG: 1.4, saturatedFatG: 0.4, fiberG: 15, calciumMg: 140, ironMg: 5.5, potassiumMg: 1500, folateUg: 450 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-xanh-hat", slug: "dau-xanh-hat", name: "Đậu xanh (hạt)",
    aliases: ["dau xanh hat", "mung bean whole"],
    category: "Đậu", state: "dried", basis: "100g",
    edibleNote: "Đậu xanh nguyên hạt khô, nấu chè, làm chả.",
    nutrients: { energyKcal: 347, proteinG: 24, carbG: 60, fatG: 1.2, fiberG: 16, calciumMg: 130, ironMg: 6, potassiumMg: 1250, folateUg: 625, magnesiumMg: 190 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-trang-hat", slug: "dau-trang-hat", name: "Đậu trắng (hạt)",
    aliases: ["dau trang hat", "white bean"],
    category: "Đậu", state: "dried", basis: "100g",
    edibleNote: "Đậu trắng hạt khô, nấu súp, chè.",
    nutrients: { energyKcal: 337, proteinG: 22, carbG: 61, fatG: 1, fiberG: 15, calciumMg: 140, ironMg: 4, potassiumMg: 1200, folateUg: 350 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-do-hat", slug: "dau-do-hat", name: "Đậu đỏ (hạt)",
    aliases: ["dau do hat", "red bean", "azuki bean"],
    category: "Đậu", state: "dried", basis: "100g",
    edibleNote: "Đậu đỏ hạt khô, nấu chè, xôi.",
    nutrients: { energyKcal: 329, proteinG: 20, carbG: 63, fatG: 0.5, fiberG: 12, calciumMg: 66, ironMg: 4, potassiumMg: 1250, folateUg: 300, magnesiumMg: 120 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-do-my", slug: "dau-do-my", name: "Đậu đỏ Mỹ (kidney bean)",
    aliases: ["dau do my", "kidney bean", "dau tau"],
    category: "Đậu", state: "dried", basis: "100g",
    edibleNote: "Đậu đỏ hạt lớn kiểu Mỹ, nấu súp, chile.",
    nutrients: { energyKcal: 337, proteinG: 23, carbG: 60, fatG: 1, fiberG: 15, calciumMg: 90, ironMg: 5, potassiumMg: 1400, folateUg: 400 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tau-hu-sot-tuong", slug: "tau-hu-sot-tuong", name: "Tàu hũ sốt tương",
    aliases: ["tau hu sot tuong", "tofu in soy sauce"],
    category: "Đậu", state: "cooked", basis: "100g",
    edibleNote: "Tàu hũ (đậu phụ) sốt tương, món chay phổ biến.",
    nutrients: { energyKcal: 85, proteinG: 7, carbG: 4, fatG: 4.5, saturatedFatG: 0.7, fiberG: 0.5, sodiumMg: 350, potassiumMg: 120, calciumMg: 100 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tau-hu-dua", slug: "tau-hu-dua", name: "Tàu hũ dừa",
    aliases: ["tau hu dua", "tofu with coconut"],
    category: "Đậu", state: "cooked", basis: "100g",
    edibleNote: "Tàu hũ nấu với nước cốt dừa, béo ngậy.",
    nutrients: { energyKcal: 110, proteinG: 6, carbG: 5, fatG: 7, saturatedFatG: 4, fiberG: 0.5, sodiumMg: 200, potassiumMg: 130, calciumMg: 90 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  // ── NHÓM TRỨNG SỮA ──
  {
    id: "sua-bo-nguyen-chat", slug: "sua-bo-nguyen-chat", name: "Sữa bò nguyên chất",
    aliases: ["sua bo nguyen chat", "whole milk"],
    category: "Trứng sữa", state: "processed", basis: "100ml",
    edibleNote: "Sữa tươi nguyên kem, tiệt trùng.",
    nutrients: { energyKcal: 61, proteinG: 3.2, carbG: 4.8, fatG: 3.3, saturatedFatG: 1.9, sugarG: 4.8, calciumMg: 120, phosphorusMg: 95, potassiumMg: 150, sodiumMg: 45, vitaminAUg: 50, vitaminDUg: 1.2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sua-bo-tach-beo", slug: "sua-bo-tach-beo", name: "Sữa bò tách béo",
    aliases: ["sua bo tach beo", "skim milk"],
    category: "Trứng sữa", state: "processed", basis: "100ml",
    edibleNote: "Sữa tươi tách béo, ít béo hơn sữa nguyên kem.",
    nutrients: { energyKcal: 34, proteinG: 3.4, carbG: 5, fatG: 0.1, saturatedFatG: 0.06, sugarG: 5, calciumMg: 125, phosphorusMg: 100, potassiumMg: 160, sodiumMg: 50, vitaminAUg: 50 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sua-chua-uong", slug: "sua-chua-uong", name: "Sữa chua uống",
    aliases: ["sua chua uong", "drinkable yogurt"],
    category: "Trứng sữa", state: "processed", basis: "100ml",
    edibleNote: "Sữa chua dạng uống, vị trái cây hoặc tự nhiên.",
    nutrients: { energyKcal: 60, proteinG: 2, carbG: 10, fatG: 1.5, saturatedFatG: 1, sugarG: 9, calciumMg: 100, sodiumMg: 40, potassiumMg: 140 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sua-bo-len-men", slug: "sua-bo-len-men", name: "Sữa bò lên men (kefir)",
    aliases: ["sua bo len men", "kefir"],
    category: "Trứng sữa", state: "processed", basis: "100ml",
    edibleNote: "Sữa lên men kefir, giàu men vi sinh.",
    nutrients: { energyKcal: 50, proteinG: 3, carbG: 4, fatG: 2.5, saturatedFatG: 1.5, sugarG: 3.5, calciumMg: 110, sodiumMg: 40, potassiumMg: 150, vitaminAUg: 20, vitaminDUg: 0.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "kem-tuoi", slug: "kem-tuoi", name: "Kem tươi whipping",
    aliases: ["kem tuoi", "whipping cream", "heavy cream"],
    category: "Trứng sữa", state: "processed", basis: "100ml",
    edibleNote: "Kem tươi đánh bông, dùng trang trí bánh.",
    nutrients: { energyKcal: 340, proteinG: 2, carbG: 3, fatG: 36, saturatedFatG: 23, sugarG: 2.5, cholesterolMg: 120, calciumMg: 80, sodiumMg: 40, vitaminAUg: 350 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "kem-chua", slug: "kem-chua", name: "Kem chua (sour cream)",
    aliases: ["kem chua", "sour cream"],
    category: "Trứng sữa", state: "processed", basis: "100g",
    edibleNote: "Kem chua lên men, dùng ăn kèm bánh, salad.",
    nutrients: { energyKcal: 198, proteinG: 2.4, carbG: 4.6, fatG: 19, saturatedFatG: 12, sugarG: 4, cholesterolMg: 60, calciumMg: 110, sodiumMg: 40, potassiumMg: 120, vitaminAUg: 160 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "trung-ga-luoc", slug: "trung-ga-luoc", name: "Trứng gà luộc",
    aliases: ["trung ga luoc", "boiled egg"],
    category: "Trứng sữa", state: "cooked", basis: "1 quả (50g)",
    edibleNote: "Trứng gà luộc chín, cả lòng đỏ và trắng.",
    nutrients: { energyKcal: 78, proteinG: 6.3, carbG: 0.6, fatG: 5.3, saturatedFatG: 1.6, cholesterolMg: 187, sodiumMg: 62, potassiumMg: 63, calciumMg: 25, ironMg: 0.6, vitaminAUg: 270, vitaminDUg: 1.1, cholineMg: 147 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "trung-ga-chien", slug: "trung-ga-chien", name: "Trứng gà chiên",
    aliases: ["trung ga chien", "fried egg"],
    category: "Trứng sữa", state: "cooked", basis: "1 quả (45g)",
    edibleNote: "Trứng gà chiên dầu mỡ, lòng đào hoặc chín.",
    nutrients: { energyKcal: 110, proteinG: 6.5, carbG: 0.6, fatG: 9, saturatedFatG: 2.5, cholesterolMg: 190, sodiumMg: 100, potassiumMg: 65, calciumMg: 25, vitaminAUg: 270, vitaminDUg: 1.1 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "long-den-trung-ga", slug: "long-den-trung-ga", name: "Lòng đỏ trứng gà",
    aliases: ["long do trung ga", "egg yolk"],
    category: "Trứng sữa", state: "raw", basis: "100g",
    edibleNote: "Lòng đỏ trứng gà tách riêng, giàu chất béo và vitamin.",
    nutrients: { energyKcal: 322, proteinG: 16, carbG: 3.6, fatG: 27, saturatedFatG: 9, cholesterolMg: 1085, sodiumMg: 50, potassiumMg: 110, calciumMg: 130, ironMg: 2.7, vitaminAUg: 1400, vitaminDUg: 5.5, cholineMg: 820, folateUg: 150 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "trung-ga-non", slug: "trung-ga-non", name: "Trứng gà non (trứng tơ)",
    aliases: ["trung ga non", "young hen egg"],
    category: "Trứng sữa", state: "raw", basis: "1 quả (~30g)",
    edibleNote: "Trứng gà tơ, nhỏ hơn trứng gà thường, lòng đỏ to.",
    nutrients: { energyKcal: 55, proteinG: 4.5, carbG: 0.4, fatG: 4, cholesterolMg: 130, calciumMg: 18, vitaminAUg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nam-dong-co-kho", slug: "nam-dong-co-kho", name: "Nấm đông cô khô",
    aliases: ["nam dong co kho", "dried shiitake mushroom"],
    category: "Nấm", state: "dried", basis: "100g",
    edibleNote: "Nấm đông cô phơi khô, ngâm nở trước khi nấu.",
    nutrients: { energyKcal: 296, proteinG: 9.6, carbG: 64, fatG: 1, fiberG: 11, sodiumMg: 13, potassiumMg: 1530, calciumMg: 12, ironMg: 2.5, vitaminDUg: 3.3 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nam-meo", slug: "nam-meo", name: "Nấm mèo (mộc nhĩ)",
    aliases: ["nam meo", "moc nho", "wood ear mushroom"],
    category: "Nấm", state: "dried", basis: "100g",
    edibleNote: "Mộc nhĩ khô, ngâm nở dùng xào, nấu canh, làm chả.",
    nutrients: { energyKcal: 285, proteinG: 9.2, carbG: 68, fatG: 0.7, fiberG: 25, calciumMg: 160, ironMg: 5.5, potassiumMg: 755, sodiumMg: 15, phosphorusMg: 100, vitaminMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Dữ liệu tham khảo Bảng VDD Việt Nam."
  },
  {
    id: "nam-rong", slug: "nam-rong", name: "Nấm rơm (tươi)",
    aliases: ["nam rom", "straw mushroom"],
    category: "Nấm", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Nấm rơm tươi, phổ biến trong ẩm thực Việt Nam.",
    nutrients: { energyKcal: 22, proteinG: 2.5, carbG: 3.5, fatG: 0.3, fiberG: 1.5, sodiumMg: 10, potassiumMg: 350, calciumMg: 5, ironMg: 0.8, vitaminCMg: 2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  
  // ── NHÓM THỊT CHẾ BIẾN ──
  {
    id: "gio-lua", slug: "gio-lua", name: "Giò lụa (giò sống)",
    aliases: ["gio lua", "gio song", "Vietnamese pork sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Giò lụa truyền thống, ăn với bánh mì, bún, cơm tấm.",
    nutrients: { energyKcal: 160, proteinG: 14, carbG: 4, fatG: 10, saturatedFatG: 3.5, fiberG: 0, cholesterolMg: 55, sodiumMg: 620, potassiumMg: 140, calciumMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cha-que", slug: "cha-que", name: "Chả quế",
    aliases: ["cha que", "cha que thit lon"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Chả quế miền Bắc, có vị quế nhẹ, ăn bánh mì.",
    nutrients: { energyKcal: 175, proteinG: 13, carbG: 6, fatG: 11, saturatedFatG: 4, sodiumMg: 680, potassiumMg: 130 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "gio-bo", slug: "gio-bo", name: "Giò bò",
    aliases: ["gio bo", "beef sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Giò bò, giò làm từ thịt bò.",
    nutrients: { energyKcal: 170, proteinG: 16, carbG: 4, fatG: 10, saturatedFatG: 4, sodiumMg: 650, potassiumMg: 180 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "gio-thit-dong", slug: "gio-thit-dong", name: "Giò thịt đông",
    aliases: ["gio thit dong", "pork jelly terrine"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Giò thịt đông kiểu Bắc, ăn với giấm tỏi.",
    nutrients: { energyKcal: 150, proteinG: 12, carbG: 5, fatG: 9, saturatedFatG: 3, sodiumMg: 500, potassiumMg: 120 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "lap-xuong-nuong", slug: "lap-xuong-nuong", name: "Lạp xưởng nướng",
    aliases: ["lap xuong nuong", "grilled Chinese sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Lạp xưởng nướng chín, thường ăn với cơm tấm.",
    nutrients: { energyKcal: 320, proteinG: 14, carbG: 15, fatG: 25, saturatedFatG: 9, sugarG: 8, sodiumMg: 850, potassiumMg: 150 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-xong-khoi", slug: "thit-xong-khoi", name: "Thịt hun khói",
    aliases: ["thit xong khoi", "smoked pork"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Thịt heo hun khói, dùng ăn sáng, sandwich.",
    nutrients: { energyKcal: 390, proteinG: 14, carbG: 1, fatG: 37, saturatedFatG: 13, sodiumMg: 1200, potassiumMg: 250 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-bacon", slug: "thit-bacon", name: "Bacon",
    aliases: ["bacon", "thit ba chi hun khoi"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Thịt ba chỉ heo hun khói cắt lát.",
    nutrients: { energyKcal: 541, proteinG: 37, carbG: 1.4, fatG: 42, saturatedFatG: 14, cholesterolMg: 110, sodiumMg: 1500, potassiumMg: 300 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-bacon-chien", slug: "thit-bacon-chien", name: "Bacon chiên",
    aliases: ["bacon chien", "fried bacon"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Bacon chiên giòn.",
    nutrients: { energyKcal: 500, proteinG: 35, carbG: 1.5, fatG: 40, saturatedFatG: 13, cholesterolMg: 110, sodiumMg: 1400, potassiumMg: 280 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "xuc-xich-duc", slug: "xuc-xich-duc", name: "Xúc xích Đức (bratwurst)",
    aliases: ["xuc xich duc", "bratwurst", "German sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Xúc xích heo kiểu Đức, nướng hoặc luộc.",
    nutrients: { energyKcal: 280, proteinG: 15, carbG: 3, fatG: 24, saturatedFatG: 9, cholesterolMg: 70, sodiumMg: 780, potassiumMg: 220 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "xuc-xich-my", slug: "xuc-xich-my", name: "Xúc xích Mỹ (hot dog)",
    aliases: ["xuc xich my", "hot dog", "frankfurter"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Xúc xích heo/bò kiểu Mỹ.",
    nutrients: { energyKcal: 290, proteinG: 12, carbG: 4, fatG: 26, saturatedFatG: 10, sodiumMg: 1100, potassiumMg: 150 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "xuc-xich-bo", slug: "xuc-xich-bo", name: "Xúc xích bò",
    aliases: ["xuc xich bo", "beef sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Xúc xích làm từ thịt bò.",
    nutrients: { energyKcal: 260, proteinG: 16, carbG: 3, fatG: 21, saturatedFatG: 8, cholesterolMg: 65, sodiumMg: 800, potassiumMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "xuc-xich-ga", slug: "xuc-xich-ga", name: "Xúc xích gà",
    aliases: ["xuc xich ga", "chicken sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Xúc xích làm từ thịt gà, ít béo hơn xúc xích heo.",
    nutrients: { energyKcal: 200, proteinG: 18, carbG: 3, fatG: 13, saturatedFatG: 3.5, cholesterolMg: 70, sodiumMg: 750, potassiumMg: 180 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "xuc-xich-heo", slug: "xuc-xich-heo", name: "Xúc xích heo",
    aliases: ["xuc xich heo", "xúc xích lợn", "xuc xich lon", "pork sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Xúc xích làm từ thịt heo.",
    nutrients: { energyKcal: 270, proteinG: 14, carbG: 3, fatG: 23, saturatedFatG: 8, cholesterolMg: 65, sodiumMg: 750, potassiumMg: 170 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "pate-gan", slug: "pate-gan", name: "Patê gan",
    aliases: ["pate gan", "pork liver pate"],
    category: "Thịt chế biến", state: "processed", basis: "100g",
    edibleNote: "Patê gan heo, ăn với bánh mì.",
    nutrients: { energyKcal: 320, proteinG: 12, carbG: 3, fatG: 30, saturatedFatG: 11, cholesterolMg: 250, sodiumMg: 700, potassiumMg: 130, vitaminAUg: 3000, ironMg: 5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "pate-gan-nam", slug: "pate-gan-nam", name: "Patê gan nấm",
    aliases: ["pate gan nam", "mushroom liver pate"],
    category: "Thịt chế biến", state: "processed", basis: "100g",
    edibleNote: "Patê chay từ nấm và hạt điều.",
    nutrients: { energyKcal: 180, proteinG: 5, carbG: 8, fatG: 14, saturatedFatG: 2.5, fiberG: 2, sodiumMg: 400, potassiumMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cha-ga", slug: "cha-ga", name: "Chả gà",
    aliases: ["cha ga", "chicken pate-style sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Chả làm từ thịt gà, hấp hoặc chiên.",
    nutrients: { energyKcal: 160, proteinG: 16, carbG: 4, fatG: 9, saturatedFatG: 2.5, sodiumMg: 600, potassiumMg: 160 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-nguoi-thuong", slug: "thit-nguoi-thuong", name: "Thịt nguội (ham)",
    aliases: ["thit nguoi", "ham", "jambon"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Thịt nguội heo muối, cắt lát ăn bánh mì.",
    nutrients: { energyKcal: 145, proteinG: 18, carbG: 1.5, fatG: 7, saturatedFatG: 2.5, sugarG: 1, sodiumMg: 1100, potassiumMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cha-vit", slug: "cha-vit", name: "Chả vịt",
    aliases: ["cha vit", "duck pate sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Chả vịt, món đặc sản vùng miền.",
    nutrients: { energyKcal: 180, proteinG: 15, carbG: 3, fatG: 12, saturatedFatG: 3.5, sodiumMg: 600, potassiumMg: 170 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  }
];
