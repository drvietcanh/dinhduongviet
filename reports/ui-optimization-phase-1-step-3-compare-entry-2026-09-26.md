# UI Optimization — Phase 1, Step 3: Compare Entry Point

Ngày: 2026-09-26

## Phát hiện

Thư viện `/thuc-pham` chưa có mô hình chọn nhiều card; mỗi card hiện là một liên kết mở trang chi tiết. Vì vậy chưa thêm thanh trạng thái chọn 1/2 món để tránh đưa vào một tương tác nửa hoàn chỉnh.

## Đã thực hiện

- Thêm CTA `So sánh thực phẩm` cạnh tiêu đề danh sách.
- CTA dùng route hiện có `/cong-cu/so-sanh-thuc-pham`.
- Kích thước tối thiểu 44px, hiển thị trên cả mobile và desktop.
- Không thay đổi card, dữ liệu, URL lọc hoặc logic render.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright 390px và 1440px: HTTP 200, không page error.
- CTA hiển thị, đúng href và cao 44px ở cả hai kích thước.

## Bước tiếp theo

- Chốt riêng mô hình chọn nhiều thực phẩm (checkbox trên card hoặc nút chọn) trước khi triển khai compare bar; đây là bước có thay đổi hành vi nên cần kiểm thử kỹ hơn các chỉnh sửa layout.
