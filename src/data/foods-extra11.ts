import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; giá trị áp dụng cho đúng trạng thái và đơn vị ghi trên mục này.";

export const extraFoods11: Food[] = [
  {
    id: "khoai-lang-nghe-tuoi-vdd", slug: "khoai-lang-nghe-tuoi-vdd", name: "Khoai lang nghệ tươi",
    aliases: ["khoai lang nghe tuoi", "khoai lang ruot vang", "yellow sweet potato fresh"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Khoai lang nghệ tươi, chưa luộc/nướng.",
    nutrients: { energyKcal: 119, proteinG: 1.2, carbG: 27.9, fatG: 0.3, calciumMg: 36, ironMg: 0.9, sodiumMg: 350, potassiumMg: 107, magnesiumMg: 68, phosphorusMg: 56, vitaminCMg: 30, vitaminAUg: 122.5 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 2009: Khoai lang nghệ, tươi.", reviewNote: "Tên giống và trạng thái tươi khớp trực tiếp nguồn.", note: sourceNote
  },
  {
    id: "cai-bap-do-tuoi-vdd", slug: "cai-bap-do-tuoi-vdd", name: "Cải bắp đỏ tươi",
    aliases: ["cai bap do tuoi", "bap cai tim tuoi", "red cabbage fresh"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cải bắp đỏ tươi, chưa nấu; không dùng thay số liệu cải bắp trắng.",
    nutrients: { energyKcal: 61, proteinG: 1.9, carbG: 13, fatG: 0.2, sugarG: 3.91, calciumMg: 83, ironMg: 0.5, zincMg: 0.22, sodiumMg: 27, potassiumMg: 243, magnesiumMg: 16, phosphorusMg: 42, vitaminCMg: 60, vitaminAUg: 55.83, folateUg: 18 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4011: Cải bắp đỏ, tươi.", reviewNote: "Tên màu giống và trạng thái tươi khớp trực tiếp nguồn.", note: sourceNote
  },
  {
    id: "cai-bap-do-luoc-vdd", slug: "cai-bap-do-luoc-vdd", name: "Cải bắp đỏ luộc",
    aliases: ["cai bap do luoc", "bap cai tim luoc", "red cabbage boiled"],
    category: "Rau xanh", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Cải bắp đỏ đã luộc, không thêm dầu/muối.",
    nutrients: { energyKcal: 67, proteinG: 2.07, carbG: 14.13, fatG: 0.22, sugarG: 4.25, calciumMg: 90.22, ironMg: 0.54, zincMg: 0.24, sodiumMg: 29.35, potassiumMg: 264.13, magnesiumMg: 17.39, phosphorusMg: 45.65, vitaminCMg: 35.87, vitaminAUg: 60.69, folateUg: 11.74 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4011002: Cải bắp đỏ, luộc.", reviewNote: "Trạng thái luộc được tách riêng với thực phẩm tươi.", note: sourceNote
  },
  {
    id: "chuoi-xanh-tuoi-vdd", slug: "chuoi-xanh-tuoi-vdd", name: "Chuối xanh tươi",
    aliases: ["chuoi xanh tuoi", "green banana fresh"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Chuối xanh tươi; không dùng thay cho chuối chín hoặc chuối xanh luộc.",
    nutrients: { energyKcal: 78, proteinG: 1.2, carbG: 17.48, fatG: 0.32, sugarG: 1.95, calciumMg: 26, ironMg: 0.4, zincMg: 0.25, sodiumMg: 13, potassiumMg: 256, magnesiumMg: 17, phosphorusMg: 27, vitaminCMg: 31, vitaminAUg: 16.96, folateUg: 29 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4019: Chuối xanh, tươi.", reviewNote: "Độ chín và trạng thái tươi khớp trực tiếp nguồn.", note: sourceNote
  },
  {
    id: "chuoi-xanh-luoc-vdd", slug: "chuoi-xanh-luoc-vdd", name: "Chuối xanh luộc",
    aliases: ["chuoi xanh luoc", "green banana boiled"],
    category: "Trái cây", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Chuối xanh đã luộc, không thêm đường/nước cốt dừa.",
    nutrients: { energyKcal: 64, proteinG: 1, carbG: 14.83, fatG: 0.08, sugarG: 1.63, calciumMg: 21.67, ironMg: 0.33, zincMg: 0.21, sodiumMg: 10.83, potassiumMg: 213.33, magnesiumMg: 14.17, phosphorusMg: 22.5, vitaminCMg: 14.21, vitaminAUg: 14.13, folateUg: 14.5 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4019002: Chuối xanh, luộc.", reviewNote: "Trạng thái luộc được tách riêng với chuối xanh tươi.", note: sourceNote
  },
  {
    id: "gia-dau-tuong-tuoi-vdd", slug: "gia-dau-tuong-tuoi-vdd", name: "Giá đậu tương tươi",
    aliases: ["gia dau tuong tuoi", "gia dau nanh tuoi", "soybean sprouts fresh"],
    category: "Đậu", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Giá đậu tương tươi; khác với giá đậu xanh.",
    nutrients: { energyKcal: 82, proteinG: 7.7, carbG: 8.7, fatG: 1.8, calciumMg: 52, ironMg: 1.1, zincMg: 1.17, sodiumMg: 14, potassiumMg: 484, magnesiumMg: 72, phosphorusMg: 58, vitaminCMg: 10, vitaminAUg: 2.08, folateUg: 172 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4035: Giá đậu tương, tươi.", reviewNote: "Loại hạt nảy mầm được ghi rõ, không gộp với giá đậu xanh.", note: sourceNote
  },
  {
    id: "qua-gac-tuoi-vdd", slug: "qua-gac-tuoi-vdd", name: "Quả gấc tươi",
    aliases: ["qua gac tuoi", "trai gac tuoi", "fresh gac fruit"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Quả gấc tươi; khác với màng gấc tách riêng và dầu gấc.",
    nutrients: { energyKcal: 129, proteinG: 2.1, carbG: 12.3, fatG: 7.9, calciumMg: 56, ironMg: 1.2, phosphorusMg: 6.4, vitaminCMg: 11, vitaminAUg: 1926.25 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4034: Quả gấc, tươi.", reviewNote: "Nguồn xác định quả gấc tươi, không suy diễn sang dầu gấc hoặc thực phẩm bổ sung.", note: sourceNote
  },
  {
    id: "qua-khe-tuoi-vdd", slug: "qua-khe-tuoi-vdd", name: "Quả khế tươi",
    aliases: ["qua khe tuoi", "khe tuoi", "starfruit fresh"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Khế tươi, phần ăn được; không áp dụng cho khế rim đường hoặc nước ép pha đường.",
    nutrients: { energyKcal: 26, proteinG: 0.6, carbG: 5.47, fatG: 0.23, sugarG: 3.98, calciumMg: 10, ironMg: 0.9, zincMg: 0.12, sodiumMg: 2, potassiumMg: 133, magnesiumMg: 10, phosphorusMg: 8, vitaminCMg: 30, vitaminAUg: 3.08, folateUg: 12 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4045: Quả khế, tươi.", reviewNote: "Tên và trạng thái tươi khớp trực tiếp nguồn.", note: sourceNote
  },
  {
    id: "mang-tre-kho-vdd", slug: "mang-tre-kho-vdd", name: "Măng tre khô",
    aliases: ["mang tre kho", "mang kho", "dried bamboo shoots"],
    category: "Rau xanh", state: "dried", basis: "100g măng khô",
    edibleNote: "Măng tre khô trước khi ngâm/nấu; không so trực tiếp với măng tươi hoặc măng đã ngâm nở.",
    nutrients: { energyKcal: 301, proteinG: 13, carbG: 57.5, fatG: 2.1, calciumMg: 100, ironMg: 5, phosphorusMg: 200, vitaminCMg: 1, vitaminAUg: 1.67 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4051: Măng tre, khô.", reviewNote: "Loại măng tre và trạng thái khô được ghi rõ.", note: sourceNote
  },
  {
    id: "rau-cau-tuoi-vdd", slug: "rau-cau-tuoi-vdd", name: "Rau câu tươi",
    aliases: ["rau cau tuoi", "rong bien rau cau tuoi", "fresh seaweed"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Rau câu tươi dùng làm thực phẩm; không áp dụng cho thạch rau câu đã thêm đường.",
    nutrients: { energyKcal: 45, proteinG: 1.9, carbG: 9.1, fatG: 0.1, sugarG: 0.28, calciumMg: 85, ironMg: 0.9, zincMg: 0.58, sodiumMg: 9, potassiumMg: 226, magnesiumMg: 67, phosphorusMg: 34, folateUg: 85 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4068: Rau câu, tươi.", reviewNote: "Rau câu tươi được tách với món tráng miệng rau câu có đường.", note: sourceNote
  },
  {
    id: "rau-den-com-tuoi-vdd", slug: "rau-den-com-tuoi-vdd", name: "Rau dền cơm tươi",
    aliases: ["rau den com tuoi", "rau gien com tuoi", "amaranth fresh"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Rau dền cơm tươi; là giống được tách riêng, không dùng thay cho dền đỏ/trắng.",
    nutrients: { energyKcal: 27, proteinG: 3.4, carbG: 2.69, fatG: 0.31, calciumMg: 341, ironMg: 4.1, zincMg: 0.9, sodiumMg: 20, potassiumMg: 611, magnesiumMg: 55, phosphorusMg: 76, vitaminCMg: 63, vitaminAUg: 441.67, folateUg: 85 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4072: Rau giền cơm, tươi.", reviewNote: "Giữ cả chính tả nguồn 'giền' trong alias, nhưng không gộp các giống dền.", note: sourceNote
  },
  {
    id: "rau-den-trang-tuoi-vdd", slug: "rau-den-trang-tuoi-vdd", name: "Rau dền trắng tươi",
    aliases: ["rau den trang tuoi", "rau gien trang tuoi", "white amaranth fresh"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Rau dền trắng tươi; là giống được tách riêng, không dùng thay cho dền đỏ/dền cơm.",
    nutrients: { energyKcal: 48, proteinG: 3.2, carbG: 7.8, fatG: 0.4, calciumMg: 288, ironMg: 6.1, phosphorusMg: 80, vitaminCMg: 27, vitaminAUg: 237.92 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4074: Rau giền trắng, tươi.", reviewNote: "Giữ cả chính tả nguồn 'giền' trong alias, nhưng không gộp các giống dền.", note: sourceNote
  },
  {
    id: "rau-cai-chip-tuoi-vdd", slug: "rau-cai-chip-tuoi-vdd", name: "Rau cải chíp tươi",
    aliases: ["rau cai chip tuoi", "cai chip tuoi", "baby bok choy fresh"],
    category: "Rau xanh", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Cải chíp tươi; không dùng thay cho cải thìa hay cải bắp khác giống.",
    nutrients: { energyKcal: 17, proteinG: 1.5, carbG: 2.18, fatG: 0.2, sugarG: 1.18, calciumMg: 105, ironMg: 0.8, zincMg: 0.19, sodiumMg: 65, potassiumMg: 252, magnesiumMg: 19, phosphorusMg: 37, vitaminCMg: 45, vitaminAUg: 223, folateUg: 66 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4135: Rau cải chíp.", reviewNote: "Tên giống cải chíp khớp trực tiếp nguồn.", note: sourceNote
  },
  {
    id: "ca-rot-luoc-vdd", slug: "ca-rot-luoc-vdd", name: "Cà rốt luộc",
    aliases: ["ca rot luoc", "carrot boiled"],
    category: "Củ quả", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Cà rốt đỏ/vàng đã luộc, không thêm dầu hoặc đường.",
    nutrients: { energyKcal: 47, proteinG: 1.6, carbG: 9.79, fatG: 0.21, sugarG: 4.83, calciumMg: 45.74, ironMg: 0.85, zincMg: 1.18, sodiumMg: 55.32, potassiumMg: 282.45, magnesiumMg: 12.77, phosphorusMg: 41.49, vitaminCMg: 1.76, vitaminAUg: 724.96, folateUg: 12.13 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4007002: Cà rốt (củ đỏ, vàng), luộc.", reviewNote: "Trạng thái luộc được tách riêng với cà rốt tươi.", note: sourceNote
  },
  {
    id: "muop-luoc-vdd", slug: "muop-luoc-vdd", name: "Mướp luộc",
    aliases: ["muop luoc", "loofah boiled"],
    category: "Củ quả", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Mướp đã luộc, không thêm dầu/muối; không áp dụng cho mướp xào.",
    nutrients: { energyKcal: 26, proteinG: 1.25, carbG: 4.86, fatG: 0.14, calciumMg: 38.89, ironMg: 1.11, zincMg: 0.1, sodiumMg: 4.17, potassiumMg: 193.06, magnesiumMg: 19.44, phosphorusMg: 62.5, vitaminCMg: 6.11, vitaminAUg: 18.52, folateUg: 5.83 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 4054002: Mướp, luộc.", reviewNote: "Trạng thái luộc được tách riêng với mướp tươi.", note: sourceNote
  }
];
