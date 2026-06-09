"""
Batch-assign specialty to all articles based on slug, tags, category, and displayCategory.
"""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Article blocks (simplistic split — works if no nested braces confuse)
# Better: use regex to find each article entry
art_pattern = re.compile(r'\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}', re.DOTALL)
# Actually let me parse more carefully - find slug: first, then extract the block

# Find all "slug: ..." positions and determine articles
lines = content.split('\n')

# Build slug ↔ line mapping
slugs = []
for i, line in enumerate(lines):
    m = re.search(r'slug:\s*["\x27]([^"\x27]+)["\x27]', line)
    if m:
        slugs.append((m.group(1), i))

print(f'Found {len(slugs)} articles')

# Define specialty rules
SPECIALTY_MAP = {
    # Tim mạch & Mạch máu
    'benh-tim-mach': 'tim-mach',
    'tang-huyet-ap': 'tim-mach',
    'roi-loan-mo-mau': 'tim-mach',
    'dinh-duong-suy-tim': 'tim-mach',
    'hoi-chung-chuyen-hoa': 'noi-tiet',
    'dinh-duong-benh-dong-mach-vanh': 'tim-mach',

    # Nội tiết & Chuyển hóa
    'dai-thao-duong': 'noi-tiet',
    'tien-dai-thao-duong': 'noi-tiet',
    'beo-phi': 'noi-tiet',
    'gan-nhiem-mo': 'noi-tiet',
    'gout': 'noi-tiet',
    'loang-xuong': 'co-xuong-khop',  # crossover
    'dinh-duong-basedow-cuong-giap': 'noi-tiet',
    'dinh-duong-suy-giap': 'noi-tiet',
    'dinh-duong-pcos-buong-trung-da-nang': 'noi-tiet',
    'dinh-duong-thieu-vitamin-d': 'co-xuong-khop',
    'thieu-vitamin-d': 'co-xuong-khop',

    # Tiêu hóa & Gan mật
    'dinh-duong-viem-gan': 'tieu-hoa',
    'men-gan-cao': 'tieu-hoa',
    'dinh-duong-viem-tuy': 'tieu-hoa',
    'dinh-duong-xo-gan': 'tieu-hoa',
    'dinh-duong-benh-gallbladder-mat': 'tieu-hoa',
    'viem-dai-trang-tieu-hoa': 'tieu-hoa',
    'dau-da-day': 'tieu-hoa',
    'dinh-duong-da-day-trao-nguoc': 'tieu-hoa',
    'trao-nguoc-ban-dem': 'tieu-hoa',
    'trao-nguoc-da-day': 'tieu-hoa',
    'dinh-duong-benh-da-day-nen-an-gi': 'tieu-hoa',
    'dinh-duong-hoi-chung-tieu-hoa-ibs': 'tieu-hoa',
    'dinh-duong-crohn-viem-ruot': 'tieu-hoa',

    # Thận & Tiết niệu
    'suy-than': 'than-tiet-nieu',
    'soi-than-dinh-duong': 'than-tiet-nieu',
    'dinh-duong-benh-than-man-ckd': 'than-tiet-nieu',

    # Cơ xương khớp
    'dinh-duong-viem-khop': 'co-xuong-khop',
    'dinh-duong-viem-khop-dang-thap': 'co-xuong-khop',
    'dinh-duong-vien-cot-song-dinh-khop': 'co-xuong-khop',
    'dinh-duong-benh-than-kinh-toa': 'co-xuong-khop',

    # Huyết học & Miễn dịch
    'thieu-mau': 'huyet-hoc',
    'dinh-duong-thieu-vitamin-b12': 'huyet-hoc',
    'dinh-duong-thieu-ke-kem': 'huyet-hoc',
    'dinh-duong-thieu-mau-sat': 'huyet-hoc',
    'dinh-duong-suy-giam-mien-dich': 'huyet-hoc',

    # Thần kinh & Tâm lý
    'dot-quy-dinh-duong': 'than-kinh',
    'dinh-duong-alzheimer-sa-sut-tri-tue': 'than-kinh',
    'dinh-duong-parkinson': 'than-kinh',
    'dinh-duong-tram-cam': 'than-kinh',
    'dinh-duong-thuc-khuya': 'than-kinh',
    'thuc-pham-giac-ngu': 'than-kinh',

    # Hô hấp
    'dinh-duong-benh-phoi-copd': 'ho-hap',
    'dinh-duong-hen-suyen': 'ho-hap',
    'dinh-duong-viem-mui-di-ung': 'ho-hap',
    'dinh-duong-viem-xoang-man': 'ho-hap',

    # Da liễu
    'dinh-duong-benh-vay-nen-psoriasis': 'da-lieu',
    'dinh-duong-viem-da-co-dia-eczema': 'da-lieu',

    # Phụ nữ & Trẻ em
    'phu-nu-mang-thai': 'phu-nu-nhi',
    'dinh-duong-thai-ky': 'phu-nu-nhi',
    'dinh-duong-tre-em': 'phu-nu-nhi',
    'dinh-duong-nguoi-cao-tuoi': 'phu-nu-nhi',
    'dinh-duong-man-kinh': 'phu-nu-nhi',
    'dinh-duong-suy-dinh-duong-nguoi-gia': 'phu-nu-nhi',
    'dinh-duong-benh-tri': 'tieu-hoa',  # crossover

    # Ung thư
    'ung-thu': 'ung-thu',

    # Tự miễn
    'dinh-duong-lupus-ban-do': 'huyet-hoc',
    'dinh-duong-so-cung-bi-scleroderma': 'da-lieu',

    # Thận trọng / chuyên sâu
    'suy-dinh-duong-nguoi-benh': 'dinh-duong-tong-quat',
    'chan-an-nguoi-cao-tuoi': 'phu-nu-nhi',
    'dinh-duong-sau-phau-thuat': 'dinh-duong-tong-quat',
    'dinh-duong-sau-mo': 'dinh-duong-tong-quat',
    'dinh-duong-nguoi-kho-nuot': 'dinh-duong-tong-quat',
}

