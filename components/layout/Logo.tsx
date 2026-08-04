import { Link } from "@/i18n/navigation";

// HLAB logo: a node-cluster mark (lab / global network) + wordmark.
// `light` flips it for dark surfaces (footer).
export function Logo({ light = false }: { light?: boolean }) {
  const square = light ? "#ffffff" : "#1d1d1f";
  const ink = light ? "#1d1d1f" : "#ffffff";

  return (
    <Link
      href="/"
      aria-label="HLAB — Hofshilab Group — Home"
      className="group flex items-center gap-2.5"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="transition group-hover:scale-105"
      >
        <rect width="40" height="40" rx="11" fill={square} />
        <g stroke={ink} strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round">
          <line x1="13" y1="16" x2="29" y2="13" />
          <line x1="29" y1="13" x2="20" y2="30" />
          <line x1="13" y1="16" x2="20" y2="30" />
        </g>
        <circle cx="13" cy="16" r="2.4" fill={ink} />
        <circle cx="20" cy="30" r="2.4" fill={ink} />
        <circle cx="29" cy="13" r="4.2" fill="#34c759" fillOpacity="0.18" />
        <circle cx="29" cy="13" r="3.1" fill="#34c759" />
      </svg>
      <span
        className={`text-[1.0625rem] font-bold tracking-[-0.03em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        HLAB
      </span>
    </Link>
  );
}
