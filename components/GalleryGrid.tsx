"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages, galleryPlaceholders, type GalleryImage } from "@/lib/site-data";
import { CloseIcon, ChevronIcon } from "./Icons";

export default function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () => setIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <>
      <div className="section grid grid-cols-2 gap-3 pb-24 sm:gap-4 md:grid-cols-3">
        {galleryImages.map((img: GalleryImage, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative block aspect-square w-full overflow-hidden rounded-lg border border-line bg-surface-sunken"
            aria-label={`View larger photo: ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 py-2.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              {img.caption}
            </span>
          </button>
        ))}

        {galleryPlaceholders.map((label) => (
          <div
            key={label}
            className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong bg-surface-sunken/60 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</span>
            <span className="text-xs text-ink-faint">Photo coming soon</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[index].caption}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
            >
              <ChevronIcon className="h-5 w-5" />
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[80vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg sm:aspect-[4/3]">
                <Image
                  src={galleryImages[index].src}
                  alt={galleryImages[index].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-white/90">
                {galleryImages[index].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
