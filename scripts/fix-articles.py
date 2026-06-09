t = open('articles.ts', encoding='utf-8').read()
# Fix corrupted CATEGORIES header
t = t.replace(
  '};\n\n emoji: string }> = {',
  '};\n\nexport const CATEGORIES: Record<string, { name: string; emoji: string }> = {'
)
# Fix display categories 
t = t.replace(
  "'an-lanh-manh': { name: '🥗 Ăn lành mạnh', emoji: '🥗', desc: 'Dinh dưỡng cơ bản, giảm cân, vitamin, lối sống lành mạnh' },\n  'dang-co-benh': { name: '🩺 Đang có bệnh',",
  "'bai-viet': { name: '✍️ Bài viết', emoji: '✍️', desc: 'Dinh dưỡng cơ bản, giảm cân, chế độ ăn theo bệnh lý' },\n  'mon-an': { name: '🍜 Món ăn & Thực phẩm',"
)
open('articles.ts', 'w', encoding='utf-8').write(t)
print('Fixed!')
