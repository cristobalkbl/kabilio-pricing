import { Button } from "./Button";
import { HeroMock } from "./HeroMock";
import { Icon } from "./Icon";

export type HeroCta = { label: string; href: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** Lista corta de refuerzos bajo los CTA (opcional). */
  highlights?: string[];
};

// Sección hero reutilizable. Un único H1 por página (este componente lo emite).
export function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  highlights,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
              <Icon name="sparkles" className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {highlights && highlights.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-ink-muted">
                  <Icon name="check" className="h-4 w-4 text-green" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        <HeroMock />
      </div>
    </section>
  );
}
