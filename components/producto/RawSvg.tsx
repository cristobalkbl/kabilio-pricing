// Renderiza un SVG estático (procedente de los mockups) de forma segura.
// Contenido de confianza y sin entrada de usuario.
export function RawSvg({ html, className = "" }: { html: string; className?: string }) {
  return (
    <div
      className={`[&_svg]:block [&_svg]:h-auto [&_svg]:w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
