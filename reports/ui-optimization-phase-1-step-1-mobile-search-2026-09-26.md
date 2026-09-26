# UI Optimization — Phase 1, Step 1: Mobile Search Entry Point

Ngày: 2026-09-26

## Vấn đề

Trang chủ mobile hiển thị đồng thời ô tìm kiếm sticky trong header và một ô tìm kiếm thứ hai trong hero. Hai điểm vào cùng một tác vụ làm tăng chiều cao màn hình đầu và tạo cảm giác lặp.

## Thay đổi

- Giữ ô tìm kiếm trong header làm điểm tra cứu duy nhất trên màn hình rộng tối đa 640px.
- Ẩn `hero-search` trên mobile bằng breakpoint hiện có.
- Không thay đổi trải nghiệm desktop, nơi hero search vẫn có vai trò trình bày chính.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright: homepage mobile 390px và desktop 1440px đều HTTP 200, 1 search visible, 1 H1, không lỗi page và không overflow ngang.

## Bước tiếp theo

- Tối ưu trang `/thuc-pham` theo mô hình search-first: đưa tìm kiếm và trạng thái bộ lọc lên trước danh sách, giữ nguyên dữ liệu và URL hiện có.
