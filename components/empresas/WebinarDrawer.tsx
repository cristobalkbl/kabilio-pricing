"use client";

import { useEffect, useState } from "react";
import { WEBINAR_TITLE, type Webinar } from "@/content/webinarsEmpresas";

// Panel lateral de reserva de plaza. Lo comparten la sección de webinars y el
// bloque de webinars de la aside de contacto.
export function WebinarDrawer({ webinar, onClose }: { webinar: Webinar | null; onClose: () => void }) {
  const open = webinar !== null;
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reinicia el estado de "enviado" cada vez que se abre para otra fecha.
  useEffect(() => {
    if (open) setSent(false);
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[200] bg-ink/45 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[201] flex h-full w-[420px] max-w-[92vw] flex-col overflow-y-auto bg-surface shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-3 p-6 pb-0">
          <div>
            <span className="mb-1 block text-[15px] font-extrabold text-brand">Reservar plaza</span>
            <h3 className="text-xl font-bold">{WEBINAR_TITLE}</h3>
            {webinar && (
              <p className="mt-1 text-sm text-ink-soft">
                {webinar.weekday} {webinar.day} {webinar.month} · {webinar.time}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface2 text-lg text-ink-muted hover:bg-line"
          >
            ×
          </button>
        </div>

        <div className="p-6 pt-3.5">
          {sent ? (
            <div className="overflow-hidden rounded-2xl border border-lav bg-gradient-to-b from-brand-100 to-brand-50 p-8 text-center">
              <span className="mx-auto mb-4 grid h-16 w-16 animate-[pulse_1.5s_ease-in-out_infinite] place-items-center rounded-full bg-green text-white shadow-lg">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h4 className="text-xl font-extrabold text-ink">🎉 ¡Plaza reservada!</h4>
              <p className="mx-auto mt-2 max-w-[280px] text-sm leading-relaxed text-ink-soft">
                Te hemos apuntado a «{WEBINAR_TITLE}». Te enviaremos el enlace de acceso por email
                antes de la sesión.
              </p>
              {webinar && (
                <div className="mx-auto mt-5 inline-flex items-center gap-3 rounded-xl border border-lav bg-surface px-4 py-2.5 shadow-sm">
                  <div className="w-11 shrink-0 overflow-hidden rounded-lg border border-line text-center">
                    <div className="bg-brand py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      {webinar.month}
                    </div>
                    <div className="py-0.5 text-lg font-extrabold leading-tight text-ink">{webinar.day}</div>
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-semibold text-ink">{webinar.weekday}</p>
                    <p className="text-[12px] text-ink-soft">{webinar.time}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                Déjanos tus datos y te enviaremos el enlace de acceso al webinar.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Field placeholder="Nombre" autoComplete="given-name" icon={<Ico d={`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`} />} />
                <Field placeholder="Apellidos" autoComplete="family-name" icon={<Ico d={`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`} />} />
              </div>
              <Field placeholder="Email" type="email" autoComplete="email" icon={<Ico d={`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`} />} />
              <Field placeholder="Teléfono (opcional)" type="tel" autoComplete="tel" icon={<Ico d={`<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>`} />} />
              <Field placeholder="Nombre de tu empresa" icon={<Ico d={`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`} />} />
              <label className="mb-4 mt-1 flex items-start gap-2.5 text-[13px] leading-snug text-ink-muted">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-line text-brand focus:ring-brand" />
                <span>He leído y acepto la política de privacidad.</span>
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-ink py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                Reservar plaza
              </button>
            </form>
          )}
        </div>
      </aside>
    </>
  );
}

function Ico({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

function Field({
  placeholder,
  type = "text",
  autoComplete,
  icon,
}: {
  placeholder: string;
  type?: string;
  autoComplete?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative mb-3">
      {icon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted">
          {icon}
        </span>
      )}
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`w-full rounded-[10px] border border-line bg-surface2 py-2.5 pr-3 text-sm focus:border-brand-200 focus:bg-surface focus:outline-none ${
          icon ? "pl-9" : "pl-3"
        }`}
      />
    </div>
  );
}
