"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/hours";

export default function OpenStatusBadge() {
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null);

  useEffect(() => {
    // Client's local clock is unknowable at server-render time — computed
    // here on purpose to avoid a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(getOpenStatus());
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return <span className="inline-block h-6 w-32 animate-pulse rounded-full bg-line" />;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        status.isOpen ? "bg-open-soft text-open" : "bg-line text-ink-soft"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${status.isOpen ? "bg-open" : "bg-ink-faint"}`} />
      {status.label}
    </span>
  );
}
