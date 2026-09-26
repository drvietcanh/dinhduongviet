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

## Smoke test trình duyệt

- Đã kiểm tra desktop 1440px và mobile 390px trên `/`, `/tim-kiem` và `/cong-cu/tinh-carb/`.
- 6/6 trường hợp trả HTTP 200.
- 0 lỗi console/page error.
- 0 trường hợp tràn ngang (`body.scrollWidth` bằng `innerWidth`).
- Footer hiển thị và 85 liên kết footer được render ổn định ở cả hai kích thước.
- Các nhãn đầu nhóm được xác nhận không còn emoji: `Thực phẩm`, `Món ăn`, `So sánh thực phẩm`, `Bảng thành phần thực phẩm Việt`.

## Bước tiếp theo

- Bước tiếp theo: rà soát các khu vực điều hướng còn lại (breadcrumb, chip lọc, accordion) để thống nhất icon/nhãn và tiếp tục kiểm thử tương tác.
