import type { Metadata } from "next";
import { menu, business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Menu | Shi Foo Chino Hills",
  description:
    "Full menu for Shi Foo in Chino Hills, CA — appetizers, soups, fried rice, chow mein, stir-fry entrees, and a dedicated gluten-free menu.",
};

const tagClass: Record<string, string> = {
  Popular: "badge-red",
  "Gluten-Free": "badge-gold",
  Vegetarian: "badge-green",
};

export default function MenuPage() {
  return (
    <div>
      <nav className="sticky top-[73px] z-40 border-b border-[var(--surface-line)] bg-surface/95 backdrop-blur">
        <div className="section flex gap-2 overflow-x-auto py-4">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-[var(--surface-line)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink-soft transition-colors hover:border-red hover:text-ink"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-header">
        <span className="eyebrow">Shi Foo Chino Hills</span>
        <h1 className="mt-3 text-5xl sm:text-6xl">Menu</h1>
        <div className="divider mt-6" />
        <p className="mx-auto mt-6 max-w-md text-ink-soft">
          Every dish is made to order. Order ahead through{" "}
          <a
            href={business.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red hover:text-ink"
          >
            our online ordering
          </a>
          , or call {business.phone} for pickup.
        </p>
      </div>

      <div className="section pb-24">
        <div className="rounded-sm border border-[var(--surface-line)] bg-surface-raised p-6 sm:p-10 md:p-14">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {menu.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-40">
                <h2 className="text-center text-2xl tracking-wide">{cat.title}</h2>
                <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />

                <ul className="mt-8 space-y-5">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                            {item.name}
                          </p>
                          {item.tag && (
                            <span className={`badge ${tagClass[item.tag]}`}>{item.tag}</span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-sm italic text-ink-faint">{item.description}</p>
                        )}
                      </div>
                      <span className="shrink-0 whitespace-nowrap font-semibold text-gold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
