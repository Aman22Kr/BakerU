import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { PROMOS } from '../data/promos';
import { useApp } from '../hooks/AppContext';

export default function PromoCodes() {
  const { setPromo, promo, notify } = useApp();
  return (
    <>
      <PageHero title="Promo Codes" sub="Tap a code to save it, then apply it in your cart." />
      <div className="container max-w-page py-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROMOS.map((p) => (
          <div key={p.code} className="card border-2 border-dashed border-brand-dark p-4">
            <h2 className="font-sans text-sm font-semibold">{p.title}</h2>
            <div className="mt-3 flex items-center justify-between">
              <b className="rounded bg-brand px-2 py-1 tracking-wider text-cocoa-dark">{p.code}</b>
              <button className="btn btn-outline !py-1.5 !px-3 text-xs" onClick={() => { setPromo(p.code); notify(`${p.code} saved`); }}>{promo === p.code ? 'Saved' : 'Save code'}</button>
            </div>
          </div>
        ))}
      </div>
      <p className="pb-10 text-center text-sm"><Link to="/cart" className="underline text-accent">Go to cart</Link></p>
    </>
  );
}
