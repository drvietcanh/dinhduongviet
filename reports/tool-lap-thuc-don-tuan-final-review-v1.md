# Tool `lap-thuc-don-tuan` Final Review v1

## 1. Mốc đầu vào

- Status v16 commit: `a73fcf6 docs: update tool status with meal planning safety shell v1`
- QA polish commit: `5e5806b test: add weekly menu page QA`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/lap-thuc-don-tuan.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-lap-thuc-don-tuan-qa-polish-v1.md`
- `reports/tools-core-status-v16.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. File đã sửa nếu có

- `reports/tool-lap-thuc-don-tuan-final-review-v1.md`

Không cần sửa thêm route hay card trong vòng final review này.

## 4. Route scope sau final review

- `safe weekly menu orientation + safety shell only`

Route vẫn là công cụ gợi ý khung thực đơn tuần ở mức tham khảo, không phải thực đơn điều trị cá nhân.

## 5. Browser/mobile QA

- Preview port: `http://localhost:4321`
- Route `/cong-cu/`: `200`
- Route `/cong-cu/lap-thuc-don-tuan/`: `200`
- Redirect/meta refresh: không có
- Console:
  - Đã kiểm bằng fresh reload/session sau rebuild, không dựa vào log buffer cũ.
  - Không còn `SyntaxError: Unexpected token '.'`.
  - Không thấy lỗi runtime mới trong flow final review.
- Desktop overflow: không có
- Mobile `390 x 844` overflow: không có
- Form mobile: dùng được
- Output sau submit: không overflow

## 6. UI safety

- Còn form: có
- Còn disease filter: có
- Disease filter dùng để làm gì:
  - chỉ bật safety note `cần hỏi bác sĩ hoặc chuyên gia dinh dưỡng`
  - không lọc món theo bệnh nền
  - không sinh thực đơn điều trị theo bệnh nền
- Còn kcal/macro ước tính: có
- Còn BMR/TDEE user-facing: không
- Còn output cá nhân:
  - còn khung thực đơn tuần và tổng kết kcal/macro tham khảo
  - không còn output điều trị theo bệnh nền
- Còn `innerHTML`: không

## 7. Clinical safety

- Còn target bệnh nền: không
- Còn kết luận an toàn/phù hợp cho bệnh: không
- Còn lời khuyên chỉnh thuốc/insulin/lợi tiểu/bữa ăn: không
- Còn target natri/kali/phospho/carb/protein cá nhân theo bệnh: không
- Còn `mục tiêu kcal/ngày` theo nghĩa mục tiêu điều trị: không

## 8. XSS/render

- Route không còn free-text input để bơm HTML/script
- Query string đã thử:
  - `?q=<script>alert(1)</script>`
- Kết quả:
  - không tạo script/dialog
  - không render HTML từ query
  - không làm xuất hiện output cá thể hóa
- Render hiện tại dùng DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 9. Các tình huống đã kiểm

1. Người trưởng thành khỏe mạnh, không chọn nhóm cần hỏi chuyên môn
   - tạo được khung thực đơn tuần tham khảo
   - summary và export hiện đúng
2. Chọn nhóm `Đái tháo đường, tiền đái tháo đường...`
   - chỉ hiện safety note hỏi bác sĩ/chuyên gia
   - không sinh thực đơn điều trị theo bệnh
3. Chọn nhóm `Bệnh thận...`
   - chỉ hiện safety note
   - không target kali/phospho/natri/protein cá nhân
4. Chọn nhóm `Tăng huyết áp...`
   - chỉ hiện safety note
   - không target natri hay thực đơn điều trị
5. Chọn nhóm `Thai kỳ, cho con bú, trẻ em, người cao tuổi...`
   - chỉ hiện safety note
   - không cá thể hóa điều trị
6. Mobile `390 x 844`
   - form thao tác được
   - output không vỡ layout

## 10. Wording cấm

Kết quả grep/source/browser:

- Không còn user-facing:
  - `phù hợp cho người...`
  - `an toàn cho...`
  - `thực đơn điều trị`
  - `mục tiêu điều trị cá nhân`
  - `mục tiêu kcal điều trị`
  - `mục tiêu natri/kali/phospho/carb/protein cá nhân`
  - `đạt mục tiêu`
  - `không đạt mục tiêu`
  - `nên ăn`
  - `không nên ăn`
  - `không cần hỏi bác sĩ`
  - `tự chỉnh thuốc`
  - `tự chỉnh insulin`
  - `tự chỉnh lợi tiểu`
  - `chỉ định`
  - `kê đơn`
- Các từ còn lại như `đái tháo đường`, `insulin`, `thuốc`, `người cao tuổi` chỉ nằm trong safety shell hoặc nhãn nhóm cần hỏi chuyên môn.
- `kcal`, `đạm`, `béo`, `carb`, `xơ` còn lại dưới ngữ cảnh `ước tính tham khảo`, không phải mục tiêu điều trị.

## 11. `/cong-cu/` card

- Mô tả hiện tại:
  - `Gợi ý khung thực đơn tuần ở mức tham khảo và nhắc các trường hợp cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chưa gắn

## 12. Có sửa engine/dữ liệu/công thức/route ngoài scope/dist không

- Không sửa engine
- Không sửa dữ liệu
- Không sửa công thức chung
- Không sửa route ngoài scope
- Không sửa `dist` thủ công

## 13. QA cuối pass/fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- Kết luận QA cuối: `pass`

## 14. `git diff --check`

- `git diff --check`: pass
- Không có lỗi whitespace/blocking diff
- Không có lỗi LF/CRLF làm fail check trong vòng này

## 15. Worktree cuối sạch không

- Sạch sau khi commit file report của vòng final review này

## 16. Kết luận

- Đủ điều kiện sang `tools-core-status-v17` nếu bộ QA cuối pass
- Stable scope đề xuất:
  - `safe weekly menu orientation + safety shell only`
- Chưa stable/status update trong vòng này
- Chưa deploy
