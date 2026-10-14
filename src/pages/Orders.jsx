import PageHero from '../components/PageHero';
import Empty from '../components/Empty';
import { useApp } from '../hooks/AppContext';
import { money } from '../utils/format';

export default function Orders() {
  const { orders, setOrders } = useApp();
  return (
    <>
      <PageHero title="Track Your Orders" sub="Demo orders saved in this browser only." />
      <div className="container max-w-page py-8">
        {orders.length === 0 ? <Empty title="No demo orders yet" text="Place a demo order from the cart to see it here." cta="Start shopping" /> : (
          <ul className="space-y-4">
            {orders.map((o) => (
              <li key={o.id} className="card p-4 text-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <b>{o.id}</b><span className="rounded-full bg-brand px-3 py-0.5 text-xs text-cocoa-dark">{o.status}</span>
                </div>
                <p className="muted text-xs">{new Date(o.at).toLocaleString('en-IN')} · {o.type}{o.city ? ` · ${o.city}` : ''}</p>
                <ul className="mt-2 list-disc pl-5">{o.items.map((i, k) => <li key={k}>{i.qty} × {i.name}</li>)}</ul>
                <div className="mt-2 flex items-center justify-between"><b>{money(o.total)}</b>
                  <button className="text-xs text-red-600 underline" onClick={() => setOrders((a) => a.filter((x) => x.id !== o.id))}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
