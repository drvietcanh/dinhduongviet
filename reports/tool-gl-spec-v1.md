# Glycemic Load Calculator Spec v1

Pham vi: `/cong-cu/tinh-gl-bua-an`.

Muc tieu vong nay: tao dac ta va source-lock truoc khi sua code. Khong sua logic tinh GL hien tai, khong sua du lieu carb/dinh duong, khong deploy.

## 1. Hien trang code

File chinh: `src/pages/cong-cu/tinh-gl-bua-an.astro`.

### Input hien tai

- Search text: `gl-search`.
- Filter GI category: `all`, `thap`, `trung-binh`, `cao`.
- Click vao item trong danh sach hardcode de them vao bua.
- Moi item trong bua co multiplier portion:
  - `0.5`
  - `1`
  - `1.5`
  - `2`
- Khong co input gram truc tiep.
- Khong co search alias co dau/khong dau nhu `tinh-carb`.
- Khong co matching voi food/recipe pipeline.

### Output hien tai

- Danh sach mon da chon.
- GI cua item trong list.
- GL hardcode cua item theo portion mac dinh.
- GL moi item sau khi nhan multiplier.
- Tong GL bua an.
- Tong carb uoc tinh.
- Rating thap/trung binh/cao theo tong GL.
- Progress bar theo `totalGL / 30`.

### Cong thuc hien tai

Trong inline script:

```text
itemGL = round(food.gl * multiplier)
totalGL = round(sum(food.gl * multiplier))
totalCarb = round(sum(food.gl * 100 / food.gi * multiplier))
```

Danh gia tong GL:

```text
totalGL <= 10 -> "Tot - GL thap, an toan"
totalGL <= 19 -> "Trung binh - can theo doi"
totalGL >= 20 -> "Cao - an xong nen do duong huyet va van dong nhe"
```

### Du lieu hien tai

Du lieu nam hardcode trong `src/pages/cong-cu/tinh-gl-bua-an.astro`:

```js
var foods = [
  { name, gi, gl, level, portion },
  ...
]
```

Comment trong page ghi: `GI data (subset from chi-so-gi tool)`.

Tool `src/pages/cong-cu/chi-so-gi.astro` cung co bang hardcode lon hon, ghi source chung la University of Sydney GI Database, Harvard, ADA, nhung tung item khong co:

- source id
- reference
- nam test
- serving weight normalized
- carb amount used to calculate GL
- match confidence
- mapping voi food slug trong app

### Co hardcode GI/GL khong?

Co.

- GI hardcode trong page GL.
- GL hardcode trong page GL.
- Portion label hardcode.
- Tool `chi-so-gi` cung hardcode GI/GL.

### Co suy nguoc carb tu GL khong?

Co.

```js
totalCarb += Math.round((m.food.gl * 100 / m.food.gi) * m.mult);
```

Day la cach suy nguoc carb tu GL da lam tron va GI hardcode. RUI RO: carb khong con dong bo voi `src/lib/carb-calculator.ts` va food pipeline.

### Co dung nen `carb-calculator` chua?

Chua.

Page GL khong import `src/lib/carb-calculator.ts`, khong dung `calculateCarbMeal`, khong lay carb tu `food.nutrients.carbG` hay `calculateRecipe(recipe)`.

### Canh bao hien tai

Co mot so note chung, nhung chua du an toan:

- Description hien tai noi "biet ngay bua nay co an toan cho duong huyet khong".
- Card GI/GL dung cac cum "an toan cho duong huyet", "duong huyet tang manh".
- Banner ghi "Muc tieu: Tong GL moi bua chinh nen <20".
- Tips co claim "an rau truoc tinh bot giam GL bua an toi 20%" nhung chua source-lock.
- Chua co canh bao ro:
  - khong tu chinh insulin/thuoc
  - insulin/sulfonylurea va nguy co ha duong huyet
  - thai ky/dai thao duong thai ky
  - tre em
  - CKD
  - nguoi benh nang
  - GL khong du doan chinh xac duong huyet ca nhan

### Rui ro hieu nham

High.

Nguoi dung co the hieu:

- GL la du doan chac chan duong huyet sau an.
- GL <20 la muc tieu bat buoc cho moi bua chinh.
- Bua GL thap la "an toan" cho moi nguoi dai thao duong.
- Ket qua co the duoc dung de tu chinh insulin/thuoc.

## 2. Muc tieu cong cu moi

Cong cu nen la education calculator:

- Uoc tinh glycemic load cua mon/bua an dua tren GI va carbohydrate cua khau phan.
- Giai thich moi quan he GI x carb x khau phan.
- Giup nguoi dung nhin mon nao dong gop GL nhieu.
- Ho tro trao doi voi bac si/dinh duong vien.
- Khong du doan chinh xac duong huyet sau an cua tung ca nhan.
- Khong dung de tu chinh insulin, sulfonylurea hoac thuoc ha duong huyet.

