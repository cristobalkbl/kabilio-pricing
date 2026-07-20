import { PageHeader } from "@/components/PageHeader";
import { StatsBand } from "@/components/StatsBand";
import { CTABanner } from "@/components/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre nosotros",
  description:
    "Conoce a Kabilio: el equipo que automatiza la contabilidad de asesorías, gestorías y pymes en España con inteligencia artificial.",
  path: "/sobre-nosotros",
});

const values = [
  {
    title: "Cercanía",
    description:
      "Hablamos tu idioma —el de la contabilidad española— y damos soporte real, en español y por personas.",
  },
  {
    title: "Automatización útil",
    description:
      "No usamos la IA como reclamo: la aplicamos donde ahorra horas de verdad, con criterio contable.",
  },
  {
    title: "Confianza",
    description:
      "Tratamos los datos de nuestros clientes con el máximo rigor de seguridad y cumplimiento normativo.",
  },
];

const stats = [
  { value: "2021", label: "año de fundación" },
  { value: "+150", label: "despachos y empresas" },
  { value: "1,2 M", label: "facturas procesadas con IA" },
  { value: "Madrid", label: "con equipo en toda España" },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nosotros"
        title="Automatizamos la contabilidad para devolverle el tiempo a la gente"
        subtitle="Kabilio nace para que asesorías, gestorías y empresas dejen de perder horas en tareas repetitivas y se dediquen a lo que de verdad importa."
      />

      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">Nuestra misión</h2>
            <p className="mt-4 text-ink-soft">
              Creemos que la contabilidad no debería consistir en teclear datos de un lado a otro.
              Por eso construimos una plataforma que concilia, lee facturas y prepara los asientos
              con IA, para que las personas se ocupen del criterio y el asesoramiento.
            </p>
            <p className="mt-4 text-ink-soft">
              Trabajamos codo con codo con despachos y empresas de toda España para entender sus
              procesos reales y automatizar lo que de verdad les quita tiempo.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-surface2 p-6">
                <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBand stats={stats} />

      <CTABanner
        title="¿Quieres formar parte de la historia de Kabilio?"
        subtitle="Pide una demo y descubre cómo podemos ayudar a tu despacho o a tu empresa."
      />
    </>
  );
}
