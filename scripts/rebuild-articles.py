import re, json

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract article entries using slug as marker
# Each article has form: { slug: "...", title: "...", ... }
# Extract ALL articles from the file

articles_raw = re.findall(r'\{[^{}]*slug:\s*["\x27]([^"\x27]+)["\x27][^{}]*\}', content)
print(f'Found {len(articles_raw)} raw article blocks')

# Try a more robust pattern
pattern = r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*?\}'
blocks = re.findall(pattern, content)
# Filter to blocks containing slug:
article_blocks = [b for b in blocks if 'slug:' in b and 'title:' in b]
print(f'Found {len(article_blocks)} article blocks (robust)')

# Build slug -> specialty map
slug_specialty = {
    'beo-phi': 'noi-tiet', 'gout': 'noi-tiet', 'dai-thao-duong': 'noi-tiet',
    'tien-dai-thao-duong': 'noi-tiet', 'tang-huyet-ap': 'tim-mach',
    'suy-than': 'than-tiet-nieu', 'gan-nhiem-mo': 'noi-tiet',
    'loang-xuong': 'co-xuong-khop', 'thieu-mau': 'huyet-hoc',
    'roi-loan-mo-mau': 'tim-mach', 'viem-dai-trang-tieu-hoa': 'tieu-hoa',
    'dau-da-day': 'tieu-hoa', 'benh-tim-mach': 'tim-mach',
    'ung-thu': 'ung-thu', 'dot-quy-dinh-duong': 'than-kinh',
    'men-gan-cao': 'tieu-hoa', 'hoi-chung-chuyen-hoa': 'noi-tiet',
    'soi-than-dinh-duong': 'than-tiet-nieu', 'dinh-duong-viem-gan': 'tieu-hoa',
    'dinh-duong-viem-khop': 'co-xuong-khop',
    'dinh-duong-basedow-cuong-giap': 'noi-tiet', 'dinh-duong-suy-giap': 'noi-tiet',
    'dinh-duong-parkinson': 'than-kinh',
    'dinh-duong-alzheimer-sa-sut-tri-tue': 'than-kinh',
    'dinh-duong-lupus-ban-do': 'huyet-hoc', 'dinh-duong-benh-phoi-copd': 'ho-hap',
    'dinh-duong-da-day-trao-nguoc': 'tieu-hoa',
    'dinh-duong-thieu-vitamin-b12': 'huyet-hoc',
    'dinh-duong-benh-gallbladder-mat': 'tieu-hoa', 'dinh-duong-benh-tri': 'tieu-hoa',
    'dinh-duong-benh-than-kinh-toa': 'co-xuong-khop',
    'dinh-duong-thieu-ke-kem': 'huyet-hoc',
    'dinh-duong-viem-mui-di-ung': 'ho-hap',
    'dinh-duong-hoi-chung-tieu-hoa-ibs': 'tieu-hoa',
    'dinh-duong-suy-tim': 'tim-mach', 'dinh-duong-tre-em': 'phu-nu-nhi',
    'phu-nu-mang-thai': 'phu-nu-nhi', 'thieu-vitamin-d': 'co-xuong-khop',
    'dinh-duong-benh-than-man-ckd': 'than-tiet-nieu',
    'dinh-duong-viem-tuy': 'tieu-hoa', 'dinh-duong-xo-gan': 'tieu-hoa',
    'dinh-duong-pcos-buong-trung-da-nang': 'noi-tiet', 'dinh-duong-hen-suyen': 'ho-hap',
    'dinh-duong-benh-vay-nen-psoriasis': 'da-lieu',
    'dinh-duong-sau-phau-thuat': 'dinh-duong-tong-quat',
    'dinh-duong-benh-da-day-nen-an-gi': 'tieu-hoa',
    'dinh-duong-nguoi-cao-tuoi': 'phu-nu-nhi', 'dinh-duong-tram-cam': 'than-kinh',
    'dinh-duong-man-kinh': 'phu-nu-nhi',
    'dinh-duong-viem-khop-dang-thap': 'co-xuong-khop',
    'dinh-duong-crohn-viem-ruot': 'tieu-hoa', 'dinh-duong-viem-xoang-man': 'ho-hap',
    'dinh-duong-viem-da-co-dia-eczema': 'da-lieu',
    'dinh-duong-benh-dong-mach-vanh': 'tim-mach',
    'dinh-duong-suy-dinh-duong-nguoi-gia': 'phu-nu-nhi',
    'dinh-duong-so-cung-bi-scleroderma': 'da-lieu',
    'dinh-duong-vien-cot-song-dinh-khop': 'co-xuong-khop',
    'dinh-duong-thieu-mau-sat': 'huyet-hoc',
    'dinh-duong-suy-giam-mien-dich': 'huyet-hoc',
    'dinh-duong-dan-van-phong': 'dinh-duong-tong-quat',
    'dinh-duong-cho-nguoi-kho-nuot': 'dinh-duong-tong-quat',
    'dinh-duong-thuc-khuya': 'than-kinh',
    'dinh-duong-chay': 'dinh-duong-tong-quat',
    'dinh-duong-sau-mo': 'dinh-duong-tong-quat',
}

