import { Button } from "@/components/Button";
import { RawSvg } from "./RawSvg";
import { HowItWorks } from "./HowItWorks";
import { site } from "@/content/site";

export type FeatureRow = { title: string; bullets: string[]; chips?: string[]; media: string };
export type WhyCard = { kicker: string; title: string; text: string; shot: string };
export type StepItem = { icon: string; title: string; text: string };
export type Testi = { initials: string; quote: string; name: string; role: string };
export type Faq = { q: string; a: string };

export type ProductData = {
  eyebrow: string;
  h1: string;
  lead: string;
  heroMedia: string;
  statement?: { pre: string; em: string; post: string; text: string };
  how: { eyebrow: string; title: string; subtitle?: string; steps: StepItem[] };
  features: { eyebrow: string; title: string; rows: FeatureRow[] };
  a3: { title: string; items: { bold: string; text: string }[] };
  why: { eyebrow: string; title: string; cards: WhyCard[] };
  testimonials: { eyebrow: string; title: string; items: Testi[] };
  demo: { title: string; text: string };
  faqs: Faq[];
  cta: { title: string; text: string };
};

const A3_SVG = `<svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="20" y="52" width="90" height="66" rx="8" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
  <text x="34" y="79" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#111827">a3<tspan fill="#5aa02c">ASESOR</tspan></text>
  <rect x="20" y="88" width="90" height="30" rx="8" fill="#5aa02c"/><rect x="20" y="88" width="90" height="12" fill="#5aa02c"/>
  <text x="65" y="109" text-anchor="middle" font-family="Manrope,sans-serif" font-size="14" font-weight="800" fill="#fff">eco</text>
  <circle cx="132" cy="85" r="3" fill="#111827"/><circle cx="146" cy="85" r="3" fill="#111827"/><circle cx="160" cy="85" r="3" fill="#111827"/>
  <circle cx="190" cy="85" r="30" fill="none" stroke="#6b5cf0" stroke-width="4"/>
  <path d="M192 73 l-11 12 11 12 M201 73 l-11 12 11 12" stroke="#6b5cf0" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="220" cy="85" r="3" fill="#c9cfd8"/><circle cx="234" cy="85" r="3" fill="#c9cfd8"/><circle cx="248" cy="85" r="3" fill="#c9cfd8"/>
  <rect x="270" y="52" width="90" height="66" rx="8" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
  <text x="284" y="79" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#111827">a3<tspan fill="#5aa02c">ASESOR</tspan></text>
  <rect x="270" y="88" width="90" height="30" rx="8" fill="#5aa02c"/><rect x="270" y="88" width="90" height="12" fill="#5aa02c"/>
  <text x="315" y="109" text-anchor="middle" font-family="Manrope,sans-serif" font-size="14" font-weight="800" fill="#fff">con</text>
</svg>`;

function Check() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-[11px] font-extrabold text-brand">
      ✓
    </span>
  );
}

function ProductHero({ data }: { data: ProductData }) {
  return (
    <header>
      <div className="container">
        <div className="grid items-center gap-11 py-[52px] md:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="mb-[18px] inline-block rounded-full bg-brand-100 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-brand">
              {data.eyebrow}
            </span>
            <h1 className="mb-4 text-[clamp(31px,4.4vw,46px)] font-extrabold leading-[1.07]">
              {data.h1}
            </h1>
            <p className="mb-6 text-[17.5px] leading-relaxed text-ink-muted">{data.lead}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/solicita-una-demo">Pedir demo</Button>
              <Button href="#demo" variant="ghost">
                Ver vídeo
              </Button>
            </div>
            <div className="mt-5 flex items-center gap-2.5 text-[13px] text-ink-muted">
              <span className="tracking-[2px] text-gold">★★★★★</span>
              Asesorías de toda España ya lo usan
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px] border border-line bg-surface p-[22px] shadow-card">
            <RawSvg html={data.heroMedia} />
          </div>
        </div>
      </div>
    </header>
  );
}

function StatementBand({ pre, em, post, text }: { pre: string; em: string; post: string; text: string }) {
  return (
    <section className="py-9">
      <div className="container">
        <div className="rounded-3xl bg-ink px-10 py-11 text-center text-white">
          <h2 className="mx-auto mb-2.5 max-w-[820px] text-[clamp(23px,3.4vw,32px)] font-bold leading-[1.18]">
            {pre} <em className="not-italic text-brand-200">{em}</em> {post}
          </h2>
          <p className="mx-auto max-w-[640px] text-[15.5px] leading-relaxed text-white/80">{text}</p>
        </div>
      </div>
    </section>
  );
}

