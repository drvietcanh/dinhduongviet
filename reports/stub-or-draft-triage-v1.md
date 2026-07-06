# Stub Or Draft Triage v1

Date: 2026-07-06

Branch: `stub-or-draft-triage-v1`

## 1. Mốc đầu vào

- Checkpoint report: `reports/post-needs-spec-complete-v1.md`
- Status baseline: `reports/tools-core-status-v33.md`
- Commit đầu vào: `33e0971 docs: update tool status with activity energy safety shell v1`
- Checkpoint commit gần nhất: `02ba883 docs: summarize completion of tools needing specs`
- Chưa deploy.
- Worktree đầu vào sạch.

## 2. Counts hiện tại

- `stable_v1`: 36
- `needs_spec`: 0
- `needs_qa_polish`: 0
- `stub_or_draft`: 2
- `clinical_high_risk`: 0
- `total`: 38

## 3. Danh sách chính xác 2 tool `stub_or_draft`

Danh sách này được xác nhận trực tiếp từ nhóm **Công cụ đang hoàn thiện** trong [src/pages/cong-cu/index.astro](D:/openclaw/apps/dinh-duong-viet/src/pages/cong-cu/index.astro):

1. `tinh-macro`
2. `tinh-nang-luong`

Không có tool `stub_or_draft` nào khác được liệt kê ở `/cong-cu/`.

## 4. Bảng audit từng tool

| Slug | Route | Tên hiển thị trên `/cong-cu/` | File route | Hiện trạng | Link từ `/cong-cu/` | Card mô tả | Badge | User input / form / search | localStorage / export / copy / share / print / chart / canvas | Dữ liệu thực phẩm / công thức | Target cá nhân / bệnh nền | innerHTML | Risk chính | Mức ưu tiên |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `tinh-macro` | `/cong-cu/tinh-macro/` | `Tính macro` | Có | Route redirect tạm bằng `meta refresh` sang `/cong-cu/muc-tieu-can-nang` | Có | `Bản nháp, chưa trình bày như công cụ hoàn chỉnh.` | `Bản nháp` | Không có input riêng trên route này | Không có | Không có calculator riêng; chỉ redirect | Không có trực tiếp trên route | Không có | Điều hướng lệch nghĩa, `meta refresh`, route draft nhưng user có thể bị đưa sang tool khác | `P2` |
| `tinh-nang-luong` | `/cong-cu/tinh-nang-luong/` | `Tính năng lượng` | Có | Route redirect tạm bằng `meta refresh` sang `/cong-cu/muc-tieu-can-nang` | Có | `Bản nháp, chưa trình bày như công cụ hoàn chỉnh.` | `Bản nháp` | Không có input riêng trên route này | Không có | Không có calculator riêng; chỉ redirect | Không có trực tiếp trên route | Không có | Điều hướng lệch nghĩa, `meta refresh`, route draft nhưng user có thể bị đưa sang tool khác | `P2` |

## 5. Rủi ro user-facing theo từng tool

### `tinh-macro`

- Card công khai trên `/cong-cu/` nói rõ là bản nháp, nhưng khi vào route lại bị chuyển ngay sang `/cong-cu/muc-tieu-can-nang/`.
- Tên route `tinh-macro` không khớp với tool đích là `muc-tieu-can-nang`, nên người dùng có thể hiểu sai rằng công cụ macro đã tồn tại hoặc macro có nội dung tương đương mục tiêu cân nặng.
- Có `meta refresh` và copy `Đang chuyển hướng...`, nên trải nghiệm hiện tại giống workaround tạm hơn là route draft được khóa scope rõ ràng.

### `tinh-nang-luong`

- Vấn đề tương tự `tinh-macro`: slug và tên card gợi ý một công cụ riêng, nhưng route lại chuyển sang `/cong-cu/muc-tieu-can-nang/`.
- Người dùng có thể nhầm đây là công cụ tính năng lượng đã hoàn thành hoặc nội dung của tool đích là thay thế hợp lệ cho tool draft.
- Vì route vẫn public và có link từ `/cong-cu/`, redirect chéo công cụ tạo cảm giác thiếu nhất quán hơn là "bản nháp an toàn".

## 6. Rủi ro kỹ thuật theo từng tool

### `tinh-macro`

- Route tồn tại, không phải `404`, nên không có rủi ro thiếu file.
- Có `meta refresh`, nghĩa là còn phụ thuộc vào hành vi redirect phía client thay vì một route draft tĩnh rõ ràng.
- Không thấy JS runtime riêng, không có local state, không có data pipeline riêng.
- Rủi ro build hiện tại thấp vì file Astro rất ngắn và pass build.

### `tinh-nang-luong`

- Tương tự `tinh-macro`: không `404`, build risk thấp, runtime logic gần như không có.
- Rủi ro chính là cấu trúc route tạm thời chứ không phải code phức tạp.
- Redirect sang route khác có thể gây khó kiểm thử hoặc gây nhầm khi sau này muốn khôi phục một tool độc lập.

