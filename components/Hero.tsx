import Image from "next/image";
import { business } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Fresh wok-cooked Chinese food at Shi Foo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/55 to-surface" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/70 to-transparent" />

      <div className="section relative z-10 py-24">
        <div className="max-w-xl">
          <span className="eyebrow">Chino Hills, CA</span>
          <h1 className="mt-4 text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Fresh Chinese Food,
            <br />
            Made Your Way
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            A family-run kitchen making 80+ dishes to order — with real
            gluten-free and vegetarian options, cooked with non-GMO oils.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Order Online
            </a>
            <a href="/menu" className="btn btn-ghost">
              View Menu
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-ink-soft">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                {business.rating.yelp.score}
              </span>
              <span>
                ★ Yelp
                <br />
                {business.rating.yelp.count} reviews
              </span>
            </div>
            <div className="h-8 w-px bg-[var(--surface-line)]" />
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                80+
              </span>
              <span>
                Made-to-order
                <br />
                dishes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
