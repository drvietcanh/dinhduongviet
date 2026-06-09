import re

raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8').read()

old = '    <!-- Nguồn tham khảo -->\n    {article.sources && article.sources.length > 0 && ('

tool_block = '''    <!-- Công cụ liên quan -->
    <div class="tool-links-section">
      <h3 class="tool-links-title">🛠️ Công cụ liên quan</h3>
      {toolLinks.map(t => (
        <a href={t.h} class="art-btn art-btn-secondary" style="font-size: 0.85rem; margin: 4px;">🔧 {t.l}</a>
      ))}
    </div>

    <!-- Nguồn tham khảo -->
    {article.sources && article.sources.length > 0 && ('''

if old in raw:
    raw = raw.replace(old, tool_block, 1)
    with open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', 'w', encoding='utf-8') as f:
        f.write(raw)
    print('Tool links section added!')
else:
    print('Pattern not found!')
    idx = raw.find('Nguồn tham khảo')
    print('Context:', repr(raw[idx-30:idx+60]))
