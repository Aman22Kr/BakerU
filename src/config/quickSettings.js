// ─────────────────────────────────────────────────────────────
// QUICK SETTINGS: change these to reuse the project for another site.
// ─────────────────────────────────────────────────────────────
export const QUICK = {
  BRAND_NAME: 'BakerU',
  BRAND_TAGLINE: 'Food of the Gods, Freshly Baked!',
  REFERENCE_URL: 'https://theobroma.in/',
  GITHUB_USERNAME: 'Aman22kr',
  PHONE: '8182881881',
  EMAIL: 'hello@bakeru.example',
  // Animation defaults (users can override in Settings; saved in localStorage).
  ANIMATION_SPEED: 'normal',       // 'slow' | 'normal' | 'fast' | 'off'
  ANIMATION_INTENSITY: 'subtle',   // 'subtle' | 'medium' | 'strong'
  // Storage
  STORAGE_PREFIX: 'bakeru:v1:',
  // Ads: a small placeholder band at the bottom of every page.
  ADS_ENABLED: true,
  CURRENCY: '₹',
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Order Now', to: '/store-locator' },
  { label: 'Contact', to: '/contact' },
  { label: 'Speciality Cakes', to: '/speciality-cakes' },
  { label: 'Blogs', to: '/articles' },
];

export const FOOTER_LINKS = [
  { label: 'Store Locator', to: '/store-locator' },
  { label: 'Privacy Policy', to: '/page/privacy-policy' },
  { label: 'Faqs', to: '/faqs' },
  { label: 'CSR', to: '/page/corporate-social-responsibility' },
  { label: 'Nutritional Information', to: '/page/nutritional-information' },
  { label: 'Terms & Conditions', to: '/page/terms-and-conditions' },
  { label: 'Promo Codes', to: '/promo-codes' },
  { label: 'Refund Policy', to: '/page/refund-policy' },
  { label: 'Cookie Policy', to: '/page/cookie-policy' },
  { label: 'Sitemap', to: '/sitemap' },
  { label: 'Our Story', to: '/about' },
  { label: 'Corporate Gifting', to: '/page/corporate-gifting' },
];
