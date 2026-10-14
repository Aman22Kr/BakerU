import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useApp } from '../hooks/AppContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { QUICK } from '../config/quickSettings';

export default function Contact() {
  const { contactDraft, setContactDraft } = useApp();
  const [sent, setSent] = useLocalStorage('contactMessages', [], Array.isArray);
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const upd = (k) => (e) => { setDone(false); setContactDraft({ ...contactDraft, [k]: e.target.value }); };
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (contactDraft.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(contactDraft.email)) er.email = 'Enter a valid email address.';
    if (contactDraft.message.trim().length < 10) er.message = 'Message should be at least 10 characters.';
    setErr(er);
    if (Object.keys(er).length) return;
    setSent([{ ...contactDraft, at: new Date().toISOString() }, ...sent].slice(0, 10));
    setContactDraft({ name: '', email: '', message: '' });
    setDone(true);
  };
  return (
    <>
      <PageHero title="Contact Us" sub="We'd love to hear from you (this is a demo form)." />
      <div className="container max-w-page py-10 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-sm">
          <p className="flex items-center gap-2"><Phone size={16} className="text-accent" />{QUICK.PHONE}</p>
          <p className="flex items-center gap-2"><Mail size={16} className="text-accent" />{QUICK.EMAIL}</p>
          <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-accent" />Sample address, Ranchi, Jharkhand, India</p>
          <p className="text-xs muted">Contact details are placeholders. Your draft is autosaved in this browser as you type.</p>
        </div>
        <form onSubmit={submit} noValidate className="card space-y-4 p-5">
          {done && <p role="status" className="rounded bg-green-100 p-3 text-sm text-green-900">Thanks! Your message was saved in this browser only. Nothing was sent to a server.</p>}
          <label className="block text-sm">Name<input className="input mt-1" value={contactDraft.name} onChange={upd('name')} aria-invalid={!!err.name} />{err.name && <span role="alert" className="text-xs text-red-600">{err.name}</span>}</label>
          <label className="block text-sm">Email<input type="email" className="input mt-1" value={contactDraft.email} onChange={upd('email')} aria-invalid={!!err.email} />{err.email && <span role="alert" className="text-xs text-red-600">{err.email}</span>}</label>
          <label className="block text-sm">Message<textarea rows={5} className="input mt-1" value={contactDraft.message} onChange={upd('message')} aria-invalid={!!err.message} />{err.message && <span role="alert" className="text-xs text-red-600">{err.message}</span>}</label>
          <button className="btn btn-primary">Send (demo)</button>
        </form>
      </div>
    </>
  );
}
