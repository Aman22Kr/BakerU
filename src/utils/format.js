import { QUICK } from '../config/quickSettings';
export const money = (n) => `${QUICK.CURRENCY}${Number(n).toLocaleString('en-IN')}`;
export const fullImg = (src) => (src || '').replace('/crops/160/', '/').replace(/\.webp$/, '');
export const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#E6F4F0"/><text x="200" y="165" font-size="64" text-anchor="middle">🧁</text></svg>`
  );
