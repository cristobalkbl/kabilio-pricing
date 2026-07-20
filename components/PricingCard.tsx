import { Button } from "./Button";
import { Icon } from "./Icon";

export type Plan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

// Tarjeta de plan para la página de precios.
export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        plan.featured
          ? "border-brand bg-white shadow-xl ring-1 ring-brand"
          : "border-line bg-surface"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
          Más elegido
        </span>
      )}

      <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
      <p className="mt-2 text-sm text-ink-soft">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-ink">{plan.price}</span>
        {plan.period && <span className="text-sm text-ink-muted">{plan.period}</span>}
      </div>

      <div className="mt-8">
        <Button
          href={plan.ctaHref}
          variant={plan.featured ? "primary" : "ghost"}
          className="w-full"
        >
          {plan.ctaLabel}
        </Button>
      </div>

      <ul className="mt-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-green" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
