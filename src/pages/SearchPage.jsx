import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Listing from '../components/Listing';
import Empty from '../components/Empty';
import SearchBox, { searchProducts } from '../components/SearchBox';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { useApp } from '../hooks/AppContext';

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const cat = params.get('cat') || '';
  const { pushSearch } = useApp();
  useEffect(() => { if (q) pushSearch(q); }, [q, pushSearch]);
  const items = useMemo(() => (q ? searchProducts(q) : PRODUCTS).filter((p) => !cat || p.category === cat), [q, cat]);
  const extra = (
    <label className="inline-flex items-center gap-2">Category
      <select className="input !w-auto !py-1.5" value={cat} onChange={(e) => { const n = new URLSearchParams(params); if (e.target.value) n.set('cat', e.target.value); else n.delete('cat'); setParams(n, { replace: true }); }}>
        <option value="">All</option>
        {CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
      </select>
    </label>
  );
  return (
    <>
      <PageHero title={q ? `Results for “${q}”` : 'Search'} />
      <section className="container max-w-page py-8">
        <div className="mx-auto mb-6 max-w-md md:hidden"><SearchBox /></div>
        {q && items.length === 0 && !cat ? (
          <Empty title={`No results for “${q}”`} text="Check the spelling or try a broader word like “chocolate”." cta="Browse all products" />
        ) : (
          <Listing items={items} params={params} setParams={setParams} extra={extra} />
        )}
      </section>
    </>
  );
}
