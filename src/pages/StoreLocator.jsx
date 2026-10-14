import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import NotFound from './NotFound';
import { CITIES, citySlug, outletsFor } from '../data/content';
import { useApp } from '../hooks/AppContext';

export default function StoreLocator() {
  const { city } = useParams();
  const { setLocation, notify } = useApp();
  const [q, setQ] = useState('');
  if (city) {
    const name = CITIES.find((c) => citySlug(c) === city);
    if (!name) return <NotFound what="city" />;
    return (
      <>
        <PageHero title={`BakerU in ${name}`} sub="Sample outlets (placeholders, not real addresses)." />
        <div className="container max-w-page py-8 space-y-3">
          <Link to="/store-locator" className="text-xs text-accent hover:underline">← All cities</Link>
          {outletsFor(name).map((o) => (
            <div key={o.id} className="card flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
              <div><h2 className="font-sans text-base font-semibold">{o.name}</h2>
                <p className="mt-1 inline-flex items-center gap-1 muted"><MapPin size={13} />{o.address}</p><br />
                <p className="inline-flex items-center gap-1 muted"><Clock size={13} />{o.hours}</p></div>
              <div className="flex gap-2">
                <button className="btn btn-outline" onClick={() => { setLocation({ label: name }); notify(`Location set to ${name}`); }}>Set as my location</button>
                <Link to="/products" className="btn btn-primary">Order</Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  const list = CITIES.filter((c) => c.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero title="Store Locator" sub="Find a BakerU near you (sample list mirrored from the reference footer)." />
      <div className="container max-w-page py-8">
        <input className="input mx-auto mb-6 block max-w-md" placeholder="Search city…" aria-label="Search city" value={q} onChange={(e) => setQ(e.target.value)} />
        {list.length === 0 ? <p className="text-center text-sm muted">No cities match “{q}”.</p> : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {list.map((c) => <Link key={c} to={`/store-locator/${citySlug(c)}`} className="card px-3 py-3 text-center text-sm hover:border-brand-dark transition-colors">{c}</Link>)}
          </div>
        )}
      </div>
    </>
  );
}
