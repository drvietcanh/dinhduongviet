import type { Food } from "./nutrition";

const sourceId = "vdd-food-portal-2026";
const sourceNote = "Số liệu theo công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng; chỉ áp dụng cho đúng tên, trạng thái và đơn vị ghi trên từng mục.";

type SourceRow = Pick<Food, "id" | "slug" | "name" | "aliases" | "category" | "state" | "basis" | "edibleNote" | "nutrients"> & { code: string; review: string };

// Thay thế các bản ghi trùng nghĩa sau rà soát sâu; mỗi mục giữ đúng tên/trạng thái nguồn.
const rows: SourceRow[] = [
  { id: "banh-deo-nhan-trung-vdd", slug: "banh-deo-nhan-trung-vdd", name: "Bánh dẻo nhân trứng", aliases: ["banh deo nhan trung", "bánh trung thu dẻo nhân trứng"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh dẻo nhân trứng theo mục nguồn; không áp dụng cho bánh nướng hoặc nhân khác.", nutrients: { energyKcal: 338, proteinG: 7.4, carbG: 58.6, fatG: 8.2 }, code: "15012", review: "Tách rõ bánh dẻo nhân trứng với bánh trung thu nướng và bánh dẻo nhân thập cẩm." },
  { id: "banh-khoai-vdd", slug: "banh-khoai-vdd", name: "Bánh khoái", aliases: ["banh khoai", "bánh khoái Huế"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh khoái theo mục nguồn; nước chấm và phần nhân thực tế có thể thay đổi.", nutrients: { energyKcal: 159, proteinG: 0.6, carbG: 16.26, fatG: 10.2 }, code: "15019", review: "Không dùng cho bánh xèo hoặc công thức bánh khoái có lượng nhân, dầu và nước chấm khác." },
  { id: "banh-khuc-vdd", slug: "banh-khuc-vdd", name: "Bánh khúc", aliases: ["banh khuc"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh khúc theo mục nguồn; không suy diễn tỷ lệ nhân đậu/thịt trong từng công thức.", nutrients: { energyKcal: 249, proteinG: 4.1, carbG: 49.7, fatG: 3.8 }, code: "15021", review: "Giữ riêng với xôi khúc hoặc bánh nếp có nhân khác." },
  { id: "banh-te-vdd", slug: "banh-te-vdd", name: "Bánh tẻ", aliases: ["banh te", "bánh răng bừa"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh tẻ theo mục nguồn; khác với bánh giò hoặc bánh nậm.", nutrients: { energyKcal: 104, proteinG: 1.5, carbG: 17.23, fatG: 3.2 }, code: "15030", review: "Tên vùng miền bánh răng bừa được dùng làm alias tìm kiếm, không gộp với món khác." },
  { id: "bot-chien-gion-vdd", slug: "bot-chien-gion-vdd", name: "Bột chiên giòn", aliases: ["bot chien gion", "crispy frying flour"], category: "Tinh bột", state: "processed", basis: "100g bột", edibleNote: "Bột chiên giòn khô theo mục nguồn; không áp dụng cho thực phẩm sau khi chiên hấp thụ dầu.", nutrients: { energyKcal: 351.6, proteinG: 8.5, carbG: 74.9, fatG: 2 }, code: "13045", review: "Tách nguyên liệu bột khô khỏi món chiên thành phẩm và bột chiên xù." },
  { id: "lac-chao-dau-vdd", slug: "lac-chao-dau-vdd", name: "Lạc chao dầu", aliases: ["lac chao dau", "đậu phộng chao dầu"], category: "Hạt", state: "processed", basis: "100g sản phẩm", edibleNote: "Lạc chao dầu theo mục nguồn; khác với lạc rang, lạc luộc hoặc dầu lạc.", nutrients: { energyKcal: 680, proteinG: 25.7, carbG: 10.3, fatG: 59.5 }, code: "11004", review: "Giữ trạng thái chao dầu, không gộp với hạt lạc nguyên vị." },
  { id: "banh-bich-quy-vdd", slug: "banh-bich-quy-vdd", name: "Bánh bích quy", aliases: ["banh bich quy", "biscuit"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh bích quy theo mục nguồn; công thức bánh quy có thể khác theo nhãn.", nutrients: { energyKcal: 378, proteinG: 8.8, carbG: 75.6, fatG: 4.5 }, code: "12002", review: "Không đại diện cho bánh quy nhân kem, phủ chocolate hoặc bánh cracker mặn." },
  { id: "banh-quay-vdd", slug: "banh-quay-vdd", name: "Bánh quẩy", aliases: ["banh quay", "dầu cháo quẩy", "youtiao"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh quẩy theo mục nguồn; không áp dụng cho lượng dầu còn lại sau rán ở từng quán.", nutrients: { energyKcal: 200, proteinG: 3.7, carbG: 30.8, fatG: 6.8 }, code: "1014", review: "Tách bánh quẩy khỏi bánh mì và bánh rán nhân." },
  { id: "com-tuoi-vdd", slug: "com-tuoi-vdd", name: "Cốm tươi", aliases: ["com tuoi", "cốm làng Vòng"], category: "Tinh bột", state: "processed", basis: "100g sản phẩm", edibleNote: "Cốm tươi theo mục nguồn; không áp dụng cho cốm xào, bánh cốm hoặc cốm khô.", nutrients: { energyKcal: 307, proteinG: 4.4, carbG: 68.3, fatG: 1.7 }, code: "1021", review: "Giữ riêng dạng cốm tươi với các món thêm đường, dừa hoặc đậu xanh." },
  { id: "thit-lon-hop-vdd", slug: "thit-lon-hop-vdd", name: "Thịt lợn hộp", aliases: ["thit lon hop", "thịt heo hộp", "canned pork"], category: "Thịt chế biến", state: "processed", basis: "100g sản phẩm", edibleNote: "Thịt lợn hộp theo mục nguồn; khác với thịt hộp nhãn cụ thể hoặc thịt tươi.", nutrients: { energyKcal: 344, proteinG: 17.3, carbG: 2.7, fatG: 29.3 }, code: "11019", review: "Không áp dụng cho thịt lợn kho hộp, luncheon meat hoặc thịt nguội." },
  { id: "banh-trung-custas-vdd", slug: "banh-trung-custas-vdd", name: "Bánh trứng Custas", aliases: ["banh trung custas", "custas"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh trứng Custas theo mục nguồn; không đại diện cho toàn bộ bánh trứng hoặc nhãn bánh khác.", nutrients: { energyKcal: 434, proteinG: 4.26, carbG: 46.81, fatG: 25.53 }, code: "12088", review: "Tên nhãn được giữ nguyên; không dùng cho bánh trứng nhà làm." },
  { id: "banh-cha-vdd", slug: "banh-cha-vdd", name: "Bánh chả", aliases: ["banh cha"], category: "Bánh kẹo", state: "processed", basis: "100g sản phẩm", edibleNote: "Bánh chả theo mục nguồn; khác với chả thịt hoặc bánh chay.", nutrients: { energyKcal: 399, proteinG: 3.4, carbG: 81.5, fatG: 6.6 }, code: "12003", review: "Không dùng cho chả giò, chả lụa hoặc món có tên chả khác." },
];

export const extraFoods19: Food[] = rows.map(({ code, review, ...food }) => ({
  ...food,
  sourceId,
  confidence: "high",
  dataQuality: "source_backed",
  sourceConfidence: "high",
  sourceReviewStatus: "source_verified",
  candidateSource: `Viện Dinh dưỡng ${code}: ${food.name}.`,
  reviewNote: review,
  note: sourceNote,
}));
