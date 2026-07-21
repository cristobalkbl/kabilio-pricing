// Datos de precios para asesorías (planes por créditos).

export type Pack = {
  name: string;
  price: number; // precio anual base (pago único)
  credits: number;
  unit: number; // precio por crédito
  desc: string;
  soft?: boolean;
};

export const packs: Pack[] = [
  { name: "Starter", price: 680, credits: 4000, unit: 0.17, desc: "Para despachos que empiezan con Kabilio.", soft: true },
  { name: "Básico", price: 1560, credits: 12000, unit: 0.13, desc: "Para despachos pequeños ya en marcha." },
  { name: "Avanzado", price: 2640, credits: 24000, unit: 0.11, desc: "Para despachos en crecimiento que escalan volumen." },
  { name: "Pro", price: 4080, credits: 48000, unit: 0.09, desc: "Para despachos consolidados y gran volumen." },
];

// Coste en créditos por acción.
export const cost = { invoice: 1, reconcile: 0.5, bankConn: 15, agentAction: 5, doc: 0.4 };

// Productos donde gastar los créditos (grid "Incluido en todos los planes").
export const includedProducts: { label: string; desc: string; value?: string; icon: string }[] = [
  {
    label: "Procesador",
    desc: "Procesa y digitaliza automáticamente las facturas de tus clientes.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/></svg>`,
  },
  {
    label: "Conciliador",
    desc: "Concilia los movimientos bancarios de tus clientes.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h12l-3-3"/><path d="M20 16H8l3 3"/></svg>`,
  },
  {
    label: "Conexiones bancarias",
    desc: "Conecta las cuentas de tus clientes para importar sus movimientos automáticamente.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10"/><path d="M12 3l8 5H4z"/></svg>`,
  },
  {
    label: "Gestor Documental",
    desc: "Almacena y organiza la documentación de tus clientes, con 20 GB de almacenamiento incluido.",
    value: "20 GB",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  },
];

// Todo lo incluido (para la tabla comparativa), agrupado.
export const includedAll: { label: string; group: string; tip: string; value?: string }[] = [
  { label: "Procesador", group: "Productos", tip: "Procesa y digitaliza automáticamente las facturas de tus clientes." },
  { label: "Conciliador", group: "Productos", tip: "Concilia los movimientos bancarios de tus clientes." },
  { label: "Conexiones bancarias", group: "Productos", tip: "Conecta las cuentas de tus clientes para importar sus movimientos automáticamente." },
  { label: "Gestor Documental", group: "Productos", tip: "Almacena y organiza la documentación de tus clientes, con 20 GB de almacenamiento incluido.", value: "20 GB" },
  { label: "Usuarios ilimitados", group: "Servicio y soporte", tip: "Añade a todo tu equipo sin coste por usuario." },
  { label: "Instalación y formación", group: "Servicio y soporte", tip: "Puesta en marcha y formación inicial del equipo, incluidas." },
  { label: "Responsable de cuenta", group: "Servicio y soporte", tip: "Una persona de Kabilio asignada a tu despacho como punto de contacto." },
  { label: "Soporte", group: "Servicio y soporte", tip: "Soporte por chat y teléfono." },
];

export const conditions: { icon: string; title: string; text: string }[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    title: "Vigencia de 12 meses",
    text: "Todos los créditos caducan un año después de su compra.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
    title: "Productos siempre abiertos",
    text: "Tienes acceso a todos los productos; solo se cobran créditos si los usas.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`,
    title: "Formas de pago",
    text: "Pago por adelantado al mejor precio. En 2 pagos: +10%. En 4 pagos: +20%.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 16H3z"/><path d="M12 10v4"/><path d="M12 17h.01"/></svg>`,
    title: "Sobreconsumo",
    text: "Si superas tu saldo, cada crédito extra se factura a 0,20 €.",
  },
];

export const pricingFaqs: { q: string; a: string }[] = [
  { q: "¿Cuándo se realiza el pago de cada plan?", a: "El pago se realiza al principio del periodo de facturación." },
  { q: "¿Qué medios de pago aceptáis?", a: "SEPA y transferencia bancaria." },
  { q: "¿Qué pasa si llego al límite de créditos de mi plan?", a: "Puedes contratar a tiempo un nuevo plan para mantener tus condiciones. Mientras tanto, cada crédito de sobreconsumo se factura a 0,20 € a final de cada mes vencido." },
  { q: "¿Puedo contratar un plan antes del vencimiento?", a: "Por supuesto. El nuevo plan empezará a consumirse en cuanto acabes el vigente, y su validez comienza en la fecha de contratación." },
  { q: "¿Y si los planes predefinidos no se adaptan a mis necesidades?", a: "Contacta con nuestro equipo y vemos cómo trabajar juntos con un plan Enterprise a medida." },
];
