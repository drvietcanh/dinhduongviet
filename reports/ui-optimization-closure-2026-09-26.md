# UI Optimization — Closure Checklist

Ngày: 2026-09-26

## Phạm vi đã hoàn tất

- Audit và sửa contrast theo vai trò semantic, không đổi token toàn cục ngoài phạm vi cần thiết.
- Chuẩn hóa helper text dễ đọc hơn.
- Chuẩn hóa nhãn điều hướng footer desktop/mobile.
- Chuẩn hóa breadcrumb trang Theo bệnh.
- Bổ sung trạng thái `aria-pressed` cho chip lọc tìm kiếm.
- Kiểm tra scrollspy, accordion, chip lọc và các route đại diện bằng trình duyệt thật.
- Kiểm tra desktop/mobile, dark mode ở các khu vực đã chỉnh.

## Bằng chứng kiểm tra

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Các smoke test Playwright gần nhất: 8/8 tổ hợp HTTP 200, không lỗi console/page error, không overflow ngang.
- Working tree sạch sau commit `a352ed9`.

## Không mở rộng phạm vi

- Không thay đổi nội dung y khoa, dữ liệu dinh dưỡng hoặc cấu trúc route.
- Không thay thế toàn bộ hệ thống emoji nội dung; chỉ chuẩn hóa emoji trong nhãn điều hướng có ảnh hưởng đến khả năng quét và accessibility.
- Không theo đuổi Lighthouse do môi trường trước đó không tạo được artifact ổn định; tiếp tục dùng kiểm tra mã nguồn và smoke test thực tế làm tiêu chí đóng.

## Trạng thái

Kế hoạch tối ưu giao diện hiện tại đủ điều kiện đóng. Chỉ mở lại khi phát hiện lỗi cụ thể từ người dùng hoặc khi có yêu cầu sản phẩm mới.
