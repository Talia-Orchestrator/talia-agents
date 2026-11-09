# Talia Agents

Public, declarative Talia agent packages. Package sources live in `packages/`; a package has `talia-extension.json`, `agent.json`, and any private skill assets it owns.

The official store publishes exactly ten canonical specialists. `assistant` and `general-researcher` are source packages bundled by Talia desktop for fresh profiles; they do not appear in the public catalog. The remaining legacy agent packages are kept here for reference and compatibility but are not advertised in the official store catalog. Existing installs are not removed by adding or publishing a package.

Shared skill references use namespaced IDs declared in each agent package's dependencies. Private agent skills remain bundled under `skills/<id>/`.

Repository: https://github.com/Talia-orchestator/talia-agents

Run npm test to validate package metadata and shared skill dependencies against the public skills repository and store packer. Pull requests use the same secrets-free check.
