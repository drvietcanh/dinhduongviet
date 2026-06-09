# Food Source Decision v1

Generated for doctor/dietitian approval before changing the canonical food data.

Inputs read:

- `reports/food-source-crosscheck-v1.md`
- `reports/food-source-review-v1.md`
- `test-results/food-data-qa.json`
- `dist/api-foods.json`
- `public/api/vietnam-foods.json`
- `public/api/vietnam-nutrients.json`

No nutrition values, slugs, names, sources, or canonical food records were changed.

## Tóm Tắt

- Unique decision items: 23.
- Rice source review items: 3.
- Cooked high energy review items: 23.
- Note: the 3 rice items also appear inside cooked high energy review, so the combined unique count remains 23.

Decision counts:

- do_not_change_yet: 3
- keep_current_add_note: 10
- recipe_estimate_only: 1
- replace_after_dietitian_review: 6
- needs_external_source: 3

Risk counts:

- high: 7
- medium: 16

Fit counts:

- ingredient_only: 12
- close_match: 8
- no_match: 3

## Nguyên Tắc Duyệt

- `keep_current`: giữ nguyên hiện tại, chưa cần thay đổi.
- `keep_current_add_note`: giữ số hiện tại, sau duyệt có thể bổ sung basis/note/source note rõ hơn.
- `replace_after_dietitian_review`: có candidate nội bộ gần nhất, chỉ thay sau khi bác sĩ/dinh dưỡng viên duyệt.
- `needs_external_source`: dữ liệu nội bộ không có candidate đủ gần, cần nguồn ngoài hoặc nguồn chuyên môn.
- `recipe_estimate_only`: chỉ nên xem là ước tính công thức, không thay bằng nguyên liệu đơn lẻ.
- `do_not_change_yet`: chưa đủ căn cứ để sửa bất kỳ metadata chính hoặc số liệu.

## Item Có Thể Sửa Sau Khi Duyệt

- `lap-xuong-nuong`: Lạp xưởng nướng -> replace_after_dietitian_review; candidate: 7071 - Lạp xường 585/20.8/55/1.7 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion).
- `xuc-xich-duc`: Xúc xích Đức (bratwurst) -> replace_after_dietitian_review; candidate: 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion).
- `xuc-xich-my`: Xúc xích Mỹ (hot dog) -> replace_after_dietitian_review; candidate: 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion).
- `xuc-xich-bo`: Xúc xích bò -> replace_after_dietitian_review; candidate: 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion).
- `xuc-xich-ga`: Xúc xích gà -> replace_after_dietitian_review; candidate: 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion).
- `xuc-xich-heo`: Xúc xích heo -> replace_after_dietitian_review; candidate: 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion).

## Item Bắt Buộc Cần Nguồn Ngoài

- `thit-xong-khoi`: Thịt hun khói; Không có candidate nội bộ cho thịt hun khói/xông khói.
- `thit-bacon`: Bacon; Không có candidate nội bộ cho bacon; không thay bằng thịt lợn mỡ.
- `thit-bacon-chien`: Bacon chiên; Không có candidate nội bộ cho bacon chiên.

## 5 Mục Ưu Tiên Cao

| slug | priority | name | current kcal/protein/lipid/glucid | state | basis | source | confidence | best internal candidate | fit | risk level | proposed decision | reason | doctor_decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| thit-heo-quay | yes | Thịt heo quay | 310/20/25/1.5 | cooked | 100g | recipe-estimate-v1 | low | 7018 - Thịt lợn nửa nạc, nửa mỡ 260/16.5/21.5/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7016 - Thịt lợn mỡ 394/14.5/37.3/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn 517/10.8/50.4/5.1 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | recipe_estimate_only | Chỉ có nguyên liệu/thịt chế biến khác, không có món heo quay; cần duyệt công thức hoặc nguồn món quay. |  |
| lap-xuong-nuong | yes | Lạp xưởng nướng | 320/14/25/15 | cooked | 100g | recipe-estimate-v1 | low | 7071 - Lạp xường 585/20.8/55/1.7 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | VN 2007 có Lạp xường gần nhất; cần duyệt vì khác trạng thái nướng và tên chuẩn. |  |
| thit-xong-khoi | yes | Thịt hun khói | 390/14/37/1 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | no_match | high | needs_external_source | Không có candidate nội bộ cho thịt hun khói/xông khói. |  |
| thit-bacon | yes | Bacon | 541/37/42/1.4 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | no_match | high | needs_external_source | Không có candidate nội bộ cho bacon; không thay bằng thịt lợn mỡ. |  |
| thit-bacon-chien | yes | Bacon chiên | 500/35/40/1.5 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | no_match | high | needs_external_source | Không có candidate nội bộ cho bacon chiên. |  |

