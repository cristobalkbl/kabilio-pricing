// Planes de empresas (con asesoría). Precios base mensuales; el anual es 11 meses (−50% los 2 primeros).

export type EmpresaPlan = {
  name: string;
  free?: boolean;
  mo?: number;
  popular?: boolean;
  desc: string;
  tag: string;
  inc: string;
  feats: string[];
};

export const empresaPlans: EmpresaPlan[] = [
  {
    name: "Inicia",
    free: true,
    desc: "Para autónomos y empresas que necesitan lo esencial para facturar y controlar sus gastos.",
    tag: "Gestión colaborativa esencial",
    inc: "Lo que incluye:",
    feats: [
      "20 facturas al mes",
      "2 conexiones bancarias",
      "Procesado de gastos ilimitado",
      "Conciliación automática y panel de control",
      "IVA a pagar/cobrar estimado",
      "Informes básicos",
      "Tu asesoría lo recibe todo en directo",
      "Soporte con chat IA y email",
    ],
  },
  {
    name: "Impulsa",
    mo: 14,
    desc: "Para quien presupuesta antes de facturar y emite las mismas facturas cada mes.",
    tag: "Límites mayores y funcionalidades clave",
    inc: "Todo lo de Inicia, y además:",
    feats: [
      "100 facturas al mes",
      "5 conexiones bancarias",
      "10 facturas recurrentes",
      "Facturas sin pie “Generado por Kabilio”",
      "2 plantillas de factura (próximamente)",
      "Presupuestos (próximamente)",
      "Te atiende una persona por email y chat",
    ],
  },
  {
    name: "Avanza",
    mo: 28,
    desc: "Para quien tiene muchos pagos y cobros y necesita agruparlos en remesas.",
    tag: "Máximo volumen y remesas bancarias",
    inc: "Todo lo de Impulsa, y además:",
    feats: [
      "250 facturas al mes",
      "12 conexiones bancarias",
      "75 facturas recurrentes",
      "Remesas bancarias",
      "5 plantillas de factura (próximamente)",
    ],
  },
];

export type CmpRow = { feat: string; tip?: string; badge?: string; vals?: string[]; span?: string; expandedOnly?: boolean };
export const cmpGroups: { group: string; rows: CmpRow[] }[] = [
  {
    group: "Facturación",
    rows: [
      { feat: "Facturas al mes", tip: "Facturas de venta que puedes emitir cada mes.", vals: ["20", "100", "250"] },
      { feat: "Facturas recurrentes", tip: "Facturas que se generan y envían solas cada cierto periodo.", vals: ["—", "10", "75"] },
      { feat: "Plantillas de factura", badge: "próximamente", vals: ["—", "2", "5"], expandedOnly: true },
      { feat: "Presupuestos", badge: "próximamente", vals: ["—", "✓", "✓"], expandedOnly: true },
      { feat: "Sin pie “Generado por Kabilio”", tip: "Quita la marca de Kabilio del pie de tus facturas.", vals: ["—", "✓", "✓"] },
    ],
  },
  {
    group: "Gastos",
    rows: [
      { feat: "Procesado de facturas recibidas", tip: "Digitalización y registro automático de facturas de proveedores. Ilimitado con un uso razonable: si más del 10 % de los documentos subidos no son facturas ni gastos, tu asesoría puede pausar el acceso.", vals: ["Ilimitado", "Ilimitado", "Ilimitado"] },
    ],
  },
  {
    group: "Tesorería",
    rows: [
      { feat: "Conexiones bancarias", tip: "Cuentas de banco que puedes conectar para importar movimientos.", vals: ["2", "5", "12"] },
      { feat: "Conciliación automática", tip: "Cruce automático de movimientos del banco con facturas y gastos.", vals: ["✓", "✓", "✓"] },
      { feat: "Panel de control básico", tip: "Panel con la visión general de tu actividad y tesorería.", vals: ["✓", "✓", "✓"] },
      { feat: "IVA a pagar/cobrar (estimado)", tip: "Estimación del IVA a liquidar según tus facturas y gastos.", vals: ["✓", "✓", "✓"] },
      { feat: "Remesas", tip: "Cobros y pagos en lote mediante ficheros SEPA.", vals: ["—", "—", "✓"] },
    ],
  },
  {
    group: "Colaboración con tu asesoría",
    rows: [
      { feat: "Envío automático de facturas y gastos", tip: "Tu asesoría recibe tus facturas y gastos en cuanto los creas.", vals: ["En directo", "En directo", "En directo"] },
      { feat: "Comunicación asesor / cliente", tip: "Canal directo con tu asesoría dentro de Kabilio.", vals: ["✓", "✓", "✓"] },
      { feat: "Gestor documental", tip: "Almacena y comparte documentos con tu asesoría.", vals: ["✓", "✓", "✓"] },
    ],
  },
  {
    group: "Equipo",
    rows: [
      { feat: "Usuarios incluidos", tip: "Usuarios de tu equipo incluidos en el plan.", vals: ["1", "1", "1"] },
      { feat: "Usuario adicional / mes", tip: "Precio por cada usuario extra sobre el incluido.", vals: ["Gratis", "4 €", "7 €"] },
    ],
  },
  {
    group: "Automatización e informes",
    rows: [
      { feat: "Informes básicos", tip: "Informes básicos de tu actividad, ingresos y gastos.", vals: ["✓", "✓", "✓"] },
    ],
  },
  {
    group: "Soporte",
    rows: [
      { feat: "Soporte con chat IA", tip: "Atención por chat con el asistente de IA de Kabilio.", vals: ["✓", "✓", "✓"] },
      { feat: "Te atiende una persona", tip: "Habla por email o chat con una persona del equipo de Kabilio.", vals: ["Email", "Email y chat", "Email y chat"] },
    ],
  },
];

