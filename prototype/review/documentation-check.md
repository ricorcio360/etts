# Documentation check

Compared PRODUCT.md, REVIEW.md, README.md, DESIGN.md and `.impeccable/design.json` with `index.html`, `styles.css` and `app.js` by source inspection. No browser or automated Impeccable detector was run for this check.

- Homepage-only scope, local category state, destination notices, merchant branding controls and qualified preview explanations agree with the implementation.
- DESIGN.md frontmatter holds visual token primitives; the schema-version-2 sidecar holds extensions, component specimens and matching narrative. No duplicated primitive token groups were found in the sidecar.
- Clarified SVG screenshot crops, observed versus used image assets, document roles, tablet featured-card visibility and light secondary buttons. Existing browser outcomes remain in `validation.json`; this check does not replace them.
- PRODUCT.md and REVIEW.md now describe SVG viewport crops, matching `photo()` and the unchanged uploads. README recommends the tested HTTP workflow and identifies direct file opening as unverified under browser policy.
