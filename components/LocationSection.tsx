import { business } from "@/lib/site-data";

export default function LocationSection() {
  return (
    <section id="location" className="py-24">
      <div className="page-header !py-0 !pb-16">
        <span className="eyebrow">Visit Us</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">Find Us</h2>
        <div className="divider mt-6" />
      </div>

      <div className="section grid gap-12 md:grid-cols-2">
        <div>
          <div className="space-y-1">
            {business.hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between border-b border-[var(--surface-line)] py-2 text-sm"
              >
                <span className="font-medium text-ink">{h.day}</span>
                <span className="text-ink-soft">{h.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-sm text-ink-soft">
            <p>
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <a href={business.phoneHref} className="block font-semibold text-ink hover:text-red">
              {business.phone}
            </a>
            <p>Takeout &amp; dine-in only. Private parking lot on-site.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get Directions
            </a>
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Order Online
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-[var(--surface-line)]">
          <iframe
            src={business.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shi Foo location map"
          />
        </div>
      </div>
    </section>
  );
}
