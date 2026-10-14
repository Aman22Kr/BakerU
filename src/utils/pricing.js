import { productById } from '../data/products';
import { promoByCode } from '../data/promos';

export function cartLines(cart) {
  return cart
    .map((l) => ({ ...l, product: productById(l.id) }))
    .filter((l) => l.product && l.qty > 0);
}

export function totals(cart, promoCode) {
  const lines = cartLines(cart);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const promo = promoByCode(promoCode);
  let discount = 0;
  let promoError = '';
  if (promoCode && !promo) promoError = 'Invalid promo code.';
  else if (promo) {
    const eligible = promo.categories
      ? lines.filter((l) => promo.categories.includes(l.product.category)).reduce((s, l) => s + l.product.price * l.qty, 0)
      : subtotal;
    if (promo.min && subtotal < promo.min) promoError = `Add items worth ₹${promo.min - subtotal} more to use ${promo.code}.`;
    else if (eligible === 0) promoError = `${promo.code} applies only to combos.`;
    else discount = promo.type === 'percent' ? Math.round((eligible * promo.value) / 100) : Math.min(promo.value, subtotal);
  }
  return { lines, subtotal, discount, promoError, total: Math.max(0, subtotal - discount), count: lines.reduce((s, l) => s + l.qty, 0) };
}
