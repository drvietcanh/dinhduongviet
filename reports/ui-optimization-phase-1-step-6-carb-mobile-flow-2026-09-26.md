# UI Optimization — Phase 1, Step 6: Carb Calculator Mobile Flow

Ngày: 2026-09-26

## Vấn đề

Trên mobile, mỗi lần thêm món vào calculator carb đều tự động cuộn xuống khu vực kết quả. Điều này làm gián đoạn việc thêm món tiếp theo và khiến người dùng phải quay lại danh sách.

## Thay đổi

- Bỏ auto-scroll sau khi thêm món.
- Giữ mobile summary bar cố định làm điểm chuyển chủ động tới kết quả.
- Không thay đổi công thức, dữ liệu, thứ tự món hoặc nút xem kết quả.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright mobile 390px: HTTP 200, không page error, không overflow ngang.
- Sau khi thêm món, summary bar hiển thị `6.9 g carb` và `1 món`.
- Summary bar vẫn là control riêng để người dùng chủ động chạm và xem kết quả.

## Bước tiếp theo

- Rà soát mobile calculator GL bữa ăn theo cùng nguyên tắc, chỉ sửa nếu còn hành vi auto-scroll hoặc kết quả khó truy cập.
