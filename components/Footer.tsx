import Link from "next/link";
import { business } from "@/lib/site-data";
import { LogoMark } from "./Logo";
import { PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="section grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-ink">
              Shi Foo
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Family-run Chinese kitchen in Chino Hills — fresh, made-to-order
            food with real gluten-free options and a peanut-free kitchen.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Visit</h3>
          <p className="mt-4 flex gap-2 text-sm text-ink-soft">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
            <span>
              {business.address.line1}
              <br />
              {business.address.line2}
            </span>
          </p>
          <a href={business.phoneHref} className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent">
            <PhoneIcon className="h-4 w-4 text-ink-faint" />
            {business.phone}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-accent hover:text-ink"
          >
            Get directions →
          </a>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/menu" className="text-ink-soft hover:text-ink">
                Full Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-ink-soft hover:text-ink">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ink-soft hover:text-ink">
                Our Story
              </Link>
            </li>
            <li>
              <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Order Online
              </a>
            </li>
            <li>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Reviews on Yelp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <p className="section text-xs text-ink-faint">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
