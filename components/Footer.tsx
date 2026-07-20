import Link from "next/link";
import { Logo } from "./Logo";
import { site, footerNav, legalLinks } from "@/content/site";

const FOOTER_IMG =
  "https://framerusercontent.com/images/dfwByEfbAf7vw1QakCS9hsw9gM.jpg?scale-down-to=512&width=1085&height=100";

// Footer oscuro (estilo kabilio.ai).
export function Footer() {
  return (
    <footer className="mt-11 bg-ink text-white/70">
      <div className="container py-14">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Marca + contacto */}
          <div>
            <Logo dark />
            <div className="mt-3.5 space-y-1 text-[13.5px] leading-relaxed text-white/60">
              <p>Automatización pre-contable con IA, conectada con tus clientes.</p>
              <p>
                <Link href="/contacto" className="hover:text-white">
                  Contáctanos
                </Link>
              </p>
              <p>{site.address}</p>
              <p>{site.phone}</p>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-white">
                {col.title}
              </h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Imagen de marca del footer */}
        <div className="mt-12 border-t border-white/10 pt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={FOOTER_IMG} alt="Kabilio" className="h-7 w-auto opacity-90" loading="lazy" />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3.5 border-t border-white/10 pt-6 text-[12.5px] text-white/60">
          <span>2025 - Copyright @kabilio</span>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
