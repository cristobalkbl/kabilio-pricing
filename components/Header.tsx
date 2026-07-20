"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { site, topbar, primaryCta, audiences, navByAudience } from "@/content/site";

// CTA principal del header: mismo texto y destino (demo) en ambas audiencias.
function ctaLabel() {
  return "Contáctanos";
}

function ctaHref() {
  return primaryCta.href;
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const isEmpresas = pathname.startsWith("/empresas");
  const audience: "asesores" | "empresas" = isEmpresas ? "empresas" : "asesores";
  const nav = navByAudience[audience];

  return (
    // display:contents → la barra principal toma el <body> como contenedor y se fija en toda la página.
    <header className="contents">
      {/* Banda de urgencia (solo en Empresas) */}
      {isEmpresas && (
        <div className="bg-brand px-4 py-2.5 text-center text-[13px] font-semibold leading-snug text-white">
          {topbar.text}{" "}
          <Link href={topbar.linkHref} className="ml-1 whitespace-nowrap font-extrabold underline">
            {topbar.linkLabel}
          </Link>
        </div>
      )}

      {/* Tabs de audiencia + Iniciar sesión (NO sticky) */}
      <div className="border-b border-line bg-surface">
        <div className="container flex h-10 items-center justify-between">
          <div className="flex items-center gap-5">
            {audiences.map((a) => {
              const active = a.match === "/empresas" ? isEmpresas : !isEmpresas;
              return (
                <Link
                  key={a.href}
                  href={a.href}
                  className={`text-[13px] font-semibold underline-offset-8 transition-colors ${
                    active
                      ? "text-ink underline decoration-brand decoration-2"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {a.label}
                </Link>
              );
            })}
          </div>
          <a
            href={site.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[13px] font-semibold text-ink-muted transition-colors hover:text-ink"
          >
            Iniciar sesión
          </a>
        </div>
      </div>

      {/* Barra principal (sticky) */}
      <div className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
        <div className="container flex h-[62px] items-center justify-between gap-5">
          <div className="flex items-center gap-7">
            <Logo href={isEmpresas ? "/empresas" : "/"} />

            {/* Navegación escritorio (a la izquierda, junto al logo) */}
            <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
              {nav.map((group) =>
                "items" in group ? (
                  <div key={group.label} className="group relative">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-ink-muted hover:bg-surface2 hover:text-ink"
                    >
                      {group.label}
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="absolute left-0 top-full hidden min-w-[220px] pt-2 group-hover:block group-focus-within:block">
                      <div className="rounded-xl border border-line bg-surface p-1.5 shadow-card">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-surface2"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={group.href}
                    href={group.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-muted hover:bg-surface2 hover:text-ink"
                  >
                    {group.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* CTA principal */}
          <div className="flex items-center gap-1.5">
            <Link
              href={ctaHref()}
              className="hidden rounded-xl bg-ink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand lg:inline-flex"
            >
              {ctaLabel()}
            </Link>

            {/* Menú móvil */}
            <MobileMenu audience={audience} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ audience }: { audience: "asesores" | "empresas" }) {
  const nav = navByAudience[audience];
  const flat = nav.flatMap((g) => ("items" in g ? g.items : [g]));

  return (
    <details className="group relative lg:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg text-ink ring-1 ring-line [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Abrir menú</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-line bg-surface p-2 shadow-card">
        {flat.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-surface2"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-1 border-t border-line p-1.5">
          <Link
            href={ctaHref()}
            className="block rounded-xl bg-ink px-4 py-2.5 text-center text-sm font-bold text-white"
          >
            {ctaLabel()}
          </Link>
          <a
            href={site.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block rounded-lg px-3 py-2 text-center text-sm font-semibold text-ink-muted hover:bg-surface2"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </details>
  );
}
