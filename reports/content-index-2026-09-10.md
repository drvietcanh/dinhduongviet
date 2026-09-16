# Chỉ mục nội dung & lộ trình mở rộng bài viết dinh dưỡng

Ngày rà soát: 2026-09-15
Phạm vi: `src/data/articles.ts`, `src/pages/kien-thuc-dinh-duong/`, `src/pages/dung-tin-ngay/`

## 1. Kết quả quét nhanh

- Tổng metadata bài viết trong `articles.ts`: 375 bài.
- Scanner y khoa quét: 382 trang trong `src/pages/kien-thuc-dinh-duong/` và `src/pages/dung-tin-ngay/`.
- Critical/High/Medium: 0; Review: 368 điểm (250 có số liệu/liều lượng, 118 cụm từ hoặc diễn đạt cần đọc ngữ cảnh); không có nội dung rủi ro cao thiếu cảnh báo an toàn hoặc gợi ý nguồn. Theo rule: `review-dose-number` 250; `critical-treatment-replacement` 66; `high-absolute-restriction` 4; `high-pseudoscience` 19; `medium-overclaim` 29. Các mục thuốc, số liệu trong ví dụ, từ khóa kiêng cấm/“thải độc” có thể nằm trong câu phủ định, cảnh báo hoặc ngữ cảnh; cần đọc nội dung, không coi kết quả tự động là lỗi.
- Kiểm tra danh mục: 0 slug trùng, 0 tiêu đề trùng; cả 375 metadata đều có trang tương ứng. 5 file không thuộc metadata là trang chuyển tiếp hợp nhất/đổi địa chỉ; 2 file còn lại là trang chỉ mục.
- Nhận định: chưa thấy cảnh báo chuyên môn mức Critical/High/Medium từ scanner. Nhiều điểm Review là câu phủ định/cảnh báo hoặc ngưỡng được scanner đánh dấu để đọc lại, không tự động đồng nghĩa có sai sót. Vẫn còn lượt xác minh nguồn cho các số liệu theo nhóm nguy cơ; không xem số 0 này là chứng nhận mọi nội dung đã được bác sĩ thẩm định.

## 2. Chỉ mục theo nhóm bài

| Nhóm | Số bài | Nhận xét quản lý |
|---|---:|---|
| Bệnh lý | 224 | Lõi website; phủ rộng bệnh mạn tính, tiêu hóa, nội tiết, tim mạch và nội dung thuốc liên quan. |
| Giáo dục dinh dưỡng | 113 | Nhiều bài nền tảng và “đừng tin ngay”; tốt cho tìm kiếm phổ thông. |
| Đối tượng/tình huống đặc biệt | 31 | Có thai kỳ, người già, đi làm, đi du lịch, sau phẫu thuật. |
| Hướng dẫn/tháp dinh dưỡng | 7 | Còn mỏng; nên tăng bài nền về khuyến nghị Việt Nam, khẩu phần, đồ uống, thực phẩm siêu chế biến. |

## 3. Chỉ mục theo chuyên khoa hiện có

