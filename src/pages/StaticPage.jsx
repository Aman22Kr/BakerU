import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import NotFound from './NotFound';
import { STATIC_PAGES } from '../data/content';

export default function StaticPage() {
  const { slug } = useParams();
  const pg = STATIC_PAGES[slug];
  if (!pg) return <NotFound />;
  return (
    <>
      <PageHero title={pg.title} />
      <div className="container max-w-3xl space-y-4 py-10 leading-7">
        {pg.body.map((t, i) => <p key={i}>{t}</p>)}
        <Link to="/" className="inline-block text-sm text-accent underline">Back to home</Link>
      </div>
    </>
  );
}
