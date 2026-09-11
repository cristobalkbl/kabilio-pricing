"use client";

import { useState } from "react";
import Link from "next/link";
import { RawSvg } from "@/components/producto/RawSvg";
import {
  type Pack,
  packs,
  cost,
  creditActions,
  includedProducts,
  includedAll,
  conditions,
  pricingFaqs,
} from "@/content/preciosAsesores";

// Formateadores deterministas (evitan desajustes de hidratación).
const fmtInt = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const eur = (n: number) => `${fmtInt(n)} €`;
const eur3 = (n: number) => `${n.toFixed(3).replace(".", ",")} €`;
const eur2 = (n: number) => `${n.toFixed(2).replace(".", ",")} €`;
// Coste en € de una acción para un plan (créditos × precio por crédito del plan).
// Se devuelve sin redondear: el redondeo lo hace el formateador, una sola vez.
const actionEuro = (credits: number, price: number, included: number) =>
  (credits * price) / included;
// Céntimos enteros a partir del importe en euros. Un único redondeo: redondear
// antes a milésimas empujaba 11,45 cént. a 11,5 y de ahí a 12.
const centsInt = (n: number) => Math.round(n * 100);
// 1 € o más en euros; por debajo, en céntimos con el símbolo pequeño.
const actionMoney = (n: number): React.ReactNode =>
  n >= 1 ? (
    eur2(n)
  ) : (
    <>
      {centsInt(n)}
      <span className="ml-1 text-[0.62em] font-medium text-ink-muted">céntimos</span>
    </>
  );

// Servicio y soporte: se muestra como apartado ligero, no en la tabla comparativa.
const serviceItems = includedAll.filter((x) => x.group === "Servicio y soporte");

// Precio por crédito destacado: la cifra grande y la unidad al lado, sin píldora
// (en € si el crédito llegara a costar 1 € o más).
function CreditPrice({ unit, tone }: { unit: number; tone: Tone }) {
  const euros = unit >= 1;
  return (
    <div className="mt-4 flex items-baseline gap-1.5">
      <span className={`text-[26px] font-bold leading-none tracking-tight ${tone.accent}`}>
        {euros ? eur2(unit) : centsInt(unit)}
      </span>
      {!euros && <span className={`text-[13.5px] font-bold ${tone.accent}`}>céntimos</span>}
      <span className={`text-[13px] ${tone.soft}`}>/ crédito</span>
    </div>
  );
}

// Crédito adicional cuando te pasas del saldo del pack (mismo importe que la FAQ).
const EXTRA_UNIT = 0.2;
// Tramo a medida por encima del pack mayor: el precio por crédito baja de forma
// lineal desde el del pack mayor hasta CUSTOM_UNIT a partir de CUSTOM_FROM créditos.
const CUSTOM_FROM = 250000;
const CUSTOM_UNIT = 0.07;

// Coste anual de cubrir `annual` créditos con un pack, contando los extra a 0,20 €.
const packCost = (p: Pack, annual: number) => p.price + Math.max(0, annual - p.credits) * EXTRA_UNIT;

// Precio por crédito orientativo de un plan a medida.
const customUnit = (annual: number) => {
  const top = packs[packs.length - 1];
  if (annual >= CUSTOM_FROM) return CUSTOM_UNIT;
  const t = (annual - top.credits) / (CUSTOM_FROM - top.credits);
  return top.unit + t * (CUSTOM_UNIT - top.unit);
};

// Escala de color de las tarjetas, del plan más pequeño al más grande.
type Tone = {
  card: string;
  name: string;
  soft: string;
  rule: string;
  accent: string;
  cta: string;
  light?: boolean;
};

