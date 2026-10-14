import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bike, Car, CreditCard, MapPin, Store, Utensils, CalendarClock, X } from 'lucide-react';
import { useApp } from '../hooks/AppContext';
import { CITIES } from '../data/content';

function Shell({ title, onClose, children }) {
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative card w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 opacity-70 hover:opacity-100"><X size={18} /></button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function LoginModal({ onClose }) {
  const { setProfile, notify } = useApp();
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (name.trim().length < 2) return setErr('Please enter your name.');
      setErr(''); setStep(2);
    } else {
      if (!/^\d{4}$/.test(code)) return setErr('Enter any 4 digits (demo).');
      setProfile((p) => ({ ...p, loggedIn: true, name: name.trim() }));
      notify('Signed in (demo, stored in this browser only)');
      onClose();
    }
  };
  return (
    <Shell title="Demo sign in" onClose={onClose}>
      <p className="text-xs rounded bg-brand-light dark:bg-white/10 p-2 mb-4">This is a mock login. No phone number is collected, no OTP is sent and no real account is created. Never enter real passwords here.</p>
      <form onSubmit={submit} className="space-y-3">
        {step === 1 ? (
          <label className="block text-sm">Your name<input className="input mt-1" value={name} onChange={(e) => setName(e.target.value)} autoFocus /></label>
        ) : (
          <label className="block text-sm">Demo code (any 4 digits)<input className="input mt-1" inputMode="numeric" maxLength={4} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} autoFocus /></label>
        )}
        {err && <p role="alert" className="text-xs text-red-600">{err}</p>}
        <button className="btn btn-primary w-full">{step === 1 ? 'Continue' : 'Verify & Sign In'}</button>
      </form>
    </Shell>
  );
}

function LocationModal({ onClose }) {
  const { setLocation, notify } = useApp();
  const [q, setQ] = useState('');
  const list = CITIES.filter((c) => c.toLowerCase().includes(q.toLowerCase()));
  return (
    <Shell title="Let's find a store near you" onClose={onClose}>
      <p className="text-xs muted mb-3">Demo: pick a city from the list. We never read your real location.</p>
      <input className="input mb-3" placeholder="Search city…" value={q} onChange={(e) => setQ(e.target.value)} autoFocus />
      <ul className="max-h-64 overflow-y-auto divide-y divide-[var(--line)]">
        {list.map((c) => (
          <li key={c}><button onClick={() => { setLocation({ label: c }); notify(`Location set to ${c}`); onClose(); }} className="w-full flex items-center gap-2 py-2.5 text-left text-sm hover:text-accent"><MapPin size={14} />{c}</button></li>
        ))}
        {list.length === 0 && <li className="py-4 text-sm muted">No city matches “{q}”.</li>}
      </ul>
    </Shell>
  );
}

const TYPES = [
  { t: 'Pick Up', d: 'Skip the queue', I: Store },
  { t: 'Delivery', d: 'To your doorstep', I: Bike },
  { t: 'Dine In', d: 'Order from your table', I: Utensils },
  { t: 'In-Car', d: 'Served at your car', I: Car },
  { t: 'Reservation', d: 'Reserve in advance', I: CalendarClock },
  { t: 'Direct Pay', d: 'Pay your bill here', I: CreditCard },
];
function OrderTypeModal({ onClose }) {
  const { setOrderType, notify } = useApp();
  const nav = useNavigate();
  return (
    <Shell title="How would you like your order?" onClose={onClose}>
      <div className="grid grid-cols-2 gap-3">
        {TYPES.map(({ t, d, I }) => (
          <button key={t} onClick={() => { setOrderType(t); notify(`Order type: ${t}`); onClose(); nav('/products'); }} className="card p-3 text-left hover:border-brand-dark transition-colors">
            <I size={20} className="mb-1 text-accent" /><div className="text-sm font-medium">{t}</div><div className="text-xs muted">{d}</div>
          </button>
        ))}
      </div>
    </Shell>
  );
}

export default function Modals() {
  const { modal, setModal } = useApp();
  const close = () => setModal(null);
  if (modal === 'login') return <LoginModal onClose={close} />;
  if (modal === 'location') return <LocationModal onClose={close} />;
  if (modal === 'orderType') return <OrderTypeModal onClose={close} />;
  return null;
}
