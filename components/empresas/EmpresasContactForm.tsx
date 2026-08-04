"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

// Formulario de contacto de EMPRESAS, estático (sin backend).
// Replica los campos del formulario de kabilio.es/contacto. Al enviar,
// muestra un estado de confirmación en cliente. Para conectarlo a un
// backend/CRM real, sustituye `handleSubmit` por una llamada a tu API.
export function EmpresasContactForm() {
  const [tipo, setTipo] = useState<"empresa" | "autonomo">("empresa");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Aquí iría el envío real (fetch a tu endpoint, HubSpot, etc.).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-green/30 bg-green/10 p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-green text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="mt-4 text-xl font-semibold text-ink">¡Gracias! Hemos recibido tus datos</h2>
        <p className="mt-2 text-ink-soft">
          Nuestro equipo te contactará lo antes posible para ayudarte a empezar con Kabilio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Tipo: Empresa / Autónomo */}
      <div>
        <span className="mb-1.5 block text-sm font-medium text-ink">Tipo</span>
        <div className="inline-flex items-center gap-0.5 rounded-full border border-line bg-surface2 p-[3px]">
          {(["empresa", "autonomo"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTipo(t)}
              className={`rounded-full px-4 py-1.5 text-[13px] font-semibold capitalize transition-colors ${
                tipo === t ? "bg-surface text-ink shadow-card" : "text-ink-muted hover:text-ink"
              }`}
            >
              {t === "empresa" ? "Empresa" : "Autónomo"}
            </button>
          ))}
        </div>
        <input type="hidden" name="tipo" value={tipo} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" name="user_name" label="Nombre" autoComplete="given-name" required />
        <Field id="apellido" name="user_surname" label="Apellido" autoComplete="family-name" required />
      </div>

      <Field id="nombre-fiscal" name="company_name" label="Nombre fiscal" required />
      <Field id="cif-nif" name="vatNumber" label="CIF / NIF" required />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" name="email" label="Email" type="email" autoComplete="email" required />
        <Field id="telefono" name="phone" label="Teléfono" type="tel" autoComplete="tel" required />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-line text-brand focus:ring-brand"
        />
        <span>He leído y acepto la política de privacidad.</span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
      >
        Enviar
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={label}
        className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
