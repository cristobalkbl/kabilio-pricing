"use client";

import { useState } from "react";
import { Icon } from "./Icon";

// Formulario de demo ESTÁTICO (sin backend).
// Al enviar, muestra un estado de confirmación en cliente. Para conectarlo
// a un backend real, sustituye `handleSubmit` por una llamada a tu API/CRM.
export function ContactForm() {
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
        <h2 className="mt-4 text-xl font-semibold text-ink">¡Gracias! Hemos recibido tu solicitud</h2>
        <p className="mt-2 text-ink-soft">
          Nuestro equipo te contactará en menos de 24 horas laborables para agendar tu demo
          personalizada de Kabilio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" label="Nombre y apellidos" autoComplete="name" required />
        <Field id="empresa" label="Nombre de la asesoría / gestoría" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email de trabajo" type="email" autoComplete="email" required />
        <Field id="telefono" label="Teléfono" type="tel" autoComplete="tel" />
      </div>

      <div>
        <label htmlFor="empleados" className="mb-1.5 block text-sm font-medium text-ink">
          Nº de empleados
        </label>
        <select
          id="empleados"
          name="empleados"
          className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option>1 - 5</option>
          <option>6 - 20</option>
          <option>21 - 50</option>
          <option>Más de 50</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-ink">
          ¿Qué te gustaría automatizar?
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente tu caso: volumen de facturas, bancos, número de clientes…"
          className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-line text-brand focus:ring-brand"
        />
        <span>
          Acepto la política de privacidad y el tratamiento de mis datos para ser contactado por
          Kabilio.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
      >
        Pedir demo
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
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
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
