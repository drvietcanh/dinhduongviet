import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; chỉ áp dụng cho đúng loài, trạng thái chế biến và đơn vị ghi trên mục này.";

// Batch 14: hải sản theo loài và trạng thái. Số liệu món luộc/hấp/nướng không dùng cho nguyên liệu tươi hoặc món thêm sốt.
export const extraFoods14: Food[] = [
  {
    id: "oc-da-tuoi-vdd", slug: "oc-da-tuoi-vdd", name: "Ốc đá tươi", aliases: ["oc da tuoi", "oc da", "fresh rock snail"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Ốc đá tươi, phần thịt ăn được; cần nấu chín kỹ, không gộp với ốc vặn hoặc ốc bươu.",
    nutrients: { energyKcal: 63, proteinG: 11.2, carbG: 3.9, fatG: 0.3, calciumMg: 1660, phosphorusMg: 83 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8042: Ốc đá, tươi.", reviewNote: "Tên loài và trạng thái tươi khớp trực tiếp nguồn; hàm lượng canxi là giá trị trên 100g phần nguồn quy ước.", note: sourceNote
  },
  {
    id: "oc-van-tuoi-vdd", slug: "oc-van-tuoi-vdd", name: "Ốc vặn tươi", aliases: ["oc van tuoi", "oc van", "fresh spiral snail"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Ốc vặn tươi, phần thịt ăn được; không dùng thay cho ốc vặn đã luộc/hấp/nướng.",
    nutrients: { energyKcal: 72, proteinG: 12.2, carbG: 4.3, fatG: 0.7, calciumMg: 10, zincMg: 1, phosphorusMg: 51 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8044: Ốc vặn, raw.", reviewNote: "Từ 'raw' của nguồn được chuẩn hóa là tươi; không thêm alias ốc gạo vì tên đó có thể chỉ loài khác theo vùng.", note: sourceNote
  },
  {
    id: "oc-van-luoc-vdd", slug: "oc-van-luoc-vdd", name: "Ốc vặn luộc", aliases: ["oc van luoc", "boiled spiral snail"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã luộc", edibleNote: "Ốc vặn luộc không thêm sốt; khác với ốc vặn tươi, hấp hoặc nướng.",
    nutrients: { energyKcal: 289, proteinG: 48.8, carbG: 17.2, fatG: 2.8, calciumMg: 40, zincMg: 4, phosphorusMg: 204 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8044002: Ốc vặn, luộc.", reviewNote: "Giữ nguyên trạng thái luộc và số liệu nguồn trên 100g phần ăn được sau chế biến; không áp dụng cho ốc kèm bơ, mỡ hành hoặc sốt.", note: sourceNote
  },
  {
    id: "ruoc-ca-qua-vdd", slug: "ruoc-ca-qua-vdd", name: "Ruốc cá quả", aliases: ["ruoc ca qua", "ruoc ca loc", "fish floss snakehead"],
    category: "Hải sản", state: "processed", basis: "100g ruốc", edibleNote: "Ruốc/chà bông cá quả theo nguồn; không áp dụng cho cá lóc tươi hoặc ruốc có công thức gia vị khác.",
    nutrients: { energyKcal: 312, proteinG: 65.7, carbG: 3, fatG: 4.1, calciumMg: 26, phosphorusMg: 654 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8058: Ruốc cá quả.", reviewNote: "Cá quả là tên đồng nghĩa của cá lóc trong chỉ mục hiện có; chỉ alias tên nguyên liệu, không dùng số liệu ruốc cho cá tươi.", note: sourceNote
  },
  {
    id: "ruoc-tom-vdd", slug: "ruoc-tom-vdd", name: "Ruốc tôm", aliases: ["ruoc tom", "shrimp floss"],
    category: "Hải sản", state: "processed", basis: "100g ruốc", edibleNote: "Ruốc tôm theo mục nguồn; không dùng thay cho tôm tươi, tôm khô hoặc chà bông có thêm đường/dầu.",
    nutrients: { energyKcal: 305, proteinG: 65.5, carbG: 3.7, fatG: 3.1, calciumMg: 330, ironMg: 6.7, zincMg: 4.6 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8059: Ruốc tôm.", reviewNote: "Dạng ruốc được tách riêng với tôm nguyên con tươi/khô vì mật độ dinh dưỡng khác lớn.", note: sourceNote
  },
  {
    id: "trung-truc-vdd", slug: "trung-truc-vdd", name: "Trùng trục", aliases: ["trung truc", "con trung truc"],
    category: "Hải sản", state: "raw", basis: "100g phần ăn được", edibleNote: "Con trùng trục tươi, phần ăn được; cần nấu chín kỹ và không gộp với nghêu/ngao hoặc sò dương.",
    nutrients: { energyKcal: 108, proteinG: 14.4, carbG: 9.65, fatG: 1.3, calciumMg: 749.4, ironMg: 81.57, zincMg: 7.03, phosphorusMg: 559.7 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8065: Con trùng trục.", reviewNote: "Không gán tên vùng miền chưa được nguồn định danh để tránh gộp với các loài nhuyễn thể khác.", note: sourceNote
  },
  {
    id: "so-huyet-luoc-vdd", slug: "so-huyet-luoc-vdd", name: "Sò huyết luộc", aliases: ["so huyet luoc", "boiled blood cockle"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã luộc", edibleNote: "Sò huyết đã luộc, không thêm mỡ hành hoặc nước chấm; khác với sò huyết tươi và món nướng.",
    nutrients: { energyKcal: 316, proteinG: 54, carbG: 18.8, fatG: 2.8, calciumMg: 120, ironMg: 64.8 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8070002: Sò huyết, luộc.", reviewNote: "Chỉ áp dụng cho phần ăn được sau luộc; mật độ năng lượng/protein nguồn không dùng cho sò còn vỏ hoặc món có sốt.", note: sourceNote
  },
  {
    id: "oc-mong-tay-luoc-vdd", slug: "oc-mong-tay-luoc-vdd", name: "Ốc móng tay luộc", aliases: ["oc mong tay luoc", "boiled razor clam"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã luộc", edibleNote: "Ốc móng tay luộc không thêm bơ, mỡ hành hoặc nước chấm; khác với ốc móng tay tươi/nướng.",
    nutrients: { energyKcal: 123, proteinG: 15.89, carbG: 2.05, fatG: 5.65 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8074002: Ốc móng tay, luộc.", reviewNote: "Trạng thái luộc nguồn được tách rõ với mục ốc móng tay sẵn có không nêu phương pháp chế biến.", note: sourceNote
  },
  {
    id: "oc-huong-luoc-vdd", slug: "oc-huong-luoc-vdd", name: "Ốc hương luộc", aliases: ["oc huong luoc", "boiled spotted babylon"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã luộc", edibleNote: "Ốc hương luộc không thêm sốt; khác với ốc hương tươi, hấp hoặc nướng.",
    nutrients: { energyKcal: 94, proteinG: 22.4, carbG: 2.4, fatG: 2.7 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8075002: Ốc hương, luộc.", reviewNote: "Dữ liệu dùng cho ốc hương luộc; không suy diễn cho món xào bơ tỏi hoặc nướng mỡ hành.", note: sourceNote
  },
  {
    id: "oc-len-hap-vdd", slug: "oc-len-hap-vdd", name: "Ốc len hấp", aliases: ["oc len hap", "steamed mud creeper"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã hấp", edibleNote: "Ốc len hấp không thêm nước cốt dừa; khác với ốc len tươi hoặc xào dừa.",
    nutrients: { energyKcal: 94, proteinG: 22.4, carbG: 2.4, fatG: 2.7 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8076003: Ốc len, hấp.", reviewNote: "Giữ phương pháp hấp của nguồn; không dùng cho ốc len xào dừa vì chất béo và năng lượng sẽ khác.", note: sourceNote
  },
  {
    id: "so-duong-luoc-vdd", slug: "so-duong-luoc-vdd", name: "Sò dương luộc", aliases: ["so duong luoc", "boiled venus clam"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã luộc", edibleNote: "Sò dương luộc, phần ăn được; không áp dụng cho sò dương còn vỏ hoặc món xào/nướng thêm dầu.",
    nutrients: { energyKcal: 261, proteinG: 48.24, carbG: 12.72, fatG: 1.96, calciumMg: 24, ironMg: 1.52, zincMg: 3.64, sodiumMg: 1568, potassiumMg: 820, magnesiumMg: 88, phosphorusMg: 1336, vitaminAUg: 4, seleniumMcg: 51.2 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8079002: Sò dương, luộc.", reviewNote: "Natri nguồn cao và trạng thái luộc được lưu rõ; không dùng cho sò dương tươi hay nước luộc.", note: sourceNote
  },
  {
    id: "so-diep-luoc-vdd", slug: "so-diep-luoc-vdd", name: "Sò điệp luộc", aliases: ["so diep luoc", "boiled scallop"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã luộc", edibleNote: "Sò điệp luộc không thêm bơ/sốt; khác với sò điệp tươi và sò điệp nướng.",
    nutrients: { energyKcal: 69, proteinG: 12.1, carbG: 3.18, fatG: 0.49, calciumMg: 6, ironMg: 0.38, zincMg: 0.91, sodiumMg: 292, potassiumMg: 205 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8080002: Sò điệp, luộc.", reviewNote: "Tách khỏi sò điệp nướng; không áp dụng cho món sò điệp phô mai hoặc mỡ hành.", note: sourceNote
  },
  {
    id: "so-diep-nuong-vdd", slug: "so-diep-nuong-vdd", name: "Sò điệp nướng", aliases: ["so diep nuong", "grilled scallop"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã nướng", edibleNote: "Sò điệp nướng không thêm phô mai, bơ hoặc mỡ hành; khác với sò điệp luộc.",
    nutrients: { energyKcal: 69, proteinG: 12.1, carbG: 3.18, fatG: 0.49, calciumMg: 6, ironMg: 0.38, zincMg: 0.91, sodiumMg: 292, potassiumMg: 205 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8080014: Sò điệp, nướng.", reviewNote: "Nguồn có mục nướng riêng; số liệu này chỉ đại diện sò điệp nướng không bổ sung chất béo/sốt.", note: sourceNote
  },
  {
    id: "so-long-hap-vdd", slug: "so-long-hap-vdd", name: "Sò lông hấp", aliases: ["so long hap", "steamed hairy cockle"],
    category: "Hải sản", state: "cooked", basis: "100g phần ăn được đã hấp", edibleNote: "Sò lông hấp không thêm sốt; khác với sò lông tươi, sò huyết và sò lông nướng.",
    nutrients: { energyKcal: 316, proteinG: 54, carbG: 18.8, fatG: 2.8, calciumMg: 120, ironMg: 64.8 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8081003: Sò lông, hấp.", reviewNote: "Trạng thái hấp theo nguồn được tách với sò lông tươi; không dùng cho sò lông nướng mỡ hành.", note: sourceNote
  },
  {
    id: "ca-chim-tuoi-vdd", slug: "ca-chim-tuoi-vdd", name: "Cá chim tươi (không phân loài)", aliases: ["ca chim tuoi", "ca chim", "fresh pomfret"],
    category: "Cá", state: "raw", basis: "100g phần ăn được", edibleNote: "Cá chim tươi không nêu màu/loài trong nguồn; không dùng thay cho cá chim trắng hoặc cá chim đen đã định danh.",
    nutrients: { energyKcal: 143, proteinG: 17.7, carbG: 3.6, fatG: 6.4, calciumMg: 74.7, ironMg: 1.03, zincMg: 0.81, phosphorusMg: 469.4, vitaminAUg: 2.3 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 8060: Cá chim.", reviewNote: "Nguồn không định danh màu/loài, vì vậy tên hiển thị ghi rõ giới hạn và không thay thế các mục cá chim trắng/đen.", note: sourceNote
  }
];
