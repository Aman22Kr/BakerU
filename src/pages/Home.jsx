import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Copy, Smartphone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import CategoryTile from '../components/CategoryTile';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS, productById } from '../data/products';
import { PROMOS } from '../data/promos';
import { PROMISES, TESTIMONIALS } from '../data/content';
import { CHEESECAKE_BANNER, CHEESECAKE_HERO, HERO_BANNERS, INTRO_IMAGE, MID_BANNER, APP_PROMO_IMG } from '../data/banners';
import { useApp } from '../hooks/AppContext';
import { QUICK } from '../config/quickSettings';

function HeroCarousel() {
  const { motion: m } = useApp();
  const [i, setI] = useState(0);
  const n = HERO_BANNERS.length;
  useEffect(() => {
    if (m.off || n < 2) return undefined;
    const t = setInterval(() => setI((x) => (x + 1) % n), 6000);
    return () => clearInterval(t);
  }, [m.off, n]);
  const b = HERO_BANNERS[i];
  return (
    <section aria-roledescription="carousel" aria-label="Featured offers" className="relative bg-brand-light">
      <div className="container max-w-page py-4">
        <h1 className="sr-only">Order Online from {QUICK.BRAND_NAME}</h1>
        <div className="relative overflow-hidden rounded-md aspect-[16/7] sm:aspect-[16/6] bg-brand">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={i} className="absolute inset-0" initial={{ opacity: m.off ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: m.off ? 1 : 0 }} transition={{ duration: m.duration }}>
              <Link to={b.to}><Img src={b.src} alt={b.alt} eager className="h-full w-full object-cover" /></Link>
            </motion.div>
          </AnimatePresence>
          {n > 1 && (
            <>
              <button aria-label="Previous banner" onClick={() => setI((i - 1 + n) % n)} className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-cocoa"><ChevronLeft size={18} /></button>
              <button aria-label="Next banner" onClick={() => setI((i + 1) % n)} className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-cocoa"><ChevronRight size={18} /></button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {HERO_BANNERS.map((_, k) => <button key={k} aria-label={`Banner ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? 'w-5 bg-white' : 'w-2 bg-white/60'}`} />)}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { notify, recent, setPromo } = useApp();
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? CATEGORIES : CATEGORIES.slice(0, 8);
  const cheesecakes = PRODUCTS.filter((p) => /cheesecake/i.test(p.name));
  const recents = recent.map(productById).filter(Boolean).slice(0, 5);

  const copy = async (code) => {
    setPromo(code);
    try { await navigator.clipboard.writeText(code); } catch { /* clipboard may be blocked */ }
    notify(`${code} copied and saved for your cart`);
  };

  return (
    <>
      <HeroCarousel />

      <section className="container max-w-page py-12 md:py-16 grid gap-8 md:grid-cols-2 items-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">{QUICK.BRAND_TAGLINE}</h2>
          <p className="muted mb-6">Since 2004, we've been serving our guests the best quality treats, traditionally made and presented with care. (Demo copy adapted for BakerU.)</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {PROMISES.map((p) => (
              <div key={p.title}><h3 className="font-sans text-base font-semibold text-accent">{p.title}</h3><p className="text-sm muted mt-1">{p.text}</p></div>
            ))}
          </div>
        </Reveal>
        <Reveal index={1}><Img src={INTRO_IMAGE} alt={QUICK.BRAND_TAGLINE} className="w-full rounded-md object-cover shadow-card" /></Reveal>
      </section>

      <section className="bg-brand-light/50 dark:bg-white/5 py-12">
        <div className="container max-w-page">
          <h2 className="section-title">Our Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
            {shown.map((c, i) => <CategoryTile key={c.slug} cat={c} index={i % 8} />)}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setShowAll((s) => !s)} className="btn btn-outline">{showAll ? 'View Less' : 'View All'}</button>
          </div>
        </div>
      </section>

      <section className="container max-w-page py-12">
        <h2 className="section-title">Promos</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {PROMOS.map((p, i) => (
            <Reveal key={p.code} index={i} className="snap-start shrink-0 w-64">
              <div className="card h-full p-4 border-dashed border-2 border-brand-dark flex flex-col">
                <h3 className="font-sans text-sm font-semibold leading-snug">{p.title}</h3>
                <button onClick={() => copy(p.code)} className="mt-auto pt-3 inline-flex items-center gap-2 text-xs">
                  Use Code <b className="rounded bg-brand px-2 py-1 text-cocoa-dark tracking-wider">{p.code}</b><Copy size={12} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container max-w-page">
        <Link to="/products/cakes"><Img src={CHEESECAKE_BANNER} alt="Cheesecake range" className="w-full rounded-md object-cover" /></Link>
      </section>

      <section className="container max-w-page py-12">
        <h2 className="section-title">Cheesecake Range</h2>
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] items-start">
          <Img src={CHEESECAKE_HERO} alt="Cheesecake Range" className="hidden lg:block w-full rounded-md object-cover" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cheesecakes.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
          </div>
        </div>
      </section>

      {recents.length > 0 && (
        <section className="container max-w-page pb-12">
          <h2 className="section-title">Recently Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">{recents.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}</div>
        </section>
      )}

      <section className="bg-brand">
        <div className="container max-w-page py-10 grid gap-6 md:grid-cols-2 items-center text-cocoa-dark">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-2">Download the App</h2>
            <p className="text-sm mb-4">Demo only: there is no BakerU mobile app. The badges below are placeholders.</p>
            <div className="flex flex-wrap gap-3">
              {['Google Play', 'App Store'].map((s) => <span key={s} className="inline-flex items-center gap-2 rounded-md bg-cocoa-dark px-4 py-2 text-xs text-white opacity-80"><Smartphone size={14} />{s} · Coming soon</span>)}
            </div>
          </Reveal>
          <Img src={APP_PROMO_IMG} alt="Treats" className="mx-auto max-h-56 object-contain" />
        </div>
      </section>

      <section className="container max-w-page py-12">
        <Link to="/products"><Img src={MID_BANNER} alt="Explore all products" className="w-full rounded-md object-cover mb-12" /></Link>
        <h2 className="section-title">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} index={i}>
              <figure className="card h-full p-5"><span className="font-display text-4xl text-brand-dark leading-none">“</span>
                <blockquote className="text-sm italic -mt-2">{t.text}</blockquote>
                <figcaption className="mt-3 text-xs font-semibold">{t.who}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-center text-xs muted">Testimonials are fictional sample content.</p>
      </section>

      <section className="bg-cocoa-dark text-white text-center py-12">
        <div className="container max-w-page">
          <h2 className="text-3xl font-semibold mb-2">Like Our Products?</h2>
          <p className="text-sm opacity-80 mb-5 max-w-lg mx-auto">Treat yourself to your favourite {QUICK.BRAND_NAME} products or surprise your loved ones with an edible gift.</p>
          <Link to="/products" className="btn btn-brand">Know More</Link>
        </div>
      </section>
    </>
  );
}
