## 1. Moc dau vao

- Triage commit: `aa06039 docs: triage tools needing QA polish`
- QA polish commit: `2d68185 test: add meal planning page QA`
- Branch final review: `tool-ke-hoach-bua-an-final-review-v1`
- Chua deploy

## 2. File da doc

- `src/pages/cong-cu/ke-hoach-bua-an.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-ke-hoach-bua-an-qa-polish-v1.md`
- `reports/needs-qa-polish-triage-v1.md`
- `reports/tools-core-status-v15.md`
- `package.json`

## 3. File da sua neu co

- `src/pages/cong-cu/ke-hoach-bua-an.astro`
- Tao moi `reports/tool-ke-hoach-bua-an-final-review-v1.md`

Khong sua `src/pages/cong-cu/index.astro` trong vong final review nay.

## 4. Route scope sau final review

- `safe meal planning orientation + safety shell only`

Route `/cong-cu/ke-hoach-bua-an/` duoc giu o pham vi:

- khung bua an tham khao
- uoc tinh nang luong va macro o muc tham khao
- safety shell cho benh nen, thuoc, thai ky, tre em, nguoi cao tuoi va cac tinh huong can hoi chuyen mon

Route khong duoc xem la:

- cong cu ke thuc don dieu tri ca nhan
- cong cu xac dinh thuc don phu hop/an toan cho benh nen
- cong cu dua chi tieu dieu tri theo benh
- cong cu thay bac si hoac chuyen gia dinh duong

## 5. Browser/mobile QA

### Cach test

- Chay `npm run build`
- Chay `npm run preview`
- Preview process tu dong nhay sang `http://127.0.0.1:4378/` vi port `4377` dang duoc dung boi preview cu
- Kiem route:
  - `/cong-cu/`
  - `/cong-cu/ke-hoach-bua-an/`
- Browser QA bang in-app Browser
- Mobile check bang viewport capability `390 x 844`

### Ket qua

- `/cong-cu/`: HTTP `200`
- `/cong-cu/ke-hoach-bua-an/`: HTTP `200`
- Khong redirect bat thuong
- Khong co meta refresh
- Console browser sach, khong co app error/warning
- Desktop khong overflow ngang
- Mobile `390 x 844` khong overflow ngang
- Form dung duoc tren mobile
- Output sau submit khong overflow
- Safety shell hien ro truoc va sau submit

## 6. UI safety

- Con form: co
- Con disease filter: co
- Disease filter hien la `Trường hợp cần hỏi chuyên môn`
- Disease filter chi dung de hien safety note, khong ca the hoa output dieu tri
- Con kcal/macro uoc tinh: co
- Con BMR/TDEE user-facing: khong
- Con output ca nhan: co o muc khung tham khao theo thong tin nhap, khong phai output dieu tri theo benh
- Con `innerHTML`: khong
- Con mau phan loai suc khoe ca nhan: khong
- Con nhan `dat/khong dat muc tieu`: khong

## 7. Clinical safety

- Con target benh nen: khong
- Con ket luan `phu hop` / `an toan cho benh`: khong
- Con target natri/kali/phospho/carb/protein ca nhan theo benh: khong
- Con huong dan chinh thuoc/insulin/loi tieu/bua an: khong
- Con disease-personalized meal plan: khong

## 8. XSS / render

Da thu:

- submit binh thuong tren form
- query string:
  - `?age=<script>alert(1)</script>&dis=<script>alert(1)</script>`

Ket qua:

- khong tao script tag moi tren UI
- khong mo JS dialog
- khong render literal `<script>alert(1)</script>` cho nguoi dung
- render output bang DOM-safe API:
  - `createElement`
  - `textContent`
  - `appendChild`
  - `replaceChildren`

## 9. Test tinh huong toi thieu

Da kiem:

1. Nguoi truong thanh khoe manh, khong chon truong hop can hoi chuyen mon
2. Chon dai thao duong / roi loan duong huyet
3. Chon tang huyet ap
4. Chon benh than man
5. Chon gout
6. Chon an chay de kiem preference-style filter

Ket qua:

- deu hien `Tổng kết tham khảo`
- neu chon nhom can hoi chuyen mon thi chi hien safety note tuong ung
- khong co ket luan `phu hop/an toan`
- khong co target dieu tri theo benh
- khong co huong dan chinh thuoc/insulin/loi tieu

## 10. Wording cam

### Ket qua grep/source/browser

- Grep cac cum user-facing cam trong route va index khong tra ve ket qua match user-facing nguy hiem
- Sau patch final review khong con:
  - `phù hợp cho người ...`
  - `an toàn cho ...`
  - `mục tiêu kcal điều trị`
  - `đạt mục tiêu`
  - `không đạt mục tiêu`
  - `tự chỉnh thuốc`
  - `tự chỉnh insulin`
  - `tự chỉnh lợi tiểu`
  - `đổi thuốc`
  - `chỉ định`
  - `kê đơn`
  - `innerHTML`

### Tu con lai nhung chap nhan duoc

- `đái tháo đường`
- `tăng huyết áp`
- `bệnh thận mạn`
- `gout`
- `insulin`
- `thuốc`
- `lợi tiểu`
- `kcal`
- `đạm`
- `carb`

Nhung tu nay chi con trong:

- safety shell
- nhan nhom `cần hỏi chuyên môn`
- dong `ước tính tham khảo`

Khong duoc dung de dua huong dan dieu tri ca nhan.

`BMR` chi con trong comment/code noi bo, khong con user-facing.

## 11. `/cong-cu/` card

- Card `Kế hoạch bữa ăn` hien dang mo ta:
  - `Lập khung bữa ăn tham khảo và nhắc các trường hợp cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chua gan

## 12. Co sua engine/du lieu/cong thuc/route ngoai scope/dist khong

- Khong sua engine chung
- Khong sua du lieu
- Khong sua cong thuc chung
- Khong sua route stable ngoai scope
- Khong sua `dist` thu cong

Trong vong final review chi co polish nhe cau chu trong route chinh.

## 13. QA cuoi

Da chay:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Ket qua:

- `npm run build`: pass
- `npm run qa`: pass
- `npm run qa:food-data`: pass
- `npm run qa:data-consistency`: pass
- `npm run test:tools`: pass

QA cuoi: `pass`

## 14. git diff --check

- `pass`
- Co canh bao LF/CRLF Git Windows cho `src/pages/cong-cu/ke-hoach-bua-an.astro`, nhung khong lam fail `git diff --check`

## 15. Worktree cuoi

- Se sach sau khi stage/commit cac file trong vong nay

## 16. Ket luan

- Du dieu kien sang `tools-core-status-v16` neu QA cuoi pass
- Stable scope de xuat:
  - `safe meal planning orientation + safety shell only`
- Chua stable/status update trong vong nay
- Chua deploy
