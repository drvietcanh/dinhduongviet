# Tool QA Polish: so-sanh-bua-an v1

## 1. Mốc đầu vào

- status v21 commit: `e64b27e`
- chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/index.astro`
- `src/lib/nutrition.ts`
- `reports/tools-core-status-v21.md`
- `reports/tools-core-status-v20.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-so-sanh-thuc-pham-final-review-v1.md`
- `reports/tool-tra-cuu-thuc-pham-viet-final-review-v1.md`
- `reports/tool-loc-thuc-pham-final-review-v1.md`
- `package.json`

## 3. Hiện trạng trước polish

- Tạo/chọn bữa ăn:
  - có 4 select để chọn 2-4 món ăn dựng sẵn từ recipe database
  - không có free-text cho tên bữa ăn
- Search/chọn thực phẩm:
  - không có search/autocomplete riêng
  - không nhập món theo tay
- Bảng/card so sánh:
  - có bảng so sánh và summary card
  - có link sang trang chi tiết món
- Đơn vị dữ liệu:
  - năng lượng `kcal`
  - đạm/béo/carb/xơ/đường `g`
  - natri/kali/sắt/canxi/vitamin C `mg`
- Nguồn dữ liệu:
  - lấy từ `recipes` + `calculateRecipe(...)`
  - dữ liệu thực phẩm nền là per-100g phần ăn được
- Wording nguy cơ:
  - lead copy có câu `phù hợp với mục tiêu của bạn`
  - summary bar ngầm xếp hạng theo kiểu món nào cao nhất/thấp nhất
  - màu xanh/cam ở ô max/min dễ bị hiểu là tốt/xấu
- Target/nhãn đánh giá:
  - không có target cá nhân rõ ràng
  - không có filter bệnh nền
  - nhưng UX vẫn dễ bị hiểu là chọn bữa “hợp hơn”
- Render:
  - dùng `innerHTML` cho empty state và toàn bộ bảng kết quả
- Data QA issue:
  - `fmt()` đang trả `—` cho cả `0` lẫn thiếu dữ liệu
  - logic so sánh dùng `0` thay cho thiếu dữ liệu, dễ làm mờ ranh giới giữa zero và missing

## 4. File đã sửa

- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral meal comparison + data QA shell only`

## 6. Những thứ đã hạ rủi ro

- đổi lead copy sang hướng so sánh dữ liệu trung tính
- thêm safety/data shell ở đầu route
- bỏ wording `phù hợp với mục tiêu của bạn`
- bỏ `innerHTML`, chuyển sang `createElement`, `textContent`, `appendChild`, `replaceChildren`
- bỏ inline `onchange`, chuyển sang event listener để tránh lỗi runtime scope
- summary đổi sang `chênh lệch dữ liệu`, không còn gợi ý chọn bữa
- giữ `cao hơn/thấp hơn` chỉ trong ngữ cảnh số liệu trung tính
- tách `0` khỏi missing data trong formatter
- highlight max/min đổi sang nhấn dữ liệu trung tính, không còn màu good/bad kiểu sức khỏe
- cập nhật card `/cong-cu/` sang mô tả an toàn hơn

## 7. Data/unit QA

- đơn vị hiển thị:
  - năng lượng: `kcal`
  - protein/glucid/chất béo/chất xơ/đường: `g`
  - natri/kali/canxi/sắt/vitamin C: `mg`
- per 100g/khẩu phần:
  - route ghi rõ dữ liệu nền là theo `100g phần ăn được`
  - tổng cho bữa là ước tính từ công thức món đã chọn
- tổng bữa ăn theo gram/khẩu phần:
  - route dùng recipe total dựng sẵn theo `servingName`
  - không có quy đổi gram/khẩu phần user-facing mới
- missing data:
  - hiển thị `—` khi không có số liệu
  - không suy đoán số thiếu
- `0` vs thiếu dữ liệu:
  - `0` hiển thị là `0`
  - thiếu dữ liệu hiển thị `—`
- rounding:
  - `< 10` dùng 1 chữ số thập phân
  - `>= 10` làm tròn số nguyên
  - không có số lẻ dài bất thường
- so sánh với missing data:
  - min/max chỉ tính trên giá trị số thực sự có mặt
  - không ép missing về `0`
- search tiếng Việt:
  - không có search route-scoped
- empty state:
  - rõ trước khi chọn đủ 2 món
