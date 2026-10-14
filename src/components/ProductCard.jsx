import { Link } from 'react-router-dom';
import { Heart, Leaf, Plus, Star } from 'lucide-react';
import Img from './Img';
import Reveal from './Reveal';
import { useApp } from '../hooks/AppContext';
import { money } from '../utils/format';

export default function ProductCard({ p, index = 0 }) {
  const { addToCart, toggleWish, wishlist } = useApp();
  const liked = wishlist.includes(p.id);
  return (
    <Reveal index={index} className="h-full">
      <article className="card h-full flex flex-col overflow-hidden group hover:shadow-lift transition-shadow duration-300">
        <div className="relative aspect-card overflow-hidden bg-brand-light">
          <Link to={`/product/${p.slug}`} aria-label={p.name}>
            <Img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </Link>
          <button
            onClick={() => toggleWish(p.id)}
            aria-pressed={liked}
            aria-label={liked ? 'Remove from favourites' : 'Save to favourites'}
            className="absolute top-2 right-2 h-8 w-8 grid place-items-center rounded-full bg-white/90 text-cocoa shadow"
          >
            <Heart size={16} className={liked ? 'fill-accent text-accent' : ''} />
          </button>
          {!p.available && <span className="absolute left-2 top-2 rounded bg-cocoa px-2 py-0.5 text-[11px] text-white">Sold out</span>}
        </div>
        <div className="p-3 flex flex-col flex-1">
          <h3 className="font-sans text-sm font-medium leading-snug line-clamp-2 min-h-[2.5rem]">
            <Link to={`/product/${p.slug}`} className="hover:text-accent">{p.name}</Link>
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs muted">
            <span className="inline-flex items-center gap-0.5"><Star size={12} className="fill-amber-400 text-amber-400" />{p.rating}</span>
            {p.eggless && <span className="inline-flex items-center gap-0.5 text-green-700 dark:text-green-400"><Leaf size={12} />Eggless</span>}
          </div>
          <div className="mt-auto pt-3 flex items-center justify-between">
            <span className="font-semibold">{money(p.price)}</span>
            <button
              onClick={() => addToCart(p.id)}
              disabled={!p.available}
              className="inline-flex items-center gap-1 rounded-md border border-cocoa px-3 py-1.5 text-xs font-medium text-cocoa hover:bg-cocoa hover:text-white transition-colors disabled:opacity-40 dark:border-brand dark:text-brand"
            >
              Add <Plus size={14} />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
