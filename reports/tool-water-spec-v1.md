# Tool Water Intake Spec v1

Branch: `tool-water-spec-v1`

Scope: audit va tao dac ta/source-lock cho cong cu `/cong-cu/nuoc-uong/` truoc khi sua code. Vong nay khong sua logic, khong sua UI chinh, khong sua du lieu dinh duong, khong sua `dist` thu cong.

## 1. Hien Trang Cong Cu

File hien tai: `src/pages/cong-cu/nuoc-uong.astro`

### Input hien tai

| Input | Kieu | Dang duoc dung? | Ghi nhan |
| --- | --- | --- | --- |
| Can nang | number, 10-300 kg | yes | Bat buoc, default 65 kg |
| Muc van dong | select multiplier `1.0`, `1.2`, `1.4` | yes | Nhan truc tiep vao ket qua |
| Thoi tiet | select multiplier `1.0`, `1.1`, `1.2` | yes | Nhan truc tiep vao ket qua |
| Cho con bu | select add-on `0` hoac `0.7 L` | yes | Cong them 700 ml/ngay |

Chua co input cho: suy tim, CKD, loc mau, xo gan/co truong, phu, ha natri mau, loi tieu, han che dich, thai ky, tre em, nguoi rat cao tuoi, sot, tieu chay, non.

### Output hien tai

| Output | Cong thuc/logic |
| --- | --- |
| Nhu cau nuoc co ban | `base = weight * 0.033` lit/ngay |
| Nhu cau dieu chinh | `adjusted = base * activity * weather + breastfeedingExtra` |
| Ly 200 ml | `round(adjusted / 0.2)` |
| Nuoc tu an uong | `adjusted * 0.2`, hien la "thuc an ~20%" |
| Bang tham khao nhanh | Bang static theo can nang/van dong |

### Cong thuc hien tai

```text
base = weightKg * 0.033 L/day
adjusted = base * activityMultiplier * weatherMultiplier + breastfeedingExtraLiters
cups200ml = round(adjusted / 0.2)
fromFood = adjusted * 0.2
```

Audit truoc do ghi nhan cung cong thuc nay trong `reports/tool-formula-audit-v1.md`.

### Canh bao hien tai

Co canh bao ngan:

- Nguoi suy than, suy tim, xo gan co the bi han che nuoc.
- Ra mo hoi nhieu, sot, tieu chay, non co the lam nhu cau tang.

Chua co:

- Gate lam sang de khong auto-calc cho suy tim/CKD/loc mau/xo gan/phu/ha natri/hạn che dich.
- Checkbox "dang duoc bac si dan han che dich".
- Canh bao rieng cho loi tieu.
- Canh bao khong dung cho cap cuu mat nuoc.
- Tach ro "total water intake" voi "drinking water".

### Wording co nguy co

- Lead hien tai noi cong thuc giup "biet can uong bao nhieu nuoc moi ngay". Nen doi thanh "uoc tinh ban dau" khi implement.
- Bang ket qua hien "Nhu cau nuoc dieu chinh" co the bi hieu nhu muc bat buoc.
- Goi y mau nuoc tieu "vang nhat = du nuoc; vang dam = thieu nuoc" qua gon, khong ap dung tot cho nguoi dung loi tieu, vitamin, benh gan than, mat nuoc cap, hoac nhieu benh ly.
- Chua thay wording "uong cang nhieu cang tot" trong `nuoc-uong`.

### Lien quan gout/soi than

Trong file `nuoc-uong.astro` khong co loi khuyen rieng cho gout/soi than. Tuy nhien mot so cong cu khac trong repo co wording "uong nhieu nuoc" cho gout/allopurinol. Khi implement `nuoc-uong`, neu them profile gout/soi than thi bat buoc loai tru suy tim, CKD, xo gan, phu, ha natri mau va han che dich truoc.

## 2. Muc Tieu Cong Cu Moi

- Uoc tinh nhu cau nuoc/ngay cho nguoi truong thanh tuong doi khoe manh.
- Dung cho giao duc suc khoe va tu theo doi co ban.
- Khong thay the tu van y khoa/dinh duong ca the.
- Khong ap dung cho nguoi dang duoc bac si dan han che dich hoac co benh ly can ca the hoa.
- Khong dung de xu tri cap cuu mat nuoc, non oi, tieu chay nang, sot cao, roi loan tri giac, phu kho tho, ha natri mau hoac qua tai dich.

## 3. Input De Xuat

### Input tinh toan chinh

