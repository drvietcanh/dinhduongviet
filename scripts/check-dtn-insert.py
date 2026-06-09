import re

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()

# Check what was inserted
# Find all dung-tin-ngay slugs
all_slugs = re.findall(r'slug: "([^"]+)"', raw)
dtns = [s for s in all_slugs if 'dung-tin-ngay' in s]
print(f'All DTN article slugs ({len(dtns)}):')
for s in dtns:
    print(f'  {s}')

# Check for malformed entries with single quotes
if "dung-tin-ngay-trung" in raw:
    # Check both quote styles
    single = re.findall(r"slug: 'dung-tin-ngay[^']+'", raw)
    double = re.findall(r'slug: "dung-tin-ngay[^"]+"', raw)
    print(f'\nSingle-quote DTN: {len(single)}')
    print(f'Double-quote DTN: {len(double)}')
    
    if len(single) > 0:
        print('\nFound single-quote entries. Fixing...')
        # Replace single-quote entries with proper double-quote format
        # The add script inserted with single quotes - need to remove them
        idx = raw.find("slug: 'dung-tin-ngay-trung-gay-benh-tim'")
        if idx > 0:
            # Find the start of the malformed entries
            start = raw.rfind(',\n  {\n', 0, idx)
            if start < 0:
                start = raw.rfind(',\n', 0, idx)
            # Find end of these entries
            end = raw.find("},\n  {\n    slug: \"", idx)
            if end < 0:
                end = raw.find("},\n];", idx)
            if end > 0:
                end = raw.find("}\n", end-10) + 1
            print(f'Removing from {start} to {end}')
            print(f'Content to remove:\n{raw[start:end]}')
    else:
        print('\nNo single-quote entries. Checking if double-quote entries were added...')
