#!/usr/bin/env python3
"""Batch-add sources[] to all articles missing them."""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Helper to build source objects
def src(name, url):
    return f'      {{ name: "{name}", url: "{url}" }}'

# Source sets
def vdd():  return src("Viện Dinh dưỡng Quốc gia", "https://viendinhduong.vn")
def harv(): return src("Harvard T.H. Chan — Nutrition Source", "https://nutritionsource.hsph.harvard.edu")
def nhs():  return src("NHS (UK) — Eat Well", "https://www.nhs.uk/live-well/eat-well")
def who():  return src("World Health Organization (WHO)", "https://www.who.int")
def whovn():return src("WHO Tây Thái Bình Dương (tiếng Việt)", "https://www.who.int/vietnam/vi")
def byt():  return src("Bộ Y tế Việt Nam", "https://moh.gov.vn")
def medl(): return src("MedlinePlus — U.S. National Library of Medicine", "https://medlineplus.gov")
def usda(): return src("USDA — Dietary Guidelines", "https://www.dietaryguidelines.gov")
def ada():  return src("American Diabetes Association (ADA)", "https://diabetes.org")
def aha():  return src("American Heart Association (AHA)", "https://www.heart.org")
def kid():  return src("National Kidney Foundation", "https://www.kidney.org")

# Map slug prefix -> source list
PREFIX_MAP = {
    'thap-dinh-duong-':               [vdd(), harv(), nhs()],
    'nhu-cau-dinh-duong-':            [vdd(), harv(), whovn()],
    'dri-cho-nguoi':                  [vdd(), harv(), whovn()],
    'loang-xuong':                    [vdd(), harv(), nhs(), medl()],
    'thieu-vitamin-d':                [harv(), nhs(), medl()],
    'thieu-mau':                      [whovn(), harv(), medl()],
    'beo-phi':                        [who(), harv(), nhs()],
    'giam-can-khoa':                  [harv(), nhs(), usda()],
    'hoi-chung-chuyen-hoa':           [who(), harv(), aha()],
    'roi-loan-mo-mau':                [aha(), harv(), nhs()],
    'benh-tim-mach':                  [aha(), harv(), nhs()],
    'dinh-duong-suy-tim':             [aha(), harv(), nhs()],
    'che-do-dash-':                   [aha(), harv(), byt()],
    'che-do-trung-hai-':              [harv(), aha(), nhs()],
    'tien-dai-thao-duong':            [ada(), harv(), nhs()],
    'com-trang-':                     [ada(), harv(), vdd()],
    'sai-lam-tieu-duong-':            [ada(), harv(), nhs()],
    'tang-acid-uric':                 [whovn(), nhs(), medl()],
    'sai-lam-gout-':                  [whovn(), harv(), medl()],
    'men-gan-cao':                    [medl(), nhs(), vdd()],
    'gan-nhiem-mo-nguoi-gay':         [harv(), nhs(), medl()],
    'sai-lam-gan-nhiem-mo-':          [harv(), nhs(), medl()],
    'dinh-duong-viem-gan':            [whovn(), harv(), nhs()],
    'viem-dai-trang-':                [nhs(), harv(), medl()],
    'tao-bon-':                       [harv(), nhs(), medl()],
    'soi-than-':                      [kid(), harv(), medl()],
    'ung-thu':                        [harv(), who(), nhs(), medl()],
    'phu-nu-mang-thai':               [whovn(), vdd(), harv()],
    'dinh-duong-tre-em':              [whovn(), vdd(), harv()],
    'dinh-duong-nguoi-cao-tuoi':      [vdd(), harv(), nhs()],
    'chan-an-nguoi-cao-tuoi':         [vdd(), harv(), nhs()],
    'tao-bon-nguoi-cao-tuoi':         [harv(), nhs(), medl()],
    'them-dam-nguoi-gia':             [harv(), nhs(), vdd()],
    'chon-sua-nguoi-gia':             [vdd(), harv(), nhs()],
    'suy-dinh-duong-nguoi-benh':      [who(), harv(), nhs(), medl()],
    'dinh-duong-chay':                [harv(), nhs(), vdd()],
    'an-chay-truong':                 [harv(), nhs(), vdd()],
    'tang-co-gym':                    [harv(), nhs(), usda()],
    'uong-nuoc-':                     [harv(), nhs(), who()],
    'dinh-duong-dan-van-phong':       [harv(), nhs(), vdd()],
    'dinh-duong-thuc-khuya':          [harv(), nhs(), vdd()],
    'di-cho-':                        [vdd(), ada(), harv()],
    'tu-lanh-':                       [vdd(), harv(), nhs()],
    'thuc-pham-giac-ngu':             [harv(), nhs(), medl()],
    'dot-quy-':                       [aha(), harv(), nhs()],
    'dinh-duong-viem-khop':           [harv(), nhs(), medl()],
    'dinh-duong-basedow-':            [who(), harv(), medl()],
    'dinh-duong-sau-phau-thuat':      [whovn(), harv(), nhs()],
    'dinh-duong-cho-nguoi-kho-nuot':  [harv(), nhs(), vdd()],
    'dinh-duong-sau-ghep-tang':       [kid(), harv(), nhs()],
}

