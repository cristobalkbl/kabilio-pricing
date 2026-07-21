import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Ponte en contacto con el equipo de Kabilio. Resolvemos tus dudas sobre la plataforma, precios e integraciones. Soporte en español.",
  path: "/contacto",
});

const channels: { icon: IconName; title: string; value: string; href?: string }[] = [
  { icon: "bell", title: "Teléfono", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "folder", title: "Oficina", value: site.address },
];

export default function ContactoPage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">Hablemos</h1>
          <p className="mt-5 text-lg text-ink-soft">
            ¿Tienes dudas sobre Kabilio, los precios o las integraciones? Escríbenos y te
            responderemos lo antes posible. Si prefieres ver la plataforma en acción,{" "}
            <a href="/solicita-una-demo" className="font-medium text-brand hover:underline">
              solicita una demo
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Canales de contacto */}
          <div className="space-y-4">
            {channels.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-line bg-surface2 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-ink-soft hover:text-brand">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-ink-soft">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm font-semibold text-ink">¿Necesitas ayuda con tu cuenta?</p>
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

          {/* Formulario */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Envíanos un mensaje</h2>
            <p className="mt-1 text-sm text-ink-muted">Te respondemos en menos de 24 h laborables.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
