# UI Optimization — Phase 1, Step 10: Keyboard and Status Feedback

Ngày: 2026-09-26

## Đã kiểm tra

- Focus vào search input của carb và GL calculator trên mobile.
- Tìm kiếm chuỗi không có kết quả.
- Kiểm tra lỗi console và overflow.

## Đã sửa

- Empty state động được thêm `role="status"` và `aria-live="polite"` ở cả hai calculator.
- Screen reader có thể nhận biết thông báo không có món phù hợp mà không bị chuyển focus.

## Kiểm chứng

- Focus-visible hiển thị đúng trên search input.
- Empty state trả đúng nội dung và thuộc tính status/live.
- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright mobile 390px: HTTP 200, không lỗi page, không overflow ngang.

## Bước tiếp theo

- Chạy kiểm thử hồi quy desktop/mobile cho toàn bộ các thay đổi Giai đoạn 1 và ghi nhận mốc ổn định trước khi hoàn thiện bước 11–13.
