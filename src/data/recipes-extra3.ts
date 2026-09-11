import type { Recipe } from "./nutrition";

export const extraRecipes3: Recipe[] = [
  // ===== CHÈ (SWEET SOUPS) =====
  {
    id: "che-ba-ba", slug: "che-ba-ba", name: "Chè bà ba",
    aliases: ["che ba ba"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    portionNote: "Khoai môn, khoai mì, bột báng, nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "khoai-mon", amountG: 30, note: "Khoai môn cắt hạt lựu" },
      { foodId: "khoai-mi", amountG: 30, note: "Khoai mì cắt hạt lựu" },
      { foodId: "bot-san-day", amountG: 10, note: "Bột báng/thay thế" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "che-chuoi", slug: "che-chuoi", name: "Chè chuối",
    aliases: ["che chuoi"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    portionNote: "Chuối chín, nước cốt dừa, bột sắn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "chuoi", amountG: 80, note: "Chuối chín cắt lát" },
      { foodId: "nuoc-cot-dua-dac", amountG: 25, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" },
      { foodId: "bot-san-day", amountG: 8, note: "Bột sắn dây" }
    ]
  },
  {
    id: "che-khoai-mon", slug: "che-khoai-mon", name: "Chè khoai môn",
    aliases: ["che khoai mon"],
    servingName: "1 chén", servingWeightG: 220,
    tags: ["vietnamese", "dessert"],
    portionNote: "Khoai môn nấu với nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "khoai-mon", amountG: 80, note: "Khoai môn cắt vuông" },
      { foodId: "nuoc-cot-dua-dac", amountG: 25, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 14, note: "Đường" }
    ]
  },
  {
    id: "che-dau-den", slug: "che-dau-den", name: "Chè đậu đen",
    aliases: ["che dau den"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    portionNote: "Đậu đen nấu nhừ, nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; đậu đen nguyên hạt.",
    items: [
      { foodId: "dau-den-hat", amountG: 40, note: "Đậu đen khô" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "che-troi-nuoc", slug: "che-troi-nuoc", name: "Chè trôi nước",
    aliases: ["che troi nuoc", "bánh trôi nước"],
    servingName: "5 viên", servingWeightG: 180,
    tags: ["vietnamese", "dessert"],
    portionNote: "Viên bột nếp nhân đậu xanh, nước gừng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; gạo nếp xay proxy cho bột nếp.",
    items: [
      { foodId: "gao-nep", amountG: 70, note: "Bột nếp ướt" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh giã nhuyễn" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" },
      { foodId: "gung-tuoi", amountG: 5, note: "Gừng tươi" }
    ]
  },
  {
    id: "che-buoi", slug: "che-buoi", name: "Chè bưởi",
    aliases: ["che buoi"],
    servingName: "1 chén", servingWeightG: 220,
    tags: ["vietnamese", "dessert"],
    portionNote: "Cùi bưởi tẩm bột, đậu xanh, nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; cùi bưởi dùng bưởi non.",
    items: [
      { foodId: "buoi", amountG: 40, note: "Cùi bưởi thái hạt lựu" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh đãi vỏ" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 15, note: "Đường" }
    ]
  },
  {
    id: "che-dau-do-banh-lot", slug: "che-dau-do-banh-lot", name: "Chè đậu đỏ bánh lọt",
    aliases: ["che dau do banh lot"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    portionNote: "Đậu đỏ hầm, bánh lọt làm từ bột lọc, nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; bột lọc proxy cho bánh lọt.",
    items: [
      { foodId: "dau-do-hat", amountG: 30, note: "Đậu đỏ" },
      { foodId: "bot-loc", amountG: 15, note: "Bột lọc (bánh lọt)" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 14, note: "Đường" }
    ]
  },

  // ===== MÓN NƯỚNG/RANG/CHIÊN =====
  {
    id: "thit-xiên-nuong", slug: "thit-xien-nuong", name: "Thịt xiên nướng",
    aliases: ["thit xien nuong", "thịt nướng xiên que"],
    servingName: "3 que", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Thịt heo ướp gia vị, xiên que nướng than.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "thit-heo-nac", amountG: 90, note: "Thịt heo thái mỏng" },
      { foodId: "mat-ong", amountG: 6, note: "Nước ướp" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "toi", amountG: 3, note: "Tỏi băm" },
      { foodId: "dau-an", amountG: 3, note: "Dầu ướp" }
    ]
  },
  {
    id: "bap-nuong-mo-hanh", slug: "bap-nuong-mo-hanh", name: "Bắp nướng mỡ hành",
    aliases: ["bap nuong mo hanh", "ngô nướng mỡ hành"],
    servingName: "1 trái", servingWeightG: 180,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bắp nướng than, phết mỡ hành.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "bap-my-luoc", amountG: 150, note: "Bắp Mỹ" },
      { foodId: "mo-heo", amountG: 10, note: "Mỡ hành" },
      { foodId: "hanh-la", amountG: 5, note: "Hành lá băm" },
      { foodId: "muoi-tieu", amountG: 1, note: "Muối tiêu" }
    ]
  },
  {
    id: "khoai-lang-nuong", slug: "khoai-lang-nuong", name: "Khoai lang nướng",
    aliases: ["khoai lang nuong"],
    servingName: "1 củ", servingWeightG: 180,
    tags: ["vietnamese", "street-food"],
    portionNote: "Khoai lang nướng than hồng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "khoai-lang-mat", amountG: 170, note: "Khoai lang" }
    ]
  },
  {
    id: "khoai-tay-chien", slug: "khoai-tay-chien", name: "Khoai tây chiên",
    aliases: ["khoai tay chien"],
    servingName: "1 đĩa", servingWeightG: 140,
    tags: ["vietnamese", "street-food"],
    portionNote: "Khoai tây cắt que chiên giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "khoai-tay", amountG: 120, note: "Khoai tây" },
      { foodId: "dau-an", amountG: 12, note: "Dầu chiên" },
      { foodId: "muoi-tieu", amountG: 1, note: "Muối tiêu" }
    ]
  },
  {
    id: "chuoi-chien", slug: "chuoi-chien", name: "Chuối chiên",
    aliases: ["chuoi chien"],
    servingName: "5 lát", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Chuối sứ chiên bột giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "chuoi-su", amountG: 70, note: "Chuối sứ chín" },
      { foodId: "bot-gao", amountG: 20, note: "Bột áo" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" }
    ]
  },
  {
    id: "khoai-lang-chien", slug: "khoai-lang-chien", name: "Khoai lang chiên",
    aliases: ["khoai lang chien", "khoai lang lát chiên"],
    servingName: "1 đĩa", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Khoai lang thái lát chiên giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "khoai-lang", amountG: 90, note: "Khoai lang thái lát" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" }
    ]
  },
  {
    id: "banh-cam", slug: "banh-cam", name: "Bánh cam (bánh rán ngọt)",
    aliases: ["banh cam", "banh ran ngot"],
    servingName: "3 cái", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bột nếp nhân đậu xanh chiên giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; gạo nếp proxy bột nếp.",
    items: [
      { foodId: "gao-nep", amountG: 50, note: "Bột nếp" },
      { foodId: "dau-xanh-hat", amountG: 15, note: "Đậu xanh nhân" },
      { foodId: "dau-an", amountG: 10, note: "Dầu chiên" },
      { foodId: "duong-trang", amountG: 8, note: "Đường" },
      { foodId: "me-den", amountG: 3, note: "Mè rang" }
    ]
  },
  {
    id: "oc-nuong-tieu-xanh", slug: "oc-nuong-tieu-xanh", name: "Ốc nướng tiêu xanh",
    aliases: ["oc nuong tieu xanh"],
    servingName: "1 đĩa", servingWeightG: 250,
    tags: ["vietnamese", "street-food"],
    portionNote: "Ốc bươu nướng với tiêu xanh, muối ớt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "oc-buou", amountG: 200, note: "Ốc bươu" },
      { foodId: "muoi-tieu", amountG: 5, note: "Muối tiêu xanh" },
      { foodId: "ot-hiem", amountG: 3, note: "Ớt hiểm đập dập" },
      { foodId: "sa", amountG: 8, note: "Sả đập dập" }
    ]
  },
  {
    id: "so-huyet-nuong-mo-hanh", slug: "so-huyet-nuong-mo-hanh", name: "Sò huyết nướng mỡ hành",
    aliases: ["so huyet nuong mo hanh"],
    servingName: "1 đĩa", servingWeightG: 250,
    tags: ["vietnamese", "street-food"],
    portionNote: "Sò huyết nướng mỡ hành, lạc rang.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; ruột sò ~30% trọng lượng.",
    items: [
      { foodId: "so-huyet", amountG: 200, note: "Sò huyết (cả vỏ)" },
      { foodId: "mo-heo", amountG: 10, note: "Mỡ hành" },
      { foodId: "hanh-la", amountG: 8, note: "Hành lá" },
      { foodId: "lac-rang", amountG: 10, note: "Lạc rang giã" }
    ]
  },
  {
    id: "ngheu-nuong-mo-hanh", slug: "ngheu-nuong-mo-hanh", name: "Nghêu nướng mỡ hành",
    aliases: ["ngheu nuong mo hanh"],
    servingName: "1 đĩa", servingWeightG: 300,
    tags: ["vietnamese", "street-food"],
    portionNote: "Nghêu nướng mỡ hành, lạc rang.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "ngheu", amountG: 250, note: "Nghêu còn vỏ" },
      { foodId: "mo-heo", amountG: 8, note: "Mỡ hành" },
      { foodId: "hanh-la", amountG: 5, note: "Hành lá" }
    ]
  },
  {
    id: "cha-gio-hai-san", slug: "cha-gio-hai-san", name: "Chả giò hải sản",
    aliases: ["cha gio hai san", "chả giò tôm cua"],
    servingName: "5 cuốn", servingWeightG: 150,
    tags: ["vietnamese", "street-food"],
    portionNote: "Chả giò tôm, mực, thịt chiên giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; bánh tráng proxy vỏ.",
    items: [
      { foodId: "banh-trang", amountG: 15, note: "Bánh tráng cuộn" },
      { foodId: "tom-su", amountG: 25, note: "Tôm băm" },
      { foodId: "muc-tuoi", amountG: 25, note: "Mực băm" },
      { foodId: "thit-heo-xay", amountG: 30, note: "Thịt heo xay" },
      { foodId: "gia-do", amountG: 30, note: "Giá đỗ" },
      { foodId: "dau-an", amountG: 12, note: "Dầu chiên" }
    ]
  },
  {
    id: "nem-ran-hai-san", slug: "nem-ran-hai-san", name: "Nem rán hải sản",
    aliases: ["nem ran hai san", "chả gió hải sản"],
    servingName: "5 cuốn", servingWeightG: 160,
    tags: ["vietnamese", "street-food"],
    portionNote: "Nem hải sản chiên giòn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "banh-trang", amountG: 15, note: "Vỏ nem" },
      { foodId: "ca-vien", amountG: 30, note: "Cá thác lác giã" },
      { foodId: "tom-su", amountG: 20, note: "Tôm" },
      { foodId: "thit-heo-xay", amountG: 30, note: "Thịt heo" },
      { foodId: "nam-mo", amountG: 20, note: "Nấm mèo" },
      { foodId: "mien-dong", amountG: 5, note: "Miến cắt ngắn" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" }
    ]
  },

  // ===== MÓN HẤP/LUỘC =====
  {
    id: "dau-phong-luoc", slug: "dau-phong-luoc", name: "Đậu phộng luộc",
    aliases: ["dau phong luoc", "lạc luộc"],
    servingName: "1 đĩa", servingWeightG: 100,
    tags: ["vietnamese", "street-food"],
    portionNote: "Đậu phộng tươi luộc muối.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "dau-phong", amountG: 80, note: "Đậu phộng tươi" },
      { foodId: "muoi-tieu", amountG: 2, note: "Muối luộc" }
    ]
  },
  {
    id: "khoai-mon-hap-nuoc-dua", slug: "khoai-mon-hap-nuoc-dua", name: "Khoai môn hấp nước cốt dừa",
    aliases: ["khoai mon hap nuoc dua"],
    servingName: "1 đĩa", servingWeightG: 150,
    tags: ["vietnamese", "street-food"],
    portionNote: "Khoai môn hấp chín tới, chan nước cốt dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "khoai-mon", amountG: 100, note: "Khoai môn cắt khối" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "duong-trang", amountG: 6, note: "Đường rắc" }
    ]
  },
  {
    id: "banh-it-la-gai", slug: "banh-it-la-gai", name: "Bánh ít lá gai",
    aliases: ["banh it la gai"],
    servingName: "3 cái", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bột nếp lá gai, nhân đậu xanh dừa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thiếu lá gai nên dùng proxy.",
    items: [
      { foodId: "gao-nep", amountG: 50, note: "Bột nếp" },
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh nhân" },
      { foodId: "duong-trang", amountG: 10, note: "Đường" },
      { foodId: "nuoc-cot-dua-dac", amountG: 8, note: "Dừa nhân" }
    ]
  },

  // ===== MÓN ĂN VẶT KHÁC =====
  {
    id: "oc-buou-nhoi-thit", slug: "oc-buou-nhoi-thit", name: "Ốc bươu nhồi thịt",
    aliases: ["oc buou nhoi thit"],
    servingName: "5 con", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Ốc bươu nhồi thịt heo, hấp/nướng.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "oc-buou", amountG: 150, note: "Ốc bươu luộc" },
      { foodId: "thit-heo-xay", amountG: 40, note: "Thịt heo nhồi" },
      { foodId: "nam-mo", amountG: 8, note: "Nấm mèo" },
      { foodId: "hat-tieu", amountG: 1, note: "Tiêu xay" }
    ]
  },
  {
    id: "dau-hu-chien-nuoc-mam", slug: "dau-hu-chien-nuoc-mam", name: "Đậu hũ chiên nước mắm",
    aliases: ["dau hu chien nuoc mam"],
    servingName: "1 đĩa", servingWeightG: 150,
    tags: ["vietnamese", "street-food"],
    portionNote: "Đậu hũ chiên giòn, sốt nước mắm chua ngọt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "dau-hu-chien", amountG: 120, note: "Đậu hũ chiên" },
      { foodId: "nuoc-mam", amountG: 8, note: "Nước mắm sốt" },
      { foodId: "duong-trang", amountG: 5, note: "Đường sốt" },
      { foodId: "ot-hiem", amountG: 2, note: "Ớt băm" },
      { foodId: "toi", amountG: 3, note: "Tỏi băm" }
    ]
  },
  {
    id: "banh-beo-nuoc-leo", slug: "banh-beo-nuoc-leo", name: "Bánh bèo nước lèo",
    aliases: ["banh beo nuoc leo"],
    servingName: "10 cái", servingWeightG: 180,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh bèo chén, nước leo tôm thịt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; phối hợp tương tự bánh bèo nhưng nước dùng đậm hơn.",
    items: [
      { foodId: "bot-gao", amountG: 60, note: "Bánh bèo (proxy bột gạo)" },
      { foodId: "tom-kho", amountG: 10, note: "Tôm khô bào" },
      { foodId: "thit-heo-xay", amountG: 15, note: "Thịt nạc băm" },
      { foodId: "gia-do", amountG: 20, note: "Giá sống" },
      { foodId: "dau-phong", amountG: 8, note: "Đậu phộng rang" }
    ]
  },
  {
    id: "bun-bo-que", slug: "bun-bo-que", name: "Bún bò que (bún bò xiên)",
    aliases: ["bun bo que", "bún bò xiên que"],
    servingName: "1 tô", servingWeightG: 400,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bún với bò xiên que nướng, rau sống.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún" },
      { foodId: "thit-bo-nac", amountG: 60, note: "Bò xiên nướng" },
      { foodId: "xa-lach", amountG: 40, note: "Rau sống" },
      { foodId: "gia-do", amountG: 30, note: "Giá" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm chấm" },
      { foodId: "lac-rang", amountG: 8, note: "Lạc rang" }
    ]
  },
  {
    id: "bun-ca-thu", slug: "bun-ca-thu", name: "Bún cá thu",
    aliases: ["bun ca thu"],
    servingName: "1 tô", servingWeightG: 450,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bún cá thu nấu chua/thì là.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "bun-tuoi", amountG: 200, note: "Bún" },
      { foodId: "ca-thu", amountG: 60, note: "Cá thu tươi" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua sốt" },
      { foodId: "hanh-la", amountG: 8, note: "Thì là" },
      { foodId: "dau-an", amountG: 5, note: "Dầu phi" }
    ]
  },
  {
    id: "mi-xao-gion", slug: "mi-xao-gion", name: "Mì xào giòn",
    aliases: ["mi xao gion", "mì xào giòn Hồng Kông"],
    servingName: "1 đĩa", servingWeightG: 300,
    tags: ["vietnamese", "street-food"],
    portionNote: "Mì chiên giòn, xào hải sản/thịt rau củ.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "mi-trung-tuoi", amountG: 80, note: "Mì trứng" },
      { foodId: "tom-su", amountG: 30, note: "Tôm" },
      { foodId: "muc-tuoi", amountG: 30, note: "Mực" },
      { foodId: "sup-lo", amountG: 30, note: "Bông cải" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" },
      { foodId: "dau-hao", amountG: 8, note: "Dầu hào" }
    ]
  },

  // ===== CHÁO ĐẶC SẢN =====  
  {
    id: "chao-huyet", slug: "chao-huyet", name: "Cháo huyết",
    aliases: ["chao huyet", "cháo huyết heo"],
    servingName: "1 tô", servingWeightG: 380,
    tags: ["vietnamese", "street-food"],
    portionNote: "Cháo trắng với huyết heo, lòng non.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; huyết heo thiếu foodId proxy bằng gan heo.",
    items: [
      { foodId: "com-trang", amountG: 70, note: "Gạo nấu cháo" },
      { foodId: "doi-truong", amountG: 40, note: "Huyết heo" },
      { foodId: "long-heo", amountG: 30, note: "Lòng non" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "chao-dau-xanh-ngot", slug: "chao-dau-xanh-ngot", name: "Cháo đậu xanh ngọt",
    aliases: ["chao dau xanh ngot"],
    servingName: "1 chén", servingWeightG: 300,
    tags: ["vietnamese", "street-food"],
    portionNote: "Cháo đậu xanh ninh nhừ, đường.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; món ăn chơi cho trẻ em?",
    items: [
      { foodId: "com-trang", amountG: 40, note: "Gạo nấu cháo" },
      { foodId: "dau-xanh-hat", amountG: 30, note: "Đậu xanh" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" }
    ]
  },

  // ===== SINH TỐ & NƯỚC GIẢI KHÁT =====
  {
    id: "sinh-to-xoai", slug: "sinh-to-xoai", name: "Sinh tố xoài",
    aliases: ["sinh to xoai"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Xoài chín xay với sữa đặc, đá.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "xoai", amountG: 100, note: "Xoài chín" },
      { foodId: "sua-dac", amountG: 15, note: "Sữa đặc" },
      { foodId: "sua-tuoi", amountG: 30, note: "Sữa tươi" }
    ]
  },
  {
    id: "sinh-to-mang-cau", slug: "sinh-to-mang-cau", name: "Sinh tố mãng cầu",
    aliases: ["sinh to mang cau"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Mãng cầu xiêm xay sữa.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "mang-cau-xiem", amountG: 100, note: "Mãng cầu xiêm" },
      { foodId: "sua-dac", amountG: 15, note: "Sữa đặc" },
      { foodId: "sua-tuoi", amountG: 30, note: "Sữa tươi" }
    ]
  },
  {
    id: "sinh-to-dua-hau", slug: "sinh-to-dua-hau", name: "Sinh tố dưa hấu",
    aliases: ["sinh to dua hau"],
    servingName: "1 ly", servingWeightG: 300,
    tags: ["vietnamese", "drink"],
    portionNote: "Dưa hấu xay với sữa đặc.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "dua-hau", amountG: 200, note: "Dưa hấu" },
      { foodId: "sua-dac", amountG: 12, note: "Sữa đặc" }
    ]
  },
  {
    id: "nuoc-mia", slug: "nuoc-mia", name: "Nước mía",
    aliases: ["nuoc mia", "nước mía"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Nước mía ép tươi, uống với đá.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; chưa có foodId cho mía nên dùng đường proxy.",
    items: [
      { foodId: "duong-thot-not", amountG: 20, note: "Nước mía (proxy)" }
    ]
  },
  {
    id: "nuoc-sam-bo-luong", slug: "nuoc-sam-bo-luong", name: "Nước sâm bổ lượng",
    aliases: ["nuoc sam bo luong", "sâm bổ lượng"],
    servingName: "1 ly", servingWeightG: 300,
    tags: ["vietnamese", "drink"],
    portionNote: "Nấm tuyết, táo tàu, kỷ tử, long nhãn, đường phèn.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; các nguyên liệu quý tây dùng food proxy.",
    items: [
      { foodId: "sua-dac", amountG: 10, note: "Đường phèn (proxy)" },
      { foodId: "nam-mo", amountG: 10, note: "Nấm tuyết proxy" },
      { foodId: "nhan", amountG: 20, note: "Long nhãn" }
    ]
  },
  {
    id: "nuoc-dau-xanh", slug: "nuoc-dau-xanh", name: "Nước đậu xanh",
    aliases: ["nuoc dau xanh"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink"],
    portionNote: "Đậu xanh nấu lấy nước, đường.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "dau-xanh-hat", amountG: 20, note: "Đậu xanh" },
      { foodId: "duong-trang", amountG: 12, note: "Đường" }
    ]
  },

  // ===== MÓN CƠM ĐẶC SẢN =====
  {
    id: "com-chay", slug: "com-chay", name: "Cơm cháy (cơm cháy)",
    aliases: ["com chay", "cơm cháy"],
    servingName: "1 đĩa", servingWeightG: 120,
    tags: ["vietnamese", "street-food"],
    portionNote: "Cơm cháy giòn, chan nước thịt kho/quẹt.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "com-trang", amountG: 80, note: "Cơm ép" },
      { foodId: "thit-heo-nac", amountG: 20, note: "Thịt kho rưới" },
      { foodId: "dau-an", amountG: 8, note: "Dầu chiên" }
    ]
  },
  {
    id: "xoi-vung", slug: "xoi-vung", name: "Xôi vừng (xôi mè đen)",
    aliases: ["xoi vung den", "xôi mè đen"],
    servingName: "1 đĩa", servingWeightG: 180,
    tags: ["vietnamese", "street-food"],
    portionNote: "Xôi gạo nếp trộn mè đen rang.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "gao-nep", amountG: 100, note: "Gạo nếp đồ" },
      { foodId: "me-den", amountG: 12, note: "Mè đen rang" },
      { foodId: "duong-trang", amountG: 5, note: "Đường (tùy chọn)" }
    ]
  },
  {
    id: "xoi-khoai-mon", slug: "xoi-khoai-mon", name: "Xôi khoai môn",
    aliases: ["xoi khoai mon"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Xôi gạo nếp với khoai môn cắt hạt lựu.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "gao-nep", amountG: 80, note: "Gạo nếp" },
      { foodId: "khoai-mon", amountG: 50, note: "Khoai môn" },
      { foodId: "nuoc-cot-dua-dac", amountG: 8, note: "Chút nước cốt dừa" }
    ]
  },

  // ===== MÓN BÁNH MÌ KHÁC =====
  {
    id: "banh-mi-cha-ca-thu", slug: "banh-mi-cha-ca-thu", name: "Bánh mì chả cá thu",
    aliases: ["banh mi cha ca thu"],
    servingName: "1 ổ", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh mì với chả cá thu chiên.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "banh-mi", amountG: 75, note: "Bánh mì" },
      { foodId: "ca-thu", amountG: 50, note: "Cá thu chiên chả" },
      { foodId: "xa-lach", amountG: 20, note: "Rau" },
      { foodId: "dua-leo", amountG: 15, note: "Dưa leo" },
      { foodId: "sot-mayonnaise", amountG: 5, note: "Sốt" }
    ]
  },
  {
    id: "banh-mi-trung", slug: "banh-mi-trung", name: "Bánh mì trứng (ốp la)",
    aliases: ["banh mi trung", "bánh mì ốp la"],
    servingName: "1 ổ", servingWeightG: 200,
    tags: ["vietnamese", "street-food"],
    portionNote: "Bánh mì trứng ốp la, patê, rau sống.",
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Giá trị tham khảo theo công thức; thay đổi theo khẩu phần và cách chế biến.",
    items: [
      { foodId: "banh-mi", amountG: 75, note: "Bánh mì" },
      { foodId: "trung-ga", amountG: 45, note: "Trứng gà ốp la" },
      { foodId: "pate-gan", amountG: 15, note: "Patê" },
      { foodId: "xa-lach", amountG: 20, note: "Rau" },
      { foodId: "ot-chuong", amountG: 10, note: "Ớt tương" },
      { foodId: "sot-mayonnaise", amountG: 5, note: "Mayonnaise" }
    ]
  }
];