## 3. Input de xuat

Bat buoc:

- Chon thuc pham/mon an tu food/recipe data pipeline.
- Khai bao gram phan an duoc hoac khau phan co quy doi gram.
- Carb lay tu `src/lib/carb-calculator.ts` neu co the.
- GI lay tu bang GI noi bo co source/matching ro.

Nen co:

- Search co dau/khong dau va aliases nhu `tinh-carb`.
- Hien match quality GI:
  - `exact`
  - `close`
  - `generic`
  - `estimated`
  - `no_gi`
- Cho user thay GI source/match note nhe trong item.
- Neu item la recipe, carb van tinh tu recipe; GI chi tinh neu co mapping hop ly cho mon/nhom mon.

Khong dua vao v1:

- Khong bat nguoi dung tu nhap GI mac dinh.
- Khong tinh insulin dose.
- Khong nhap duong huyet truoc/sau an de tao khuyen nghi thuoc.
- Khong dung net carb/carb kha dung neu chua khoa duoc dinh nghia fiber/database.

## 4. Output de xuat

Chinh:

- Carb tung mon theo gram da nhap.
- GI dung cho tung mon.
- Match quality/source note cho GI tung mon.
- GL tung mon.
- Tong carb bua an.
- Tong GL bua an.
- Ty le dong gop GL tung mon.
- Warning neu thieu carb hoac thieu GI.

Dien giai:

- Co the phan loai GL tung mon/tham khao:
  - `<=10`: thap
  - `11-19`: trung binh
  - `>=20`: cao
- Wording nen la "theo phan loai giao duc" hoac "uoc tinh", khong ghi "an toan".
- Tong GL cua bua nen duoc trinh bay nhu chi so tham khao, khong phai muc tieu dieu tri chung.

Khong output:

- Khong tinh lieu insulin.
- Khong goi y tang/giam thuoc.
- Khong noi ket qua du doan chinh xac duong huyet sau an.
- Khong noi "dat chuan", "vuot chuan", "an toan" nhu ket luan lam sang.

## 5. Cong thuc de xuat

### GL tung mon

Cong thuc ly tuong:

```text
itemGL = GI * availableCarbGrams / 100
```

Trong do:

- `GI`: glycemic index cua food/match source.
- `availableCarbGrams`: carbohydrate kha dung trong khau phan.

### V1 neu chua khoa carb kha dung

Neu data hien co moi khoa duoc total carbohydrate:

```text
itemGLApprox = GI * totalCarbGrams / 100
```

Nhung UI/report phai ghi ro:

- Day la uoc tinh gian luoc bang total carb.
- Khong phai GL tested cua chinh khau phan neu GI item chi la match gan dung.
- Neu source GI co GL tested voi serving/carb portion ro, co the hien GL source nhu candidate/reference, nhung engine nen tinh lai tu carb app de dong bo.

### Tong GL bua

```text
totalGL = sum(itemGL cua cac mon co du carb va GI)
```

### Khong suy nguoc carb

Khong dung:

```text
carb = GL * 100 / GI
```

Ly do:

- GL hardcode co the da lam tron.
- GI/GL source co the dua tren serving khac voi gram nguoi dung nhap.
- Carb phai lay tu food pipeline/carb calculator de dong bo.

## 6. Source-lock GI

| Nguon | Loai nguon | Citation/reference | Co serving size? | Co GL san? | Phu hop thuc pham Viet? | Tin cay | Dua vao engine v1? |
|---|---|---|---|---|---|---|---|
| University of Sydney / Glycemic Index Research Service / International GI Database | tested GI database | Co reference tung item trong GI Search; site ghi co GI, GL, serving size va direct references | Co, tuy item | Co, tuy item | Medium: tot cho mon tuong dong, nhung can match manual voi mon Viet | high khi exact/close | yes, uu tien cho exact/close co metadata |
| International Tables of Glycemic Index and Glycemic Load Values 2021 | systematic review / tested GI literature | Co paper va supplemental tables; chia bang chat luong theo methodology/ISO | Co/khac nhau tuy item | Co/standardized GL trong edition 2021 | Medium: co nhieu food quoc te, regional food Viet con han che | high cho item ISO/tested; medium neu match gan dung | yes, lam source chinh khi import curated |
| Diabetes Canada Glycemic Index Food Guide / Educator materials | guideline / education resource | Co GI categories va food groups | Khong phai database numeric chinh | Khong phai source GL numeric chinh | Low-medium: tot cho wording/category, khong du de gan GI cho mon Viet cu the | medium | yes cho wording/category; no cho numeric engine neu khong co value |
| ADA Nutrition Therapy / Standards resources | guideline / clinical framing | Co consensus ve MNT, ca the hoa va khong dung mot chi so don le de quyet dinh dieu tri | No | No | Medium cho canh bao an toan, khong phai GI database | high cho safety wording | yes cho disclaimer; no cho numeric GI |
| CDC carb counting education | education resource | Co carb counting/insulin safety education | No | No | Medium cho wording dem carb/thuoc | medium-high | yes cho safety wording; no cho GI numeric |
| Internal app glycemicIndex fields trong `src/data/nutrition.ts` / `foods-extra*.ts` | internal estimate / mixed source | Chua co source id tung GI | No | GL tinh tu `GI * carbG / 100` | Medium ve coverage Viet, low ve traceability | low den medium | caution: chi dung neu gan `matchQuality`/`sourceConfidence` va report |
| Hardcoded table trong `chi-so-gi` va `tinh-gl-bua-an` | internal hardcode | Source chung, khong reference tung item | Co label portion, nhung khong normalized | Co GL hardcode | Medium coverage Viet, low traceability | low | no cho v1 neu chua source-lock tung item |

