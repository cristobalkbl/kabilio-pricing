import Link from "next/link";
import { academyHref, academyVideos, webinarsCalendarHref } from "@/content/webinarsEmpresas";

// Bloques de la columna de información de /empresas/contacto: la video academy
// y el calendario de webinars.
export function ContactAsideBlocks() {
  return (
    <>
      <VideoAcademyCard />
      <WebinarsCard />
    </>
  );
}

function VideoAcademyCard() {
  return (
    <article className="rounded-2xl border border-line bg-surface">
      <div className="p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-brand">Video academy</p>
        <h2 className="mt-1 text-[17px] font-bold text-ink">Aprende Kabilio en vídeo</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          Tutoriales cortos para ponerte al día sin leer un manual: factura, gastos, bancos y
          tesorería, paso a paso.
        </p>

        <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
          {academyVideos.map((v) => (
            <li key={v.title} className="flex items-start justify-between gap-3">
              <span className="flex min-w-0 items-start gap-2.5 text-[13.5px] leading-snug text-ink">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M10 9l5 3-5 3z" />
                </svg>
                {v.title}
              </span>
              <span className="shrink-0 text-[12.5px] text-ink-muted [font-variant-numeric:tabular-nums]">
                {v.length}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={academyHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
        >
          Ver todos los vídeos →
        </a>
      </div>
    </article>
  );
}

function WebinarsCard() {
  const external = webinarsCalendarHref.startsWith("http");

  const content = (
    <>
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand">Webinars</p>
          <h2 className="mt-1 text-[17px] font-bold leading-snug text-ink">
            Vemos Kabilio en directo contigo
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            Sesiones online de presentación, con turno de preguntas. Consulta el calendario y
            apúntate a la que mejor te venga.
          </p>
        </div>
      </div>
      <span className="mt-4 inline-block text-sm font-bold text-brand transition-transform group-hover:translate-x-0.5">
        Ver el calendario de webinars →
      </span>
    </>
  );

  const className =
    "group block rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-lav hover:bg-brand-50";

  return external ? (
    <a href={webinarsCalendarHref} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={webinarsCalendarHref} className={className}>
      {content}
    </Link>
  );
}
