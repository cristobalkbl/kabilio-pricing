"use client";

import { useState } from "react";
import { site } from "@/content/site";

// Panel lavanda de /empresas/contacto. Dos estados según si la asesoría del
// visitante ya trabaja con Kabilio: quien ya la tiene solo necesita que le
// inviten; quien no, entra en la lista de espera.

// Mensaje listo para que el visitante se lo pase a su asesoría.
const PITCH = `Hola, me gustaría llevar la contabilidad de mi empresa con Kabilio y trabajar con vosotros en la misma plataforma. ¿Podéis invitarme desde vuestro panel? Más información en ${site.url}/empresas`;

type Estado = "ya" | "todavia-no";

export function ContactoEmpresasPanel() {
  const [estado, setEstado] = useState<Estado>("todavia-no");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3.5">
        <p className="text-[22px] leading-tight">¿Tu asesoría ya trabaja con Kabilio?</p>
        <div className="inline-flex self-start gap-1.5 rounded-full bg-white/55 p-1">
          {(
            [
              { v: "ya", label: "Sí, ya la usa" },
              { v: "todavia-no", label: "Todavía no" },
            ] as const
          ).map((s) => (
            <button
              key={s.v}
              type="button"
              onClick={() => setEstado(s.v)}
              aria-pressed={estado === s.v}
              className={`inline-flex h-10 items-center rounded-full px-[18px] text-sm transition-colors ${
                estado === s.v ? "bg-ink text-white" : "text-ink hover:bg-white/60"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {estado === "ya" ? <YaEnKabilio /> : <ListaDeEspera />}
    </div>
  );
}

/* ---------- Estado: la asesoría ya usa Kabilio ---------- */
function YaEnKabilio() {
  const pasos = [
    <>
      Tu asesoría te invita desde <strong className="font-medium">Clientes → Invitar</strong>.
    </>,
    <>Recibes una invitación con el acceso.</>,
    <>Ya puedes usar Kabilio Empresas.</>,
  ];

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <p className="text-[26px] leading-tight tracking-[-0.5px]">
          Perfecto: es tu asesoría quien te da acceso.
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">
          No hace falta registrarse aquí. Pídele que te invite desde su panel de Kabilio y recibirás
          un email para entrar.
        </p>
      </div>

      <ol className="flex flex-col gap-3.5">
        {pasos.map((paso, i) => (
          <li key={i} className="flex items-start gap-3.5">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] text-white">
              {i + 1}
            </span>
            <p className="pt-[3px] text-[15px] leading-relaxed">{paso}</p>
          </li>
        ))}
      </ol>

      <a
        href={site.loginUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-ink px-[22px] text-sm font-medium text-white transition-colors hover:bg-brand"
      >
        Ya acepté la invitación · Iniciar sesión
      </a>

      <Divider />

      <RecordatorioForm />
    </>
  );
}

function RecordatorioForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-3"
    >
      <p className="text-[15px] leading-relaxed">
        ¿Se lo has pedido y no te llega? Dinos cuál es tu asesoría y le recordamos cómo invitarte.
      </p>
      {sent ? (
        <Enviado>
          Hablamos con tu asesoría y te escribimos en cuanto tengas la invitación.
        </Enviado>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field name="nombre" placeholder="Nombre completo" autoComplete="name" required />
            <Field name="email" type="email" placeholder="Email" autoComplete="email" required />
          </div>
          <Field name="asesoria" placeholder="Nombre de tu asesoría" required />
          <button
            type="submit"
            className="inline-flex h-11 w-fit items-center justify-center rounded-full border border-ink px-[22px] text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Enviar recordatorio
          </button>
        </>
      )}
    </form>
  );
}

/* ---------- Estado: la asesoría todavía no usa Kabilio ---------- */
function ListaDeEspera() {
  const [tipo, setTipo] = useState<"empresa" | "autonomo">("empresa");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copiarMensaje() {
    try {
      await navigator.clipboard.writeText(PITCH);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2.5">
        <p className="text-[26px] leading-tight tracking-[-0.5px]">
          Estamos abriendo Kabilio a empresas cuya asesoría aún no lo usa.
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">
          Déjanos tus datos y te avisamos por orden de lista en cuanto puedas entrar. Sin
          compromiso.
        </p>
      </div>

      {sent ? (
        <Enviado>
          Estás en la lista. Te escribimos en cuanto abramos el acceso para tu{" "}
          {tipo === "empresa" ? "empresa" : "actividad"}.
        </Enviado>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3 pb-1 text-[15px]">
            <span className={tipo === "empresa" ? "text-ink" : "text-ink/55"}>Empresa</span>
            <button
              type="button"
              role="switch"
              aria-checked={tipo === "autonomo"}
              aria-label="Empresa o autónomo"
              onClick={() => setTipo((t) => (t === "empresa" ? "autonomo" : "empresa"))}
              className="relative inline-block h-6 w-11 shrink-0 rounded-full bg-ink"
            >
              <span
                className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-[left] duration-200 ${
                  tipo === "autonomo" ? "left-[23px]" : "left-[3px]"
                }`}
              />
            </button>
            <span className={tipo === "autonomo" ? "text-ink" : "text-ink/55"}>Autónomo</span>
            <input type="hidden" name="tipo" value={tipo} />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field name="nombre" placeholder="Nombre" autoComplete="given-name" required />
            <Field name="apellido" placeholder="Apellido" autoComplete="family-name" required />
          </div>
          <Field name="email" type="email" placeholder="Email" autoComplete="email" required />
          <Field name="telefono" type="tel" placeholder="Teléfono" autoComplete="tel" />

          <label className="flex items-center gap-2.5 px-1 pt-1.5 text-sm">
            <input
              type="checkbox"
              required
              className="h-5 w-5 shrink-0 rounded-full border border-ink/30 accent-ink"
            />
            <span>
              He leído y acepto la{" "}
              <a href="/privacidad" className="text-brand-500 underline-offset-2 hover:underline">
                política de privacidad
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-ink px-[22px] text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            Apuntarme a la lista
          </button>
        </form>
      )}

      <Divider />

      <div className="flex flex-col gap-2.5">
        <p className="text-[15px] leading-relaxed">
          ¿Prefieres no esperar? Propónselo a tu asesoría: tenemos un mensaje listo para que se lo
          envíes.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={copiarMensaje}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-ink px-[18px] text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            {copied ? "Mensaje copiado" : "Copiar email"}
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(PITCH)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-ink px-[18px] text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M4 20l1.5-4.5A8 8 0 1 1 8.5 18.5L4 20z" />
            </svg>
            Abrir en WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------- Piezas compartidas ---------- */
function Field({
  name,
  placeholder,
  type = "text",
  autoComplete,
  required,
}: {
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      className="h-11 w-full rounded-full border border-ink/15 bg-transparent px-4 text-sm text-ink placeholder:text-ink/55 focus:border-ink/40 focus:outline-none"
    />
  );
}

function Divider() {
  return <div className="h-px bg-ink/[0.12]" />;
}

function Enviado({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-[22px] bg-white/60 p-5">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <p className="text-[15px] leading-relaxed">{children}</p>
    </div>
  );
}