## 7. Quy tac matching thuc pham Viet

| Match quality | Dinh nghia | Co tinh GL? | UI wording |
|---|---|---|---|
| `exact` | Cung thuc pham, cung dang che bien/chin-song/brand neu can, GI source co reference ro | yes | "GI tested/source match tot" |
| `close` | Thuc pham gan giong, cung nhom va dang che bien chinh, khac giong/brand/cach nau nhe | yes, caution | "GI uoc tinh tu mon gan tuong duong" |
| `generic` | Chi co GI cho nhom chung, vi du "white rice" cho nhieu loai com | yes, caution high | "GI nhom chung, ket qua chi tham khao" |
| `estimated` | Uoc tinh noi bo tu mon/ingredient gan dung, khong co tested GI | no hoac opt-in advanced | "Chua co GI tested; khong tinh GL mac dinh" |
| `no_gi` | Khong co GI phu hop hoac mon khong co carb dang ke | no | "Chua co GI phu hop; chi hien carb neu co" |

Nguyen tac:

- Khong map sai nghia chi de co GI.
- Khong map ca che bien khac nhau neu GI co the thay doi lon: com nong/com nguoi, bun/pho/mi, khoai luoc/khoai chien, trai cay xanh/chin.
- Neu mon Viet khong co source exact, dung `close`/`generic` phai hien warning va source note.
- Recipe nhieu thanh phan khong nen gan GI duy nhat neu khong co model/source; co the tinh GL theo tung ingredient neu recipe co ingredient gram va GI mapping du tin cay.

## 8. Engine de xuat sau khi duyet

Nen tao:

```text
src/lib/glycemic-load-calculator.ts
```

API goi y:

```ts
type GlycemicLoadInput = {
  foodId?: string;
  slug?: string;
  name: string;
  grams: number;
  carbPer100g: number | null | undefined;
  glycemicIndex: number | null | undefined;
  giMatchQuality: "exact" | "close" | "generic" | "estimated" | "no_gi";
  giSourceLabel?: string;
  sourceConfidence?: string;
  dataQuality?: string;
};
```

Ket qua:

```ts
type GlycemicLoadResult = {
  ok: boolean;
  totalCarbGrams: number;
  totalGlycemicLoad: number;
  items: Array<{
    name: string;
    carbGrams: number | null;
    glycemicIndex: number | null;
    glycemicLoad: number | null;
    glCategory: "low" | "medium" | "high" | null;
    giMatchQuality: string;
    contributionPercent: number | null;
    warnings: string[];
  }>;
  warnings: string[];
  errors: string[];
};
```

Nen dung lai:

- `calculateCarbMeal()` tu `src/lib/carb-calculator.ts` cho carb gram va validation gram/carb.
- `CARB_GLOBAL_SAFETY_NOTE` / wording tu tool carb de giu nhat quan.

Nen tao data curated:

```text
src/data/glycemic-index.ts
```

Moi record nen co:

```ts
{
  foodSlug: string;
  gi: number;
  matchQuality: "exact" | "close" | "generic" | "estimated";
  sourceLabel: string;
  sourceUrl?: string;
  testedFoodName?: string;
  testedServingSizeG?: number;
  testedCarbPortionG?: number;
  testedGl?: number;
  note?: string;
}
```

## 9. UI implement sau khi duyet

Nen chuyen page GL theo mau `tinh-carb`:

- Build-time food/recipe options tu `src/data/nutrition.ts`.
- Carb source:
  - food: `food.nutrients.carbG`
  - recipe: `calculateRecipe(recipe)` quy ve `servingWeightG`
- GI source:
  - curated GI mapping theo slug/alias
  - match quality ro
- Input gram co validation.
- Output carb + GI + GL tung mon.
- Warning khi:
  - thieu carb
  - thieu GI
  - GI match chi la generic/estimated
  - item la recipe estimate/source confidence low

