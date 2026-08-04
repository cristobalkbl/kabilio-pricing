import { DemoForm } from "@/components/DemoForm";
import { Icon } from "@/components/Icon";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Solicita una demo",
  description:
    "Solicita una demo personalizada de Kabilio. Te enseñamos cómo automatizar la conciliación bancaria y las facturas con IA en tu despacho o empresa.",
  path: "/solicita-una-demo",
});

const benefits = [
  "Ahorra tiempo con IA",
  "Reduce los picos de trabajo",
  "Mejora la calidad del servicio",
];

export default function SolicitaDemoPage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container grid gap-12 lg:grid-cols-2">
        {/* Columna informativa */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            Solicita una demo
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Descubre Kabilio en una demo personalizada
          </h1>
          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-ink-soft">
                <Icon name="check" className="h-5 w-5 text-green" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-line bg-surface2 p-6">
            <p className="text-sm font-semibold text-ink">¿Prefieres llamarnos?</p>
            <p className="mt-2 text-sm text-ink-soft">Teléfono: {site.phone}</p>
          </div>
        </div>

        {/* Columna formulario */}
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Solicita tu demo</h2>
          <p className="mt-1 text-sm text-ink-muted">Te respondemos en menos de 24 h laborables.</p>
          <div className="mt-6">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
