import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define displayCategory for each slug
display_map = {}

blocks = re.split(r'\n\s*\{', content)
for block in blocks:
    slug_m = re.search(r"slug:\s*['\"](.+?)['\"]", block)
    cat_m = re.search(r"category:\s*['\"](.+?)['\"]", block)
    series_m = re.search(r"series:\s*['\"](.+?)['\"]", block)
    if not slug_m or not cat_m:
        continue
    slug = slug_m.group(1)
    cat = cat_m.group(1)
    series = series_m.group(1) if series_m else ''

    if series == 'dung-tin-ngay':
        display = 'dung-tin-ngay'
    elif slug.startswith('thuc-don-') and cat == 'disease':
        display = 'thuc-don'
    elif slug in ['thuc-don-tieu-duong', 'thuc-don-tang-huyet-ap', 'thuc-don-gout',
                   'thuc-don-gan-nhiem-mo', 'thuc-don-mo-mau', 'thuc-don-da-day',
                   'thuc-don-tang-dam-nguoi-gay', 'thuc-don-giam-can-kieu-viet',
                   'bua-sang-lanh-manh-kieu-viet', 'bua-toi-nhe-de-ngu',
                   'bua-sang-lanh-manh']:
        display = 'thuc-don'
    elif slug.endswith('goc-nhin-dinh-duong') or slug in ['com-tam-goc-nhin-dinh-duong',
          'mon-kho-goc-nhin-dinh-duong', 'do-chien-goc-nhin-dinh-duong',
          'nuoc-cham-goc-nhin-dinh-duong', 'tra-sua-goc-nhin-dinh-duong',
          'canh-goc-nhin-dinh-duong', 'banh-mi-goc-nhin-dinh-duong',
          'chao-goc-nhin-dinh-duong']:
        display = 'mon-an'
    elif slug in ['chon-dau-an-lanh-manh', 'chon-dau-an', 'chon-sua-nguoi-gia',
                  'an-ngoai-goi-do-an', 'an-ngoai-hang-quan',
                  'them-dam-nguoi-gia', 'tang-rau-com-viet', 'giam-muoi-mon-ngon',
                  'an-quan-khi-benh-nen', 'goi-mon-tiec-cuoi',
                  'di-cho-tieu-duong', 'tu-lanh-lanh-manh',
                  'doc-nhan-thuc-pham', 'doc-nhan-dinh-duong']:
        display = 'mon-an'
    elif cat == 'disease':
        display = 'dang-co-benh'
    elif cat == 'guidelines':
        display = 'an-lanh-manh'
    elif cat == 'special':
        if slug in ['phu-nu-mang-thai', 'dinh-duong-tre-em',
                    'dinh-duong-nguoi-cao-tuoi', 'dinh-duong-chay',
                    'dinh-duong-dan-van-phong', 'dinh-duong-thuc-khuya']:
            display = 'dang-co-benh'
        else:
            display = 'an-lanh-manh'
    else:
        display = 'an-lanh-manh'

    display_map[slug] = display

# Now insert displayCategory: after category field in the file
# Strategy: for each article slug, find the line after "categoryName:" or after "category:" and insert
# Actually simpler: insert after the categoryName or series line

lines = content.split('\n')
new_lines = []
in_article = False
current_slug = None
added = set()

for i, line in enumerate(lines):
    new_lines.append(line)
    
    # Detect article start
    if re.match(r'\s*slug:\s*["\'].+["\']', line):
        slug_m = re.search(r'slug:\s*["\'](.+?)["\']', line)
        if slug_m:
            current_slug = slug_m.group(1)
            in_article = True
    
    # Insert displayCategory: right after categoryName or category or series
    # Priority: after series (if present), otherwise after categoryName
    if in_article and current_slug and current_slug in display_map:
        is_category_name = re.match(r'\s*categoryName:\s*["\'].+["\'],?', line)
        is_series = re.match(r'\s*series:\s*["\'].+["\'],?', line)
        
        if is_series or is_category_name:
            if current_slug not in added:
                indent = '  '
                display = display_map[current_slug]
                new_lines.append(f'{indent}displayCategory: "{display}",')
                added.add(current_slug)

# If any slugs still missing (edge case: articles without categoryName)
for slug, display in display_map.items():
    if slug not in added:
        print(f'WARNING: {slug} not added!')

new_content = '\n'.join(new_lines)

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Done. Added displayCategory to {len(added)} articles.')
