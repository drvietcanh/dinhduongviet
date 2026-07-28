# Food Source Review v1

Generated from `test-results/food-data-qa.json` and `dist/api-foods.json`.

## Tóm tắt

- Rice source review: 3 item.
- Cooked high energy review: 21 item.
- Không sửa số liệu dinh dưỡng trong report này.
- Action counts: needs_source_review: 10, possible_value_issue_do_not_change_yet: 2, rename_or_add_basis: 11, accept_current: 1.

## Nhận xét Tự Động

- `kcal >180` ở món `state: cooked` cần rà lại basis, lượng nước sau nấu, và định nghĩa 100g phần ăn được.
- `source: recipe-estimate-v1` kèm `confidence: low` cần ưu tiên đối chiếu nguồn chuẩn hơn trước khi chỉnh số liệu.
- Tên có thể gây hiểu nhầm sống/chín cần đổi tên hoặc bổ sung basis/note trước khi dùng làm canonical.
- Các đề xuất trong report này là nhãn rà soát, không phải thay đổi dữ liệu dinh dưỡng.

## 3 Mục Cơm/Gạo Cần Rà Nguồn

| id | slug | name | aliases | state | basis | kcal/100g | protein/100g | lipid/100g | glucid/100g | source | confidence | note | file source | đề xuất |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| gao-nep | com-nep | Cơm nếp | com nep; cơm nếp; gao-nep; gạo nếp đã nấu; gao nep da nau | cooked | 100g cơm đã nấu chín | 187 | 4.2 | 1 | 40 | recipe-estimate-v1 | low | Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm nếp đã nấu hơn là hạt gạo nếp khô. Không sửa số liệu dinh dưỡng trong vòng này. | src/data/bulk-catalog.ts | needs_source_review |
| gao-lut-do | com-gao-lut-do | Cơm gạo lứt đỏ | Cơm gạo lật đỏ; com gao lat do; com gao lut do; cơm gạo lứt đỏ; cơm gạo lật đỏ; gao-lut-do; gạo lứt đỏ đã nấu; gao lut do da nau | cooked | 100g cơm đã nấu chín | 194 | 4.3 | 1.1 | 41 | recipe-estimate-v1 | low | Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm gạo lứt đỏ đã nấu hơn là hạt gạo khô. Không sửa số liệu dinh dưỡng trong vòng này. | src/data/bulk-catalog.ts | needs_source_review |
| gao-lut-den | com-gao-lut-den | Cơm gạo lứt đen | Cơm gạo lật đen; com gao lat den; com gao lut den; cơm gạo lứt đen; cơm gạo lật đen; gao-lut-den; gạo lứt đen đã nấu; gao lut den da nau | cooked | 100g cơm đã nấu chín | 200 | 4.4 | 1.1 | 42 | recipe-estimate-v1 | low | Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm gạo lứt đen đã nấu hơn là hạt gạo khô. Không sửa số liệu dinh dưỡng trong vòng này. | src/data/bulk-catalog.ts | needs_source_review |

## 23 Mục Cooked High Energy

