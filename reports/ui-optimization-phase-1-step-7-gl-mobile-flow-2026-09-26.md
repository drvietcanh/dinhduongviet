# UI Optimization — Phase 1, Step 7: GL Calculator Mobile Flow

Ngày: 2026-09-26

## Đã thực hiện

- Bỏ auto-scroll xuống kết quả sau khi thêm món trong `/cong-cu/tinh-gl-bua-an`.
- Giữ mobile summary bar làm điểm chuyển chủ động tới kết quả.
- Thêm `aria-live="polite"` cho tổng GL trên summary bar để cập nhật được thông báo nhẹ cho công nghệ hỗ trợ.
- Không thay đổi công thức GL, dữ liệu hoặc cảnh báo y khoa.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright mobile 390px: HTTP 200, không page error, không overflow ngang.
- Sau khi thêm món: summary bar hiển thị, tổng GL cập nhật và có `aria-live="polite"`.

## Bước tiếp theo

- Rà soát mobile các calculator còn lại để tìm cùng mẫu auto-scroll hoặc kết quả bị che; chỉ sửa các lỗi đã xác nhận.
