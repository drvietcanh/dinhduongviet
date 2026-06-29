# Dia an lanh manh QA polish v1

## Pham vi

Route duoc QA: `/cong-cu/dia-an-lanh-manh/`.

File route: `src/pages/cong-cu/dia-an-lanh-manh.astro`.

Muc tieu vong nay la browser/manual QA va polish nhe cho route da safety patch. Khong cap nhat stable/status.

## Browser/mobile QA lam bang cach nao

Da chay `npm run build`, sau do chay preview local bang `npm run preview`.

Preview server:

- Lenh preview tu dong chuyen sang `http://localhost:4357/` vi port 4356 dang ban.
- Kiem tra HTTP bang `Invoke-WebRequest`.
- Kiem tra browser bang in-app Browser voi Playwright API.
- Kiem tra mobile bang viewport override `390 x 844`.

## Redirect/meta refresh

Ket qua:

- `/cong-cu/dia-an-lanh-manh/`: HTTP 200.
- Khong redirect bat thuong.
- Khong co `meta[http-equiv="refresh"]`.
- H1 dung: `Đĩa ăn lành mạnh`.

## Desktop/mobile

Desktop:

- Khong overflow ngang.
- Khong loi console app.
- Trang render dung noi dung educational orientation + safety shell.

Mobile `390 x 844`:

- Khong overflow ngang.
- Card, checklist va link de doc, de bam.
- Safety note hien ro va khong vo layout.
- Related cards hien 3 link.
- Khong loi console app.

## Output nguy co cao da kiem

Khong con:

- selector benh nen.
- form/calculator ca nhan.
- disease table hardcode user-facing.
- SVG plate output ca the hoa theo benh.
- ty le dia theo benh.
- target kcal/macro/nuoc/natri/kali/phospho/dam ca nhan.
- loi khuyen replace/avoid theo benh nhu chi dinh ca nhan.
- output ca nhan cho benh nen.

Kiem tra DOM cho thay:

- `formCount = 0`.
- `selectCount = 0`.
- `mainScriptCount = 0`.
- `svgCount = 0`.

Ghi chu: chuoi ky thuat `replace` co the xuat hien trong HTML/runtime khong phai user-facing text. Browser text check xac nhan khong co user-facing `replace/avoid`.

## Cac tinh huong UI da thu

Da doi chieu noi dung hien thi voi cac tinh huong:

- nguoi khoe manh muon xem dia an chung.
- nguoi dai thao duong.
- nguoi benh than man hoac loc mau.
- nguoi tang huyet ap.
- nguoi suy tim/phu/can han che dich.
- nguoi roi loan lipid mau.
- nguoi gout.
- nguoi ung thu/suy dinh duong.
- nguoi muon giam can nhanh.
- nguoi muon biet ty le dia an chinh xac cho benh nen.
- nguoi muon muc tieu natri/kali/phospho/nuoc/dam cu the.
- nguoi muon thuc pham nen tranh/thay the theo benh.

Ket qua:

- Trang chi dinh huong giao duc chung ve cach nhin bua an.
- Trang nhac can ca the hoa voi bac si hoac chuyen gia dinh duong khi co benh nen, thuoc dang dung, trieu chung hoac xet nghiem can theo doi.
- Khong dua ty le dia theo benh.
- Khong dua target so.
- Khong ket luan an toan cho benh nen.
- Khong dua danh sach tranh/thay the nhu chi dinh ca nhan.
- Khong khuyen giam can nhanh hoac an cang it cang tot.
- Khong thay the tu van chuyen mon.

## Link sang tool stable lien quan

Route hien co 3 link lien quan da kiem:

- `/cong-cu/khau-phan-viet-clinical` -> HTTP/browser route dung, H1 `Đánh giá khẩu phần Việt`, khong meta refresh.
- `/cong-cu/muc-tieu-dinh-duong` -> HTTP/browser route dung, H1 `Mục tiêu dinh dưỡng`, khong meta refresh.
- `/cong-cu/nuoc-uong` -> HTTP/browser route dung, H1 `Tính nhu cầu nước uống`, khong meta refresh.

Link chi la dieu huong noi bo sang tool stable lien quan, khong dung de ne safety disclaimer.

## Wording cam

Khong thay user-facing wording cam dang ket luan/khuyen nghi ca nhan:

- `an toàn cho bệnh`.
- `không cần hỏi bác sĩ`.
- `mục tiêu chuẩn`.
- `tỷ lệ chuẩn cho bệnh`.
- `đĩa ăn chuẩn cho đái tháo đường`.
- `đĩa ăn chuẩn cho bệnh thận`.
- `đĩa ăn chuẩn cho tăng huyết áp`.
- `bắt buộc ăn`.
- `bắt buộc tránh`.
- `ăn càng ít càng tốt`.
- `giảm cân chắc chắn`.
- `giảm cân nhanh`.
- `deficit kcal`.
- `mục tiêu kcal/macro/nước/natri/kali/phospho/đạm cá nhân`.
- `điều trị đái tháo đường/bệnh thận/tăng huyết áp/gout`.
- `chỉ định`.
- `kê thực đơn`.

Cac tu `kcal`, `macro`, `natri`, `kali`, `phospho` chi xuat hien trong cau phu dinh rang trang khong dua muc tieu ca nhan.

## `/cong-cu/`

Card `Đĩa ăn lành mạnh` da duoc polish mo ta:

`Định hướng đĩa ăn chung và nhắc các tình huống cần cá thể hóa khi có bệnh nền.`

Badge:

- Khong gan `Đã kiểm v1` trong vong QA polish.

Card khong goi la:

- calculator.
- cong cu tinh ty le dia an theo benh.
- cong cu ke thuc don.
- cong cu xac dinh target natri/kali/phospho/nuoc/dam.
- cong cu dieu tri benh nen.

## Co sua wording/layout khong

Co polish nhe wording card `/cong-cu/` de dung huong an toan hon.

Khong sua layout route chinh.

## Ngoai scope

Khong sua:

- engine.
- du lieu dinh duong.
- cong thuc.
- route stable da chot.
- `dist`.

Khong deploy.

## QA cuoi

Da chay va pass:

- `npm run build`.
- `npm run qa`.
- `npm run qa:food-data`.
- `npm run qa:data-consistency`.
- `npm run test:tools`.
- `git diff --check`.

Ghi chu: neu `git diff --check` con canh bao LF/CRLF thi phan loai la canh bao Git tren Windows, khong phai loi whitespace lam fail QA.

## Ket luan

`/cong-cu/dia-an-lanh-manh/` da dat QA polish cho pham vi educational orientation + safety shell. Can final review rieng truoc khi xet cap nhat status/stable.
