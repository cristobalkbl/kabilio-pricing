import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

export const tesoreriaEmpresas: FeatureLandingData = {
  eyebrow: "Tesorería",
  h1: "Controla la tesorería de tu empresa en tiempo real",
  sub: "Conecta tus bancos, la IA te sugiere los emparejamientos y ten tu caja y tu IVA siempre al día. Toma decisiones con datos de hoy y con tu asesoría conectada.",
  hero: {
    invoice: { title: "Tesorería", n: "Todas tus cuentas", badge: "En directo", total: { label: "Saldo total", amount: "28.640 €" } },
    kpis: [
      { lbl: "Cobros del mes", val: "18.420 €", delta: "+12%" },
      { lbl: "Conciliado", val: "96%", delta: "+8%" },
      { lbl: "IVA estimado", val: "1.240 €" },
    ],
  },
  benefits: {
    title: "Lo que gana tu empresa con la tesorería en Kabilio",
    text: "Tus bancos conectados, la conciliación resuelta por IA y tu caja e IVA siempre al día.",
    items: [
      { icon: `<path d="M3 21h18M4 10h16M5 10l7-6 7 6M6 10v8M10 10v8M14 10v8M18 10v8"/>`, h: "Bancos conectados", p: "Tus movimientos entran solos cada día; sin descargar extractos ni cuadrar a mano." },
      { icon: `<path d="M13 2 3 14h7l-1 8 10-12h-7z"/>`, h: "Conciliación con IA", p: "Kabilio te sugiere emparejamientos entre cada movimiento y su factura; tú solo revisas y confirmas." },
      { icon: `<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>`, h: "Tu caja e IVA, al día", p: "Sabes cuánto tienes y cuánto IVA te toca en cualquier momento, sin esperar al cierre." },
    ],
  },
  features: [
    {
      k: "Conexión bancaria",
      title: "Conecta tus bancos en minutos",
      text: "Vincula tus cuentas de forma segura y trae los movimientos al día automáticamente. Sin pedir extractos ni hojas de cálculo.",
      bullets: [
        { b: "Sincronización automática", d: "Tus movimientos entran cada día, sin descargar extractos del banco." },
        { b: "Todos tus bancos", d: "Conecta con tus bancos y míralos en un solo sitio." },
      ],
      mock: {
        kind: "rows",
        head: "Bancos conectados",
        rows: [
          { avatar: "BB", label: "BBVA", tag: { text: "Conectado", variant: "ok" } },
          { avatar: "SA", label: "Santander", tag: { text: "Conectado", variant: "ok" } },
          { avatar: "CX", label: "CaixaBank", tag: { text: "Conectado", variant: "ok" } },
        ],
      },
    },
    {
      k: "Conciliación",
      title: "Concilia tus movimientos con IA",
      text: "Kabilio te sugiere emparejamientos entre cada movimiento y su factura; tú solo revisas y confirmas. Olvídate de cuadrar a mano.",
      bullets: [
        { b: "Reglas a tu medida", d: "Define reglas para lo que se repite y concilia en bloque." },
        { b: "Casos difíciles, resueltos", d: "Cobros parciales o de varias facturas a la vez, también." },
      ],
      mock: {
        kind: "rows",
        head: "Conciliación",
        rows: [
          { label: "Movimiento · 578,00 €", tag: { text: "Sin conciliar", variant: "wait" } },
          { label: "Factura F-041 · 578,00 €", tag: { text: "Coincide", variant: "ok" } },
        ],
        button: "Conciliar sugerencia",
      },
    },
    {
      k: "Control en tiempo real",
      title: "Controla tu flujo de caja al día",
      text: "Un panel con tus ingresos, gastos y saldo siempre actualizados. Sabes cuánto entra, cuánto sale y con cuánto dinero cuentas.",
      bullets: [
        { b: "Ingresos y gastos al día", d: "Cuánto entra, cuánto sale y con cuánto dinero cuentas." },
        { b: "Filtra a tu manera", d: "Por cuenta, periodo o concepto." },
        { b: "Decide a tiempo", d: "Con datos de hoy, sin esperar al cierre." },
      ],
      mock: {
        kind: "rows",
        head: "Panel · este mes",
        rows: [
          { label: "Ingresos", right: "18.420 €" },
          { label: "Gastos", right: "11.900 €" },
          { label: "Saldo", right: "28.640 €" },
        ],
      },
    },
    {
      k: "IVA",
      title: "Sabes tu IVA antes del cierre",
      text: "Estimación del IVA a pagar o cobrar en el trimestre, actualizada con tus facturas y gastos. Llegas al modelo 303 sin sorpresas.",
      bullets: [
        { b: "IVA del trimestre", d: "La estimación de lo que te toca pagar o cobrar." },
        { b: "Siempre actualizado", d: "Se recalcula con cada factura y gasto." },
        { b: "Sin sustos", d: "Llegas al modelo 303 sabiendo la cifra." },
      ],
      mock: {
        kind: "ivatotal",
        head: "IVA estimado · T1",
        total: { label: "A pagar (estimado)", amount: "1.240 €" },
        rows: [
          { label: "IVA repercutido", right: "3.180 €" },
          { label: "IVA soportado", right: "1.940 €" },
        ],
      },
    },
    {
      k: "Remesas",
      title: "Prepara tus remesas para el banco",
      text: "Agrupa varios pagos o cobros en una remesa y genera el fichero listo para subir a tu banco. Ahorras tiempo y evitas teclear uno a uno.",
      bullets: [
        { b: "Agrupa en una remesa", d: "Varios pagos o cobros en un mismo fichero." },
        { b: "Listo para tu banco", d: "Kabilio genera el fichero; tú lo subes a tu banco." },
      ],
      mock: {
        kind: "rows",
        head: "Remesa de pagos · SEPA",
        rows: [
          { label: "Proveedor Norte", right: "1.210 €" },
          { label: "Suministros Sur", right: "640 €" },
          { label: "Servicios Lux", right: "890 €" },
        ],
        button: "Generar fichero SEPA",
      },
    },
    {
      k: "El diferencial de Kabilio",
      title: "Todo conectado con tu asesoría",
      text: "Movimientos, conciliaciones y saldos que tu asesoría ve al día, en la misma plataforma. Se acabó enviar extractos a final de mes.",
      bullets: [
        { b: "La misma información", d: "Tu asesoría ve lo mismo que tú, al día." },
        { b: "Sin reenviar nada", d: "Ni extractos ni facturas que enviar a fin de mes." },
        { b: "Cierres más rápidos", d: "Sin idas y venidas de documentos." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu banco", small: "movimientos" },
          { title: "Kabilio", small: "concilia", highlight: true },
          { title: "Tu asesoría", small: "lo ve al día" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Negocios que ya controlan su tesorería con Kabilio",
    text: "Autónomos y pymes que conectan sus bancos y concilian solo, con su asesoría al día.",
    pairs: [
      {
        empresa: { quote: "Conecté todos mis bancos y ahora veo mi caja al día, sin abrir Excel ni entrar banco por banco.", name: "Clara Vidal", sub: "Vidal Retail", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
        asesoria: { quote: "Vemos sus movimientos conciliados al día; el cierre mensual es casi directo.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      },
      {
        empresa: { quote: "La conciliación automática me ahorra horas cada mes; Kabilio propone y yo solo confirmo.", name: "Andrés Molina", sub: "Molina Servicios", avatar: "https://randomuser.me/api/portraits/men/75.jpg" },
        asesoria: { quote: "La conciliación nos llega hecha; solo revisamos las excepciones.", name: "Gestoría Sur", sub: "Málaga", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
      },
      {
        empresa: { quote: "Sé mi IVA del trimestre en cualquier momento y mi asesoría lo tiene todo al día. Se acabaron los sustos.", name: "Pablo Zamora", sub: "Talleres Zamora", avatar: "https://randomuser.me/api/portraits/men/54.jpg" },
        asesoria: { quote: "Su IVA estimado cuadra con lo que presentamos; sin sorpresas en el modelo 303.", name: "Asesoría Duero", sub: "Valladolid", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      },
    ],
  },
  faqs: [
    { q: "¿Puedo conectar cualquier banco?", a: "Kabilio se conecta con casi todos los bancos españoles. La conexión es segura y los movimientos se actualizan automáticamente cada día." },
    { q: "¿Es segura la conexión bancaria?", a: "Sí. Usamos proveedores certificados y conexiones cifradas, y Kabilio nunca guarda las claves de acceso a tus bancos." },
    { q: "¿Qué es la conciliación automática?", a: "Es el cruce de los movimientos del banco con tus facturas y asientos. Kabilio propone las coincidencias con IA y reglas —incluidos cobros parciales o agrupados— y tú solo confirmas." },
    { q: "¿Qué son las remesas bancarias?", a: "Permiten agrupar varios pagos o cobros en una sola orden. Kabilio genera el fichero SEPA para enviarlo a tu banco, ahorrándote tiempo y evitando errores." },
    { q: "¿Cómo se conecta con mi asesoría?", a: "Tu asesoría accede a los mismos movimientos, conciliaciones y saldos, al día. No tienes que enviar extractos ni exportar nada a final de mes." },
    { q: "¿Necesito instalar algo?", a: "No. Kabilio está en la nube; conectas tus bancos en minutos y empiezas a ver tu tesorería al instante." },
  ],
  cta: {
    title: "Controla tu tesorería con Kabilio",
    text: "Conecta tus bancos, concilia tus movimientos automáticamente y controla tu tesorería al día. Empieza gratis, sin tarjeta y con tu asesoría conectada.",
  },
};
