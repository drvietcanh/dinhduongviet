#!/usr/bin/env python3
"""
Reclassify articles currently in "dinh-duong-tong-quat" to more specific specialties.
Then add new articles to boost underrepresented specialties.
"""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# === STEP 1: Reclassification map (slug -> new specialty) ===
# Moving disease-specific articles from tổng quát to their correct specialty
reclassify = {
    # → TIÊU HÓA
    "dau-da-day-nen-an-gi": "tieu-hoa",
    "day-bung-sau-an": "tieu-hoa",
    "o-nong-nong-rat-nguc": "tieu-hoa",
    "tao-bon-ibs": "tieu-hoa",
    "tieu-chay-o-nguoi-lon": "tieu-hoa",
    "tieu-chay-mat-nuoc": "tieu-hoa",
    "chat-xo": "tieu-hoa",
    "probiotic-va-duong-ruot": "tieu-hoa",
    "thuoc-chi-dinh-vitamin-k": "tieu-hoa",  # warfarin & vitamin K — digestive/nutrition

    # → NỘI TIẾT
    "com-trang-tieu-duong": "noi-tiet",
    "tang-acid-uric": "noi-tiet",
    "sai-lam-tieu-duong-bo-com": "noi-tiet",
    "sai-lam-gout-chi-do-thit": "noi-tiet",
    "sai-lam-loang-xuong-chi-canxi": "co-xuong-khop",  # actually bone

    # → TIM MẠCH
    "che-do-dash-tang-huyet-ap": "tim-mach",
    "che-do-trung-hai-viem-khop-tim-mach": "tim-mach",
    "phu-chan-giam-muoi": "tim-mach",
    "muoi-duong-trong-thuc-pham": "tim-mach",

    # → CƠ XƯƠNG KHỚP
    "canxi-xuong-chac-khoe": "co-xuong-khop",
    "thieu-vitamin-d": "co-xuong-khop",
    "nuoc-ham-xuong-canxi": "co-xuong-khop",
    "chuot-rut-thieu-chat": "co-xuong-khop",

    # → HUYẾT HỌC
    "thieu-ke-kem": "huyet-hoc",
    "met-moi-thieu-chat": "huyet-hoc",
    "rung-toc-thieu-chat": "huyet-hoc",
    "sai-lam-thieu-mau-uong-sat": "huyet-hoc",
    "sai-lam-loang-xuong-chi-canxi": "huyet-hoc",

    # → UNG THƯ
    "dinh-duong-cho-nguoi-kho-nuot": "ung-thu",
    "suy-dinh-duong-nguoi-benh": "ung-thu",

    # → THẦN KINH
    "thuc-pham-giac-ngu": "than-kinh",

    # → HÔ HẤP
    "om-sot-cam-cum": "ho-hap",

    # → PHỤ NỮ NHI 
    "tao-bon-nguoi-cao-tuoi": "phu-nu-nhi",
    "an-tet-nguoi-benh": "phu-nu-nhi",
    "an-du-lich-benh-nen": "phu-nu-nhi",
    "mam-com-gia-dinh-benh-nen": "phu-nu-nhi",
    "an-ca-kip-truc": "phu-nu-nhi",
    "an-khuya-va-nhin-an-gian-doan": "phu-nu-nhi",
    "an-ngoai-hang-quan": "phu-nu-nhi",
}

# Also move some sai-lam/canh-bao that are disease-specific
reclassify["sai-lam-gan-nhiem-mo-an-mo"] = "tieu-hoa"
reclassify["sai-lam-an-nhat"] = "tim-mach"

# Move meal plans to their disease specialty
# thuc-don-tieu-duong* → noi-tiet
# thuc-don-gout* → noi-tiet
# thuc-don-huyet-ap* → tim-mach
# thuc-don-gan-nhiem-mo* → tieu-hoa
# thuc-don-da-day* → tieu-hoa
# thuc-don-mo-mau → tim-mach

