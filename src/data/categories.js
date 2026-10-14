const U = 'https://cdn.uengage.io/uploads/7175/crops/160/';
// Image URLs are the category thumbnails used by the reference site (hot-linked).
export const CATEGORIES = [
  { slug: 'combos', name: 'Combos', img: U + 'image-831986-1711902215.jpeg.webp' },
  { slug: 'cakes', name: 'Cakes', img: U + 'image-325136-1701162080.jpeg.webp' },
  { slug: 'pastries', name: 'Pastries', img: U + 'image-148TD0-1681384622.jpg.webp' },
  { slug: 'brownies', name: 'Brownies', img: U + 'image-QEH716-1681384690.jpg.webp' },
  { slug: 'desserts-cupcakes', name: 'Desserts & Cupcakes', img: U + 'image-4CDG68-1687877409.jpg.webp' },
  { slug: 'sandwiches-savouries', name: 'Sandwiches & Savouries', img: U + 'image-576647-1714137762.jpeg.webp' },
  { slug: 'croissants-danishes-muffins', name: 'Croissants, Danishes & Muffins', img: U + 'image-P6S262-1681384636.jpg.webp' },
  { slug: 'chefs-table', name: "Chef's Table", img: U + 'image-816585-1776141790.jpeg.webp' },
  { slug: 'tea-cakes', name: 'Tea Cakes', img: U + 'image-ZZ9ZUG-1681384659.jpg.webp' },
  { slug: 'biscuits-cookies-crackers', name: 'Biscuits, Cookies & Crackers', img: U + 'image-458954-1711446588.jpeg.webp' },
  { slug: 'gifting', name: 'Gifting', img: U + 'image-866546-1705143025.jpeg.webp' },
  { slug: 'breads', name: 'Breads', img: U + 'image-K496HP-1681384646.jpg.webp' },
  { slug: 'beverages', name: 'Beverages', img: U + 'image-364837-1710760684.jpeg.webp' },
  { slug: 'cake-add-ons', name: 'Cake Add-Ons', img: U + 'image-688785-1723483484.jpeg.webp' },
  { slug: 'chocolates', name: 'Chocolates', img: U + 'image-PWI981-1681384655.jpg.webp' },
  { slug: 'collectibles', name: 'BakerU Collectibles', img: U + 'image-AJ9DA7-1686051000.jpg.webp' },
  { slug: 'value-combos', name: 'Value Combos', img: U + 'image-872122-1756194795.jpeg.webp' },
];
export const catBySlug = (s) => CATEGORIES.find((c) => c.slug === s);
