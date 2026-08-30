import { testimonials, business } from "@/lib/site-data";
import { StarIcon } from "./Icons";

export default function ReviewsSection() {
  const featured = testimonials.slice(0, 3);
  return (
    <section className="pb-24">
      <div className="page-header !pb-14">
        <span className="eyebrow">Reviews</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {business.rating.yelp.count}+ Reviews, {business.rating.yelp.score} Stars
        </h2>
        <div className="mt-3 flex justify-center gap-0.5 text-accent">
          {Array.from({ length: 5 }).map((_, idx) => (
            <StarIcon key={idx} className="h-4 w-4" filled={idx < Math.round(business.rating.yelp.score)} />
          ))}
        </div>
      </div>

      <div className="section grid gap-6 md:grid-cols-3">
        {featured.map((t) => (
          <div key={t.author} className="card flex flex-col p-6">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-5 text-sm font-bold text-ink">{t.author}</p>
            <p className="text-xs text-ink-faint">{t.source} review</p>
          </div>
        ))}
      </div>
    </section>
  );
}
