import Link from "next/link";
import { business } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#story", label: "Our Story" },
  { href: "/#location", label: "Location" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--surface-line)] bg-surface/90 backdrop-blur">
      <div className="section flex items-center justify-between py-5">
        <Link href="/" className="font-[family-name:var(--font-body)] text-lg font-bold uppercase tracking-[0.3em] text-ink">
          Shi Foo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="hidden text-sm font-semibold text-ink sm:block">
            {business.phone}
          </a>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
}
