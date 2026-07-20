"use client";

import { useEffect, useState } from "react";

const DEFAULT_NOTE =
  "Hola, quiero empezar a usar el facturador gratuito de Kabilio, pero solo trabaja con asesorías asociadas. Me encantaría que lo probaseis para trabajar juntos en la misma plataforma: así recibiríais mis facturas y gastos en tiempo real, sin perseguir documentación a fin de mes.";

// Slide-over "Recomienda Kabilio a tu asesoría" (formulario estático, sin backend).
export function ReferDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [asesoria, setAsesoria] = useState("");
  const [tuNombre, setTuNombre] = useState("");
  const [tuEmail, setTuEmail] = useState("");
  const [nota, setNota] = useState(DEFAULT_NOTE);
  const [showPreview, setShowPreview] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const preview = `Para: ${asesoria || "Tu asesoría"}\nDe: ${tuNombre || "Un cliente"}${
    tuEmail ? ` (${tuEmail})` : ""
  }\n\n${nota}\n\nEmpieza gratis en kabilio.ai`;

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
            <span className="mb-1 block text-[15px] font-extrabold text-brand">Kabilio</span>
            <h3 className="text-xl font-bold">Recomienda Kabilio a tu asesoría</h3>
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
            <div className="rounded-xl border border-lav bg-brand-100 p-[18px] text-sm leading-relaxed">
              <b>¡Gracias!</b> Hemos recibido la recomendación y contactaremos con tu asesoría muy pronto.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                Le enviaremos una invitación de tu parte para trabajar juntos en la misma plataforma.
              </p>
              <Field placeholder="Nombre de tu asesoría" value={asesoria} onChange={setAsesoria} required />
              <Field placeholder="Email de tu asesoría" type="email" required />
              <Field placeholder="Tu nombre" value={tuNombre} onChange={setTuNombre} />
              <Field placeholder="Tu email" type="email" value={tuEmail} onChange={setTuEmail} />
              <textarea
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                rows={4}
                className="mb-3 w-full rounded-[10px] border border-line bg-surface2 px-3 py-2.5 text-sm leading-snug focus:border-brand-200 focus:bg-surface focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPreview((v) => !v)}
                className="mb-2.5 text-[13px] font-bold text-brand"
              >
                {showPreview ? "Ocultar vista previa ▴" : "Ver lo que le llega ▾"}
              </button>
              {showPreview && (
                <div className="mb-4 overflow-hidden rounded-xl border border-line bg-surface2">
                  <div className="border-b border-line bg-surface px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-wide text-ink-muted">
                    Vista previa del mensaje
                  </div>
                  <div className="whitespace-pre-wrap p-3.5 text-[12.5px] leading-relaxed">{preview}</div>
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-ink py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                Enviar recomendación
              </button>
              <p className="mt-3 text-[11.5px] leading-relaxed text-ink-muted">
                Al enviar, tratamos tus datos conforme al RGPD solo para gestionar esta recomendación.
              </p>
            </form>
          )}
        </div>
      </aside>
    </>
  );
}

function Field({
  placeholder,
  type = "text",
  required,
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className="mb-3 w-full rounded-[10px] border border-line bg-surface2 px-3 py-2.5 text-sm focus:border-brand-200 focus:bg-surface focus:outline-none"
    />
  );
}
