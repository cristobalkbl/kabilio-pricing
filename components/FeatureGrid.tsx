import { Icon, type IconName } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features: Feature[];
  /** 3 (por defecto) o 6 columnas de referencia; el grid se adapta. */
  columns?: 3 | 6;
};

// Grid de features con icono, título y descripción. Pensado para 3 o 6 items.
export function FeatureGrid({ eyebrow, title, subtitle, features, columns = 3 }: Props) {
  const cols = columns === 6 ? "lg:grid-cols-3" : "lg:grid-cols-3";
  return (
    <section className="bg-surface2 py-20">
      <div className="container">
        {title && (
          <div className="mb-14">
            <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          </div>
        )}
        <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
