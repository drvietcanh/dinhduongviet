# Báo cáo quét lỗi — 2026-09-12

## Kết quả

- `npx astro check`: **PASS** — 509 file, 0 lỗi, 0 cảnh báo, 0 hint.
- `npm run build`: **PASS** — 1.890 trang tĩnh; API công khai được tái sinh và đồng bộ.
- `npm run qa`: **PASS** — thương hiệu, route nội bộ, sitemap, placeholder và độ phủ tìm kiếm hợp lệ.
- `npm run qa:food-data`: **PASS** — 1.000 thực phẩm; slug/tên trùng 0; alias collision 0; thiếu macro lõi 0; sai nhóm theo tên 0; cross-reference Việt sai 0.
- `npm run qa:recipes`: **PASS** — 447 món, tham chiếu đủ 1.000 thực phẩm; 10 chênh lệch khối lượng đều có ghi chú.
- `npm run qa:data-consistency`: **PASS** — các API public/dist đồng nhất.
- `npm run test:tools`: **PASS** — 10 engine công cụ.
- `git diff --check`: **PASS** — chỉ còn cảnh báo chuyển đổi LF/CRLF của Git.

## Quét mã và CSS

- Không tìm thấy `console.log` trong `src/`.
- Không tìm thấy biến CSS được dùng nhưng chưa định nghĩa trong các file Astro/CSS/TS.

## Cờ cần duyệt, không tự đoán

- 8 thực phẩm vẫn mang cờ `needsDietitianReview` (món ước tính, lạp xưởng/thịt hun khói/xúc xích, cơm gạo lứt đỏ/đen và lá sách bò — nguồn tripe chỉ là close match).
- Rà soát nhóm phát hiện và sửa hai bản ghi phụ phẩm động vật từng rơi vào nhóm rau: `tai-heo` (USDA FDC 167857) và `la-sach-bo` (USDA FDC 170599 close match).
- Bảng nguồn Việt gốc còn 14 tên lỗi/mất cột và 1 mã trùng; giao diện tra cứu đã sửa 37 tên chắc chắn, hiển thị 525/526 dòng và giữ API gốc để đối chiếu.

Các cờ trên là giới hạn nguồn hoặc cần thẩm định chuyên môn, không phải lỗi biên dịch. Không tự gán số liệu thay thế khi chưa có nguồn khớp trực tiếp.
