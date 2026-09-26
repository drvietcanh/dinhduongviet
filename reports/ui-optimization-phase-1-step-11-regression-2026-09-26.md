# UI Optimization — Phase 1, Step 11: Regression Test

Ngày: 2026-09-26

## Phạm vi

Đã chạy regression trên 4 route liên quan trực tiếp đến Giai đoạn 1 (`/`, `/thuc-pham`, `/cong-cu/tinh-carb`, `/cong-cu/tinh-gl-bua-an`) ở desktop 1440px và mobile 390px.

## Kết quả

- 8/8 lượt HTTP 200.
- 0 lỗi console/page error.
- 0 overflow ngang.
- 8/8 trang có đúng một H1.
- Trang chủ chỉ còn một search visible ở cả hai kích thước.
- Chip lọc thực phẩm hiển thị và CTA so sánh đúng route.
- Search calculator có label và chip nhỏ nhất 44px trên cả desktop/mobile.

## Trạng thái

Các thay đổi Giai đoạn 1 không tạo regression trên các route đại diện.

## Bước tiếp theo

- Kiểm thử ma trận responsive 360/390/768/1024/1440px để chốt các breakpoint quan trọng.
