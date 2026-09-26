# UI Optimization — Phase 1, Step 5: Food Library States

Ngày: 2026-09-26

## Đã thực hiện

- Giữ skeleton loading hiện có trong lúc tải dữ liệu.
- Tách trạng thái lỗi tải khỏi trạng thái không có kết quả.
- Thêm thông báo lỗi rõ ràng và nút `Thử tải lại` có touch target 44px.
- Khi lỗi, ẩn grid dữ liệu và hiển thị retry state; khi retry, bật lại trạng thái loading.
- Không thay đổi bộ lọc, dữ liệu, URL hoặc cách render card.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright mobile 390px: HTTP 200, không page error, không overflow ngang.
- Khi tải thành công: error state hidden, grid hiển thị, summary cập nhật `1.010 thực phẩm`.

## Bước tiếp theo

- Rà soát mobile của các trang calculator, ưu tiên cấu trúc `nhập → kết quả → chi tiết`, bắt đầu với `/cong-cu/tinh-carb`.
