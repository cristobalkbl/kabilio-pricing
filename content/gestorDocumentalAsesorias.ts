import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

const ASESOR_CTAS = {
  heroPrimary: { label: "Pedir demo", href: "/solicita-una-demo" },
  heroSecondary: { label: "Ver funcionalidades", href: "#features" },
  ctaPrimary: { label: "Pedir demo", href: "/solicita-una-demo" },
  ctaSecondary: { label: "Habla con nuestro equipo", href: "/contacto" },
};

const PLATAFORMA = [
  { title: "Procesador", text: "La IA contabiliza las facturas de tus clientes, mucho más que un OCR.", href: "/asesores/procesador-de-facturas", icon: `<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>` },
  { title: "Conciliador", text: "Concilia los movimientos bancarios con IA y reglas avanzadas.", href: "/asesores/conciliacion-bancaria", icon: `<path d="M3 21h18M4 10h16M5 10l7-6 7 6M6 10v8M10 10v8M14 10v8M18 10v8"/>` },
  { title: "Portal del cliente", text: "Tus clientes facturan, suben gastos y colaboran contigo en el mismo sitio.", href: "/asesores/portal-cliente", icon: `<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16 20a5 5 0 0 1 6-4.6"/>` },
];

export const gestorDocumental: FeatureLandingData = {
  eyebrow: "Gestor documental",
  h1: "Toda la documentación de tus clientes, en un solo sitio",
  sub: "Digitaliza y organiza las facturas y documentos de tu cartera. Encuéntralo todo en segundos, tenlo listo para cualquier inspección y olvídate del papel.",
  ctas: ASESOR_CTAS,
  hero: {
    card: {
      kind: "search",
      query: "Buscar factura, proveedor o cliente…",
      chips: [{ label: "Este trimestre", on: true }, { label: "Recibidas" }, { label: "Proveedor" }],
      rows: [
        { label: "Factura · Suministros Sur", tag: { text: "PDF", variant: "ok" } },
        { label: "Ticket · Combustible", tag: { text: "PDF", variant: "ok" } },
        { label: "Factura · Servicios Lux", tag: { text: "PDF", variant: "ok" } },
      ],
    },
    kpis: [
      { lbl: "Documentos", val: "12.480" },
      { lbl: "Búsqueda", val: "2 s" },
      { lbl: "Papel", val: "Cero" },
    ],
  },
  trustText: "Despachos de toda España guardan su documentación en Kabilio",
  logos: ["Castellá", "Deal Tax", "Martínez Comín", "Nexo", "Audalia", "Gesfor"],
  benefits: {
    title: "Del caos del papel a una gestión 100% digital",
    text: "Un gestor documental que centraliza, ordena y protege la documentación de tu despacho y tus clientes.",
    items: [
      { icon: `<path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M12 3v11"/><path d="M8 7l4-4 4 4"/>`, h: "Adiós al papel", p: "Toda la documentación digital y en la nube, sin archivadores ni carpetas por email." },
      { icon: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>`, h: "Encuentra lo que buscas", p: "Buscador y filtros para llegar a cualquier documento en segundos." },
      { icon: `<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>`, h: "Listo para Hacienda", p: "Exportable y con el documento original a un clic para cualquier revisión." },
    ],
  },
  featuresHeading: { title: "Funcionalidades", text: "Todo lo que necesitas para gestionar la documentación de tu cartera." },
  features: [
    {
      k: "Centralización",
      title: "Toda la documentación, en un solo sitio",
      text: "Facturas, tickets y documentos de todos tus clientes, digitalizados y organizados en la nube. Se acabaron los archivadores y los adjuntos perdidos.",
      bullets: [
        { b: "Sin papel", d: "Todo digital y en la nube, accesible desde cualquier dispositivo." },
        { b: "Organizado por cliente", d: "Cada documento en su sitio y asociado a su cliente." },
      ],
      mock: {
        kind: "rows",
        head: "Documentación · Cliente Demo S.L.",
        rows: [
          { label: "Facturas recibidas", right: "248" },
          { label: "Facturas emitidas", right: "142" },
          { label: "Tickets y otros", right: "96" },
        ],
      },
    },
    {
      k: "Búsqueda",
      title: "Encuentra cualquier documento en segundos",
      text: "Un buscador potente y filtros por fecha, tipo, cliente o proveedor para llegar a lo que necesitas sin perder tiempo.",
      bullets: [
        { b: "Filtros a tu medida", d: "Por fecha, tipo de documento, cliente o proveedor." },
        { b: "El original, a un clic", d: "Cada documento con su PDF, listo para consultar o descargar." },
      ],
      mock: {
        kind: "search",
        query: "“Suministros · marzo”",
        chips: [{ label: "Marzo", on: true }, { label: "Recibidas", on: true }, { label: "Proveedor" }],
        rows: [
          { label: "Factura · Suministros Sur", tag: { text: "PDF", variant: "ok" } },
          { label: "Factura · Suministros Norte", tag: { text: "PDF", variant: "ok" } },
        ],
      },
    },
    {
      k: "Colaboración y seguridad",
      title: "Lo que sube tu cliente, aquí al instante",
      text: "Tus clientes suben sus documentos desde su portal y aparecen en tu gestor al momento. Con permisos por usuario y todos los datos protegidos.",
      bullets: [
        { b: "Llega solo", d: "Lo que sube el cliente aparece en tu gestor, sin reenvíos." },
        { b: "Acceso con control", d: "Datos cifrados y permisos por usuario. Cumplimiento RGPD e ISO 27001." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu cliente", small: "sube documentos" },
          { title: "Kabilio", small: "los organiza", highlight: true },
          { title: "Tu despacho", small: "los tiene al día" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Despachos que dijeron adiós al papel",
    text: "Asesorías con toda su documentación centralizada, buscable y lista para inspecciones.",
    items: [
      { initials: "MC", quote: "“Tengo todas las facturas de mis clientes en un sitio; buscar un documento son dos segundos, no media mañana.”", name: "Socia", role: "Asesoría · Barcelona" },
      { initials: "GG", quote: "“Se acabaron los archivadores y los correos con adjuntos. Todo está en Kabilio, ordenado por cliente.”", name: "CEO", role: "Despacho contable · Valencia" },
      { initials: "AM", quote: "“Para una inspección exporto el listado con los originales enlazados y lo entrego. Sin estrés.”", name: "CEO", role: "Asesoría · Madrid" },
    ],
  },
  faqs: [
    { q: "¿Qué documentos puedo gestionar?", a: "Facturas emitidas y recibidas, tickets de gasto y otros documentos, organizados por cliente y asociados a su proveedor o cliente para consultarlos fácilmente." },
    { q: "¿Cómo encuentro un documento?", a: "Con un buscador y filtros por fecha, tipo, cliente o proveedor. Cada documento conserva su PDF original, listo para consultar o descargar." },
    { q: "¿Sirve para inspecciones o auditorías?", a: "Sí. Exportas listados ordenados a Excel con enlace directo a cada documento original, listos para presentar ante Hacienda o terceros." },
    { q: "¿Mis clientes pueden subir documentos?", a: "Sí. Los suben desde su portal y aparecen en tu gestor al instante, sin que tengas que pedirlos ni reenviarlos." },
    { q: "¿Necesito instalar algo?", a: "No. Kabilio está en la nube; accedes a toda la documentación desde el ordenador, la tablet o el móvil." },
    { q: "¿Es seguro?", a: "Sí. Los datos se guardan cifrados en la nube, con permisos por usuario y cumpliendo el RGPD y la norma ISO 27001." },
  ],
  cta: {
    title: "Digitaliza la documentación de tu despacho",
    text: "Centraliza las facturas y documentos de tus clientes, encuéntralo todo en segundos y olvídate del papel. Te lo enseñamos en una demo.",
  },
  allFeaturesHeading: { title: "Toda la plataforma para tu despacho", text: "El gestor documental, junto al resto de la precontabilidad automatizada con IA." },
  allFeatures: PLATAFORMA,
};