| Input | De xuat |
| --- | --- |
| Can nang | Bat buoc; gioi han hop ly vi du 25-200 kg cho nguoi lon, can canh bao ngoai khoang |
| Muc van dong | `low`, `moderate`, `high` |
| Thoi tiet/ra mo hoi | `normal`, `hot`, `heavy_sweat` |
| Thai ky/cho con bu | Tach rieng `pregnancy`, `lactation`; v1 nen caution, khong goi la muc bat buoc |

### Gate an toan bat buoc

Them nhom checkbox/radio "Co tinh huong nao sau day khong?":

- Suy tim.
- Benh than man.
- Dang loc mau.
- Xo gan/co truong.
- Phu.
- Ha natri mau hoac tung duoc bao natri mau thap.
- Dang dung loi tieu.
- Dang duoc dan han che dich.
- Tre em.
- Nguoi rat cao tuoi/yeu.
- Sot cao, tieu chay, non nhieu, mat nuoc cap.

Neu chon bat ky muc nguy co cao nao, engine khong nen auto-calc nhu nguoi khoe. Ket qua nen chuyen sang `clinical_no_auto` hoac `caution` tuy muc.

## 4. Output De Xuat

| Output | Ghi chu |
| --- | --- |
| Khoang total water intake uoc tinh/ngay | Nen hien thanh khoang, khong phai mot so duy nhat |
| Nuoc uong rieng uoc tinh | Neu hien, ghi ro total water bao gom do uong va nuoc trong thuc an |
| Ly 200 ml | Chi la quy doi de de hinh dung |
| Note ve thuc an | "Khoang 20% total water co the den tu thuc an" neu dung theo NASEM/IOM |
| Canh bao ca the hoa | Hien ro khi co benh ly, loi tieu, han che dich, thai ky/cho con bu |
| Theo doi khat/mau nuoc tieu | Chi la tham khao cho nguoi khoe, khong ap dung cho tat ca benh ly |

Khong nen hien "dat chuan", "bat buoc uong X lit", "uong cang nhieu cang tot".

## 5. Source-Lock V1

Nguon nen doi chieu:

