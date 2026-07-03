# tool-bang-xep-hang-final-review-v1

## Final review

- Kết quả: pass.
- Route: `/cong-cu/bang-xep-hang/`.
- QA polish commit: `cfe0e35 test: add nutrient ranking page QA`.
- Stable scope đề xuất: `neutral nutrient ranking/table + data QA shell only`.
- Chưa deploy.

## File đã đọc

- `src/pages/cong-cu/bang-xep-hang.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-bang-xep-hang-qa-polish-v1.md`
- `reports/tools-core-status-v25.md`

## File đã sửa

- `src/pages/cong-cu/index.astro`
- `reports/tool-bang-xep-hang-final-review-v1.md`

Ghi chú: chỉ gắn badge `Đã kiểm v1` cho card `/cong-cu/` sau khi final review pass; không sửa route logic trong vòng này.

## Chức năng còn lại

- Tab chọn chỉ số/sort dữ liệu còn hoạt động.
- Danh sách kết quả render đúng.
- Mỗi tab đã kiểm render khoảng 15 dòng theo thiết kế hiện tại.
- Không có search route-scoped.
- Không có filter bệnh nền.
- Không có localStorage/export/copy/share/chart/canvas.
- Không còn `innerHTML` route-scoped.
- Render output bằng `createElement`, `textContent`, `append`, `appendChild`, `replaceChildren`.
- Config client không còn render literal `${JSON.stringify(config)}`.
- Route render được danh sách kết quả sau rebuild/fresh reload.

## Safety/content

- Tool chỉ là sắp xếp dữ liệu dinh dưỡng thực phẩm ở mức tham khảo.
- Không gọi là bảng xếp hạng thực phẩm tốt/xấu.
- Không dùng "tốt nhất", "xấu nhất", "lành mạnh nhất".
- Không dùng "nên chọn".
- Cụm "nên ăn hoặc không nên ăn" chỉ còn trong câu phủ định safety shell.
- Không kết luận thực phẩm phù hợp/an toàn/tốt cho tiểu đường, tăng huyết áp, bệnh thận, gout, suy tim, thai kỳ, trẻ em.
- Không filter bệnh nền.
- Không target bệnh nền.
- Không có đạt/không đạt mục tiêu cá nhân.
- Không có thiếu/thừa theo nghĩa đánh giá cá nhân; "dữ liệu thiếu" chỉ là missing data.
- Không hướng dẫn chỉnh thuốc/insulin/lợi tiểu/bữa ăn.
- Safety/data shell nhắc dữ liệu tham khảo, theo 100g phần ăn được khi có dữ liệu, khác biệt theo giống/phần ăn được/chế biến/nhãn/nguồn, và người có bệnh nền hoặc cần chế độ ăn điều trị nên hỏi bác sĩ/chuyên gia dinh dưỡng.

## Data/unit QA

- Dữ liệu hiển thị theo 100g phần ăn được khi dữ liệu có sẵn.
- Năng lượng: `kcal`.
- Protein/đạm, chất xơ, đường, béo bão hòa: `g`.
- Sắt, canxi, vitamin C: `mg`.
- Không gọi natri là muối nếu chưa quy đổi rõ.
- Không tự bịa giá trị thiếu.
- Missing data hiển thị trung tính bằng empty state hoặc bị loại khỏi phép sắp xếp, không bị ép thành 0.
- 0 được giữ là số liệu thật nếu có trong dữ liệu nguồn.
- Sort chỉ dùng các giá trị finite number >= 0, nên missing data không làm sai thứ tự.
- Không có "cao nhất/thấp nhất" user-facing; chỉ có tăng dần/giảm dần theo số liệu.

## DOM/XSS final test

Payload query đã thử:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `"><img src=x onerror=alert(1)>`
- `=HYPERLINK("http://x","x")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Kết quả:

- Không tạo dialog.
- Không render HTML.
- Không tạo `img onerror`.
- Không phá layout.
- Không gây lỗi console.
- Không làm hỏng tab/sort/result; route vẫn render 15 dòng.

## Browser/mobile QA

- Preview port: `4327`.
- `/cong-cu/`: 200, không redirect, không meta refresh, console sạch.
- `/cong-cu/bang-xep-hang/`: 200, không redirect, không meta refresh, console sạch trong fresh tab/session.
- Desktop viewport mặc định `1280 x 720`: không overflow ngang, không blank, không framework overlay.
- Mobile viewport browser capability `390 x 844`: không overflow ngang (`scrollWidth = clientWidth = 375`), tab hoạt động.
- Interaction desktop: click `Vitamin C: giảm dần` -> active title `Vitamin C trong thực phẩm`, 15 dòng, đơn vị `mg`.
- Interaction mobile: click `Năng lượng: tăng dần` -> active title `Năng lượng trong thực phẩm`, 15 dòng, đơn vị `kcal`.
- Runtime config bug đã hết: không còn literal `${JSON.stringify(config)}` trong DOM, route không còn lỗi parse config.
- Không còn stale console log trong fresh browser session ở port `4327`.

## /cong-cu/ card

- Mô tả giữ nguyên:
  - `Sắp xếp dữ liệu dinh dưỡng thực phẩm ở mức tham khảo, không kết luận thực phẩm tốt hay xấu.`
- Badge `Đã kiểm v1`: đã gắn sau final review pass.
- Không đổi copy sang hướng "top tốt nhất", "nên chọn", "thực phẩm tốt".

## Wording/source grep

- `innerHTML`: không còn trong route.
- `console.log`: không còn trong route.
- localStorage/export/copy/share/chart/canvas: không có trong route.
- Các từ còn lại và chấp nhận được:
  - "tốt/xấu" trong câu phủ định route/card.
  - "nên ăn/không nên ăn" trong câu phủ định safety shell.
  - "thiếu" trong ngữ cảnh missing data.
  - `kcal`, `protein`, `fiber` trong key/config hoặc đơn vị dữ liệu.
  - "muối/natri" trong ghi chú dữ liệu hoặc các card khác ngoài scope.

## Không sửa ngoài scope

- Không sửa engine.
- Không sửa dữ liệu gốc hàng loạt.
- Không sửa công thức chung.
- Không sửa dist thủ công.
- Không sửa route ngoài scope.
- Không xử lý backlog data QA mã 6014.

## QA command

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- Ghi chú LF/CRLF: Git Windows có thể cảnh báo LF sẽ được thay bằng CRLF khi chạm file, không phải lỗi whitespace.

## Worktree

- Cần kiểm lại `git status --short` sau commit.

## Kết luận

- Đủ điều kiện sang `tools-core-status-v26`.
- Stable scope đề xuất: `neutral nutrient ranking/table + data QA shell only`.
- Chưa stable/status update trong vòng này.
- Chưa deploy.
