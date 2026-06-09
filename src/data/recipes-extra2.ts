import type { Recipe } from "./nutrition";

export const extraRecipes2: Recipe[] = [
  {
    id: "banh-duc-noi-tuong", slug: "banh-duc-noi-tuong", name: "Bánh đúc nóng (nồi tường)",
    aliases: ["banh duc nong"],
    servingName: "1 bát", servingWeightG: 280,
    tags: ["vietnamese"],
    portionNote: "Bánh đúc nóng ăn với thịt băm, tôm chấy, nước tương/nấm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "banh-duc", amountG: 180, note: "Bánh đúc" },
      { foodId: "thit-heo-xay", amountG: 30, note: "Thịt băm" },
      { foodId: "tom-kho", amountG: 8, note: "Tôm khô/ruốc" },
      { foodId: "dau-an", amountG: 5, note: "Dầu/hành" },
      { foodId: "tuong-den", amountG: 6, note: "Tương" }
    ]
  },
  {
    id: "banh-can-nuong", slug: "banh-can-nuong", name: "Bánh căn trứng cút",
    aliases: ["banh can trung cut"],
    servingName: "5 cái", servingWeightG: 200,
    tags: ["central-vietnam"],
    portionNote: "5 cái bánh căn trứng cút, chan nước mắm chua ngọt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "banh-can", amountG: 150, note: "Bánh căn" },
      { foodId: "trung-cun", amountG: 40, note: "Trứng cút 4-5 quả" },
      { foodId: "dau-an", amountG: 5, note: "Mỡ/dầu nướng" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm chấm" }
    ]
  },
  {
    id: "vit-nuong-chao", slug: "vit-nuong-chao", name: "Vịt quay Bắc Kinh kiểu Việt",
    aliases: ["vit quay nuong", "vit quay"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "high-protein"],
    portionNote: "Vịt quay chao dầu, thường ướp ngũ vị.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; da vịt nhiều chất béo.",
    items: [
      { foodId: "thit-vit", amountG: 140, note: "Thịt vịt" },
      { foodId: "chao", amountG: 8, note: "Chao ướp" },
      { foodId: "mat-ong", amountG: 10, note: "Mật ong phết" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" },
      { foodId: "hat-tieu", amountG: 1, note: "Ngũ vị hương" }
    ]
  },
  {
    id: "ech-xao-sa-ot-phan", slug: "ech-xao-sa-ot-phan", name: "Ếch xào sả ớt (phần nhỏ)",
    aliases: ["ech xao sa ot phan"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "high-protein"],
    portionNote: "Đĩa ếch xào sả ớt với lạc rang.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; thịt ếch proxy dùng thịt gà.",
    items: [
      { foodId: "thit-ga-rui", amountG: 120, note: "Proxy thịt ếch" },
      { foodId: "sa", amountG: 10, note: "Sả băm" },
      { foodId: "ot-tuoi", amountG: 5, note: "Ớt tươi" },
      { foodId: "dau-an", amountG: 8, note: "Dầu xào" },
      { foodId: "nuoc-mam", amountG: 8, note: "Gia vị" },
      { foodId: "toi", amountG: 5, note: "Tỏi" }
    ]
  },
  {
    id: "ca-pheo-rim-man", slug: "ca-pheo-rim-man", name: "Cá phèo rim mặn",
    aliases: ["ca pheo rim"],
    servingName: "1 phần", servingWeightG: 150,
    tags: ["southern-bietnam", "low-carb"],
    portionNote: "Cá phèo rim nước mắm và tiêu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ca-pheo", amountG: 120, note: "Cá phèo" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" },
      { foodId: "hat-tieu", amountG: 1, note: "Tiêu" },
      { foodId: "dau-an", amountG: 5, note: "Dầu rim" }
    ]
  },
  {
    id: "ngheu-hap-sa-phan", slug: "ngheu-hap-sa-phan", name: "Nghêu hấp sả (phần nhỏ)",
    aliases: ["ngheu hap sa phan"],
    servingName: "1 đĩa", servingWeightG: 350,
    tags: ["vietnamese", "seafood"],
    portionNote: "Nghêu hấp sả, thêm lá chanh và ớt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nghêu chưa có foodId riêng, dùng proxy tôm gán weight.",
    items: [
      { foodId: "ca-ngat", amountG: 300, note: "Proxy nghêu ~50% thịt" },
      { foodId: "sa", amountG: 10, note: "Sả đập dập" },
      { foodId: "rau-ram", amountG: 8, note: "Lá chanh xé" }
    ]
  },
  {
    id: "ca-tam-hap-xi-dau", slug: "ca-tam-hap-xi-dau", name: "Cá tầm hấp xì dầu",
    aliases: ["ca tam hap xi dau"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "high-protein"],
    portionNote: "Cá tầm hấp xì dầu kiểu miền Bắc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ca-tam", amountG: 150, note: "Cá tầm" },
      { foodId: "hanh-la", amountG: 10, note: "Hành lá" },
      { foodId: "gung-tuoi", amountG: 5, note: "Gừng thái" },
      { foodId: "dau-an", amountG: 5, note: "Dầu hào" },
      { foodId: "duong-trang", amountG: 3, note: "Đường" }
    ]
  },
  {
    id: "canh-atiso-bong-he", slug: "canh-atiso-bong-he", name: "Canh atisô bông hẹ",
    aliases: ["canh atiso"],
    servingName: "1 tô", servingWeightG: 350,
    tags: ["vietnamese", "low-calorie"],
    portionNote: "Atisô nấu với bông hẹ, tôm thường gặp Đà Lạt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "atiso", amountG: 80, note: "Atisô cắt miếng" },
      { foodId: "bong-he", amountG: 30, note: "Bông hẹ" },
      { foodId: "tom-tuoi", amountG: 20, note: "Tôm nõn" },
      { foodId: "nuoc-dung-bo", amountG: 200, note: "Nước dùng" },
      { foodId: "dau-an", amountG: 3, note: "Dầu" }
    ]
  },
  {
    id: "thit-heo-quay-gion", slug: "thit-heo-quay-gion", name: "Thịt heo quay da giòn",
    aliases: ["heo quay"],
    servingName: "1 phần", servingWeightG: 120,
    tags: ["vietnamese", "high-fat"],
    portionNote: "Thịt heo quay da giòn, thường ăn kèm bánh hỏi/cơm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; phần da mỡ nhiều hơn phần nạc.",
    items: [
      { foodId: "thit-heo-quay", amountG: 100, note: "Thịt heo quay" },
      { foodId: "bun-tuoi", amountG: 20, note: "Ăn kèm bún" }
    ]
  },
  {
    id: "bun-thit-heo-quay", slug: "bun-thit-heo-quay", name: "Bún thịt heo quay",
    aliases: ["bun heo quay"],
    servingName: "1 tô", servingWeightG: 550,
    tags: ["vietnamese"],
    portionNote: "Bún với thịt heo quay, rau sống, nước mắm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún" },
      { foodId: "thit-heo-quay", amountG: 90, note: "Thịt heo quay thái" },
      { foodId: "xa-lach", amountG: 40, note: "Rau sống" },
      { foodId: "dua-leo", amountG: 30, note: "Dưa leo" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" }
    ]
  },
  {
    id: "ca-kho-thom-kieu-trung", slug: "ca-kho-thom-kieu-trung", name: "Cá kho thơm kiểu Trung Bộ",
    aliases: ["ca kho thom"],
    servingName: "1 phần", servingWeightG: 180,
    tags: ["vietnamese", "low-carb"],
    portionNote: "Cá tươi kho với thơm/dứa, nước mắm và ớt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; cá lóc proxy cho kho thơm.",
    items: [
      { foodId: "ca-loc", amountG: 130, note: "Cá" },
      { foodId: "khom", amountG: 30, note: "Thơm cắt miếng" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" },
      { foodId: "toi", amountG: 5, note: "Tỏi" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" }
    ]
  },
  {
    id: "xoi-ma-pha", slug: "xoi-ma-pha", name: "Xôi mặn (xôi mỡ hành)",
    aliases: ["xoi man", "xoi mo hanh"],
    servingName: "1 đĩa", servingWeightG: 240,
    tags: ["vietnamese"],
    portionNote: "Xôi nếp/gao nếp với mỡ hành, ruốc, lạp xưởng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "gao-nep", amountG: 100, note: "Xôi nếp" },
      { foodId: "thit-ga-rui", amountG: 30, note: "Ruốc gà" },
      { foodId: "lap-xuong", amountG: 25, note: "Lạp xưởng chiên" },
      { foodId: "hanh-la", amountG: 10, note: "Mỡ hành" }
    ]
  },
  {
    id: "banh-mi-thit-nguoi", slug: "banh-mi-thit-nguoi", name: "Bánh mì thịt nguội",
    aliases: ["banh mi thit nguoi", "banh mi jambon"],
    servingName: "1 ổ", servingWeightG: 220,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh mì ổ mềm, jambon, xá xíu, dồi, patê, rau sống.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; topping đa dạng.",
    items: [
      { foodId: "banh-mi", amountG: 75, note: "Bánh mì" },
      { foodId: "thit-nguoi", amountG: 30, note: "Thịt nguội" },
      { foodId: "cha-lua", amountG: 25, note: "Chả lụa" },
      { foodId: "thit-ga-rui", amountG: 20, note: "Xá xíu" },
      { foodId: "dua-leo", amountG: 30, note: "Đồ chua" },
      { foodId: "xa-lach", amountG: 20, note: "Rau sống" },
      { foodId: "sot-mayonnaise", amountG: 8, note: "Mayonnaise" }
    ]
  },
  {
    id: "banh-mi-ga-xe", slug: "banh-mi-ga-xe", name: "Bánh mì gà xé",
    aliases: ["banh mi ga xe"],
    servingName: "1 ổ", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh mì gà xé phay kiểu miền Nam.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "banh-mi", amountG: 75, note: "Bánh mì" },
      { foodId: "thit-ga-rui", amountG: 50, note: "Thịt gà xé" },
      { foodId: "xa-lach", amountG: 30, note: "Rau răm/ngò" },
      { foodId: "dua-leo", amountG: 20, note: "Đồ chua" },
      { foodId: "sot-mayonnaise", amountG: 10, note: "Sốt" }
    ]
  },
  {
    id: "bo-bit-tet-tai", slug: "bo-bit-tet-tai", name: "Bò bít tết",
    aliases: ["bo bit tet", "beef steak"],
    servingName: "1 dĩa", servingWeightG: 350,
    tags: ["high-protein", "vietnamese"],
    portionNote: "Bò bít tết kiểu Việt với khoai tây chiên, rau, trứng ốp la.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; thăn bò proxy cho món bít tết.",
    items: [
      { foodId: "thit-bo-nac", amountG: 100, note: "Thịt bò thăn" },
      { foodId: "khoai-tay", amountG: 100, note: "Khoai tây chiên" },
      { foodId: "trung-ga", amountG: 50, note: "Trứng ốp la" },
      { foodId: "xa-lach", amountG: 30, note: "Xà lách" },
      { foodId: "bo-giay", amountG: 30, note: "Bơ" },
      { foodId: "muoi-tieu", amountG: 2, note: "Muối tiêu" }
    ]
  },
  {
    id: "canh-ca-pheo-chua", slug: "canh-ca-pheo-chua", name: "Canh chua cá phèo",
    aliases: ["canh chua ca pheo"],
    servingName: "1 tô", servingWeightG: 350,
    tags: ["southern-vietnam", "low-calorie"],
    portionNote: "Canh chua cá phèo với cần nước, giá, cà chua.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ca-pheo", amountG: 90, note: "Cá phèo" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "can-nuoc", amountG: 40, note: "Cần nước" },
      { foodId: "gia-do", amountG: 30, note: "Giá" },
      { foodId: "rau-ngo", amountG: 10, note: "Ngò gai/ngò ôm" },
      { foodId: "nuoc-mam", amountG: 6, note: "Nước mắm" }
    ]
  },
  {
    id: "cha-lon-ngai-cuu", slug: "cha-lon-ngai-cuu", name: "Cháo lòng ngải cứu",
    aliases: ["chao long ngai cuu"],
    servingName: "1 tô", servingWeightG: 380,
    tags: ["vietnamese"],
    portionNote: "Cháo lòng với ngải cứu và huyết heo.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; ngải cứu giúp món cháo dễ ăn hơn.",
    items: [
      { foodId: "com-trang", amountG: 80, note: "Gạo nấu cháo" },
      { foodId: "doi-truong", amountG: 40, note: "Dồi trường" },
      { foodId: "ngai-cuu", amountG: 20, note: "Ngải cứu thái nhỏ" },
      { foodId: "thit-heo-nac", amountG: 30, note: "Thịt heo băm" },
      { foodId: "dau-an", amountG: 5, note: "Hành phi" },
      { foodId: "nuoc-mam", amountG: 6, note: "Gia vị" }
    ]
  },
  {
    id: "canh-ca-bong-doc-mung", slug: "canh-ca-bong-doc-mung", name: "Canh cá bống dọc mùng",
    aliases: ["canh ca bong doc mung"],
    servingName: "1 tô", servingWeightG: 350,
    tags: ["vietnamese", "low-calorie"],
    portionNote: "Canh cá bống dọc mùng chua nhẹ kiểu Bắc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ca-bong-song-tra", amountG: 70, note: "Cá bống proxy" },
      { foodId: "doc-mung", amountG: 60, note: "Dọc mùng bỏ vỏ" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "rau-ram", amountG: 8, note: "Hành thì là" }
    ]
  },
  {
    id: "cha-ga-ngai-cuu", slug: "cha-ga-ngai-cuu", name: "Chả gà nấu ngải cứu",
    aliases: ["cha ga ngai cuu"],
    servingName: "1 tô", servingWeightG: 350,
    tags: ["vietnamese"],
    portionNote: "Chả gà viên nấu cùng ngải cứu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "thit-ga-xay", amountG: 60, note: "Gà xay viên" },
      { foodId: "ngai-cuu", amountG: 25, note: "Ngải cứu" },
      { foodId: "com-trang", amountG: 60, note: "Gạo nấu cháo" },
      { foodId: "nuoc-dung-bo", amountG: 200, note: "Nước dùng" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "mang-bo-xao-toi", slug: "mang-bo-xao-toi", name: "Măng bò xào tỏi",
    aliases: ["mang bo xao toi"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "low-fat"],
    portionNote: "Măng bò bên trong, xào tỏi.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; măng chưa có foodId dùng bắp cải proxy.",
    items: [
      { foodId: "bap-cai", amountG: 180, note: "Măng bò proxy" },
      { foodId: "toi", amountG: 8, note: "Tỏi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu xào" }
    ]
  },
  {
    id: "rau-kho-qua-nhoi-thit", slug: "rau-kho-qua-nhoi-thit", name: "Khổ qua nhồi thịt",
    aliases: ["kho qua nhoi thit", "mướp đắng nhồi thịt"],
    servingName: "3 trái", servingWeightG: 220,
    tags: ["vietnamese", "low-calorie"],
    portionNote: "Khổ qua nhồi thịt heo băm nấu canh.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "kho-qua", amountG: 120, note: "Khổ qua" },
      { foodId: "thit-heo-xay", amountG: 70, note: "Thịt heo xay" },
      { foodId: "dau-an", amountG: 3, note: "Dầu" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "rau-muong-luoc-cham-kho-quet", slug: "rau-muong-luoc-cham-kho-quet", name: "Rau muống luộc chấm kho quẹt",
    aliases: ["rau muong luoc"],
    servingName: "1 đĩa", servingWeightG: 250,
    tags: ["vietnamese", "low-calorie"],
    portionNote: "Rau muống luộc chấm kho quẹt (tép dừa).",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; kho quẹt có thể proxy.",
    items: [
      { foodId: "rau-muong", amountG: 180, note: "Rau muống" },
      { foodId: "tep-kho", amountG: 15, note: "Tép khô" },
      { foodId: "thit-ba-roi", amountG: 15, note: "Thịt ba chỉ thái nhỏ" },
      { foodId: "duong-trang", amountG: 5, note: "Đường thắng" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "salad-rong-bien-tom", slug: "salad-rong-bien-tom", name: "Salad rong biển tôm",
    aliases: ["salad rong bien"],
    servingName: "1 đĩa", servingWeightG: 180,
    tags: ["vietnamese", "low-calorie"],
    portionNote: "Rong biển trộn tôm luộc, dầu mè.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; rong biển khô ngâm nở.",
    items: [
      { foodId: "rong-bien", amountG: 15, note: "Rong biển khô ngâm" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm luộc" },
      { foodId: "dau-me", amountG: 5, note: "Dầu mè" },
      { foodId: "xa-lach", amountG: 50, note: "Rau sống" },
      { foodId: "duong-trang", amountG: 3, note: "Đường" }
    ]
  },
  {
    id: "ca-na-cham-muoi-ot", slug: "ca-na-cham-muoi-ot", name: "Cà na chấm muối ớt",
    aliases: ["ca na muoi ot"],
    servingName: "100g", servingWeightG: 100,
    tags: ["vietnamese", "snack"],
    portionNote: "Cà na tươi chấm muối ớt, phổ biến miền Tây.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; lượng muối tiêu thụ nhỏ.",
    items: [
      { foodId: "ca-na-trai", amountG: 95, note: "Cà na" },
      { foodId: "muoi-tieu", amountG: 5, note: "Muối ớt" }
    ]
  },
  {
    id: "thit-ba-chi-kho-tau", slug: "thit-ba-chi-kho-tau", name: "Thịt ba chỉ kho tàu",
    aliases: ["thit kho tau", "thịt ba rọi kho tàu"],
    servingName: "1 phần", servingWeightG: 180,
    tags: ["vietnamese", "tet-food"],
    portionNote: "Ba rọi kho nước dừa trứng cút, ăn với dưa món.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "thit-ba-roi", amountG: 110, note: "Thịt ba rọi kho" },
      { foodId: "trung-cun", amountG: 20, note: "Trứng cút 3 quả" },
      { foodId: "nuoc-dua", amountG: 30, note: "Nước dừa" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" }
    ]
  },
  {
    id: "banh-buoi-sen", slug: "banh-buoi-sen", name: "Bánh bò nướng",
    aliases: ["banh bo nuong"],
    servingName: "1 phần", servingWeightG: 100,
    tags: ["vietnamese", "dessert"],
    portionNote: "Một khoanh bánh bò nướng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "banh-bo", amountG: 100, note: "Bánh bò" }
    ]
  }
];