| Chuyên khoa | Số bài | Mức độ phủ |
|---|---:|---|
| Dinh dưỡng tổng quát | 63 | Mạnh; thêm hướng dẫn dùng corticoid dài ngày |
| Tiêu hóa/gan mật | 57 | Mạnh |
| Nội tiết/chuyển hóa | 47 | Mạnh |
| Tim mạch | 30 | Khá mạnh |
| Thận - tiết niệu | 15 | Khá |
| Nhi khoa | 14 | Khá, nên tăng bài thực hành gia đình |
| Thần kinh | 14 | Khá |
| Huyết học/miễn dịch | 14 | Khá |
| Hô hấp | 12 | Khá |
| Cơ xương khớp | 13 | Trung bình; có thêm methotrexate và bữa ăn bên cạnh alendronate |
| Lão khoa | 13 | Trung bình |
| Da liễu | 11 | Trung bình |
| Phụ nữ/nhi & đời sống | 12 | Trung bình |
| Ung thư | 27 | Khá; tiếp tục bổ sung theo giai đoạn điều trị và triệu chứng |
| Sản khoa | 11 | Đã tăng nội dung đái tháo đường thai kỳ và theo dõi sau sinh; tiếp tục mở rộng chọn lọc |
| Ngoại khoa/hậu phẫu | 5 | Mỏng |
| Truyền nhiễm | 6 | Mỏng; vừa bổ sung lao, thuốc và dinh dưỡng |
| Dinh dưỡng thể thao | 4 | Mỏng nhưng không phải ưu tiên y tế cộng đồng |
| Tai mũi họng | 4 | Vừa bổ sung ăn uống sau cắt amidan; tiếp tục ưu tiên chủ đề có ảnh hưởng ăn/nuốt rõ |
| Dị ứng | 3 | Mỏng; vừa thêm hướng dẫn xác nhận dị ứng và tránh kiêng quá rộng |

## 4. Khoảng trống và thứ tự ưu tiên hiện tại

Đã bổ sung/chuẩn hóa trong đợt rà soát 2026-09-15:

