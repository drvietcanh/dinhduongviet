#!/usr/bin/env python3
import re
from collections import defaultdict

f = open('src/data/articles.ts', 'r', encoding='utf-8')
t = f.read()
f.close()

slugs = list(re.finditer(r'slug:\s*"([^"]+)"', t))

# Group by specialty
by_spec = defaultdict(list)

for i, m in enumerate(slugs):
    slug = m.group(1)
    pos = m.start()
    
    if i + 1 < len(slugs):
        end = slugs[i+1].start()
    else:
        end = t.find('\n];\n\n// Index by slug', pos)
        if end == -1:
            end = len(t)
    
    block = t[pos:end]
    
    spec_m = re.search(r'specialty:\s*"([^"]+)"', block)
    spec = spec_m.group(1) if spec_m else 'unknown'
    
    title_m = re.search(r'title:\s*"([^"]+)"', block)
    title = title_m.group(1) if title_m else '?'
    
    dc_m = re.search(r'displayCategory:\s*"([^"]+)"', block)
    dc = dc_m.group(1) if dc_m else '?'
    
    by_spec[spec].append((slug, title, dc))

print('=' * 55)
print('SPECIALTY DISTRIBUTION')
print('=' * 55)
for sp in sorted(by_spec.keys(), key=lambda s: -len(by_spec[s])):
    items = by_spec[sp]
    print(f'{sp:35s} {len(items):4d}')

# Subgroup tong-quat
tq = by_spec['dinh-duong-tong-quat']
by_dc = defaultdict(list)
for slug, title, dc in tq:
    by_dc[dc].append((slug, title))

print()
print('=' * 55)
print('DINH DUONG TONG QUAT - by displayCategory')
print(f'Total: {len(tq)}')
print('=' * 55)

for dc in sorted(by_dc.keys(), key=lambda d: -len(by_dc[d])):
    items = by_dc[dc]
    print(f'\n--- {dc} ({len(items)}) ---')
    for slug, title in sorted(items):
        print(f'  {slug:45s} {title[:55]}')
