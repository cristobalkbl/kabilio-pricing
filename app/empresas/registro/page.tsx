import Link from "next/link";
import { Logo } from "@/components/Logo";
import { RegistroForm, type RegistroConfig } from "@/components/RegistroForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Empieza gratis",
  description:
    "Prueba Kabilio 30 días gratis, sin tarjeta de crédito y sin compromiso. Emite facturas con Verifactu, controla tu tesorería y comparte todo con tu asesoría en tiempo real.",
  path: "/empresas/registro",
});

const CHECKS = [
  "Sin tarjeta de crédito",
  "Uso ilimitado durante la prueba",
  "Sin compromiso, cancela cuando quieras",
];

const FORM: RegistroConfig = {
  kicker: "Formulario de registro",
  title: "Prueba Kabilio 30 días gratis",
  subtitle: "Sin tarjeta de crédito y sin compromiso.",
  segments: [
    { value: "empresa", label: "Empresa" },
    { value: "autonomo", label: "Autónomo" },
  ],
  fields: [
    { name: "nombre", placeholder: "Nombre", required: true, half: true, autoComplete: "given-name" },
    { name: "apellido", placeholder: "Apellido", required: true, half: true, autoComplete: "family-name" },
    { name: "fiscal", placeholder: "Nombre fiscal", placeholderBySeg: { empresa: "Nombre fiscal (razón social)", autonomo: "Nombre fiscal" }, required: true, half: true, autoComplete: "organization" },
    { name: "cif", placeholder: "CIF / NIF", placeholderBySeg: { empresa: "CIF", autonomo: "NIF" }, required: true, half: true },
    { name: "email", type: "email", placeholder: "Email", required: true, autoComplete: "email" },
    { name: "telefono", type: "tel", placeholder: "Teléfono", autoComplete: "tel" },
  ],
  submitLabel: "Empieza gratis",
  successTitle: "¡Cuenta creada!",
  successText: "Revisa tu email para confirmar tu cuenta y empezar a facturar con Kabilio.",
};

export default function RegistroEmpresasPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* IZQUIERDA · valor */}
      <div
        className="relative flex flex-col justify-center px-8 py-14 text-white sm:px-14 sm:py-20"
        style={{ background: "linear-gradient(160deg,#2a2350 0%,#171d33 100%)" }}
      >
        <Logo href="/empresas" dark className="mb-10" />
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-brand-200">Empieza gratis</p>
        <h1 className="max-w-[420px] text-[clamp(30px,3.4vw,42px)] font-extrabold leading-[1.08]">
          El facturador{" "}
          <span className="bg-[linear-gradient(90deg,#c9bff0,#8fe3d0)] bg-clip-text text-transparent">conectado</span>{" "}
          con tu asesoría
        </h1>
        <p className="mt-4 max-w-[420px] text-base leading-relaxed text-white/75">
          Emite facturas con Verifactu, controla tu tesorería y comparte todo con tu asesor en tiempo real. Se acabó
          enviar documentación a fin de mes.
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
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </span>
          <p className="text-sm leading-snug text-white/90">
            <b className="text-[#8fe3d0]">50 % de descuento</b> en todos los planes durante los 2 primeros meses.
          </p>
        </div>

        <p className="mt-9 text-sm text-white/75">
          ¿Eres una asesoría?{" "}
          <Link href="/" className="font-bold text-white underline decoration-white/40 underline-offset-4">
            Descubre Kabilio para tu despacho →
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
