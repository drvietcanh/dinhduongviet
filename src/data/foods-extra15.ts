import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; chỉ áp dụng cho đúng loài, phần ăn và trạng thái ghi trên từng mục.";

// Batch 15: đạm động vật và phần ăn tách biệt. Không gộp phủ tạng, máu/tiết hoặc phần trứng theo loài với các mục tổng quát.
export const extraFoods15: Food[] = [
  {
    id: "thit-ga-tay-tuoi-vdd", slug: "thit-ga-tay-tuoi-vdd", name: "Thịt gà tây tươi", aliases: ["ga tay", "thit ga tay", "turkey meat"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt gà tây tươi theo mục nguồn, không phải thịt gà ta/gà công nghiệp hoặc gà tây đã quay.",
    nutrients: { energyKcal: 218, proteinG: 20.06, carbG: 0.04, fatG: 15.3, saturatedFatG: 3.66, calciumMg: 24, ironMg: 3.2, zincMg: 2.67, sodiumMg: 66, potassiumMg: 236, magnesiumMg: 18, phosphorusMg: 320, vitaminAUg: 180, seleniumMcg: 26.4, folateUg: 9 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7014: Thịt gà tây, tươi.", reviewNote: "Tên loài và trạng thái tươi khớp trực tiếp nguồn; không dùng số liệu này cho thịt gà tây quay có thêm da, bơ hoặc nước sốt.", note: sourceNote
  },
  {
    id: "thit-trau-tuoi-vdd", slug: "thit-trau-tuoi-vdd", name: "Thịt trâu tươi", aliases: ["thit trau tuoi", "thit trau song", "buffalo meat"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Thịt trâu tươi, phần thịt trung bình theo nguồn; khác với thịt trâu bắp, thịt trâu khô/gác bếp và món đã nấu.",
    nutrients: { energyKcal: 97, proteinG: 20.39, carbG: 0.89, fatG: 1.37, saturatedFatG: 0.46, calciumMg: 12, ironMg: 1.61, zincMg: 1.93, sodiumMg: 53, potassiumMg: 297, magnesiumMg: 32, phosphorusMg: 197, seleniumMcg: 9, folateUg: 8 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7023: Thịt trâu, tươi.", reviewNote: "Mục thịt trâu tươi được tách khỏi thịt trâu gác bếp sẵn có vì trạng thái và mật độ dinh dưỡng khác nhau.", note: sourceNote
  },
  {
    id: "bau-duc-bo-tuoi-vdd", slug: "bau-duc-bo-tuoi-vdd", name: "Bầu dục bò tươi", aliases: ["cật bò", "cat bo", "bau duc bo", "beef kidney"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Bầu dục/cật bò tươi, phần ăn được; không gộp với bầu dục lợn hoặc bóng đái.",
    nutrients: { energyKcal: 67, proteinG: 12.5, carbG: 0.3, fatG: 1.8, saturatedFatG: 0.51, calciumMg: 9, ironMg: 7.1, zincMg: 1.92, sodiumMg: 200, potassiumMg: 262, magnesiumMg: 13, phosphorusMg: 219, vitaminAUg: 330, vitaminCMg: 6, seleniumMcg: 141, folateUg: 98 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7029: Bầu dục bò, tươi.", reviewNote: "'Cật bò' là tên gọi cùng phần cơ quan; không thêm alias cho cơ quan bài tiết khác.", note: sourceNote
  },
  {
    id: "gan-vit-tuoi-vdd", slug: "gan-vit-tuoi-vdd", name: "Gan vịt tươi", aliases: ["gan vit", "duck liver"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Gan vịt tươi, phần ăn được; không dùng cho pa-tê gan, gan gà/gan lợn hoặc món chiên.",
    nutrients: { energyKcal: 122, proteinG: 17.1, carbG: 2.8, fatG: 4.7, saturatedFatG: 1.14, calciumMg: 17, ironMg: 4.8, zincMg: 3.07, sodiumMg: 140, potassiumMg: 230, magnesiumMg: 24, phosphorusMg: 177, vitaminAUg: 11984, vitaminCMg: 7, seleniumMcg: 67, folateUg: 738 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7042: Gan vịt, tươi.", reviewNote: "Lưu vi chất theo nguồn; vitamin A và folate rất cao nên mô tả không được dùng để suy ra khẩu phần tư vấn cá thể.", note: sourceNote
  },
  {
    id: "luoi-bo-tuoi-vdd", slug: "luoi-bo-tuoi-vdd", name: "Lưỡi bò tươi", aliases: ["luoi bo", "beef tongue"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Lưỡi bò tươi, phần ăn được; khác với lưỡi lợn, gân bò hoặc lưỡi đã luộc.",
    nutrients: { energyKcal: 164, proteinG: 13.6, carbG: 0.2, fatG: 12.1, saturatedFatG: 5.26, calciumMg: 7, ironMg: 3, zincMg: 2.87, sodiumMg: 69, potassiumMg: 315, magnesiumMg: 16, phosphorusMg: 162, vitaminCMg: 3, seleniumMcg: 9.4, folateUg: 7 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7044: Lưỡi bò, tươi.", reviewNote: "Giữ phần cơ quan và trạng thái tươi của nguồn; không áp dụng cho món lưỡi bò hầm/xào có thêm dầu hoặc sốt.", note: sourceNote
  },
  {
    id: "long-gia-lon-tuoi-vdd", slug: "long-gia-lon-tuoi-vdd", name: "Lòng già lợn tươi", aliases: ["ruột già heo", "ruot gia lon", "ruot gia heo", "long lon ruot gia", "pork large intestine"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Lòng già/ruột già lợn tươi, phần ăn được; khác với lòng non heo đã có trong kho.",
    nutrients: { energyKcal: 167, proteinG: 6.9, carbG: 0.8, fatG: 15.1, calciumMg: 12, ironMg: 0.5, phosphorusMg: 55 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7046: Lòng lợn (ruột già), tươi.", reviewNote: "Đổi tên hiển thị theo cách gọi rõ phần ăn 'lòng già'; không dùng alias 'lòng heo' chung vì mục đó trong kho chỉ lòng non.", note: sourceNote
  },
  {
    id: "tim-bo-tuoi-vdd", slug: "tim-bo-tuoi-vdd", name: "Tim bò tươi", aliases: ["qua tim bo", "tim bo", "beef heart"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Tim bò tươi, phần ăn được; khác với tim gà, tim lợn hoặc tim bò đã luộc.",
    nutrients: { energyKcal: 89, proteinG: 15, carbG: 0.6, fatG: 3, saturatedFatG: 1.05, calciumMg: 5, ironMg: 5.4, zincMg: 1.7, sodiumMg: 98, potassiumMg: 287, magnesiumMg: 21, phosphorusMg: 185, vitaminAUg: 6, vitaminCMg: 7, seleniumMcg: 21.8, folateUg: 3 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7055: Tim bò, tươi.", reviewNote: "Không gộp với tim lợn/tim gà vì khác loài và mã nguồn; chỉ thêm cách gọi 'quả tim bò'.", note: sourceNote
  },
  {
    id: "tiet-bo-tuoi-vdd", slug: "tiet-bo-tuoi-vdd", name: "Tiết bò tươi", aliases: ["huyet bo", "huyết bò", "tiet bo", "beef blood"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Tiết/huyết bò tươi theo nguồn; cần chế biến an toàn, không dùng số liệu này cho tiết đã luộc hoặc tiết canh.",
    nutrients: { energyKcal: 75, proteinG: 18, carbG: 0.4, fatG: 0.2, calciumMg: 8, ironMg: 52.6, phosphorusMg: 31, vitaminAUg: 30 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7058: Tiết bò, tươi.", reviewNote: "'Tiết' và 'huyết' được lập chỉ mục là cùng nguyên liệu; giữ trạng thái tươi và không mô tả tiết canh như thực phẩm ăn liền.", note: sourceNote
  },
  {
    id: "tiet-lon-tuoi-vdd", slug: "tiet-lon-tuoi-vdd", name: "Tiết lợn tươi", aliases: ["huyet heo", "huyết heo", "huyet lon", "tiet heo", "tiet lon", "pork blood"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Tiết/huyết lợn tươi theo nguồn; cần chế biến an toàn, khác với tiết lợn luộc hoặc tiết canh.",
    nutrients: { energyKcal: 25, proteinG: 5.7, carbG: 0.2, fatG: 0.1, calciumMg: 7, ironMg: 20.4, phosphorusMg: 7, vitaminAUg: 25.83 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7060: Tiết lợn, tươi.", reviewNote: "Giữ tên lợn/heo và tiết/huyết theo vùng; không gộp với tiết bò hoặc số liệu mục tiết lợn luộc.", note: sourceNote
  },
  {
    id: "long-ga-ca-bo-tuoi-vdd", slug: "long-ga-ca-bo-tuoi-vdd", name: "Lòng gà tươi (cả bộ)", aliases: ["bo long ga", "bộ lòng gà", "long ga ca bo", "chicken giblets"],
    category: "Thịt", state: "raw", basis: "100g phần ăn được", edibleNote: "Bộ lòng gà tươi theo nguồn, không phải riêng mề, tim hay gan gà.",
    nutrients: { energyKcal: 119, proteinG: 17.88, carbG: 1.79, fatG: 4.47, saturatedFatG: 1.36, calciumMg: 10, ironMg: 5.86, zincMg: 3.32, sodiumMg: 77, potassiumMg: 228, magnesiumMg: 18, phosphorusMg: 197, vitaminAUg: 2657, vitaminCMg: 16.2, seleniumMcg: 55.2, folateUg: 345 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 7082: Lòng gà (cả bộ), tươi.", reviewNote: "Tên hiển thị nêu 'cả bộ' để không áp dụng số liệu hỗn hợp cho từng phủ tạng riêng lẻ.", note: sourceNote
  },
  {
    id: "long-do-trung-vit-vdd", slug: "long-do-trung-vit-vdd", name: "Lòng đỏ trứng vịt", aliases: ["long do trung vit", "duck egg yolk"],
    category: "Trứng sữa", state: "raw", basis: "100g phần ăn được", edibleNote: "Lòng đỏ tách từ trứng vịt theo nguồn; khác với lòng đỏ trứng gà, trứng vịt nguyên quả và trứng vịt lộn.",
    nutrients: { energyKcal: 364, proteinG: 13.6, carbG: 4.8, fatG: 32.3, calciumMg: 146, ironMg: 5.6, phosphorusMg: 328, vitaminAUg: 1682.92 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 9005: Lòng đỏ trứng vịt.", reviewNote: "Phần lòng đỏ và loài vịt được tách rõ để không thay số liệu trứng nguyên quả hoặc lòng đỏ trứng gà.", note: sourceNote
  },
  {
    id: "long-trang-trung-vit-vdd", slug: "long-trang-trung-vit-vdd", name: "Lòng trắng trứng vịt", aliases: ["long trang trung vit", "duck egg white"],
    category: "Trứng sữa", state: "raw", basis: "100g phần ăn được", edibleNote: "Lòng trắng tách từ trứng vịt theo nguồn; khác với lòng trắng trứng gà và trứng vịt nguyên quả.",
    nutrients: { energyKcal: 47, proteinG: 10.7, carbG: 0.8, fatG: 0.1, calciumMg: 6, phosphorusMg: 8 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 9006: Lòng trắng trứng vịt.", reviewNote: "Loài và phần trứng khớp trực tiếp mục nguồn; không thêm alias chung 'lòng trắng trứng' vì mục đó đang chỉ trứng gà.", note: sourceNote
  },
  {
    id: "trung-ca-muoi-vdd", slug: "trung-ca-muoi-vdd", name: "Trứng cá muối", aliases: ["roe muoi", "trung ca uop muoi", "salted fish roe"],
    category: "Hải sản", state: "processed", basis: "100g sản phẩm", edibleNote: "Trứng cá đã muối theo mục nguồn; không áp dụng cho trứng cá tươi, caviar theo nhãn cụ thể hoặc món có thêm dầu.",
    nutrients: { energyKcal: 274, proteinG: 24.6, carbG: 3.5, fatG: 17.9, saturatedFatG: 4.06, calciumMg: 275, ironMg: 11.88, zincMg: 0.95, sodiumMg: 1500, potassiumMg: 181, magnesiumMg: 300, phosphorusMg: 356, vitaminAUg: 561, seleniumMcg: 65.5, folateUg: 50 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 9009: Trứng cá muối.", reviewNote: "Được xếp Hải sản vì nguyên liệu là trứng cá; natri rất cao theo đúng sản phẩm muối, không suy diễn cho trứng cá tươi.", note: sourceNote
  },
  {
    id: "trung-ga-cong-nghiep-vdd", slug: "trung-ga-cong-nghiep-vdd", name: "Trứng gà công nghiệp", aliases: ["trung ga cong nghiep", "commercial chicken egg"],
    category: "Trứng sữa", state: "raw", basis: "100g phần ăn được", edibleNote: "Trứng gà công nghiệp nguyên quả theo nguồn; khác với trứng gà ta, trứng đã luộc/chiên và các phần lòng đỏ/lòng trắng tách riêng.",
    nutrients: { energyKcal: 132, proteinG: 12.79, carbG: 1.89, fatG: 8.17, vitaminAUg: 166.4, folateUg: 16.6 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 9012: Trứng gà công nghiệp.", reviewNote: "Không gộp với trứng gà ta sẵn có vì nguồn xác định khác loại nuôi; không dùng tên thương mại hoặc tên nuôi không được nguồn xác định.", note: sourceNote
  },
  {
    id: "bot-trung-vdd", slug: "bot-trung-vdd", name: "Bột trứng", aliases: ["bot trung", "egg powder"],
    category: "Trứng sữa", state: "processed", basis: "100g bột", edibleNote: "Bột trứng theo mục nguồn; không dùng thay cho trứng tươi, trứng nguyên quả hoàn nguyên hay bột có thêm đường/sữa.",
    nutrients: { energyKcal: 563, proteinG: 44, carbG: 1.8, fatG: 42.2, calciumMg: 186, ironMg: 9.3 },
    sourceId, confidence: "high", dataQuality: "source_backed", sourceConfidence: "high", sourceReviewStatus: "source_verified", candidateSource: "Viện Dinh dưỡng 9011: Bột trứng.", reviewNote: "Dạng bột được ghi rõ vì mật độ năng lượng/chất béo khác lớn so với trứng tươi; không suy diễn tỷ lệ pha hoàn nguyên.", note: sourceNote
  }
];
