export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,40,31,0.06),transparent_60%)]" />
      <div className="section relative max-w-2xl text-center mx-auto">
        <span className="eyebrow">Our Story</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">A Mom-and-Pop Kitchen, Run by Eric and Young</h2>
        <div className="divider mt-6" />

        <p className="mx-auto mt-8 max-w-md text-ink-soft">
          Shi Foo is a family-owned Chinese restaurant in Chino Hills, built
          on two things: fresh, made-to-order food and a kitchen you can
          trust — down to the oils it&apos;s cooked in. Regulars come back
          for the steam-table classics as much as the cook-to-order
          specialties, and the gluten-free program means everyone at the
          table can order off the same menu.
        </p>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          It&apos;s a small space with a simple goal: hot, fresh food, out
          the door fast, without cutting corners on quality.
        </p>
      </div>
    </section>
  );
}