const TONES: Tone[] = [
  {
    card: "border-line bg-surface",
    name: "text-ink-muted",
    accent: "text-brand",
    soft: "text-ink-muted",
    rule: "border-line",
    cta: "bg-ink text-white hover:bg-brand",
  },
  {
    card: "border-line bg-surface2",
    name: "text-ink-muted",
    accent: "text-brand",
    soft: "text-ink-muted",
    rule: "border-line",
    cta: "bg-ink text-white hover:bg-brand",
  },
  {
    card: "border-lav bg-brand-100",
    name: "text-brand",
    accent: "text-brand",
    soft: "text-ink-muted",
    rule: "border-lav",
    cta: "bg-ink text-white hover:bg-brand",
  },
  {
    card: "border-brand bg-lav",
    name: "text-brand",
    accent: "text-brand",
    soft: "text-brand",
    rule: "border-brand/25",
    cta: "bg-ink text-white hover:bg-brand",
  },
  {
    card: "border-ink bg-ink text-white",
    light: true,
    accent: "text-white",
    name: "text-white/70",
    soft: "text-white/70",
    rule: "border-white/20",
    cta: "bg-white text-ink hover:bg-brand-100",
  },
];

const BILLING: { splits: number; mult: number; label: string; badge?: string }[] = [
  { splits: 1, mult: 1, label: "Pago único", badge: "Ahorro" },
  { splits: 2, mult: 1.1, label: "2 pagos" },
];

// Acciones y su coste en créditos. El coste en € por acción se calcula
// multiplicando estos créditos por el precio por crédito de cada plan.
const ACTION_COSTS: { key: keyof typeof cost; label: string }[] = [
  { key: "invoice", label: "Contabilizar factura" },
  { key: "reconcile", label: "Conciliar movimiento" },
  { key: "bankConn", label: "Conexión bancaria (al mes)" },
];

function Tip({ text, light }: { text: string; light?: boolean }) {
  return (
    <span
      tabIndex={0}
      title={text}
      className={`ml-1.5 inline-flex h-[15px] w-[15px] cursor-help items-center justify-center rounded-full border align-middle text-[9px] font-bold not-italic ${
        light ? "border-white/60 text-white/80" : "border-ink-muted text-ink-muted"
      }`}
    >
      i
    </span>
  );
}

