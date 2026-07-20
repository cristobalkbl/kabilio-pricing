import type { Metadata } from "next";
import { site } from "@/content/site";

type PageSeo = {
  title: string;
  description: string;
  /** Ruta relativa de la página, p.ej. "/asesores/precios". Usa "/" para la home. */
  path: string;
  /** Ruta de la imagen OG. Si se omite, usa la imagen por defecto del sitio. */
  ogImage?: string;
};

/**
 * Genera el objeto Metadata de una página con:
 * - title con plantilla de marca
 * - canonical automático a partir de `path`
 * - Open Graph y Twitter Card con imagen
 */
export function buildMetadata({ title, description, path, ogImage }: PageSeo): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;
  const image = ogImage ?? site.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
