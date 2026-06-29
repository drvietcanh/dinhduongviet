# Tool nuoc-muoi-mon-an QA polish v1

## Bối cảnh

- Vòng: `tool-nuoc-muoi-mon-an-qa-polish-v1`.
- Mốc safety patch: `local-nuoc-muoi-mon-an-safety-patch-v1 -> a63bdbb`.
- Route chính: `/cong-cu/nuoc-muoi-mon-an/`.
- File route chính: `src/pages/cong-cu/nuoc-muoi-mon-an.astro`.
- Mục tiêu QA: xác nhận route chỉ là lookup muối ước tính món ăn + safety shell, không phải công cụ đánh giá an toàn theo bệnh nền hoặc xác định mục tiêu muối/natri cá nhân.

## Cách QA browser/mobile

- Chạy `npm run build`.
- Chạy preview local tại `http://localhost:4367`.
- Kiểm HTTP bằng `Invoke-WebRequest`:
  - `/cong-cu/` trả 200.
  - `/cong-cu/nuoc-muoi-mon-an/` trả 200.
- Kiểm bằng Browser plugin:
  - Desktop viewport mặc định.
  - Mobile class 390 px x 844 px bằng viewport override.
  - Kiểm DOM, console log, overflow ngang, input search và kết quả lookup.

## Kết quả route chính

- URL kiểm: `http://localhost:4367/cong-cu/nuoc-muoi-mon-an/`.
- HTTP 200: pass.
- Redirect: không ghi nhận.
- Meta refresh: không có.
- H1 hiện tại: `🧂 Tra nhanh lượng muối trong món ăn`.
- Console app: không có error/warning.
- Desktop overflow ngang: không.
- Mobile 390 px-class overflow ngang: không.
- Input search tồn tại và dễ nhập trên mobile.

## Search input và render kết quả

Các case đã thử:

| Query | Kết quả |
| --- | --- |
| `mì` | Trả `Bánh mì thịt` và `Mì gói`, chỉ hiện lượng muối ước tính. |
| `phở` | Trả `Phở bò`, chỉ hiện lượng muối ước tính. |
| `bánh mì` | Trả `Bánh mì thịt`, chỉ hiện lượng muối ước tính. |
| `nước mắm` | Không tìm thấy món trong danh sách tham khảo. |
| `canh` | Trả `Canh chua` và `Canh rau`, chỉ hiện lượng muối ước tính. |
| `khong-co-mon` | Không tìm thấy món trong danh sách tham khảo. |
| `<script>alert(1)</script>` | Không tìm thấy món, không sinh thẻ script, không có dialog. |

Render kết quả an toàn:

- Source route dùng `textContent` cho tên món, ghi chú, lượng muối và label.
- Source route dùng `replaceChildren()` để thay kết quả.
- Không thấy `innerHTML`/HTML không kiểm soát từ input trong route.
- Browser QA với input `<script>alert(1)</script>` không tạo script tag trong vùng kết quả.

## Kiểm output nguy cơ cao

Không còn trong route user-facing:

- Bảng disease target.
- Ngưỡng bệnh nền kiểu `dưới 2g` hoặc `dưới 2-3g`.
- Target riêng cho tăng huyết áp, suy tim, suy thận hoặc bệnh thận.
- Target muối/natri/kali/phospho/nước cá nhân.
- Nhãn đánh giá `cao/vừa/thấp/rất cao` như kết luận sức khỏe cá nhân.
- Màu cảnh báo biến lookup thành phân loại sức khỏe cá nhân.
- Lời khuyên tự chỉnh thuốc, thuốc lợi tiểu, thuốc huyết áp, muối, dịch hoặc chế độ điều trị.

Chuỗi `cao` còn xuất hiện trong cụm `người cao tuổi`, là mô tả nhóm cần hỏi chuyên môn, không phải nhãn đánh giá món ăn. Không ghi nhận `vừa` hoặc `thấp` như nhãn kết quả.

