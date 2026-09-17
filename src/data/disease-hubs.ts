import { articleBySlug, articles, type ArticleMeta } from "./articles";
import { canonicalAudienceList } from "../utils/audience";

export interface DiseaseHubConfig {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  specialty: string;
  audience: string[];
  description: string;
  intro: string;
  heroPoints: string[];
  foundationSlugs: string[];
  menuSlugs: string[];
  mythSlugs: string[];
  mythTitle?: string;
  mythDescription?: string;
  toolLinks: { href: string; label: string }[];
}

export const diseaseHubs: DiseaseHubConfig[] = [
  {
    id: "tieu-duong",
    name: "Đái tháo đường",
    shortName: "Đái tháo đường",
    emoji: "🩸",
    specialty: "noi-tiet",
    audience: ["diabetes"],
    description: "Lộ trình đọc cho người đái tháo đường: bài nền tảng, hiểu lầm thường gặp, thực đơn mẫu và công cụ áp dụng.",
    intro: "Trang này gom các bài quan trọng nhất về ăn uống với đái tháo đường để người mới chẩn đoán hoặc đang muốn điều chỉnh bữa ăn có thể bắt đầu đúng chỗ.",
    heroPoints: [
      "Không cần bỏ hoàn toàn cơm hay trái cây.",
      "Ưu tiên kiểm soát khẩu phần, giờ ăn và chất lượng tinh bột.",
      "Kết hợp bài viết, thực đơn và công cụ theo dõi đường huyết.",
    ],
    foundationSlugs: ["dai-thao-duong", "tien-dai-thao-duong", "tien-dai-thao-duong-di-lam-ban-ron", "tieu-duong-an-com-duoc-khong", "com-trang-tieu-duong", "di-cho-tieu-duong"],
    menuSlugs: ["thuc-don-tieu-duong", "thuc-don-tieu-duong-ban-ron", "thuc-don-tieu-duong-binh-dan", "thuc-don-tieu-duong-nguoi-gia"],
    mythSlugs: ["sai-lam-tieu-duong-bo-com", "canh-bao-hieu-lam-com-tieu-duong", "dung-tin-ngay-gao-lut-tieu-duong", "dung-tin-ngay-mat-ong-tieu-duong"],
    toolLinks: [
      { href: "/cong-cu/tinh-carb", label: "Tính carb" },
      { href: "/cong-cu/tinh-gl-bua-an", label: "Tính GL bữa ăn" },
      { href: "/cong-cu/ke-hoach-bua-an", label: "Lập kế hoạch bữa ăn" },
    ],
  },
  {
    id: "cao-huyet-ap",
    name: "Tăng huyết áp",
    shortName: "Tăng huyết áp",
    emoji: "🫗",
    specialty: "tim-mach",
    audience: ["hypertension"],
    description: "Tập trung vào giảm muối thực tế, nhận diện natri ẩn, thực đơn dễ áp dụng và các mẹo ăn ngoài hàng quán.",
    intro: "Nếu người dùng chỉ nhớ một việc khi bắt đầu, đó là giảm natri từ nước chấm, đồ chế biến sẵn và điều chỉnh khẩu vị dần dần thay vì kiêng cực đoan.",
    heroPoints: [
      "Giảm muối quan trọng hơn việc chỉ bỏ món mặn nhìn thấy được.",
      "Rau, trái cây và món nấu tại nhà giúp kiểm soát huyết áp tốt hơn.",
      "Có thể dùng thực đơn riêng cho người bận rộn hoặc người lớn tuổi.",
    ],
    foundationSlugs: ["tang-huyet-ap", "tang-huyet-ap-natri-an-trong-mon-viet", "huyet-ap-cao-muoi-an-o-dau", "cao-huyet-ap-dash-diet", "che-do-dash-tang-huyet-ap", "giam-muoi-mon-ngon"],
    menuSlugs: ["thuc-don-tang-huyet-ap", "thuc-don-huyet-ap-ban-ron", "thuc-don-huyet-ap-binh-dan", "thuc-don-huyet-ap-nguoi-gia"],
    mythSlugs: ["sai-lam-an-nhat", "canh-bao-hieu-lam-an-nhat-muoi"],
    toolLinks: [
      { href: "/cong-cu/theo-doi-suc-khoe", label: "Theo dõi sức khỏe" },
      { href: "/cong-cu/nuoc-muoi-mon-an", label: "Ước tính muối món ăn" },
      { href: "/cong-cu/ke-hoach-bua-an", label: "Lập kế hoạch bữa ăn" },
      { href: "/cong-cu/danh-sach-di-cho", label: "Danh sách đi chợ" },
    ],
  },
  {
    id: "gout-axit-uric",
    name: "Gout và axit uric cao",
    shortName: "Gout",
    emoji: "🦶",
    specialty: "noi-tiet",
    audience: ["gout"],
    description: "Lối vào cho gout và acid uric cao: nền tảng, hiểu lầm về đạm, thực đơn thấp purin và mẹo áp dụng hằng ngày.",
    intro: "Người bệnh gout thường bị kéo vào hai cực: kiêng quá mức hoặc coi nhẹ bia rượu, nước ngọt. Hub này đưa về các điểm thực hành quan trọng nhất.",
    heroPoints: [
      "Không phải mọi cơn gout đều do ăn quá nhiều thịt.",
      "Kiểm soát bia rượu, nước ngọt và nước uống hằng ngày rất quan trọng.",
      "Có thể chọn đạm phù hợp thay vì bỏ hết thực phẩm giàu đạm.",
    ],
    foundationSlugs: ["gout", "dinh-duong-benh-gout-axit-uric", "tang-acid-uric", "gout-khong-chi-kieng-thit-do"],
    menuSlugs: ["thuc-don-gout", "thuc-don-gout-ban-ron", "thuc-don-gout-binh-dan", "thuc-don-gout-nguoi-gia"],
    mythSlugs: ["sai-lam-gout-chi-do-thit", "canh-bao-hieu-lam-gout-dam"],
    toolLinks: [
      { href: "/cong-cu/ke-hoach-bua-an", label: "Lập kế hoạch bữa ăn" },
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
      { href: "/cong-cu/danh-sach-di-cho", label: "Danh sách đi chợ" },
      { href: "/cong-cu/so-sanh-thuc-pham", label: "So sánh thực phẩm" },
    ],
  },
  {
    id: "gan-nhiem-mo",
    name: "Gan nhiễm mỡ",
    shortName: "Gan nhiễm mỡ",
    emoji: "🫁",
    specialty: "tieu-hoa",
    audience: ["fatty-liver"],
    description: "Dành cho người có gan nhiễm mỡ, men gan cao hoặc rối loạn chuyển hóa muốn bắt đầu từ các thay đổi bền vững.",
    intro: "Điều thường cần sửa trước là nước ngọt, bữa ăn nhiều tinh bột tinh chế, đồ uống có cồn và nhịp sống ít vận động hơn là chỉ chăm chăm vào mỡ động vật.",
    heroPoints: [
      "Giảm đường lỏng và tổng năng lượng thường quan trọng hơn cắt cực đoan một nhóm thực phẩm.",
      "Thực đơn nên thực tế để dùng lâu dài, không phải ăn kiêng ngắn ngày.",
      "Người gầy vẫn có thể bị gan nhiễm mỡ và cần cách tiếp cận khác.",
    ],
    foundationSlugs: ["gan-nhiem-mo", "gan-nhiem-mo-giam-can-vong-eo", "gan-nhiem-mo-an-ngoai-di-lam", "gan-nhiem-mo-nguoi-gay"],
    menuSlugs: ["thuc-don-gan-nhiem-mo", "thuc-don-gan-nhiem-mo-ban-ron", "thuc-don-gan-nhiem-mo-binh-dan", "thuc-don-gan-nhiem-mo-nguoi-gia"],
    mythSlugs: ["sai-lam-gan-nhiem-mo-an-mo"],
    toolLinks: [
      { href: "/cong-cu/muc-tieu-can-nang", label: "Mục tiêu cân nặng" },
      { href: "/cong-cu/tinh-nang-luong", label: "Tính nhu cầu năng lượng" },
      { href: "/cong-cu/lap-thuc-don-tuan", label: "Lập thực đơn tuần" },
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
    ],
  },
  {
    id: "beo-phi-chuyen-hoa",
    name: "Béo phì và hội chứng chuyển hóa",
    shortName: "Béo phì, chuyển hóa",
    emoji: "⚖️",
    specialty: "noi-tiet",
    audience: ["weight-loss", "diabetes"],
    description: "Lối vào cho béo phì, béo bụng, kháng insulin và hội chứng chuyển hóa, với trọng tâm giảm cân bền vững.",
    intro: "Nhóm này phù hợp khi vòng eo tăng, triglyceride cao, gan nhiễm mỡ hoặc nghi kháng insulin dù chưa được chẩn đoán đái tháo đường.",
    heroPoints: [
      "Ưu tiên giảm mỡ nội tạng và cải thiện vòng eo, không chỉ nhìn cân nặng.",
      "Giảm 5-10% cân nặng thường đã có ý nghĩa rõ với đường huyết, mỡ máu và huyết áp.",
      "Nên đi từ nguyên tắc năng lượng, khẩu phần và tính bền vững thay vì nhịn cực đoan.",
    ],
    foundationSlugs: ["beo-phi", "hoi-chung-chuyen-hoa", "giam-can-khoa-hoc", "hieu-dung-ve-calo"],
    menuSlugs: [],
    mythSlugs: ["sai-lam-giam-can", "canh-bao-hieu-lam-giam-can-nhanh", "khang-insulin-resistance"],
    mythTitle: "Điểm dễ làm sai",
    mythDescription: "Nhóm này phù hợp khi người đọc đang muốn giảm cân nhanh, nghi kháng insulin hoặc đã có hội chứng chuyển hóa và cần đi lại từ nền tảng đúng.",
    toolLinks: [
      { href: "/cong-cu/muc-tieu-can-nang", label: "Mục tiêu cân nặng" },
      { href: "/cong-cu/bmi", label: "BMI và vòng eo" },
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
      { href: "/cong-cu/ke-hoach-bua-an", label: "Kế hoạch bữa ăn" },
    ],
  },
  {
    id: "da-day-trao-nguoc",
    name: "Dạ dày, tá tràng",
    shortName: "Dạ dày, tá tràng",
    emoji: "😣",
    specialty: "tieu-hoa",
    audience: ["stomach"],
    description: "Điểm vào cho đau dạ dày, viêm loét dạ dày - tá tràng, trào ngược, khó tiêu và cách sắp bữa dễ chịu hơn.",
    intro: "Ở nhóm bệnh này, thời điểm ăn, độ mềm, lượng mỗi bữa và khả năng dung nạp cá nhân thường quan trọng gần như bản thân món ăn.",
    heroPoints: [
      "Không có một danh sách cấm tuyệt đối giống nhau cho mọi người.",
      "Bữa nhỏ, đều, ít dầu mỡ và ít kích thích thường dễ chịu hơn.",
      "Cần tách đau dạ dày, viêm loét tá tràng, trào ngược và nhiễm HP khi chọn bài.",
    ],
    foundationSlugs: ["dau-da-day", "vi-khuan-hp-da-day", "trao-nguoc-da-day", "dinh-duong-benh-da-day-nen-an-gi"],
    menuSlugs: ["thuc-don-da-day", "thuc-don-da-day-ban-ron", "thuc-don-da-day-binh-dan", "thuc-don-da-day-nguoi-gia"],
    mythSlugs: ["dinh-duong-da-day-trao-nguoc", "trao-nguoc-ban-dem", "dau-da-day-hp-ca-phe-thuoc-giam-dau"],
    mythTitle: "Tình huống hay gặp",
    mythDescription: "Nếu triệu chứng thiên về ợ nóng, trào ngược ban đêm, cà phê, thuốc giảm đau hoặc bữa tối muộn, hãy bắt đầu từ các bài thực hành này.",
    toolLinks: [
      { href: "/cong-cu/ke-hoach-bua-an", label: "Lập kế hoạch bữa ăn" },
      { href: "/cong-cu/checklist-an-uong", label: "Checklist ăn uống" },
      { href: "/cong-cu/tim-mon-tu-nguyen-lieu", label: "Tìm món từ nguyên liệu" },
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
    ],
  },
  {
    id: "benh-than",
    name: "Bệnh thận",
    shortName: "Bệnh thận",
    emoji: "🫘",
    specialty: "than-tiet-nieu",
    audience: ["kidney"],
    description: "Điểm khởi đầu cho bệnh thận mạn, lọc máu, sỏi thận và các hiểu lầm dễ khiến người bệnh kiêng quá mức.",
    intro: "Nhóm bệnh thận dễ bị tư vấn quá tay. Cần chọn đúng giai đoạn bệnh và cá thể hóa theo xét nghiệm, thuốc, cùng hướng dẫn của bác sĩ.",
    heroPoints: [
      "Không phải ai bị bệnh thận cũng phải kiêng toàn bộ đạm, kali và nước.",
      "Cần phân biệt bệnh thận mạn chưa lọc máu, chạy thận, sỏi thận và tăng kali máu.",
      "Bài phù hợp giúp tránh kiêng sai, sụt cân và thiếu dinh dưỡng.",
    ],
    foundationSlugs: ["suy-than", "dinh-duong-loc-mau-chu-ky", "soi-than-dinh-duong"],
    menuSlugs: [],
    mythSlugs: ["canh-bao-hieu-lam-suy-than-kieng", "ckd-kali-phot-pho-muoi-thuc-hanh", "tang-kali-mau-suy-than", "benh-than-iga-dinh-duong"],
    mythTitle: "Tình huống cần tách rõ",
    mythDescription: "Hãy đọc nhóm này khi cần tách bệnh thận mạn chưa lọc máu, chạy thận, tăng kali máu hoặc một bệnh cảnh thận đặc hiệu để tránh áp dụng nhầm cùng một chế độ ăn.",
    toolLinks: [
      { href: "/cong-cu/theo-doi-suc-khoe", label: "Theo dõi sức khỏe" },
      { href: "/cong-cu/doi-don-vi", label: "Đổi đơn vị xét nghiệm" },
      { href: "/cong-cu/loc-thuc-pham", label: "Lọc thực phẩm" },
      { href: "/cong-cu/so-sanh-thuc-pham", label: "So sánh thực phẩm" },
    ],
  },
  {
    id: "mo-mau-tim-mach",
    name: "Mỡ máu và tim mạch",
    shortName: "Mỡ máu, tim mạch",
    emoji: "❤️",
    specialty: "tim-mach",
    audience: ["cardio"],
    description: "Tập hợp bài về mỡ máu cao, nguy cơ tim mạch, suy tim, phục hồi sau biến cố và chế độ ăn bảo vệ mạch máu.",
    intro: "Trang này phù hợp với người xét nghiệm thấy LDL, triglyceride tăng hoặc đã có bệnh tim mạch và cần lối vào dễ hiểu hơn so với đọc từng bài rời.",
    heroPoints: [
      "Không phải cứ ăn mỡ mới làm mỡ máu xấu đi.",
      "Cần nhìn đồng thời chất béo, đường, rượu bia và cân nặng.",
      "Ưu tiên mô hình ăn bền vững để giảm nguy cơ lâu dài.",
    ],
    foundationSlugs: ["roi-loan-mo-mau", "benh-tim-mach", "mo-mau-cao-7-mon-an-nguy-hiem"],
    menuSlugs: ["thuc-don-mo-mau"],
    mythSlugs: ["dung-tin-ngay-chanh-giam-mo-mau", "dinh-duong-suy-tim", "suy-tim-can-nang-muoi-dich", "phuc-hoi-nhoi-mau-co-tim-stent"],
    mythTitle: "Tình huống cần lưu ý thêm",
    mythDescription: "Nếu đã có suy tim, từng đặt stent hoặc đang phục hồi sau biến cố tim mạch, hãy đọc nhóm này thay vì áp dụng nguyên xi lời khuyên cho mỡ máu đơn thuần.",
    toolLinks: [
      { href: "/cong-cu/theo-doi-suc-khoe", label: "Theo dõi sức khỏe" },
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
      { href: "/cong-cu/lap-thuc-don-tuan", label: "Lập thực đơn tuần" },
      { href: "/cong-cu/danh-sach-di-cho", label: "Danh sách đi chợ" },
    ],
  },
  {
    id: "ho-hap-man",
    name: "Hô hấp mạn tính",
    shortName: "Hô hấp mạn",
    emoji: "🫁",
    specialty: "ho-hap",
    audience: ["respiratory"],
    description: "Nhóm cho COPD, hen suyễn, viêm phế quản mạn và các tình huống ăn uống liên quan khó thở, sụt cân hoặc béo phì.",
    intro: "Nếu bệnh hô hấp kéo dài đi cùng mệt khi ăn, sụt cân hoặc thừa cân, nên bắt đầu từ nhóm này thay vì đọc rải rác từng bài.",
    heroPoints: [
      "Bữa quá no có thể làm khó thở hơn, nhất là ở COPD.",
      "Người bệnh có thể sụt cân mất cơ hoặc thừa cân kèm hen/ngưng thở khi ngủ.",
      "Nội dung dinh dưỡng hô hấp nên gắn với dung nạp bữa ăn, cân nặng và bệnh kèm theo.",
    ],
    foundationSlugs: ["dinh-duong-benh-copd", "dinh-duong-hen-suyen", "viem-phe-quan-man-tinh"],
    menuSlugs: [],
    mythSlugs: ["hen-suyen-beo-phi-giam-can", "om-sot-cam-cum"],
    mythTitle: "Tình huống nên đọc thêm",
    mythDescription: "Phần này hữu ích khi triệu chứng hô hấp đi cùng béo phì, nhiễm siêu vi hoặc khó chịu sau ăn.",
    toolLinks: [
      { href: "/cong-cu/bmi", label: "BMI và vòng eo" },
      { href: "/cong-cu/muc-tieu-can-nang", label: "Mục tiêu cân nặng" },
      { href: "/cong-cu/ke-hoach-bua-an", label: "Kế hoạch bữa ăn" },
    ],
  },
  {
    id: "ung-thu",
    name: "Ung thư và dinh dưỡng",
    shortName: "Ung thư",
    emoji: "🎗️",
    specialty: "ung-thu",
    audience: ["cancer", "caregiver"],
    description: "Lộ trình dinh dưỡng theo loại ung thư, giai đoạn điều trị và triệu chứng thường gặp.",
    intro: "Mục tiêu dinh dưỡng thay đổi theo phẫu thuật, hóa trị, xạ trị, miễn dịch và chăm sóc giảm nhẹ; không có một chế độ ăn chung cho mọi người.",
    heroPoints: [
      "Ưu tiên đủ năng lượng, đạm và nước theo khả năng dung nạp.",
      "Xử lý sớm chán ăn, buồn nôn, loét miệng, tiêu chảy và sụt cân.",
      "Không dùng nhịn đói, thực phẩm bổ sung hoặc chế độ đặc biệt để thay điều trị.",
    ],
    foundationSlugs: ["ung-thu", "ung-thu-phoi", "ung-thu-da-day", "ung-thu-tuy-duong-mat", "dinh-duong-ung-thu-dai-trang"],
    menuSlugs: ["dinh-duong-truoc-hoa-tri-ke-hoach-bua-an", "sua-y-hoc-ons-ung-thu"],
    mythSlugs: ["tin-don-nhin-doi-ung-thu", "dung-tin-ngay-sua-dau-nanh-ung-thu"],
    mythTitle: "Hiểu đúng để không kiêng sai",
    mythDescription: "Kiểm tra các lời khuyên về nhịn ăn, đường, thực phẩm bổ sung và thuốc nam trước khi áp dụng.",
    toolLinks: [
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
      { href: "/cong-cu/ke-hoach-bua-an", label: "Kế hoạch bữa ăn" },
      { href: "/cong-cu/theo-doi-suc-khoe", label: "Theo dõi cân nặng và triệu chứng" },
    ],
  },
  {
    id: "xo-gan",
    name: "Xơ gan và dinh dưỡng",
    shortName: "Xơ gan",
    emoji: "🧬",
    specialty: "tieu-hoa",
    audience: ["liver", "adult", "caregiver"],
    description: "Lộ trình ăn uống cho xơ gan, cổ trướng, suy mòn cơ và giai đoạn chuẩn bị ghép gan.",
    intro: "Xơ gan có thể gây suy dinh dưỡng và mất cơ; khẩu phần đạm, muối, dịch và thực phẩm bổ sung cần cá thể hóa theo biến chứng và xét nghiệm.",
    heroPoints: [
      "Không tự nhịn đói hoặc cắt đạm khi chưa có chỉ định.",
      "Cổ trướng, phù, lú lẫn, nôn máu hoặc phân đen cần được đánh giá y tế.",
      "Tránh rượu bia và thực phẩm sống có nguy cơ nhiễm khuẩn.",
    ],
    foundationSlugs: ["xo-gan-co-truong-an-uong", "xo-gan-co-truong-muoi-dich-dam", "gan-do-ruou-an-uong", "ung-thu-gan-hcc"],
    menuSlugs: ["thuc-don-gan-nhiem-mo"],
    mythSlugs: ["sai-lam-gan-nhiem-mo-an-mo", "canh-bao-hieu-lam-gan-bo-gan"],
    mythTitle: "Những điểm dễ làm sai",
    mythDescription: "Đọc kỹ trước khi tự hạn chế nước, đạm, trái cây hoặc dùng sản phẩm bổ gan.",
    toolLinks: [
      { href: "/cong-cu/danh-gia-bua-an", label: "Đánh giá bữa ăn" },
      { href: "/cong-cu/theo-doi-suc-khoe", label: "Theo dõi cân nặng và phù" },
      { href: "/cong-cu/ke-hoach-bua-an", label: "Kế hoạch bữa ăn" },
    ],
  },
];

