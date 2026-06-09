# Tool Formula Audit v1

Pham vi: audit source trong `src/pages/cong-cu/`, `src/components/`, `src/lib/`.

Muc tieu vong nay: ghi nhan cong thuc hien co va rui ro truoc khi sua code. Khong sua logic tinh toan.

## Tom tat

- Tong so cong cu trong `src/pages/cong-cu/`: 38, khong tinh `index.astro`.
- Nhom dang dung duoc that: 24 cong cu.
- Nhom can polish/lam ro UX, don vi, nguon du lieu: 9 cong cu.
- Nhom can kiem cong thuc/nguon lam sang truoc khi coi la khuyen nghi: 17 cong cu.
- Nhom stub/ban nhap da duoc index gan nhan: 5 cong cu.
- Cong cu lien quan benh ly ro rang: 11 cong cu, nen uu tien review boi bac si/dinh duong vien.

## Bang tong quan 38 cong cu

| # | Slug | Ten cong cu | File chinh | Tinh trang | Input chinh | Output chinh | Cong thuc/logic hien co | Dung du lieu thuc pham | Lien quan benh ly | Rui ro |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | `bang-xep-hang` | Bang xep hang thuc pham | `src/pages/cong-cu/bang-xep-hang.astro` | dung duoc | nhom dinh duong, filter | top thuc pham theo nutrient | sort theo nutrient trong `/api-foods.json`, co exclude mot so nhom | co | khong truc tiep | low |
| 2 | `bmi` | BMI va vong eo | `src/pages/cong-cu/bmi.astro` | dung duoc | can nang, chieu cao, vong eo | BMI, phan loai, nguy co | BMI = kg / m2; nguong chau A: 18.5, 23, 25, 30 | khong | co lien quan beo phi/metabolic | medium |
| 3 | `checklist-an-uong` | Checklist an uong | `src/pages/cong-cu/checklist-an-uong.astro` | dung duoc nhe | checkbox thoi quen | diem/checklist | dem muc da chon, goi y van ban | khong | khong truc tiep | low |
| 4 | `chi-so-gi` | Chi so GI | `src/pages/cong-cu/chi-so-gi.astro` | dung duoc, can nguon | tim thuc pham | GI, GL, thay the | static GI/GL table; GL phan loai <=10, 11-19, >=20 | du lieu hardcode | dai thao duong | high |
| 5 | `danh-gia-bua-an` | Danh gia bua an | `src/pages/cong-cu/danh-gia-bua-an.astro` | stub/ban nhap | chua ro | chua ro | can hoan thien | chua ro | co the co | medium |
| 6 | `danh-sach-di-cho` | Danh sach di cho | `src/pages/cong-cu/danh-sach-di-cho.astro` | dung duoc | mon/ke hoach | shopping list | gom nguyen lieu theo plan/recipe | co | khong truc tiep | low |
| 7 | `dia-an-lanh-manh` | Dia an lanh manh | `src/pages/cong-cu/dia-an-lanh-manh.astro` | dung duoc, can polish | profile/benh can quan tam | ty le dia an, goi y | ty le dia an static; text theo benh | khong | tieu duong, THA, CKD, gout... | high |
| 8 | `dinh-duong-thai-ky` | Dinh duong thai ky | `src/pages/cong-cu/dinh-duong-thai-ky.astro` | dung duoc, can nguon | tuoi thai/profile | nhu cau, canh bao | bang nguong va text static | khong/it | thai ky | high |
| 9 | `doi-don-vi` | Doi don vi | `src/pages/cong-cu/doi-don-vi.astro` | dung duoc | don vi, so luong | gia tri quy doi | quy doi don vi do luong | khong | khong | low |
| 10 | `duong-do-uong` | Duong trong do uong | `src/pages/cong-cu/duong-do-uong.astro` | dung duoc | loai do uong, the tich | duong/kcal uoc tinh | static sugar per serving/volume | hardcode | tieu duong/beo phi | medium |
| 11 | `ke-hoach-bua-an` | Ke hoach bua an | `src/pages/cong-cu/ke-hoach-bua-an.astro` | dung duoc | profile, muc tieu | goi y bua an | chon/phan bo meal plan theo rule | co | co the co | medium |
| 12 | `khau-phan-don-gian` | Khau phan don gian | `src/pages/cong-cu/khau-phan-don-gian.astro` | dung duoc | nhom thuc pham/phan an | uoc tinh khau phan | quy doi khau phan bang ban tay/dia | co the hardcode | khong truc tiep | medium |
| 13 | `khau-phan-viet-clinical` | Khau Phan Viet Clinical | `src/pages/cong-cu/khau-phan-viet-clinical.astro` | dung duoc nhung can review lon | ho so, benh nen, mon/khau phan | tong kcal/macro/Na/duong, canh bao | Mifflin-St Jeor BMR, TDEE, macro target, disease adjustment, sum dish data | hardcode trong file | nhieu benh ly | high |
| 14 | `lap-thuc-don-tuan` | Lap thuc don tuan | `src/pages/cong-cu/lap-thuc-don-tuan.astro` | dung duoc | muc tieu/recipe pool | week plan, average macro | `calculateRecipe`, heuristic chon mon | co | khong truc tiep | medium |
| 15 | `loc-thuc-pham` | Loc thuc pham | `src/pages/cong-cu/loc-thuc-pham.astro` | dung duoc | filter nutrient/tag | danh sach thuc pham | filter/sort data API | co | co the theo benh | medium |
| 16 | `muc-tieu-can-nang` | Muc tieu can nang | `src/pages/cong-cu/muc-tieu-can-nang.astro` | dung duoc, can nguon | can nang, chieu cao, muc tieu | calo, thoi gian | BMR/TDEE/deficit heuristic | khong | beo phi/thieu can | medium |
| 17 | `muc-tieu-dinh-duong` | Muc tieu dinh duong | `src/pages/cong-cu/muc-tieu-dinh-duong.astro` | stub/ban nhap | chua ro | chua ro | can hoan thien | chua ro | co the co | medium |
| 18 | `nhat-ky` | Nhat ky an uong | `src/pages/cong-cu/nhat-ky.astro` | dung duoc | profile, food/recipe, gram | tong ngay, macro, goi y | BMR/TDEE; sum food ratio gram/100; macro kcal 4/9/4 | co | co the co | medium |
| 19 | `nhu-cau-dinh-duong-tre-em` | Nhu cau dinh duong tre em | `src/pages/cong-cu/nhu-cau-dinh-duong-tre-em.astro` | dung duoc, can nguon | tuoi, gioi, can nang | kcal/kg, protein, vi chat | bang nhu cau static theo tuoi | khong | tre em | high |
| 20 | `nuoc-muoi-mon-an` | Nuoc/muoi mon an | `src/pages/cong-cu/nuoc-muoi-mon-an.astro` | dung duoc, can polish | mon/khau phan | natri/muoi uoc tinh | static sodium/salt estimate | hardcode | THA/CKD/HF | high |
| 21 | `nuoc-uong` | Tinh nuoc uong | `src/pages/cong-cu/nuoc-uong.astro` | dung duoc, can nguon | can nang, hoat dong, thoi tiet, cho con bu | lit/ngay, ly/ngay | 33 ml/kg; nhan activity/weather; +0.7 L breastfeeding; food water 20% | khong | CKD/HF/xo gan can than trong | medium |
| 22 | `so-sanh` | So sanh | `src/pages/cong-cu/so-sanh.astro` | stub/ban nhap | chua ro | chua ro | can hoan thien | chua ro | khong ro | medium |
| 23 | `so-sanh-bua-an` | So sanh bua an | `src/pages/cong-cu/so-sanh-bua-an.astro` | dung duoc | bua an A/B | so sanh macro | cong tong nutrient theo mon | co | co the co | medium |
| 24 | `so-sanh-thuc-pham` | So sanh thuc pham | `src/pages/cong-cu/so-sanh-thuc-pham.astro` | dung duoc | food A/B | nutrient diff | compare API nutrients/100g | co | khong truc tiep | low |
| 25 | `them-thuc-pham-dong-goi` | Them thuc pham dong goi | `src/pages/cong-cu/them-thuc-pham-dong-goi.astro` | dung duoc | nhan hang/serving | nutrient/100g va preview | quy doi serving sang 100g | user input | khong truc tiep | medium |
| 26 | `theo-doi-duong-huyet` | Theo doi duong huyet | `src/pages/cong-cu/theo-doi-duong-huyet.astro` | dung duoc, can nguon | glucose, thoi diem | phan loai, trend | nguong glucose static theo thoi diem | khong | dai thao duong | high |
| 27 | `theo-doi-suc-khoe` | Theo doi suc khoe | `src/pages/cong-cu/theo-doi-suc-khoe.astro` | dung duoc, can nguon | can nang/huyet ap/duong huyet | trend/canh bao | nguong va trend heuristic | khong | nhieu chi so suc khoe | high |
| 28 | `ti-le-mo-co-the` | Ti le mo co the | `src/pages/cong-cu/ti-le-mo-co-the.astro` | dung duoc | gioi, chieu cao, eo, co/hong | body fat estimate | US Navy body fat formula, WHR | khong | beo phi | medium |
| 29 | `tim-mon-tu-nguyen-lieu` | Tim mon tu nguyen lieu | `src/pages/cong-cu/tim-mon-tu-nguyen-lieu.astro` | dung duoc | nguyen lieu | recipe suggestions | match ingredient text/tag | co | khong truc tiep | low |
| 30 | `tinh-calo-tieu-thu` | Tinh calo tieu thu | `src/pages/cong-cu/tinh-calo-tieu-thu.astro` | dung duoc | can nang, hoat dong, thoi gian | kcal dot | MET x kg x gio | khong | khong truc tiep | medium |
| 31 | `tinh-carb` | Tinh carb trong bua an | `src/pages/cong-cu/tinh-carb.astro` | dung duoc, can nguon | food, khau phan | tong carb, goi y carb | carb/100g hardcode x gram/100; muc tieu 45-60g/bua | hardcode | dai thao duong | high |
| 32 | `tinh-gl-bua-an` | Tinh GL bua an | `src/pages/cong-cu/tinh-gl-bua-an.astro` | dung duoc, can review | food, multiplier | tong GL, tong carb uoc tinh | GL hardcode x multiplier; carb inferred = GL*100/GI | hardcode | dai thao duong | high |
| 33 | `tinh-macro` | Tinh macro | `src/pages/cong-cu/tinh-macro.astro` | stub/ban nhap | chua ro | chua ro | can hoan thien | chua ro | khong ro | medium |
| 34 | `tinh-nang-luong` | Tinh nang luong | `src/pages/cong-cu/tinh-nang-luong.astro` | stub/ban nhap | chua ro | chua ro | can hoan thien | chua ro | khong ro | medium |
| 35 | `tinh-nhu-cau-dam` | Tinh nhu cau dam | `src/pages/cong-cu/tinh-nhu-cau-dam.astro` | dung duoc, can review | can nang, muc tieu/benh, hoat dong | g protein/ngay, chia bua | range g/kg theo condition x weight; chia 25/10/30/10/25 | hardcode food examples | CKD, gout, thai ky, benh | high |
| 36 | `tra-cuu-thuc-pham-viet` | Tra cuu thuc pham Viet | `src/pages/cong-cu/tra-cuu-thuc-pham-viet.astro` | dung duoc | search, code, gram | nutrient theo gram | `calculateByWeight`: nutrient/100g x grams/100 | co, Vietnam data | khong truc tiep | medium |
| 37 | `tuong-tac-thuoc` | Tuong tac thuoc | `src/pages/cong-cu/tuong-tac-thuoc.astro` | dung duoc, can nguon | thuoc/search | canh bao tuong tac | static interaction knowledge base | khong | duoc/benh | high |
| 38 | `tuong-tac-thuoc-thuc-pham` | Tuong tac thuoc-thuc pham | `src/pages/cong-cu/tuong-tac-thuoc-thuc-pham.astro` | dung duoc, can nguon | thuoc/nhom thuc pham | canh bao hanh dong | static interaction rules | khong | duoc/benh | high |

