#!/usr/bin/env python3
"""Create all 10 missing disease article .astro pages."""
import os

PAGE = '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import {{ articleBySlug }} from "../../data/articles";

const article = articleBySlug["{slug}"];
---

<ArticleLayout article={{article}}>
{body}
</ArticleLayout>'''

SECTION = '''  <section class="article-section" data-section="{sid}">
    <h2>{title}</h2>
    {body}
  </section>'''


def write_page(slug, sections):
    path = f'src/pages/kien-thuc-dinh-duong/{slug}.astro'
    if os.path.exists(path):
        return False
    
    body_parts = []
    for sid, title, body in sections:
        body_parts.append(SECTION.format(sid=sid, title=title, body=body.strip()))
    
    content = PAGE.format(slug=slug, body='\n\n'.join(body_parts))
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

print("Creating page files:")

# 1. Ung thư vú
write_page('dinh-duong-ung-thu-vu', [
    ("summary", "Tóm tắt", 
     "<p>Ung thư vú là loại ung thư phổ biến nhất ở phụ nữ. Dinh dưỡng đóng vai trò quan trọng trong cả quá trình điều trị lẫn phòng ngừa tái phát.</p><p>Bài này dành cho <strong>người đang điều trị</strong> và <strong>người đã hoàn thành điều trị</strong> — hai giai đoạn có mục tiêu dinh dưỡng khác nhau.</p>"),
    ("diet-principles", "Nguyên tắc dinh dưỡng",
     "<ul><li><strong>Duy trì cân nặng khỏe mạnh:</strong> Béo phì sau mãn kinh làm tăng nguy cơ tái phát.</li><li><strong>Hạn chế rượu bia:</strong> Rượu là yếu tố nguy cơ rõ rệt cho ung thư vú.</li><li><strong>Thực phẩm chống viêm:</strong> Rau xanh, trái cây mọng, nghệ, omega-3.</li><li><strong>Đủ đạm:</strong> 1.2–1.5g/kg/ngày trong hóa trị/xạ trị để giữ cơ.</li><li><strong>Hạn chế đường tinh luyện & thịt chế biến sẵn.</strong></li></ul>"),
    ("foods-to-eat", "Thực phẩm nên ăn",
     '<div class="food-table"><div class="food-row"><span class="food-cat">🥦 Rau họ cải</span><span>Bông cải xanh, bắp cải, cải xoăn — sulforaphane chống ung thư</span></div><div class="food-row"><span class="food-cat">🫐 Trái cây mọng</span><span>Việt quất, dâu tây, mâm xôi — giàu polyphenol</span></div><div class="food-row"><span class="food-cat">🐟 Cá béo</span><span>Cá hồi, cá thu — omega-3 giảm viêm</span></div><div class="food-row"><span class="food-cat">🫘 Đậu nành</span><span>Đậu hũ, sữa đậu nành — isoflavone an toàn</span></div><div class="food-row"><span class="food-cat">🫒 Dầu olive</span><span>Dầu olive nguyên chất — oleocanthal chống viêm</span></div></div>'),
    ("foods-to-limit", "Thực phẩm cần hạn chế",
     "<ul><li><strong>Rượu bia:</strong> Tăng nguy cơ tái phát</li><li><strong>Thịt đỏ & chế biến sẵn:</strong> Xúc xích, thịt xông khói</li><li><strong>Đường tinh luyện:</strong> Bánh ngọt, nước ngọt</li><li><strong>Chất béo chuyển hóa:</strong> Đồ chiên rán công nghiệp</li><li><strong>Thuốc bổ liều cao:</strong> Không tự ý dùng beta-carotene, vitamin E liều cao</li></ul>"),
    ("faq", "Câu hỏi thường gặp",
     '<details class="faq-item"><summary>Ăn đậu nành có gây ung thư vú không?</summary><p>Không. Nghiên cứu trên hơn 1 triệu phụ nữ cho thấy đậu nành không làm tăng nguy cơ tái phát. Một lượng vừa phải (1-2 phần/ngày) là an toàn.</p></details><details class="faq-item"><summary>Có nên uống nước ép detox?</summary><p>Không. Nước ép mất chất xơ, tăng đường huyết. Không có bằng chứng detox giúp điều trị ung thư.</p></details>'),
    ("summary-reminder", "💡 Nhớ chính",
     '<div class="key-takeaway"><p><strong>3 điều quan trọng:</strong> (1) Duy trì cân nặng khỏe, (2) Hạn chế rượu, (3) Không detox, không thuốc bổ liều cao mà không hỏi bác sĩ.</p></div>'),
])

print("1. ✅ dinh-duong-ung-thu-vu")

# 2. Ung thư đại tràng
write_page('dinh-duong-ung-thu-dai-trang', [
    ("summary", "Tóm tắt", "<p>Ung thư đại trực tràng liên quan chặt chẽ đến chế độ ăn. Dinh dưỡng đúng giúp giảm nguy cơ, hỗ trợ điều trị và phòng tái phát.</p><p>Bài này bao gồm: phòng ngừa, trước mổ, sau mổ, sau hóa trị.</p>"),
    ("diet-principles", "Nguyên tắc dinh dưỡng",
     "<ul><li><strong>Xơ hòa tan:</strong> 25–30g/ngày giảm nguy cơ ung thư đại tràng</li><li><strong>Canxi:</strong> Giàu canxi giảm nguy cơ polyp đại tràng</li><li><strong>Hạn chế thịt đỏ & thịt chế biến:</strong> IARC nhóm 1 (chắc chắn gây ung thư)</li><li><strong>Tránh rượu & thuốc lá</strong></li><li><strong>Sau mổ:</strong> ăn mềm, ít xơ giai đoạn đầu, tăng dần</li></ul>"),
    ("foods-to-eat", "Thực phẩm nên ăn",
     '<div class="food-table"><div class="food-row"><span class="food-cat">🌾 Ngũ cốc nguyên hạt</span><span>Yến mạch, gạo lứt, bánh mì nguyên cám</span></div><div class="food-row"><span class="food-cat">🥬 Rau xanh</span><span>Cải bó xôi, bông cải, măng tây</span></div><div class="food-row"><span class="food-cat">🫘 Đậu & hạt</span><span>Đậu lăng, đậu xanh, hạt óc chó</span></div><div class="food-row"><span class="food-cat">🥛 Canxi</span><span>Sữa chua, sữa tươi, cá mòi, cải xoăn</span></div><div class="food-row"><span class="food-cat">🍎 Trái cây</span><span>Táo, lê, chuối, việt quất</span></div></div>'),
    ("foods-to-limit", "Thực phẩm cần hạn chế",
     "<ul><li><strong>Thịt đỏ:</strong> &lt;500g/tuần (WHO)</li><li><strong>Thịt chế biến:</strong> Xúc xích, thịt xông khói — tránh hoàn toàn</li><li><strong>Rượu bia:</strong> Tăng nguy cơ kể cả ở mức thấp</li><li><strong>Đồ chiên rán, thức ăn nhanh</strong></li></ul>"),
    ("faq", "Câu hỏi thường gặp",
     '<details class="faq-item"><summary>Sau mổ đại tràng có cần kiêng xơ không?</summary><p>2-4 tuần đầu sau mổ nên ăn ít xơ. Sau đó từ từ thêm xơ hòa tan. Sau 2-3 tháng ăn xơ bình thường.</p></details>'),
    ("summary-reminder", "💡 Nhớ chính",
     '<div class="key-takeaway"><p><strong>3 việc quan trọng:</strong> (1) 25g xơ/ngày, (2) Hạn chế thịt đỏ, (3) Nội soi đại tràng sau 50 tuổi.</p></div>'),
])
print("2. ✅ dinh-duong-ung-thu-dai-trang")

# 3-10: Remaining articles (compact versions)
remaining = [
    ("dinh-duong-eczema-viem-da-co-dia",
     "Eczema & Viêm da cơ địa — Dinh dưỡng giảm ngứa, giảm bùng phát",
     [
         ("summary", "Tóm tắt", "<p>Viêm da cơ địa (eczema, atopic dermatitis) là bệnh viêm da mạn tính thường gặp ở trẻ em và người lớn. Dinh dưỡng đóng vai trò hỗ trợ giảm bùng phát ở một số người, đặc biệt là trẻ nhỏ có dị ứng thực phẩm kèm theo.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Xác định thực phẩm kích hoạt:</strong> Sữa bò, trứng, đậu phộng, hải sản, lúa mì — là những dị nguyên thường gặp nhất</li><li><strong>Thử loại trừ:</strong> Loại bỏ 1 nhóm thực phẩm trong 4-6 tuần, ghi nhật ký triệu chứng</li><li><strong>Omega-3:</strong> Cá béo giúp giảm viêm da</li><li><strong>Probiotic:</strong> Có thể hỗ trợ ở trẻ em (còn tranh cãi ở người lớn)</li><li><strong>Kẽm & vitamin D:</strong> Thiếu hụt có thể làm nặng thêm tình trạng da</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🐟 Cá béo</span><span>Cá hồi, cá thu — omega-3 chống viêm</span></div><div class="food-row"><span class="food-cat">🥬 Rau xanh</span><span>Cải bó xôi, bông cải, rau muống</span></div><div class="food-row"><span class="food-cat">💧 Nước</span><span>Uống đủ 1.5-2 lít/ngày — da khô cần đủ nước</span></div></div>'),
         ("foods-to-limit", "Thực phẩm cần thận trọng",
          "<ul><li><strong>Sữa bò:</strong> Dị nguyên hàng đầu ở trẻ eczema</li><li><strong>Trứng:</strong> Phổ biến thứ hai</li><li><strong>Hải sản, đậu phộng, lúa mì</strong></li><li><strong>Phụ gia thực phẩm:</strong> Một số người nhạy cảm</li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Eczema có chữa khỏi bằng ăn kiêng không?</summary><p>Không. Eczema là bệnh đa yếu tố. Dinh dưỡng hỗ trợ giảm triệu chứng ở một số người, nhưng không thay thế kem dưỡng ẩm và thuốc bôi.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>Quan trọng:</strong> Ghi nhật ký ăn uống 4 tuần. Thử loại trừ sữa & trứng trước. Dùng kem dưỡng ẩm đều đặn.</p></div>'),
     ]),
    ("dinh-duong-xo-cung-bi",
     "Xơ cứng bì — Dinh dưỡng cho người bệnh mô liên kết",
     [
         ("summary", "Tóm tắt", "<p>Xơ cứng bì hệ thống (scleroderma) là bệnh tự miễn gây xơ hóa da và các cơ quan nội tạng, đặc biệt là thực quản và đường tiêu hóa. Khó nuốt, trào ngược và kém hấp thu là những thách thức dinh dưỡng lớn nhất.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Thức ăn mềm, dễ nuốt:</strong> Cháo, súp, sinh tố, thực phẩm xay nhuyễn</li><li><strong>Ăn chậm, ngồi thẳng 30 phút sau ăn:</strong> Giảm trào ngược do giảm nhu động thực quản</li><li><strong>Chia nhỏ bữa ăn:</strong> 5-6 bữa/ngày thay vì 3 bữa lớn</li><li><strong>Tránh thực phẩm kích thích trào ngược:</strong> Cay, chua, chiên rán, caffeine, rượu</li><li><strong>Bổ sung vitamin & khoáng chất:</strong> Canxi, vitamin D, sắt, B12 — dễ thiếu do kém hấp thu</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🍚 Cháo/súp</span><span>Cháo thịt bằm, súp gà, súp bí đỏ xay nhuyễn</span></div><div class="food-row"><span class="food-cat">🥤 Sinh tố</span><span>Sinh tố trái cây + sữa chua, sữa hạt</span></div><div class="food-row"><span class="food-cat">🥚 Đạm mềm</span><span>Trứng luộc, đậu hũ non, cá hấp, thịt xay nhuyễn</span></div></div>'),
         ("foods-to-limit", "Thực phẩm cần tránh",
          "<ul><li><strong>Đồ ăn cứng, khô:</strong> Bánh mì giòn, hạt, bỏng ngô</li><li><strong>Đồ cay nóng, chua:</strong> Ớt, giấm, cam, chanh</li><li><strong>Caffeine & rượu:</strong> Làm giảm nhu động thực quản</li><li><strong>Đồ ăn chiên rán nhiều dầu mỡ</strong></li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Xơ cứng bì có cần uống thuốc bổ sung không?</summary><p>Nhiều người cần bổ sung vitamin D, canxi và sắt do kém hấp thu. Xét nghiệm máu định kỳ để biết thiếu gì.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>Quan trọng:</strong> (1) Ăn mềm, (2) Ngồi thẳng 30 phút sau ăn, (3) Chia 5-6 bữa nhỏ. Xét nghiệm máu định kỳ để phát hiện thiếu vi chất.</p></div>'),
     ]),
    ("dinh-duong-viem-xoang",
     "Viêm xoang — Dinh dưỡng giảm viêm, giảm triệu chứng",
     [
         ("summary", "Tóm tắt", "<p>Viêm xoang mạn tính ảnh hưởng đến hàng triệu người. Dinh dưỡng có thể hỗ trợ giảm viêm niêm mạc xoang, giảm dịch nhầy và tăng cường miễn dịch.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Chống viêm:</strong> Omega-3, nghệ, gừng, trái cây giàu vitamin C</li><li><strong>Uống đủ nước:</strong> Giúp loãng dịch nhầy, dễ thoát ra khỏi xoang</li><li><strong>Tránh thực phẩm tăng đờm:</strong> Sữa (ở một số người nhạy cảm), đồ chiên rán, đường tinh luyện</li><li><strong>Giảm histamin:</strong> Nếu có cơ địa dị ứng — thử low-histamine diet</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🧄 Gừng & nghệ</span><span>Pha trà gừng, thêm nghệ vào món ăn — chống viêm mạnh</span></div><div class="food-row"><span class="food-cat">🌶️ Ớt cay (nếu dung nạp)</span><span>Capsaicin giúp thông mũi, giảm tắc xoang</span></div><div class="food-row"><span class="food-cat">🍊 Vitamin C</span><span>Cam, ổi, kiwi, ớt chuông — chống oxy hóa</span></div><div class="food-row"><span class="food-cat">🐟 Omega-3</span><span>Cá hồi, cá thu, hạt chia, hạt lanh</span></div></div>'),
         ("foods-to-limit", "Thực phẩm nên tránh",
          "<ul><li><strong>Sữa & phô mai</strong> (nếu thấy tắc mũi sau ăn)</li><li><strong>Đường tinh luyện & đồ ngọt</strong></li><li><strong>Đồ chiên rán, thức ăn nhanh</strong></li><li><strong>Rượu bia</strong> — làm giãn mạch, tăng nghẹt mũi</li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Bỏ sữa có giúp hết viêm xoang không?</summary><p>Không phải ai cũng nhạy cảm với sữa. Một số người thấy giảm đờm sau khi bỏ sữa. Thử loại bỏ sữa 2 tuần và theo dõi triệu chứng.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>3 việc:</strong> (1) Uống đủ nước, (2) Trà gừng & nghệ mỗi ngày, (3) Rửa mũi bằng nước muối sinh lý đều đặn.</p></div>'),
     ]),
    ("dinh-duong-benh-thien-sach-hemophilia",
     "Bệnh máu khó đông (Hemophilia) — Dinh dưỡng bảo vệ khớp & cơ",
     [
         ("summary", "Tóm tắt", "<p>Hemophilia là rối loạn đông máu di truyền. Người bệnh dễ chảy máu khớp, cơ và nội tạng. Mục tiêu dinh dưỡng: duy trì cân nặng hợp lý để giảm áp lực lên khớp, bổ sung sắt nếu thiếu máu, tránh thực phẩm loãng máu.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Duy trì cân nặng hợp lý:</strong> Thừa cân làm tăng áp lực lên khớp đã tổn thương do chảy máu</li><li><strong>Canxi & vitamin D:</strong> Bảo vệ xương khớp, đặc biệt nếu hạn chế vận động</li><li><strong>Sắt:</strong> Chảy máu mạn có thể gây thiếu máu thiếu sắt — thịt đỏ, rau xanh, đậu</li><li><strong>Tránh thực phẩm loãng máu:</strong> Tỏi liều cao, gừng liều cao, nghệ liều cao, rượu — tham khảo bác sĩ trước khi dùng</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🦴 Canxi</span><span>Sữa, sữa chua, phô mai, cá mòi, cải xoăn</span></div><div class="food-row"><span class="food-cat">🥩 Sắt</span><span>Thịt bò nạc, gan (vừa phải), rau bina, đậu lăng</span></div><div class="food-row"><span class="food-cat">🥬 Rau xanh</span><span>Cải bó xôi, bông cải, măng tây — giàu vitamin K</span></div></div>'),
         ("foods-to-limit", "Thực phẩm cần thận trọng",
          "<ul><li><strong>Tỏi, gừng, nghệ liều cao:</strong> Có thể kéo dài thời gian chảy máu</li><li><strong>Rượu bia:</strong> Tăng nguy cơ chảy máu tiêu hóa</li><li><strong>Thuốc bổ sung:</strong> Omega-3 liều cao, ginkgo biloba, vitamin E liều cao</li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Người hemophilia có nên ăn tỏi không?</summary><p>Tỏi lượng nhỏ (1-2 tép/ngày trong món ăn) an toàn. Tránh tỏi liều cao dưới dạng thực phẩm chức năng.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>Quan trọng:</strong> (1) Duy trì cân nặng hợp lý, (2) Đủ canxi & vitamin D, (3) Tham khảo bác sĩ trước khi dùng bất kỳ thực phẩm chức năng nào.</p></div>'),
     ]),
    ("dinh-duong-sau-nhau-mau-co-tim",
     "Sau nhồi máu cơ tim — Dinh dưỡng phục hồi và dự phòng tái phát",
     [
         ("summary", "Tóm tắt", "<p>Sau nhồi máu cơ tim, mục tiêu dinh dưỡng là: (1) Giảm gánh nặng cho tim, (2) Ngăn tiến triển xơ vữa mạch vành, (3) Kiểm soát huyết áp & mỡ máu, (4) Phục hồi cơ tim.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Giảm muối:</strong> &lt;5g muối/ngày — giảm phù, giảm tăng huyết áp, giảm gánh tim</li><li><strong>Giảm mỡ bão hòa:</strong> Hạn chế mỡ động vật, thay bằng dầu thực vật</li><li><strong>Tăng omega-3:</strong> Cá béo 2-3 lần/tuần — giảm viêm mạch</li><li><strong>Tăng xơ:</strong> Yến mạch, rau, trái cây — giảm hấp thu cholesterol</li><li><strong>Hạn chế đường:</strong> Giảm nguy cơ tiểu đường kèm theo</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🐟 Cá béo</span><span>Cá hồi, cá thu, cá trích — omega-3, 2-3 lần/tuần</span></div><div class="food-row"><span class="food-cat">🥬 Rau xanh</span><span>Cải bó xôi, bông cải, cải xoăn — giàu vitamin K</span></div><div class="food-row"><span class="food-cat">🌾 Yến mạch</span><span>Yến mạch nguyên chất, gạo lứt — giảm cholesterol</span></div><div class="food-row"><span class="food-cat">🫒 Dầu olive</span><span>Dầu olive nguyên chất — chất béo không bão hòa đơn</span></div><div class="food-row"><span class="food-cat">🍎 Trái cây</span><span>Táo, lê, cam, việt quất — giàu chất chống oxy hóa</span></div></div>'),
         ("foods-to-limit", "Thực phẩm cần hạn chế",
          "<ul><li><strong>Muối:</strong> Nước mắm, đồ hộp, xúc xích, snack mặn</li><li><strong>Mỡ bão hòa:</strong> Mỡ heo, mỡ bò, da gà, đồ chiên</li><li><strong>Đường:</strong> Bánh ngọt, nước ngọt, kem</li><li><strong>Thịt đỏ:</strong> Hạn chế, ưu tiên thịt gia cầm & cá</li><li><strong>Rượu bia:</strong> Tối đa 1 ly nhỏ/ngày</li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Sau đau tim có cần kiêng trứng không?</summary><p>Không. Trứng giàu dinh dưỡng, 2-3 quả/tuần an toàn cho hầu hết người bệnh tim mạch.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>3 điều quan trọng:</strong> (1) Dưới 5g muối/ngày, (2) Cá béo 2-3 lần/tuần, (3) Tập thể dục nhẹ theo chỉ dẫn bác sĩ.</p></div>'),
     ]),
    ("dinh-duong-tram-cam",
     "Trầm cảm — Dinh dưỡng kết nối ruột - não giúp cải thiện tâm trạng",
     [
         ("summary", "Tóm tắt", "<p>Ngày càng nhiều bằng chứng cho thấy dinh dưỡng ảnh hưởng trực tiếp đến tâm trạng và sức khỏe tâm thần thông qua trục ruột - não. Chế độ ăn Địa Trung Hải có liên quan đến giảm nguy cơ trầm cảm đến 30%.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Omega-3 (EPA/DHA):</strong> Giảm viêm thần kinh, cải thiện tâm trạng. Nguồn: cá béo, hạt chia, hạt lanh</li><li><strong>Tryptophan:</strong> Tiền chất của serotonin — trứng, sữa, chuối, đậu nành, hạt bí</li><li><strong>Vitamin nhóm B:</strong> Folate, B6, B12 — cần cho tổng hợp neurotransmitter</li><li><strong>Men vi sinh (probiotic):</strong> Hệ vi khuẩn đường ruột ảnh hưởng tâm trạng qua trục não - ruột</li><li><strong>Hạn chế đường tinh luyện:</strong> Đường gây viêm và dao động đường huyết ảnh hưởng tâm trạng</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🐟 Cá béo</span><span>Cá hồi, cá thu, cá mòi — giàu EPA/DHA</span></div><div class="food-row"><span class="food-cat">🥬 Rau lá xanh</span><span>Cải bó xôi, cải xoăn, rau muống — folate</span></div><div class="food-row"><span class="food-cat">🫘 Đậu nành & hạt</span><span>Đậu hũ, hạt bí, hạt óc chó — tryptophan, magie</span></div><div class="food-row"><span class="food-cat">🥛 Sữa chua</span><span>Sữa chua probiotic — lợi khuẩn cho đường ruột</span></div><div class="food-row"><span class="food-cat">🍌 Trái cây</span><span>Chuối, cam, việt quất — vitamin C, B6</span></div></div>'),
         ("foods-to-limit", "Thực phẩm cần hạn chế",
          "<ul><li><strong>Đường tinh luyện:</strong> Bánh ngọt, nước ngọt, kem</li><li><strong>Thực phẩm chế biến sẵn</strong></li><li><strong>Chất béo chuyển hóa</strong></li><li><strong>Rượu bia quá mức</strong></li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Ăn uống có thể thay thế thuốc chống trầm cảm không?</summary><p>Không. Dinh dưỡng hỗ trợ nhưng không thay thế thuốc. Kết hợp dinh dưỡng tốt + tập thể dục + trị liệu tâm lý + thuốc (nếu cần) là chiến lược toàn diện.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>Ăn gì cho tinh thần tốt:</strong> (1) Cá béo 2 lần/tuần, (2) Rau xanh mỗi ngày, (3) Probiotic từ sữa chua, (4) Hạn chế đường. Không bỏ thuốc nếu đang điều trị.</p></div>'),
     ]),
    ("dinh-duong-ma-kinh",
     "Mãn kinh — Dinh dưỡng giảm bốc hỏa, bảo vệ xương & tim mạch",
     [
         ("summary", "Tóm tắt", "<p>Mãn kinh làm giảm estrogen — hormone bảo vệ xương và tim. Dinh dưỡng đúng giúp giảm bốc hỏa, ngăn loãng xương, bảo vệ tim mạch và kiểm soát cân nặng.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Canxi & vitamin D:</strong> 1200mg canxi + 800-1000 IU vitamin D/ngày — chống loãng xương</li><li><strong>Phytoestrogen:</strong> Đậu nành, hạt lanh, mè — có thể giảm bốc hỏa</li><li><strong>Kiểm soát cân nặng:</strong> Chuyển hóa chậm sau mãn kinh — giảm tinh bột tinh chế, tăng đạm</li><li><strong>Bảo vệ tim:</strong> Giảm mỡ bão hòa, tăng omega-3, xơ hòa tan</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ăn",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🫘 Đậu nành</span><span>Đậu hũ, sữa đậu nành, edamame — isoflavone giảm bốc hỏa</span></div><div class="food-row"><span class="food-cat">🦴 Canxi</span><span>Sữa chua, sữa tươi, cá mòi, cải xoăn, đậu hũ</span></div><div class="food-row"><span class="food-cat">🐟 Omega-3</span><span>Cá hồi, cá thu, hạt chia, hạt óc chó</span></div><div class="food-row"><span class="food-cat">🥬 Rau xanh</span><span>Cải bó xôi, bông cải — vitamin K, folate</span></div><div class="food-row"><span class="food-cat">🌾 Ngũ cốc nguyên hạt</span><span>Yến mạch, gạo lứt, bánh mì nguyên cám</span></div></div>'),
         ("foods-to-limit", "Thực phẩm cần hạn chế",
          "<ul><li><strong>Đường & tinh bột tinh chế:</strong> Dễ tăng cân, tăng bốc hỏa</li><li><strong>Rượu & caffeine:</strong> Có thể kích hoạt cơn bốc hỏa</li><li><strong>Đồ ăn cay nóng:</strong> Dễ gây bốc hỏa</li><li><strong>Muối:</strong> Giảm để bảo vệ huyết áp</li></ul>"),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Uống sữa đậu nành mỗi ngày có giúp giảm bốc hỏa không?</summary><p>Nhiều phụ nữ thấy giảm bốc hỏa sau 4-8 tuần uống đều đặn. Hiệu quả khác nhau tùy người. Isoflavone khoảng 50mg/ngày (tương đương 2 ly sữa đậu nành) là liều khuyến nghị.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>3 ưu tiên:</strong> (1) 1200mg canxi + vitamin D mỗi ngày, (2) Đậu nành & hạt lanh giảm bốc hỏa, (3) Kiểm soát cân nặng — chuyển hóa chậm hơn tuổi 30.</p></div>'),
     ]),
    ("dinh-duong-tre-bieng-an-suy-dinh-duong",
     "Trẻ biếng ăn, chậm tăng cân — Dinh dưỡng phục hồi cho trẻ suy dinh dưỡng",
     [
         ("summary", "Tóm tắt", "<p>Biếng ăn ở trẻ em là vấn đề phổ biến và gây lo lắng cho cha mẹ. Khi kéo dài, trẻ có thể bị suy dinh dưỡng, chậm tăng cân, ảnh hưởng phát triển thể chất và trí tuệ. Bài này hướng dẫn cách phục hồi dinh dưỡng cho trẻ biếng ăn từ nhẹ đến nặng.</p>"),
         ("diet-principles", "Nguyên tắc dinh dưỡng",
          "<ul><li><strong>Tăng năng lượng, không tăng khối lượng:</strong> Dùng sữa nguyên kem, thêm dầu/dầu ăn vào cháo, bột</li><li><strong>Đạm chất lượng cao:</strong> Trứng, thịt gà, cá, sữa, đậu hũ</li><li><strong>Chia nhỏ bữa ăn:</strong> 6-7 bữa/ngày thay vì 3 bữa lớn</li><li><strong>Kẽm & vitamin nhóm B:</strong> Thiếu kẽm gây giảm vị giác — bổ sung hàu, thịt bò, hạt bí</li><li><strong>Tạo môi trường ăn tích cực:</strong> Không ép, không la mắng, không màn hình</li></ul>"),
         ("foods-to-eat", "Thực phẩm nên ưu tiên",
          '<div class="food-table"><div class="food-row"><span class="food-cat">🥚 Sữa & trứng</span><span>Sữa nguyên kem, sữa chua, phô mai, trứng — giàu năng lượng & đạm</span></div><div class="food-row"><span class="food-cat">🥩 Thịt & cá</span><span>Thịt gà xay nhuyễn, cá hấp, gan (1 lần/tuần)</span></div><div class="food-row"><span class="food-cat">🥑 Dầu & bơ</span><span>Thêm 1-2 muỗng dầu olive/dầu mè vào cháo, bột</span></div><div class="food-row"><span class="food-cat">🍌 Trái cây</span><span>Chuối, bơ, đu đủ — trộn vào sinh tố</span></div></div>'),
         ("meal-plan", "Gợi ý thực đơn 1 ngày (trẻ 2-5 tuổi)",
          '<div class="meal-table"><div class="meal-row"><span class="meal-time">🍳 Sáng</span><span>Cháo thịt gà + cà rốt, thêm 1 muỗng dầu olive</span></div><div class="meal-row"><span class="meal-time">🥤 Phụ sáng</span><span>1 ly sữa nguyên kem + 1/2 quả chuối</span></div><div class="meal-row"><span class="meal-time">🍚 Trưa</span><span>Cơm mềm + trứng cuộn + canh rau củ nghiền</span></div><div class="meal-row"><span class="meal-time">🥣 Xế</span><span>Sữa chua + đu đủ xay nhuyễn</span></div><div class="meal-row"><span class="meal-time">🥗 Tối</span><span>Cháo cá hồi + bí đỏ, thêm 1 muỗng dầu</span></div></div>'),
         ("faq", "Câu hỏi thường gặp",
          '<details class="faq-item"><summary>Khi nào cần đưa trẻ biếng ăn đi khám?</summary><p>Nếu trẻ sụt cân, không tăng cân trong 3 tháng, bỏ bữa liên tục, nôn trớ, hoặc có dấu hiệu thiếu vi chất (rụng tóc, da khô, mệt mỏi).</p></details><details class="faq-item"><summary>Có nên cho trẻ uống vitamin tổng hợp không?</summary><p>Có thể bổ sung kẽm và vitamin nhóm B trong giai đoạn phục hồi. Hỏi bác sĩ dinh dưỡng để có liều phù hợp.</p></details>'),
         ("summary-reminder", "💡 Nhớ chính",
          '<div class="key-takeaway"><p><strong>4 mẹo vàng:</strong> (1) Thêm 1 muỗng dầu vào mỗi bữa, (2) Chia nhỏ 6-7 bữa, (3) Không ép ăn, (4) Cho trẻ tham gia nấu ăn. Kiên nhẫn — cần 10-15 lần thử trước khi trẻ chấp nhận món mới.</p></div>'),
     ]),
]

for slug, title, sections in remaining:
    write_page(slug, sections)
    print(f"3+. ✅ {slug}")

print("\nAll 10 pages created successfully!")
