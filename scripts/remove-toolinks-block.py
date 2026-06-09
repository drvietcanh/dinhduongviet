import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8') as f:
    raw = f.read()

# Remove the toolLinks template block (lines 187-198)
old_block = """    {toolLinks.length > 0 && (
      <div style="margin-top: 28px; padding: 16px 0; border-top: 1px solid var(--line);">
        <h3 style="font-size: 1.05rem; margin-bottom: 12px;">🛠️ Công cụ liên quan</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          {
            toolLinks.map(function(link) {
              return <a href={link.href} class="art-btn art-btn-secondary" style="font-size: 0.85rem;">🔧 {link.label}</a>;
            })
          }
        </div>
      </div>
    )}

"""

raw = raw.replace(old_block, '', 1)

with open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', 'w', encoding='utf-8') as f:
    f.write(raw)

print('Done! Removed toolLinks template block.')
