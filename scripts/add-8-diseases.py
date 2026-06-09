#!/usr/bin/env python3
"""Add 8 new disease article entries to articles.ts before the closing '];'"""

import re

# Read file
with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# New article entries in alphabetical order by slug
new_entries = [
    # 1. Suy thượng thận (Addison) — noi-tiet
    {
        'slug': 'benh-addison-suy-thuong-than',
        'title': 'Bệnh Addison — Suy thượng thận: Dinh dưỡng duy trì năng lượng',
        'description': 'Hướng dẫn chế độ ăn cho người suy thượng thận: natri, cortisol, năng lượng, thực phẩm nên ăn và cần tránh.',
        'emoji': '🫗',
        'category': 'disease',
        'categoryName': 'Dinh dưỡng & Bệnh lý',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 7,
        'featured': 'false',
        'tags': '["suy thượng thận", "Addison", "nội tiết", "cortisol", "natri", "năng lượng"]',
        'audience': '["người suy thượng thận", "người bệnh nội tiết"]',
        'specialty': '"noi-tiet"',
        'sources': '[\n      { name: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) — Adrenal Insufficiency", url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/adrenal-insufficiency-addisons-disease" },\n      { name: "Mayo Clinic — Addison\'s disease: Diet", url: "https://www.mayoclinic.org/diseases-conditions/addisons-disease" },\n      { name: "Cleveland Clinic — Addison\'s Disease Nutrition", url: "https://my.clevelandclinic.org/health/diseases/15095-addisons-disease" }\n    ]',
        'keywords': '["Addison", "suy thượng thận", "cortisol", "natri", "ăn mặn", "tuyến thượng thận", "mệt mỏi"]',
    },
    # 2. Cường cận giáp — noi-tiet
    {
        'slug': 'cuong-can-giap',
        'title': 'Cường cận giáp — Dinh dưỡng cho canxi máu cao',
        'description': 'Cường tuyến cận giáp ảnh hưởng canxi, phốt pho, vitamin D. Chế độ ăn: uống nước, giới hạn canxi, bổ sung magie.',
        'emoji': '🦴',
        'category': 'disease',
        'categoryName': 'Dinh dưỡng & Bệnh lý',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 7,
        'featured': 'false',
        'tags': '["cường cận giáp", "hyperparathyroidism", "canxi máu", "nội tiết", "xương", "sỏi thận"]',
        'audience': '["người cường cận giáp", "người canxi máu cao", "người sỏi thận"]',
        'specialty': '"noi-tiet"',
        'sources': '[\n      { name: "NIDDK — Primary Hyperparathyroidism", url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/primary-hyperparathyroidism" },\n      { name: "Endocrine Society — Hyperparathyroidism Guidelines", url: "https://www.endocrine.org/clinical-practice-guidelines" },\n      { name: "Mayo Clinic — Hyperparathyroidism: Diet and lifestyle", url: "https://www.mayoclinic.org/diseases-conditions/hyperparathyroidism" }\n    ]',
        'keywords': '["cường cận giáp", "hyperparathyroidism", "canxi máu", "PTH", "tuyến cận giáp", "sỏi thận", "loãng xương"]',
    },
    # 3. Ghép tạng (dinh dưỡng sau ghép) — dinh-duong-tong-quat (cross-specialty)
    {
        'slug': 'dinh-duong-sau-ghep-tang',
        'title': 'Dinh dưỡng sau ghép tạng — Ăn gì để bảo vệ mảnh ghép?',
        'description': 'Chế độ ăn sau ghép thận, gan, tim: tránh nhiễm trùng, tương tác thuốc ức chế miễn dịch (tacrolimus, cyclosporine), bổ sung dinh dưỡng.',
        'emoji': '🔬',
        'category': 'special',
        'categoryName': 'Đối tượng đặc biệt',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 9,
        'featured': 'false',
        'tags': '["ghép tạng", "ghép thận", "ghép gan", "ức chế miễn dịch", "tacrolimus", "sau phẫu thuật"]',
        'audience': '["người ghép tạng", "người sau ghép thận", "người suy giảm miễn dịch"]',
        'specialty': '"dinh-duong-tong-quat"',
        'sources': '[\n      { name: "National Kidney Foundation — Nutrition After Transplant", url: "https://www.kidney.org/atoz/content/nutrition-after-kidney-transplant" },\n      { name: "American Society of Transplantation — Nutritional Considerations", url: "https://www.myast.org/patient-resources" },\n      { name: "Bệnh viện Chợ Rẫy — Hướng dẫn dinh dưỡng sau ghép thận", url: "https://bvchoray.com" },\n      { name: "NKF — Diet after Kidney Transplant", url: "https://www.kidney.org/kidney-topics/nutrition-after-kidney-transplant" }\n    ]',
        'keywords': '["ghép tạng", "sau ghép thận", "sau ghép gan", "ức chế miễn dịch", "tacrolimus", "bưởi", "nhiễm trùng", "dinh dưỡng hậu phẫu"]',
    },
    # 4. Wilson (gan-thần kinh) — tieu-hoa (gan)
    {
        'slug': 'benh-wilson-dinh-duong',
        'title': 'Bệnh Wilson — Dinh dưỡng giảm đồng cho người rối loạn chuyển hóa đồng',
        'description': 'Bệnh Wilson tích tụ đồng ở gan và thần kinh. Thực phẩm cần tránh (nội tạng, sò, chocolate) và thực phẩm nên ăn để hỗ trợ điều trị.',
        'emoji': '🧠',
        'category': 'disease',
        'categoryName': 'Dinh dưỡng & Bệnh lý',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 8,
        'featured': 'false',
        'tags': '["Wilson", "đồng", "gan", "thần kinh", "chuyển hóa", "nội tạng"]',
        'audience': '["người bệnh Wilson", "người bệnh gan", "người rối loạn chuyển hóa"]',
        'specialty': '"tieu-hoa"',
        'sources': '[\n      { name: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) — Wilson Disease", url: "https://www.niddk.nih.gov/health-information/liver-disease/wilson-disease" },\n      { name: "Wilson Disease Association — Diet Recommendations", url: "https://www.wilsondisease.org" },\n      { name: "Mayo Clinic — Wilson\'s disease: Diet and lifestyle", url: "https://www.mayoclinic.org/diseases-conditions/wilsons-disease" }\n    ]',
        'keywords': '["Wilson", "đồng", "lắng đọng đồng", "gan", "thần kinh", "kiêng đồng", "sò", "nội tạng", "chocolate"]',
    },
    # 5. Viêm mạch (Vasculitis) — huyet-hoc/mien-dich
    {
        'slug': 'viem-mach-dinh-duong',
        'title': 'Viêm mạch — Dinh dưỡng chống viêm hỗ trợ điều trị',
        'description': 'Viêm mạch (vasculitis) là bệnh tự miễn. Chế độ ăn chống viêm: omega-3, tránh kích hoạt miễn dịch, hỗ trợ thuốc ức chế miễn dịch.',
        'emoji': '🩸',
        'category': 'disease',
        'categoryName': 'Dinh dưỡng & Bệnh lý',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 7,
        'featured': 'false',
        'tags': '["viêm mạch", "vasculitis", "tự miễn", "chống viêm", "miễn dịch", "mạch máu"]',
        'audience': '["người viêm mạch", "người bệnh tự miễn"]',
        'specialty': '"huyet-hoc"',
        'sources': '[\n      { name: "Vasculitis Foundation — Diet and Nutrition", url: "https://www.vasculitisfoundation.org" },\n      { name: "Johns Hopkins Vasculitis Center — Nutrition Tips", url: "https://www.hopkinsvasculitis.org" },\n      { name: "Cleveland Clinic — Anti-Inflammatory Diet", url: "https://my.clevelandclinic.org/health/articles/17640-anti-inflammatory-diet" }\n    ]',
        'keywords': '["viêm mạch", "vasculitis", "tự miễn", "chống viêm", "omega-3", "mạch máu", "viêm thành mạch"]',
    },
    # 6. Mề đay mạn (Chronic Urticaria) — da-lieu
    {
        'slug': 'me-day-man-dinh-duong',
        'title': 'Mề đay mạn tính — Dinh dưỡng giảm ngứa và phát ban',
        'description': 'Mề đay mạn tính kéo dài >6 tuần. Thực phẩm giàu histamin cần tránh, chế độ ăn low-histamine, thực phẩm ổn định dưỡng bào.',
        'emoji': '🧴',
        'category': 'disease',
        'categoryName': 'Dinh dưỡng & Bệnh lý',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 7,
        'featured': 'false',
        'tags': '["mề đay", "urticaria", "dị ứng", "histamin", "da liễu", "ngứa", "phát ban"]',
        'audience': '["người mề đay", "người nổi mẩn", "người da nhạy cảm"]',
        'specialty': '"da-lieu"',
        'sources': '[\n      { name: "American Academy of Dermatology (AAD) — Chronic Urticaria", url: "https://www.aad.org/public/diseases/a-to-z/hives" },\n      { name: "EAACI — Chronic Urticaria Guidelines", url: "https://eaaci.org/guidelines" },\n      { name: "Cleveland Clinic — Hives: Causes and Diet", url: "https://my.clevelandclinic.org/health/diseases/8632-hives" },\n      { name: "DermNet NZ — Diet and Urticaria", url: "https://dermnetnz.org/topics/diet-and-urticaria" }\n    ]',
        'keywords': '["mề đay mạn", "urticaria mạn", "histamin", "low-histamine", "dị ứng thực phẩm", "ngứa", "phát ban", "dưỡng bào"]',
    },
    # 7. Loét tỳ đẻ (Pressure Ulcer) — dinh-duong-tong-quat
    {
        'slug': 'dinh-duong-loet-ty-de',
        'title': 'Loét tỳ đẻ — Dinh dưỡng làm lành vết thương cho người nằm lâu',
        'description': 'Loét tỳ đẻ (pressure ulcer, bed sore) ở người già nằm liệt. Tăng đạm, kẽm, vitamin C, kiểm soát dinh dưỡng toàn diện để mau lành vết loét.',
        'emoji': '🛌',
        'category': 'special',
        'categoryName': 'Đối tượng đặc biệt',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 7,
        'featured': 'false',
        'tags': '["loét tỳ đẻ", "loét do nằm", "bed sore", "người già", "vết thương", "tăng đạm", "kẽm"]',
        'audience': '["người chăm sóc", "người già nằm liệt", "người bệnh nặng"]',
        'specialty': '"dinh-duong-tong-quat"',
        'sources': '[\n      { name: "National Pressure Injury Advisory Panel (NPIAP) — Nutrition", url: "https://npiap.com" },\n      { name: "ESPEN — Guidelines on nutrition in pressure ulcers", url: "https://www.espen.org/guidelines" },\n      { name: "MedlinePlus — Pressure Ulcers: Nutritional Support", url: "https://medlineplus.gov/pressuresores.html" },\n      { name: "Bệnh viện Đại học Y Dược TP.HCM — Chăm sóc vết loét tỳ đẻ", url: "https://bvdaihoc.com.vn" }\n    ]',
        'keywords': '["loét tỳ đẻ", "loét do nằm", "bed sore", "vết thương", "tăng đạm", "kẽm", "vitamin C", "người già nằm liệt"]',
    },
    # 8. Bệnh thận IgA (IgA Nephropathy) — than-tiet-nieu
    {
        'slug': 'benh-than-iga-dinh-duong',
        'title': 'Bệnh thận IgA (Berger) — Dinh dưỡng bảo vệ cầu thận',
        'description': 'Viêm cầu thận IgA: giảm muối, kiểm soát đạm, thực phẩm chống viêm, tránh kích hoạt miễn dịch từ gluten và nhiễm trùng hô hấp.',
        'emoji': '🫘',
        'category': 'disease',
        'categoryName': 'Dinh dưỡng & Bệnh lý',
        'displayCategory': 'dang-co-benh',
        'date': '2026-05-25',
        'readTime': 8,
        'featured': 'false',
        'tags': '["thận IgA", "viêm cầu thận", "IgA nephropathy", "Berger", "thận", "miễn dịch", "đạm niệu"]',
        'audience': '["người bệnh thận IgA", "người viêm cầu thận", "người bệnh thận"]',
        'specialty': '"than-tiet-nieu"',
        'sources': '[\n      { name: "National Kidney Foundation — IgA Nephropathy", url: "https://www.kidney.org/atoz/content/iganeph" },\n      { name: "KDIGO — Glomerular Diseases Guideline 2021", url: "https://kdigo.org/guidelines/glomerulonephritis" },\n      { name: "Mayo Clinic — IgA Nephropathy: Diet and lifestyle", url: "https://www.mayoclinic.org/diseases-conditions/iga-nephropathy" },\n      { name: "NIDDK — IgA Nephropathy", url: "https://www.niddk.nih.gov/health-information/kidney-disease/iga-nephropathy" }\n    ]',
        'keywords': '["thận IgA", "IgA nephropathy", "viêm cầu thận", "Berger", "đạm niệu", "miễn dịch", "cầu thận", "giảm muối"]',
    },
]