# Now extract clean field data from each article block
HEADER = """// Article metadata registry for Dinh Dưỡng Việt
// Single source of truth for all knowledge articles

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  category: "guidelines" | "disease" | "special" | "education";
  categoryName: string;
  displayCategory?: "an-lanh-manh" | "dang-co-benh" | "mon-an" | "thuc-don" | "dung-tin-ngay";
  date: string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
  audience?: string[];
  priority?: string;
  specialty?: string;
  series?: string;
  sources?: { name: string; url: string }[];
  keywords?: string[];
}

export const SERIES: Record<string, { name: string; emoji: string; description: string }> = {
  "dung-tin-ngay": { name: "Đừng Tin Ngay", emoji: "🔍", description: "Những hiểu lầm phổ biến về dinh dưỡng — có căn cứ khoa học hay chỉ là tin đồn?" },
};

export const SOURCE_ORG: Record<string, { name: string; url: string; short: string }> = {
  who: { name: "World Health Organization (WHO)", url: "https://www.who.int", short: "WHO" },
  "vien-dd": { name: "Viện Dinh dưỡng Quốc gia", url: "https://viendinhduong.vn", short: "Viện Dinh dưỡng" },
  ada: { name: "American Diabetes Association (ADA)", url: "https://diabetes.org", short: "ADA" },
  aha: { name: "American Heart Association (AHA)", url: "https://www.heart.org", short: "AHA" },
  esc: { name: "European Society of Cardiology (ESC)", url: "https://www.escardio.org", short: "ESC" },
  kdigo: { name: "KDIGO — Kidney Disease Improving Global Outcomes", url: "https://kdigo.org", short: "KDIGO" },
  espen: { name: "ESPEN — European Society for Clinical Nutrition", url: "https://www.espen.org", short: "ESPEN" },
  harvard: { name: "Harvard T.H. Chan School of Public Health — Nutrition Source", url: "https://nutritionsource.hsph.harvard.edu", short: "Harvard Nutrition" },
  nhs: { name: "NHS (UK National Health Service)", url: "https://www.nhs.uk/live-well/eat-well", short: "NHS" },
  medline: { name: "MedlinePlus — U.S. National Library of Medicine", url: "https://medlineplus.gov", short: "MedlinePlus" },
  byt: { name: "Bộ Y tế Việt Nam", url: "https://moh.gov.vn", short: "Bộ Y tế" },
  usda: { name: "USDA — Dietary Guidelines for Americans", url: "https://www.dietaryguidelines.gov", short: "USDA" },
  "who-vi": { name: "WHO Tây Thái Bình Dương (tiếng Việt)", url: "https://www.who.int/vietnam/vi", short: "WHO Việt Nam" },
};

export const CATEGORIES: Record<string, { name: string; emoji: string }> = {
  guidelines: { name: "Tháp dinh dưỡng & Hướng dẫn", emoji: "🏛️" },
  disease: { name: "Dinh dưỡng & Bệnh lý", emoji: "🩺" },
  special: { name: "Đối tượng đặc biệt", emoji: "👤" },
  education: { name: "Bài viết giáo dục", emoji: "✍️" },
};

export const DISPLAY_CATEGORIES: Record<string, { name: string; emoji: string; desc: string }> = {
  "an-lanh-manh": { name: "🥗 Ăn lành mạnh", emoji: "🥗", desc: "Dinh dưỡng cơ bản, giảm cân, vitamin, lối sống lành mạnh" },
  "dang-co-benh": { name: "🩺 Đang có bệnh", emoji: "🩺", desc: "Chế độ ăn theo từng bệnh lý: tiểu đường, gout, tim mạch, thận..." },
  "mon-an": { name: "🍜 Món ăn & thực phẩm", emoji: "🍜", desc: "Phân tích món ăn Việt: bún phở bánh mì, cách chọn, cách ăn" },
  "thuc-don": { name: "📋 Thực đơn mẫu", emoji: "📋", desc: "Thực đơn 1 ngày cho từng bệnh, từng túi tiền, từng lứa tuổi" },
  "dung-tin-ngay": { name: "🔍 Đừng Tin Ngay", emoji: "🔍", desc: "Hiểu lầm dinh dưỡng phổ biến — kiểm chứng khoa học" },
};
"""

