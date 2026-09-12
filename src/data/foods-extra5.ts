import type { Food } from "./nutrition";

export const extraFoods5: Food[] = [
  // ── RAU CỦ ──
  {
    id: "xa-lach-xoong", slug: "xa-lach-xoong", name: "Xà lách xoong",
    aliases: ["cress", "watercress", "xa lach xoong"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Xà lách xoong tươi.",
    nutrients: { energyKcal: 11, proteinG: 2.3, carbG: 1.3, fatG: 0.1, fiberG: 0.5, calciumMg: 120, ironMg: 0.2, sodiumMg: 14, potassiumMg: 112, vitaminAUg: 160, vitaminCMg: 43 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "can-nuoc", slug: "can-nuoc", name: "Cần nước",
    aliases: ["cần ta", "water celery", "can nuoc"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cần nước tươi, thường dùng xào hoặc nấu canh.",
    nutrients: { energyKcal: 16, proteinG: 1.4, carbG: 3.0, fatG: 0.2, fiberG: 1.5, calciumMg: 38, ironMg: 1.0, sodiumMg: 55, potassiumMg: 245, vitaminAUg: 150, vitaminCMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ngai-cuu", slug: "ngai-cuu", name: "Ngải cứu",
    aliases: ["mugwort", "ngai cuu"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lá ngải cứu tươi, thường nấu canh hoặc trần luộc.",
    nutrients: { energyKcal: 32, proteinG: 2.9, carbG: 5.3, fatG: 0.5, fiberG: 2.5, calciumMg: 125, ironMg: 3.0, sodiumMg: 12, potassiumMg: 350, vitaminAUg: 400, vitaminCMg: 10 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "rau-diep", slug: "rau-diep", name: "Rau diếp",
    aliases: ["rau diep"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Rau diếp tươi các loại.",
    nutrients: { energyKcal: 15, proteinG: 1.4, carbG: 2.9, fatG: 0.2, fiberG: 1.3, calciumMg: 36, ironMg: 0.9, sodiumMg: 28, potassiumMg: 194, vitaminAUg: 370, vitaminCMg: 9 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "bac-ha", slug: "bac-ha", name: "Bạc hà rau",
    aliases: ["rau bạc hà", "bac ha"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lá bạc hà tươi dùng nấu canh hoặc ăn sống.",
    nutrients: { energyKcal: 18, proteinG: 1.5, carbG: 3.0, fatG: 0.2, fiberG: 1.5, calciumMg: 40, ironMg: 0.8, sodiumMg: 10, potassiumMg: 200, vitaminAUg: 200, vitaminCMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "doc-mung", slug: "doc-mung", name: "Dọc mùng",
    aliases: ["môn bạc hà", "doc mung"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Dọc mùng bỏ vỏ, dùng nấu canh chua cá, canh ốc.",
    nutrients: { energyKcal: 12, proteinG: 0.7, carbG: 2.6, fatG: 0.1, fiberG: 1.5, calciumMg: 28, ironMg: 0.3, sodiumMg: 5, potassiumMg: 155, vitaminCMg: 5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thi-la-kho", slug: "thi-la-kho", name: "Thì là",
    aliases: ["thìa là", "dill"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lá thì là tươi, dùng tẩm ướp hoặc nấu canh cá.",
    nutrients: { energyKcal: 43, proteinG: 3.5, carbG: 7.0, fatG: 1.1, fiberG: 2.1, calciumMg: 208, ironMg: 6.6, sodiumMg: 61, potassiumMg: 738, vitaminCMg: 85, vitaminAUg: 771 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "atiso", slug: "atiso", name: "Atisô",
    aliases: ["artichoke", "ati so"],
    category: "Củ quả", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cụm hoa atisô tươi, thường luộc/hấp.",
    nutrients: { energyKcal: 47, proteinG: 3.3, carbG: 11.0, fatG: 0.2, fiberG: 5.4, calciumMg: 44, ironMg: 1.3, sodiumMg: 94, potassiumMg: 370, magnesiumMg: 60, vitaminCMg: 12 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── TRÁI CÂY VN ──
  {
    id: "man", slug: "man", name: "Mận",
    aliases: ["plum"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Mận chín ngọt (mận hậu hoặc mận gai).",
    nutrients: { energyKcal: 46, proteinG: 0.7, carbG: 11.4, fatG: 0.3, fiberG: 1.4, calciumMg: 6, ironMg: 0.2, sodiumMg: 0, potassiumMg: 157, vitaminCMg: 10, glycemicIndex: 40 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "mo-trai", slug: "mo-trai", name: "Mơ",
    aliases: ["apricot", "mo"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Quả mơ chín, thường làm ô mai hoặc rượu.",
    nutrients: { energyKcal: 48, proteinG: 1.4, carbG: 11.1, fatG: 0.4, fiberG: 2.0, calciumMg: 13, ironMg: 0.4, sodiumMg: 1, potassiumMg: 259, vitaminCMg: 10, glycemicIndex: 35 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "tac-quat", slug: "tac-quat", name: "Tắc (quất)",
    aliases: ["kumquat", "tac", "quat"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Quả tắc chín nguyên vỏ.",
    nutrients: { energyKcal: 71, proteinG: 1.9, carbG: 16.0, fatG: 0.9, fiberG: 6.5, calciumMg: 62, ironMg: 0.9, sodiumMg: 10, potassiumMg: 186, vitaminCMg: 44, vitaminAUg: 290, glycemicIndex: 35 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "son-ri", slug: "son-ri", name: "Sơn ri (xoài non)",
    aliases: ["hạt điều non", "son ri"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Quả sơn ri/xoài non dùng muối trộn, ăn vị chua.",
    nutrients: { energyKcal: 30, proteinG: 0.5, carbG: 7.0, fatG: 0.2, fiberG: 1.5, calciumMg: 10, ironMg: 0.2, sodiumMg: 2, potassiumMg: 120, vitaminCMg: 30, glycemicIndex: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-na-trai", slug: "ca-na-trai", name: "Cà na",
    aliases: ["ca na"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Quả cà na chấm muối ớt hoặc ngâm đường.",
    nutrients: { energyKcal: 55, proteinG: 0.8, carbG: 13.5, fatG: 0.2, fiberG: 2.0, calciumMg: 15, ironMg: 0.3, sodiumMg: 3, potassiumMg: 140, vitaminCMg: 25, glycemicIndex: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── GIA VỊ & NẤU NƯỚNG ──
  {
    id: "sa", slug: "sa", name: "Sả",
    aliases: ["lemongrass", "xa", "cây sả"],
    category: "Rau gia vị", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Củ/bẹ sả tươi, băm nhuyễn dùng tẩm ướp.",
    nutrients: { energyKcal: 99, proteinG: 1.8, carbG: 25.3, fatG: 0.5, fiberG: 1.2, calciumMg: 65, ironMg: 8.2, sodiumMg: 6, potassiumMg: 723, vitaminCMg: 2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "bot-nghe", slug: "bot-nghe", name: "Bột nghệ",
    aliases: ["nghệ bột"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Bột nghệ khô màu vàng.",
    nutrients: { energyKcal: 354, proteinG: 7.8, carbG: 64.9, fatG: 9.9, fiberG: 21.1, calciumMg: 183, ironMg: 41.4, sodiumMg: 38, potassiumMg: 2525, vitaminCMg: 26 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "mat-ong", slug: "mat-ong", name: "Mật ong",
    aliases: ["honey", "mat ong"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Mật ong tự nhiên.",
    nutrients: { energyKcal: 304, proteinG: 0.3, carbG: 82.4, fatG: 0, sugarG: 82, ironMg: 0.4, sodiumMg: 4, potassiumMg: 52, vitaminCMg: 0.5, glycemicIndex: 58 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "muoi-tieu", slug: "muoi-tieu", name: "Muối tiêu",
    aliases: ["muối tiêu chanh", "salt pepper"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Muối tiêu trộn tỷ lệ 1:1 ước tính.",
    nutrients: { energyKcal: 20, proteinG: 0.5, carbG: 3, fatG: 0.5, sodiumMg: 19000, potassiumMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; lượng tiêu thụ thực tế rất nhỏ."
  },
  {
    id: "gia-tuoi", slug: "gia-tuoi", name: "Giá tươi",
    aliases: ["giá đỗ", "bean sprouts", "gia do"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Giá đỗ tươi, ăn sống hoặc trụng sơ.",
    nutrients: { energyKcal: 33, proteinG: 3.1, carbG: 5.3, fatG: 0.5, fiberG: 1.7, calciumMg: 14, ironMg: 0.8, sodiumMg: 7, potassiumMg: 258, vitaminCMg: 14, glycemicIndex: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "hat-nem", slug: "hat-nem", name: "Hạt nêm",
    aliases: ["seasoning powder", "hat nem"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Hạt nêm heo/gà, mỗi hãng khác nhau.",
    nutrients: { energyKcal: 220, proteinG: 6, carbG: 40, fatG: 3, sodiumMg: 12000, potassiumMg: 80 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; dùng lượng 1-2g/lần."
  },
  {
    id: "chao", slug: "chao", name: "Chao",
    aliases: ["fermented tofu"],
    category: "Gia vị", state: "processed", basis: "100g",
    edibleNote: "Đậu phụ lên men kiểu Việt, dùng nấu lẩu/chấm.",
    nutrients: { energyKcal: 120, proteinG: 7.5, carbG: 5.0, fatG: 7.5, sodiumMg: 3200, calciumMg: 80, ironMg: 1.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; natri rất cao."
  },
  // ── THỊT ──
  {
    id: "thit-ba-roi", slug: "thit-ba-roi", name: "Thịt ba rọi heo",
    aliases: ["thit ba chi", "thịt ba chỉ lợn", "thit ba chi lon", "pork belly", "ba rọi", "ba chỉ"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt ba rọi tươi cả da/nạc/mỡ.",
    nutrients: { energyKcal: 396, proteinG: 14.0, carbG: 0, fatG: 37.0, saturatedFatG: 13.0, cholesterolMg: 72, sodiumMg: 51, potassiumMg: 207, phosphorusMg: 130 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thit-heo-quay", slug: "thit-heo-quay", name: "Thịt heo quay",
    aliases: ["roasted pork", "heo quay", "lợn quay", "thit quay"],
    category: "Thịt chế biến", state: "cooked", basis: "100g",
    edibleNote: "Thịt heo quay da giòn, loại bỏ xương.",
    nutrients: { energyKcal: 310, proteinG: 20.0, carbG: 1.5, fatG: 25.0, saturatedFatG: 9.0, cholesterolMg: 65, sodiumMg: 780, potassiumMg: 240 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  
  {
    id: "thit-bo-kho", slug: "thit-bo-kho", name: "Thịt bò khô",
    aliases: ["beef jerky", "bò khô", "thit bo kho"],
    category: "Thịt chế biến", state: "processed", basis: "100g",
    edibleNote: "Bò khô sấy, tẩm gia vị.",
    nutrients: { energyKcal: 310, proteinG: 44.0, carbG: 10.0, fatG: 10.0, saturatedFatG: 4.0, sodiumMg: 1420, ironMg: 3.5, zincMg: 5.0, potassiumMg: 500 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; natri cao."
  },
  {
    id: "thit-bo-xay", slug: "thit-bo-xay", name: "Thịt bò xay",
    aliases: ["beef mince", "bò băm", "thit bo bam", "thit bo xay"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt bò xay, tỷ lệ nạc mỡ 80/20.",
    nutrients: { energyKcal: 220, proteinG: 19.0, carbG: 0, fatG: 16.0, saturatedFatG: 6.0, cholesterolMg: 65, sodiumMg: 72, potassiumMg: 280, ironMg: 2.5, zincMg: 4.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "thit-ga-xay", slug: "thit-ga-xay", name: "Thịt gà xay",
    aliases: ["chicken mince", "gà băm", "thit ga xay"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Thịt gà xay (ức + đùi).",
    nutrients: { energyKcal: 158, proteinG: 21.0, carbG: 0, fatG: 8.0, saturatedFatG: 2.0, cholesterolMg: 75, sodiumMg: 68, potassiumMg: 230, zincMg: 1.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── THỦY-HẢI SẢN ──
  {
    id: "ca-tam", slug: "ca-tam", name: "Cá tầm",
    aliases: ["sturgeon", "ca tam"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá tầm tươi, thường nấu lẩu/hấp xì dầu.",
    nutrients: { energyKcal: 120, proteinG: 18.0, carbG: 0, fatG: 5.0, saturatedFatG: 1.2, cholesterolMg: 60, sodiumMg: 56, potassiumMg: 320, phosphorusMg: 220, calciumMg: 13 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-pheo", slug: "ca-pheo", name: "Cá phèo",
    aliases: ["ca pheo"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cá phèo chiên/rim kiểu đồng bằng Nam Bộ.",
    nutrients: { energyKcal: 105, proteinG: 17.0, carbG: 0, fatG: 3.8, calciumMg: 120, sodiumMg: 55, potassiumMg: 280, phosphorusMg: 200 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "trung-cun", slug: "trung-cun", name: "Trứng cút (thường)",
    aliases: ["quail egg"],
    category: "Trứng sữa", state: "processed", basis: "100g",
    edibleNote: "Trứng cút nguyên quả luộc.",
    nutrients: { energyKcal: 158, proteinG: 13.0, carbG: 0.4, fatG: 11.0, cholesterolMg: 844, calciumMg: 60, ironMg: 3.5, sodiumMg: 140, potassiumMg: 120, zincMg: 1.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; cholesterol cao."
  },
  {
    id: "ba-khia", slug: "ba-khia", name: "Ba khía",
    aliases: ["ba khia", "sesarmid crab"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Ba khía tươi miền Tây, thường muối hoặc ăn liền.",
    nutrients: { energyKcal: 75, proteinG: 14.0, carbG: 1.0, fatG: 1.5, calciumMg: 150, sodiumMg: 380, potassiumMg: 160, ironMg: 1.2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "muoi-ba-khia", slug: "muoi-ba-khia", name: "Muối ba khía",
    aliases: ["ba khía muối", "muoi ba khia", "crab paste"],
    category: "Hải sản", state: "processed", basis: "100g",
    edibleNote: "Ba khía ngâm muối, dùng ăn với cơm/cuốn bánh tráng.",
    nutrients: { energyKcal: 60, proteinG: 10.0, carbG: 1.0, fatG: 1.2, calciumMg: 120, sodiumMg: 6000, potassiumMg: 120, ironMg: 1.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; natri cực cao."
  },
  {
    id: "rong-bien", slug: "rong-bien", name: "Rong biển khô",
    aliases: ["seaweed", "rong bien", "tảo bẹ"],
    category: "Rau xanh", state: "processed", basis: "100g khô",
    edibleNote: "Rong biển khô, trước khi ngâm nở.",
    nutrients: { energyKcal: 43, proteinG: 5.8, carbG: 5.1, fatG: 0.6, fiberG: 3.0, calciumMg: 168, ironMg: 2.9, sodiumMg: 240, potassiumMg: 74, vitaminAUg: 200, vitaminCMg: 3, iodineMcg: 150 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── BÁNH VN ──
  {
    id: "banh-duc", slug: "banh-duc", name: "Bánh đúc",
    aliases: ["banh duc"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh đúc nóng chấm tương, hoặc bánh đúc lạnh.",
    nutrients: { energyKcal: 110, proteinG: 2.0, carbG: 23.0, fatG: 0.8, fiberG: 0.5, sodiumMg: 180, potassiumMg: 35, calciumMg: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-can", slug: "banh-can", name: "Bánh căn",
    aliases: ["banh can"],
    category: "Tinh bột", state: "cooked", basis: "100g",
    edibleNote: "Bánh căn nướng, thường có trứng cút bên trên.",
    nutrients: { energyKcal: 170, proteinG: 5.0, carbG: 28.0, fatG: 4.5, sugarG: 1, cholesterolMg: 85, sodiumMg: 320, calciumMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi tùy topping."
  },
  {
    id: "banh-tieu", slug: "banh-tieu", name: "Bánh tiêu",
    aliases: ["banh tieu"],
    category: "Tinh bột", state: "processed", basis: "100g",
    edibleNote: "Bánh tiêu chiên, rắc mè.",
    nutrients: { energyKcal: 380, proteinG: 7.0, carbG: 58.0, fatG: 14.0, sugarG: 10, sodiumMg: 350 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "banh-da-tom", slug: "banh-da-tom", name: "Bánh đa tôm",
    aliases: ["bánh đa", "banh da tom"],
    category: "Bánh kẹo", state: "processed", basis: "100g",
    edibleNote: "Bánh đa tôm khô, chiên trước khi ăn.",
    nutrients: { energyKcal: 420, proteinG: 8.0, carbG: 65, fatG: 15.0, sodiumMg: 850, calciumMg: 90 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── NẤM ──
  {
    id: "nam-bao-ngu-trang", slug: "nam-bao-ngu-trang", name: "Nấm bào ngư trắng",
    aliases: ["oyster mushroom", "nam bao ngu trang"],
    category: "Nấm", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Nấm bào ngư tươi, xào hoặc nấu canh.",
    nutrients: { energyKcal: 33, proteinG: 3.3, carbG: 6.1, fatG: 0.4, fiberG: 2.3, calciumMg: 3, ironMg: 0.4, sodiumMg: 18, potassiumMg: 420, vitaminDMcg: 0.2 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── TÓP MỠ & ĐỒ PHỤ ──
  {
    id: "top-mo", slug: "top-mo", name: "Tóp mỡ",
    aliases: ["crackling", "top mo heo", "tóp mỡ lợn"],
    category: "Thịt chế biến", state: "processed", basis: "100g",
    edibleNote: "Tóp mỡ heo chiên giòn.",
    nutrients: { energyKcal: 480, proteinG: 18.0, carbG: 1.0, fatG: 44.0, saturatedFatG: 16.0, cholesterolMg: 95, sodiumMg: 850, potassiumMg: 100 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; rất nhiều chất béo bão hòa."
  },
  {
    id: "doi-truong", slug: "doi-truong", name: "Dồi trường",
    aliases: ["sausage casing", "long heo non", "lòng lợn non", "doi truong"],
    category: "Thịt chế biến", state: "processed", basis: "100g",
    edibleNote: "Dồi trường heo luộc/chế biến, dùng bún/tiết canh.",
    nutrients: { energyKcal: 220, proteinG: 14.0, carbG: 2.0, fatG: 17.0, saturatedFatG: 6.0, cholesterolMg: 120, sodiumMg: 520, potassiumMg: 120 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-tim-dep", slug: "ca-tim-dep", name: "Cà tím dẹp",
    aliases: ["ca tim dep", "cà pháo dẹp"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cà tím dẹp kiểu Nam Bộ, dùng muối xổi hoặc luộc.",
    nutrients: { energyKcal: 25, proteinG: 1.0, carbG: 5.9, fatG: 0.2, fiberG: 3.1, calciumMg: 9, ironMg: 0.3, sodiumMg: 3, potassiumMg: 230, vitaminCMg: 5, glycemicIndex: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  {
    id: "ca-phao", slug: "ca-phao", name: "Cà pháo",
    aliases: ["ca phao", "eggplant round"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cà pháo tươi, dùng muối chua hoặc luộc.",
    nutrients: { energyKcal: 27, proteinG: 1.0, carbG: 6.0, fatG: 0.2, fiberG: 2.8, calciumMg: 10, ironMg: 0.3, sodiumMg: 2, potassiumMg: 230, vitaminCMg: 5, glycemicIndex: 15 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  },
  // ── HẠT ──
  {
    id: "hat-dieu-rang", slug: "hat-dieu-rang", name: "Hạt điều rang",
    aliases: ["cashew nut roasted", "hat dieu rang"],
    category: "Hạt", state: "processed", basis: "100g",
    edibleNote: "Hạt điều rang muối hoặc không muối.",
    nutrients: { energyKcal: 553, proteinG: 18.2, carbG: 30.2, fatG: 43.8, saturatedFatG: 7.8, fiberG: 3.3, calciumMg: 37, ironMg: 6.7, sodiumMg: 5, potassiumMg: 565, magnesiumMg: 292, zincMg: 5.8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến."
  }
];
