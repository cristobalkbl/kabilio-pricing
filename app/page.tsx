import Link from "next/link";
import { Button } from "@/components/Button";
import { SageNotifyForm } from "@/components/SageNotifyForm";
import { buildMetadata } from "@/lib/seo";
import {
  HeroDashboard,
  ShotProcesador,
  ShotConciliacion,
  ShotColaborativa,
  ShotFacturador,
  ServViz,
  WhySecure,
  WhyScalable,
  WhyAdapted,
} from "@/components/home-graphics";

export const metadata = buildMetadata({
  title: "Kabilio para asesorías · Tu despacho a prueba de Verifactu 2027",
  description:
    "La plataforma de IA que automatiza la contabilidad de tu despacho y trabaja conectada con tus clientes en tiempo real: procesa facturas, concilia bancos y centraliza la documentación.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden">
        {/* Fondo decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.brand.100)_0%,transparent_70%)] opacity-70"
        />
        <div className="container">
          <div className="mx-auto max-w-[820px] pb-2 pt-16 text-center sm:pt-20">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-lav bg-brand-100 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              La plataforma de IA para tu despacho
            </span>
            <h1 className="text-balance text-[clamp(33px,5.2vw,52px)] font-extrabold leading-[1.05]">
              Automatiza la contabilidad de tu asesoría con IA
            </h1>
            <p className="mx-auto mt-5 max-w-[640px] text-pretty text-[17.5px] leading-relaxed text-ink-muted">
              Kabilio es la plataforma de IA que automatiza la contabilidad de tu despacho y trabaja
              conectada con tus clientes en tiempo real: procesa facturas, concilia movimientos
              bancarios y centraliza la documentación en una plataforma colaborativa.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="/solicita-una-demo" className="shadow-card">
                Pedir demo
              </Button>
              <Button href="#demo" variant="ghost">
                <PlayGlyph /> Ver demo
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2.5 text-[13px] text-ink-muted">
              <span className="tracking-[2px] text-gold">★★★★★</span>
              Asesorías de toda España ya trabajan con Kabilio
            </div>
          </div>
        </div>

        <div className="container mt-9">
          <div className="group relative mx-auto max-w-[960px]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-tr from-brand-200/60 via-pink/40 to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card ring-1 ring-black/[0.02]">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="py-14">
        <div className="container">
          <SectionHead
            kick="Beneficios"
            title="Lo que consigue tu despacho con Kabilio"
            subtitle="Cumplimiento al día, cierres sin acumulación y horas de trabajo que recuperas cada mes."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Benefit
              tint="bg-brand-100 text-brand ring-brand-200"
              title="Reduce los picos de trabajo"
              text="Contabiliza la actividad de tus clientes a diario y llega a los cierres con el trabajo hecho, sin acumularlo para fin de trimestre."
              icon={
                <>
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </>
              }
            />
            <Benefit
              tint="bg-peach text-[#8a5a1e] ring-[#f0d9bf]"
              title="Ahorra tiempo con IA"
              text="La IA generativa contabiliza las facturas, concilia los bancos y te deja el asiento propuesto para revisar, todo desde un único panel."
              icon={<path d="M13 2 3 14h7l-1 8 10-12h-7z" />}
            />
            <Benefit
              tint="bg-pink text-[#a83a6b] ring-[#f2b9d2]"
              title="Normativa cubierta"
              text="Tus clientes facturan con un facturador adaptado a Verifactu: cada factura se envía automáticamente a la AEAT y, al mismo tiempo, la recibes al momento en tu Kabilio."
              icon={
                <>
                  <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z" />
                  <path d="M9 12l2 2 4-4" />
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES (dark) */}
      <section className="my-6 overflow-hidden bg-navy py-16 text-white">
        <div className="container">
          <SectionHead
            dark
            kick="Funcionalidades"
            title="Todo tu despacho, en una sola plataforma"
            subtitle="La IA se ocupa del trabajo repetitivo; tú controlas la cartera y colaboras con tus clientes."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <FuncCard
              wide
              kicker="Procesamiento de facturas"
              title="La IA procesa las facturas de tus clientes y las contabiliza"
              text="Tus clientes te envían sus facturas y la IA generativa las procesa y genera el asiento contable completo con un 95% de fiabilidad. Es más que un OCR: usa la última tecnología de IA para entender e interpretar cada factura, no solo leer sus datos."
              shot={<ShotProcesador />}
              href="/asesores/procesador-de-facturas"
            />
            <FuncCard
              kicker="Conciliación"
              title="Conciliación bancaria"
              text="Integra los movimientos bancarios automáticamente y utiliza reglas avanzadas e IA para recibir propuestas de emparejamiento, viendo todo de forma centralizada."
              shot={<ShotConciliacion />}
              href="/asesores/conciliacion-bancaria"
            />
            <FuncCard
              kicker="Contabilidad colaborativa"
              title="Tú y tu cliente, sobre los mismos datos"
              text="Trabajáis sobre la misma plataforma, con la documentación centralizada y la actividad al día para los dos."
              shot={<ShotColaborativa />}
              href="/asesores/portal-cliente"
            />
            <FuncCard
              wide
              kicker="Facturador"
              title="Facturación electrónica para las pymes de tu despacho"
              text="Facilita a tus clientes un facturador intuitivo que recibe y contabiliza automáticamente las facturas emitidas en Kabilio. Compatible con Verifactu."
              shot={<ShotFacturador />}
              href="/asesores/portal-cliente"
            />
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="scroll-mt-24 py-14">
        <div className="container">
          <div className="grid items-center gap-9 rounded-3xl border border-line bg-surface p-8 shadow-card sm:p-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">Demo</p>
              <h2 className="mb-3 text-[clamp(23px,3vw,30px)] font-bold leading-tight">
                Tu despacho y tus clientes, en una misma plataforma
              </h2>
              <p className="mb-6 text-[15.5px] leading-relaxed text-ink-muted">
                Reúne la contabilidad, la conciliación y la facturación de toda tu cartera en un solo
                sitio, con tus clientes conectados en tiempo real. Te enseñamos cómo en una demo.
              </p>
              <Button href="/solicita-una-demo">Pedir demo</Button>
            </div>
            <button
              type="button"
              aria-label="Ver vídeo demo de Kabilio"
              className="group relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-ink to-brand-800"
            >
              <span
                aria-hidden="true"
                className="absolute h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125"
              />
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white shadow-card transition-transform duration-200 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-ink" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/80">
                Kabilio en 90 segundos
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS / INTEGRACIÓN */}
      <section className="py-14">
        <div className="container">
          <div className="rounded-3xl border border-lav bg-gradient-to-br from-brand-100 to-brand-50 p-8 sm:p-11">
            <div className="grid items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">Integración</p>
                <h2 className="mb-3 text-[clamp(24px,3.2vw,32px)] font-bold leading-tight">
                  Integra Kabilio con A3{" "}
                  <span className="text-[0.6em] font-semibold text-ink-muted">(pronto Sage)</span>
                </h2>
                <p className="mb-6 text-[15.5px] leading-relaxed text-[#4b4560]">
                  Kabilio se conecta de raíz con A3ECO y A3CON: cada asiento se escribe solo en tu A3,
                  en tiempo real. No migras datos ni cambias de programa.
                </p>
                <ul className="mb-7 space-y-2.5">
                  {[
                    "Conexión nativa con A3ECO y A3CON",
                    "Importación asistida de datos iniciales",
                    "Formación personalizada para tu equipo",
                  ].map((li) => (
                    <li key={li} className="flex items-center gap-3 text-[15px] font-semibold">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-xs font-extrabold text-brand shadow-sm">
                        ✓
                      </span>
                      {li}
                    </li>
                  ))}
                </ul>
                <Button href="/contacto">Solicita más información</Button>
              </div>
              <div className="rounded-2xl border border-lav/70 bg-white/50 p-6 backdrop-blur-sm">
                <ServViz />
              </div>
            </div>

            {/* Sage · lista de espera, dentro del mismo bloque de integración */}
            <div className="mt-9 grid gap-5 border-t border-lav/70 pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="text-lg font-bold">¿Trabajas con Sage?</h3>
                <p className="mt-1 max-w-[520px] text-[14.5px] leading-relaxed text-[#4b4560]">
                  Estamos preparando la integración con Sage. Déjanos tu email y te avisamos en cuanto
                  esté lista.
                </p>
              </div>
              <SageNotifyForm />
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIR KABILIO */}
      <section className="py-14">
        <div className="container">
          <SectionHead title="Por qué elegir Kabilio" />
          <div className="grid gap-5 md:grid-cols-3">
            <WhyCard
              kicker="Seguro"
              title="Tus datos, protegidos"
              text="Protegemos los datos de tu despacho y los de tus clientes con los estándares que exige el sector."
              shot={<WhySecure />}
            />
            <WhyCard
              kicker="Escalable"
              title="Evoluciona contigo"
              text="Más de 30 ingenieros evolucionando y mejorando Kabilio, con funciones nuevas cada mes."
              shot={<WhyScalable />}
            />
            <WhyCard
              kicker="Adaptado"
              title="A tu tamaño"
              text="Desde despachos pequeños hasta grandes, se adapta a tu volumen de clientes."
              shot={<WhyAdapted />}
            />
          </div>
        </div>
      </section>

      {/* RESUMEN */}
      <section className="py-14">
        <div className="container">
          <div className="grid items-start gap-10 rounded-3xl border border-line bg-surface2 p-8 sm:p-11 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="mb-3.5 text-[clamp(26px,3.4vw,34px)] font-bold leading-tight">
                Todo lo que necesita tu despacho
              </h2>
              <p className="text-base leading-relaxed text-ink-muted">
                Una sola plataforma para automatizar el trabajo repetitivo y trabajar conectado con
                tus clientes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Procesamiento de facturas con IA", "La IA interpreta cada factura de tus clientes, mucho más que un OCR clásico."],
                ["Contabilidad automatizada", "Asientos contables completos con IA, listos para tu A3 con un 95% de fiabilidad."],
                ["Conciliación bancaria", "Conecta las cuentas y concilia los movimientos con reglas e IA."],
                ["Contabilidad colaborativa", "Trabaja con tus clientes en tiempo real sobre la misma plataforma."],
                ["Facturación electrónica", "Un facturador Verifactu para tus clientes; lo que emiten llega directo a tu contabilidad."],
                ["Integración con A3", "Conexión nativa con A3ECO y A3CON, sin migrar tus datos."],
              ].map(([b, s]) => (
                <div
                  key={b}
                  className="flex gap-3 rounded-2xl border border-line bg-surface p-4 transition-shadow duration-200 hover:shadow-card"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-extrabold text-brand">
                    ✓
                  </span>
                  <div>
                    <b className="block text-[15px] leading-tight">{b}</b>
                    <span className="mt-1 block text-[13px] leading-snug text-ink-muted">{s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-14">
        <div className="container">
          <SectionHead
            title="Testimonios de clientes"
            subtitle="Lo que dicen las asesorías que ya trabajan con Kabilio."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Testimonial
              initials="MC"
              quote="Con Kabilio hemos reducido el tiempo dedicado a lo más repetitivo, como contabilizar facturas, y centramos al equipo en lo de más valor para el cliente."
              name="Mar Castellà"
              role="Socia en Castellá"
            />
            <Testimonial
              initials="GG"
              quote="Gracias a la IA de Kabilio hemos cortado drásticamente las horas de introducir facturas y bajado los picos de trabajo."
              name="Guillem Gimeno"
              role="CEO en Deal Tax & Legal"
            />
            <Testimonial
              initials="AM"
              quote="Queríamos liberar al equipo de tareas rutinarias para dar un servicio de valor. Kabilio nos permite hacerlo hoy."
              name="Alex Martínez Comín"
              role="CEO en Martínez Comín"
            />
          </div>
          <div className="mt-9 flex flex-col items-center gap-3">
            <div className="flex -space-x-3.5">
              {[
                ["#ddd5fd", "JR"],
                ["#f8d5e4", "LM"],
                ["#fde9d6", "PS"],
                ["#e9e3fd", "AC"],
                ["#c9bff0", "NG"],
              ].map(([c, ini]) => (
                <span
                  key={ini}
                  className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-bg text-xs font-extrabold text-ink shadow-sm"
                  style={{ backgroundColor: c }}
                >
                  {ini}
                </span>
              ))}
            </div>
            <p className="text-[15.5px]">
              Más de <b className="font-extrabold">300 asesorías</b> confían en Kabilio
            </p>
          </div>
        </div>
      </section>

      {/* PLANES / CTA FINAL */}
      <section className="py-14">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-brand-50 px-8 py-16 text-center shadow-card sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-100 blur-3xl"
            />
            <div className="relative mx-auto max-w-[560px]">
              <h2 className="mb-3 text-[clamp(25px,3.6vw,34px)] font-bold">
                Empieza a automatizar la contabilidad de tu despacho
              </h2>
              <p className="mb-7 text-base leading-relaxed text-ink-muted">
                Te enseñamos en una demo cómo Kabilio automatiza tu precontabilidad y te conecta con
                tus clientes en tiempo real.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/solicita-una-demo" className="shadow-card">
                  Pedir demo
                </Button>
                <Button href="/asesores/precios" variant="ghost">
                  Ver planes
                </Button>
              </div>
              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[13px] text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Check /> Sin permanencia
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check /> Puesta en marcha en 48 h
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check /> Soporte en español
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Subcomponentes locales de la home ---------- */

function SectionHead({
  kick,
  title,
  subtitle,
  dark,
}: {
  kick?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-[720px] text-center">
      {kick && (
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.08em] ${dark ? "text-brand-400" : "text-brand"}`}>
          {kick}
        </p>
      )}
      <h2 className={`text-balance text-[clamp(26px,3.6vw,36px)] font-bold leading-[1.15] ${dark ? "text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-pretty text-base leading-relaxed ${dark ? "text-white/70" : "text-ink-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Benefit({
  icon,
  tint,
  title,
  text,
}: {
  icon: React.ReactNode;
  tint: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-line bg-surface p-7 transition duration-200 hover:-translate-y-1 hover:shadow-card">
      <span
        className={`mb-4 inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl ring-1 ring-inset transition-transform duration-200 group-hover:scale-105 ${tint}`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}

function FuncCard({
  wide,
  kicker,
  title,
  text,
  shot,
  href,
}: {
  wide?: boolean;
  kicker: string;
  title: string;
  text: string;
  shot: React.ReactNode;
  href?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-[22px] transition duration-200 hover:border-white/25 hover:bg-white/[0.08] ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-5 overflow-hidden rounded-xl bg-surface2 ring-1 ring-black/[0.03]">{shot}</div>
      <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.06em] text-brand-400">{kicker}</p>
      <h3 className="mb-2 text-[19px] font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{text}</p>
      {href && (
        <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-200 hover:text-white">
          Ver más
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </div>
  );
}

function WhyCard({
  kicker,
  title,
  text,
  shot,
}: {
  kicker: string;
  title: string;
  text: string;
  shot: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col rounded-3xl border border-line bg-surface p-[22px] transition duration-200 hover:-translate-y-1 hover:shadow-card">
      <div className="mb-5 overflow-hidden rounded-xl bg-surface2 ring-1 ring-black/[0.03]">{shot}</div>
      <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.06em] text-brand">{kicker}</p>
      <h3 className="mb-2 text-[19px] font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}

function Testimonial({
  initials,
  quote,
  name,
  role,
}: {
  initials: string;
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:shadow-card">
      <span className="mb-3 tracking-[2px] text-gold" aria-hidden="true">
        ★★★★★
      </span>
      <blockquote className="mb-5 flex-1 text-[14.5px] leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-200 text-sm font-extrabold text-brand">
          {initials}
        </span>
        <span>
          <b className="block text-[13.5px]">{name}</b>
          <span className="text-[12.5px] text-ink-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-green" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
