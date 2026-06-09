#!/usr/bin/env python3
"""Step A: Merge displayCategory: 'an-lanh-manh' and 'dang-co-benh' into 'bai-viet'"""
with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

old_map = {'an-lanh-manh': 'bai-viet', 'dang-co-benh': 'bai-viet'}
count = 0

for old_val, new_val in old_map.items():
    old = f'displayCategory: "{old_val}"'
    new = f'displayCategory: "{new_val}"'
    if old in t:
        t = t.replace(old, new)
        print(f"  Replaced '{old_val}' -> '{new_val}'")
    
    # Also handle trailing comma cases
    old2 = f'displayCategory: "{old_val}",'
    new2 = f'displayCategory: "{new_val}",'
    # If replacement already happened, skip
    if old_val != new_val and old2 in t and old_val in t:
        # Already partially replaced
        pass

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(t)

# Verify
print(f"\n✅ DisplayCategory migration done.")
verify = t.count('displayCategory: "an-lanh-manh"') + t.count('displayCategory: "dang-co-benh"')
print(f"  Remaining 'an-lanh-manh' or 'dang-co-benh': {verify}")
print(f"  'bai-viet' count: {t.count('displayCategory: \"bai-viet\"')}")
