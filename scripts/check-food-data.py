import json

# Read the source data to create a compact food list for client-side rendering
# food-slim.json has {slug, name, category, kcal}
# But we need more data for filters (protein, carb, fat, fiber, sodium, tags)

# Let's check the actual nutrition data structure
src_foods = r'D:\openclaw\apps\dinh-duong-viet\src\data\nutrition.ts'
print(f'Source: {src_foods}')

# Check the foods-slim builder to know what's available
# Read the Astro page source to see what data attributes food cards use
r = open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\thuc-pham\index.astro', encoding='utf-8').read()
# Extract data attributes used
import re
for m in re.findall(r'data-(\w+)', r):
    if m not in ['category', 'tags']:
        print(f'data-{m}')
