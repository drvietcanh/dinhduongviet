# Rà soát va chạm slug bulk recipe — 2026-09-26

## Kết quả

- Đã quét toàn bộ slug công thức khai báo trực tiếp và slug sinh từ `bulk-catalog.ts`.
- Xác định và loại các dòng seed bulk trùng slug tuyệt đối với công thức chi tiết đã tồn tại.
- Giữ nguyên các công thức canonical ở `nutrition.ts`/`recipes-extra*.ts`; không xóa món chỉ gần giống tên.
- Sau build, `dist/api-recipes.json` không còn slug trùng.

## Kiểm chứng

- Build thành công: 2.024 trang.
- Số món giảm từ 430 xuống 429 trong chỉ mục (loại các bản ghi bulk trùng, không mất route canonical).
- Search index còn 1.998 mục.
- Route và API được tái tạo đầy đủ; không còn duplicate slug.
