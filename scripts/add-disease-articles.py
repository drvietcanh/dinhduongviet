import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    c = f.read()

# Find the last article entry (find last closing brace before the final ])
last_brace = c.rfind('},')
# Find last article: look for } before ];  
last_entry = c.rfind('\n}],')
if last_entry < 0:
    # Try other pattern
    last_entry = c.rfind('}];')

print(f'Last entry at position {last_entry}')

# New articles to add
new_articles = '''
  // 🩺 Bệnh lý hô hấp & Nội tiết (mới)
  {
    slug: "dinh-duong-benh-phoi-copd",
    title: "Dinh dưỡng cho người bệnh phổi (COPD & viêm phế quản mạn)",
    description: "Chế độ ăn cho người bệnh phổi tắc nghẽn mạn tính: tăng đạm, vitamin D, hạn chế tinh bột nhanh. Thực đơn cho người khó thở, suy kiệt.",
    emoji: "🫁",
    category: "disease",
    categoryName: "Dinh dưỡng & Bệnh lý",
    displayCategory: "dang-co-benh",
    date: "2026-06-03",
    readTime: 7,
    tags: ["bệnh phổi", "COPD", "hô hấp", "người già"],
    audience: ["người cao tuổi", "người bệnh phổi"],
    keywords: ["bệnh phổi", "COPD", "dinh dưỡng phổi", "khó thở", "suy kiệt"],
    sources: [
      { name: "GOLD Guidelines 2024 — COPD Management", url: "https://goldcopd.org" },
      { name: "Viện Dinh dưỡng Quốc gia — Dinh dưỡng người cao tuổi", url: "https://viendinhduong.vn" },
      { name: "Thorax Journal — Nutritional support in COPD", url: "https://thorax.bmj.com" }
    ]
  },
  {
    slug: "dinh-duong-suy-giap",
    title: "Dinh dưỡng cho người suy giáp (kém năng tuyến giáp)",
    description: "Người suy giáp nên ăn gì, kiêng gì? Vai trò của i-ốt, selen, kẽm. Tránh thực phẩm chứa goitrogen quá mức.",
    emoji: "🦋",
    category: "disease",
    categoryName: "Dinh dưỡng & Bệnh lý",
    displayCategory: "dang-co-benh",
    date: "2026-06-03",
    readTime: 7,
    tags: ["suy giáp", "tuyến giáp", "hormone", "nội tiết"],
    audience: ["người bệnh tuyến giáp", "phụ nữ"],
    keywords: ["suy giáp", "tuyến giáp", "hormone giáp", "i-ốt", "selen"],
    sources: [
      { name: "American Thyroid Association — Diet & Thyroid", url: "https://www.thyroid.org" },
      { name: "Viện Dinh dưỡng Quốc gia", url: "https://viendinhduong.vn" },
      { name: "Harvard Health — Thyroid and diet", url: "https://www.health.harvard.edu" }
    ]
  },
  {
    slug: "dinh-duong-parkinson",
    title: "Dinh dưỡng cho người bệnh Parkinson",
    description: "Chế độ ăn cho người Parkinson: tăng chất xơ chống táo bón, kiểm soát đạm liên quan thuốc levodopa, hỗ trợ nuốt.",
    emoji: "🧠",
    category: "disease",
    categoryName: "Dinh dưỡng & Bệnh lý",
    displayCategory: "dang-co-benh",
    date: "2026-06-03",
    readTime: 7,
    tags: ["Parkinson", "thần kinh", "người già", "le bidopa"],
    audience: ["người cao tuổi", "người bệnh Parkinson"],
    keywords: ["Parkinson", "bệnh thần kinh", "dinh dưỡng thần kinh", "levodopa", "táo bón"],
    sources: [
      { name: "Parkinson\'s Foundation — Diet & Nutrition", url: "https://www.parkinson.org" },
      { name: "European Journal of Clinical Nutrition — Parkinson diet", url: "https://www.nature.com/ejcn" },
      { name: "NHS — Parkinson\'s and diet", url: "https://www.nhs.uk" }
    ]
  },
  {
    slug: "dinh-duong-lupus-ban-do",
    title: "Dinh dưỡng cho người lupus ban đỏ hệ thống",
    description: "Chế độ ăn chống viêm cho lupus: omega-3, canxi phòng loãng xương do corticoid, tránh thực phẩm kích hoạt bùng phát.",
    emoji: "🦋",
    category: "disease",
    categoryName: "Dinh dưỡng & Bệnh lý",
    displayCategory: "dang-co-benh",
    date: "2026-06-03",
    readTime: 7,
    tags: ["lupus", "tự miễn", "viêm khớp", "corticoid"],
    audience: ["người bệnh tự miễn", "phụ nữ"],
    keywords: ["lupus", "ban đỏ", "bệnh tự miễn", "chống viêm", "corticoid"],
    sources: [
      { name: "Lupus Foundation of America — Diet & Nutrition", url: "https://www.lupus.org" },
      { name: "Arthritis & Rheumatology Journal — Diet in SLE", url: "https://acrjournals.onlinelibrary.wiley.com" },
      { name: "Viện Dinh dưỡng Quốc gia", url: "https://viendinhduong.vn" }
    ]
  },
  {
    slug: "dinh-duong-alzheimer-sa-sut-tri-tue",
    title: "Dinh dưỡng cho người Alzheimer & sa sút trí tuệ",
    description: "Chế độ ăn MIND và Địa Trung Hải giúp chậm tiến triển sa sút trí tuệ. Thực phẩm tốt cho não, hỗ trợ nuốt và ăn uống.",
    emoji: "🧠",
    category: "disease",
    categoryName: "Dinh dưỡng & Bệnh lý",
    displayCategory: "dang-co-benh",
    date: "2026-06-03",
    readTime: 7,
    tags: ["Alzheimer", "sa sút trí tuệ", "người già", "thần kinh"],
    audience: ["người cao tuổi", "người bệnh Alzheimer"],
    keywords: ["Alzheimer", "sa sút trí tuệ", "mất trí nhớ", "dinh dưỡng não", "chế độ ăn MIND"],
    sources: [
      { name: "Alzheimer\'s Association — Diet & Brain Health", url: "https://www.alz.org" },
      { name: "Neurology Journal — MIND diet and Alzheimer", url: "https://www.neurology.org" },
      { name: "Harvard Health — Foods for brain health", url: "https://www.health.harvard.edu" },
      { name: "WHO — Risk reduction of cognitive decline", url: "https://www.who.int" }
    ]
  },
'''

if last_entry > 0:
    new_c = c[:last_entry-1] + ',' + new_articles + '\n];'
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.write(new_c)
    print(f'✅ Added 5 new disease articles')
else:
    print('❌ Could not find insertion point')
