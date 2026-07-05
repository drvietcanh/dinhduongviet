# Tool Danh Sach Di Cho Final Review v1

## 1. Final review status

- Result: `pass`
- Scope stable de xuat: `neutral grocery list helper + safety shell only`
- Route: `/cong-cu/danh-sach-di-cho/`
- QA polish commit: `e845c78 test: add grocery list page QA`
- Chua deploy.

## 2. File da doc

- `src/pages/cong-cu/danh-sach-di-cho.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-danh-sach-di-cho-qa-polish-v1.md`
- `reports/tools-core-status-v27.md`

## 3. File da sua

- `src/pages/cong-cu/index.astro`
- `reports/tool-danh-sach-di-cho-final-review-v1.md`

## 4. Chuc nang con lai

- Con form/search tim mon.
- Con chon mon bang checkbox.
- Con tao danh sach mua theo nhom.
- Con checkbox tick/untick danh dau da mua.
- Con nut `Xoa het`.
- Khong co localStorage.
- Khong co export/copy/print/share.
- Khong co free-text.
- Khong co chart/canvas.

## 5. Source audit final

- Form/search hoat dong.
- Chon mon -> tao danh sach mua hoat dong.
- Tick/untick trong danh sach mua hoat dong.
- `Xoa het` dua route ve trang thai trung tinh.
- Khong con `innerHTML` route-scoped.
- Render bang DOM-safe API:
  - `createElement`
  - `textContent`
  - `append`
  - `appendChild`
  - `replaceChildren`
- Query nguoi dung chi hien thi nhu text, khong phai HTML thô.
- Search co dau/khong dau hoat dong on dinh voi:
  - `gao`
  - `thịt`
  - `nuoc mam`

## 6. Safety / content

- Tool chi la danh sach nhac viec di cho o muc tham khao.
- Khong phai cong cu ke thuc don ca nhan.
- Khong phai cong cu tinh khau phan du/thieu/thua.
- Khong phai tu van dinh duong dieu tri.
- Khong ket luan danh sach:
  - `du chat`
  - `can doi`
  - `dat muc tieu`
- Khong dung wording:
  - `nen mua`
  - `khong nen mua`
  - `bat buoc mua`
  theo nghia khuyen nghi dieu tri.
- Neu co nhom thuc pham, chi de sap xep danh sach.
- Tong hop chi la so nguyen lieu tham khao cho so mon da chon, khong phai diem suc khoe.
- Safety shell van ro:
  - kiem tra di ung
  - han dung
  - nhan san pham
  - bao quan
  - ve sinh thuc pham
  - hoi bac si/chuyen gia dinh duong neu can che do an dieu tri

## 7. Clinical safety

- Khong co filter benh nen.
- Khong co target benh nen.
- Khong co target `kcal/protein/carb/natri/nuoc`.
- Khong ket luan phu hop/an toan cho:
  - tieu duong
  - tang huyet ap
  - benh than
  - gout
  - suy tim
  - thai ky
  - tre em
- Khong huong dan chinh thuoc / insulin / loi tieu / bua an.

## 8. Logic / UI QA

- Tao danh sach mau hoat dong.
- Tick/untick hoat dong.
- `Xoa het` hoat dong.
- Empty state ro khi:
  - chua chon mon
  - khong co ket qua tim kiem
- Khong crash khi thao tac nhanh.
- So luong / khoi luong neu co chi hien thi o muc tham khao.
- Khong ket luan danh sach la du/can doi/phu hop.

## 9. XSS / fuzz test

Da thu:

- `<script>alert(1)</script>`
- `<b>gao</b>`
- `\"><img src=x onerror=alert(1)>`
- `=HYPERLINK(\"http://x\",\"x\")`
- `+SUM(1,1)`
- `@cmd`
- `-1+2`

Ket qua:

- Khong tao dialog.
- Khong render HTML.
- Khong pha layout.
- Khong gay loi console.
- Khong lam hong form/search/list/checkbox/reset.

## 10. Browser / mobile QA

- Preview port: `4321`
- `/cong-cu/`: `200`
- `/cong-cu/danh-sach-di-cho/`: `200`
- Khong redirect.
- Khong meta refresh.
- Console sach trong fresh reload/session.
- Desktop khong overflow ngang.
- Mobile `390 x 844` khong overflow ngang.

Desktop QA:

- `gao` -> co ket qua mon co `Gạo`
- `thịt` -> co nhieu ket qua hop ly
- `nuoc mam` -> co `Đậu hũ chiên nước mắm`
- chon 2 mon -> danh sach mua hien dung
- tick 1 item -> line-through hoat dong
- `Xoa het` -> quay ve empty state

Mobile QA:

- `gao` -> co ket qua
- `nuoc mam` -> co ket qua
- chon 1 mon -> danh sach mua hien summary va item dung
- query khong co ket qua -> empty state ro

## 11. Card /cong-cu/

- Mo ta giu nguyen:
  - `Tạo danh sách đi chợ tham khảo để nhắc việc mua thực phẩm, không dùng để kết luận khẩu phần đủ chất hay phù hợp cho bệnh.`
- Badge:
  - `Đã kiểm v1`: da gan trong final review pass

## 12. Khong sua

- Khong sua engine.
- Khong sua du lieu goc hang loat.
- Khong sua cong thuc chung.
- Khong sua `dist` thu cong.
- Khong sua route ngoai scope.

## 13. QA command

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass
- `git diff --check`: pass
- `git status --short`: se xac nhan lai sau commit

## 14. LF / CRLF

- Git Windows canh bao `LF will be replaced by CRLF` khi stage file.
- Khong co loi noi dung tu `git diff --check`.

## 15. Ket luan

- Final review `pass`.
- Du dieu kien sang `tools-core-status-v28`.
- Stable scope de xuat: `neutral grocery list helper + safety shell only`.
- Chua stable/status update trong vong nay.
- Chua deploy.