meal_plan_map = {
    "thuc-don-tieu-duong": "noi-tiet",
    "thuc-don-tieu-duong-ban-ron": "noi-tiet",
    "thuc-don-tieu-duong-binh-dan": "noi-tiet",
    "thuc-don-tieu-duong-nguoi-gia": "noi-tiet",
    "thuc-don-gout": "noi-tiet",
    "thuc-don-gout-ban-ron": "noi-tiet",
    "thuc-don-gout-binh-dan": "noi-tiet",
    "thuc-don-gout-nguoi-gia": "noi-tiet",
    "thuc-don-huyet-ap-ban-ron": "tim-mach",
    "thuc-don-huyet-ap-binh-dan": "tim-mach",
    "thuc-don-huyet-ap-nguoi-gia": "tim-mach",
    "thuc-don-tang-huyet-ap": "tim-mach",
    "thuc-don-gan-nhiem-mo": "tieu-hoa",
    "thuc-don-gan-nhiem-mo-ban-ron": "tieu-hoa",
    "thuc-don-gan-nhiem-mo-binh-dan": "tieu-hoa",
    "thuc-don-gan-nhiem-mo-nguoi-gia": "tieu-hoa",
    "thuc-don-da-day": "tieu-hoa",
    "thuc-don-da-day-ban-ron": "tieu-hoa",
    "thuc-don-da-day-binh-dan": "tieu-hoa",
    "thuc-don-da-day-nguoi-gia": "tieu-hoa",
    "thuc-don-mo-mau": "tim-mach",
    "thuc-don-giam-can-kieu-viet": "noi-tiet",
    "thuc-don-tang-dam-nguoi-gay": "phu-nu-nhi",
}
reclassify.update(meal_plan_map)

# Move "đừng tin ngay" series articles to đúng specialty
dtn_map = {
    "canh-bao-hieu-lam-com-tieu-duong": "noi-tiet",
    "canh-bao-hieu-lam-gout-dam": "noi-tiet",
    "canh-bao-hieu-lam-suy-than-kieng": "than-tiet-nieu",
    "canh-bao-hieu-lam-gan-bo-gan": "tieu-hoa",
    "canh-bao-hieu-lam-nuoc-ep-trai-cay": "dinh-duong-tong-quat",
    "canh-bao-hieu-lam-an-nhat-muoi": "tim-mach",
    "canh-bao-hieu-lam-sua-hat-dam": "dinh-duong-tong-quat",
    "canh-bao-hieu-lam-nuoc-ham-xuong": "co-xuong-khop",
    "canh-bao-hieu-lam-thuc-pham-chuc-nang": "dinh-duong-tong-quat",
    "canh-bao-hieu-lam-giam-can-nhanh": "noi-tiet",
    "dung-tin-ngay-chanh-giam-mo-mau": "tim-mach",
    "dung-tin-ngay-duong-phen": "noi-tiet",
    "dung-tin-ngay-mat-ong-tieu-duong": "noi-tiet",
    "dung-tin-ngay-gao-lut-tieu-duong": "noi-tiet",
    "dung-tin-ngay-nhin-an-giam-can": "noi-tiet",
    "dung-tin-ngay-trai-cay-thay-com": "noi-tiet",
}
reclassify.update(dtn_map)

# Apply reclassification
count = 0
new_text = text

for slug, new_spec in reclassify.items():
    # Find the article block containing this slug
    pattern = r'(slug:\s*"' + re.escape(slug) + r'"[\s\S]*?)(specialty:\s*)"([^"]+)"'
    
    def replacer(m):
        global count
        count += 1
        return m.group(1) + m.group(2) + '"' + new_spec + '"'
    
    new_text = re.sub(pattern, replacer, new_text)

print(f"Reclassified {count} articles")

if count > 0:
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("✅ Written")

# === STEP 2: Add new articles to boost small specialties ===
# Target: ung-thu (1), da-lieu (2), ho-hap (3), tim-mach (4), than-tiet-nieu (4), etc.

