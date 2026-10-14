import { Link, useParams, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Listing from '../components/Listing';
import NotFound from './NotFound';
import { CATEGORIES, catBySlug } from '../data/categories';
import { productsInCategory } from '../data/products';

export default function Collection() {
  const { slug } = useParams();
  const [params, setParams] = useSearchParams();
  const cat = catBySlug(slug);
  if (!cat) return <NotFound what="collection" />;
  return (
    <>
      <PageHero title={cat.name} />
      <section className="container max-w-page py-8">
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2" aria-label="Collections">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={`/products/${c.slug}`} className={`shrink-0 rounded-full border px-4 py-1.5 text-xs transition-colors ${c.slug === slug ? 'border-cocoa bg-cocoa text-white' : 'border-[var(--line)] hover:border-brand-dark'}`}>{c.name}</Link>
          ))}
        </div>
        <Listing items={productsInCategory(slug)} params={params} setParams={setParams} />
      </section>
    </>
  );
}
