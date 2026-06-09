# Food Source Crosscheck v1

Generated from local data only:

- `reports/food-source-review-v1.md`
- `test-results/food-data-qa.json`
- `dist/api-foods.json`
- `public/api/vietnam-foods.json`
- `public/api/vietnam-nutrients.json`
- SQLite source used by export script: `data/nutrition/nutrition_final_with_core.sqlite`

No web sources were used. No nutrition values were changed.

## Tóm Tắt

- Unique items cross-checked: 23.
- Items with at least one internal candidate: 20/23.
- Rice source review items: 3.
- Cooked high energy review rows: 23.
- Fit counts: ingredient_only: 12, close_match: 8, no_match: 3.
- Proposal counts: needs_manual_dietitian_review: 10, keep_current_add_note: 1, rename_or_add_basis: 6, replace_with_source_after_review: 6.

## Nguyên Tắc Đọc Report

- `exact_match`: cùng món và cùng trạng thái/basis đủ tin cậy để cân nhắc thay sau duyệt.
- `close_match`: cùng nhóm rất gần nhưng còn khác loại/thương phẩm/cách chế biến.
- `ingredient_only`: chỉ có nguyên liệu hoặc thành phần chính, không thay trực tiếp cho món chín.
- `no_match`: chưa tìm thấy candidate nội bộ phù hợp.

## 5 Mục Ưu Tiên Cao

