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

## Bước tiếp theo

- Chạy lại smoke test sau thay đổi ARIA trên desktop/mobile và tổng hợp các hạng mục còn lại của kế hoạch giao diện.
