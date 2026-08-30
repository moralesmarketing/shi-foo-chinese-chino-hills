import type { Metadata } from "next";
import { LeafIcon, ShieldIcon, WheatOffIcon, FlameIcon } from "@/components/Icons";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Shi Foo — a family-owned Chinese restaurant in Chino Hills run by Eric and Young.",
};

const facts = [
  { icon: FlameIcon, title: "80+ Dishes", detail: "Cooked fresh to order, from steam-table classics to wok specialties." },
  { icon: LeafIcon, title: "Non-GMO Oils, No Added MSG", detail: "One of the first Chinese kitchens in the area to make the switch." },
  { icon: WheatOffIcon, title: "Real Gluten-Free Menu", detail: "Including a GF Orange Chicken made with real oranges, no corn syrup." },
  { icon: ShieldIcon, title: "Peanut-Free Facility", detail: "So more of the table can order without worry." },
];

export default function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">Our Story</span>
        <h1 className="mt-3 text-5xl sm:text-6xl">A Mom-and-Pop Kitchen</h1>
      </div>

      <div className="section grid gap-16 pb-24 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-lg leading-relaxed text-ink-soft">
            Shi Foo is a family-owned Chinese restaurant in Chino Hills, run
            by <span className="font-semibold text-ink">Eric and Young</span>.
            It&apos;s built on two things: fresh, made-to-order food, and a
            kitchen you can actually trust — down to the oil it&apos;s
            cooked in.
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Regulars come back for the steam-table classics as much as the
            cook-to-order specialties like Mongolian Beef and Walnut Shrimp.
            The gluten-free program means everyone at the table can order
            off the same menu, and the kitchen keeps things peanut-free for
            guests who need that peace of mind.
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            It&apos;s a small space with a simple goal: hot, fresh food, out
            the door fast, without cutting corners on quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Order Online
            </a>
            <a href="/menu" className="btn btn-secondary">
              View Menu
            </a>
          </div>
        </div>

        <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong bg-surface-sunken/60 text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Eric &amp; Young</span>
          <span className="text-xs text-ink-faint">Photo coming soon</span>
        </div>
      </div>

      <div className="border-t border-line bg-surface-raised py-20">
        <div className="section grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                <f.icon className="h-5 w-5" />
              </span>
              <p className="mt-3.5 text-sm font-bold text-ink">{f.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
