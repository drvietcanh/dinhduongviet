import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; chỉ áp dụng cho đúng trạng thái và đơn vị ghi trên mục này.";

// Batch 12: đậu, hạt và chế phẩm đơn thành phần. Mỗi mục tách theo phần ăn/trạng thái.
export const extraFoods12: Food[] = [
  {
    id: "hat-oc-cho-rang-vdd", slug: "hat-oc-cho-rang-vdd", name: "Hạt óc chó rang",
    aliases: ["hat oc cho rang", "oc cho rang", "roasted walnuts"],
    category: "Hạt", state: "processed", basis: "100g hạt rang",
    edibleNote: "Hạt óc chó đã rang; không dùng thay cho óc chó sống hoặc sản phẩm tẩm vị.",
    nutrients: { energyKcal: 703, proteinG: 15.23, carbG: 13.71, fatG: 65.21, fiberG: 6.7, calciumMg: 98, ironMg: 2.91, zincMg: 3.09, sodiumMg: 2, potassiumMg: 441, magnesiumMg: 158, phosphorusMg: 346, vitaminCMg: 1.3, seleniumMcg: 4.9 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3043011: Hạt óc chó rang.", reviewNote: "Trạng thái rang được tách riêng với mục óc chó không nêu trạng thái.", note: sourceNote
  },
  {
    id: "dau-dua-hat-kho-vdd", slug: "dau-dua-hat-kho-vdd", name: "Đậu đũa hạt khô",
    aliases: ["dau dua hat kho", "hat dau dua kho", "dried yardlong bean seeds"],
    category: "Đậu", state: "dried", basis: "100g hạt khô",
    edibleNote: "Hạt đậu đũa khô; khác với quả đậu đũa tươi dùng làm rau.",
    nutrients: { energyKcal: 338, proteinG: 23.7, carbG: 56.2, fatG: 2, fiberG: 4.3, calciumMg: 110, ironMg: 6.5, phosphorusMg: 382, vitaminCMg: 1, vitaminAUg: 0.83 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3005: Đậu đũa, hạt, khô.", reviewNote: "Không gộp với đậu đũa quả non hoặc đậu cô ve.", note: sourceNote
  },
  {
    id: "hat-macca-rang-vdd", slug: "hat-macca-rang-vdd", name: "Hạt macca rang",
    aliases: ["hat macca rang", "hat mac ca rang", "roasted macadamia nuts"],
    category: "Hạt", state: "processed", basis: "100g hạt rang",
    edibleNote: "Hạt macca đã rang; không dùng thay cho macca sống hoặc sản phẩm tẩm vị.",
    nutrients: { energyKcal: 767, proteinG: 7.79, carbG: 12.83, fatG: 76.08, fiberG: 8, calciumMg: 70, ironMg: 2.65, zincMg: 1.29, sodiumMg: 353, potassiumMg: 363, magnesiumMg: 118, phosphorusMg: 198, vitaminCMg: 0.7, seleniumMcg: 11.7 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3044011: Hạt macca rang.", reviewNote: "Giữ trạng thái rang tách biệt với mục macca không nêu trạng thái.", note: sourceNote
  },
  {
    id: "dau-tuong-hat-kho-vdd", slug: "dau-tuong-hat-kho-vdd", name: "Đậu tương hạt khô",
    aliases: ["dau tuong hat kho", "dau nanh kho", "hat dau nanh kho", "dried soybean seeds"],
    category: "Đậu", state: "dried", basis: "100g hạt khô",
    edibleNote: "Đậu tương/đậu nành hạt khô; không dùng thay cho giá đậu tương hoặc đậu phụ.",
    nutrients: { energyKcal: 418, proteinG: 34, carbG: 29.1, fatG: 18.4, fiberG: 4.5, calciumMg: 165, ironMg: 11, zincMg: 3.8, sodiumMg: 2, potassiumMg: 1504, magnesiumMg: 236, phosphorusMg: 690, vitaminCMg: 4, vitaminAUg: 2.5, seleniumMcg: 1.5 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3007: Đậu tương, đậu nành, hạt khô.", reviewNote: "Đậu tương và đậu nành là tên đồng nghĩa trong nguồn.", note: sourceNote
  },
  {
    id: "dau-tay-trang-hat-kho-vdd", slug: "dau-tay-trang-hat-kho-vdd", name: "Đậu tây trắng hạt khô",
    aliases: ["dau tay trang hat kho", "dau trang kho", "dau tay kho", "dried white kidney beans"],
    category: "Đậu", state: "dried", basis: "100g hạt khô",
    edibleNote: "Đậu trắng/đậu tây hạt khô; không gộp với đậu đỏ hoặc đậu đen.",
    nutrients: { energyKcal: 341, proteinG: 23.2, carbG: 57.4, fatG: 2.1, fiberG: 3.6, calciumMg: 160, ironMg: 6.8, phosphorusMg: 514, vitaminCMg: 3, vitaminAUg: 0.83 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3008: Đậu trắng (đậu tây), hạt, khô.", reviewNote: "Tên đồng nghĩa đậu trắng/đậu tây được lưu trong alias.", note: sourceNote
  },
  {
    id: "hat-de-tuoi-vdd", slug: "hat-de-tuoi-vdd", name: "Hạt dẻ tươi",
    aliases: ["hat de tuoi", "hat de lon tuoi", "fresh chestnut"],
    category: "Hạt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hạt dẻ tươi, phần nhân ăn được; không dùng thay cho hạt dẻ sấy/rang.",
    nutrients: { energyKcal: 223, proteinG: 4.2, carbG: 49.07, fatG: 1.11, calciumMg: 18, ironMg: 1.41, zincMg: 0.87, sodiumMg: 3, potassiumMg: 447, magnesiumMg: 84, phosphorusMg: 96, vitaminCMg: 36 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3012: Hạt dẻ to, tươi.", reviewNote: "Giữ trạng thái tươi; không suy diễn số liệu từ hạt dẻ khô.", note: sourceNote
  },
  {
    id: "hat-mit-tuoi-vdd", slug: "hat-mit-tuoi-vdd", name: "Hạt mít tươi",
    aliases: ["hat mit tuoi", "hot mit tuoi", "fresh jackfruit seeds"],
    category: "Hạt", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hạt/hột mít tươi trước khi luộc hoặc rang; khác với múi mít chín.",
    nutrients: { energyKcal: 166, proteinG: 0.7, carbG: 38.3, fatG: 1.1, calciumMg: 46, ironMg: 3.4, phosphorusMg: 34.4 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3016: Hạt mít, tươi.", reviewNote: "Từ địa phương 'hột mít' được thêm làm alias; phần hạt tách với phần múi.", note: sourceNote
  },
  {
    id: "hat-de-cuoi-rang-vdd", slug: "hat-de-cuoi-rang-vdd", name: "Hạt dẻ cười rang",
    aliases: ["hat de cuoi rang", "pistachio rang", "roasted pistachios"],
    category: "Hạt", state: "processed", basis: "100g hạt rang",
    edibleNote: "Hạt dẻ cười đã rang; không dùng thay cho hạt dẻ thường hoặc hạt dẻ cười tẩm vị.",
    nutrients: { energyKcal: 610, proteinG: 21.05, carbG: 28.28, fatG: 45.82, fiberG: 10.3, calciumMg: 107, ironMg: 4.03, zincMg: 2.34, sodiumMg: 6, potassiumMg: 1007, magnesiumMg: 109, phosphorusMg: 469, vitaminAUg: 13, seleniumMcg: 10 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3046011: Hạt dẻ cười rang.", reviewNote: "Tên 'hạt dẻ cười' không được gộp với hạt dẻ thường.", note: sourceNote
  },
  {
    id: "hat-dieu-chien-dau-vdd", slug: "hat-dieu-chien-dau-vdd", name: "Hạt điều khô chiên dầu",
    aliases: ["hat dieu chien dau", "hat dieu rang dau", "oil-roasted cashews"],
    category: "Hạt", state: "processed", basis: "100g hạt đã chiên dầu",
    edibleNote: "Hạt điều khô chiên dầu; không dùng thay cho hạt điều sống hoặc rang khô không dầu.",
    nutrients: { energyKcal: 585, proteinG: 18.3, carbG: 17.1, fatG: 49.3, fiberG: 0.7, calciumMg: 32, ironMg: 3.9, phosphorusMg: 411, vitaminAUg: 0.42 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3030: Hạt điều khô, chiên dầu.", reviewNote: "Phương pháp chế biến có dầu được ghi rõ để tránh đồng nhất với hạt điều sống.", note: sourceNote
  },
  {
    id: "bot-dau-xanh-vdd", slug: "bot-dau-xanh-vdd", name: "Bột đậu xanh",
    aliases: ["bot dau xanh", "mung bean flour", "bot dau tam"],
    category: "Đậu", state: "processed", basis: "100g bột khô",
    edibleNote: "Bột đậu xanh khô; không áp dụng cho chè đậu xanh đã thêm đường/nước cốt dừa.",
    nutrients: { energyKcal: 363, proteinG: 24.6, carbG: 60.4, fatG: 2.5, fiberG: 3.9, calciumMg: 50, ironMg: 5, zincMg: 1.15, sodiumMg: 6.28, potassiumMg: 1185, magnesiumMg: 283, phosphorusMg: 100, vitaminCMg: 4.19 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3023: Bột đậu xanh.", reviewNote: "Bột khô được tách rõ với đậu xanh nguyên hạt và món chè.", note: sourceNote
  },
  {
    id: "dau-phu-luoc-vdd", slug: "dau-phu-luoc-vdd", name: "Đậu phụ luộc",
    aliases: ["dau phu luoc", "dau hu luoc", "boiled tofu"],
    category: "Đậu", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Đậu phụ đã luộc, không thêm dầu hay sốt; khác với đậu phụ chiên và đậu phụ nướng.",
    nutrients: { energyKcal: 98, proteinG: 11.01, carbG: 1.11, fatG: 5.45, fiberG: 0.4, calciumMg: 24.24, ironMg: 2.22, zincMg: 0.81, sodiumMg: 7.07, potassiumMg: 122.22, magnesiumMg: 30.3, phosphorusMg: 85.86, vitaminCMg: 0.1, seleniumMcg: 8.99 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3025002: Đậu phụ luộc.", reviewNote: "Trạng thái luộc được tách với đậu phụ sống và nướng.", note: sourceNote
  },
  {
    id: "dau-phu-nuong-vdd", slug: "dau-phu-nuong-vdd", name: "Đậu phụ nướng",
    aliases: ["dau phu nuong", "dau hu nuong", "grilled tofu"],
    category: "Đậu", state: "cooked", basis: "100g đã nướng",
    edibleNote: "Đậu phụ nướng; không áp dụng cho đậu phụ chiên, sốt hoặc tàu hũ ky.",
    nutrients: { energyKcal: 116, proteinG: 13.4, carbG: 1.3, fatG: 6.4, fiberG: 0.5, calciumMg: 370, ironMg: 4.7, phosphorusMg: 167 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3027: Đậu phụ, nướng.", reviewNote: "Trạng thái nướng được tách rõ, không dùng số liệu này cho đậu phụ chiên.", note: sourceNote
  },
  {
    id: "hat-sen-tuoi-luoc-vdd", slug: "hat-sen-tuoi-luoc-vdd", name: "Hạt sen tươi luộc",
    aliases: ["hat sen tuoi luoc", "sen tuoi luoc", "boiled fresh lotus seeds"],
    category: "Hạt", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Hạt sen tươi đã luộc, không thêm đường; khác với hạt sen khô hoặc chè hạt sen.",
    nutrients: { energyKcal: 172, proteinG: 9.5, carbG: 30.8, fatG: 1.17, fiberG: 0.8, calciumMg: 76, ironMg: 1.4, zincMg: 0.28, sodiumMg: 1, potassiumMg: 367, magnesiumMg: 56, phosphorusMg: 164, vitaminAUg: 0.83 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3039002: Hạt sen tươi luộc.", reviewNote: "Giữ đúng hạt sen tươi đã luộc, không đồng nhất với chè có đường.", note: sourceNote
  },
  {
    id: "dau-ngu-luoc-vdd", slug: "dau-ngu-luoc-vdd", name: "Đậu ngự luộc",
    aliases: ["dau ngu luoc", "dau lima luoc", "boiled lima beans"],
    category: "Đậu", state: "cooked", basis: "100g đã luộc",
    edibleNote: "Đậu ngự đã luộc, không thêm đường/dầu; không dùng thay cho đậu ngự khô chưa nấu.",
    nutrients: { energyKcal: 136, proteinG: 9.68, carbG: 23.4, fatG: 0.4, calciumMg: 36, ironMg: 1.64, sodiumMg: 7.2, potassiumMg: 118, phosphorusMg: 96 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3036002: Đậu ngự luộc.", reviewNote: "Tên đậu ngự/lima bean chỉ cùng loại; trạng thái luộc được ghi rõ.", note: sourceNote
  },
  {
    id: "hat-hanh-nhan-rang-vdd", slug: "hat-hanh-nhan-rang-vdd", name: "Hạnh nhân rang",
    aliases: ["hanh nhan rang", "hat hanh nhan rang", "roasted almonds"],
    category: "Hạt", state: "processed", basis: "100g hạt rang",
    edibleNote: "Hạnh nhân rang; khác với hạnh nhân sống, sữa hạnh nhân hoặc bánh hạnh nhân.",
    nutrients: { energyKcal: 652, proteinG: 21.23, carbG: 17.68, fatG: 55.17, fiberG: 10.5, calciumMg: 291, ironMg: 3.68, zincMg: 3.07, sodiumMg: 339, potassiumMg: 699, magnesiumMg: 274, phosphorusMg: 466, seleniumMcg: 4.1 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3042011: Hạt hạnh nhân rang.", reviewNote: "Trạng thái rang được tách riêng với mục hạnh nhân không nêu trạng thái.", note: sourceNote
  }
];
