# Chuẩn hóa nhóm Cơm gà — 2026-09-26

## Quyết định

- Giữ một recipe canonical: `com-ga`, tên hiển thị `Cơm gà`, dựa trên công thức cơm gà luộc.
- Loại `Cơm gà Tam Kỳ` và seed bulk `Cơm gà Hội An` để không tách món theo vùng miền khi dữ liệu dinh dưỡng chưa khác đủ rõ.
- Không gộp các kỹ thuật khác vào cùng số liệu: cơm gà xé, xối mỡ và chiên cần recipe/khẩu phần riêng khi có dữ liệu tương ứng.
- Cập nhật bốn liên kết trong `DietMealPlan.astro` sang `/mon-an/com-ga`.

## Kiểm chứng

- Build thành công: 2.022 trang, 427 recipe.
- API còn `com-ga`, không còn `com-ga-tam-ky`, `com-ga-ta` hoặc `com-ga-hoi-an`.
- Đã làm sạch 42 tham chiếu recipe cũ trong `public/ingredient-map.json` bằng `scripts/prune-ingredient-map.mjs`.
