"use client";

import { useState } from "react";
import Link from "next/link";
import { ReferDrawer } from "@/components/empresas/ReferDrawer";
import { empresaPlans, cmpGroups, empresaPricingFaqs } from "@/content/preciosEmpresas";

function Tip({ text }: { text: string }) {
  return (
    <span
      tabIndex={0}
      title={text}
      className="ml-1 inline-flex h-[15px] w-[15px] cursor-help items-center justify-center rounded-full bg-surface2 align-middle text-[10px] font-bold text-ink-muted"
    >
      i
    </span>
  );
}

function Cell({ v }: { v: string }) {
  if (v === "✓") return <span className="text-[15px] font-bold text-brand">✓</span>;
  if (v === "—") return <span className="text-[#c9d0d8]">—</span>;
  return <span>{v}</span>;
}

export function PricingEmpresas() {
  const [mode, setMode] = useState<"mensual" | "anual">("mensual");
  const [collapsed, setCollapsed] = useState(true);
  const [closedGroups, setClosedGroups] = useState<Record<string, boolean>>({});
  const [referOpen, setReferOpen] = useState(false);

  const toggleGroup = (g: string) => setClosedGroups((s) => ({ ...s, [g]: !s[g] }));

  const headerPrice = (mo?: number, free?: boolean) => {
    if (free) return <span className="text-[13px] font-semibold text-brand">0 €</span>;
    if (!mo) return null;
    const promo = mode === "mensual" ? mo / 2 : mo * 11;
    const full = mode === "mensual" ? mo : mo * 12;
    const unit = mode === "mensual" ? "/mes" : "/año";
    return (
      <span className="text-[13px] font-semibold text-brand">
        <b>{promo} €</b> <s className="font-normal text-ink-muted">{full} €</s>
        <span className="ml-0.5 text-[11px] font-normal text-ink-muted">{unit}</span>
      </span>
    );
  };

  return (
    <>
      {/* HERO */}
      <header className="pb-5 pt-16 text-center">
        <div className="container">
          <span className="mb-5 inline-block rounded-full bg-brand-100 px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-brand">
            Precios
          </span>
          <h1 className="mx-auto text-[clamp(32px,5vw,46px)] font-extrabold leading-[1.1] tracking-tight">
            Tu facturación, conectada con tu asesoría
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-lg text-ink-muted">
            Planes para empresas cuya asesoría trabaja con Kabilio. Factura, controla tus gastos y tu
            tesorería, y compártelo todo con tu asesor de forma automática.
          </p>
          <div className="mt-[18px] flex justify-center">
            <span className="inline-flex items-center gap-2 text-[13.5px] font-semibold">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-green" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Cancela cuando quieras
            </span>
          </div>
        </div>
      </header>

      <section className="pb-11">
        <div className="container">
          {/* Toggle */}
          <div className="mb-7 flex justify-center">
            <div className="inline-flex items-center gap-0.5 rounded-full border border-line bg-surface2 p-[3px]">
              {(["mensual", "anual"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold capitalize transition-colors ${
                    mode === m ? "bg-surface text-ink shadow-card" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {m}
                  {m === "anual" && (
                    <span className="rounded-full bg-pink px-1.5 py-0.5 text-[10px] font-bold text-ink">1 pago</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tarjetas */}
          <div className="grid overflow-hidden rounded-[20px] border border-line bg-surface shadow-card md:grid-cols-3">
            {empresaPlans.map((p, i) => {
              let big = "0 €";
              let mo = "";
              let save: React.ReactNode = <span className="font-semibold text-green">Gratis para siempre</span>;
              if (!p.free && p.mo) {
                if (mode === "mensual") {
                  big = `${p.mo / 2} €`;
                  mo = "/mes";
                  save = (
                    <>
                      <s className="mr-1.5 text-[#9aa7b5] line-through">{p.mo} €</s>
                      <span className="font-semibold text-green">−50 % los 2 primeros meses</span>
                    </>
                  );
                } else {
                  big = `${p.mo * 11} €`;
                  mo = "/año";
                  save = (
                    <>
                      <span className="font-semibold text-green">12 meses con −50 % los 2 primeros</span> · un solo pago
                    </>
                  );
                }
              }
              return (
                <div
                  key={p.name}
                  className={`flex flex-col p-8 ${i < empresaPlans.length - 1 ? "md:border-r border-line" : ""} ${
                    i < empresaPlans.length - 1 ? "border-b md:border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-[19px] font-bold">
                    {p.name}
                    {p.popular && (
                      <span className="ml-auto rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mb-4 mt-2 min-h-[46px] text-[13px] text-ink-muted">{p.desc}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[34px] font-bold leading-none tracking-tight">{big}</span>
                    {mo && <span className="text-[13px] text-ink-muted">{mo}</span>}
                  </div>
                  <div className="mb-4 mt-1.5 min-h-[40px] text-[12.5px] leading-snug">{save}</div>
                  <div className="mb-3 min-h-[20px] text-[13.5px] font-bold">{p.tag}</div>
                  <Link
                    href="/solicita-una-demo"
                    className="block rounded-[10px] bg-ink py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand"
                  >
                    Empieza gratis
                  </Link>
                  <hr className="my-5 border-line" />
                  <div className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-ink-muted">{p.inc}</div>
                  <ul className="space-y-0">
                    {p.feats.map((f) => (
                      <li key={f} className="relative py-1.5 pl-6 text-[13.5px]">
                        <span className="absolute left-0 top-1.5 font-bold text-brand">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-[18px] text-center text-[13px] text-ink-muted">
            Sin tarjeta · <span className="font-bold text-brand">todos los planes incluyen la conexión con tu asesoría</span>
          </p>

          {/* Banda recomendar */}
          <div className="mt-5 flex flex-wrap items-center gap-4 rounded-[18px] border border-line bg-surface p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pink text-ink">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 11a4 4 0 1 0-4-4M2 21a8 8 0 0 1 13.3-6M19 16v6M16 19h6" />
                <circle cx="8" cy="7" r="4" />
              </svg>
            </span>
            <p className="min-w-[220px] flex-1 text-sm leading-relaxed">
              <b>Todos los planes son para empresas cuya asesoría trabaja con Kabilio.</b> Tu asesor recibe
              tus facturas y gastos en tiempo real. ¿La tuya todavía no usa Kabilio? Recomiéndasela y
              trabajad juntos en la misma plataforma.
            </p>
            <button
              onClick={() => setReferOpen(true)}
              className="shrink-0 rounded-[10px] bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand"
            >
              Recomendar a mi asesoría
            </button>
          </div>

          {/* Banda ¿Eres una asesoría? */}
          <div className="mt-4 overflow-hidden rounded-[20px] bg-ink p-10 text-white sm:p-11">
            <span className="mb-2.5 inline-block text-[11px] font-bold uppercase tracking-wide text-brand-200">
              Para despachos
            </span>
            <h3 className="mb-2.5 text-[30px] font-bold leading-tight tracking-tight">¿Eres una asesoría?</h3>
            <p className="mb-6 max-w-[470px] text-[15.5px] leading-relaxed text-white/85">
              Descubre los planes y precios de Kabilio pensados para asesorías y despachos que gestionan la
              contabilidad de varios clientes.
            </p>
            <Link
              href="/asesores/precios"
              className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-200"
            >
              Ver precios para asesorías →
            </Link>
          </div>

          {/* Comparativa */}
          <h2 className="mb-6 mt-14 text-center text-[32px] font-bold tracking-tight">Compara los planes</h2>
          <div className={`relative overflow-hidden rounded-2xl border border-line ${collapsed ? "max-h-[560px]" : ""}`}>
            <table className="w-full border-collapse bg-surface text-sm">
              <thead>
                <tr>
                  <th className="sticky top-0 z-10 w-[30%] bg-surface px-4 pb-3.5 pt-[18px] text-left align-bottom shadow-[inset_0_-2px_0_theme(colors.line)]">
                    Precios
                  </th>
                  {empresaPlans.map((p) => (
                    <th
                      key={p.name}
                      className="sticky top-0 z-10 border-l border-line bg-surface px-4 pb-3.5 pt-[18px] align-bottom shadow-[inset_0_-2px_0_theme(colors.line)]"
                    >
                      <span className="block text-base font-bold">{p.name}</span>
                      {headerPrice(p.mo, p.free)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cmpGroups.map((g) => {
                  const isClosed = closedGroups[g.group];
                  return (
                    <GroupBlock
                      key={g.group}
                      group={g.group}
                      closed={!!isClosed}
                      onToggle={() => toggleGroup(g.group)}
                      rows={g.rows}
                    />
                  );
                })}
              </tbody>
            </table>
            {collapsed && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-b from-transparent to-surface" />
            )}
          </div>
          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              className="mx-auto mt-[18px] block rounded-[10px] bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Ver todas las características
            </button>
          )}
          <p className="mt-4 text-center text-[12.5px] text-ink-muted">
            * El gestor documental está disponible; lo contrata la asesoría. · Pulsa cada bloque para minimizarlo.
          </p>

          {/* FAQ */}
          <h2 className="mb-6 mt-14 text-center text-[32px] font-bold tracking-tight">Preguntas frecuentes</h2>
          <div className="mx-auto max-w-[760px]">
            {empresaPricingFaqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-line">
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

      <ReferDrawer open={referOpen} onClose={() => setReferOpen(false)} />
    </>
  );
}

function GroupBlock({
  group,
  closed,
  onToggle,
  rows,
}: {
  group: string;
  closed: boolean;
  onToggle: () => void;
  rows: import("@/content/preciosEmpresas").CmpRow[];
}) {
  return (
    <>
      <tr className="cursor-pointer select-none" onClick={onToggle}>
        <td
          colSpan={4}
          className="border-y border-line bg-surface2 px-4 py-3 text-[11.5px] font-bold uppercase tracking-wider text-ink"
        >
          <span className={`mr-2 inline-block text-[10px] text-ink-muted transition-transform ${closed ? "-rotate-90" : ""}`}>
            ▾
          </span>
          {group}
        </td>
      </tr>
      {!closed &&
        rows.map((r) => (
          <tr key={r.feat}>
            <td className="border-b border-line px-4 py-3.5 text-left align-top">
              {r.feat}
              {r.tip && <Tip text={r.tip} />}
              {r.badge && (
                <span className="ml-1.5 rounded-full bg-brand-100 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-brand align-middle">
                  {r.badge}
                </span>
              )}
            </td>
            {r.span ? (
              <td colSpan={3} className="border-b border-l border-line px-4 py-3.5 text-center">
                {r.span}
              </td>
            ) : (
              r.vals!.map((v, i) => (
                <td key={i} className="border-b border-l border-line px-4 py-3.5 text-center [font-variant-numeric:tabular-nums]">
                  <Cell v={v} />
                </td>
              ))
            )}
          </tr>
        ))}
    </>
  );
}
