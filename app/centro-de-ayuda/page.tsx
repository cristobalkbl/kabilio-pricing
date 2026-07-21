import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Centro de ayuda",
  description:
    "Encuentra guías, tutoriales y respuestas para sacar el máximo partido a Kabilio. Soporte en español para asesorías, gestorías y pymes.",
  path: "/centro-de-ayuda",
});

const categories: { icon: IconName; title: string; description: string }[] = [
  { icon: "sparkles", title: "Primeros pasos", description: "Configura tu cuenta y da de alta a tus clientes o tu empresa." },
  { icon: "bank", title: "Conexión bancaria", description: "Vincula bancos vía PSD2 y resuelve incidencias de sincronización." },
  { icon: "invoice", title: "Facturas y gastos", description: "Sube, procesa y valida facturas con IA paso a paso." },
  { icon: "sync", title: "Conciliación", description: "Aprende a crear reglas y revisar excepciones." },
  { icon: "shield", title: "Verifactu y normativa", description: "Cumple con la Ley Antifraude y la factura electrónica." },
  { icon: "users", title: "Equipo y permisos", description: "Gestiona usuarios, roles y accesos de clientes." },
];

const faqs = [
  { q: "¿Cómo conecto el banco de un cliente?", a: "Desde el panel del cliente, en la sección Bancos, elige la entidad y sigue el proceso seguro de conexión PSD2." },
  { q: "¿Kabilio cumple con Verifactu?", a: "Sí. Kabilio se adapta a los requisitos de los sistemas de facturación verificable de la Ley Antifraude." },
  { q: "¿Puedo exportar la contabilidad a mi software?", a: "Sí, Kabilio exporta a los principales programas de contabilidad del mercado español." },
];

export default function CentroAyudaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Centro de ayuda"
        title="¿En qué podemos ayudarte?"
        subtitle="Guías, tutoriales y respuestas para que aproveches Kabilio al máximo. Y si no encuentras lo que buscas, nuestro equipo te atiende en español."
      />

      <section className="bg-white py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-surface p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-ink">{c.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{c.description}</p>
              </div>
            ))}
          </div>

          {/* Preguntas frecuentes */}
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Preguntas frecuentes</h2>
            <div className="mt-6">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="text-xl font-bold text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-[18px] text-[14.5px] leading-relaxed text-ink-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Contacto soporte */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-surface2 p-8 text-center">
            <h2 className="text-xl font-semibold text-ink">¿No encuentras la respuesta?</h2>
            <p className="mt-2 text-ink-soft">
              Escríbenos desde la página de contacto y te ayudamos.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contacto">Contactar con soporte</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
