import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

export const verifactuEmpresas: FeatureLandingData = {
  eyebrow: "Verifactu",
  h1: "Cumple con Verifactu sin complicarte",
  sub: "La Ley Antifraude obliga a que tus facturas sean verificables e inalterables. Con Kabilio ya estás preparado: emites facturas conformes y con envío automático a la AEAT desde el primer día.",
  hero: {
    invoice: { title: "Factura electrónica", n: "Sello Verifactu · válida ante la AEAT", badge: "Conforme", total: { label: "Enviada a la AEAT", amount: "Al instante" } },
    kpis: [
      { lbl: "Registro", val: "Inalterable" },
      { lbl: "Envío AEAT", val: "Automático" },
      { lbl: "Normativa", val: "Al día" },
    ],
  },
  benefits: {
    title: "Qué significa Verifactu para tu empresa",
    text: "La Ley Antifraude cambia cómo se emiten las facturas. Con Kabilio no tienes que preocuparte por nada.",
    items: [
      { icon: `<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>`, h: "Facturas conformes", p: "Cada factura cumple los requisitos de los sistemas de facturación verificable." },
      { icon: `<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M9 3v4M15 3v4M4 11h16"/>`, h: "Preparado para las fechas", p: "Enero 2027 empresas, julio 2027 autónomos. Con Kabilio ya cumples hoy." },
      { icon: `<path d="M20 6 9 17l-5-5"/>`, h: "Sin cambiar tu forma de trabajar", p: "Sigues facturando igual de fácil; el cumplimiento sucede por debajo." },
    ],
  },
  featuresHeading: { title: "Funcionalidades", text: "Todo lo que necesitas para cumplir la Ley Antifraude, sin esfuerzo." },
  features: [
    {
      k: "Facturas conformes",
      title: "Facturas verificables desde el primer día",
      text: "Kabilio genera facturas que cumplen los requisitos de Verifactu, con su código y QR verificables, listas para cualquier cliente o inspección.",
      bullets: [
        { b: "Código y QR verificables", d: "Tus facturas incluyen la información necesaria para verificarse conforme a la normativa." },
        { b: "Formato electrónico conforme", d: "Emitidas según los requisitos de la Ley Antifraude." },
      ],
      mock: { kind: "verifactu", title: "Factura electrónica", sub: "Sello Verifactu · válida ante la AEAT", badge: "Conforme" },
    },
    {
      k: "Registro inalterable",
      title: "Registro íntegro y con trazabilidad",
      text: "Cada factura se registra con su huella digital y encadenamiento, de forma que no se puede modificar sin dejar rastro. Listo para cualquier revisión.",
      bullets: [
        { b: "Huella y encadenamiento", d: "Cada factura queda sellada e inalterable." },
        { b: "Trazabilidad completa", d: "Todo el historial disponible para una inspección." },
      ],
      mock: {
        kind: "rows",
        head: "F-2026-0142 · Registro",
        rows: [
          { label: "Emitida", right: "12 ene · 09:14" },
          { label: "Huella (hash)", tag: { text: "Sellada", variant: "ok" } },
          { label: "Enviada a la AEAT", tag: { text: "OK", variant: "ok" } },
        ],
      },
    },
    {
      k: "Envío a la AEAT",
      title: "Envío automático, sin gestiones",
      text: "Lo que facturas se envía a Hacienda automáticamente conforme a Verifactu. Tú no tienes que hacer nada; nosotros nos ocupamos del cumplimiento.",
      bullets: [
        { b: "Automático", d: "Sin exportar ni subir nada a mano." },
        { b: "Siempre al día", d: "Actualizamos Kabilio con cada cambio normativo." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu empresa", small: "factura" },
          { title: "Kabilio", small: "conforme", highlight: true },
          { title: "AEAT", small: "recibida" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Negocios que ya cumplen con Verifactu",
    text: "Autónomos y pymes que facturan en regla sin dedicarle tiempo.",
    pairs: [
      {
        empresa: { quote: "Lo de Verifactu me preocupaba mucho. Kabilio me lo ha dejado resuelto sin tener que estudiarme la ley.", name: "David Herrero", sub: "Talleres Herrero", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
        asesoria: { quote: "Sus facturas llegan conformes y con envío a la AEAT; cero incidencias por nuestra parte.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      },
      {
        empresa: { quote: "Facturo igual que siempre y todo llega conforme a Hacienda. Cero quebraderos de cabeza.", name: "Nuria Sanz", sub: "Flora & Co.", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
        asesoria: { quote: "Todo queda registrado e inalterable; una inspección sería un simple trámite.", name: "Gestoría Sur", sub: "Málaga", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
      },
      {
        empresa: { quote: "Me quité de encima el miedo a la inspección: todo queda registrado e inalterable.", name: "Lucía Vega", sub: "Estudio Vega", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
        asesoria: { quote: "Cumplimiento garantizado sin que el cliente tenga que hacer nada distinto.", name: "Asesoría Contalia", sub: "Sevilla", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
      },
    ],
  },
  faqs: [
    { q: "¿Qué es Verifactu?", a: "Es el sistema de facturación verificable que exige la Ley Antifraude: las facturas deben ser inalterables, trazables y verificables por Hacienda." },
    { q: "¿Cuándo es obligatorio?", a: "En enero de 2027 para empresas y en julio de 2027 para autónomos. Con Kabilio ya emites conforme hoy." },
    { q: "¿Tengo que cambiar mi forma de facturar?", a: "No. Sigues facturando igual de fácil en Kabilio; el cumplimiento de Verifactu sucede de forma transparente." },
    { q: "¿Mis facturas se envían solas a la AEAT?", a: "Sí. Kabilio envía la información conforme a Verifactu automáticamente, sin gestiones por tu parte." },
    { q: "¿Es seguro?", a: "Sí. Ciframos los datos y cumplimos con el RGPD y la norma ISO 27001." },
  ],
  cta: {
    title: "Ponte al día con Verifactu hoy",
    text: "Emite facturas conformes, inalterables y con envío automático a la AEAT. Empieza gratis, sin tarjeta.",
  },
};
