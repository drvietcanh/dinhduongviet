# Glycemic Load Calculator Implement v1

Pham vi: `/cong-cu/tinh-gl-bua-an`.

Muc tieu: thay tool GI/GL hardcode bang engine data-driven, dung carb calculator lam nen, dung bang GI curated co match quality, khong suy nguoc carb tu GL.

## 1. File thay doi

- `src/data/glycemic-index.ts`
- `src/lib/glycemic-load-calculator.ts`
- `src/pages/cong-cu/tinh-gl-bua-an.astro`
- `scripts/test-glycemic-load-calculator.mjs`
- `package.json`
- `reports/tool-gl-implement-v1.md`

## 2. Engine

Engine nam o `src/lib/glycemic-load-calculator.ts`.

Input moi item:

- `foodId` hoac `slug`
- `name`
- `grams`
- `carbPer100g`
- `glycemicIndex`
- optional `sourceConfidence`
- optional `dataQuality`

Cong thuc:

```text
carbGrams = carbPer100g * grams / 100
gl = gi * carbGrams / 100
totalGL = sum(item.gl)
```

Carb duoc tinh qua `calculateCarbMeal` tu `src/lib/carb-calculator.ts`. Engine GL khong co cong thuc `carb = GL * 100 / GI`.

## 3. Du lieu GI curated

Du lieu GI nam o `src/data/glycemic-index.ts`.

Mapping ban dau: 27 muc.

Nhom phu song v1:

- com trang
- com gao lut
- com gao lut do
- com gao lut den
- com nep
- bun tuoi
- banh pho chin / pho noodle
- banh mi
- khoai lang
- khoai lang tim
- khoai lang mat
- khoai tay
- bap nep luoc
- bap my luoc
- yen mach can
- chuoi va mot so bien the chuoi
- tao / tao xanh
- cam / cam sanh
- xoai
- sua tuoi
- ca rot
- duong trang

Moi mapping co:

- `mappingId`
- `foodSlug`
- `aliases`
- `foodName`
- `gi`
- `giCategory`
- `matchQuality`
- `sourceLabel`
- optional `sourceUrl`
- `note`
- `appliesTo`
- `notFor`

Nguon chinh trong v1:

- University of Sydney GI Search / International GI database
- International GI tables 2021
- Internal app GI fields chi dung thap hon, co note/source-lock

## 4. Match quality

Engine xu ly:

| Match quality | Hanh vi v1 |
|---|---|
| `exact` | Tinh GL, khong them warning rieng |
| `close` | Tinh GL, them warning match gan dung |
| `generic` | Tinh GL, them warning theo nhom thuc pham |
| `estimated` | Khong tinh mac dinh; can option rieng neu muon tinh |
| `no_gi` | Khong tinh GL cho item, hien warning |

## 5. Page UI

Page `src/pages/cong-cu/tinh-gl-bua-an.astro` nay:

- Lay carb tu `food.nutrients.carbG`.
- Lay carb recipe tu `calculateRecipe(recipe)` roi quy ve `servingWeightG`.
- Gan GI bang `findGlycemicIndexMapping(slug, name)`.
- Cho chon mon + nhap gram.
- Hien carb tung mon, GI, match quality, GL tung mon, tong carb, tong GL.
- Hien warning neu thieu GI, thieu carb, gram sai, match close/generic.
- Co filter "Co GI" de xem nhanh cac item co mapping.

Da bo:

- Bang GL hardcode cu trong page.
- Multiplier portion hardcode 0.5/1/1.5/2.
- Cong thuc suy nguoc carb tu GL.
- Wording "an toan", "muc tieu GL <20" nhu ket luan chung.

## 6. Total carb hay available carb

V1 dung total carbohydrate.

Ly do: du lieu carb kha dung/net carb/chon cach tru chat xo chua duoc khoa nhat quan cho tung food/recipe trong pipeline.

Wording trong UI:

```text
V1 dung tong carbohydrate vi du lieu carb kha dung/chat xo chua duoc khoa nhat quan cho tung mon. Ket qua la uoc tinh gian luoc.
```

## 7. Canh bao an toan

UI va engine co note:

- GL chi la chi so giao duc.
- Khong tu chinh insulin, sulfonylurea hoac thuoc ha duong huyet dua vao ket qua.
- Duong huyet sau an con phu thuoc tong carb, GI, chat xo, chat beo, dam, cach nau, van dong, thoi diem an, thuoc va dap ung ca nhan.
- Thai ky, tre em, CKD, benh nang, hay ha duong huyet can ke hoach ca the hoa.
- Ket qua khong thay the theo doi duong huyet ca nhan hoac tu van dinh duong ca the.

## 8. Test cases

Script: `scripts/test-glycemic-load-calculator.mjs`

Case:

1. GI 70, carb 30g -> GL 21.
2. 2 mon -> tong GL dung.
3. Mon khong co GI -> warning, khong crash.
4. `exact`, `close`, `generic` deu tinh GL; close/generic co warning dung.
5. `estimated` khong tinh mac dinh.
6. `no_gi` khong tinh GL.
7. Gram sai -> loi than thien tu carb calculator.
8. Lam tron 1 chu so thap phan.
9. Source engine khong co cong thuc suy nguoc carb tu GL.
10. Engine khong co output kieu tang/giam insulin, tang/giam thuoc, an toan tuyet doi.

## 9. Con lai cho v2

- Import GI item-level tu source co citation/reference ro hon.
- Tach source review cho tung mapping Viet Nam thay vi generic.
- Can nhac available carbohydrate neu pipeline khoa duoc chat xo/carb kha dung.
- QA UI bang browser that sau khi build pass.
- Can bac si/dinh duong vien duyet wording category GL tong bua an.
