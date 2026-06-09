import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = re.split(r'\n\s*\{', content)

mapping = []
for block in blocks:
    slug_m = re.search(r"slug:\s*['\"](.+?)['\"]", block)
    cat_m = re.search(r"category:\s*['\"](.+?)['\"]", block)
    series_m = re.search(r"series:\s*['\"](.+?)['\"]", block)
    title_m = re.search(r"title:\s*['\"](.+?)['\"]", block)
    if slug_m and cat_m:
        s = series_m.group(1) if series_m else ''
        t = title_m.group(1) if title_m else slug_m.group(1)
        slug = slug_m.group(1)
        cat = cat_m.group(1)

        # Rules for displayCategory
        if s == 'dung-tin-ngay':
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
        elif cat == 'special':
            if slug in ['phu-nu-mang-thai', 'dinh-duong-tre-em',
                        'dinh-duong-nguoi-cao-tuoi', 'dinh-duong-chay',
                        'dinh-duong-dan-van-phong', 'dinh-duong-thuc-khuya']:
                display = 'dang-co-benh'
            else:
                display = 'an-lanh-manh'
        elif cat == 'disease':
            display = 'dang-co-benh'
        elif cat == 'guidelines':
            display = 'an-lanh-manh'
        elif cat == 'education':
            display = 'an-lanh-manh'
        else:
            display = 'an-lanh-manh'

        mapping.append((slug, cat, s, display, t))

# Stats
from collections import Counter
counter = Counter(d for _, _, _, d, _ in mapping)
print('Display categories:', dict(counter))
print(f'Total: {len(mapping)}')

# Show the mapping sorted
print('\n### Mapping ###')
for slug, cat, series, display, title in sorted(mapping, key=lambda x: x[3]):
    print(f'  {slug:45s} {cat:12s} {display:15s} {title[:50]}')
