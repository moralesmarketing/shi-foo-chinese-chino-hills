import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Real food photos from Shi Foo in Chino Hills, CA.",
};

export default function GalleryPage() {
  return (
    <div>
      <div className="page-header">
        <span className="eyebrow">Gallery</span>
        <h1 className="mt-3 text-5xl sm:text-6xl">A Look Inside</h1>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          Real plates, straight out of the kitchen. Tap any photo for a
          closer look.
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
