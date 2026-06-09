import sys, re

fname = sys.argv[1]
with open(fname, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the article-body div
match = re.search(r'class="article-body"[^>]*>(.*?)</div>\s*</div>\s*(?:<div class="related|</main)', content, re.DOTALL)
if not match:
    # try alternative structure
    match = re.search(r'class="article-body"[^>]*>(.*?)</div>', content, re.DOTALL)
    
if match:
    body = match.group(1)
    strongs = len(re.findall(r'<strong>', body))
    blockquotes = len(re.findall(r'<blockquote>', body))
    asterisks = len(re.findall(r'(?<![<])\*\*', body))  # find ** that is not inside HTML tag
    
    print(f'<strong>: {strongs}')
    print(f'<blockquote>: {blockquotes}')
    print(f'Unrendered **: {asterisks}')
    
    # Show first 200 chars
    print(f'\nFirst 300 chars of article-body:\n{body[:300]}')
else:
    print('article-body not found')
    # search for any div
    for m in re.finditer(r'<div[^>]*class="[^"]*article[^"]*"[^>]*>', content):
        print('Found:', m.group()[:100])
