## 1. Moc dau vao

- Triage commit: `aa06039 docs: triage tools needing QA polish`.
- Status v15 commit: `50b0295 docs: update tool status with glycemic index safety shell v1`.
- Branch: `tool-ke-hoach-bua-an-qa-polish-v1`.
- Chua deploy.

## 2. File da doc

- `src/pages/cong-cu/ke-hoach-bua-an.astro`
- `src/pages/cong-cu/index.astro`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tools-core-status-v15.md`
- `reports/post-p0-clinical-high-risk-complete-v1.md`
- `package.json`

## 3. Hien trang truoc polish

Route `/cong-cu/ke-hoach-bua-an/` truoc polish co:

- Form ho so ca nhan.
- Input tuoi, can nang, chieu cao.
- Select gioi tinh, muc van dong, muc tieu.
- Disease filter / che do an gom: dai thao duong, tang huyet ap, roi loan mo mau, gout, CKD, an chay.
- Logic BMR/TDEE-like trong code va hien thi user-facing.
- Tinh `calTarget`, `proteinG`, `fatG`, `carbG`.
- Output thuc don/gioi y bua an theo du lieu mau.
- Output tong ket kcal/macro.
- Logic filter theo benh nen.
- `innerHTML` cho result area.
- Copy user-facing de bi hieu la ca the hoa suc khoe:
  - `gợi ý món ăn Việt Nam phù hợp`
  - `Phù hợp cho người đái tháo đường`
  - `Phù hợp cho người tăng huyết áp`
  - `Phù hợp cho người gout`
  - disease advice theo huong chi dinh an uong
  - hien thi `BMR`, `TDEE`, `Mục tiêu`

Khong thay:

- `localStorage`
- export / copy function
- chart / canvas

## 4. File da sua

- `src/pages/cong-cu/ke-hoach-bua-an.astro`
- `src/pages/cong-cu/index.astro`
- Tao moi report: `reports/tool-ke-hoach-bua-an-qa-polish-v1.md`

## 5. Scope sau polish

- `safe meal planning orientation + QA polish only`

Route sau polish giu:

- Form tham khao co ban.
- Goi y khung bua an o muc tham khao.
- Uoc tinh nang luong / macro o muc tham khao.

Route sau polish khong nen duoc hieu la:

- Cong cu ke thuc don dieu tri ca nhan.
- Cong cu xac dinh thuc don phu hop cho benh nen.
- Cong cu dua chi tieu dieu tri cho dai thao duong, tang huyet ap, CKD, gout hoac benh nen khac.
- Cong cu thay bac si hoac chuyen gia dinh duong.

## 6. Nhung thu da ha rui ro

- Doi `siteTitle`, `siteDesc`, hero title va sub copy sang huong `tham khao`.
- Doi label `Mục tiêu` thanh `Mục đích tham khảo`.
- Doi label disease filter thanh `Trường hợp cần hỏi chuyên môn`.
- Bo logic disease-personalized output:
  - khong con `desc: "Phù hợp cho người..."`.
  - khong con output badge ket luan phu hop/an toan cho benh nen.
  - khong con CKD-specific macro adjustment.
- Disease filter chi con dung de hien safety note.
- Giu vegetarian filter nhu mot preference-style filter, khong phai disease treatment.
- Bo user-facing `BMR`, `TDEE`, `Mục tiêu: ... kcal/ngày`.
- Chuyen summary thanh `Ước tính tham khảo`.
- Them safety shell ro hon sau khi generate plan:
  - `Khi nào cần hỏi chuyên môn?`
  - nhac khong tu doi bua an/khau phan/gio an khi co benh nen/thuoc.
- Bo `innerHTML` cho render output.
- Chuyen render sang DOM-safe `createElement(...)`, `textContent`, `appendChild(...)`, `replaceChildren(...)`.

## 7. UI safety

Sau polish:

- Con form: co.
- Con route-scoped input: co, nhung chi la `number` input.
- Con select: co.
- Con disease filter: co, nhung chi de hien safety note, khong ca the hoa output dieu tri.
- Con kcal/macro uoc tinh: co, nhung da doi wording thanh `tham khao`.
- Con output ca nhan: co o muc he thong goi y dua tren thong tin nhap, nhung da bo ket luan dieu tri/benh nen.
- Con route-scoped script: co, phuc vu logic planner.
- Con `innerHTML`: khong.
- Con chart/canvas: khong.
- Con localStorage: khong.

## 8. Clinical safety

Sau polish:

- Con target benh nen: khong.
- Con ket luan `phu hop` / `an toan` cho benh: khong.
- Con target dieu tri `BMR/TDEE/Mục tiêu ...` user-facing: khong.
- Con huong dan chinh thuoc / insulin / loi tieu / bua an: khong.
- Disease filter chi con lam safety note:
  - dai thao duong / roi loan duong huyet
  - tang huyet ap
  - roi loan mo mau
  - gout
  - CKD
  - an chay

## 9. XSS / render

Input da kiem:

- Route khong co free-text input cho noi dung thuc don.
- Route chi con `number` inputs va `select` controls.
- Browser test voi query string:
  - `?age=<script>alert(1)</script>&dis=<script>alert(1)</script>`

Ket qua:

- Khong tao script tag moi trong noi dung user-facing.
- Khong mo JS dialog.
- Khong render literal `<script>alert(1)</script>` tren UI.
- Source route khong con `innerHTML`.
- Render output dung DOM-safe APIs:
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 10. Browser / mobile QA

Preview:

- Chay `npm run build`.
- Chay `npm run preview -- --port 4377`.

Route da kiem:

- `/cong-cu/`
- `/cong-cu/ke-hoach-bua-an/`

Ket qua:

- HTTP status: `200` cho ca hai route.
- Redirect: khong ghi nhan.
- Meta refresh: khong co.
- Console browser: sach, khong co error/warning app.
- Desktop overflow ngang: khong.
- Mobile `390 x 844` class overflow ngang: khong.
  - In-app Browser do `clientWidth` thuc te `375`, `scrollWidth` = `375`, khong overflow tren breakpoint mobile da test.
- Form/input tren mobile: dung duoc.
- Output sau submit: khong overflow.
- Safety shell: hien ro truoc va sau submit.

Ket qua route chinh:

- H1: `🥗 Kế hoạch bữa ăn tham khảo`
- Route-scoped input count: `3`
- Route-scoped select count: `4`
- Route-scoped script count: `1`
- Route-scoped free-text input: `0`

## 11. /cong-cu/ card

- Card `Kế hoạch bữa ăn` da doi mo ta thanh:
  - `Lập khung bữa ăn tham khảo và nhắc các trường hợp cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chua gan.

