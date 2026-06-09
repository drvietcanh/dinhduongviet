import type { Recipe } from "./nutrition";

export const extraRecipes: Recipe[] = [
  {
    id: "cha-o", slug: "cha-o", name: "Cháo ếch", aliases: ["chao ech"],
    servingName: "1 tô", servingWeightG: 400,
    tags: ["vietnamese"],
    portionNote: "Cháo ếch rau răm thông dụng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "com-trang", amountG: 100, note: "Cháo gạo" },
      { foodId: "thit-ech", amountG: 80, note: "Thịt ếch xào" },
      { foodId: "dau-an", amountG: 5, note: "Hành phi dầu" },
      { foodId: "rau-thom-hanh", amountG: 15, note: "Rau răm hành" }
    ]
  },
  {
    id: "cha-ga-chien", slug: "cha-ga-chien", name: "Chả gà chiên", aliases: ["chicken patty"],
    servingName: "1 miếng ~80g", servingWeightG: 80,
    tags: ["high-protein", "fried-food"],
    portionNote: "Chả gà xay chiên dầu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "thit-ga-rui", amountG: 60, note: "Thịt gà xay" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" },
      { foodId: "trung-ga", amountG: 10, note: "Trứng kết dính" }
    ]
  },
  {
    id: "ca-kho-rieu", slug: "ca-kho-rieu", name: "Cá kho riêu", aliases: ["ca kho rieu"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["gluten-free"],
    portionNote: "Cá trắm/lóc kho riêu cà chua kiểu Việt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ca-chep", amountG: 140, note: "Cá" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "nuoc-mam", amountG: 12, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  {
    id: "hutieu-bo-kho", slug: "hutieu-bo-kho", name: "Hủ tiếu bò kho", aliases: ["bò kho", "bo kho"],
    servingName: "1 tô", servingWeightG: 600,
    tags: ["vietnamese"],
    portionNote: "Bò kho ăn với bánh mì hoặc hủ tiếu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "banh-pho-chin", amountG: 180, note: "Hủ tiếu" },
      { foodId: "thit-bo-nac", amountG: 80, note: "Thịt bò" },
      { foodId: "ca-rot", amountG: 40, note: "Cà rốt" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" }
    ]
  },
  {
    id: "banh-canh", slug: "banh-canh", name: "Bánh canh", aliases: ["banh canh cua", "bánh canh giò"],
    servingName: "1 tô", servingWeightG: 550,
    tags: ["gluten-free", "vietnamese"],
    portionNote: "Bánh canh bột lọc nấu giò/cua.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bot-loc", amountG: 80, note: "Sợi bánh canh" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Giò/thịt" },
      { foodId: "nuoc-dung-bo", amountG: 380, note: "Nước dùng" }
    ]
  },
  {
    id: "bot-chien", slug: "bot-chien", name: "Bột chiên", aliases: ["bot chien"],
    servingName: "1 đĩa thường", servingWeightG: 220,
    tags: ["street-food"],
    portionNote: "Bột chiên trứng thường gặp Sài Gòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 100, note: "Bột gạo đã hấp" },
      { foodId: "trung-ga", amountG: 30, note: "Trứng" },
      { foodId: "dau-an", amountG: 20, note: "Dầu chiên" },
      { foodId: "dua-leo", amountG: 30, note: "Dưa leo" }
    ]
  },
  {
    id: "banh-beo", slug: "banh-beo", name: "Bánh bèo", aliases: ["banh beo hue"],
    servingName: "10 cái", servingWeightG: 200,
    tags: ["vietnamese", "central-vietnam"],
    portionNote: "Bánh bèo Huế chén nhỏ, mỗi chén ~20g.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 80, note: "Bột gạo" },
      { foodId: "tom-kho", amountG: 10, note: "Tôm khô" },
      { foodId: "dau-an", amountG: 8, note: "Hành phi" },
      { foodId: "me-vung", amountG: 3, note: "Mè rang" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "banh-cuon", slug: "banh-cuon", name: "Bánh cuốn", aliases: ["banh cuon"],
    servingName: "1 đĩa", servingWeightG: 220,
    tags: ["vietnamese"],
    portionNote: "Bánh cuốn nhân thịt mộc nhĩ, nước chấm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 80, note: "Bánh ướt" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Nhân thịt" },
      { foodId: "moc-nhi", amountG: 5, note: "Mộc nhĩ" },
      { foodId: "gia-do", amountG: 30, note: "Giá đỗ" },
      { foodId: "dua-leo", amountG: 20, note: "Dưa leo" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước chấm" }
    ]
  },
  {
    id: "banh-khot", slug: "banh-khot", name: "Bánh khọt", aliases: ["banh khot"],
    servingName: "10 cái", servingWeightG: 200,
    tags: ["gluten-free", "vietnamese"],
    portionNote: "Bánh khọt Vũng Tàu nhân tôm, nước chấm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 70, note: "Bột gạo" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" },
      { foodId: "gia-do", amountG: 30, note: "Giá" },
      { foodId: "xa-lach", amountG: 20, note: "Xà lách" }
    ]
  },
  {
    id: "bun-moc", slug: "bun-moc", name: "Bún mọc", aliases: ["bun moc cha"],
    servingName: "1 tô", servingWeightG: 600,
    tags: ["gluten-free", "vietnamese"],
    portionNote: "Bún mọc (thịt viên nấm mọc) thường gặp Bắc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún" },
      { foodId: "thit-heo-nac", amountG: 60, note: "Thịt băm viên" },
      { foodId: "nam-huong", amountG: 5, note: "Nấm hương" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước dùng" }
    ]
  },
  {
    id: "bun-thang", slug: "bun-thang", name: "Bún thang", aliases: ["bun thang"],
    servingName: "1 tô", servingWeightG: 500,
    tags: ["gluten-free", "vietnamese"],
    portionNote: "Đặc sản Hà Nội nhiều nguyên liệu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bun-tuoi", amountG: 180, note: "Bún" },
      { foodId: "thit-ga-rui", amountG: 30, note: "Thịt gà xé" },
      { foodId: "thit-heo-nac", amountG: 20, note: "Thịt heo thái sợi" },
      { foodId: "trung-ga", amountG: 20, note: "Trứng tráng thái sợi" },
      { foodId: "nuoc-dung-bo", amountG: 230, note: "Nước dùng" }
    ]
  },
  {
    id: "chao-cua", slug: "chao-cua", name: "Cháo cua", aliases: ["chao cua dong"],
    servingName: "1 tô", servingWeightG: 380,
    tags: ["gluten-free", "high-calcium"],
    portionNote: "Cháo cua đồng với rau răm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "com-trang", amountG: 100, note: "Gạo nấu cháo" },
      { foodId: "cua-dong", amountG: 70, note: "Thịt cua đồng" },
      { foodId: "dau-an", amountG: 3, note: "Dầu/hành" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Rau răm, hành" }
    ]
  },
  {
    id: "suon-xao-chua-ngot", slug: "suon-xao-chua-ngot", name: "Sườn xào chua ngọt", aliases: ["suon chua ngot"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese"],
    portionNote: "Sườn non chiên xào sốt chua ngọt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "suon-heo-nuong", amountG: 150, note: "Sườn non chiên" },
      { foodId: "ca-chua", amountG: 30, note: "Sốt cà chua" },
      { foodId: "duong-trang", amountG: 10, note: "Đường" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" }
    ]
  },
  {
    id: "ca-vien-chien", slug: "ca-vien-chien", name: "Cá viên chiên", aliases: ["fish ball"],
    servingName: "6 viên ~100g", servingWeightG: 100,
    tags: ["street-food", "fried-food"],
    portionNote: "Cá viên chiên bột phổ biến ở chợ và trường học.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ca-thu", amountG: 60, note: "Cá thát lát/basa xay" },
      { foodId: "bot-mi-da", amountG: 15, note: "Bột áo" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" }
    ]
  },
  {
    id: "ram-cuon-cai-thao", slug: "ram-cuon-cai-thao", name: "Răm cuốn cải thảo", aliases: ["thịt cuốn cải thảo"],
    servingName: "4 cuốn", servingWeightG: 200,
    tags: ["vietnamese"],
    portionNote: "Thịt heo luộc cuốn cải thảo chấm nước mắm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "bap-cai-thao", amountG: 80, note: "Lá cải thảo" },
      { foodId: "thit-heo-nac", amountG: 80, note: "Thịt heo luộc thái mỏng" },
      { foodId: "bun-tuoi", amountG: 30, note: "Bún nhỏ" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" }
    ]
  },
  {
    id: "cha-vien", slug: "cha-vien", name: "Chả viên", aliases: ["meatball"],
    servingName: "6 viên ~120g", servingWeightG: 120,
    tags: ["high-protein"],
    portionNote: "Chả viên chiên/mọc thường nấu canh hoặc ăn liền.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "thit-heo-nac", amountG: 100, note: "Thịt heo xay" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị" }
    ]
  },
  {
    id: "trung-lon", slug: "trung-lon", name: "Trứng lộn", aliases: ["hot vit lon"],
    servingName: "1 quả", servingWeightG: 70,
    tags: ["street-food"],
    portionNote: "Trứng vịt lộn luộc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; rất giàu đạm và sắt.",
    items: [
      { foodId: "trung-vit", amountG: 65, note: "Trứng vịt lộn" },
      { foodId: "rau-thom-hanh", amountG: 5, note: "Rau răm muối tiêu" }
    ]
  },
  {
    id: "che-thai", slug: "che-thai", name: "Chè Thái", aliases: ["che thai"],
    servingName: "1 ly nhỏ", servingWeightG: 250,
    tags: ["dessert", "drink"],
    portionNote: "Chè thái đủ loại hạt, trái cây và sữa dừa, ước tính 1 ly.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; lượng đường rất cao.",
    items: [
      { foodId: "dua", amountG: 20, note: "Cơm dừa" },
      { foodId: "hat-sen-tuoi", amountG: 20, note: "Hạt sen" },
      { foodId: "khom", amountG: 30, note: "Khóm/dứa" },
      { foodId: "mi-goi", amountG: 15, note: "Thạch đen thái sợi" },
      { foodId: "sua-dac", amountG: 25, note: "Sữa đặc" },
      { foodId: "duong-trang", amountG: 20, note: "Đường" }
    ]
  },
  {
    id: "rau-muong-xao-toi", slug: "rau-muong-xao-toi", name: "Rau muống xào tỏi", aliases: ["rau muong xao toi"],
    servingName: "1 đĩa", servingWeightG: 180,
    tags: ["vegan", "gluten-free", "low-calorie"],
    portionNote: "Rau muống xào tỏi phổ biến cả ba miền.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "rau-muong", amountG: 150, note: "Rau muống nhặt rửa" },
      { foodId: "toi", amountG: 8, note: "Tỏi" },
      { foodId: "dau-an", amountG: 8, note: "Dầu xào" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "lu-luoc", slug: "lu-luoc", name: "Bắp luộc", aliases: ["ngô luộc", "ngo luoc"],
    servingName: "1 trái", servingWeightG: 150,
    tags: ["vegan", "gluten-free", "low-fat"],
    portionNote: "Bắp nếp hoặc bắp ngọt luộc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "ngu-sac", amountG: 150, note: "Ngô/bắp nếp" }
    ]
  },
  {
    id: "khoai-lang-luoc", slug: "khoai-lang-luoc", name: "Khoai lang luộc", aliases: ["khoai lang luoc"],
    servingName: "1 củ ~130g", servingWeightG: 130,
    tags: ["vegan", "gluten-free", "low-fat", "high-fiber"],
    portionNote: "Khoai lang luộc ăn vỏ/không vỏ.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "khoai-lang", amountG: 130, note: "Khoai lang" }
    ]
  },
  {
    id: "lap-xuong-chien", slug: "lap-xuong-chien", name: "Lạp xưởng chiên", aliases: ["lap xuong chien"],
    servingName: "2 cây ~80g", servingWeightG: 80,
    tags: ["high-fat", "high-sodium"],
    portionNote: "Lạp xưởng xắt lát chiên ăn cơm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP.",
    items: [
      { foodId: "lap-xuong", amountG: 70, note: "Lạp xưởng" },
      { foodId: "dau-an", amountG: 8, note: "Dầu chiên" }
    ]
  },
  {
    id: "banh-da-cua-hai-phong", slug: "banh-da-cua-hai-phong", name: "Bánh đa cua Hải Phòng", aliases: ["banh da cua", "bánh đa cua"],
    servingName: "1 tô", servingWeightG: 620,
    tags: ["northern-vietnam", "vietnamese-soup"],
    portionNote: "Tô mẫu gồm bánh đa đỏ, cua bể/cua đồng, rau và nước dùng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; topping chả lá lốt/chả cá làm thay đổi năng lượng và natri.",
    items: [
      { foodId: "banh-da-cua-kho", amountG: 75, note: "Bánh đa khô" },
      { foodId: "cua-be-hai-phong", amountG: 70, note: "Thịt cua" },
      { foodId: "rau-muong", amountG: 60, note: "Rau ăn kèm" },
      { foodId: "nuoc-dung-bo", amountG: 380, note: "Nước dùng" },
      { foodId: "dau-an", amountG: 8, note: "Dầu điều/hành phi" }
    ]
  },
  {
    id: "cha-ruoi", slug: "cha-ruoi", name: "Chả rươi", aliases: ["cha ruoi", "rươi rán trứng"],
    servingName: "1 miếng", servingWeightG: 130,
    tags: ["northern-vietnam", "high-protein"],
    portionNote: "Một miếng chả rươi với trứng, thịt băm và vỏ quýt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; lượng dầu rán quyết định năng lượng.",
    items: [
      { foodId: "ruoi", amountG: 70, note: "Rươi" },
      { foodId: "trung-ga", amountG: 35, note: "Trứng" },
      { foodId: "thit-heo-nac", amountG: 25, note: "Thịt băm" },
      { foodId: "dau-an", amountG: 10, note: "Dầu rán" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Hành thì là" }
    ]
  },
  {
    id: "xoi-com", slug: "xoi-com", name: "Xôi cốm", aliases: ["xoi com", "xôi cốm Hà Nội"],
    servingName: "1 gói nhỏ", servingWeightG: 180,
    tags: ["northern-vietnam", "dessert"],
    portionNote: "Xôi cốm với đậu xanh, dừa và đường.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; đường và dừa làm năng lượng tăng.",
    items: [
      { foodId: "com-lang-vong", amountG: 80, note: "Cốm" },
      { foodId: "dau-xanh", amountG: 40, note: "Đậu xanh" },
      { foodId: "com-dua-nao", amountG: 20, note: "Dừa nạo" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "mien-luon-nghe-an", slug: "mien-luon-nghe-an", name: "Miến lươn Nghệ An", aliases: ["mien luon", "miến lươn"],
    servingName: "1 tô", servingWeightG: 560,
    tags: ["central-vietnam", "high-protein"],
    portionNote: "Miến lươn nước, dùng miến dong và lươn xào nghệ.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; chưa tách riêng lươn nên dùng cá lóc làm proxy đạm.",
    items: [
      { foodId: "mien-dong-lang-so", amountG: 75, note: "Miến dong khô" },
      { foodId: "ca-loc", amountG: 90, note: "Proxy cho lươn" },
      { foodId: "nghe-tuoi", amountG: 5, note: "Nghệ" },
      { foodId: "dau-an", amountG: 8, note: "Dầu xào" },
      { foodId: "nuoc-dung-bo", amountG: 360, note: "Nước dùng" }
    ]
  },
  {
    id: "thit-trau-gac-bep-phan", slug: "thit-trau-gac-bep-phan", name: "Thịt trâu gác bếp", aliases: ["thit trau gac bep"],
    servingName: "1 phần nhỏ", servingWeightG: 60,
    tags: ["northern-vietnam", "high-protein", "high-sodium"],
    portionNote: "Một phần ăn chơi khoảng 60g.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; thực phẩm khô mặn, không phù hợp khẩu phần lớn cho THA/suy thận.",
    items: [
      { foodId: "thit-trau-gac-bep", amountG: 60, note: "Thịt trâu sấy" }
    ]
  },
  {
    id: "cha-muc-ha-long-phan", slug: "cha-muc-ha-long-phan", name: "Chả mực Hạ Long (phần)", aliases: ["cha muc ha long"],
    servingName: "3 miếng", servingWeightG: 120,
    tags: ["northern-vietnam", "seafood"],
    portionNote: "Ba miếng chả mực chiên ăn kèm xôi/bánh cuốn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; loại chiên lại sẽ nhiều chất béo hơn.",
    items: [
      { foodId: "cha-muc-ha-long", amountG: 120, note: "Chả mực" }
    ]
  },
  {
    id: "cao-lau-hoi-an", slug: "cao-lau-hoi-an", name: "Cao lầu Hội An", aliases: ["cao lau", "cao lầu"],
    servingName: "1 tô", servingWeightG: 430,
    tags: ["central-vietnam"],
    portionNote: "Cao lầu với sợi mì gạo, thịt heo, rau sống và ít nước xá xíu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nước sốt và tóp mỡ tạo sai số.",
    items: [
      { foodId: "banh-pho-chin", amountG: 180, note: "Sợi cao lầu proxy" },
      { foodId: "thit-heo-nac", amountG: 90, note: "Thịt xá xíu" },
      { foodId: "xa-lach", amountG: 50, note: "Rau sống" },
      { foodId: "dau-an", amountG: 8, note: "Dầu/tóp mỡ" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước sốt" }
    ]
  },
  {
    id: "bun-hen-hue", slug: "bun-hen-hue", name: "Bún hến Huế", aliases: ["bun hen", "bún hến"],
    servingName: "1 tô", servingWeightG: 300,
    tags: ["central-vietnam", "seafood"],
    portionNote: "Biến thể bún hến với rau sống, lạc và mắm ruốc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; dùng cua bể làm proxy cho thịt hến nếu chưa có hến riêng.",
    items: [
      { foodId: "bun-tuoi", amountG: 160, note: "Bún tươi" },
      { foodId: "cua-be-hai-phong", amountG: 45, note: "Proxy thịt hến" },
      { foodId: "lac-rang", amountG: 10, note: "Lạc rang" },
      { foodId: "mam-ruoc-hue", amountG: 5, note: "Mắm ruốc" },
      { foodId: "rau-thom-hanh", amountG: 30, note: "Rau thơm" }
    ]
  },
  {
    id: "nem-lui-hue", slug: "nem-lui-hue", name: "Nem lụi Huế", aliases: ["nem lui", "nem lụi"],
    servingName: "4 xiên", servingWeightG: 240,
    tags: ["central-vietnam", "high-protein"],
    portionNote: "Nem lụi cuốn bánh tráng, rau sống và chấm sốt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nước chấm đậu phộng có thể làm tăng năng lượng.",
    items: [
      { foodId: "nem-lui", amountG: 150, note: "Nem nướng" },
      { foodId: "banh-trang-dai-loc", amountG: 30, note: "Bánh tráng" },
      { foodId: "xa-lach", amountG: 40, note: "Rau sống" },
      { foodId: "lac-rang", amountG: 10, note: "Sốt lạc" }
    ]
  },
  {
    id: "banh-trang-cuon-thit-heo-da-nang", slug: "banh-trang-cuon-thit-heo-da-nang", name: "Bánh tráng cuốn thịt heo Đà Nẵng", aliases: ["banh trang cuon thit heo"],
    servingName: "1 phần", servingWeightG: 350,
    tags: ["central-vietnam"],
    portionNote: "Thịt heo luộc cuốn bánh tráng, rau sống và mắm nêm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; mắm nêm rất nhiều natri.",
    items: [
      { foodId: "thit-heo-nac", amountG: 100, note: "Thịt heo luộc" },
      { foodId: "banh-trang-dai-loc", amountG: 45, note: "Bánh tráng" },
      { foodId: "bun-tuoi", amountG: 60, note: "Bún" },
      { foodId: "xa-lach", amountG: 60, note: "Rau sống" },
      { foodId: "mam-nem", amountG: 12, note: "Mắm nêm" }
    ]
  },
  {
    id: "com-ga-tam-ky", slug: "com-ga-tam-ky", name: "Cơm gà Tam Kỳ", aliases: ["com ga tam ky"],
    servingName: "1 đĩa", servingWeightG: 420,
    tags: ["central-vietnam"],
    portionNote: "Cơm vàng nấu nước gà, thịt gà xé và rau răm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; da gà và dầu nghệ làm thay đổi chất béo.",
    items: [
      { foodId: "com-trang", amountG: 230, note: "Cơm" },
      { foodId: "thit-ga-dui", amountG: 90, note: "Gà xé" },
      { foodId: "rau-thom-hanh", amountG: 20, note: "Rau răm/hành" },
      { foodId: "dau-an", amountG: 8, note: "Dầu nghệ" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" }
    ]
  },
  {
    id: "ca-bong-song-tra-kho-tieu", slug: "ca-bong-song-tra-kho-tieu", name: "Cá bống sông Trà kho tiêu", aliases: ["ca bong kho tieu"],
    servingName: "1 phần", servingWeightG: 180,
    tags: ["central-vietnam", "low-carb"],
    portionNote: "Cá bống kho tiêu mặn ngọt kiểu Quảng Ngãi.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; lượng nước mắm làm natri cao.",
    items: [
      { foodId: "ca-bong-song-tra", amountG: 130, note: "Cá bống" },
      { foodId: "nuoc-mam", amountG: 14, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 8, note: "Đường/nước màu" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" },
      { foodId: "hat-tieu", amountG: 1, note: "Tiêu" }
    ]
  },
  {
    id: "banh-canh-ca-loc-mien-trung", slug: "banh-canh-ca-loc-mien-trung", name: "Bánh canh cá lóc miền Trung", aliases: ["banh canh ca loc"],
    servingName: "1 tô", servingWeightG: 560,
    tags: ["central-vietnam", "vietnamese-soup"],
    portionNote: "Bánh canh bột lọc với cá lóc và hành nén.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nước dùng và dầu màu thay đổi natri.",
    items: [
      { foodId: "bot-loc", amountG: 85, note: "Sợi bánh canh" },
      { foodId: "ca-loc", amountG: 100, note: "Cá lóc" },
      { foodId: "cu-nen", amountG: 5, note: "Củ nén" },
      { foodId: "dau-an", amountG: 7, note: "Dầu màu" },
      { foodId: "nuoc-dung-bo", amountG: 350, note: "Nước dùng" }
    ]
  },
  {
    id: "lau-mam-mien-tay", slug: "lau-mam-mien-tay", name: "Lẩu mắm miền Tây", aliases: ["lau mam", "lẩu mắm"],
    servingName: "1 phần cá nhân", servingWeightG: 520,
    tags: ["southern-vietnam", "high-sodium"],
    portionNote: "Một phần cá nhân từ nồi lẩu mắm gồm cá, tôm, rau đồng và bún.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; mắm cá linh/cá sặc làm natri rất cao.",
    items: [
      { foodId: "bun-tuoi", amountG: 120, note: "Bún" },
      { foodId: "ca-loc", amountG: 80, note: "Cá" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm" },
      { foodId: "bong-sung", amountG: 50, note: "Bông súng" },
      { foodId: "rau-dang", amountG: 30, note: "Rau đắng" },
      { foodId: "mam-ca-linh", amountG: 12, note: "Mắm nấu lẩu" }
    ]
  },
  {
    id: "bun-mam-mien-tay", slug: "bun-mam-mien-tay", name: "Bún mắm miền Tây", aliases: ["bun mam", "bún mắm"],
    servingName: "1 tô", servingWeightG: 620,
    tags: ["southern-vietnam", "high-sodium"],
    portionNote: "Bún mắm với cá, tôm và rau ăn kèm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; natri rất phụ thuộc nước lèo.",
    items: [
      { foodId: "bun-tuoi", amountG: 180, note: "Bún" },
      { foodId: "ca-loc", amountG: 70, note: "Cá" },
      { foodId: "tom-tuoi", amountG: 45, note: "Tôm" },
      { foodId: "mam-ca-sac", amountG: 10, note: "Mắm" },
      { foodId: "bong-sung", amountG: 40, note: "Rau ăn kèm" },
      { foodId: "rau-dang", amountG: 25, note: "Rau đắng" }
    ]
  },
  {
    id: "ca-loc-nuong-trui", slug: "ca-loc-nuong-trui", name: "Cá lóc nướng trui", aliases: ["ca loc nuong trui"],
    servingName: "1 phần", servingWeightG: 260,
    tags: ["southern-vietnam", "high-protein", "low-carb"],
    portionNote: "Một phần cá lóc nướng ăn với rau sống và mắm me/nước mắm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nếu cuốn bánh tráng/bún thì carb tăng.",
    items: [
      { foodId: "ca-loc", amountG: 180, note: "Cá lóc nướng" },
      { foodId: "banh-trang-dai-loc", amountG: 20, note: "Bánh tráng cuốn" },
      { foodId: "xa-lach", amountG: 40, note: "Rau sống" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước chấm" }
    ]
  },
  {
    id: "canh-chua-bong-sung-ca-loc", slug: "canh-chua-bong-sung-ca-loc", name: "Canh chua bông súng cá lóc", aliases: ["canh chua bong sung"],
    servingName: "1 tô", servingWeightG: 360,
    tags: ["southern-vietnam", "low-calorie"],
    portionNote: "Canh chua cá lóc với bông súng, cà chua và rau thơm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; đường và nước mắm tùy khẩu vị.",
    items: [
      { foodId: "ca-loc", amountG: 75, note: "Cá lóc" },
      { foodId: "bong-sung", amountG: 70, note: "Bông súng" },
      { foodId: "ca-chua", amountG: 50, note: "Cà chua" },
      { foodId: "duong-trang", amountG: 4, note: "Đường" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" }
    ]
  },
  {
    id: "banh-tam-bi-mien-tay", slug: "banh-tam-bi-mien-tay", name: "Bánh tằm bì miền Tây", aliases: ["banh tam bi", "banh tam bi mien tay"],
    servingName: "1 đĩa", servingWeightG: 360,
    tags: ["southern-vietnam"],
    portionNote: "Bánh tằm bì với nước cốt dừa, bì heo và rau.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nước cốt dừa làm tăng chất béo bão hòa.",
    items: [
      { foodId: "bot-gao", amountG: 100, note: "Sợi bánh tằm" },
      { foodId: "thit-heo-nac", amountG: 50, note: "Bì/thịt heo proxy" },
      { foodId: "nuoc-cot-dua-dac", amountG: 50, note: "Nước cốt dừa" },
      { foodId: "dua-leo", amountG: 40, note: "Dưa leo" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm pha" }
    ]
  },
  {
    id: "banh-canh-trang-bang", slug: "banh-canh-trang-bang", name: "Bánh canh Trảng Bàng", aliases: ["banh canh trang bang"],
    servingName: "1 tô", servingWeightG: 600,
    tags: ["southern-vietnam", "vietnamese-soup"],
    portionNote: "Bánh canh với thịt heo, nước dùng và rau sống.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; bánh canh và thịt thay đổi theo quán.",
    items: [
      { foodId: "bot-loc", amountG: 90, note: "Sợi bánh canh" },
      { foodId: "thit-heo-nac", amountG: 90, note: "Thịt heo" },
      { foodId: "nuoc-ham-xuong-heo", amountG: 380, note: "Nước dùng" },
      { foodId: "xa-lach", amountG: 30, note: "Rau sống" },
      { foodId: "nuoc-mam", amountG: 6, note: "Gia vị" }
    ]
  },
  {
    id: "goi-bon-bon-tom-thit", slug: "goi-bon-bon-tom-thit", name: "Gỏi bồn bồn tôm thịt", aliases: ["goi bon bon"],
    servingName: "1 phần", servingWeightG: 260,
    tags: ["southern-vietnam", "salad"],
    portionNote: "Gỏi bồn bồn Cà Mau/Bạc Liêu với tôm thịt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nước trộn chua ngọt làm tăng đường/natri.",
    items: [
      { foodId: "bon-bon", amountG: 90, note: "Bồn bồn" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Thịt luộc" },
      { foodId: "rau-thom-hanh", amountG: 20, note: "Rau răm" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" }
    ]
  },
  {
    id: "ca-keo-nuong-muoi-ot", slug: "ca-keo-nuong-muoi-ot", name: "Cá kèo nướng muối ớt", aliases: ["ca keo nuong"],
    servingName: "1 phần", servingWeightG: 180,
    tags: ["southern-vietnam", "low-carb"],
    portionNote: "Cá kèo nướng muối ớt ăn với rau răm.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; muối ớt làm natri tăng.",
    items: [
      { foodId: "ca-keo", amountG: 150, note: "Cá kèo" },
      { foodId: "dau-an", amountG: 5, note: "Dầu phết" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Rau răm" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị mặn" }
    ]
  },
  {
    id: "banh-tet-la-cam-phan", slug: "banh-tet-la-cam-phan", name: "Bánh tét lá cẩm", aliases: ["banh tet la cam"],
    servingName: "2 khoanh", servingWeightG: 160,
    tags: ["southern-vietnam", "tet-food"],
    portionNote: "Hai khoanh bánh tét lá cẩm nhân đậu/thịt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; nhân mỡ nhiều làm tăng năng lượng.",
    items: [
      { foodId: "banh-tet-la-cam", amountG: 160, note: "Bánh tét" }
    ]
  },
  {
    id: "dua-mon-an-kem", slug: "dua-mon-an-kem", name: "Dưa món ăn kèm", aliases: ["dua mon"],
    servingName: "1 đĩa nhỏ", servingWeightG: 50,
    tags: ["tet-food", "high-sodium"],
    portionNote: "Dưa món thường ăn kèm bánh chưng/bánh tét.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ước tính MVP; rất mặn, chỉ nên dùng lượng nhỏ.",
    items: [
      { foodId: "dua-mon", amountG: 50, note: "Dưa món" }
    ]
  },
];
