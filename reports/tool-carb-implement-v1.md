# Carbohydrate Calculator Implement v1

Pham vi: `/cong-cu/tinh-carb`.

Muc tieu: chuyen cong cu tinh carbohydrate tu danh sach hardcode sang data-driven, co engine rieng, test rieng va wording an toan cho nguoi dai thao duong. Khong sua so lieu dinh duong.

## 1. Engine

File engine: `src/lib/carb-calculator.ts`.

API chinh:

```ts
calculateCarbMeal(foods, options)
```

Input moi item:

- `foodId` hoac `slug`
- `name`
- `grams`
- `carbPer100g`
- optional `sourceConfidence`
- optional `dataQuality`

Cong thuc:

```text
carbGrams = carbPer100g * grams / 100
totalCarbGrams = sum(carbGrams)
contributionPercent = itemCarb / totalCarb * 100
carbServings = totalCarb / 15
```

V1 chi dung total carbohydrate. Khong tinh net carb/carb kha dung.

Engine tra warning/error khi:

- thieu `carbPer100g`
- `carbPer100g` khong hop le
- `grams` <= 0, qua lon, NaN hoac Infinity

## 2. Data source

Page `src/pages/cong-cu/tinh-carb.astro` lay du lieu build-time tu:

- `src/data/nutrition.ts`
- `foods`
- `recipes`
- `calculateRecipe()` trong `src/lib/nutrition.ts`

Thuc pham:

- carb source: `food.nutrients.carbG`
- basis/source/confidence/dataQuality lay tu chinh item food.

Mon an/recipe:

- tinh tong nutrient bang `calculateRecipe(recipe)`
- quy ve carb/100g theo:

```text
recipeCarbPer100g = recipeTotalCarbG / recipe.servingWeightG * 100
```

Neu pipeline deterministic build `api-foods.json`, `foods-full.json`, `foods-slim.json` tu cung source, cong cu nay dong bo voi nen du lieu hien co ma khong phai doc truc tiep file output trong `dist`.

## 3. Hardcode carb cu

Da bo mang `foods = [...]` hardcode trong Astro page.

Da bo bang tra nhanh hardcode carb cu. Bang tra nhanh moi lay item tu data source hien co va hien carb/100g/source/confidence tu source.

Van con mot so mapping UI khong phai so lieu dinh duong:

- group UI theo category/name: tinh bot, trai cay, do uong, banh/ngot, khac
- icon theo group
- danh sach slug de hien bang tra nhanh neu co trong data

Cac mapping nay khong chua gia tri carb rieng.

## 4. UI/output

UI moi hien:

- tong carbohydrate cua bua/khau phan
- so phan carb uoc tinh theo quy uoc giao duc 15g/phan
- carb tung mon
- gram da nhap
- carb/100g cua moi mon
- ty le dong gop cua tung mon
- warning neu input/du lieu co van de

Moc 45-60g/bua duoc doi thanh vi du giao duc. UI khong dung wording "dat chuan", "vuot chuan" hay "khuyen nghi cho moi nguoi tieu duong".

## 5. Canh bao an toan

Wording bat buoc da dua vao page va engine:

- Cong cu chi uoc tinh gram carbohydrate.
- Khong tu chinh insulin, sulfonylurea hoac thuoc ha duong huyet dua vao ket qua.
- Nguoi dung insulin/sulfonylurea, tre em, thai ky, CKD, benh nang hoac hay ha duong huyet can ke hoach ca the hoa.
- Duong huyet sau an con phu thuoc GI, chat xo, chat beo, dam, van dong, thoi diem an va thuoc.
- Sai so phu thuoc can do khau phan, cach nau va source du lieu.

Engine/test khong sinh output tinh lieu insulin hoac goi y chinh thuoc.

## 6. Test cases

File test: `scripts/test-carb-calculator.mjs`.

NPM script:

```text
npm run test:carb
```

Cases:

| Case | Ky vong | Ket qua |
|---|---:|---|
| 100g, carb 28g/100g | 28g carb | pass |
| 200g, carb 28g/100g | 56g carb | pass |
| 2 mon 20g + 20g | tong 40g | pass |
| Contribution 20g/40g | 50% moi mon | pass |
| Total 30g | 2 phan carb | pass |
| Missing carb | warning, khong crash | pass |
| grams 0/am/NaN/Infinity/qua cao | error than thien | pass |
| Safety text | khong dua lieu insulin/chinh thuoc | pass |

## 7. Rui ro con lai

- Search/filter UI hien toi da 80 item de giu trang gon; v2 co the them ranking tot hon theo alias exact/prefix nhu search chinh.
- Portion goi y hien chi la gram mac dinh, chua co serving database rieng cho moi food.
- Recipe carb/100g dua tren recipe estimate hien co; mon `recipe-estimate-v1` van can review source nhu cac vong food data truoc.
- Chua tinh net carb/carb kha dung vi chua khoa fiber/source definition.
- Chua noi truc tiep voi `tinh-gl-bua-an`; vong GL sau nen dung engine carb nay lam nen.

## 8. Quyet dinh cho v2

Nen uu tien:

1. Them ranking search alias chuan hon trong tool carb.
2. Them serving metadata rieng neu food pipeline ho tro.
3. Lien ket voi `tinh-gl-bua-an` de tinh GL tu carb data thay vi hardcode.
4. Them test UI nho bang Playwright/browser neu project bat dau co regression suite frontend.
