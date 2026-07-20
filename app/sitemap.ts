import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "/",
  "/asesores/procesador-de-facturas",
  "/asesores/conciliacion-bancaria",
  "/asesores/portal-cliente",
  "/asesores/gestor-documental",
  "/asesores/precios",
  "/asesores/registro",
  "/empresas",
  "/empresas/facturacion",
  "/empresas/gastos",
  "/empresas/tesoreria",
  "/empresas/portal-colaborativo",
  "/empresas/verifactu",
  "/empresas/precios",
  "/empresas/registro",
  "/recursos",
  "/blog",
  "/sobre-nosotros",
  "/centro-de-ayuda",
  "/solicita-una-demo",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === "/" ? site.url : `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
