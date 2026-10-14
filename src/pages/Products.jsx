import PageHero from '../components/PageHero';
import CategoryTile from '../components/CategoryTile';
import { CATEGORIES } from '../data/categories';

export default function Products() {
  return (
    <>
      <PageHero title="Our Products" sub="Browse every collection, from cakes to chocolates." />
      <section className="container max-w-page py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
          {CATEGORIES.map((c, i) => <CategoryTile key={c.slug} cat={c} index={i % 6} />)}
        </div>
      </section>
    </>
  );
}
