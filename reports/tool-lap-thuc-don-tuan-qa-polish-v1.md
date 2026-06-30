# Tool `lap-thuc-don-tuan` QA Polish v1

## 1. Mốc đầu vào

- Status v16 commit: `a73fcf6 docs: update tool status with meal planning safety shell v1`
- Chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/lap-thuc-don-tuan.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v16.md`
- `reports/tools-core-status-v15.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tool-ke-hoach-bua-an-qa-polish-v1.md`
- `reports/tool-ke-hoach-bua-an-final-review-v1.md`
- `package.json`

## 3. Hiện trạng trước polish

- Có form chọn mốc calo, bệnh lý/chế độ, bữa sáng và chế độ ăn.
- Có filter bệnh nền với rule loại món và tip riêng cho gout, tiểu đường, tăng huyết áp, béo phì, suy thận, mỡ máu.
- Có output thực đơn 7 ngày, chia bữa trong ngày, tổng kết tuần.
- Có các wording dễ bị hiểu là cá thể hóa theo bệnh hoặc mục tiêu điều trị:
  - `Mục tiêu calo/ngày`
  - `Bệnh lý / Chế độ`
  - tip kiểu hạn chế muối, hạn chế đạm, ưu tiên GI thấp
- Có `innerHTML` để render empty state, plan, summary và health tip.
- Có export văn bản theo kết quả hiện ra.

## 4. File đã sửa

- `src/pages/cong-cu/lap-thuc-don-tuan.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `safe weekly menu orientation + QA polish only`

## 6. Những thứ đã hạ rủi ro

- Đổi phần mở đầu và disclaimer sang hướng `tham khảo`, không thay thế tư vấn chuyên môn.
- Đổi label `Bệnh lý / Chế độ` thành `Trường hợp cần hỏi chuyên môn`.
- Disease filter không còn lọc món hoặc sinh tip điều trị theo bệnh; chỉ còn bật safety note.
- Đổi `Mục tiêu calo/ngày` thành `Mức năng lượng tham khảo mỗi ngày`.
- Không còn user-facing BMR/TDEE.
- Không còn tip riêng kiểu hạn chế đạm, muối hoặc GI cho bệnh nền như khuyến nghị cá nhân.
- Bỏ `innerHTML`; render bằng `createElement`, `textContent`, `appendChild`, `replaceChildren`.
- Card `/cong-cu/` đổi mô tả sang hướng an toàn, chưa gắn `Đã kiểm v1`.

## 7. UI safety

- Còn form: có.
- Còn disease filter: có.
- Disease filter dùng để làm gì: chỉ bật safety note `cần hỏi bác sĩ hoặc chuyên gia dinh dưỡng trước khi áp dụng thực đơn nhiều ngày`.
- Còn kcal/macro ước tính: có.
- Còn BMR/TDEE user-facing: không.
- Còn output cá nhân: còn khung thực đơn tuần và tổng kcal/macro tham khảo, nhưng không còn output điều trị theo bệnh nền.
- Còn `innerHTML`: không.

## 8. Clinical safety

- Còn target bệnh nền: không.
- Còn kết luận an toàn/phù hợp cho bệnh: không.
- Còn hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn: không.
- Còn target natri/kali/phospho/carb/protein cá nhân theo bệnh: không.

## 9. XSS/render

- Free-text input còn lại: không có.
- Đã audit source để bảo đảm route không còn render kết quả bằng `innerHTML`.
- Render hiện tại dùng DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`
- Không có script/dialog được tạo từ tương tác route trong vòng QA này.

## 10. Browser/mobile QA

- Preview port: `http://localhost:4321`
- Route `/cong-cu/`: `200`
- Route `/cong-cu/lap-thuc-don-tuan/`: `200`
- Redirect/meta refresh: không có
- Console:
  - Browser log buffer còn giữ 1 lỗi `SyntaxError: Unexpected token '.'` từ lần load cũ trước khi sửa script route.
  - Sau khi bỏ dòng `MEAL_MAP` sai cú pháp và rebuild, route hoạt động bình thường: tạo thực đơn tuần được, summary hiện đúng, không xuất hiện lỗi runtime mới trong flow đã test.
- Desktop overflow: không có
- Mobile `390 x 844` overflow: không có
- Form/input mobile: dùng được
- Output thực đơn tuần sau submit: không overflow

## 11. Các tình huống đã kiểm

- Tải route mặc định, kiểm H1, lead, disclaimer và form.
- Chọn `Đái tháo đường...` trong nhóm cần hỏi chuyên môn + ưu tiên `Ít đường`, sau đó tạo thực đơn tuần.
- Chọn `Bệnh thận...` trong nhóm cần hỏi chuyên môn và tạo thực đơn tuần.
- Chọn `Thai kỳ...` trong nhóm cần hỏi chuyên môn ở viewport mobile `390 x 844` và tạo thực đơn tuần.
- Kiểm empty state khi pool không đủ món sau lọc.

Kỳ vọng đạt:

- Chỉ còn khung thực đơn tuần tham khảo.
- Nếu chọn nhóm cần hỏi chuyên môn thì chỉ hiện safety note.
- Không cá thể hóa điều trị theo bệnh.
- Không kết luận `phù hợp/an toàn`.
- Không hướng dẫn chỉnh thuốc/insulin/lợi tiểu.

## 12. `/cong-cu/` card

- Mô tả hiện tại:
  - `Gợi ý khung thực đơn tuần ở mức tham khảo và nhắc các trường hợp cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chưa gắn

## 13. Wording cấm

Kết quả grep/source/browser:

- Không còn user-facing:
  - `phù hợp cho người...`
  - `an toàn cho...`
  - `thực đơn điều trị`
  - `mục tiêu kcal điều trị`
  - `mục tiêu carb cá nhân`
  - `mục tiêu natri/kali/phospho cá nhân`
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
- Các từ như `đái tháo đường`, `insulin`, `thuốc`, `người cao tuổi` còn lại chỉ nằm trong safety shell.
- `kcal`, `đạm`, `béo`, `carb`, `xơ` còn lại dưới ngữ cảnh `ước tính tham khảo`, không phải mục tiêu điều trị.

## 14. Không sửa

- Không sửa engine
- Không sửa dữ liệu
- Không sửa công thức
- Không sửa route ngoài scope
- Không sửa `dist` thủ công

## 15. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass, chỉ còn cảnh báo LF/CRLF của Git Windows

## 16. `git diff --check`

- Pass.
- Còn cảnh báo môi trường Windows:
  - `src/pages/cong-cu/index.astro`
  - `src/pages/cong-cu/lap-thuc-don-tuan.astro`
- Đây là cảnh báo LF/CRLF, không phải lỗi nội dung route.

## 17. Worktree cuối

- Sạch sau commit nếu chỉ stage ba file trong scope hiện tại.

## 18. Kết luận

- Đủ điều kiện sang `tool-lap-thuc-don-tuan-final-review-v1` nếu full QA pass.
- Chưa stable/status update trong vòng này.
- Chưa deploy.
