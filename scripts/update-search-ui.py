import re

with open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\tim-kiem.astro', encoding='utf-8') as f:
    raw = f.read()

count = 0

# 1. Add tool filter chip
old = """        <button class="chip" data-filter="article">📖 Bài viết</button>
        <button class="chip" data-filter="food">🥬 Thực phẩm</button>
        <button class="chip" data-filter="recipe">🍜 Món ăn</button>"""
new = """        <button class="chip" data-filter="article">📖 Bài viết</button>
        <button class="chip" data-filter="tool">🛠️ Công cụ</button>
        <button class="chip" data-filter="food">🥬 Thực phẩm</button>
        <button class="chip" data-filter="recipe">🍜 Món ăn</button>"""
raw = raw.replace(old, new, 1)
print('1. Added tool chip')

# 2. Add tool filter
old = "if (activeFilter === 'food') return item.type === 'food';\n      if (activeFilter === 'recipe') return item.type === 'recipe';"
new = "if (activeFilter === 'food') return item.type === 'food';\n      if (activeFilter === 'recipe') return item.type === 'recipe';\n      if (activeFilter === 'tool') return item.type === 'tool';"
raw = raw.replace(old, new, 1)
print('2. Added tool filter match')

# 3. Add tool suggestion rendering
old = 'url = item.type === \'food\' ? \'/thuc-pham/\' : \'/mon-an/\';\n          tag = item.type === \'food\' ? item.category : \'Món ăn\';\n          emoji = item.type === \'food\' ? getCategoryEmoji(item.category) : \'🍽️\';'
new = "url = item.type === 'tool' ? '/cong-cu/' : (item.type === 'food' ? '/thuc-pham/' : '/mon-an/');\n          tag = item.type === 'tool' ? 'Công cụ' : (item.type === 'food' ? item.category : 'Món ăn');\n          emoji = item.type === 'tool' ? '🛠️' : (item.type === 'food' ? getCategoryEmoji(item.category) : '🍽️');"
raw = raw.replace(old, new, 1)
print('3. Added tool suggestion')


# 4. Add tool result rendering (before the closing )
# Find the article rendering block and add tool after it
old_article_block = """'<span class="badge badge-article">Bài viết</span>' +
            '</a>';
        }"""
new_article_block = """'<span class="badge badge-article">Bài viết</span>' +
            '</a>';
        }
        if (item.type === 'tool') {
          var url = '/cong-cu/' + item.slug;
          var nameHtml = highlight(item.name, query);
          var descHtml = item.description ? '<span class="result-meta">' + highlight(item.description, query) + '</span>' : '';
          return '<a class="result-item" href="' + url + '">' +
            '<span class="result-emoji">🛠️</span>' +
            '<span class="result-info">' +
            '<span class="result-name">' + nameHtml + '</span>' +
            descHtml +
            '</span>' +
            '<span class="badge badge-tool">Công cụ</span>' +
            '</a>';
        }"""
if old_article_block in raw:
    raw = raw.replace(old_article_block, new_article_block, 1)
    print('4. Added tool result rendering')
else:
    print('4. Could not find article result block for tool insert')

# 5. Sorting priority for tools
old_sort = "if (a.type === 'article' && b.type !== 'article') return -1;\n      if (b.type === 'article' && a.type !== 'article') return 1;"
new_sort = "if (a.type === 'article' && b.type !== 'article') return -1;\n      if (b.type === 'article' && a.type !== 'article') return 1;\n      if (a.type === 'tool' && b.type === 'food') return -1;\n      if (b.type === 'tool' && a.type === 'food') return 1;"
raw = raw.replace(old_sort, new_sort, 1)
print('5. Updated sort priority')

# 6. Badge CSS for tool
if '.badge-tool' not in raw:
    raw = raw.replace('.badge-article { background: #fef3c7; color: #92400e; }',
                      '.badge-article { background: #fef3c7; color: #92400e; }\n.badge-tool { background: #e0e7ff; color: #3730a3; }')
    print('6. Added badge-tool CSS')

# 7. Dark mode badge-tool
if '.badge-tool' not in raw:
    raw = raw.replace('[data-theme="dark"] .badge-article { background: #2a221a; color: #fbbf24; }',
                      '[data-theme="dark"] .badge-article { background: #2a221a; color: #fbbf24; }\n[data-theme="dark"] .badge-tool { background: #1e1e3a; color: #a5b4fc; }')
    print('7. Added dark mode badge-tool CSS')

with open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\tim-kiem.astro', 'w', encoding='utf-8') as f:
    f.write(raw)

print('Write done!')
