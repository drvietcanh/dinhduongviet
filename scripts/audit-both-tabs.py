"""Deep audit: check article distribution, missing links, misclassifications"""
import os

articles = {}
current = None

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    for line in f:
        s = line.strip()
        if s.startswith('slug: "') and s.endswith('",'):
            current = s.split('"')[1]
            articles[current] = {}
        elif current:
            if s.startswith('specialty: "') and s.endswith('",'):
                articles[current]['spec'] = s.split('"')[1]
            elif s.startswith('displayCategory: "') and s.endswith('",'):
                articles[current]['dc'] = s.split('"')[1]
            elif s.startswith('series: "') and s.endswith('",'):
                articles[current]['series'] = s.split('"')[1]

# Check ban-do-benh.astro for linked slugs
with open('src/pages/ban-do-benh.astro', 'r', encoding='utf-8') as f:
    bdb = f.read()

import re
foundation_slugs = re.findall(r'slug:\s*"([^"]+)"', bdb)

# Articles NOT in ban-do-benh.astro
not_in_bdb = [slug for slug, meta in articles.items() 
              if meta.get('dc') == 'dang-co-benh' and slug not in foundation_slugs
              and meta.get('spec') != 'dinh-duong-tong-quat']

print("=" * 70)
print("AUDIT: Articles flagged 'dang-co-benh' but NOT linked in ban-do-benh.astro")
print("=" * 70)
for s in sorted(not_in_bdb):
    m = articles[s]
    print(f"  {s}  [{m.get('spec','?')}]")

# Articles in tổng quát with dang-co-benh → should probably move
print("\n" + "=" * 70)
print("AUDIT: Articles in tổng quát with displayCategory='dang-co-benh'")
print("=" * 70)
for s, m in sorted(articles.items()):
    if m.get('spec') == 'dinh-duong-tong-quat' and m.get('dc') == 'dang-co-benh':
        print(f"  {s}")

# Check ban-do-benh.astro for redirections to non-existent articles
print("\n" + "=" * 70)
print("AUDIT: Articles linked in ban-do-benh.astro that DON'T exist in registry")
print("=" * 70)
for slug in sorted(foundation_slugs):
    if slug not in articles:
        print(f"  {slug} NOT FOUND in articles.ts")

# Menu slugs
menu_slugs = re.findall(r'slug:\s*"([^"]+)"', bdb[bdb.find('menus: ['):bdb.find('menus: [')+5000])
# Actually menus are deeper, let me just check foundation slugs exist
# (done above)

# Check displayCategory coverage
dc_in_tongquat = {}
for s, m in sorted(articles.items()):
    if m.get('spec') == 'dinh-duong-tong-quat':
        dc = m.get('dc', 'NONE')
        dc_in_tongquat[dc] = dc_in_tongquat.get(dc, 0) + 1

print("\n" + "=" * 70)
print("AUDIT: displayCategory distribution in tổng quát")
print("=" * 70)
for dc, count in sorted(dc_in_tongquat.items()):
    print(f"  {dc}: {count}")

# Check for missing series articles
dtn_series = [s for s, m in articles.items() if m.get('series') == 'dung-tin-ngay']
print("\n" + "=" * 70)
print("AUDIT: Articles with series='dung-tin-ngay'")
print("=" * 70)
for s in sorted(dtn_series):
    m = articles[s]
    print(f"  {s}  [{m.get('spec','?')}]")

# Also check articles in ban-do-benh.astro listing vs actual articles
# Count what's in ban-do-benh vs what could be
dang_co_benh_by_spec = {}
for s, m in sorted(articles.items()):
    if m.get('dc') == 'dang-co-benh':
        spec = m.get('spec', '?')
        if spec not in dang_co_benh_by_spec:
            dang_co_benh_by_spec[spec] = []
        dang_co_benh_by_spec[spec].append(s)

print("\n" + "=" * 70)
print("AUDIT: All 'dang-co-benh' articles by specialty (potential bdb entries)")
print("=" * 70)
for spec, slugs in sorted(dang_co_benh_by_spec.items()):
    in_bdb = [s for s in slugs if s in foundation_slugs]
    missing = [s for s in slugs if s not in foundation_slugs]
    print(f"\n  {spec} ({len(slugs)} total, {len(in_bdb)} in BDB, {len(missing)} missing):")
    for s in missing:
        print(f"    ❌ {s}")
