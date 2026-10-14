export const CITIES = ['Agra','Ahmedabad','Ambala','Amritsar','Anand','Bangalore','Bareilly','Bengaluru','Bhilai','Bhopal','Bilaspur','Chandigarh','Chennai','Coimbatore','Dehradun','Dombivali','Faridabad','Gandhinagar','Gautam Buddha Nagar','Ghaziabad','Goa','Greater Noida','Gurugram','Haridwar','Hosur','Hyderabad','Indore','Jaipur','Jalandhar','Kanpur','Karnal','Kharar','Lucknow','Ludhiana','Margoa','Meerut','Mohali','Mumbai','Mysuru','Nagpur','Nashik','Navi Mumbai','New Delhi','Noida','Panaji','Panchkula','Panipat','Patiala','Pondicherry','Prayagraj','Pune','Raipur','Rajkot','Rohtak','Surat','Thane','Tiruppur','Udaipur','Vadodara','Varanasi','Vijayawada','Zirakpur'];
export const citySlug = (c) => c.toLowerCase().replace(/\s+/g, '-');

// Sample outlets: generated placeholders, NOT real addresses.
export const outletsFor = (city) => ['Central Market', 'Main Road', 'Mall Plaza'].map((area, i) => ({
  id: `${citySlug(city)}-${i + 1}`,
  name: `BakerU ${area}, ${city}`,
  address: `Sample address ${i + 1}, ${area}, ${city}`,
  hours: '9:00 AM – 11:00 PM',
}));

export const TESTIMONIALS = [
  { text: 'Warm brownies that melt in your mouth. This is the first place on our list whenever we crave something sweet.', who: 'Sample Customer A, Gurugram' },
  { text: 'The chocolate truffle is unforgettable. A must-visit for anyone with a sweet tooth.', who: 'Sample Customer B, Mumbai' },
  { text: 'Every visit feels like a special occasion. The packaging is gorgeous and the taste is even better.', who: 'Sample Customer C, Bengaluru' },
];

export const PROMISES = [
  { title: 'Authentic Recipes', text: 'Our products are based on traditional home-style recipes using fresh ingredients.' },
  { title: 'Baked with Love', text: 'Our passion for baking is poured into every recipe, serving smiles on a plate.' },
  { title: 'Committed to Quality', text: 'From our kitchen operations to our guest services, we always prioritize quality.' },
  { title: 'Honestly Priced', text: 'We constantly strive to offer the best products at the right prices.' },
];

// Team members are fictional placeholders (the reference lists real executives; we do not copy them).
export const TEAM = [
  { name: 'Sample Person One', role: 'Chief Executive Officer', bio: 'Placeholder biography for the demo. Replace with your own team details.' },
  { name: 'Sample Person Two', role: 'Head of Production & Innovation', bio: 'Placeholder biography for the demo. Replace with your own team details.' },
  { name: 'Sample Person Three', role: 'Chief Marketing Officer', bio: 'Placeholder biography for the demo. Replace with your own team details.' },
  { name: 'Sample Person Four', role: 'Chief Operating Officer', bio: 'Placeholder biography for the demo. Replace with your own team details.' },
];

export const FAQS = [
  { q: 'Is this a real bakery?', a: 'No. BakerU is a demo storefront built for learning. No real orders, payments or deliveries happen.' },
  { q: 'How do I place an order?', a: 'Add items to the cart, open the cart and use Checkout. The checkout is a mock: it saves a demo order in your browser only.' },
  { q: 'Which promo codes work?', a: 'See the Promo Codes page. Codes are applied in the cart using sample rules that mimic the reference site.' },
  { q: 'Where is my data stored?', a: 'In your browser’s localStorage. It stays on this device and browser, does not sync across devices and is not a real account.' },
  { q: 'Are the prices and ratings real?', a: 'Most prices, all ratings, reviews, outlets and team names are sample data. A few prices were copied from the reference homepage.' },
  { q: 'How do I clear my saved data?', a: 'Open Account → Settings and use “Reset all saved data”.' },
  { q: 'Do you have eggless options?', a: 'Yes. Use the “Eggless only” filter on any product listing.' },
];