## 3 Mục Cơm/Gạo

| slug | priority | name | current kcal/protein/lipid/glucid | state | basis | source | confidence | best internal candidate | fit | risk level | proposed decision | reason | doctor_decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep |  | Cơm nếp | 187/4.2/1/40 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1001 - Gạo nếp cái 344/8.6/1.5/74.5 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 1002 - Gạo nếp máy(loại thường) 346/8.4/1.6/74.9 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | do_not_change_yet | Candidate nội bộ là gạo nếp khô, không phải 100g cơm nếp đã nấu chín. |  |
| com-gao-lut-do |  | Cơm gạo lứt đỏ | 194/4.3/1.1/41 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt 345/7.5/2.7/72.8 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | do_not_change_yet | Candidate nội bộ là gạo lứt khô chung, không phải cơm gạo lứt đỏ đã nấu chín. |  |
| com-gao-lut-den |  | Cơm gạo lứt đen | 200/4.4/1.1/42 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt 345/7.5/2.7/72.8 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | do_not_change_yet | Candidate nội bộ là gạo lứt khô chung, không phải cơm gạo lứt đen đã nấu chín. |  |

## Toàn Bộ Decision Table

| slug | priority | name | current kcal/protein/lipid/glucid | state | basis | source | confidence | best internal candidate | fit | risk level | proposed decision | reason | doctor_decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep |  | Cơm nếp | 187/4.2/1/40 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1001 - Gạo nếp cái 344/8.6/1.5/74.5 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 1002 - Gạo nếp máy(loại thường) 346/8.4/1.6/74.9 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | do_not_change_yet | Candidate nội bộ là gạo nếp khô, không phải 100g cơm nếp đã nấu chín. |  |
| com-gao-lut-do |  | Cơm gạo lứt đỏ | 194/4.3/1.1/41 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt 345/7.5/2.7/72.8 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | do_not_change_yet | Candidate nội bộ là gạo lứt khô chung, không phải cơm gạo lứt đỏ đã nấu chín. |  |
| com-gao-lut-den |  | Cơm gạo lứt đen | 200/4.4/1.1/42 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt 345/7.5/2.7/72.8 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | do_not_change_yet | Candidate nội bộ là gạo lứt khô chung, không phải cơm gạo lứt đen đã nấu chín. |  |
| suon-heo-nuong |  | Sườn heo nướng | 260/24/17/2 | cooked | 100g phần ăn được | recipe-estimate-v1 | low | 7053 - Sườn lợn (bỏ xương) 187/17.9/12.8/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Chỉ có sườn lợn bỏ xương, thiếu trạng thái nướng/ướp; nên giữ số ước tính và làm rõ basis. |  |
| nem-lui |  | Nem lụi | 285/18/19/8 | cooked | 100g | recipe-estimate-v1 | low | 7072 - Nem chạo 153/16.6/6.5/6.9 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7073 - Nem chua 137/21.7/3.7/4.3 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | keep_current_add_note | Nem chạo/nem chua gần nhóm nhưng khác nem lụi nướng; chưa thay số. |  |
| thit-heo-quay | yes | Thịt heo quay | 310/20/25/1.5 | cooked | 100g | recipe-estimate-v1 | low | 7018 - Thịt lợn nửa nạc, nửa mỡ 260/16.5/21.5/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7016 - Thịt lợn mỡ 394/14.5/37.3/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn 517/10.8/50.4/5.1 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | high | recipe_estimate_only | Chỉ có nguyên liệu/thịt chế biến khác, không có món heo quay; cần duyệt công thức hoặc nguồn món quay. |  |
| banh-chung |  | Bánh chưng | 230/8/8/32 | cooked | 100g | recipe-estimate-v1 | low | 1001 - Gạo nếp cái 344/8.6/1.5/74.5 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7018 - Thịt lợn nửa nạc, nửa mỡ 260/16.5/21.5/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Chỉ có nguyên liệu gạo nếp/thịt lợn, không có bánh chưng thành phẩm. |  |
| banh-troi |  | Bánh trôi | 200/3/4/38 | cooked | 100g | recipe-estimate-v1 | low | 1016 - Bột gạo nếp 362/8.2/1.6/78.8 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Chỉ có bột gạo nếp khô, thiếu món thành phẩm và nhân đường. |  |
| banh-chay |  | Bánh chay | 210/5/4/40 | cooked | 100g | recipe-estimate-v1 | low | 1016 - Bột gạo nếp 362/8.2/1.6/78.8 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Chỉ có bột gạo nếp khô, thiếu món thành phẩm và basis nhân/nước đường. |  |
| banh-gio |  | Bánh giò | 195/6/5/30 | cooked | 100g | recipe-estimate-v1 | low | 1017 - Bột gạo tẻ 359/6.6/0.4/82.2 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7018 - Thịt lợn nửa nạc, nửa mỡ 260/16.5/21.5/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Có bột gạo tẻ và thịt lợn riêng lẻ, không có bánh giò thành phẩm. |  |
| banh-mi-pate |  | Bánh mì pate | 220/8/7/30 | cooked | 100g | recipe-estimate-v1 | low | 1012 - Bánh mỳ 249/7.9/0.8/52.6 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Có bánh mỳ nhưng thiếu pate/nhân; không thay số món hoàn chỉnh. |  |
| banh-mi-cha-ca |  | Bánh mì chả cá | 200/10/5/30 | cooked | 100g | recipe-estimate-v1 | low | 1012 - Bánh mỳ 249/7.9/0.8/52.6 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Có bánh mỳ nhưng thiếu chả cá và món hoàn chỉnh. |  |
| banh-mi-cha-lua |  | Bánh mì chả lụa | 190/9/4/30 | cooked | 100g | recipe-estimate-v1 | low | 1012 - Bánh mỳ 249/7.9/0.8/52.6 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7069 - Giò lụa 136/21.5/5.5/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | ingredient_only | medium | keep_current_add_note | Có bánh mỳ và giò lụa riêng lẻ, không có bánh mì chả lụa thành phẩm. |  |
| nem-nuong |  | Nem nướng | 200/15/10/12 | cooked | 100g | recipe-estimate-v1 | low | 7072 - Nem chạo 153/16.6/6.5/6.9 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn 517/10.8/50.4/5.1 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | keep_current_add_note | Có món thịt chế biến gần nhóm nhưng không có nem nướng; giữ ước tính và bổ sung basis. |  |
| lap-xuong-nuong | yes | Lạp xưởng nướng | 320/14/25/15 | cooked | 100g | recipe-estimate-v1 | low | 7071 - Lạp xường 585/20.8/55/1.7 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | VN 2007 có Lạp xường gần nhất; cần duyệt vì khác trạng thái nướng và tên chuẩn. |  |
| thit-xong-khoi | yes | Thịt hun khói | 390/14/37/1 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | no_match | high | needs_external_source | Không có candidate nội bộ cho thịt hun khói/xông khói. |  |
| thit-bacon | yes | Bacon | 541/37/42/1.4 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | no_match | high | needs_external_source | Không có candidate nội bộ cho bacon; không thay bằng thịt lợn mỡ. |  |
| thit-bacon-chien | yes | Bacon chiên | 500/35/40/1.5 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | no_match | high | needs_external_source | Không có candidate nội bộ cho bacon chiên. |  |
| xuc-xich-duc |  | Xúc xích Đức (bratwurst) | 280/15/24/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | Có Xúc xích generic trong VN 2007 nhưng không phân biệt bratwurst. |  |
| xuc-xich-my |  | Xúc xích Mỹ (hot dog) | 290/12/26/4 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | Có Xúc xích generic trong VN 2007 nhưng không phân biệt hot dog/frankfurter. |  |
| xuc-xich-bo |  | Xúc xích bò | 260/16/21/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | Có Xúc xích generic trong VN 2007 nhưng không phân biệt xúc xích bò. |  |
| xuc-xich-ga |  | Xúc xích gà | 200/18/13/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | Có Xúc xích generic trong VN 2007 nhưng không phân biệt xúc xích gà. |  |
| xuc-xich-heo |  | Xúc xích heo | 270/14/23/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích 535/27.2/47.4/0 (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | close_match | medium | replace_after_dietitian_review | Có Xúc xích generic trong VN 2007 nhưng không phân biệt xúc xích heo. |  |

## Kết Luận Dành Cho Người Duyệt

- Không có `exact_match` trong nguồn nội bộ cho các item này.
- Các mục cơm/gạo cần nguồn cho 100g cơm đã nấu chín, không dùng gạo khô để thay trực tiếp.
- Nhóm `xuc-xich-*` và `lap-xuong-nuong` là nhóm có thể xử lý sớm nhất nếu bác sĩ/dinh dưỡng viên chấp nhận dùng candidate generic VN 2007.
- `thit-xong-khoi`, `thit-bacon`, `thit-bacon-chien` cần nguồn ngoài trước khi sửa dữ liệu chính.