## Nhom cong cu

### Dung duoc that

`bang-xep-hang`, `bmi`, `checklist-an-uong`, `danh-sach-di-cho`, `doi-don-vi`, `ke-hoach-bua-an`, `khau-phan-don-gian`, `lap-thuc-don-tuan`, `loc-thuc-pham`, `muc-tieu-can-nang`, `nhat-ky`, `so-sanh-bua-an`, `so-sanh-thuc-pham`, `them-thuc-pham-dong-goi`, `ti-le-mo-co-the`, `tim-mon-tu-nguyen-lieu`, `tinh-calo-tieu-thu`, `tra-cuu-thuc-pham-viet`.

### Can polish

`duong-do-uong`, `khau-phan-don-gian`, `ke-hoach-bua-an`, `lap-thuc-don-tuan`, `muc-tieu-can-nang`, `nhat-ky`, `nuoc-uong`, `so-sanh-bua-an`, `them-thuc-pham-dong-goi`.

### Can kiem cong thuc/nguon

`bmi`, `chi-so-gi`, `dia-an-lanh-manh`, `dinh-duong-thai-ky`, `duong-do-uong`, `khau-phan-viet-clinical`, `muc-tieu-can-nang`, `nhu-cau-dinh-duong-tre-em`, `nuoc-muoi-mon-an`, `nuoc-uong`, `theo-doi-duong-huyet`, `theo-doi-suc-khoe`, `ti-le-mo-co-the`, `tinh-carb`, `tinh-gl-bua-an`, `tinh-nhu-cau-dam`, `tuong-tac-thuoc`, `tuong-tac-thuoc-thuc-pham`.