## 7. Rủi ro clinical / data / XSS theo từng tool

### `tinh-macro`

- Clinical risk trực tiếp trên route hiện tại: thấp, vì không có calculator hay wording điều trị riêng.
- Data/unit risk: thấp, vì không có dữ liệu hay công thức trên route hiện tại.
- XSS/DOM risk: thấp, vì không có input, không có `innerHTML`, không render query người dùng.
- Source-lock trước khi làm vòng sau: có thể cần, nếu dự định khôi phục một tool macro thật sự với công thức và mục tiêu cá nhân; không phải blocker cho triage hiện tại.

### `tinh-nang-luong`

- Clinical risk trực tiếp trên route hiện tại: thấp, vì không có calculator hay output riêng.
- Data/unit risk: thấp ở trạng thái hiện tại, nhưng sẽ tăng ngay nếu khôi phục tool tính năng lượng thật sự.
- XSS/DOM risk: thấp, vì không có input, không có `innerHTML`, không có render dữ liệu người dùng.
- Source-lock trước khi làm vòng sau: có thể cần, nếu định xây lại calculator năng lượng hoặc BMR/TDEE; hiện tại chỉ là redirect stub nên chưa là blocker.

## 8. Đề xuất scope an toàn cho từng tool

- `tinh-macro`:
  - `safe draft landing page + safety shell only`
- `tinh-nang-luong`:
  - `safe draft landing page + safety shell only`

Ghi chú:

- Ở trạng thái backlog hiện tại, cả hai chưa nên được coi là calculator.
- Scope an toàn gần nhất là route draft tĩnh, giải thích công cụ đang được hoàn thiện hoặc đã hợp nhất, không redirect chéo gây hiểu nhầm.
- Nếu sau này muốn khôi phục chức năng thật, nên mở lại từ vòng `spec` thay vì nâng trực tiếp từ redirect stub.

## 9. Thứ tự xử lý đề xuất

### 1. `tinh-macro`

Lý do:

- Tên gọi `Tính macro` dễ khiến người dùng kỳ vọng calculator cụ thể hơn `tinh-nang-luong`.
- Nếu giữ redirect sang `muc-tieu-can-nang`, mức lệch nghĩa user-facing khá lớn.
- Có thể xử lý bằng nhịp:
  - `tool-tinh-macro-safety-patch-v1`
  - `tool-tinh-macro-qa-polish-v1`
  - `tool-tinh-macro-final-review-v1`
  - `tools-core-status-vX`

Định hướng:

- Không cần source-lock trước để làm safety patch draft landing.
- Nếu muốn biến thành tool thực sự sau đó, mới cần spec/source-lock riêng.

### 2. `tinh-nang-luong`

Lý do:

- Cũng là redirect stub, nhưng tên gọi hiện có thể được hợp nhất với các tool năng lượng đã ổn định khác dễ hơn.
- Risk vẫn chủ yếu là navigation/UX mismatch, không phải clinical.
- Có thể xử lý bằng nhịp:
  - `tool-tinh-nang-luong-safety-patch-v1`
  - `tool-tinh-nang-luong-qa-polish-v1`
  - `tool-tinh-nang-luong-final-review-v1`
  - `tools-core-status-vX`

Định hướng:

- Nên hạ thành draft landing hoặc orientation-only draft page trước.
- Nếu sau này muốn làm calculator thực sự, cần mở spec/source-lock riêng, không nên dựng lại thẳng từ redirect hiện tại.

## 10. Tool đầu tiên nên chọn cho vòng sau

- Slug: `tinh-macro`
- Route: `/cong-cu/tinh-macro/`
- Branch/vòng đề xuất: `tool-tinh-macro-safety-patch-v1`

Lý do chọn:

- Đây là trường hợp redirect chéo dễ gây hiểu nhầm nhất theo tên công cụ.
- Có thể xử lý nhanh bằng safety patch / draft landing tĩnh, không cần đụng engine hay công thức.
- Giúp đóng khoảng mơ hồ user-facing trước khi quyết định có xây lại tool macro thật hay giữ ở mức draft/orientation.

## 11. Những việc không làm trong vòng này

- Không sửa route/tool.
- Không cập nhật stable/status counts.
- Không đưa tool nào lên stable.
- Không làm `spec`, `QA polish`, hay `final review`.
- Không gắn badge `Đã kiểm v1`.
- Không sửa engine, dữ liệu gốc, công thức chung, `dist`.
- Không xử lý backlog data QA mã `6014`.
- Không chạy browser QA theo từng route vì đây là vòng triage, không phải vòng sửa/chốt route.

## 12. Backlog giữ nguyên

- data QA mã `6014` chưa xử lý:
  - `Dầu oliu`
  - `metadata/name_en` nghi ngờ gây nhiễu search query `thịt`

## 13. QA cuối

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: to confirm after report update
- `git status --short`: to confirm after report update

## 14. Worktree cuối

- Sẽ xác nhận lại sạch sau khi commit report.