## Tình huống UI đã thử

- Tìm `mì`, `phở`, `bánh mì`, `nước mắm`, `canh`.
- Tìm món không có trong danh sách.
- Tìm chuỗi có ký tự đặc biệt.
- Người tăng huyết áp muốn biết món này ăn được không.
- Người suy tim/phù muốn biết cần hạn chế dịch/muối thế nào.
- Người bệnh thận muốn biết mục tiêu natri/kali/phospho.
- Người dùng muốn biết mục tiêu muối mỗi ngày.
- Người dùng muốn thay đổi thuốc huyết áp/lợi tiểu theo lượng muối ăn.

Kết luận UI:

- Lookup chỉ trả thông tin muối ước tính của món nếu có dữ liệu.
- Không kết luận món an toàn/không an toàn cho bệnh nền.
- Không đưa target muối/natri/kali/phospho cá nhân.
- Không phân loại món ăn thành cao/vừa/thấp theo sức khỏe cá nhân.
- Có nhắc hỏi bác sĩ/chuyên gia dinh dưỡng khi có bệnh nền, thuốc liên quan, phù, suy tim, bệnh thận, tăng huyết áp, thai kỳ, người cao tuổi hoặc cần cá thể hóa.

## Wording cấm

Không thấy user-facing:

- `an toàn cho tăng huyết áp`, `an toàn cho suy tim`, `an toàn cho suy thận`, `an toàn cho bệnh thận`.
- `không cần hỏi bác sĩ`.
- `mục tiêu muối cá nhân`, `mục tiêu natri cá nhân`, `mục tiêu kali cá nhân`, `mục tiêu phospho cá nhân`, `mục tiêu nước cá nhân`.
- `dưới 2g`, `dưới 2-3g`.
- `đạt mục tiêu`, `không đạt mục tiêu`.
- `bắt buộc tránh`, `ăn càng ít muối càng tốt`.
- `tự ngừng thuốc`, `tự chỉnh thuốc`, `tự chỉnh liều`, `tăng liều`, `giảm liều`.
- `đổi thuốc huyết áp`, `đổi thuốc lợi tiểu`.
- `điều trị tăng huyết áp`, `điều trị suy tim`, `điều trị bệnh thận`, `chỉ định`.

## `/cong-cu/` card

- Card hiện tên: `Muối trong món ăn`.
- Mô tả đã polish: `Tra cứu muối ước tính trong món ăn và nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia.`
- Không có badge `Đã kiểm v1` trong vòng này.
- Không gọi là calculator bệnh nền.
- Không gọi là công cụ xác định mục tiêu muối/natri.
- Không gọi là công cụ đánh giá món ăn an toàn cho tăng huyết áp/suy tim/bệnh thận.
- Không gọi là công cụ điều trị hay chỉnh thuốc.

## Thay đổi trong vòng này

- Sửa nhẹ wording route: eyebrow từ `Công cụ an toàn v1` thành `Trang tham khảo`.
- Sửa nhẹ mô tả card `/cong-cu/` để nhấn mạnh tra cứu ước tính và hỏi chuyên môn.
- Không sửa dữ liệu dinh dưỡng/salt range.
- Không sửa engine/tool stable khác.
- Không sửa công thức.
- Không sửa route stable đã chốt.
- Không sửa `dist`.

## Cảnh báo môi trường

- Nếu Git Windows cảnh báo LF/CRLF khi stage/commit, phân loại là cảnh báo môi trường nếu `git diff --check` không fail.

## Kết luận

Route `/cong-cu/nuoc-muoi-mon-an/` pass QA polish ở phạm vi lookup muối ước tính + safety shell. Route không còn disease target/ngưỡng bệnh nền/target cá nhân/nhãn cao-vừa-thấp như kết luận sức khỏe. Cần final review trước khi xét cập nhật status/stable.
