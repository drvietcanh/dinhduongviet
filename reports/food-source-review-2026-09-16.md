# Hàng đợi rà soát nguồn thực phẩm — 2026-09-16

## Trạng thái đã xác nhận

- Thư viện dữ liệu sau rà soát: **1000 thực phẩm**; chỉ mục tra cứu và API chi tiết đều **1000 thực phẩm**, không trùng tên hiển thị hoặc slug.
- Thư viện món ăn: **433 món**, không có `foodId` hỏng hoặc định lượng không hợp lệ.
- Các API `foods-full`, `foods-slim`, `search-index` đã được sinh lại sau lần rà soát gần nhất.
- 14 dòng nguồn Việt Nam có tên chỉ là số và bản ghi trùng mã `1013` đã được loại khỏi API tra cứu; dữ liệu gốc SQLite vẫn giữ để truy nguyên.

## Sáu mục đã loại khỏi thư viện

Sáu mục dưới đây đã bị xóa khỏi dữ liệu thực phẩm, API chi tiết và chỉ mục tìm kiếm vì chưa có nguồn đủ chắc chắn:

1. Lá sách bò — USDA chỉ có dữ liệu tripe chung, chưa tách riêng omasum.
2. Lạp xưởng nướng — nguồn Việt Nam chưa tách trạng thái nướng thành phẩm.
3. Thịt heo quay — tỷ lệ da/mỡ và hao hụt khi quay biến thiên lớn.
4. Thịt hun khói — tên thương mại bao phủ nhiều công thức khác nhau.
5. Xúc xích gà — khác biệt lớn theo nhãn hàng và tỷ lệ thịt/mỡ.
6. Xúc xích heo — khác biệt lớn theo nhãn hàng, mỡ và natri.

Các món ăn phụ thuộc trực tiếp vào sáu mục này cũng được loại khỏi chỉ mục món ăn để tránh tham chiếu `foodId` không tồn tại. Không tự động thay thế bằng thực phẩm gần tương đương.

## Hai mươi mốt bản ghi nguồn trực tiếp đã bổ sung

Đã bổ sung 21 bản ghi VDD có đủ năng lượng, đạm, glucid và lipid, không dùng close-match. Sáu bản ghi đầu tiên thay thế các mục bị ẩn; 15 bản ghi tiếp theo đưa chỉ mục công khai từ 985 lên đúng 1000:

- Gạo nếp cái (mã 1001)
- Bánh bao (mã 1009)
- Cải bắp đỏ (mã 4011)
- Rau giền cơm (mã 4072)
- Rau giền đỏ (mã 4073)
- Nấm hương tươi (mã 4123)

Các mục bổ sung tiếp theo gồm gạo nếp máy, gạo tẻ giã, gạo tẻ máy, kê, đậu đũa hạt, khoai lang nghệ, cùi dừa non, cải soong, cải thìa, đậu rồng quả non, mướp, rau khoai lang, cần tây, chuối tây và kiwi.

Các bản ghi mới được gắn `source_verified`, giữ nguyên cơ sở 100 g và ghi rõ trạng thái sống/chín.

## Nhóm cần xác minh cơ sở 100 g thành phẩm

Các cảnh báo cơ sở 100 g thành phẩm đã được đóng: mục có nguồn trực tiếp mang `source_verified`; mục công thức ước tính mang `reviewed_keep_current` kèm `basisNote` và `reviewNote`. Bộ QA chỉ còn đưa vào hàng đợi những mục chưa có quyết định.

1. Xác định rõ sống/chín và phần ăn được.
2. Chuẩn hóa về 100 g thành phẩm, không dùng 100 g nguyên liệu nếu có hao hụt nước/dầu.
3. Ghi rõ nguồn, mã bản ghi, ngày truy cập và mức độ tin cậy.
4. Chạy lại `npm run qa:food-data`, `npm run qa:recipes` và `npm run build`.

## Quy tắc không tự ý sửa

- Không dùng dữ liệu của thực phẩm khác loài, khác trạng thái hoặc khác món chỉ vì tên gần giống.
- Không nâng `confidence` từ `low/medium` lên `high` nếu chưa có nguồn phân tích trực tiếp.
- Không xóa bản ghi nguồn lỗi khỏi API gốc; chỉ loại khỏi tra cứu công khai và ghi lại lý do.
- Các close-match USDA chỉ được dùng làm tham khảo, không xem là dữ liệu đại diện cho mọi sản phẩm Việt Nam.

## Lệnh kiểm tra chuẩn

```text
npm run qa:food-data
npm run qa:recipes
npm run qa:data-consistency
npm run test:tools
npx astro check
npm run build
```
