import { testimonials, business } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="bg-surface-raised py-24">
      <div className="page-header !py-0 !pb-16">
        <span className="eyebrow">Reviews</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {business.rating.yelp.count}+ Reviews, {business.rating.yelp.score} Stars
        </h2>
        <div className="divider mt-6" />
      </div>

      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="flex flex-col rounded-sm border border-[var(--surface-line)] bg-surface p-6"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">{t.author}</p>
              <span className="badge badge-gold">{t.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
