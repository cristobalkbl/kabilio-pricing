"use client";

import { usePathname } from "next/navigation";

// Rutas "desnudas": se muestran sin cabecera ni pie (p.ej. alta / demo).
const BARE_ROUTES = ["/empresas/registro", "/asesores/registro"];

export function ChromeGate({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const bare = BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));

  if (bare) return <main className="flex-1">{children}</main>;

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
