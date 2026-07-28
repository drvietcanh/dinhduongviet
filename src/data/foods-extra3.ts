import type { Food } from "./nutrition";

export const extraFoods3: Food[] = [
  // ── THỊT CHẾ BIẾN ──
  {
    id: "xuc-xich", slug: "xuc-xich", name: "Xúc xích", aliases: ["sausage"],
    category: "Thịt chế biến", state: "processed", basis: "100g", edibleNote: "Xúc xích heo chiên/nướng.",
    nutrients: { energyKcal: 310, proteinG: 11.0, carbG: 3.0, fatG: 28.0, saturatedFatG: 10.0, sodiumMg: 1100, ironMg: 0.8 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "thit-nguoi-kho", slug: "thit-nguoi-kho", name: "Thịt nguội", aliases: ["ham", "jambon", "dăm bông", "thit nguoi"],
    category: "Thịt chế biến", state: "processed", basis: "100g", edibleNote: "Jambon heo nguội.",
    nutrients: { energyKcal: 150, proteinG: 18.0, carbG: 1.5, fatG: 8.0, sodiumMg: 950, ironMg: 0.9 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "cha-bong", slug: "cha-bong", name: "Chà bông", aliases: ["ruốc", "pork floss", "cha bong"],
    category: "Thịt chế biến", state: "processed", basis: "100g", edibleNote: "Ruốc thịt heo sấy.",
    nutrients: { energyKcal: 390, proteinG: 30.0, carbG: 8.0, fatG: 26.0, sodiumMg: 1200, ironMg: 2.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "lap-xuong", slug: "lap-xuong", name: "Lạp xưởng", aliases: ["Chinese sausage", "lap xuong"],
    category: "Thịt chế biến", state: "processed", basis: "100g", edibleNote: "Lạp xưởng heo khô.",
    nutrients: { energyKcal: 498, proteinG: 19.0, carbG: 7.0, fatG: 43.0, saturatedFatG: 15.0, sodiumMg: 1200, ironMg: 1.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "gio-thu", slug: "gio-thu", name: "Giò thủ", aliases: ["head cheese"],
    category: "Thịt chế biến", state: "processed", basis: "100g", edibleNote: "Giò thủ làm từ tai, mũi heo và gia vị.",
    nutrients: { energyKcal: 250, proteinG: 14.0, carbG: 2.0, fatG: 21.0, sodiumMg: 550, ironMg: 1.5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nem-chua", slug: "nem-chua", name: "Nem chua", aliases: ["fermented pork roll"],
    category: "Thịt chế biến", state: "processed", basis: "100g", edibleNote: "Nem chua lên men tự nhiên.",
    nutrients: { energyKcal: 150, proteinG: 14.0, carbG: 5.0, fatG: 8.0, sodiumMg: 600, ironMg: 1.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "bot-loc", slug: "bot-loc", name: "Bột lọc", aliases: ["tapioca starch", "bot loc"],
    category: "Tinh bột", state: "processed", basis: "100g khô", edibleNote: "Bột năng/bột lọc từ tinh bột khoai mì.",
    nutrients: { energyKcal: 358, proteinG: 0.2, carbG: 88.7, fatG: 0.1, calciumMg: 20, ironMg: 0.5, sodiumMg: 2, potassiumMg: 11 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính VIP."
  },
  {
    id: "bot-gao", slug: "bot-gao", name: "Bột gạo", aliases: ["rice flour"],
    category: "Tinh bột", state: "processed", basis: "100g khô", edibleNote: "Bột gạo tẻ mịn.",
    nutrients: { energyKcal: 366, proteinG: 6.5, carbG: 80.0, fatG: 0.7, fiberG: 1.5, calciumMg: 12, ironMg: 0.5, sodiumMg: 2, potassiumMg: 76 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "bot-mi-da", slug: "bot-mi-da", name: "Bột mì đa dụng", aliases: ["wheat flour"],
    category: "Tinh bột", state: "processed", basis: "100g khô", edibleNote: "Bột mì trắng đa dụng.",
    nutrients: { energyKcal: 364, proteinG: 10.3, carbG: 76.3, fatG: 1.0, fiberG: 2.7, calciumMg: 15, ironMg: 1.2, sodiumMg: 2, potassiumMg: 107 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },

  // ── NƯỚC CHẤM & GIA VỊ ──
  {
    id: "tuong-den", slug: "tuong-den", name: "Tương đen", aliases: ["hoisin sauce", "tuong den"],
    category: "Gia vị", state: "processed", basis: "100g", edibleNote: "Tương đen (hoisin) phổ biến phở cuộn.",
    nutrients: { energyKcal: 220, proteinG: 5.0, carbG: 44.0, fatG: 3.0, sugarG: 30.0, sodiumMg: 1800, ironMg: 1.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tuong-ot", slug: "tuong-ot", name: "Tương ớt", aliases: ["chili sauce"],
    category: "Gia vị", state: "processed", basis: "100g", edibleNote: "Tương ớt Việt Nam chua ngọt.",
    nutrients: { energyKcal: 90, proteinG: 1.0, carbG: 20.0, fatG: 0.5, sugarG: 15.0, sodiumMg: 1500 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sot-mayonnaise", slug: "sot-mayonnaise", name: "Sốt mayonnaise", aliases: ["mayonnaise"],
    category: "Gia vị", state: "processed", basis: "100g", edibleNote: "Mayonnaise trứng dầu.",
    nutrients: { energyKcal: 700, proteinG: 1.0, carbG: 0.5, fatG: 77.0, saturatedFatG: 12.0, cholesterolMg: 42, sodiumMg: 700, potassiumMg: 5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "sot-ca-chua", slug: "sot-ca-chua", name: "Sốt cà chua", aliases: ["ketchup"],
    category: "Gia vị", state: "processed", basis: "100g", edibleNote: "Sốt cà chua dùng làm nước chấm.",
    nutrients: { energyKcal: 101, proteinG: 1.0, carbG: 27.0, fatG: 0.1, sugarG: 22.0, sodiumMg: 900 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "gac", slug: "gac", name: "Gấc", aliases: ["gac fruit", "trai gac"],
    category: "Trái cây", state: "processed", basis: "100g màng gấc", edibleNote: "Màng đỏ của quả gấc.",
    nutrients: { energyKcal: 120, proteinG: 2.0, carbG: 10.0, fatG: 8.0, fiberG: 3.0, vitaminAUg: 20000, vitaminEMg: 12 , glycemicIndex: 15},
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; giàu beta-carotene."
  },

  // ── ĐỒ UỐNG ──
  {
    id: "ca-phe-sua-da-100ml", slug: "ca-phe-sua-da-100ml", name: "Cà phê sữa đá", aliases: ["cà phê sữa", "coffee with condensed milk", "ca phe sua da", "ca-pha-sua-da"],
    category: "Đồ uống", state: "processed", basis: "100ml pha", edibleNote: "Cà phê phin + sữa đặc + đá pha loãng.",
    nutrients: { energyKcal: 52, proteinG: 1.5, carbG: 8.5, fatG: 1.5, sugarG: 8.5, calciumMg: 40, sodiumMg: 25, potassiumMg: 70 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; 1 ly ~200ml đá."
  },
  {
    id: "sinh-to-bo", slug: "sinh-to-bo", name: "Sinh tố bơ", aliases: ["avocado smoothie"],
    category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Sinh tố bơ sữa đặc đường.",
    nutrients: { energyKcal: 90, proteinG: 1.5, carbG: 12.0, fatG: 4.5, sugarG: 10.0, calciumMg: 35, potassiumMg: 120 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-cam", slug: "nuoc-cam", name: "Nước cam", aliases: ["orange juice"],
    category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Nước cam tươi vắt không đường.",
    nutrients: { energyKcal: 45, proteinG: 0.7, carbG: 10.4, fatG: 0.2, sugarG: 8.0, calciumMg: 11, potassiumMg: 200, vitaminCMg: 50 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-chanh", slug: "nuoc-chanh", name: "Nước chanh", aliases: ["lemonade"],
    category: "Đồ uống", state: "processed", basis: "100ml pha loãng", edibleNote: "Chanh tươi pha nước đường ước tính 10%.",
    nutrients: { energyKcal: 35, proteinG: 0.1, carbG: 8.0, fatG: 0, sugarG: 7.0, vitaminCMg: 13 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "tra-da", slug: "tra-da", name: "Trà đá", aliases: ["iced tea unsweetened"],
    category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Trà xanh/trà đen pha loãng không đường.",
    nutrients: { energyKcal: 1, proteinG: 0, carbG: 0.3, fatG: 0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-suoi", slug: "nuoc-suoi", name: "Nước suối", aliases: ["water"],
    category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Nước lọc.",
    nutrients: { energyKcal: 0, proteinG: 0, carbG: 0, fatG: 0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "nuoc-ngot-coca", slug: "nuoc-ngot-coca", name: "Nước ngọt có ga", aliases: ["coca cola", "soda", "nuoc ngot"],
    category: "Đồ uống", state: "processed", basis: "100ml", edibleNote: "Nước ngọt có ga đường trung bình.",
    nutrients: { energyKcal: 42, proteinG: 0, carbG: 10.6, fatG: 0, sugarG: 10.6, sodiumMg: 5 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },

  // ── BÁNH KẸO ──
  {
    id: "banh-quy", slug: "banh-quy", name: "Bánh quy bơ", aliases: ["butter cookie", "shortbread"],
    category: "Bánh kẹo", state: "processed", basis: "100g", edibleNote: "Bánh quy bơ thập cẩm.",
    nutrients: { energyKcal: 500, proteinG: 5.0, carbG: 65.0, fatG: 24.0, sugarG: 25.0, saturatedFatG: 14.0, sodiumMg: 350, calciumMg: 30 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "banh-mi-ngot", slug: "banh-mi-ngot", name: "Bánh mì ngọt", aliases: ["sweet bread", "banh mi ngot"],
    category: "Tinh bột", state: "processed", basis: "100g", edibleNote: "Bánh mì ngọt kiểu Việt (pate chaud, bánh bao).",
    nutrients: { energyKcal: 330, proteinG: 8.0, carbG: 55.0, fatG: 9.0, sugarG: 15.0, sodiumMg: 350, ironMg: 2.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "banh-trung-thu", slug: "banh-trung-thu", name: "Bánh trung thu", aliases: ["mooncake"],
    category: "Bánh kẹo", state: "processed", basis: "100g", edibleNote: "Bánh trung thu nhân thập cẩm.",
    nutrients: { energyKcal: 450, proteinG: 8.0, carbG: 55.0, fatG: 22.0, sugarG: 30.0, sodiumMg: 200, ironMg: 2.0 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "keo-lac", slug: "keo-lac", name: "Kẹo lạc", aliases: ["kẹo đậu phộng", "keo dau phong", "peanut candy"],
    category: "Bánh kẹo", state: "processed", basis: "100g", edibleNote: "Kẹo lạc/đậu phộng truyền thống.",
    nutrients: { energyKcal: 450, proteinG: 10.0, carbG: 55.0, fatG: 22.0, sugarG: 40.0, sodiumMg: 20 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "banh-phong-tom", slug: "banh-phong-tom", name: "Bánh phồng tôm", aliases: ["shrimp cracker"],
    category: "Bánh kẹo", state: "processed", basis: "100g", edibleNote: "Bánh phồng tôm chiên.",
    nutrients: { energyKcal: 480, proteinG: 4.0, carbG: 55.0, fatG: 26.0, sodiumMg: 700, calciumMg: 60 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "banh-dau-xanh", slug: "banh-dau-xanh", name: "Bánh đậu xanh", aliases: ["mung bean cake"],
    category: "Bánh kẹo", state: "processed", basis: "100g", edibleNote: "Bánh đậu xanh Hải Dương.",
    nutrients: { energyKcal: 380, proteinG: 12.0, carbG: 60.0, fatG: 10.0, sugarG: 35.0, sodiumMg: 50, potassiumMg: 400 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  {
    id: "banh-trang", slug: "banh-trang", name: "Bánh tráng", aliases: ["rice paper"],
    category: "Tinh bột", state: "processed", basis: "100g khô", edibleNote: "Bánh tráng khô (dùng cuốn/ nướng).",
    nutrients: { energyKcal: 340, proteinG: 5.0, carbG: 76.0, fatG: 0.6, fiberG: 1.0, sodiumMg: 300, calciumMg: 50 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
  // ── BỔ SUNG THÊM (Phase E+) ──
  {
    id: "oi", slug: "oi", name: "Ổi", aliases: ["guava", "oi"],
    category: "Trái cây", state: "raw", basis: "100g", edibleNote: "Ổi chín, ăn cả vỏ.",
    nutrients: { energyKcal: 68, proteinG: 2.6, carbG: 14.3, fatG: 0.9, fiberG: 5.4, calciumMg: 18, ironMg: 0.3, sodiumMg: 2, potassiumMg: 417, vitaminCMg: 228, glycemicIndex: 31 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP. Ổi rất giàu vitamin C."
  },
  {
    id: "nam", slug: "nam", name: "Nấm (hỗn hợp)", aliases: ["mushroom", "nam các loại"],
    category: "Rau củ", state: "raw", basis: "100g", edibleNote: "Nấm tươi các loại.",
    tags: ["vegan", "gluten-free", "low-fat", "low-calorie"],
    nutrients: { energyKcal: 22, proteinG: 3.1, carbG: 3.3, fatG: 0.3, fiberG: 1.0, sodiumMg: 5, potassiumMg: 318, phosphorusMg: 86 },
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP."
  },
];
