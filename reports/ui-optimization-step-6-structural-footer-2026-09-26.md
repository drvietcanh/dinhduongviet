# UI Optimization — Step 6: Structural Footer Navigation

Ngày: 2026-09-26

## Phạm vi

- Rà soát footer desktop và mobile trong `src/layouts/BaseLayout.astro`.
- Loại bỏ emoji khỏi nhãn liên kết điều hướng để tăng tính nhất quán, khả năng quét nhanh và tránh phụ thuộc vào glyph hệ điều hành.
- Giữ nguyên emoji ở khu vực dữ liệu/trang trí không phải nhãn điều hướng.

## Đã thực hiện

- Chuẩn hóa nhãn các nhóm Tra cứu, Theo bệnh, Công cụ, Thực đơn và Hỗ trợ ở desktop.
- Đồng bộ các nhãn tương ứng trong các accordion footer mobile.
- Giữ nguyên URL, cấu trúc HTML, thứ tự liên kết và nội dung pháp lý.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- `git diff --check`: không phát hiện lỗi whitespace.

## Bước tiếp theo

- Chạy smoke test trình duyệt desktop/mobile cho footer và kiểm tra không có overflow, lỗi console hoặc sai liên kết sau thay đổi nhãn.
