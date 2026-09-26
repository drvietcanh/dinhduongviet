# UI Optimization — Phase 1, Step 9: Calculator Form Accessibility

Ngày: 2026-09-26

## Phát hiện

- Search input trong carb và GL calculator không có accessible label, chỉ có placeholder.
- Chip nhóm ở breakpoint 480px bị giảm còn 38px, dưới chuẩn touch target 44px.

## Đã sửa

- Thêm visually-hidden label cho search input ở cả hai calculator.
- Khôi phục `min-height: 44px` cho chip nhóm trên mobile.

## Kiểm chứng

- `npx astro check`: 658 files, 0 errors, 0 warnings, 0 hints.
- Playwright mobile 390px trên `/cong-cu/tinh-carb` và `/cong-cu/tinh-gl-bua-an`:
  - HTTP 200.
  - Label được nhận đúng.
  - Chip nhỏ nhất cao 44px.
  - Không overflow ngang.

## Bước tiếp theo

- Rà soát focus keyboard và trạng thái lỗi/disabled trên cùng các form calculator.