FOOTER = """
// Index by slug for fast lookup
export const articleBySlug: Record<string, ArticleMeta> = {};
for (const a of articles) {
  articleBySlug[a.slug] = a;
}

export function getSeriesArticles(series: string): ArticleMeta[] {
  return articles.filter(a => a.series === series);
}

export function getFeaturedArticles(): ArticleMeta[] {
  return articles.filter(a => a.featured);
}

export function getRelatedArticles(slug: string, max: number = 4): ArticleMeta[] {
  const current = articleBySlug[slug];
  if (!current) return [];
  return articles.filter(a => a.category === current.category && a.slug !== slug).slice(0, max);
}

export function getArticlesBySpecialty(specialty: string): ArticleMeta[] {
  return articles.filter(a => a.specialty === specialty);
}

export const SPECIALTIES: Record<string, { name: string; emoji: string; desc: string }> = {
  "tim-mach": { name: "Tim mạch & Huyết áp", emoji: "❤️", desc: "Tăng huyết áp, mỡ máu, suy tim, bệnh động mạch vành" },
  "noi-tiet": { name: "Nội tiết & Chuyển hóa", emoji: "🩸", desc: "Tiểu đường, gout, béo phì, gan nhiễm mỡ, PCOS, Basedow" },
  "tieu-hoa": { name: "Tiêu hóa & Gan mật", emoji: "🫁", desc: "Đau dạ dày, viêm đại tràng, IBS, trào ngược, viêm tụy, xơ gan" },
  "than-tiet-nieu": { name: "Thận & Tiết niệu", emoji: "🫘", desc: "Suy thận, sỏi thận, bệnh thận mạn" },
  "co-xuong-khop": { name: "Cơ xương khớp", emoji: "🦴", desc: "Loãng xương, viêm khớp, gout, thoát vị đĩa đệm" },
  "huyet-hoc": { name: "Miễn dịch & Huyết học", emoji: "🧬", desc: "Thiếu máu, thiếu B12/kẽm, lupus, suy giảm miễn dịch" },
  "than-kinh": { name: "Thần kinh & Tâm lý", emoji: "🧠", desc: "Đột quỵ, Alzheimer, Parkinson, trầm cảm, mất ngủ" },
  "ho-hap": { name: "Hô hấp & Dị ứng", emoji: "🫁", desc: "COPD, hen suyễn, viêm mũi dị ứng, viêm xoang" },
  "da-lieu": { name: "Da liễu", emoji: "🧴", desc: "Vảy nến, viêm da cơ địa, xơ cứng bì" },
  "phu-nu-nhi": { name: "Phụ nữ, Trẻ em & Người già", emoji: "👨‍👩‍👧‍👦", desc: "Mang thai, mãn kinh, trẻ em, người cao tuổi, suy dinh dưỡng" },
  "ung-thu": { name: "Ung thư", emoji: "🎗️", desc: "Dinh dưỡng cho người ung thư trong và sau điều trị" },
  "dinh-duong-tong-quat": { name: "Dinh dưỡng tổng quát", emoji: "🥗", desc: "Tháp dinh dưỡng, lối sống lành mạnh, mẹo ăn uống" },
};
"""

# Reformat each article
formatted_articles = []
for block in article_blocks:
    # Extract slug
    sm = re.search(r'slug:\s*["\x27]([^"\x27]+)["\x27]', block)
    slug = sm.group(1) if sm else 'unknown'
    
    # Clean the block: collapse whitespace within field values
    cleaned = re.sub(r'\s+', ' ', block).strip()
    
    # Add specialty if missing
    if 'specialty:' not in cleaned:
        spec = slug_specialty.get(slug, 'dinh-duong-tong-quat')
        # Insert before displayCategory or date
        ins_pos = 'displayCategory:'
        if ins_pos in cleaned:
            cleaned = cleaned.replace(ins_pos, f'specialty: "{spec}", {ins_pos}')
        else:
            cleaned = cleaned.replace('date:', f'specialty: "{spec}", date:')
    
    # Add priority if missing from some
    if 'priority:' not in cleaned and slug_specialty.get(slug):
        cleaned = cleaned.replace('audience:', 'priority: "medium", audience:')
    
    formatted_articles.append(cleaned)

# Build output
output = HEADER
output += 'export const articles: ArticleMeta[] = [\n'
for i, art in enumerate(formatted_articles):
    output += '  ' + art
    if i < len(formatted_articles) - 1:
        output += ',\n'
    else:
        output += '\n'
output += '];\n'
output += FOOTER

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
    f.write(output)

# Verify
with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    v_content = f.read()

slugs = re.findall(r'slug:\s*["\x27]([^"\x27]+)["\x27]', v_content)
specs = re.findall(r'specialty:\s*["\x27]([^"\x27]+)["\x27]', v_content)
print(f'Slugs: {len(slugs)}, Specialties: {len(specs)}')
print(f'Lines: {v_content.count(chr(10))}')
print('First slug:', slugs[0] if slugs else 'N/A')
print('Last slug:', slugs[-1] if slugs else 'N/A')
