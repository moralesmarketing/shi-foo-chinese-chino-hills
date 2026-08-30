type IconProps = { className?: string };

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path
        d="M12 3s-5 4.5-5 9.5a5 5 0 0 0 10 0c0-1.5-.8-2.6-1.5-3.5.2 1.5-.5 2.5-1.2 2.8C15 10 14.5 7.5 12 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19c0-5 2-8 6-10.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M12 3.5 5 6v5.5c0 5 3 8 7 9 4-1 7-4 7-9V6l-7-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const trustIcons = {
  home: HomeIcon,
  flame: FlameIcon,
  leaf: LeafIcon,
  shield: ShieldIcon,
};

export function WheatOffIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M12 21V9" strokeLinecap="round" />
      <path d="M9 12c0-1.5 1-2.5 3-3 2 .5 3 1.5 3 3-2 .5-3-.5-3-2M9 8c0-1.5 1-2.5 3-3 2 .5 3 1.5 3 3-2 .5-3-.5-3-2M9 16c0-1.5 1-2.5 3-3 2 .5 3 1.5 3 3-2 .5-3-.5-3-2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 4 16 16" strokeLinecap="round" />
    </svg>
  );
}

export function SproutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M12 21v-8" strokeLinecap="round" />
      <path d="M12 13c-4 0-6-2.5-6-6 4 0 6 2 6 4 0-4 2.5-6 7-6 0 4.5-3 8-7 8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="m12 3 2.6 5.7 6.2.6-4.7 4.2 1.4 6.2L12 16.9l-5.5 2.8 1.4-6.2-4.7-4.2 6.2-.6L12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path
        d="M6.5 4h2.7l1.3 4-2 1.3a11 11 0 0 0 6.2 6.2l1.3-2 4 1.3v2.7c0 1-.8 1.8-1.8 1.7-9-1-15.6-7.6-16.6-16.6C5 4.8 5.7 4 6.5 4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}
