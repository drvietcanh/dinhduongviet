# Protein Requirement Tool Specification v1

Pham vi: cong cu `/cong-cu/tinh-nhu-cau-dam`.

Muc tieu vong nay: dac ta cong thuc va pham vi an toan truoc khi sua code. Khong thay doi logic tinh toan.

## 1. Code hien tai

### File da doc

- `src/pages/cong-cu/tinh-nhu-cau-dam.astro`
- Tim kiem lien quan trong `src/pages/cong-cu/`, `src/components/`, `src/lib/`, `src/data/`.

Chua thay helper rieng cho cong cu nay. Logic tinh protein hien nam truc tiep trong script inline cua file Astro. Mot so cong cu khac co noi dung lien quan protein/benh ly nhu `dia-an-lanh-manh`, `ke-hoach-bua-an`, `khau-phan-viet-clinical`, `lap-thuc-don-tuan`, nhung khong duoc import vao `tinh-nhu-cau-dam`.

### Input hien tai

| Input | ID | Kieu | Gia tri hien tai | Ghi chu |
|---|---|---|---|---|
| Can nang | `weight` | number | default 60, min 20, max 200 | Duoc dung truc tiep lam can nang tinh g/kg. |
| Muc van dong | `activity` | select | 1.2, 1.4, 1.6, 1.8 | Co doc trong JS nhung chua duoc dung trong cong thuc. |
| Tinh trang/benh ly | `condition` | select | 13 nhom | Dung de chon range g/kg va text advice. |

### Output hien tai

| Output | Mo ta |
|---|---|
| Protein g/ngay | Khoang thap-cao tinh tu can nang x range g/kg. |
| He so g/kg | Hien `gLow-gHigh g dam/kg can nang`. |
| Chia bua | Sang 25%, phu sang 10%, trua 30%, xe 10%, toi 25%. |
| Quy doi thuc pham | Danh sach food hardcode, hien protein moi item va % nhu cau trong ngay. |
| Loi khuyen | Text hardcode theo `condition`, co cac nhom kidney/gout/weight-loss/muscle/vegan/sick/default. |

### Cong thuc hien tai

```js
var weight = parseFloat(document.getElementById('weight').value) || 60;
var condKey = document.getElementById('condition').value;
var activity = parseFloat(document.getElementById('activity').value) || 1.4;
var cond = CONDITIONS[condKey];

var gLow = cond.gPerKg[0];
var gHigh = cond.gPerKg[1];
var gMid = Math.round((gLow + gHigh) / 2 * 100) / 100;

var proteinLow = Math.round(weight * gLow);
var proteinHigh = Math.round(weight * gHigh);
var proteinMid = Math.round(weight * gMid);
```

Meal split:

```js
[
  { label: 'Sang', pct: 0.25 },
  { label: 'Phu sang', pct: 0.10 },
  { label: 'Trua', pct: 0.30 },
  { label: 'Xe', pct: 0.10 },
  { label: 'Toi', pct: 0.25 },
]
```

Progress bar:

```js
width = Math.min(proteinHigh / 200 * 100, 60)
```

### Bang range hardcode hien tai

| Condition | Label | g/kg/ngay hien tai | Text hien tai | Rui ro |
|---|---|---:|---|---|
| `normal` | Nguoi khoe manh | 0.8-1.0 | Duy tri co the khoe manh | medium |
| `elderly` | Nguoi cao tuoi | 1.0-1.2 | Chong loang co | high |
| `sedentary` | It van dong | 0.8-1.0 | Duy tri co bap | medium |
| `weight-loss` | Giam can | 1.4-1.8 | Dam cao giup giu co khi thieu calo | medium |
| `muscle` | Tang co/gym | 1.6-2.2 | Tong hop co bap sau tap | medium |
| `pregnant` | Mang thai T2/T3 | 1.1-1.2 | Thai nhi tang truong | high |
| `breastfeeding` | Cho con bu | 1.1-1.3 | San xuat sua can dam | high |
| `sick` | Om/hau phau/suy kiet | 1.2-2.0 | Phuc hoi mo, mien dich | high |
| `kidney-g3` | Suy than G3 | 0.6-0.8 | Giam ganh nang loc than | high |
| `kidney-g4` | Suy than G4-G5 | 0.5-0.6 | Han che dam nghiem ngat | high |
| `kidney-dialysis` | Dang loc mau | 1.0-1.2 | Loc mau mat dam | high |
| `gout` | Gout | 0.8-1.0 | Dam vua phai, uu tien it purin | high |
| `vegan` | An chay | 0.9-1.1 | Dam thuc vat hap thu thap hon | medium |

