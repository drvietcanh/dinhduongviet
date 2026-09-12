# Food Quality Notes v1

Generated from `dist/api-foods.json` and `test-results/food-data-qa.json`.

This report summarizes current food quality metadata and the remaining review backlog.

## Tóm Tắt

- Decision table items checked: 23/23.
- Items with review metadata: 23.
- Items still missing required review metadata: 0.
- Items requiring external source: 0.
- Items marked needs_better_source: 2.
- Source-backed items still pending dietitian review: 1.
- Items requiring dietitian review: 7.

Data quality counts:

- source_backed: 7
- recipe_estimate: 16

Source review status counts:

- source_verified: 6
- needs_better_source: 2
- reviewed_keep_current: 10
- recipe_estimate_only: 1
- candidate_pending_dietitian_review: 4

QA food-data counters:

- dataQuality: 470
- sourceReviewStatus: 470
- needsExternalSource: 0
- needsDietitianReview: 7
- cookedHighEnergyWithoutReviewMetadata: 0
- decisionTableMissingMetadata: 0

## Cần Nguồn Ngoài

- Không còn mục nào gắn `needsExternalSource`.

## Cần Nguồn Tốt Hơn

- `com-gao-lut-do`: Cơm gạo lứt đỏ - Nguồn nội bộ chỉ có gạo lứt khô chung VN 2007; cần nguồn cho cơm gạo lứt đỏ chín.
- `com-gao-lut-den`: Cơm gạo lứt đen - Nguồn nội bộ chỉ có gạo lứt khô chung VN 2007; cần nguồn cho cơm gạo lứt đen chín.

## Đã Có Nguồn, Chờ Duyệt

- `thit-xong-khoi`: Thịt hun khói - USDA FDC SR Legacy 174611: Ham, honey, smoked, cooked - close_match.

## Chờ Dietitian Review

- `com-gao-lut-do`: Cơm gạo lứt đỏ (needs_better_source)
- `com-gao-lut-den`: Cơm gạo lứt đen (needs_better_source)
- `thit-heo-quay`: Thịt heo quay (recipe_estimate_only)
- `lap-xuong-nuong`: Lạp xưởng nướng (candidate_pending_dietitian_review)
- `thit-xong-khoi`: Thịt hun khói (candidate_pending_dietitian_review)
- `xuc-xich-ga`: Xúc xích gà (candidate_pending_dietitian_review)
- `xuc-xich-heo`: Xúc xích heo (candidate_pending_dietitian_review)

## Ưu Tiên Tiếp Theo

1. Tìm nguồn nấu chín đáng tin cậy cho `com-gao-lut-do`, `com-gao-lut-den`; chỉ thay số liệu khi nguồn mô tả rõ cooked/prepared basis.
2. Với các mục còn gắn `candidate_pending_dietitian_review`, chỉ dùng nguồn riêng khớp loại thịt, trạng thái chế biến và phạm vi tên gọi.
3. Với `thit-heo-quay`, cần công thức chuẩn hoặc nguồn phân tích món quay; không nên tự thay bằng thịt heo sống/nạc/mỡ riêng lẻ.

## Toàn Bộ Metadata