| id | slug | name | aliases | state | basis | kcal/100g | protein/100g | lipid/100g | glucid/100g | source | confidence | note | file source | đề xuất |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| suon-heo-nuong | suon-heo-nuong | Sườn heo nướng | sườn nướng; sườn lợn nướng; suon lon nuong; pork chop grilled; suon heo nuong | cooked | 100g phần ăn được | 260 | 24 | 17 | 2 | recipe-estimate-v1 | low | Ước tính MVP; nước ướp và phần mỡ làm sai số lớn. | src/data/bulk-catalog.ts; src/data/nutrition.ts | needs_source_review |
| nem-lui | nem-lui | Nem lụi | nem lui; nem lụi | cooked | 100g | 285 | 18 | 19 | 8 | recipe-estimate-v1 | low | Ước tính MVP; cần đối chiếu bảng thành phần chính thức trước khi dùng lâm sàng. | src/data/foods-extra4.ts | needs_source_review |
| thit-heo-quay | thit-heo-quay | Thịt heo quay | roasted pork; heo quay; lợn quay; thit quay | cooked | 100g | 310 | 20 | 25 | 1.5 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/bulk-catalog.ts; src/data/foods-extra5.ts | possible_value_issue_do_not_change_yet |
| banh-chung | banh-chung | Bánh chưng | banh chung tet | cooked | 100g | 230 | 8 | 8 | 32 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/bulk-catalog.ts; src/data/foods-extra6.ts | rename_or_add_basis |
| banh-troi | banh-troi | Bánh trôi | banh troi nuoc | cooked | 100g | 200 | 3 | 4 | 38 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra6.ts | rename_or_add_basis |
| banh-chay | banh-chay | Bánh chay | banh chay nuong | cooked | 100g | 210 | 5 | 4 | 40 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra6.ts | rename_or_add_basis |
| banh-gio | banh-gio | Bánh giò | banh gio | cooked | 100g | 195 | 6 | 5 | 30 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/bulk-catalog.ts; src/data/foods-extra6.ts | rename_or_add_basis |
| banh-mi-pate | banh-mi-pate | Bánh mì pate | banh mi pate | cooked | 100g | 220 | 8 | 7 | 30 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/bulk-catalog.ts; src/data/foods-extra6.ts | rename_or_add_basis |
| banh-mi-cha-ca | banh-mi-cha-ca | Bánh mì chả cá | banh mi cha ca; banh mi cha ca da nang | cooked | 100g | 200 | 10 | 5 | 30 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/bulk-catalog.ts; src/data/foods-extra6.ts | rename_or_add_basis |
| banh-mi-cha-lua | banh-mi-cha-lua | Bánh mì chả lụa | banh mi cha lua | cooked | 100g | 190 | 9 | 4 | 30 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra6.ts | rename_or_add_basis |
| nem-nuong | nem-nuong | Nem nướng | nem nuong; grilled pork sausage | cooked | 100g | 200 | 15 | 10 | 12 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/bulk-catalog.ts; src/data/foods-extra6.ts | needs_source_review |
| lap-xuong-nuong | lap-xuong-nuong | Lạp xưởng nướng | lap xuong nuong; grilled Chinese sausage | cooked | 100g | 320 | 14 | 25 | 15 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra7.ts | possible_value_issue_do_not_change_yet |
| thit-bacon-chien | thit-bacon-chien | Bacon chiên | bacon chien; fried bacon | cooked | 100g | 468 | 33.9 | 35.1 | 1.7 | usda-fdc-168322 | medium | USDA FDC SR Legacy 168322, pork cured bacon pre-sliced cooked pan-fried. | src/data/foods-extra7.ts | accept_current |
| xuc-xich-duc | xuc-xich-duc | Xúc xích Đức (bratwurst) | xuc xich duc; bratwurst; German sausage | cooked | 100g | 280 | 15 | 24 | 3 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra7.ts | needs_source_review |
| xuc-xich-my | xuc-xich-my | Xúc xích Mỹ (hot dog) | xuc xich my; hot dog; frankfurter | cooked | 100g | 290 | 12 | 26 | 4 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra7.ts | rename_or_add_basis |
| xuc-xich-bo | xuc-xich-bo | Xúc xích bò | xuc xich bo; beef sausage | cooked | 100g | 260 | 16 | 21 | 3 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra7.ts | rename_or_add_basis |
| xuc-xich-ga | xuc-xich-ga | Xúc xích gà | xuc xich ga; chicken sausage | cooked | 100g | 200 | 18 | 13 | 3 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra7.ts | rename_or_add_basis |
| xuc-xich-heo | xuc-xich-heo | Xúc xích heo | xuc xich heo; xúc xích lợn; xuc xich lon; pork sausage | cooked | 100g | 270 | 14 | 23 | 3 | recipe-estimate-v1 | low | Ước tính MVP. | src/data/foods-extra3.ts; src/data/foods-extra7.ts | rename_or_add_basis |
| gao-nep | com-nep | Cơm nếp | com nep; cơm nếp; gao-nep; gạo nếp đã nấu; gao nep da nau | cooked | 100g cơm đã nấu chín | 187 | 4.2 | 1 | 40 | recipe-estimate-v1 | low | Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm nếp đã nấu hơn là hạt gạo nếp khô. Không sửa số liệu dinh dưỡng trong vòng này. | src/data/bulk-catalog.ts | needs_source_review |
| gao-lut-do | com-gao-lut-do | Cơm gạo lứt đỏ | Cơm gạo lật đỏ; com gao lat do; com gao lut do; cơm gạo lứt đỏ; cơm gạo lật đỏ; gao-lut-do; gạo lứt đỏ đã nấu; gao lut do da nau | cooked | 100g cơm đã nấu chín | 194 | 4.3 | 1.1 | 41 | recipe-estimate-v1 | low | Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm gạo lứt đỏ đã nấu hơn là hạt gạo khô. Không sửa số liệu dinh dưỡng trong vòng này. | src/data/bulk-catalog.ts | needs_source_review |
| gao-lut-den | com-gao-lut-den | Cơm gạo lứt đen | Cơm gạo lật đen; com gao lat den; com gao lut den; cơm gạo lứt đen; cơm gạo lật đen; gao-lut-den; gạo lứt đen đã nấu; gao lut den da nau | cooked | 100g cơm đã nấu chín | 200 | 4.4 | 1.1 | 42 | recipe-estimate-v1 | low | Dữ liệu bổ sung ước tính MVP; năng lượng thấp cho thấy mục này phù hợp cơm gạo lứt đen đã nấu hơn là hạt gạo khô. Không sửa số liệu dinh dưỡng trong vòng này. | src/data/bulk-catalog.ts | needs_source_review |

## Ghi Chú Theo Item

| slug | nhận xét tự động |
| --- | --- |
| com-nep | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| com-gao-lut-do | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| com-gao-lut-den | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| suon-heo-nuong | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| nem-lui | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| thit-heo-quay | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-chung | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-troi | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-chay | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-gio | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-mi-pate | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-mi-cha-ca | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| banh-mi-cha-lua | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| nem-nuong | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| lap-xuong-nuong | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| thit-bacon-chien | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần |
| xuc-xich-duc | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| xuc-xich-my | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| xuc-xich-bo | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| xuc-xich-ga | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| xuc-xich-heo | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low; tên/basis có thể gây hiểu nhầm sống-chín |
| com-nep | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| com-gao-lut-do | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |
| com-gao-lut-den | kcal >180 ở item cooked, cần rà basis/nước/khẩu phần; recipe-estimate-v1 + confidence low |

## Ưu Tiên Duyệt

1. Các item `possible_value_issue_do_not_change_yet`: năng lượng cao, source ước tính, cần bác sĩ/dinh dưỡng viên duyệt trước khi sửa.
2. Các item cơm/gạo trong `riceSourceReview`: cần xác nhận nguồn 100g cơm chín tương ứng, đặc biệt `com-gao-lut-do` và `com-gao-lut-den`.
3. Các item `needs_source_review`: giữ nguyên hiện tại nhưng cần nguồn chuẩn trước khi nâng confidence.