### Bien co nhung chua dung

- `activity`: duoc doc tu select va co mo ta UI, nhung khong anh huong `gLow`, `gHigh`, `proteinLow`, `proteinHigh`, meal split hay advice.
- `amt` trong quy doi thuc pham: duoc tinh `target / f.protein`, nhung khong hien thi. Hien tai UI chi hien protein moi item va % nhu cau.

### Phan hardcode

- Toan bo `CONDITIONS`.
- Toan bo danh sach `FOODS` va protein moi item.
- Ty le chia bua.
- Advice text.
- Safety note.
- Progress bar cap tu 200g va gioi han width 60%.
- Page description noi "phu hop suy than, gout, tang co, giam can", co the tao cam giac da duoc ca nhan hoa lam sang.

### Nguy co gay hieu nham lam sang

- CKD khong loc mau va dang loc mau la hai tinh huong khac nhau, nhung cung nam trong mot cong cu chung va chi co mot select don gian.
- `kidney-g4` dang ghi 0.5-0.6 g/kg va "han che nghiem ngat"; can nguon va can lam ro chi dung khi co chi dinh, theo doi suy dinh duong va nang luong.
- Gout khong chi la tong dam: purin, ruou/bia, fructose, giam can nhanh, chuc nang than va thuoc moi la cac bien quan trong.
- Thai ky/cho con bu khong nen chi tinh theo can nang hien tai neu chua ro can nang truoc mang thai, tam ca nguyet, song thai, BMI va nguy co san khoa.
- Nguoi cao tuoi/suy kiet/hau phau co nguy co suy dinh duong, refeeding, nuot kem, suy than dong mac; khong nen de nguoi dung tu ap dung range cao.
- Input can nang hien tai co the khong phu hop voi beo phi nang; can can nang ly tuong hoac can nang hieu chinh neu dung g/kg.
- Text "uống 2-3 lít nước/ngày" trong gout advice co the khong an toan voi suy tim, CKD, xo gan, phu, ha natri mau.

## 2. Muc tieu cong cu moi

Cong cu nen la cong cu uoc tinh nhu cau protein/ngay theo can nang va tinh huong, dung cho giao duc va thao luan voi bac si/dinh duong vien.

Pham vi:

- Uoc tinh protein g/ngay va g/kg/ngay.
- Lam ro day la khoang tham khao, khong thay the tu van dinh duong ca the.
- Khong dua thuc don chi tiet trong cong cu nay; thuc don nen nam o cong cu meal plan rieng.
- Voi benh than, loc mau, thai ky, ung thu/suy dinh duong, tre em, nguoi cao tuoi yeu/sarcopenia: phai co canh bao can ca nhan hoa.
- Neu thieu nguon chuan cho mot nhom, UI va spec phai danh dau `needs_source` thay vi trinh bay nhu guideline da chot.

## 3. Input de xuat

