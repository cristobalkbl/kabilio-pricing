"use client";

import { useState } from "react";
import { WebinarDrawer } from "@/components/empresas/WebinarDrawer";
import { WEBINAR_TITLE, webinars, type Webinar } from "@/content/webinarsEmpresas";

export function WebinarSection() {
  const [selected, setSelected] = useState<Webinar | null>(null);

  return (
    <div className="mt-16 border-t border-line pt-12">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Próximos webinars de presentación
        </h2>
        <p className="mt-3 text-ink-soft">
          Sesión online gratuita «{WEBINAR_TITLE}» para ver Kabilio en directo y resolver tus dudas.
          Elige la fecha que mejor te venga:
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {webinars.map((w) => (
          <div
            key={`${w.day}-${w.month}`}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex items-center gap-4">
              {/* Tarjeta tipo calendario */}
              <div className="w-14 shrink-0 overflow-hidden rounded-xl border border-line text-center">
                <div className="bg-brand py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {w.month}
                </div>
                <div className="py-1 text-2xl font-extrabold leading-tight text-ink">{w.day}</div>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{w.weekday}</p>
                <p className="text-[13px] text-ink-soft">{w.time}</p>
              </div>
            </div>
            <h3 className="mt-4 text-[15px] font-bold leading-snug text-ink">{WEBINAR_TITLE}</h3>
            <button
              type="button"
              onClick={() => setSelected(w)}
              className="mt-4 inline-block w-fit text-sm font-bold text-brand hover:underline"
            >
              Reservar plaza →
            </button>
          </div>
        ))}
      </div>

      <WebinarDrawer webinar={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
