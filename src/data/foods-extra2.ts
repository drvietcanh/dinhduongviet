import type { Food } from "./nutrition";

export const extraFoods2: Food[] = [
  // ── TRÁI CÂY NHIỆT ĐỚI ──
  {
    id: "sau-rieng", slug: "sau-rieng", name: "Sầu riêng", aliases: ["durian"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Múi sầu riêng chín.",
    nutrients: { energyKcal: 147, proteinG: 1.5, carbG: 27.1, fatG: 5.3, fiberG: 3.8, calciumMg: 6, ironMg: 0.4, sodiumMg: 2, potassiumMg: 436, vitaminCMg: 20 , glycemicIndex: 60},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "mit", slug: "mit", name: "Mít", aliases: ["jackfruit", "mit"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Múi mít chín.",
    nutrients: { energyKcal: 95, proteinG: 1.7, carbG: 23.3, fatG: 0.6, fiberG: 1.5, calciumMg: 24, ironMg: 0.2, sodiumMg: 2, potassiumMg: 303, vitaminCMg: 14 , glycemicIndex: 60},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "mit-sa", slug: "mit-sa", name: "Mít sấy", aliases: ["dried jackfruit", "mit say"],
    category: "Trái cây", state: "processed", basis: "100g", edibleNote: "Mít sấy khô có đường.",
    nutrients: { energyKcal: 350, proteinG: 3.0, carbG: 82.0, fatG: 1.0, fiberG: 3.5, calciumMg: 30, ironMg: 0.5, sodiumMg: 10, potassiumMg: 500 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thanh-long", slug: "thanh-long", name: "Thanh long", aliases: ["dragon fruit"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Ruột thanh long trắng/đỏ.",
    nutrients: { energyKcal: 60, proteinG: 1.2, carbG: 13.0, fatG: 0.3, fiberG: 3.0, calciumMg: 10, ironMg: 0.4, sodiumMg: 1, potassiumMg: 220, vitaminCMg: 3 , glycemicIndex: 52},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "mang-cut", slug: "mang-cut", name: "Măng cụt", aliases: ["mangosteen"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Múi măng cụt chín.",
    nutrients: { energyKcal: 73, proteinG: 0.4, carbG: 18.0, fatG: 0.6, fiberG: 2.0, calciumMg: 6, ironMg: 0.3, sodiumMg: 1, potassiumMg: 48, vitaminCMg: 12 , glycemicIndex: 55},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "chom-chom", slug: "chom-chom", name: "Chôm chôm", aliases: ["rambutan"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt quả chôm chôm chín.",
    nutrients: { energyKcal: 82, proteinG: 0.6, carbG: 20.9, fatG: 0.2, fiberG: 0.9, calciumMg: 22, ironMg: 0.4, sodiumMg: 11, potassiumMg: 42, vitaminCMg: 30 , glycemicIndex: 60},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "vai", slug: "vai", name: "Vải", aliases: ["lychee", "vai thieu"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Quả vải chín bóc vỏ.",
    nutrients: { energyKcal: 66, proteinG: 0.8, carbG: 16.5, fatG: 0.4, fiberG: 1.3, calciumMg: 5, ironMg: 0.3, sodiumMg: 1, potassiumMg: 171, vitaminCMg: 71 , glycemicIndex: 55},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nhan", slug: "nhan", name: "Nhãn", aliases: ["longan"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Nhãn bóc vỏ bỏ hạt.",
    nutrients: { energyKcal: 60, proteinG: 1.3, carbG: 15.1, fatG: 0.1, fiberG: 1.1, calciumMg: 5, ironMg: 0.3, sodiumMg: 0, potassiumMg: 266, vitaminCMg: 84 , glycemicIndex: 55},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-tay", slug: "dau-tay", name: "Dâu tây", aliases: ["strawberry"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Dâu tây tươi.",
    nutrients: { energyKcal: 32, proteinG: 0.7, carbG: 7.7, fatG: 0.3, fiberG: 2.0, calciumMg: 16, ironMg: 0.4, sodiumMg: 1, potassiumMg: 153, vitaminCMg: 59 , glycemicIndex: 40},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "buoi", slug: "buoi", name: "Bưởi", aliases: ["pomelo", "grapefruit"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Múi bưởi chín.",
    nutrients: { energyKcal: 38, proteinG: 0.8, carbG: 9.6, fatG: 0.1, fiberG: 1.0, calciumMg: 8, ironMg: 0.1, sodiumMg: 1, potassiumMg: 216, vitaminCMg: 61 , glycemicIndex: 25},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "bo-giay", slug: "bo-giay", name: "Bơ sáp", aliases: ["butter avocado", "bo sap"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Bơ sáp chín kiểu Việt Nam.",
    nutrients: { energyKcal: 180, proteinG: 2.0, carbG: 6.0, fatG: 17.0, fiberG: 5.0, calciumMg: 10, ironMg: 0.5, sodiumMg: 5, potassiumMg: 450 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "me", slug: "me", name: "Me", aliases: ["tamarind"],
    category: "Trái cây", state: "processed", basis: "100g phần ăn được", edibleNote: "Thịt me chín, dùng làm gia vị/nước uống.",
    nutrients: { energyKcal: 239, proteinG: 2.8, carbG: 62.5, fatG: 0.6, fiberG: 5.1, calciumMg: 74, ironMg: 2.8, sodiumMg: 28, potassiumMg: 628 , glycemicIndex: 50},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dua", slug: "dua", name: "Dừa", aliases: ["coconut", "cơm dừa"],
    category: "Trái cây", state: "raw", basis: "100g cơm dừa", edibleNote: "Cơm dừa già.",
    nutrients: { energyKcal: 354, proteinG: 3.3, carbG: 15.2, fatG: 33.5, fiberG: 9.0, calciumMg: 14, ironMg: 2.4, sodiumMg: 20, potassiumMg: 356 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-dua", slug: "nuoc-dua", name: "Nước dừa", aliases: ["coconut water"],
    category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Nước dừa tươi.",
    nutrients: { energyKcal: 19, proteinG: 0.2, carbG: 3.7, fatG: 0.2, fiberG: 0, calciumMg: 24, ironMg: 0.3, sodiumMg: 105, potassiumMg: 250, vitaminCMg: 2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "chanh-day", slug: "chanh-day", name: "Chanh dây", aliases: ["passion fruit"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Phần ruột và hạt chanh dây.",
    nutrients: { energyKcal: 97, proteinG: 2.2, carbG: 23.4, fatG: 0.7, fiberG: 10.4, calciumMg: 12, ironMg: 1.6, sodiumMg: 28, potassiumMg: 348, vitaminAUg: 64, vitaminCMg: 30 , glycemicIndex: 30},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "oi-ruot-trang", slug: "oi-ruot-trang", name: "Ổi ruột trắng", aliases: ["guava", "oi ruot trang"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Ổi ruột trắng tươi ăn cả vỏ.",
    nutrients: { energyKcal: 68, proteinG: 2.6, carbG: 14.3, fatG: 1.0, fiberG: 5.4, calciumMg: 18, ironMg: 0.3, sodiumMg: 2, potassiumMg: 417, vitaminCMg: 228 , glycemicIndex: 45},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; rất giàu vitamin C."
  },
  {
    id: "dua-gang", slug: "dua-gang", name: "Đu đủ xanh", aliases: ["green papaya"],
    category: "Rau củ", state: "raw", basis: "100g phần ăn được", edibleNote: "Đu đủ xanh dùng làm gỏi/nộm.",
    nutrients: { energyKcal: 26, proteinG: 0.6, carbG: 6.1, fatG: 0.1, fiberG: 1.7, calciumMg: 24, ironMg: 0.3, sodiumMg: 4, potassiumMg: 210, vitaminCMg: 33 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "khom", slug: "khom", name: "Khóm", aliases: ["dứa", "thơm", "pineapple"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Khóm chín tươi.",
    nutrients: { energyKcal: 50, proteinG: 0.5, carbG: 13.1, fatG: 0.1, fiberG: 1.4, calciumMg: 13, ironMg: 0.3, sodiumMg: 1, potassiumMg: 109, vitaminCMg: 48 , glycemicIndex: 59},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nho", slug: "nho", name: "Nho", aliases: ["grapes"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Nho tươi ăn cả vỏ.",
    nutrients: { energyKcal: 69, proteinG: 0.7, carbG: 18.1, fatG: 0.2, fiberG: 0.9, calciumMg: 10, ironMg: 0.4, sodiumMg: 2, potassiumMg: 191, vitaminCMg: 3 , glycemicIndex: 59},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },

  // ── THỊT GIA CẦM KHÁC ──
  {
    id: "thit-ga-rui", slug: "thit-ga-rui", name: "Thịt gà ri", aliases: ["gà thả vườn", "ga ri"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Gà ri/tàu thả vườn, thịt chắc hơn gà công nghiệp.",
    nutrients: { energyKcal: 140, proteinG: 20.0, carbG: 0, fatG: 6.0, calciumMg: 12, ironMg: 1.2, sodiumMg: 70, potassiumMg: 230 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-cam", slug: "thit-cam", name: "Thịt cầm", aliases: ["thịt chim bồ câu", "pigeon"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt chim bồ câu non phần ăn được.",
    nutrients: { energyKcal: 142, proteinG: 21.8, carbG: 0, fatG: 5.5, ironMg: 3.8, zincMg: 2.2, sodiumMg: 70, potassiumMg: 250 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-cut", slug: "thit-cut", name: "Thịt cút", aliases: ["thịt chim cút", "quail"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt chim cút phần ăn được.",
    nutrients: { energyKcal: 134, proteinG: 21.0, carbG: 0, fatG: 5.0, ironMg: 2.5, sodiumMg: 60, potassiumMg: 220 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-ngua", slug: "thit-ngua", name: "Thịt ngựa", aliases: ["horse meat"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt ngựa nạc.",
    nutrients: { energyKcal: 133, proteinG: 21.0, carbG: 0, fatG: 4.8, ironMg: 3.8, sodiumMg: 58, potassiumMg: 340 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-ech", slug: "thit-ech", name: "Thịt ếch", aliases: ["frog meat", "thit ech"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Đùi ếch đồng.",
    nutrients: { energyKcal: 73, proteinG: 16.0, carbG: 0, fatG: 0.3, calciumMg: 18, ironMg: 1.5, sodiumMg: 58, potassiumMg: 285 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },

  // ── HẢI SẢN ──
  {
    id: "ca-loc", slug: "ca-loc", name: "Cá lóc", aliases: ["cá quả", "snakehead", "ca loc"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt cá lóc tươi.",
    nutrients: { energyKcal: 82, proteinG: 17.5, carbG: 0, fatG: 1.3, calciumMg: 30, ironMg: 0.5, sodiumMg: 55, potassiumMg: 315 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ca-chep", slug: "ca-chep", name: "Cá chép", aliases: ["carp", "ca chep"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt cá chép tươi.",
    nutrients: { energyKcal: 127, proteinG: 17.8, carbG: 0, fatG: 5.6, calciumMg: 41, ironMg: 1.0, zincMg: 1.5, sodiumMg: 46, potassiumMg: 333 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ca-ngu", slug: "ca-ngu", name: "Cá ngừ", aliases: ["tuna", "ca ngu"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Cá ngừ tươi.",
    nutrients: { energyKcal: 144, proteinG: 23.3, carbG: 0, fatG: 4.9, calciumMg: 8, ironMg: 1.0, sodiumMg: 39, potassiumMg: 252 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ca-moi", slug: "ca-moi", name: "Cá mòi", aliases: ["sardine", "ca moi"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Cá mòi tươi.",
    nutrients: { energyKcal: 208, proteinG: 24.6, carbG: 0, fatG: 11.5, calciumMg: 38, ironMg: 2.9, sodiumMg: 307, potassiumMg: 397, vitaminDMcg: 4.8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ca-hoi", slug: "ca-hoi", name: "Cá hồi", aliases: ["salmon", "ca hoi"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Phi lê cá hồi tươi.",
    nutrients: { energyKcal: 208, proteinG: 20.4, carbG: 0, fatG: 13.4, calciumMg: 12, ironMg: 0.8, sodiumMg: 59, potassiumMg: 363, vitaminDMcg: 11 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ca-keo", slug: "ca-keo", name: "Cá kèo", aliases: ["goby", "ca keo"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Cá kèo tươi (đặc sản miền Tây).",
    nutrients: { energyKcal: 100, proteinG: 18.0, carbG: 0, fatG: 3.0, calciumMg: 300, ironMg: 2.0, sodiumMg: 60, potassiumMg: 280 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tom-su", slug: "tom-su", name: "Tôm sú", aliases: ["tôm sắt", "tôm biển", "prawn", "tom su", "tom-sudo"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Tôm sú bóc vỏ.",
    nutrients: { energyKcal: 105, proteinG: 20.9, carbG: 0.3, fatG: 1.7, calciumMg: 60, ironMg: 0.5, zincMg: 1.3, sodiumMg: 160, potassiumMg: 250 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cua-bien", slug: "cua-bien", name: "Cua biển", aliases: ["sea crab"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt cua biển hấp phần ăn được.",
    nutrients: { energyKcal: 87, proteinG: 18.1, carbG: 0, fatG: 1.2, calciumMg: 40, ironMg: 0.8, zincMg: 3.1, sodiumMg: 293, potassiumMg: 181 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "ngheu", slug: "ngheu", name: "Nghêu", aliases: ["clams", "ngheu"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt nghêu tươi.",
    nutrients: { energyKcal: 74, proteinG: 12.8, carbG: 2.6, fatG: 0.9, calciumMg: 31, ironMg: 4.0, sodiumMg: 92, potassiumMg: 314 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "so-huyet", slug: "so-huyet", name: "Sò huyết", aliases: ["blood cockle"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt sò huyết tươi.",
    nutrients: { energyKcal: 79, proteinG: 10.9, carbG: 4.6, fatG: 1.2, ironMg: 15.0, calciumMg: 35, sodiumMg: 450, potassiumMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "oc-buou", slug: "oc-buou", name: "Ốc bươu", aliases: ["snail", "oc buou"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt ốc bươu/tháo bỏ vỏ.",
    nutrients: { energyKcal: 90, proteinG: 16.0, carbG: 2.0, fatG: 1.4, ironMg: 3.5, calciumMg: 100, sodiumMg: 70, potassiumMg: 250 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "oc-huong", slug: "oc-huong", name: "Ốc hương", aliases: ["spiral shell"],
    category: "Thủy sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt ốc hương.",
    nutrients: { energyKcal: 125, proteinG: 20.0, carbG: 3.0, fatG: 3.5, calciumMg: 120, ironMg: 5.0, sodiumMg: 120, potassiumMg: 300 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },

  // ── ĐẬU HẠT ──
  {
    id: "dau-nanh", slug: "dau-nanh", name: "Đậu nành", aliases: ["soybean", "đỗ tương"],
    category: "Hạt và đậu", state: "raw", basis: "100g hạt khô", edibleNote: "Đậu nành hạt khô.",
    nutrients: { energyKcal: 446, proteinG: 36.5, carbG: 30.2, fatG: 19.9, fiberG: 9.3, calciumMg: 277, ironMg: 15.7, sodiumMg: 2, potassiumMg: 1797 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-den", slug: "dau-den", name: "Đậu đen", aliases: ["black bean", "dau den"],
    category: "Hạt và đậu", state: "raw", basis: "100g hạt khô", edibleNote: "Đậu đen hạt khô.",
    nutrients: { energyKcal: 341, proteinG: 21.6, carbG: 62.4, fatG: 1.4, fiberG: 15.2, calciumMg: 123, ironMg: 5.0, sodiumMg: 10, potassiumMg: 1280 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-do", slug: "dau-do", name: "Đậu đỏ", aliases: ["red bean", "dau do"],
    category: "Hạt và đậu", state: "raw", basis: "100g hạt khô", edibleNote: "Đậu đỏ hạt khô.",
    nutrients: { energyKcal: 337, proteinG: 21.0, carbG: 62.0, fatG: 1.2, fiberG: 16.0, calciumMg: 110, ironMg: 5.0, sodiumMg: 8, potassiumMg: 1200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "me-vung", slug: "me-vung", name: "Mè/vừng", aliases: ["vừng", "sesame", "me"],
    category: "Hạt và đậu", state: "raw", basis: "100g hạt khô", edibleNote: "Mè/vừng trắng rang.",
    nutrients: { energyKcal: 573, proteinG: 17.7, carbG: 23.5, fatG: 49.7, fiberG: 11.8, calciumMg: 975, ironMg: 14.6, sodiumMg: 11, potassiumMg: 468 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-bi", slug: "hat-bi", name: "Hạt bí", aliases: ["pumpkin seeds"],
    category: "Hạt và đậu", state: "processed", basis: "100g", edibleNote: "Hạt bí rang khô.",
    nutrients: { energyKcal: 559, proteinG: 30.2, carbG: 10.7, fatG: 49.1, fiberG: 6.0, calciumMg: 46, ironMg: 8.8, zincMg: 7.6, sodiumMg: 7, potassiumMg: 806 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "hat-huong-duong", slug: "hat-huong-duong", name: "Hạt hướng dương", aliases: ["sunflower seeds"],
    category: "Hạt và đậu", state: "processed", basis: "100g", edibleNote: "Hạt hướng dương rang.",
    nutrients: { energyKcal: 584, proteinG: 20.8, carbG: 20.0, fatG: 51.5, fiberG: 8.6, calciumMg: 78, ironMg: 5.3, zincMg: 5.0, sodiumMg: 9, potassiumMg: 850, vitaminEMg: 35 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-ha-lan", slug: "dau-ha-lan", name: "Đậu Hà Lan", aliases: ["green pea", "dau ha lan"],
    category: "Hạt và đậu", state: "raw", basis: "100g hạt khô", edibleNote: "Đậu Hà Lan hạt khô.",
    nutrients: { energyKcal: 352, proteinG: 24.6, carbG: 60.4, fatG: 1.4, fiberG: 15.5, calciumMg: 55, ironMg: 4.3, sodiumMg: 15, potassiumMg: 875 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "dau-phap", slug: "dau-phap", name: "Đậu phộng", aliases: ["lạc", "peanut", "dau phong"],
    category: "Hạt và đậu", state: "raw", basis: "100g lạc tươi", edibleNote: "Lạc/đậu phộng tươi (không rang).",
    nutrients: { energyKcal: 567, proteinG: 25.8, carbG: 16.1, fatG: 49.2, fiberG: 8.5, calciumMg: 92, ironMg: 4.6, sodiumMg: 18, potassiumMg: 705 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
];

