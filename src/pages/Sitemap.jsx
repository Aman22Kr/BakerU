import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { CATEGORIES } from '../data/categories';
import { ARTICLES, STATIC_PAGES } from '../data/content';
import { FOOTER_LINKS, NAV } from '../config/quickSettings';

const G = ({ title, items }) => (
  <section><h2 className="font-sans text-base font-semibold mb-2">{title}</h2>
    <ul className="space-y-1 text-sm">{items.map((i) => <li key={i.to}><Link className="hover:text-accent hover:underline" to={i.to}>{i.label}</Link></li>)}</ul></section>
);
export default function Sitemap() {
  return (
    <>
      <PageHero title="Sitemap" />
      <div className="container max-w-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <G title="Main" items={[...NAV, { label: 'Cart', to: '/cart' }, { label: 'Favourites', to: '/wishlist' }, { label: 'Track Orders', to: '/past-order' }, { label: 'Account', to: '/profile' }, { label: 'FAQs', to: '/faqs' }, { label: 'Promo Codes', to: '/promo-codes' }]} />
        <G title="Collections" items={CATEGORIES.map((c) => ({ label: c.name, to: `/products/${c.slug}` }))} />
        <G title="Articles" items={ARTICLES.map((a) => ({ label: a.title, to: `/articles/${a.slug}` }))} />
        <G title="Information" items={Object.entries(STATIC_PAGES).map(([k, v]) => ({ label: v.title, to: `/page/${k}` })).concat(FOOTER_LINKS.filter((l) => l.label === 'Our Story'))} />
      </div>
    </>
  );
}
