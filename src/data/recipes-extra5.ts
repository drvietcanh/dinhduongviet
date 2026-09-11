import type { Recipe } from "./nutrition";

export const extraRecipes5: Recipe[] = [
  // ─── Canh ───────────────────────────────────────
  {
    id: "canh-rau-den-thit-bam", slug: "canh-rau-den-thit-bam", name: "Canh rau dền thịt băm",
    aliases: ["canh rau den"],
    servingName: "1 bát", servingWeightG: 300,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh rau dền nấu với thịt heo băm, món dân dã bổ sắt.",
    items: [
      { foodId: "rau-dan", amountG: 150, note: "Rau dền tươi" },
      { foodId: "thit-heo-bam", amountG: 40, note: "Thịt heo băm" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nêm" }
    ]
  },
  {
    id: "canh-mong-toi-cua", slug: "canh-mong-toi-cua", name: "Canh mồng tơi cua đồng",
    aliases: ["canh mong toi cua"],
    servingName: "1 bát", servingWeightG: 350,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh mồng tơi nấu với thịt cua đồng (gạch cua).",
    items: [
      { foodId: "mong-toi", amountG: 150, note: "Rau mồng tơi" },
      { foodId: "gach-cua", amountG: 30, note: "Gạch cua đồng" },
      { foodId: "cua-dong", amountG: 30, note: "Thịt cua" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" }
    ]
  },
  {
    id: "canh-muop-huong-tom", slug: "canh-muop-huong-tom", name: "Canh mướp hương tôm",
    aliases: ["canh muop huong tom"],
    servingName: "1 bát", servingWeightG: 300,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh mướp hương nấu tôm khô, thanh mát.",
    items: [
      { foodId: "muop-huong", amountG: 180, note: "Mướp hương" },
      { foodId: "tom-kho", amountG: 15, note: "Tôm khô" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" }
    ]
  },
  {
    id: "canh-bi-xanh-tom-kho", slug: "canh-bi-xanh-tom-kho", name: "Canh bí xanh tôm khô",
    aliases: ["canh bi xanh tom kho"],
    servingName: "1 bát", servingWeightG: 300,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh bí xanh nấu tôm khô, mát và lợi tiểu.",
    items: [
      { foodId: "bi-xanh", amountG: 200, note: "Bí xanh" },
      { foodId: "tom-kho", amountG: 15, note: "Tôm khô" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "hanh-la", amountG: 5, note: "Hành" }
    ]
  },
  {
    id: "canh-chua-bong-dien-dien", slug: "canh-chua-bong-dien-dien", name: "Canh chua bông điên điển",
    aliases: ["canh chua bong dien dien"],
    servingName: "1 tô", servingWeightG: 350,
    tags: ["vietnamese", "soup", "mien-tay"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh chua miền Tây với bông điên điển, me, tôm.",
    items: [
      { foodId: "bong-dien-dien", amountG: 80, note: "Bông điên điển" },
      { foodId: "tom-kho", amountG: 20, note: "Tôm khô" },
      { foodId: "ca-loc", amountG: 60, note: "Cá lóc" },
      { foodId: "gia-do", amountG: 30, note: "Giá" },
      { foodId: "me", amountG: 10, note: "Me vắt" },
      { foodId: "hanh-la", amountG: 5, note: "Ngò om" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" }
    ]
  },
  {
    id: "canh-cai-xanh-nam", slug: "canh-cai-xanh-nam", name: "Canh cải xanh nấm",
    aliases: ["canh cai xanh nam"],
    servingName: "1 bát", servingWeightG: 300,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh rau cải xanh nấu với nấm rơm.",
    items: [
      { foodId: "cai-xanh", amountG: 150, note: "Cải xanh" },
      { foodId: "nam-rom", amountG: 50, note: "Nấm rơm" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "toi", amountG: 3, note: "Tỏi" }
    ]
  },
  {
    id: "sup-nam", slug: "sup-nam", name: "Súp nấm",
    aliases: ["sup nam"],
    servingName: "1 bát", servingWeightG: 250,
    tags: ["vietnamese", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Súp nấm sánh nhẹ, phù hợp ăn chay hoặc bệnh nhân.",
    items: [
      { foodId: "nam-rom", amountG: 60, note: "Nấm rơm" },
      { foodId: "nam-kim-cham", amountG: 40, note: "Nấm kim châm" },
      { foodId: "trung-ga", amountG: 25, note: "Lòng đỏ trứng" },
      { foodId: "bot-bap", amountG: 10, note: "Bột bắp tạo sánh" },
      { foodId: "nuoc-dung-ga", amountG: 250, note: "Nước dùng" },
      { foodId: "hanh-la", amountG: 5, note: "Hành ngò" }
    ]
  },
  // ─── Rau luộc / xào ─────────────────────────────
  {
    id: "mong-toi-luoc", slug: "mong-toi-luoc", name: "Mồng tơi luộc",
    aliases: ["mong toi luoc"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "vegetable"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Rau mồng tơi luộc chấm nước mắm tỏi ớt.",
    items: [
      { foodId: "mong-toi", amountG: 200, note: "Mồng tơi" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm tỏi ớt" }
    ]
  },
  {
    id: "rau-den-luoc", slug: "rau-den-luoc", name: "Rau dền luộc",
    aliases: ["rau den luoc"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "vegetable"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Rau dền cơm luộc chấm nước mắm chua ngọt.",
    items: [
      { foodId: "rau-dan", amountG: 200, note: "Rau dền" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "rau-day-luoc", slug: "rau-day-luoc", name: "Rau đay luộc",
    aliases: ["rau day luoc"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "vegetable"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Rau đay luộc, thường ăn với cà muối.",
    items: [
      { foodId: "rau-day", amountG: 200, note: "Rau đay" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "cai-thia-thao-luoc", slug: "cai-thia-thao-luoc", name: "Cải thảo luộc",
    aliases: ["cai thao luoc"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "vegetable"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cải thảo luộc chấm nước tương hoặc nước mắm tỏi ớt.",
    items: [
      { foodId: "bap-cai-thao", amountG: 200, note: "Cải thảo" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "sup-lo-xao-tom", slug: "sup-lo-xao-tom", name: "Súp lơ xào tôm",
    aliases: ["sup lo xao tom"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Súp lơ xanh xào tôm nõn.",
    items: [
      { foodId: "sup-lo", amountG: 150, note: "Súp lơ xanh" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm nõn" },
      { foodId: "dau-an", amountG: 8, note: "Dầu xào" },
      { foodId: "toi", amountG: 3, note: "Tỏi" }
    ]
  },
  {
    id: "dau-que-xao-toi", slug: "dau-que-xao-toi", name: "Đậu que xào tỏi",
    aliases: ["dau que xao toi"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry", "vegetarian"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đậu que xào tỏi, món chay hoặc mặn đều ngon.",
    items: [
      { foodId: "dau-que", amountG: 180, note: "Đậu que" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "toi", amountG: 5, note: "Tỏi băm" }
    ]
  },
  {
    id: "mang-tay-xao-tom", slug: "mang-tay-xao-tom", name: "Măng tây xào tôm",
    aliases: ["mang tay xao tom"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Măng tây xào tôm thanh đạm.",
    items: [
      { foodId: "mang-tay", amountG: 150, note: "Măng tây" },
      { foodId: "tom-tuoi", amountG: 50, note: "Tôm" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "toi", amountG: 3, note: "Tỏi" }
    ]
  },
  {
    id: "nam-xao-thap-cam", slug: "nam-xao-thap-cam", name: "Nấm xào thập cẩm",
    aliases: ["nam xao thap cam"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry", "vegetarian"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Các loại nấm xào rau củ.",
    items: [
      { foodId: "nam-kim-cham", amountG: 60, note: "Nấm kim châm" },
      { foodId: "nam-dong-co", amountG: 50, note: "Nấm đông cô" },
      { foodId: "nam-bao-ngu", amountG: 50, note: "Nấm bào ngư" },
      { foodId: "ca-rot", amountG: 30, note: "Cà rốt" },
      { foodId: "dau-an", amountG: 10, note: "Dầu" },
      { foodId: "toi", amountG: 5, note: "Tỏi" }
    ]
  },
  {
    id: "su-su-xao-toi", slug: "su-su-xao-toi", name: "Su su xào tỏi",
    aliases: ["su su xao toi"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Su su thái sợi xào tỏi thơm ngon.",
    items: [
      { foodId: "su-hao", amountG: 180, note: "Su su" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "toi", amountG: 5, note: "Tỏi" }
    ]
  },
  // ─── Gỏi ─────────────────────────────────────────
  {
    id: "goi-buoi-tom-thit", slug: "goi-buoi-tom-thit", name: "Gỏi bưởi tôm thịt",
    aliases: ["goi buoi tom thit"],
    servingName: "1 đĩa", servingWeightG: 250,
    tags: ["vietnamese", "salad"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Gỏi bưởi trộn tôm thịt, đậu phộng.",
    items: [
      { foodId: "buoi", amountG: 150, note: "Múi bưởi tách" },
      { foodId: "tom-tuoi", amountG: 40, note: "Tôm luộc" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Thịt luộc" },
      { foodId: "lac-rang", amountG: 10, note: "Đậu phộng rang" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Rau thơm" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm trộn" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" }
    ]
  },
  {
    id: "goi-oi-tom-thit", slug: "goi-oi-tom-thit", name: "Gỏi ổi tôm thịt",
    aliases: ["goi oi tom thit"],
    servingName: "1 đĩa", servingWeightG: 250,
    tags: ["vietnamese", "salad"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Gỏi ổi xanh trộn tôm thịt, chua ngọt.",
    items: [
      { foodId: "oi-ruot-trang", amountG: 150, note: "Ổi xanh" },
      { foodId: "tom-tuoi", amountG: 40, note: "Tôm" },
      { foodId: "thit-heo-nac", amountG: 40, note: "Thịt luộc" },
      { foodId: "lac-rang", amountG: 10, note: "Đậu phộng" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Rau thơm" },
      { foodId: "nuoc-mam", amountG: 10, note: "Nước mắm" }
    ]
  },
  {
    id: "goi-muc", slug: "goi-muc", name: "Gỏi mực",
    aliases: ["goi muc"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "salad"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Mực luộc trộn rau thơm, chanh ớt.",
    items: [
      { foodId: "muc-tuoi", amountG: 150, note: "Mực luộc" },
      { foodId: "rau-thom-hanh", amountG: 20, note: "Rau thơm" },
      { foodId: "xa-lach", amountG: 30, note: "Xà lách" },
      { foodId: "chanh-day", amountG: 10, note: "Chanh" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  // ─── Đồ uống ─────────────────────────────────────
  {
    id: "nuoc-ep-cam-tuoi", slug: "nuoc-ep-cam-tuoi", name: "Nước ép cam tươi",
    aliases: ["nuoc ep cam tuoi"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink", "juice"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cam vắt tươi, không đường hoặc ít đường.",
    items: [
      { foodId: "cam-sanh", amountG: 300, note: "Cam (3 quả)" },
      { foodId: "duong-trang", amountG: 5, note: "Đường (tuỳ chọn)" }
    ]
  },
  {
    id: "nuoc-ep-dua-hau-nguyen-chat", slug: "nuoc-ep-dua-hau-nguyen-chat", name: "Nước ép dưa hấu",
    aliases: ["nuoc ep dua hau"],
    servingName: "1 ly", servingWeightG: 300,
    tags: ["vietnamese", "drink", "juice"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Dưa hấu ép nguyên chất.",
    items: [
      { foodId: "dua-hau", amountG: 400, note: "Dưa hấu (xay ép)" }
    ]
  },
  {
    id: "sinh-to-bo-trai-cay", slug: "sinh-to-bo-trai-cay", name: "Sinh tố bơ sữa",
    aliases: ["sinh to bo"],
    servingName: "1 ly", servingWeightG: 300,
    tags: ["vietnamese", "drink", "smoothie"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Sinh tố bơ sữa đặc, thạch thái nhỏ.",
    items: [
      { foodId: "bo-trai", amountG: 150, note: "Bơ chín" },
      { foodId: "sua-dac", amountG: 20, note: "Sữa đặc" },
      { foodId: "sua-tuoi", amountG: 100, note: "Sữa tươi" },
      { foodId: "dua", amountG: 30, note: "Đá" }
    ]
  },
  {
    id: "nuoc-ep-ca-rot-tuoi", slug: "nuoc-ep-ca-rot-tuoi", name: "Nước ép cà rốt",
    aliases: ["nuoc ep ca rot"],
    servingName: "1 ly", servingWeightG: 250,
    tags: ["vietnamese", "drink", "juice"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cà rốt ép tươi, giàu vitamin A.",
    items: [
      { foodId: "ca-rot", amountG: 300, note: "Cà rốt" }
    ]
  },
  {
    id: "ca-phe-sua-da-mon", slug: "ca-phe-sua-da-mon", name: "Cà phê sữa đá pha phin",
    aliases: ["ca phe sua da"],
    servingName: "1 ly", servingWeightG: 200,
    tags: ["vietnamese", "drink", "coffee"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cà phê phin pha sữa đặc và đá.",
    items: [
      { foodId: "ca-phe-den", amountG: 20, note: "Cà phê đen" },
      { foodId: "sua-dac", amountG: 30, note: "Sữa đặc" },
      { foodId: "dua", amountG: 80, note: "Đá viên" }
    ]
  },
  // ─── Cơm / món chính ─────────────────────────────
  {
    id: "com-gao-lut-ca-hoi", slug: "com-gao-lut-ca-hoi", name: "Cơm gạo lứt cá hồi",
    aliases: ["com gao lut ca hoi"],
    servingName: "1 suất", servingWeightG: 400,
    tags: ["vietnamese", "healthy"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cơm gạo lứt ăn kèm cá hồi áp chảo và rau xà lách.",
    items: [
      { foodId: "com-gao-lut", amountG: 200, note: "Cơm gạo lứt" },
      { foodId: "ca-hoi", amountG: 120, note: "Cá hồi áp chảo" },
      { foodId: "xa-lach", amountG: 50, note: "Xà lách" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "dau-o-liu", amountG: 5, note: "Dầu olive" }
    ]
  },
  {
    id: "com-chien-thap-cam", slug: "com-chien-thap-cam", name: "Cơm chiên thập cẩm",
    aliases: ["com chien thap cam"],
    servingName: "1 đĩa", servingWeightG: 350,
    tags: ["vietnamese", "fried-rice"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cơm chiên với tôm, thịt, trứng và rau củ.",
    items: [
      { foodId: "com-trang", amountG: 250, note: "Cơm nguội" },
      { foodId: "tom-tuoi", amountG: 30, note: "Tôm" },
      { foodId: "thit-bo-bam", amountG: 30, note: "Thịt bằm" },
      { foodId: "trung-ga", amountG: 50, note: "Trứng gà" },
      { foodId: "ca-rot", amountG: 20, note: "Cà rốt hạt lựu" },
      { foodId: "dau-que", amountG: 20, note: "Đậu que" },
      { foodId: "hanh-la", amountG: 10, note: "Hành lá" },
      { foodId: "dau-an", amountG: 12, note: "Dầu chiên" }
    ]
  },
  {
    id: "bo-bit-tet", slug: "bo-bit-tet", name: "Bò bít tết kèm khoai tây",
    aliases: ["bo bit tet", "bít tết bò"],
    servingName: "1 suất", servingWeightG: 350,
    tags: ["vietnamese", "western", "beef"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bò bít tết sốt vang ăn kèm khoai tây chiên, rau xà lách.",
    items: [
      { foodId: "thit-bo-thit-thit", amountG: 150, note: "Bò thăn" },
      { foodId: "khoai-tay", amountG: 100, note: "Khoai tây chiên" },
      { foodId: "xa-lach", amountG: 50, note: "Xà lách" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "nuoc-mam", amountG: 5, note: "Gia vị" },
      { foodId: "dau-an", amountG: 10, note: "Dầu" }
    ]
  },
  {
    id: "bap-nep-luoc", slug: "bap-nep-luoc", name: "Bắp nếp luộc",
    aliases: ["bap nep luoc", "ngô luộc"],
    servingName: "1 trái", servingWeightG: 200,
    tags: ["vietnamese", "snack"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bắp nếp luộc, món ăn vặt dân dã.",
    items: [
      { foodId: "bap-nep-luoc", amountG: 180, note: "Bắp nếp" },
      { foodId: "muoi-tieu", amountG: 1, note: "Muối tiêu" }
    ]
  },
  {
    id: "khoai-lang-luoc-mon-an", slug: "khoai-lang-luoc-mon-an", name: "Khoai lang luộc nguyên củ",
    aliases: ["khoai lang luoc"],
    servingName: "1 củ", servingWeightG: 200,
    tags: ["vietnamese", "snack"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Khoai lang luộc ăn sáng hoặc ăn vặt.",
    items: [
      { foodId: "khoai-lang", amountG: 200, note: "Khoai lang" }
    ]
  },
  {
    id: "khoai-lang-chien-gion", slug: "khoai-lang-chien-gion", name: "Khoai lang chiên giòn",
    aliases: ["khoai lang chien"],
    servingName: "1 đĩa", servingWeightG: 150,
    tags: ["vietnamese", "snack", "fried"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Khoai lang chiên giòn.",
    items: [
      { foodId: "khoai-lang", amountG: 200, note: "Khoai lang" },
      { foodId: "dau-an", amountG: 15, note: "Dầu chiên" }
    ]
  },
  // ─── Bánh ─────────────────────────────────────────
  {
    id: "banh-gio-nhan-thit", slug: "banh-gio-nhan-thit", name: "Bánh giò",
    aliases: ["banh gio"],
    servingName: "1 cái", servingWeightG: 150,
    tags: ["vietnamese", "cake"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh giò nhân thịt hấp, lá gói tam giác.",
    items: [
      { foodId: "bot-gao", amountG: 40, note: "Bột gạo" },
      { foodId: "thit-heo-bam", amountG: 40, note: "Nhân thịt" },
      { foodId: "nam-dong-co", amountG: 10, note: "Nấm đông cô" },
      { foodId: "hanh-la", amountG: 5, note: "Hành" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nêm" }
    ]
  },
  {
    id: "banh-bong-lan-don-gian", slug: "banh-bong-lan-don-gian", name: "Bánh bông lan",
    aliases: ["banh bong lan", "bánh kem"],
    servingName: "1 miếng", servingWeightG: 80,
    tags: ["vietnamese", "cake"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh bông lan trứng, bột mì.",
    items: [
      { foodId: "trung-ga", amountG: 50, note: "Trứng" },
      { foodId: "bot-mi-da", amountG: 30, note: "Bột mì" },
      { foodId: "duong-trang", amountG: 20, note: "Đường" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  {
    id: "banh-tieu-ran", slug: "banh-tieu-ran", name: "Bánh tiêu chiên giòn",
    aliases: ["banh tieu"],
    servingName: "1 cái", servingWeightG: 40,
    tags: ["vietnamese", "snack", "fried"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh tiêu chiên giòn, có hoặc không nhân.",
    items: [
      { foodId: "bot-mi-da", amountG: 30, note: "Bột mì" },
      { foodId: "duong-trang", amountG: 5, note: "Đường" },
      { foodId: "dau-an", amountG: 8, note: "Dầu chiên" },
      { foodId: "me-vung", amountG: 2, note: "Mè" }
    ]
  },
  {
    id: "banh-trung-thu-thap-cam", slug: "banh-trung-thu-thap-cam", name: "Bánh trung thu thập cẩm",
    aliases: ["banh trung thu thap cam"],
    servingName: "1 cái", servingWeightG: 180,
    tags: ["vietnamese", "cake", "seasonal"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Bánh trung thu nướng nhân thập cẩm, hạt sen, mỡ đường.",
    items: [
      { foodId: "bot-mi-da", amountG: 50, note: "Vỏ bánh" },
      { foodId: "hat-sen-kho", amountG: 30, note: "Hạt sen" },
      { foodId: "duong-trang", amountG: 30, note: "Đường" },
      { foodId: "thit-nguoi-kho", amountG: 15, note: "Lạp xưởng" },
      { foodId: "hanh-la", amountG: 5, note: "Hành phi" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  // ─── Chè ──────────────────────────────────────────
  {
    id: "chebuoi", slug: "che-buoi-dau-xanh", name: "Chè bưởi đậu xanh",
    aliases: ["che buoi"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Chè bưởi nấu với đậu xanh, nước cốt dừa.",
    items: [
      { foodId: "buoi", amountG: 80, note: "Cùi bưởi" },
      { foodId: "dau-xanh", amountG: 30, note: "Đậu xanh" },
      { foodId: "duong-trang", amountG: 25, note: "Đường" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" },
      { foodId: "bot-bap", amountG: 5, note: "Bột bắp" }
    ]
  },
  {
    id: "che-ba-ba-khoai", slug: "che-ba-ba-khoai", name: "Chè bà ba khoai",
    aliases: ["che ba ba"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Chè bà ba với khoai môn, khoai mỡ, bột báng.",
    items: [
      { foodId: "khoai-mon", amountG: 50, note: "Khoai môn" },
      { foodId: "khoai-mi", amountG: 50, note: "Khoai mì" },
      { foodId: "duong-trang", amountG: 20, note: "Đường" },
      { foodId: "nuoc-cot-dua-dac", amountG: 20, note: "Nước cốt dừa" }
    ]
  },
  {
    id: "che-khuc-bach-trai-cay", slug: "che-khuc-bach-trai-cay", name: "Chè khúc bạch trái cây",
    aliases: ["che khuc bach trai cay"],
    servingName: "1 chén", servingWeightG: 200,
    tags: ["vietnamese", "dessert"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Khúc bạch ăn kèm trái cây tươi, nước đường, nước cốt dừa.",
    items: [
      { foodId: "sua-tuoi", amountG: 60, note: "Khúc bạch" },
      { foodId: "thanh-long", amountG: 40, note: "Thanh long" },
      { foodId: "xoai", amountG: 40, note: "Xoài" },
      { foodId: "duong-trang", amountG: 15, note: "Nước đường" },
      { foodId: "nuoc-cot-dua-dac", amountG: 15, note: "Nước cốt dừa" }
    ]
  },
  {
    id: "che-dau-den-nau", slug: "che-dau-den-nau", name: "Chè đậu đen nước cốt dừa",
    aliases: ["che dau den"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Chè đậu đen nấu với đường và nước cốt dừa.",
    items: [
      { foodId: "dau-den", amountG: 50, note: "Đậu đen" },
      { foodId: "duong-trang", amountG: 25, note: "Đường" },
      { foodId: "nuoc-cot-dua-dac", amountG: 15, note: "Nước cốt dừa" }
    ]
  },
  {
    id: "che-dau-do", slug: "che-dau-do", name: "Chè đậu đỏ",
    aliases: ["che dau do"],
    servingName: "1 chén", servingWeightG: 250,
    tags: ["vietnamese", "dessert"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Chè đậu đỏ nấu với đường phèn.",
    items: [
      { foodId: "dau-do", amountG: 50, note: "Đậu đỏ" },
      { foodId: "duong-trang", amountG: 25, note: "Đường" },
      { foodId: "nuoc-cot-dua-dac", amountG: 15, note: "Nước cốt dừa" }
    ]
  },
  // ─── Thịt/Cá ─────────────────────────────────────
  {
    id: "ca-hoi-ap-chao", slug: "ca-hoi-ap-chao", name: "Cá hồi áp chảo",
    aliases: ["ca hoi ap chao"],
    servingName: "1 suất", servingWeightG: 200,
    tags: ["vietnamese", "healthy"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cá hồi áp chảo sốt bơ chanh, ăn với rau xà lách.",
    items: [
      { foodId: "ca-hoi", amountG: 150, note: "Cá hồi phi lê" },
      { foodId: "bo-lat", amountG: 10, note: "Bơ" },
      { foodId: "chanh-day", amountG: 5, note: "Chanh" },
      { foodId: "toi", amountG: 3, note: "Tỏi" },
      { foodId: "xa-lach", amountG: 50, note: "Xà lách" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" }
    ]
  },
  {
    id: "thit-nguoi-kho-mon", slug: "thit-nguoi-kho-mon", name: "Thịt nguội kho",
    aliases: ["thit nguoi kho"],
    servingName: "1 đĩa", servingWeightG: 150,
    tags: ["vietnamese", "pork"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Thịt nguội thái lát, chiên hoặc xào.",
    items: [
      { foodId: "thit-nguoi-kho", amountG: 100, note: "Thịt nguội" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  {
    id: "supp-lo-trang-xao-toi", slug: "sup-lo-trang-xao-toi", name: "Súp lơ trắng xào tỏi",
    aliases: ["sup lo trang xao toi"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "stir-fry"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Súp lơ trắng xào tỏi đơn giản.",
    items: [
      { foodId: "sup-lo-trang", amountG: 180, note: "Súp lơ trắng" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "toi", amountG: 5, note: "Tỏi" }
    ]
  },
  {
    id: "ca-tim-nuong", slug: "ca-tim-nuong", name: "Cà tím nướng mỡ hành",
    aliases: ["ca tim nuong mo hanh"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "grill"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cà tím nướng, rưới mỡ hành và tương.",
    items: [
      { foodId: "ca-tim", amountG: 180, note: "Cà tím" },
      { foodId: "dau-an", amountG: 8, note: "Mỡ hành" },
      { foodId: "hanh-la", amountG: 10, note: "Hành lá" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" }
    ]
  },
  {
    id: "te-kho-tieu", slug: "tep-kho-tieu", name: "Tép kho tiêu",
    aliases: ["tep kho tieu"],
    servingName: "1 đĩa", servingWeightG: 80,
    tags: ["vietnamese", "seafood"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Tép đồng kho tiêu, ăn với cơm nóng.",
    items: [
      { foodId: "tep-dong", amountG: 70, note: "Tép đồng" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước mắm" },
      { foodId: "duong-trang", amountG: 3, note: "Đường" },
      { foodId: "hat-tieu", amountG: 1, note: "Tiêu" },
      { foodId: "dau-an", amountG: 5, note: "Dầu" }
    ]
  },
  // ─── Cháo ─────────────────────────────────────────
  {
    id: "chao-suon", slug: "chao-suon", name: "Cháo sườn",
    aliases: ["chao suon"],
    servingName: "1 tô", servingWeightG: 400,
    tags: ["vietnamese", "porridge"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cháo sườn non nấu cùng nấm mèo, hành khô.",
    items: [
      { foodId: "com-trang", amountG: 100, note: "Gạo nấu cháo" },
      { foodId: "gio-heo", amountG: 60, note: "Sườn non" },
      { foodId: "moc-nhi", amountG: 10, note: "Nấm mèo" },
      { foodId: "hanh-la", amountG: 5, note: "Hành lá" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nêm" }
    ]
  },
  {
    id: "chao-ca-loc", slug: "chao-ca-loc", name: "Cháo cá lóc",
    aliases: ["chao ca loc"],
    servingName: "1 tô", servingWeightG: 400,
    tags: ["vietnamese", "porridge"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cháo cá lóc rau răm, thơm ngon bổ dưỡng.",
    items: [
      { foodId: "com-trang", amountG: 100, note: "Gạo nấu cháo" },
      { foodId: "ca-loc", amountG: 80, note: "Cá lóc" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Rau răm" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nêm" }
    ]
  },
  // ─── Trái cây ─────────────────────────────────────
  {
    id: "dia-trai-cay", slug: "dia-trai-cay", name: "Đĩa trái cây tổng hợp",
    aliases: ["dia trai cay"],
    servingName: "1 đĩa", servingWeightG: 200,
    tags: ["vietnamese", "fruit"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Trái cây tươi các loại thái miếng.",
    items: [
      { foodId: "dua-hau", amountG: 50, note: "Dưa hấu" },
      { foodId: "xoai", amountG: 40, note: "Xoài" },
      { foodId: "thanh-long", amountG: 40, note: "Thanh long" },
      { foodId: "nho", amountG: 30, note: "Nho" },
      { foodId: "buoi", amountG: 40, note: "Bưởi" }
    ]
  },
  {
    id: "dua-hau-don-gian", slug: "dua-hau-don-gian", name: "Dưa hấu đơn giản",
    aliases: ["dua hau don gian"],
    servingName: "1 miếng", servingWeightG: 200,
    tags: ["vietnamese", "fruit"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Dưa hấu tươi thái miếng.",
    items: [
      { foodId: "dua-hau", amountG: 200, note: "Dưa hấu" }
    ]
  },
  // ─── Cơm ──────────────────────────────────────────
  {
    id: "com-ga-ta", slug: "com-ga-ta", name: "Cơm gà ta luộc",
    aliases: ["com ga ta luoc"],
    servingName: "1 suất", servingWeightG: 400,
    tags: ["vietnamese", "rice"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cơm gà ta luộc chấm muối tiêu chanh, rau xà lách.",
    items: [
      { foodId: "com-trang", amountG: 200, note: "Cơm" },
      { foodId: "thit-ga-dui", amountG: 120, note: "Gà luộc" },
      { foodId: "xa-lach", amountG: 30, note: "Xà lách" },
      { foodId: "ca-chua", amountG: 30, note: "Cà chua" },
      { foodId: "hanh-la", amountG: 5, note: "Hành" }
    ]
  },
  {
    id: "com-chien-hai-san", slug: "com-chien-hai-san", name: "Cơm chiên hải sản",
    aliases: ["com chien hai san"],
    servingName: "1 đĩa", servingWeightG: 350,
    tags: ["vietnamese", "fried-rice", "seafood"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Cơm chiên tôm, mực và rau củ.",
    items: [
      { foodId: "com-trang", amountG: 250, note: "Cơm nguội" },
      { foodId: "tom-tuoi", amountG: 30, note: "Tôm" },
      { foodId: "muc-tuoi", amountG: 30, note: "Mực" },
      { foodId: "trung-ga", amountG: 25, note: "Trứng" },
      { foodId: "dau-que", amountG: 15, note: "Đậu que" },
      { foodId: "ca-rot", amountG: 15, note: "Cà rốt" },
      { foodId: "dau-an", amountG: 12, note: "Dầu" }
    ]
  },
  // ─── Món chay ─────────────────────────────────────
  {
    id: "dau-hu-sot-ca-chua", slug: "dau-hu-sot-ca-chua", name: "Đậu hũ sốt cà chua",
    aliases: ["dau hu sot ca chua"],
    servingName: "1 đĩa", servingWeightG: 250,
    tags: ["vietnamese", "vegetarian", "tofu"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Đậu hũ chiên vàng, sốt cà chua, hành lá.",
    items: [
      { foodId: "dau-phu", amountG: 150, note: "Đậu hũ" },
      { foodId: "ca-chua", amountG: 80, note: "Cà chua" },
      { foodId: "dau-an", amountG: 8, note: "Dầu" },
      { foodId: "hanh-la", amountG: 10, note: "Hành lá" },
      { foodId: "nuoc-mam", amountG: 5, note: "Nước tương" }
    ]
  },
  {
    id: "canh-chua-chay", slug: "canh-chua-chay", name: "Canh chua chay",
    aliases: ["canh chua chay"],
    servingName: "1 tô", servingWeightG: 350,
    tags: ["vietnamese", "vegetarian", "soup"],
    sourceId: "recipe-estimate-v1", confidence: "low",
    note: "Canh chua chay với thơm, cà chua, đậu hũ, me.",
    items: [
      { foodId: "dau-phu", amountG: 60, note: "Đậu hũ chiên" },
      { foodId: "ca-chua", amountG: 50, note: "Cà chua" },
      { foodId: "gia-do", amountG: 40, note: "Giá" },
      { foodId: "me", amountG: 10, note: "Me" },
      { foodId: "nuoc-dung-bo", amountG: 300, note: "Nước" },
      { foodId: "rau-thom-hanh", amountG: 10, note: "Ngò gai" }
    ]
  }
];
