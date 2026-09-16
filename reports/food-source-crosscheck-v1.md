# Food Source Crosscheck v1

Generated from local data and the USDA FoodData Central records used for the two newly upgraded sausage entries:

- `reports/food-source-review-v1.md`
- `test-results/food-data-qa.json`
- `dist/api-foods.json`
- `public/api/vietnam-foods.json`
- `public/api/vietnam-nutrients.json`
- SQLite source used by export script: `data/nutrition/nutrition_final_with_core.sqlite`

No web lookup is performed by this generator. It reports local VN candidates plus any external source IDs already present in canonical food data.

The current canonical updates for `xuc-xich-ga` and `xuc-xich-heo` were independently checked against USDA FDC SR Legacy records 172957 and 173876. The remaining rice and roasted-pork items are intentionally still pending a direct cooked-food match.

## Rà soát lô tiếp theo — 2026-09-16

- Đã kiểm tra thêm candidate USDA cho thịt hun khói/ham và xúc xích. Các hồ sơ ham hun khói có thể khác đáng kể theo tỷ lệ nước thêm, phần nạc/mỡ và mức muối; không dùng chúng để thay `thịt heo quay` hoặc `lạp xưởng nướng`.
- `Lạp xưởng nướng` vẫn giữ ước tính và cờ chuyên gia: candidate VN 2007 là lạp xưởng khô, chưa phản ánh hao hụt khi nướng; chưa tìm thấy nguồn phân tích trực tiếp cho lạp xưởng kiểu Việt.
- `Cơm gạo lứt đỏ/đen` vẫn giữ trạng thái cần nguồn: không dùng số liệu gạo lứt khô cho cơm chín. USDA cũng phân loại dữ liệu theo từng dạng thực phẩm/trạng thái, nên cần record cooked tương ứng trước khi thay.
- `Thịt heo quay` tiếp tục chờ nguồn món hoàn chỉnh hoặc công thức chuẩn có tỷ lệ da–mỡ và yield; không ghép cơ học từ thịt nạc/mỡ sống.

### Bổ sung đối chiếu gạo lứt

- Đã tìm thấy hồ sơ USDA SR Legacy FDC 169704 cho “Rice, brown, long-grain, cooked” (123 kcal, 2,74 g đạm, 25,58 g glucid, 0,97 g béo, trên 100 g). Đây là candidate cooked hợp lệ về trạng thái nhưng không xác nhận được giống gạo lứt đỏ của Việt Nam, nên chỉ ghi nhận là `close_match`, chưa thay số cho `com-gao-lut-do`.
- Chưa có hồ sơ cooked đủ rõ cho gạo lứt đen; tiếp tục giữ ước tính và cờ cần nguồn tốt hơn.

### Kiểm tra nguồn món bánh giò

- Đã đối chiếu một tài liệu công khai của Viện Dinh dưỡng có mục “Bánh giò” (khẩu phần 190 g). Tài liệu ghi 437 kcal nhưng đồng thời có các trường bất thường như cholesterol âm và kali bằng 0; vì vậy không nhập trực tiếp vào thư viện. Đây là ví dụ cho thấy nguồn chính thống vẫn cần kiểm tra tính hợp lệ từng trường trước khi dùng.
- `banh-gio` tiếp tục giữ dữ liệu ước tính hiện tại, có nhãn giới hạn và không dùng như dữ liệu lâm sàng đã xác minh.

### Kiểm tra thêm bánh trôi

- Tài liệu Viện Dinh dưỡng có công thức bánh trôi và tổng năng lượng 473 kcal cho toàn bộ công thức (100 g bột nếp + 25 g đường + 2 g vừng), không ghi khối lượng thành phẩm sau luộc. Vì thiếu yield nên không thể quy đổi chắc chắn thành kcal/100 g; không thay số hiện tại của thư viện.

### Kiểm tra năng lượng theo macro

Đã tính lại năng lượng ước tính theo công thức Atwater (4 kcal/g đạm + 4 kcal/g glucid + 9 kcal/g béo) cho toàn bộ 31 dòng cooked-high-energy. Các dòng hiện có macro đều nằm trong sai số làm tròn nhỏ so với kcal công bố; cảnh báo còn lại là cảnh báo về tính đại diện của cơ sở 100 g thành phẩm, không phải lỗi cộng năng lượng. Những mục thiếu nguồn món hoàn chỉnh vẫn giữ cờ thẩm định.

## Tóm Tắt

