import os, re, json

OG_DIR = r'D:\openclaw\apps\dinh-duong-viet\public\og'
os.makedirs(OG_DIR, exist_ok=True)

articles_path = r'D:\openclaw\apps\dinh-duong-viet\src\data\articles.ts'
with open(articles_path, encoding='utf-8') as f:
    content = f.read()

# Parse articles
articles = []
for m in re.finditer(r"slug:\s*['\"]([^'\"]+)['\"]", content):
    slug = m.group(1)
    endpos = m.end()
    ctx = content[endpos:endpos + 500]
    t_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", ctx)
    title = t_match.group(1) if t_match else slug
    d_match = re.search(r"description:\s*['\"]([^'\"]+?)['\"]", ctx)
    desc = d_match.group(1) if d_match else ''
    e_match = re.search(r"emoji:\s*['\"]([^'\"]+)['\"]", ctx)
    emoji = e_match.group(1) if e_match else '🥗'
    c_match = re.search(r"categoryName:\s*['\"]([^'\"]+)['\"]", ctx)
    cat = c_match.group(1) if c_match else 'Kiến thức'
    articles.append({'slug': slug, 'title': title, 'desc': desc, 'emoji': emoji, 'cat': cat})

print(f'Will generate {len(articles)} OG SVGs')

def esc(t):
    t = str(t or '')
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

def wrap(text, max_chars):
    words = text.split(' ')
    lines = []
    line = ''
    for w in words:
        if (line + ' ' + w).strip():
            candidate = (line + ' ' + w).strip()
            if len(candidate) <= max_chars or not line:
                line = candidate
            else:
                lines.append(line)
                line = w
        else:
            line = w
    if line:
        lines.append(line)
    return lines

generated = 0
for a in articles:
    title_lines = wrap(a['title'], 28)
    desc_text = wrap(a['desc'], 36)[:2]
    short_desc = ' — '.join(desc_text)
    font_size = 56 if len(title_lines) <= 2 else 48
    emoji_size = 72 if len(title_lines) <= 2 else 56

    cat_w = max(80, len(esc(a['cat'])) * 16 + 32)

    title_svg = ''
    for i, line in enumerate(title_lines):
        title_svg += f'    <text x="60" y="{270 + i * (font_size + 8)}" font-size="{font_size}" fill="white" font-family="system-ui, -apple-system, sans-serif" font-weight="700">{esc(line)}</text>\n'

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b5e20"/>
      <stop offset="50%" stop-color="#2e7d32"/>
      <stop offset="100%" stop-color="#388e3c"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#66bb6a"/>
      <stop offset="100%" stop-color="#a5d6a7"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" rx="0"/>
  <g opacity="0.06">
    <circle cx="100" cy="100" r="200" fill="white"/>
    <circle cx="1100" cy="500" r="300" fill="white"/>
    <circle cx="600" cy="-100" r="250" fill="white"/>
  </g>
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>
  <text x="60" y="140" font-size="{emoji_size}" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">{a['emoji']}</text>
  <rect x="60" y="170" width="{cat_w}" height="38" rx="19" fill="rgba(255,255,255,0.15)"/>
  <text x="76" y="195" font-size="18" fill="rgba(255,255,255,0.9)" font-family="system-ui, sans-serif" font-weight="600">{esc(a['cat'])}</text>
{title_svg}  <text x="60" y="{270 + len(title_lines) * (font_size + 8) + 40}" font-size="24" fill="rgba(255,255,255,0.7)" font-family="system-ui, sans-serif">{esc(short_desc)}</text>
  <rect x="60" y="540" width="1080" height="2" fill="rgba(255,255,255,0.2)"/>
  <text x="60" y="585" font-size="28" fill="white" font-family="system-ui, sans-serif" font-weight="700">🌿 Dinh Dưỡng Việt</text>
  <text x="60" y="610" font-size="16" fill="rgba(255,255,255,0.5)" font-family="system-ui, sans-serif">dinh-duong-viet.pages.dev</text>
</svg>'''

    fpath = os.path.join(OG_DIR, a['slug'] + '.svg')
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(svg)
    generated += 1

print(f'Generated {generated} OG SVG files in {OG_DIR}')

# Create default fallback
default_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1b5e20"/><stop offset="50%" stop-color="#2e7d32"/><stop offset="100%" stop-color="#388e3c"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="60" y="200" font-size="80" fill="white" font-family="Apple Color Emoji, Segoe UI Emoji" text-anchor="start">🥗</text>
  <text x="60" y="320" font-size="64" fill="white" font-family="system-ui, sans-serif" font-weight="700">Dinh Dưỡng Việt</text>
  <text x="60" y="380" font-size="28" fill="rgba(255,255,255,0.7)" font-family="system-ui, sans-serif">Tra cứu dinh dưỡng thực phẩm và món ăn Việt Nam</text>
  <text x="60" y="585" font-size="22" fill="rgba(255,255,255,0.5)" font-family="system-ui, sans-serif">dinh-duong-viet.pages.dev</text>
</svg>'''
with open(os.path.join(OG_DIR, 'default.svg'), 'w', encoding='utf-8') as f:
    f.write(default_svg)

print('Created default OG SVG')
