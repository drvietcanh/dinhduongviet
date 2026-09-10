import type { Food } from "./nutrition";

export const extraFoods6: Food[] = [
  // ── CÁ ──
  {
    id: "ca-lang", slug: "ca-lang", name: "Cá lăng",
    aliases: ["ca lang"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá lăng tươi, nấu lẩu hoặc kho.",
    nutrients: { energyKcal: 130, proteinG: 19, carbG: 0, fatG: 5.5, saturatedFatG: 1.2, cholesterolMg: 65, sodiumMg: 58, potassiumMg: 310, phosphorusMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-that-lat", slug: "ca-that-lat", name: "Cá thát lát",
    aliases: ["ca that lat", "ca sa bo"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá thát lát tươi, dùng làm chả cá, bánh canh.",
    nutrients: { energyKcal: 105, proteinG: 18, carbG: 0, fatG: 3.5, sodiumMg: 50, potassiumMg: 290, phosphorusMg: 180, calciumMg: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-leo", slug: "ca-leo", name: "Cá leo",
    aliases: ["ca leo", "cá dê"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá leo tươi miền Tây, nấu lẩu hoặc nướng.",
    nutrients: { energyKcal: 140, proteinG: 18, carbG: 0, fatG: 7, saturatedFatG: 1.5, cholesterolMg: 60, sodiumMg: 55, potassiumMg: 300, phosphorusMg: 190 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-bong-tuong", slug: "ca-bong-tuong", name: "Cá bống tượng",
    aliases: ["ca bong tuong", "ca tai tuong"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá bống tượng lớn, nướng hoặc kho tộ.",
    nutrients: { energyKcal: 115, proteinG: 19, carbG: 0, fatG: 4, calciumMg: 60, sodiumMg: 65, potassiumMg: 310, phosphorusMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-nien", slug: "ca-nien", name: "Cá niên",
    aliases: ["ca chinh vang", "ca nien"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá niên suối, rán/kho phổ biến miền Bắc.",
    nutrients: { energyKcal: 108, proteinG: 18, carbG: 0, fatG: 3.8, sodiumMg: 50, potassiumMg: 280, phosphorusMg: 190, calciumMg: 40 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-ho", slug: "ca-ho", name: "Cá hô",
    aliases: ["ca ho"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá hô lớn nước ngọt miền Tây, nấu lẩu/kho.",
    nutrients: { energyKcal: 125, proteinG: 19, carbG: 0, fatG: 5, saturatedFatG: 1.2, cholesterolMg: 60, sodiumMg: 55, potassiumMg: 320, phosphorusMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── HẢI SẢN ──
  {
    id: "be-be", slug: "be-be", name: "Bề bề",
    aliases: ["tom huyet", "mantis shrimp", "be be"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Bề bề (tôm tích) tươi, luộc/nướng.",
    nutrients: { energyKcal: 95, proteinG: 17, carbG: 0, fatG: 2.5, cholesterolMg: 130, calciumMg: 80, sodiumMg: 180, potassiumMg: 200, phosphorusMg: 190 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "oc-nhoi", slug: "oc-nhoi", name: "Ốc nhồi",
    aliases: ["oc buou nuoc ngot", "oc nhoi"],
    category: "Hải sản", state: "raw", basis: "100g thịt ốc",
    edibleNote: "Ốc nhồi nước ngọt, xào dừa hoặc luộc.",
    nutrients: { energyKcal: 80, proteinG: 14, carbG: 2, fatG: 1.5, calciumMg: 250, ironMg: 4.5, sodiumMg: 85, potassiumMg: 160, phosphorusMg: 120 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "so-lo", slug: "so-lo", name: "Sò lông nhỏ",
    aliases: ["so lo"],
    category: "Hải sản", state: "raw", basis: "100g thịt sò",
    edibleNote: "Sò lông tươi, hấp hoặc nướng mỡ hành.",
    nutrients: { energyKcal: 75, proteinG: 12, carbG: 2, fatG: 1.5, cholesterolMg: 35, calciumMg: 60, ironMg: 8, sodiumMg: 180, potassiumMg: 210, zincMg: 1.8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "gach-cua", slug: "gach-cua", name: "Gạch cua",
    aliases: ["gach cua dong", "gach cua bien"],
    category: "Hải sản", state: "processed", basis: "100g",
    edibleNote: "Gạch cua đồng/cua biển, nhiều chất béo.",
    nutrients: { energyKcal: 320, proteinG: 12, carbG: 1, fatG: 28, saturatedFatG: 8, cholesterolMg: 350, calciumMg: 80, ironMg: 2.5, sodiumMg: 300, potassiumMg: 140 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; cholesterol rất cao."
  },
  // ── RAU CỦ ──
  {
    id: "su-hao", slug: "su-hao", name: "Su hào",
    aliases: ["kohlrabi", "su hao"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Su hào củ tươi, luộc hoặc xào.",
    nutrients: { energyKcal: 27, proteinG: 1.7, carbG: 6.2, fatG: 0.1, fiberG: 3.6, calciumMg: 24, ironMg: 0.4, sodiumMg: 20, potassiumMg: 350, vitaminCMg: 62, glycemicIndex: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "mang-bo", slug: "mang-bo", name: "Măng bò",
    aliases: ["mang cay leo", "mang bo"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Măng bò (đọt mây) luộc, xào, phổ biến miền Bắc.",
    nutrients: { energyKcal: 15, proteinG: 1.5, carbG: 2.5, fatG: 0.1, fiberG: 1.8, calciumMg: 12, ironMg: 0.4, sodiumMg: 4, potassiumMg: 120, vitaminCMg: 8, glycemicIndex: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "bong-cai-xanh", slug: "bong-cai-xanh", name: "Bông cải xanh",
    aliases: ["súp lơ xanh", "broccoli", "bong cai xanh"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Bông cải xanh tươi.",
    nutrients: { energyKcal: 34, proteinG: 2.8, carbG: 7, fatG: 0.4, fiberG: 2.6, calciumMg: 47, ironMg: 0.7, sodiumMg: 33, potassiumMg: 316, vitaminCMg: 89, vitaminAUg: 623, glycemicIndex: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ngo-sen-tuoi", slug: "ngo-sen-tuoi", name: "Ngó sen tươi",
    aliases: ["ngo sen"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Ngó sen tươi, thường làm gỏi.",
    nutrients: { energyKcal: 20, proteinG: 1.5, carbG: 4.2, fatG: 0.1, fiberG: 2.0, calciumMg: 16, ironMg: 0.5, sodiumMg: 6, potassiumMg: 150, vitaminCMg: 15, glycemicIndex: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "trang-tu-bap", slug: "trang-tu-bap", name: "Trái bắp non baby",
    aliases: ["bap non", "baby corn"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Bắp non luộc/xào.",
    nutrients: { energyKcal: 28, proteinG: 2.0, carbG: 5.0, fatG: 0.3, fiberG: 1.7, calciumMg: 3, ironMg: 0.3, sodiumMg: 5, potassiumMg: 140, vitaminCMg: 6, glycemicIndex: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── THỊT ──
  {
    id: "thit-heo-bam", slug: "thit-heo-bam", name: "Thịt heo băm",
    aliases: ["thit heo xay", "thịt lợn băm", "thit lon bam", "thit heo bam", "pork mince"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt heo băm/xay, nạc mỡ 70/30.",
    nutrients: { energyKcal: 250, proteinG: 16, carbG: 0, fatG: 20, saturatedFatG: 7, cholesterolMg: 70, sodiumMg: 60, potassiumMg: 200, zincMg: 2.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thit-bo-luc-lac", slug: "thit-bo-luc-lac", name: "Thịt bò lúc lắc",
    aliases: ["bo luc lac", "bo la lot"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt bò thái hạt lựu dùng xào lúc lắc.",
    nutrients: { energyKcal: 198, proteinG: 20, carbG: 1, fatG: 12, saturatedFatG: 5, cholesterolMg: 65, sodiumMg: 60, potassiumMg: 300, ironMg: 2.5, zincMg: 4 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thit-vit-xiem", slug: "thit-vit-xiem", name: "Thịt vịt xiêm",
    aliases: ["vit xiem", "vit bau", "duck"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt vịt xiêm/vịt bầu kho gừng.",
    nutrients: { energyKcal: 200, proteinG: 16, carbG: 0, fatG: 15, saturatedFatG: 5, cholesterolMg: 75, sodiumMg: 60, potassiumMg: 220, ironMg: 2.5, zincMg: 1.8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "heo-rung", slug: "heo-rung", name: "Thịt heo rừng",
    aliases: ["heo rung", "lợn rừng", "lon rung", "wild boar"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt heo rừng nạc hơn heo nhà.",
    nutrients: { energyKcal: 145, proteinG: 22, carbG: 0, fatG: 6, saturatedFatG: 2, cholesterolMg: 60, sodiumMg: 50, potassiumMg: 380, ironMg: 1.5, zincMg: 2.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thit-nai", slug: "thit-nai", name: "Thịt nai",
    aliases: ["thit nai", "venison"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt nai tươi, xào lăn hoặc nướng.",
    nutrients: { energyKcal: 135, proteinG: 21, carbG: 0, fatG: 5, saturatedFatG: 2, cholesterolMg: 65, sodiumMg: 55, potassiumMg: 340, ironMg: 3.5, zincMg: 3 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── TRÁI CÂY ──
  {
    id: "dua-luoi", slug: "dua-luoi", name: "Dưa lưới",
    aliases: ["melon", "dua luoi"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Dưa lưới chín, ngọt mát.",
    nutrients: { energyKcal: 36, proteinG: 0.8, carbG: 8.2, fatG: 0.2, fiberG: 0.9, sugarG: 7.86, calciumMg: 9, ironMg: 0.2, sodiumMg: 18, potassiumMg: 267, phosphorusMg: 15, vitaminCMg: 37, vitaminAUg: 169, glycemicIndex: 55 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "xoai-xanh", slug: "xoai-xanh", name: "Xoài xanh",
    aliases: ["xoai non", "green mango", "xoai xanh"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Xoài xanh dùng làm gỏi, muối trộn.",
    nutrients: { energyKcal: 40, proteinG: 0.5, carbG: 10, fatG: 0.2, fiberG: 1.5, calciumMg: 10, ironMg: 0.1, sodiumMg: 2, potassiumMg: 150, vitaminCMg: 35, glycemicIndex: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── BÁNH TRUYỀN THỐNG VN ──
  {
    id: "banh-chung", slug: "banh-chung", name: "Bánh chưng",
    aliases: ["banh chung tet"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh chưng nhân thịt đậu xanh.",
    nutrients: { energyKcal: 230, proteinG: 8, carbG: 32, fatG: 8, fiberG: 1.5, sodiumMg: 320, potassiumMg: 140, glycemicIndex: 70 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-troi", slug: "banh-troi", name: "Bánh trôi",
    aliases: ["banh troi nuoc"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh trôi nước nhân đường phèn, rắc mè.",
    nutrients: { energyKcal: 200, proteinG: 3, carbG: 38, fatG: 4, sugarG: 15, sodiumMg: 10, potassiumMg: 40, glycemicIndex: 65 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-chay", slug: "banh-chay", name: "Bánh chay",
    aliases: ["banh chay nuong"],
    category: "Bánh kẹo", state: "cooked", basis: "100g",
    edibleNote: "Bánh chay nhân đậu xanh nước đường rắc mè.",
    nutrients: { energyKcal: 210, proteinG: 5, carbG: 40, fatG: 4, sugarG: 18, sodiumMg: 15, potassiumMg: 60, glycemicIndex: 65 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-phu-the", slug: "banh-phu-the", name: "Bánh phu thê",
    aliases: ["banh fu the", "banh xuan the"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Bánh phu thê nhân đậu xanh dừa.",
    nutrients: { energyKcal: 350, proteinG: 5, carbG: 65, fatG: 8, sugarG: 30, sodiumMg: 60, potassiumMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-tong", slug: "banh-tong", name: "Bánh tổ",
    aliases: ["banh tong", "banh to hoian"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Bánh tổ Hội An, làm từ nếp và mía đường.",
    nutrients: { energyKcal: 370, proteinG: 4, carbG: 72, fatG: 7, sugarG: 35, sodiumMg: 50, potassiumMg: 60 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-ong", slug: "banh-ong", name: "Bánh ống",
    aliases: ["banh ong"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Bánh ống thập cẩm, đặc sản Vũng Tàu/Bà Rịa.",
    nutrients: { energyKcal: 350, proteinG: 6, carbG: 66, fatG: 8, sugarG: 25, sodiumMg: 120, potassiumMg: 100 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-da-ke", slug: "banh-da-ke", name: "Bánh đa kê",
    aliases: ["banh da ke me"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Bánh kê/lúa mạch rang mè, đặc sản ngoại thành HN.",
    nutrients: { energyKcal: 380, proteinG: 8, carbG: 70, fatG: 8, fiberG: 4, sodiumMg: 40, potassiumMg: 150 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "che-lam", slug: "che-lam", name: "Chè lam",
    aliases: ["che lam"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Chè lam làng Mái/Đại Lộc, bột nếp đường mật.",
    nutrients: { energyKcal: 360, proteinG: 4, carbG: 74, fatG: 5, sugarG: 35, sodiumMg: 25, potassiumMg: 70 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── ĐẬU ──
  {
    id: "dau-dua", slug: "dau-dua", name: "Đậu đũa",
    aliases: ["dau dua", "dau co ve leo", "yardlong bean"],
    category: "Đậu", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Đậu đũa tươi, luộc hoặc xào.",
    nutrients: { energyKcal: 47, proteinG: 2.5, carbG: 9, fatG: 0.4, fiberG: 3.2, calciumMg: 41, ironMg: 0.8, sodiumMg: 4, potassiumMg: 240, vitaminCMg: 20, glycemicIndex: 25 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "dau-rong", slug: "dau-rong", name: "Đậu rồng",
    aliases: ["dau rong", "winged bean"],
    category: "Đậu", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Đậu rồng tươi, ăn sống/luộc/xào.",
    nutrients: { energyKcal: 49, proteinG: 4, carbG: 6, fatG: 0.4, fiberG: 3.5, calciumMg: 38, ironMg: 0.5, sodiumMg: 6, potassiumMg: 200, vitaminCMg: 25, glycemicIndex: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── NẤM ──
  // ── GIA VỊ ──
  {
    id: "hanh-cu", slug: "hanh-cu", name: "Hành củ tươi",
    aliases: ["hanh cu", "hanh huong", "shallot"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hành củ tươi hoặc hành tím.",
    nutrients: { energyKcal: 40, proteinG: 1.5, carbG: 9, fatG: 0.1, fiberG: 1.7, calciumMg: 22, ironMg: 0.4, sodiumMg: 3, potassiumMg: 170, vitaminCMg: 5, glycemicIndex: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ho-tieu", slug: "ho-tieu", name: "Hồ tiêu đen",
    aliases: ["tieu", "tieu den", "black pepper", "ho tieu"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Hạt tiêu đen xay/nguyên hạt.",
    nutrients: { energyKcal: 255, proteinG: 11, carbG: 64, fatG: 3, fiberG: 25, calciumMg: 440, ironMg: 9.7, sodiumMg: 20, potassiumMg: 1250, vitaminCMg: 21, glycemicIndex: 5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; dùng lượng rất nhỏ."
  },
  {
    id: "sa-te-tom", slug: "sa-te-tom", name: "Sa tế tôm",
    aliases: ["sa te tom", "sa te"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Sa tế tôm chưng dầu, pha bún/hủ tiếu.",
    nutrients: { energyKcal: 380, proteinG: 8, carbG: 6, fatG: 36, saturatedFatG: 6, sodiumMg: 2800, potassiumMg: 100 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; dùng lượng nhỏ mỗi lần."
  },
  {
    id: "dau-hao", slug: "dau-hao", name: "Dầu hào",
    aliases: ["oyster sauce", "dau hao"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Dầu hào dùng xào/tẩm ướp.",
    nutrients: { energyKcal: 60, proteinG: 1.5, carbG: 12, fatG: 0.5, sugarG: 8, calciumMg: 17, ironMg: 1.1, sodiumMg: 4500, potassiumMg: 90, phosphorusMg: 32 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; natri cao."
  },
  {
    id: "ngo-vi-huong", slug: "ngo-vi-huong", name: "Ngũ vị hương",
    aliases: ["five spice", "ngo vi huong"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Bột ngũ vị hương trộn các loại gia vị.",
    nutrients: { energyKcal: 270, proteinG: 6, carbG: 58, fatG: 3, fiberG: 20, sodiumMg: 50, potassiumMg: 300 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; dùng lượng rất nhỏ."
  },
  {
    id: "giam-gao", slug: "giam-gao", name: "Giấm gạo",
    aliases: ["rice vinegar", "giam gao"],
    category: "Gia vị", state: "processed", basis: "100ml",
    edibleNote: "Giấm gạo nguyên chất.",
    nutrients: { energyKcal: 18, proteinG: 0, carbG: 0.5, fatG: 0, sodiumMg: 3, potassiumMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thi-la-kho-x", slug: "thi-la-kho-x", name: "Thì là (rau)",
    aliases: ["thia la", "dill herb", "thi la"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Rau thì là tươi dùng tẩm ướp cá.",
    nutrients: { energyKcal: 43, proteinG: 3.5, carbG: 7, fatG: 1.1, fiberG: 2.1, calciumMg: 208, ironMg: 6.6, sodiumMg: 61, potassiumMg: 738, vitaminCMg: 85 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── BÁNH KHÁC ──
  {
    id: "banh-trung-thu-nhan-thap-cam", slug: "banh-trung-thu-nhan-thap-cam", name: "Bánh trung thu nhân thập cẩm",
    aliases: ["banh trung thu thap cam", "mooncake assortment"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Bánh trung thu nhân thập cẩm trứng muối.",
    nutrients: { energyKcal: 420, proteinG: 8, carbG: 60, fatG: 17, saturatedFatG: 5, sugarG: 30, cholesterolMg: 80, sodiumMg: 320, calciumMg: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── ỚT & GIA VỊ ──
  {
    id: "ot-tuoi", slug: "ot-tuoi", name: "Ớt tươi",
    aliases: ["chili pepper", "ot"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Ớt tươi các loại.",
    nutrients: { energyKcal: 40, proteinG: 1.9, carbG: 8.8, fatG: 0.4, fiberG: 1.5, calciumMg: 14, ironMg: 1.0, sodiumMg: 9, potassiumMg: 322, vitaminCMg: 144, vitaminAUg: 952 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "xuong-heo", slug: "xuong-heo", name: "Xương heo",
    aliases: ["xuong heo", "xương lợn", "xuong lon", "pork bone"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Xương heo dùng hầm nước dùng, gồm tủy và nạc thừa.",
    nutrients: { energyKcal: 200, proteinG: 12, carbG: 0, fatG: 16, saturatedFatG: 6, sodiumMg: 50, potassiumMg: 100, calciumMg: 40, phosphorusMg: 130 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "xuong-bo", slug: "xuong-bo", name: "Xương bò",
    aliases: ["xuong bo", "beef bone"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Xương bò hầm nấu phở lẩu.",
    nutrients: { energyKcal: 220, proteinG: 13, carbG: 0, fatG: 18, saturatedFatG: 7, sodiumMg: 55, potassiumMg: 110, calciumMg: 35, phosphorusMg: 140 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thit-ba-chi", slug: "thit-ba-chi", name: "Thịt ba chỉ heo (rút gọn)",
    aliases: ["ba chi", "thit ba rọi", "thịt ba chỉ lợn", "pork belly"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt ba chỉ tươi, aliases cả ba rọi.",
    nutrients: { energyKcal: 396, proteinG: 14, carbG: 0, fatG: 37, saturatedFatG: 13, cholesterolMg: 72, sodiumMg: 51, potassiumMg: 207 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "long-heo", slug: "long-heo", name: "Lòng heo",
    aliases: ["long heo", "lòng lợn", "pork tripe"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lòng non heo, dùng luộc/xào phổ biến.",
    nutrients: { energyKcal: 85, proteinG: 13, carbG: 0.5, fatG: 3.5, cholesterolMg: 150, sodiumMg: 45, potassiumMg: 60, ironMg: 1.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-gio", slug: "banh-gio", name: "Bánh giò",
    aliases: ["banh gio"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh giò nhân thịt nấm mộc nhĩ.",
    nutrients: { energyKcal: 195, proteinG: 6, carbG: 30, fatG: 5, sodiumMg: 350, potassiumMg: 80, calciumMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-mi-op-la", slug: "banh-mi-op-la", name: "Bánh mì ốp la",
    aliases: ["banh mi op la"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh mì ốp la trứng, có thể kèm pate jambon.",
    nutrients: { energyKcal: 180, proteinG: 8, carbG: 28, fatG: 4, sugarG: 1, cholesterolMg: 110, sodiumMg: 280, potassiumMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-mi-pate", slug: "banh-mi-pate", name: "Bánh mì pate",
    aliases: ["banh mi pate"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh mì pate, ước tính phần bánh + pate.",
    nutrients: { energyKcal: 220, proteinG: 8, carbG: 30, fatG: 7, sugarG: 1, sodiumMg: 400, potassiumMg: 90 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-mi-cha-ca", slug: "banh-mi-cha-ca", name: "Bánh mì chả cá",
    aliases: ["banh mi cha ca", "banh mi cha ca da nang"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh mì chả cá Nha Trang/Đà Nẵng.",
    nutrients: { energyKcal: 200, proteinG: 10, carbG: 30, fatG: 5, sugarG: 1, sodiumMg: 420, potassiumMg: 100 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-mi-cha-lua", slug: "banh-mi-cha-lua", name: "Bánh mì chả lụa",
    aliases: ["banh mi cha lua"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh mì kẹp chả lụa, thường kèm đồ chua rau ngò.",
    nutrients: { energyKcal: 190, proteinG: 9, carbG: 30, fatG: 4, sugarG: 1, sodiumMg: 380, potassiumMg: 90 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-cuon-nong", slug: "banh-cuon-nong", name: "Bánh cuốn nóng",
    aliases: ["banh cuon", "banh cuon nong"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh cuốn nóng nhân thịt nấm mộc nhĩ, ăn kèm chả lụa.",
    nutrients: { energyKcal: 150, proteinG: 6, carbG: 25, fatG: 3, saturatedFatG: 1, sodiumMg: 350, potassiumMg: 70, calciumMg: 25 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "nam-linh-chi", slug: "nam-linh-chi", name: "Nấm linh chi",
    aliases: ["nam linh chi", "reishi", "lingzhi"],
    category: "Nấm", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Nấm linh chi khô, thường hãm trà hoặc nấu nước uống.",
    nutrients: { energyKcal: 280, proteinG: 3, carbG: 65, fatG: 0.5, fiberG: 45, calciumMg: 10, sodiumMg: 5, potassiumMg: 150, ironMg: 2.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "sa-te", slug: "sa-te", name: "Sa tế",
    aliases: ["sa te", "sate", "chili oil"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Sa tế tôm/sả ớt, dầu thực vật, ớt bột, gia vị.",
    nutrients: { energyKcal: 520, proteinG: 3, carbG: 10, fatG: 50, saturatedFatG: 8, sodiumMg: 1800, potassiumMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── RAU GIA VỊ ──
  {
    id: "hung-lui", slug: "hung-lui", name: "Húng lủi",
    aliases: ["hung lui", "hung nhu", "hung trong"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Húng lủi, thơm hơn húng chó, ăn sống và trang trí.",
    nutrients: { energyKcal: 30, proteinG: 2.5, carbG: 4.5, fatG: 0.5, fiberG: 2, calciumMg: 100, potassiumMg: 250, vitaminAUg: 400, vitaminCMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "la-buoi", slug: "la-buoi", name: "Lá bưởi",
    aliases: ["la buoi", "pomelo leaf"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lá bưởi dùng nấu gỏi, rim cá hoặc tạo mùi trong các món xào.",
    nutrients: { energyKcal: 25, proteinG: 2, carbG: 4, fatG: 0.3, fiberG: 2, calciumMg: 60, potassiumMg: 200, vitaminCMg: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "la-chanh", slug: "la-chanh", name: "Lá chanh",
    aliases: ["la chanh", "kuffir lime leaf"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lá chanh thái chỉ ăn sống hoặc cho vào các mòn canh, lẩu.",
    nutrients: { energyKcal: 20, proteinG: 1.5, carbG: 3.5, fatG: 0.2, fiberG: 1.5, calciumMg: 50, potassiumMg: 180, vitaminCMg: 25 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "muop-dang", slug: "muop-dang", name: "Mướp đắng (khổ qua)",
    aliases: ["muop dang", "kho qua", "bitter gourd"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Mướp đắng vị đắng, mát, thường nhồi thịt nấu canh.",
    nutrients: { energyKcal: 19, proteinG: 1.1, carbG: 3.7, fatG: 0.2, fiberG: 2.8, calciumMg: 22, potassiumMg: 210, vitaminCMg: 52, vitaminAUg: 90, folateUg: 51 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── TINH BỘT ──

  // ── THỊT & NỘI TẠNG ──
  {
    id: "da-heo", slug: "da-heo", name: "Da heo",
    aliases: ["da heo", "da lợn", "bì heo", "bì lợn", "pork skin"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Da heo luộc thái sợi ăn gỏi hoặc chiên giòn.",
    nutrients: { energyKcal: 230, proteinG: 21, carbG: 0, fatG: 16, saturatedFatG: 5.5, cholesterolMg: 60, sodiumMg: 55, potassiumMg: 50 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "gio-heo", slug: "gio-heo", name: "Giò heo (móng giò)",
    aliases: ["gio heo", "giò lợn", "mong gio", "móng giò lợn", "pork trotter"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Giò heo hầm, nấu canh măng, bung.",
    nutrients: { energyKcal: 200, proteinG: 18, carbG: 0, fatG: 14, saturatedFatG: 5, cholesterolMg: 85, sodiumMg: 60, potassiumMg: 120, calciumMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── HẢI SẢN ──
  {
    id: "muc-kho", slug: "muc-kho", name: "Mực khô",
    aliases: ["muc kho", "dried squid"],
    category: "Hải sản", state: "dried", basis: "100g phần ăn được",
    edibleNote: "Mực khô nướng, xé nhỏ chấm muối ớt xanh.",
    nutrients: { energyKcal: 278, proteinG: 55, carbG: 8, fatG: 3.5, saturatedFatG: 0.8, fiberG: 0, cholesterolMg: 480, sodiumMg: 350, potassiumMg: 500, calciumMg: 60, ironMg: 3 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "diep-bien", slug: "diep-bien", name: "Điệp biển",
    aliases: ["diep bien", "scallop", "sò điệp"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Điệp biển (scallop), nướng mỡ hành, hấp, xào.",
    nutrients: { energyKcal: 88, proteinG: 17, carbG: 2, fatG: 0.8, saturatedFatG: 0.1, fiberG: 0, cholesterolMg: 35, sodiumMg: 180, potassiumMg: 310, calciumMg: 26, ironMg: 0.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── CHẾ BIẾN ──
  {
    id: "cha-ca", slug: "cha-ca", name: "Chả cá",
    aliases: ["cha ca", "fish cake"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Chả cá chiên, dùng với bún, cơm, bánh mì.",
    nutrients: { energyKcal: 160, proteinG: 14, carbG: 10, fatG: 7, saturatedFatG: 1.5, fiberG: 0.5, cholesterolMg: 60, sodiumMg: 650, potassiumMg: 150, calciumMg: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "nem-chao", slug: "nem-chao", name: "Nem chạo",
    aliases: ["nem chao", "nem ran"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Nem chạo (chạo tôm) cuộn với bánh tráng, rau thơm.",
    nutrients: { energyKcal: 180, proteinG: 14, carbG: 15, fatG: 7, saturatedFatG: 2, fiberG: 1, cholesterolMg: 60, sodiumMg: 550, potassiumMg: 160 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "nem-nuong", slug: "nem-nuong", name: "Nem nướng",
    aliases: ["nem nuong", "grilled pork sausage"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Nem nướng Nha Trang, ăn với bún, rau sống, chấm nước tương ớt.",
    nutrients: { energyKcal: 200, proteinG: 15, carbG: 12, fatG: 10, saturatedFatG: 3, fiberG: 0.5, cholesterolMg: 65, sodiumMg: 600, potassiumMg: 180 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  }
];
