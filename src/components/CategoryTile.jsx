import { Link } from 'react-router-dom';
import Img from './Img';
import Reveal from './Reveal';

export default function CategoryTile({ cat, index = 0 }) {
  return (
    <Reveal index={index}>
      <Link to={`/products/${cat.slug}`} className="group block text-center">
        <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-brand group-hover:border-cocoa transition-colors duration-300">
          <Img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <h3 className="mt-3 text-sm font-medium font-sans leading-snug px-1">{cat.name}</h3>
      </Link>
    </Reveal>
  );
}
