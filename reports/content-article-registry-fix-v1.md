# Content Article Registry Fix v1

Date: 2026-07-27

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Report nền:
  - `reports/shared-search-ux-safety-patch-v1.md`
- Chưa deploy

## 2. Vấn đề

- `npm run qa` fail với lỗi:
  - `Duplicate slug "dinh-duong-benh-tri" in src\data\articles.ts, src\data\articles.ts`

## 3. Root cause

- `src/data/articles.ts` chứa 2 entry cùng slug:
  - `slug: "dinh-duong-benh-tri"` ở line khoảng `413`
  - `slug: "dinh-duong-benh-tri"` ở line khoảng `4714`
- Route canonical hiện có là:
  - `src/pages/kien-thuc-dinh-duong/dinh-duong-benh-tri.astro`
- Route này đang dùng entry canonical từ article registry qua:
  - `articleBySlug["dinh-duong-benh-tri"]`
- Entry duplicate ở đầu file không có route riêng tương ứng và làm hỏng QA registry.

## 4. Phạm vi sửa

- Chỉ sửa `src/data/articles.ts`
- Chỉ bỏ entry duplicate ở đầu file
- Giữ nguyên:
  - slug canonical đang được route sử dụng
  - route UI
  - nutrient/data khác
  - tool logic
  - build config

## 5. File đã sửa

- `src/data/articles.ts`

## 6. Kết quả sau sửa

- `slug: "dinh-duong-benh-tri"` còn đúng `1` lần trong article registry
- `npm run qa` pass
- `npm run test:tools` pass

## 7. Những gì không sửa

- không sửa route bài viết
- không đổi slug canonical
- không sửa batch content khác
- không sửa UI/search logic
- không deploy

## 8. Kết luận

- Duplicate slug blocker trong article registry đã được xử lý hẹp
- QA registry đã trở lại pass
- Repo vẫn chưa được xem là deploy-ready toàn diện vì worktree lớn vẫn còn nhiều scope đang mở
