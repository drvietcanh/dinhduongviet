import type { Recipe } from "./nutrition";

export const extraRecipes4: Recipe[] = [
  // ===== MÓN MIỀN TRUNG =====
  {
    id: "banh-can-mon", slug: "banh-can-mon", name: "Bánh căn",
    aliases: ["banh can"],
    servingName: "5 cái", servingWeightG: 150,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh căn chén, trứng cút, tôm, mỡ hành.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 60, note: "Bột gạo pha loãng" },
      { foodId: "trung-cun", amountG: 20, note: "Trứng cút" },
      { foodId: "tom-sudo", amountG: 20, note: "Tôm băm" },
      { foodId: "hanh-la", amountG: 5, note: "Mỡ hành" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  {
    id: "banh-hoi", slug: "banh-hoi", name: "Bánh hỏi",
    aliases: ["banh hoi"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh hỏi mỏng, ăn với heo quay/lòng.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; proxy bằng bún.",
    items: [
      { foodId: "bun-tuoi", amountG: 100, note: "Bánh hỏi (proxy bún)" },
      { foodId: "thit-heo-quay", amountG: 50, note: "Thịt heo quay" },
      { foodId: "xa-lach", amountG: 30, note: "Rau sống" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm chấm" }
    ]
  },
  {
    id: "hu-tieu-kho", slug: "hu-tieu-kho", name: "Hủ tiếu khô",
    aliases: ["hu tieu kho"],
    servingName: "1 tô", servingWeightG: 400,
    tags: ["vietnamese", "street-food"],
    portionNote: "Hủ tiếu khô Nam Vang, tôm, thịt, lòng.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "mien-dong", amountG: 100, note: "Hủ tiếu (proxy mì)" },
      { foodId: "tom-sudo", amountG: 25, note: "Tôm" },
      { foodId: "thit-heo-quay", amountG: 30, note: "Thịt heo" },
      { foodId: "gia-do", amountG: 40, note: "Giá trụng" },
      { foodId: "hanh-tim", amountG: 10, note: "Hành phi" },
      { foodId: "dau-phong", amountG: 8, note: "Đậu phộng rang" }
    ]
  },
  {
    id: "bo-bia", slug: "bo-bia", name: "Bò bía",
    aliases: ["bo bia", "bò bía cuốn"],
    servingName: "4 cuốn", servingWeightG: 160,
    tags: ["vietnamese", "street-food"],
    portionNote: "Cuốn bánh tráng nhân tôm, củ sắn, xà lách, chấm tương đen.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "banh-trang", amountG: 16, note: "Bánh tráng cuốn" },
      { foodId: "tom-kho", amountG: 15, note: "Tôm khô" },
      { foodId: "xa-lach", amountG: 20, note: "Xà lách" },
      { foodId: "gia-do", amountG: 30, note: "Giá" },
      { foodId: "cu-cai-do", amountG: 20, note: "Củ cải" },
      { foodId: "lap-xuong", amountG: 15, note: "Lạp xưởng" },
      { foodId: "tuong-den", amountG: 8, note: "Tương đen chấm" }
    ]
  },
  {
    id: "banh-duc-mon", slug: "banh-duc-mon", name: "Bánh đúc",
    aliases: ["banh duc"],
    servingName: "1 chén", servingWeightG: 180,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh đúc bột gạo, ăn với nước mắm chua ngọt.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 50, note: "Bột gạo" },
      { foodId: "hanh-la", amountG: 5, note: "Hành lá" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  {
    id: "banh-bo", slug: "banh-bo", name: "Bánh bò (bánh bò hấp)",
    aliases: ["banh bo hap", "bánh bò hấp"],
    servingName: "3 cái", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bột gạo nở, ngọt nhẹ.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 50, note: "Bột gạo" },
      { foodId: "duong-trang", amountG: 20, note: "Đường" },
      { foodId: "nuoc-dua", amountG: 30, note: "Nước cốt dừa" }
    ]
  },
  {
    id: "banh-chuoi", slug: "banh-chuoi", name: "Bánh chuối hấp",
    aliases: ["banh chuoi hap", "bánh chuối nướng"],
    servingName: "1 miếng", servingWeightG: 150,
    tags: ["vietnamese", "street-food"],
    portionNote: "Chuối trộn bột nếp, hấp/nướng.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "chuoi", amountG: 70, note: "Chuối chín" },
      { foodId: "bot-gao", amountG: 30, note: "Bột gạo" },
      { foodId: "nuoc-dua", amountG: 15, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 10, note: "Đường" },
      { foodId: "me-den", amountG: 5, note: "Mè rang" }
    ]
  },
  {
    id: "banh-da-lon", slug: "banh-da-lon", name: "Bánh da lợn",
    aliases: ["banh da lon"],
    servingName: "1 miếng", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bột nếp nhiều lớp, nhân đậu xanh, dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-gao", amountG: 40, note: "Bột gạo" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh nhân" },
      { foodId: "nuoc-dua", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "banh-cay", slug: "banh-cay", name: "Bánh cay (bánh tiêu)",
    aliases: ["banh tieu", "bánh tiêu"],
    servingName: "3 cái", servingWeightG: 90,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bột mì chiên phồng, rỗng ruột.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "banh-mi", amountG: 40, note: "Bột mì" },
      { foodId: "duong-trang", amountG: 8, note: "Đường" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" }
    ]
  },
  {
    id: "banh-phong-tom-mon", slug: "banh-phong-tom-mon", name: "Bánh phồng tôm",
    aliases: ["banh phong tom"],
    servingName: "1 đĩa", servingWeightG: 50,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh phồng tôm chiên giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "banh-trang", amountG: 30, note: "Bánh phồng (proxy)" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" }
    ]
  },
  {
    id: "banh-tam", slug: "banh-tam", name: "Bánh tằm",
    aliases: ["banh tam bi"],
    servingName: "1 đĩa", servingWeightG: 300,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh tằm, bì heo, nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bun-tuoi", amountG: 120, note: "Bánh tằm (proxy bún)" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Thịt heo luộc thái sợi" },
      { foodId: "da-heo", amountG: 20, note: "Bì heo" },
      { foodId: "nuoc-dua", amountG: 15, note: "Nước cốt dừa" },
      { foodId: "lac-rang", amountG: 8, note: "Lạc rang" }
    ]
  },

  // ===== MÓN BÁNH =====
  {
    id: "banh-deo", slug: "banh-deo", name: "Bánh dẻo (trung thu)",
    aliases: ["banh deo trung thu"],
    servingName: "1 cái", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh dẻo trung thu nhân đậu xanh.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "gao-nep", amountG: 35, note: "Bột nếp dẻo" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh nhân" },
      { foodId: "duong-trang", amountG: 18, note: "Đường" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  {
    id: "banh-nuong-trung-thu", slug: "banh-nuong-trung-thu", name: "Bánh nướng trung thu",
    aliases: ["banh nuong trung thu"],
    servingName: "1 cái", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh nướng thập cẩm, trứng muối.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-mi-da", amountG: 30, note: "Bột bánh" },
      { foodId: "trung-ga", amountG: 10, note: "Trứng muối" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "lap-xuong", amountG: 10, note: "Lạp xưởng (nhân)" }
    ]
  },
  {
    id: "banh-com", slug: "banh-com", name: "Bánh cốm",
    aliases: ["banh com"],
    servingName: "2 cái", servingWeightG: 80,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh cốm tươi/nướng.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; cốm non proxy.",
    items: [
      { foodId: "gao-nep", amountG: 30, note: "Cốm non (proxy)" },
      { foodId: "dau-xanh-hat", amountG: 15, note: "Đậu xanh" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" },
      { foodId: "nuoc-dua", amountG: 10, note: "Nước cốt dừa" }
    ]
  },
  {
    id: "banh-bong-lan", slug: "banh-bong-lan", name: "Bánh bông lan (bánh sponge)",
    aliases: ["banh bong lan", "bánh gato"],
    servingName: "1 miếng (80g)", servingWeightG: 80,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bông lan trứng sữa.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-mi-da", amountG: 25, note: "Bột mì" },
      { foodId: "trung-ga", amountG: 30, note: "Trứng gà" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" },
      { foodId: "dau-an", amountG: 8, note: "Dầu thực vật" }
    ]
  },
  {
    id: "banh-flan", slug: "banh-flan", name: "Bánh flan (caramen)",
    aliases: ["banh flan", "caramen"],
    servingName: "1 cái", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Trứng sữa hấp caramen.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "trung-ga", amountG: 40, note: "Trứng" },
      { foodId: "sua-dac", amountG: 20, note: "Sữa đặc" },
      { foodId: "sua-tuoi", amountG: 30, note: "Sữa tươi" },
      { foodId: "duong-trang", amountG: 10, note: "Đường caramen" }
    ]
  },
  {
    id: "banh-pia", slug: "banh-pia", name: "Bánh pía (Sóc Trăng)",
    aliases: ["banh pia", "bánh pía nhân sầu riêng"],
    servingName: "1 cái", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bột mì nhiều lớp, nhân sầu riêng/đậu xanh.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "bot-mi-da", amountG: 30, note: "Vỏ bánh" },
      { foodId: "sau-rieng", amountG: 25, note: "Sầu riêng nhân" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" }
    ]
  },
  {
    id: "banh-dau-xanh-mon", slug: "banh-dau-xanh-mon", name: "Bánh đậu xanh",
    aliases: ["banh dau xanh Hai Duong", "bánh đậu xanh Hải Dương"],
    servingName: "1 cái (50g)", servingWeightG: 50,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh đậu xanh Hải Dương, dạng khối/khuôn.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "dau-xanh-hat", amountG: 30, note: "Đậu xanh xay nhuyễn" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },

  // ===== ĐỒ UỐNG & SỮA =====
  {
    id: "sua-dau-nanh-mon", slug: "sua-dau-nanh-mon", name: "Sữa đậu nành",
    aliases: ["sua dau nanh", "đậu nành"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Đậu nành xay, nấu chín.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "dau-nanh", amountG: 25, note: "Đậu nành khô" },
      { foodId: "duong-trang", amountG: 10, note: "Đường" }
    ]
  },
  {
    id: "tra-sua-tran-chau", slug: "tra-sua-tran-chau", name: "Trà sữa trân châu",
    aliases: ["tra sua tran chau"],
    servingName: "1 ly", servingWeightG: 350,
    tags: ["vietnamese", "drink"],
    portionNote: "Trà đen sữa đặc, trân châu đường đen.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "tra-xanh", amountG: 5, note: "Trà đen (proxy)" },
      { foodId: "sua-dac", amountG: 25, note: "Sữa đặc" },
      { foodId: "sua-tuoi", amountG: 30, note: "Sữa tươi" },
      { foodId: "bot-san-day", amountG: 15, note: "Trân châu (proxy bột sắn)" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "ca-phe-sua-da", slug: "ca-phe-sua-da", name: "Cà phê sữa đá",
    aliases: ["ca phe sua da", "cà phê sữa đá"],
    servingName: "1 ly", servingWeightG: 200,
    tags: ["vietnamese", "drink"],
    portionNote: "Cà phê phin pha sữa đặc, uống đá.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "ca-pha", amountG: 10, note: "Cà phê pha (proxy)" },
      { foodId: "sua-dac", amountG: 20, note: "Sữa đặc" }
    ]
  },
  {
    id: "ca-phe-den-da-mon", slug: "ca-phe-den-da-mon", name: "Cà phê đen đá",
    aliases: ["ca phe den da"],
    servingName: "1 ly", servingWeightG: 200,
    tags: ["vietnamese", "drink"],
    portionNote: "Cà phê phin không sữa, uống đá.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "ca-phe-den-da", amountG: 10, note: "Cà phê pha" }
    ]
  },
  {
    id: "tra-chanh", slug: "tra-chanh", name: "Trà chanh",
    aliases: ["tra chanh", "trà chanh Hà Nội"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Trà xanh/trà đen pha chanh đường.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "tra-xanh", amountG: 5, note: "Trà" },
      { foodId: "chanh", amountG: 15, note: "Nước cốt chanh" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "tra-tac", slug: "tra-tac", name: "Trà tắc (trà quất)",
    aliases: ["tra tac", "trà quất"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Trà xanh/quất pha đường.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "tra-xanh", amountG: 5, note: "Trà" },
      { foodId: "quyt", amountG: 20, note: "Quất (proxy quýt)" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" }
    ]
  },
  {
    id: "nuoc-chanh-mon", slug: "nuoc-chanh-mon", name: "Nước chanh tươi",
    aliases: ["nuoc chanh tuoi", "chanh dây"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Chanh tươi đường/đá.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "chanh", amountG: 20, note: "Chanh vắt" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" }
    ]
  },

  // ===== KEM =====
  {
    id: "kem-dau-xanh", slug: "kem-dau-xanh", name: "Kem đậu xanh",
    aliases: ["kem dau xanh", "kem que đậu xanh"],
    servingName: "1 que", servingWeightG: 80,
    tags: ["vietnamese", "street-food"],
    portionNote: "Kem que đậu xanh nước dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "dau-xanh-hat", amountG: 15, note: "Đậu xanh" },
      { foodId: "nuoc-dua", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" },
      { foodId: "sua-dac", amountG: 8, note: "Sữa đặc" }
    ]
  },
  {
    id: "kem-dau", slug: "kem-dau", name: "Kem dâu (kem ly)",
    aliases: ["kem dau tay", "kem ly"],
    servingName: "1 ly", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Kem dâu tây dạng ly.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "sua-tuoi", amountG: 50, note: "Sữa tươi" },
      { foodId: "dau-tay", amountG: 20, note: "Dâu tây" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },

  // ===== KEM/CHÈ MỚI =====
  {
    id: "suon-chua-ngot", slug: "suon-chua-ngot", name: "Sườn chua ngọt",
    aliases: ["suon chua ngot", "sườn rim chua ngọt"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Sườn non rim chua ngọt.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "xuong-heo", amountG: 120, note: "Sườn heo" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 10, note: "Đường" },
      { foodId: "toi", amountG: 3, note: "Tỏi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu phi" }
    ]
  },
  {
    id: "hat-me-kho-xao-dam", slug: "hat-me-kho-xao-dam", name: "Hột me khô xào dầm",
    aliases: ["hot me kho", "hột me xào dầm"],
    servingName: "1 đĩa", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Hột me khô xào dầm đường ớt.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP; me tươi proxy.",
    items: [
      { foodId: "me", amountG: 60, note: "Cơm me" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" },
      { foodId: "ot-tuoi", amountG: 2, note: "Ớt bột" }
    ]
  },
  {
    id: "com-chien-thai", slug: "com-chien-thai", name: "Cơm chiên Thái",
    aliases: ["com chien thai", "cơm chiên kiểu Thái"],
    servingName: "1 đĩa", servingWeightG: 350,
    tags: ["vietnamese", "street-food"],
    portionNote: "Cơm chiên với tôm, thịt, rau củ kiểu Thái.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "com-trang", amountG: 200, note: "Cơm nguội" },
      { foodId: "tom-sudo", amountG: 30, note: "Tôm" },
      { foodId: "thit-heo-xay", amountG: 30, note: "Thịt băm" },
      { foodId: "trung-ga", amountG: 25, note: "Trứng" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt" },
      { foodId: "dau-an", amountG: 15, note: "Dầu" }
    ]
  },
  {
    id: "chao-sup", slug: "chao-sup", name: "Súp (cháo súp)",
    aliases: ["chao sup", "cháo súp"],
    servingName: "1 tô", servingWeightG: 300,
    tags: ["vietnamese", "street-food"],
    portionNote: "Súp gà, ngô, trứng non.",
    sourceId: "recipe-estimate-v1", confidence: "low", note: "Ước tính MVP.",
    items: [
      { foodId: "com-trang", amountG: 30, note: "Bột/cháo" },
      { foodId: "thit-ga-rui", amountG: 30, note: "Thịt gà" },
      { foodId: "bap-non", amountG: 20, note: "Ngô ngọt" },
      { foodId: "trung-ga", amountG: 15, note: "Trứng gà" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" }
    ]
  }
];