function FeatureRows({ data }: { data: ProductData["features"] }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="mx-auto mb-9 max-w-[700px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-brand">{data.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">{data.title}</h2>
        </div>

        <div className="space-y-4">
          {data.rows.map((row, idx) => {
            const shaded = idx % 2 === 0;
            const media = (
              <div
                className={`overflow-hidden rounded-[18px] border border-line bg-surface p-[18px] ${
                  shaded ? "" : "shadow-card"
                }`}
              >
                <RawSvg html={row.media} />
              </div>
            );
            const text = (
              <div>
                <h3 className="mb-4 text-2xl font-bold text-brand">{row.title}</h3>
                <ul className="mb-5 space-y-1.5">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] leading-snug">
                      <Check />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {row.chips && (
                  <div className="mb-[18px] flex flex-wrap gap-2">
                    {row.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-brand-100 px-2.5 py-1 text-[11.5px] font-bold text-brand"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                <Button href="/solicita-una-demo" className="px-[18px] py-2.5 text-[13.5px]">
                  Pedir demo
                </Button>
              </div>
            );
            return (
              <div
                key={row.title}
                className={`grid items-center gap-11 md:grid-cols-2 ${
                  shaded ? "rounded-[22px] border border-line bg-surface2 p-8 sm:p-10" : "py-4"
                }`}
              >
                {shaded ? (
                  <>
                    {text}
                    {media}
                  </>
                ) : (
                  <>
                    <div className="md:order-2">{text}</div>
                    <div className="md:order-1">{media}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function A3Integration({ data }: { data: ProductData["a3"] }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="grid items-center gap-11 rounded-3xl border border-lav bg-brand-100 p-8 sm:p-11 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">Integración</p>
            <h2 className="mb-3 text-[clamp(23px,3vw,30px)] font-bold">{data.title}</h2>
            <ul className="mt-1.5 space-y-1">
              {data.items.map((it) => (
                <li key={it.bold} className="flex items-start gap-3 py-2.5 text-[15px] leading-snug text-[#4b4560]">
                  <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-white text-xs font-extrabold text-brand">
                    ✓
                  </span>
                  <span>
                    <b className="font-bold text-ink">{it.bold}</b> — {it.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-lav/70 bg-white/50 p-6 backdrop-blur-sm">
            <RawSvg html={A3_SVG} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCards({ data }: { data: ProductData["why"] }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-brand">{data.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">{data.title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {data.cards.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-3xl border border-line bg-surface p-[22px] transition duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-5 overflow-hidden rounded-xl bg-surface2 ring-1 ring-black/[0.03]">
                <RawSvg html={c.shot} />
              </div>
              <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.06em] text-brand">{c.kicker}</p>
              <h3 className="mb-2 text-[19px] font-bold">{c.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTestimonials({ data }: { data: ProductData["testimonials"] }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-brand">{data.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">{data.title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {data.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="mb-3 tracking-[2px] text-gold" aria-hidden="true">
                ★★★★★
              </span>
              <blockquote className="mb-5 flex-1 text-[14.5px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-200 text-sm font-extrabold text-brand">
                  {t.initials}
                </span>
                <span>
                  <b className="block text-[13.5px]">{t.name}</b>
                  <span className="text-[12.5px] text-ink-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoBand({ data }: { data: ProductData["demo"] }) {
  return (
    <section id="demo" className="scroll-mt-24 py-14">
      <div className="container">
        <div className="grid items-center gap-9 rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-10 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-[clamp(23px,3vw,30px)] font-bold leading-tight">{data.title}</h2>
            <p className="mb-6 text-[15.5px] leading-relaxed text-ink-muted">{data.text}</p>
            <Button href="/solicita-una-demo">Pedir demo</Button>
          </div>
          <button
            type="button"
            aria-label="Ver vídeo"
            className="group relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-ink to-brand-800"
          >
            <span className="absolute h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white shadow-card transition-transform duration-200 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-ink" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-brand">FAQ</p>
          <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">Preguntas frecuentes</h2>
        </div>
        <div className="mx-auto max-w-[760px]">
          {faqs.map((f, i) => (
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
  );
}

function SupportCards() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-brand">Ayuda</p>
          <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">
            Estamos para darte soporte cuando lo necesites
          </h2>
        </div>
        <div className="mx-auto grid max-w-[820px] gap-4 sm:grid-cols-2">
          <div className="rounded-[18px] border border-line bg-surface p-7">
            <span className="mb-4 inline-flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-brand-100 text-brand">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <h3 className="mb-2 text-lg font-bold">Chat o email</h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              Pregunta lo que quieras a nuestro equipo o al agente IA vía chat.
            </p>
            <a className="mt-3 inline-block text-sm font-bold text-brand hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="rounded-[18px] border border-line bg-surface p-7">
            <span className="mb-4 inline-flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-brand-100 text-brand">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </span>
            <h3 className="mb-2 text-lg font-bold">Centro de ayuda</h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              Respuestas estructuradas y vídeos sobre los temas más consultados.
            </p>
            <a
              className="mt-3 inline-block text-sm font-bold text-brand hover:underline"
              href={site.social.helpCenter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar centro de ayuda →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCTA({ data }: { data: ProductData["cta"] }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center text-white sm:px-12">
          <h2 className="mb-2.5 text-[clamp(25px,3.6vw,34px)] font-bold">{data.title}</h2>
          <p className="mx-auto mb-7 max-w-[520px] text-[15.5px] leading-relaxed text-white/80">{data.text}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/solicita-una-demo" variant="light">
              Pedir demo
            </Button>
            <Button href="#demo" variant="outline">
              Ver vídeo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ensambla la landing de producto a partir de un objeto de datos.
export function ProductoLanding({ data }: { data: ProductData }) {
  return (
    <>
      <ProductHero data={data} />
      {data.statement && (
        <StatementBand
          pre={data.statement.pre}
          em={data.statement.em}
          post={data.statement.post}
          text={data.statement.text}
        />
      )}
      <HowItWorks
        eyebrow={data.how.eyebrow}
        title={data.how.title}
        subtitle={data.how.subtitle}
        steps={data.how.steps}
      />
      <FeatureRows data={data.features} />
      <A3Integration data={data.a3} />
      <WhyCards data={data.why} />
      <ProductTestimonials data={data.testimonials} />
      <DemoBand data={data.demo} />
      <ProductFaq faqs={data.faqs} />
      <SupportCards />
      <ProductCTA data={data.cta} />
    </>
  );
}
