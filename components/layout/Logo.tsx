import { Link } from "@/i18n/navigation";

// HLAB monogram mark (letters in a 2×2 grid) + the "Hofshilab" wordmark.
// `light` flips the mark for dark surfaces (footer).
export function Logo({ light = false }: { light?: boolean }) {
  const square = light ? "#ffffff" : "#1d1d1f";
  const ink = light ? "#1d1d1f" : "#ffffff";

  return (
    <Link
      href="/"
      aria-label="Hofshilab Group — Home"
      className="group flex items-center gap-2.5"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        aria-hidden
        className="transition group-hover:scale-105"
      >
        <rect width="40" height="40" rx="11" fill={square} />
        <g
          fontFamily="var(--font-sans, system-ui), sans-serif"
          fontSize="13"
          fontWeight={800}
          textAnchor="middle"
        >
          <text x="13" y="18.5" fill={ink}>
            H
          </text>
          <text x="27.5" y="18.5" fill="#34c759">
            L
          </text>
          <text x="13" y="34" fill={ink}>
            A
          </text>
          <text x="27.5" y="34" fill={ink}>
            B
          </text>
        </g>
      </svg>
      <span
        className={`text-[1.0625rem] font-semibold tracking-[-0.02em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Hofshilab
      </span>
    </Link>
  );
}
