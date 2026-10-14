import { useMemo, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Search, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useApp } from '../hooks/AppContext';
import { money } from '../utils/format';

export function searchProducts(q) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return PRODUCTS.filter((p) => terms.every((t) => p.keywords.includes(t)));
}

export default function SearchBox({ onDone, autoFocus = false }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const { searchHistory, setSearchHistory, pushSearch } = useApp();
  const box = useRef(null);
  const results = useMemo(() => searchProducts(q).slice(0, 6), [q]);

  useEffect(() => {
    const h = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const go = (term) => {
    const t = (term ?? q).trim();
    if (!t) return;
    pushSearch(t);
    setOpen(false);
    nav(`/search?q=${encodeURIComponent(t)}`);
    onDone?.();
  };

  return (
    <div ref={box} className="relative w-full">
      <form onSubmit={(e) => { e.preventDefault(); go(); }} role="search" className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
        <input
          autoFocus={autoFocus}
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search cakes, brownies, breads…"
          aria-label="Search products"
          className="input pl-9 pr-8"
        />
        {q && <button type="button" aria-label="Clear" onClick={() => setQ('')} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-60"><X size={14} /></button>}
      </form>
      {open && (q.trim() || searchHistory.length > 0) && (
        <div className="absolute z-50 mt-1 w-full card overflow-hidden">
          {q.trim() ? (
            results.length ? (
              <>
                <ul>
                  {results.map((p) => (
                    <li key={p.id}>
                      <button onClick={() => { pushSearch(q); setOpen(false); nav(`/product/${p.slug}`); onDone?.(); }} className="w-full flex justify-between gap-3 px-3 py-2 text-left text-sm hover:bg-brand-light dark:hover:bg-white/10">
                        <span className="truncate">{p.name}</span><span className="muted shrink-0">{money(p.price)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={() => go()} className="w-full border-t border-[var(--line)] px-3 py-2 text-left text-xs font-medium text-accent">See all results for “{q.trim()}”</button>
              </>
            ) : <p className="px-3 py-3 text-sm muted">No matches for “{q.trim()}”.</p>
          ) : (
            <>
              <div className="flex items-center justify-between px-3 pt-2 text-[11px] uppercase tracking-wide muted">
                Recent searches
                <button onClick={() => setSearchHistory([])} className="normal-case underline">Clear</button>
              </div>
              <ul>
                {searchHistory.map((h) => (
                  <li key={h}><button onClick={() => go(h)} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-brand-light dark:hover:bg-white/10"><Clock size={13} className="opacity-50" />{h}</button></li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
