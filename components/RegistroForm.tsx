"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export type RegistroField = {
  name: string;
  placeholder: string;
  /** Placeholder alternativo según el segmento activo (p.ej. CIF/NIF). */
  placeholderBySeg?: Record<string, string>;
  type?: string;
  required?: boolean;
  /** Ocupa media columna (se emparejan de dos en dos en pantallas grandes). */
  half?: boolean;
  autoComplete?: string;
};

export type RegistroConfig = {
  kicker: string;
  title: string;
  subtitle: string;
  segments?: { value: string; label: string }[];
  fields: RegistroField[];
  submitLabel: string;
  successTitle: string;
  successText: string;
};

// Formulario de alta reutilizable (empresas y asesores). Es una maqueta de UI:
// al enviar solo muestra el estado de éxito en el navegador; no envía datos a ningún servidor.
export function RegistroForm({ config }: { config: RegistroConfig }) {
  const [seg, setSeg] = useState(config.segments?.[0].value ?? "");
  const [acepta, setAcepta] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="w-full max-w-[460px] py-8 text-center">
        <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h2 className="mb-2 text-2xl font-bold">{config.successTitle}</h2>
        <p className="text-[15px] leading-relaxed text-ink-muted">{config.successText}</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[14.5px] transition focus:border-lav focus:outline-none focus:ring-4 focus:ring-brand-100";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="w-full max-w-[460px]">
      <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-brand">{config.kicker}</p>
      <h2 className="text-[clamp(24px,3vw,30px)] font-bold leading-tight">{config.title}</h2>
      <p className="mb-6 mt-2 text-[15px] text-ink-muted">{config.subtitle}</p>

      {config.segments && (
        <div className="mb-5 inline-flex gap-0.5 rounded-full border border-line bg-surface2 p-[3px]">
          {config.segments.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setSeg(s.value)}
              className={`rounded-full px-5 py-2 text-[13px] font-bold transition-colors ${
                seg === s.value ? "bg-white text-ink shadow-card" : "text-ink-muted hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {config.fields.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <input
              className={inputCls}
              type={f.type ?? "text"}
              name={f.name}
              placeholder={f.placeholderBySeg?.[seg] ?? f.placeholder}
              required={f.required}
              autoComplete={f.autoComplete}
            />
          </div>
        ))}
      </div>

      <label className="my-5 flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-muted">
        <input
          type="checkbox"
          checked={acepta}
          onChange={(e) => setAcepta(e.target.checked)}
          className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-brand"
        />
        <span>
          He leído y acepto la <Link href="#" className="font-semibold text-brand">política de privacidad</Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={!acepta}
        className="w-full rounded-xl bg-ink py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:bg-[#b7b1a8] disabled:hover:bg-[#b7b1a8]"
      >
        {config.submitLabel}
      </button>

      <p className="mt-4 text-center text-[13px] text-ink-muted">
        ¿Ya tienes cuenta?{" "}
        <a href={site.loginUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand">
          Inicia sesión
        </a>
      </p>
    </form>
  );
}
