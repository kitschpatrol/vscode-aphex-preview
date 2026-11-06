# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Maintenance

- Refresh development dependencies, including shared-config 8.14, VSCE 4.1, and pnpm 12.16.1, and normalize Node.js engine metadata to LTS ranges while retaining the 22.19.0 minimum.
- Replace the contributor-skill `prepare` hook with pnpm workspace skill configuration and include ignored agent files in deep cleanup.
- Update CI and release actions, and move automated dependency updates to a monthly schedule with a consistent pull-request title.
- Exclude loopback URLs from link checks and allow checks with no discovered links to pass.
- Remove obsolete pnpm build approvals and release-age exemptions, and add an ESLint 10 peer compatibility rule for the development accessibility linter.

## [1.0.2] - 2026-10-06

### Documentation

- Generate the README settings reference from extension metadata, clarifying manifest-path resolution and preview-width units, and update badge links.

### Maintenance

- Migrate to pnpm 12, TypeScript 6, and shared-config 8; refresh development dependencies, adapt builds, hover tests, and lint configuration, and require Node.js `^24.16.0 || >=26.3.0` for development.
- Add install-time contributor-skill synchronization and rename the cleanup script from `clean` to `clean-deep`.
- Add link checking for repository Markdown and the configured project website, running on changes, manual requests, and a weekly schedule.
- Add scheduled and manually triggered dependency-update pull requests using `ksc-update`.
- Refresh and pin GitHub Actions across CI, metadata synchronization, and releases, and explicitly disable automatic package-manager caching in the release workflow.

## [1.0.1] - 2026-05-18

### Documentation

- Update the README's MIT license badge URL.

### Maintenance

- Refresh development dependencies and migrate to pnpm 11, moving package-manager settings into the workspace configuration and requiring Node.js 22.22.2+ for development.
- Require frozen-lockfile installation in release automation, adopt `pnpm ci` for CI and releases, update workflow actions, and improve release workflow shell quoting.

## [1.0.0] - 2026-04-27

### Added

- Provide hover thumbnails and links to cached `~aphex/` images in JavaScript, TypeScript, JSX, TSX, Markdown, MDX, HTML, Astro, and Svelte files, supporting VS Code 1.105+.
- Recognize quoted, backtick-delimited, angle-bracketed, and unquoted Aphex URLs, including quoted paths containing spaces and whitespace before the URL.
- Configure workspace-relative or absolute cache manifest paths with `aphex-preview.manifestPath`, and preview widths with `aphex-preview.maxWidth` (300 logical points by default, range 1–6016).
- Read the existing Aphex cache manifest from `node_modules/.cache/aphex/.aphex-plugin-cache.json` by default, resolve images relative to it, reload changed manifests on hover, and show rebuild guidance for missing entries or files.

### Documentation

- Add illustrated Marketplace installation and configuration guidance, supported file types, and an explanation of cache-only operation and macOS requirements for generating images from Apple Photos.
- Document the issue-first contribution process and the shared linting and README generation tools.

### Maintenance

- Set up TypeScript builds, shared linting, hover integration tests, Linux/macOS/Windows CI, and automated VSIX packaging and releases.

[Unreleased]: https://github.com/kitschpatrol/vscode-aphex-preview/compare/v1.0.2...HEAD
[1.0.0]: https://github.com/kitschpatrol/vscode-aphex-preview/releases/tag/v1.0.0
[1.0.1]: https://github.com/kitschpatrol/vscode-aphex-preview/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/vscode-aphex-preview/compare/v1.0.1...v1.0.2
