# Nutrition Goal Planner Shell v1

Date: 2026-06-21

Branch: `nutrition-goal-planner-shell-v1`

Base commit: `35098da docs: add nutrition goal source lock`

Tag created:

- `local-nutrition-goal-source-lock-v1 -> 35098da`

## Scope

- Implement the first safety-gated shell for the future shared nutrition goal engine.
- No UI route integration in this round.
- No BMR/TDEE calculation.
- No `7700 kcal/kg` calculation.
- No deficit/surplus calculation.
- No macro/fiber/sugar/sodium numeric targets.
- No disease macro table.
- No nutrition data changes.
- No manual `dist` edits.
- Do not touch the existing `so-sanh` stash.

## Files Changed

- `src/lib/nutrition-goal-planner.ts`
- `scripts/test-nutrition-goal-planner.mjs`
- `package.json`
- `reports/nutrition-goal-planner-shell-v1.md`

## Engine Location

New engine:

- `src/lib/nutrition-goal-planner.ts`

Main export:

- `planNutritionGoal(input)`

Key exported types:

- `NutritionGoalMode`
- `NutritionGoalInput`
- `NutritionGoalResult`

## UI Integration

No UI route was changed.

The following routes remain untouched in this round:

- `src/pages/cong-cu/muc-tieu-dinh-duong.astro`
- `src/pages/cong-cu/muc-tieu-can-nang.astro`
- `src/pages/cong-cu/tinh-macro.astro`
- `src/pages/cong-cu/tinh-nang-luong.astro`

## Mode Logic

### `clinical_no_auto`

Returned when any high-risk condition is present:

- age `< 18`
- BMI `< 18.5`
- pregnancy/lactation
- rapid unintentional weight loss
- eating disorder
- chronic kidney disease
- dialysis
- heart failure or fluid restriction
- cirrhosis/ascites
- diabetes using insulin or sulfonylurea
- cancer/malnutrition
- acute illness
- complex medication context

Behavior:

- `shouldShowTargets = false`
- no kcal target
- no macro target
- no protein personal target
- warning says goals need individualized care with a doctor or dietitian.

### `caution`

Returned when there is no clinical red flag, but at least one caution signal exists:

- mild weight loss
- mild weight gain
- age `>= 65`
- high activity
- vegetarian pattern
- BMI `>= 25`

Behavior:

- no deficit/surplus number.
- no promised speed of weight change.
- no macro target.
- protein reference may appear only when the protein engine returns a non-clinical result.

### `auto`

Returned only for:

- adult.
- BMI `>= 18.5`.
- no red flags.
- goal is `maintain` or `healthy_eating`.
- no caution flag.

Behavior:

- may show safe protein reference.
- energy and macro targets remain disabled pending source-lock.

## Validation

Friendly validation errors are returned for:

- invalid age.
- invalid weight.
- invalid height.

Current validation ranges:

- age: `1-120`
- weight: `20-300 kg`
- height: `100-250 cm`

BMI is calculated after valid weight/height input:

- `weightKg / heightM^2`, rounded to 1 decimal.

BMI category is a screening label only:

- `low_bmi`
- `adult_reference_range`
- `bmi_25_or_higher`

## Protein Reuse

The engine imports and reuses:

- `calculateProteinRequirement` from `src/lib/protein-requirement.ts`

Protein reference is only attempted when the nutrition goal mode is not `clinical_no_auto`.

Protein profile mapping:

- vegetarian pattern -> `vegan`
- age `>= 65` -> `elderly`
- mild weight loss -> `weight_loss`
- high activity -> `active_muscle`
- otherwise -> `healthy`

If the protein engine returns `clinical_no_auto`, the nutrition goal engine suppresses protein reference.

Protein wording is framed as:

- `khoảng tham khảo`
- not a mandatory intake target.

## Intentionally Disabled In v1

The engine does not calculate or output:

