import { articleBySlug, articles, type ArticleMeta } from "./articles";

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
    description: "Lộ trình đọc nhanh cho người đái tháo đường: bài nền tảng, hiểu lầm thường gặp, thực đơn mẫu và công cụ áp dụng ngay.",
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
    description: "Tổng hợp bài cơ bản, phần giải oan hiểu lầm về đạm, thực đơn thấp purin và mẹo ăn uống khi đi làm hoặc lớn tuổi.",
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
    description: "Lối vào trọng điểm cho béo phì, béo bụng, kháng insulin và hội chứng chuyển hóa, nơi dinh dưỡng cần đi cùng giảm cân bền vững.",
    intro: "Đây là nhóm rất quan trọng vì nhiều người chưa bị đái tháo đường rõ nhưng đã có vòng eo tăng, triglyceride cao, gan nhiễm mỡ hoặc kháng insulin.",
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
      { href: "/cong-cu/ti-le-mo-co-the", label: "Tỷ lệ mỡ cơ thể" },
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
    description: "Một điểm vào gọn cho đau dạ dày, viêm loét dạ dày - tá tràng, trào ngược, khó tiêu và cách sắp xếp bữa ăn cho dễ chịu hơn.",
    intro: "Ở nhóm bệnh này, thời điểm ăn, độ mềm, lượng mỗi bữa và khả năng dung nạp cá nhân thường quan trọng gần như bản thân món ăn.",
    heroPoints: [
      "Không có một danh sách cấm tuyệt đối giống nhau cho mọi người.",
      "Bữa nhỏ, đều, ít dầu mỡ và ít kích thích thường dễ chịu hơn.",
      "Cần tách riêng nhóm đau dạ dày, viêm loét tá tràng, trào ngược và nhiễm HP khi đọc nội dung.",
    ],
    foundationSlugs: ["dau-da-day", "vi-khuan-hp-da-day", "trao-nguoc-da-day", "dinh-duong-benh-da-day-nen-an-gi"],
    menuSlugs: ["thuc-don-da-day", "thuc-don-da-day-ban-ron", "thuc-don-da-day-binh-dan", "thuc-don-da-day-nguoi-gia"],
    mythSlugs: ["dinh-duong-da-day-trao-nguoc", "trao-nguoc-da-day-ban-dem-an-gi"],
    mythTitle: "Tình huống hay gặp",
    mythDescription: "Nếu triệu chứng thiên về trào ngược, ợ nóng về đêm hoặc khó chịu sau bữa tối, hãy bắt đầu từ các bài này trước khi chỉnh cả thực đơn.",
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
    description: "Điểm khởi đầu cho suy thận, bệnh thận mạn, sỏi thận và các hiểu lầm thường khiến người bệnh kiêng quá mức.",
    intro: "Nhóm bệnh thận rất dễ bị tư vấn quá tay. Web nên dẫn người đọc đến đúng giai đoạn bệnh và nhấn mạnh việc cá thể hóa theo xét nghiệm, thuốc và ý kiến bác sĩ.",
    heroPoints: [
      "Không phải ai bị bệnh thận cũng phải kiêng toàn bộ đạm, kali và nước.",
      "Cần phân biệt suy thận, chạy thận, sỏi thận và tăng kali máu.",
      "Bài phù hợp giúp tránh kiêng sai, sụt cân và thiếu dinh dưỡng.",
    ],
    foundationSlugs: ["suy-than", "dinh-duong-benh-than-man-ckd", "soi-than-dinh-duong"],
    menuSlugs: [],
    mythSlugs: ["canh-bao-hieu-lam-suy-than-kieng", "ckd-kali-phot-pho-muoi-thuc-hanh", "tang-kali-mau-suy-than", "benh-than-iga-dinh-duong"],
    mythTitle: "Tình huống cần phân biệt",
    mythDescription: "Nhóm này hữu ích khi bạn đã biết mình thuộc bệnh thận mạn, tăng kali máu, sỏi thận hay một bệnh cảnh đặc hiệu hơn và cần tránh áp dụng nhầm lời khuyên.",
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
    audience: [],
    description: "Tập hợp bài về mỡ máu cao, nguy cơ tim mạch, phục hồi sau biến cố tim mạch và chế độ ăn bảo vệ mạch máu.",
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
    mythDescription: "Nếu bạn đã có suy tim, từng đặt stent hoặc đang phục hồi sau biến cố tim mạch, hãy đi từ các bài này thay vì áp dụng nguyên xi lời khuyên cho người chỉ tăng mỡ máu đơn thuần.",
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
    audience: [],
    description: "Nhóm trọng điểm cho COPD, hen suyễn, viêm phế quản mạn và các tình huống ăn uống liên quan khó thở, sụt cân hoặc béo phì đi kèm.",
    intro: "Nếu người đọc có bệnh hô hấp kéo dài, dễ mệt khi ăn, sụt cân hoặc đồng thời thừa cân, đây nên là một lối vào riêng thay vì bị chìm trong bản đồ bệnh lớn.",
    heroPoints: [
      "Bữa quá no có thể làm khó thở hơn, nhất là ở COPD.",
      "Người bệnh có thể đi theo hai hướng rất khác: sụt cân mất cơ hoặc thừa cân kèm hen/ngưng thở khi ngủ.",
      "Nội dung dinh dưỡng hô hấp nên gắn với dung nạp bữa ăn, cân nặng và bệnh kèm theo.",
    ],
    foundationSlugs: ["dinh-duong-benh-copd", "dinh-duong-hen-suyen", "viem-phe-quan-man-tinh"],
    menuSlugs: [],
    mythSlugs: ["hen-suyen-beo-phi-giam-can", "om-sot-cam-cum"],
    mythTitle: "Tình huống nên đọc thêm",
    mythDescription: "Phần này hữu ích khi triệu chứng hô hấp đi cùng béo phì, nhiễm siêu vi hoặc khó chịu nhiều sau ăn.",
    toolLinks: [
      { href: "/cong-cu/bmi", label: "BMI và vòng eo" },
      { href: "/cong-cu/muc-tieu-can-nang", label: "Mục tiêu cân nặng" },
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
  const foundation = pickArticles(hub.foundationSlugs);
  const menus = pickArticles(hub.menuSlugs);
  const myths = pickArticles(hub.mythSlugs);
  const listed = new Set([...foundation, ...menus, ...myths].map((item) => item.slug));
  const featuredTitles = new Set(
    [...foundation, ...menus, ...myths]
      .map((item) => item.title.trim().toLowerCase()),
  );
  const more = articles
    .filter((article) => {
      const matchAudience = hub.audience.some((tag) => article.audience?.includes(tag));
      const matchSpecialty = article.specialty === hub.specialty;
      const sameTitle = featuredTitles.has(article.title.trim().toLowerCase());
      const isArticleLike = article.displayCategory === "bai-viet" || article.displayCategory === "dung-tin-ngay";
      return !listed.has(article.slug) && !sameTitle && isArticleLike && (matchAudience || matchSpecialty);
    })
    .sort((a, b) => {
      const aAudience = hub.audience.some((tag) => a.audience?.includes(tag));
      const bAudience = hub.audience.some((tag) => b.audience?.includes(tag));
      if (aAudience !== bAudience) return Number(bAudience) - Number(aAudience);
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    })
    .slice(0, 6);

  return { foundation, menus, myths, more };
}