export function PricingAsesorias() {
  const [splits, setSplits] = useState<number>(1);
  const [showActions, setShowActions] = useState(false);
  const bill = BILLING.find((b) => b.splits === splits)!;
  const mult = bill.mult;

  const total = (price: number) => Math.round(price * mult);
  const billed = (t: number) => (splits === 1 ? "Pago único" : `${splits} pagos de ${eur(t / splits)}`);

  return (
    <>
      {/* HERO */}
      <header className="pb-6 pt-16 text-center">
        <div className="container">
          <span className="mb-5 inline-block rounded-full bg-brand-100 px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-brand">
            Tarifas
          </span>
          <h1 className="mx-auto text-[clamp(32px,5vw,46px)] font-extrabold leading-[1.1]">
            Planes y precios para asesorías
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-lg text-ink-muted">
            Un único saldo de créditos compartido para todos tus productos en Kabilio.
          </p>
        </div>
      </header>

      <section className="pt-8">
        <div className="container">
          {/* Toggle de pago */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-0.5 rounded-full border border-line bg-surface2 p-[3px]">
              {BILLING.map((b) => (
                <button
                  key={b.splits}
                  type="button"
                  onClick={() => setSplits(b.splits)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${
                    splits === b.splits ? "bg-surface text-ink shadow-card" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {b.label}
                  {b.badge && (
                    <span className="rounded-full bg-pink px-1.5 py-0.5 text-[10px] font-bold text-ink">
                      {b.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tarjetas de plan */}
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {packs.map((p, i) => {
              const t = total(p.price);
              const tone = TONES[Math.min(i, TONES.length - 1)];
              return (
                <div key={p.name} className={`flex flex-col rounded-[18px] border p-6 ${tone.card}`}>
                  <h2 className={`text-[15px] font-bold uppercase tracking-wide ${tone.name}`}>{p.name}</h2>
                  <div className="mt-3.5 text-[30px] font-bold leading-none tracking-tight">
                    {fmtInt(p.credits)}
                  </div>
                  <div className={`mt-1 text-[13px] font-semibold ${tone.soft}`}>
                    créditos
                    <Tip
                      light={tone.light}
                      text={`Equivale a ~${fmtInt(p.credits / cost.invoice)} facturas o ~${fmtInt(
                        p.credits / cost.reconcile
                      )} transacciones conciliadas, si usaras todo el saldo en una sola función.`}
                    />
                  </div>
                  <CreditPrice unit={p.unit * mult} tone={tone} />
                  <div className={`mb-6 mt-5 border-t pt-3.5 ${tone.rule}`}>
                    <div className="text-[21px] font-bold leading-none tracking-tight">{eur(t)}</div>
                    <div className={`mt-1.5 text-[12.5px] ${tone.soft}`}>{billed(t)}</div>
                  </div>
                  <Link
                    href="/solicita-una-demo"
                    className={`mt-auto block rounded-[10px] py-3 text-center text-[13.5px] font-semibold transition-colors ${tone.cta}`}
                  >
                    Empezar ahora
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Plan a medida para grandes volúmenes (debajo de los planes) */}
          <Link
            href="/contacto"
            className="mt-3.5 flex flex-wrap items-center gap-5 rounded-[18px] border border-lav bg-surface p-6 transition-colors hover:border-brand hover:bg-brand-100 sm:p-7"
          >
            <div className="min-w-[220px] flex-1">
              <h2 className="text-xl font-bold">¿Necesitas más créditos?</h2>
              <p className="mt-1.5 text-[14px] leading-snug text-ink-muted">
                Contacta con ventas para ampliar tu saldo.
              </p>
            </div>
            <div className="shrink-0 text-xl font-bold">A consultar</div>
          </Link>

          {/* Productos incluidos (grid) */}
          <div className="mt-6">
            <div className="mb-7 mt-2 text-center">
              <span className="mb-3.5 inline-block rounded-full bg-brand-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
                Para todos los planes
              </span>
              <h3 className="text-[25px] font-bold tracking-tight">
                Productos en los que puedes usar los créditos
              </h3>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
              <div className="grid sm:grid-cols-2">
                {includedProducts.map((it) => (
                  <div key={it.label} className="border-b border-r border-line p-7 last:border-r-0">
                    <span className="mb-[18px] inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-brand-100 text-brand [&_svg]:h-[23px] [&_svg]:w-[23px]">
                      <RawSvg html={it.icon} />
                    </span>
                    <h4 className="mb-2 flex flex-wrap items-center gap-2 text-base font-bold">
                      <span>
                        {it.label}
                        {it.value ? ` · ${it.value}` : ""}
                      </span>
                      {it.soon && (
                        <span className="rounded-full bg-pink px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
                          Próximamente
                        </span>
                      )}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-ink-muted">{it.desc}</p>
                  </div>
                ))}
              </div>

              {/* Servicio y soporte: pie del mismo bloque */}
              <div className="bg-surface2 px-7 py-8">
                <h4 className="text-[19px] font-bold tracking-tight">
                  Servicio y soporte, incluido en todos los planes
                </h4>
                <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {serviceItems.map((it) => (
                    <li key={it.label} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-[12px] font-extrabold text-brand">
                        ✓
                      </span>
                      <div>
                        <p className="text-[15px] font-bold leading-snug">{it.label}</p>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted">{it.tip}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Créditos que consume cada acción */}
          <div className="mt-14 overflow-hidden rounded-[18px] border border-line bg-surface">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 border-b border-line bg-surface2 px-6 py-4">
              <h3 className="text-xl font-bold">Créditos que consume cada acción</h3>
              <p className="text-[13px] text-ink-muted">
                El consumo es el mismo en todos los planes; solo cambia el precio por crédito.
              </p>
            </div>
            {creditActions.map((a, i) => (
              <div
                key={a.label}
                className={`flex items-center justify-between gap-4 px-6 py-3.5 text-sm ${
                  i < creditActions.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span>{a.label}</span>
                <span className="whitespace-nowrap font-bold [font-variant-numeric:tabular-nums]">
                  {a.credits}
                  <span className="ml-1 text-[0.62em] font-medium text-ink-muted">
                    {a.credits === "1" ? "crédito" : "créditos"}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Condiciones del saldo de créditos */}
          <h3 className="mb-6 mt-12 text-center text-[26px] font-bold tracking-tight">Condiciones</h3>
          <div className="grid gap-3.5 sm:grid-cols-3">
            {conditions.map((c) => (
              <div key={c.title} className="rounded-[18px] border border-line bg-surface p-5">
                <span className="mb-3.5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-brand-100 text-brand [&_svg]:h-5 [&_svg]:w-5">
                  <RawSvg html={c.icon} />
                </span>
                <h4 className="mb-1.5 text-[15px] font-bold">{c.title}</h4>
                <p className="text-sm text-ink-muted">{c.text}</p>
              </div>
            ))}
          </div>

          {/* Comparativa: el coste por acción queda a medias hasta desplegarlo */}
          <div className="mt-14">
            <div className={`relative ${showActions ? "" : "max-h-[290px] overflow-hidden"}`}>
              <ComparisonTable />
              {!showActions && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-b from-transparent to-bg" />
              )}
            </div>
            {!showActions && (
              <button
                type="button"
                onClick={() => setShowActions(true)}
                className="mx-auto mt-[18px] block rounded-[10px] bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                Ver coste por acción
              </button>
            )}
          </div>

          {/* Configurador */}
          <Configurator />
        </div>
      </section>

      {/* FAQ */}
      <div className="mt-2 border-t border-line bg-surface">
        <section className="py-16">
          <div className="container max-w-[760px]">
            <h2 className="mb-7 text-center text-[26px] font-bold tracking-tight">Preguntas frecuentes</h2>
            <div className="mx-auto max-w-[760px]">
              {pricingFaqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] text-base font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl font-bold text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-[18px] text-[14.5px] leading-relaxed text-ink-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ---------- Tabla comparativa ---------- */
function ComparisonTable() {
  return (
    <table className="w-full border-collapse bg-surface text-sm">
      <thead>
        <tr>
          <th className="sticky top-0 z-10 w-[38%] bg-surface px-4 pb-4 pt-[18px] text-left align-bottom shadow-[inset_0_-2px_0_theme(colors.line)]">
            <span className="text-xl font-bold">Compara los planes</span>
          </th>
          {packs.map((p) => (
            <th
              key={p.name}
              className="sticky top-0 z-10 border-l border-line bg-surface px-4 pb-4 pt-[18px] align-bottom shadow-[inset_0_-2px_0_theme(colors.line)]"
            >
              <span className="block text-[15px] font-bold">{p.name}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <GroupRow label="Créditos y precio" />
        <Row
          label="Créditos incluidos"
          tip="Saldo de créditos del plan. Se descuentan solo al usar una función y caducan a los 12 meses."
          values={packs.map((p) => (
            <b key={p.name} className="font-bold">
              {fmtInt(p.credits)}
            </b>
          ))}
        />
        <Row
          label="Precio por crédito"
          tip="Coste medio de cada crédito: el precio del plan dividido entre los créditos incluidos."
          values={packs.map((p) => (
            <span key={p.name}>{actionMoney(actionEuro(1, p.price, p.credits))}</span>
          ))}
        />

        <GroupRow label="Coste por acción" />
        <Row
          label="Por documento procesado"
          tip="Coste de contabilizar un documento en el procesador. Cuesta 1 crédito."
          values={packs.map((p) => (
            <span key={p.name}>{actionMoney(actionEuro(cost.invoice, p.price, p.credits))}</span>
          ))}
        />
        <Row
          label="Por transacción reconciliada"
          tip="Coste de conciliar un movimiento bancario. Cuesta 0,4 créditos."
          values={packs.map((p) => (
            <span key={p.name}>{actionMoney(actionEuro(cost.reconcile, p.price, p.credits))}</span>
          ))}
        />
        <Row
          label="Por conexión bancaria al mes"
          tip="Coste de mantener una conexión bancaria durante un mes. Cuesta 14 créditos."
          values={packs.map((p) => (
            <span key={p.name}>{actionMoney(actionEuro(cost.bankConn, p.price, p.credits))}</span>
          ))}
        />
      </tbody>
    </table>
  );
}

function GroupRow({ label }: { label: string }) {
  return (
    <tr>
      <td
        colSpan={packs.length + 1}
        className="border-y border-line bg-surface2 px-4 py-3 text-[11.5px] font-bold uppercase tracking-wider text-ink"
      >
        {label}
      </td>
    </tr>
  );
}

function Row({
  label,
  tip,
  values,
}: {
  label: string;
  tip?: string;
  values: React.ReactNode[];
}) {
  return (
    <tr>
      <td className="border-b border-line px-4 py-3.5 text-left [font-variant-numeric:normal]">
        <span className="underline decoration-line underline-offset-2">{label}</span>
        {tip && <Tip text={tip} />}
      </td>
      {values.map((v, i) => (
        <td key={i} className="border-b border-l border-line px-4 py-3.5 text-center [font-variant-numeric:tabular-nums]">
          {v}
        </td>
      ))}
    </tr>
  );
}

/* ---------- Configurador "Encuentra tu plan" ---------- */
function Configurator() {
  const [clients, setClients] = useState(20);
  const [invoices, setInvoices] = useState(30);
  const [recon, setRecon] = useState(25);
  const [conn, setConn] = useState(1);

  const annual = Math.round(
    (invoices * cost.invoice + recon * cost.reconcile + conn * cost.bankConn) * clients * 12
  );
  const top = packs[packs.length - 1];
  // Por encima del pack mayor no hay pack que llegue: plan a medida.
  const custom = annual > top.credits;
  // Si no, gana el pack más barato contando los créditos extra a 0,20 €: así, si
  // te pasas un poco del saldo, no te empujamos al pack siguiente.
  const match = custom
    ? undefined
    : packs.reduce((a, b) => (packCost(b, annual) < packCost(a, annual) ? b : a));
  const extra = match ? Math.max(0, annual - match.credits) : 0;
  const yearCost = match ? packCost(match, annual) : Math.round(annual * customUnit(annual));
  const unit = match ? match.unit : customUnit(annual);
  const pct = match ? Math.min(100, Math.round((annual / match.credits) * 100)) : 100;

  const sliders = [
    {
      label: "Clientes en cartera",
      value: clients,
      set: setClients,
      min: 1,
      max: 300,
      step: 1,
    },
    {
      label: "Facturas al mes por cliente",
      value: invoices,
      set: setInvoices,
      min: 1,
      max: 150,
      step: 1,
    },
    {
      label: "Movimientos conciliados por cliente / mes",
      value: recon,
      set: setRecon,
      min: 0,
      max: 200,
      step: 5,
    },
    {
      label: "Conexiones vivas por cliente",
      value: conn,
      set: setConn,
      min: 0,
      max: 10,
      step: 1,
    },
  ];

  return (
    <div className="mt-24">
      <p className="text-center text-xs font-bold uppercase tracking-wide text-brand">Encuentra tu plan</p>
      <h3 className="mt-2 text-center text-[23px] font-bold">¿No sabes qué plan elegir?</h3>
      <p className="mx-auto mt-2 max-w-[600px] text-center text-ink-muted">
        Responde 4 datos de tu despacho y te recomendamos el plan ideal.
      </p>

      <div className="mt-8 rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-9">
        <div className="grid gap-9 md:grid-cols-[1.15fr_1fr]">
          <div className="space-y-6">
            {sliders.map((s) => (
              <div key={s.label}>
                <label className="mb-1 block text-[15px] font-semibold">{s.label}</label>
                <div className="flex items-center gap-3.5">
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={s.value}
                    onChange={(e) => s.set(+e.target.value)}
                    className="h-1 flex-1 accent-ink"
                  />
                  <span className="min-w-[64px] text-right text-lg font-bold text-brand [font-variant-numeric:tabular-nums]">
                    {s.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border border-line bg-surface p-7 shadow-card">
            <div className="text-[13px] font-semibold uppercase tracking-wide text-ink-muted">
              Tu plan recomendado
            </div>
            <div className="mb-0.5 mt-1 text-[32px] font-bold tracking-tight text-brand">
              {custom ? "Plan a medida" : match!.name}
            </div>
            <div className="mb-[18px] text-[15px] text-ink-muted">
              {custom ? (
                <>Más de {fmtInt(top.credits)} créditos al año</>
              ) : (
                <>
                  <b className="text-lg text-ink">{eur(match!.price)}</b> / año · {fmtInt(match!.credits)}{" "}
                  créditos
                </>
              )}
            </div>
            <div className="my-1.5 h-2 overflow-hidden rounded-full bg-surface2">
              <span
                className="block h-full rounded-full bg-ink transition-[width] duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between border-t border-line py-2.5 text-sm">
              <span>Consumo anual estimado</span>
              <span className="font-semibold">{fmtInt(annual)} créditos</span>
            </div>
            {extra > 0 && (
              <div className="flex justify-between border-t border-line py-2.5 text-sm">
                <span>
                  Créditos extra
                  <Tip
                    text={`Los créditos que se pasan del saldo del pack se facturan a ${eur2(
                      EXTRA_UNIT
                    )} cada uno.`}
                  />
                </span>
                <span className="font-semibold">
                  {fmtInt(extra)} · {eur(extra * EXTRA_UNIT)}
                </span>
              </div>
            )}
            <div className="flex justify-between border-t border-line py-2.5 text-sm">
              <span>Coste anual estimado</span>
              <span className="font-semibold">
                {custom ? "~" : ""}
                {eur(yearCost)}
              </span>
            </div>
            <div className="flex justify-between border-t border-line py-2.5 text-sm">
              <span>Precio por crédito</span>
              <span className="font-semibold">
                {custom ? "~" : ""}
                {centsInt(unit)} céntimos
              </span>
            </div>
            <details className="group border-t border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm font-medium [&::-webkit-details-marker]:hidden">
                Coste por acción
                <span className="text-lg font-bold text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-1.5">
                {ACTION_COSTS.map((a) => (
                  <div key={a.key} className="flex items-center justify-between py-1.5 text-[13px]">
                    <span className="text-ink-muted">
                      {a.label}
                      <Tip
                        text={`${String(cost[a.key]).replace(".", ",")} ${
                          cost[a.key] === 1 ? "crédito" : "créditos"
                        } × ${eur3(unit)} por crédito`}
                      />
                    </span>
                    <span className="font-semibold">{eur3(cost[a.key] * unit)}</span>
                  </div>
                ))}
              </div>
            </details>
            <Link
              href={custom ? "/contacto" : "/solicita-una-demo"}
              className="mt-[18px] block rounded-[10px] bg-ink py-3.5 text-center font-semibold text-white transition-colors hover:bg-brand"
            >
              {custom ? "Contáctanos" : `Empezar con ${match!.name}`}
            </Link>
            <p className="mt-3.5 text-[12.5px] leading-snug text-ink-muted">
              {custom
                ? `Tu consumo supera el pack mayor: te preparamos un plan a medida, con el precio por crédito bajando hasta ${centsInt(
                    CUSTOM_UNIT
                  )} céntimos desde ${fmtInt(CUSTOM_FROM)} créditos al año. Precio orientativo.`
                : extra > 0
                  ? `Te pasas ${fmtInt(extra)} créditos del saldo: se facturan a ${eur2(
                      EXTRA_UNIT
                    )} y aún así sale más barato que el pack siguiente.`
                  : `${fmtInt(clients)} clientes · ${invoices} facturas, ${recon} conciliaciones/mes y ${conn} conexiones vivas por cliente.${
                      pct > 90 ? " Vas justo de saldo." : ""
                    }`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
