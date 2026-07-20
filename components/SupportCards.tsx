import { site } from "@/content/site";

// Bloque de "Ayuda" (chat/email + centro de ayuda), compartido por las páginas
// de funcionalidades de asesorías (ProductoLanding) y de empresas (FeatureLanding).
// `contained`: envuelve en .container (ProductoLanding). En FeatureLanding, que ya
// va dentro de un <main className="container">, se pasa `contained={false}`.
export function SupportCards({ contained = true }: { contained?: boolean }) {
  const inner = (
    <>
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
    </>
  );

  return <section className="py-14">{contained ? <div className="container">{inner}</div> : inner}</section>;
}