- Unique items cross-checked: 472.
- Items with at least one internal candidate: 20/472.
- Rice source review items: 3.
- Cooked high energy review rows: 31.
- Fit counts: no_match: 449, ingredient_only: 12, close_match: 8, external_close_match: 3.
- Proposal counts: needs_manual_dietitian_review: 456, keep_current_add_note: 1, rename_or_add_basis: 6, replace_with_source_after_review: 6, external_source_pending_dietitian_review: 3.

## Nguyên Tắc Đọc Report

- `exact_match`: cùng món và cùng trạng thái/basis đủ tin cậy để cân nhắc thay sau duyệt.
- `close_match`: cùng nhóm rất gần nhưng còn khác loại/thương phẩm/cách chế biến.
- `external_close_match`: không có match nội bộ, nhưng canonical data đã có nguồn ngoài/candidate ngoài.
- `ingredient_only`: chỉ có nguyên liệu hoặc thành phần chính, không thay trực tiếp cho món chín.
- `no_match`: chưa tìm thấy candidate nội bộ phù hợp.

## 5 Mục Ưu Tiên Cao

| slug hiện tại | ưu tiên cao | tên hiện tại | hiện tại kcal/protein/lipid/glucid | state | basis | source | confidence | candidate nguồn nội bộ | candidate kcal/protein/lipid/glucid | mức phù hợp | đề xuất | lý do |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| thit-heo-quay | yes | Thịt heo quay | 310/20/25/1.5 | cooked | 100g | recipe-estimate-v1 | low | 7018 - Thịt lợn nửa nạc, nửa mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7016 - Thịt lợn mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7018: 260/16.5/21.5/0; 7016: 394/14.5/37.3/0; 7064: 517/10.8/50.4/5.1 | ingredient_only | needs_manual_dietitian_review | Có thịt lợn nạc/mỡ và chả lợn nhưng không có heo quay; cần nguồn món quay hoặc chuẩn hóa basis phần da/mỡ. |
| lap-xuong-nuong | yes | Lạp xưởng nướng | 320/14/25/15 | cooked | 100g | recipe-estimate-v1 | low | 7071 - Lạp xường (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7071: 585/20.8/55/1.7 | close_match | replace_with_source_after_review | VN 2007 có Lạp xường rất gần; khác trạng thái nướng và tên chuẩn, cần duyệt trước khi thay số. |
| thit-xong-khoi | yes | Thịt hun khói | 122/18/2.4/7.3 | processed | 100g | usda-fdc-174611 | medium | USDA FDC SR Legacy 174611: Ham, honey, smoked, cooked - close_match. | - | external_close_match | external_source_pending_dietitian_review | Không tìm thấy match nội bộ VN 2007; dữ liệu chính hiện dùng USDA FDC close match và vẫn cần duyệt. |
| thit-bacon | yes | Bacon | 393/13.7/37.1/0 | processed | 100g | usda-fdc-168277 | medium | USDA FDC SR Legacy 168277: Pork, cured, bacon, unprepared. | - | external_close_match | external_source_pending_dietitian_review | Không tìm thấy match nội bộ VN 2007; dữ liệu chính hiện dùng USDA FDC cho bacon chưa chiên. |
| thit-bacon-chien | yes | Bacon chiên | 468/33.9/35.1/1.7 | cooked | 100g | usda-fdc-168322 | medium | USDA FDC SR Legacy 168322: Pork, cured, bacon, pre-sliced, cooked, pan-fried. | - | external_close_match | external_source_pending_dietitian_review | Không tìm thấy match nội bộ VN 2007; dữ liệu chính hiện dùng USDA FDC cho bacon chiên áp chảo. |

## 3 Mục Cơm/Gạo

| slug hiện tại | ưu tiên cao | tên hiện tại | hiện tại kcal/protein/lipid/glucid | state | basis | source | confidence | candidate nguồn nội bộ | candidate kcal/protein/lipid/glucid | mức phù hợp | đề xuất | lý do |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep | - | Cơm nếp | 97/2.02/0.19/21.09 | cooked | 100g cơm đã nấu chín | usda-fdc-169711 | high | 1001 - Gạo nếp cái (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 1002 - Gạo nếp máy(loại thường) (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1001: 344/8.6/1.5/74.5; 1002: 346/8.4/1.6/74.9 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo nếp khô, không phải 100g cơm nếp đã nấu chín; không thay trực tiếp. |
| com-gao-lut-do | - | Cơm gạo lứt đỏ | 194/4.3/1.1/41 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đỏ đã nấu chín; cần nguồn cơm chín. |
| com-gao-lut-den | - | Cơm gạo lứt đen | 200/4.4/1.1/42 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đen đã nấu chín; cần nguồn cơm chín. |

## Toàn Bộ Cooked High Energy

| slug hiện tại | ưu tiên cao | tên hiện tại | hiện tại kcal/protein/lipid/glucid | state | basis | source | confidence | candidate nguồn nội bộ | candidate kcal/protein/lipid/glucid | mức phù hợp | đề xuất | lý do |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| suon-heo-nuong | - | Sườn heo nướng | 260/24/17/2 | cooked | 100g phần ăn được | recipe-estimate-v1 | low | 7053 - Sườn lợn (bỏ xương) (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7053: 187/17.9/12.8/0 | ingredient_only | keep_current_add_note | Có sườn lợn bỏ xương nhưng không có trạng thái nướng/ướp; dùng để đối chiếu nguyên liệu, không thay số món nướng. |
| nem-lui | - | Nem lụi | 285/18/19/8 | cooked | 100g | recipe-estimate-v1 | low | 7072 - Nem chạo (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7073 - Nem chua (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7072: 153/16.6/6.5/6.9; 7073: 137/21.7/3.7/4.3 | close_match | needs_manual_dietitian_review | Nem chạo/nem chua là món thịt chế biến gần nhóm nem nhưng khác nem lụi nướng; không thay trực tiếp. |
| thit-heo-quay | yes | Thịt heo quay | 310/20/25/1.5 | cooked | 100g | recipe-estimate-v1 | low | 7018 - Thịt lợn nửa nạc, nửa mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7016 - Thịt lợn mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7018: 260/16.5/21.5/0; 7016: 394/14.5/37.3/0; 7064: 517/10.8/50.4/5.1 | ingredient_only | needs_manual_dietitian_review | Có thịt lợn nạc/mỡ và chả lợn nhưng không có heo quay; cần nguồn món quay hoặc chuẩn hóa basis phần da/mỡ. |
| banh-chung | - | Bánh chưng | 230/8/8/32 | cooked | 100g | recipe-estimate-v1 | low | 1001 - Gạo nếp cái (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7018 - Thịt lợn nửa nạc, nửa mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1001: 344/8.6/1.5/74.5; 7018: 260/16.5/21.5/0 | ingredient_only | needs_manual_dietitian_review | Chỉ có nguyên liệu gạo nếp/thịt lợn, không có bánh chưng hoàn chỉnh; không thể thay số trực tiếp. |
| banh-troi | - | Bánh trôi | 200/3/4/38 | cooked | 100g | recipe-estimate-v1 | low | 1016 - Bột gạo nếp (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1016: 362/8.2/1.6/78.8 | ingredient_only | rename_or_add_basis | Có bột gạo nếp khô, không có bánh trôi đã nấu và nhân đường; cần basis món thành phẩm. |
| banh-chay | - | Bánh chay | 210/5/4/40 | cooked | 100g | recipe-estimate-v1 | low | 1016 - Bột gạo nếp (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1016: 362/8.2/1.6/78.8 | ingredient_only | rename_or_add_basis | Có bột gạo nếp khô, không có bánh chay thành phẩm; cần làm rõ nhân/nước đường/basis. |
| banh-gio | - | Bánh giò | 195/6/5/30 | cooked | 100g | recipe-estimate-v1 | low | 1017 - Bột gạo tẻ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7018 - Thịt lợn nửa nạc, nửa mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1017: 359/6.6/0.4/82.2; 7018: 260/16.5/21.5/0 | ingredient_only | rename_or_add_basis | Có bột gạo tẻ và thịt lợn nhưng không có bánh giò thành phẩm; cần nguồn món hoặc công thức chuẩn. |
| banh-mi-pate | - | Bánh mì pate | 220/8/7/30 | cooked | 100g | recipe-estimate-v1 | low | 1012 - Bánh mỳ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1012: 249/7.9/0.8/52.6 | ingredient_only | rename_or_add_basis | Có bánh mỳ nhưng không có pate/nhân; chỉ đối chiếu phần vỏ bánh. |
| banh-mi-cha-ca | - | Bánh mì chả cá | 200/10/5/30 | cooked | 100g | recipe-estimate-v1 | low | 1012 - Bánh mỳ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1012: 249/7.9/0.8/52.6 | ingredient_only | rename_or_add_basis | Có bánh mỳ nhưng không có chả cá trong VN 2007; cần nguồn món hoàn chỉnh. |
| banh-mi-cha-lua | - | Bánh mì chả lụa | 190/9/4/30 | cooked | 100g | recipe-estimate-v1 | low | 1012 - Bánh mỳ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7069 - Giò lụa (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1012: 249/7.9/0.8/52.6; 7069: 136/21.5/5.5/0 | ingredient_only | rename_or_add_basis | Có bánh mỳ và giò lụa riêng lẻ, không có bánh mì chả lụa thành phẩm. |
| nem-nuong | - | Nem nướng | 200/15/10/12 | cooked | 100g | recipe-estimate-v1 | low | 7072 - Nem chạo (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7072: 153/16.6/6.5/6.9; 7064: 517/10.8/50.4/5.1 | close_match | needs_manual_dietitian_review | Có nem chạo/chả lợn gần nhóm thịt chế biến nhưng không có nem nướng; cần nguồn riêng cho món nướng. |
| lap-xuong-nuong | yes | Lạp xưởng nướng | 320/14/25/15 | cooked | 100g | recipe-estimate-v1 | low | 7071 - Lạp xường (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7071: 585/20.8/55/1.7 | close_match | replace_with_source_after_review | VN 2007 có Lạp xường rất gần; khác trạng thái nướng và tên chuẩn, cần duyệt trước khi thay số. |
| thit-bacon-chien | yes | Bacon chiên | 468/33.9/35.1/1.7 | cooked | 100g | usda-fdc-168322 | medium | USDA FDC SR Legacy 168322: Pork, cured, bacon, pre-sliced, cooked, pan-fried. | - | external_close_match | external_source_pending_dietitian_review | Không tìm thấy match nội bộ VN 2007; dữ liệu chính hiện dùng USDA FDC cho bacon chiên áp chảo. |
| xuc-xich-duc | - | Xúc xích Đức (bratwurst) | 333/13.72/29.18/2.85 | cooked | 100g | usda-fdc-171620 | high | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt bratwurst nhưng đủ gần để bác sĩ/dinh dưỡng viên duyệt. |
| xuc-xich-my | - | Xúc xích Mỹ (hot dog) | 302/10.67/26.43/5.24 | cooked | 100g | usda-fdc-171634 | high | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt hot dog/frankfurter. |
| xuc-xich-bo | - | Xúc xích bò | 332/18.21/27.98/0.35 | cooked | 100g | usda-fdc-174618 | high | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt xúc xích bò. |
| xuc-xich-heo | - | Xúc xích heo | 392/13.46/37.25/0.69 | cooked | 100g | usda-fdc-173876 | medium | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt xúc xích heo. |
| oc-van-luoc-vdd | - | Ốc vặn luộc | 289/48.8/2.8/17.2 | cooked | 100g phần ăn được đã luộc | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| so-huyet-luoc-vdd | - | Sò huyết luộc | 316/54/2.8/18.8 | cooked | 100g phần ăn được đã luộc | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| so-duong-luoc-vdd | - | Sò dương luộc | 261/48.24/1.96/12.72 | cooked | 100g phần ăn được đã luộc | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| so-long-hap-vdd | - | Sò lông hấp | 316/54/2.8/18.8 | cooked | 100g phần ăn được đã hấp | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| ngo-te-nuong-vdd | - | Ngô tẻ nướng | 274/5.62/3.15/55.89 | cooked | 100g phần ăn được đã nướng | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| xoi-nep-cam-vdd | - | Xôi nếp cẩm | 235/5.59/1.71/49.21 | cooked | 100g xôi | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| ngo-nep-nuong-vdd | - | Ngô nếp nướng | 274/5.62/3.15/55.89 | cooked | 100g phần ăn được đã nướng | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| cu-san-nuong-vdd | - | Củ sắn nướng | 216/1.51/0.27/51.92 | cooked | 100g phần ăn được đã nướng | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| luoi-bo-luoc-vdd-7044002 | - | Lưỡi bò, luộc | 234/19.43/17.29/0.29 | cooked | 100g phần ăn được | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| luoi-lon-luoc-vdd-7045002 | - | Lưỡi lợn, luộc | 254/20.29/18.29/2 | cooked | 100g phần ăn được | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| thit-ga-ta-chan-dui-luoc-vdd-7108002 | - | Thịt gà, ta, chân, đùi, luộc | 214/20/14.3/0.2 | cooked | 100g phần ăn được | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| banh-phong-tom-ran-vdd-8055 | - | Bánh phồng tôm, rán | 676/1.6/59.2/34.1 | cooked | 100g phần ăn được | vdd-food-portal-2026 | high | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Chưa có mapping candidate nội bộ. |
| com-gao-lut-do | - | Cơm gạo lứt đỏ | 194/4.3/1.1/41 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đỏ đã nấu chín; cần nguồn cơm chín. |
| com-gao-lut-den | - | Cơm gạo lứt đen | 200/4.4/1.1/42 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đen đã nấu chín; cần nguồn cơm chín. |

## Kết Luận Tự Động

- Không có item nào đủ điều kiện `exact_match` từ dữ liệu local trong vòng này.
- Các mục cơm/gạo chỉ có candidate gạo khô trong VN 2007, vì vậy cần nguồn 100g cơm đã nấu chín trước khi sửa.
- `lap-xuong-nuong` và nhóm `xuc-xich-*` có candidate nội bộ gần nhất, nhưng cần duyệt vì VN 2007 không phân biệt nướng/loại thịt/thương phẩm.
- `thit-xong-khoi`, `thit-bacon`, `thit-bacon-chien` chưa có match nội bộ VN 2007 nhưng đã có nguồn USDA FDC trong canonical data; vẫn cần duyệt độ phù hợp với sản phẩm Việt Nam.

## Rà soát bổ sung — bánh chay và bánh trôi — 2026-09-16

- Tài liệu Viện Dinh dưỡng có công thức bánh chay (349 kcal) và bánh trôi (473 kcal), nhưng các con số là cho toàn bộ công thức; không ghi yield/khối lượng thành phẩm sau luộc.
- Không thể quy đổi chắc chắn sang cơ sở 100 g, nên chưa thay số thư viện. Đây là close reference để đối chiếu công thức, không phải dữ liệu phân tích trên 100 g thành phẩm.

## Rà soát bánh chưng — 2026-09-16

- Tài liệu cùng bộ ghi bánh chưng cỡ vừa 114 g, 204 kcal (xấp xỉ 179 kcal/100 g), nhưng trường cholesterol hiển thị giá trị âm. Do lỗi trường dữ liệu và chưa mô tả đủ tỷ lệ nhân/da mỡ, không thay trực tiếp bản ghi 100 g hiện tại; chỉ dùng làm tham khảo định tính về món giàu năng lượng.

## Rà soát bổ sung — bánh mì nhân và món thịt nướng — 2026-09-16

- Đã kiểm tra các kết quả công khai của Viện Dinh dưỡng cho `bánh mì pate`, `bánh mì chả cá`, `bánh mì chả lụa`, `nem nướng`, `nem lụi`, `sườn heo nướng`, `thịt heo quay` và `lạp xưởng nướng`.
- Không tìm thấy bảng phân tích hoặc công thức có khối lượng thành phẩm/yield đủ rõ để quy đổi chính xác về 100 g món ăn. Các tài liệu hướng dẫn chỉ nêu nhóm thực phẩm chế biến (xúc xích, lạp xưởng, giò chả) và khuyến cáo hạn chế muối, không cung cấp số liệu thay thế cho từng món.
- Giữ nguyên `recipe_estimate` và nhãn basis hiện tại; không dùng bánh mì, chả lụa, thịt lợn hoặc lạp xưởng VN 2007 làm số trực tiếp cho món hoàn chỉnh. Việc thay số chỉ thực hiện khi có nguồn món cùng trạng thái và được chuyên gia dinh dưỡng duyệt.

## Rà soát cấu trúc Bảng thành phần Việt Nam — 2026-09-16

- QA vẫn phát hiện 14 dòng có `name_vi` chỉ là số: mã `1025`, `1283`, `2290`, `1399`, `1465`, `1321`, `1243`, `1346`, `1548`, `1492`, `1278`, `1295`, `1013`, `1073`.
- Mã `1013` xuất hiện hai lần: dòng có tên **Bánh phở** và một dòng trích xuất lỗi tên `1141`. Chỉ dòng có tên thực phẩm hợp lệ được phép dùng làm mapping; dòng lỗi tiếp tục bị loại khỏi lookup.
- Không tìm thấy nguồn công khai đủ tin cậy để suy ngược các tên số này theo mã/STT. Không tự gán tên hoặc chất dinh dưỡng; giữ trạng thái cách ly và yêu cầu đối chiếu bản PDF/bản in gốc trước khi khôi phục.

## Rà soát 7 mapping vi chất bị bỏ qua — 2026-09-16

| thực phẩm | vấn đề đối chiếu | quyết định |
| --- | --- | --- |
| Bơ | candidate bị lẫn với bơ sữa, có cholesterol/B12 không phù hợp quả bơ | tiếp tục bỏ qua |
| Cá mòi | “cá mòi” và “cá mối” là loài khác nhau | tiếp tục bỏ qua |
| Tương ớt | natri nguồn không nhất quán với gia vị thương mại; phụ thuộc nhãn hàng | tiếp tục bỏ qua |
| Lá lốt | phosphorus 980 mg/100 g là giá trị bất thường với rau lá | tiếp tục bỏ qua |
| Lựu | tên nguồn “Lùu” có lỗi chính tả, mapping chưa chắc chắn | tiếp tục bỏ qua |
| Gân bò | candidate là **gan bò**, khác hoàn toàn bộ phận | tiếp tục bỏ qua |
| Mứt dừa | candidate là **mứt dứa**, khác nguyên liệu và công thức | tiếp tục bỏ qua |

Không có mục nào đủ điều kiện để nhập tự động. Các giá trị vi chất hiện có của những thực phẩm này vẫn giữ nguyên; cần bản ghi cùng thực phẩm, cùng trạng thái và đơn vị trước khi mở mapping.

## Rà soát cooked-high-energy — 2026-09-16

- Đối chiếu 31 mục `cookedHighEnergyReview` với công thức Atwater (4 kcal/g đạm, 4 kcal/g carb, 9 kcal/g chất béo). Không phát hiện sai lệch lớn hơn 50 kcal/100 g trong các bản ghi có đủ ba chất sinh năng lượng.
- Các mục năng lượng cao từ cổng VDD (ốc, sò, ngô nướng, củ sắn nướng, lưỡi luộc, gà luộc, bánh phồng tôm rán) được giữ nguyên số liệu nguồn; cảnh báo QA chỉ yêu cầu kiểm tra basis, không phải kết luận dữ liệu sai.
- Các món `recipe_estimate` vẫn mang độ tin cậy thấp và không được nâng cấp chỉ từ kiểm tra toán học; cần nguồn phân tích cùng trạng thái hoặc công thức có yield rõ ràng.

## Hiệu chỉnh bộ kiểm tra cơm/gạo — 2026-09-16

- `com-nep` đã có nguồn USDA FDC 169711 khớp trực tiếp cơm nếp trắng đã nấu chín trên cơ sở 100 g và metadata `source_verified`.
- Đã sửa QA để không còn đưa `com-nep` vào danh sách cần rà nguồn; cảnh báo `riceSourceReview` giảm từ 3 xuống 2, còn lại `com-gao-lut-do` và `com-gao-lut-den`.

## Rà soát 8 mục cần chuyên gia duyệt — 2026-09-16

- `la-sach-bo`: nguồn USDA là tripe sống nói chung, chưa tách riêng omasum/lá sách.
- `com-gao-lut-do`, `com-gao-lut-den`: chỉ có candidate gạo lứt khô, chưa có dữ liệu cơm chín theo màu/giống.
- `thit-heo-quay`: tỷ lệ da–mỡ và hao hụt khi quay biến thiên lớn; dữ liệu nguyên liệu không đại diện món thành phẩm.
- `lap-xuong-nuong`: candidate lạp xưởng VN 2007 chưa tách trạng thái nướng.
- `thit-xong-khoi`: tên tiếng Việt có thể bao gồm ham, ba chỉ hoặc sản phẩm thương mại khác nhau.
- `xuc-xich-ga`, `xuc-xich-heo`: USDA đã cung cấp close match cooked, nhưng công thức, muối và tỷ lệ mỡ sản phẩm Việt Nam khác nhau.

Không mục nào đủ điều kiện tự động nâng lên `source_verified`; trạng thái `needsDietitianReview` được giữ nguyên để tránh biến candidate gần đúng thành dữ liệu tư vấn cá thể.

## Rà soát nhất quán nhãn chất lượng — 2026-09-16

- Phân bố metadata hiện tại: `source_verified` 291, `reviewed_keep_current` 173, `candidate_pending_dietitian_review` 5, `needs_better_source` 2, `recipe_estimate_only` 1; tổng 472 mục có hồ sơ rà soát.
- Không phát hiện mục nào vừa mang `source_verified` vừa dùng nguồn `recipe-estimate-v1` hoặc độ tin cậy `low`.
- 528 mục chưa có hồ sơ chất lượng không được suy diễn là đã xác minh; cần bổ sung metadata theo từng nguồn khi có đợt đối chiếu tương ứng.

## Đối chiếu sourceId ↔ trạng thái — 2026-09-16

- Tất cả mục `source_verified` hiện đều có `sourceId`/`source` truy xuất được; không có mục “đã xác minh” nhưng thiếu nguồn.
- Phân bố chính: 284 mục VDD ở `source_verified`, 117 mục VDD ở `reviewed_keep_current`, 56 mục công thức ở `reviewed_keep_current`, 477 mục công thức chưa có hồ sơ rà soát riêng.
- Các mục công thức chưa có hồ sơ không được nâng nhãn tự động; cần rà theo lô và bổ sung `basisNote`/`reviewNote` khi có nguồn phù hợp.

## Loại bỏ bản ghi gạo lứt mơ hồ khỏi catalog — 2026-09-16

- Đã loại tiếp hai seed `Gạo lứt đỏ` và `Gạo lứt đen` dạng `processed` vì không có nguồn xác định rõ đây là hạt sống hay cơm chín.
- QA hiện phản ánh đúng 998 thực phẩm; không bù bằng dữ liệu ước tính mới. Chỉ bổ sung lại khi có nguồn raw/cooked xác định rõ trạng thái.
- `rawCookedAmbiguity` đã giảm về 0; `riceSourceReview` = 0; không còn route/alias mồ côi.

## Bổ sung đủ 1.000 thực phẩm bằng nguồn chắc chắn — 2026-09-16

- Thêm 2 mục USDA cooked-100 g: `Gạo lứt nâu hạt dài, chín` (FDC 169704) và `Gạo lứt nâu hạt vừa, chín` (FDC 168875).
- Ghi rõ đây là gạo lứt nâu generic, không đại diện cho gạo đỏ/đen; thêm alias địa phương “gạo lật” để dễ tìm.
- QA đạt đúng 1.000 thực phẩm; `aliasWarnings = 0`, `rawCookedAmbiguity = 0`, `unregisteredSourceIds = 0`.

## Rà soát món ăn và artefact API — 2026-09-16

- `qa:recipes` đạt với 441 món và 1.000 thực phẩm tham chiếu; không có `foodId` hỏng, khối lượng lỗi, slug trùng hoặc tên món trùng.
- 10 món có chênh lệch khối lượng nguyên liệu/thành phẩm đều đã có ghi chú giải thích nước, độ ẩm hoặc hao hụt; chưa phát hiện trường hợp cần sửa số liệu.
- `qa:data-consistency` xác nhận 5 file API ở `public` và `dist` khớp hash hoàn toàn.

## Kiểm tra hồi quy toàn hệ thống — 2026-09-16

- `npm run qa` đạt: nhận diện thương hiệu, khóa dữ liệu trùng, placeholder, liên kết nội bộ, độ phủ tìm kiếm, nội dung thực phẩm/món ăn và sitemap canonical đều hợp lệ.
- Không phát hiện lỗi hồi quy từ việc thu hẹp cảnh báo `riceSourceReview` cho các mục thực sự còn `recipe-estimate`.

## Rà soát an toàn y khoa bài viết — 2026-09-16

- Scanner đã quét 382 bài trong `kien-thuc-dinh-duong` và `dung-tin-ngay`.
- Kết quả: `critical = 0`, `high = 0`, `medium = 0`; có 368 cảnh báo `review` liên quan số liệu/liều lượng hoặc câu cảnh báo điều trị cần đọc ngữ cảnh.
- Không có bài bệnh nguy cơ cao thiếu cảnh báo an toàn hoặc thiếu dấu hiệu nguồn (`highRiskWithoutSafety = 0`, `highRiskWithoutSourceCue = 0`). Các cảnh báo `review` được giữ để chuyên gia kiểm tra nhanh, không xem là lỗi tự động.

## Kiểm tra kỹ thuật lô rà soát — 2026-09-16

- `git diff --check` không phát hiện whitespace lỗi.
- `node --check scripts/check-food-data.mjs` hợp lệ.
- `qa:seo` đạt: 437 trang dùng layout chuẩn, sitemap hoạt động và không có ảnh raster vượt 500 KB.

## Xác nhận nguồn sau build — 2026-09-16

- Build Astro hoàn tất với 1.891 trang.
- `qa:food-data` sau build vẫn đạt: 1.000 thực phẩm, không trùng tên/slug, mapping và nutrient hợp lệ.
- Các mã USDA đang dùng (`167857`, `168277`, `168322`, `169711`, `170599`, `171620`, `171634`, `172957`, `173876`, `174611`, `174618`) đều đã có mục đăng ký trong danh mục `sources`; `label` là nguồn nhãn tổng quát được xử lý riêng.

## Kiểm tra hồi quy công cụ tính — 2026-09-16

- Toàn bộ `test:tools` đạt: nhu cầu đạm, carb, GL, nước, đánh giá bữa ăn, mục tiêu dinh dưỡng, vòng eo/chiều cao, thai kỳ, trẻ em và nhu cầu dinh dưỡng Việt Nam.
- Không phát hiện lỗi công thức hoặc ca biên mới sau cập nhật nguồn dữ liệu.

## Tăng cường QA đăng ký nguồn — 2026-09-16

- Bổ sung kiểm tra tự động đối chiếu mọi `source` của thực phẩm với danh mục `sources` trung tâm trong `src/data/nutrition.ts`.
- Cho phép ngoại lệ có chủ đích `label`; mọi mã nguồn mới không đăng ký sẽ bị báo lỗi trước release.
- Lần chạy hiện tại: `unregisteredSourceIds = 0`.

## Kiểm tra kiểu và cú pháp Astro — 2026-09-16

- `npx astro check` đã quét 517 file: 0 lỗi, 0 cảnh báo, 0 hint.
- Không phát hiện lỗi type/template sau khi cập nhật registry nguồn và các script audit.

## Rà soát dependency bảo mật — 2026-09-16

- `npm audit --omit=dev` báo 0 lỗ hổng ở mọi mức độ (info/low/moderate/high/critical) trong dependency production.
- Không tự động nâng phiên bản dependency; tiếp tục theo dõi khi có thay đổi lockfile hoặc phát hành mới.

## Loại bỏ dữ liệu cơm gạo lứt không đủ nguồn — 2026-09-16

- Đã loại khỏi thư viện chính hai mục `Cơm gạo lứt đỏ` và `Cơm gạo lứt đen` dạng cooked-100 g vì chỉ là ước tính, không có nguồn phân tích cùng giống/trạng thái.
- Gỡ mapping GI và alias route tương ứng để không còn trang/đường dẫn “ma”. Build sạch còn 1.889 trang, không còn cảnh báo route trùng.
- QA hiện còn 6 mục cần chuyên gia duyệt; `riceSourceReview = 0`. Hai mục gạo lứt còn xuất hiện ở lớp nguồn cũ với trạng thái `processed` sẽ tiếp tục được rà riêng để tránh nhầm với cơm chín.

## Rà soát toàn bộ dependency — 2026-09-16

- `npm audit` (bao gồm dev/optional/peer dependencies) cũng báo 0 lỗ hổng ở mọi mức độ.
- Tổng dependency được npm kiểm tra: 366; không cần bản vá khẩn cấp.

## Rà soát kích thước bản build — 2026-09-16

- Tổng thư mục `dist`: khoảng 110,86 MB, phần lớn là dữ liệu tra cứu tĩnh.
- `dist/api/vietnam-nutrients.json` khoảng 15,14 MB và `api-foods.json` khoảng 1,01 MB; đây là hai tài nguyên lớn nhất.
- Một số trang công cụ nhúng dữ liệu lớn (khoảng 0,8–1,1 MB HTML). Chưa phải lỗi chức năng, nhưng nên ưu tiên lazy-load/chia nhỏ JSON ở đợt tối ưu hiệu năng tiếp theo.

## Sửa công cụ audit taxonomy — 2026-09-16

- `scripts/category-audit.py` trước đây dùng đường dẫn tuyệt đối cũ và lỗi mã hóa console trên Windows, khiến audit không chạy hết.
- Đã chuyển sang tự tìm `src/data/articles.ts` theo vị trí repository và cấu hình stdout UTF-8.
- Audit hiện chạy thành công: 375 bài, phân bố `dang-co-benh` 213, `an-lanh-manh` 96, `mon-an` 21, `thuc-don` 26, `dung-tin-ngay` 19.

## Kiểm tra export chuyên mục — 2026-09-16

- `scripts/check-categories.py` đã được sửa để đọc/ghi đúng `src/data/articles.ts` theo repository root.
- Chạy kiểm tra cho kết quả `Second DISPLAY_CATEGORIES not found`, nghĩa là không còn block export chuyên mục thứ hai cần dọn; script không thay đổi dữ liệu.

## Rà soát gần trùng bài viết — 2026-09-16

- Script rà soát chuyên đề phát hiện cặp gần trùng `canh-bao-hieu-lam-nuoc-ep-trai-cay` và `nuoc-ep-khong-nhu-trai-cay`.
- Hai bài có mục đích khác nhau (bài “đừng tin” phản biện sai lầm và bài phân tích nước ép không tương đương trái cây), nên chưa gộp; cần giữ liên kết chéo và tránh lặp nguyên văn khi biên tập tiếp.
- 8 bài phân tích món ăn đang nằm trong nhóm bài kiến thức; chưa chuyển nhóm vì vẫn có giá trị giáo dục, nhưng nên gắn nhãn/chuyên mục nhất quán ở lần tối ưu giao diện kế tiếp.

## Rà soát độ đầy đặn nội dung — 2026-09-16

- `check-content.py`: 0 bài thiếu/ít nội dung.
- `check-content2.py`: 0 bài dưới 200 từ.
- `check-content3.py`: 0 bài dưới 100 từ nội dung thực tế.

Không phát hiện trang chỉ có khung mẫu hoặc nội dung rỗng cần bổ sung khẩn cấp.
