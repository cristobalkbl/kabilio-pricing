import Link from "next/link";
import { Logo } from "@/components/Logo";
import { RegistroForm, type RegistroConfig } from "@/components/RegistroForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reserva una demo",
  description:
    "Descubre cómo Kabilio automatiza la precontabilidad de tu despacho con IA: procesa facturas, concilia los bancos y colabora con tus clientes desde un mismo sitio. Reserva una demo, sin compromiso.",
  path: "/asesores/registro",
});

const CHECKS = [
  "Demo personalizada para tu despacho",
  "Te acompañamos en el onboarding",
  "Sin permanencia, cancela cuando quieras",
];

const FORM: RegistroConfig = {
  kicker: "Solicita tu demo",
  title: "Prueba Kabilio en tu despacho",
  subtitle: "Te enseñamos cómo automatizar tu precontabilidad con IA.",
  fields: [
    { name: "nombre", placeholder: "Nombre", required: true, half: true, autoComplete: "given-name" },
    { name: "apellido", placeholder: "Apellido", required: true, half: true, autoComplete: "family-name" },
    { name: "despacho", placeholder: "Nombre del despacho", required: true, half: true, autoComplete: "organization" },
    { name: "clientes", placeholder: "Nº de clientes", half: true },
    { name: "email", type: "email", placeholder: "Email", required: true, autoComplete: "email" },
    { name: "telefono", type: "tel", placeholder: "Teléfono", autoComplete: "tel" },
  ],
  submitLabel: "Reserva demo",
  successTitle: "¡Solicitud enviada!",
  successText: "Nos pondremos en contacto contigo para agendar tu demo de Kabilio.",
};

export default function RegistroAsesoresPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* IZQUIERDA · valor */}
      <div
        className="relative flex flex-col justify-center px-8 py-14 text-white sm:px-14 sm:py-20"
        style={{ background: "linear-gradient(160deg,#2a2350 0%,#171d33 100%)" }}
      >
        <Logo href="/" dark className="mb-10" />
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-brand-200">Reserva una demo</p>
        <h1 className="max-w-[440px] text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.08]">
          La precontabilidad de tu despacho,{" "}
          <span className="bg-[linear-gradient(90deg,#c9bff0,#8fe3d0)] bg-clip-text text-transparent">automatizada</span>{" "}
          con IA
        </h1>
        <p className="mt-4 max-w-[440px] text-base leading-relaxed text-white/75">
          Procesa facturas, concilia los bancos y colabora con tus clientes desde un mismo sitio. Menos trabajo manual
          y más tiempo para asesorar.
        </p>

        <ul className="mt-8 flex flex-col gap-3.5">
          {CHECKS.map((c) => (
            <li key={c} className="flex items-center gap-3 text-[15px] font-semibold">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-200/20 text-brand-200">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex max-w-[440px] items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#8fe3d0]/15 text-[#8fe3d0]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
            </svg>
          </span>
          <p className="text-sm leading-snug text-white/90">
            <b className="text-[#8fe3d0]">Créditos de prueba gratuitos</b> para que lo pruebes con tus propios clientes.
          </p>
        </div>

        <p className="mt-9 text-sm text-white/75">
          ¿Eres una empresa?{" "}
          <Link href="/empresas" className="font-bold text-white underline decoration-white/40 underline-offset-4">
            Descubre Kabilio para tu negocio →
          </Link>
        </p>
      </div>

      {/* DERECHA · formulario */}
      <div className="flex items-center justify-center px-6 py-14 sm:px-10">
        <RegistroForm config={FORM} />
      </div>
    </div>
  );
}
