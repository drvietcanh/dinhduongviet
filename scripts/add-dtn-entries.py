import re

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Find articles array end
idx = raw.rfind('\n];')
articles_code = raw[:idx]

# Extract all article slugs to check current DTN
current_slugs = re.findall(r"slug: '([^']+)'", articles_code)
dtn_slugs = [s for s in current_slugs if 'dung-tin-ngay' in s]
print(f'Current total articles: {len(current_slugs)}')
print(f'Current DTN entries: {len(dtn_slugs)}')
for s in dtn_slugs:
    print(f'  {s}')

# Check which of the 3 new ones are missing
existing = set(dtn_slugs)
needed = ['dung-tin-ngay-trung-gay-benh-tim', 'dung-tin-ngay-sua-dau-nanh-ung-thu', 'dung-tin-ngay-bo-bua-sang']
missing = [s for s in needed if s not in existing]
print(f'\nMissing entries: {missing}')

if missing:
    # Find last article block
    # Find the last }, before ];
    last_brace = raw.rfind('},', 0, idx)
    insert_pos = last_brace + 2  # after },
    
    new_entries = '''
  {
    slug: "dung-tin-ngay-trung-gay-benh-tim",
    title: "Ăn trứng gây bệnh tim? Trứng không đáng sợ như bạn nghĩ",
    description: "Trứng giàu cholesterol nhưng không làm tăng nguy cơ tim mạch ở người khỏe mạnh. Hàng thập kỷ nghiên cứu đã bác bỏ hiểu lầm này.",
    emoji: "🥚",
    category: "education",
    categoryName: "Bài viết giáo dục",
    displayCategory: "dung-tin-ngay",
    specialty: "dinh-duong-tong-quat",
    date: "2026-06-03",
    readTime: 6,
    featured: false,
    series: "dung-tin-ngay",
    tags: ["myth","tim-mach","dinh-duong-co-ban"],
    keywords: ["trứng", "cholesterol", "bệnh tim", "hiểu lầm dinh dưỡng"],
  },
  {
    slug: "dung-tin-ngay-sua-dau-nanh-ung-thu",
    title: "Sữa đậu nành gây ung thư vú? Isoflavone không đáng sợ, còn có lợi",
    description: "Isoflavone trong đậu nành từng bị nghi ngờ gây ung thư vú. Nghiên cứu hiện tại cho thấy nó an toàn và có thể có lợi.",
    emoji: "🫘",
    category: "education",
    categoryName: "Bài viết giáo dục",
    displayCategory: "dung-tin-ngay",
    specialty: "dinh-duong-tong-quat",
    date: "2026-06-03",
    readTime: 6,
    featured: false,
    series: "dung-tin-ngay",
    tags: ["myth","ung-thu","phu-nu"],
    keywords: ["đậu nành", "ung thư vú", "isoflavone", "phytoestrogen", "hiểu lầm dinh dưỡng"],
  },
  {
    slug: "dung-tin-ngay-bo-bua-sang",
    title: "Bỏ bữa sáng để giảm cân? Hiệu quả ảo, hại thật",
    description: "Nhịn bữa sáng có thể giảm cân ngắn hạn nhưng gây rối loạn đường huyết, mất cơ, tăng cân trở lại.",
    emoji: "🌅",
    category: "education",
    categoryName: "Bài viết giáo dục",
    displayCategory: "dung-tin-ngay",
    specialty: "dinh-duong-tong-quat",
    date: "2026-06-03",
    readTime: 5,
    featured: false,
    series: "dung-tin-ngay",
    tags: ["myth","giam-can","dinh-duong-co-ban"],
    keywords: ["bỏ bữa sáng", "nhịn ăn", "giảm cân", "tập thể dục", "hiểu lầm dinh dưỡng"],
  },'''
    
    raw = raw[:insert_pos] + new_entries + raw[insert_pos:]
    with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
        f.write(raw)
    print('3 DTN entries added successfully!')
    
    # Verify
    new_raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()
    idx2 = new_raw.rfind('\n];')
    all_slugs = re.findall(r"slug: '([^']+)'", new_raw[:idx2])
    dtn_now = [s for s in all_slugs if 'dung-tin-ngay' in s]
    print(f'DTN entries now: {len(dtn_now)}')
    for s in dtn_now:
        print(f'  {s}')
else:
    print('All entries already exist, no changes needed.')
