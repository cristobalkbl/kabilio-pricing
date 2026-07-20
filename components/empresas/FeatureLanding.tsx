import Link from "next/link";
import { Button } from "@/components/Button";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { PairedTestimonials, type TPair } from "./PairedTestimonials";

/* ---------- Tipos ---------- */
type Tag = { text: string; variant: "ok" | "wait" | "due" };
type MockRow = { avatar?: string; label: string; right?: string; tag?: Tag };

export type Mock =
  | { kind: "invoice"; head: string; lines: ("m" | "s")[]; total: { label: string; amount: string } }
  | { kind: "rows"; head: string; rows: MockRow[]; button?: string }
  | { kind: "verifactu"; title: string; sub: string; badge: string }
  | { kind: "flow"; nodes: { title: string; small: string; highlight?: boolean }[] }
  | { kind: "ivatotal"; head: string; total: { label: string; amount: string }; rows: MockRow[] }
  | { kind: "search"; query: string; chips: { label: string; on?: boolean }[]; rows: MockRow[] };

type Bullet = string | { b: string; d: string };
export type Feature = { k: string; title: string; text: string; bullets: Bullet[]; mock: Mock };
export type Testi = {
  initials?: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  asesoria?: string;
  avatar?: string;
};
type CardCta = { label: string; href: string };
type IconItem = { icon: string; h?: string; title?: string; text?: string; p?: string };

export type FeatureLandingData = {
  eyebrow: string;
  h1: string;
  sub: string;
  ctas?: { heroPrimary: CardCta; heroSecondary: CardCta; ctaPrimary: CardCta; ctaSecondary: CardCta };
  hero: {
    invoice?: { title: string; n: string; badge: string; total: { label: string; amount: string } };
    card?: Mock;
    kpis: { lbl: string; val: string; delta?: string }[];
  };
  trustText: string;
  logos: string[];
  benefits?: { title: string; text: string; items: { icon: string; h: string; p: string }[] };
  featuresHeading?: { title: string; text: string };
  features: Feature[];
  testimonials: { title: string; text: string; items?: Testi[]; pairs?: TPair[]; rating?: string };
  stats?: { n: string; l: string }[];
  faqTitle?: string;
  faqs: { q: string; a: string }[];
  seals?: string[];
  cta: { title: string; text: string };
  allFeaturesHeading?: { title: string; text: string };
  allFeatures?: { icon: string; title: string; text: string; href?: string }[];
};

const DEFAULT_CTAS = {
  heroPrimary: { label: "Empieza gratis", href: "/solicita-una-demo" },
  heroSecondary: { label: "Ver planes", href: "/empresas/precios" },
  ctaPrimary: { label: "Empieza gratis", href: "/solicita-una-demo" },
  ctaSecondary: { label: "Habla con nuestro equipo", href: "/contacto" },
};

const DEFAULT_ALLFEATURES = [
  { title: "Facturación", text: "Facturas Verifactu con tu diseño, recurrentes y presupuestos que pasan a factura.", href: "/empresas/facturacion", icon: `<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>` },
  { title: "Gastos", text: "Sube tus facturas de gasto y la IA extrae los datos, sin teclear y sin duplicados.", href: "/empresas/gastos", icon: `<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6"/>` },
  { title: "Tesorería", text: "Bancos conectados, conciliación automática, IVA y dashboard al día.", href: "/empresas/tesoreria", icon: `<path d="M3 21h18M4 10h16M5 10l7-6 7 6M6 10v8M10 10v8M14 10v8M18 10v8"/>` },
  { title: "Portal colaborativo", text: "Tú y tu asesoría, sobre los mismos datos y en tiempo real.", href: "/empresas/portal-colaborativo", icon: `<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16 20a5 5 0 0 1 6-4.6"/>` },
  { title: "Verifactu", text: "Facturas conformes con la Ley Antifraude y envío automático a la AEAT.", href: "/empresas/verifactu", icon: `<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>` },
];

/* ---------- Helpers de UI ---------- */
const tagCls: Record<Tag["variant"], string> = {
  ok: "text-green bg-green/10",
  wait: "text-[#8a5a17] bg-[#fbeed7]",
  due: "text-[#a33] bg-[#f7dede]",
};

function Ico({ paths, className }: { paths: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.85} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: paths }} />
  );
}

