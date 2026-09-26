# UI Optimization — Phase 1, Step 4: Compare Model Decision

Ngày: 2026-09-26

## Kết quả rà soát

- `/thuc-pham` hiện render mỗi món dưới dạng liên kết mở trang chi tiết.
- `/cong-cu/so-sanh-thuc-pham` hiện quản lý lựa chọn bằng search nội bộ và state trong trang.
- Route so sánh chưa nhận danh sách món qua query hoặc deep link.

## Quyết định

Chưa thêm checkbox hoặc compare bar vào card thực phẩm. Làm vậy ngay sẽ tạo hai nguồn state độc lập và không thể mở sẵn món đã chọn trên công cụ so sánh.

CTA `So sánh thực phẩm` ở tiêu đề danh sách vẫn là điểm vào rõ ràng, an toàn và đã được kiểm thử.

## Bước tiếp theo đã chốt

Nếu tiếp tục luồng này, cần thực hiện trọn gói trong một bước riêng:

1. Thiết kế contract deep-link (`?foods=slug1,slug2`).
2. Cho trang so sánh đọc và xác thực danh sách slug.
3. Thêm nút chọn riêng trên card thư viện.
4. Thêm compare bar mobile và kiểm thử giới hạn 2–4 món.

Cho đến khi có bước đó, không thay đổi card hoặc state hiện tại.
