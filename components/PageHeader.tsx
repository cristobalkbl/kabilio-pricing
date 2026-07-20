// Cabecera para páginas informativas (emite el H1 de la página).
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-line bg-surface2">
      <div className="container py-16 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
          )}
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-5 text-lg text-ink-soft">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
