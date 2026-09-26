# UI Optimization — Step 9: Interaction Accessibility

Ngày: 2026-09-26

## Đã thực hiện

- Kiểm tra accordion footer trên mobile bằng trình duyệt thật.
- Bổ sung `aria-pressed` cho toàn bộ chip lọc tìm kiếm.
- Đồng bộ `aria-pressed` khi chọn chip và khi khởi tạo bộ lọc từ URL.

## Kiểm chứng

- Accordion chuyển từ đóng sang mở, giữ focus trên `summary`, hiển thị đúng 4 liên kết.
- Chip lọc chuyển đúng trạng thái active và `aria-pressed="true"`.
- Không có lỗi console/page error trong smoke test.
- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- `git diff --check`: đạt.

## Smoke test hồi quy

- Đã kiểm tra 8 tổ hợp: 4 route (`/`, `/tim-kiem`, `/theo-benh`, `/theo-benh/tieu-duong`) trên desktop 1440px và mobile 390px.
- 8/8 HTTP 200, không lỗi console/page error và không overflow ngang.
- Chip `Bài viết`: `aria-pressed` chuyển `false` → `true` đúng trên cả desktop và mobile.
- Accordion footer mobile: thuộc tính `open` chuyển từ chưa mở sang mở đúng.
- Accordion được bỏ qua trên desktop vì phiên bản mobile được ẩn theo thiết kế responsive.

## Bước tiếp theo

- Bước tiếp theo: tổng hợp checklist giao diện đã hoàn thành và rà soát các hạng mục còn lại trước khi đóng kế hoạch.
