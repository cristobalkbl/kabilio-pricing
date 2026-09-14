import { ContactoEmpresasPanel } from "@/components/empresas/ContactoEmpresasPanel";
import { ContactAsideBlocks } from "@/components/empresas/ContactAsideBlocks";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contacto empresas",
  description:
    "Kabilio para empresas se activa a través de tu asesoría. Dinos en qué punto estás: si ya trabaja con Kabilio te contamos cómo entrar, y si aún no, te apuntamos a la lista.",
  path: "/empresas/contacto",
});

export default function ContactoEmpresasPage() {
  return (
    <>
      <section className="bg-surface2">
        <div className="grid lg:grid-cols-2">
          {/* Izquierda: titular y datos de contacto */}
          <div className="flex flex-col gap-14 px-6 py-16 sm:px-10 lg:py-20 lg:pl-16 lg:pr-12">
            <div className="flex flex-col gap-7">
              <p className="flex items-center gap-2 text-[15px]">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M4 2l4 4-4 4" />
                </svg>
                <span className="border-b border-brand-300 pb-0.5">Contacto</span>
              </p>
              <h1 className="max-w-[600px] text-balance text-[clamp(40px,6.2vw,68px)] font-normal leading-none tracking-[-0.03em]">
                Factura y gestiona las finanzas de tu negocio
              </h1>
              <p className="max-w-[520px] text-lg leading-[1.45]">
                Kabilio para empresas se activa a través de tu asesoría: ella te invita y lo recibe
                todo en tiempo real. Dinos en qué punto estás y te indicamos el camino.
              </p>
            </div>

            <address className="flex flex-col gap-2.5 text-xl not-italic leading-tight">
              <a href={`mailto:${site.salesEmail}`} className="w-fit transition-colors hover:text-brand">
                {site.salesEmail}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="w-fit transition-colors hover:text-brand"
              >
                {site.phone}
              </a>
              <span>
                Numància, 164-168, planta 4,
                <br />
                Les Corts, 08029, Barcelona
              </span>
            </address>
          </div>

          {/* Derecha: panel lavanda con los dos caminos */}
          <div className="bg-lav px-6 py-16 sm:px-10 lg:rounded-bl-[96px] lg:px-[clamp(40px,7vw,120px)] lg:py-24">
            <ContactoEmpresasPanel />
          </div>
        </div>
      </section>

      {/* Video academy y calendario de webinars */}
      <section className="bg-surface2 pb-20">
        <div className="container grid items-start gap-4 lg:grid-cols-2">
          <ContactAsideBlocks />
        </div>
      </section>
    </>
  );
}
