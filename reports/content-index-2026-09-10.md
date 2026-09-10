# Chỉ mục nội dung & lộ trình mở rộng bài viết dinh dưỡng

Ngày rà soát: 2026-09-10  
Phạm vi: `src/data/articles.ts`, `src/pages/kien-thuc-dinh-duong/`, `src/pages/dung-tin-ngay/`

## 1. Kết quả quét nhanh

- Tổng metadata bài viết trong `articles.ts`: 343 bài.
- Scanner y khoa quét: 351 file.
- Critical/High/Medium: 0.
- Review: 340 điểm, chủ yếu là số liệu, liều lượng, ngữ cảnh cảnh báo “không thay thế thuốc”, hoặc cụm phản khoa học nằm trong câu phủ định.
- Nhận định: chưa thấy lỗi chuyên môn nguy hiểm cấp cao; phần cần làm tiếp là chuẩn hóa nguồn cho các con số, làm giàu chuyên khoa còn mỏng, và tổ chức chỉ mục biên tập tốt hơn.

## 2. Chỉ mục theo nhóm bài

| Nhóm | Số bài | Nhận xét quản lý |
|---|---:|---|
| Bệnh lý | 198 | Là lõi của website; đã phủ rộng bệnh mạn tính, tiêu hóa, nội tiết, tim mạch. |
| Giáo dục dinh dưỡng | 110 | Nhiều bài nền tảng và “đừng tin ngay”; tốt cho SEO phổ thông. |
| Đối tượng/tình huống đặc biệt | 28 | Có thai kỳ, người già, đi làm, đi du lịch, sau phẫu thuật. |
| Hướng dẫn/tháp dinh dưỡng | 7 | Còn mỏng; nên tăng bài nền về khuyến nghị Việt Nam, khẩu phần, đồ uống, thực phẩm siêu chế biến. |

## 3. Chỉ mục theo chuyên khoa hiện có

| Chuyên khoa | Số bài | Mức độ phủ |
|---|---:|---|
| Dinh dưỡng tổng quát | 60 | Mạnh |
| Tiêu hóa/gan mật | 58 | Mạnh |
| Nội tiết/chuyển hóa | 46 | Mạnh |
| Tim mạch | 29 | Khá mạnh |
| Thận - tiết niệu | 15 | Khá |
| Nhi khoa | 14 | Khá, nên tăng bài thực hành gia đình |
| Thần kinh | 14 | Khá |
| Huyết học/miễn dịch | 13 | Khá |
| Hô hấp | 12 | Khá |
| Cơ xương khớp | 11 | Trung bình |
| Lão khoa | 11 | Trung bình |
| Da liễu | 11 | Trung bình |
| Phụ nữ/nhi & đời sống | 11 | Trung bình |
| Ung thư | 10 | Cần ưu tiên mở rộng |
| Sản khoa | 9 | Cần mở rộng chọn lọc |
| Ngoại khoa/hậu phẫu | 5 | Mỏng |
| Truyền nhiễm | 5 | Mỏng |
| Dinh dưỡng thể thao | 4 | Mỏng nhưng không phải ưu tiên y tế cộng đồng |
| Tai mũi họng | 3 | Mỏng |
| Dị ứng | 2 | Rất mỏng |

## 4. Các cụm nội dung ưu tiên theo tình hình Việt Nam

### P0 — Nên bổ sung trước

1. Ung thư theo loại bệnh thường gặp tại Việt Nam
   - Ung thư phổi: chán ăn, khó thở, sụt cân, dinh dưỡng khi hóa/xạ trị.
   - Ung thư gan/HCC: xơ gan nền, cổ trướng, ăn đủ đạm nhưng cá thể hóa bệnh não gan.
   - Ung thư dạ dày: trước/sau cắt dạ dày, dumping syndrome, B12/sắt/canxi.
   - Ung thư cổ tử cung: dinh dưỡng khi xạ trị vùng chậu, tiêu chảy, thiếu máu.
   - Ung thư tuyến giáp: sau phẫu thuật, canxi, i-ốt khi chuẩn bị điều trị theo chỉ định.
   - Ung thư tụy/đường mật: kém hấp thu mỡ, men tụy, sụt cân nhanh.
   - Ung thư máu/lymphoma: giảm bạch cầu, an toàn thực phẩm, loét miệng.

