---
name: ra-soat-trung-du-lieu-dinh-duong
description: Rà soát trùng lặp và biến thể dư trong dữ liệu thực phẩm/món ăn của dự án Dinh dưỡng Việt; chỉ đề xuất hoặc xóa khi đã xác minh canonical, loại dữ liệu và liên kết.
---

# Rà soát trùng dữ liệu dinh dưỡng

## Mục tiêu

Phát hiện các bản ghi trùng thật (slug, tên chuẩn hóa, alias hoặc seed bulk) mà không làm mất dữ liệu nguồn, trạng thái chế biến, khẩu phần hay liên kết canonical.

## Quy trình bắt buộc

1. Chạy `scripts/scan_duplicates.mjs` từ thư mục gốc dự án để lập danh sách va chạm slug/tên/alias.
2. Phân loại từng va chạm: thực phẩm 100 g/100 ml, công thức theo khẩu phần, trạng thái chế biến, alias hợp lệ, hay bản ghi trùng thật.
3. Với bulk recipe, đối chiếu seed slug với các recipe trực tiếp; nếu slug trùng tuyệt đối thì giữ recipe chi tiết/canonical và loại seed bulk dư.
4. Với hậu tố địa danh (Hội An, Huế, Tam Kỳ, Vũng Tàu, miền Tây...), bỏ địa danh để tìm mục nền. Chỉ gộp khi công thức, khẩu phần và mục đích tra cứu thực sự trùng; đặc sản có thành phần/kỹ thuật riêng phải giữ.
5. Không xóa chỉ vì tên gần giống. Không gộp các bản ghi khác basis, nguồn, trạng thái, thành phần hoặc khẩu phần.
6. Khi có thay đổi dữ liệu, chạy `npm run build`, kiểm tra duplicate slug trong `dist/api-recipes.json`, cập nhật `public/api/search-index.json`, ghi báo cáo trong `reports/`, rồi mới commit/push nếu người dùng đã yêu cầu.

## Nguyên tắc an toàn

- Không dùng regex xóa hàng loạt khi chưa xem từng ứng viên.
- Ưu tiên mục đang được liên kết hoặc có mapping nguồn canonical.
- Nếu chỉ có alias trùng nhưng dữ liệu khác nhau, giữ dữ liệu và đề xuất xử lý ở lớp xếp hạng tìm kiếm.
- Báo cáo rõ mục đã xóa, mục giữ lại và lý do.
