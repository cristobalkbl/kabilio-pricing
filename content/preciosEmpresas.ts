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
      "Comunicación con tu asesoría y gestor documental",
    ],
  },
  {
    name: "Avanza",
    mo: 14,
    popular: true,
    desc: "Para quien presupuesta antes de facturar y emite las mismas facturas cada mes.",
    tag: "Límites mayores y funcionalidades clave",
    inc: "Todo lo de Inicia, y además:",
    feats: [
      "80 facturas al mes",
      "5 conexiones bancarias",
      "10 facturas recurrentes",
      "Facturas sin pie “Generado por Kabilio”",
      "2 plantillas de factura (próximamente)",
      "Presupuestos (próximamente)",
    ],
  },
  {
    name: "Impulsa",
    mo: 24,
    desc: "Para quien tiene muchos pagos y cobros y necesita agruparlos en remesas.",
    tag: "Máximo volumen y remesas bancarias",
    inc: "Todo lo de Avanza, y además:",
    feats: ["250 facturas al mes", "5 plantillas de factura (próximamente)", "75 facturas recurrentes", "Remesas bancarias"],
  },
];

export type CmpRow = { feat: string; tip?: string; badge?: string; vals?: string[]; span?: string; expandedOnly?: boolean };
export const cmpGroups: { group: string; rows: CmpRow[] }[] = [
  {
    group: "Facturación",
    rows: [
      { feat: "Facturas al mes", tip: "Facturas de venta que puedes emitir cada mes.", vals: ["20", "80", "250"] },
      { feat: "Facturas recurrentes", tip: "Facturas que se generan y envían solas cada cierto periodo.", vals: ["—", "10", "75"] },
      { feat: "Sin pie “Generado por Kabilio”", tip: "Quita la marca de Kabilio del pie de tus facturas.", vals: ["—", "✓", "✓"] },
      { feat: "Plantillas de factura", badge: "próximamente", vals: ["—", "2", "5"], expandedOnly: true },
      { feat: "Presupuestos", badge: "próximamente", vals: ["—", "✓", "✓"], expandedOnly: true },
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
      { feat: "Conexiones bancarias", tip: "Cuentas de banco que puedes conectar para importar movimientos.", vals: ["2", "5", "Ilimitadas"] },
      { feat: "Conciliación automática", tip: "Cruce automático de movimientos del banco con facturas y gastos.", vals: ["✓", "✓", "✓"] },
      { feat: "Panel de control básico", tip: "Panel con la visión general de tu actividad y tesorería.", vals: ["✓", "✓", "✓"] },
      { feat: "IVA a pagar/cobrar (estimado)", tip: "Estimación del IVA a liquidar según tus facturas y gastos.", vals: ["✓", "✓", "✓"] },
      { feat: "Remesas", tip: "Cobros y pagos en lote mediante ficheros SEPA.", vals: ["—", "—", "✓"] },
    ],
  },
  {
    group: "Colaboración con tu asesoría",
    rows: [
      { feat: "Comunicación asesor / cliente", tip: "Canal directo con tu asesoría dentro de Kabilio.", vals: ["✓", "✓", "✓"] },
      { feat: "Gestor documental", tip: "Almacena y comparte documentos con tu asesoría.", vals: ["✓", "✓", "✓"] },
    ],
  },
  {
    group: "Equipo",
    rows: [{ feat: "Usuario adicional / mes", tip: "Precio por cada usuario extra sobre el incluido.", vals: ["0 €", "4 €", "7 €"] }],
  },
  {
    group: "Automatización e informes",
    rows: [
      { feat: "Agente Kabi", tip: "Asistente de IA de Kabilio para tareas del día a día.", vals: ["✓", "✓", "✓"] },
      { feat: "Informes básicos", tip: "Informes básicos de tu actividad, ingresos y gastos.", vals: ["✓", "✓", "✓"] },
    ],
  },
  {
    group: "Soporte",
    rows: [
      { feat: "Email", tip: "Atención por email.", vals: ["✓", "✓", "✓"] },
      { feat: "Chat con IA", tip: "Atención por chat con el asistente de IA de Kabilio.", vals: ["✓", "✓", "✓"] },
      { feat: "Chat con el equipo de Kabilio", tip: "Habla por chat con una persona del equipo de Kabilio.", vals: ["—", "✓", "✓"] },
    ],
  },
];

export const empresaPricingFaqs: { q: string; a: string }[] = [
  { q: "¿Qué pasa cuando supero el límite de facturas de mi plan?", a: "Te avisamos antes de llegar al límite anual. Puedes subir de plan en cualquier momento y solo pagas la diferencia prorrateada; no se interrumpe tu facturación." },
  { q: "¿El procesado de gastos es realmente ilimitado?", a: "Sí, el procesado de facturas y tickets de gasto es ilimitado con un uso razonable. Solo pedimos que subas documentos que sean gastos o facturas: si más del 10 % de lo que subes no lo es, tu asesoría puede pausar el acceso al procesado." },
  { q: "¿Necesito una asesoría para usar Kabilio?", a: "Sí. Todos los planes (Inicia, Avanza e Impulsa) son para empresas cuya asesoría trabaja con Kabilio, de modo que tu asesor recibe tus facturas y gastos automáticamente. Si tu asesoría todavía no usa Kabilio, puedes recomendársela para empezar a trabajar juntos en la misma plataforma." },
  { q: "¿Cómo funciona el descuento de los 2 primeros meses?", a: "En el plan mensual aplicamos un 50 % de descuento sobre la cuota durante los dos primeros meses; a partir del tercero se cobra la tarifa estándar. El plan anual es exactamente ese mismo importe (los 12 meses, con los 2 primeros al 50 %) cobrado en un único pago, sin coste adicional." },
  { q: "¿Puedo cambiar de plan o cancelar cuando quiera?", a: "Sí. Puedes subir, bajar o cancelar tu plan desde tu cuenta en cualquier momento, sin permanencia. Los cambios se aplican en el siguiente ciclo de facturación." },
  { q: "¿Está incluida la comunicación con mi asesoría?", a: "Sí, en todos los planes. Tu asesor recibe tus facturas y gastos de forma automática, sin que tengas que enviárselos a final de mes." },
  { q: "¿Mis datos están seguros?", a: "Tratamos tus datos conforme al RGPD y aplicamos medidas de seguridad alineadas con la norma ISO 27001. Tú decides qué información compartes con tu asesoría." },
];
