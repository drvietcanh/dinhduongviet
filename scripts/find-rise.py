r = open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\dung-tin-ngay\dung-tin-ngay-trung-gay-benh-tim.astro', encoding='utf-8').read()
idx = r.find('rise')
print('Found rise at', idx)
print(repr(r[idx-20:idx+40]))
