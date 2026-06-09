# Food Quality Notes v1

Generated from `dist/api-foods.json` and `test-results/food-data-qa.json`.

No nutrition values were changed. This report only summarizes review metadata attached to food records.

## Tóm Tắt

- Decision table items checked: 23/23.
- Items with review metadata: 23.
- Items still missing required review metadata: 0.
- Items requiring external source: 3.
- Items requiring dietitian review: 13.

Data quality counts:

- recipe_estimate: 23

Source review status counts:

- needs_better_source: 3
- reviewed_keep_current: 10
- recipe_estimate_only: 1
- candidate_pending_dietitian_review: 6
- needs_external_source: 3

QA food-data counters:

- dataQuality: 23
- sourceReviewStatus: 23
- needsExternalSource: 3
- needsDietitianReview: 13
- cookedHighEnergyWithoutReviewMetadata: 0
- decisionTableMissingMetadata: 0

## Cần Nguồn Ngoài

- `thit-xong-khoi`: Thịt hun khói
- `thit-bacon`: Bacon
- `thit-bacon-chien`: Bacon chiên

## Chờ Dietitian Review

- `com-nep`: Cơm nếp (needs_better_source)
- `com-gao-lut-do`: Cơm gạo lứt đỏ (needs_better_source)
- `com-gao-lut-den`: Cơm gạo lứt đen (needs_better_source)
- `thit-heo-quay`: Thịt heo quay (recipe_estimate_only)
- `lap-xuong-nuong`: Lạp xưởng nướng (candidate_pending_dietitian_review)
- `thit-xong-khoi`: Thịt hun khói (needs_external_source)
- `thit-bacon`: Bacon (needs_external_source)
- `thit-bacon-chien`: Bacon chiên (needs_external_source)
- `xuc-xich-duc`: Xúc xích Đức (bratwurst) (candidate_pending_dietitian_review)
- `xuc-xich-my`: Xúc xích Mỹ (hot dog) (candidate_pending_dietitian_review)
- `xuc-xich-bo`: Xúc xích bò (candidate_pending_dietitian_review)
- `xuc-xich-ga`: Xúc xích gà (candidate_pending_dietitian_review)
- `xuc-xich-heo`: Xúc xích heo (candidate_pending_dietitian_review)

## Toàn Bộ Metadata

| slug | name | kcal | source | confidence | dataQuality | sourceReviewStatus | needsExternalSource | needsDietitianReview | basisNote | reviewNote | candidateSource |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| com-nep | Cơm nếp | 187 | recipe-estimate-v1 | low | recipe_estimate | needs_better_source | - | yes | Diễn giải là 100g cơm nếp đã nấu chín, không phải 100g gạo nếp khô. | Nguồn nội bộ chỉ có gạo nếp khô VN 2007; cần nguồn tốt hơn cho cơm nếp chín trước khi sửa số liệu. | VN 2007: 1001 Gạo nếp cái; 1002 Gạo nếp máy(loại thường) - ingredient_only. |
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
| thit-xong-khoi | Thịt hun khói | 390 | recipe-estimate-v1 | low | recipe_estimate | needs_external_source | yes | yes | 100g thịt hun khói thành phẩm. | Chưa có candidate nội bộ phù hợp; cần nguồn ngoài trước khi sửa dữ liệu chính. | - |
| thit-bacon | Bacon | 541 | recipe-estimate-v1 | low | recipe_estimate | needs_external_source | yes | yes | 100g bacon thành phẩm. | Chưa có candidate nội bộ phù hợp; không thay trực tiếp bằng thịt lợn mỡ hoặc nguyên liệu khác. | - |
| thit-bacon-chien | Bacon chiên | 500 | recipe-estimate-v1 | low | recipe_estimate | needs_external_source | yes | yes | 100g bacon chiên thành phẩm. | Chưa có candidate nội bộ phù hợp; cần nguồn ngoài trước khi sửa dữ liệu chính. | - |
| xuc-xich-duc | Xúc xích Đức (bratwurst) | 280 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích Đức/bratwurst thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì khác loại/thương phẩm. | VN 2007: 7077 Xúc xích - close_match. |
| xuc-xich-my | Xúc xích Mỹ (hot dog) | 290 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích Mỹ/hot dog thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì khác loại/thương phẩm. | VN 2007: 7077 Xúc xích - close_match. |
| xuc-xich-bo | Xúc xích bò | 260 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích bò thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì không phân biệt loại thịt. | VN 2007: 7077 Xúc xích - close_match. |
| xuc-xich-ga | Xúc xích gà | 200 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích gà thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì không phân biệt loại thịt. | VN 2007: 7077 Xúc xích - close_match. |
| xuc-xich-heo | Xúc xích heo | 270 | recipe-estimate-v1 | low | recipe_estimate | candidate_pending_dietitian_review | - | yes | 100g xúc xích heo thành phẩm. | Có candidate xúc xích generic VN 2007 nhưng chưa thay số; cần duyệt vì không phân biệt loại/thương phẩm. | VN 2007: 7077 Xúc xích - close_match. |
