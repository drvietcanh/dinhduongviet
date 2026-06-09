t = open('articles.ts', encoding='utf-8').read()

# The duplicate CATEGORIES + DISPLAY_CATEGORIES after the articles array
# starts at position 170839. Find the end of DISPLAY_CATEGORIES
start = t.find('export const CATEGORIES', 170000)
end = t.find(';', start)  # find first semicolon in the 'export const' to find the fake
# Actually find the real DISPLAY_CATEGORIES end
# Search for the second DISPLAY_CATEGORIES which is after the duplicate CATEGORIES
dc2 = t.find('DISPLAY_CATEGORIES', start)
if dc2 > 0:
    # Find the end of this block
    # The DISPLAY_CATEGORIES ends with }; (we can count braces or just find pattern)
    # Let's find the pattern '};' that comes after 'mon-an' entry
    monan_idx = t.find("'mon-an'", dc2)
    if monan_idx > 0 and monan_idx < monan_idx + 2000:
        # Find the '};' after mon-an entry (first one is mon-an's close brace)
        # Then find DISPLAY_CATEGORIES's close
        end_brace = t.find('};', monan_idx)
        end_brace2 = t.find('};', end_brace + 2)
        # Also find thuc-don and dung-tin-ngay 
        # Actually let's just find the full DISPLAY_CATEGORIES block end
        # It's at the end before the SOURCE_ORG constant
        print(f'Removing duplicate export blocks from {start} to {end_brace2+2}')
        t2 = t[:start] + t[end_brace2+2:]
        print(f'New length: {len(t2)}')
        open('articles.ts', 'w', encoding='utf-8').write(t2)
        print('Done!')
else:
    print('Second DISPLAY_CATEGORIES not found')
