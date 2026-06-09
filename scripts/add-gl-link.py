import re

path = r'D:\openclaw\apps\dinh-duong-viet\src\pages\cong-cu\index.astro'
with open(path, encoding='utf-8') as f:
    raw = f.read()

# Add GL tool entry after GI tool entry
old = '{ icon: "\U0001f33e", name: "Chỉ số GI thực phẩm Việt", href: "/cong-cu/chi-so-gi", desc: "Tra GI của cơm, bún, phở, bánh mì, trái cây Việt. Phân loại thấp/vừa/cao, kèm gợi ý thay thế." },\n    { icon: "\U0001f522", name: "Tính carb trong bữa ăn",'
new = '{ icon: "\U0001f33e", name: "Chỉ số GI thực phẩm Việt", href: "/cong-cu/chi-so-gi", desc: "Tra GI của cơm, bún, phở, bánh mì, trái cây Việt. Phân loại thấp/vừa/cao, kèm gợi ý thay thế." },\n    { icon: "\u2696\ufe0f", name: "Tính GL từ bữa ăn (mới)", href: "/cong-cu/tinh-gl-bua-an", desc: "Ghép nhiều thực phẩm tính tổng GL bữa ăn. Biết ngay bữa này có an toàn cho đường huyết." },\n    { icon: "\U0001f522", name: "Tính carb trong bữa ăn",'

if old in raw:
    raw = raw.replace(old, new, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(raw)
    print('Added GL tool to index.astro')
else:
    print('Pattern not found!')
    # Find the GI tool line
    idx = raw.find('Chi so GI')
    if idx > 0:
        print('Around target:', raw[idx-50:idx+100])