### Stub/ban nhap

`danh-gia-bua-an`, `muc-tieu-dinh-duong`, `so-sanh`, `tinh-macro`, `tinh-nang-luong`.

## Audit chi tiet 5 cong cu uu tien

### 1. `tinh-carb`

| Hang muc | Ghi nhan |
|---|---|
| File | `src/pages/cong-cu/tinh-carb.astro` |
| Cong thuc hien tai | `carb = round(carb100 * portionG / 100)`; tong carb la tong cac mon da chon; progress dua tren moc 60g. |
| Gia dinh | Du lieu carb/100g trong danh sach static dai dien du cho thuc pham Viet; khau phan nguoi dung chon la gram thuc te; carb tong phu hop de giao duc nguoi co dai thao duong. |
| Don vi | gram carb moi khau phan; gram carb moi bua. |
| Edge cases | Du lieu hardcode khong co source; khong tach carb tong/net carb/fiber; khong co insulin-carb ratio; progress cap 100% nen an rat cao carb khong phan biet ro; khong ca nhan hoa theo BMI, HbA1c, thuoc, CKD, thai ky. |
| Nguy co sai | High neu dung nhu khuyen nghi dieu tri; medium neu chi la cong cu giao duc dem carb. |
| Nguon/guideline can doi chieu | ADA Standards of Care ve medical nutrition therapy va carbohydrate counting; huong dan dinh duong dai thao duong Viet Nam neu co; bang thanh phan thuc pham Viet Nam cho carb/100g. |
| De xuat | `needs clinical source`: giu logic tinh gram carb don gian, nhung can source cho database carb va wording 45-60g/bua, them disclaimer ca nhan hoa. |

