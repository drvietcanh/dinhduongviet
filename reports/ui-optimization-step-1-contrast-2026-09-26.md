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