# Build list of all articles with their positions
article_blocks = []
current_start = None
for i, line in enumerate(lines):
    # Find slug lines to mark article starts
    stripped = line.strip()
    if stripped.startswith('slug:'):
        current_start = i
    # Find lines with comma at end, but only within braces
    if current_start is not None:
        # Check for closing of this article block
        pass

# Better approach: use regex on full content  
# Match each article block by finding opening brace after a comma
# between articles
entries = []
in_article = False
brace_depth = 0
entry_start = -1
entry_lines = []
entry_slug = None

for i, line in enumerate(lines):
    s = line.strip()
    
    # Detect article start: a line with just '{' or opening a block after comma
    if not in_article:
        if s == '{' and i > 0 and lines[i-1].strip().endswith(','):
            in_article = True
            brace_depth = 1
            entry_start = i
            entry_lines = [line]
        elif '{' in s and 'slug:' in s and i > 0:
            in_article = True
            brace_depth = s.count('{') - s.count('}')
            entry_start = i
            entry_lines = [line]
        continue
    
    entry_lines.append(line)
    
    brace_depth += s.count('{') - s.count('}')
    
    if brace_depth == 0:
        # End of entry
        text = ''.join(entry_lines)
        # Extract slug
        sm = re.search(r'slug:\s*["\x27]([^"\x27]+)["\x27]', text)
        if sm:
            slug = sm.group(1)
            entries.append((slug, entry_start, i, text))
        in_article = False
        entry_lines = []
        entry_start = -1

# Fallback: just find all slug positions and figure out article spans
# Let me go simpler: find each article by slug and add specialty after categoryName
entries_found = []
for slug, line_num in slugs:
    # Find the article block start by going backwards to opening brace
    start = line_num
    while start >= 0 and lines[start].strip() != '{':
        start -= 1
    # Find end by matching braces
    depth = 0
    end = start - 1
    while True:
        end += 1
        if end >= len(lines):
            break
        depth += lines[end].count('{') - lines[end].count('}')
        if depth == 0:
            break
    entries_found.append((slug, start, end, []))

print(f'Found {len(entries_found)} article blocks')

# Now assign specialties to articles
# For each article, check if it has a specialty by slug
specialty_assigned = {}
for slug, _, _, _ in entries_found:
    if slug in SPECIALTY_MAP:
        specialty_assigned[slug] = SPECIALTY_MAP[slug]

print(f'Assigned specialties: {len(specialty_assigned)}')

# Assign defaults for the rest
for slug, _, _, _ in entries_found:
    if slug not in specialty_assigned:
        # Check category if possible (from articles list in data)
        # Default to dinh-duong-tong-quat
        specialty_assigned[slug] = 'dinh-duong-tong-quat'

# Now write the modifications
# For each article, add specialty after categoryName line
output_lines = list(lines)
insertions = []

for slug, start, end, _ in entries_found:
    spec = specialty_assigned.get(slug, 'dinh-duong-tong-quat')
    # Find the line with categoryName:
    for i in range(start, end + 1):
        if 'categoryName:' in output_lines[i] and 'specialty:' not in output_lines[i]:
            indent = output_lines[i][:len(output_lines[i]) - len(output_lines[i].lstrip())]
            insertions.append((i + 1, f'{indent}  specialty: "{spec}",\n'))
            break

# Apply insertions from bottom to top to avoid offset issues
insertions.sort(key=lambda x: x[0], reverse=True)
for idx, line in insertions:
    output_lines.insert(idx, line)

result = ''.join(output_lines)

# Write back
with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(result)

# Verify
with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    new_content = f.read()
new_slugs = re.findall(r'slug:\s*["\x27]([^"\x27]+)["\x27]', new_content)
spec_count = new_content.count('specialty:')
print(f'Updated: {len(new_slugs)} articles, {spec_count} have specialty:')

# Count per specialty
specs = re.findall(r'specialty:\s*["\x27]([^"\x27]+)["\x27]', new_content)
from collections import Counter
for s, c in sorted(Counter(specs).items()):
    print(f'  {s}: {c}')
