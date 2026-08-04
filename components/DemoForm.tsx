"use client";

import { useState } from "react";
import { Icon } from "./Icon";

// Formulario de "Solicita una demo", estático (sin backend).
// Replica los campos del formulario de kabilio.es/solicita-una-demo.
// Al enviar, muestra un estado de confirmación en cliente. Para conectarlo
// a un backend/CRM real, sustituye `handleSubmit` por una llamada a tu API.
export function DemoForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          Un especialista de Kabilio te contactará en menos de 24 horas laborables para agendar tu
          demo personalizada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Select
        id="actividad"
        name="actividad"
        label="¿Cuál es la actividad principal de tu empresa?"
        options={["Asesoría contable-fiscal", "Otro despacho profesional", "Pyme u autónomo", "Otro"]}
        required
      />
      <Select
        id="equipo"
        name="equipo"
        label="¿Cuántos sois en el área contable-fiscal?"
        options={["1", "De 2 a 9", "Entre 10 y 25", "25 o más", "No aplica"]}
        required
      />
      <Select
        id="software"
        name="software"
        label="¿Qué software contable utilizas?"
        options={["A3 eco/con", "Sage", "Otro", "Ninguno"]}
        required
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" name="user_name" label="Nombre" autoComplete="given-name" required />
        <Field id="apellidos" name="user_surname" label="Apellidos" autoComplete="family-name" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" name="email" label="Email" type="email" autoComplete="email" required />
        <Field id="telefono" name="phone" label="Teléfono (opcional)" type="tel" autoComplete="tel" />
      </div>
      <Field id="empresa" name="company_name" label="Nombre de Asesoría / Empresa" required />

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

function Select({
  id,
  name,
  label,
  options,
  required,
}: {
  id: string;
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