2. Dinh dưỡng hỗ trợ điều trị ung thư
   - Ăn gì khi buồn nôn, nôn, thay đổi vị giác.
   - Loét miệng/khô miệng sau hóa-xạ trị.
   - Tiêu chảy/táo bón trong điều trị ung thư.
   - Neutropenia: an toàn thực phẩm khi bạch cầu thấp.
   - Bổ sung sữa y học/ONS: khi nào nên dùng, khi nào cần hỏi bác sĩ.
   - Dinh dưỡng giảm nhẹ/cuối đời: mục tiêu thoải mái, không ép ăn.

3. Bệnh mạn tính hay gặp
   - Đa bệnh ở người cao tuổi: đái tháo đường + tăng huyết áp + CKD, ưu tiên mục tiêu nào trước.
   - Hội chứng chuyển hóa: vòng eo, gan nhiễm mỡ, triglyceride, tiền đái tháo đường.
   - Đái tháo đường đang dùng insulin/sulfonylurea: phòng hạ đường huyết bằng bữa ăn Việt.
   - Tăng huyết áp kháng trị/ăn ngoài nhiều: checklist muối ẩn.
   - COPD/suy tim/CKD có suy dinh dưỡng: phân biệt “cần giảm muối” với “không được ăn quá ít”.

### P1 — Nên bổ sung sau P0

1. Nhi khoa và học đường
   - Bữa sáng học sinh Việt Nam: no lâu, ít đường, phù hợp đi học sớm.
   - Thiếu vitamin D/canxi ở trẻ ít vận động ngoài trời.
   - Dậy thì sớm, thừa cân và đồ uống ngọt.
   - Trẻ chơi thể thao: nước, điện giải, bữa phụ.

2. Sản khoa/phụ nữ
   - Đái tháo đường thai kỳ sau sinh: phòng tiến triển thành type 2.
   - Buồn nôn/nôn nặng thai kỳ: khi nào cần khám.
   - Thiếu canxi/vitamin D thai kỳ và sau sinh.
   - Hội chứng buồng trứng đa nang + thừa cân + mong con.

3. Truyền nhiễm và hậu bệnh
   - Dinh dưỡng sau sốt xuất huyết: ăn lại, phục hồi tiểu cầu, tránh hiểu lầm.
   - Hậu COVID/cúm kéo dài: ăn uống phục hồi, mất mùi-vị.
   - Lao ngoài phổi hoặc lao kèm đái tháo đường.

### P2 — Làm giàu thư viện khi đã xong P0/P1

- Dị ứng thực phẩm ở người lớn: hải sản, đậu phộng, sữa, trứng; phân biệt dị ứng thật và không dung nạp.
- Bệnh răng miệng người lớn: nha chu, sâu răng, khô miệng do thuốc.
- Dinh dưỡng ca/kíp cho nhân viên y tế, công nhân, tài xế đường dài.
- Bệnh nghề nghiệp và lối sống đô thị: ít vận động, ăn ngoài, stress, mất ngủ.

## 5. Trục quản lý nội dung đề xuất

Mỗi bài nên được gắn đủ các trường quản lý sau trong metadata hoặc file chỉ mục phụ:

| Trường | Ví dụ | Mục đích |
|---|---|---|
| `specialty` | `ung-thu`, `noi-tiet`, `tim-mach` | Lọc theo chuyên khoa |
| `conditionCluster` | `cancer-treatment`, `metabolic-syndrome`, `ckd-diabetes` | Gom theo chùm bệnh liên quan |
| `careStage` | `prevention`, `new-diagnosis`, `during-treatment`, `recovery`, `palliative` | Gợi ý bài đúng giai đoạn |
| `audience` | `elderly`, `pregnancy`, `children`, `caregiver` | Cá thể hóa trải nghiệm đọc |
| `riskFlags` | `ckd`, `warfarin`, `neutropenia`, `dysphagia` | Nhắc cảnh báo an toàn |
| `sourceTier` | `guideline`, `review`, `estimate`, `expert-review-needed` | Quản lý độ chắc của nguồn |
| `lastMedicalReview` | `2026-09-10` | Dễ lên lịch kiểm tra lại |