- backlog mã 6014:
  - không thấy route này phụ thuộc trực tiếp search food raw nên không phát sinh ảnh hưởng rõ trong vòng QA này

## 8. UI safety

- còn search: không
- còn chọn thực phẩm: có, qua 4 select món dựng sẵn
- còn tạo/chọn bữa ăn: có, theo cách chọn 2-4 món để so sánh
- còn bảng/card so sánh: có
- còn quy đổi gram/khẩu phần user-facing: không
- còn localStorage/export/copy: không
- còn `innerHTML`: không

## 9. Clinical safety

- còn `winner` / `tốt hơn` / `xấu hơn` / `nên chọn`: không
- còn `cân đối` / `thiếu` / `thừa` / `đạt mục tiêu` như đánh giá cá nhân: không
- còn filter bệnh nền: không
- còn target bệnh nền: không
- còn kết luận an toàn/phù hợp/tốt-xấu cho bệnh: không
- còn lời khuyên nên ăn/không nên ăn/chỉnh thuốc: không
- còn target natri/kali/phospho/carb/protein cá nhân: không
- từ bệnh nền còn lại:
  - chỉ nằm trong safety shell để nhắc nhóm cần hỏi bác sĩ/chuyên gia

## 10. XSS/render

- input/query đã thử:
  - route-scoped free-text input: `0`
  - query string: `?q=<script>alert(1)</script>`
  - tương tác chọn món qua native select
- kết quả:
  - không tạo dialog
  - không render HTML từ query
  - không có free-text surface để bơm HTML vào kết quả
- render bằng:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 11. Browser/mobile QA

- preview port: `4321`
- route status:
  - `/cong-cu/`: `200`
  - `/cong-cu/so-sanh-bua-an/`: `200`
- redirect/meta refresh:
  - không redirect
  - không meta refresh
- console:
  - phát hiện lỗi runtime thật trong lượt đầu: `ReferenceError: compare is not defined`
  - đã vá bằng event listener thay cho inline `onchange`
  - sau rebuild, baseline log cũ trong browser plugin không tăng thêm
  - check fresh delta: `baselineCount = 6`, `afterCount = 6`, `same = true`
  - kết luận: không có lỗi console mới từ bản hiện tại
- desktop overflow:
  - không overflow ngang
- mobile overflow:
  - viewport `390 x 844` không overflow ngang
  - bảng so sánh vẫn dùng được
  - `resultsOverflow = false`
  - `wrapperOverflow = false`
- thao tác mobile:
  - chọn 2 món được
  - hiển thị bảng và summary sau chọn
- empty state:
  - rõ khi chưa chọn đủ

## 12. /cong-cu/ card

- mô tả hiện tại:
  - `So sánh dữ liệu dinh dưỡng giữa các bữa ăn ở mức tham khảo, không kết luận bữa nào tốt hay xấu.`
- badge `Đã kiểm v1`:
  - chưa gắn

## 13. Wording cấm

- grep/source/browser:
  - không còn `innerHTML`
  - không còn `winner`
  - không còn `tốt hơn/xấu hơn/nên chọn`
  - không còn `phù hợp với mục tiêu của bạn`
  - không còn wording bệnh nền theo nghĩa khuyến nghị chọn bữa
- từ còn lại nhưng chấp nhận được:
  - `không tự chỉnh thuốc, insulin hay lợi tiểu`: nằm trong safety shell, là câu cấm tự điều trị
  - `cao hơn/thấp hơn`: chỉ mô tả chênh lệch số liệu
  - `tốt hay xấu`: chỉ xuất hiện trong câu phủ định `không kết luận bữa nào tốt hay xấu`

## 14. Không sửa

- engine: không
- dữ liệu gốc hàng loạt: không
- công thức chung: không
- route ngoài scope: không
- dist: không chỉnh tay

## 15. QA cuối

- `npm run build`: pass
  - lần chạy đầu với timeout ngắn bị cắt output; rerun với timeout dài đã pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 16. git diff --check

- pass về nội dung
- có cảnh báo LF/CRLF Git Windows ở:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/so-sanh-bua-an.astro`

## 17. Worktree cuối sạch không

- chưa, trước commit còn 3 file thay đổi đúng scope

## 18. Kết luận

- đủ điều kiện sang `tool-so-sanh-bua-an-final-review-v1` nếu QA cuối pass
- chưa stable/status update
- chưa deploy
