import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Check if thap-dinh-duong-viet-nam exists
if 'thap-dinh-duong-viet-nam' in text:
    print('Article exists already')
else:
    print('Article NOT found - need to add')
    idx = text.find('slug: "thap-dinh-duong-my-nhat"')
    if idx > 0:
        block_end = text.find('},', idx)
        block_end = text.find('},', block_end + 2)
        insert_pos = block_end + 2
        
        new_block = '''
  {
    slug: "thap-dinh-duong-viet-nam",
    title: "Tháp dinh dưỡng cho người Việt Nam",
    description: "Tháp dinh dưỡng Việt Nam theo hướng dẫn của Viện Dinh dưỡng Quốc gia.",
    emoji: "\U0001f1fb\U0001f1f3",
    category: "guidelines",
    categoryName: "Tháp dinh dưỡng & Hướng dẫn",
    displayCategory: "an-lanh-manh",
    specialty: "dinh-duong-tong-quat",
    date: "2026-01-18",
    readTime: 7,
    featured: false,
    tags: ["new-diagnosis"],
    audience: ["elderly", "pregnancy", "children"],
    keywords: ["tháp dinh dưỡng Việt Nam", "khẩu phần khuyến nghị", "bữa ăn cân đối", "dinh dưỡng người Việt"],
  },
'''
        text = text[:insert_pos] + '\n' + new_block + text[insert_pos:]
        with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
            f.write(text)
        print('Added thap-dinh-duong-viet-nam article')
