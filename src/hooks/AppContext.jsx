import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLocalStorage } from './useLocalStorage';
import { QUICK } from '../config/quickSettings';
import { motionConfig } from '../utils/motion';
import { totals } from '../utils/pricing';
import { clearAllStore } from '../utils/storage';
import { productById } from '../data/products';

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

const isArr = Array.isArray;
const isObj = (v) => v && typeof v === 'object' && !isArr(v);
const SPEEDS = ['slow', 'normal', 'fast', 'off'];
const INTENS = ['subtle', 'medium', 'strong'];

export function AppProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light', (v) => v === 'light' || v === 'dark');
  const [cart, setCart] = useLocalStorage('cart', [], (v) => isArr(v) && v.every((l) => l && typeof l.id === 'string' && Number.isInteger(l.qty)));
  const [wishlist, setWishlist] = useLocalStorage('wishlist', [], (v) => isArr(v) && v.every((x) => typeof x === 'string'));
  const [recent, setRecent] = useLocalStorage('recent', [], (v) => isArr(v) && v.every((x) => typeof x === 'string'));
  const [searchHistory, setSearchHistory] = useLocalStorage('searchHistory', [], (v) => isArr(v) && v.every((x) => typeof x === 'string'));
  const [promo, setPromo] = useLocalStorage('promo', '', (v) => typeof v === 'string');
  const [location, setLocation] = useLocalStorage('location', null, (v) => v === null || (isObj(v) && typeof v.label === 'string'));
  const [orderType, setOrderType] = useLocalStorage('orderType', null, (v) => v === null || typeof v === 'string');
  const [orders, setOrders] = useLocalStorage('orders', [], (v) => isArr(v));
  const [profile, setProfile] = useLocalStorage('profile', { loggedIn: false, name: '', email: '' }, (v) => isObj(v) && typeof v.loggedIn === 'boolean');
  const [anim, setAnim] = useLocalStorage('anim', { speed: QUICK.ANIMATION_SPEED, intensity: QUICK.ANIMATION_INTENSITY }, (v) => isObj(v) && SPEEDS.includes(v.speed) && INTENS.includes(v.intensity));
  const [contactDraft, setContactDraft] = useLocalStorage('contactDraft', { name: '', email: '', message: '' }, isObj);

  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null); // 'login' | 'location' | 'orderType' | null
  const reduced = useReducedMotion();
  const motion = useMemo(() => motionConfig(anim.speed, anim.intensity, reduced), [anim, reduced]);

  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]);
  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const notify = useCallback((msg) => setToast(msg), []);

  const addToCart = useCallback((id, qty = 1) => {
    const p = productById(id);
    if (!p || !p.available) return notify('Sorry, this item is currently unavailable.');
    setCart((c) => {
      const ex = c.find((l) => l.id === id);
      return ex ? c.map((l) => (l.id === id ? { ...l, qty: Math.min(20, l.qty + qty) } : l)) : [...c, { id, qty }];
    });
    notify(`${p.name} added to cart`);
  }, [setCart, notify]);
  const setQty = useCallback((id, qty) => setCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty: Math.min(20, qty) } : l)))), [setCart]);
  const toggleWish = useCallback((id) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  }, [setWishlist]);
  const pushRecent = useCallback((id) => setRecent((r) => [id, ...r.filter((x) => x !== id)].slice(0, 12)), [setRecent]);
  const pushSearch = useCallback((q) => {
    const t = q.trim();
    if (t.length < 2) return;
    setSearchHistory((h) => [t, ...h.filter((x) => x.toLowerCase() !== t.toLowerCase())].slice(0, 8));
  }, [setSearchHistory]);
  const resetAll = useCallback(() => {
    clearAllStore();
    setCart([]); setWishlist([]); setRecent([]); setSearchHistory([]); setPromo(''); setLocation(null);
    setOrderType(null); setOrders([]); setProfile({ loggedIn: false, name: '', email: '' });
    setContactDraft({ name: '', email: '', message: '' }); setTheme('light');
    setAnim({ speed: QUICK.ANIMATION_SPEED, intensity: QUICK.ANIMATION_INTENSITY });
    notify('All saved data cleared');
  }, [setCart, setWishlist, setRecent, setSearchHistory, setPromo, setLocation, setOrderType, setOrders, setProfile, setContactDraft, setTheme, setAnim, notify]);

  const cartInfo = useMemo(() => totals(cart, promo), [cart, promo]);

  const value = {
    theme, setTheme, cart, cartInfo, addToCart, setQty, setCart,
    wishlist, toggleWish, recent, pushRecent, searchHistory, setSearchHistory, pushSearch,
    promo, setPromo, location, setLocation, orderType, setOrderType, orders, setOrders,
    profile, setProfile, anim, setAnim, motion, contactDraft, setContactDraft,
    toast, notify, modal, setModal, resetAll,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
