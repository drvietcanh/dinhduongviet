## 1. Moc dau vao

- Status v15 commit: `50b0295 docs: update tool status with glycemic index safety shell v1`.
- Branch tong ket: `post-p0-clinical-high-risk-complete-v1`.
- Chua deploy.

## 2. Tom tat trang thai

- `stable_v1`: `18`
- `needs_spec`: `5`
- `needs_qa_polish`: `13`
- `stub_or_draft`: `2`
- `clinical_high_risk`: `0`
- total: `38`

Ket qua doi chieu:

- Bang counts trong `reports/tools-core-status-v15.md` khop voi row-level status table.
- Khong con tool `clinical_high_risk` P0 chua xu ly theo status hien tai.

## 3. Ket luan tong quat

- Chuoi P0 `clinical_high_risk` da hoan tat.
- Hai route P0 cuoi van giu scope an toan da duoc chot o cac vong truoc.

## 4. Danh sach 9 tool clinical high risk da xu ly

1. `tuong-tac-thuoc-thuc-pham`
2. `tuong-tac-thuoc`
3. `nhu-cau-dinh-duong-tre-em`
4. `dinh-duong-thai-ky`
5. `theo-doi-duong-huyet`
6. `theo-doi-suc-khoe`
7. `dia-an-lanh-manh`
8. `nuoc-muoi-mon-an`
9. `chi-so-gi`

## 5. Scope an toan cua hai tool cuoi

- `nuoc-muoi-mon-an`: `educational salt lookup + safety shell only`
  - Route: `/cong-cu/nuoc-muoi-mon-an/`
  - Chi tra cuu muoi uoc tinh trong mon an va nhac cac tinh huong can hoi bac si hoac chuyen gia.
  - Khong phai cong cu ke che do han che muoi ca nhan.
  - Khong danh gia mon an an toan/khong an toan cho benh nen.
  - Khong dua target muoi/natri/kali/phospho/nuoc ca nhan.
  - Khong phan loai cao/vua/thap nhu ket luan suc khoe.
  - Khong huong dan chinh thuoc, loi tieu, hoac dich.

- `chi-so-gi`: `educational GI orientation + safety shell only`
  - Route: `/cong-cu/chi-so-gi/`
  - Chi giai thich GI o muc giao duc va nhac cac nhom can hoi bac si/chuyen gia dinh duong.
  - Khong phai cong cu chon mon cho nguoi dai thao duong.
  - Khong phai calculator GI/GL ca nhan.
  - Khong co lookup/search/filter GI/GL user-facing.
  - Khong co bang GI/GL hardcode user-facing.
  - Khong danh gia thuc pham an toan/khong an toan cho benh nen.
  - Khong dua target duong huyet/HbA1c/carb/GI ca nhan.
  - Khong phan loai thap/trung binh/cao nhu ket luan suc khoe.
  - Khong dung mau phan loai suc khoe ca nhan.
  - Khong huong dan chinh thuoc/insulin/bua an.

## 6. Browser preview

Preview local:

- Chay `npm run preview -- --port 4376`.

Route da kiem:

- `/cong-cu/`
- `/cong-cu/nuoc-muoi-mon-an/`
- `/cong-cu/chi-so-gi/`

Ket qua:

- Ca 3 route tra `HTTP 200`.
- Khong ghi nhan redirect.
- Khong co `meta refresh`.
- Console browser sach, khong co error/warning app.
- Desktop khong overflow ngang.
- Mobile `390 x 844` class khong overflow ngang. Trong in-app Browser, `clientWidth` do duoc la `375`, nhung viewport override duoc dat o muc `390 x 844` va khong co overflow ngang tren breakpoint nay.

Kiem nhanh `/cong-cu/`:

- Card `Muối trong món ăn` hien dung mo ta an toan.
- Card `Chỉ số GI thực phẩm Việt` hien dung mo ta an toan.
- Badge `Đã kiểm v1` da hien tren cac tool `stable_v1`, bao gom hai tool P0 cuoi.

Kiem nhanh `/cong-cu/nuoc-muoi-mon-an/`:

- Van la lookup `muoi uoc tinh` + safety shell.
- Khong co bang disease target.
- Khong co target muoi/natri/kali/phospho/nuoc ca nhan.
- Khong co nhan cao/vua/thap nhu ket luan suc khoe.
- Khong co huong dan chinh thuoc, loi tieu, hoac dich.

Kiem nhanh `/cong-cu/chi-so-gi/`:

- Van la `educational GI orientation + safety shell only`.
- Khong co input/search/filter/table route-scoped.
- Khong co route-scoped script hoac `innerHTML`.
- Khong co bang GI/GL.
- Khong co nhan GI thap/trung binh/cao.
- Khong co target ca nhan hoac wording dieu tri.

## 7. QA cuoi

Da chay:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

Luu y:

- Lan `npm run build` dau tien gap `EPIPE` do output pipe tren Windows, khong phai loi app/build logic.
- Da rerun build voi redirect log va build pass.

## 8. Khong sua ngoai scope

Trong vong tong ket nay:

- Khong sua engine.
- Khong sua du lieu.
- Khong sua cong thuc.
- Khong sua `dist`.
- Khong sua route ngoai scope, ngoai viec tao report tong ket.

## 9. De xuat nhom viec ke tiep

- Uu tien 1: xu ly nhom `needs_qa_polish` neu cac tool da co nen on nhung can browser QA, wording, va edge-case polish truoc khi xet stable.
- Uu tien 2: xu ly nhom `needs_spec` neu can source-lock/spec truoc khi tiep tuc implement hoac promote.
- Uu tien 3: xu ly nhom `stub_or_draft` sau cung, hoac chi khi can hoan thien route trong.

Trong vong nay khong chon mot tool cu the tiep theo, vi chua co mot dot triage moi cho cac nhom sau P0.

## 10. Ket luan

- San sang buoc sang vong triage nhom tiep theo sau khi da dong chuoi P0 `clinical_high_risk`.
- Repo hien khong con tool `clinical_high_risk` chua xu ly theo status v15.
- Chua deploy.
