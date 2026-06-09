raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8').read()

# Insert CTA after rendered content, before Q&A block
old = raw.find('set:html={renderedContent}')
after = raw[old+len('set:html={renderedContent}'):]
qa_idx = after.find('{qa &&')
if qa_idx > 0:
    cta_html = '''
    <!-- Specialty CTA -->
    {cta && (
      <div style="margin-top: 32px; padding: 16px 20px; background: var(--brand-light); border: 1px solid var(--brand-light2); border-radius: 12px; font-size: 0.92rem; line-height: 1.6; display: flex; align-items: flex-start; gap: 10px;">
        <span style="font-size: 1.1rem; flex-shrink: 0;">💡</span>
        <span set:html={cta}></span>
      </div>
    )}

'''
    insert_pos = old + len('set:html={renderedContent}') + qa_idx
    raw = raw[:insert_pos] + cta_html + raw[insert_pos:]
    open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', 'w', encoding='utf-8').write(raw)
    print('CTA HTML inserted before Q&A')
else:
    print('Q&A block not found after rendered content')
