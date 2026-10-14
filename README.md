# BakerU: demo patisserie storefront

BakerU is a multi-page, fully static recreation of the *structure and feel* of an online bakery store
(reference: <https://theobroma.in/>), rebranded as **BakerU**. It is a learning/portfolio project:
**no real products are sold, no payments are taken and no backend exists.**

Built with Vite, React (JSX), Tailwind CSS 3, React Router (HashRouter), Lucide React and Framer Motion.

## What's inside

Home (banner carousel, promos, categories, cheesecake range, testimonials), About, Products (17 collections),
Collection pages (filters, sorting, URL query params), Product detail pages (`#/product/<slug>`), global search with
suggestions and history, Cart with promo codes, mock Checkout, Orders ("Track"), Favourites, Account & Settings,
Contact (autosaved draft), FAQs, Speciality Cakes, Blogs + articles, Store Locator + city pages, Promo Codes,
policy pages, Sitemap and a Not-Found page. A small "Advertisement" band appears above the footer of every page.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serves the production build
```

## Deploy to GitHub Pages (GitHub Actions only)

1. Create a repository (any name) and push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/<your-repo>.git
   git push -u origin main
   ```
2. In the repository open **Settings → Pages** and set **Source = GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`
   (it can also be run manually from the **Actions** tab). Workflow permissions are declared in the file.
4. Your site appears at `https://aman22kr.github.io/<your-repo>/`.

Notes:
- `vite.config.js` uses `base: './'`, so asset URLs are relative and the repo name never needs to be configured.
- `HashRouter` is used, so refreshes and direct links (`.../#/products/cakes`) work without server rewrites.
- After your first local `npm install`, commit the generated `package-lock.json` and change `npm install` to
  `npm ci` in the workflow for reproducible builds.

## Quick Settings

Edit `src/config/quickSettings.js`: brand name, phone/email, GitHub username, default animation speed
(`slow | normal | fast | off`) and intensity (`subtle | medium | strong`), storage prefix, ads on/off.
Catalogue content lives in `src/data/`. Hero images live in `src/data/banners.js`.

## localStorage

Namespaced under `bakeru:v1:`. Stored: theme, cart, favourites, recently viewed, search history, promo code,
location, order type, demo orders, demo profile name/email, animation settings, contact draft.
Values are validated on load; malformed data falls back to defaults. localStorage is specific to one browser on
one device, does not sync, and is not an account. Never store passwords or payment details. "Reset all saved data"
is in Account → Settings.

## Demo limitations

- Login is a mock (name + any 4-digit code). No OTP, phone number or secret is collected.
- Checkout saves a *demo order* locally; no payment, booking or delivery happens.
- Most prices, all ratings/reviews, outlets, team members and testimonials are fictional sample data.
  Five cheesecake prices and the promo-code rules were taken from the reference homepage.
- Product listings on the reference site are rendered by JavaScript and could not be read, so the product
  catalogue is a hand-written sample. Contact, FAQ, blog and policy pages were not inspected; they follow
  the reference's navigation structure with original placeholder content.
- Images are hot-linked from the reference site's CDN (with automatic fallback to a placeholder). Some banners may contain
  the original brand's artwork; replace the URLs in `src/data/banners.js` with your own images. Hot-linked images may
  stop working if the source changes.
- Ads are a house-ad placeholder; no ad network script is loaded.
- Colours are approximations (the reference's `theme-color` mint `#B0DCD1` plus a cocoa brown); pixel-exact fidelity was not verified.
