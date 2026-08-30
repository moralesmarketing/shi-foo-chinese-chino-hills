"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "@/lib/site-data";
import { LogoMark } from "./Logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <div
        className={`section flex items-center justify-between transition-[padding] duration-300 ease-out ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark className="h-8 w-8" />
          <span className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-ink">
            Shi Foo
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                pathname === l.href ? "text-accent" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </a>
          <a href={business.orderUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Order Online
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-surface md:hidden"
          >
            <nav className="section flex flex-col py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`border-b border-line py-3.5 text-base font-semibold last:border-0 ${
                    pathname === l.href ? "text-accent" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a href={business.phoneHref} className="mt-3 flex items-center gap-2 py-2 text-base font-semibold text-ink">
                <PhoneIcon className="h-4 w-4" />
                {business.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
