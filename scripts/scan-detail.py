"""Analyze remaining markdown issues in detail."""
import os, re

base = r'D:\openclaw\apps\dinh-duong-viet\dist'
detail_issues = []

for root, dirs, files in os.walk(base):
    for fname in files:
        if not fname.endswith('.html'):
            continue
        path = os.path.join(root, fname)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        body_match = re.search(r'class="article-body"[^>]*>(.*?)</div>', content, re.DOTALL)
        if not body_match:
            continue
        body = body_match.group(1)
        page = os.path.relpath(path, base)

        issues = []

        # Check blockquotes - show context
        for m in re.finditer(r'^(> .+)$', body, re.MULTILINE):
            issues.append(('blockquote', m.group(0)[:80]))

        # Check bullet lists
        for m in re.finditer(r'^- .+$', body, re.MULTILINE):
            issues.append(('bullet', m.group(0)[:80]))

        if issues:
            detail_issues.append((page, issues))

# Show top pages with detail
for page, issues in detail_issues[:5]:
    print(f"\n{'='*60}")
    print(f"{page} — {len(issues)} issues")
    print('='*60)
    for typ, text in issues[:6]:
        print(f"  [{typ}] {text}")