new_disease_articles = [
    # → UNG THƯ (currently 1 → make it 4+)
    {
        "slug": "dinh-duong-ung-thu-vu",
        "title": "Dinh dưỡng cho người ung thư vú — Trong và sau điều trị",
        "desc": "Chế độ ăn cho bệnh nhân ung thư vú: giảm tái phát, kiểm soát cân nặng, hạn chế rượu, thực phẩm chống viêm.",
        "emoji": "🎀",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 8,
        "tags": '["ung thư vú", "tái phát", "xạ trị", "hoá trị", "nội tiết", "tamoxifen"]',
        "audience": '["người ung thư vú", "người ung thư", "phụ nữ sau mãn kinh"]',
        "spec": "ung-thu",
        "sources": '[\n      { name: "American Cancer Society — Nutrition for Breast Cancer", url: "https://www.cancer.org/cancer/breast-cancer.html" },\n      { name: "Harvard T.H. Chan — Breast Cancer Diet", url: "https://nutritionsource.hsph.harvard.edu/cancer/" },\n      { name: "Mayo Clinic — Breast Cancer Nutrition", url: "https://www.mayoclinic.org/breast-cancer" }\n    ]',
        "keywords": '["ung thư vú", "tái phát", "xạ trị", "hoá trị", "tamoxifen", "thực phẩm chống ung thư"]',
    },
    {
        "slug": "dinh-duong-ung-thu-dai-trang",
        "title": "Dinh dưỡng cho người ung thư đại tràng — Trước và sau mổ",
        "desc": "Ung thư đại trực tràng: chế độ ăn giàu xơ trước mổ, hậu phẫu, sau hóa trị, phòng ngừa tái phát.",
        "emoji": "🫃",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 8,
        "tags": '["ung thư đại tràng", "colorectal cancer", "hậu phẫu", "hóa trị", "ostomy", "xơ"]',
        "audience": '["người ung thư đại tràng", "người sau mổ đại tràng", "người có túi thông"]',
        "spec": "ung-thu",
        "sources": '[\n      { name: "American Cancer Society — Colorectal Cancer Nutrition", url: "https://www.cancer.org/cancer/colon-rectal-cancer.html" },\n      { name: "Harvard T.H. Chan — Fiber and Colon Cancer", url: "https://nutritionsource.hsph.harvard.edu/cancer/" },\n      { name: "NHS — Diet after Bowel Cancer", url: "https://www.nhs.uk/conditions/bowel-cancer/" }\n    ]',
        "keywords": '["ung thư đại tràng", "colorectal", "hậu phẫu", "hóa trị", "túi thông", "xơ", "prebiotic"]',
    },
    # → DA LIỄU (currently 2 → make it 4)
    {
        "slug": "dinh-duong-eczema-viem-da-co-dia",
        "title": "Eczema & Viêm da cơ địa — Dinh dưỡng giảm ngứa, giảm bùng phát",
        "desc": "Viêm da cơ địa (eczema, atopic dermatitis) ở trẻ em và người lớn. Thực phẩm nên tránh và nên ăn để giảm viêm da.",
        "emoji": "🧴",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 7,
        "tags": '["eczema", "viêm da cơ địa", "atopic dermatitis", "dị ứng", "da khô", "ngứa"]',
        "audience": '["người eczema", "người viêm da", "trẻ em eczema"]',
        "spec": "da-lieu",
        "sources": '[\n      { name: "American Academy of Dermatology — Eczema Diet", url: "https://www.aad.org/public/diseases/eczema" },\n      { name: "National Eczema Association — Diet and Eczema", url: "https://nationaleczema.org/eczema/diet/" },\n      { name: "NHS — Atopic Eczema Diet Tips", url: "https://www.nhs.uk/conditions/atopic-eczema/" }\n    ]',
        "keywords": '["eczema", "viêm da cơ địa", "atopic", "dị ứng thực phẩm", "sữa", "trứng", "hải sản", "ngứa"]',
    },
    {
        "slug": "dinh-duong-xo-cung-bi",
        "title": "Xơ cứng bì — Dinh dưỡng cho người bệnh mô liên kết",
        "desc": "Xơ cứng bì hệ thống (scleroderma): khó nuốt, trào ngược, hội chứng malabsorption. Chế độ ăn mềm, chống viêm.",
        "emoji": "🫸",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 7,
        "tags": '["xơ cứng bì", "scleroderma", "tự miễn", "khó nuốt", "trào ngược", "mô liên kết"]',
        "audience": '["người xơ cứng bì", "người bệnh tự miễn"]',
        "spec": "da-lieu",
        "sources": '[\n      { name: "Scleroderma Foundation — Nutrition", url: "https://www.scleroderma.org" },\n      { name: "Johns Hopkins Scleroderma Center — Diet", url: "https://www.hopkinsscleroderma.org" },\n      { name: "NHS — Scleroderma Diet", url: "https://www.nhs.uk/conditions/scleroderma/" }\n    ]',
        "keywords": '["xơ cứng bì", "scleroderma", "khó nuốt", "trào ngược", "tự miễn", "mềm", "chống viêm"]',
    },
    # → HÔ HẤP (currently 3 → make it 5)
    {
        "slug": "dinh-duong-viem-xoang",
        "title": "Viêm xoang — Dinh dưỡng giảm viêm, giảm triệu chứng",
        "desc": "Viêm xoang mạn tính: thực phẩm giảm viêm, tránh sữa (nếu nhạy cảm), tăng omega-3, uống đủ nước.",
        "emoji": "👃",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 6,
        "tags": '["viêm xoang", "sinusitis", "viêm mũi xoang", "hô hấp", "dị ứng", "chống viêm"]',
        "audience": '["người viêm xoang", "người viêm mũi dị ứng"]',
        "spec": "ho-hap",
        "sources": '[\n      { name: "American Academy of Allergy, Asthma & Immunology — Sinusitis", url: "https://www.aaaai.org/conditions-treatments/related-conditions/sinusitis" },\n      { name: "Harward Health — Anti-inflammatory Diet", url: "https://www.health.harvard.edu/staying-healthy/anti-inflammatory-diet" },\n      { name: "Mayo Clinic — Sinusitis Self-care", url: "https://www.mayoclinic.org/diseases-conditions/sinusitis" }\n    ]',
        "keywords": '["viêm xoang", "sinusitis", "chống viêm", "omega-3", "sữa", "hô hấp", "dị ứng"]',
    },
    # → HUYẾT HỌC (currently 4 → make it 6)
    {
        "slug": "dinh-duong-benh-thien-sach-hemophilia",
        "title": "Bệnh máu khó đông (Hemophilia) — Dinh dưỡng bảo vệ khớp & cơ",
        "desc": "Hemophilia A/B: chế độ ăn giàu canxi, vitamin K, sắt, tránh thực phẩm loãng máu, bảo vệ khớp.",
        "emoji": "🩸",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 7,
        "tags": '["hemophilia", "máu khó đông", "rối loạn đông máu", "vitamin K", "sắt", "khớp"]',
        "audience": '["người hemophilia", "người rối loạn đông máu"]',
        "spec": "huyet-hoc",
        "sources": '[\n      { name: "World Federation of Hemophilia — Nutrition", url: "https://www.wfh.org" },\n      { name: "National Hemophilia Foundation — Healthy Eating", url: "https://www.hemophilia.org" },\n      { name: "MedlinePlus — Hemophilia Diet", url: "https://medlineplus.gov/hemophilia.html" }\n    ]',
        "keywords": '["hemophilia", "máu khó đông", "đông máu", "vitamin K", "sắt", "bảo vệ khớp", "loãng máu"]',
    },
    # → TIM MẠCH (currently 4+ → make it 8+)
    {
        "slug": "dinh-duong-sau-nhau-mau-co-tim",
        "title": "Sau nhồi máu cơ tim — Dinh dưỡng phục hồi và dự phòng tái phát",
        "desc": "Chế độ ăn cho người sau đau tim: giảm mỡ bão hòa, tăng omega-3, kiểm soát huyết áp, giảm muối.",
        "emoji": "❤️",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 8,
        "tags": '["nhồi máu cơ tim", "sau đau tim", "tái phát", "mạch vành", "phục hồi", "omega-3"]',
        "audience": '["người sau nhồi máu cơ tim", "người bệnh mạch vành"]',
        "spec": "tim-mach",
        "sources": '[\n      { name: "American Heart Association — Recovery After Heart Attack", url: "https://www.heart.org/en/health-topics/heart-attack/life-after-a-heart-attack" },\n      { name: "Harvard Health — Diet After Heart Attack", url: "https://www.health.harvard.edu/heart-health" },\n      { name: "NHS — Recovery After Heart Attack", url: "https://www.nhs.uk/conditions/heart-attack/recovery/" }\n    ]',
        "keywords": '["nhồi máu cơ tim", "sau đau tim", "mạch vành", "tái phát", "omega-3", "giảm muối", "phục hồi"]',
    },
    # → THẦN KINH (currently 5 → make it 7)
    {
        "slug": "dinh-duong-tram-cam",
        "title": "Trầm cảm — Dinh dưỡng kết nối ruột - não giúp cải thiện tâm trạng",
        "desc": "Mối liên hệ giữa dinh dưỡng và trầm cảm: omega-3, tryptophan, vitamin B, men vi sinh, chế độ ăn Địa Trung Hải.",
        "emoji": "🧠",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 7,
        "tags": '["trầm cảm", "depression", "tâm trạng", "omega-3", "serotonin", "tryptophan", "ruột-não"]',
        "audience": '["người trầm cảm", "người rối loạn lo âu"]',
        "spec": "than-kinh",
        "sources": '[\n      { name: "Harvard Health — Nutritional Psychiatry", url: "https://www.health.harvard.edu/nutritional-psychiatry" },\n      { name: "NHS — Food and Mood", url: "https://www.nhs.uk/mental-health/self-help/tips-and-support/eat-well/" },\n      { name: "Mayo Clinic — Depression Diet", url: "https://www.mayoclinic.org/diseases-conditions/depression/" }\n    ]',
        "keywords": '["trầm cảm", "tâm trạng", "omega-3", "DHA", "tryptophan", "serotonin", "ruột-não", "vitamin B"]',
    },
    # → PHỤ NỮ NHI (currently 4+ → make it 7+)
    {
        "slug": "dinh-duong-ma-kinh",
        "title": "Mãn kinh — Dinh dưỡng giảm bốc hỏa, bảo vệ xương & tim mạch",
        "desc": "Chế độ ăn cho phụ nữ mãn kinh: phytoestrogen, canxi, vitamin D, kiểm soát cân nặng, giảm bốc hỏa.",
        "emoji": "👩",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 7,
        "tags": '["mãn kinh", "tiền mãn kinh", "phytoestrogen", "bốc hỏa", "loãng xương", "tim mạch"]',
        "audience": '["phụ nữ mãn kinh", "phụ nữ tiền mãn kinh"]',
        "spec": "phu-nu-nhi",
        "sources": '[\n      { name: "North American Menopause Society — Nutrition", url: "https://www.menopause.org" },\n      { name: "Harvard Health — Diet for Menopause", url: "https://www.health.harvard.edu/womens-health" },\n      { name: "NHS — Menopause Diet", url: "https://www.nhs.uk/conditions/menopause/" }\n    ]',
        "keywords": '["mãn kinh", "tiền mãn kinh", "phytoestrogen", "đậu nành", "bốc hỏa", "canxi", "vitamin D"]',
    },
    {
        "slug": "dinh-duong-tre-bieng-an-suy-dinh-duong",
        "title": "Trẻ biếng ăn, chậm tăng cân — Dinh dưỡng phục hồi cho trẻ suy dinh dưỡng",
        "desc": "Hướng dẫn cho cha mẹ: cách tăng năng lượng và đạm cho trẻ biếng ăn, thực đơn mẫu, khi nào cần can thiệp.",
        "emoji": "🧒",
        "category": "disease",
        "dc": "dang-co-benh",
        "readTime": 8,
        "tags": '["trẻ biếng ăn", "suy dinh dưỡng", "chậm tăng cân", "trẻ em", "ăn dặm", "thực đơn"]',
        "audience": '["cha mẹ", "người chăm sóc trẻ"]',
        "spec": "phu-nu-nhi",
        "sources": '[\n      { name: "WHO — Infant and Young Child Feeding", url: "https://www.who.int/health-topics/infant-and-young-child-feeding" },\n      { name: "Viện Dinh dưỡng Quốc gia — Dinh dưỡng trẻ em", url: "https://viendinhduong.vn" },\n      { name: "UNICEF — Nutrition for Children", url: "https://www.unicef.org/nutrition" }\n    ]',
        "keywords": '["trẻ biếng ăn", "suy dinh dưỡng trẻ em", "chậm tăng cân", "tăng năng lượng", "thực đơn trẻ em"]',
    },
]

# Build the insertion block
def make_article(a):
    return f'''  {{
    slug: "{a['slug']}",
    title: "{a['title']}",
    description: "{a['desc']}",
    emoji: "{a['emoji']}",
    category: "{a['category']}",
    categoryName: "Dinh dưỡng & Bệnh lý",
    displayCategory: "{a['dc']}",
    date: "2026-05-30",
    readTime: {a['readTime']},
    featured: false,
    tags: {a['tags']},
    audience: {a['audience']},
    specialty: "{a['spec']}",
    sources: {a['sources']},
    keywords: {a['keywords']},
  }}'''

new_entries_block = '\n'.join(make_article(a) for a in new_disease_articles)

# Insert before the closing '];'
marker = '\n];\n\n// Index by slug'
new_block = new_entries_block + marker

if marker in text:
    text = text.replace(marker, new_block)
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print(f"✅ Added {len(new_disease_articles)} new disease articles")
else:
    print("❌ Could not find marker")
