# Tool chi-so-gi QA polish v1

## 1. Moc dau vao

- Status v14 commit: `2c32511 docs: update tool status with salt lookup safety shell v1`.
- Safety patch commit: `4dcb423 fix: safety gate clinical high risk tool`.
- Tag created: `local-chi-so-gi-safety-patch-v1 -> 4dcb423`.
- Branch: `tool-chi-so-gi-qa-polish-v1`.
- Chua deploy.

## 2. File da doc

- `src/pages/cong-cu/chi-so-gi.astro`
- `src/pages/cong-cu/index.astro`
- `reports/tool-chi-so-gi-safety-patch-v1.md`
- `reports/tools-core-status-v14.md`
- `reports/clinical-high-risk-triage-v1.md`
- `package.json`

## 3. File da sua

- Tao moi report: `reports/tool-chi-so-gi-qa-polish-v1.md`.

Khong sua route hoac `/cong-cu/` trong vong QA polish vi scope, wording va mobile layout da dat muc an toan sau safety patch.

## 4. Route scope sau QA polish

Route `/cong-cu/chi-so-gi/` tiep tuc la:

- `educational GI orientation + safety shell only`.

Khong phai:

- Bang lookup GI/GL.
- Calculator GI/GL.
- Search/filter thuc pham.
- Cong cu chon mon cho nguoi dai thao duong.
- Cong cu danh gia thuc pham an toan/khong an toan cho benh nen.
- Cong cu dua target duong huyet, HbA1c, carb hoac GI ca nhan.
- Cong cu huong dan chinh thuoc, insulin hoac bua an.

## 5. Browser/mobile QA

Preview:

- Chay `npm run build`: pass.
- Chay `npm run preview -- --port 4372`.
- Preview URL: `http://localhost:4372`.

Browser method:

- Thu dung in-app Browser; viec tao tab moi bi timeout attach mot lan.
- Dung tab in-app Browser hien co de kiem DOM, console va viewport.
- HTTP status duoc xac nhan bang PowerShell `Invoke-WebRequest` voi `MaximumRedirection 0`.

Ket qua `/cong-cu/chi-so-gi/`:

- HTTP status: `200`.
- Redirect: khong co `Location` header, URL giu `/cong-cu/chi-so-gi/`.
- Meta refresh: khong co.
- H1: `Chỉ số GI thực phẩm Việt`.
- Console app: sach, khong co warning/error trong Browser check.
- Desktop viewport `1280 x 900`: khong overflow ngang.
- Mobile viewport `390 x 844`: khong overflow ngang.
- Safety shell hien thi ro: co `Khi nào cần hỏi chuyên môn?` va noi dung `GI không đủ`.

Ket qua `/cong-cu/`:

- HTTP status: `200`.
- Redirect: khong co `Location` header.
- Meta refresh: khong co.
- Console app: sach.
- Mobile viewport `390 x 844`: khong overflow ngang trong Browser check.
- Card `Chỉ số GI thực phẩm Việt` co mo ta dung:
  - `Tìm hiểu ý nghĩa chỉ số GI ở mức tham khảo và các tình huống cần hỏi bác sĩ hoặc chuyên gia.`
- Card rieng cua `chi-so-gi` chua gan badge `Đã kiểm v1`.

## 6. UI safety

Trong `main.gi-page` cua route:

- Input/search/filter: khong con.
- Table: khong con.
- Route-scoped script: khong con.
- Canvas/chart: khong co.
- `innerHTML`: khong xuat hien trong rendered HTML cua route.
- Bang GI/GL: khong con.
- Nhan `GI thấp`, `GI trung bình`, `GI cao`: khong con.
- Mau xanh/vang/do de phan loai suc khoe ca nhan: khong con.

Do route khong con input rieng, test chuoi `<script>alert(1)</script>` khong ap dung cho route. Layout chung co the co input search site-level, nhung khong phai input cua route `chi-so-gi` va khong sinh output clinical cua route nay.

## 7. Clinical safety

Khong con:

- Target duong huyet ca nhan.
- Target HbA1c.
- Target carb ca nhan.
- Target GI ca nhan.
- Ket luan mon an an toan/khong an toan cho tieu duong hoac dai thao duong.
- Ket luan thuc pham phu hop/khong phu hop cho benh nen.
- Loi khuyen nguoi tieu duong nen an/khong nen an.
- Loi khuyen tu chinh insulin, sulfonylurea, thuoc ha duong huyet, lieu thuoc hoac bua an.
- Nhan `tot/xau/cao/vua/thap/trung binh` nhu ket luan suc khoe ca nhan.

