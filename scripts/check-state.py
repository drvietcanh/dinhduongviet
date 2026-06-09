#!/usr/bin/env python3
"""Check current state — what's missing after today's work."""
import os

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

import re

# Count articles
slugs = re.findall(r'slug: "([^"]+)"', t)
print(f"Articles in registry: {len(slugs)}")

# Count pages
pages_dir = 'src/pages/kien-thuc-dinh-duong'
page_files = [f.replace('.astro', '') for f in os.listdir(pages_dir) if f.endswith('.astro') and f != 'index.astro']
print(f"Page files: {len(page_files)}")

# Find missing
missing = [s for s in slugs if s not in page_files]
if missing:
    print(f"\n❌ Missing pages ({len(missing)}):")
    for s in missing:
        print(f"  {s}")
else:
    print(f"\n✅ All {len(slugs)} articles have page files")

# Check ban-do-benh.astro coverage
with open('src/pages/ban-do-benh.astro', 'r', encoding='utf-8') as f:
    bdb = f.read()
bdb_slugs = re.findall(r'slug: "([^"]+)"', bdb)

dang_co_benh = re.findall(r'slug: "([^"]+)"[\s\S]*?displayCategory: "bai-viet"', t)
# Actually let's just count what's in bai-viet
bai_viet_slugs = []
current_slug = None
for line in t.split('\n'):
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        current_slug = s.split('"')[1]
    elif s.startswith('displayCategory: "bai-viet"') and current_slug:
        bai_viet_slugs.append(current_slug)

# Check which disease/condition articles are in ban-do-benh
# Find articles with category=disease
disease_slugs = []
current_slug = None
current_cat = None
for line in t.split('\n'):
    s = line.strip()
    if s.startswith('slug: "') and s.endswith('",'):
        if current_slug and current_cat == 'disease':
            disease_slugs.append(current_slug)
        current_slug = s.split('"')[1]
        current_cat = None
    elif s.startswith('category: "disease"'):
        current_cat = 'disease'

if current_slug and current_cat == 'disease':
    disease_slugs.append(current_slug)

not_in_bdb = [s for s in disease_slugs if s not in bdb_slugs and s != 'thap-dinh-duong-viet-nam']
print(f"\nDisease articles NOT in ban-do-benh.astro ({len(not_in_bdb)}):")
for s in not_in_bdb:
    print(f"  {s}")

print(f"\nDisease articles IN ban-do-benh.astro ({len(set(disease_slugs) - set(not_in_bdb))})")