- BMR.
- TDEE.
- activity multiplier.
- `7700 kcal/kg`.
- kcal deficit.
- kcal surplus.
- weekly weight change.
- daily kcal target.
- macro percent target.
- macro gram target.
- fiber target.
- added/free sugar target.
- sodium target.
- disease macro table.

Status fields:

- `energyEstimateStatus = "needs_source_lock"`
- `macroTargetStatus = "needs_source_lock"`

Reason:

- `reports/nutrition-goal-source-lock-v1.md` marks these components as not ready for numeric target implementation.

## Wording Guards

The test serializes representative outputs and checks that they do not contain forbidden wording:

- `mục tiêu chuẩn`
- `bắt buộc ăn`
- `giảm X kg/tuần chắc chắn`
- `ăn càng ít càng tốt`
- `macro tối ưu cho mọi người`
- `an toàn cho bệnh`
- `tự chỉnh insulin`
- `ngưng thuốc`
- `bệnh thận nên ăn X g đạm`

The engine output keeps:

- `isPersonalPrescription = false`
- wording around `tham khảo`, `có sai số`, and `cần cá thể hóa`.

## Test Coverage

New test:

- `scripts/test-nutrition-goal-planner.mjs`

New npm script:

- `npm run test:nutrition-goal`

`test:tools` now includes:

- `npm run test:nutrition-goal`

Cases covered:

1. Healthy adult, maintain -> `auto`.
2. Healthy adult, healthy eating -> `auto`.
3. Mild weight loss -> `caution`, no deficit number, no promised weekly speed.
4. Mild weight gain -> `caution`, no surplus number.
5. Age `>= 65` -> `caution`.
6. High activity -> `caution`.
7. Vegetarian pattern -> `caution`.
8. BMI `>= 25` -> `caution`.
9. Age `< 18` -> `clinical_no_auto`, `shouldShowTargets=false`.
10. BMI `<18.5` -> `clinical_no_auto`.
11. Pregnancy/lactation -> `clinical_no_auto`.
12. CKD -> `clinical_no_auto`.
13. Dialysis -> `clinical_no_auto`.
14. Heart failure/fluid restriction -> `clinical_no_auto`.
15. Diabetes using insulin/sulfonylurea -> `clinical_no_auto`.
16. Cancer/malnutrition -> `clinical_no_auto`.
17. Rapid unintentional weight loss -> `clinical_no_auto`.
18. Eating disorder -> `clinical_no_auto`.
19. Acute illness -> `clinical_no_auto`.
20. Complex medication -> `clinical_no_auto`.
21. Cirrhosis/ascites -> `clinical_no_auto`.
22. Invalid age/weight/height -> friendly errors.
23. Serialized output avoids forbidden wording.
24. Engine output avoids disabled numeric target fields.

## QA Results

Final QA is run after this report:

- `npm run build`
- `npm run qa`
- `npm run qa:food-data`
- `npm run qa:data-consistency`
- `npm run test:protein`
- `npm run test:carb`
- `npm run test:gl`
- `npm run test:water`
- `npm run test:meal-assessment`
- `npm run test:nutrition-goal`
- `npm run test:tools`
- `git diff --check`
- `git status --short`

## Conditions Before UI Integration

Before integrating into `/cong-cu/muc-tieu-dinh-duong/`:

- Doctor/dietitian should approve the mode wording and caution/clinical reason labels.
- UI should show no kcal or macro target while energy/macro remain `needs_source_lock`.
- UI should clearly say protein is a reference range, not a prescription.
- High-risk users should see `clinical_no_auto` messaging first.
- Existing redirects for `tinh-macro` and `tinh-nang-luong` should not become independent calculators.
- `muc-tieu-can-nang` should be refactored or softened before presenting this engine as the shared source of truth.

## Conclusion

The project now has a source-locked safety shell for nutrition goals. It can classify safe, caution, and clinical-no-auto contexts and can reuse the stable protein engine. It deliberately avoids all unapproved energy, weight-change, macro, fiber, sugar, and sodium target math until source-lock is complete.
