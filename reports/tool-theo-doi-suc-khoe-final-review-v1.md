# Theo doi suc khoe final review v1

## Cach test mobile

- Build: `npm run build`.
- Preview: `npm run preview -- --port 4352`.
- Browser QA: in-app Browser plugin tai `http://127.0.0.1:4352/cong-cu/theo-doi-suc-khoe/`.
- Mobile QA: Browser viewport override `390 x 844`.

Ghi chu: screenshot capture khong duoc dung lam bang chung chinh. Final review dua tren HTTP 200, DOM snapshot, console logs, viewport check va interaction evidence.

## Route va redirect

- Route: `/cong-cu/theo-doi-suc-khoe/`.
- HTTP: `200`.
- Redirect/meta refresh: khong co.
- H1: `Theo dõi sức khỏe`.
- Console app: khong co error/warn.
- Desktop: khong overflow ngang.
- Mobile `390 x 844`: khong overflow ngang; form, bang nhat ky va nut thao tac van de nhap/de bam.

## Scope final

Route dat scope `neutral tracking log + safety shell`.

Route co the:

- Ghi nhat ky chi so do nguoi dung nhap.
- Ghi chu bua an, thuoc, trieu chung.
- Luu nhat ky local bang `localStorage`.
- Xuat CSV du lieu tho do nguoi dung nhap.
- Nhac nguoi dung hoi bac si/chuyen gia khi co trieu chung, benh nen, dang dung thuoc, chi so bat thuong hoac can ca the hoa muc tieu.

Route khong con user-facing:

- chart/canvas.
- goal lines/reference lines.
- target BP/glucose/HbA1c/LDL.
- `health-goals-v1`.
- muc tieu ca nhan.
- nhan tot/cao/thap/bat thuong/nguy co.
- ket luan dat muc tieu hoac khong dat muc tieu.
- huong dan tu chinh thuoc, insulin, statin, thuoc huyet ap, bua an hoac che do cham soc.

Route khong tao hoac goi engine moi, khong sua du lieu/cong thuc.

## 6 nhom test cuoi

Da thu:

1. Huyet ap.
2. Duong huyet.
3. HbA1c.
4. LDL/triglyceride va lipid mau.
5. Nhieu ban ghi kem ghi chu bua an, thuoc, trieu chung.
6. Gia tri rat thap/rat cao kem tinh huong nguoi dung muon biet tot/xau, dat muc tieu khong, hoac muon tu chinh thuoc.

Ket qua:

- Cong cu chi ghi nhan du lieu nhat ky.
- Khong tu phan loai chi so.
- Khong dua target so.
- Khong ket luan dat/khong dat muc tieu.
- Khong khuyen tu chinh thuoc/insulin/statin/thuoc huyet ap.
- Khong khuyen tu doi bua an hoac xu tri thay bac si.
- Safety shell van nhac hoi bac si/chuyen gia trong tinh huong can ca the hoa.

## localStorage / nhat ky trung tinh

Route chi dung key:

- `health-track-v1`

Kiem tra browser:

- Truoc test: bang trong.
- Luu 2 ban ghi: bang hien 2 dong.
- Reload trang: van con 2 dong.
- Xoa tung dong: bang ve trang thai rong dung thiet ke.
- Khong co `health-goals-v1` trong route/HTML build.

Du lieu luu la nhat ky local do nguoi dung nhap, khong phai chan doan, don thuoc, target, goal line, phan loai nguy co hay clinical output do app sinh ra.

## CSV/export

Route van co nut `Xuất CSV`.

Browser plugin click duoc nut nhung khong bat duoc download event trong 5 giay. Doi chieu source route cho thay CSV chi gom:

- ngay do.
- can nang.
- vong eo.
- huyet ap tam thu/tam truong.
- duong huyet.
- HbA1c.
- LDL.
- triglyceride.
- ghi chu nguoi dung nhap.

CSV khong chua target, goal, nhan tot/cao/thap, dat/khong dat, hoac clinical output do app sinh ra.

## Wording guard

Khong thay wording cam do app sinh ra:

- `tốt`, `cao`, `thấp`, `rất cao` duoi dang nhan/ket luan ca nhan.
- `bất thường`, `nguy cơ cao` duoi dang phan loai app-generated.
- `đạt mục tiêu`, `không đạt mục tiêu`.
- `mục tiêu huyết áp`, `mục tiêu đường huyết`, `mục tiêu HbA1c`, `mục tiêu LDL`.
- `health-goals-v1`.
- huong dan tu chinh/tang/giam/ngung thuoc, doi insulin, doi thuoc huyet ap/statin, bo bua, hoac dieu tri benh.

Ghi chu ky thuat:

- Chuoi `target` con xuat hien trong HTML build do JSON-LD chung cua layout: `SearchAction.target.urlTemplate`. Day la metadata tim kiem, khong phai user-facing clinical target.
- Neu nguoi dung tu nhap wording nguy hiem trong ghi chu, route co the hien lai nguyen van trong bang nhat ky. Day la du lieu nguoi dung nhap, khong phai ket luan/khuyen nghi app-generated.

## `/cong-cu/`

Card `Theo dõi sức khỏe`:

- Mo ta: "Ghi nhật ký chỉ số sức khỏe và nhắc các tình huống cần hỏi bác sĩ hoặc chuyên gia."
- Khong co badge `Đã kiểm v1` trong vong final review.
- Khong goi la calculator/may tinh.
- Khong goi la cong cu danh gia kiem soat benh.
- Khong goi la cong cu xac dinh muc tieu huyet ap/duong huyet/HbA1c/LDL.
- Khong goi la cong cu phan loai nguy co.
- Khong goi la cong cu huong dan chinh thuoc.

## Sua trong vong final review

Khong sua wording/layout trong route. Vong nay chi tao report final review.

Khong sua:

- engine.
- du lieu dinh duong.
- cong thuc.
- route ngoai scope.
- `dist`.

## QA cuoi

Ket qua command QA:

- `npm run build`: pass.
- `npm run qa`: pass.
- `npm run qa:food-data`: pass.
- `npm run qa:data-consistency`: pass.
- `npm run test:tools`: pass.
- `git diff --check`: pass.
- `git status --short`: sach sau commit.

## Ket luan

`/cong-cu/theo-doi-suc-khoe/` du dieu kien cap nhat status.

De xuat status: `stable_v1` voi pham vi `neutral tracking log + safety shell only`, khong phai cong cu danh gia kiem soat benh, khong phai cong cu xac dinh muc tieu huyet ap/duong huyet/HbA1c/LDL, va khong phai cong cu huong dan chinh thuoc.