Route chi con noi dung giao duc:

- GI la khai niem tham khao ve toc do lam tang duong huyet cua thuc pham chua carbohydrate.
- GI khong du de quyet dinh mot mon phu hop cho tung nguoi hay tung benh nen.
- Khau phan, carbohydrate thuc te, cach che bien, mon an di kem, van dong va thuoc dang dung deu quan trong.
- Nhom co dai thao duong, tien dai thao duong, thai ky, tre em, nguoi cao tuoi, benh than, benh gan, benh tim mach, dang dung insulin/thuoc ha duong huyet hoac can ca the hoa duoc nhac hoi bac si/chuyen gia dinh duong.

## 8. Wording cam

Source/browser check khong thay user-facing cac cum cam duoi nghia tu van ca nhan hoac ket luan dieu tri:

- `an toàn cho tiểu đường`
- `an toàn cho đái tháo đường`
- `không an toàn cho tiểu đường`
- `không an toàn cho đái tháo đường`
- `phù hợp người tiểu đường`
- `phù hợp người đái tháo đường`
- `người tiểu đường nên ăn`
- `người tiểu đường không nên ăn`
- `người đái tháo đường nên ăn`
- `người đái tháo đường không nên ăn`
- `ăn thoải mái`
- `ăn không sao`
- `không cần hỏi bác sĩ`
- `đạt mục tiêu đường huyết`
- `không đạt mục tiêu đường huyết`
- `mục tiêu đường huyết cá nhân`
- `mục tiêu HbA1c`
- `mục tiêu carb cá nhân`
- `mục tiêu GI cá nhân`
- `chỉ số này tốt cho bạn`
- `chỉ số này xấu cho bạn`
- `thấp là an toàn`
- `cao là nguy hiểm`
- `bắt buộc tránh`
- `tự chỉnh insulin`
- `tự tăng insulin`
- `tự giảm insulin`
- `tự chỉnh thuốc`
- `tự ngừng thuốc`
- `đổi thuốc`
- `tăng liều`
- `giảm liều`
- `điều trị tiểu đường`
- `điều trị đái tháo đường`
- `chỉ định`
- `kê đơn`

Tu con lai va phan loai:

- `đái tháo đường`, `đường huyết`, `insulin`, `sulfonylurea`, `thuốc` chi xuat hien trong safety shell de chi nhom can hoi chuyen mon.
- `cao` chi xuat hien trong cum `người cao tuổi`, khong phai nhan danh gia GI hoac ket luan suc khoe.
- `phù hợp` va `không phù hợp` xuat hien trong cau phu dinh: `Không dùng trang này để tự kết luận... phù hợp hay không phù hợp...`.
- `mục tiêu` xuat hien trong `mục tiêu chăm sóc cá nhân`, link `Mục tiêu dinh dưỡng`, va cau `V1 không đặt mốc GI, carb hoặc chỉ số theo dõi cá nhân`; khong phai target duong huyet/carb/GI ca nhan.
- `GL` xuat hien trong ten nhom/link stable `Tính GL từ bữa ăn`, khong phai bang lookup GI/GL cua route nay.
- `innerHTML` khong con trong route.

## 9. `/cong-cu/` card

Card `Chỉ số GI thực phẩm Việt`:

- Mo ta hien tai: `Tìm hiểu ý nghĩa chỉ số GI ở mức tham khảo và các tình huống cần hỏi bác sĩ hoặc chuyên gia.`
- Badge `Đã kiểm v1`: chua gan.

Card khong goi route la:

- Calculator.
- Cong cu chon mon cho nguoi dai thao duong.
- Cong cu danh gia an toan/khong an toan cho benh nen.
- Cong cu xac dinh target duong huyet/HbA1c/carb/GI ca nhan.
- Cong cu huong dan chinh thuoc hoac insulin.

## 10. Khong sua ngoai scope

Khong sua:

- Engine.
- Du lieu.
- Cong thuc.
- Route stable ngoai scope.
- Cac tool khac.
- `dist`.

Khong deploy.
Khong cap nhat stable/status trong vong nay.

## 11. QA cuoi

Ket qua QA cuoi:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: chi con report intended truoc commit.

Neu Git Windows co canh bao LF/CRLF khi thao tac, phan loai la canh bao moi truong neu `git diff --check` khong fail.

## 12. Worktree

Worktree can sach sau commit QA polish.

## 13. Ket luan

`/cong-cu/chi-so-gi/` du dieu kien sang vong:

- `tool-chi-so-gi-final-review-v1`

Chua stable.
Chua cap nhat status.
Chua deploy.
