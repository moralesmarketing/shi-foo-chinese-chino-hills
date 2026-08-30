import { business } from "@/lib/site-data";
import { PhoneIcon } from "./Icons";

export default function MobileOrderBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-line bg-surface-raised/95 p-2.5 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={business.phoneHref}
        aria-label={`Call Shi Foo at ${business.phone}`}
        className="btn btn-secondary flex-1 !py-3"
      >
        <PhoneIcon className="h-4 w-4" />
        Call
      </a>
      <a
        href={business.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary flex-[2] !py-3"
      >
        Order Online
      </a>
    </div>
  );
}
