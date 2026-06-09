raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', encoding='utf-8').read()

# Add CTA map after toolMap
cta_text = '''
// CTA per specialty — shown after article body, before Q&A
const specialtyCTA = {
  'noi-tiet': '📊 Muốn biết chỉ số đường huyết của bữa ăn bạn? Dùng ngay <a href="/cong-cu/tinh-gl-bua-an">công cụ tính GL bữa ăn</a> hoặc <a href="/cong-cu/chi-so-gi">tra chỉ số GI thực phẩm</a>.',
  'tim-mach': '❤️ Kiểm tra sức khỏe tim mạch của bạn với <a href="/cong-cu/bmi">máy tính BMI & vòng eo</a> hoặc tính <a href="/cong-cu/tinh-calo-tieu-thu">calo tiêu thụ khi tập</a>.',
  'tieu-hoa': '🥗 Theo dõi chế độ ăn cho hệ tiêu hoá — tính <a href="/cong-cu/tinh-carb">lượng carb</a> hoặc <a href="/cong-cu/tinh-nhu-cau-dam">nhu cầu đạm</a> của bạn.',
  'than': '🫘 Bệnh thận cần kiểm soát đạm chặt chẽ. Dùng <a href="/cong-cu/tinh-nhu-cau-dam">công cụ tính nhu cầu đạm</a> và <a href="/cong-cu/bmi">BMI</a>.',
  'xuong-khop': '🦴 Duy trì cân nặng hợp lý giảm áp lực lên khớp. Tính thử <a href="/cong-cu/bmi">BMI</a> hoặc <a href="/cong-cu/tinh-calo-tieu-thu">calo tiêu thụ</a> khi vận động.',
  'ho-hap': '🫁 Theo dõi đường huyết và dinh dưỡng với <a href="/cong-cu/theo-doi-duong-huyết">công cụ theo dõi</a> hoặc tính <a href="/cong-cu/tinh-calo-tieu-thu">calo tiêu thụ</a>.',
  'than-kinh': '🧠 Dinh dưỡng tốt cho thần kinh. Dùng <a href="/cong-cu/bmi">BMI & vòng eo</a> để kiểm tra cân nặng hoặc <a href="/cong-cu/tinh-calo-tieu-thu">tính calo</a> vận động.',
  'da-lieu': '🌟 Chăm sóc da từ bên trong. Kiểm tra <a href="/cong-cu/bmi">BMI</a> và cân nặng hợp lý.',
  'phu-nu-nhi': '👶 Mẹ và bé khoẻ mạnh. Tính thử <a href="/cong-cu/bmi">BMI</a> hoặc <a href="/cong-cu/tinh-nhu-cau-dam">nhu cầu đạm</a> cho cả gia đình.',
  'huyet-hoc': '🩸 Duy trì dinh dưỡng tốt với <a href="/cong-cu/bmi">BMI</a> và <a href="/cong-cu/theo-doi-duong-huyet">theo dõi đường huyết</a>.',
  'ung-thu': '🎗️ Dinh dưỡng hỗ trợ điều trị ung thư. Tính <a href="/cong-cu/tinh-nhu-cau-dam">nhu cầu đạm</a> và <a href="/cong-cu/bmi">BMI</a>.',
};
const cta = specialtyCTA[article.specialty] || null;
'''

raw = raw.replace('const toolLinks =', cta_text + '\nconst toolLinks =')
open(r'D:\openclaw\apps\dinh-duong-viet\src\layouts\ArticleLayout.astro', 'w', encoding='utf-8').write(raw)
print('CTA map added')