### 2. `tinh-gl-bua-an`

| Hang muc | Ghi nhan |
|---|---|
| File | `src/pages/cong-cu/tinh-gl-bua-an.astro` |
| Cong thuc hien tai | GL moi mon la gia tri hardcode theo portion; khi them nhieu lan: `totalGL = sum(food.gl * multiplier)`; carb uoc tinh nguoc: `round(food.gl * 100 / food.gi * multiplier)`. |
| Gia dinh | GI/GL theo mon/khau phan static phu hop voi nguoi Viet; GL co the cong tuyen tinh theo khau phan; tong GL bua an co the dung muc <20 cho bua chinh, <10 cho snack. |
| Don vi | GL khong don vi; carb gram uoc tinh. |
| Edge cases | Carb suy nguoc tu GL va GI da lam tron; GI thay doi theo cach nau, nhiet do, chat beo/dam/xo; khong co source cho tung item; khong co GI=0 guard nhung dataset hien tai khong thay GI 0; wording "an toan" voi duong huyet co the qua manh. |
| Nguy co sai | High do lien quan truc tiep dai thao duong va glycemic response. |
| Nguon/guideline can doi chieu | International tables of glycemic index/load; ADA/EASD dinh duong dai thao duong; nguon GI thuc pham Viet neu co. |
| De xuat | `major review`: nen luu carb va GI rieng, tinh GL = GI x available carb / 100, them source/uncertainty theo mon va doi wording thanh "uoc tinh". |

