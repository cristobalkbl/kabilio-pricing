import Link from "next/link";

type Variant = "primary" | "ghost" | "light" | "outline";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  // Primario: negro tinta, hover morado (estilo del mockup).
  primary: "bg-ink text-white hover:bg-brand",
  // Secundario claro sobre fondo claro.
  ghost: "bg-surface text-ink ring-1 ring-line hover:bg-surface2",
  // Para fondos oscuros: blanco con texto morado.
  light: "bg-white text-brand hover:bg-brand-200",
  // Contorno sobre fondo oscuro.
  outline: "border border-white/40 text-white hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", className = "", external }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
