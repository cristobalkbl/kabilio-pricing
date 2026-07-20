import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/CTABanner";
import { Icon, type IconName } from "@/components/Icon";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Recursos",
  description:
    "Guías, plantillas y webinars para asesorías, gestorías y pymes: conciliación bancaria, facturación con IA, Verifactu y más.",
  path: "/recursos",
});

const resources: { icon: IconName; type: string; title: string; description: string; href: string }[] = [
  {
    icon: "folder",
    type: "Guía",
    title: "Guía completa de Verifactu para despachos",
    description: "Todo lo que tu asesoría necesita saber para preparar a sus clientes ante la Ley Antifraude.",
    href: "/blog",
  },
  {
    icon: "chart",
    type: "Plantilla",
    title: "Checklist de cierre mensual",
    description: "Una lista paso a paso para que ningún cierre se te escape ni un detalle.",
    href: "/blog",
  },
  {
    icon: "ai",
    type: "Webinar",
    title: "IA aplicada a la contabilidad",
    description: "Casos reales de automatización de conciliación y facturas en despachos españoles.",
    href: "/blog",
  },
  {
    icon: "invoice",
    type: "Guía",
    title: "Cómo digitalizar las facturas de tus clientes",
    description: "Buenas prácticas para que la captura y el procesamiento de facturas fluyan.",
    href: "/blog",
  },
  {
    icon: "bank",
    type: "Comparativa",
    title: "Conexión bancaria PSD2: qué debes saber",
    description: "Cómo funciona la agregación bancaria y qué aporta a la conciliación automática.",
    href: "/blog",
  },
  {
    icon: "shield",
    type: "Guía",
    title: "Seguridad y RGPD en la nube",
    description: "Qué exigir a tu software de contabilidad para proteger los datos de tus clientes.",
    href: "/blog",
  },
];

export default function RecursosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Aprende a sacarle todo el partido a tu contabilidad"
        subtitle="Guías, plantillas y webinars para despachos y empresas que quieren automatizar y cumplir con la normativa."
      />

      <section className="bg-white py-20">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand">
                <Icon name={r.icon} className="h-6 w-6" />
              </span>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-green">
                {r.type}
              </span>
              <h2 className="mt-1 text-lg font-semibold text-ink group-hover:text-brand">{r.title}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{r.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Ver más
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="¿Prefieres verlo en directo?"
        subtitle="Pide una demo y te enseñamos Kabilio con un caso parecido al tuyo."
      />
    </>
  );
}