def get_sources(slug):
    for prefix, srcs in PREFIX_MAP.items():
        if slug.startswith(prefix):
            return srcs
    # Fallback by slug keyword
    food_slugs = ['trung', 'nuoc-ham', 'noi-tang', 'dau-an', 'ca-phe', 'sua-ai',
                   'banh-mi', 'chao', 'com-tam', 'mon-kho', 'canh-', 'do-chien',
                   'nuoc-cham', 'tra-sua', 'bun-pho', 'an-ca-', 'an-du-', 'mam-com-',
                   'an-tet-', 'an-khuya', 'goi-mon', 'rau-cu', 'giam-muoi-',
                   'tang-rau-', 'bua-sang-', 'bua-toi-', 'muoi-duong-',
                   'an-ngoai-', 'doc-nhan-', 'chat-xo', 'hieu-dung-ve-calo',
                   'an-toan-thuc-pham', '10-loi-khuyen-', 'canxi-xuong',
                   'vitamin-khoang', 'met-moi-', 'chuot-rut-', 'rung-toc-',
                   'om-sot-', 'tieu-chay-', 'sua-hat']
    for kw in food_slugs:
        if kw in slug:
            return [vdd(), harv(), usda()]

    # General disease fallback
    disease_kw = ['dau-da-day', 'trao-nguoc', 'day-bung-', 'o-nong-', 'tieu-chay-mat-']
    for kw in disease_kw:
        if kw in slug:
            return [nhs(), medl(), harv()]
    
    # Đừng tin ngay / cảnh báo
    if any(kw in slug for kw in ['dung-tin-ngay', 'canh-bao', 'hieu-lam', 'sai-lam']):
        return [whovn(), harv(), nhs()]

    # Thực đơn
    if 'thuc-don-' in slug:
        return [vdd(), harv(), nhs()]

    return [vdd(), harv(), nhs(), who()]


# ---- PROCESS ----
lines = text.split('\n')
new_lines = []
modified = 0
total_no_src = 0
i = 0

while i < len(lines):
    line = lines[i]
    new_lines.append(line)

    # Detect slug line
    if line.strip().startswith('slug: "'):
        slug = line.strip().split('"')[1]
        
        # Look ahead for 'sources:' or 'keywords:'
        # Collect lines until 'keywords:' or next 'slug:' or end
        j = i + 1
        has_src = False
        has_keywords = False
        kw_line_idx = -1

        while j < len(lines):
            if 'sources:' in lines[j]:
                has_src = True
                break
            if lines[j].strip().startswith('keywords:'):
                has_keywords = True
                kw_line_idx = j
                break
            if lines[j].strip().startswith('slug: "') and lines[j] != line:
                break
            j += 1

        if not has_src:
            # Need to add sources before keywords
            srcs = get_sources(slug)
            if srcs:
                src_block = '    sources: [\n' + ',\n'.join(srcs) + '\n    ],'
                # Insert before '    keywords:'
                # We need to insert at the right position
                # Since we already wrote up to i, we need to go back and insert
                # Better approach: collect the block then modify
                pass
            
            # Let's redo this - collect full block then modify
            total_no_src += 1

    i += 1

# Redo with a block-based approach
# Find all article blocks using slug as anchors
slug_positions = [(m.start(), m.group(1)) for m in re.finditer(r'\n    slug: "([^"]+)"', text)]

print(f'Found {len(slug_positions)} articles')

modified = 0
no_src = 0
result_parts = []

for idx, (pos, slug) in enumerate(slug_positions):
    # Determine the end of this article block
    if idx + 1 < len(slug_positions):
        end = slug_positions[idx + 1][0]
    else:
        end = text.find('\n];\n\n// Index by slug')
        if end == -1:
            end = len(text)
    
    block = text[pos:end]
    
    # Check if sources exists in this block
    has_src = 'sources:' in block
    
    if not has_src:
        no_src += 1
        srcs = get_sources(slug)
        if srcs:
            src_block = '\n    sources: [\n' + ',\n'.join(srcs) + '\n    ],'
            # Insert before 'keywords:'
            modified += 1
            kw_pos = block.find('\n    keywords:')
            if kw_pos >= 0:
                block = block[:kw_pos] + src_block + block[kw_pos:]
            else:
                # Append before closing '  },' or '  }'
                close_pos = block.rfind('\n  }')
                if close_pos >= 0:
                    block = block[:close_pos] + src_block + block[close_pos:]
    
    result_parts.append(block)

# Rebuild
first_slug_pos = slug_positions[0][0]
header = text[:first_slug_pos]
footer_start = slug_positions[-1][0]
# Find the first slug then the rest
new_text = header + ''.join(result_parts)

# Find the closing of articles array
closing_marker = '\n];\n\n// Index by slug'
close_idx = text.find(closing_marker, slug_positions[-1][0])
if close_idx >= 0:
    new_text = new_text + text[close_idx:]

print(f'Articles needing sources: {no_src}')
print(f'Sources added: {modified}')

if modified > 0:
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('✅ Written')
else:
    print('No changes needed')
