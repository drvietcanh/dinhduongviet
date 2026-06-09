import os, glob, re

no_content = []
for f in sorted(glob.glob('*.astro')):
    raw = open(f, encoding='utf-8').read()
    has_import = 'import { articleBySlug }' in raw
    has_sections = raw.count('<h2') + raw.count('<section') + raw.count('<!--')
    if has_sections < 3:
        title = ''
        m = re.search(r'title:\s*"([^"]+)', raw)
        if m: title = m.group(1)
        no_content.append((f, 'import' if has_import else 'inline', title, has_sections))

print(f'Found {len(no_content)} articles with little/no content:')
for f, t, title, sections in no_content:
    print(f'  {f:45s} [{t:7s}] {sections} sections -- {title}')
