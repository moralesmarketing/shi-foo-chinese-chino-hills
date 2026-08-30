import type { Metadata } from "next";
import { business } from "@/lib/site-data";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import OpenStatusBadge from "@/components/OpenStatusBadge";

export const metadata: Metadata = {
  title: "Contact & Order",
  description:
    "Call, get directions, or order online from Shi Foo in Chino Hills, CA. Hours, address, and map included.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">Contact &amp; Order</span>
        <h1 className="mt-3 text-5xl sm:text-6xl">Get in Touch</h1>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          Fastest way to reach us is by phone. Order ahead online, or call
          for pickup.
        </p>
      </div>

      <div className="section grid gap-6 pb-20 sm:grid-cols-3">
        <div className="card flex flex-col items-start gap-3 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
            <PhoneIcon className="h-5 w-5" />
          </span>
          <p className="font-bold text-ink">Call for Pickup</p>
          <p className="text-sm text-ink-soft">Fastest way to place an order.</p>
          <a href={business.phoneHref} className="btn btn-primary mt-1">
            {business.phone}
          </a>
        </div>

        <div className="card flex flex-col items-start gap-3 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
              <path d="M4 4h16v12H7l-3 3V4Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="font-bold text-ink">Order Online</p>
          <p className="text-sm text-ink-soft">Skip the wait — order ahead for pickup.</p>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-1">
            Order Now
          </a>
        </div>

        <div className="card flex flex-col items-start gap-3 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
            <PinIcon className="h-5 w-5" />
          </span>
          <p className="font-bold text-ink">Visit Us</p>
          <p className="text-sm text-ink-soft">
            {business.address.line1}, {business.address.cityStateZip}
          </p>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-1">
            Get Directions
          </a>
        </div>
      </div>

      <div className="border-t border-line bg-surface-raised py-20">
        <div className="section grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">Hours</span>
            <div className="mt-4">
              <OpenStatusBadge />
            </div>
            <div className="mt-6 space-y-1">
              {business.hours.map((h) => (
                <div key={h.day} className="flex justify-between border-b border-line py-2 text-sm">
                  <span className="font-medium text-ink">{h.day}</span>
                  <span className="text-ink-soft">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">Takeout &amp; dine-in only. Private parking lot on-site.</p>
          </div>

          <div className="overflow-hidden rounded-lg border border-line">
            <iframe
              src={business.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shi Foo location map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