function TagPill({ tag }: { tag: Tag }) {
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold ${tagCls[tag.variant]}`}>{tag.text}</span>;
}

function Rowline({ row }: { row: MockRow }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-2.5 text-[13.5px] last:border-b-0">
      <span className="flex items-center gap-2.5">
        {row.avatar && (
          <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-lg bg-brand-200 text-xs font-extrabold text-brand">
            {row.avatar}
          </span>
        )}
        {row.label}
      </span>
      <span className="flex items-center gap-2">
        {row.right && <span className="font-extrabold [font-variant-numeric:tabular-nums]">{row.right}</span>}
        {row.tag && <TagPill tag={row.tag} />}
      </span>
    </div>
  );
}

function MockHead({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-muted">{children}</div>;
}

const SHELL = "rounded-[18px] border border-line bg-surface p-[18px] shadow-card";

function MockCard({ mock }: { mock: Mock }) {
  if (mock.kind === "invoice") {
    return (
      <div className={SHELL}>
        <MockHead>{mock.head}</MockHead>
        {mock.lines.map((w, i) => (
          <div key={i} className={`my-2 h-2 rounded-md bg-surface2 ${w === "m" ? "w-[85%]" : "w-[60%]"}`} />
        ))}
        <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3.5">
          <span className="text-[11.5px] font-bold text-ink-muted">{mock.total.label}</span>
          <b className="text-2xl font-extrabold tracking-tight">{mock.total.amount}</b>
        </div>
      </div>
    );
  }
  if (mock.kind === "rows") {
    return (
      <div className={SHELL}>
        <MockHead>{mock.head}</MockHead>
        {mock.rows.map((r, i) => (
          <Rowline key={i} row={r} />
        ))}
        {mock.button && (
          <button className="mt-3.5 w-full rounded-[10px] bg-ink py-2.5 text-sm font-semibold text-white">{mock.button}</button>
        )}
      </div>
    );
  }
  if (mock.kind === "search") {
    return (
      <div className={SHELL}>
        <div className="mb-2.5 flex items-center gap-2 rounded-[10px] border border-line px-3 py-2.5 text-[12.5px] text-ink-muted">
          <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" />
          </svg>
          {mock.query}
        </div>
        <div className="mb-2.5 flex flex-wrap gap-1.5">
          {mock.chips.map((c) => (
            <span
              key={c.label}
              className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                c.on ? "border-lav bg-brand-100 text-brand" : "border-line text-ink-muted"
              }`}
            >
              {c.label}
            </span>
          ))}
        </div>
        {mock.rows.map((r, i) => (
          <Rowline key={i} row={r} />
        ))}
      </div>
    );
  }
  if (mock.kind === "verifactu") {
    return (
      <div className={`${SHELL} flex items-center gap-3.5`}>
        <span className="h-16 w-16 shrink-0 rounded-[10px] border-[3px] border-white shadow-[0_0_0_1px_theme(colors.line)]" style={{ background: "repeating-conic-gradient(#111827 0% 25%, #fff 0% 50%) 0/16px 16px" }} />
        <div>
          <div className="text-base font-extrabold">{mock.title}</div>
          <div className="text-[11.5px] font-bold text-ink-muted">{mock.sub}</div>
          <span className="mt-2 inline-block rounded-full bg-green/10 px-2.5 py-1 text-[10.5px] font-extrabold text-green">{mock.badge}</span>
        </div>
      </div>
    );
  }
  if (mock.kind === "flow") {
    return (
      <div className={SHELL}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {mock.nodes.map((n, i) => (
            <div key={n.title} className="flex items-center gap-3">
              <div className={`rounded-xl border px-3.5 py-3 text-center text-[13px] font-bold shadow-card ${n.highlight ? "border-lav bg-brand-100" : "border-line bg-surface"}`}>
                {n.title}
                <small className="mt-0.5 block text-[11px] font-semibold text-ink-muted">{n.small}</small>
              </div>
              {i < mock.nodes.length - 1 && <span className="font-extrabold text-brand">→</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }
  // ivatotal
  return (
    <div className={SHELL}>
      <MockHead>{mock.head}</MockHead>
      <div className="flex items-baseline justify-between">
        <span className="text-[11.5px] font-bold text-ink-muted">{mock.total.label}</span>
        <b className="text-2xl font-extrabold tracking-tight">{mock.total.amount}</b>
      </div>
      <div className="mt-2">
        {mock.rows.map((r, i) => (
          <Rowline key={i} row={r} />
        ))}
      </div>
    </div>
  );
}

function Bullets({ bullets }: { bullets: Bullet[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {bullets.map((bl, i) => {
        const isObj = typeof bl !== "string";
        return (
          <li key={i} className="flex items-start gap-3 text-[14.5px] leading-snug">
            <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-md bg-brand-100 text-[10px] font-extrabold text-brand">✓</span>
            {isObj ? (
              <span>
                <b className="block font-extrabold">{(bl as { b: string }).b}</b>
                <span className="text-ink-muted">{(bl as { d: string }).d}</span>
              </span>
            ) : (
              <span>{bl as string}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function SecHead({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-[640px] text-center">
      <h2 className="mb-2.5 text-[30px] font-bold tracking-tight">{title}</h2>
      {text && <p className="text-base leading-snug text-ink-muted">{text}</p>}
    </div>
  );
}

/* ---------- Landing ---------- */
export function FeatureLanding({ data }: { data: FeatureLandingData }) {
  const ctas = data.ctas ?? DEFAULT_CTAS;
  const allFeatures = data.allFeatures ?? DEFAULT_ALLFEATURES;

  return (
    <>
      {/* HERO (split: texto a la izquierda, visual al lado) */}
      <header className="overflow-hidden">
        <div className="container">
          <div className="grid items-center gap-11 py-14 md:grid-cols-[1.02fr_.98fr]">
            {/* Texto */}
            <div>
              <span className="mb-5 inline-block rounded-full bg-brand-100 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-brand">
                {data.eyebrow}
              </span>
              <h1 className="text-[clamp(31px,4.6vw,46px)] font-extrabold leading-[1.08] tracking-tight">{data.h1}</h1>
              <p className="mt-4 max-w-[560px] text-[17.5px] leading-relaxed text-ink-muted">{data.sub}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={ctas.heroPrimary.href}>{ctas.heroPrimary.label}</Button>
                <Button href={ctas.heroSecondary.href} variant="ghost">{ctas.heroSecondary.label}</Button>
              </div>
            </div>

            {/* Visual */}
            <div className="rounded-[26px] border border-lav bg-gradient-to-br from-brand-50 to-pink/40 p-5 sm:p-6">
              {data.hero.card ? (
                <MockCard mock={data.hero.card} />
              ) : (
                <div className="rounded-2xl border border-line bg-surface p-[18px] shadow-card">
                  <div className="mb-3.5 flex gap-1.5">
                    <i className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <i className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <i className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="mb-3.5 flex items-start justify-between">
                    <div>
                      <div className="text-base font-extrabold">{data.hero.invoice!.title}</div>
                      <div className="text-[11.5px] font-bold text-ink-muted">{data.hero.invoice!.n}</div>
                    </div>
                    <span className="rounded-full bg-green/10 px-2.5 py-1 text-[10.5px] font-extrabold text-green">{data.hero.invoice!.badge}</span>
                  </div>
                  <div className="my-2 h-2 w-[85%] rounded-md bg-surface2" />
                  <div className="my-2 h-2 w-[60%] rounded-md bg-surface2" />
                  <div className="my-2 h-2 w-[85%] rounded-md bg-surface2" />
                  <div className="my-2 h-2 w-[60%] rounded-md bg-surface2" />
                  <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3.5">
                    <span className="text-[11.5px] font-bold text-ink-muted">{data.hero.invoice!.total.label}</span>
                    <b className="text-2xl font-extrabold tracking-tight">{data.hero.invoice!.total.amount}</b>
                  </div>
                </div>
              )}
              <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                {data.hero.kpis.map((k) => (
                  <div key={k.lbl} className="rounded-xl border border-line bg-surface px-3 py-2.5">
                    <div className="text-[10.5px] font-bold leading-tight text-ink-muted">{k.lbl}</div>
                    <div className="mt-1 text-[17px] font-extrabold leading-none tracking-tight text-brand">
                      {k.val}
                      {k.delta && <small className="ml-1 text-[11px] font-bold text-green">{k.delta}</small>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST */}
      <div className="py-8 text-center">
        <div className="container">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-wide text-ink-muted">{data.trustText}</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {data.logos.map((l) => (
              <span key={l} className="text-[17px] font-extrabold tracking-tight text-[#c9c3d6]">{l}</span>
            ))}
          </div>
        </div>
      </div>

      <main className="container">
        {/* BENEFICIOS (opcional) */}
        {data.benefits && (
          <section className="py-8">
            <SecHead title={data.benefits.title} text={data.benefits.text} />
            <div className="grid gap-3.5 md:grid-cols-3">
              {data.benefits.items.map((b) => (
                <div key={b.h} className="rounded-[14px] border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:shadow-card">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand">
                    <Ico paths={b.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1.5 text-base font-bold">{b.h}</h3>
                  <p className="text-[13.5px] leading-snug text-ink-muted">{b.p}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Encabezado funcionalidades (opcional) */}
        {data.featuresHeading && (
          <section className="pt-8">
            <SecHead title={data.featuresHeading.title} text={data.featuresHeading.text} />
          </section>
        )}

        {/* FEATURES */}
        {data.features.map((f, idx) => {
          const rev = idx % 2 === 1;
          const text = (
            <div>
              <div className="mb-2.5 text-[12.5px] font-bold uppercase tracking-wide text-brand">{f.k}</div>
              <h2 className="mb-3 text-[29px] font-bold leading-tight tracking-tight">{f.title}</h2>
              <p className="mb-4 text-base leading-relaxed text-ink-muted">{f.text}</p>
              <Bullets bullets={f.bullets} />
            </div>
          );
          const media = <MockCard mock={f.mock} />;
          return (
            <section key={f.title} className="grid items-center gap-12 py-11 md:grid-cols-2">
              {rev ? (
                <>
                  <div className="md:order-2">{text}</div>
                  <div className="md:order-1">{media}</div>
                </>
              ) : (
                <>
                  {text}
                  {media}
                </>
              )}
            </section>
          );
        })}

        {/* TESTIMONIOS (carrusel) */}
        {data.testimonials.pairs ? (
          <PairedTestimonials
            title={data.testimonials.title}
            text={data.testimonials.text}
            pairs={data.testimonials.pairs}
          />
        ) : (
          <TestimonialsCarousel
            title={data.testimonials.title}
            text={data.testimonials.text}
            rating={data.testimonials.rating}
            items={data.testimonials.items ?? []}
          />
        )}

        {/* STATS BAND */}
        {data.stats && (
          <section className="my-14 grid gap-6 rounded-3xl bg-ink p-11 text-center text-white sm:grid-cols-3">
            {data.stats.map((s) => (
              <div key={s.l}>
                <div className="text-[44px] font-extrabold tracking-tight text-brand-200">{s.n}</div>
                <div className="mt-1.5 text-sm text-white/80">{s.l}</div>
              </div>
            ))}
          </section>
        )}

        {/* FAQ */}
        {data.faqs.length > 0 && (
        <section className="py-8">
          <SecHead title={data.faqTitle ?? "Preguntas frecuentes"} />
          <div className="mx-auto max-w-[760px]">
            {data.faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] text-base font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-xl font-bold text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-[18px] text-[14.5px] leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        )}

        {/* SEALS */}
        {data.seals && (
          <section className="py-8">
            <div className="flex flex-wrap justify-center gap-3">
              {data.seals.map((s) => (
                <span key={s} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-[13.5px] font-bold">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {s}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA BAND */}
        <section className="my-5 mb-14">
          <div className="rounded-[26px] border border-lav bg-gradient-to-br from-brand-50 to-pink/40 p-10 text-center sm:p-[52px]">
            <h2 className="mb-3 text-[32px] font-bold tracking-tight">{data.cta.title}</h2>
            <p className="mx-auto mb-6 max-w-[560px] text-base text-ink-muted">{data.cta.text}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={ctas.ctaPrimary.href}>{ctas.ctaPrimary.label}</Button>
              <Button href={ctas.ctaSecondary.href} variant="ghost">{ctas.ctaSecondary.label}</Button>
            </div>
          </div>
        </section>

        {/* TODA LA PLATAFORMA */}
        <section className="py-8 pb-16">
          <SecHead
            title={data.allFeaturesHeading?.title ?? "Todas las funcionalidades para tu empresa"}
            text={data.allFeaturesHeading?.text ?? "Una plataforma que crece contigo, siempre conectada con tu asesoría."}
          />
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {allFeatures.map((a) =>
              a.href ? (
                <Link
                  key={a.title}
                  href={a.href}
                  className="group flex flex-col rounded-[14px] border border-line bg-surface p-5 transition duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand">
                    <Ico paths={a.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1.5 text-base font-bold group-hover:text-brand">{a.title}</h3>
                  <p className="mb-3 text-[13.5px] leading-snug text-ink-muted">{a.text}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-bold text-brand">
                    Ver más
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ) : (
                <div key={a.title} className="rounded-[14px] border border-line bg-surface p-5">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand">
                    <Ico paths={a.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1.5 text-base font-bold">{a.title}</h3>
                  <p className="text-[13.5px] leading-snug text-ink-muted">{a.text}</p>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
}
