import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

export const colaboracionEmpresas: FeatureLandingData = {
  eyebrow: "Portal colaborativo",
  h1: "Trabaja con tu asesoría en el mismo sitio",
  sub: "Un mismo espacio para organizar con tu asesoría la documentación de tu empresa —modelos, contratos y otros documentos—, al día y sin correos ni carpetas sueltas.",
  hero: {
    invoice: { title: "Espacio compartido", n: "Tú y tu asesoría", badge: "En común", total: { label: "Última subida", amount: "Hoy" } },
    kpis: [
      { lbl: "Documentos", val: "128" },
      { lbl: "Compartidos", val: "100%" },
      { lbl: "Estado", val: "Al día" },
    ],
  },
  benefits: {
    title: "Lo que gana tu empresa trabajando con tu asesoría en Kabilio",
    text: "Un único espacio con tu asesoría: la documentación ordenada, la misma para los dos y nada que reenviar.",
    items: [
      { icon: `<path d="M4 5a2 2 0 0 1 2-2h5l2 3h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>`, h: "Le llega directamente a tu asesoría", p: "Facturas, gastos, cobros: todo lo que haces en Kabilio, tu asesoría lo tiene al instante. Se acabaron los emails con adjuntos a fin de mes." },
      { icon: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>`, h: "Estado real, no solo papeles", p: "Tu asesor no ve solo el PDF: ve si la factura está cobrada, si el gasto está pagado y cómo va tu caja. Contabiliza sin preguntarte." },
      { icon: `<path d="M20 6 9 17l-5-5"/>`, h: "Funciona en los dos sentidos", p: "Tu asesoría también sube lo suyo: impuestos presentados, nóminas, contratos. Lo tienes localizado sin pedirlo por email." },
    ],
  },
  features: [
    {
      k: "Un mismo espacio",
      title: "Tu asesor sabe cómo va cada cosa",
      text: "Las facturas de tus clientes las tiene tu asesoría en cuanto las emites, y sabe cuáles están cobradas y cuáles pendientes. Los gastos, igual: pagados o por pagar. Nadie tiene que preguntar.",
      bullets: [
        { b: "Facturas con su estado", d: "Emitida, cobrada, vencida. Tu asesor lo ve igual que tú, en el momento." },
        { b: "Gastos y caja, a la vista", d: "Subes tus gastos y tu asesoría los tiene al momento, con su estado de pago y su reflejo en la tesorería." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Emites o pagas", small: "" },
          { title: "Kabilio lo registra", small: "con su estado", highlight: true },
          { title: "Tu asesoría", small: "lo ve al momento" },
        ],
      },
    },
    {
      k: "Gestor documental",
      title: "Lo tuyo y lo de tu asesoría, en el mismo archivo",
      text: "Tu asesoría deja en un solo lugar los documentos de tu empresa —modelos, contratos y nóminas— para que los encuentres en segundos, sin que nada se pierda por el camino.",
      bullets: [
        { b: "Encuéntralo en dos clics", d: "Un impuesto, una nómina o un contrato: lo tienes localizado al momento, sin buscar en cadenas de email." },
        { b: "Lo sube tu asesoría", d: "Los modelos presentados, las nóminas o los contratos: tu asesoría los deja en el espacio compartido según los gestiona." },
      ],
      mock: {
        kind: "rows",
        head: "Documentos",
        rows: [
          { label: "Modelo 303 · T4", tag: { text: "Compartido", variant: "ok" } },
          { label: "Contrato de alquiler", tag: { text: "Compartido", variant: "ok" } },
          { label: "Nóminas · enero", tag: { text: "Nuevo", variant: "wait" } },
        ],
      },
    },
    {
      k: "El diferencial de Kabilio",
      title: "Compartir es automático",
      text: "Facturas, subes gastos, cobras. Lo que ya hacías. Compartirlo con tu asesoría no es una tarea más: es automático.",
      bullets: [
        { b: "Preguntas que desaparecen", d: "«¿Me pasas las facturas del trimestre?» «¿Esta ya está cobrada?» «¿Me reenvías ese ticket?» — Tu asesor ya no necesita hacerlas." },
        { b: "Cierres sin sustos", d: "Como tu asesoría trabaja con tus datos al día, no aparece todo en la última semana del trimestre. Menos prisas, menos errores, menos sorpresas." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu empresa", small: "sube documentos" },
          { title: "Kabilio", small: "en común", highlight: true },
          { title: "Tu asesoría", small: "lo ve al día" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Negocios que ya trabajan con su asesoría en Kabilio",
    text: "Autónomos y pymes que comparten su documentación con su gestor, sin correos ni carpetas sueltas.",
    pairs: [
      {
        empresa: { quote: "Tengo toda la documentación en el mismo sitio que mi asesor; se acabaron los emails perdidos y las carpetas sueltas.", name: "Ana Serrano", sub: "Serrano Servicios", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
        asesoria: { quote: "Trabajamos donde está la información; nada se pierde en un correo.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      },
      {
        empresa: { quote: "Subo un documento y mi asesoría lo tiene al instante. Todo en el mismo sitio, sin reenviar nada.", name: "César Beltrán", sub: "Beltrán Comercio", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
        asesoria: { quote: "Sus documentos aparecen al momento en nuestro espacio; dejamos de pedirlos.", name: "Gestoría Duero", sub: "Valladolid", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      },
      {
        empresa: { quote: "Mi gestor y yo vemos exactamente lo mismo, así que trabajar juntos es mucho más rápido.", name: "Eva Márquez", sub: "Estudio Márquez", avatar: "https://randomuser.me/api/portraits/women/50.jpg" },
        asesoria: { quote: "Trabajamos sobre los mismos datos en tiempo real; se acabó el correo y las carpetas compartidas.", name: "Asesoría Contalia", sub: "Sevilla", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
      },
    ],
  },
  faqs: [],
  cta: {
    title: "Trabaja con tu asesoría en Kabilio",
    text: "Centraliza y comparte con tu asesoría la documentación de tu empresa en el mismo sitio, siempre al día. Empieza gratis, sin tarjeta.",
  },
};
