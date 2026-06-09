raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8').read()

# Find the article body + what follows
idx = raw.find('set:html={renderedContent}')
print('=== After rendered content ===')
print(raw[idx:idx+500])

# Find what comes before tool-links-section
idx2 = raw.find('tool-links-section')
if idx2 > 0:
    print('\n=== Before tool-links-section ===')
    print(raw[idx2-200:idx2])