- Đái tháo đường thai kỳ sau sinh: OGTT 75 g ở tuần 4–12 và tầm soát lâu dài; chuyển phân loại bài thai kỳ hiện có từ Nhi khoa sang Sản khoa.
- Lao phổi: thời điểm dùng thuốc theo toa, tương tác rifamycin, B6 theo chỉ định, suy dinh dưỡng và dấu hiệu độc tính cần báo.
- Thuốc loãng xương alendronate: tương tác với thức ăn/canxi và cách uống đúng theo chế phẩm.
- Dị ứng thực phẩm người lớn: tránh kiêng diện rộng, chẩn đoán đúng, thay thế dinh dưỡng và phòng lẫn chéo.
- Tai Mũi Họng/hậu phẫu: ăn uống sau cắt amidan, cân bằng giữa hướng dẫn hậu phẫu khác nhau và cảnh báo chảy máu.
- Rà soát lại B12/metformin, warfarin/rau xanh, phân biệt kháng đông với kháng kết tập tiểu cầu; mở bài tương tác thuốc–thực phẩm từ 10 lên 11 tình huống.
- Rà soát tiếp bài tương tác thuốc–thực phẩm: ghi rõ ciprofloxacin cách một số thuốc/khoáng chất chứa đa hóa trị cation ít nhất 2 giờ trước hoặc 6 giờ sau; phân biệt dùng viên ciprofloxacin với sữa riêng và dùng trong bữa ăn; tách lưu ý tránh lượng lớn tyramine của linezolid khỏi hướng dẫn riêng của MAOI cổ điển. Đối chiếu nhãn DailyMed cho ciprofloxacin, levothyroxine, alendronate và linezolid, đồng bộ nguồn vào metadata bài.
- Cập nhật bài sốt xuất huyết theo Quyết định 2760/QĐ-BYT và CDC 2026: làm rõ giai đoạn hạ sốt, cảnh báo quá tải dịch ở nhóm bệnh nền, bỏ lời khuyên kiêng món theo màu và phân biệt tình huống minh họa.
- Thêm hướng dẫn dinh dưỡng khi dùng corticoid dài ngày và methotrexate liều thấp cho viêm khớp; nhấn lịch thuốc/folate theo toa, theo dõi chuyển hóa–xương và an toàn thực phẩm, không tự chỉnh thuốc.
- Rà lại bài tăng cơ và ăn tiệc/gout: bỏ mục tiêu đạm, nước, số trứng cố định cho mọi người; sửa lời khuyên cấm toàn bộ tôm/cua/ghẹ và bổ sung nguồn ACR.
- Rà soát độ tương đồng nội dung phát hiện 10 bài “Cảnh báo hiểu lầm” cùng lặp bảng liên kết 10 chủ đề không liên quan. Đã thay bằng hướng dẫn và đường dẫn theo đúng chủ đề; đồng thời sửa các diễn đạt tuyệt đối/sai lệch về GI nước ép, đạm ở gout, thực phẩm bổ sung cho gan, chế độ bệnh thận, muối kali và đồ uống thực vật. Quét tương đồng văn bản heuristic sau sửa không còn cặp vượt ngưỡng sàng lọc 0,18; đây không thay cho biên tập ngữ nghĩa thủ công.
- Chuẩn hóa lại hướng dẫn giảm cân và chọn sữa: bỏ mục tiêu calo, tỷ lệ chất đạm, nước, tốc độ giảm cân áp chung; bổ sung nhóm cần tư vấn riêng và nguồn CDC/NIDDK. Sửa nhầm lẫn giữa lactose tự nhiên với “đường tự do” WHO, phân biệt bất dung nạp lactose và dị ứng sữa, làm rõ khác biệt giữa sữa đậu nành tăng cường với các đồ uống thực vật khác.
- Rà soát thủ công cụm 12 thực đơn mẫu đái tháo đường, gout và tăng huyết áp (bản cơ bản, bình dân, đi làm, người lớn tuổi): bỏ tổng kcal/carbohydrate/purin/natri ước tính khi không có công thức và dữ liệu khẩu phần đáng tin; bỏ mục tiêu nước, giờ ăn, tần suất thịt và danh sách cấm áp chung; thêm lưu ý cá thể hóa theo thuốc, bệnh thận/tim, tình trạng dịch, dinh dưỡng và khả năng nhai/nuốt. Đính nguồn ADA cho ăn theo đái tháo đường/hạ đường huyết, ACR cho gout và WHO cho natri.
- Sửa lỗi quy đổi trong thực đơn tăng huyết áp: hướng dẫn WHO là dưới 2.000 mg natri/ngày, tương đương dưới 5 g muối/ngày cho người trưởng thành nói chung — không phải dưới 2 g muối. Làm rõ pha loãng nước mắm hoặc rửa cá hộp không xóa lượng natri đã dùng; bỏ số muối theo từng bữa không có dữ liệu công thức.
- Sửa hướng dẫn hạ đường huyết ở thực đơn người cao tuổi mắc đái tháo đường: theo kế hoạch xử trí cá nhân; không cho ăn/uống qua miệng khi lơ mơ, bất tỉnh hoặc không nuốt an toàn; gọi cấp cứu và dùng glucagon nếu đã được kê, người chăm sóc biết cách sử dụng.
- Rà soát cụm bệnh thận theo KDIGO 2024/NIDDK/NKF: thay bảng đạm 0,6–0,8 g/kg theo eGFR bằng mức tham khảo khoảng 0,8 g/kg/ngày cho nhiều người lớn CKD G3–G5 chưa lọc máu; sửa natri thành dưới 2.000 mg/ngày (dưới 5 g muối) ở mức tham khảo; bỏ công thức dịch 500 ml + nước tiểu, ngưỡng tiểu ít 400 ml/ngày, giới hạn trái cây một phần/ngày và nhãn rau quả ít/cao kali áp dụng chung. Nêu rõ kali/phốt pho dựa trên xét nghiệm, thuốc, khẩu phần và chỉ định.
- Sửa bài tăng kali máu: nhấn mạnh tăng nhẹ thường ít/không triệu chứng, cần xét nghiệm; bác sĩ rà soát thuốc, chất bổ sung và muối thay thế; không tự dừng thuốc hoặc dùng danh sách cấm rau quả. Bổ sung dấu hiệu cần chăm sóc khẩn cấp và nguồn NKF/NIDDK.
- Sửa bài lọc máu: làm rõ albumin thấp không tự chẩn đoán suy dinh dưỡng; bỏ phân nhóm rau quả “ít kali” dùng chung và diễn đạt nguồn phốt pho theo phụ gia/khẩu phần.
- Hiệu đính bài nội tạng: bỏ tuyên bố gan tích độc, ngâm sữa khử độc, định lượng và tần suất cố định; thêm lưu ý tránh gan/sản phẩm từ gan trong thai kỳ, không tự điều trị thiếu máu bằng thực phẩm, và cá thể hóa ở gout/CKD.
- Rà soát thêm cụm gan nhiễm mỡ/MASLD: thay thuật ngữ NAFLD cũ ở bài nền bằng MASLD/MASH; bỏ khẳng định fructose “độc”, HFCS “độc dược số 1”, cấm trái cây ngọt/cơm trắng, bảng quy kết một chất dinh dưỡng là “thủ phạm chính” và ngưỡng ALT tự đi khám; phân biệt đường tự do trong đồ uống với đường tự nhiên trong trái cây nguyên quả.
- Viết lại 4 thực đơn gan nhiễm mỡ: bỏ mức 1.400–1.500 kcal và giờ ăn/khẩu phần cứng, không áp thực đơn giảm cân cho người già hoặc người có xơ gan/CKD/đái tháo đường; thay bằng gợi ý món Việt linh hoạt và nhắc cá thể hóa.
- Sửa bài gan nhiễm mỡ ở người cân nặng bình thường: bỏ tỷ lệ phổ biến không có dẫn chứng tại chỗ, ngưỡng BMI 22, mục tiêu giảm cân, thực đơn kcal và lịch tập bắt buộc; nhấn mạnh tìm nguyên nhân, không tự giảm cân, khám nếu sụt cân hoặc có nguy cơ chuyển hóa.
- Bài MASLD/MASH không còn phân loại nguy cơ thấp từ siêu âm “mỡ nhẹ” hay men gan bình thường; giải thích đánh giá xơ hóa nhiều bước (FIB-4 do nhân viên y tế diễn giải, có thể cần đo đàn hồi gan) và không dùng men gan đơn lẻ để loại trừ bệnh.
- Hiệu đính lại bài ăn ngoài: bỏ tỷ lệ hộp cơm, tần suất món hấp và mẹo đặt hạn mức uống rượu thiếu cơ sở; cập nhật lựa chọn thực tế, không áp giờ ăn hoặc bỏ cơm.
- Rà soát cụm xơ gan theo AASLD/EASL/NIDDK: sửa natri thành dưới 2.000 mg/ngày (xấp xỉ dưới 5 g muối) khi có cổ trướng theo chỉ định, không hạn chế dịch thường quy nếu chưa có hạ natri máu, không giảm đạm khi bệnh não gan; bỏ khuyến nghị BCAA/vitamin và mốc cân nặng dùng chung.
- Rà soát bài PCOS theo hướng dẫn quốc tế 2023: bỏ khẳng định PCOS do ăn tinh bột/insulin một chiều và low-GI là chế độ ưu tiên; giải thích không có một kiểu ăn vượt trội cho mọi người, tránh kỳ thị cân nặng, làm rõ inositol có lợi ích lâm sàng hạn chế và chưa có dạng/liều khuyến nghị chung.
- Rà soát bài ung thư vú theo ASCO/NCI/ACS: bỏ đạm 1,2–1,5 g/kg áp chung khi hóa trị, bỏ gợi ý kiêng đậu nành khi dùng tamoxifen, sửa thông điệp về đường/thịt và tái phát; phân biệt thực phẩm đậu nành với viên isoflavone và nhấn mạnh hỗ trợ dinh dưỡng theo tác dụng phụ.
- Sửa bài gai đen/kháng insulin ở thanh thiếu niên: bỏ nhịn ăn 16:8 và giấm táo như “giải pháp”, bỏ mô hình insulin đơn tuyến và hướng dẫn ăn kiêng; thêm sàng lọc đường huyết theo nguy cơ ở trẻ vị thành niên, cách diễn giải gai đen và khuyến nghị hỗ trợ gia đình không kỳ thị.
- Chỉnh bài viêm gan B mạn: bỏ mục tiêu rau quả theo gram gán riêng cho HBV; làm rõ rằng người có xơ gan ở bất kỳ giai đoạn nào hoặc bệnh đi kèm cần cá thể hóa, không chỉ người mất bù.
- Quét lại scanner: 382 trang, 0 Critical/High/Medium, 368 Review; 0 bài bị nhận diện nguy cơ cao thiếu cảnh báo hoặc tín hiệu nguồn. Các điểm Review vẫn cần được đọc thủ công và không phải xác nhận y khoa tự động.
- Sau cập nhật thuốc–thực phẩm, quét toàn bộ vẫn là 382 trang, 0 Critical/High/Medium và 368 Review; 2 điểm của bài này đều là nhắc đọc ngữ cảnh (một câu phủ định thay thế tờ thuốc và con số cách 4 giờ đã có nhãn chính thức làm nguồn). `astro check` đạt 517 file, không lỗi/cảnh báo/hint; build đạt 1.897 trang, dữ liệu 1.000 thực phẩm/447 món/375 bài/38 công cụ; QA và `git diff --check` đạt.

