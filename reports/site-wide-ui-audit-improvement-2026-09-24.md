# Kiểm toán và cải thiện giao diện toàn dự án — 2026-09-24

## Phạm vi

Dự án tạo 2.028 trang tĩnh. Việc cải thiện được thực hiện theo các template và thành phần dùng chung để tác động đồng đều đến trang chủ, thư viện, trang chi tiết thực phẩm/món ăn, bài viết, lối vào theo bệnh, công cụ, tìm kiếm và thực đơn.

## Vấn đề hệ thống đã xác nhận

- Shell dùng nhiều gradient, blur và glassmorphism hơn mức phù hợp với website sức khỏe.
- Menu, tìm kiếm và theme toggle dùng emoji hoặc ký tự font làm biểu tượng cấu trúc.
- Chưa có liên kết bỏ qua điều hướng dành cho bàn phím.
- Theme toggle chưa công bố trạng thái sáng/tối cho công nghệ hỗ trợ.
- Nhiều form mobile có cỡ chữ 12,8–13,12 px, có thể kích hoạt tự zoom trên iOS.
- Một số nút/chip mobile có vùng chạm thấp hơn 44 px.
- Trang nhật ký và trang tìm kiếm có trường nhập chưa được gắn nhãn rõ ràng.
- Template bài viết lặp emoji trong breadcrumb, metadata, tiêu đề và trust badges, làm giảm độ tĩnh và tính biên tập.

## Thay đổi đã triển khai

- Đưa nền, card, header và các panel dùng chung về bề mặt phẳng theo semantic token.
- Thêm bộ icon SVG cho menu, tìm kiếm, theme và nút lên đầu trang.
- Thêm skip-link và điểm nhận focus `#main-content`.
- Bổ sung `aria-pressed`, nhãn động và màu trình duyệt tương ứng cho theme toggle.
- Menu mobile đóng bằng Escape từ mọi vị trí và trả focus về nút mở menu.
- Tắt chuyển động không cần thiết khi `prefers-reduced-motion: reduce`.
- Chuẩn hóa form mobile tối thiểu 16 px và điều khiển/nút mobile tối thiểu 44 px.
- Gắn nhãn cho ngày nhật ký và ô tìm kiếm toàn site.
- Làm phẳng hero/thanh tìm kiếm thư viện thực phẩm; tăng vùng chạm cho preset và nút xóa.
- Tinh gọn template bài viết áp dụng cho toàn bộ thư viện bài: bỏ emoji lặp, giảm gradient, giữ nội dung tin cậy và cảnh báo rõ ràng.

## Kiểm tra trình duyệt

Các URL đại diện: `/`, `/thuc-pham`, `/thuc-pham/com-trang`, `/mon-an/pho-bo`, `/kien-thuc-dinh-duong/dai-thao-duong`, `/theo-benh/tieu-duong`, `/cong-cu/bmi`, `/cong-cu/nhat-ky`, `/tim-kiem`, `/thuc-don`.

- Mobile 390 px: không tràn ngang, mỗi trang có đúng một H1, không còn trường form thiếu nhãn trong mẫu kiểm tra, form tối thiểu 16 px.
- Desktop 1.440 px: không tràn ngang trên toàn bộ nhóm trang đại diện.
- Skip-link nhận focus và chuyển focus đúng đến `main-content`.
- Menu mở/đóng đúng, Escape trả focus về hamburger.
- Dark mode công bố `aria-pressed=true`, nhãn đổi thành “Bật giao diện sáng”.
- Reduced motion được trình duyệt xác nhận.
- Console: 0 lỗi.

## Kiểm tra dự án

- `npx astro check`: 658 tệp, 0 lỗi, 0 cảnh báo, 0 gợi ý.
- `npm run build`: thành công, 2.028 trang.
- `npm run qa`: đạt.
- `npm run test:tools`: toàn bộ engine test đạt.
- `21st review src --json`: 58 tệp được rà, 0 finding.

## Ghi chú

Catalog 21st không truy cập được vì CLI chưa đăng nhập. Điều này không chặn triển khai vì dự án đã có design context, token và component phù hợp; không cần cài thêm dependency giao diện.
