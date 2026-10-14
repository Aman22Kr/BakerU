import { SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import Empty from './Empty';

export function sortProducts(list, sort) {
  const l = [...list];
  if (sort === 'price-asc') l.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') l.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') l.sort((a, b) => b.rating - a.rating);
  else if (sort === 'name') l.sort((a, b) => a.name.localeCompare(b.name));
  return l;
}

/** Shared filter bar + grid used by collection and search pages. State lives in the URL query string. */
export default function Listing({ items, params, setParams, extra }) {
  const sort = params.get('sort') || 'featured';
  const eggless = params.get('eggless') === '1';
  const inStock = params.get('stock') === '1';
  const max = Number(params.get('max')) || 2000;
  const set = (k, v, def) => {
    const n = new URLSearchParams(params);
    if (v === def || v === '' || v === false) n.delete(k); else n.set(k, v === true ? '1' : v);
    setParams(n, { replace: true });
  };
  const filtered = sortProducts(
    items.filter((p) => (!eggless || p.eggless) && (!inStock || p.available) && p.price <= max),
    sort
  );
  return (
    <>
      <div className="card mb-6 flex flex-wrap items-center gap-x-5 gap-y-3 p-3 text-sm">
        <span className="inline-flex items-center gap-1 font-medium"><SlidersHorizontal size={15} />Filters</span>
        {extra}
        <label className="inline-flex items-center gap-2"><input type="checkbox" checked={eggless} onChange={(e) => set('eggless', e.target.checked)} />Eggless only</label>
        <label className="inline-flex items-center gap-2"><input type="checkbox" checked={inStock} onChange={(e) => set('stock', e.target.checked)} />In stock</label>
        <label className="inline-flex items-center gap-2">Max ₹{max}
          <input type="range" min="100" max="2000" step="50" value={max} onChange={(e) => set('max', e.target.value, '2000')} aria-label="Maximum price" />
        </label>
        <label className="ml-auto inline-flex items-center gap-2">Sort
          <select className="input !w-auto !py-1.5" value={sort} onChange={(e) => set('sort', e.target.value, 'featured')}>
            <option value="featured">Featured</option><option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option><option value="rating">Top rated (sample)</option><option value="name">Name A–Z</option>
          </select>
        </label>
      </div>
      <p className="mb-3 text-xs muted">{filtered.length} item{filtered.length === 1 ? '' : 's'}</p>
      {filtered.length ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => <ProductCard key={p.id} p={p} index={i % 8} />)}
        </div>
      ) : (
        <Empty title="Nothing matches these filters" text="Try removing a filter or raising the price limit." cta="Clear filters" to="?" />
      )}
    </>
  );
}
