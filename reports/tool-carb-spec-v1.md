# Carbohydrate Calculator Spec v1

Pham vi: `/cong-cu/tinh-carb`.

Muc tieu vong nay: tao dac ta va source-lock truoc khi sua code. Khong sua logic tinh toan, khong sua du lieu dinh duong, khong deploy.

## A. Hien trang code

File chinh: `src/pages/cong-cu/tinh-carb.astro`.

### Input hien tai

- Search thuc pham text: `food-search`.
- Filter nhom: `all`, `tinh-bot`, `trai-cay`, `do-uong`, `banh-keo`.
- Chon thuc pham tu danh sach static.
- Chon khau phan bang `<select>` theo gram hardcode cho tung mon.
- Nut `+ Them` de dua mon vao bua an.
- Nut `Lam lai` de reset bua.

### Output hien tai

- Carb tung mon theo khau phan da chon.
- Danh sach mon da them vao bua.
- Tong carb bua an, progress bar, note dien giai theo moc tong carb.
- Bang tra nhanh carb thuc pham Viet dang hardcode trong HTML.
- Rec box mac dinh: `45-60g carb / bua chinh`, `15-20g carb / bua phu`, `1 phan tinh bot = 15g carb`.

### Cong thuc hien tai

Trong inline script:

```text
carb moi khau phan = round(carb100 * portionGram / 100)
tong carb bua = sum(carb tung mon da them)
progress percent = min(round(total / 60 * 100), 100)
```

Note hien tai:

```text
<30g: thap
30-45g: vua phai
45-60g: trong khuyen nghi bua chinh
60-80g: hoi cao
>80g: cao
```

### Nguon du lieu hien tai

- Du lieu thuc pham nam hardcode trong `src/pages/cong-cu/tinh-carb.astro`.
- Moi item co `name`, `icon`, `portion`, `carb100`, `group`, `portions`.
- Khong thay fetch/read:
  - `public/api/foods-full.json`
  - `public/api/foods-slim.json`
  - `dist/api-foods.json`
  - `/api-foods.json`
- Safety note co ghi "du lieu thuc pham Viet Nam (Bo Y te)", nhung code khong gan source/candidate cho tung item.

### Canh bao hien tai

- Co note chung: uoc tinh phu thuoc cach che bien, thuong hieu, khau phan; nguoi tieu duong nen tham khao bac si/chuyen vien dinh duong.
- Chua co canh bao ro:
  - khong tu chinh insulin/thuoc
  - nguy co ha duong huyet voi insulin/sulfonylurea
  - tre em
  - thai ky/dai thao duong thai ky
  - CKD
  - nguoi benh nang
- Co nguy co nguoi dung hieu nham `45-60g/bua` la khuyen nghi chung cho moi nguoi tieu duong, trong khi muc carb can ca the hoa theo thuoc, duong huyet, muc tieu dieu tri, tuoi, thai ky, CKD, hoat dong va preference.
- Hien tai khong tinh insulin, nhung wording "so sanh voi khuyen nghi cho nguoi tieu duong" co the lam nguoi dung dung ket qua de tu dieu chinh thuoc neu khong co disclaimer manh hon.

## B. Muc tieu cong cu

Cong cu nen la carbohydrate counter mang tinh giao duc:

- Uoc tinh luong carbohydrate trong khau phan/bua an.
- Ho tro nguoi dung tu theo doi bua an va nhin mon nao dong gop carb nhieu.
- Ho tro trao doi voi bac si/dinh duong vien bang so gram carb uoc tinh.
- Khong phai cong cu ke don.
- Khong dung de tu chinh lieu insulin, sulfonylurea hoac thuoc ha duong huyet neu khong co huong dan ca the.

## C. Input de xuat

Bat buoc:

- Chon thuc pham/mon an tu data source.
- Khai bao khoi luong an duoc.
- Don vi mac dinh: gram.

Nen co:

- Khau phan goi y neu food data co metadata portion:
  - bat/chen
  - ly
  - lat
  - qua/cu/trai
  - phan an
- So phan: `servings`.
- Search co dau/khong dau va alias theo food pipeline hien co.

Khong dua vao v1:

- Khong bat nguoi dung nhap GI/GL trong cong cu nay.
- Khong nhap insulin-to-carb ratio.
- Khong nhap correction factor.
- Khong nhap duong huyet de tinh lieu thuoc.

## D. Output de xuat

Chinh:

- Tong carb gram cua bua an.
- Carb tung mon.
- Ty le dong gop cua tung mon vao tong carb.
- Canh bao du lieu thieu neu mon khong co carb/100g.