### 3. `tinh-nhu-cau-dam`

| Hang muc | Ghi nhan |
|---|---|
| File | `src/pages/cong-cu/tinh-nhu-cau-dam.astro` |
| Cong thuc hien tai | Bang range g/kg theo condition; `proteinLow = round(weight * gLow)`, `proteinHigh = round(weight * gHigh)`, `proteinMid = round(weight * midpoint)`; chia bua 25%-10%-30%-10%-25%. |
| Gia dinh | Can nang hien tai la can nang nen dung cho tinh g/kg; cac range g/kg dung cho normal, elderly, weight-loss, muscle, pregnancy, sick, CKD G3/G4, dialysis, gout, vegan. |
| Don vi | gram protein/ngay va gram protein/bua. |
| Edge cases | Input "hoat dong" co trong UI nhung khong duoc dung trong cong thuc; CKD can eGFR, albuminuria, dialysis, malnutrition va khuyen nghi bac si; thai ky/cho con bu co the can add-on gram/ngay chu khong chi g/kg; suy benh/post-op range qua rong; can nang beo phi co the can ideal/adjusted body weight. |
| Nguy co sai | High do co CKD, dialysis, thai ky, gout va benh cap/man. |
| Nguon/guideline can doi chieu | KDOQI/KDIGO cho CKD protein; ESPEN/ASPEN cho benh nhan suy dinh duong/benh cap; khuyen nghi thai ky/cho con bu; RDA/DRI protein nguoi lon. |
| De xuat | `needs clinical source`: uu tien sua dau tien, it nhat bo/lam ro input hoat dong, tach CKD/dialysis thanh canh bao can bac si, them ideal/adjusted weight option neu dung cho obesity. |

### 4. `nuoc-uong`

| Hang muc | Ghi nhan |
|---|---|
| File | `src/pages/cong-cu/nuoc-uong.astro` |
| Cong thuc hien tai | `base = weight * 0.033` lit/ngay; `adjusted = base * activity * weather + breastfeedingExtra`; `cups = round(adjusted / 0.2)`; `foodWater = adjusted * 0.2`. |
| Gia dinh | 33 ml/kg/ngay la base phu hop cho nguoi lon khoe manh; activity/weather co the nhan tuyen tinh; cho con bu cong 0.7 L/ngay; 20% nuoc den tu thuc an. |
| Don vi | lit/ngay va ly 200 ml. |
| Edge cases | Suy tim, CKD, xo gan, phu, ha natri mau khong duoc tinh; activity/weather multiplier chua co source; khong phan biet total water intake voi drinking water; ket qua cuc doan theo can nang 300kg co the qua cao. |
| Nguy co sai | Medium voi nguoi khoe; high neu nguoi co han che dich. |
| Nguon/guideline can doi chieu | IOM/EFSA water intake; guideline san khoa/cho con bu; guideline CKD/HF/cirrhosis ve fluid restriction. |
| De xuat | `minor fix` cho UI/nguon neu chi dung cho nguoi khoe; `needs clinical source` neu van hien canh bao benh ly. Nen them gate "khong ap dung neu bac si han che dich". |

### 5. `khau-phan-viet-clinical`

