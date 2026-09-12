# Báo cáo chốt rà soát toàn app — 2026-09-12

## Phạm vi

Rà lại mã nguồn Astro/TypeScript, build tĩnh, dữ liệu thực phẩm–món ăn, các API xuất bản, công cụ tính và nội dung dinh dưỡng nguy cơ cao.

## Kết quả xác minh

| Hạng mục | Kết quả |
| --- | --- |
| `npx astro check` | PASS — 509 file, 0 lỗi/cảnh báo/hint |
| `npm run build` | PASS — 1.890 trang tĩnh; API public/dist đồng bộ |
| `npm run qa` | PASS — route, liên kết nội bộ, sitemap và search coverage |
| `npm run qa:food-data` | PASS — 1.000 thực phẩm; slug/tên trùng 0; sai nhóm theo tên 0; thiếu macro lõi 0 |
| `npm run qa:recipes` | PASS — 447 món; foodId/amountG hợp lệ; 10 chênh lệch khối lượng đã có ghi chú |
| `npm run qa:data-consistency` | PASS — foods, search và dữ liệu Viện Dinh dưỡng nhất quán |
| `npm run test:tools` | PASS — 10 engine công cụ |
| `console.log` trong `src/` | Không còn |
| Medical fact-checker | 0 Critical/High/Medium; 0 bài nguy cơ cao thiếu cảnh báo hoặc tín hiệu nguồn |

## Sửa thực tế trong vòng rà soát

- Chuẩn hóa “Tai heo” và “Lá sách bò” về nhóm **Thịt**, không còn rơi vào nhóm rau với bộ số liệu rau.
- Bổ sung alias vùng miền/tiếng Anh và nguồn USDA FDC cho hai mục; lá sách bò vẫn giữ cờ close-match để chuyên gia duyệt.
- Thêm luật QA kiểm tra tên phụ phẩm động vật so với nhóm thực phẩm, ngăn lỗi tái diễn.
- Rà soát metadata bài viết, tách mô tả trùng của trang cảnh báo ăn nhạt và thêm kiểm tra QA chống trùng tiêu đề/mô tả trong chỉ mục bài viết.
- Đồng bộ lại chỉ mục nội dung theo `articles.ts`: 368 bài, 430 file được scanner quét và 409 điểm `REVIEW`; số liệu theo nhóm/chuyên khoa đã cập nhật.
- Cập nhật lại báo cáo chất lượng, chỉ mục tìm kiếm và API public sau build.
- Tinh gọn trang chủ và điều hướng theo [báo cáo UI riêng](./home-navigation-audit-2026-09-12.md): menu 3 nhóm, tìm kiếm mô tả rõ phạm vi, loại bỏ lối vào trùng.
- Bổ sung tìm cục bộ theo tên/nhóm cho trang công cụ và theo tên món cho trang món ăn; nhóm không có kết quả tự ẩn và có thông báo số kết quả.

## Các cờ còn lại có chủ đích

- 8 thực phẩm cần chuyên gia dinh dưỡng duyệt: lá sách bò, cơm gạo lứt đỏ/đen, thịt heo quay, lạp xưởng nướng, thịt hun khói, xúc xích gà/heo.
- 14 dòng nguồn Viện Dinh dưỡng có tên trống/dạng số và 1 mã lặp; giao diện đã chuẩn hóa 37 tên có căn cứ, chỉ ẩn 1 dòng trùng mã và giữ nguyên API gốc để bảo toàn provenance.
- 409 mục `REVIEW` của scanner là số liệu hoặc câu cảnh báo cần đọc ngữ cảnh; không phải lỗi tự động kết luận.

Không tự thay số liệu ở các mục chỉ có nguồn gần nghĩa hoặc công thức biến thiên theo nhãn hàng.
