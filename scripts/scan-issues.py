"""Scan all rendered article HTML pages for remaining markdown syntax."""
import os, re, json

base = r'D:\openclaw\apps\dinh-duong-viet\dist'
issues = []

for root, dirs, files in os.walk(base):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Only check pages with article-body
        if 'article-body' not in content:
            continue

        # Extract article-body div
        body_match = re.search(r'class="article-body"[^>]*>(.*?)</div>', content, re.DOTALL)
        if not body_match:
            body_match = re.search(r"class='article-body'[^>]*>(.*?)</div>", content, re.DOTALL)
        if not body_match:
            continue

        body = body_match.group(1)
        page = os.path.relpath(path, base)

        # Check for remaining markdown syntax
        checks = {
            '**bold**': len(re.findall(r'\*\*[^*]+\*\*', body)),
            '## heading': len(re.findall(r'^## |## ', body, re.MULTILINE)),
            '### heading': len(re.findall(r'^### |### ', body, re.MULTILINE)),
            '> blockquote': len(re.findall(r'^> ', body, re.MULTILINE)),
            '* bullet': len(re.findall(r'^[*] ', body, re.MULTILINE)),
            '- bullet': len(re.findall(r'^- ', body, re.MULTILINE)),
        }

        page_issues = {k: v for k, v in checks.items() if v > 0}
        if page_issues:
            issues.append((page, page_issues))

# Sort by most issues first
issues.sort(key=lambda x: sum(x[1].values()), reverse=True)

print(f"Found {len(issues)} pages with remaining markdown syntax\n")

for page, page_issues in issues[:30]:
    total = sum(page_issues.values())
    desc = ' · '.join(f'{k}={v}' for k, v in page_issues.items())
    print(f"[{total}] {page}")
    print(f"     {desc}")