| slug hiện tại | ưu tiên cao | tên hiện tại | hiện tại kcal/protein/lipid/glucid | state | basis | source | confidence | candidate nguồn nội bộ | candidate kcal/protein/lipid/glucid | mức phù hợp | đề xuất | lý do |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| thit-heo-quay | yes | Thịt heo quay | 310/20/25/1.5 | cooked | 100g | recipe-estimate-v1 | low | 7018 - Thịt lợn nửa nạc, nửa mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7016 - Thịt lợn mỡ (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 7064 - Chả lợn (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7018: 260/16.5/21.5/0; 7016: 394/14.5/37.3/0; 7064: 517/10.8/50.4/5.1 | ingredient_only | needs_manual_dietitian_review | Có thịt lợn nạc/mỡ và chả lợn nhưng không có heo quay; cần nguồn món quay hoặc chuẩn hóa basis phần da/mỡ. |
| lap-xuong-nuong | yes | Lạp xưởng nướng | 320/14/25/15 | cooked | 100g | recipe-estimate-v1 | low | 7071 - Lạp xường (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7071: 585/20.8/55/1.7 | close_match | replace_with_source_after_review | VN 2007 có Lạp xường rất gần; khác trạng thái nướng và tên chuẩn, cần duyệt trước khi thay số. |
| thit-xong-khoi | yes | Thịt hun khói | 390/14/37/1 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Không tìm thấy thịt hun khói/xông khói tương ứng trong VN 2007 local. |
| thit-bacon | yes | Bacon | 541/37/42/1.4 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Không tìm thấy bacon tương ứng trong VN 2007 local; không dùng thịt lợn mỡ để thay trực tiếp. |
| thit-bacon-chien | yes | Bacon chiên | 500/35/40/1.5 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Không tìm thấy bacon chiên tương ứng trong VN 2007 local. |

## 3 Mục Cơm/Gạo

| slug hiện tại | ưu tiên cao | tên hiện tại | hiện tại kcal/protein/lipid/glucid | state | basis | source | confidence | candidate nguồn nội bộ | candidate kcal/protein/lipid/glucid | mức phù hợp | đề xuất | lý do |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep | - | Cơm nếp | 187/4.2/1/40 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1001 - Gạo nếp cái (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 1002 - Gạo nếp máy(loại thường) (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1001: 344/8.6/1.5/74.5; 1002: 346/8.4/1.6/74.9 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo nếp khô, không phải 100g cơm nếp đã nấu chín; không thay trực tiếp. |
| com-gao-lut-do | - | Cơm gạo lứt đỏ | 194/4.3/1.1/41 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đỏ đã nấu chín; cần nguồn cơm chín. |
| com-gao-lut-den | - | Cơm gạo lứt đen | 200/4.4/1.1/42 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đen đã nấu chín; cần nguồn cơm chín. |

## Toàn Bộ Cooked High Energy

| slug hiện tại | ưu tiên cao | tên hiện tại | hiện tại kcal/protein/lipid/glucid | state | basis | source | confidence | candidate nguồn nội bộ | candidate kcal/protein/lipid/glucid | mức phù hợp | đề xuất | lý do |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep | - | Cơm nếp | 187/4.2/1/40 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1001 - Gạo nếp cái (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion); 1002 - Gạo nếp máy(loại thường) (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1001: 344/8.6/1.5/74.5; 1002: 346/8.4/1.6/74.9 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo nếp khô, không phải 100g cơm nếp đã nấu chín; không thay trực tiếp. |
| com-gao-lut-do | - | Cơm gạo lứt đỏ | 194/4.3/1.1/41 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đỏ đã nấu chín; cần nguồn cơm chín. |
| com-gao-lut-den | - | Cơm gạo lứt đen | 200/4.4/1.1/42 | cooked | 100g cơm đã nấu chín | recipe-estimate-v1 | low | 1005 - Gạo lứt (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 1005: 345/7.5/2.7/72.8 | ingredient_only | needs_manual_dietitian_review | VN 2007 có gạo lứt khô chung, không phân biệt gạo lứt đen đã nấu chín; cần nguồn cơm chín. |
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
| thit-xong-khoi | yes | Thịt hun khói | 390/14/37/1 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Không tìm thấy thịt hun khói/xông khói tương ứng trong VN 2007 local. |
| thit-bacon | yes | Bacon | 541/37/42/1.4 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Không tìm thấy bacon tương ứng trong VN 2007 local; không dùng thịt lợn mỡ để thay trực tiếp. |
| thit-bacon-chien | yes | Bacon chiên | 500/35/40/1.5 | cooked | 100g | recipe-estimate-v1 | low | Không có candidate nội bộ phù hợp | - | no_match | needs_manual_dietitian_review | Không tìm thấy bacon chiên tương ứng trong VN 2007 local. |
| xuc-xich-duc | - | Xúc xích Đức (bratwurst) | 280/15/24/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt bratwurst nhưng đủ gần để bác sĩ/dinh dưỡng viên duyệt. |
| xuc-xich-my | - | Xúc xích Mỹ (hot dog) | 290/12/26/4 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt hot dog/frankfurter. |
| xuc-xich-bo | - | Xúc xích bò | 260/16/21/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt xúc xích bò. |
| xuc-xich-ga | - | Xúc xích gà | 200/18/13/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt xúc xích gà. |
| xuc-xich-heo | - | Xúc xích heo | 270/14/23/3 | cooked | 100g | recipe-estimate-v1 | low | 7077 - Xúc xích (Bảng thành phần thực phẩm Việt Nam 2007; 100g edible portion) | 7077: 535/27.2/47.4/0 | close_match | replace_with_source_after_review | VN 2007 có Xúc xích generic; không phân biệt xúc xích heo. |

## Kết Luận Tự Động

- Không có item nào đủ điều kiện `exact_match` từ dữ liệu local trong vòng này.
- Các mục cơm/gạo chỉ có candidate gạo khô trong VN 2007, vì vậy cần nguồn 100g cơm đã nấu chín trước khi sửa.
- `lap-xuong-nuong` và nhóm `xuc-xich-*` có candidate nội bộ gần nhất, nhưng cần duyệt vì VN 2007 không phân biệt nướng/loại thịt/thương phẩm.
- `thit-xong-khoi`, `thit-bacon`, `thit-bacon-chien` chưa có match nội bộ; cần nguồn ngoài hoặc duyệt thủ công trước khi sửa dữ liệu.
