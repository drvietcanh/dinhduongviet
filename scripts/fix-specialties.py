import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove ALL existing specialty lines
i = 0
while i < len(lines):
    if lines[i].strip().startswith('specialty:'):
        lines.pop(i)
    else:
        i += 1

# Re-add specialty after displayCategory, with same indentation
slug_specialty = {
    'beo-phi': 'noi-tiet',
    'gout': 'noi-tiet',
    'dai-thao-duong': 'noi-tiet',
    'tien-dai-thao-duong': 'noi-tiet',
    'tang-huyet-ap': 'tim-mach',
    'suy-than': 'than-tiet-nieu',
    'gan-nhiem-mo': 'noi-tiet',
    'loang-xuong': 'co-xuong-khop',
    'thieu-mau': 'huyet-hoc',
    'roi-loan-mo-mau': 'tim-mach',
    'viem-dai-trang-tieu-hoa': 'tieu-hoa',
    'dau-da-day': 'tieu-hoa',
    'benh-tim-mach': 'tim-mach',
    'ung-thu': 'ung-thu',
    'dot-quy-dinh-duong': 'than-kinh',
    'men-gan-cao': 'tieu-hoa',
    'hoi-chung-chuyen-hoa': 'noi-tiet',
    'soi-than-dinh-duong': 'than-tiet-nieu',
    'dinh-duong-viem-gan': 'tieu-hoa',
    'dinh-duong-viem-khop': 'co-xuong-khop',
    'dinh-duong-basedow-cuong-giap': 'noi-tiet',
    'dinh-duong-suy-giap': 'noi-tiet',
    'dinh-duong-parkinson': 'than-kinh',
    'dinh-duong-alzheimer-sa-sut-tri-tue': 'than-kinh',
    'dinh-duong-lupus-ban-do': 'huyet-hoc',
    'dinh-duong-benh-phoi-copd': 'ho-hap',
    'dinh-duong-da-day-trao-nguoc': 'tieu-hoa',
    'dinh-duong-thieu-vitamin-b12': 'huyet-hoc',
    'dinh-duong-benh-gallbladder-mat': 'tieu-hoa',
    'dinh-duong-benh-tri': 'tieu-hoa',
    'dinh-duong-benh-than-kinh-toa': 'co-xuong-khop',
    'dinh-duong-thieu-ke-kem': 'huyet-hoc',
    'dinh-duong-viem-mui-di-ung': 'ho-hap',
    'dinh-duong-hoi-chung-tieu-hoa-ibs': 'tieu-hoa',
    'dinh-duong-suy-tim': 'tim-mach',
    'dinh-duong-tre-em': 'phu-nu-nhi',
    'phu-nu-mang-thai': 'phu-nu-nhi',
    'thieu-vitamin-d': 'co-xuong-khop',
    'dinh-duong-benh-than-man-ckd': 'than-tiet-nieu',
    'dinh-duong-viem-tuy': 'tieu-hoa',
    'dinh-duong-xo-gan': 'tieu-hoa',
    'dinh-duong-pcos-buong-trung-da-nang': 'noi-tiet',
    'dinh-duong-hen-suyen': 'ho-hap',
    'dinh-duong-benh-vay-nen-psoriasis': 'da-lieu',
    'dinh-duong-sau-phau-thuat': 'dinh-duong-tong-quat',
    'dinh-duong-benh-da-day-nen-an-gi': 'tieu-hoa',
    'dinh-duong-nguoi-cao-tuoi': 'phu-nu-nhi',
    'dinh-duong-tram-cam': 'than-kinh',
    'dinh-duong-man-kinh': 'phu-nu-nhi',
    'dinh-duong-viem-khop-dang-thap': 'co-xuong-khop',
    'dinh-duong-crohn-viem-ruot': 'tieu-hoa',
    'dinh-duong-viem-xoang-man': 'ho-hap',
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
    'dinh-duong-sau-phau-thuat': 'dinh-duong-tong-quat',
    'dinh-duong-tre-em': 'phu-nu-nhi',
}

i = 0
while i < len(lines):
    stripped = lines[i].strip()
    if 'displayCategory:' in stripped:
        # Get indentation
        indent = lines[i][:len(lines[i]) - len(lines[i].lstrip())]
        # Find the slug for this article (search backwards)
        for j in range(i, max(i-25, 0), -1):
            sm = re.search(r'slug:\s*["\x27]([^"\x27]+)["\x27]\s*$', lines[j].strip())
            if sm:
                slug = sm.group(1)
                spec = slug_specialty.get(slug, 'dinh-duong-tong-quat')
                lines.insert(i+1, f'{indent}  specialty: "{spec}",\n')
                i += 1
                break
    i += 1

result = ''.join(lines)
with open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', 'w', encoding='utf-8') as f:
    f.write(result)

spec_count = result.count('specialty:')
slug_count = len(re.findall(r'slug:\s*["\x27][^"\x27]+["\x27]', result))
print(f'Fixed: {spec_count} specialty lines for {slug_count} articles')
