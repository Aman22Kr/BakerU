import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, MapPin, Menu, Moon, Phone, ShoppingBag, Sun, Truck, User, X } from 'lucide-react';
import { NAV, QUICK } from '../config/quickSettings';
import { useApp } from '../hooks/AppContext';
import SearchBox from './SearchBox';

const linkCls = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${isActive ? 'border-cocoa text-cocoa dark:border-brand dark:text-brand' : 'border-transparent hover:border-brand-dark'}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartInfo, wishlist, theme, setTheme, profile, setModal, location, orderType } = useApp();
  return (
    <header className="sticky top-0 z-40 shadow-sm" style={{ background: 'var(--card)' }}>
      <div className="bg-brand text-cocoa-dark text-xs">
        <div className="container max-w-page flex items-center justify-between py-1.5 gap-3">
          <span className="truncate"><b>Upto Rs. 200 OFF</b> on the First Order. T&amp;C apply</span>
          <span className="hidden sm:flex items-center gap-4">
            <Link to="/store-locator" className="hover:underline">Our stores</Link>
            <a href={`tel:${QUICK.PHONE}`} className="inline-flex items-center gap-1 hover:underline"><Phone size={12} />{QUICK.PHONE}</a>
          </span>
        </div>
      </div>

      <div className="container max-w-page flex items-center gap-3 py-3">
        <button className="lg:hidden p-2 -ml-2" aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></button>
        <Link to="/" className="font-display text-2xl md:text-3xl font-bold text-cocoa dark:text-brand tracking-tight shrink-0" aria-label={`${QUICK.BRAND_NAME} home`}>
          Baker<span className="text-accent">U</span>
        </Link>
        <nav className="hidden lg:flex items-center ml-6" aria-label="Main">
          {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>{n.label}</NavLink>)}
        </nav>
        <div className="hidden md:block flex-1 max-w-xs ml-auto"><SearchBox /></div>
        <div className="flex items-center gap-1 ml-auto md:ml-2">
          <button className="p-2 rounded-full hover:bg-brand-light dark:hover:bg-white/10" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/wishlist" className="relative p-2 rounded-full hover:bg-brand-light dark:hover:bg-white/10" aria-label="Favourites">
            <Heart size={18} />
            {wishlist.length > 0 && <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] text-white">{wishlist.length}</span>}
          </Link>
          <Link to="/past-order" className="hidden sm:inline-flex items-center gap-1 px-2 py-2 text-sm hover:text-accent"><Truck size={16} />Track</Link>
          {profile.loggedIn
            ? <Link to="/profile" className="inline-flex items-center gap-1 px-2 py-2 text-sm hover:text-accent"><User size={16} /><span className="hidden sm:inline">{profile.name || 'Account'}</span></Link>
            : <button onClick={() => setModal('login')} className="inline-flex items-center gap-1 px-2 py-2 text-sm hover:text-accent"><User size={16} /><span className="hidden sm:inline">Login</span></button>}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-brand-light dark:hover:bg-white/10" aria-label={`Cart, ${cartInfo.count} items`}>
            <ShoppingBag size={20} />
            {cartInfo.count > 0 && <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] text-white">{cartInfo.count}</span>}
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container max-w-page flex flex-wrap items-center gap-x-6 gap-y-1 py-1.5 text-xs">
          <button onClick={() => setModal('location')} className="inline-flex items-center gap-1 hover:text-accent"><MapPin size={13} /><span className="muted">Deliver to</span> <b>{location?.label || 'Set location'}</b></button>
          <button onClick={() => setModal('orderType')} className="inline-flex items-center gap-1 hover:text-accent"><span className="muted">Order type</span> <b>{orderType || 'Set order type'}</b></button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[85%] overflow-y-auto p-4" style={{ background: 'var(--card)' }} role="dialog" aria-label="Menu">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-2xl font-bold text-cocoa dark:text-brand">BakerU</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <div className="mb-4"><SearchBox onDone={() => setOpen(false)} /></div>
            <nav className="flex flex-col">
              {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)} className="py-3 border-b border-[var(--line)] text-sm font-medium">{n.label}</NavLink>)}
              <Link to="/past-order" onClick={() => setOpen(false)} className="py-3 border-b border-[var(--line)] text-sm font-medium">Track Order</Link>
              <Link to="/promo-codes" onClick={() => setOpen(false)} className="py-3 border-b border-[var(--line)] text-sm font-medium">Promo Codes</Link>
              <Link to="/faqs" onClick={() => setOpen(false)} className="py-3 text-sm font-medium">FAQs</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
