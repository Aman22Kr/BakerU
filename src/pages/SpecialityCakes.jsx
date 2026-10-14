import { Link, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Listing from '../components/Listing';
import { PRODUCTS } from '../data/products';

export default function SpecialityCakes() {
  const [params, setParams] = useSearchParams();
  const cakes = PRODUCTS.filter((p) => p.category === 'cakes');
  return (
    <>
      <PageHero title="Speciality Cakes" sub="Celebration cakes for birthdays, anniversaries and everything in between." />
      <section className="container max-w-page py-8">
        <div className="card mb-6 flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
          <span>Want something custom? Send a demo enquiry and tell us about your dream cake.</span>
          <Link to="/contact" className="btn btn-brand">Enquire</Link>
        </div>
        <Listing items={cakes} params={params} setParams={setParams} />
      </section>
    </>
  );
}
