# Shared Search UX Audit v1

Date: 2026-07-24

## 1. Mốc đầu vào

- Branch hiện tại: `data-qa-olive-metadata-followup-v1`
- Report nền:
  - `reports/worktree-reconcile-v1.md`
  - `reports/worktree-scope-triage-v1.md`
  - `reports/worktree-scope-triage-v2-content-vs-ux.md`
- Chưa deploy

## 2. Phạm vi audit

Audit này chỉ tập trung vào cụm shared search / discovery / UX, gồm:

- `src/components/AutoSearch.astro`
- `src/pages/tim-kiem.astro`
- `src/pages/cong-cu/index.astro`
- các dấu hiệu liên quan đến search/discovery runtime

Không audit sâu toàn bộ content batch, tool logic batch hay PWA batch trong vòng này.

## 3. Kết luận chính

- Shared search/UX batch hiện **chưa sẵn sàng QA cuối hoặc deploy**.
- Có ít nhất một lỗi nặng ở `src/components/AutoSearch.astro` đủ để xem đây là blocker kỹ thuật.
- `src/pages/tim-kiem.astro` có dấu hiệu đang bị chèn logic trùng/lệch vị trí, làm tăng rủi ro runtime regression.
- `src/pages/cong-cu/index.astro` đang có visual refresh riêng và kèm theo CSS thừa/mismatch, chưa nên xem là chỉ thay style vô hại.

## 4. Finding chính

### F1. `AutoSearch.astro` đang có đoạn code malformed trong `highlight()`

File:

- `src/components/AutoSearch.astro`

Quan sát:

- Tại đoạn `highlight(text, q)`, line đang đọc được có dạng:
  - `var safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\var input = el.querySelector('.ac-input'); ...`

Đánh giá:

- Đây không còn là code hợp lệ theo ý định ban đầu.
- Trông giống đoạn diff hoặc edit dở bị ghép thẳng vào string escape regex.
- Nếu file hiện đúng như đang đọc, đây là blocker trực tiếp cho shared search component.

Tác động:

- có thể làm lỗi parsing script inline
- có thể làm hỏng highlight
- có thể làm hỏng toàn bộ autocomplete runtime

Mức độ:

- `P0 runtime blocker`

### F2. `AutoSearch.astro` dùng `innerHTML` để render result sau khi thêm `highlight()`

File:

- `src/components/AutoSearch.astro`

Quan sát:

- component dựng dropdown bằng string HTML rồi gán:
  - `dropdown.innerHTML = html`
- tên item sau đó được đưa qua:
  - `highlight(r.n, input.value.trim())`

Đánh giá:

- Nếu `highlight()` được sửa lại, flow này vẫn là vùng cần audit XSS kỹ hơn.
- Trong batch cũ, dự án đã nhiều lần cố tránh `innerHTML route-scoped` với user-facing input.
- Ở đây đây là shared component, blast radius rộng hơn các route đơn lẻ.

Mức độ:

- `P1 XSS/regression risk`

Ghi chú:

- Chưa kết luận exploit thật sự xảy ra vì payload hiện lấy từ registry nội bộ.
- Nhưng pattern hiện tại không còn “an toàn theo mặc định”.

### F3. `tim-kiem.astro` có dấu hiệu logic bị chèn trùng hoặc lệch vị trí

File:

- `src/pages/tim-kiem.astro`

Quan sát:

- diff trước đó cho thấy một khối logic rất lớn được chèn vào giữa file
- ngay trong diff có đoạn lẫn dòng:
  - `$count.textContent = total + ' kết quả' ...`
  - rồi tiếp tục chảy vào nhánh keyboard navigation / render / fallback
- file hiện cũng chứa:
  - lazy load search index
  - recent searches qua localStorage
  - fuzzy fallback
  - suggestion dropdown
  - keyboard navigation
  - chip filters

Đánh giá:

- Về mặt sản phẩm đây là một rewrite đáng kể, không phải polish nhẹ.
- Về mặt kỹ thuật, cần tách audit:
  - cấu trúc script còn sạch không
  - có code unreachable/trùng handler không
  - có side effect race condition khi lazy-load + renderSuggestions + render không

Mức độ:

- `P1 runtime/regression risk`

### F4. `cong-cu/index.astro` không chỉ đổi visual, còn có dấu hiệu CSS mismatch

File:

- `src/pages/cong-cu/index.astro`

Quan sát:

- card tool đang được đổi theo hướng glassmorphism
- phần CSS mobile cuối file có các selector:
  - `.tool-grid`
  - `.tool-card`
  - `.section-label`
- trong cùng file phần chính lại đang dùng:
  - `.cc-grid`
  - `.cc-card`
  - `.cc-group-head`

Đánh giá:

- Đây là tín hiệu CSS còn sót từ cấu trúc cũ hoặc copy chưa dọn xong.
- Có thể không làm crash, nhưng cho thấy batch UI chưa được gọt sạch.
- Đồng thời `git diff --check` cũng đang báo trailing whitespace tại file này.

Mức độ:

- `P2 quality / maintainability risk`

## 5. Rủi ro theo nhóm

### Runtime

- `AutoSearch.astro` có khả năng parse/runtime fail vì đoạn regex/string bị hỏng
- `tim-kiem.astro` có rủi ro handler trùng hoặc luồng render bị đè

### Security / DOM

- `AutoSearch.astro` hiện dùng `innerHTML` với chuỗi đã qua `highlight()`
- đây là vùng cần fuzz/XSS audit riêng sau khi sửa blocker cú pháp

### UX / regression

- search behavior đã thay đổi ở nhiều tầng cùng lúc:
  - normalize
  - score
  - fuzzy
  - suggestions
  - recent searches
  - highlight
  - lazy load
- nên rất dễ phát sinh regression dù build có thể vẫn pass

### Scope drift

- `cong-cu/index.astro` bị kéo vào cùng batch shared UX
- điều này làm khó phân biệt giữa:
  - tool-status copy ổn định
  - visual redesign đang dở

## 6. Điều đã xác nhận

- Batch shared search/UX là một scope riêng đủ lớn để audit độc lập
- Đây không phải thay style đơn giản
- Có blocker thật sự cần ưu tiên trước:
  - `AutoSearch.astro`

## 7. Điều chưa làm trong vòng này

- Chưa sửa code
- Chưa chạy build chỉ cho shared search batch
- Chưa fuzz trực tiếp browser sau khi isolate component
- Chưa xác nhận `tim-kiem.astro` có parse/runtime fail hay chỉ là diff lộn xộn
- Chưa tách riêng patch fix khỏi batch lớn

## 8. Đề xuất bước tiếp theo

Tên vòng khuyên dùng:

- `shared-search-ux-safety-patch-v1`

Mục tiêu:

1. sửa sạch blocker ở `src/components/AutoSearch.astro`
2. rà cấu trúc script `src/pages/tim-kiem.astro`
3. dọn CSS mismatch rõ ràng ở `src/pages/cong-cu/index.astro`
4. chưa đụng content batch, PWA batch, hay tool logic riêng
5. sau đó mới chạy QA hẹp cho:
   - `/`
   - `/tim-kiem/`
   - `/cong-cu/`
   - autocomplete/search related flows

## 9. Kết luận

- Shared search/UX hiện là cụm rủi ro cao nhất trong worktree.
- Có blocker cụ thể, không còn ở mức “cảm giác batch hơi bừa”.
- Vì vậy nếu tiếp tục hoàn thiện an toàn, ưu tiên đúng là:
  - sửa shared search/UX trước
  - chưa quay lại deploy
  - chưa trộn nó với content expansion hoặc app-shell/PWA
