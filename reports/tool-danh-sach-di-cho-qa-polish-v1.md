# Tool Danh Sach Di Cho QA Polish v1

## 1. Moc dau vao

- `tools-core-status-v27` commit: `3d186bf docs: update tool status with eating checklist safety shell v1`
- Branch: `tool-danh-sach-di-cho-qa-polish-v1`
- Route: `/cong-cu/danh-sach-di-cho/`
- Chua deploy.

## 2. File da doc

- `src/pages/cong-cu/danh-sach-di-cho.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tools-core-status-v27.md`
- `reports/tools-core-status-v26.md`
- `reports/needs-qa-polish-triage-v1.md`
- `package.json`

## 3. Hien trang truoc polish

- Co form tim mon an theo client-side search.
- Co checklist chon mon bang checkbox.
- Co panel danh sach mua voi checkbox `da mua / chua mua`.
- Co nut `Xoa het`.
- Co tong hop so nguyen lieu va nhom theo gian hang.
- Khong co localStorage.
- Khong co export/copy/print/share.
- Khong co free-text note.
- Khong co chart/canvas.
- Khong co filter benh nen hay target benh nen.
- Route fetch du lieu tu `/api-recipes.json` va `/api-foods.json`.
- Rui ro chinh truoc polish:
  - lead copy va card `/cong-cu/` qua chung, chua nhan ro gioi han tham khao
  - chua co safety shell ro cho ngữ canh di cho/bao quan/di ung
  - render bang `innerHTML` o empty state, recipe list, shopping list
  - query nguoi dung duoc chen vao output text thong qua `innerHTML`
  - search chua ro accent-insensitive

## 4. File da sua

- `src/pages/cong-cu/danh-sach-di-cho.astro`
- `src/pages/cong-cu/index.astro`

## 5. Scope sau polish

- `neutral grocery list helper + safety shell only`

## 6. Chuc nang con lai

- Con form tim mon an.
- Con danh sach chon mon bang checkbox.
- Con danh sach mua tong hop theo nhom.
- Con checkbox `da mua / chua mua` trong danh sach.
- Con nut `Xoa het`.
- Khong co localStorage.
- Khong co export/copy/print/share.
- Khong co free-text.
- Khong co chart/canvas.

## 7. Safety / content da sua

- Lead copy doi sang huong `danh sach nhac viec di cho` va `so luong o muc tham khao`.
- Them safety shell ngay duoi phan mo dau:
  - chi de gom nguyen lieu va nhac viec di cho
  - khong ket luan danh sach `du chat`, `can doi`, hay `phu hop cho benh nen`
  - nhac kiem tra di ung, han dung, nhan san pham, dieu kien bao quan
  - nhac hoi bac si/chuyen gia dinh duong neu can che do an dieu tri
- Card `/cong-cu/` doi mo ta sang:
  - `Tạo danh sách đi chợ tham khảo để nhắc việc mua thực phẩm, không dùng để kết luận khẩu phần đủ chất hay phù hợp cho bệnh.`

## 8. Clinical safety

- Khong co filter benh nen.
- Khong co target benh nen.
- Khong co target `kcal/protein/carb/natri/nuoc`.
- Khong co wording `nen mua / khong nen mua / bat buoc mua`.
- Khong co ket luan `du chat / can doi / dat muc tieu / thieu / thua`.
- Khong co ket luan `phu hop / an toan` cho:
  - tieu duong
  - tang huyet ap
  - benh than
  - gout
  - suy tim
  - thai ky
  - tre em
- Khong co huong dan chinh thuoc / insulin / loi tieu / bua an.

## 9. Logic / UI QA

- So luong trong danh sach duoc trinh bay la tong hop `tham khao` tu nguyen lieu cua mon da chon.
- Nhom thuc pham chi dung de sap xep danh sach.
- Checkbox trong danh sach chi la trang thai nhac viec `da mua`.
- Tong hop tren panel phai chi hien:
  - `X nguyen lieu tham khao cho Y mon`
  - khong la diem suc khoe
- Empty state ro:
  - chua chon mon nao
  - khong tim thay mon
- Khong crash khi tick/untick nhanh, xoa het, hoac reload route.

## 10. DOM / XSS

- Da bo `innerHTML` route-scoped.
- Render bang DOM-safe API:
  - `createElement`
  - `textContent`
  - `append`
  - `appendChild`
  - `replaceChildren`
- Query / input da thu:
  - `gao`
  - `thịt`
  - `nuoc mam`
  - `<script>alert(1)</script>`
  - `<b>gao</b>`
- Ket qua:
  - khong tao dialog
  - khong render HTML
  - khong co the `script` hay `b` duoc chen vao ket qua
  - khong vo layout
- Khong co copy/export/CSV, nen khong phat sinh formula injection route-scoped trong vong nay.

## 11. Browser / mobile QA

- Preview port: `4321`
- `/cong-cu/`: `200`
- `/cong-cu/danh-sach-di-cho/`: `200`
- Khong redirect.
- Khong meta refresh.
- Console sach trong fresh session.
- Desktop khong overflow ngang.
- Mobile `390 x 844` khong overflow ngang.
- Search co dau/khong dau hoat dong:
  - `gao` tra ve ket qua co `Gạo`
  - `nuoc mam` tra ve `Đậu hũ chiên nước mắm`
- Desktop:
  - tim `thịt`
  - chon 2 mon
  - danh sach mua hien summary va item dung
  - tick `da mua` hoat dong
  - `Xoa het` hoat dong
- Mobile:
  - tim `nuoc mam`
  - chon 1 mon
  - danh sach mua hien dung
  - empty state `khong co mon` ro rang

## 12. Card /cong-cu/

- Mo ta hien tai:
  - `Tạo danh sách đi chợ tham khảo để nhắc việc mua thực phẩm, không dùng để kết luận khẩu phần đủ chất hay phù hợp cho bệnh.`
- Badge `Đã kiểm v1`: chua gan trong vong QA polish.

## 13. Nhung gi khong sua

- Khong sua engine chung.
- Khong sua du lieu goc hang loat.
- Khong sua cong thuc chung.
- Khong sua `dist` thu cong.
- Khong sua route ngoai scope.
- Khong xu ly backlog data QA ma `6014`.

## 14. QA command cuoi

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

## 15. git diff --check

- pass

## 16. Worktree cuoi

- Se xac nhan lai sau commit.

## 17. Ket luan

- Route dat muc `neutral grocery list helper + safety shell only`.
- Du dieu kien sang `tool-danh-sach-di-cho-final-review-v1` neu vong QA cuoi pass.
- Chua stable/status update trong vong nay.
- Chua deploy.