## 12. Wording cam

Ket qua grep/source/browser:

- Khong con user-facing:
  - `phù hợp cho người...`
  - `an toàn cho...`
  - `đạt mục tiêu`
  - `không đạt mục tiêu`
  - `tự chỉnh thuốc`
  - `tự chỉnh insulin`
  - `tự chỉnh lợi tiểu`
  - `đổi thuốc`
  - `kê đơn`
  - `chỉ định`
- Tu khoa benh nen van con trong safety shell:
  - `đái tháo đường`
  - `tăng huyết áp`
  - `bệnh thận mạn`
  - `insulin`
  - `thuốc`
  - `lợi tiểu`

Nhung tu nay duoc chap nhan vi chi dung de nhac nhom can hoi bac si / chuyen gia, khong phai de dua huong dan dieu tri.

Tu khoa con lai trong code:

- `BMR` chi con trong comment / logic noi bo, khong con user-facing.
- `kcal`, `Đạm`, `Carb`, `Béo` van con user-facing, nhung chi duoi dang `tham khao`.

## 13. Khong sua

- Khong sua engine repo ngoai route nay.
- Khong sua du lieu dinh duong.
- Khong sua cong thuc chung cua tool khac.
- Khong sua route ngoai scope, tru mo ta card `/cong-cu/`.
- Khong sua `dist` thu cong.

## 14. QA cuoi

Da chay:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Neu build tren Windows gap `EPIPE` do output pipe, can rerun va ghi nhan la loi moi truong. Trong vong nay cac lan build rerun thanh cong.

## 15. git diff --check

- Se xac nhan pass o buoc ket vong.

## 16. Worktree cuoi

- Se xac nhan sach sau khi commit neu QA cuoi pass.

## 17. Ket luan

- Du dieu kien sang `tool-ke-hoach-bua-an-final-review-v1` neu QA cuoi pass.
- Chua stable/status update trong vong nay.
- Chua deploy.
