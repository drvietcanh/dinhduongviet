# UI Optimization — Phase 1, Step 2: Food Search-First State

Ngày: 2026-09-26

## Vấn đề

Trên `/thuc-pham`, vùng `active-filter-chips` nằm sau phần bản đồ nhóm và các control danh sách. Trên mobile, người dùng phải cuộn xa mới thấy các điều kiện đang áp dụng.

## Thay đổi

- Đưa `active-filter-chips` vào ngay trong search panel, dưới các preset tìm nhanh.
- Giữ nguyên ID, JavaScript, URL, logic lọc và khả năng xóa từng chip.
- Không thay đổi thứ tự dữ liệu hoặc cấu trúc card thực phẩm.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright mobile 390px và desktop 1440px: HTTP 200, không page error, không overflow ngang.
- Khi chọn preset `Ít natri`, vùng chip lọc hiển thị ngay trong search panel ở cả hai kích thước.

## Bước tiếp theo

- Thiết kế thanh hành động so sánh trên mobile cho luồng chọn thực phẩm, chỉ hiển thị khi người dùng đã chọn mục so sánh.
