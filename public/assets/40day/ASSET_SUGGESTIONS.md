40-Day Challenge — Asset suggestions and purchase guidance

This file lists recommended search keywords, sample types of assets, and suggested filenames/alt text for use on the 40-Day Challenge page.

Notes before buying
- Always confirm the license (commercial/use in a web product) on Envato Elements / Freepik before downloading.
- Prefer WebP for production (smaller, high-quality). Keep a high-resolution JPG/PNG master if needed.
- Place final files in `public/assets/40day/` with the exact filenames below so the page picks them up automatically.

Suggested assets (keywords + usage)

1) Hero / Lead Visual
- Purpose: Large eye-catching visual for the hero card (left/right depending on layout).
- Keywords: "AI trading dashboard", "futuristic finance illustration", "crypto analytics hero", "trading interface", "data visualization background".
- Envato search example: https://elements.envato.com/search?search=ai+trading+dashboard
- Freepik search example: https://www.freepik.com/search?format=search&query=ai%20trading%20dashboard
- Recommended asset types: abstract illustration, stylized UI mockup, or lifestyle photo with analytics overlays.
- Suggested filename: `public/assets/40day/hero.webp`
- Suggested alt text: "AI trading dashboard illustration — 40-Day Challenge hero"

2) Dashboard UI / Product Preview
- Purpose: show a real or mock screenshot of the dashboard / analytics users will see.
- Keywords: "dashboard UI mockup", "analytics dashboard screenshot", "trading UI mockup".
- Envato search example: https://elements.envato.com/search?search=dashboard+ui+mockup
- Freepik search example: https://www.freepik.com/search?format=search&query=dashboard%20ui
- Suggested filename: `public/assets/40day/dashboard.webp`
- Suggested alt text: "Dashboard preview — daily AI signals and analytics"

3) Community / People imagery
- Purpose: show the human side — group coaching, community, support.
- Keywords: "online community", "team chat", "mentorship", "trading community".
- Envato search example: https://elements.envato.com/search?search=online+community
- Freepik search example: https://www.freepik.com/search?format=search&query=trading%20community
- Suggested filename: `public/assets/40day/community.webp`
- Suggested alt text: "Community support and live coaching — 40-Day Challenge"

Sizing & format recommendations
- Hero: 1600×900 px (or larger), 1200×720 minimum. Save as `webp` with quality 80 for web.
- Dashboard / screenshots: 1200×700 px, crop to the focal UI area; use `webp`.
- Community: 1200×700 px.
- Generate responsive `srcset` or let next image tooling create multiple sizes at build time.

Placement and replacement
- Replace existing placeholder SVGs in `public/assets/40day/` by adding your `hero.webp`, `dashboard.webp`, and `community.webp` files.
- After adding files, restart dev server (or let Vite hot-reload) and confirm assets render at `/40daychallenge`.

Licensing checklist
- Confirm commercial use / web use allowed.
- Retain license receipts (screen capture or invoice) and store them in project docs.

If you want, tell me which 3 candidate assets you pick and I will:
- Download them if you provide the licensed files, or
- Wire them into the repo (copy into `public/assets/40day/`), and
- Fine-tune alt text, cropping, and fallback `srcset` for responsive display.