| slug | name | kcal | source | confidence | dataQuality | sourceReviewStatus | needsExternalSource | needsDietitianReview | basisNote | reviewNote | candidateSource |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep | Cơm nếp | 97 | usda-fdc-169711 | high | source_backed | source_verified | - | - | Diễn giải là 100g cơm nếp đã nấu chín, không phải 100g gạo nếp khô. | Đã thay số ước tính bằng hồ sơ USDA cho cơm nếp trắng đã nấu chín, khớp trạng thái và cơ sở 100g. | USDA FDC SR Legacy 169711: Rice, white, glutinous, unenriched, cooked. |
| com-gao-lut-do | Cơm gạo lứt đỏ | 194 | recipe-estimate-v1 | low | recipe_estimate | needs_better_source | - | yes | Diễn giải là 100g cơm gạo lứt đỏ đã nấu chín, không phải 100g gạo khô. | Nguồn nội bộ chỉ có gạo lứt khô chung VN 2007; cần nguồn cho cơm gạo lứt đỏ chín. | VN 2007: 1005 Gạo lứt - ingredient_only. |
| com-gao-lut-den | Cơm gạo lứt đen | 200 | recipe-estimate-v1 | low | recipe_estimate | needs_better_source | - | yes | Diễn giải là 100g cơm gạo lứt đen đã nấu chín, không phải 100g gạo khô. | Nguồn nội bộ chỉ có gạo lứt khô chung VN 2007; cần nguồn cho cơm gạo lứt đen chín. | VN 2007: 1005 Gạo lứt - ingredient_only. |
| suon-heo-nuong | Sườn heo nướng | 260 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g phần ăn được của món đã nướng, không gồm xương. | Giữ số ước tính hiện tại; VN 2007 chỉ có sườn lợn bỏ xương, chưa thay cho món nướng/ướp. | VN 2007: 7053 Sườn lợn (bỏ xương) - ingredient_only. |
| nem-lui | Nem lụi | 285 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g nem lụi/nem nướng xiên thành phẩm. | Giữ số ước tính; nem chạo/nem chua là close_match nhưng khác món. | VN 2007: 7072 Nem chạo; 7073 Nem chua - close_match. |
| thit-heo-quay | Thịt heo quay | 310 | recipe-estimate-v1 | low | recipe_estimate | recipe_estimate_only | - | yes | 100g thịt heo quay thành phẩm, loại bỏ xương; tỷ lệ da/mỡ làm sai số lớn. | Chỉ xem là ước tính công thức, không phải số phân tích trực tiếp; nguồn nội bộ chỉ có nguyên liệu/thịt chế biến khác. | VN 2007: 7018 Thịt lợn nửa nạc nửa mỡ; 7016 Thịt lợn mỡ; 7064 Chả lợn - ingredient_only. |
| banh-chung | Bánh chưng | 230 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh chưng thành phẩm. | Giữ số ước tính; nguồn nội bộ chỉ có nguyên liệu gạo nếp/thịt lợn riêng lẻ. | VN 2007: 1001 Gạo nếp cái; 7018 Thịt lợn nửa nạc nửa mỡ - ingredient_only. |
| banh-troi | Bánh trôi | 200 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh trôi thành phẩm, gồm nhân đường. | Giữ số ước tính; nguồn nội bộ chỉ có bột gạo nếp khô. | VN 2007: 1016 Bột gạo nếp - ingredient_only. |
| banh-chay | Bánh chay | 210 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh chay thành phẩm, có nhân/nước đường tùy cách làm. | Giữ số ước tính; nguồn nội bộ chỉ có bột gạo nếp khô. | VN 2007: 1016 Bột gạo nếp - ingredient_only. |
| banh-gio | Bánh giò | 195 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh giò thành phẩm. | Giữ số ước tính; nguồn nội bộ chỉ có bột gạo tẻ và thịt lợn riêng lẻ. | VN 2007: 1017 Bột gạo tẻ; 7018 Thịt lợn nửa nạc nửa mỡ - ingredient_only. |
| banh-mi-pate | Bánh mì pate | 220 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh mì pate thành phẩm. | Giữ số ước tính; nguồn nội bộ chỉ có bánh mì, chưa có pate/nhân. | VN 2007: 1012 Bánh mỳ - ingredient_only. |
| banh-mi-cha-ca | Bánh mì chả cá | 200 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh mì chả cá thành phẩm. | Giữ số ước tính; nguồn nội bộ chỉ có bánh mì, chưa có chả cá/món hoàn chỉnh. | VN 2007: 1012 Bánh mỳ - ingredient_only. |
| banh-mi-cha-lua | Bánh mì chả lụa | 190 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g bánh mì chả lụa thành phẩm. | Giữ số ước tính; nguồn nội bộ có bánh mì và giò lụa riêng lẻ, chưa có món hoàn chỉnh. | VN 2007: 1012 Bánh mỳ; 7069 Giò lụa - ingredient_only. |
| nem-nuong | Nem nướng | 200 | recipe-estimate-v1 | low | recipe_estimate | reviewed_keep_current | - | - | 100g nem nướng thành phẩm. | Giữ số ước tính; nguồn nội bộ có món thịt chế biến gần nhóm nhưng chưa có nem nướng. | VN 2007: 7072 Nem chạo; 7064 Chả lợn - close_match. |
| lap-xuong-nuong | Lạp xưởng nướng | 320 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g lạp xưởng nướng thành phẩm. | Có candidate nội bộ gần nhất nhưng chưa thay số; cần duyệt vì VN 2007 không tách trạng thái nướng. | VN 2007: 7071 Lạp xường - close_match. |
| thit-xong-khoi | Thịt hun khói | 122 | usda-fdc-174611 | medium | source_backed | candidate_pending_dietitian_review | - | yes | 100g thịt heo/ham hun khói ăn liền; không đại diện cho mọi loại ba chỉ hun khói. | Đã thay bằng candidate USDA FDC dạng ham hun khói nấu chín; vẫn cần duyệt vì tên tiếng Việt có thể chỉ nhiều sản phẩm khác nhau. | USDA FDC SR Legacy 174611: Ham, honey, smoked, cooked - close_match. |
| thit-bacon | Bacon | 393 | usda-fdc-168277 | medium | source_backed | source_verified | - | - | 100g bacon muối/hun khói chưa chiên; dùng riêng với bản bacon chiên. | Đã đối chiếu trực tiếp với nguồn USDA FDC cho pork cured bacon unprepared; sản phẩm theo nhãn hàng vẫn có thể khác. | USDA FDC SR Legacy 168277: Pork, cured, bacon, unprepared. |
| thit-bacon-chien | Bacon chiên | 468 | usda-fdc-168322 | medium | source_backed | source_verified | - | - | 100g bacon chiên thành phẩm. | Đã đối chiếu trực tiếp với nguồn USDA FDC cho bacon cắt lát chiên áp chảo; sodium/chất béo vẫn phụ thuộc hao hụt mỡ và nhãn hàng. | USDA FDC SR Legacy 168322: Pork, cured, bacon, pre-sliced, cooked, pan-fried. |
| xuc-xich-duc | Xúc xích Đức (bratwurst) | 333 | usda-fdc-171620 | high | source_backed | source_verified | - | - | 100g xúc xích Đức/bratwurst thành phẩm. | Đã thay số ước tính bằng hồ sơ USDA cho bratwurst heo đã nấu chín. | USDA FDC SR Legacy 171620: Bratwurst, pork, cooked. |
| xuc-xich-my | Xúc xích Mỹ (hot dog) | 302 | usda-fdc-171634 | high | source_backed | source_verified | - | - | 100g xúc xích Mỹ/hot dog thành phẩm. | Đã thay số ước tính bằng hồ sơ USDA cho frankfurter thịt và gia cầm đã nướng chín. | USDA FDC SR Legacy 171634: Frankfurter, meat and poultry, cooked, grilled. |
| xuc-xich-bo | Xúc xích bò | 332 | usda-fdc-174618 | high | source_backed | source_verified | - | - | 100g xúc xích bò thành phẩm. | Đã thay số ước tính bằng hồ sơ USDA cho xúc xích bò tươi đã nấu chín. | USDA FDC SR Legacy 174618: Beef sausage, fresh, cooked. |
| xuc-xich-ga | Xúc xích gà | 200 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích gà thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì không phân biệt loại thịt. | VN 2007: 7077 Xúc xích - close_match. |
| xuc-xich-heo | Xúc xích heo | 270 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích heo thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì không phân biệt loại/thương phẩm. | VN 2007: 7077 Xúc xích - close_match. |
