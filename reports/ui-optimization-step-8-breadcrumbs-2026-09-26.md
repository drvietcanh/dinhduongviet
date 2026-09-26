# UI Optimization — Step 8: Breadcrumb Navigation

Ngày: 2026-09-26

## Đã thực hiện

- Chuẩn hóa breadcrumb tại `/theo-benh` và `/theo-benh/[slug]`.
- Loại bỏ emoji khỏi các nhãn điều hướng `Trang chủ` và `Theo bệnh`.
- Giữ nguyên biểu tượng phân loại trong tiêu đề bệnh và thẻ nội dung, vì đây không phải cấu trúc điều hướng.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- `git diff --check`: đạt.

## Bước tiếp theo

- Kiểm tra tương tác accordion footer và chip lọc bằng trình duyệt thật, bao gồm trạng thái mở/đóng, focus và nhãn ARIA.
