# Tiến trình bổ sung thư viện thực phẩm — 2026-09-11

## Mục tiêu

- Bổ sung và chuẩn hóa dữ liệu thực phẩm quen thuộc ở Việt Nam.
- Ưu tiên nguồn chắc, đặc biệt công cụ tra cứu giá trị dinh dưỡng thực phẩm của Viện Dinh dưỡng.
- Tránh tạo slug/tên trùng; nếu thực phẩm đã có trong thư viện thì cập nhật qua `vddSourceReplacements`.
- Không tự điền số khi nguồn không khớp rõ hoặc món biến thiên nhiều theo công thức/nhãn hàng.

## Đã làm trong phiên này

- Chạy `npm run qa:food-data` trước khi sửa: không có duplicate slug/display name, không thiếu core nutrients.
- Cập nhật thêm 6 thực phẩm đã có trong app bằng nguồn Viện Dinh dưỡng:
  - `rau-dan` ← mã `4073` Rau giền đỏ, tươi.
  - `trung-cut` ← mã `9007` Trứng chim cút.
  - `dau-phap` ← mã `3017` Lạc hạt, khô.
  - `hat-bi` ← mã `3028` Hạt bí đỏ, rang.
  - `hat-huong-duong` ← mã `3041011` Hạt hướng dương rang.
  - `dau-ha-lan` ← mã `4031` Đậu Hà Lan, quả, tươi.
- Cập nhật nhật ký nguồn tại `reports/vdd-food-nutrition-crosscheck-2026-09-10.md`.

## Batch ngay trước phiên này

Đã cập nhật 18 mục nguồn Viện trong `src/data/food-vdd-source-replacements.ts`:

- `banh-pho-chin`, `rau-muong`, `tao`, `bo-trai`, `sua-dac`, `hat-tieu`, `moc-nhi`.
- `dau-que`, `sup-lo`, `sup-lo-trang`, `bap-cai-thao`, `mang-tay`, `man-chua`, `chom-chom`, `mang-cut`, `dau-tay`, `nho`, `nuoc-dua`.

## Tệp chính liên quan

- `src/data/food-vdd-source-replacements.ts`: lớp cập nhật nguồn Viện cho thực phẩm đã có.
- `src/data/foods-extra9.ts`: các thực phẩm mới thêm riêng từ nguồn Viện.
- `src/data/nutrition.ts`: hợp nhất foods, extraFoods, bulkFoods và áp replacement.
- `reports/vdd-food-nutrition-crosscheck-2026-09-10.md`: nhật ký đối chiếu nguồn.
- `test-results/food-data-qa.json`: kết quả QA dữ liệu thực phẩm.

## Cách tiếp tục

1. Chạy `npm run qa:food-data` để kiểm duplicate và vùng cần rà lại.
2. Tải dữ liệu từ endpoint Viện:
   `https://viendinhduong.vn/api/fe/foodNatunal/getPageFoodData?page=1&pageSize=3000&energy=0`
3. Với thực phẩm đã có slug: thêm vào `vddSourceReplacements`, ghi rõ `sourceName`, `sourceCode`, `sourceNote`, `sourceConfidence`, `hasCompleteCoreMacros`.
4. Với thực phẩm chưa có slug và có định nghĩa rõ: thêm vào `foods-extra9.ts`, tránh tên/slug trùng.
5. Chạy `npm run build`, `npm run qa`, `npm run qa:food-data`.
6. Chỉ commit khi cả build và QA pass.

## Ưu tiên tiếp theo

- Nhóm rau/củ/quả còn có nguồn Viện khớp rõ nhưng chưa phủ.
- Nhóm trứng/sữa/hạt/đậu đơn thành phần.
- Nhóm cá/hải sản tươi phổ biến, nhưng chỉ khi tên nguồn khớp rõ với slug.
- Không ưu tiên món chế biến như xúc xích, lạp xưởng, bánh kẹo, đồ uống pha chế nếu chưa có nhãn/công thức cụ thể.

## Cảnh báo dữ liệu

- Nhiều món chế biến trong app vẫn là `recipe-estimate-v1`; không nên chuyển thành `source_verified` nếu chỉ có nguồn gần đúng.
- Một số mã nguồn Viện có tên cũ/khác chính tả phổ biến, ví dụ `rau giền`; cần ghi chú khi map sang tên app `rau dền`.
- Với nhóm sữa/đồ uống đóng gói, ưu tiên nhãn sản phẩm khi tư vấn cá thể vì công thức thương mại thay đổi.
