import { CATEGORIES } from './categories';

const U = 'https://cdn.uengage.io/uploads/7175/crops/160/';
const catImg = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.img]));

// [name, category, price (₹), 'E' eggless | 'W' with egg, description, optional own image, real?]
// Prices marked real=false are SAMPLE prices. Real = price seen on the reference homepage.
const RAW = [
  ['Blueberry Cheesecake [500g]', 'cakes', 850, 'E', 'Creamy baked cheesecake on a buttery biscuit base, finished with a glossy blueberry compote.', U + 'image-986137-1771829864.jpeg.webp', 1],
  ['Blueberry Cheesecake Jar', 'desserts-cupcakes', 245, 'E', 'Single-serve jar layered with biscuit crumb, cream cheese and blueberry.', U + 'image-449316-1693683251.jpeg.webp', 1],
  ['Lotus Biscoff Bento Cheesecake [320g]', 'cakes', 595, 'E', 'A bento-sized cheesecake topped with caramelised biscuit spread and crumble.', U + 'image-253892-1762323062.jpeg.webp', 1],
  ['Lotus Biscoff Cheesecake Tub [200g]', 'desserts-cupcakes', 380, 'E', 'Spoonable biscuit cheesecake in a take-away tub.', U + 'image-314172-1764135497.jpeg.webp', 1],
  ['New York Style Baked Cheesecake [500g]', 'cakes', 725, 'E', 'Dense, silky, slow-baked cheesecake in the classic New York style.', U + 'image-169916-1771829864.jpeg.webp', 1],
  ['Chocolate Truffle Cake [500g]', 'cakes', 695, 'W', 'Layers of dark chocolate sponge and ganache with a mirror-smooth finish.'],
  ['Eggless Chocolate Truffle Cake [500g]', 'cakes', 695, 'E', 'The classic truffle, made without egg.'],
  ['Red Velvet Cake [500g]', 'cakes', 725, 'W', 'Cocoa-kissed red sponge with tangy cream cheese frosting.'],
  ['Pineapple Cake [500g]', 'cakes', 575, 'E', 'Light vanilla sponge, whipped cream and juicy pineapple.'],
  ['Rasmalai Cake [500g]', 'cakes', 750, 'E', 'Cardamom sponge soaked in saffron milk with rasmalai cream.'],
  ['Mango Cake [500g]', 'cakes', 650, 'E', 'Seasonal mango mousse layered with soft sponge.'],
  ['Belgian Chocolate Pastry', 'pastries', 165, 'W', 'A single slice of rich Belgian chocolate cake.'],
  ['Eggless Black Forest Pastry', 'pastries', 145, 'E', 'Chocolate sponge, cherries and whipped cream.'],
  ['Butterscotch Pastry', 'pastries', 135, 'W', 'Caramel crunch over vanilla sponge.'],
  ['Red Velvet Pastry', 'pastries', 160, 'W', 'A slice of red velvet with cream cheese frosting.'],
  ['Tiramisu Pastry', 'pastries', 190, 'W', 'Coffee-soaked sponge with mascarpone cream and cocoa.'],
  ['Pineapple Pastry', 'pastries', 125, 'E', 'Soft sponge with fresh cream and pineapple.'],
  ['Walnut Brownie', 'brownies', 120, 'W', 'Fudgy brownie studded with toasted walnuts.'],
  ['Eggless Chocolate Brownie', 'brownies', 110, 'E', 'Dense, gooey chocolate brownie without egg.'],
  ['Hot Fudge Brownie', 'brownies', 175, 'W', 'Warm brownie served with a molten fudge centre.'],
  ['Brownie Box of 6', 'brownies', 599, 'W', 'Six assorted brownies in a gift-ready box.'],
  ['Double Chocolate Cupcake', 'desserts-cupcakes', 95, 'W', 'Chocolate cupcake with chocolate buttercream.'],
  ['Vanilla Cupcake', 'desserts-cupcakes', 85, 'E', 'Classic vanilla cupcake with swirled frosting.'],
  ['Chocolate Mousse Cup', 'desserts-cupcakes', 140, 'E', 'Airy dark chocolate mousse in a cup.'],
  ['Tiramisu Jar', 'desserts-cupcakes', 230, 'W', 'Layered coffee dessert in a jar.'],
  ['Veg Puff', 'sandwiches-savouries', 60, 'E', 'Flaky puff pastry filled with spiced vegetables.'],
  ['Paneer Tikka Sandwich', 'sandwiches-savouries', 175, 'E', 'Grilled sandwich with smoky paneer tikka.'],
  ['Chicken Mayo Sandwich', 'sandwiches-savouries', 185, 'W', 'Shredded chicken, mayo and crunchy greens on soft bread.'],
  ['Mushroom Quiche', 'sandwiches-savouries', 150, 'W', 'Buttery tart shell with mushroom and cheese custard.'],
  ['Butter Croissant', 'croissants-danishes-muffins', 110, 'W', 'Laminated, flaky and buttery.'],
  ['Almond Croissant', 'croissants-danishes-muffins', 145, 'W', 'Filled with almond cream and topped with flaked almonds.'],
  ['Blueberry Muffin', 'croissants-danishes-muffins', 100, 'W', 'Soft muffin bursting with blueberries.'],
  ['Chocolate Chip Muffin', 'croissants-danishes-muffins', 100, 'E', 'Vanilla muffin with generous chocolate chips.'],
  ['Fruit Danish', 'croissants-danishes-muffins', 130, 'W', 'Flaky danish with custard and seasonal fruit.'],
  ['Chef’s Signature Tart', 'chefs-table', 260, 'W', 'A rotating seasonal tart from the chef’s counter.'],
  ['Pistachio Éclair', 'chefs-table', 220, 'W', 'Choux filled with pistachio cream.'],
  ['Banana Walnut Tea Cake', 'tea-cakes', 190, 'E', 'Moist banana loaf with walnuts.'],
  ['Orange Tea Cake', 'tea-cakes', 180, 'E', 'Zesty orange loaf cake.'],
  ['Marble Tea Cake', 'tea-cakes', 170, 'W', 'Vanilla and chocolate swirled loaf.'],
  ['Oats & Raisin Cookies (200g)', 'biscuits-cookies-crackers', 240, 'E', 'Chewy oatmeal cookies with raisins.'],
  ['Choco Chip Cookies (200g)', 'biscuits-cookies-crackers', 250, 'W', 'Crisp-edged cookies with chocolate chunks.'],
  ['Cheese Crackers (150g)', 'biscuits-cookies-crackers', 160, 'E', 'Savoury, crunchy cheese crackers.'],
  ['Almond Biscotti (150g)', 'biscuits-cookies-crackers', 210, 'E', 'Twice-baked almond biscotti, ideal with coffee.'],
  ['Celebration Gift Hamper', 'gifting', 1499, 'W', 'Brownies, cookies and chocolates in a keepsake box.'],
  ['Chocolate Lovers Hamper', 'gifting', 1299, 'W', 'A chocolate-forward assortment for gifting.'],
  ['Mini Gift Box', 'gifting', 499, 'E', 'Four assorted treats in a ribbon-tied box.'],
  ['Sourdough Loaf', 'breads', 220, 'E', 'Slow-fermented, crusty sourdough loaf.'],
  ['Multigrain Bread', 'breads', 120, 'E', 'Wholesome sliced loaf with seeds.'],
  ['Garlic Focaccia', 'breads', 180, 'E', 'Olive-oil focaccia with garlic and herbs.'],
  ['Cold Coffee', 'beverages', 160, 'E', 'Chilled coffee blended with milk.'],
  ['Hot Chocolate', 'beverages', 170, 'E', 'Thick, rich drinking chocolate.'],
  ['Iced Tea', 'beverages', 140, 'E', 'Lemon iced tea, lightly sweetened.'],
  ['Birthday Candles Set', 'cake-add-ons', 40, 'E', 'Pack of assorted birthday candles.'],
  ['Cake Topper: Happy Birthday', 'cake-add-ons', 60, 'E', 'Reusable topper for celebration cakes.'],
  ['Dark Chocolate Bar (80g)', 'chocolates', 220, 'E', 'Smooth 60% dark chocolate bar.'],
  ['Assorted Truffles Box (9)', 'chocolates', 450, 'E', 'Nine hand-finished chocolate truffles.'],
  ['Hazelnut Praline Bites (120g)', 'chocolates', 340, 'E', 'Crunchy hazelnut praline in milk chocolate.'],
  ['BakerU Tote Bag', 'collectibles', 399, 'E', 'Canvas tote with the BakerU mark.'],
  ['BakerU Mug', 'collectibles', 449, 'E', 'Ceramic mug for your morning chai or coffee.'],
  ['Brownie + Cookie Combo', 'combos', 349, 'W', 'A brownie and two cookies, paired for a snack break.'],
  ['Cake + Cupcakes Combo', 'combos', 899, 'W', 'A 500g cake with two cupcakes.'],
  ['Tea-Time Combo', 'combos', 479, 'E', 'A tea cake slice and two biscotti.'],
  ['Value Brownie Pack of 4', 'value-combos', 399, 'W', 'Four brownies at a value price.'],
  ['Value Cookie Pack of 3', 'value-combos', 549, 'E', 'Three cookie jars at a value price.'],
];

const slugify = (s) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const PRODUCTS = RAW.map(([name, cat, price, egg, desc, img, real], i) => ({
  id: 'p' + String(i + 1).padStart(3, '0'),
  slug: slugify(name),
  name,
  category: cat,
  price,
  eggless: egg === 'E',
  description: desc,
  image: img || catImg[cat],
  priceIsSample: !real,
  rating: Math.round((4.2 + ((i * 7) % 8) / 10) * 10) / 10, // sample rating
  reviewCount: 20 + ((i * 37) % 180),                        // sample count
  available: i % 23 !== 22,                                  // a few "sold out" for demo states
  keywords: [name, cat, egg === 'E' ? 'eggless' : 'with egg'].join(' ').toLowerCase(),
}));

export const productById = (id) => PRODUCTS.find((p) => p.id === id);
export const productBySlug = (s) => PRODUCTS.find((p) => p.slug === s);
export const productsInCategory = (c) => PRODUCTS.filter((p) => p.category === c);
