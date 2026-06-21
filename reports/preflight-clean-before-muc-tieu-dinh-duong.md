# Preflight Clean Before Muc Tieu Dinh Duong Spec

Date: 2026-06-21

Branch: `tools-core-status-v3`

HEAD: `7120e93 docs: update tool status with meal evaluation hub v1`

## Scope

- Review dirty local files before starting `tool-muc-tieu-dinh-duong-spec-v1`.
- Do not start a new feature in this round.
- Classify each dirty file and clean the worktree safely.
- Preserve out-of-scope useful work instead of mixing it with the nutrition goal spec.

## Initial Dirty Files

`git status --short` showed:

- `src/layouts/BaseLayout.astro`
- `src/pages/cong-cu/index.astro`
- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/so-sanh.astro`

`git diff --stat` showed:

- `src/layouts/BaseLayout.astro`: 1 insertion.
- `src/pages/cong-cu/index.astro`: 2 changed lines.
- `src/pages/cong-cu/so-sanh-bua-an.astro`: 2 changed lines.
- `src/pages/cong-cu/so-sanh.astro`: 97 changed lines, mostly new hub implementation.

Git also warned that LF would be replaced by CRLF when Git next touches these files. The substantive diffs are not line-ending-only changes.

## File Classification

### `src/layouts/BaseLayout.astro`

- Dirty reason: adds breadcrumb label for `so-sanh` as `So sánh dinh dưỡng`.
- Related to `tools-core-status-v3`: no.
- Line-ending only: no; there is a real content insertion.
- Manual/out-of-scope edit: yes, related to a possible `so-sanh` hub cleanup.
- Recommendation: preserve outside the current scope by stashing with the other `so-sanh` work.

### `src/pages/cong-cu/index.astro`

- Dirty reason: moves `/cong-cu/so-sanh` out of the draft group and adds it as `So sánh dinh dưỡng` with `Hub` status in the comparison group.
- Related to `tools-core-status-v3`: no; the status v3 commit already handled `danh-gia-bua-an`.
- Line-ending only: no; there is a real content move/change.
- Manual/out-of-scope edit: yes, related to a possible `so-sanh` hub cleanup.
- Recommendation: preserve outside the current scope by stashing with the other `so-sanh` work.

### `src/pages/cong-cu/so-sanh-bua-an.astro`

- Dirty reason: changes the `recipe-data` script from inline JSON body to `set:html={JSON.stringify(recipeData)}`.
- Related to `tools-core-status-v3`: no.
- Line-ending only: no; there is a real Astro rendering change.
- Manual/out-of-scope edit: yes, likely a bugfix/polish for comparison meal data rendering.
- Recommendation: preserve outside the current scope by stashing with the other `so-sanh` work.

### `src/pages/cong-cu/so-sanh.astro`

- Dirty reason: replaces a redirect stub to `/cong-cu/so-sanh-thuc-pham` with a real `So sánh dinh dưỡng` hub linking to `so-sanh-thuc-pham` and `so-sanh-bua-an`.
- Related to `tools-core-status-v3`: no.
- Line-ending only: no; this is a substantial implementation change.
- Manual/out-of-scope edit: yes, likely useful future work but not part of preflight or `muc-tieu-dinh-duong`.
- Recommendation: preserve outside the current scope by stashing with the other `so-sanh` work.

## Cleanup Decision

Do not restore/delete these changes, because they include meaningful out-of-scope work.

Use a named stash for the four dirty files:

- `wip: out-of-scope local changes before nutrition goal spec`

This keeps `tools-core-status-v3` clean for the upcoming `muc-tieu-dinh-duong` spec branch without losing the comparison-hub work.
