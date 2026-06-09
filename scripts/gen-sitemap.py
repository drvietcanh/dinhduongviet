import os, glob, re

base = r'D:\openclaw\apps\dinh-duong-viet\src\pages'
all_pages = []

# Static pages
for f in glob.glob(os.path.join(base, '*.astro')):
    n = os.path.basename(f).replace('.astro', '')
    if n == '404' or n == 'index':
        continue
    all_pages.append((n, 'monthly', 0.9))

# Tools
for f in glob.glob(os.path.join(base, 'cong-cu', '*.astro')):
    n = os.path.basename(f).replace('.astro', '')
    if n == 'index':
        continue
    all_pages.append(('cong-cu/' + n, 'monthly', 0.8))

# Dung tin ngay
for f in glob.glob(os.path.join(base, 'dung-tin-ngay', '*.astro')):
    n = os.path.basename(f).replace('.astro', '')
    if n == 'index':
        continue
    all_pages.append(('dung-tin-ngay/' + n, 'monthly', 0.8))

# Articles
articles_data = open(r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts', encoding='utf-8').read()
slugs = re.findall(r'slug:\s*"([^"]+)"', articles_data)
for s in slugs:
    all_pages.append(('kien-thuc-dinh-duong/' + s, 'weekly', 0.7))

# Food & recipe pages
all_pages.append(('thuc-pham', 'monthly', 0.9))
all_pages.append(('mon-an', 'monthly', 0.9))
all_pages.append(('tim-kiem', 'monthly', 0.7))
all_pages.append(('ban-do-benh', 'weekly', 0.8))
all_pages.append(('hoi-dap', 'monthly', 0.6))
all_pages.append(('phuong-phap', 'monthly', 0.7))
all_pages.append(('thong-ke', 'monthly', 0.5))

# Write sitemap
lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for path, freq, prio in all_pages:
    full = 'https://dinh-duong-viet.pages.dev/' + path
    lines.append('  <url>')
    lines.append('    <loc>' + full + '</loc>')
    lines.append('    <changefreq>' + freq + '</changefreq>')
    lines.append('    <priority>' + str(prio) + '</priority>')
    lines.append('  </url>')

lines.append('</urlset>')

sitemap_path = r'D:\openclaw\apps\dinh-duong-viet\public\sitemap.xml'
with open(sitemap_path, 'w', encoding='utf-8') as fh:
    fh.write('\n'.join(lines))

print(f'Written {len(all_pages)} URLs to sitemap.xml')
