"use client";

import { useState } from "react";

// Lista de espera para la integración con Sage. Es una maqueta de UI:
// al enviar muestra la confirmación en el navegador; no envía datos a ningún servidor.
export function SageNotifyForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex w-full items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-3 text-[14px] font-semibold sm:w-[430px]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="m20 6-11 11-5-5" />
        </svg>
        ¡Hecho! Te avisaremos cuando esté lista.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
      className="flex w-full items-center gap-2 rounded-xl border border-line bg-surface p-1.5 transition focus-within:border-lav focus-within:ring-4 focus-within:ring-brand-100 sm:w-[430px]"
    >
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Tu email de trabajo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[14.5px] focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        Avísame
      </button>
    </form>
  );
}
