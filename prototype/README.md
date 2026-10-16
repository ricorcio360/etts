# Customelo — homepage design prototype

A standalone, responsive merchant storefront concept. No connection to Customelo, Lovable, payments, customer accounts, cart persistence or AI services. Nothing has been deployed.

## View

`standalone.html` contains the entire prototype, all twelve reference images and the fonts in one file. It was validated over HTTP. Direct-file opening remains dependent on browser policy.

No installation or build step is needed. Use the tested local-server workflow:

```sh
cd /workspace/customelo-prototype
python -m http.server 4173 --bind 0.0.0.0
```

Open the server on port 4173 through your editor's available port preview. Stop the server with Ctrl+C. Opening `index.html` directly is an unverified portability option that depends on browser policy; the managed Chromium browser here blocks `file://` pages. The project remains separate from `/workspace/etts`, which contains the uploaded reference screenshots.

## Compare and explore

- **Prototype controls** at the lower left opens the original screenshot gallery and merchant branding controls. These controls are review tools, not proposed storefront features.
- The main shopping CTAs navigate within the homepage.
- Category links show local sample catalog groupings. These relationships are illustrative, not fetched from the real application.
- Product, cart, gallery, chat, social and policy destinations show a clearly labeled prototype notice. Those pages and workflows are outside the homepage scope.
- Menus, product-rail controls, touch scrolling and native FAQ disclosures work. Escape closes menus and dialogs.
- Live Preview and AI Preview are explained as existing Customelo capabilities. This homepage does not simulate generation or assign unsupported preview eligibility to individual products.

## Files

- `index.html`, `styles.css`, `app.js`: complete implementation.
- `REVIEW.md`: weaknesses, recommended direction and evidence limits.
- `PRODUCT.md`: product facts and scope.
- `DESIGN.md`: implemented visual system; YAML frontmatter owns color, type, shape, spacing and component tokens.
- `.impeccable/design.json`: extensions for shadows, motion, breakpoints, component specimens and narrative.
- `review/desktop.png`, `review/mobile.png`: full-page captures.
- `review/validation.json`: browser validation outcomes.

## Merchant branding

CSS variables at the top of `styles.css` define the accent, contrast-safe text, surfaces, fonts and spacing. `setBrand()` updates the demonstration accent and foreground contrast. `setMerchant()` updates the merchant name, initial and title. Production integration should use the platform's existing merchant configuration; this project does not prescribe new business logic. The fixed review controls are removable independently of the storefront.

## Images and fonts

`assets/1.png` through `assets/12.png` are unchanged screenshots uploaded by the user to `ricorcio360/etts`, commit `dcf3604d82386c8265b5782c621f0121fea1df63`. The screenshot viewport map in `app.js` displays their existing photography through SVG `viewBox` crops. It does not redraw or AI-regenerate products. Screenshot crops have limited resolution and should be replaced with original merchant assets during a future approved integration. The hero crop excludes the source screenshot's headline, navigation and floating chat control.

DM Serif Display and DM Sans are self-hosted from Google Fonts' official `google/fonts` repository, under their included SIL Open Font Licenses. `assets/sources.json` records observed image URLs, including original product storage URLs that were blocked here. Those URLs are provenance, not runtime dependencies. The downloaded `assets/hero.webp` is unused; the displayed hero uses the uploaded screenshot. The browser makes no external requests. No customer data is collected or stored.

## Impeccable

The design uses the Impeccable skill's hierarchy, craft, responsive, motion and accessibility guidance. Its CLI is not installed here; context, concept-seed and detector availability were checked, so automated Impeccable scoring is not claimed. An independent screenshot review supplements browser interaction checks.
