import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Empty from '../components/Empty';
import { useApp } from '../hooks/AppContext';
import { money } from '../utils/format';

export default function Checkout() {
  const { cartInfo: c, setCart, setPromo, setOrders, orderType, location, profile, notify } = useApp();
  const nav = useNavigate();
  const [f, setF] = useState({ name: profile.name || '', type: orderType || 'Delivery', address: '', note: '' });
  const [err, setErr] = useState({});
  if (c.lines.length === 0) return <div className="container max-w-page py-10"><Empty title="Nothing to check out" cta="Browse products" /></div>;

  const place = (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = 'Please enter a name.';
    if (f.type === 'Delivery' && f.address.trim().length < 5) er.address = 'Enter a delivery address (sample text is fine).';
    setErr(er);
    if (Object.keys(er).length) return;
    const order = {
      id: 'DEMO-' + Date.now().toString(36).toUpperCase(),
      at: new Date().toISOString(),
      type: f.type, name: f.name.trim(), city: location?.label || '',
      address: f.type === 'Delivery' ? f.address.trim() : '',
      items: c.lines.map((l) => ({ name: l.product.name, qty: l.qty, price: l.product.price })),
      total: c.total, status: 'Demo order · no payment taken',
    };
    setOrders((o) => [order, ...o].slice(0, 25));
    setCart([]); setPromo('');
    notify('Demo order saved in this browser');
    nav('/past-order');
  };

  return (
    <>
      <PageHero title="Demo Checkout" />
      <div className="container max-w-page py-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <form onSubmit={place} className="card space-y-4 p-5" noValidate>
          <p className="rounded bg-brand-light p-3 text-xs text-cocoa-dark">This is a mock checkout. No payment is taken, nothing is sent to a server and no delivery will happen. Don't enter card numbers or real sensitive details.</p>
          <label className="block text-sm">Name<input className="input mt-1" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} aria-invalid={!!err.name} />{err.name && <span role="alert" className="text-xs text-red-600">{err.name}</span>}</label>
          <label className="block text-sm">Order type
            <select className="input mt-1" value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}>
              {['Delivery', 'Pick Up', 'Dine In', 'In-Car'].map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          {f.type === 'Delivery' && <label className="block text-sm">Delivery address (sample)<textarea className="input mt-1" rows={3} value={f.address} onChange={(e) => setF({ ...f, address: e.target.value })} aria-invalid={!!err.address} />{err.address && <span role="alert" className="text-xs text-red-600">{err.address}</span>}</label>}
          <label className="block text-sm">Note (optional)<input className="input mt-1" value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} /></label>
          <div className="flex gap-3"><button className="btn btn-primary">Place demo order</button><Link to="/cart" className="btn btn-outline">Back to cart</Link></div>
        </form>
        <aside className="card h-fit p-5 text-sm">
          <h2 className="font-sans text-lg font-semibold mb-3">Summary</h2>
          <ul className="space-y-1">{c.lines.map((l) => <li key={l.id} className="flex justify-between gap-2"><span className="truncate">{l.qty} × {l.product.name}</span><span>{money(l.product.price * l.qty)}</span></li>)}</ul>
          <div className="mt-3 flex justify-between border-t border-[var(--line)] pt-2 font-semibold"><span>Total</span><span>{money(c.total)}</span></div>
        </aside>
      </div>
    </>
  );
}
