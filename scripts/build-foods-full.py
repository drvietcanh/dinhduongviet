"""
Build foods-full.json with all data needed for client-side filtering/rendering.
Compact format: array of arrays [[slug, name, category, kcal, protein, carb, fat, fiber, sodium, potassium, tags_str, gi]]
"""

import json

# Read the foods-slim.json as base
slim = r'D:\openclaw\apps\dinh-duong-viet\dist\api\foods-slim.json'
data = json.load(open(slim, encoding='utf-8'))

# Build a map of slug -> food record
# We need more data. Read directly from the source nutrition module
import sys
sys.path.insert(0, r'D:\openclaw\apps\dinh-duong-viet\src\data')

# Alternative: read the nutrition data from the built API file
# Or use a simpler approach: find the data attributes from the rendered HTML
# Let me check if there's a nutrition.js/data file we can parse
import os
nutrition_files = []
for root, dirs, files in os.walk(r'D:\openclaw\apps\dinh-duong-viet\src'):
    for f in files:
        if 'nutrition' in f.lower():
            nutrition_files.append(os.path.join(root, f))
print('Nutrition files found:', nutrition_files)

# Actually, let me mine the data from the rendered dist HTML
# We can parse the existing 835 KB HTML to extract all data attributes
html_path = r'D:\openclaw\apps\dinh-duong-viet\dist\thuc-pham\index.html'
if os.path.exists(html_path):
    print(f'\nParsing {os.path.getsize(html_path)/1024:.0f} KB HTML...')
    html = open(html_path, encoding='utf-8').read()
    import re
    
    compact = []
    # Extract food cards via food-card divs
    # Pattern: <a class="food-card ..." data-tags="..." data-category="..." data-kcal="...">
    pattern = r'<a class="food-card[^>]*' + \
        r'data-tags="([^"]*)"[^>]*' + \
        r'data-category="([^"]*)"[^>]*' + \
        r'data-kcal="([^"]*)"[^>]*' + \
        r'data-protein="([^"]*)"[^>]*' + \
        r'data-carb="([^"]*)"[^>]*' + \
        r'data-fat="([^"]*)"[^>]*' + \
        r'data-fiber="([^"]*)"[^>]*' + \
        r'data-sodium="([^"]*)"[^>]*' + \
        r'data-potassium="([^"]*)"[^>]*' + \
        r'data-gi="([^"]*)"[^>]*' + \
        r'href="([^"]*)"[^>]*>' + \
        r'.*?<h3>([^<]+)</h3>'
    
    matches = re.findall(pattern, html, re.DOTALL)
    print(f'Parsed {len(matches)} food cards from HTML')
    if len(matches) > 0:
        print(f'Sample: {matches[0][-1]}')
    
    for m in matches:
        tags_str = m[0]
        slug = m[11].replace('/thuc-pham/', '')
        name = m[12].strip()
        category = m[1]
        
        # Convert values to integers (handling empty)
        def to_int(v):
            try:
                return int(float(v))
            except:
                return 0
        
        compact.append([slug, name, category, to_int(m[2]), to_int(m[3]), 
                        to_int(m[4]), to_int(m[5]), to_int(m[6]), to_int(m[7]), 
                        to_int(m[8]), tags_str, m[10]])
    
    output = json.dumps(compact, ensure_ascii=False, separators=(',',':'))
    out_path = r'D:\openclaw\apps\dinh-duong-viet\public\api\foods-full.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(output)
    
    sz = os.path.getsize(out_path) / 1024
    print(f'\nWritten {out_path}: {sz:.0f} KB ({len(compact)} foods)')
else:
    print('No dist HTML found. Run build first.')
