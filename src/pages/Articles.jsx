import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { ARTICLES } from '../data/content';
import { catBySlug } from '../data/categories';

export default function Articles() {
  return (
    <>
      <PageHero title="Blogs" sub="Stories, guides and baking notes (sample articles)." />
      <div className="container max-w-page py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <Reveal key={a.slug} index={i}>
            <Link to={`/articles/${a.slug}`} className="card group block h-full overflow-hidden hover:shadow-lift transition-shadow">
              <div className="aspect-card overflow-hidden"><Img src={catBySlug(a.image)?.img} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-4"><p className="text-xs muted">{new Date(a.date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</p>
                <h2 className="mt-1 text-lg font-semibold leading-snug">{a.title}</h2><p className="mt-2 text-sm muted">{a.excerpt}</p></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
