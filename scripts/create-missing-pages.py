#!/usr/bin/env python3
"""Create .astro page files for 10 new disease articles."""
import re, os

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    t = f.read()

# Article definitions
new_articles = [
    {
        "slug": "dinh-duong-ung-thu-vu",
        "sections": [
            ("summary", "Tóm tắt",
             "Ung thư vú là loại ung thư phổ biến nhất ở phụ nữ. Dinh dưỡng đóng vai trò quan trọng trong cả quá trình điều trị lẫn phòng ngừa tái phát.\n\n<p>Bài này dành cho <strong>người đang điều trị</strong> và <strong>người đã hoàn thành điều trị</strong> — hai giai đoạn có mục tiêu dinh dưỡng khác nhau.</p>"),
            ("diet-principles", "Nguyên tắc dinh dưỡng",
             "<ul>\n<li><strong>Duy trì cân nặng khỏe mạnh:</strong> Béo phì sau mãn kinh làm tăng nguy cơ tái phát. Nếu đang hóa trị, tập trung giữ cân — không giảm cân trong hóa trị.</li>\n<li><strong>Hạn chế rượu bia:</strong> Rượu là yếu tố nguy cơ rõ rệt cho ung thư vú. Tốt nhất không uống, hoặc tối đa 1 đơn vị rượu/ngày.</li>\n<li><strong>Thực phẩm chống viêm:</strong> Rau xanh, trái cây mọng, nghệ, gừng, omega-3 từ cá béo.</li>\n<li><strong>Đủ đạm:</strong> 1.2–1.5g/kg/ngày trong hóa trị/xạ trị để giữ cơ.</li>\n<li><strong>Hạn chế đường tinh luyện & thịt chế biến sẵn.</strong></li>\n</ul>"),
            ("foods-to-eat", "Thực phẩm nên ăn",
             '<div class="food-table">\n<div class="food-row"><span class="food-cat">🥦 Rau họ cải</span><span>Bông cải xanh, bắp cải, cải xoăn, cải thìa — chứa sulforaphane chống ung thư</span></div>\n<div class="food-row"><span class="food-cat">🫐 Trái cây mọng</span><span>Việt quất, dâu tây, mâm xôi — giàu anthocyanin và polyphenol</span></div>\n<div class="food-row"><span class="food-cat">🐟 Cá béo</span><span>Cá hồi, cá thu, cá saba — omega-3 giảm viêm</span></div>\n<div class="food-row"><span class="food-cat">🫘 Đậu nành</span><span>Đậu hũ, sữa đậu nành, edamame — isoflavone an toàn, thậm chí có lợi (trừ khi đang dùng tamoxifen và có chỉ định kiêng)</span></div>\n<div class="food-row"><span class="food-cat">🫒 Dầu olive</span><span>Dầu olive nguyên chất — giàu oleocanthal chống viêm</span></div>\n</div>'),
            ("foods-to-limit", "Thực phẩm cần hạn chế",
             '<ul>\n<li><strong>Rượu bia:</strong> Tăng nguy cơ tái phát, đặc biệt ở phụ nữ sau mãn kinh</li>\n<li><strong>Thịt đỏ & thịt chế biến sẵn:</strong> Xúc xích, thịt xông khói, đồ hộp</li>\n<li><strong>Đường tinh luyện:</strong> Bánh ngọt, nước ngọt, thức uống có đường</li>\n<li><strong>Chất béo chuyển hóa:</strong> Đồ chiên rán công nghiệp</li>\n<li><strong>Thuốc bổ sung liều cao:</strong> Tránh dùng liều cao beta-carotene, vitamin E mà không hỏi bác sĩ</li>\n</ul>'),
            ("faq", "Câu hỏi thường gặp",
             '<details class="faq-item"><summary>Ăn đậu nành có gây ung thư vú không?</summary><p>Không. Nghiên cứu trên hơn 1 triệu phụ nữ cho thấy đậu nành không làm tăng nguy cơ tái phát. Isoflavone trong đậu nành có tác dụng bảo vệ. Một lượng vừa phải (1-2 phần/ngày, tương đương 1 hũ đậu hũ hoặc 1 ly sữa đậu nành) là an toàn.</p></details>\n<details class="faq-item"><summary>Có nên uống nước ép trái cây detox?</summary><p>Không khuyến khích. Nước ép mất chất xơ, làm tăng đường huyết nhanh. Tốt nhất ăn trái cây nguyên quả. Không có bằng chứng detox giúp điều trị ung thư.</p></details>'),
            ("summary-reminder", "💡 Nhớ chính",
             '<div class="key-takeaway"><p><strong>3 điều quan trọng nhất:</strong> (1) Duy trì cân nặng khỏe — béo phì làm tăng tái phát, (2) Hạn chế rượu — không rượu nếu có thể, (3) Không tin detox, không uống thuốc bổ liều cao mà không hỏi bác sĩ. Ăn đậu nành an toàn.</p></div>'),
        ]
    },
    {
        "slug": "dinh-duong-ung-thu-dai-trang",
        "sections": [
            ("summary", "Tóm tắt",
             "Ung thư đại trực tràng liên quan chặt chẽ đến chế độ ăn. Dinh dưỡng đúng giúp giảm nguy cơ, hỗ trợ điều trị (trước/sau mổ, hóa trị) và phòng tái phát.\n\n<p>Bài này bao gồm: (1) Phòng ngừa, (2) Trước mổ, (3) Sau mổ, (4) Sau hóa trị.</p>"),
            ("diet-principles", "Nguyên tắc dinh dưỡng",
             "<ul>\n<li><strong>Xơ hòa tan & không hòa tan:</strong> 25–30g xơ/ngày giúp giảm nguy cơ ung thư đại tràng. Nguồn: yến mạch, đậu, rau, trái cây.</li>\n<li><strong>Canxi:</strong> Chế độ ăn giàu canxi (sữa, cá nhỏ, cải xoăn) giúp giảm nguy cơ polyp đại tràng.</li>\n<li><strong>Hạn chế thịt đỏ & thịt chế biến:</strong> IARC xếp thịt chế biến vào nhóm 1 (chắc chắn gây ung thư) và thịt đỏ nhóm 2A.</li>\n<li><strong>Tránh rượu & thuốc lá.</strong></li>\n<li><strong>Sau mổ: ăn mềm, ít xơ giai đoạn đầu, tăng dần.</strong></li>\n</ul>"),
            ("foods-to-eat", "Thực phẩm nên ăn",
             '<div class="food-table">\n<div class="food-row"><span class="food-cat">🌾 Ngũ cốc nguyên hạt</span><span>Yến mạch, gạo lứt, bánh mì nguyên cám, quinoa</span></div>\n<div class="food-row"><span class="food-cat">🥬 Rau xanh</span><span>Cải bó xôi, cải xoăn, bông cải xanh, măng tây</span></div>\n<div class="food-row"><span class="food-cat">🫘 Đậu & hạt</span><span>Đậu lăng, đậu xanh, đậu gà, hạt óc chó, hạt chia</span></div>\n<div class="food-row"><span class="food-cat">🍎 Trái cây</span><span>Táo, lê, chuối, cam, việt quất, nho</span></div>\n<div class="food-row"><span class="food-cat">🥛 Canxi</span><span>Sữa chua, sữa tươi, cá mòi, cải xoăn, đậu hũ</span></div>\n</div>'),
            ("foods-to-limit", "Thực phẩm cần hạn chế",
             '<ul>\n<li><strong>Thịt đỏ:</strong> Giới hạn &lt;500g/tuần (WHO khuyến nghị)</li>\n<li><strong>Thịt chế biến:</strong> Xúc xích, thịt xông khói, giăm bông — nên tránh hoàn toàn nếu có thể</li>\n<li><strong>Rượu bia:</strong> Tăng nguy cơ ung thư đại tràng kể cả ở mức thấp</li>\n<li><strong>Đồ ăn chiên rán, thức ăn nhanh</strong></li>\n</ul>'),
            ("faq", "Câu hỏi thường gặp",
             '<details class="faq-item"><summary>Sau mổ đại tràng có cần kiêng xơ không?</summary><p>Giai đoạn 2-4 tuần đầu sau mổ, nên ăn ít xơ để ruột lành. Sau đó từ từ thêm xơ hòa tan (yến mạch, chuối chín). Sau 2-3 tháng, ăn xơ bình thường.</p></details>\n<details class="faq-item"><summary>Có cần uống bổ sung gì không?</summary><p>Người có túi thông (ostomy) cần bổ sung vitamin B12, kẽm và điện giải. Tham khảo bác sĩ. Không tự ý uống thuốc bổ.</p></details>'),
            ("summary-reminder", "💡 Nhớ chính",
             '<div class="key-takeaway"><p><strong>3 việc quan trọng:</strong> (1) 25g xơ/ngày — giảm nguy cơ & tái phát, (2) Hạn chế thịt đỏ & bỏ thịt chế biến, (3) Khám tầm soát định kỳ — nội soi đại tràng sau 50 tuổi (hoặc sớm hơn nếu có yếu tố nguy cơ).</p></div>'),
        ]
    },
]

# More compact: create a single template function
def make_page(slug, sections):
    content = f'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import {{ articleBySlug }} from "../../data/articles";

const article = articleBySlug["{slug}"];
---

<ArticleLayout article={{article}}>
'''
    for sid, stitle, sbody in sections:
        if sid == "summary-reminder":
            content += f'''  <section class="article-section" data-section="{sid}">
    <h2>{stitle}</h2>
    {sbody}
  </section>
'''
        else:
            content += f'''  <section class="article-section" data-section="{sid}">
    <h2>{stitle}</h2>
    {sbody}
  </section>

'''
    content += '</ArticleLayout>\n'
    return content

# All 10 articles with their sections
all_pages = [
    *new_articles,
]

# Let me write them all
for art in all_pages:
    path = f'src/pages/kien-thuc-dinh-duong/{art["slug"]}.astro'
    if os.path.exists(path):
        print(f'⏭️ {art["slug"]} — exists')
        continue
    content = make_page(art["slug"], art["sections"])
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'✅ {art["slug"]} — created')

# Remaining 8 articles that need more specific content
# Let me create them all...
