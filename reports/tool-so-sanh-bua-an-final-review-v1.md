# Tool Final Review: so-sanh-bua-an v1

## 1. Mốc đầu vào

- status v21 commit: `e64b27e`
- QA polish commit: `6a2ed2c`
- chưa deploy

## 2. File đã đọc

- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-so-sanh-bua-an-qa-polish-v1.md`

## 3. File đã sửa nếu có

- `src/pages/cong-cu/index.astro`
  - gắn badge `Đã kiểm v1` cho card `so-sanh-bua-an`
- `reports/tool-so-sanh-bua-an-final-review-v1.md`

## 4. Route scope sau final review

- `neutral meal comparison + data QA shell only`

## 5. Browser/mobile QA

- preview port: `4321`
- `/cong-cu/`: `200`
- `/cong-cu/so-sanh-bua-an/`: `200`
- redirect/meta refresh:
  - không redirect
  - không meta refresh
- console:
  - browser log còn giữ 6 lỗi cũ từ lượt test trước khi vá `compare`
  - kiểm fresh tab/session cho bản hiện tại:
    - `preLogCount = 6`
    - `postLogCount = 6`
    - `staleLogOnly = true`
  - kết luận: không có lỗi console mới từ bản hiện tại; log còn lại là stale log
- desktop overflow:
  - không overflow ngang
- mobile overflow:
  - viewport `390 x 844` không overflow ngang
  - `resultsOverflow = false`
  - `tableWrapperOverflow = false`
- search/chọn thực phẩm mobile:
  - 4 select dùng được
- bảng/card so sánh mobile:
  - hiển thị đúng sau khi chọn 2-4 món
- empty state:
  - rõ khi chưa chọn đủ món

## 6. UI safety

- còn form/select: có
- còn search route-scoped: không
- còn chọn thực phẩm: có, qua 4 select món dựng sẵn
- còn bảng/card so sánh: có
- còn quy đổi gram/khẩu phần user-facing: không
- còn localStorage/export/copy: không
- còn `innerHTML`: không

## 7. Clinical safety

- còn `winner`: không
- còn `tốt hơn/xấu hơn/nên chọn`: không
- còn `cân đối/thiếu/thừa/đạt mục tiêu` như đánh giá cá nhân: không
- còn filter bệnh nền: không
- còn target bệnh nền: không
- còn kết luận an toàn/phù hợp cho bệnh: không
- còn lời khuyên nên ăn/không nên ăn/chỉnh thuốc: không
- còn target natri/kali/phospho/carb/protein cá nhân: không
- `cao hơn/thấp hơn`:
  - còn, nhưng chỉ trong ngữ cảnh mô tả chênh lệch dữ liệu trung tính

## 8. Data/unit QA

- dữ liệu user-facing:
  - năng lượng: `kcal`
  - protein/glucid/chất béo/chất xơ/đường: `g`
  - natri/kali/canxi/sắt/vitamin C: `mg`
- hiển thị rõ:
  - dữ liệu nền theo `100g phần ăn được`
- missing data:
  - hiển thị trung tính `—`
- `0` vs missing:
  - `0` giữ riêng, không bị trộn vào missing
- không gọi natri là muối

## 9. XSS/render

- query đã thử:
  - `?q=<script>alert(1)</script>`
  - `?q=<b>gao</b>`
- kết quả:
  - không tạo dialog
  - không render HTML
  - không hiện literal query độc hại ra giao diện kết quả
- render bằng:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 10. Wording cấm

- grep/source/browser:
  - không còn `winner`
  - không còn `tốt hơn/xấu hơn`
  - không còn `nên chọn`
  - không còn kết luận `cân đối/thiếu/thừa/đạt mục tiêu`
  - không còn `innerHTML`
- từ còn lại nhưng chấp nhận được:
  - `cao hơn/thấp hơn`: mô tả chênh lệch dữ liệu
  - `không tự chỉnh thuốc, insulin hay lợi tiểu`: safety shell
  - `không kết luận bữa nào tốt hay xấu`: câu phủ định để chặn hiểu nhầm

## 11. /cong-cu/ card

- mô tả hiện tại:
  - `So sánh dữ liệu dinh dưỡng giữa các bữa ăn ở mức tham khảo, không kết luận bữa nào tốt hay xấu.`
- badge `Đã kiểm v1`:
  - đã gắn trong source final review
  - đã xác nhận hiển thị trong browser sau rebuild

## 12. Có sửa engine/dữ liệu/công thức/route ngoài scope/dist không

- engine: không
- dữ liệu gốc: không
- công thức chung: không
- route ngoài scope: không
- dist: không chỉnh tay

## 13. QA cuối pass/fail

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- kết luận: pass

## 14. git diff --check

- pass về nội dung
- có cảnh báo LF/CRLF Git Windows ở:
  - `src/pages/cong-cu/index.astro`

## 15. Worktree cuối sạch không

- chưa, trước commit còn:
  - `src/pages/cong-cu/index.astro`
  - `reports/tool-so-sanh-bua-an-final-review-v1.md`

## 16. Kết luận

- đủ điều kiện sang `tools-core-status-v22` nếu QA cuối pass
- stable scope đề xuất:
  - `neutral meal comparison + data QA shell only`
- chưa stable/status update trong vòng này
- chưa deploy
