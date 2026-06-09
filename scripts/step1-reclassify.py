#!/usr/bin/env python3
"""Step 1: Reclassify articles from tổng quát to correct specialties."""
with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# Map: slug -> { spec: new_spec, dc: new_dc } (only set if changing)
changes = {
    # Move disease articles out of tổng quát
    "gan-nhiem-mo-nguoi-gay": {"spec": "tieu-hoa"},
    "dinh-duong-loet-ty-de": {"spec": "tieu-hoa"},
    "dinh-duong-sau-ghep-tang": {"spec": "tieu-hoa"},
    
    # Move diabetes-related food articles to nội tiết
    "bun-pho-mi-duong-huyet": {"spec": "noi-tiet"},
    "di-cho-tieu-duong": {"spec": "noi-tiet"},
    
    # Move elderly articles to phu-nu-nhi
    "chon-sua-nguoi-gia": {"spec": "phu-nu-nhi"},
    "them-dam-nguoi-gia": {"spec": "phu-nu-nhi"},
    
    # dinh-duong-chay: change displayCategory from dang-co-benh to an-lanh-manh
    "dinh-duong-chay": {"dc": "an-lanh-manh"},
}

import re

lines = t.split('\n')
current_slug = None
modified = 0

for i, line in enumerate(lines):
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        current_slug = s.split('"')[1]
    
    if current_slug in changes:
        change = changes[current_slug]
        indent = line[:len(line) - len(line.lstrip())]
        
        if 'spec' in change and s.startswith('specialty: "'):
            lines[i] = f'{indent}specialty: "{change["spec"]}",'
            modified += 1
            print(f"  {current_slug}: specialty → {change['spec']}")
        
        if 'dc' in change and s.startswith('displayCategory: "'):
            lines[i] = f'{indent}displayCategory: "{change["dc"]}",'
            modified += 1
            print(f"  {current_slug}: displayCategory → {change['dc']}")

t = '\n'.join(lines)
with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(t)

print(f"\n✅ {modified} fields updated.")
