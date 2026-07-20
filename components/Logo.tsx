import Link from "next/link";
import { site } from "@/content/site";

// Logo real de Kabilio (PNG recortado, fondo transparente).
// `dark` lo pone en blanco (footer) mediante filtro CSS.
export function Logo({
  className = "",
  href = "/",
  dark = false,
}: {
  className?: string;
  href?: string;
  dark?: boolean;
}) {
  return (
    <Link href={href} className={`inline-flex items-center ${className}`} aria-label={`${site.name} — inicio`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/kabilio-logo.png"
        alt="Kabilio"
        className={`h-7 w-auto ${dark ? "[filter:brightness(0)_invert(1)]" : ""}`}
      />
    </Link>
  );
}
