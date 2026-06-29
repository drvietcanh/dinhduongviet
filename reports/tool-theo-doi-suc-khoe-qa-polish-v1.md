# Theo dõi sức khỏe QA polish v1

## Cách QA

- Build: `npm run build`.
- Preview: `npm run preview -- --port 4351`.
- Browser QA: in-app Browser plugin tại `http://127.0.0.1:4351/cong-cu/theo-doi-suc-khoe/`.
- Mobile QA: Browser viewport override `390 x 844`.

Ghi chú: in-app Browser đọc DOM, console, tương tác form và viewport được; lệnh chụp screenshot của Browser timeout ở bước capture, nên vòng này dùng DOM/console/interaction checks thay cho screenshot evidence.

## Route chính

- Route: `/cong-cu/theo-doi-suc-khoe/`
- HTTP: `200`.
- Redirect/meta refresh: không có.
- H1: `Theo dõi sức khỏe`.
- Console app: không có error/warn liên quan.
- Desktop: không overflow ngang.
- Mobile `390 x 844`: không overflow ngang; form/log/table vẫn hiển thị và nút bấm còn dễ thao tác.

## Scope UI sau patch

Route đang là `neutral tracking log + safety shell`.

Không còn user-facing:

- chart/canvas.
- goal lines/reference lines.
- target mặc định cho huyết áp, đường huyết, HbA1c, LDL.
- `health-goals-v1`.
- mục tiêu cá nhân.
- nhãn tốt/cao/thấp/rất cao/nguy cơ.
- kết luận đạt/không đạt mục tiêu.
- hướng dẫn tự chỉnh thuốc, tự đổi liều, tự đổi insulin, tự đổi thuốc huyết áp/statin, tự đổi bữa ăn hoặc chế độ chăm sóc.

Route có:

- form ghi nhật ký trung tính.
- bảng hiển thị dữ liệu người dùng nhập.
- nút xóa từng bản ghi.
- export CSV.
- safety shell nhắc hỏi bác sĩ/chuyên gia khi có triệu chứng, bệnh nền, thuốc hoặc cần cá thể hóa.

## Tình huống UI đã thử

Đã nhập và lưu các nhóm dữ liệu:

- huyết áp.
- đường huyết.
- HbA1c.
- LDL/triglyceride.
- cân nặng/vòng eo.
- nhiều bản ghi trong ngày.
- bản ghi kèm ghi chú bữa ăn.
- bản ghi kèm ghi chú thuốc.
- bản ghi kèm triệu chứng.
- giá trị rất thấp hoặc rất cao.
- tình huống người dùng muốn biết chỉ số tốt/xấu hoặc muốn tự chỉnh thuốc.

Kết quả:

- Công cụ chỉ ghi nhật ký.
- Không tự phân loại chỉ số.
- Không đưa target số.
- Không kết luận đạt/không đạt mục tiêu.
- Không khuyên tự chỉnh thuốc hoặc tự đổi liều.
- Safety shell vẫn nhắc cần hỏi bác sĩ/chuyên gia khi cần cá thể hóa.

## localStorage / nhật ký trung tính

Route lưu nhật ký qua key:

- `health-track-v1`

Kiểm tra browser:

- Lưu 2 bản ghi: bảng hiển thị 2 dòng.
- Reload trang: vẫn còn 2 dòng, xác nhận dữ liệu được lưu local.
- Xóa từng dòng: bảng về trạng thái rỗng đúng thiết kế.
- Không thấy `health-goals-v1` trong HTML/DOM route.

Dữ liệu lưu là dữ liệu người dùng nhập và ghi chú nhật ký local; app không sinh chẩn đoán, đơn thuốc, target hoặc clinical output từ localStorage.

## CSV/export

Route vẫn có nút `Xuất CSV`.

Browser plugin click được nút export nhưng không bắt được download event trong 5 giây. Kiểm tra source route cho thấy CSV được tạo từ:

- ngày đo.
- các chỉ số người dùng nhập.
- ghi chú người dùng nhập.

CSV không có target, goal line, nhãn tốt/cao/thấp, đạt/không đạt hoặc clinical output app-generated.

## Wording guard

Không thấy wording cấm do app sinh ra trên route.

Ghi chú kỹ thuật:

- Chuỗi `target` xuất hiện trong HTML build do JSON-LD chung của `BaseLayout` (`SearchAction.target.urlTemplate`), không phải user-facing text của route và không liên quan mục tiêu lâm sàng.
- Nếu người dùng tự nhập cụm nguy hiểm trong ghi chú, route có thể hiển thị lại nguyên văn như một dòng nhật ký do người dùng nhập. Đây không phải kết luận hoặc khuyến nghị do app sinh ra.

## `/cong-cu/`

Card `Theo dõi sức khỏe`:

- Mô tả: "Ghi nhật ký chỉ số sức khỏe và nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia."
- Không có badge `Đã kiểm v1`.
- Không gọi là calculator.
- Không gọi là công cụ đánh giá kiểm soát bệnh.
- Không gọi là công cụ xác định mục tiêu huyết áp/đường huyết/HbA1c/LDL.
- Không gọi là công cụ phân loại nguy cơ hoặc hướng dẫn chỉnh thuốc.

## Sửa trong vòng QA polish

Không sửa route/UI trong vòng QA polish này; chỉ tạo report QA.

Không sửa:

- engine.
- dữ liệu dinh dưỡng.
- công thức.
- route ngoài scope.
- `dist`.

## Kết luận

`/cong-cu/theo-doi-suc-khoe/` đã pass QA polish ở phạm vi `neutral tracking log + safety shell`. Cần final review riêng trước khi xét cập nhật status/stable.
