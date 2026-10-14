import PageHero from '../components/PageHero';
import Empty from '../components/Empty';
import ProductCard from '../components/ProductCard';
import { useApp } from '../hooks/AppContext';
import { productById } from '../data/products';

export default function Wishlist() {
  const { wishlist } = useApp();
  const items = wishlist.map(productById).filter(Boolean);
  return (
    <>
      <PageHero title="Your Favourites" />
      <div className="container max-w-page py-8">
        {items.length === 0 ? <Empty icon="💛" title="No favourites yet" text="Tap the heart on any product to save it here." cta="Browse products" /> : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{items.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}</div>
        )}
      </div>
    </>
  );
}
