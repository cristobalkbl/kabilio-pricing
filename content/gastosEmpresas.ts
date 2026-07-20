import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

export const gastosEmpresas: FeatureLandingData = {
  eyebrow: "Gastos",
  h1: "Registra los gastos de tu empresa sin teclear",
  sub: "Sube tus facturas de gasto por email o archivo y la IA extrae los datos por ti. Sin límite, sin duplicados y con tu asesoría al día.",
  hero: {
    card: {
      kind: "rows",
      head: "Gastos · Facturas recibidas",
      rows: [
        { avatar: "SS", label: "Suministros Sur", right: "578,00 €" },
        { avatar: "SL", label: "Servicios Lux", right: "1.240,00 €" },
        { avatar: "CB", label: "Combustible", right: "92,40 €" },
      ],
    },
    kpis: [
      { lbl: "Gastos este mes", val: "88" },
      { lbl: "Extraído con IA", val: "100%" },
      { lbl: "Tecleado a mano", val: "0" },
    ],
  },
  trustText: "Miles de negocios registran sus gastos con Kabilio",
  logos: ["Nordia", "Cafeto", "Volara", "Mendia", "Talleres Sur", "Lumio"],
  benefits: {
    title: "Del ticket a tu contabilidad, sin teclear",
    text: "Kabilio captura, lee y ordena tus gastos —y los deja al día para tu asesoría.",
    items: [
      { icon: `<path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M12 3v11"/><path d="M8 7l4-4 4 4"/>`, h: "Sin teclear", p: "La IA extrae los datos de cada gasto por ti; tú solo revisas." },
      { icon: `<path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3z"/>`, h: "Sin límite", p: "Procesa todos los gastos que necesites, incluido en tu plan." },
      { icon: `<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>`, h: "Todo a tu asesoría", p: "Cada gasto llega contabilizado a tu asesor, sin reenvíos." },
    ],
  },
  featuresHeading: { title: "Funcionalidades", text: "Todo lo que hace Kabilio con las facturas de gasto de tu empresa." },
  features: [
    {
      k: "Captura",
      title: "Sube el gasto y olvídate del papel",
      text: "Manda tus facturas y tickets de gasto por email o súbelos al portal. Nada de registrar a mano y sin límite de documentos.",
      bullets: [
        { b: "Por email o archivo", d: "Reenvía la factura a tu buzón de Kabilio o sube el archivo." },
        { b: "Sin límite", d: "Procesa todos los gastos que necesites, sin topes." },
      ],
      mock: {
        kind: "rows",
        head: "Gastos recibidos",
        rows: [
          { avatar: "@", label: "Por email", tag: { text: "Procesado", variant: "ok" } },
          { avatar: "↑", label: "Archivo subido", tag: { text: "Procesado", variant: "ok" } },
          { avatar: "@", label: "Por email", tag: { text: "Nuevo", variant: "wait" } },
        ],
      },
    },
    {
      k: "Inteligencia artificial",
      title: "La IA lee cada gasto por ti",
      text: "Kabilio reconoce el importe, el IVA y el proveedor de cada documento. Tú solo revisas y validas antes de dar nada por bueno.",
      bullets: [
        { b: "Datos extraídos automáticamente", d: "Importe, IVA y proveedor, sin teclear." },
        { b: "Tú tienes el control", d: "Revisas y validas cada gasto cuando quieras." },
      ],
      mock: {
        kind: "rows",
        head: "Suministros Sur · gasto",
        rows: [
          { label: "Importe", right: "578,00 €" },
          { label: "IVA (21%)", right: "121,38 €" },
          { label: "Proveedor", tag: { text: "Detectado", variant: "ok" } },
        ],
      },
    },
    {
      k: "Orden",
      title: "Tus gastos, ordenados y sin duplicados",
      text: "Cada gasto queda clasificado y disponible al momento. Kabilio detecta duplicados para que no cuentes dos veces lo mismo.",
      bullets: [
        { b: "Detección de duplicados", d: "Si un gasto ya está subido, Kabilio te avisa." },
        { b: "Todo localizable", d: "Encuentra cualquier gasto por fecha o proveedor." },
      ],
      mock: {
        kind: "rows",
        head: "Control de gastos",
        rows: [
          { label: "Servicios Lux · 1.240 €", tag: { text: "Registrado", variant: "ok" } },
          { label: "Servicios Lux · 1.240 €", tag: { text: "Duplicado", variant: "due" } },
          { label: "Combustible · 92,40 €", tag: { text: "Registrado", variant: "ok" } },
        ],
      },
    },
    {
      k: "El diferencial de Kabilio",
      title: "Cada gasto, en tu asesoría al instante",
      text: "Lo que subes llega a tu asesoría contabilizado, en tiempo real. Se acabó acumular tickets y facturas para el cierre.",
      bullets: [
        { b: "Llega solo", d: "Tu asesoría recibe el gasto en cuanto lo subes." },
        { b: "Sin fin de mes", d: "Nada de juntar papeles para enviarlos al cierre." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tú", small: "subes el gasto" },
          { title: "Kabilio", small: "lo lee y ordena", highlight: true },
          { title: "Tu asesoría", small: "lo recibe" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Negocios que ya no teclean sus gastos",
    text: "Autónomos y pymes que suben la factura y dejan que la IA haga el resto.",
    pairs: [
      {
        empresa: { quote: "Reenvío las facturas de gasto por email y aparecen listas. Dejé de teclear tickets uno a uno.", name: "Rubén Ortega", sub: "Ortega Servicios", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
        asesoria: { quote: "Sus gastos nos llegan leídos y contabilizados; ya no perseguimos tickets a fin de mes.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
      },
      {
        empresa: { quote: "Subo el gasto y mi asesoría lo tiene al momento, sin esperar al cierre del trimestre.", name: "Beatriz Cano", sub: "Cano Comercio", avatar: "https://randomuser.me/api/portraits/women/57.jpg" },
        asesoria: { quote: "Recibimos cada gasto al instante; el cierre deja de acumularse.", name: "Gestoría Sur", sub: "Málaga", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
      },
      {
        empresa: { quote: "Kabilio me avisa si un gasto está duplicado; se acabaron los errores tontos.", name: "Marc Soler", sub: "Estudio Soler", avatar: "https://randomuser.me/api/portraits/men/36.jpg" },
        asesoria: { quote: "Nos llegan sin duplicados; menos correcciones por nuestra parte.", name: "Asesoría Contalia", sub: "Sevilla", avatar: "https://randomuser.me/api/portraits/women/50.jpg" },
      },
    ],
  },
  faqs: [
    { q: "¿Cómo subo mis gastos?", a: "Reenvía la factura a tu buzón de Kabilio o sube el archivo (PDF o imagen) al portal. Kabilio lo procesa automáticamente." },
    { q: "¿Hay límite de gastos?", a: "No. El procesado de gastos es ilimitado y está incluido en tu plan." },
    { q: "¿Qué datos extrae la IA?", a: "Reconoce el importe, el IVA y el proveedor de cada documento. Tú revisas y validas antes de contabilizar." },
    { q: "¿Detecta gastos duplicados?", a: "Sí. Si un gasto ya está subido, Kabilio te avisa para que no lo registres dos veces." },
    { q: "¿Mis gastos llegan a mi asesoría?", a: "Sí. Cada gasto que subes llega a tu asesoría contabilizado y al instante, sin que reenvíes nada." },
    { q: "¿Es seguro?", a: "Sí. Los datos se guardan cifrados en la nube, cumpliendo el RGPD y la norma ISO 27001." },
  ],
  cta: {
    title: "Deja de registrar tus gastos a mano",
    text: "Sube tus facturas de gasto y deja que la IA haga el resto. Empieza gratis, sin tarjeta y con tu asesoría conectada.",
  },
};
