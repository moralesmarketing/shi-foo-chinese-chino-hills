import Image from "next/image";
import Link from "next/link";
import { fanFavorites } from "@/lib/site-data";

export default function MenuPreview() {
  return (
    <section id="menu-preview" className="py-24">
      <div className="page-header !pb-14">
        <span className="eyebrow">Fan Favorites</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">What Chino Hills Orders Most</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Cross-checked against real, named customer reviews.
        </p>
      </div>

      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fanFavorites.map((dish) => (
          <div key={dish.name} className="card group overflow-hidden">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="tag absolute left-4 top-4 bg-white/95 text-ink shadow-sm">{dish.tag}</span>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{dish.name}</h3>
                {dish.price && <span className="text-sm font-bold text-accent">{dish.price}</span>}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section mt-10 flex justify-center">
        <Link href="/menu" className="btn btn-secondary">
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
