import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import { FAQS } from '../data/content';

export default function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero title="Frequently Asked Questions" />
      <div className="container max-w-3xl py-10 space-y-3">
        {FAQS.map((f, i) => (
          <div key={f.q} className="card">
            <h2 className="font-sans text-base">
              <button className="flex w-full items-center justify-between gap-3 p-4 text-left font-medium" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}<ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
            </h2>
            {open === i && <p className="px-4 pb-4 text-sm muted">{f.a}</p>}
          </div>
        ))}
      </div>
    </>
  );
}
