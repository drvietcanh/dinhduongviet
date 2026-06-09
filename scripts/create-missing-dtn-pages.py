#!/usr/bin/env python3
"""Create missing page files for 6 dung-tin-ngay articles."""
import os

ARTICLES_DIR = 'src/pages/kien-thuc-dinh-duong'

missing = [
    ('dung-tin-ngay-chanh-giam-mo-mau', 'Uống nước chanh giảm mỡ máu?'),
    ('dung-tin-ngay-gao-lut-tieu-duong', 'Ăn gạo lứt chữa được tiểu đường?'),
    ('dung-tin-ngay-nhin-an-giam-can', 'Nhịn ăn có phải cách giảm cân tốt nhất?'),
    ('dung-tin-ngay-duong-phen', 'Đường phèn tốt hơn đường trắng?'),
    ('dung-tin-ngay-mat-ong-tieu-duong', 'Mật ong có dùng thoải mái cho người tiểu đường?'),
    ('dung-tin-ngay-trai-cay-thay-com', 'Ăn trái cây thay cơm giảm cân?'),
]

template = '''---
import ArticleLayout from "../../layouts/ArticleLayout.astro";
import { articleBySlug } from "../../data/articles";
const art = articleBySlug["{slug}"];
if (!art) throw new Error("Article not found: {slug}");
---

<ArticleLayout article={{art}}>
  <section class="section card">
    <h2>🤔 Hiểu lầm & sự thật</h2>
    <p>Bài viết này giải thích vì sao đây là hiểu lầm và cách ăn uống đúng dựa trên bằng chứng khoa học. Nội dung chi tiết phù hợp với layout chuẩn "Đừng Tin Ngay" — phân tích hiểu lầm, đưa ra sự thật dựa trên nghiên cứu, và hướng dẫn cách ăn đúng thay thế.</p>
  </section>

  <section class="section card">
    <h2>🔬 Bằng chứng khoa học</h2>
    <ul>
      <li><strong>Tham khảo y văn:</strong> Các nghiên cứu đối chứng và phân tích tổng quan (meta-analysis) cho thấy không có thực phẩm "thần kỳ" nào có thể thay thế điều trị y tế.</li>
      <li><strong>Quan trọng nhất:</strong> Chế độ ăn tổng thể (overall dietary pattern) quan trọng hơn bất kỳ thực phẩm riêng lẻ nào.</li>
      <li><strong>Nguyên tắc vàng:</strong> Đa dạng thực phẩm, ăn đúng lượng, đúng cách — không tin vào "thực phẩm chữa bệnh".</li>
    </ul>
  </section>

  <section class="section card">
    <h2>💡 Cách ăn đúng</h2>
    <p>Thay vì tìm kiếm thực phẩm kỳ diệu, hãy tập trung vào:</p>
    <ul>
      <li>Xây dựng thực đơn cân đối theo <strong>tháp dinh dưỡng</strong></li>
      <li><strong>Kiểm soát khẩu phần</strong> — lượng ăn quan trọng không kém chất lượng</li>
      <li><strong>Kết hợp đa dạng</strong> các nhóm thực phẩm thay vì ăn một loại duy nhất</li>
      <li><strong>Tham khảo bác sĩ/ chuyên gia dinh dưỡng</strong> trước khi thay đổi chế độ ăn</li>
    </ul>
  </section>

  <section class="section card">
    <h2>🎯 Tóm lại</h2>
    <p>Đừng Tin Ngay là chuyên mục giúp bạn phân biệt thật — giả trong dinh dưỡng. Hãy luôn kiểm tra thông tin với nguồn đáng tin cậy và không nghe theo lời đồn thiếu căn cứ.</p>
  </section>

  <section class="section card">
    <h2>📚 Nguồn tham khảo</h2>
    <p>Tham khảo các bài viết khác trong chuyên mục này và các nghiên cứu đã được trích dẫn trong phần nguồn ở cuối bài.</p>
  </section>
</ArticleLayout>
'''

for slug, title in missing:
    page = template.replace('{slug}', slug)
    path = os.path.join(ARTICLES_DIR, f'{slug}.astro')
    if not os.path.exists(path):
        with open(path, 'w', encoding='utf-8') as f:
            f.write(page)
        print(f'✅ Created {slug}.astro')
    else:
        print(f'⚠️ Already exists: {slug}.astro')

print(f'\nDone! Created pages in {os.path.abspath(ARTICLES_DIR)}/')
