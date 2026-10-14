import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Empty from '../components/Empty';
import Img from '../components/Img';
import { useApp } from '../hooks/AppContext';
import { money } from '../utils/format';

export default function Cart() {
  const { cartInfo: c, setQty, promo, setPromo, notify } = useApp();
  const [code, setCode] = useState(promo);
  return (
    <>
      <PageHero title="Your Cart" />
      <div className="container max-w-page py-8">
        {c.lines.length === 0 ? <Empty title="Your cart is empty" text="Add a few treats and they will wait here, even after a refresh." cta="Browse products" /> : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <ul className="space-y-3">
              {c.lines.map(({ product: p, qty }) => (
                <li key={p.id} className="card flex gap-3 p-3">
                  <Img src={p.image} alt={p.name} className="h-20 w-20 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${p.slug}`} className="block truncate text-sm font-medium hover:text-accent">{p.name}</Link>
                    <p className="text-xs muted">{money(p.price)} each</p>
                    <div className="mt-2 inline-flex items-center rounded border border-[var(--line)]">
                      <button aria-label="Decrease" className="p-1.5" onClick={() => setQty(p.id, qty - 1)}><Minus size={13} /></button>
                      <span className="w-7 text-center text-sm">{qty}</span>
                      <button aria-label="Increase" className="p-1.5" onClick={() => setQty(p.id, qty + 1)}><Plus size={13} /></button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="text-sm font-semibold">{money(p.price * qty)}</span>
                    <button aria-label={`Remove ${p.name}`} onClick={() => setQty(p.id, 0)} className="text-red-600"><Trash2 size={16} /></button>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="card h-fit p-5">
              <h2 className="font-sans text-lg font-semibold mb-3">Order summary</h2>
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); setPromo(code.trim().toUpperCase()); notify(code ? 'Promo code applied for checking' : 'Promo removed'); }}>
                <input className="input" placeholder="Promo code" value={code} onChange={(e) => setCode(e.target.value)} aria-label="Promo code" />
                <button className="btn btn-outline">Apply</button>
              </form>
              {promo && c.promoError && <p role="alert" className="mt-2 text-xs text-red-600">{c.promoError}</p>}
              {promo && !c.promoError && <p className="mt-2 text-xs text-green-700 dark:text-green-400">{promo} applied.</p>}
              <dl className="mt-4 space-y-1.5 text-sm">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>{money(c.subtotal)}</dd></div>
                <div className="flex justify-between"><dt>Discount</dt><dd>-{money(c.discount)}</dd></div>
                <div className="flex justify-between border-t border-[var(--line)] pt-2 text-base font-semibold"><dt>Total</dt><dd>{money(c.total)}</dd></div>
              </dl>
              <Link to="/checkout" className="btn btn-primary mt-4 w-full">Proceed to demo checkout</Link>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
