// Configuración global del sitio: marca, navegación y datos de contacto.
// Centraliza aquí lo que se repite en varias páginas.

export const site = {
  name: "Kabilio",
  // URL de producción. Se usa para canonical y Open Graph.
  url: "https://www.kabilio.ai",
  tagline: "Contabilidad colaborativa con IA para asesorías y gestorías",
  description:
    "Kabilio automatiza la conciliación bancaria y el procesamiento de facturas con IA para que asesorías y gestorías en España trabajen más rápido y con menos errores.",
  ogImage: "/og-image.png",
  phone: "+34 932 20 27 35",
  address: "Numància 164-168, planta 4 · 08029 Barcelona",
  loginUrl: "https://app.kabilio.ai/",
  social: {
    linkedin: "https://www.linkedin.com/company/kabilio",
    youtube: "https://www.youtube.com/@Kabilio",
    helpCenter: "https://help.kabilio.es/",
  },
} as const;

// Banda de urgencia superior.
// Banda de urgencia (solo se muestra en el segmento Empresas).
export const topbar = {
  text: "Verifactu ya está en marcha: factura conforme a la Ley Antifraude desde el primer día.",
  linkLabel: "Cómo te ayuda Kabilio →",
  linkHref: "/empresas/verifactu",
} as const;

export const primaryCta = {
  label: "Pedir demo",
  href: "/solicita-una-demo",
} as const;

// Selector de audiencia (tabs bajo el topbar).
export const audiences: { label: string; href: string; match: string }[] = [
  { label: "Asesorías", href: "/", match: "/asesores" },
  { label: "Empresas", href: "/empresas", match: "/empresas" },
];

// Navegación principal, sensible a la audiencia (asesorías vs empresas).
type NavGroup =
  | { label: string; href: string }
  | { label: string; items: { label: string; href: string; external?: boolean }[] };

export const navByAudience: Record<"asesores" | "empresas", NavGroup[]> = {
  asesores: [
    {
      label: "Funcionalidades",
      items: [
        { label: "Procesador", href: "/asesores/procesador-de-facturas" },
        { label: "Conciliador", href: "/asesores/conciliacion-bancaria" },
        { label: "Portal del cliente", href: "/asesores/portal-cliente" },
        { label: "Gestor documental", href: "/asesores/gestor-documental" },
      ],
    },
    { label: "Precios", href: "/asesores/precios" },
    {
      label: "Recursos",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Centro de ayuda", href: "/centro-de-ayuda" },
      ],
    },
  ],
  empresas: [
    {
      label: "Funcionalidades",
      items: [
        { label: "Facturación", href: "/empresas/facturacion" },
        { label: "Gastos", href: "/empresas/gastos" },
        { label: "Tesorería", href: "/empresas/tesoreria" },
        { label: "Portal colaborativo", href: "/empresas/portal-colaborativo" },
      ],
    },
    { label: "Verifactu", href: "/empresas/verifactu" },
    { label: "Precios", href: "/empresas/precios" },
    {
      label: "Recursos",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Centro de ayuda", href: "/centro-de-ayuda" },
      ],
    },
  ],
};

export const footerNav: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Para asesores",
    links: [
      { label: "Kabilio para asesorías", href: "/" },
      { label: "Procesador", href: "/asesores/procesador-de-facturas" },
      { label: "Conciliador", href: "/asesores/conciliacion-bancaria" },
      { label: "Portal del cliente", href: "/asesores/portal-cliente" },
      { label: "Gestor documental", href: "/asesores/gestor-documental" },
      { label: "Precios asesorías", href: "/asesores/precios" },
    ],
  },
  {
    title: "Empresas",
    links: [
      { label: "Kabilio para pymes", href: "/empresas" },
      { label: "Facturación", href: "/empresas/facturacion" },
      { label: "Gastos", href: "/empresas/gastos" },
      { label: "Tesorería", href: "/empresas/tesoreria" },
      { label: "Portal colaborativo", href: "/empresas/portal-colaborativo" },
      { label: "Verifactu", href: "/empresas/verifactu" },
      { label: "Precios pymes", href: "/empresas/precios" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Sobre nosotros", href: "/sobre-nosotros" },
      { label: "Blog", href: "/blog" },
      { label: "Centro de ayuda", href: "https://help.kabilio.es/", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@Kabilio", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/kabilio", external: true },
    ],
  },
];

export const legalLinks: { label: string; href: string }[] = [
  { label: "Política SGSI", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Aviso legal", href: "#" },
  { label: "Condiciones de venta", href: "#" },
];