Can doi wording:

- Tu "biet ngay bua nay co an toan" thanh "uoc tinh tai luong duong huyet tham khao".
- Tu "Muc tieu tong GL moi bua chinh nen <20" thanh "Phan loai GL tung khau phan thuong dung de giao duc; muc tieu ca nhan can ca the hoa".
- Bo/doi claim "rau truoc tinh bot giam GL toi 20%" neu chua source-lock.

## 10. Safety wording bat buoc

Wording de xuat:

> Cong cu chi uoc tinh glycemic load dua tren GI va carbohydrate cua khau phan. Ket qua khong du doan chinh xac duong huyet sau an cua rieng ban. Khong tu chinh insulin, sulfonylurea hoac thuoc ha duong huyet dua vao ket qua nay. Neu ban dang dung thuoc co nguy co ha duong huyet, dang mang thai/dai thao duong thai ky, la tre em, co CKD, benh nang, hoac hay ha duong huyet, can ke hoach ca the hoa voi bac si/dinh duong vien.

Ghi chu them:

- GI/GL thay doi theo giong/brand, do chin, cach nau, de nguoi/hum nong, chat xo, chat beo, dam, thoi diem an, van dong va thuoc.
- GL thap khong co nghia la co the an khong gioi han.
- Tong carb van la nen quan trong trong quan ly duong huyet.

## 11. Test cases can co khi implement

1. GI 70, carb 30 g -> GL 21.
2. 2 mon co GL 10.5 va 8.2 -> tong 18.7, lam tron de doc.
3. Mon khong co GI -> warning, khong crash, item GL null.
4. Mon co GI `generic` -> van tinh neu policy cho phep, nhung warning ro.
5. Missing carb -> dung warning tu carb calculator, khong tinh GL.
6. Gram 0/am/rong/NaN -> error than thien.
7. Engine/page khong co chuoi "tang/giam insulin", "chinh thuoc", "lieu insulin".
8. Test static/regex de dam bao khong con `GL * 100 / GI` hoac `food.gl * 100 / food.gi` trong engine moi.
9. Search `com`, `bun`, `pho`, `banh mi` uu tien item dung nhu tool carb.

## 12. Diem can bac si/dinh duong vien duyet truoc implement

- Co chap nhan v1 dung total carbohydrate thay vi available carbohydrate khong; neu co, wording can ghi "uoc tinh gian luoc".
- Co nen tinh GL khi match GI chi la `generic` hay chi hien warning.
- Co nen giu phan loai GL `<=10`, `11-19`, `>=20` trong UI bữa ăn hay chi cho tung item.
- Co nen hien bat ky "muc tieu GL/bua" nao khong. De xuat: khong hien nhu target bat buoc.
- Danh sach GI mapping ban dau nen gom nhung mon nao: com trang, com gao lut, bun tuoi, banh pho, banh mi, khoai lang, chuoi, sua, trai cay pho bien.
- Cac claim hanh vi nhu "an rau truoc tinh bot giam X%" can source rieng truoc khi giu.

## 13. Nguon da doi chieu

- University of Sydney Glycemic Index: https://glycemicindex.com/
- University of Sydney GI Search: https://glycemicindex.com/gi-search/
- University of Sydney About GI: https://glycemicindex.com/about-gi/
- International tables of glycemic index and glycemic load values 2021, AJCN: https://ajcn.nutrition.org/article/S0002-9165(22)00494-4/fulltext
- Diabetes Canada Glycemic Index education: https://guidelines.diabetes.ca/health-care-provider-tools/glycemic-index
- Diabetes Canada Glycemic Index Food Guide PDF: https://www.diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/glycemic-index-food-guide.pdf?ext=.pdf
- ADA Nutrition & Wellness: https://professional.diabetes.org/clinical-support/nutrition-wellness
- ADA Nutrition Therapy for Adults With Diabetes or Prediabetes Consensus Report: https://diabetesjournals.org/care/article/42/5/731/40480/Nutrition-Therapy-for-Adults-With-Diabetes-or
- CDC Carb Counting: https://www.cdc.gov/diabetes/healthy-eating/carb-counting-manage-blood-sugar.html
- University of Illinois Extension GL formula explainer: https://extension.illinois.edu/diabetes/glycemic-load-and-glycemic-index

## 14. Quyet dinh spec

Vong implement tiep theo nen:

1. Tao engine `src/lib/glycemic-load-calculator.ts`.
2. Tao data curated `src/data/glycemic-index.ts` voi source/match metadata.
3. Dung `calculateCarbMeal()` lam nen carb.
4. Bo suy nguoc carb tu GL.
5. Khong dung bang GL hardcode trong page nhu source tinh chinh.
6. Doi wording sang "uoc tinh giao duc", bo ket luan "an toan".
7. Them `test:gl` truoc khi QA UI.
