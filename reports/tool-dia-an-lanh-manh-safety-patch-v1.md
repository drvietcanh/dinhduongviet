# Dia an lanh manh safety patch v1

## Tool P0 duoc chon

Tool duoc chon: `dia-an-lanh-manh`.

Ly do:

- `reports/clinical-high-risk-triage-v1.md` xep `dia-an-lanh-manh` o vi tri P0 so 7.
- Sau khi loai 6 tool da xu ly (`tuong-tac-thuoc-thuc-pham`, `tuong-tac-thuoc`, `nhu-cau-dinh-duong-tre-em`, `dinh-duong-thai-ky`, `theo-doi-duong-huyet`, `theo-doi-suc-khoe`), `dia-an-lanh-manh` la P0 tiep theo dung thu tu.
- Chua chon `nuoc-muoi-mon-an` va `chi-so-gi` vi hai tool nay dung sau `dia-an-lanh-manh` trong thu tu triage.

## File route chinh

- Route: `/cong-cu/dia-an-lanh-manh/`
- File: `src/pages/cong-cu/dia-an-lanh-manh.astro`
- Ten hien thi: `Đĩa ăn lành mạnh`
- Trang thai trong `tools-core-status-v12`: `clinical_high_risk`

## Trang thai truoc patch

Route la route that, khong phai stub.

Truoc patch co:

- Disease selector.
- Inline JavaScript disease table.
- SVG plate visualization voi ty le mac dinh va ty le thay doi theo mot so nhom.
- Disease-specific advice cho:
  - diabetes.
  - hypertension.
  - gout.
  - kidney disease.
  - fatty liver/lipids.
  - GERD.
  - elderly.
  - weight loss.
- Hardcoded target/huong dan nhu:
  - ty le dia 50/25/25, 50-60%, 40/30/30.
  - giam `300-500 kcal/ngay`.
  - gout uong `2-3 lit/ngay`.
  - CKD protein/kali/phospho notes.
  - disease-specific food avoid/replace wording.

Khong co engine rieng trong `src/lib`.

Rui ro chinh:

- Disease-specific plate advice co the bi hieu la khuyen nghi ca nhan cho benh nen.
- CKD, gout, hypertension, diabetes, elderly, weight-loss guidance co the bi hieu nhu chi dinh an uong.
- Khong co source-lock rieng cho disease table.
- Khong co clinical gate cho CKD/loc mau, suy tim/han che dich, thai ky, tre em, nguoi cao tuoi yeu, thuoc phuc tap.

## Da vo hieu hoa output nguy hiem nhu the nao

Da thay route cu bang `educational orientation only / safety shell`.

Da loai bo:

- disease selector.
- inline JS disease table.
- SVG plate target theo benh.
- disease-specific plate proportions.
- disease-specific food lists/avoid-replace tips.
- kcal/macro/water/sodium/potassium/phosphorus target ca nhan.
- gout water target.
- weight-loss kcal deficit.
- CKD protein/kali/phospho instructions.
- output ca nhan cho benh nen.

## UI sau patch hien thi gi

UI sau patch:

- H1: `Đĩa ăn lành mạnh`.
- Lead noi ro day la cong cu dinh huong va chuan bi cau hoi khi can tu van ca the.
- Pham vi v1 noi ro trang khong dua ty le dia, khau phan, kcal, macro, nuoc, natri, kali hoac phospho ca nhan cho tung benh nen.
- Hai card giai thich:
  - cach nhin bua an o muc tong quat.
  - khong phai don ca nhan.
- Danh sach tinh huong can hoi chuyen gia:
  - diabetes, benh than, loc mau, suy tim, xo gan/benh gan tien trien.
  - hypertension, gout, lipid/cardiovascular disease, long-term medicines.
  - pregnancy/lactation, children, frailty/elderly, rapid weight loss, malnutrition.
  - insulin, glucose-lowering medicine, diuretics, blood-pressure medicine, anticoagulants.
  - user wants diet changes for symptoms, labs, or chronic disease.
- Checklist thong tin nen mang theo khi di tu van.
- Link den cac cong cu da kiem v1 lien quan:
  - `khau-phan-viet-clinical`.
  - `muc-tieu-dinh-duong`.
  - `nuoc-uong`.

## Wording guard

Khong con output ca nhan hoac wording cam dang ket luan ca nhan:

- khong co `an toàn cho bệnh`.
- khong co `không cần hỏi bác sĩ`.
- khong co `tự ngừng thuốc`, `ngưng thuốc`, `tự chỉnh liều`, `giảm liều`, `tăng liều`.
- khong co `kê đơn`, `chỉ định`.
- khong co `mục tiêu chuẩn`, `đạt mục tiêu`, `không đạt mục tiêu`.
- khong co `ăn càng ít càng tốt`, `giảm cân chắc chắn`.
- khong co `mục tiêu kcal/macro/nước/natri/kali/phospho cá nhân`.

Ghi chu:

- Cac tu `kcal`, `macro`, `natri`, `kali`, `phospho` chi xuat hien trong cau phu dinh ve nhung thu trang khong dua ra.
- Cac benh nen nhu diabetes, benh than, suy tim, gout chi xuat hien trong danh sach can hoi chuyen gia, khong di kem target hoac chi dinh an uong ca nhan.

## `/cong-cu/`

Da cap nhat card `Đĩa ăn lành mạnh`:

- Mo ta moi: `Nhắc các tình huống cần cá thể hóa khi áp dụng mô hình đĩa ăn.`
- Khong gan badge `Đã kiểm v1`.
- Khong goi la calculator.
- Khong goi la cong cu chia dia theo benh.
- Khong goi la cong cu dieu tri, ke don, hay dua muc tieu an uong ca nhan.

## Ngoai scope

Khong sua:

- engine.
- du lieu dinh duong.
- cong thuc.
- route stable da chot.
- `dist`.

Khong deploy.

## Ket luan

`/cong-cu/dia-an-lanh-manh/` da duoc safety patch thanh educational orientation/safety shell. Can browser QA/polish rieng truoc khi xet final review va status.
