import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; chỉ áp dụng cho đúng trạng thái và đơn vị ghi trên mục này.";

// Batch 13: trái cây Việt theo giống, dạng khô và phần ăn. Không dùng alias để gộp giống hoặc trạng thái khác nhau.
export const extraFoods13: Food[] = [
  {
    id: "dua-bo-tuoi-vdd", slug: "dua-bo-tuoi-vdd", name: "Dưa bở tươi", aliases: ["dua bo tuoi", "dua bo", "fresh muskmelon"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Dưa bở chín tươi, phần thịt quả ăn được; không gộp với dưa gang non hoặc dưa lưới.",
    nutrients: { energyKcal: 21, proteinG: 0.5, carbG: 4.3, fatG: 0.2, fiberG: 0.7, calciumMg: 36, ironMg: 0.3, zincMg: 0.17, potassiumMg: 201, magnesiumMg: 9, phosphorusMg: 36, vitaminAUg: 16.58, vitaminCMg: 9 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5010: Dưa bở, tươi.", reviewNote: "Nguồn liệt kê riêng dưa bở; không xem đây là alias của dưa gang hoặc dưa lưới.", note: sourceNote
  },
  {
    id: "dua-hong-tuoi-vdd", slug: "dua-hong-tuoi-vdd", name: "Dưa hồng tươi", aliases: ["dua hong tuoi", "dua hong", "fresh orange melon"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Dưa hồng chín tươi, phần thịt quả ăn được; không áp dụng cho nước ép hoặc dưa ngâm.",
    nutrients: { energyKcal: 19, proteinG: 0.3, carbG: 4.1, fatG: 0.1, fiberG: 0.4, calciumMg: 27, ironMg: 0.4, zincMg: 0.09, sodiumMg: 18, potassiumMg: 228, magnesiumMg: 10, phosphorusMg: 12, vitaminAUg: 2.5, vitaminCMg: 7, seleniumMcg: 0.7 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5012: Dưa hồng, tươi.", reviewNote: "Tên và trạng thái khớp trực tiếp mục nguồn.", note: sourceNote
  },
  {
    id: "hong-do-tuoi-vdd", slug: "hong-do-tuoi-vdd", name: "Hồng đỏ tươi", aliases: ["hong do tuoi", "hong do", "red persimmon"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Quả hồng đỏ tươi, phần ăn được; khác với hồng giòn và hồng ngâm.",
    nutrients: { energyKcal: 38, proteinG: 0.7, carbG: 8.6, fatG: 0.1, fiberG: 2.5, calciumMg: 10, ironMg: 0.2, zincMg: 0.19, sodiumMg: 4.3, potassiumMg: 214.2, magnesiumMg: 9, phosphorusMg: 19, vitaminAUg: 81.38, vitaminCMg: 16, seleniumMcg: 0.6 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5020: Hồng đỏ, tươi.", reviewNote: "Giống/tình trạng nguồn được giữ riêng để không lấy số liệu hồng đỏ cho hồng giòn.", note: sourceNote
  },
  {
    id: "man-tim-tuoi-vdd", slug: "man-tim-tuoi-vdd", name: "Mận tím tươi", aliases: ["man tim tuoi", "man tim", "purple plum"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Mận tím tươi, phần quả ăn được; không gộp với mận hậu, mận cơm hoặc mận ngâm đường.",
    nutrients: { energyKcal: 23, proteinG: 0.6, carbG: 4.6, fatG: 0.2, fiberG: 0.7, calciumMg: 28, ironMg: 0.4, zincMg: 0.1, potassiumMg: 157, magnesiumMg: 7, phosphorusMg: 20, vitaminAUg: 138.71, vitaminCMg: 3 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5027: Mận tím, tươi.", reviewNote: "Chỉ dùng cho mận tím tươi, không phải tên chung cho mọi giống mận.", note: sourceNote
  },
  {
    id: "mit-dai-tuoi-vdd", slug: "mit-dai-tuoi-vdd", name: "Mít dai tươi", aliases: ["mit dai tuoi", "mit dai", "fresh firm jackfruit"],
    category: "Trái cây", state: "raw", basis: "100g múi ăn được", edibleNote: "Múi mít dai tươi; khác với mít mật, mít sấy hoặc hạt mít.",
    nutrients: { energyKcal: 54, proteinG: 0.6, carbG: 12.41, fatG: 0.19, fiberG: 1.2, calciumMg: 21, ironMg: 0.4, zincMg: 0.67, sodiumMg: 2.5, potassiumMg: 367.5, magnesiumMg: 37, phosphorusMg: 28, vitaminAUg: 15, vitaminCMg: 5, seleniumMcg: 0.6 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5028: Mít dai, tươi.", reviewNote: "Giống mít dai có dữ liệu nguồn riêng nên không dùng thay cho mục mít chung hoặc mít sấy.", note: sourceNote
  },
  {
    id: "mo-kho-vdd", slug: "mo-kho-vdd", name: "Mơ khô", aliases: ["mo kho", "dried apricot"],
    category: "Trái cây", state: "dried", basis: "100g quả khô", edibleNote: "Quả mơ khô theo nguồn; không áp dụng cho ô mai mơ hoặc mơ ngâm đường/muối.",
    nutrients: { energyKcal: 290, proteinG: 3, carbG: 66.9, fatG: 1.1, fiberG: 4.1, calciumMg: 62, ironMg: 4.5, zincMg: 0.39, sodiumMg: 10, potassiumMg: 1162, magnesiumMg: 32, phosphorusMg: 106, vitaminAUg: 180.25, vitaminCMg: 5, seleniumMcg: 2.2 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5032: Mơ, khô.", reviewNote: "Dạng khô có mật độ năng lượng cao hơn mơ tươi; không gộp với các sản phẩm mơ thêm đường hoặc muối.", note: sourceNote
  },
  {
    id: "muom-queo-tuoi-vdd", slug: "muom-queo-tuoi-vdd", name: "Muỗm (quéo) tươi", aliases: ["muom tuoi", "muom", "queo tuoi", "queo", "xoai hoi"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Quả muỗm/quéo tươi; không dùng thay cho xoài chín hoặc xoài xanh thông thường.",
    nutrients: { energyKcal: 69, proteinG: 0.6, carbG: 15.7, fatG: 0.4, fiberG: 0.4, calciumMg: 4, ironMg: 0.2, phosphorusMg: 4, vitaminAUg: 158.75, vitaminCMg: 60 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5033: Muỗm, quéo, tươi.", reviewNote: "Muỗm và quéo là hai tên cùng được nêu trên mục nguồn; 'xoài hôi' chỉ là từ khóa địa phương, không gộp với xoài.", note: sourceNote
  },
  {
    id: "nhan-kho-vdd", slug: "nhan-kho-vdd", name: "Nhãn khô", aliases: ["nhan kho", "long nhan", "long nhan kho", "dried longan"],
    category: "Trái cây", state: "dried", basis: "100g nhãn khô", edibleNote: "Nhãn khô/long nhãn, không thêm đường; khác với nhãn tươi, chè long nhãn hoặc nhãn ngâm.",
    nutrients: { energyKcal: 292, proteinG: 4.3, carbG: 67.6, fatG: 0.5, fiberG: 1.7, calciumMg: 32, ironMg: 4.4, magnesiumMg: 46, phosphorusMg: 117, vitaminCMg: 34 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5036: Nhãn, khô.", reviewNote: "Tên long nhãn được bổ sung làm alias; trạng thái khô được tách với nhãn tươi.", note: sourceNote
  },
  {
    id: "bo-vo-tim-tuoi-vdd", slug: "bo-vo-tim-tuoi-vdd", name: "Bơ vỏ tím tươi", aliases: ["bo vo tim tuoi", "bo vo tim", "purple avocado"],
    category: "Trái cây", state: "raw", basis: "100g phần thịt ăn được", edibleNote: "Bơ vỏ tím tươi, phần thịt quả ăn được; không dùng thay cho bơ vỏ xanh hoặc bơ sáp.",
    nutrients: { energyKcal: 76, proteinG: 1.8, carbG: 3.2, fatG: 6.2, fiberG: 0.4, calciumMg: 48.6, ironMg: 1.4, phosphorusMg: 69 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5041: Quả bơ vỏ tím, tươi.", reviewNote: "Giống bơ vỏ tím được tách vì nguồn công bố giá trị khác bơ vỏ xanh.", note: sourceNote
  },
  {
    id: "qua-trung-ga-tuoi-vdd", slug: "qua-trung-ga-tuoi-vdd", name: "Quả trứng gà (lê ki ma) tươi", aliases: ["qua trung ga", "le ki ma", "le-ki-ma", "lekima", "mit tu na", "canistel"],
    category: "Trái cây", state: "raw", basis: "100g phần thịt ăn được", edibleNote: "Quả trứng gà/lê ki ma chín, bỏ vỏ và hạt; không liên quan đến trứng gia cầm.",
    nutrients: { energyKcal: 106, proteinG: 4.3, carbG: 21.3, fatG: 0.4, calciumMg: 101, phosphorusMg: 270 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5045: Quả trứng gà, tươi.", reviewNote: "Alias lê ki ma/lekima và mít tu na hỗ trợ tra cứu vùng miền; không thêm alias 'trứng gà' đơn lẻ vì đó là thực phẩm khác.", note: sourceNote
  },
  {
    id: "vai-kho-vdd", slug: "vai-kho-vdd", name: "Vải khô", aliases: ["vai kho", "dried lychee"],
    category: "Trái cây", state: "dried", basis: "100g quả khô", edibleNote: "Vải khô theo nguồn; khác với vải tươi, vải ngâm nước đường hoặc si rô vải.",
    nutrients: { energyKcal: 264, proteinG: 3, carbG: 58.6, fatG: 1.9, fiberG: 1, calciumMg: 25, ironMg: 1.4, zincMg: 0.28, sodiumMg: 3, potassiumMg: 1110, magnesiumMg: 42, phosphorusMg: 58, vitaminCMg: 183, seleniumMcg: 1.3 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5053: Vải, khô.", reviewNote: "Giữ dạng vải khô của nguồn, không đồng nhất với vải tươi hoặc đồ hộp.", note: sourceNote
  },
  {
    id: "tao-meo-vdd", slug: "tao-meo-vdd", name: "Táo mèo tươi", aliases: ["tao meo tuoi", "tao meo", "son tra", "sơn tra"],
    category: "Trái cây", state: "raw", basis: "100g phần ăn được", edibleNote: "Táo mèo/sơn tra tươi; không áp dụng cho rượu táo mèo, si rô hoặc táo tây/táo ta.",
    nutrients: { energyKcal: 92, proteinG: 1.94, carbG: 20.65, fatG: 0.17, fiberG: 7.16 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 5058: Táo mèo.", reviewNote: "Tên sơn tra được dùng cho cùng quả táo mèo; không gộp với táo tây hoặc táo ta.", note: sourceNote
  },
  {
    id: "tram-den-tuoi-vdd", slug: "tram-den-tuoi-vdd", name: "Trám đen tươi", aliases: ["tram den tuoi", "tram den", "black canarium"],
    category: "Trái cây", state: "raw", basis: "100g phần thịt quả ăn được", edibleNote: "Quả trám đen chín tươi, phần ăn được; không dùng thay cho trám xanh hoặc trám kho muối.",
    nutrients: { energyKcal: 134, proteinG: 2.5, carbG: 8.5, fatG: 10, fiberG: 4.9, calciumMg: 140, phosphorusMg: 30, vitaminCMg: 14 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 4105: Trám đen, quả chín, tươi.", reviewNote: "Nguồn nêu rõ trám đen quả chín; không gộp với trám xanh/trám trắng.", note: sourceNote
  },
  {
    id: "tram-xanh-tuoi-vdd", slug: "tram-xanh-tuoi-vdd", name: "Trám xanh tươi", aliases: ["tram xanh tuoi", "tram xanh", "tram trang", "white canarium"],
    category: "Trái cây", state: "raw", basis: "100g phần thịt quả ăn được", edibleNote: "Quả trám xanh/trám trắng tươi, phần ăn được; khác với trám đen và các món kho muối.",
    nutrients: { energyKcal: 56, proteinG: 1.2, carbG: 9.3, fatG: 1.6, fiberG: 4.9, calciumMg: 136, phosphorusMg: 9, vitaminAUg: 27.5, vitaminCMg: 20 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 4106: Trám xanh, trám trắng, tươi.", reviewNote: "Trám trắng là tên đồng nghĩa ngay trên mục nguồn; không áp dụng cho trám đen.", note: sourceNote
  },
  {
    id: "qua-co-tuoi-vdd", slug: "qua-co-tuoi-vdd", name: "Quả cọ tươi", aliases: ["qua co tuoi", "qua co", "fresh palm fruit"],
    category: "Hạt", state: "raw", basis: "100g phần ăn được", edibleNote: "Quả cọ tươi, phần ăn được; nguồn xếp trong nhóm hạt/quả giàu chất béo, không dùng thay cho dầu cọ.",
    nutrients: { energyKcal: 192, proteinG: 2.3, carbG: 15.6, fatG: 13.4, fiberG: 3.5, calciumMg: 38, ironMg: 0.2, zincMg: 3, sodiumMg: 11.26, potassiumMg: 1452.06, magnesiumMg: 8.04, phosphorusMg: 34, vitaminAUg: 3.42, vitaminCMg: 8, seleniumMcg: 0.56 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 3018: Quả cọ, tươi.", reviewNote: "Đây là quả ăn được nhưng được xếp vào nhóm Hạt theo phân nhóm dinh dưỡng của nguồn vì giàu chất béo.", note: sourceNote
  }
];