Ưu tiên tiếp theo:

1. **Xác minh 250 Review có số liệu/liều lượng** theo nhóm ưu tiên: liều thuốc và tương tác, giới hạn natri/dịch/kali/phospho, ngưỡng xét nghiệm, trẻ em, thai kỳ, bệnh thận/gan và ung thư; phân biệt số trong CSS/tình huống minh họa với khuyến nghị lâm sàng, ghi nguồn ngay cạnh con số cần áp dụng. 118 điểm còn lại là cụm từ/diễn đạt cần đọc ngữ cảnh; đây không phải kết luận tự động rằng bài sai.
2. **Thuốc dùng dài ngày ở bệnh mạn**: xem xét theo từng hoạt chất/nhóm thuốc (corticoid, thuốc lợi tiểu, thuốc hạ đường huyết, thuốc tuyến giáp, thuốc chống đông), chỉ viết tương tác khi có bằng chứng cụ thể, không tạo danh sách cấm chung.
3. **Chuyên khoa ít bài nhưng có ích dinh dưỡng rõ**: Tai Mũi Họng/nuốt khó, ngoại khoa/hậu phẫu và dị ứng. Không tăng số lượng bằng bài lặp lại; mỗi bài mới cần một câu hỏi thực hành riêng.
4. **Bài cơ bản theo bệnh phổ biến**: duy trì cụm tăng huyết áp, đái tháo đường, bệnh thận, tim mạch, gan, hô hấp mạn và ung thư theo triệu chứng/giai đoạn điều trị; rà đường dẫn và nguồn khi hướng dẫn chuyên môn thay đổi.

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
| `lastMedicalReview` | `2026-09-15` | Dễ lên lịch kiểm tra lại |

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

## 8. Quy trình duy trì chỉ mục

1. Mỗi bài mới phải có câu hỏi độc giả riêng, chuyên khoa chính xác, keywords/nguồn cụ thể và đường dẫn liên quan; kiểm tra slug/title/ý định trước khi viết.
2. Sau mỗi cụm nội dung, chạy scanner y khoa; xử lý CRITICAL/HIGH/MEDIUM trước, rồi đọc ngữ cảnh các REVIEW có thuốc, liều, ngưỡng hoặc nhóm nguy cơ.
3. Đồng bộ trang `.astro`, `src/data/articles.ts`, `RELATED_ARTICLE_OVERRIDES` và search-index; bảo đảm mọi trang được lập chỉ mục hoặc là trang chuyển tiếp có đích đúng.
4. Chạy `npx astro check`, `npm run qa` và `npm run build`; kiểm tra diff để không ghi đè dữ liệu/search index do phiên khác đang chỉnh.
5. Bài y khoa cần bác sĩ/dược sĩ chịu trách nhiệm duyệt trước khi hiển thị tên người rà soát; ngày biên tập và nguồn tham khảo không đồng nghĩa với phê duyệt lâm sàng.
