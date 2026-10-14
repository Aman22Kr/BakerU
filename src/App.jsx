import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Collection = lazy(() => import('./pages/Collection'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Orders = lazy(() => import('./pages/Orders'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Profile = lazy(() => import('./pages/Profile'));
const Contact = lazy(() => import('./pages/Contact'));
const Faqs = lazy(() => import('./pages/Faqs'));
const SpecialityCakes = lazy(() => import('./pages/SpecialityCakes'));
const Articles = lazy(() => import('./pages/Articles'));
const Article = lazy(() => import('./pages/Article'));
const StoreLocator = lazy(() => import('./pages/StoreLocator'));
const PromoCodes = lazy(() => import('./pages/PromoCodes'));
const StaticPage = lazy(() => import('./pages/StaticPage'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<div className="grid min-h-[60vh] place-items-center text-sm muted">Loading…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<Collection />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="past-order" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="speciality-cakes" element={<SpecialityCakes />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<Article />} />
          <Route path="store-locator" element={<StoreLocator />} />
          <Route path="store-locator/:city" element={<StoreLocator />} />
          <Route path="online-order" element={<Products />} />
          <Route path="promo-codes" element={<PromoCodes />} />
          <Route path="page/:slug" element={<StaticPage />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