| Input | Bat buoc | Muc dich | Ghi chu an toan |
|---|---|---|---|
| Can nang hien tai | co | Tinh nhanh cho da so nguoi dung | Khong du cho beo phi nang, phu, co thai, suy dinh duong. |
| Can nang ly tuong | tuy chon | Tinh theo IBW khi can | Nen co cong thuc rieng hoac cho nhap tay; chua ap dung neu chua duyet. |
| Can nang hieu chinh | tuy chon | Nhom beo phi can tinh protein theo adjusted weight | Can bac si/dinh duong vien duyet cong thuc. |
| Tuoi | co | Phan nhanh nguoi cao tuoi/tre em | Vong nay chi spec nguoi lon; tre em nen tach cong cu. |
| Gioi | tuy chon | Neu tinh IBW/DRI theo gioi | Khong can neu chi dung actual weight. |
| Muc hoat dong | co | Phan biet it/vua/nhieu | Khong nen nhan truc tiep vao protein neu condition da xac dinh range; dung de chon goi y/muc tieu trong nhom healthy. |
| Muc tieu | co | Duy tri/tang co/giam can/suy dinh duong | Anh huong range va warning. |
| Tinh huong | co | Nguoi khoe, cao tuoi, DM, CKD, dialysis, gout, thai ky, ung thu/suy dinh duong | Mot so nhom can khoa bang warning neu thieu du lieu. |
| eGFR/giai doan CKD | neu CKD | Tach CKD 3, 4-5, dialysis | Khong tu dong khuyen nghi neu khong co chuan duyet. |
| Dang loc mau | neu CKD | Phan biet dialysis vs nondialysis | Bat buoc neu nguoi dung chon benh than. |
| Dang co phu/suy tim/xo gan/han che dich | tuy chon warning | Chan advice ve nuoc va can nang | Khong dung de tinh protein neu chua co engine lam sang. |
| Canh bao chong dung cong thuc chung | co | An toan | Hien truoc ket qua cho nhom nguy co cao. |

## 4. Output de xuat

| Output | Yeu cau |
|---|---|
| Protein g/ngay | Hien khoang thap-cao, khong chi mot so. |
| Protein g/kg/ngay | Hien range va can nang duoc dung de tinh: actual/ideal/adjusted. |
| Giai thich ngan | Noi ro day la uoc tinh giao duc. |
| Chia bua | Goi y chia deu 3-5 lan; khong bat buoc ty le co dinh. |
| Warning theo nhom | CKD/dialysis/gout/thai ky/ung thu/suy dinh duong/cao tuoi. |
| Source status | Hien noi bo/metadata: `source_confirmed`, `needs_source`, `clinician_review_required`. |
| Khong dua thuc don chi tiet | Food equivalents co the bo hoac chuyen thanh link sang tra cuu thuc pham/meal plan. |

## 5. Bang cong thuc de xuat

Ghi chu: bang nay la spec de doi chieu, khong phai approval cuoi. Cac dong chua co nguon/nguon local chua duyet phai giu `needs_source`.

