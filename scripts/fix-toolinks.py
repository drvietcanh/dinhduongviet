import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8') as f:
    raw = f.read()

# Replace the toolLinks section - just use a simple conditional approach
old = """    <!-- Công cụ liên quan -->
    {
      toolLinks.map(function(link) {
        return <>
          <div style="margin-top: 28px; padding: 16px 0; border-top: 1px solid var(--line);">
            <h3 style="font-size: 1.05rem; margin-bottom: 12px;">🛠️ Công cụ liên quan</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <a href={link.href} class="art-btn art-btn-secondary" style="font-size: 0.85rem;">🔧 {link.label}</a>
            </div>
          </div>
        </>;
      }).slice(0, 1)
    }"""

new = """    <!-- Công cụ liên quan -->
    {
      toolLinks.length > 0 && toolLinks.map(function(link) {
        return <a href={link.href} class="art-btn art-btn-secondary" style="font-size: 0.85rem; margin: 4px;">🔧 {link.label}</a>;
      })
    }"""

# The issue is that the IIFE returns a fragment with div inside the map.
# The error 'Expected "}" but found "."' might be from ...map(function(link) { return <>...</>; }) syntax

if old in raw:
    raw = raw.replace(old, new, 1)
    with open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', 'w', encoding='utf-8') as f:
        f.write(raw)
    print('Fixed!')
else:
    print('Pattern not found, doing alternative...')
    # Find what's actually there
    idx = raw.find('-- Công cụ liên quan -->')
    if idx > 0:
        print('Around target:', raw[idx-20:idx+400])
