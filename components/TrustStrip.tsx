import { trustPoints } from "@/lib/site-data";
import { trustIcons } from "./Icons";

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-surface-raised">
      <div className="section grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((t) => {
          const Icon = trustIcons[t.icon as keyof typeof trustIcons];
          return (
            <div key={t.title} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{t.title}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{t.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
