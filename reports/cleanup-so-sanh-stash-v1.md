# Cleanup So Sanh Stash v1

Date: 2026-06-23

Branch: `cleanup-so-sanh-stash-v1`

Base commit: `37fb916 docs: update tool status with comparison hub v1`

Tag created:

- `local-tools-core-status-v6 -> 37fb916`

## Goal

Verify that the old `so-sanh` stash had already been merged or safely superseded by the current committed work, then remove the stash. This round did not change route logic, UI, formulas, engines, nutrition data, or `dist`.

## Initial Stash

Initial stash list contained:

- `stash@{0}: On tools-core-status-v3: wip: out-of-scope local changes before nutrition goal spec`

`git stash show --stat stash@{0}` listed four files:

- `src/layouts/BaseLayout.astro`
- `src/pages/cong-cu/index.astro`
- `src/pages/cong-cu/so-sanh-bua-an.astro`
- `src/pages/cong-cu/so-sanh.astro`

The stash commit was:

- `c3c4ff7 On tools-core-status-v3: wip: out-of-scope local changes before nutrition goal spec`

## Stash Content Review

### `src/layouts/BaseLayout.astro`

Stash added the breadcrumb label:

- `so-sanh`: `So sánh dinh dưỡng`

Current `HEAD` already contains this breadcrumb entry, matching the current route naming pattern.

Decision: no additional stash content needed.

### `src/pages/cong-cu/index.astro`

Stash added a `So sánh dinh dưỡng` card and removed an old draft `So sánh` card from the draft section.

Current `HEAD` already contains the `So sánh dinh dưỡng` card in the `Tra cứu và so sánh thực phẩm` group. It is newer than the stash version:

- Current route: `/cong-cu/so-sanh`
- Current description: `Hub chọn công cụ phù hợp để so sánh thực phẩm hoặc bữa ăn.`
- Current badge: `Đã kiểm v1`
- Current status type: `stable`

Current `HEAD` no longer has the old draft `So sánh` entry.

Decision: stash content is already included and superseded by the status v6 update.

### `src/pages/cong-cu/so-sanh-bua-an.astro`

Stash changed the embedded recipe JSON script from inline interpolation to:

- `set:html={JSON.stringify(recipeData)}`

Current `HEAD` already contains this safer serialization pattern. Previous QA and final review confirmed the browser could parse `#recipe-data`.

Decision: no additional stash content needed.

### `src/pages/cong-cu/so-sanh.astro`

Stash changed `/cong-cu/so-sanh/` from a redirect/meta refresh page into a hub.

Current `HEAD` already contains the hub and is newer than the stash version:

- H1: `So sánh dinh dưỡng`
- Route remains `/cong-cu/so-sanh/`
- No redirect
- No meta refresh
- Links to:
  - `/cong-cu/so-sanh-thuc-pham`
  - `/cong-cu/so-sanh-bua-an`
- Child cards use `Đang hoàn thiện`
- No new calculation form
- No new engine
- No formula or nutrition data change

Decision: stash content is already included and polished through stash review, QA polish, final review, and status v6.

## Remaining Useful Stash Content

No useful content remained in the stash that was missing from `HEAD`.

The current committed branch already includes or safely supersedes every relevant stash change.

## Cleanup Action

Ran:

- `git stash drop stash@{0}`

Result:

- Dropped `stash@{0}` / `c3c4ff7b96f83db5d4df0cfb1f945254c44c04f3`

Stash list after drop:

- empty

## Out of Scope

No changes were made to:

- engine logic
- formulas
- nutrition data
- route implementations
- stable tool behavior
- `dist`

No deploy was performed.

## Conclusion

Cleanup is safe. The old `so-sanh` stash was a pre-status-v6 copy of changes that are now committed, reviewed, QA-polished, final-reviewed, and represented in `tools-core-status-v6`.
