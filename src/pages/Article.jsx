import { Link, useParams } from 'react-router-dom';
import Img from '../components/Img';
import NotFound from './NotFound';
import { ARTICLES } from '../data/content';
import { catBySlug } from '../data/categories';

export default function Article() {
  const { slug } = useParams();
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) return <NotFound what="article" />;
  return (
    <article className="container max-w-3xl py-10">
      <Link to="/articles" className="text-xs text-accent hover:underline">← All articles</Link>
      <h1 className="mt-3 text-3xl md:text-4xl font-semibold">{a.title}</h1>
      <p className="mt-1 text-xs muted">{new Date(a.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
      <Img src={catBySlug(a.image)?.img} alt="" className="my-6 aspect-[16/9] w-full rounded-md object-cover" />
      <div className="space-y-4 leading-7">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
    </article>
  );
}