export const ARTICLES = [
  { slug: 'how-to-pick-the-perfect-celebration-cake', title: 'How to Pick the Perfect Celebration Cake', date: '2026-08-12', excerpt: 'Size, flavour and timing: a simple guide to choosing a cake for any occasion.', image: 'cakes', body: ['A good celebration cake balances flavour, size and the mood of the day. Start with the guest count: a 500g cake serves roughly four to six people.', 'Pick a flavour most guests will love: chocolate truffle is a safe crowd-pleaser, while fruit cakes suit lighter, summer celebrations.', 'Finally, order early for special occasions so your cake is fresh and ready on time. (Sample article for demo purposes.)'] },
  { slug: 'brownie-guide-fudgy-vs-cakey', title: 'The Brownie Guide: Fudgy vs Cakey', date: '2026-07-03', excerpt: 'What makes a brownie fudgy, what makes it cakey, and which one should you choose?', image: 'brownies', body: ['Fudgy brownies have a higher fat-to-flour ratio and less leavening, giving a dense, gooey crumb.', 'Cakey brownies use more flour and a little baking powder for a lighter bite.', 'Both are delicious with a scoop of vanilla ice cream. (Sample article for demo purposes.)'] },
  { slug: 'a-beginners-guide-to-sourdough', title: 'A Beginner’s Guide to Sourdough', date: '2026-06-18', excerpt: 'Why long fermentation gives sourdough its tang, chew and crackly crust.', image: 'breads', body: ['Sourdough relies on wild yeast and bacteria, which ferment slowly and develop flavour over many hours.', 'The result is a tangy loaf with an open crumb and a blistered crust.', 'Store it cut-side down on a board for the best texture. (Sample article for demo purposes.)'] },
  { slug: 'gifting-ideas-for-every-festival', title: 'Gifting Ideas for Every Festival', date: '2026-05-21', excerpt: 'From hampers to mini boxes: edible gifts that always land well.', image: 'gifting', body: ['Edible gifts are thoughtful, easy to personalise and rarely unwelcome.', 'Mix textures: something fudgy, something crunchy and something creamy.', 'Add a handwritten note for a personal touch. (Sample article for demo purposes.)'] },
];

export const STATIC_PAGES = {
  'privacy-policy': { title: 'Privacy Policy', body: ['This is a demo website. We do not operate servers that collect your data.', 'Any preferences, cart items, favourites and demo orders are kept only in your browser’s localStorage on this device.', 'Do not enter real passwords, payment details or other sensitive information anywhere on this site.'] },
  'terms-and-conditions': { title: 'Terms & Conditions', body: ['BakerU is a non-commercial demo storefront created for learning and portfolio purposes.', 'No real products are sold. Prices, availability, reviews and outlets are sample data.', 'The visual design is inspired by a public reference website; all brand names have been replaced.'] },
  'refund-policy': { title: 'Refund Policy', body: ['Because no real orders are taken, there is nothing to refund.', 'Demo orders you create exist only in your browser and can be deleted at any time from Settings.'] },
  'cookie-policy': { title: 'Cookie Policy', body: ['This site sets no cookies. It uses localStorage to remember your theme, cart and similar preferences.', 'Clear your browser data or use “Reset all saved data” in Settings to remove it.'] },
  'corporate-social-responsibility': { title: 'Corporate Social Responsibility', body: ['Placeholder CSR page. Replace this text with your own initiatives.', 'Typical topics: surplus food donation, sustainable packaging and community baking programmes.'] },
  'nutritional-information': { title: 'Nutritional Information', body: ['Placeholder nutrition page. Demo products have no verified nutritional data.', 'A real shop should list calories, allergens and ingredients per product here.'] },
  'corporate-gifting': { title: 'Corporate Gifting', body: ['Placeholder page. The reference site offers a downloadable catalogue; no catalogue is bundled with this demo.', 'Use the Contact page to send a demo enquiry.'] },
};
