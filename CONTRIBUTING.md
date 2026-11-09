# Contributing

Use `templates/package/` as a starting point. Keep agents declarative: no runtime code, credentials, absolute paths, or claims of actions that Talia cannot perform. Preserve source attribution and license terms. Put agent-only skills in `skills/<id>/SKILL.md`; shared skills must use their namespaced package ID and be declared once in `talia-extension.json` dependencies.

Run `npm test` in this repository before opening a pull request. Validate a complete catalog and dependency closure with `talia-store/tools/talia-catalog-pack.cjs build --format 3`; the packer requires every declared shared skill dependency to be selected exactly once. The official store selects packages explicitly; a legacy source package does not become a featured store item just because it is present here. The profile generalists are bundled by Talia desktop and are not store packages.
