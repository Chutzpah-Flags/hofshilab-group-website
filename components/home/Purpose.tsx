import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, string> = {
  financial:
    "M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4",
  geographic: "M12 3l9 9-9 9-9-9z",
  fiscal: "M5 19L19 5M7 7h.01M17 17h.01",
  personal: "M12 3v18M3 12h18",
};

export function Purpose() {
  const t = useTranslations("home.purpose");
  const keys = ["financial", "geographic", "fiscal", "personal"] as const;

  return (
    <Section tone="parchment">
      <div className="max-w-2xl">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          {t("title")}
        </h2>
        <p className="mt-5 max-w-xl text-[1.25rem] leading-[1.45] text-sub">
          {t("body")}
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keys.map((key, i) => (
          <Reveal key={key} delay={i * 0.08} y={20}>
            <article className="glass h-full rounded-[var(--radius-card)] p-7">
              <span className="flex h-10 w-10 items-center justify-center text-accent">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d={ICONS[key]}
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-[1.3125rem] font-semibold tracking-[-0.02em] text-ink">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-sub">
                {t(`items.${key}.desc`)}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
