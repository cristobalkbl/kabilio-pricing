import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

export const facturacionEmpresas: FeatureLandingData = {
  eyebrow: "Facturación",
  h1: "Simplifica y automatiza tu facturación, de principio a fin",
  sub: "Crea facturas profesionales en dos clics y automatiza lo repetitivo, conforme a Verifactu y siempre al día con tu asesoría.",
  hero: {
    invoice: { title: "Factura", n: "Nº F-2026-0142", badge: "Cobrada", total: { label: "Total", amount: "2.450,00 €" } },
    kpis: [
      { lbl: "Ingresos · mes", val: "18.420 €", delta: "+12%" },
      { lbl: "Cobrado", val: "80%", delta: "+8%" },
      { lbl: "Facturas", val: "142", delta: "+24" },
    ],
  },
  benefits: {
    title: "Lo que gana tu empresa al facturar con Kabilio",
    text: "Factura en dos clics, cumple con Verifactu y mantén a tu asesoría al día sin esfuerzo.",
    items: [
      { icon: `<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>`, h: "Facturas en dos clics", p: "Crea y envía facturas con tu diseño al instante, sin plantillas de Word ni cálculos a mano." },
      { icon: `<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>`, h: "Conforme a Verifactu", p: "Cada factura cumple la Ley Antifraude y se envía a la AEAT automáticamente." },
      { icon: `<path d="M20 6 9 17l-5-5"/>`, h: "Al día con tu asesoría", p: "Cada factura que emites le llega a tu asesor lista para contabilizar, en tiempo real y sin reenviar nada." },
    ],
  },
  features: [
    {
      k: "Plantillas",
      title: "Facturas con la cara de tu negocio",
      text: "Monta una plantilla con tu logo y tus colores y reutilízala siempre. Kabilio numera, calcula los impuestos y te deja la factura lista para enviar a tus clientes.",
      bullets: [
        "Plantillas reutilizables con tu identidad",
        "Numeración correlativa y series automáticas",
        "IVA calculado sin que pienses en ello",
      ],
      mock: { kind: "invoice", head: "F-2026-0142 · Cliente Demo S.L.", lines: ["m", "s", "m"], total: { label: "Total", amount: "2.450,00 €" } },
    },
    {
      k: "Automatización",
      title: "Lo que se repite, que se haga solo",
      text: "Programa las facturas que emites cada mes y deja que salgan sin estar encima. Menos tareas manuales y menos olvidos a final de mes.",
      bullets: [
        "Facturas recurrentes con la cadencia que tú marques",
        "Cliente, producto e impuestos autocompletados",
      ],
      mock: {
        kind: "rows",
        head: "Facturas recurrentes · auto-envío",
        rows: [
          { avatar: "A", label: "ACME Corp", right: "2.400 €" },
          { avatar: "L", label: "Lumio Studio", right: "890 €" },
          { avatar: "A", label: "Atelier 24", right: "350 €" },
        ],
      },
    },
    {
      k: "Presupuestos · Próximamente",
      title: "Del presupuesto a la factura, sin rehacer nada",
      text: "Crea presupuestos con la misma plantilla y, cuando el cliente acepta, conviértelos en factura con un clic.",
      bullets: [
        "Presupuestos con tu marca y validez configurable",
        "Conversión a factura en un clic, sin volver a teclear",
      ],
      mock: {
        kind: "rows",
        head: "Presupuestos",
        rows: [
          { label: "P-2026-018 · Estudio Demo", tag: { text: "Aceptado", variant: "ok" } },
          { label: "P-2026-017 · ACME Corp", tag: { text: "Enviado", variant: "wait" } },
          { label: "P-2026-015 · Casa Forma", tag: { text: "Aceptado", variant: "ok" } },
        ],
        button: "Convertir en factura",
      },
    },
    {
      k: "Catálogo",
      title: "Tu catálogo de clientes y productos, siempre a mano",
      text: "Guarda clientes, productos y servicios una vez y reutilízalos en cada factura o presupuesto. Impórtalos desde Excel y empieza en minutos.",
      bullets: [
        "Clientes y productos guardados y reutilizables",
        "Importa tu catálogo desde Excel o CSV",
        "Autocompletado al crear cada documento",
      ],
      mock: {
        kind: "rows",
        head: "Catálogo · productos y clientes",
        rows: [
          { avatar: "P", label: "Consultoría · hora", right: "75 €" },
          { avatar: "P", label: "Mantenimiento mensual", right: "350 €" },
          { avatar: "C", label: "ACME Corp · cliente", tag: { text: "Guardado", variant: "ok" } },
        ],
      },
    },
    {
      k: "Cumplimiento",
      title: "100% preparado para Verifactu",
      text: "Facturas conformes desde el primer día. Registro inalterable y envío a la AEAT, al día con la Ley Antifraude.",
      bullets: ["Envío automático a la AEAT", "Siempre al día con la normativa"],
      mock: { kind: "verifactu", title: "Factura electrónica", sub: "Sello Verifactu · válida ante la AEAT", badge: "Conforme" },
    },
    {
      k: "Trazabilidad",
      title: "Cada factura, con su historial",
      text: "Kabilio registra cada acción sobre una factura —creación, envío, apertura y cobro— para que tengas una pista de auditoría fiable y completa.",
      bullets: [
        "Registro de envío, apertura y cobro",
        "Pista de auditoría fiable por documento",
        "Trazabilidad alineada con Verifactu",
      ],
      mock: {
        kind: "rows",
        head: "F-2026-0142 · Historial",
        rows: [
          { label: "Creada", right: "12 ene · 09:14" },
          { label: "Enviada por email", right: "12 ene · 09:15" },
          { label: "Vista por el cliente", right: "12 ene · 11:02" },
          { label: "Cobrada", tag: { text: "Pagada", variant: "ok" } },
        ],
      },
    },
    {
      k: "El diferencial de Kabilio",
      title: "Conectado con tu asesoría, en tiempo real",
      text: "Todo lo que facturas le llega a tu asesoría al día. Se acabó reenviar PDFs o acumular papeles para el cierre: tú facturas, tu asesoría lo recibe todo procesado.",
      bullets: [
        "Tu información llega sola, sin envíos manuales",
        "Menos trabajo para ti y para tu asesor",
        "Cierres sin idas y venidas",
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu empresa", small: "factura" },
          { title: "Kabilio", small: "al día", highlight: true },
          { title: "Tu asesoría", small: "lo recibe" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Negocios que ya facturan con Kabilio",
    text: "Autónomos y pymes que emiten con Verifactu y mantienen a su asesoría al día.",
    pairs: [
      {
        empresa: { quote: "Hago las facturas en dos clics y las recurrentes se envían solas. Mi asesoría lo recibe todo al día, sin reenviar nada.", name: "Nuria Márquez", sub: "Flora & Co.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
        asesoria: { quote: "Sus facturas nos llegan al día y conformes a Verifactu; se acabó perseguir documentación a fin de mes.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      },
      {
        empresa: { quote: "El enlace de pago nos ha acelerado muchísimo los cobros, y con Verifactu vamos totalmente tranquilos.", name: "Carlos Bravo", sub: "Bravo Comercio", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
        asesoria: { quote: "Todo entra cuadrado y listo para contabilizar, sin correos ni carpetas sueltas.", name: "Gestoría Duero", sub: "Valladolid", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      },
      {
        empresa: { quote: "Presupuestos, facturas y notas de crédito en el mismo sitio, y todo llega a nuestro gestor al instante.", name: "Elena Castro", sub: "Estudio Castro", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
        asesoria: { quote: "Sus documentos entran solos en nuestro sistema; cerramos mucho más rápido.", name: "Asesoría Contalia", sub: "Sevilla", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
      },
    ],
  },
  faqs: [
    { q: "¿Kabilio es para cualquier empresa?", a: "No exactamente. Kabilio para empresas funciona cuando tu asesoría también usa Kabilio, para que tus facturas y gastos le lleguen conectados y al día. Si tu asesoría todavía no lo usa, puedes invitarla en un minuto desde tu cuenta y la acompañamos para que empiece." },
    { q: "¿Puedo empezar gratis?", a: "Sí. El plan Colaborativo te permite emitir y recibir facturas cumpliendo la normativa, sin coste. Hay planes de pago cuando necesitas más volumen o funciones avanzadas." },
    { q: "¿Cumple con Verifactu y la factura electrónica?", a: "Sí. Kabilio genera facturas conformes, con registro inalterable y envío a la AEAT, y se actualiza con cada cambio normativo." },
    { q: "¿Puedo conectar mi banco?", a: "Sí. Conecta tus cuentas y Kabilio concilia tus movimientos automáticamente, dándote una visión de tesorería en tiempo real." },
    { q: "¿Cómo se conecta con mi asesoría?", a: "Tu asesoría recibe tus facturas y gastos de forma automática, al día. No tienes que reenviar nada a final de mes." },
    { q: "¿Puedo programar facturas recurrentes?", a: "Sí, con la frecuencia que quieras: semanal, mensual o personalizada. Kabilio las crea, numera y envía solo." },
    { q: "¿Puedo migrar mis datos?", a: "Sí. Puedes importar clientes, productos y facturas desde otras herramientas o CSV; te ayudamos con la migración." },
  ],
  seals: ["ISO 27001", "Cumplimiento RGPD", "Preparado para Verifactu"],
  cta: {
    title: "Empieza a facturar con Kabilio hoy",
    text: "Crea tu cuenta gratis en minutos. Preparado para Verifactu y conectado con tu asesoría desde el primer día.",
  },
};
