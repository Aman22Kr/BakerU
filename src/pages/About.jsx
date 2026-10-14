import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { ABOUT_GALLERY, APP_PROMO_IMG } from '../data/banners';
import { PROMISES, TEAM } from '../data/content';
import { QUICK } from '../config/quickSettings';

export default function About() {
  return (
    <>
      <PageHero title="About Us" sub={`${QUICK.BRAND_NAME} is a demo patisserie storefront inspired by a public reference site.`} />
      <section className="container max-w-3xl space-y-4 py-10 text-center leading-7">
        <p>Our name nods to 'Food of the Gods' (Greek: <i>theos</i> + <i>broma</i>), a fitting title for a menu of brownies, cakes, desserts, chocolates, breads and savouries.</p>
        <p>Our mission is to spread happiness by serving smiles on a plate. (Story text adapted as demo copy; BakerU is not a real company.)</p>
      </section>
      <section className="container max-w-page">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {ABOUT_GALLERY.map((g, i) => <Reveal key={g} index={i}><Img src={g} alt={`${QUICK.BRAND_NAME} store ${i + 1}`} className="aspect-[3/4] w-full rounded-md object-cover" /></Reveal>)}
        </div>
      </section>
      <section className="container max-w-page py-14">
        <h2 className="section-title">Our Promise</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p, i) => <Reveal key={p.title} index={i}><div className="card h-full p-5 text-center"><h3 className="font-sans text-base font-semibold text-accent">{p.title}</h3><p className="mt-2 text-sm muted">{p.text}</p></div></Reveal>)}
        </div>
      </section>
      <section className="bg-brand-light/50 py-14 dark:bg-white/5">
        <div className="container max-w-page">
          <h2 className="section-title">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} index={i}>
                <div className="card h-full p-5 text-center">
                  <div className="mx-auto mb-3 grid h-20 w-20 place-items-center rounded-full bg-brand text-2xl" aria-hidden>🧑‍🍳</div>
                  <h3 className="font-sans text-base font-semibold">{m.name}</h3><p className="text-xs text-accent">{m.role}</p><p className="mt-2 text-sm muted">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs muted">Team members are fictional placeholders.</p>
        </div>
      </section>
      <section className="container max-w-page grid items-center gap-6 py-14 md:grid-cols-2">
        <div><h2 className="text-3xl font-semibold mb-2">Like our products?</h2><p className="muted mb-4">Treat yourself to your favourites or surprise your loved ones with an edible gift.</p><Link to="/products" className="btn btn-primary">Order Online</Link></div>
        <Img src={APP_PROMO_IMG} alt="" className="mx-auto max-h-60 object-contain" />
      </section>
    </>
  );
}
