import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useApp } from '../hooks/AppContext';

export default function Profile() {
  const { profile, setProfile, theme, setTheme, anim, setAnim, resetAll, setModal, notify } = useApp();
  const [f, setF] = useState({ name: profile.name, email: profile.email });
  const save = (e) => { e.preventDefault(); setProfile((p) => ({ ...p, ...f })); notify('Saved in this browser'); };
  return (
    <>
      <PageHero title="Account & Settings" sub="Everything here lives in your browser's localStorage." />
      <div className="container max-w-page py-8 grid gap-6 md:grid-cols-2">
        <section className="card p-5">
          <h2 className="font-sans text-lg font-semibold mb-3">Personal information (demo)</h2>
          {profile.loggedIn ? (
            <form onSubmit={save} className="space-y-3">
              <label className="block text-sm">Name<input className="input mt-1" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
              <label className="block text-sm">Email (optional)<input type="email" className="input mt-1" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
              <div className="flex gap-3"><button className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-outline" onClick={() => setProfile({ loggedIn: false, name: '', email: '' })}>Sign out</button></div>
            </form>
          ) : (
            <p className="text-sm">You are not signed in. <button className="underline text-accent" onClick={() => setModal('login')}>Demo sign in</button></p>
          )}
        </section>
        <section className="card p-5 space-y-4">
          <h2 className="font-sans text-lg font-semibold">Preferences</h2>
          <label className="block text-sm">Theme
            <select className="input mt-1" value={theme} onChange={(e) => setTheme(e.target.value)}><option value="light">Light</option><option value="dark">Dark</option></select>
          </label>
          <label className="block text-sm">Animation speed
            <select className="input mt-1" value={anim.speed} onChange={(e) => setAnim({ ...anim, speed: e.target.value })}>
              <option value="slow">Slow</option><option value="normal">Normal</option><option value="fast">Fast</option><option value="off">Off</option>
            </select>
          </label>
          <label className="block text-sm">Animation intensity
            <select className="input mt-1" value={anim.intensity} onChange={(e) => setAnim({ ...anim, intensity: e.target.value })}>
              <option value="subtle">Subtle</option><option value="medium">Medium</option><option value="strong">Strong</option>
            </select>
          </label>
          <p className="text-xs muted">Your operating system's “reduce motion” setting is always respected.</p>
        </section>
        <section className="card p-5 md:col-span-2">
          <h2 className="font-sans text-lg font-semibold mb-2">About your saved data</h2>
          <p className="text-sm muted">Cart, favourites, recently viewed items, search history, theme, location and demo orders are stored with localStorage. They are specific to this browser and device, do not sync across devices and are not a real account. Never store passwords or payment details here.</p>
          <button className="btn btn-outline mt-4" onClick={() => { if (window.confirm('Delete all BakerU data saved in this browser?')) resetAll(); }}>Reset all saved data</button>
        </section>
      </div>
    </>
  );
}
