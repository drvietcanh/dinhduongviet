# Tool Water Implement v1

Branch: `tool-water-implement-v1`

Scope: trien khai lai cong cu `/cong-cu/nuoc-uong/` theo spec `reports/tool-water-spec-v1.md`. Khong sua du lieu dinh duong, khong sua `dist` thu cong.

## Engine

Engine nam o:

```text
src/lib/water-intake-calculator.ts
```

Engine expose:

- `calculateWaterIntake(input)`
- `WaterMode = "auto" | "caution" | "clinical_no_auto"`
- constants: weight limits, base ml/kg, global safety note, food water note.

## Cong Thuc Nguoi Khoe

V1 dung heuristic:

```text
totalWaterMinLiters = weightKg * 30 ml / 1000
totalWaterMaxLiters = weightKg * 35 ml / 1000
```

Ket qua hien thanh khoang, khong phai mot con so bat buoc.

Vi du:

- 60 kg -> 1.8-2.1 L/ngay total water.
- 70 kg -> 2.1-2.45 L/ngay total water.

## Total Water Va Drinking Water

Engine tach:

- `totalWaterMinLiters`
- `totalWaterMaxLiters`
- `estimatedDrinkingWaterMinLiters`
- `estimatedDrinkingWaterMaxLiters`
- `foodWaterNote`

V1 uoc tinh drinking water bang 80% total water. Report/page ghi ro mot phan nuoc den tu thuc an va ty le that thay doi theo khau phan.

## Rule Modes

### `auto`

Ap dung cho nguoi truong thanh tuong doi khoe manh, khong co red flag va khong co tinh huong can caution.

Output:

- Hien khoang total water.
- Hien khoang nuoc uong/do uong uoc tinh.
- Hien ly 200 ml chi de de hinh dung.

### `caution`

Van hien khoang tham khao nhung gan canh bao, khong goi la muc tieu bat buoc.

Tinh huong caution:

- Hoat dong nhieu.
- Thoi tiet nong.
- Ra mo hoi nhieu.
- Thai ky.
- Cho con bu.
- Dung loi tieu don thuan.
- Nguoi rat cao tuoi/yeu.

### `clinical_no_auto`

Khong hien muc nuoc ca nhan nhu nguoi khoe. UI hien thong diep can theo chi dinh bac si/don vi dieu tri.

Red flags chuyen `clinical_no_auto`:

- Suy tim.
- Benh than man.
- Dang loc mau.
- Xo gan/co truong.
- Phu hoac tang can nhanh do giu dich.
- Ha natri mau.
- Dang duoc dan han che dich.
- Tre em.
- Sot cao/non/tieu chay nhieu/mat nuoc cap.

Dung loi tieu kem suy tim/CKD/phu/ha natri hoac red flag nang cung thanh `clinical_no_auto`.

## Page

Page da sua:

```text
src/pages/cong-cu/nuoc-uong.astro
```

Thay doi chinh:

- Doi lead sang "uoc tinh ban dau" cho nguoi truong thanh tuong doi khoe manh.
- Bo logic `base * activity * weather + breastfeedingExtra` trong page.
- Them nhom checkbox red flags.
- Hien badge mode `auto` / `caution` / `clinical_no_auto`.
- Hien total water va drinking water tach rieng.
- Khong hien "ban nen uong X lit/ngay" cho nhom clinical.
- Them canh bao khong dung cho cap cuu mat nuoc, non oi, tieu chay nang, roi loan tri giac, kho tho/phu tang nhanh.

## Tests

Script test:

```text
scripts/test-water-intake.mjs
```

Package scripts:

```json
"test:water": "node scripts/test-water-intake.mjs",
"test:tools": "npm run test:protein && npm run test:carb && npm run test:gl && npm run test:water"
```

Test cases:

| Case | Expected | Status |
| --- | --- | --- |
| 60 kg nguoi khoe | auto, 1.8-2.1 L total water | pass |
| 70 kg nguoi khoe | auto, 2.1-2.45 L total water | pass |
| Can nang rong/0/am/NaN/Infinity/qua cao | loi than thien | pass |
| Hoat dong nhieu | caution | pass |
| Nong/ra mo hoi nhieu | caution | pass |
| Suy tim | clinical_no_auto | pass |
| CKD | clinical_no_auto | pass |
| Loc mau | clinical_no_auto | pass |
| Xo gan/co truong/phu/han che dich | clinical_no_auto | pass |
| Ha natri mau | clinical_no_auto | pass |
| Loi tieu don thuan | caution | pass |
| Loi tieu + suy tim | clinical_no_auto | pass |
| Tre em | clinical_no_auto | pass |
| Sot cao/non/tieu chay/mat nuoc cap | clinical_no_auto | pass |
| Wording cam | khong co "uong cang nhieu cang tot", "bat buoc uong X lit", "dat chuan tuyet doi" | pass |

## Wording An Toan

UI/engine nhan manh:

- Cong cu chi dung cho giao duc suc khoe.
- Khong ap dung cho nguoi dang duoc dan han che dich.
- Suy tim, CKD, loc mau, xo gan/co truong, phu, ha natri mau can theo chi dinh bac si.
- Nhu cau nuoc thay doi theo thuoc, benh ly, sot, tieu chay, non, van dong va thoi tiet.
- Khong dung cong cu de xu tri cap cuu mat nuoc/non oi/tieu chay nang/roi loan tri giac/kho tho/phu tang nhanh.

## Khong Lam

- Khong sua du lieu dinh duong.
- Khong sua cong cu khac.
- Khong deploy.
- Khong hardcode multiplier hoat dong/thoi tiet trong page.
- Khong dua loi khuyen "uong nhieu nuoc" cung cho gout/soi than.

## Con Lai Cho v2

- Bac si/dinh duong vien can duyet co tiep tuc dung `30-35 ml/kg/ngay` hay chuyen sang AI theo gioi/tuoi.
- Can source rieng neu muon cong them so lit cho van dong, nong, ra mo hoi nhieu.
- Thai ky/cho con bu co the can source-lock san khoa rieng.
- Nguoi rat cao tuoi va nguoi dung loi tieu can quy tac chi tiet hon neu muon ca the hoa.
- Can QA UI bang browser that trong vong polish sau.