export const diseaseHubBySlug = Object.fromEntries(
  diseaseHubs.map((hub) => [hub.id, hub]),
) as Record<string, DiseaseHubConfig>;

export function pickArticles(slugs: string[]): ArticleMeta[] {
  return slugs
    .map((slug) => articleBySlug[slug])
    .filter((item): item is ArticleMeta => Boolean(item));
}

export function getHubSections(hub: DiseaseHubConfig) {
  const hubAudience = canonicalAudienceList(hub.audience);
  const foundation = pickArticles(hub.foundationSlugs);
  const menus = pickArticles(hub.menuSlugs);
  const myths = pickArticles(hub.mythSlugs);
  const listed = new Set([...foundation, ...menus, ...myths].map((item) => item.slug));
  const featuredTitles = new Set(
    [...foundation, ...menus, ...myths]
      .map((item) => item.title.trim().toLowerCase()),
  );
  const isArticleLike = (article: ArticleMeta) =>
    article.displayCategory === "bai-viet" || article.displayCategory === "dung-tin-ngay";
  const isBaseCandidate = (article: ArticleMeta) =>
    !listed.has(article.slug)
    && !featuredTitles.has(article.title.trim().toLowerCase())
    && isArticleLike(article);
  const compareMore = (a: ArticleMeta, b: ArticleMeta) => {
    if (Boolean(a.featured) !== Boolean(b.featured)) return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  };

  const audienceMatches = articles
    .filter((article) => {
      if (!isBaseCandidate(article)) return false;
      const articleAudience = canonicalAudienceList(article.audience);
      return hubAudience.some((tag) => articleAudience.includes(tag));
    })
    .sort(compareMore);

  const audienceSlugs = new Set(audienceMatches.map((article) => article.slug));
  const specialtyFallback = articles
    .filter((article) => {
      if (!isBaseCandidate(article)) return false;
      if (audienceSlugs.has(article.slug)) return false;
      return article.specialty === hub.specialty;
    })
    .sort(compareMore);

  const more = [...audienceMatches, ...specialtyFallback].slice(0, 6);

  return { foundation, menus, myths, more };
}