Dien giai:

- "Thap / vua / cao" chi nen la nhan giao duc, khong phan xet cung.
- Nen viet: "so voi moc tham khao cua cong cu" thay vi "dat khuyen nghi".
- Nen hien: "muc carb phu hop cua ban can ca the hoa theo thuoc, duong huyet va muc tieu dieu tri".

Khong nen output:

- Khong tinh lieu insulin.
- Khong de xuat tang/giam thuoc.
- Khong ket luan bua an "an toan" cho duong huyet.

## E. Cong thuc de xuat

### Carb tung mon

```text
carbGram = carbPer100g * edibleGram / 100
```

Trong do:

- `carbPer100g`: carbohydrate/100g phan an duoc tu food data.
- `edibleGram`: khoi luong phan an duoc nguoi dung nhap/chon.

### Tong carb bua

```text
totalCarbGram = sum(carbGram cua cac mon)
```

### Ty le dong gop cua tung mon

```text
contributionPercent = carbGram / totalCarbGram * 100
```

### Chat xo / carb kha dung

Chua dung trong v1 neu chua khoa nguon.

Neu sau nay tinh carb kha dung, can source-lock ro:

```text
availableCarb = totalCarbohydrate - dietaryFiber
```

Nhung cong thuc nay phu thuoc cach dinh nghia carbohydrate/fiber trong database va nhan dinh duong. V1 nen hien "carb tong theo du lieu" truoc.

### Insulin

Khong tinh:

```text
insulinDose = carbGram / insulinToCarbRatio
```

Ly do: insulin-to-carb ratio, correction factor, glucose target, active insulin, thoi diem an, van dong, benh cap va nguy co ha duong huyet phai do bac si/diabetes educator huong dan.

## F. Nguon du lieu de xuat

Uu tien data-driven engine thay hardcode:

1. `dist/api-foods.json`
   - Source build tu Astro/data pipeline.
   - Phu hop cho build output va preview.
2. `public/api/foods-full.json`
   - Public API generated deterministic.
   - Co metadata food quality/source review tu cac vong truoc.
3. `public/api/foods-slim.json`
   - Tot cho search/list nhanh.
   - Khong nen la source duy nhat neu thieu macro chi tiet.
4. Vietnam data:
   - `public/api/vietnam-foods.json`
   - `public/api/vietnam-nutrients.json`
   - dung khi can doi chieu food code/nguon Vietnam Food Composition.

Khuyen nghi implement:

- Tao `src/lib/carb-calculator.ts`.
- Tao function tinh thuan tu food item + gram.
- Page chi lo UI/search/select.
- Food khong co carb nen tra warning, khong ngam dinh `0g`.
- Neu tiep tuc dung curated portions, dua portions vao metadata source rieng, khong de hardcode rai rac trong page.

## G. Canh bao an toan bat buoc

Wording de xuat:

> Cong cu chi uoc tinh gram carbohydrate trong bua an. Sai so co the den tu khau phan, cach nau, thuong hieu va du lieu thuc pham. Neu ban dang dung insulin, sulfonylurea hoac thuoc co nguy co ha duong huyet, khong tu chinh lieu thuoc chi dua vao ket qua nay. Tre em, thai ky/dai thao duong thai ky, CKD, nguoi benh nang hoac nguoi co muc tieu duong huyet ca the can hoi bac si/dinh duong vien.

Ghi chu them:

- Carb khong phai yeu to duy nhat quyet dinh duong huyet sau an.
- Con can xem:
  - GI/GL
  - chat xo
  - chat beo
  - protein
  - thoi diem an
  - van dong
  - thuoc
  - stress/benh cap
  - duong huyet truoc bua

## H. Source-lock ngan

