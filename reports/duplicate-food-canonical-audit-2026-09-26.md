# Kiểm tra canonical thực phẩm — 2026-09-26

- Đối chiếu `duplicateFoodSlugsExcludedFromLibrary` với toàn bộ recipe trong `src/data/nutrition.ts`.
- 12 slug cũ bị loại khỏi thư viện đều có `foodId` reference bằng `0`; không có recipe nào trỏ vào bản ghi đã loại.
- Cơ chế `uniqueFoodAdditionsBySlug` vẫn hợp nhất bản ghi cùng slug, ưu tiên nguồn VDD đã xác minh và giữ alias/provenance trên mục canonical.
- Không xóa hoặc sửa thêm dữ liệu trong lượt này.
