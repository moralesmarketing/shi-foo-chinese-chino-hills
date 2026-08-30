"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section py-24">
      <div className="max-w-xl">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">Good to Know</h2>
      </div>

      <div className="mt-8 divide-y divide-[var(--surface-line)] border-y border-[var(--surface-line)]">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium text-ink">{faq.question}</span>
                <span
                  className={`shrink-0 text-xl text-red transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-sm text-ink-soft">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
