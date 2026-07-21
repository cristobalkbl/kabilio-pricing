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
];

export const portalCliente: FeatureLandingData = {
  eyebrow: "Suite del cliente",
  h1: "La suite de tus clientes, conectada con tu despacho",
  sub: "Tus clientes facturan, suben sus gastos y consultan su información financiera desde un mismo sitio. Tú recibes todo contabilizado al instante, sin perseguir documentos ni reenvíos.",
  ctas: ASESOR_CTAS,
  hero: {
    invoice: { title: "Suite del cliente", n: "Cliente Demo S.L.", badge: "Conectado", total: { label: "Llega a tu contabilidad", amount: "Al instante" } },
    kpis: [
      { lbl: "Facturas del cliente", val: "142" },
      { lbl: "Gastos subidos", val: "88" },
      { lbl: "Estado", val: "Al día" },
    ],
  },
  trustText: "Despachos de toda España trabajan con sus clientes en Kabilio",
  logos: ["Castellá", "Deal Tax", "Martínez Comín", "Nexo", "Audalia", "Gesfor"],
  benefits: {
    title: "Lo que gana tu despacho",
    text: "La suite facilita el día a día a tus clientes y te devuelve tiempo a ti.",
    items: [
      { icon: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`, h: "Colaboración sin fricción", p: "Toda la información de tus clientes en una sola suite, sin emails ni carpetas sueltas." },
      { icon: `<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>`, h: "Todo llega al instante", p: "Lo que tus clientes facturan y gastan entra contabilizado a tu despacho, sin reenvíos." },
      { icon: `<path d="M20 6 9 17l-5-5"/>`, h: "Menos trabajo manual", p: "Tu equipo revisa y asesora; deja de perseguir documentos a fin de mes." },
    ],
  },
  featuresHeading: { title: "Funcionalidades", text: "Todo lo que tu cliente hace desde su suite, y que a ti te llega listo." },
  features: [
    {
      k: "Facturación para tus clientes",
      title: "Tus clientes facturan; a ti te llega contabilizado",
      text: "Ofréceles un facturador sencillo y conforme a Verifactu. Lo que emiten entra directo a tu contabilidad, sin que tengas que perseguir ni revisar factura a factura.",
      bullets: [
        { b: "Facturas correctas desde el origen", d: "Tus clientes emiten conforme a Verifactu, así te llegan listas y no tienes que corregirlas." },
        { b: "Facturas recurrentes", d: "Las que se repiten cada periodo se emiten y se envían solas, sin retrasos en el cobro." },
      ],
      mock: {
        kind: "rows",
        head: "Facturas del cliente",
        rows: [
          { label: "F-2026-041 · 2.450 €", tag: { text: "Contabilizada", variant: "ok" } },
          { label: "F-2026-040 · 890 €", tag: { text: "Contabilizada", variant: "ok" } },
          { label: "F-2026-039 · 1.240 €", tag: { text: "Por revisar", variant: "wait" } },
        ],
      },
    },
    {
      k: "Gastos",
      title: "Que suban sus gastos y tú los recibas listos",
      text: "Tus clientes suben tickets y facturas de gasto desde su suite, y la IA de Kabilio extrae los datos. Tú solo revisas y contabilizas, sin teclear.",
      bullets: [
        { b: "Suben el gasto y listo", d: "El ticket o la factura, por email o desde el portal." },
        { b: "La IA lee los datos por ellos", d: "Importe, IVA y proveedor se extraen automáticamente; tú solo revisas." },
        { b: "Listo para cualquier revisión", d: "Los gastos quedan organizados y disponibles al momento." },
      ],
      mock: {
        kind: "rows",
        head: "Gastos recibidos",
        rows: [
          { avatar: "TK", label: "Ticket · Suministros", tag: { text: "Procesado", variant: "ok" } },
          { avatar: "FC", label: "Factura · Proveedor Sur", tag: { text: "Procesado", variant: "ok" } },
          { avatar: "TK", label: "Ticket · Combustible", tag: { text: "Nuevo", variant: "wait" } },
        ],
      },
    },
    {
      k: "Información financiera",
      title: "Tu cliente ve su negocio claro, tú asesoras mejor",
      text: "El cliente consulta sus ingresos, gastos e IVA estimado en su suite. Menos preguntas repetidas para tu equipo y conversaciones de más valor.",
      bullets: [
        { b: "Ve cómo va su negocio", d: "Sus ventas, sus gastos y su evolución, de un vistazo." },
        { b: "Cobros pendientes", d: "Qué facturas están por cobrar y cuáles vencidas." },
        { b: "IVA estimado", d: "Cuánto le tocará pagar o cobrar este trimestre." },
      ],
      mock: {
        kind: "rows",
        head: "Resumen del cliente",
        rows: [
          { label: "Ingresos", right: "18.420 €" },
          { label: "Gastos", right: "11.900 €" },
          { label: "IVA estimado", right: "1.240 €" },
        ],
      },
    },
    {
      k: "Gestor documental",
      title: "Toda la documentación de tus clientes, centralizada",
      text: "Declaraciones, requerimientos, expedientes, documentación mercantil y cualquier otro documento de tus clientes, organizados en la nube. Se acabaron los archivadores y los adjuntos perdidos.",
      bullets: [
        { b: "Todo tipo de documento", d: "Declaraciones, requerimientos, expedientes, documentación mercantil y más." },
        { b: "Organizado por cliente", d: "Cada documento en su sitio y asociado a su cliente." },
        { b: "Encuéntralo en segundos", d: "Buscador general y filtros por fecha de creación, usuario y tipo de documento." },
      ],
      mock: {
        kind: "rows",
        head: "Documentación · Cliente Demo S.L.",
        rows: [
          { label: "Declaraciones", right: "48" },
          { label: "Requerimientos", right: "12" },
          { label: "Expedientes y otros", right: "96" },
        ],
      },
    },
    {
      k: "El diferencial de Kabilio",
      title: "Tu cliente y tú, en el mismo espacio",
      text: "El cliente entra al mismo entorno que ya usa tu despacho. Documentos, comunicación y datos en un solo sitio, sin sistemas paralelos ni correos de fin de mes.",
      bullets: [
        { b: "Un único entorno", d: "Tu cliente entra al mismo Kabilio que ya usa tu despacho, sin instalar nada." },
        { b: "Comunicación y documentos", d: "Todo junto, sin perseguir papeles por email." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu cliente", small: "factura y sube gastos" },
          { title: "Kabilio", small: "en común", highlight: true },
          { title: "Tu despacho", small: "lo recibe al día" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Despachos que ya dan su suite a sus clientes",
    text: "Asesorías que reciben la información al instante y dejan de perseguir documentos.",
    items: [
      { initials: "MC", quote: "“Mis clientes facturan y suben gastos en Kabilio; a mí me llega todo contabilizado, sin perseguir nada a fin de mes.”", name: "Socia", role: "Asesoría · Barcelona" },
      { initials: "GG", quote: "“Tener a los clientes en la misma plataforma nos ha quitado los emails y las carpetas compartidas.”", name: "CEO", role: "Despacho contable · Valencia" },
      { initials: "AM", quote: "“El cliente consulta su información solo, así dedicamos el tiempo a asesorar y no a responder lo mismo.”", name: "CEO", role: "Asesoría · Madrid" },
    ],
  },
  faqs: [
    { q: "¿Mi cliente tiene que cambiar de sistema?", a: "No. Tu cliente entra al mismo entorno que ya usa tu despacho; no instala nada nuevo ni aprende otra herramienta." },
    { q: "¿Qué puede hacer el cliente en su suite?", a: "Emitir facturas conforme a Verifactu, subir sus gastos y consultar su información financiera. Tú decides qué acceso le das." },
    { q: "¿Lo que hace el cliente me llega automáticamente?", a: "Sí. Cada factura y cada gasto entra a tu contabilidad al instante, sin que tengas que pedir ni reenviar nada." },
    { q: "¿Las facturas de mis clientes cumplen Verifactu?", a: "Sí. Se emiten conforme a Verifactu y con envío automático a la AEAT." },
    { q: "¿Puedo dar acceso solo a algunos clientes?", a: "Sí. Habilitas la suite a los clientes que quieras y con el alcance que decidas." },
    { q: "¿Es seguro para mis datos y los de mis clientes?", a: "Sí. Ciframos los datos y cumplimos con el RGPD y la norma ISO 27001." },
  ],
  cta: {
    title: "Da a tus clientes su suite en Kabilio",
    text: "Tus clientes gestionan su día a día y tú recibes su información contable al instante, en el mismo sitio donde ya trabajas. Te lo enseñamos en una demo.",
  },
  allFeaturesHeading: { title: "Toda la plataforma para tu despacho", text: "La suite del cliente, junto al resto de la precontabilidad automatizada con IA." },
  allFeatures: PLATAFORMA,
};
