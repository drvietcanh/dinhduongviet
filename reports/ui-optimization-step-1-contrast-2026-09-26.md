# UI optimization — Step 1: contrast audit

Date: 2026-09-26

## Scope

Audited the primary semantic tokens in `src/layouts/BaseLayout.astro` for light and dark surfaces using WCAG relative luminance contrast ratios.

## Results

| Pair | Ratio | Result |
| --- | ---: | --- |
| Light `--ink` / `--bg` | 14.63:1 | Pass |
| Light `--ink-secondary` / `--bg` | 7.58:1 | Pass |
| Light `--ink-tertiary` / `--bg` | 2.56:1 | Fail for normal text |
| Light `--brand` / `--bg` | 3.77:1 | Fail for normal text; acceptable only for large text/non-text |
| Light `--brand-dark` / `--bg` | 5.48:1 | Pass |
| Dark `--ink` / `--bg` | 17.06:1 | Pass |
| Dark `--ink-secondary` / `--card` | 5.71:1 | Pass |
| Dark `--ink-tertiary` / `--card` | 3.07:1 | Fail for normal text |
| Dark `--brand` / `--card` | 7.61:1 | Pass |

## Decision

No token was changed in this step. The failing tokens are widely used for metadata, placeholders, and decorative/secondary labels, so the next step should first classify their usage before changing values.

## Next step

Audit usages of `--ink-tertiary` and `--brand` and split them into semantic roles: readable secondary text, placeholder text, decorative labels, links, and non-text indicators. Then update only the normal-text roles and rerun the same contrast table.

## Step 2 classification notes

- `--ink-tertiary` is mostly used for metadata, helper text, placeholders, units, and decorative labels. These should not all inherit the same contrast requirement; normal-size helper text must be promoted to `--ink-secondary`, while placeholders and decorative labels may remain tertiary.
- `--brand` is used correctly for borders, focus rings, large numeric values, icons, and filled controls with white text.
- `--brand` is not suitable as normal text on `--brand-light` in several active chips/badges. Those component-level text colors should use `--brand-dark` (light theme) or a dedicated semantic `--brand-text` token.
- No global token was changed during Step 2; the next implementation step is component-scoped contrast correction followed by a rerun of the contrast table and runtime smoke test.

## Step 3 implementation

Updated active chips and the food lookup badge to use `--brand-dark` on the light theme and `--brand` on the dark theme. The measured ratios are:

- Light `--brand-dark` / `--brand-light`: **5.21:1** — pass for normal text.
- Dark `--brand` / dark `--brand-light`: **5.06:1** — pass for normal text.

`npx astro check` passed after the component changes. The next step is a runtime light/dark smoke test on the affected routes.
