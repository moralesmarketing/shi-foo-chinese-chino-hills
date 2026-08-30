import Image from "next/image";
import { business } from "@/lib/site-data";
import { PhoneIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Fresh wok-cooked noodles at Shi Foo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-surface" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />

      <div className="relative z-10 w-full px-6 py-24 sm:px-10 md:px-14 lg:px-20">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            Chino Hills, CA
          </span>
          <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.4)] sm:text-6xl lg:text-7xl">
            Fresh Chinese Food,
            <br />
            Made Your Way
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            A family-run kitchen making 80+ dishes to order — real
            gluten-free options, non-GMO oils, no added MSG.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Order Online
            </a>
            <a href={business.phoneHref} className="btn bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm hover:bg-white/20">
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-white">
                {business.rating.yelp.score}★
              </span>
              <span>
                Yelp
                <br />
                {business.rating.yelp.count} reviews
              </span>
            </div>
            <div className="h-8 w-px bg-white/25" />
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-white">
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
