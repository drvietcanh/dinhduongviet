import re, os

# Audit touch targets in key interactive pages
pages = {
    'thuc-pham/index.astro': r'D:\openclaw\apps\dinh-duong-viet\src\pages\thuc-pham\index.astro',
    'mon-an/index.astro': r'D:\openclaw\apps\dinh-duong-viet\src\pages\mon-an\index.astro',
    'cong-cu/index.astro': r'D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro',
    'tim-kiem.astro': r'D:\openclaw\apps\dinh-duong-viet\src\pages\tim-kiem.astro',
    'ban-do-benh.astro': r'D:\openclaw\apps\dinh-duong-viet\src\pages\ban-do-benh.astro',
}

for name, path in pages.items():
    raw = open(path, encoding='utf-8').read()
    print(f'\n=== {name} ===')
    # Check filter buttons, chips
    chips = re.findall(r'padding[\s:]+[\d.]+px.*[\d.]+px', raw)
    small_buttons = []
    for m in re.finditer(r'(padding|height|min-height)[\s:]*(\d+)px', raw):
        val = int(m.group(2))
        if val < 8 and 'padding' in m.group():  # too thin padding = hard to tap
            small_buttons.append((m.group(), val))
    
    # Check for any fixed small font at mobile
    for m in re.finditer(r'@media.*\(max-width.*\)', raw):
        media_start = m.start()
        # find closing brace
        brace_count = 0
        end = media_start
        for i in range(media_start, len(raw)):
            if raw[i] == '{': brace_count += 1
            elif raw[i] == '}': brace_count -= 1
            if brace_count == 0:
                end = i
                break
        media_body = raw[media_start:end]
        for fm in re.finditer(r'font-size[\s:]*(\d+)px', media_body):
            val = int(fm.group(1))
            if val < 13:
                print(f'  Small font in @media: {fm.group()} at line of media')