- National Academies/NASEM, Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate: total water AI adult men 3.7 L/day, adult women 2.7 L/day, includes drinking water, beverages and food moisture; food moisture around 20% of total water intake. [NASEM DRI water](https://www.nationalacademies.org/read/10925/chapter/6)
- EFSA Scientific Opinion on Dietary Reference Values for water: adult AI 2.5 L/day men, 2.0 L/day women; applies to moderate environmental temperature and moderate physical activity, includes water from beverages and food moisture. [EFSA water DRV](https://www.efsa.europa.eu/en/efsajournal/pub/1459)
- National Kidney Foundation: kidney failure/dialysis patients may need individualized fluid management; excess fluid buildup is clinically important. [NKF hemodialysis](https://www.kidney.org/kidney-topics/hemodialysis), [NKF water](https://www.kidney.org/subject/water)
- American Heart Association: heart failure can involve fluid retention and needs management with the health care team. [AHA heart failure](https://www.heart.org/en/health-topics/heart-failure)

| Nhom doi tuong | Cong thuc/khoang tham khao | Dieu kien ap dung | Khong ap dung khi nao | Nguon can doi chieu | Mode | Wording an toan |
| --- | --- | --- | --- | --- | --- | --- |
| Nguoi lon tuong doi khoe manh | V1 co the dung khoang `30-35 ml/kg/ngay` nhu heuristic thuc hanh, nhung can ghi `needs_source` neu chua khoa nguon guideline truc tiep; cross-check voi AI total water NASEM/EFSA de tranh qua thap/qua cao | Nguoi lon, khong han che dich, khong benh cap, khong CKD/HF/xo gan/phu/ha natri | Benh ly can han che dich, can nang ngoai khoang, tre em, thai ky/cho con bu neu chua source-lock rieng | NASEM/EFSA cho total water AI; can nguon lam sang cho ml/kg | `auto` neu source-lock duoc duyet, hien khoang | "Uoc tinh ban dau cho nguoi truong thanh tuong doi khoe manh." |
| Hoat dong nhieu/nong | Dieu chinh nhe, vi du cong/caution theo ra mo hoi; khong nhan multiplier qua manh neu chua source | Nguoi khoe, van dong/ra mo hoi, khong han che dich | Suy tim, CKD, loc mau, xo gan, phu, ha natri, dang dung loi tieu, mat nuoc nang | AHA hydration general; can source exercise hydration neu muon tinh chi tiet | `caution` | "Nhu cau co the tang khi nong/ra mo hoi, nhung khong nen uong qua muc." |
| Cho con bu | Co the hien add-on tham khao, nhung can lock nguon; NASEM AI lactation 3.8 L/day total water co the dung doi chieu | Nguoi cho con bu khong benh ly/khong han che dich | Tien san giat, benh than/tim/gan, phu, han che dich | NASEM DRI lactation; can nguon san khoa neu implement | `caution` | "Nhu cau co the tang khi cho con bu; hay ca the hoa neu co benh ly." |
| Thai ky | NASEM AI pregnancy 3.0 L/day total water co the lam doi chieu, khong auto theo ml/kg neu chua duyet | Thai ky khong bien chung | Tien san giat, phu nhieu, benh than/tim/gan, non nghe, han che dich | NASEM DRI pregnancy; guideline san khoa | `caution` hoac `clinical_no_auto` | "Thai ky can ca the hoa, dac biet neu phu, tang huyet ap, non nhieu." |
| Nguoi rat cao tuoi/yeu | Khong dua muc cung; co the hien note ve nguy co khat giam/mat nuoc va can theo doi | Nguoi cao tuoi khoe, khong benh ly han che dich | Suy tim, CKD, loi tieu, ha natri, phu, giam nhan thuc | NASEM/EFSA elderly total water; can geriatric source | `caution` | "Dau hieu khat co the kem tin cay; can theo doi theo ho so suc khoe." |
| Tre em | Khong dung cong thuc nguoi lon | Moi tre em | Tat ca tre em trong cong cu nguoi lon | Can guideline nhi khoa theo tuoi/can nang | `clinical_no_auto` | "Cong cu nay khong ap dung cho tre em." |
| Suy tim | Khong auto-calc; can hoi bac si ve han che dich/duong lieu phap | Bat ky suy tim/giu dich | Khong ap dung cong thuc nguoi khoe | AHA/ACC/HFSA; bac si tim mach | `clinical_no_auto` | "Suy tim co the giu dich; khong tu tang nuoc." |
| CKD chua loc mau | Khong auto-calc neu CKD tien trien/phu/ha natri/loi tieu; neu CKD nhe can ca the hoa | CKD bat ky stage neu khong ro chi dinh dich | Khong ap dung cong thuc nguoi khoe | NKF/KDIGO/KDOQI; bac si than | `clinical_no_auto` | "Benh than can ca the hoa theo eGFR, nuoc tieu, phu, natri va thuoc." |
| Dang loc mau | Khong auto-calc; dich phu thuoc nuoc tieu con lai, tang can giua ky loc, chi dinh don vi loc mau | Hemodialysis/peritoneal dialysis | Khong ap dung cong thuc nguoi khoe | NKF dialysis/fluid management | `clinical_no_auto` | "Loc mau can gioi han dich rieng; hay theo chi dinh don vi loc mau." |
| Xo gan/co truong | Khong auto-calc; phu/co truong/ha natri can chi dinh rieng | Xo gan, co truong, phu | Khong ap dung cong thuc nguoi khoe | Hepatology guideline can doi chieu | `clinical_no_auto` | "Xo gan/co truong co the can han che dich/muoi; khong tu tang nuoc." |
| Phu/giu dich | Khong auto-calc | Phu chan, tang can nhanh, kho tho, co truong | Khong ap dung cong thuc nguoi khoe | Nguon theo benh nen | `clinical_no_auto` | "Phu co the la qua tai dich; can danh gia y khoa." |
| Ha natri mau | Khong auto-calc | Hien tai/tien su natri mau thap | Khong ap dung cong thuc nguoi khoe | Endocrine/nephrology source can doi chieu | `clinical_no_auto` | "Ha natri mau co the nang len khi uong qua nhieu nuoc." |
| Dang dung loi tieu | Khong auto-calc manh; can caution vi nguy co mat nuoc/dien giai hoac han che dich tuy benh | Loi tieu cho HA, suy tim, phu | Suy tim/CKD/xo gan/phu/ha natri | Bac si dieu tri/duoc hoc | `caution` hoac `clinical_no_auto` | "Thuoc loi tieu lam thay doi can bang dich va dien giai." |
| Sot, tieu chay, non nhieu, mat nuoc cap | Khong dung cong cu tu phuc vu | Benh cap | Roi loan tri giac, khong uong duoc, mat nuoc nang, tre em/nguoi gia | Guideline cap cuu/ORS can doi chieu | `clinical_no_auto` | "Khong dung cong cu nay de xu tri cap cuu mat nuoc." |

## 6. Engine De Xuat

Nen tao `src/lib/water-intake-calculator.ts`.

Kieu rule table toi thieu:

```ts
type WaterMode = "auto" | "caution" | "clinical_no_auto";

type WaterProfileRule = {
  profileId: string;
  label: string;
  mode: WaterMode;
  baseMlPerKgMin?: number;
  baseMlPerKgMax?: number;
  totalWaterAiLiters?: { female?: number; male?: number };
  adjustment?: "none" | "activity_heat_caution" | "lactation_caution";
  sourceLabel: string;
  safetyMessage: string;
  appliesTo: string;
  notFor: string;
  requiresClinicalReview: boolean;
};
```

Rule xu ly:

1. Neu co bat ky red-flag `clinical_no_auto`: khong tinh muc nuoc ca nhan, hien thong diep hoi bac si.
2. Neu nguoi lon tuong doi khoe: tinh khoang, khong mot con so duy nhat.
3. Neu nong/hoat dong nhieu: chi hien caution/adjustment nhe neu duoc duyet.
4. Neu thai ky/cho con bu/nguoi rat cao tuoi/loi tieu: caution, khong wording bat buoc.
5. Ket qua phai tach "total water" va "drinking water" neu hien ca hai.

## 7. Test Cases Can Co Khi Implement

| Case | Expected |
| --- | --- |
| Nguoi khoe can nang hop le | Ra khoang nuoc uoc tinh, mode `auto` |
| Can nang rong/0/am/qua cao | Loi than thien |
| Hoat dong nhieu/nong | Mode `caution`, khong wording cung |
| Suy tim | `clinical_no_auto`, khong ra khuyen nghi tu uong |
| CKD/loc mau | `clinical_no_auto` |
| Xo gan/co truong/phu/han che dich | `clinical_no_auto` |
| Ha natri mau | `clinical_no_auto` |
| Dang dung loi tieu | It nhat `caution`; `clinical_no_auto` neu kem suy tim/CKD/phu |
| Cho con bu | `caution`, add-on/AI chi la tham khao neu source duoc duyet |
| Tre em | `clinical_no_auto`, cong cu khong ap dung |
| Output text | Khong co "uong cang nhieu cang tot", "bat buoc uong X lit", "chua du thi uong them ngay" |

## 8. Ke Hoach Implement Sau Duyet

1. Tao `src/lib/water-intake-calculator.ts` voi rule table va mode `auto` / `caution` / `clinical_no_auto`.
2. Sua `src/pages/cong-cu/nuoc-uong.astro` de dung engine, bo multiplier hardcode rai rac.
3. Them nhom input red flags: suy tim, CKD, loc mau, xo gan/co truong, phu, ha natri, loi tieu, han che dich.
4. Doi output tu mot so lit/ngay sang khoang uoc tinh + badge mode.
5. Doi wording:
   - "uoc tinh ban dau" thay vi "can uong".
   - "total water intake" bao gom do uong va nuoc trong thuc an.
   - Khong dung mau nuoc tieu nhu ket luan cho moi nguoi.
6. Tao `scripts/test-water-intake.mjs` va them `test:water`.
7. Sau khi v1 on dinh, cap nhat `test:tools` gom protein + carb + GL + water.

## 9. Diem Can Bac Si/Dinh Duong Vien Duyet

- Co chap nhan `30-35 ml/kg/ngay` lam heuristic auto cho nguoi lon khoe manh khong, hay chuyen sang AI theo gioi tinh/tuoi tu NASEM/EFSA.
- Co nen tach `drinking water` va `total water` bang uoc tinh 80/20 khong.
- Xu ly cho con bu: dung add-on `+0.7 L` hay dung AI total water cho lactation.
- Thai ky nen `caution` hay `clinical_no_auto`.
- Nguoi rat cao tuoi/yeu va nguoi dung loi tieu nen cho range tham khao hay chi canh bao.
- Co can them profile gout/soi than khong; neu co, phai loai tru CKD/suy tim/xo gan/phu/han che dich truoc.
- Nguong can nang hop le cho nguoi lon Viet Nam va cach xu ly beo phi nang.

## 10. Ket Luan Spec

`nuoc-uong` hien la cong cu dung duoc cho nguoi khoe nhung chua du an toan cho nhom han che dich. Huong implement v1 nen uu tien safety gate va wording minh bach hon la co gang tinh that chi tiet. Neu chua duyet nguon cho multiplier hoat dong/thoi tiet, engine nen gan chung vao `caution` thay vi trinh bay nhu cong thuc chac chan.
