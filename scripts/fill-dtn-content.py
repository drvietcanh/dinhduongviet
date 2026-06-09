#!/usr/bin/env python3
"""Write real content for 6 DTN articles."""

DIR = 'src/pages/kien-thuc-dinh-duong'

articles = {
    'dung-tin-ngay-chanh-giam-mo-mau': '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dung-tin-ngay-chanh-giam-mo-mau"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm: Uống nước chanh giảm mỡ máu</h2>
    <p>Nhiều người tin rằng uống nước chanh pha loãng mỗi sáng có thể "rửa" mạch máu, giảm cholesterol và ngăn ngừa mỡ máu. Quan niệm này xuất phát từ niềm tin rằng vị chua của chanh có thể "hòa tan" chất béo trong máu.</p>
    <div class="truth-box">
      <strong>Sự thật:</strong> Chanh giàu vitamin C và chất chống oxy hóa, rất tốt cho sức khỏe. <strong>Nhưng không có bằng chứng khoa học nào</strong> cho thấy uống nước chanh làm giảm trực tiếp cholesterol hay triglyceride trong máu.
    </div>
  </section>

  <section class="section card">
    <h2>🔬 Bằng chứng khoa học</h2>
    <ul>
      <li><strong>Chanh và mỡ máu:</strong> Một số nghiên cứu trên động vật cho thấy flavonoid trong chanh (hesperidin, eriocitrin) có thể hỗ trợ chống oxy hóa, nhưng <em>chưa có thử nghiệm lâm sàng nào</em> khẳng định chanh làm giảm LDL hay tăng HDL ở người.</li>
      <li><strong>Vitamin C:</strong> Bổ sung vitamin C liều cao có thể giảm nhẹ stress oxy hóa, nhưng ảnh hưởng trực tiếp lên cholesterol máu là <em>không đáng kể</em> (theo American Heart Association).</li>
      <li><strong>Yếu tố chính:</strong> Chế độ ăn tổng thể — đặc biệt là giảm mỡ bão hòa, tăng chất xơ hòa tan, giảm đường — mới là yếu tố quyết định trong kiểm soát mỡ máu.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>💡 Cách giảm mỡ máu thực sự hiệu quả</h2>
    <ul>
      <li><strong>Giảm mỡ bão hòa:</strong> Hạn chế mỡ động vật, da gà, đồ chiên rán, bơ thực vật.</li>
      <li><strong>Tăng chất xơ hòa tan:</strong> Yến mạch, đậu, táo, cà rốt, mướp đắng — chất xơ giúp giảm hấp thu cholesterol.</li>
      <li><strong>Omega-3 từ cá:</strong> Cá hồi, cá thu, cá trích — ăn ít nhất 2 bữa cá/tuần.</li>
      <li><strong>Dầu thực vật:</strong> Dầu ô-liu, dầu hạt cải, dầu đậu nành thay cho mỡ động vật.</li>
      <li><strong>Tập thể dục:</strong> Đi bộ nhanh 30 phút/ngày, 5 ngày/tuần giúp tăng HDL hiệu quả.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🍋 Vai trò thực sự của chanh</h2>
    <p>Chanh vẫn là thực phẩm tốt — nhưng là <strong>thực phẩm bổ trợ</strong>, không phải "thuốc" giảm mỡ máu. Bạn nên:</p>
    <ul>
      <li>Uống nước chanh thay nước ngọt có đường — giảm calo</li>
      <li>Dùng chanh làm nước sốt thay mayonnaise — giảm mỡ bão hòa</li>
      <li>Uống chanh ấm như thói quen hydrat hóa buổi sáng</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Uống nước chanh tốt cho sức khỏe nhưng <strong>không thể thay thế</strong> điều chỉnh chế độ ăn và thuốc điều trị mỡ máu (nếu đã có chỉ định). Đừng bỏ thuốc để uống chanh — hãy uống chanh như một phần của lối sống lành mạnh, <strong>không phải phương pháp chữa bệnh</strong>.</p>
  </section>
</ArticleLayout>''',

    'dung-tin-ngay-gao-lut-tieu-duong': '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dung-tin-ngay-gao-lut-tieu-duong"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm: Ăn gạo lứt chữa được tiểu đường</h2>
    <p>Nhiều người bệnh tiểu đường chuyển hẳn sang ăn gạo lứt với hy vọng "chữa khỏi" bệnh. Thực tế, gạo lứt <strong>chỉ tốt hơn gạo trắng</strong> ở chỉ số đường huyết thấp hơn, chứ không có khả năng chữa bệnh.</p>
    <div class="truth-box">
      <strong>Sự thật:</strong> Gạo lứt vẫn là tinh bột, vẫn làm tăng đường huyết — chỉ chậm hơn gạo trắng. Người tiểu đường cần <strong>kiểm soát lượng</strong> chứ không thể ăn bao nhiêu tùy thích chỉ vì đó là gạo lứt.
    </div>
  </section>

  <section class="section card">
    <h2>🔬 Bằng chứng khoa học</h2>
    <ul>
      <li><strong>GI của gạo lứt:</strong> Chỉ số đường huyết ~50-55 (thấp hơn gạo trắng ~70-80), nhưng vẫn ở mức trung bình. Với khẩu phần lớn, tải lượng đường huyết vẫn cao.</li>
      <li><strong>Không "chữa" tiểu đường:</strong> Chưa có nghiên cứu nào chứng minh gạo lứt làm đảo ngược tiểu đường. Một số nghiên cứu cho thấy thay gạo trắng bằng gạo lứt <em>hỗ trợ kiểm soát</em> đường huyết, nhưng không thay thế thuốc.</li>
      <li><strong>Chất xơ nhiều hơn:</strong> Gạo lứt giàu chất xơ, magiê, vitamin nhóm B — tốt hơn gạo trắng, nhưng vẫn cần ăn đúng lượng.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>💡 Cách ăn gạo đúng khi bị tiểu đường</h2>
    <ul>
      <li><strong>Kiểm soát khẩu phần:</strong> Mỗi bữa chỉ nên ăn 1 chén cơm (khoảng 130g cơm đã nấu) — dù là gạo lứt hay gạo trắng.</li>
      <li><strong>Đa dạng tinh bột:</strong> Luân phiên gạo lứt, yến mạch, khoai lang, bún tươi, phở tươi để thay đổi.</li>
      <li><strong>Kết hợp rau xanh:</strong> Ăn rau trước — giúp làm chậm hấp thu đường từ cơm.</li>
      <li><strong>Không thêm đường:</strong> Không chan nước tương có đường, không ăn kèm đồ ngọt.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Gạo lứt tốt hơn gạo trắng cho người tiểu đường — <strong>nhưng không phải thực phẩm thần kỳ</strong>. Người bệnh vẫn cần dùng thuốc theo chỉ định, tập thể dục đều đặn và kiểm soát tổng lượng tinh bột mỗi ngày. Đừng bỏ thuốc để chuyển sang ăn gạo lứt — hãy đưa gạo lứt vào thực đơn như một lựa chọn lành mạnh hơn, không phải phương thuốc.</p>
  </section>
</ArticleLayout>''',

    'dung-tin-ngay-nhin-an-giam-can': '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dung-tin-ngay-nhin-an-giam-can"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm: Nhịn ăn là cách giảm cân tốt nhất</h2>
    <p>Nhiều người tin rằng bỏ bữa hoặc nhịn ăn vài ngày sẽ giúp giảm cân nhanh. Đúng là cân nặng sẽ giảm — nhưng phần lớn là <strong>nước và cơ</strong>, không phải mỡ. Khi ăn lại, bạn dễ tăng cân nhiều hơn (yo-yo effect).</p>
    <div class="truth-box">
      <strong>Sự thật:</strong> Nhịn ăn làm chậm chuyển hóa, khiến cơ thể tích trữ mỡ nhiều hơn. Giảm mỡ bền vững cần <strong>thâm hụt calo nhẹ</strong> (300-500 calo/ngày) kết hợp tập luyện, chứ không phải bỏ bữa.
    </div>
  </section>

  <section class="section card">
    <h2>🔬 Bằng chứng khoa học</h2>
    <ul>
      <li><strong>Mất cơ:</strong> Khi nhịn ăn, cơ thể phá hủy protein cơ bắp để lấy năng lượng — mỗi kg mất đi có thể có 30-50% từ cơ, không phải mỡ.</li>
      <li><strong>Chậm chuyển hóa:</strong> Sau 48-72 giờ nhịn ăn, chuyển hóa cơ bản giảm 8-15% (theo nghiên cứu trên American Journal of Clinical Nutrition). Khi bạn ăn lại, mỡ tích nhanh hơn vì cơ thể sợ bị đói lần nữa.</li>
      <li><strong>Hiệu quả ngắn hạn:</strong> Nhịn ăn giảm cân nhanh trong tuần đầu, nhưng tỷ lệ tăng cân lại sau 6 tháng lên đến 80-90%.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>💡 Cách giảm cân khoa học và bền vững</h2>
    <ul>
      <li><strong>Thâm hụt calo nhẹ:</strong> Giảm 300-500 calo/ngày so với nhu cầu — đủ để giảm 0.3-0.5kg/tuần (an toàn, bền vững).</li>
      <li><strong>Ăn đủ 3 bữa:</strong> Bỏ bữa không giúp ích — ăn đúng bữa, đủ chất giúp kiểm soát cơn đói về chiều/tối.</li>
      <li><strong>Tăng protein (20-25% năng lượng):</strong> Giúp no lâu, duy trì cơ bắp trong quá trình giảm cân.</li>
      <li><strong>Tập thể dục:</strong> Kết hợp cardio (đi bộ, chạy) + kháng lực (tạ, squat) để giữ cơ và đốt mỡ.</li>
      <li><strong>Ngủ đủ 7-8 tiếng:</strong> Thiếu ngủ làm tăng ghrelin (hormone đói) và giảm leptin (hormone no).</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Nhịn ăn gián đoạn thì sao?</h2>
    <p>Phương pháp nhịn ăn gián đoạn (16:8, 5:2) có nghiên cứu ủng hộ — nhưng <strong>vẫn cần kiểm soát calo</strong> trong khung giờ ăn. Không phải ai cũng phù hợp, đặc biệt là người tiểu đường, phụ nữ mang thai, trẻ em. Hãy hỏi chuyên gia trước khi áp dụng.</p>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Nhịn ăn <strong>không phải cách giảm cân thông minh</strong> — bạn mất cơ, chậm chuyển hóa và dễ tăng cân trở lại. Giảm cân bền vững là ăn ít hơn một chút, vận động nhiều hơn một chút, mỗi ngày. Không có đường tắt.</p>
  </section>
</ArticleLayout>''',

    'dung-tin-ngay-duong-phen': '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dung-tin-ngay-duong-phen"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm: Đường phèn tốt hơn đường trắng</h2>
    <p>Nhiều người cho rằng đường phèn "mát" hơn, ít ngọt hơn và an toàn hơn đường trắng — đặc biệt dùng trong nấu chè, pha chế. Quan niệm này bắt nguồn từ y học cổ truyền, nhưng xét về dinh dưỡng hiện đại, đường phèn và đường trắng <strong>gần như không khác nhau</strong>.</p>
    <div class="truth-box">
      <strong>Sự thật:</strong> Đường phèn có >99% là sucrose — <strong>cùng loại đường hóa học</strong> với đường trắng. Không có lợi thế dinh dưỡng đáng kể nào. Người tiểu đường cần kiêng cả hai.
    </div>
  </section>

  <section class="section card">
    <h2>🔬 Phân tích dinh dưỡng</h2>
    <table class="table">
      <thead><tr><th>Chỉ tiêu</th><th>Đường trắng</th><th>Đường phèn</th><th>Đường thốt nốt</th></tr></thead>
      <tbody>
        <tr><td>Thành phần chính</td><td>Sucrose >99.9%</td><td>Sucrose >99%</td><td>Sucrose 70-80% + khoáng</td></tr>
        <tr><td>Chỉ số GI</td><td>~65</td><td>~65</td><td>~54-60</td></tr>
        <tr><td>Calo/100g</td><td>~387</td><td>~385</td><td>~375</td></tr>
        <tr><td>Khoáng chất</td><td>Không</td><td>Không đáng kể</td><td>Có sắt, magiê, kẽm</td></tr>
      </tbody>
    </table>
    <p style="margin-top:12px;">Như bảng trên, đường phèn và đường trắng <strong>gần như tương đương</strong> về thành phần và tác động lên đường huyết.</p>
  </section>

  <section class="section card">
    <h2>💡 Cách giảm đường — dù là đường nào</h2>
    <ul>
      <li><strong>Hạn chế toàn bộ:</strong> WHO khuyến cáo < 25g đường tự do/ngày (≈ 5 muỗng cà phê). Đường phèn hay đường trắng đều tính vào hạn mức này.</li>
      <li><strong>Đừng bị đánh lừa:</strong> "Đường phèn ít ngọt" không có nghĩa là "ít calo" — bạn có thể cho nhiều hơn, cuối cùng vẫn ăn cùng lượng đường.</li>
      <li><strong>Thay thế thông minh:</strong> Dùng trái cây chín để tạo ngọt tự nhiên, hoặc các loại đường ăn kiêng (stevia, erythritol, monk fruit) nếu cần.</li>
      <li><strong>Đọc nhãn:</strong> Các loại đường phèn, đường vàng, đường hữu cơ — tất cả đều là "đường tự do". Đừng để marketing đánh lừa.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Đường phèn <strong>không tốt hơn đường trắng</strong> — cả hai đều là sucrose, đều cần hạn chế. Không có "đường tốt cho sức khỏe", chỉ có <strong>lượng đường ít hơn</strong>. Hãy giảm ngọt dần và chọn thực phẩm tự nhiên thay vì tìm loại đường "lành mạnh".</p>
  </section>
</ArticleLayout>''',

    'dung-tin-ngay-mat-ong-tieu-duong': '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dung-tin-ngay-mat-ong-tieu-duong"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm: Mật ong dùng thoải mái cho người tiểu đường</h2>
    <p>"Mật ong là tự nhiên, không phải đường hóa học" — đây là quan niệm phổ biến khiến nhiều người tiểu đường nghĩ có thể dùng mật ong thoải mái. Sự thật: mật ong <strong>vẫn là đường</strong>, thậm chí còn ngọt hơn đường trắng.</p>
    <div class="truth-box">
      <strong>Sự thật:</strong> Mật ong chứa ~80% đường (fructose + glucose), GI ~58 (trung bình). Một muỗng mật ong (15ml) chứa ~60 calo và ~17g đường — tương đương 4 muỗng cà phê đường trắng. Người tiểu đường <strong>không thể dùng thoải mái</strong>.
    </div>
  </section>

  <section class="section card">
    <h2>🔬 Bằng chứng khoa học</h2>
    <ul>
      <li><strong>GI của mật ong:</strong> 58 (thấp hơn đường trắng 65), nhưng vẫn ở mức trung bình — tức là vẫn làm tăng đường huyết đáng kể.</li>
      <li><strong>Không lợi thế dinh dưỡng:</strong> Mật ong có chất chống oxy hóa (flavonoid, phenolic) nhưng với lượng nhỏ dùng hàng ngày, tác dụng không đáng kể so với tác hại của đường.</li>
      <li><strong>Nghiên cứu trên người tiểu đường:</strong> Một số thử nghiệm nhỏ cho thấy mật ong có thể làm tăng đường huyết thấp hơn đường trắng — nhưng sự khác biệt quá nhỏ để có ý nghĩa lâm sàng. Với lượng nhiều, tác hại tương đương.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>💡 Cách dùng mật ong cho người tiểu đường</h2>
    <ul>
      <li><strong>Giới hạn tối đa:</strong> 1 muỗng cà phê (5ml)/lần, 2-3 lần/tuần — và phải tính vào tổng lượng tinh bột/đường cần ăn.</li>
      <li><strong>Không dùng thường xuyên:</strong> Dùng mật ong hàng ngày dù 1 muỗng vẫn góp phần vào tải lượng đường.</li>
      <li><strong>Kiểm tra đường huyết:</strong> Sau khi dùng mật ong, đo đường huyết để biết cơ thể phản ứng thế nào.</li>
      <li><strong>Thay thế:</strong> Nếu cần vị ngọt, ưu tiên đường ăn kiêng (stevia, erythritol) có GI = 0.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>⚠️ Mật ong trị ho thì sao?</h2>
    <p>Mật ong có thể dùng trị ho (1 muỗng nhỏ trước ngủ cho người lớn) — nhưng với người tiểu đường, vẫn nên hỏi bác sĩ trước. Không nên dùng mật ong như thực phẩm chức năng hàng ngày.</p>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Mật ong <strong>không phải thực phẩm tự do</strong> cho người tiểu đường. Dù có chút lợi thế về GI và chất chống oxy hóa, nó vẫn là đường đậm đặc — cần hạn chế như bất kỳ loại đường nào khác. Khi cần ngọt, người tiểu đường nên chọn giải pháp GI = 0 thay vì mật ong.</p>
  </section>
</ArticleLayout>''',

    'dung-tin-ngay-trai-cay-thay-com': '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["dung-tin-ngay-trai-cay-thay-com"];
if (!art) throw new Error("Article not found");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm: Ăn trái cây thay cơm giúp giảm cân</h2>
    <p>Nhiều người giảm cân áp dụng "chế độ ăn trái cây" — chỉ ăn trái cây thay cơm. Họ nghĩ trái cây ít calo, giàu vitamin, nên ăn bao nhiêu cũng tốt. Thực tế, trái cây chứa nhiều <strong>đường fructose</strong> — ăn quá nhiều có thể gây tăng mỡ gan, mất cơ và rối loạn chuyển hóa.</p>
    <div class="truth-box">
      <strong>Sự thật:</strong> Một bữa ăn chỉ có trái cây thiếu đạm, chất béo và chất xơ đủ — dẫn đến tăng đường huyết nhanh, đói nhanh, và cuối cùng là ăn bù nhiều hơn. Trái cây là thực phẩm bổ sung, <strong>không thể thay bữa chính</strong>.
    </div>
  </section>

  <section class="section card">
    <h2>🔬 Tại sao ăn trái cây thay cơm không hiệu quả</h2>
    <ul>
      <li><strong>Thiếu protein:</strong> Trái cây hầu như không có đạm (<1g/100g). Thiếu đạm kéo dài → mất cơ, chậm chuyển hóa.</li>
      <li><strong>Đường fructose:</strong> Fructose từ trái cây được chuyển hóa ở gan — quá nhiều có thể gây gan nhiễm mỡ, tăng triglyceride.</li>
      <li><strong>Đói nhanh:</strong> Trái cây ít chất béo và đạm → tiêu hóa nhanh → đói sau 1-2 tiếng → ăn bù.</li>
      <li><strong>Ví dụ thực tế:</strong> 1 chén cơm (130g) ≈ 170 calo. 1 quả xoài lớn (300g) ≈ 180 calo — lượng calo tương đương, nhưng cơm có thêm chất xơ, vitamin nhóm B, và có thể ăn kèm rau/đạm.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>💡 Cách ăn trái cây đúng cách</h2>
    <ul>
      <li><strong>Lượng hợp lý:</strong> 1-2 phần trái cây/ngày (1 phần ≈ 100g trái cây tươi hoặc 1 quả cỡ vừa).</li>
      <li><strong>Ăn sau bữa chính:</strong> Ăn trái cây ngay sau bữa ăn (hoặc tráng miệng) thay vì thay thế bữa ăn.</li>
      <li><strong>Chọn trái cây ít ngọt:</strong> Bưởi, ổi, thanh long ruột đỏ, dâu tây, táo xanh — GI thấp hơn xoài, sầu riêng, chôm chôm.</li>
      <li><strong>Không uống nước ép thay trái cây:</strong> Nước ép mất chất xơ, làm tăng đường huyết nhanh hơn.</li>
      <li><strong>Kết hợp rau xanh:</strong> Rau trước, cơm và đạm sau, trái cây làm tráng miệng — đây là thứ tự ăn tốt cho đường huyết.</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🍎 Bảng so sánh nhanh</h2>
    <table class="table">
      <thead><tr><th>Bữa ăn</th><th>Calo</th><th>Đạm</th><th>Cảm giác no</th><th>Tác động đường huyết</th></tr></thead>
      <tbody>
        <tr><td>1 quả xoài lớn</td><td>~180</td><td>~1g</td><td>Đói sau 1-2h</td><td>Tăng nhanh</td></tr>
        <tr><td>1 chén cơm + rau + đậu phụ</td><td>~350</td><td>~15g</td><td>No 4-5h</td><td>Tăng chậm, ổn định</td></tr>
      </tbody>
    </table>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Trái cây rất tốt cho sức khỏe — nhưng <strong>không thể thay thế bữa chính</strong>. Ăn trái cây thay cơm thường xuyên gây thiếu đạm, mất cơ, tăng mỡ gan và cuối cùng là tăng cân. Hãy ăn trái cây đúng cách: đúng lượng, đúng thời điểm, và luôn kết hợp với các nhóm thực phẩm khác.</p>
  </section>
</ArticleLayout>''',
}

import os
for slug, content in articles.items():
    path = os.path.join(DIR, f'{slug}.astro')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'✅ {slug}.astro')

print('\nDone! All 6 DTN articles filled with real content.')
