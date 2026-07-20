"use client";

import { useState } from "react";
import Link from "next/link";
import { RawSvg } from "@/components/producto/RawSvg";
import {
  packs,
  cost,
  includedProducts,
  includedAll,
  conditions,
  pricingFaqs,
} from "@/content/preciosAsesores";

// Formateadores deterministas (evitan desajustes de hidratación).
const fmtInt = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const eur = (n: number) => `${fmtInt(n)} €`;
const eur3 = (n: number) => `${n.toFixed(3).replace(".", ",")} €`;

const BILLING: { splits: number; mult: number; label: string; badge?: string }[] = [
  { splits: 1, mult: 1, label: "Pago único", badge: "ahorra ~17%" },
  { splits: 2, mult: 1.1, label: "2 pagos" },
  { splits: 4, mult: 1.2, label: "4 pagos" },
];

function Tip({ text }: { text: string }) {
  return (
    <span
      tabIndex={0}
      title={text}
      className="ml-1.5 inline-flex h-[15px] w-[15px] cursor-help items-center justify-center rounded-full border border-ink-muted align-middle text-[9px] font-bold not-italic text-ink-muted"
    >
      i
    </span>
  );
}

export function PricingAsesorias() {
  const [splits, setSplits] = useState<number>(1);
  const [collapsed, setCollapsed] = useState(true);
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
            La tecnología más avanzada a un precio asequible
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-lg text-ink-muted">
            Un único saldo de créditos compartido entre todos los productos Kabilio. Sin licencias
            por usuario, sin módulos cerrados: los créditos se descuentan solo cuando se utilizan.
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
            {packs.map((p) => {
              const t = total(p.price);
              return (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-[18px] border border-line p-6 ${
                    p.soft ? "bg-surface2" : "bg-surface"
                  }`}
                >
                  <h2 className={`text-xl font-bold ${p.soft ? "text-ink-muted" : ""}`}>{p.name}</h2>
                  <p className="mt-2 min-h-[60px] text-[13.5px] leading-snug text-ink-muted">{p.desc}</p>
                  <div className="text-[30px] font-bold leading-none tracking-tight">{eur(t)}</div>
                  <div className="mt-1.5 min-h-[18px] text-[13px] text-ink-muted">{billed(t)}</div>
                  <div className="mt-4 text-sm text-ink-muted">
                    <b className="font-bold text-ink">{fmtInt(p.credits)}</b> créditos
                    <Tip
                      text={`Equivale a ~${fmtInt(p.credits / cost.invoice)} facturas, ~${fmtInt(
                        p.credits / cost.reconcile
                      )} transacciones conciliadas o ~${fmtInt(
                        p.credits / cost.doc
                      )} documentos gestionados, si usaras todo el saldo en una sola función.`}
                    />
                    <div className="mt-1 text-[12.5px] font-semibold text-brand">{eur3(p.unit)} / crédito</div>
                  </div>
                  <Link
                    href="/solicita-una-demo"
                    className="mt-auto block rounded-[10px] bg-ink py-3 text-center text-[13.5px] font-semibold text-white transition-colors hover:bg-brand"
                  >
                    Empezar ahora
                  </Link>
                </div>
              );
            })}

            {/* Enterprise */}
            <div className="flex flex-col rounded-[18px] border border-dashed border-lav bg-brand-100 p-6">
              <h2 className="text-xl font-bold">Enterprise</h2>
              <p className="mt-2 min-h-[60px] text-[13.5px] leading-snug text-ink-muted">
                Para grandes volúmenes de trabajo.
              </p>
              <div className="text-2xl font-bold leading-none">A consultar</div>
              <div className="mt-1.5 min-h-[18px] text-[13px] text-ink-muted">Plan a medida</div>
              <div className="mt-4 text-sm text-ink-muted">+48.000 créditos</div>
              <Link
                href="/contacto"
                className="mt-auto block rounded-[10px] bg-ink py-3 text-center text-[13.5px] font-semibold text-white transition-colors hover:bg-brand"
              >
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Productos incluidos (grid) */}
          <div className="mt-6">
            <div className="mb-7 mt-2 text-center">
              <span className="mb-3.5 inline-block rounded-full bg-brand-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
                Para todos los planes
              </span>
              <h3 className="text-[25px] font-bold tracking-tight">
                Productos en los que usar los créditos
              </h3>
            </div>
            <div className="grid overflow-hidden rounded-[18px] border border-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
              {includedProducts.map((it) => (
                <div key={it.label} className="border-b border-r border-line p-7 last:border-r-0">
                  <span className="mb-[18px] inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-brand-100 text-brand [&_svg]:h-[23px] [&_svg]:w-[23px]">
                    <RawSvg html={it.icon} />
                  </span>
                  <h4 className="mb-2 text-base font-bold">
                    {it.label}
                    {it.value ? ` · ${it.value}` : ""}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-ink-muted">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparativa plegable */}
          <div className="mt-16">
            <div className={`relative ${collapsed ? "max-h-[540px] overflow-hidden" : ""}`}>
              <ComparisonTable total={total} billed={billed} />
              {collapsed && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-b from-transparent to-bg" />
              )}
            </div>
            {collapsed && (
              <button
                type="button"
                onClick={() => setCollapsed(false)}
                className="mx-auto mt-[18px] block rounded-[10px] bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                Ver todo
              </button>
            )}
            <p className="mt-3.5 text-center text-[12.5px] text-ink-muted">
              Cifras de capacidad orientativas: muestran cuánto podrías hacer si dedicaras todo el
              saldo a una sola acción.
            </p>
          </div>

          {/* Configurador */}
          <Configurator />
        </div>
      </section>

      {/* Condiciones + FAQ */}
      <div className="mt-2 border-t border-line bg-surface">
        <section className="py-16">
          <div className="container">
            <h2 className="mb-7 text-center text-[26px] font-bold tracking-tight">Condiciones</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {conditions.map((c) => (
                <div key={c.title} className="rounded-2xl border border-line bg-surface p-5">
                  <span className="mb-3.5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-brand-100 text-brand [&_svg]:h-5 [&_svg]:w-5">
                    <RawSvg html={c.icon} />
                  </span>
                  <h3 className="mb-1.5 text-[15px] font-bold">{c.title}</h3>
                  <p className="text-sm text-ink-muted">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container max-w-[760px]">
            <h2 className="mb-7 text-center text-[26px] font-bold tracking-tight">Preguntas frecuentes</h2>
            <div className="mx-auto max-w-[760px]">
              {pricingFaqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] text-base font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl font-bold text-brand transition-transform group-open:rotate-45">+</span>
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
function ComparisonTable({
  total,
  billed,
}: {
  total: (price: number) => number;
  billed: (t: number) => string;
}) {
  const yes = <span className="font-bold text-brand">✓</span>;
  const groups = Array.from(new Set(includedAll.map((x) => x.group)));

  return (
    <table className="w-full border-collapse bg-surface text-sm">
      <thead>
        <tr>
          <th className="sticky top-0 z-10 w-[38%] bg-surface px-4 pb-4 pt-[18px] text-left align-bottom shadow-[inset_0_-2px_0_theme(colors.line)]">
            <span className="text-xl font-bold">Compara los planes</span>
          </th>
          {packs.map((p) => {
            const t = total(p.price);
            return (
              <th
                key={p.name}
                className="sticky top-0 z-10 border-l border-line bg-surface px-4 pb-4 pt-[18px] align-bottom shadow-[inset_0_-2px_0_theme(colors.line)]"
              >
                <span className="block text-[15px] font-bold">{p.name}</span>
                <span className="mt-1 block text-xs font-medium text-ink-muted">
                  {eur(t)} · {billed(t)}
                </span>
              </th>
            );
          })}
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
          values={packs.map((p) => <span key={p.name}>{eur3(p.unit)}</span>)}
        />

        {groups.map((g) => (
          <GroupInclusion key={g} group={g} yes={yes} />
        ))}

        <GroupRow label="Equivalencia orientativa · si gastaras todo el saldo en una sola función" />
        <Row
          label="Facturas que podrías procesar"
          tip="Facturas que procesarías si dedicaras todo el saldo a esto. Cuesta 1 crédito por factura."
          values={packs.map((p) => <span key={p.name}>{fmtInt(p.credits / cost.invoice)}</span>)}
        />
        <Row
          label="Transacciones que podrías conciliar"
          tip="Movimientos bancarios conciliados con todo el saldo. Cuesta 0,5 créditos por movimiento."
          values={packs.map((p) => <span key={p.name}>{fmtInt(p.credits / cost.reconcile)}</span>)}
        />
        <Row
          label="Documentos que podrías gestionar"
          tip="Documentos subidos al gestor documental con todo el saldo. Cuesta 0,4 créditos por documento."
          values={packs.map((p) => <span key={p.name}>{fmtInt(p.credits / cost.doc)}</span>)}
        />
        <Row
          label="Acciones del Agente Kabi"
          tip="Acciones automatizadas por el Agente Kabi con todo el saldo. Cuesta 5 créditos por acción."
          values={packs.map((p) => <span key={p.name}>{fmtInt(p.credits / cost.agentAction)}</span>)}
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

function GroupInclusion({ group, yes }: { group: string; yes: React.ReactNode }) {
  const items = includedAll.filter((x) => x.group === group);
  return (
    <>
      <GroupRow label={group} />
      {items.map((x) => (
        <tr key={x.label}>
          <td className="border-b border-line px-4 py-3.5 text-left">
            <span className="underline decoration-line underline-offset-2">{x.label}</span>
            <Tip text={x.tip} />
          </td>
          <td colSpan={packs.length} className="border-b border-line px-4 py-3.5 text-center text-[13px] font-semibold text-ink">
            {x.value ? x.value : <>{yes} Incluido</>}
          </td>
        </tr>
      ))}
    </>
  );
}

/* ---------- Configurador "Encuentra tu plan" ---------- */
function Configurator() {
  const [clients, setClients] = useState(20);
  const [invoices, setInvoices] = useState(30);
  const [recon, setRecon] = useState(25);
  const [conn, setConn] = useState(1);

  const annual = Math.round((invoices * cost.invoice + recon * cost.reconcile + conn * cost.bankConn) * clients * 12);
  const match = packs.find((p) => p.credits >= annual);
  const enterprise = !match;
  const pct = match ? Math.min(100, Math.round((annual / match.credits) * 100)) : 100;

  const sliders = [
    { label: "Clientes en cartera", value: clients, set: setClients, min: 1, max: 300, step: 1 },
    { label: "Facturas al mes por cliente", value: invoices, set: setInvoices, min: 1, max: 150, step: 1 },
    { label: "Movimientos conciliados por cliente / mes", value: recon, set: setRecon, min: 0, max: 200, step: 5 },
    { label: "Conexiones vivas por cliente", value: conn, set: setConn, min: 0, max: 10, step: 1 },
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
              {enterprise ? "Enterprise" : match!.name}
            </div>
            <div className="mb-[18px] text-[15px] text-ink-muted">
              {enterprise ? (
                "A medida"
              ) : (
                <>
                  <b className="text-lg text-ink">{eur(match!.price)}</b> / año ·{" "}
                  {fmtInt(match!.credits)} créditos
                </>
              )}
            </div>
            <div className="my-1.5 h-2 overflow-hidden rounded-full bg-surface2">
              <span className="block h-full rounded-full bg-ink transition-[width] duration-500" style={{ width: `${pct}%` }} />
            </div>
            <div className="flex justify-between border-t border-line py-2.5 text-sm">
              <span>Consumo anual estimado</span>
              <span className="font-semibold">{fmtInt(annual)} créditos</span>
            </div>
            <div className="flex justify-between border-t border-line py-2.5 text-sm">
              <span>Precio efectivo / crédito</span>
              <span className="font-semibold">
                {enterprise ? "El mejor precio" : eur3(match!.price / match!.credits)}
              </span>
            </div>
            <Link
              href={enterprise ? "/contacto" : "/solicita-una-demo"}
              className="mt-[18px] block rounded-[10px] bg-ink py-3.5 text-center font-semibold text-white transition-colors hover:bg-brand"
            >
              {enterprise ? "Contáctanos" : `Empezar con ${match!.name}`}
            </Link>
            <p className="mt-3.5 text-[12.5px] leading-snug text-ink-muted">
              {enterprise
                ? "Tu consumo supera los 48.000 créditos/año: plan Enterprise a medida."
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
