import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart, Leaf, Minus, Plus, Star } from 'lucide-react';
import Img from '../components/Img';
import ProductCard from '../components/ProductCard';
import NotFound from './NotFound';
import { productBySlug, productsInCategory } from '../data/products';
import { catBySlug } from '../data/categories';
import { useApp } from '../hooks/AppContext';
import { money } from '../utils/format';

const REVIEWS = [
  { n: 'Sample reviewer', r: 5, t: 'Fresh, soft and exactly as described.' },
  { n: 'Sample reviewer', r: 4, t: 'Lovely taste. Would order again.' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const p = productBySlug(slug);
  const { addToCart, toggleWish, wishlist, pushRecent } = useApp();
  const [qty, setQty] = useState(1);
  useEffect(() => { if (p) pushRecent(p.id); setQty(1); }, [p, pushRecent]);
  if (!p) return <NotFound what="product" />;
  const cat = catBySlug(p.category);
  const related = productsInCategory(p.category).filter((x) => x.id !== p.id).slice(0, 4);
  const liked = wishlist.includes(p.id);
  return (
    <div className="container max-w-page py-8">
      <nav className="mb-5 text-xs muted" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">Home</Link> / <Link to="/products" className="hover:underline">Products</Link> / <Link to={`/products/${cat.slug}`} className="hover:underline">{cat.name}</Link> / <span>{p.name}</span>
      </nav>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card overflow-hidden"><Img src={p.image} alt={p.name} eager className="aspect-square w-full object-cover" /></div>
        <div>
          <h1 className="text-3xl font-semibold">{p.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1"><Star size={15} className="fill-amber-400 text-amber-400" />{p.rating} <span className="muted">({p.reviewCount} sample reviews)</span></span>
            <span className={`inline-flex items-center gap-1 ${p.eggless ? 'text-green-700 dark:text-green-400' : 'text-amber-700 dark:text-amber-400'}`}><Leaf size={14} />{p.eggless ? 'Eggless' : 'Contains egg'}</span>
          </div>
          <p className="mt-4 text-2xl font-semibold">{money(p.price)}</p>
          {p.priceIsSample && <p className="text-xs muted">Sample price for demo purposes.</p>}
          <p className="mt-4 muted">{p.description}</p>
          <p className={`mt-3 text-sm font-medium ${p.available ? 'text-green-700 dark:text-green-400' : 'text-red-600'}`}>{p.available ? 'In stock' : 'Currently unavailable'}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-md border border-[var(--line)]">
              <button aria-label="Decrease quantity" className="p-2.5" onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus size={14} /></button>
              <span className="w-8 text-center text-sm" aria-live="polite">{qty}</span>
              <button aria-label="Increase quantity" className="p-2.5" onClick={() => setQty((q) => Math.min(20, q + 1))}><Plus size={14} /></button>
            </div>
            <button className="btn btn-primary" disabled={!p.available} onClick={() => addToCart(p.id, qty)}>Add to cart</button>
            <button className="btn btn-outline" aria-pressed={liked} onClick={() => toggleWish(p.id)}><Heart size={16} className={liked ? 'fill-accent text-accent' : ''} />{liked ? 'Saved' : 'Save'}</button>
          </div>
          <section className="mt-8">
            <h2 className="font-sans text-base font-semibold mb-2">Reviews <span className="text-xs font-normal muted">(fictional sample data)</span></h2>
            <ul className="space-y-2">{REVIEWS.map((r, i) => <li key={i} className="card p-3 text-sm"><b>{r.n}</b> · {'★'.repeat(r.r)}<br />{r.t}</li>)}</ul>
          </section>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-14"><h2 className="section-title">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{related.map((r, i) => <ProductCard key={r.id} p={r} index={i} />)}</div>
        </section>
      )}
    </div>
  );
}
