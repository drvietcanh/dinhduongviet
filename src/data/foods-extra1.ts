import type { Food, Recipe } from "./nutrition";

// ── RAU CỦ QUẢ (Vegetables) ──
export const extraFoods1: Food[] = [
  {
    id: "rau-dan", slug: "rau-dan", name: "Rau dền", aliases: ["amaranth", "rau den"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Rau dền tươi.",
    nutrients: { energyKcal: 23, proteinG: 2.5, carbG: 4.0, fatG: 0.3, fiberG: 2.5, calciumMg: 215, ironMg: 2.3, sodiumMg: 22, potassiumMg: 340, vitaminAUg: 585, vitaminCMg: 43 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "rau-ma", slug: "rau-ma", name: "Rau má", aliases: ["gotu kola", "rau ma"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Rau má tươi.",
    nutrients: { energyKcal: 21, proteinG: 2.0, carbG: 3.6, fatG: 0.3, fiberG: 2.0, calciumMg: 95, ironMg: 3.1, sodiumMg: 15, potassiumMg: 275, vitaminAUg: 400, vitaminCMg: 48 , glycemicIndex: 20},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "rau-day", slug: "rau-day", name: "Rau đay", aliases: ["jute mallow", "rau day"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Rau đay tươi.",
    nutrients: { energyKcal: 26, proteinG: 2.8, carbG: 4.2, fatG: 0.4, fiberG: 2.5, calciumMg: 150, ironMg: 2.0, sodiumMg: 18, potassiumMg: 310, vitaminAUg: 450, vitaminCMg: 35 , glycemicIndex: 20},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "muop-huong", slug: "muop-huong", name: "Mướp hương", aliases: ["luffa", "muop huong"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Mướp hương tươi.",
    nutrients: { energyKcal: 18, proteinG: 0.9, carbG: 3.9, fatG: 0.2, fiberG: 1.0, calciumMg: 20, ironMg: 0.4, sodiumMg: 3, potassiumMg: 155, vitaminCMg: 8 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "bi-xanh", slug: "bi-xanh", name: "Bí xanh", aliases: ["zucchini", "bi xanh"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Bí xanh tươi.",
    nutrients: { energyKcal: 17, proteinG: 1.2, carbG: 3.1, fatG: 0.2, fiberG: 1.1, calciumMg: 16, ironMg: 0.4, sodiumMg: 2, potassiumMg: 260, vitaminCMg: 17 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-que", slug: "dau-que", name: "Đậu que", aliases: ["đậu cô ve", "green beans", "dau que"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Đậu que tươi.",
    nutrients: { energyKcal: 31, proteinG: 1.8, carbG: 7.0, fatG: 0.2, fiberG: 2.7, calciumMg: 37, ironMg: 1.0, sodiumMg: 6, potassiumMg: 211, vitaminCMg: 16 , glycemicIndex: 25},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-bap", slug: "dau-bap", name: "Đậu bắp", aliases: ["okra", "dau bap"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Đậu bắp tươi.",
    nutrients: { energyKcal: 33, proteinG: 1.9, carbG: 7.0, fatG: 0.2, fiberG: 3.2, calciumMg: 82, ironMg: 0.6, sodiumMg: 7, potassiumMg: 299, vitaminCMg: 23 , glycemicIndex: 20},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dua-cai", slug: "dua-cai", name: "Dưa cải muối", aliases: ["kim chi Việt", "dua cai"],
    category: "Rau củ", state: "processed", basis: "100g", edibleNote: "Cải bẹ muối chua.",
    nutrients: { energyKcal: 15, proteinG: 1.1, carbG: 2.7, fatG: 0.2, fiberG: 1.5, sodiumMg: 1200, potassiumMg: 200, ironMg: 0.5 , glycemicIndex: 10},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; natri rất cao."
  },
  {
    id: "sup-lo", slug: "sup-lo", name: "Súp lơ xanh", aliases: ["broccoli", "bông cải xanh", "sup lo xanh"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Súp lơ xanh tươi.",
    nutrients: { energyKcal: 34, proteinG: 2.8, carbG: 7.0, fatG: 0.4, fiberG: 2.6, calciumMg: 47, ironMg: 0.7, sodiumMg: 33, potassiumMg: 316, vitaminCMg: 89 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sup-lo-trang", slug: "sup-lo-trang", name: "Súp lơ trắng", aliases: ["cauliflower", "bông cải trắng"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Súp lơ trắng tươi.",
    nutrients: { energyKcal: 25, proteinG: 1.9, carbG: 5.0, fatG: 0.3, fiberG: 2.0, calciumMg: 22, ironMg: 0.4, sodiumMg: 30, potassiumMg: 299, vitaminCMg: 48 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hanh-la", slug: "hanh-la", name: "Hành lá", aliases: ["spring onion", "scallion", "hanh la"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Hành lá tươi.",
    nutrients: { energyKcal: 32, proteinG: 1.8, carbG: 7.3, fatG: 0.2, fiberG: 2.6, calciumMg: 72, ironMg: 1.5, sodiumMg: 16, potassiumMg: 276, vitaminAUg: 333, vitaminCMg: 19 , glycemicIndex: 10},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "rau-thom-tia-to", slug: "rau-thom-tia-to", name: "Tía tô", aliases: ["perilla", "tia to"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Lá tía tô tươi.",
    nutrients: { energyKcal: 35, proteinG: 2.8, carbG: 5.0, fatG: 0.5, fiberG: 2.5, calciumMg: 185, ironMg: 2.5, sodiumMg: 2, potassiumMg: 280, vitaminAUg: 350, vitaminCMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "rau-thom-kinh-gioi", slug: "rau-thom-kinh-gioi", name: "Kinh giới", aliases: ["Vietnamese balm", "kinh gioi"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Rau kinh giới tươi.",
    nutrients: { energyKcal: 30, proteinG: 2.4, carbG: 4.5, fatG: 0.4, fiberG: 2.2, calciumMg: 140, ironMg: 2.0, sodiumMg: 3, potassiumMg: 260, vitaminAUg: 200, vitaminCMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ngo-que", slug: "ngo-que", name: "Ngò gai", aliases: ["ngò tàu", "culantro", "ngo gai"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Ngò gai tươi.",
    nutrients: { energyKcal: 25, proteinG: 2.0, carbG: 4.0, fatG: 0.3, fiberG: 1.8, calciumMg: 100, ironMg: 1.8, sodiumMg: 5, potassiumMg: 240, vitaminAUg: 300, vitaminCMg: 25 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ngo-om", slug: "ngo-om", name: "Ngò ôm", aliases: ["rau ôm", "rice paddy herb", "ngo om"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Ngò ôm tươi.",
    nutrients: { energyKcal: 22, proteinG: 1.8, carbG: 3.8, fatG: 0.3, fiberG: 1.5, calciumMg: 85, ironMg: 1.5, sodiumMg: 3, potassiumMg: 200, vitaminCMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nam-kim-cham", slug: "nam-kim-cham", name: "Nấm kim châm", aliases: ["enoki mushroom", "nam kim cham"],
    category: "Nấm", state: "raw", basis: "100g phần ăn được", edibleNote: "Nấm kim châm tươi.",
    nutrients: { energyKcal: 37, proteinG: 2.7, carbG: 8.0, fatG: 0.3, fiberG: 2.7, calciumMg: 0, ironMg: 0.4, sodiumMg: 3, potassiumMg: 359 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nam-dong-co", slug: "nam-dong-co", name: "Nấm đông cô tươi", aliases: ["shiitake fresh", "nam dong co"],
    category: "Nấm", state: "raw", basis: "100g phần ăn được", edibleNote: "Nấm đông cô tươi.",
    nutrients: { energyKcal: 34, proteinG: 2.2, carbG: 6.8, fatG: 0.5, fiberG: 2.5, calciumMg: 2, ironMg: 0.4, sodiumMg: 9, potassiumMg: 304 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nam-bach-trang", slug: "nam-bach-trang", name: "Nấm bạch tuyết", aliases: ["white mushroom", "nam bach tuyen"],
    category: "Nấm", state: "raw", basis: "100g phần ăn được", edibleNote: "Nấm bạch tuyết tươi.",
    nutrients: { energyKcal: 22, proteinG: 3.1, carbG: 3.3, fatG: 0.3, fiberG: 1.0, calciumMg: 3, ironMg: 0.5, sodiumMg: 5, potassiumMg: 318 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "mang-tay", slug: "mang-tay", name: "Măng tây", aliases: ["asparagus", "mang tay"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Măng tây tươi.",
    nutrients: { energyKcal: 20, proteinG: 2.2, carbG: 3.9, fatG: 0.1, fiberG: 2.1, calciumMg: 24, ironMg: 2.1, sodiumMg: 2, potassiumMg: 202, vitaminCMg: 12 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "man-chua", slug: "man-chua", name: "Măng chua", aliases: ["sour bamboo shoot", "mang chua"],
    category: "Rau củ", state: "processed", basis: "100g", edibleNote: "Măng tre muối chua.",
    nutrients: { energyKcal: 27, proteinG: 2.0, carbG: 5.0, fatG: 0.3, fiberG: 1.8, sodiumMg: 600, potassiumMg: 320 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ngu-sac", slug: "ngu-sac", name: "Ngũ sắc", aliases: ["ngô nếp", "sweet corn", "ngo nep"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được", edibleNote: "Ngô nếp tươi, hạt ăn được.",
    nutrients: { energyKcal: 112, proteinG: 3.4, carbG: 22.5, fatG: 1.2, fiberG: 2.8, calciumMg: 3, ironMg: 0.6, sodiumMg: 15, potassiumMg: 287, vitaminAUg: 10, vitaminCMg: 8 , glycemicIndex: 52},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "khoai-mi", slug: "khoai-mi", name: "Khoai mì", aliases: ["sắn", "cassava", "khoai mi"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được", edibleNote: "Khoai mì tươi bỏ vỏ.",
    nutrients: { energyKcal: 160, proteinG: 1.4, carbG: 38.1, fatG: 0.3, fiberG: 1.8, calciumMg: 16, ironMg: 0.3, sodiumMg: 14, potassiumMg: 271, vitaminCMg: 20 , glycemicIndex: 55},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "khoai-mon", slug: "khoai-mon", name: "Khoai môn", aliases: ["taro", "khoai mon"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được", edibleNote: "Khoai môn tươi.",
    nutrients: { energyKcal: 112, proteinG: 1.5, carbG: 26.5, fatG: 0.2, fiberG: 4.1, calciumMg: 18, ironMg: 0.6, sodiumMg: 12, potassiumMg: 591, vitaminCMg: 5 , glycemicIndex: 55},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "khoai-tu", slug: "khoai-tu", name: "Khoai từ", aliases: ["yam", "khoai tu"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được", edibleNote: "Củ từ tươi.",
    nutrients: { energyKcal: 118, proteinG: 1.5, carbG: 28.0, fatG: 0.2, fiberG: 4.0, calciumMg: 17, ironMg: 0.5, sodiumMg: 9, potassiumMg: 450 , glycemicIndex: 55},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-sen-tuoi", slug: "hat-sen-tuoi", name: "Hạt sen tươi", aliases: ["lotus seeds", "hat sen tuoi"],
    category: "Hạt và đậu", state: "raw", basis: "100g phần ăn được", edibleNote: "Hạt sen tươi bỏ tâm.",
    nutrients: { energyKcal: 89, proteinG: 4.1, carbG: 17.3, fatG: 0.5, fiberG: 2.5, calciumMg: 26, ironMg: 1.6, sodiumMg: 8, potassiumMg: 367, vitaminCMg: 2 , glycemicIndex: 35},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-sen-kho", slug: "hat-sen-kho", name: "Hạt sen khô", aliases: ["dried lotus seeds", "hat sen kho"],
    category: "Hạt và đậu", state: "raw", basis: "100g khô", edibleNote: "Hạt sen khô, trước khi nấu.",
    nutrients: { energyKcal: 350, proteinG: 17.0, carbG: 63.7, fatG: 1.9, fiberG: 8.5, calciumMg: 100, ironMg: 5.0, sodiumMg: 6, potassiumMg: 1150 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "com-gao-lut", slug: "com-gao-lut", name: "Cơm gạo lứt", aliases: ["brown rice", "gao lut", "gạo lật", "com gao lut", "com gao lat"],
    category: "Tinh bột", state: "cooked", basis: "100g", edibleNote: "Gạo lứt đã nấu chín.",
    nutrients: { energyKcal: 111, proteinG: 2.6, carbG: 23.0, fatG: 0.9, fiberG: 1.8, calciumMg: 10, ironMg: 0.6, sodiumMg: 4, potassiumMg: 77 , glycemicIndex: 50},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "bap-cai-thao", slug: "bap-cai-thao", name: "Bắp cải thảo", aliases: ["napa cabbage", "cải thảo", "bap cai thao"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Bắp cải thảo tươi.",
    nutrients: { energyKcal: 12, proteinG: 1.1, carbG: 2.2, fatG: 0.2, fiberG: 1.0, calciumMg: 43, ironMg: 0.4, sodiumMg: 11, potassiumMg: 175, vitaminCMg: 24 , glycemicIndex: 10},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cai-bong", slug: "cai-bong", name: "Cải bẹ xanh", aliases: ["mustard greens", "cai be xanh"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Cải bẹ xanh tươi.",
    nutrients: { energyKcal: 28, proteinG: 2.9, carbG: 4.5, fatG: 0.3, fiberG: 2.0, calciumMg: 130, ironMg: 1.5, sodiumMg: 20, potassiumMg: 350, vitaminCMg: 60 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cu-den", slug: "cu-den", name: "Củ dền", aliases: ["beetroot", "cu den"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Củ dền tươi.",
    nutrients: { energyKcal: 43, proteinG: 1.6, carbG: 9.6, fatG: 0.2, fiberG: 2.8, calciumMg: 16, ironMg: 0.8, sodiumMg: 78, potassiumMg: 325, vitaminCMg: 5 , glycemicIndex: 64},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cu-cai-trang", slug: "cu-cai-trang", name: "Củ cải trắng", aliases: ["white radish", "daikon", "cu cai trang"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Củ cải trắng tươi.",
    nutrients: { energyKcal: 18, proteinG: 0.6, carbG: 4.1, fatG: 0.1, fiberG: 1.6, calciumMg: 27, ironMg: 0.3, sodiumMg: 21, potassiumMg: 233, vitaminCMg: 14 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ca-tim", slug: "ca-tim", name: "Cà tím", aliases: ["eggplant", "aubergine", "ca tim"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Cà tím tươi.",
    nutrients: { energyKcal: 25, proteinG: 1.0, carbG: 5.9, fatG: 0.2, fiberG: 3.0, calciumMg: 9, ironMg: 0.2, sodiumMg: 2, potassiumMg: 229 , glycemicIndex: 20},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ot-chuong", slug: "ot-chuong", name: "Ớt chuông", aliases: ["bell pepper", "ot chuong"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Ớt chuông xanh/đỏ tươi.",
    nutrients: { energyKcal: 26, proteinG: 1.0, carbG: 6.0, fatG: 0.3, fiberG: 2.1, calciumMg: 7, ironMg: 0.4, sodiumMg: 2, potassiumMg: 175, vitaminCMg: 128 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ngo-tay", slug: "ngo-tay", name: "Ngò tây", aliases: ["parsley", "ngo tay"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Ngò tây/rau mùi tây tươi.",
    nutrients: { energyKcal: 36, proteinG: 3.0, carbG: 6.3, fatG: 0.8, fiberG: 3.3, calciumMg: 138, ironMg: 6.2, sodiumMg: 56, potassiumMg: 554, vitaminAUg: 421, vitaminCMg: 133 , glycemicIndex: 10},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "rau-diep-ca", slug: "rau-diep-ca", name: "Rau diếp cá", aliases: ["fish mint", "rau diep ca"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được", edibleNote: "Rau diếp cá tươi.",
    nutrients: { energyKcal: 20, proteinG: 2.0, carbG: 3.0, fatG: 0.4, fiberG: 1.5, calciumMg: 120, ironMg: 2.0, sodiumMg: 5, potassiumMg: 200, vitaminCMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
];

