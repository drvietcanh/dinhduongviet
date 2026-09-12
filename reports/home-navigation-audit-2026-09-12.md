# Rà soát trang chủ và điều hướng — 2026-09-12

## Mục tiêu

- Giúp người dùng đi tới ba việc chính trong vài giây: tìm dữ liệu, đọc theo bệnh, hoặc mở công cụ.
- Giảm lặp lại giữa thanh menu, hero và các khối lối vào.
- Giữ tìm kiếm dễ thấy trên desktop/mobile, đồng thời không làm mất các đường dẫn chuyên sâu.

## Cơ sở thiết kế

- Trang chủ nên đóng vai trò “bảng điều hướng”, ưu tiên các tác vụ tìm thông tin thay vì dồn quá nhiều nội dung lên màn hình đầu ([Nielsen Norman Group — Homepage usability](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/)).
- Ô tìm kiếm nên luôn dễ nhận biết; menu lớn phù hợp khi có nhiều nội dung nhưng phải được chia nhóm rõ và tránh hiển thị lựa chọn lặp lại ([Nielsen Norman Group — Mega menus](https://www.nngroup.com/articles/mega-menus-work-well/)).
- Nhãn và placeholder nên mô tả trực tiếp phạm vi dịch vụ tìm kiếm ([GOV.UK Design System — Navigate a service](https://design-system.service.gov.uk/patterns/navigate-a-service/)).
- Thanh đầu trang được giữ theo mô hình app bar: thương hiệu, tìm kiếm và nhóm tác vụ chính nằm cùng một vùng dễ nhận biết ([Material Design — Top app bar](https://m2.material.io/components/app-bars-top)).

## Thay đổi đã áp dụng

### Thanh điều hướng toàn site

- Gộp 4 nhóm thành 3 nhóm: `Tra cứu`, `Theo bệnh`, `Công cụ`.
- Đưa `Thực đơn` vào nhóm `Tra cứu` để tránh một nhóm cấp cao chỉ có một chủ đề.
- Đưa `Tra nhu cầu dinh dưỡng` vào nhóm `Công cụ`, vì đây là công cụ tham khảo quan trọng cho người dùng Việt.
- Đổi placeholder thành “Tìm món, thực phẩm, bệnh hoặc công cụ…” để người dùng hiểu ngay phạm vi tìm kiếm.
- Khi mở một nhóm menu, nhóm khác tự đóng; khi chọn liên kết trên mobile, menu tự đóng và trả lại trạng thái aria chính xác.
- Giới hạn chiều cao dropdown và cho phép cuộn để menu không che toàn bộ màn hình nhỏ.

### Trang chủ

- Bỏ nút “Tìm trong toàn site” trùng chức năng với ô tìm kiếm lớn và các chip gợi ý của `AutoSearch`.
- Bỏ hàng `home-flow` lặp lại các đường dẫn đã có trong hero/menu.
- Giữ một khối “Bắt đầu nhanh” với bốn lối vào: thực phẩm, món Việt, bài theo chủ đề và công cụ.
- Giữ các lối vào theo bệnh và theo mục tiêu ở các phần chuyên biệt phía dưới, để người dùng không mất khả năng khám phá sâu.

## Kiểm tra chấp nhận

- Desktop: thanh đầu trang có logo, ô tìm kiếm, 3 nhóm menu và nút giao diện; không có nhóm menu trùng.
- Mobile: menu hamburger hiển thị theo cột, dropdown cuộn được, chọn liên kết sẽ đóng menu.
- Tìm kiếm: Enter từ ô tìm kiếm điều hướng tới `/tim-kiem?q=...`; `AutoSearch` vẫn giữ autocomplete và chip gợi ý.
- Trợ năng: giữ `aria-label`, `aria-expanded`, `aria-current`; Escape đóng nhóm menu đang mở.

## Hoàn thiện luồng tìm kiếm sau trang chủ

- Trang `/cong-cu` có ô tìm cục bộ theo tên, nhóm và mô tả; nhóm không có kết quả tự ẩn và có bộ đếm kết quả.
- Trang `/mon-an` có lọc tên món tức thì, dùng chung chuẩn bỏ dấu với thư viện thực phẩm và giữ tương thích các bộ lọc khẩu phần hiện có.
- Hai ô tìm cục bộ đều có trạng thái `role="status"`/`aria-live` để người dùng bàn phím và trình đọc màn hình nhận biết số kết quả.
- Phím Escape trên thư viện thực phẩm chỉ đóng gợi ý, không xóa từ khóa người dùng đang nhập; nút Xóa vẫn là thao tác xóa rõ ràng.
- Trạng thái tìm công cụ được giữ trong tham số `q` để có thể sao chép/chia sẻ đường dẫn; menu đóng khi bấm ra ngoài và tự thu gọn khi chuyển khỏi chế độ mobile.
- Trang `/kien-thuc-dinh-duong` có tìm cục bộ trên 368 bài theo tiêu đề, mô tả, chuyên khoa, tag và đối tượng; bộ lọc chuyên khoa/đối tượng được hợp nhất, có trạng thái rỗng rõ ràng.
- `/ban-do-benh` được chuẩn hóa tìm kiếm không dấu theo mã nhóm, tên chuyên khoa, tiêu đề bài và FAQ; có nút xóa, bộ đếm x/tổng và URL `?q=`.
- Trang `/hoi-dap` có tìm kiếm không dấu, bộ đếm và trạng thái rỗng; từng câu hỏi hỗ trợ thao tác bàn phím với `aria-expanded`/`aria-controls`.
- Trang `/thuc-don` có tìm kiếm cục bộ không dấu theo nhóm bệnh, mô tả, tag và đối tượng; nhóm trống tự ẩn, có bộ đếm, trạng thái rỗng và URL `?q=`.
