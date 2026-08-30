import type { Metadata } from "next";
import { menu, business } from "@/lib/site-data";
import { LeafIcon, WheatOffIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu for Shi Foo in Chino Hills, CA — appetizers, soups, fried rice, chow mein, stir-fry entrees, and a dedicated gluten-free menu. Prices included.",
};

const tagIcon: Record<string, { icon: typeof LeafIcon; label: string }> = {
  gf: { icon: WheatOffIcon, label: "Gluten-Free" },
  veg: { icon: LeafIcon, label: "Vegetarian" },
};

export default function MenuPage() {
  return (
    <div>
      <nav className="no-scrollbar sticky top-[65px] z-40 border-b border-line bg-surface/95 backdrop-blur-md md:top-[81px]">
        <div className="section flex gap-2 overflow-x-auto py-4">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-header">
        <span className="eyebrow">Shi Foo Chino Hills</span>
        <h1 className="mt-3 text-5xl sm:text-6xl">Menu</h1>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          Every dish is made to order. Order ahead through{" "}
          <a
            href={business.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-ink"
          >
            our online ordering
          </a>
          , or call {business.phone} for pickup.
        </p>
      </div>

      <div className="section pb-24">
        <div className="card p-6 sm:p-10 md:p-14">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {menu.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-36">
                <h2 className="text-center text-2xl">{cat.title}</h2>
                <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-accent-soft" />

                <ul className="mt-8 space-y-5">
                  {cat.items.map((item) => {
                    const t = item.tag && item.tag !== "popular" ? tagIcon[item.tag] : null;
                    return (
                      <li key={item.name} className="flex justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-ink">{item.name}</p>
                            {item.tag === "popular" && <span className="tag">Popular</span>}
                            {t && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-open">
                                <t.icon className="h-3.5 w-3.5" />
                                {t.label}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="mt-1 text-sm text-ink-faint">{item.description}</p>
                          )}
                        </div>
                        <span className="shrink-0 whitespace-nowrap font-bold text-accent">
                          {item.price}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
