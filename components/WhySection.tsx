import Image from "next/image";
import { LeafIcon, ShieldIcon, WheatOffIcon } from "./Icons";

const points = [
  {
    icon: LeafIcon,
    title: "Real Ingredients, No Shortcuts",
    detail:
      "Shi Foo was one of the first Chinese kitchens in the area to switch to non-GMO cooking oil, with no added MSG across the menu.",
  },
  {
    icon: WheatOffIcon,
    title: "Orange Chicken, Done Honestly",
    detail: "Made with real oranges and no corn syrup — not a shortcut sauce out of a jug.",
  },
  {
    icon: ShieldIcon,
    title: "A Kitchen You Can Trust",
    detail:
      "A dedicated gluten-free menu and a peanut-free facility, so more of the table can order without worry.",
  },
];

export default function WhySection() {
  return (
    <section className="relative overflow-hidden bg-surface-sunken py-24">
      <div className="section grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/images/kitchen.jpg"
            alt="Fresh vegetables prepped for made-to-order dishes at Shi Foo"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Why Shi Foo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Fresh Food, Made Safe</h2>
          <div className="mt-8 space-y-6">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