| Hang muc | Ghi nhan |
|---|---|
| File | `src/pages/cong-cu/khau-phan-viet-clinical.astro` |
| Cong thuc hien tai | Dish data hardcode theo khau phan; BMR Mifflin-St Jeor: nam `10w + 6.25h - 5age + 5`, nu `10w + 6.25h - 5age - 161`; TDEE = BMR x activity; target protein default `weight * 1.0`; fat = 25% kcal / 9; carb = kcal con lai / 4; sodium 2300mg; sugar 25g; disease adjustment doi kcal/protein/sodium/sugar/fiber; actual intake = sum dish nutrient x qty. |
| Gia dinh | Du lieu mon an Viet theo khau phan hardcode du dai dien; Mifflin-St Jeor phu hop cho tat ca profile; cac benh co the chong cheo bang cach nhan/ghi de target; sodium/sugar/protein target ap dung duoc cho nhieu benh. |
| Don vi | kcal, gram protein/fat/carb/fiber/sugar, mg sodium, theo ngay/bua tu danh sach mon. |
| Edge cases | Nhieu benh dong thoi co the override target protein/sodium khong co conflict resolver; CKD/gout/COPD/ung thu/gan nhiem mo can source rieng; sodium mon hardcode phu thuoc cach nem; purin chi la 0/1; typo trong data `Lau Thai (tóm)`; food data khong ke thua pipeline metadata/chat luong nguon hien tai. |
| Nguy co sai | High, vi ten "Clinical" va warning benh ly co the duoc hieu nhu tu van dieu tri. |
| Nguon/guideline can doi chieu | Mifflin-St Jeor validation; Vietnamese food composition/recipe source; ADA, KDIGO/KDOQI, AHA/WHO sodium, ESPEN oncology/COPD, gout guideline, NAFLD guidance. |
| De xuat | `major review`: doi ten/wording neu chua co nguon; tach dataset mon ra source rieng co metadata; them rule conflict; bat buoc bac si/dinh duong vien duyet disease profiles truoc khi nang cap. |

## Thu tu nen sua

1. `tinh-nhu-cau-dam`: rui ro cao, co CKD/dialysis/thai ky/gout; co bug UX ro la input hoat dong khong duoc dung.
2. `khau-phan-viet-clinical`: cong cu co chu "Clinical", nhieu disease adjustment, can tach data va review nguon truoc khi mo rong.
3. `tinh-gl-bua-an`: can tinh GL tu GI va available carb thay vi dung GL hardcode/suy nguoc carb; can source tung item.
4. `tinh-carb`: nen dong bo voi food data pipeline va them source/uncertainty cho carb/khau phan.
5. `theo-doi-duong-huyet`: can doi chieu nguong glucose, wording va khuyen nghi hanh dong.
6. `nuoc-muoi-mon-an`: can nguon sodium/muoi va cach quy doi muoi-natri.
7. `nuoc-uong`: lam ro total water vs drinking water, them exclusion cho han che dich.
8. `nhu-cau-dinh-duong-tre-em` va `dinh-duong-thai-ky`: can guideline theo tuoi/tuoi thai va can than voi khuyen nghi lâm sàng.
9. `tuong-tac-thuoc` va `tuong-tac-thuoc-thuc-pham`: can source duoc hoc, severity, va ngay cap nhat.

## Nguon can bac si cung cap hoac can tim them

- Guideline protein cho CKD, dialysis, nguoi cao tuoi, gout, thai ky/cho con bu, benh cap/suy dinh duong.
- Nguon carb/GI/GL uu tien cho thuc pham Viet; neu khong co, dung international GI tables va gan uncertainty.
- Bang thanh phan thuc pham Viet Nam/nguon recipe cho mon Viet theo 100g thanh pham va theo khau phan.
- Nguong glucose theo thoi diem do, muc tieu ca nhan hoa theo tuoi/benh dong mac.
- Khuyen nghi nuoc uong cho nguoi khoe manh va exclusion cho CKD/HF/xo gan/ha natri mau.
- Nguon sodium/salt cho mon Viet va quy doi natri-muoi.
- Nguon drug-food interaction co severity va action ro rang.

## Ghi chu kiem soat thay doi

- Vong nay khong sua cong thuc.
- Vong nay khong sua du lieu dinh duong.
- Report nay la tai lieu audit ban dau, can doi chieu nguon truoc khi thay doi logic tinh toan.
