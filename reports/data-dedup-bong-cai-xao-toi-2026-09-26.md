# Rà soát trùng slug Bông cải xào tỏi — 2026-09-26

## Phát hiện

Kiểm thử tìm kiếm `bông cải` trên desktop cho thấy hai kết quả khác tên nhưng cùng URL `/mon-an/bong-cai-xao-toi`:

- Công thức chi tiết `Bông cải xanh xào tỏi` trong `recipes-extra6.ts`.
- Công thức bulk tối giản `Bông cải xào tỏi` sinh từ dòng seed trong `bulk-catalog.ts`.

## Xử lý

- Đã xóa đúng dòng seed `Bông cải xào tỏi` khỏi `bulk-catalog.ts`.
- Giữ công thức chi tiết và slug canonical `bong-cai-xanh-xao-toi`.
- Không thay đổi dữ liệu thực phẩm `sup-lo` hoặc `bong-cai-xanh`.

## Kiểm chứng

- Build thành công: 2.025 trang.
- Recipes giảm từ 431 xuống 430; search index còn 1.999 mục.
- Truy vấn `bông cải` còn 4 kết quả và không còn hai mục cùng URL.
- Kiểm tra trên desktop và iPhone 17: ô tìm kiếm, gợi ý và kết quả đều hiển thị đúng.
