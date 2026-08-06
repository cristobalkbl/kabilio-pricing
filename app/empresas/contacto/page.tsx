import { EmpresasContactForm } from "@/components/empresas/EmpresasContactForm";
import { WebinarSection } from "@/components/empresas/WebinarSection";
import { Button } from "@/components/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contacto empresas",
  description:
    "Habla con el equipo de Kabilio para empresas. Déjanos tus datos y te ayudamos a empezar a facturar conforme a Verifactu y conectado con tu asesoría.",
  path: "/empresas/contacto",
});

export default function ContactoEmpresasPage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Factura y controla las finanzas de tu empresa
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Déjanos tus datos y nuestro equipo te contactará para ayudarte a empezar con Kabilio: facturación conforme a Verifactu, gastos, tesorería y tu asesoría conectada.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          {/* Info (izquierda) */}
          <div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-semibold text-ink">Escríbenos</p>
              <p className="mt-1 text-sm text-ink-soft">
                ¿Prefieres el correo? Escríbenos a{" "}
                <a href="mailto:empresas@kabilio.ai" className="font-medium text-brand hover:underline">
                  empresas@kabilio.ai
                </a>
                .
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-semibold text-ink">Teléfono</p>
              <p className="mt-1 text-sm text-ink-soft">
                <a href="tel:+34900000000" className="font-medium text-brand hover:underline">
                  +34 900 000 000
                </a>
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-semibold text-ink">¿Necesitas ayuda?</p>
              <p className="mt-1 text-sm text-ink-soft">
                Encuentra guías y respuestas en nuestro centro de ayuda.
              </p>
              <div className="mt-4">
                <Button href="/centro-de-ayuda" variant="ghost">
                  Ir al centro de ayuda
                </Button>
              </div>
            </div>
          </div>

          {/* Formulario (derecha) */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <EmpresasContactForm />
          </div>
        </div>

        {/* Próximos webinars */}
        <WebinarSection />
      </div>
    </section>
  );
}
