export default function PageHero({ title, sub }) {
  return (
    <section className="bg-brand">
      <div className="container max-w-page py-10 md:py-14 text-center text-cocoa-dark">
        <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
        {sub && <p className="mt-2 max-w-2xl mx-auto text-sm md:text-base">{sub}</p>}
      </div>
    </section>
  );
}
