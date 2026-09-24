# Kiểm toán và cải thiện giao diện trang chủ — 2026-09-24

## Phạm vi

- Kiểm toán trang chủ theo hướng website sức khỏe: phân cấp thông tin, độ tin cậy, khả năng tiếp cận, responsive và chất lượng tương tác.
- Cải thiện trực tiếp bằng Astro/CSS, giữ nguyên hệ token và cấu trúc dữ liệu hiện có.
- Kiểm tra thực tế bằng trình duyệt ở light mode, dark mode và reduced motion.

## Vấn đề trước thay đổi

- Trang chủ dài và có quá nhiều nhóm thẻ cùng mức ưu tiên; bản mobile dài khoảng 11.742 px.
- Hero dùng nhiều hiệu ứng gradient/glass và lặp lại lối vào, khiến tác vụ chính chưa đủ rõ.
- Emoji được dùng như biểu tượng cấu trúc, làm ngôn ngữ thị giác thiếu nhất quán.
- Một đoạn JavaScript ở trang chủ tự suy diễn cảnh báo y khoa từ một lần đo lưu trong localStorage.
- Có nội dung mô tả quy trình thiết kế xuất hiện trong giao diện công khai.

## Hướng cải thiện đã chọn

- Hướng “clinical editorial”: bình tĩnh, ít trang trí, ưu tiên tìm kiếm và lối vào theo ý định người dùng.
- Hero tập trung vào ba nhu cầu chính: tra thực phẩm, đọc theo bệnh, dùng công cụ.
- Rút gọn nội dung ưu tiên: 4 lối vào, 6 bệnh, 6 công cụ, 6 thực phẩm và 3 bài nổi bật.
- Dùng bộ icon SVG nét thống nhất, mục tiêu chạm tối thiểu 44 px, trạng thái focus rõ ràng.
- Thay cảnh báo suy diễn bằng lời mời trung tính “tiếp tục theo dõi” khi có dữ liệu cục bộ.
- Giữ thông điệp an toàn: nội dung tham khảo, không thay thế tư vấn y tế cá nhân.

## Tệp thay đổi

- `src/pages/index.astro`: cấu trúc, nội dung, responsive và tương tác trang chủ.
- `src/components/HomeIcon.astro`: bộ icon SVG dùng riêng cho các tác vụ trang chủ.
- `.21st/design.json`: bối cảnh thiết kế và các ràng buộc giao diện của dự án.

## Kết quả kiểm tra

- `npx astro check`: 0 lỗi, 0 cảnh báo, 0 gợi ý.
- `npm run build`: thành công, 2.028 trang được tạo.
- `npm run qa`: đạt toàn bộ kiểm tra thương hiệu, dữ liệu, liên kết, tìm kiếm và sitemap.
- Playwright: không tràn ngang tại 360, 390, 768, 1024 và 1920 px.
- Playwright: CTA “Tra thực phẩm” mở đúng `/thuc-pham`; console có 0 lỗi.
- Dark mode và `prefers-reduced-motion: reduce` được xác nhận hoạt động.
- Chiều dài mobile sau thay đổi khoảng 9.023 px, giảm khoảng 23% so với bản trước.

## Ghi chú công cụ

- `21st review` hiện không nhận diện tệp `.astro` trong lần chạy này (`filesReviewed: 0`), nên kết luận kiểm toán dựa trên review thủ công có hệ thống, Astro check và kiểm tra trình duyệt thực tế.
- Tìm cảm hứng trực tiếp từ catalog 21st yêu cầu đăng nhập; việc này không ảnh hưởng đến triển khai vì hướng thiết kế được xác định từ design context của dự án và bộ quy tắc UI/UX cục bộ.
