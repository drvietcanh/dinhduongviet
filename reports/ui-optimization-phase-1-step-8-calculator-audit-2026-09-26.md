# UI Optimization — Phase 1, Step 8: Calculator Mobile Audit

Ngày: 2026-09-26

## Phạm vi

Đã quét các calculator trong `src/pages/cong-cu` có `scrollIntoView` hoặc mobile result state.

## Kết luận

- `tinh-carb` và `tinh-gl-bua-an` là luồng thêm nhiều món; auto-scroll đã được loại bỏ ở các bước 6–7.
- Các trang còn lại (`sang-loc-suy-dinh-duong`, `tinh-duong-tu-do`, `tra-cuu-nhu-cau-dinh-duong`, `lap-thuc-don-tuan`, `them-thuc-pham-dong-goi`) chỉ tạo một kết quả sau một lần submit hoặc hoàn tất tác vụ. Auto-scroll đưa kết quả mới vào vùng nhìn thấy là phù hợp và không cần sửa.
- Không phát hiện fixed overlay che kết quả hoặc thiếu đường quay lại form trong mẫu đã rà soát.

## Quyết định

Không chỉnh sửa thêm trong bước này để tránh làm giảm khả năng nhận biết kết quả của các calculator đơn bước.

## Bước tiếp theo

- Kiểm tra accessibility form mobile: label, focus, lỗi nhập và trạng thái disabled trên một calculator đại diện.