## 6. Chỉ mục “pillar/cluster” nên dùng cho SEO và menu

### Pillar: Bệnh mạn tính người Việt quan tâm

- Đái tháo đường, tiền đái tháo đường, kháng insulin.
- Tăng huyết áp, mỡ máu, bệnh mạch vành, đột quỵ.
- CKD, chạy thận, thận do đái tháo đường/tăng huyết áp.
- Gout, tăng acid uric, triglyceride cao.
- Gan nhiễm mỡ/MASLD, viêm gan B, bệnh gan do rượu.

### Pillar: Dinh dưỡng ung thư

- Bài nền: dinh dưỡng cho người bệnh ung thư.
- Theo loại ung thư: vú, đại trực tràng, phổi, gan, dạ dày, cổ tử cung, tuyến giáp, tụy/đường mật, máu/lymphoma.
- Theo giai đoạn điều trị: trước mổ, sau mổ, hóa trị, xạ trị, miễn dịch/đích, phục hồi, chăm sóc giảm nhẹ.
- Theo triệu chứng: chán ăn, buồn nôn, loét miệng, tiêu chảy, táo bón, thay đổi vị giác, khó nuốt, sụt cân/cachexia.
- Theo an toàn: thực phẩm chức năng, thuốc nam, nhịn ăn/kiêng đường cực đoan, bạch cầu thấp, nhiễm trùng.

### Pillar: Dinh dưỡng gia đình Việt Nam hiện đại

- Ăn ngoài, đặt đồ ăn, cơm văn phòng.
- Đồ uống ngọt, trà sữa, cà phê sữa.
- Thực phẩm siêu chế biến, mì ăn liền, snack, xúc xích.
- Muối ẩn: nước mắm, nước tương, đồ kho, đồ muối chua.
- Bữa sáng học đường, bữa tối gia đình, mâm cơm cho người có bệnh nền.

## 7. Nguồn định hướng chuyên môn

- WHO — Healthy diet: nhấn mạnh ăn lành mạnh giúp phòng suy dinh dưỡng và bệnh không lây như đái tháo đường, tim mạch, đột quỵ, ung thư; đồng thời cảnh báo xu hướng ăn nhiều thực phẩm chế biến, đường, muối, chất béo không lành mạnh.
- WHO — Noncommunicable diseases: nhóm bệnh không lây chính gồm tim mạch, ung thư, hô hấp mạn và đái tháo đường; yếu tố nguy cơ gồm ăn uống không lành mạnh, ít vận động, thuốc lá, rượu bia.
- WHO — Sodium reduction: khuyến nghị giảm natri vì liên quan tăng huyết áp và gánh nặng tim mạch/thận.
- UNICEF Việt Nam — Nutrition: Việt Nam còn “triple burden”: suy dinh dưỡng, thiếu vi chất, đồng thời thừa cân/béo phì ở trẻ em.
- GLOBOCAN 2024 Việt Nam: các ung thư nhiều ca gồm vú, phổi, đại trực tràng, gan, dạ dày; đây là cơ sở để ưu tiên cụm nội dung ung thư.

## 8. Lộ trình triển khai đề xuất

1. P0-A: Tạo cụm 8-10 bài ung thư ưu tiên theo gánh nặng Việt Nam.
2. P0-B: Tạo cụm 5-6 bài triệu chứng trong điều trị ung thư.
3. P0-C: Bổ sung bài đa bệnh mạn tính người cao tuổi và hội chứng chuyển hóa.
4. P1: Bổ sung nhi khoa học đường, sản khoa sau sinh, sốt xuất huyết/lao/viêm gan.
5. Sau mỗi cụm: chạy scanner y khoa, kiểm internal links, cập nhật `RELATED_ARTICLE_OVERRIDES`, build lại search-index.

