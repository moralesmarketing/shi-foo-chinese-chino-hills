export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="var(--ink)" />
      <path
        d="M10 20.5c0 5.5 4.5 8.5 10 8.5s10-3 10-8.5"
        stroke="var(--surface)"
        strokeWidth="2.1"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M8.5 20.5h23" stroke="var(--surface)" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M9 18.5 6.5 16M31 18.5 33.5 16" stroke="var(--surface)" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="20" cy="13" r="2.1" fill="var(--accent)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      Shi Foo
    </span>
  );
}