# Generate entry block for each article
def make_entry(a):
    featured = a['featured']
    # Handle commas within arrays
    fields = []
    fields.append(f'    slug: "{a["slug"]}",')
    fields.append(f'    title: "{a["title"]}",')
    fields.append(f'    description: "{a["description"]}",')
    fields.append(f'    emoji: "{a["emoji"]}",')
    fields.append(f'    category: "{a["category"]}",')
    fields.append(f'    categoryName: "{a["categoryName"]}",')
    fields.append(f'    displayCategory: "{a["displayCategory"]}",')
    fields.append(f'    date: "{a["date"]}",')
    fields.append(f'    readTime: {a["readTime"]},')
    fields.append(f'    featured: {featured},')
    fields.append(f'    tags: {a["tags"]},')
    fields.append(f'    audience: {a["audience"]},')
    fields.append(f'    specialty: {a["specialty"]},')
    fields.append(f'    sources: {a["sources"]},')
    fields.append(f'    keywords: {a["keywords"]},')
    return '  {\n' + '\n'.join(fields) + '\n  }'

block = '\n,'.join(make_entry(a) for a in new_entries)
block = ',\n'.join(make_entry(a) for a in new_entries)

# Now insert before the closing '];'
old_marker = '\n];\n\n// Index by slug'
new_marker = block + '\n];\n\n// Index by slug'

if old_marker in text:
    text = text.replace(old_marker, new_marker)
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.write(text)
    print('✅ Inserted 8 new articles before ];')
else:
    print('❌ Could not find marker')
    # Debug: find the actual ] ending
    idx = text.rfind('];\n')
    print(f'Last ]; at position {idx}')
    print(f'Context: {text[idx:idx+50]}')
