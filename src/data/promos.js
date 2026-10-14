// Codes seen on the reference homepage. Rules are modelled client-side only.
export const PROMOS = [
  { code: 'COMBO15', title: '15% OFF ON ALL COMBOS', type: 'percent', value: 15, categories: ['combos', 'value-combos'] },
  { code: 'NEW50', title: 'Rs.50 OFF ON ORDERS ABOVE ₹500', type: 'flat', value: 50, min: 500 },
  { code: 'NEW80', title: 'Rs.80 OFF ON ORDERS ABOVE ₹800', type: 'flat', value: 80, min: 800 },
  { code: 'NEW125', title: 'Rs.125 OFF ON ORDERS ABOVE ₹1000', type: 'flat', value: 125, min: 1000 },
  { code: 'NEW200', title: 'Rs.200 OFF ON ORDERS ABOVE ₹1500', type: 'flat', value: 200, min: 1500 },
  { code: 'THB40', title: 'Rs.40 OFF ON ORDERS ABOVE ₹500', type: 'flat', value: 40, min: 500 },
  { code: 'THB75', title: 'Rs.75 OFF ON ORDERS ABOVE ₹800', type: 'flat', value: 75, min: 800 },
  { code: 'THB100', title: 'Rs.100 OFF ON ORDERS ABOVE ₹1000', type: 'flat', value: 100, min: 1000 },
  { code: 'THB150', title: 'Rs.150 OFF ON ORDERS ABOVE ₹1500', type: 'flat', value: 150, min: 1500 },
];
export const promoByCode = (c) => PROMOS.find((p) => p.code === (c || '').trim().toUpperCase());
