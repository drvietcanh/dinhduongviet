# Rà soát thư viện thực phẩm và công cụ — 2026-09-11

## Phạm vi và kết quả dữ liệu

- API công khai giữ **1.000 thực phẩm** ở `foods-slim`, `foods-full` và chỉ mục tìm kiếm.
- Không có slug hoặc tên hiển thị chuẩn hóa bị trùng.
- Đã loại 12 bản ghi trùng cùng thực phẩm ở lớp xuất bản (ba chỉ, cam tươi, sữa đặc có đường, bò xay, mộc nhĩ/nấm mèo, nấm rơm, ngò gai, ngò om, giá đỗ, súp lơ xanh và thịt nguội); các công thức liên quan được chuyển sang slug chuẩn.
- Thay 12 vị trí bằng thực phẩm có đủ bốn macro từ cổng Viện Dinh dưỡng: bánh dẻo nhân trứng, bánh khoái, bánh khúc, bánh tẻ, bột chiên giòn, lạc chao dầu, bánh bích quy, bánh quẩy, cốm tươi, thịt lợn hộp, bánh trứng Custas và bánh chả.
- Sửa ba alias dẫn nhầm: `bột ngọt` không còn trỏ tới hạt nêm, `paté gan` không còn trỏ tới Paté sông và `ca bong` không còn là alias của cà tím dẹp.

### Trùng khớp trong chỉ mục tìm kiếm

Rà soát tách riêng **trùng bản ghi** với **trùng truy vấn**. Cùng một từ khóa vẫn có thể trả về nhiều mục khi chúng khác trạng thái hoặc đơn vị, ví dụ thực phẩm tươi/rang, 100 ml/1 ly, hoặc giống cụ thể/tên chung. Đây là hành vi tìm kiếm cần thiết, không tự động đồng nghĩa với bản ghi trùng.

Đợt này giảm các nhóm từ khóa đụng nhau từ 75 xuống 53. Các nhóm còn lại được giữ khi có lý do phân biệt thực phẩm, trạng thái, phần ăn, nhãn hoặc đơn vị; chúng phải tiếp tục được xem xét khi bổ sung dữ liệu mới.

## Rà soát toàn bộ 37 trang công cụ

`TOOL_METHODOLOGY_BY_SLUG` hiện phủ đủ 37/37 trang công cụ (không tính trang index). Các trang không có phép tính được ghi rõ là tra cứu, lập danh sách hoặc hub; không gán công thức giả tạo.

| Nhóm | Công cụ đã rà soát | Kết luận |
| --- | --- | --- |
| Công thức/ước tính | BMI, carb, GL, đạm, nước, đổi đơn vị, năng lượng, macro, kcal vận động, khẩu phần Việt, natri/muối, mục tiêu cân nặng/dinh dưỡng, vòng eo/chiều cao | Có công thức, nguồn và giới hạn hiển thị. |
| Tổng hợp/tra cứu | Bảng xếp hạng, lọc/tra cứu thực phẩm, so sánh, bữa ăn, nhật ký, kế hoạch bữa ăn/tuần, đi chợ, tìm món, thực phẩm đóng gói | Là luồng dữ liệu hoặc lựa chọn của người dùng; không tạo chỉ số sức khỏe mới. |
| Giáo dục/an toàn | Checklist, đĩa ăn, thai kỳ, trẻ em, theo dõi sức khỏe, tương tác thuốc/thực phẩm | Không tự động đưa con số cá thể hóa; ưu tiên cờ an toàn và hướng dẫn hỏi chuyên môn. |
| Hub | Đánh giá bữa ăn, so sánh | Dẫn đến công cụ con, không tính riêng. |

## Công thức được bổ sung

### Mục tiêu cân nặng và mục tiêu dinh dưỡng

- Chỉ với người lớn tương đối khỏe, BMI 18,5–<25, không có cờ lâm sàng, không vận động mức cao và không chọn mục tiêu tăng/giảm cân: hiển thị BMR Mifflin–St Jeor, mức duy trì theo hệ số hoạt động và khoảng AMDR carbohydrate/chất béo.
- Nữ: `10 × kg + 6,25 × cm − 5 × tuổi − 161`; nam: `10 × kg + 6,25 × cm − 5 × tuổi + 5`.
- Mức duy trì: `BMR × 1,20` (thấp) hoặc `BMR × 1,55` (vừa).
- Carbohydrate: 45–65% năng lượng, quy đổi 4 kcal/g; chất béo: 20–35% năng lượng, quy đổi 9 kcal/g.
- Không tạo deficit, surplus, tốc độ thay đổi cân nặng, mục tiêu thuốc hay hướng dẫn điều trị. Nhóm thận trọng/lâm sàng không được hiển thị năng lượng và macro dạng số.

### Tỷ lệ mỡ cơ thể tham khảo

- Bổ sung phép tính vòng eo/chiều cao: `vòng eo (cm) ÷ chiều cao (cm)`.
- Kết quả được gắn rõ là chỉ số sàng lọc từ số đo, **không phải % mỡ cơ thể** và không dùng để chẩn đoán.

## Kiểm thử bắt buộc

- `npx astro check`
- `npm run test:tools` (gồm test mới cho vòng eo/chiều cao và vùng an toàn của mục tiêu dinh dưỡng)
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run qa`
- `npm run build`

## Nguồn phương pháp chính

- Viện Dinh dưỡng: cổng tra cứu giá trị dinh dưỡng thực phẩm.
- NIDDK Body Weight Planner: phạm vi công cụ người lớn và nền tảng Mifflin–St Jeor.
- National Academies DRI: khoảng phân bố năng lượng đa lượng (AMDR).
- ACOG: thai kỳ vẫn cần đánh giá dựa trên BMI trước mang thai và bối cảnh sản khoa.
