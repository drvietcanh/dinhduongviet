# Dia an lanh manh final review v1

## Pham vi

Route final review: `/cong-cu/dia-an-lanh-manh/`.

File route: `src/pages/cong-cu/dia-an-lanh-manh.astro`.

Muc tieu vong nay la duyet cuoi truoc khi cap nhat status. Khong khoi phuc selector benh nen, khong them calculator, khong them target so, khong them bang benh nen, khong them ke thuc don ca nhan.

## Cach test mobile

Da chay:

- `npm run build`.
- `npm run preview`.

Preview chay tai `http://localhost:4358/`.

Da kiem tra bang:

- HTTP quick check voi `Invoke-WebRequest`.
- In-app Browser voi Playwright API.
- Mobile viewport override `390 x 844`.

## Redirect/meta refresh

Ket qua:

- `/cong-cu/dia-an-lanh-manh/`: HTTP 200.
- Khong redirect bat thuong.
- Khong co meta refresh.
- H1 dung: `Đĩa ăn lành mạnh`.
- Khong loi console app.

## Scope educational orientation + safety shell

Scope cuoi dat.

Route chi con:

- Dinh huong giao duc chung ve cach nhin bua an.
- Nhac cac tinh huong can ca the hoa voi bac si hoac chuyen gia dinh duong.
- Checklist thong tin nen chuan bi khi di tu van.
- Link noi bo sang cong cu stable lien quan.

Route khong con:

- selector benh nen.
- form/calculator ca nhan.
- disease table user-facing.
- SVG plate output ca the hoa theo benh.
- ty le dia an theo benh nen.
- output ca nhan cho benh nen.

Kiem DOM trong browser:

- `formCount = 0`.
- `selectCount = 0`.
- `tableCount = 0`.
- `svgCount = 0`.
- `mainScriptCount = 0`.

Khong tao hoac goi engine moi.

Khong sua du lieu/cong thuc.

## 6 nhom test cuoi

Da doi chieu noi dung hien thi voi 6 nhom:

1. Nguoi khoe manh muon xem dia an chung.
2. Nguoi dai thao duong hoac roi loan duong huyet.
3. Nguoi benh than man hoac can chu y kali/phospho.
4. Nguoi tang huyet ap/suy tim/can han che muoi hoac dich.
5. Nguoi gout, ung thu, suy dinh duong hoac nguoi cao tuoi.
6. Nguoi muon biet ty le dia an chinh xac, target natri/kali/phospho/nuoc/dam hoac thuc pham can tranh/thay the theo benh.

Ket qua:

- Chi dinh huong giao duc chung.
- Khong dua ty le dia an theo benh.
- Khong dua target so.
- Khong ket luan mon/dia an an toan cho benh nen.
- Khong dua danh sach tranh/thay the nhu chi dinh ca nhan.
- Khong khuyen giam can nhanh hoac an cang it cang tot.
- Co nhac hoi bac si/chuyen gia dinh duong khi can ca the hoa.

## Target ca nhan va loi khuyen disease-specific

Khong co target ca nhan:

- kcal.
- macro.
- nuoc/dich.
- natri.
- kali.
- phospho.
- dam.

Cac tu `kcal`, `macro`, `natri`, `kali`, `phospho` chi xuat hien trong cau phu dinh rang v1 khong dua muc tieu ca nhan cho tung benh nen.

Khong co loi khuyen replace/avoid theo benh nhu chi dinh ca nhan.

## Link noi bo

Route co 3 link noi bo sang tool stable lien quan:

- `/cong-cu/khau-phan-viet-clinical` -> route dung, H1 `Đánh giá khẩu phần Việt`, khong meta refresh.
- `/cong-cu/muc-tieu-dinh-duong` -> route dung, H1 `Mục tiêu dinh dưỡng`, khong meta refresh.
- `/cong-cu/nuoc-uong` -> route dung, H1 `Tính nhu cầu nước uống`, khong meta refresh.

Link khong mo ta qua muc va khong dung de ne safety disclaimer.

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
- `mục tiêu kcal cá nhân`.
- `mục tiêu macro cá nhân`.
- `mục tiêu nước cá nhân`.
- `mục tiêu natri cá nhân`.
- `mục tiêu kali cá nhân`.
- `mục tiêu phospho cá nhân`.
- `mục tiêu đạm cá nhân`.
- `điều trị đái tháo đường`.
- `điều trị bệnh thận`.
- `điều trị tăng huyết áp`.
- `điều trị gout`.
- `chỉ định`.
- `kê thực đơn`.

Khong co ket luan ca nhan kieu:

- `Bạn nên ăn theo tỷ lệ này`.
- `Bạn cần X kcal mỗi ngày`.
- `Bạn cần X g đạm mỗi ngày`.
- `Bạn cần hạn chế X mg natri`.
- `Bạn cần hạn chế kali`.
- `Bạn cần hạn chế phospho`.
- `Món này an toàn cho bệnh thận`.
- `Món này phù hợp cho đái tháo đường`.
- `Chỉ cần ăn theo đĩa này là kiểm soát bệnh`.

## Chuoi ky thuat `replace`

Browser HTML check con thay chuoi ky thuat `replace` trong HTML/runtime. Chuoi nay khong xuat hien trong `document.body.innerText`, khong nam trong noi dung user-facing, va khong phai bang avoid/replace theo benh cu.

Browser text check xac nhan `userFacingReplaceAvoid = false`.

## `/cong-cu/`

Card `Đĩa ăn lành mạnh` giu mo ta:

`Định hướng đĩa ăn chung và nhắc các tình huống cần cá thể hóa khi có bệnh nền.`

Badge:

- Chua gan `Đã kiểm v1` trong vong final review.

Card khong goi la:

- calculator.
- cong cu tinh ty le dia an theo benh.
- cong cu ke thuc don.
- cong cu xac dinh target natri/kali/phospho/nuoc/dam.
- cong cu dieu tri benh nen.

## Co sua wording/layout/link text khong

Khong sua route, layout hoac link text trong vong final review.

Chi tao report final review.

## Ngoai scope

Khong sua:

- engine.
- du lieu dinh duong.
- cong thuc.
- route stable da chot.
- `dist`.

Khong deploy.

## LF/CRLF

Neu `git diff --check` ghi canh bao LF/CRLF, phan loai la canh bao Git tren Windows, khong phai loi whitespace va khong lam fail QA.

## QA cuoi

Da chay va pass:

- `npm run build`.
- `npm run qa`.
- `npm run qa:food-data`.
- `npm run qa:data-consistency`.
- `npm run test:tools`.
- `git diff --check`.

Preview quick:

- `/cong-cu/`: HTTP 200, card dung mo ta, khong badge `Đã kiểm v1`.
- `/cong-cu/dia-an-lanh-manh/`: HTTP 200, khong redirect/meta refresh, mobile 390px khong overflow.

## Ket luan

`/cong-cu/dia-an-lanh-manh/` du dieu kien cap nhat status.

De xuat status: `stable_v1` voi pham vi `educational orientation + safety shell only`, khong phai calculator dia an theo benh nen va khong phai cong cu ke thuc don ca nhan.