| Nhom doi tuong | g/kg/ngay de xuat | Dieu kien ap dung | Khong ap dung khi nao | Nguon/guideline can doi chieu | Rui ro |
|---|---:|---|---|---|---|
| Nguoi lon khoe manh, it van dong | 0.8-1.0 | Nguoi lon, khong mang thai, khong CKD/benh catabolic | Tre em, thai ky, suy dinh duong, CKD, benh cap | DRI/National Academies; `needs_source` cho nguong 1.0 | medium |
| Nguoi lon van dong vua | 1.0-1.2 | Khoe manh, tap nhe-vua, muc tieu duy tri | CKD, gout nang, benh cap | `needs_source` | medium |
| Giam can giu co | 1.2-1.6 | Nguoi lon, thieu calo co kiem soat, khong CKD | CKD, thai ky, roi loan an uong, suy dinh duong | `needs_source`; can nguon obesity/weight management | medium |
| Tang co/tap khang luc | 1.4-2.0 | Nguoi lon khoe, tap khang luc | CKD, benh gan/than, thai ky neu chua duyet | ISSN protein and exercise position stand | medium |
| Tang co muc cao | 2.0-2.2 | Chi neu tap nang va theo doi tong nang luong | CKD, gout khong kiem soat, benh than/gan | ISSN cho range chinh; phan 2.0-2.2 can review them | medium |
| Nguoi cao tuoi khoe/manh | 1.0-1.2 | >65 tuoi, an uong on, khong CKD | CKD, suy dinh duong nang, benh cap, dysphagia | `needs_source`; can ESPEN geriatrics/PROT-AGE neu duyet | high |
| Nguoi cao tuoi yeu/sarcopenia | 1.2-1.5 | Can danh gia sarcopenia/suy dinh duong | CKD khong duoc tu tang dam | `needs_source`; can clinician review | high |
| Dai thao duong khong CKD | 0.8-1.2 | Neu khong co benh than va muc tieu ca nhan | CKD, albuminuria, giam eGFR | ADA/KDIGO/KDOQI can doi chieu | high |
| CKD G3-G5 khong loc mau | 0.55-0.8 | Chi khi co eGFR/giai doan, nang luong du, theo doi dinh duong | Dang loc mau, suy dinh duong, catabolic illness, pregnancy | KDOQI 2020 Nutrition in CKD/NKF | high |
| CKD co dai thao duong khong loc mau | 0.6-0.8 | CKD 3-5 + diabetes, duoi giam sat | Dang loc mau, suy dinh duong | KDOQI/KDIGO diabetes in CKD commentary | high |
| Dang loc mau | 1.0-1.2 hoac cao hon theo trung tam | Hemodialysis/peritoneal dialysis, theo dõi albumin/nPNA | Chua loc mau, catabolic acute illness | KDOQI 2020/NKF; local dialysis protocol | high |
| Gout | 0.8-1.0 | Nguoi lon gout on dinh, chuc nang than ok | Dot cap nang, CKD, soi than urat, suy tim/han che dich | `needs_source`; can rheumatology/dietitian review | high |
| Thai ky T2/T3 | needs_source | Chi khi co tuoi thai, can nang truoc mang thai, BMI | Thai nguy co cao, song thai, CKD, tien san giat | DRI/ACOG/WHO/local obstetric guideline | high |
| Cho con bu | needs_source | Nuoi con bu, tinh theo nhu cau san khoa | CKD, suy dinh duong, sinh non/benh me | DRI/ACOG/WHO/local guideline | high |
| Ung thu/suy dinh duong | 1.0-1.5 hoac needs_source | Chi khi co danh gia dinh duong, muc tieu dieu tri | Suy than/gan nang, refeeding risk | ESPEN clinical nutrition in cancer; ESPEN polymorbid inpatient | high |
| Hau phau/benh cap | needs_source | Theo muc do stress/chuyen hoa, duoi giam sat | ICU, suy than/gan, refeeding risk | ESPEN surgery/hospital nutrition; ASPEN neu dung | high |
| An chay | 0.9-1.1 | Nguoi lon khoe, an chay can doi | CKD, thai ky, tre em, suy dinh duong | `needs_source`; can source ve protein quality/digestibility | medium |

## 6. Canh bao an toan bat buoc

Can co trong UI/spec neu trien khai:

- CKD khong duoc tu tang dam neu chua co chi dinh cua bac si/dinh duong vien.
- CKD chua loc mau khac voi dang loc mau; khong dung chung mot range.
- Neu dang loc mau, khong tu an kieng dam theo cong thuc CKD chua loc mau.
- Gout khong chi phu thuoc tong dam; can quan tam loai thuc pham, purin, ruou/bia, fructose, giam can nhanh, chuc nang than va thuoc.
- Thai ky, cho con bu, tre em, nguoi suy dinh duong, ung thu/hau phau can ca nhan hoa.
- Phu, suy tim, xo gan, benh than tien trien, ha natri mau hoac dang bi han che dich: khong dung advice uong nhieu nuoc/mac dinh.
- Can nang hien tai co the khong phu hop khi beo phi nang, phu, co thai, catabolic illness; can can nang ly tuong/hieu chinh hoac danh gia truc tiep.
- Ket qua chi la uoc tinh de trao doi voi nhan vien y te, khong thay the phac do dieu tri.

## 7. Ke hoach sua code sau khi spec duoc duyet

### Input/UI

1. Them tuoi va optional gioi tinh neu dung IBW.
2. Doi "Muc van dong" thanh input co tac dung ro: hoac anh huong condition healthy, hoac bo neu khong dung.
3. Them selector can nang dung de tinh: actual / ideal / adjusted / manual.
4. Tach "Tinh huong" thanh nhom:
   - Nguoi khoe/muc tieu ca nhan.
   - Benh can review: CKD, dialysis, gout, thai ky/cho con bu, ung thu/suy dinh duong.
5. Neu chon CKD, bat buoc hien sub-input: giai doan/eGFR va dang loc mau hay khong.
6. Hien alert truoc ket qua cho nhom high risk.

### Formula engine

1. Tach `CONDITIONS` ra object co metadata:
   - `id`
   - `label`
   - `range`
   - `appliesTo`
   - `contraindications`
   - `sourceStatus`
   - `reviewRequired`
   - `warnings`
