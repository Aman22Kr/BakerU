import { Link } from 'react-router-dom';
import { QUICK } from '../config/quickSettings';

/** Small placeholder ad band shown at the bottom of every page (above the footer).
 *  It is a house ad: no third-party ad network is loaded. Swap the inner markup for your ad code. */
export default function AdSlot() {
  if (!QUICK.ADS_ENABLED) return null;
  return (
    <aside aria-label="Advertisement" className="border-t border-[var(--line)] bg-brand-light/60 dark:bg-white/5">
      <div className="container max-w-page py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center text-xs">
        <span className="uppercase tracking-widest opacity-60">Advertisement</span>
        <span className="font-medium">Sample ad slot (728×90): your brand could appear here.</span>
        <Link to="/contact" className="underline underline-offset-2 hover:text-accent">Advertise with us</Link>
      </div>
    </aside>
  );
}
