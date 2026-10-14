import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { FOOTER_LINKS, QUICK } from '../config/quickSettings';
import { CITIES, citySlug } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-cocoa-dark text-white/85 text-sm">
      <div className="container max-w-page py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="uppercase text-xs tracking-widest text-brand mb-3">Useful Links</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {FOOTER_LINKS.map((l) => <li key={l.label}><Link to={l.to} className="hover:text-brand transition-colors">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="uppercase text-xs tracking-widest text-brand mb-3">Payment Methods</h4>
          <p className="text-xs opacity-80">Demo only: UPI, cards and wallets are shown for layout. No payment is processed.</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {['Mastercard', 'Google Pay', 'Paytm', 'Visa', 'UPI'].map((p) => <span key={p} className="rounded border border-white/25 px-2 py-1">{p}</span>)}
          </div>
        </div>
        <div>
          <h4 className="uppercase text-xs tracking-widest text-brand mb-3">Contact &amp; Connect</h4>
          <p className="flex items-center gap-2"><Mail size={14} />{QUICK.EMAIL}</p>
          <p className="flex items-center gap-2 mt-1"><Phone size={14} />{QUICK.PHONE}</p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-brand"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-brand"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container max-w-page pb-6 text-xs leading-6">
        <b className="text-brand">OUR STORES - </b>
        {CITIES.map((c, i) => (
          <span key={c}><Link to={`/store-locator/${citySlug(c)}`} className="hover:text-brand">{c}</Link>{i < CITIES.length - 1 ? ' | ' : ''}</span>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container max-w-page py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-80">
          <span>© {new Date().getFullYear()} {QUICK.BRAND_NAME}. A demo storefront; not a real business.</span>
          <span>Design inspired by a public reference site · built by {QUICK.GITHUB_USERNAME}</span>
        </div>
      </div>
    </footer>
  );
}