2. Tao function rieng:
   - `getProteinRange(profile)`
   - `getCalculationWeight(profile)`
   - `getSafetyWarnings(profile, range)`
   - `getMealDistribution(range, mealCount)`
3. Khong dung activity multiplier truc tiep vao protein neu chua co source.
4. Neu sourceStatus la `needs_source`, UI phai noi "can doi chieu nguon" hoac khoa nhom do thanh warning-only.

### UI warning

1. Doi page description, khong noi "phu hop suy than/gout" theo kieu da duyet.
2. Doi ket qua high-risk thanh card vang/do nhe: "Can ca nhan hoa".
3. Bo advice uong 2-3L trong gout neu chua hoi suy tim/CKD/xo gan/han che dich.
4. Bo hoac chuyen "Quy doi ra thuc pham" thanh "vi du tham khao", khong tao thuc don.

### Test case can co

| Case | Input | Expected |
|---|---|---|
| Healthy 60kg | actual weight 60, normal | Khoang 48-60g neu range 0.8-1.0 duoc giu. |
| Activity unused guard | Doi activity trong same condition | Neu activity chua duyet, ket qua khong doi va UI khong lam nguoi dung hieu la co tac dung. |
| Weight loss 80kg | weight-loss | Range theo spec duoc duyet, warning khong ap dung CKD. |
| CKD nondialysis | CKD G3-G5, no dialysis | Hien warning high risk, source KDOQI, khong cho tang dam. |
| Dialysis | dialysis yes | Khac CKD nondialysis, hien warning khong tu an kieng dam. |
| Gout + CKD | neu cho multi-condition | Can canh bao conflict, khong dua range don gian. |
| Pregnancy | pregnant | Hien needs clinician review neu chua co source local. |
| Obesity | BMI cao/weight cao | Goi y can ideal/adjusted weight, khong tu nhan actual weight neu chua duyet. |
| Invalid weight | <20, >200, blank | Validate va khong tinh am/NaN. |

### Edge cases

- Nhieu tinh huong dong thoi: CKD + gout, diabetes + CKD, elderly + CKD, pregnancy + CKD.
- Can nang thay doi do phu/co thai/beo phi/suy mon.
- Nguoi an chay co protein quality khac nhau.
- Nguoi cao tuoi an it, kho nhai/nuot, sarcopenia.
- Refeeding risk trong suy dinh duong nặng.

## 8. Candidate sources de doi chieu

- KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update, National Kidney Foundation: https://www.kidney.org/professionals/kdoqi/guidelines-and-commentaries/nutrition-ckd
- KDOQI/KDIGO diabetes in CKD commentary, for CKD + diabetes protein framing: https://pmc.ncbi.nlm.nih.gov/articles/PMC9740752/
- International Society of Sports Nutrition Position Stand: protein and exercise: https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8
- ESPEN practical guideline: Clinical Nutrition in cancer: https://www.espen.org/files/ESPEN-Guidelines/ESPEN-practical-guideline-clinical-nutrition-in-cancer.pdf
- ESPEN guideline on nutritional support for polymorbid medical inpatients: https://www.espen.org/files/ESPEN-Guidelines/ESPEN_guideline_on_nutritional_support_for_polymorbid_medical_in_patients.pdf
- DRI reference framework, ODPHP: https://odphp.health.gov/our-work/nutrition-physical-activity/dietary-guidelines/dietary-reference-intakes
- Pregnancy nutrition candidate reference, Mayo Clinic overview: https://www.mayoclinic.org/health/pregnancy-nutrition/PR00110

## 9. Ket luan spec

- Cong cu hien tai co logic don gian va de hieu, nhung dang tron nguoi khoe voi nhom can review lam sang.
- Van de code ro nhat: `activity` duoc nhap nhung khong dung; `amt` duoc tinh nhung khong hien.
- Van de an toan ro nhat: CKD/dialysis/gout/thai ky/suy dinh duong duoc dua vao chung mot cong cu voi range hardcode.
- Truoc khi sua code, can bac si/dinh duong vien duyet bang range, wording canh bao, va pham vi nhom benh duoc phep tinh.
