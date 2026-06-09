"""Merge dau-da-day-nen-an-gi into dinh-duong-benh-da-day-nen-an-gi"""
import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# Find the article block for dau-da-day-nen-an-gi
lines = t.split('\n')
remove_start = None
remove_end = None
in_target = False
brace_depth = 0

for i, line in enumerate(lines):
    s = line.strip()
    if 'slug: "dau-da-day-nen-an-gi"' in s:
        remove_start = i
        # Go back to find the opening {
        # Find the previous { at start of article
        for j in range(i-1, -1, -1):
            if lines[j].strip() == '{' or lines[j].strip() == '  {':
                remove_start = j
                break
    if remove_start is not None and remove_end is None:
        # Count braces to find the closing
        if '{' in s:
            brace_depth += s.count('{')
        if '}' in s:
            brace_depth -= s.count('}')
            if brace_depth == 0 and i > remove_start:
                remove_end = i
                break

if remove_start is not None and remove_end is not None:
    print(f"Found article block: lines {remove_start+1} to {remove_end+1}")
    # Remove the block
    del lines[remove_start:remove_end+1]
    t = '\n'.join(lines)
    
    with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
        f.write(t)
    print("✅ Removed dau-da-day-nen-an-gi article entry")
else:
    print(f"Could not find block: start={remove_start}, end={remove_end}")

# Verify slug count
count = t.count('slug: "')
print(f"Slug count: {count}")
