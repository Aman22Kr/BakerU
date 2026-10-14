import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdSlot from './AdSlot';
import Modals from './Modals';
import { useApp } from '../hooks/AppContext';

export default function Layout() {
  const { pathname } = useLocation();
  const { toast } = useApp();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[70] focus:bg-white focus:p-2">Skip to content</a>
      <Header />
      <main id="main" className="flex-1"><Outlet /></main>
      <AdSlot />
      <Footer />
      <Modals />
      <div aria-live="polite" className="pointer-events-none fixed bottom-4 left-1/2 z-[80] -translate-x-1/2">
        {toast && <div className="pointer-events-auto rounded-md bg-cocoa-dark px-4 py-2 text-sm text-white shadow-lift">{toast}</div>}
      </div>
    </div>
  );
}