| Khai niem | Cong thuc/wording khoa | Nguon/ghi chu | Muc chac chan | Dua vao engine? |
|---|---|---|---|---|
| Carb tung mon | `carb/100g * gram / 100` | Cong thuc ty le tu du lieu dinh duong/100g; phu hop voi food composition data. | high | yes |
| Tong carb bua | `sum(carb tung mon)` | Carb counting tinh tong gram carb cua thuc pham/do uong trong bua. | high | yes |
| Carb contribution | `itemCarb / totalCarb * 100` | Chi la UI explainability, khong phai guideline lam sang. | high | yes |
| 1 carb choice/serving | Thuong ~15g carbohydrate | CDC/diabetes education resources dung 15g carb nhu mot serving/choice co ban. Can localize wording. | medium-high | yes, as reference only |
| 45-60g/bua | Chi la vi du/moc tham khao, khong phai muc chung cho moi nguoi | Diabetes education thuong dung muc nay cho nguoi moi hoc carb counting, nhung ADA/CDC nhan manh ca the hoa. | medium | caution label only |
| Carb counting in diabetes | Theo doi tong gram carb la cong cu quan trong trong quan ly duong huyet | ADA nutrition therapy/Standards; CDC carb counting. | high | yes, education wording |
| Insulin dose | Khong tinh; khong tu chinh thuoc | CDC noi nguoi dung mealtime insulin dem carb de match insulin, nhung lieu/ratio phai theo bac si/diabetes educator; ADA Standards nhan manh individualized care. | high | no |
| GI/GL | Khong bat nhap trong tool carb v1 | GI/GL co the bo sung, nhung anh huong duong huyet phu thuoc nhieu yeu to; nen tach sang `tinh-gl-bua-an`. | medium | no |
| Carb kha dung/net carb | Chua tinh neu chua khoa source fiber/database definition | Can biet data fiber va dinh nghia carb trong source. | medium | no |
| Pediatric/pregnancy/CKD warning | Can ca the hoa | ADA children diabetes Standards; pregnancy/CKD co muc tieu rieng. | high | warning only |

## I. Ke hoach implement sau khi duyet

### 1. Engine

Tao:

```text
src/lib/carb-calculator.ts
```

API de xuat:

```ts
type CarbFoodInput = {
  id: string;
  name: string;
  carbPer100g: number | null;
  gram: number;
  source?: string;
};

type CarbMealResult = {
  ok: boolean;
  totalCarbGram: number;
  items: Array<{
    id: string;
    name: string;
    gram: number;
    carbGram: number | null;
    contributionPercent: number | null;
    warning?: string;
  }>;
  warnings: string[];
};
```

### 2. Data

- Thay food list hardcode bang data API/search.
- Dung field carb/glucid/carbohydrate tu food data sau khi xac dinh ten field chuan.
- Neu item thieu carb, hien warning thay vi tinh `0`.
- Portions co the tam giu curated list nhung nen tach source.

### 3. UI

- Giu search/filter.
- Them input gram tuy chinh.
- Hien carb tung mon va total.
- Hien contribution percent.
- Wording an toan manh hon cho insulin/thuoc.
- Doi rec box `45-60g` thanh "moc tham khao de hoc carb counting", khong ghi "khuyen nghi cho nguoi tieu duong" nhu muc chung.

### 4. Tests can co

1. 100g com co carb dung theo du lieu source.
2. 200g cung mon -> carb gap doi.
3. Nhieu mon -> tong dung.
4. Mon thieu carb -> warning du lieu thieu.
5. Input sai gram/serving -> loi than thien.
6. UI/report khong hien goi y chinh insulin/thuoc.
7. Carb contribution tinh dung percent.

## J. Diem can bac si/dinh duong vien duyet

- Co nen hien moc `45-60g/bua` khong; neu co, wording chinh xac la "tham khao" hay "vi du hoc dem carb".
- Co nen hien `15g carb = 1 phan tinh bot` trong UI khong va cach viet phu hop nguoi Viet.
- Cac nhom can canh bao them: insulin, sulfonylurea, tre em, thai ky/dai thao duong thai ky, CKD, nguoi lon tuoi, nguoi benh nang.
- Co nen tinh carb tong hay carb kha dung/net carb trong v1.
- Field carb chuan trong food data nen la `glucid`, `carbohydrate` hay mapping rieng.
- Co can tach cong cu nay voi `tinh-gl-bua-an` hay lien ket ket qua giua hai tool.

## K. Nguon da doi chieu

- CDC, Carb Counting: https://www.cdc.gov/diabetes/healthy-eating/carb-counting-manage-blood-sugar.html
- CDC, Types/using insulin: https://www.cdc.gov/diabetes/about/how-to-use-insulin.html
- ADA Standards of Care in Diabetes, current guideline resources: https://professional.diabetes.org/standards-of-care/practice-guidelines-resources
- ADA Standards of Care in Diabetes 2026, Children and Adolescents, carbohydrate monitoring recommendation: https://diabetesjournals.org/care/article/49/Supplement_1/S297/163923/14-Children-and-Adolescents-Standards-of-Care-in
- ADA Nutrition Therapy for Adults With Diabetes or Prediabetes Consensus Report: https://diabetesjournals.org/care/article/42/5/731/40480/Nutrition-Therapy-for-Adults-With-Diabetes-or
- Diabetes Canada, Carb counting: https://diabetes.ca/nutrition-fitness/healthy-eating/carb-counting
