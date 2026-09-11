import type { Food } from "./nutrition";

// Nguyên liệu Việt Nam đối chiếu trực tiếp từ Viện Dinh dưỡng.
// Chỉ gồm mục có tên/trạng thái rõ ràng và đủ năng lượng, protein, carbohydrate, chất béo.
export const extraFoods10: Food[] = [
  {
    id: "cu-au-tuoi-vdd", slug: "cu-au-tuoi-vdd", name: "Củ ấu tươi",
    aliases: ["cu au tuoi", "cu au", "water chestnut vietnamese"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Củ ấu tươi; giá trị không áp dụng trực tiếp cho củ ấu luộc, sấy hoặc chế biến thêm đường.",
    nutrients: { energyKcal: 119, proteinG: 3.6, carbG: 25, fatG: 0.5, calciumMg: 9, ironMg: 0.7, phosphorusMg: 49, vitaminCMg: 5, vitaminAUg: 0.42 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 2001: Củ ấu, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; phần vỏ không được tính vào khẩu phần ăn được."
  },
  {
    id: "cu-san-day-tuoi-vdd", slug: "cu-san-day-tuoi-vdd", name: "Củ sắn dây tươi",
    aliases: ["cu san day tuoi", "cu san day", "pueraria root fresh"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Củ sắn dây tươi; không dùng thay cho bột sắn dây đã lọc.",
    nutrients: { energyKcal: 156, proteinG: 1.6, carbG: 37.2, fatG: 0.1, calciumMg: 28, ironMg: 0.2, phosphorusMg: 45 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 2005: Củ sắn dây, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; bột sắn dây có thành phần trên 100g khác đáng kể."
  },
  {
    id: "khoai-nuoc-tuoi-vdd", slug: "khoai-nuoc-tuoi-vdd", name: "Khoai nước tươi",
    aliases: ["khoai nuoc tuoi", "khoai nuoc", "water taro fresh"],
    category: "Tinh bột", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Khoai nước tươi, cần nấu chín trước khi ăn.",
    nutrients: { energyKcal: 106, proteinG: 1, carbG: 25.3, fatG: 0.1, calciumMg: 52, ironMg: 0.2, phosphorusMg: 35, vitaminCMg: 3 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 2011: Khoai nước, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; nên nấu chín kỹ và không áp dụng cho món chiên/xào nhiều dầu."
  },
  {
    id: "hat-dua-hau-rang-vdd", slug: "hat-dua-hau-rang-vdd", name: "Hạt dưa hấu rang",
    aliases: ["hat dua hau rang", "hat dua rang", "roasted watermelon seeds"],
    category: "Hạt", state: "roasted", basis: "100g nhân hạt",
    edibleNote: "Hạt dưa hấu rang, tính theo phần nhân ăn được; hạt rang muối có thể có natri cao hơn.",
    nutrients: { energyKcal: 558, proteinG: 31.8, carbG: 19.8, fatG: 39.1, calciumMg: 237, ironMg: 3, phosphorusMg: 751, vitaminAUg: 7.5 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 3029: Hạt dưa hấu, rang.",
    reviewNote: "Tên và trạng thái rang khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; thực phẩm giàu năng lượng, nên quy đổi theo lượng nhân hạt thực ăn."
  },
  {
    id: "hai-sam-tuoi-vdd", slug: "hai-sam-tuoi-vdd", name: "Hải sâm tươi",
    aliases: ["hai sam tuoi", "hai sam", "fresh sea cucumber"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hải sâm tươi, phần ăn được; không áp dụng cho hải sâm khô đã ngâm nở.",
    nutrients: { energyKcal: 90, proteinG: 21.5, carbG: 0.2, fatG: 0.3, calciumMg: 118, ironMg: 1.4, phosphorusMg: 22, vitaminAUg: 101.67 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 8036: Hải sâm, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; món xào/sốt hoặc hải sâm khô có giá trị khác đáng kể."
  },
  {
    id: "hen-tuoi-vdd", slug: "hen-tuoi-vdd", name: "Hến tươi",
    aliases: ["hen tuoi", "hen", "fresh clam vietnamese"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Hến tươi, phần thịt ăn được; cần nấu chín kỹ.",
    nutrients: { energyKcal: 45, proteinG: 4.5, carbG: 5.1, fatG: 0.7, calciumMg: 144, ironMg: 1.6, sodiumMg: 86, potassiumMg: 54, phosphorusMg: 86 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 8037: Hến, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; lượng thịt hến thực ăn nhỏ hơn nhiều so với khối lượng nguyên liệu còn vỏ."
  },
  {
    id: "luon-tuoi-vdd", slug: "luon-tuoi-vdd", name: "Lươn tươi",
    aliases: ["luon tuoi", "luon", "fresh eel"],
    category: "Cá", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Lươn tươi, phần ăn được; cần nấu chín kỹ.",
    nutrients: { energyKcal: 130, proteinG: 18.4, carbG: 10.7, fatG: 1.5, calciumMg: 35, ironMg: 1, sodiumMg: 51, potassiumMg: 272, phosphorusMg: 164, zincMg: 1.62, vitaminAUg: 1800 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 8038: Lươn, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; không áp dụng cho miến lươn đã thêm miến, dầu và nước dùng."
  },
  {
    id: "trai-nuoc-ngot-tuoi-vdd", slug: "trai-nuoc-ngot-tuoi-vdd", name: "Trai nước ngọt tươi",
    aliases: ["trai nuoc ngot tuoi", "trai nuoc ngot", "freshwater mussel"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Trai nước ngọt tươi, phần thịt ăn được; cần nấu chín kỹ.",
    nutrients: { energyKcal: 38, proteinG: 4.6, carbG: 2.5, fatG: 1.1, calciumMg: 668, ironMg: 1.5, sodiumMg: 56, potassiumMg: 314, phosphorusMg: 107, zincMg: 1.37, vitaminAUg: 90 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 8054: Trai, nước ngọt, tươi.",
    reviewNote: "Tên, trạng thái tươi và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; canxi nguồn cao, cần xác định khẩu phần thịt trai thực ăn khi tư vấn."
  },
  {
    id: "tu-hai-vdd", slug: "tu-hai-vdd", name: "Tu hài",
    aliases: ["tu hai", "fresh geoduck"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được",
    edibleNote: "Tu hài tươi, phần thịt ăn được; cần nấu chín kỹ.",
    nutrients: { energyKcal: 42, proteinG: 5.37, carbG: 4.03, fatG: 0.44, calciumMg: 116.97 },
    sourceId: "vdd-food-portal-2026", confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified",
    candidateSource: "Viện Dinh dưỡng 8094: Tu hài.",
    reviewNote: "Tên và đơn vị 100g khớp trực tiếp nguồn Viện Dinh dưỡng.",
    note: "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; nguồn không công bố thêm các vi chất khác cho mục này."
  }
];
