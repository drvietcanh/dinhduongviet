import type { Recipe } from "./nutrition";

export const extraRecipes6: Recipe[] = [
  // ─── Món khai vị / Món phụ ─────────────────────
  {
    id: "nom-du-du", slug: "nom-du-du", name: "Nộm đu đủ",
    aliases: ["nom du du", "đu đủ trộn"],
    servingName: "1 đĩa nhỏ", servingWeightG: 200,
    tags: ["vietnamese", "salad", "appetizer"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đu đủ xanh bào sợi trộn chua ngọt, rắc lạc rang, kèm rau thơm.",
    items: [
      { foodId: "du-du", amountG: 150, note: "Đu đủ xanh bào sợi" },
      { foodId: "gia-do", amountG: 30, note: "Giá đỗ trần" },
      { foodId: "lac-rang", amountG: 10, note: "Lạc rang giã dập" },
      { foodId: "rau-thom-hanh", amountG: 5, note: "Rau thơm" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm trộn" },
      { foodId: "duong-trang", amountG: 8, note: "Đường" },
      { foodId: "chanh-day", amountG: 5, note: "Chanh" },
    ]
  },
  {
    id: "nom-bo-kho", slug: "nom-bo-kho", name: "Nộm bò khô",
    aliases: ["nom bo kho", "bò khô trộn"],
    servingName: "1 đĩa", servingWeightG: 180,
    tags: ["vietnamese", "salad", "appetizer"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đu đủ/gỏi trộn với thịt bò khô xé sợi, nước sốt chua cay.",
    items: [
      { foodId: "du-du", amountG: 100, note: "Đu đủ bào sợi" },
      { foodId: "thit-nguoi-kho", amountG: 30, note: "Bò khô xé sợi" },
      { foodId: "lac-rang", amountG: 10, note: "Lạc rang" },
      { foodId: "rau-thom-tia-to", amountG: 5, note: "Tía tô thái nhỏ" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" },
      { foodId: "ot-tuoi", amountG: 3, note: "Ớt" },
    ]
  },
  {
    id: "goi-muc-chua-ngot", slug: "goi-muc-chua-ngot", name: "Gỏi mực",
    aliases: ["goi muc", "mực trộn"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "seafood", "salad", "appetizer"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Mực luộc chín tới, trộn chua ngọt cùng rau thơm.",
    items: [
      { foodId: "muc-tuoi", amountG: 100, note: "Mực tươi luộc" },
      { foodId: "xa-lach", amountG: 50, note: "Xà lách" },
      { foodId: "ca-rot", amountG: 30, note: "Cà rốt bào sợi" },
      { foodId: "rau-thom-hanh", amountG: 5, note: "Rau thơm" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "chanh-day", amountG: 5, note: "Chanh" },
      { foodId: "lac-rang", amountG: 5, note: "Lạc rang" },
    ]
  },
  {
    id: "goi-nghe-sen", slug: "goi-nghe-sen", name: "Gỏi ngó sen tôm thịt",
    aliases: ["goi ngo sen"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "salad", "appetizer"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ngó sen tươi trộn tôm thịt, rắc lạc, ăn mát và giòn.",
    items: [
      { foodId: "ngo-sen-tuoi", amountG: 80, note: "Ngó sen" },
      { foodId: "tom-tuoi", amountG: 30, note: "Tôm luộc" },
      { foodId: "thit-heo-nac", amountG: 30, note: "Thịt heo luộc thái mỏng" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt bào sợi" },
      { foodId: "lac-rang", amountG: 10, note: "Lạc rang" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm trộn" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" },
    ]
  },

  // ─── Món xào ────────────────────────────────────
  {
    id: "rau-muong-xao-heo", slug: "rau-muong-xao-heo", name: "Rau muống xào thịt heo",
    aliases: ["rau muong xao thit", "rau muống xào"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Rau muống xào tỏi với thịt heo thái mỏng.",
    items: [
      { foodId: "rau-muong", amountG: 150, note: "Rau muống tươi" },
      { foodId: "thit-heo-nac", amountG: 30, note: "Thịt heo thái mỏng" },
      { foodId: "toi", amountG: 5, note: "Tỏi băm" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
      { foodId: "nuoc-mam", amountG: 3, note: "Nêm" },
    ]
  },
  {
    id: "su-hao-xao-heo", slug: "su-hao-xao-heo", name: "Su hào xào thịt heo",
    aliases: ["su hao xao thit"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Su hào thái sợi xào với thịt heo và cà rốt.",
    items: [
      { foodId: "su-hao", amountG: 120, note: "Su hào thái sợi" },
      { foodId: "thit-heo-nac", amountG: 30, note: "Thịt heo thái mỏng" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt thái sợi" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
      { foodId: "nuoc-mam", amountG: 3, note: "Nêm" },
    ]
  },
  {
    id: "bong-cai-xanh-xao-toi", slug: "bong-cai-xanh-xao-toi", name: "Bông cải xanh xào tỏi",
    aliases: ["bong cai xanh xao toi", "súp lơ xào tỏi"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry", "vegetarian"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bông cải xanh (súp lơ) xào tỏi thơm, có thể thêm nấm.",
    items: [
      { foodId: "bong-cai-xanh", amountG: 180, note: "Bông cải xanh" },
      { foodId: "toi", amountG: 5, note: "Tỏi băm" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
      { foodId: "nuoc-mam", amountG: 3, note: "Nêm" },
    ]
  },
  {
    id: "nam-xao-toi", slug: "nam-xao-toi", name: "Nấm xào tỏi",
    aliases: ["nam xao toi", "nấm rơm xào"],
    servingName: "1 đĩa", servingWeightG: 150,
    tags: ["vietnamese", "stir-fry", "vegetarian"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Nấm rơm/nấm đông cô xào tỏi, rau thơm.",
    items: [
      { foodId: "nam-rom", amountG: 100, note: "Nấm rơm tươi" },
      { foodId: "nam-dong-co", amountG: 50, note: "Nấm đông cô" },
      { foodId: "toi", amountG: 5, note: "Tỏi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
      { foodId: "hanh-la", amountG: 3, note: "Hành lá" },
    ]
  },
  {
    id: "thit-bo-xao-can", slug: "thit-bo-xao-can", name: "Thịt bò xào cần",
    aliases: ["bo xao can", "thịt bò xào cần tây"],
    servingName: "1 đĩa", servingWeightG: 180,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Thịt bò thái lát xào với cần nước hoặc cần tây.",
    items: [
      { foodId: "thit-bo-nac", amountG: 80, note: "Thịt bò thái mỏng" },
      { foodId: "rau-ngot", amountG: 80, note: "Cần nước" },
      { foodId: "toi", amountG: 5, note: "Tỏi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
      { foodId: "nuoc-mam", amountG: 3, note: "Nêm" },
    ]
  },
  {
    id: "dau-phu-xao-nam", slug: "dau-phu-xao-nam", name: "Đậu phụ xào nấm",
    aliases: ["dau phu xao nam", "đậu hủ xào nấm"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry", "vegetarian"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đậu phụ xào nấm rơm, nêm gia vị chay.",
    items: [
      { foodId: "dau-phu", amountG: 100, note: "Đậu phụ cắt miếng" },
      { foodId: "nam-rom", amountG: 70, note: "Nấm rơm" },
      { foodId: "nam-huong", amountG: 20, note: "Nấm hương" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt" },
    ]
  },

  // ─── Canh ────────────────────────────────────────
  {
    id: "canh-oc-buou", slug: "canh-oc-buou", name: "Canh ốc bươu",
    aliases: ["canh oc buou", "canh ốc"],
    servingName: "1 bát", servingWeightG: 350,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Ốc bươu nấu chuối đậu, món ăn dân dã miền Bắc.",
    items: [
      { foodId: "oc-buou", amountG: 150, note: "Ốc bươu" },
      { foodId: "chuoi", amountG: 80, note: "Chuối xanh" },
      { foodId: "dau-phu", amountG: 60, note: "Đậu phụ chiên" },
      { foodId: "nghe-tuoi", amountG: 10, note: "Nghệ" },
      { foodId: "hang-the", amountG: 5, note: "Hành thì là" },
    ]
  },
  {
    id: "canh-tom-rong-bien", slug: "canh-tom-rong-bien", name: "Canh tôm rong biển",
    aliases: ["canh tom rong bien", "canh rong biển"],
    servingName: "1 bát", servingWeightG: 300,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Rong biển nấu với tôm tươi, thanh mát, giàu khoáng.",
    items: [
      { foodId: "rong-bien", amountG: 30, note: "Rong biển khô" },
      { foodId: "tom-tuoi", amountG: 40, note: "Tôm tươi bóc vỏ" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước dùng" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" },
      { foodId: "nuoc-mam", amountG: 3, note: "Nêm" },
    ]
  },
  {
    id: "canh-ga-chien-phao", slug: "canh-ga-chien-phao", name: "Canh gà chiên pháo",
    aliases: ["canh ga chien phao"],
    servingName: "1 bát", servingWeightG: 350,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Gà chiên pháo nấu canh cùng bí đỏ, cà rốt và nấm.",
    items: [
      { foodId: "thit-ga-dui", amountG: 100, note: "Đùi gà chiên pháo" },
      { foodId: "bi-do", amountG: 100, note: "Bí đỏ" },
      { foodId: "ca-rot", amountG: 40, note: "Cà rốt" },
      { foodId: "nam-rom", amountG: 30, note: "Nấm rơm" },
      { foodId: "nuoc-xuong-ga", amountG: 300, note: "Nước dùng gà" },
    ]
  },

  // ─── Món kho ────────────────────────────────────
  {
    id: "thit-kho-heo", slug: "thit-kho-heo", name: "Thịt kho hột vịt",
    aliases: ["thit heo kho trung", "thịt kho trứng"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "braised"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Thịt ba chỉ kho trứng vịt, nước màu, tiêu.",
    items: [
      { foodId: "thit-ba-chi", amountG: 100, note: "Thịt ba chỉ" },
      { foodId: "trung-vit", amountG: 80, note: "Trứng vịt luộc" },
      { foodId: "nuoc-dung-bo", amountG: 100, note: "Nước dừa/nước" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 8, note: "Đường" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím" },
    ]
  },
  {
    id: "ca-chep-kho-tuong", slug: "ca-chep-kho-tuong", name: "Cá chép kho tương",
    aliases: ["ca chep kho tuong", "cá kho tương"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "braised", "fish"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cá chép kho tương bần, thịt cá săn chắc.",
    items: [
      { foodId: "ca-chep", amountG: 150, note: "Cá chép làm sạch" },
      { foodId: "tuong-den", amountG: 10, note: "Tương đen" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím" },
      { foodId: "ot-tuoi", amountG: 5, note: "Ớt tươi" },
    ]
  },
  {
    id: "suon-kho", slug: "suon-kho", name: "Sườn kho",
    aliases: ["suon kho", "sườn kho tiêu"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "braised"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Sườn non kho mềm, nước màu, hạt tiêu.",
    items: [
      { foodId: "suon-heo-nuong", amountG: 150, note: "Sườn non chặt miếng" },
      { foodId: "nuoc-dung-bo", amountG: 100, note: "Nước" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 8, note: "Đường" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím" },
      { foodId: "hat-tieu", amountG: 2, note: "Tiêu xay" },
    ]
  },

  // ─── Món nướng ──────────────────────────────────
  {
    id: "thit-bo-nuong-la-lot", slug: "thit-bo-nuong-la-lot", name: "Bò nướng lá lốt",
    aliases: ["bo nuong la lot", "thịt bò nướng lá lốt"],
    servingName: "1 phần (8 cuốn)", servingWeightG: 180,
    tags: ["vietnamese", "grilled"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Thịt bò băm gói lá lốt nướng, món nhậu phổ biến.",
    items: [
      { foodId: "thit-bo-bam", amountG: 100, note: "Thịt bò băm" },
      { foodId: "moc-nhi", amountG: 10, note: "Mộc nhĩ băm" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím" },
      { foodId: "hat-tieu", amountG: 1, note: "Tiêu" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" },
    ]
  },
  {
    id: "ca-tam-nuong", slug: "ca-tam-nuong", name: "Cá tầm nướng",
    aliases: ["ca tam nuong"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "grilled", "fish"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cá tầm nướng giấy bạc, thịt dai ngọt, chấm muối ớt.",
    items: [
      { foodId: "ca-tam", amountG: 200, note: "Cá tầm làm sạch" },
      { foodId: "toi", amountG: 5, note: "Tỏi" },
      { foodId: "sa", amountG: 5, note: "Sả thái lát" },
      { foodId: "muoi-tieu", amountG: 2, note: "Gia vị" },
    ]
  },
  {
    id: "ga-nuong-mat-ong", slug: "ga-nuong-mat-ong", name: "Gà nướng mật ong",
    aliases: ["ga nuong mat ong", "cánh gà nướng"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "grilled"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cánh/đùi gà ướp mật ong nướng vàng.",
    items: [
      { foodId: "thit-ga-dui", amountG: 150, note: "Đùi gà" },
      { foodId: "mat-ong", amountG: 20, note: "Mật ong ướp" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm ướp" },
      { foodId: "toi", amountG: 5, note: "Tỏi băm" },
      { foodId: "hat-tieu", amountG: 2, note: "Tiêu" },
    ]
  },

  // ─── Món luộc/hấp ──────────────────────────────
  {
    id: "thit-heo-luoc", slug: "thit-heo-luoc", name: "Thịt heo luộc",
    aliases: ["thịt heo luộc", "thịt luộc"],
    servingName: "1 đĩa", servingWeightG: 150,
    tags: ["vietnamese", "boiled"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Thịt ba chỉ luộc chín tới, chấm nước mắm mặn.",
    items: [
      { foodId: "thit-ba-chi", amountG: 150, note: "Thịt ba chỉ" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Rau thơm trang trí" },
    ]
  },
  {
    id: "ca-loc-hap", slug: "ca-loc-hap", name: "Cá lóc hấp bầu",
    aliases: ["ca loc hap bau"],
    servingName: "1 phần", servingWeightG: 300,
    tags: ["vietnamese", "steamed", "fish"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cá lóc hấp bầu, gừng, rau thì là.",
    items: [
      { foodId: "ca-loc", amountG: 200, note: "Cá lóc" },
      { foodId: "bi-do", amountG: 100, note: "Bầu thái lát" },
      { foodId: "ngai-cuu", amountG: 5, note: "Thì là" },
      { foodId: "gung", amountG: 5, note: "Gừng" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
    ]
  },
  {
    id: "tom-hap-sa", slug: "tom-hap-sa", name: "Tôm hấp sả",
    aliases: ["tom hap sa", "tôm hấp"],
    servingName: "1 phần", servingWeightG: 150,
    tags: ["vietnamese", "steamed", "seafood"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Tôm tươi hấp sả, chấm muối tiêu chanh.",
    items: [
      { foodId: "tom-tuoi", amountG: 150, note: "Tôm tươi" },
      { foodId: "sa", amountG: 10, note: "Sả đập dập" },
      { foodId: "la-chanh", amountG: 3, note: "Lá chanh" },
    ]
  },
  {
    id: "trung-ga-hap", slug: "trung-ga-hap", name: "Trứng gà hấp",
    aliases: ["trung hap", "chén trứng hấp"],
    servingName: "1 chén", servingWeightG: 100,
    tags: ["vietnamese", "steamed"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Trứng gà đánh tan hấp chín, rắc mộc nhĩ, hành.",
    items: [
      { foodId: "trung-ga", amountG: 60, note: "Trứng gà" },
      { foodId: "moc-nhi", amountG: 5, note: "Mộc nhĩ băm" },
      { foodId: "hanh-la", amountG: 3, note: "Hành lá" },
      { foodId: "nuoc-mam", amountG: 2, note: "Nêm" },
    ]
  },

  // ─── Chè / Tráng miệng ──────────────────────────
  {
    id: "che-ba-ba-moi", slug: "che-ba-ba-moi", name: "Chè ba ba",
    aliases: ["che ba ba"],
    servingName: "1 bát", servingWeightG: 250,
    tags: ["vietnamese", "dessert", "sweet-soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Chè bột lọc, khoai môn, đậu xanh, nước cốt dừa.",
    items: [
      { foodId: "khoai-mon", amountG: 50, note: "Khoai môn" },
      { foodId: "dau-xanh-hat", amountG: 30, note: "Đậu xanh" },
      { foodId: "bot-loc", amountG: 20, note: "Bột lọc" },
      { foodId: "dua-quan", amountG: 30, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 20, note: "Đường" },
      { foodId: "nuoc-dung-bo", amountG: 200, note: "Nước" },
    ]
  },
  {
    id: "che-dau-den-moi", slug: "che-dau-den-moi", name: "Chè đậu đen",
    aliases: ["che dau den"],
    servingName: "1 bát", servingWeightG: 250,
    tags: ["vietnamese", "dessert", "sweet-soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đậu đen nấu nhừ, nước cốt dừa, đường.",
    items: [
      { foodId: "dau-den-hat", amountG: 60, note: "Đậu đen" },
      { foodId: "duong-trang", amountG: 20, note: "Đường" },
      { foodId: "dua-quan", amountG: 30, note: "Nước cốt dừa" },
      { foodId: "nuoc-dung-bo", amountG: 200, note: "Nước" },
    ]
  },
  {
    id: "che-thap-cam", slug: "che-thap-cam", name: "Chè thập cẩm",
    aliases: ["che thap cam"],
    servingName: "1 bát", servingWeightG: 280,
    tags: ["vietnamese", "dessert", "sweet-soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Chè hỗn hợp nhiều loại đậu, bột lọc, nước cốt dừa.",
    items: [
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh" },
      { foodId: "dau-den-hat", amountG: 20, note: "Đậu đen" },
      { foodId: "dau-trang-hat", amountG: 20, note: "Đậu trắng" },
      { foodId: "khoai-lang", amountG: 30, note: "Khoai lang" },
      { foodId: "duong-trang", amountG: 25, note: "Đường" },
      { foodId: "dua-quan", amountG: 30, note: "Nước cốt dừa" },
      { foodId: "nuoc-dung-bo", amountG: 200, note: "Nước" },
    ]
  },
  {
    id: "banh-tieu-chien", slug: "banh-tieu-chien", name: "Bánh tiêu",
    aliases: ["banh tieu"],
    servingName: "1 cái", servingWeightG: 50,
    tags: ["vietnamese", "dessert", "pastry", "breakfast"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh tiêu chiên giòn, rỗng ruột, ăn sáng hoặc xế.",
    items: [
      { foodId: "banh-mi", amountG: 40, note: "Bột mì đã lên men" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" },
      { foodId: "dau-an", amountG: 5, note: "Dầu chiên" },
      { foodId: "hat-mè", amountG: 2, note: "Mè rang" },
    ]
  },
  {
    id: "banh-khot-vung-tau", slug: "banh-khot-vung-tau", name: "Bánh khọt",
    aliases: ["banh khot"],
    servingName: "1 phần 10 cái", servingWeightG: 200,
    tags: ["vietnamese", "snack", "savory"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh khọt Vũng Tàu, đúc khuôn, nước chấm.",
    items: [
      { foodId: "bot-gao", amountG: 50, note: "Bột gạo" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm tươi" },
      { foodId: "hanh-la", amountG: 5, note: "Hành lá" },
      { foodId: "dau-an", amountG: 10, note: "Dầu" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm chấm" },
      { foodId: "dua-kao", amountG: 20, note: "Giá đỗ" },
    ]
  },
  {
    id: "banh-cuon-nhan-thit", slug: "banh-cuon-nhan-thit", name: "Bánh cuốn",
    aliases: ["banh cuon"],
    servingName: "1 đĩa", servingWeightG: 220,
    tags: ["vietnamese", "breakfast", "savory"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh cuốn thịt băm mộc nhĩ, hành phi, chấm nước mắm.",
    items: [
      { foodId: "banh-cuon-nong", amountG: 120, note: "Bánh cuốn" },
      { foodId: "thit-heo-bam", amountG: 50, note: "Thịt heo băm" },
      { foodId: "moc-nhi", amountG: 10, note: "Mộc nhĩ băm" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành phi" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm chấm" },
      { foodId: "xa-lach", amountG: 20, note: "Xà lách" },
    ]
  },

  // ─── Món chay ───────────────────────────────────
  {
    id: "canh-chay-rau-cu", slug: "canh-chay-rau-cu", name: "Canh chay rau củ",
    aliases: ["canh chay rau cu"],
    servingName: "1 bát", servingWeightG: 300,
    tags: ["vietnamese", "soup", "vegetarian"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh rau củ nấu nước dùng rau củ, thanh đạm.",
    items: [
      { foodId: "ca-rot", amountG: 50, note: "Cà rốt" },
      { foodId: "su-hao", amountG: 50, note: "Su hào" },
      { foodId: "nam-rom", amountG: 50, note: "Nấm rơm" },
      { foodId: "mong-toi", amountG: 50, note: "Mồng tơi" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "nuoc-mam", amountG: 5, note: "Hạt nêm chay" },
    ]
  },
  {
    id: "dau-phu-sot-tuong", slug: "dau-phu-sot-tuong", name: "Đậu phụ sốt tương",
    aliases: ["dau phu sot tuong", "đậu hủ sốt"],
    servingName: "1 phần", servingWeightG: 200,
    tags: ["vietnamese", "vegetarian", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đậu phụ chiên vàng, sốt tương đen nấm hương.",
    items: [
      { foodId: "dau-phu", amountG: 150, note: "Đậu phụ chiên" },
      { foodId: "nam-huong", amountG: 30, note: "Nấm hương" },
      { foodId: "tuong-den", amountG: 5, note: "Tương đen" },
      { foodId: "hanh-cu", amountG: 5, note: "Hành tím phi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
    ]
  },
  {
    id: "rau-cu-xao-chay", slug: "rau-cu-xao-chay", name: "Rau củ xào chay",
    aliases: ["rau cu xao chay"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "vegetarian", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Rau củ các loại xào tỏi, thanh đạm.",
    items: [
      { foodId: "bong-cai-xanh", amountG: 60, note: "Bông cải xanh" },
      { foodId: "ca-rot", amountG: 40, note: "Cà rốt" },
      { foodId: "sup-lo-trang", amountG: 40, note: "Súp lơ trắng" },
      { foodId: "nam-huong", amountG: 20, note: "Nấm hương" },
      { foodId: "toi", amountG: 5, note: "Tỏi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu ăn" },
    ]
  },
  {
    id: "nem-chay", slug: "nem-chay", name: "Nem chay",
    aliases: ["nem chay", "chả giò chay"],
    servingName: "1 phần (8 cuốn)", servingWeightG: 200,
    tags: ["vietnamese", "vegetarian", "fried"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Nem chay nhân nấm, đậu phụ, miến, bánh tráng cuốn chiên.",
    items: [
      { foodId: "nam-huong", amountG: 30, note: "Nấm hương" },
      { foodId: "dau-phu", amountG: 50, note: "Đậu phụ tán" },
      { foodId: "mien-dong", amountG: 20, note: "Miến ngâm" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt bào" },
      { foodId: "moc-nhi", amountG: 10, note: "Mộc nhĩ" },
      { foodId: "banh-trang", amountG: 20, note: "Bánh tráng cuốn" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" },
    ]
  },

  // ─── Đồ uống ────────────────────────────────────
  {
    id: "sinh-to-bo-v2", slug: "sinh-to-bo-v2", name: "Sinh tố bơ",
    aliases: ["sinh to bo"],
    servingName: "1 ly 250ml", servingWeightG: 300,
    tags: ["vietnamese", "drink", "smoothie"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Sinh tố bơ sữa đặc, đá bào.",
    items: [
      { foodId: "sinh-to-bo", amountG: 100, note: "Bơ chín" },
      { foodId: "sua-dac", amountG: 20, note: "Sữa đặc" },
      { foodId: "sua-tuoi", amountG: 100, note: "Sữa tươi" },
      { foodId: "nuoc-dung-bo", amountG: 80, note: "Đá/đường" },
    ]
  },
  {
    id: "sinh-to-dua", slug: "sinh-to-dua", name: "Sinh tố dưa hấu",
    aliases: ["sinh to dua hau"],
    servingName: "1 ly 300ml", servingWeightG: 350,
    tags: ["vietnamese", "drink", "smoothie"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Dưa hấu xay nhuyễn, thêm chút đường, đá.",
    items: [
      { foodId: "dua-hau", amountG: 250, note: "Dưa hấu cắt miếng" },
      { foodId: "duong-trang", amountG: 10, note: "Đường" },
      { foodId: "nuoc-dung-bo", amountG: 100, note: "Nước lọc" },
    ]
  },
  {
    id: "nuoc-sa-xuong", slug: "nuoc-sa-xuong", name: "Nước sắn dây",
    aliases: ["nuoc san day", "sắn dây pha"],
    servingName: "1 ly 250ml", servingWeightG: 280,
    tags: ["vietnamese", "drink"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bột sắn dây pha đường, có thể thêm nước cốt chanh.",
    items: [
      { foodId: "nuoc-dung-bo", amountG: 250, note: "Nước sôi" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" },
    ]
  },
  {
    id: "tra-chanh-tuoi", slug: "tra-chanh-tuoi", name: "Trà chanh",
    aliases: ["tra chanh"],
    servingName: "1 ly 300ml", servingWeightG: 320,
    tags: ["vietnamese", "drink"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Trà xanh pha loãng thêm chanh, đường, đá.",
    items: [
      { foodId: "tra-xanh-nguyen-chat", amountG: 200, note: "Nước trà" },
      { foodId: "chanh-day", amountG: 15, note: "Nước cốt chanh" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" },
      { foodId: "nuoc-dung-bo", amountG: 100, note: "Đá/ nước" },
    ]
  },
];