export const empresaPricingFaqs: { q: string; a: string }[] = [
  { q: "¿El plan Inicia es realmente gratis?", a: "Sí, si tu asesoría trabaja con Kabilio. No hay periodo de prueba ni caducidad: es la tarifa que te corresponde como cliente de una asesoría conectada." },
  { q: "¿Necesito una asesoría para usar Kabilio?", a: "Hoy sí. Todos los planes se activan a través de una asesoría que trabaja con Kabilio, de modo que tu asesor recibe tus facturas y gastos en tiempo real. Si la tuya todavía no lo usa, puedes recomendársela y empezáis juntos en la misma plataforma." },
  { q: "¿En qué se diferencia Inicia de Impulsa y Avanza?", a: "Inicia es el plan esencial para facturar, controlar gastos y trabajar conectado con tu asesoría. Impulsa añade más volumen, presupuestos y facturas recurrentes. Avanza añade mucho más volumen y remesas bancarias. Los tres se ofrecen a tarifa de cliente de asesoría Kabilio." },
  { q: "¿Qué pasa cuando supero el límite de facturas de mi plan?", a: "Te avisamos antes de llegar al límite. Puedes subir de plan en cualquier momento y solo pagas la diferencia prorrateada; tu facturación no se interrumpe y no pierdes datos." },
  { q: "¿Puedo cambiar de plan o cancelar cuando quiera?", a: "Sí. Puedes subir, bajar o cancelar tu plan desde tu cuenta en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación." },
  { q: "¿Cómo funciona el descuento de los 2 primeros meses?", a: "En el plan mensual aplicamos un 50 % de descuento sobre la cuota durante los dos primeros meses; a partir del tercero se cobra la tarifa habitual de tu plan. Es un descuento de bienvenida y se aplica sobre la tarifa de cliente de asesoría Kabilio." },
  { q: "¿Cómo funciona el pago anual?", a: "Es el mismo importe que doce meses del plan mensual —con los dos primeros al 50 %— cobrado en un único pago y sin coste adicional. Puedes cambiar de mensual a anual cuando quieras." },
  { q: "¿Mis datos están seguros?", a: "Tratamos tus datos conforme al RGPD y aplicamos medidas de seguridad alineadas con la norma ISO 27001. Tú decides qué información compartes con tu asesoría." },
];
