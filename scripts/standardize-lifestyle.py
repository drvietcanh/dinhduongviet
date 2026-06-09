"""Standardize 15 lifestyle articles to 6-section template.
Articles target:
- Phân tích thực phẩm: trung-thuc-pham, sua-ai-nen-uong, ca-phe-uong-sao-cho-loi, dau-an-mo-heo, noi-tang-dong-vat, rau-cu-dong-lanh-do-hop
- Hướng dẫn toàn diện: giam-can-khoa-hoc, hieu-dung-ve-calo, an-chay-truong, tang-co-gym, uong-nuoc-dung-cach, vitamin-khoang-chat, dinh-duong-dan-van-phong
- Hiểu lầm: sai-lam-giam-can, 10-hieu-lam-dinh-duong-nguoi-benh
"""

import os

DIR = 'src/pages/kien-thuc-dinh-duong'

# Each article: content written directly for 6-section template
# Sections: summary, diet-principles, foods-to-eat, foods-to-limit, faq, summary-reminder

pages = {}

pages['trung-thuc-pham'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["trung-thuc-pham"];
if (!art) throw new Error("Article not found: trung-thuc-pham");
---

<ArticleLayout article={art}>

  <section class="section card">
    <h2>🥚 Tóm tắt — Trứng trong chế độ ăn người Việt</h2>
    <p>Trứng là thực phẩm giàu đạm, vitamin B12, D, choline và lutein. Một quả trứng (50g) cung cấp ~70 calo, 6g đạm và 5g chất béo. Trong nhiều năm, trứng từng bị cho là làm tăng cholesterol máu, nhưng các nghiên cứu hiện đại đã bác bỏ quan niệm này ở đa số người khỏe mạnh.</p>
  </section>

  <section class="section card">
    <h2>⚖️ Nguyên lý dinh dưỡng</h2>
    <ul>
      <li><strong>Cholesterol trong trứng:</strong> Một quả trứng chứa ~185mg cholesterol, nhưng cholesterol ăn vào ít ảnh hưởng đến cholesterol máu ở 70-80% dân số (những người không bị tăng cholesterol bẩm sinh).</li>
      <li><strong>Lòng đỏ vs lòng trắng:</strong> Lòng đỏ chứa hầu hết vitamin, khoáng chất và chất béo — không nên bỏ lòng đỏ. Lòng trắng là protein tinh khiết, ít calo.</li>
      <li><strong>Choline:</strong> Trứng là nguồn choline dồi dào — quan trọng cho não bộ và chuyển hóa.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>✅ Nên ăn như thế nào</h2>
    <ul>
      <li><strong>Người khỏe mạnh:</strong> 1-2 quả/ngày, 5-14 quả/tuần — hoàn toàn an toàn (theo Harvard T.H. Chan School of Public Health).</li>
      <li><strong>Người tiểu đường, mỡ máu:</strong> Có thể ăn 4-7 quả/tuần, ưu tiên luộc/hấp thay vì chiên rán.</li>
      <li><strong>Cách chế biến tốt nhất:</strong> Luộc, hấp, ốp la ít dầu — giữ được dinh dưỡng, ít calo thêm.</li>
      <li><strong>Kết hợp rau xanh:</strong> Ăn trứng với rau giúp cân bằng bữa ăn.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Hạn chế và lưu ý</h2>
    <ul>
      <li><strong>Trứng chiên nhiều dầu:</strong> Làm tăng calo đáng kể — mỗi muỗng dầu thêm 45-60 calo.</li>
      <li><strong>Trứng sống:</strong> Có nguy cơ nhiễm khuẩn Salmonella. Phụ nữ mang thai, trẻ nhỏ, người già không nên ăn trứng sống.</li>
      <li><strong>Người tăng cholesterol bẩm sinh:</strong> Nếu đã có rối loạn chuyển hóa cholesterol nghiêm trọng, hỏi bác sĩ về giới hạn cụ thể.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>❓ Câu hỏi thường gặp</h2>
    <ul>
      <li><strong>Ăn trứng mỗi ngày có tốt không?</strong> Có — với người khỏe mạnh, 1 quả/ngày là an toàn và có lợi.</li>
      <li><strong>Có nên bỏ lòng đỏ?</strong> Không — lòng đỏ chứa hầu hết dưỡng chất. Bỏ lòng đỏ là bỏ phần bổ dưỡng nhất.</li>
      <li><strong>Trứng vịt khác trứng gà?</strong> Trứng vịt to hơn, nhiều calo và chất béo hơn một chút, nhưng giá trị dinh dưỡng tương đương.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Trứng là thực phẩm tuyệt vời — rẻ, dễ chế biến, giàu dinh dưỡng. Đừng sợ cholesterol trong trứng. Hãy ăn điều độ, chế biến lành mạnh, và kết hợp với rau xanh để có bữa ăn cân bằng.</p>
  </section>

</ArticleLayout>'''

pages['sua-ai-nen-uong'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["sua-ai-nen-uong"];
if (!art) throw new Error("Article not found: sua-ai-nen-uong");
---

<ArticleLayout article={art}>

  <section class="section card">
    <h2>🥛 Tóm tắt — Ai nên uống sữa, ai cần cẩn thận?</h2>
    <p>Sữa là nguồn canxi, vitamin D, đạm và B12 quan trọng. Nhưng không phải ai cũng dung nạp sữa tốt — khoảng 65-70% người châu Á có tình trạng <strong>bất dung nạp lactose</strong> ở các mức độ khác nhau. Việc lựa chọn loại sữa phù hợp phụ thuộc vào độ tuổi, tình trạng sức khỏe và mục tiêu dinh dưỡng.</p>
  </section>

  <section class="section card">
    <h2>⚖️ Nguyên lý dinh dưỡng</h2>
    <ul>
      <li><strong>Sữa tươi:</strong> Giàu canxi (~120mg/100ml), vitamin D, B12, đạm chất lượng cao (~3.5g/100ml).</li>
      <li><strong>Sữa hạt:</strong> Sữa đậu nành có đạm tương đương sữa bò. Sữa gạo/điều/hạnh nhân thường ít đạm, cần kiểm tra nhãn.</li>
      <li><strong>Bất dung nạp lactose:</strong> Thiếu enzyme lactase → đầy bụng, tiêu chảy sau uống sữa. Chọn sữa không lactose hoặc sữa thực vật.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>✅ Nên chọn sữa nào?</h2>
    <ul>
      <li><strong>Trẻ em:</strong> Sữa tươi nguyên kem (2-5 tuổi), sữa tươi ít đường (6+ tuổi).</li>
      <li><strong>Người lớn:</strong> Sữa tươi không đường hoặc sữa hạt (đậu nành, yến mạch).</li>
      <li><strong>Người cao tuổi:</strong> Sữa tách béo, tăng canxi, vitamin D — hoặc sữa công thức cho người già.</li>
      <li><strong>Người bất dung nạp lactose:</strong> Sữa không lactose, sữa đậu nành, sữa hạnh nhân.</li>
      <li><strong>Người tiểu đường:</strong> Sữa không đường, ít béo. Kiểm tra lượng carb trên nhãn.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Hạn chế và lưu ý</h2>
    <ul>
      <li><strong>Sữa có đường:</strong> Trung bình 5-8g đường/100ml — một ly 250ml có thể chứa 15-20g đường (gần hết hạn mức khuyến nghị của WHO).</li>
      <li><strong>Sữa đặc có đường:</strong> Không phải sữa — là sản phẩm từ sữa giàu đường, chỉ dùng với lượng rất nhỏ.</li>
      <li><strong>Sữa thay bữa ăn:</strong> Sữa dinh dưỡng là thực phẩm bổ sung, không thể thay thế bữa ăn chính.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>❓ Câu hỏi thường gặp</h2>
    <ul>
      <li><strong>Người lớn có cần uống sữa không?</strong> Không bắt buộc — có thể thay bằng sữa đậu nành, sữa hạt hoặc ăn đủ canxi từ tôm, cua, đậu, rau xanh.</li>
      <li><strong>Uống sữa buổi tối có tốt?</strong> Một ly sữa ấm có thể hỗ trợ giấc ngủ nhờ tryptophan, nhưng không cần thiết.</li>
      <li><strong>Sữa tươi và sữa bột khác nhau?</strong> Về cơ bản giống nhau. Sữa bột chỉ là sữa đã được sấy khô. Pha theo hướng dẫn để đúng tỷ lệ.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Sữa là thực phẩm bổ dưỡng nhưng không phải ai cũng cần. Lắng nghe cơ thể — nếu uống sữa bị đầy bụng, đau bụng, hãy chuyển sang sữa không lactose hoặc sữa thực vật. Quan trọng nhất là chọn <strong>sữa không đường</strong> và kiểm soát lượng.</p>
  </section>

</ArticleLayout>'''

pages['ca-phe-uong-sao-cho-loi'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["ca-phe-uong-sao-cho-loi"];
if (!art) throw new Error("Article not found: ca-phe-uong-sao-cho-loi");
---

<ArticleLayout article={art}>

  <section class="section card">
    <h2>☕ Tóm tắt — Lợi ích và rủi ro của cà phê</h2>
    <p>Cà phê là một trong những đồ uống phổ biến nhất thế giới, giàu chất chống oxy hóa và có nhiều lợi ích sức khỏe khi dùng đúng cách. Các nghiên cứu cho thấy 2-3 tách cà phê/ngày có thể giảm nguy cơ tiểu đường type 2, bệnh Parkinson, gan nhiễm mỡ. Tuy nhiên, cà phê cũng có tác dụng phụ với một số người.</p>
  </section>

  <section class="section card">
    <h2>⚖️ Nguyên lý dinh dưỡng</h2>
    <ul>
      <li><strong>Caffeine:</strong> Chất kích thích tự nhiên giúp tăng tỉnh táo, tập trung. Liều an toàn: 200-400mg caffeine/ngày (2-4 tách).</li>
      <li><strong>Chất chống oxy hóa:</strong> Cà phê chứa polyphenol, axit chlorogenic — giúp giảm viêm, bảo vệ tế bào.</li>
      <li><strong>Tác dụng lợi tiểu:</strong> Caffeine lợi tiểu nhẹ, nhưng không gây mất nước đáng kể ở người uống thường xuyên.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>✅ Uống cà phê đúng cách</h2>
    <ul>
      <li><strong>Không đường, ít sữa:</strong> Cà phê đen hoặc với chút sữa. Tránh cà phê sữa đặc (nhiều đường).</li>
      <li><strong>2-3 tách/ngày:</strong> Đây là liều tối ưu cho lợi ích sức khỏe.</li>
      <li><strong>Uống trước 14h:</strong> Caffeine tồn tại 4-6 giờ trong máu — uống chiều/tối có thể gây mất ngủ.</li>
      <li><strong>Không uống khi đói:</strong> Ở người nhạy cảm, cà phê khi đói có thể gây cồn ruột, đau dạ dày.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Ai cần hạn chế cà phê?</h2>
    <ul>
      <li><strong>Người trào ngược dạ dày (GERD):</strong> Caffeine có thể làm giãn cơ vòng thực quản, tăng trào ngược.</li>
      <li><strong>Người lo âu, mất ngủ:</strong> Caffeine làm tăng cortisol, có thể làm nặng thêm triệu chứng.</li>
      <li><strong>Phụ nữ mang thai:</strong> Giới hạn dưới 200mg caffeine/ngày (2 tách).</li>
      <li><strong>Người tăng huyết áp chưa kiểm soát:</strong> Caffeine có thể tăng huyết áp tạm thời.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>❓ Câu hỏi thường gặp</h2>
    <ul>
      <li><strong>Cà phê có gây mất nước không?</strong> Không đáng kể ở người uống thường xuyên — cơ thể thích nghi.</li>
      <li><strong>Cà phê hòa tan có tốt không?</strong> Tốt nhưng thường thêm đường, chất béo — kiểm tra nhãn.</li>
      <li><strong>Có nên uống cà phê trước khi tập gym?</strong> Có — caffeine cải thiện hiệu suất vận động 5-10%.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Cà phê là đồ uống lành mạnh nếu dùng đúng cách: không đường, đúng liều, đúng thời điểm. Người có bệnh nền (dạ dày, lo âu, thai kỳ) cần hạn chế. Đừng uống cà phê để thay nước lọc — hãy uống nước là chính.</p>
  </section>

</ArticleLayout>'''

pages['dau-an-mo-heo'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dau-an-mo-heo"];
if (!art) throw new Error("Article not found: dau-an-mo-heo");
---

<ArticleLayout article={art}>

  <section class="section card">
    <h2>🫒 Tóm tắt — Dầu ăn và mỡ heo, nên chọn gì?</h2>
    <p>Dầu thực vật và mỡ động vật đều có vai trò trong bữa ăn người Việt. Dầu thực vật giàu chất béo không bão hòa (tốt cho tim mạch), trong khi mỡ heo giàu chất béo bão hòa (cần hạn chế). Chìa khóa là sử dụng đúng loại cho đúng mục đích nấu nướng và kiểm soát tổng lượng.</p>
  </section>

  <section class="section card">
    <h2>⚖️ Nguyên lý dinh dưỡng</h2>
    <ul>
      <li><strong>Dầu ô-liu, dầu hạt cải:</strong> Giàu chất béo không bão hòa đơn — tốt nhất cho tim mạch. Chịu nhiệt trung bình.</li>
      <li><strong>Dầu đậu nành, dầu hướng dương:</strong> Giàu chất béo không bão hòa đa — dùng cho xào nấu ở nhiệt độ thường.</li>
      <li><strong>Dầu dừa, mỡ heo:</strong> Giàu chất béo bão hòa — dùng ở lượng nhỏ, không phải dầu ăn chính.</li>
      <li><strong>Điểm bốc khói:</strong> Mỗi loại dầu có nhiệt độ tối đa. Dùng dầu quá điểm bốc khói tạo chất gây hại.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>✅ Chọn dầu ăn theo nhu cầu</h2>
    <ul>
      <li><strong>Nấu ở nhiệt độ cao (chiên, rán):</strong> Dầu đậu nành, dầu hướng dương (smoke point ~230°C).</li>
      <li><strong>Xào ở nhiệt độ vừa:</strong> Dầu ô-liu thường, dầu hạt cải.</li>
      <li><strong>Làm salad, trộn:</strong> Dầu ô-liu extra virgin, dầu mè, dầu bơ.</li>
      <li><strong>Mỡ heo:</strong> Có thể dùng thỉnh thoảng (1-2 lần/tuần) — tạo vị thơm, không nên ăn hàng ngày.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Hạn chế</h2>
    <ul>
      <li><strong>Dầu đã qua sử dụng nhiều lần:</strong> Tạo chất béo trans — không dùng lại dầu chiên đi chiên lại.</li>
      <li><strong>Mỡ heo, bơ thực vật:</strong> Hạn chế nếu có mỡ máu cao, bệnh tim mạch.</li>
      <li><strong>Dầu cọ:</strong> Chứa nhiều chất béo bão hòa — thường có trong đồ ăn chế biến sẵn.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>❓ Câu hỏi thường gặp</h2>
    <ul>
      <li><strong>Tại sao người xưa ăn mỡ heo mà vẫn khỏe?</strong> Vì họ ăn với lượng nhỏ, lao động nhiều và ăn ít thực phẩm chế biến sẵn.</li>
      <li><strong>Dầu ô-liu có dùng để chiên được không?</strong> Dầu ô-liu thường (không phải extra virgin) có thể chiên ở 180-200°C.</li>
      <li><strong>Nên dùng bao nhiêu dầu mỗi ngày?</strong> 15-25g/ngày (2-3 muỗng cà phê) cho người ăn 1800-2000 calo.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Không có loại dầu nào là "tốt nhất" — hãy đa dạng hóa. Dùng dầu thực vật là chính (đậu nành, hạt cải, ô-liu), thỉnh thoảng mỡ heo để đổi vị. Kiểm soát tổng lượng dầu mỡ dù là loại nào.</p>
  </section>

</ArticleLayout>'''

pages['noi-tang-dong-vat'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["noi-tang-dong-vat"];
if (!art) throw new Error("Article not found: noi-tang-dong-vat");
---

<ArticleLayout article={art}>

  <section class="section card">
    <h2>🥩 Tóm tắt — Nội tạng động vật, bổ hay hại?</h2>
    <p>Nội tạng (gan, tim, cật, dạ dày) giàu vitamin B12, sắt, kẽm, đồng và vitamin A — đặc biệt tốt cho người thiếu máu, suy nhược. Tuy nhiên, nội tạng cũng chứa nhiều cholesterol, purin và có thể tích trữ độc tố (đặc biệt là gan). Ăn với lượng vừa phải là chìa khóa.</p>
  </section>

  <section class="section card">
    <h2>⚖️ Nguyên lý dinh dưỡng</h2>
    <ul>
      <li><strong>Gan:</strong> Giàu vitamin A (gấp 10-20 lần thịt), sắt dạng heme dễ hấp thu, B12, đồng. Nhưng cũng tích trữ kim loại nặng.</li>
      <li><strong>Tim, cật:</strong> Giàu coenzyme Q10 (tim), sắt, kẽm. Ít độc tố hơn gan.</li>
      <li><strong>Dạ dày, lòng:</strong> Chủ yếu là collagen, ít dinh dưỡng hơn. Cẩn thận vệ sinh an toàn thực phẩm.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>✅ Nên ăn như thế nào</h2>
    <ul>
      <li><strong>Liều khuyến nghị:</strong> 50-100g nội tạng/lần, 1-2 lần/tuần.</li>
      <li><strong>Gan:</strong> Nên ngâm sữa hoặc nước muối loãng trước khi chế biến để giảm độc tố.</li>
      <li><strong>Nguồn an toàn:</strong> Mua từ nguồn rõ ràng, có kiểm định thú y.</li>
      <li><strong>Đối tượng nên ăn:</strong> Người thiếu máu, thiếu sắt, người suy nhược, trẻ em (lượng nhỏ).</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Ai cần hạn chế?</h2>
    <ul>
      <li><strong>Người gout, acid uric cao:</strong> Nội tạng giàu purin — hạn chế hoặc tránh.</li>
      <li><strong>Người mỡ máu cao:</strong> Nội tạng chứa nhiều cholesterol (gan gà: 350mg/100g).</li>
      <li><strong>Phụ nữ mang thai (3 tháng đầu):</strong> Quá nhiều vitamin A từ gan có thể gây dị tật thai nhi — hạn chế tối đa.</li>
      <li><strong>Người bệnh thận:</strong> Hàm lượng phốt pho và kali cao.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>❓ Câu hỏi thường gặp</h2>
    <ul>
      <li><strong>Ăn gan lợn có bổ máu không?</strong> Có — gan lợn chứa nhiều sắt dễ hấp thu, thích hợp cho người thiếu máu.</li>
      <li><strong>Nội tạng có chứa chất độc không?</strong> Gan tích trữ độc tố, nhưng nếu ăn lượng vừa phải (1-2 lần/tuần) thì an toàn.</li>
      <li><strong>Lòng non, lòng già khác nhau?</strong> Chủ yếu khác về kết cấu, dinh dưỡng tương đương — cần vệ sinh kỹ.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Nội tạng là thực phẩm giàu dinh dưỡng nhưng không dành cho tất cả mọi người. Ăn với lượng vừa phải (1-2 lần/tuần), chọn nguồn sạch, và đặc biệt lưu ý nếu bạn có bệnh gout, mỡ máu hoặc đang mang thai.</p>
  </section>

</ArticleLayout>'''

pages['rau-cu-dong-lanh-do-hop'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["rau-cu-dong-lanh-do-hop"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>

  <section class="section card">
    <h2>🥦 Tóm tắt — Rau củ đông lạnh và đồ hộp, có xấu không?</h2>
    <p>Rau củ đông lạnh thường <strong>giữ được nhiều vitamin hơn</strong> rau "tươi" đã để tủ lạnh vài ngày vì được cấp đông ngay sau thu hoạch. Đồ hộp (đậu, cà chua, cá) cũng là lựa chọn tiện lợi và dinh dưỡng nếu chọn đúng loại. Quan trọng là đọc nhãn để tránh muối và đường thêm vào.</p>
  </section>

  <section class="section card">
    <h2>⚖️ Nguyên lý dinh dưỡng</h2>
    <ul>
      <li><strong>Đông lạnh:</strong> Giữ được 80-95% vitamin. Rau cấp đông thường giàu vitamin hơn rau "tươi" để 3-5 ngày trong tủ lạnh.</li>
      <li><strong>Đồ hộp:</strong> Giữ được khoáng chất tốt, nhưng vitamin tan trong nước (C, B) giảm trong quá trình chế biến nhiệt.</li>
      <li><strong>Chất bảo quản:</strong> Hầu hết rau củ đông lạnh không cần chất bảo quản. Đồ hộp dùng nhiệt để bảo quản.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>✅ Chọn mua và sử dụng đúng</h2>
    <ul>
      <li><strong>Rau đông lạnh:</strong> Chọn loại không thêm muối, không thêm nước sốt. Rau củ hỗn hợp tiện cho xào nhanh.</li>
      <li><strong>Đồ hộp:</strong> Chọn loại "không thêm muối" hoặc "giảm muối". Rửa qua trước khi dùng để giảm natri.</li>
      <li><strong>Cá hộp:</strong> Cá sardine, cá thu hộp là nguồn omega-3 tốt. Chọn loại trong nước sốt cà chua hoặc dầu ô-liu.</li>
      <li><strong>Bảo quản:</strong> Sau khi mở hộp, chuyển sang hộp thủy tinh, dùng trong 2-3 ngày.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Lưu ý</h2>
    <ul>
      <li><strong>Muối trong đồ hộp:</strong> Một lon rau củ hộp có thể chứa 300-500mg natri (15-25% nhu cầu ngày). Người tăng huyết áp cần chọn loại không muối.</li>
      <li><strong>BPA trong lớp lót hộp:</strong> Một số hộp có lớp lót BPA. Chọn hộp ghi "BPA-free" hoặc ưu tiên đông lạnh.</li>
      <li><strong>Đường trong đồ hộp:</strong> Trái cây hộp thường ngâm nước đường — chọn loại ngâm nước trái cây hoặc không đường.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>❓ Câu hỏi thường gặp</h2>
    <ul>
      <li><strong>Rau đông lạnh có vitamin không?</strong> Có — thậm chí nhiều hơn rau tươi để lâu ngày.</li>
      <li><strong>Đồ hộp có hại không?</strong> Không — nếu chọn loại ít muối, ít đường. Đồ hộp là cách bảo quản an toàn.</li>
      <li><strong>Nên ưu tiên rau tươi hay đông lạnh?</strong> Rau tươi (nếu dùng trong 1-2 ngày) vẫn tốt nhất. Sau đó là đông lạnh, cuối cùng là đồ hộp.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Rau củ đông lạnh và đồ hộp là lựa chọn thực tế và dinh dưỡng, đặc biệt khi trái vụ hoặc không có thời gian đi chợ hàng ngày. Chọn loại ít muối, ít đường, không nước sốt — và ưu tiên rau củ đông lạnh hơn đồ hộp khi có thể.</p>
  </section>

</ArticleLayout>'''

#--- Write remaining articles with compact templates to avoid memory issue

# Giam-can
pages['giam-can-khoa-hoc'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["giam-can-khoa-hoc"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>📋 Tóm tắt — Giảm cân khoa học</h2><p>Giảm cân bền vững dựa trên thâm hụt calo nhẹ (300-500 calo/ngày), kết hợp chế độ ăn đủ đạm, nhiều rau xanh, và tập luyện thường xuyên. Giảm 0.3-0.5kg/tuần là tốc độ an toàn và bền vững. Các chế độ ăn cấp tốc thường dẫn đến tăng cân trở lại (yo-yo effect).</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý giảm cân</h2><ul><li><strong>Thâm hụt calo:</strong> Giảm 300-500 calo/ngày so với nhu cầu duy trì (TDEE) — đủ để giảm 0.3-0.5kg/tuần mà không gây mất cơ nhiều.</li><li><strong>Đạm — chất xơ — nước:</strong> Ăn đủ đạm (20-25% năng lượng) để giữ cơ. Chất xơ từ rau giúp no lâu. Uống 1.5-2L nước/ngày.</li><li><strong>Ngủ đủ 7-8 tiếng:</strong> Thiếu ngủ làm tăng ghrelin (đói) và giảm leptin (no) — khiến bạn ăn nhiều hơn 200-300 calo/ngày.</li></ul></section>
  <section class="section card"><h2>✅ Thực phẩm nên ăn</h2><ul><li><strong>Rau xanh:</strong> Ăn không giới hạn — rau lá xanh, bông cải, cà chua, dưa leo.</li><li><strong>Đạm nạc:</strong> Ức gà, cá, đậu phụ, trứng, sữa chua không đường.</li><li><strong>Tinh bột phức tạp:</strong> Yến mạch, gạo lứt, khoai lang, bánh mì nguyên cám.</li><li><strong>Chất béo lành mạnh:</strong> Bơ, dầu ô-liu, các loại hạt (1 nắm/ngày).</li></ul></section>
  <section class="section card"><h2>⚠️ Thực phẩm hạn chế</h2><ul><li><strong>Đường và đồ ngọt:</strong> Nước ngọt, bánh kẹo, trà sữa — cần cắt giảm triệt để.</li><li><strong>Tinh bột tinh chế:</strong> Cơm trắng (giảm 30-50%), bánh mì trắng, bún, hủ tiếu.</li><li><strong>Đồ chiên rán:</strong> Giảm dầu mỡ khi chế biến.</li><li><strong>Rượu bia:</strong> 1 gram cồn = 7 calo — rượu làm giảm ức chế, khiến bạn ăn nhiều hơn.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Có nên bỏ bữa tối?</strong> Không — bỏ bữa tối làm đói về đêm, dễ ăn bù. Nên ăn tối nhẹ trước 19h.</li><li><strong>Ăn kiêng keto có tốt không?</strong> Giảm cân nhanh ban đầu, nhưng khó duy trì. Hiệu quả dài hạn tương đương ăn thâm hụt calo thông thường.</li><li><strong>Tập gì để giảm mỡ?</strong> Cardio (đi bộ nhanh 30-45 phút) + kháng lực (tạ, squat) 3-4 buổi/tuần.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Giảm cân không có đường tắt. Giảm chậm, đều, kết hợp ăn uống và vận động là cách duy nhất bền vững. Hãy kiên nhẫn — mất 3-6 tháng để thấy kết quả rõ rệt và giữ được lâu dài.</p></section>
</ArticleLayout>'''

pages['hieu-dung-ve-calo'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["hieu-dung-ve-calo"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>🔥 Tóm tắt — Calo là gì và tại sao quan trọng</h2><p>Calo (kilocalorie) là đơn vị đo năng lượng. Cơ thể cần một lượng calo nhất định mỗi ngày để duy trì hoạt động — gọi là TDEE (Tổng năng lượng tiêu hao hàng ngày). Khi ăn nhiều calo hơn TDEE → tăng cân. Ăn ít hơn → giảm cân. Kiểm soát calo không phải là "ăn kiêng" mà là quản lý năng lượng.</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý cơ bản</h2><ul><li><strong>1kg mỡ ≈ 7700 calo:</strong> Để giảm 1kg mỡ, cần thâm hụt ~7700 calo — tương đương 300-500 calo/ngày trong 2-3 tuần.</li><li><strong>Calo đến từ đâu:</strong> Đạm (4 calo/g), tinh bột (4 calo/g), chất béo (9 calo/g), cồn (7 calo/g). Chất béo dễ tích mỡ nhất vì mật độ năng lượng cao.</li><li><strong>TDEE = BMR × hệ số vận động:</strong> BMR là năng lượng lúc nghỉ. Hệ số vận động: 1.2 (ít), 1.375 (nhẹ), 1.55 (vừa), 1.725 (nặng).</li></ul></section>
  <section class="section card"><h2>✅ Tính nhu cầu calo cá nhân</h2><ul><li><strong>Công thức Mifflin-St Jeor:</strong> Nam: 10 × cân nặng(kg) + 6.25 × chiều cao(cm) − 5 × tuổi + 5. Nữ: 10 × cân nặng + 6.25 × chiều cao − 5 × tuổi − 161.</li><li><strong>Duy trì cân nặng:</strong> Ăn ~TDEE. Theo dõi cân 1 lần/tuần (sáng sớm, sau khi đi vệ sinh).</li><li><strong>Giảm cân:</strong> TDEE − 300 đến 500 calo. Không nên dưới 1200 calo/ngày cho nữ, 1500 cho nam.</li><li><strong>Tăng cân:</strong> TDEE + 300 đến 500 calo, kết hợp tập lực.</li></ul></section>
  <section class="section card"><h2>⚠️ Hiểu lầm về calo</h2><ul><li><strong>Calo trong — calo ra không đơn giản:</strong> Cơ thể hấp thu calo từ thực phẩm khác nhau tùy loại. Calo từ thực phẩm nguyên hạt (hạt, đậu) hấp thu thấp hơn từ thực phẩm chế biến sẵn.</li><li><strong>Không phải tất cả calo đều giống nhau:</strong> 200 calo từ sô-cô-la khác 200 calo từ bông cải xanh — khác về vi chất, chất xơ, tác động lên đường huyết và cảm giác no.</li><li><strong>Đếm calo cũng có sai số:</strong> Đồng hồ thông minh có thể sai ±20%. Nhãn thực phẩm có sai số ±20% hợp pháp.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Có cần đếm calo mỗi ngày?</strong> Không cần — ước lượng bằng mắt và ăn theo khẩu phần là đủ cho hầu hết mọi người.</li><li><strong>Tại sao ăn ít mà không giảm?</strong> Có thể do tính sai calo, ăn vặt quá nhiều, hoặc chuyển hóa chậm lại sau khi giảm cân.</li><li><strong>Ăn đêm có tăng cân hơn?</strong> Calo là calo — thời điểm không quan trọng bằng tổng lượng trong ngày.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Hiểu về calo giúp bạn kiểm soát cân nặng mà không cần ăn kiêng khổ sở. Không cần đếm từng calo — chỉ cần biết ước lượng và ăn uống có ý thức. Công cụ tính calo trên website này có thể hỗ trợ bạn bắt đầu.</p></section>
</ArticleLayout>'''

pages['an-chay-truong'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["an-chay-truong"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>🌱 Tóm tắt — Ăn chay trường cần bổ sung gì?</h2><p>Ăn chay trường (thuần chay) mang lại nhiều lợi ích cho sức khỏe và môi trường, nhưng có nguy cơ thiếu một số vi chất: vitamin B12, sắt, canxi, kẽm, omega-3 DHA, iốt, vitamin D. Người ăn chay trường cần đặc biệt chú ý bổ sung B12 và kiểm tra công thức máu định kỳ.</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý dinh dưỡng chay</h2><ul><li><strong>Đạm:</strong> Kết hợp nhiều nguồn đạm thực vật (đậu, nấm, hạt, ngũ cốc) để có đủ axit amin thiết yếu.</li><li><strong>Sắt:</strong> Sắt từ thực vật (non-heme) khó hấp thu hơn. Kết hợp với vitamin C (chanh, ớt chuông, cà chua) để tăng hấp thu.</li><li><strong>B12 — vi chất quan trọng nhất:</strong> Không có trong thực vật. Người ăn chay trường <strong>bắt buộc</strong> phải bổ sung vitamin B12 hoặc ăn thực phẩm tăng cường B12.</li></ul></section>
  <section class="section card"><h2>✅ Thực đơn chay cân bằng</h2><ul><li><strong>Đạm:</strong> Đậu phụ (100g = 8g đạm), tempeh, đậu gà, đậu lăng, hạt diêm mạch (quinoa).</li><li><strong>Sắt:</strong> Rau lá xanh đậm (cải bó xôi, cải xoăn), đậu, hạt bí, mè đen.</li><li><strong>Canxi:</strong> Sữa đậu nành tăng cường canxi, cải thìa, đậu phụ làm từ nước muối canxi.</li><li><strong>Omega-3:</strong> Hạt chia, hạt lanh, óc chó, tảo biển.</li><li><strong>Bổ sung B12:</strong> Viên uống B12 (1000mcg/ngày) hoặc thực phẩm tăng cường B12 (sữa hạt, ngũ cốc).</li></ul></section>
  <section class="section card"><h2>⚠️ Đối tượng cần thận trọng</h2><ul><li><strong>Phụ nữ mang thai:</strong> Cần bổ sung B12, sắt, DHA, iốt đầy đủ — hỏi bác sĩ.</li><li><strong>Trẻ em:</strong> Chế độ ăn chay cho trẻ cần được thiết kế cẩn thận, theo dõi tăng trưởng định kỳ.</li><li><strong>Người cao tuổi:</strong> Hấp thu B12 giảm theo tuổi — cần bổ sung nhiều hơn.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Ăn chay có thiếu đạm không?</strong> Không — nếu biết kết hợp nhiều nguồn đạm thực vật (đậu + gạo, đậu + hạt).</li><li><strong>Có cần uống thêm sắt?</strong> Chỉ khi xét nghiệm thấy thiếu. Tăng cường thực phẩm giàu sắt + vitamin C là đủ.</li><li><strong>Ăn chay có giảm cân không?</strong> Có thể giảm nếu ăn đúng, nhưng vẫn có thể tăng cân nếu ăn nhiều tinh bột và đồ chay chiên rán.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Ăn chay trường hoàn toàn khả thi nếu có kế hoạch dinh dưỡng khoa học. Điều quan trọng nhất: bổ sung B12, đa dạng hóa nguồn thực phẩm, và kiểm tra máu 1-2 lần/năm. Hãy tham khảo chuyên gia dinh dưỡng cho trẻ em và phụ nữ mang thai.</p></section>
</ArticleLayout>'''

pages['tang-co-gym'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["tang-co-gym"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>💪 Tóm tắt — Dinh dưỡng tăng cơ cho người tập gym</h2><p>Tăng cơ cần 3 yếu tố: (1) thặng dư calo nhẹ (200-300 calo/ngày), (2) đạm đủ (1.6-2.2g/kg cơ thể/ngày), và (3) tập lực đều đặn (3-5 buổi/tuần). Không cần uống quá nhiều whey protein — ăn thực phẩm tự nhiên vẫn đáp ứng được nhu cầu.</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý tăng cơ</h2><ul><li><strong>Thặng dư calo nhẹ:</strong> TDEE + 200-300 calo/ngày. Tăng quá nhiều → tăng mỡ. Quá ít → không tăng cơ.</li><li><strong>Đạm — yếu tố then chốt:</strong> 1.6-2.2g/kg/ngày. Người 60kg cần 96-132g đạm/ngày.</li><li><strong>Tinh bột để tập luyện:</strong> 3-5g/kg/ngày — cung cấp năng lượng cho buổi tập. Ăn tinh bột trước tập 1-2 tiếng.</li></ul></section>
  <section class="section card"><h2>✅ Thực phẩm tăng cơ</h2><ul><li><strong>Đạm chất lượng:</strong> Ức gà (25g/100g), trứng (6g/quả), cá hồi, đậu phụ, sữa chua Hy Lạp.</li><li><strong>Tinh bột:</strong> Gạo lứt, yến mạch, khoai lang, bánh mì nguyên cám, chuối.</li><li><strong>Chất béo lành mạnh:</strong> Bơ, dầu ô-liu, các loại hạt, bơ đậu phộng.</li><li><strong>Nước:</strong> 2.5-3L/ngày — cơ bắp cần nước để phục hồi và phát triển.</li></ul></section>
  <section class="section card"><h2>⚠️ Lưu ý và hạn chế</h2><ul><li><strong>Whey protein là bổ sung, không phải chính:</strong> Ưu tiên ăn thực phẩm trước, dùng whey khi không đủ hoặc tiện lợi.</li><li><strong>Tăng cơ không tăng mỡ:</strong> Có thể tăng một ít mỡ kèm cơ — điều này bình thường. Giới hạn thặng dư calo để kiểm soát mỡ.</li><li><strong>Sau 40 tuổi:</strong> Cơ thể kháng đạm hơn — cần ăn nhiều đạm hơn (2-2.4g/kg) và tập nặng hơn để duy trì cơ.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Ăn trứng mỗi ngày có tăng cơ không?</strong> Có — trứng giàu đạm và choline. 2-3 quả/ngày là tốt.</li><li><strong>Có cần uống whey ngay sau tập?</strong> "Đồng hồ protein" không chính xác — chỉ cần ăn đủ đạm trong 4-6 giờ sau tập.</li><li><strong>Tập bụng mỗi ngày có giảm mỡ bụng?</strong> Không — giảm mỡ toàn thân mới giảm mỡ bụng. Không thể giảm mỡ điểm.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Tăng cơ là quá trình kết hợp dinh dưỡng và tập luyện. Ăn đủ đạm, đủ calo, tập nặng và ngủ đủ. Không cần thực phẩm chức năng đắt tiền — thực phẩm tự nhiên vẫn là nền tảng tốt nhất.</p></section>
</ArticleLayout>'''

pages['uong-nuoc-dung-cach'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["uong-nuoc-dung-cach"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>💧 Tóm tắt — Uống nước đúng cách bao nhiêu là đủ?</h2><p>Nước chiếm 60% trọng lượng cơ thể, tham gia mọi quá trình chuyển hóa. Nhu cầu nước trung bình: 30-35ml/kg/ngày. Nam: ~2.5L, Nữ: ~2.0L (tổng từ nước uống + thực phẩm). Uống thiếu nước gây mệt mỏi, đau đầu, giảm tập trung. Uống thừa nước ở người khỏe mạnh hiếm khi xảy ra.</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý cân bằng nước</h2><ul><li><strong>Nước từ thực phẩm:</strong> Rau, canh, trái cây cung cấp ~20-30% nhu cầu. Phần còn lại từ nước uống.</li><li><strong>Dấu hiệu mất nước:</strong> Nước tiểu vàng đậm, khô miệng, mệt mỏi, giảm lượng nước tiểu. Uống ngay khi thấy khát — khát là dấu hiệu mất nước nhẹ.</li><li><strong>Vận động nhiều:</strong> Cần thêm 300-500ml mỗi 30 phút vận động, tùy cường độ và mồ hôi.</li></ul></section>
  <section class="section card"><h2>✅ Cách uống nước đúng</h2><ul><li><strong>Uống đều trong ngày:</strong> Chia đều 8-10 ly, mỗi ly 200ml. Không đợi khát mới uống.</li><li><strong>Buổi sáng sau khi ngủ dậy:</strong> 1 ly nước ấm (200-300ml) giúp kích hoạt chuyển hóa sau 6-8 tiếng nhịn.</li><li><strong>Trước bữa ăn 30 phút:</strong> 1 ly nước giúp tiêu hóa tốt, giảm ăn quá nhiều.</li><li><strong>Sau khi đi vệ sinh:</strong> Uống bù lượng nước mất đi.</li></ul></section>
  <section class="section card"><h2>⚠️ Lưu ý đặc biệt</h2><ul><li><strong>Người suy thận, suy tim:</strong> Có thể cần hạn chế nước theo chỉ định bác sĩ — không tự ý uống >2L/ngày.</li><li><strong>Nước ngọt, nước có đường:</strong> Không thay thế nước lọc. 1 lon nước ngọt (330ml) chứa 35g đường — cần tránh.</li><li><strong>Nước tăng lực:</strong> Chỉ dùng khi vận động cường độ cao >1 tiếng. Chứa nhiều đường và caffeine.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Uống 8 ly nước/ngày có đúng?</strong> Khẩu hiệu dễ nhớ — nhu cầu thực tế tùy thuộc cân nặng, vận động, thời tiết.</li><li><strong>Nước chanh, trà có tính là nước?</strong> Có — nhưng ưu tiên nước lọc (không calo, không đường).</li><li><strong>Uống nhiều nước có giảm cân?</strong> Hỗ trợ — nước giúp chuyển hóa tốt hơn, nhưng không đốt mỡ trực tiếp.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Uống nước đúng là thói quen đơn giản mà quan trọng nhất cho sức khỏe. Mang theo bình nước, uống đều trong ngày, theo dõi màu nước tiểu. Nếu bạn có bệnh thận hoặc tim, hỏi bác sĩ về lượng nước phù hợp.</p></section>
</ArticleLayout>'''

pages['vitamin-khoang-chat'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["vitamin-khoang-chat"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>💊 Tóm tắt — Vitamin và khoáng chất toàn diện</h2><p>Vitamin và khoáng chất là vi chất thiết yếu — cơ thể không tự tổng hợp được (trừ vitamin D), cần lấy từ thực phẩm. 13 vitamin và 16 khoáng chất quan trọng, mỗi loại có vai trò riêng: từ miễn dịch (vitamin C, kẽm), xương (canxi, D, K), máu (sắt, B12, folate) đến năng lượng (vitamin nhóm B).</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý bổ sung vi chất</h2><ul><li><strong>Thực phẩm > thực phẩm chức năng:</strong> Cơ thể hấp thu vitamin từ thực phẩm tốt hơn và an toàn hơn. Chỉ uống bổ sung khi có chỉ định hoặc chế độ ăn thiếu.</li><li><strong>Hòa tan trong mỡ (A, D, E, K):</strong> Cần chất béo để hấp thu. Uống cùng bữa ăn có dầu mỡ.</li><li><strong>Hòa tan trong nước (B, C):</strong> Thừa sẽ đào thải qua nước tiểu, nhưng B6 quá liều (200mg/ngày) có thể gây độc thần kinh.</li></ul></section>
  <section class="section card"><h2>✅ Nguồn thực phẩm giàu vi chất</h2><ul><li><strong>Vitamin A:</strong> Gan, cà rốt, khoai lang, bí đỏ, rau lá xanh đậm.</li><li><strong>Vitamin nhóm B:</strong> Ngũ cốc nguyên hạt, thịt, trứng, sữa, đậu. B12 chỉ có trong thực phẩm động vật.</li><li><strong>Vitamin C:</strong> Ổi, cam, bưởi, kiwi, ớt chuông, bông cải.</li><li><strong>Vitamin D:</strong> Ánh nắng (15 phút/ngày), cá béo, sữa tăng cường D. Thiếu rất phổ biến ở người Việt.</li><li><strong>Canxi:</strong> Sữa, tôm, cua, đậu phụ, rau lá xanh, cá nhỏ ăn xương.</li><li><strong>Sắt:</strong> Huyết, thịt đỏ, gan, đậu, rau lá xanh + vitamin C để tăng hấp thu.</li><li><strong>Kẽm:</strong> Hàu, thịt, hạt bí, đậu.</li></ul></section>
  <section class="section card"><h2>⚠️ Ai cần uống bổ sung?</h2><ul><li><strong>Phụ nữ mang thai:</strong> Acid folic (400mcg/ngày) từ trước khi mang thai, sắt, canxi, DHA.</li><li><strong>Người ăn chay trường:</strong> B12 bắt buộc, có thể thêm sắt, kẽm, omega-3.</li><li><strong>Người cao tuổi:</strong> Vitamin D, B12, canxi — hấp thu giảm theo tuổi.</li><li><strong>Người thiếu nắng:</strong> Vitamin D (mùa đông, dân văn phòng, người ít ra ngoài).</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Uống vitamin tổng hợp có tốt không?</strong> Có thể hữu ích cho người ăn uống kém, nhưng không thay thế chế độ ăn. Chọn liều ~100% DRI, không chọn liều cao.</li><li><strong>Uống vitamin C liều cao có chống cảm?</strong> Chỉ giúp giảm nhẹ thời gian cảm (~8%), không ngăn ngừa được. Liều >1000mg/ngày có thể gây sỏi thận.</li><li><strong>Thiếu vi chất có cần xét nghiệm?</strong> Nghi ngờ thiếu → xét nghiệm máu → bổ sung theo chỉ định. Không tự uống tùy tiện.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Ưu tiên ăn đa dạng thực phẩm — đó là cách tốt nhất để có đủ vi chất. Chỉ uống bổ sung khi thực sự cần: thai kỳ, ăn chay, tuổi già, hoặc xét nghiệm thiếu. Đừng lạm dụng vitamin liều cao — uống nhiều không làm khỏe hơn.</p></section>
</ArticleLayout>'''

pages['dinh-duong-dan-van-phong'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dinh-duong-dan-van-phong"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>🏢 Tóm tắt — Dinh dưỡng cho dân văn phòng</h2><p>Dân văn phòng thường gặp các vấn đề: ăn sáng vội, trưa ăn cơm hộp/ngoài hàng, chiều ăn vặt, tối về ăn bù. Ngồi nhiều, ít vận động → dễ tăng vòng eo, mỡ nội tạng, trào ngược dạ dày. Một số điều chỉnh nhỏ trong thói quen có thể cải thiện đáng kể.</p></section>
  <section class="section card"><h2>⚖️ Nguyên lý cho dân văn phòng</h2><ul><li><strong>Phân bổ bữa ăn hợp lý:</strong> Sáng: 20% năng lượng, trưa: 35%, chiều: 15% (ăn vặt lành mạnh), tối: 30%.</li><li><strong>Ngồi lâu làm chậm tiêu hóa:</strong> Sau ăn, không ngồi ngay — đứng dậy đi lại 5-10 phút.</li><li><strong>Nhịn ăn sáng:</strong> Khiến đường huyết dao động, ăn trưa nhiều hơn, dễ tích mỡ bụng.</li></ul></section>
  <section class="section card"><h2>✅ Ăn gì trong ngày làm việc</h2><ul><li><strong>Sáng:</strong> Yến mạch + sữa + trái cây, bánh mì nguyên cám + trứng, cháo/ phở (không nhiều mỡ).</li><li><strong>Trưa (mang theo):</strong> Cơm gạo lứt + ức gà + rau luộc. Tự nấu mang theo tiết kiệm và lành mạnh.</li><li><strong>Ăn vặt chiều:</strong> Trái cây (1 quả), sữa chua không đường, hạt (1 nắm), bánh gạo lứt.</li><li><strong>Uống:</strong> Nước lọc là chính. Trà xanh, cà phê đen (1-2 tách/ngày, không đường).</li></ul></section>
  <section class="section card"><h2>⚠️ Thực phẩm cần tránh</h2><ul><li><strong>Nước ngọt, trà sữa:</strong> 1 ly trà sữa = 300-500 calo, 40-60g đường — tương đương 1 bữa ăn.</li><li><strong>Bánh kẹo, snack:</strong> Nhiều đường, muối, chất béo chuyển hóa — không có giá trị dinh dưỡng.</li><li><strong>Cơm hộp nhiều dầu mỡ:</strong> Chọn phần rau nhiều, thịt ít mỡ, không chan nước thịt kho.</li><li><strong>Ăn tối quá khuya:</strong> Tránh ăn sau 20h. Nếu đói, uống sữa ấm hoặc ăn nhẹ trái cây.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Ngồi nhiều có giảm cân được không?</strong> Khó hơn nhưng vẫn được — kiểm soát khẩu phần và tận dụng giờ nghỉ đi bộ.</li><li><strong>Ăn trưa ngoài hàng làm sao để lành?</strong> Chọn quán có rau, gọi riêng phần rau, tránh quán dùng nhiều dầu.</li><li><strong>Có cần máy đứng bàn?</strong> Đứng 2-4 tiếng/ngày giúp đốt thêm ~100-200 calo, nhưng không thay thế tập thể dục.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Dân văn phòng hoàn toàn có thể ăn uống lành mạnh mà không tốn nhiều thời gian. Chuẩn bị bữa trưa từ tối hôm trước, kiểm soát ăn vặt, uống đủ nước, và đứng dậy vận động mỗi giờ. Những thay đổi nhỏ — kết quả lớn.</p></section>
</ArticleLayout>'''

# ---- HIỂU LẦM ----
pages['sai-lam-giam-can'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["sai-lam-giam-can"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>⚠️ Tóm tắt — 8 sai lầm khi giảm cân</h2><p>Giảm cân không phải là ăn càng ít càng tốt. Nhiều người mắc sai lầm khiến giảm cân thất bại: nhịn ăn, kiêng tinh bột hoàn toàn, chỉ tập cardio, uống thuốc giảm cân, ăn quá nhiều "thực phẩm healthy" mà không kiểm soát calo.</p></section>
  <section class="section card"><h2>🔍 8 sai lầm thường gặp</h2><ol><li><strong>Nhịn ăn, bỏ bữa:</strong> Giảm cân nhanh ban đầu nhưng mất cơ, chậm chuyển hóa. Khi ăn lại → tăng cân nhanh hơn (yo-yo).</li><li><strong>Kiêng tinh bột hoàn toàn:</strong> Cơ thể cần tinh bột để hoạt động — não dùng glucose. Kiêng tinh bột gây mệt, kém tập trung, dễ ăn bù.</li><li><strong>Chỉ tập cardio:</strong> Chạy bộ đốt calo trong lúc tập, nhưng ít tác dụng duy trì cơ. Cần kết hợp kháng lực.</li><li><strong>Uống thuốc giảm cân:</strong> Hầu hết không có bằng chứng, nhiều loại nguy hiểm (có thể chứa sibutramine, chất cấm).</li><li><strong>Ăn "healthy" nhưng quá nhiều:</strong> Granola, bơ, hạt, sinh tố — đều giàu calo. Kiểm soát khẩu phần.</li><li><strong>Không ăn chất béo:</strong> Chất béo 9 calo/g nhưng cần thiết. Chọn chất béo lành mạnh.</li><li><strong>Uống nước ngọt "diet":</strong> Chất tạo ngọt nhân tạo có thể làm tăng cảm giác thèm ngọt.</li><li><strong>Đặt mục tiêu quá cao:</strong> Giảm 0.5kg/tuần là lý tưởng. Đặt mục tiêu giảm 5-10kg/tháng → thất bại.</li></ol></section>
  <section class="section card"><h2>✅ Cách giảm cân đúng</h2><ul><li><strong>Thâm hụt calo vừa phải:</strong> 300-500 calo/ngày, không dưới 1200-1500 calo.</li><li><strong>Đa dạng thực phẩm:</strong> Giảm lượng, không phải loại. Cơm trắng vẫn ăn được — chỉ ăn ít hơn.</li><li><strong>Kết hợp tập:</strong> Cardio + kháng lực 3-4 buổi/tuần. Đi bộ 7000-10000 bước/ngày.</li><li><strong>Ngủ đủ 7-8 tiếng:</strong> Thiếu ngủ tăng cortisol → tích mỡ bụng.</li><li><strong>Kiên nhẫn:</strong> Giảm 0.3-0.5kg/tuần là tốc độ bền vững.</li></ul></section>
  <section class="section card"><h2>⚠️ Cảnh báo</h2><ul><li><strong>Thuốc giảm cân trôi nổi:</strong> Có thể chứa chất cấm gây đau tim, đột quỵ. Chỉ dùng theo chỉ định bác sĩ.</li><li><strong>Giảm mỡ cấp tốc:</strong> Có thể gây sỏi mật, mất cơ, rối loạn kinh nguyệt, suy giảm miễn dịch.</li><li><strong>Khi nào cần chuyên gia:</strong> Nếu có bệnh nền (tiểu đường, thận, tim) hoặc BMI >30.</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Ăn tối sau 18h có béo không?</strong> Calo là calo — thời điểm không quan trọng bằng tổng lượng. Nhưng ăn tối muộn dễ ăn quá nhiều.</li><li><strong>Có nên uống giấm táo giảm cân?</strong> Không có bằng chứng mạnh. Có thể hỗ trợ đường huyết, không giảm cân trực tiếp.</li><li><strong>Ăn chay có giảm cân không?</strong> Chưa chắc — bánh mì, cơm, khoai tây chiên vẫn là đồ chay nhưng nhiều calo.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Giảm cân bền vững là giảm mỡ, giữ cơ. Không tin vào "thần dược" hay "chế độ ăn kỳ diệu". Hãy giảm từ từ, ăn đủ chất, tập thể dục và ngủ đủ. Những thay đổi nhỏ mỗi ngày sẽ mang lại kết quả lớn.</p></section>
</ArticleLayout>'''

pages['10-hieu-lam-dinh-duong-nguoi-benh'] = r'''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["10-hieu-lam-dinh-duong-nguoi-benh"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={art}>
  <section class="section card"><h2>🏥 Tóm tắt — 10 hiểu lầm dinh dưỡng người bệnh hay gặp</h2><p>Người bệnh thường nghe nhiều lời khuyên dinh dưỡng từ người thân, bạn bè, mạng xã hội — không phải lời khuyên nào cũng đúng. Dưới đây là 10 hiểu lầm phổ biến nhất và sự thật dựa trên bằng chứng khoa học.</p></section>
  <section class="section card"><h2>🔍 10 hiểu lầm</h2><ol><li><strong>"Bị bệnh phải kiêng hoàn toàn"?</strong> Sai — kiêng quá mức gây suy dinh dưỡng. Chỉ kiêng thực phẩm thực sự có hại với bệnh cụ thể.</li><li><strong>"Ăn nhiều đạm để mau lành"?</strong> Đúng nhu cầu — nhưng người bệnh thận cần giới hạn đạm.</li><li><strong>"Uống thuốc Bắc/nam thay thuốc Tây"?</strong> Thuốc thảo dược không thể thay thế thuốc điều trị — có thể tương tác nguy hiểm.</li><li><strong>"Bị tiểu đường không được ăn cơm"?</strong> Vẫn ăn được — chỉ giảm lượng, kết hợp rau và đạm.</li><li><strong>"Bị cao huyết áp phải bỏ hoàn toàn muối"?</strong> Giảm mạnh là đúng, nhưng không thể bỏ — cơ thể cần muối để hoạt động.</li><li><strong>"Uống sữa đắt tiền mới tốt"?</strong> Giá tiền không quyết định dinh dưỡng — chọn sữa phù hợp bệnh lý mới quan trọng.</li><li><strong>"Nằm một chỗ không cần ăn nhiều"?</strong> Sai — người bệnh cần năng lượng để phục hồi, đôi khi còn nhiều hơn người khỏe.</li><li><strong>"Ăn cháo, cháo dinh dưỡng là đủ"?</strong> Cháo loãng thiếu nhiều vi chất. Ưu tiên ăn đặc nếu nuốt được.</li><li><strong>"Bỏ bữa để uống thuốc"?</strong> Thuốc cần thức ăn để hấp thu và giảm tác dụng phụ. Uống thuốc cùng bữa ăn theo hướng dẫn.</li><li><strong>"Người bệnh không nên tập thể dục"?</strong> Vận động nhẹ phù hợp giúp phục hồi nhanh hơn, cải thiện tuần hoàn.</li></ol></section>
  <section class="section card"><h2>✅ Nguyên tắc dinh dưỡng cho người bệnh</h2><ul><li><strong>Ăn đủ năng lượng:</strong> Đừng kiêng quá mức. Suy dinh dưỡng làm chậm hồi phục, tăng biến chứng.</li><li><strong>Đa dạng thực phẩm:</strong> Cơ thể bệnh cần nhiều vi chất hơn để sửa chữa tế bào.</li><li><strong>Tham khảo chuyên gia:</strong> Mỗi bệnh có chế độ ăn riêng — hỏi bác sĩ hoặc chuyên gia dinh dưỡng.</li><li><strong>Theo dõi cân nặng:</strong> Sụt cân không chủ ý là dấu hiệu nguy hiểm cần báo ngay.</li></ul></section>
  <section class="section card"><h2>⚠️ Dấu hiệu nguy hiểm</h2><ul><li>Sụt >5% cân nặng trong 1 tháng không chủ ý</li><li>Ăn <50% khẩu phần bình thường >1 tuần</li><li>Khó nuốt, đau khi nuốt, nôn sau ăn</li><li>Sốt >38°C kéo dài, mệt nhiều</li></ul></section>
  <section class="section card"><h2>❓ Câu hỏi thường gặp</h2><ul><li><strong>Người bệnh có nên uống sữa?</strong> Có — sữa cung cấp đạm, canxi, vitamin. Chọn loại phù hợp bệnh lý.</li><li><strong>Người ung thư có nên kiêng đường?</strong> Tế bào ung thư thích đường, nhưng cắt đường hoàn toàn gây hại nhiều hơn lợi — giảm đường tinh chế, không cắt hoàn toàn.</li><li><strong>Mổ xong nên ăn gì?</strong> Đạm dễ tiêu (trứng, cá, sữa), rau mềm, uống đủ nước. Tránh đồ tanh, quá cay, nhiều dầu mỡ.</li></ul></section>
  <section class="section card"><h2>🎯 Tóm lại</h2><p>Người bệnh cần dinh dưỡng đầy đủ, khoa học và phù hợp với từng bệnh lý. Đừng tin lời khuyên truyền miệng — hãy hỏi bác sĩ hoặc chuyên gia dinh dưỡng. Suy dinh dưỡng là biến chứng nguy hiểm không kém bệnh nền.</p></section>
</ArticleLayout>'''

for slug, content in pages.items():
    path = os.path.join(DIR, f'{slug}.astro')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'✅ {slug}.astro')

print(f'\nDone! {len(pages)} articles standardized to 6-section template.')
