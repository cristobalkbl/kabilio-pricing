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
    name: "Colaborativo",
    free: true,
    desc: "El módulo esencial para gestionar tu negocio junto a tu asesoría.",
    tag: "Gestión colaborativa esencial",
    inc: "Lo que incluye:",
    feats: [
      "20 facturas al mes",
      "2 conexiones bancarias",
      "Procesado de gastos ilimitado",
      "Conciliación automática y dashboard",
      "IVA a pagar/cobrar estimado",
      "Informes básicos",
      "Comunicación con tu asesoría y gestor documental",
    ],
  },
  {
    name: "Básico",
    mo: 14,
    popular: true,
    desc: "Gestiona tus finanzas y optimiza tu rendimiento.",
    tag: "Más facturación y más bancos",
    inc: "Todo lo de Colaborativo, y además:",
    feats: [
      "80 facturas al mes",
      "5 conexiones bancarias",
      "2 plantillas de factura (próximamente)",
      "10 facturas recurrentes",
      "Presupuestos (próximamente)",
      "Facturas sin pie “Generado por Kabilio”",
    ],
  },
  {
    name: "Estándar",
    mo: 24,
    desc: "Gestiona tu contabilidad y tus finanzas, todo en un mismo lugar.",
    tag: "Máximo volumen y remesas bancarias",
    inc: "Todo lo de Básico, y además:",
    feats: ["250 facturas al mes", "5 plantillas de factura (próximamente)", "75 facturas recurrentes", "Remesas bancarias"],
  },
];

export type CmpRow = { feat: string; tip?: string; badge?: string; vals?: string[]; span?: string };
export const cmpGroups: { group: string; rows: CmpRow[] }[] = [
  {
    group: "Facturación",
    rows: [
      { feat: "Facturas al mes", tip: "Facturas de venta que puedes emitir cada mes.", vals: ["20", "80", "250"] },
      { feat: "Facturas recurrentes", tip: "Facturas que se generan y envían solas cada cierto periodo.", vals: ["—", "10", "75"] },
      { feat: "Plantillas de factura", badge: "próximamente", vals: ["—", "2", "5"] },
      { feat: "Sin pie “Generado por Kabilio”", tip: "Quita la marca de Kabilio del pie de tus facturas.", vals: ["—", "✓", "✓"] },
      { feat: "Presupuestos", badge: "próximamente", vals: ["—", "✓", "✓"] },
    ],
  },
  {
    group: "Gastos",
    rows: [
      { feat: "Procesado de facturas recibidas", tip: "Digitalización y registro automático de facturas de proveedores.", vals: ["Ilimitado", "Ilimitado", "Ilimitado"] },
    ],
  },
  {
    group: "Tesorería",
    rows: [
      { feat: "Conexiones bancarias", tip: "Cuentas de banco que puedes conectar para importar movimientos.", vals: ["2", "5", "Ilimitadas"] },
      { feat: "Conciliación automática", tip: "Cruce automático de movimientos del banco con facturas y gastos.", vals: ["✓", "✓", "✓"] },
      { feat: "Dashboard básico", tip: "Panel con la visión general de tu actividad y tesorería.", vals: ["✓", "✓", "✓"] },
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
    rows: [{ feat: "Usuario adicional / mes", tip: "Precio por cada usuario extra sobre el incluido.", vals: ["2 €", "4 €", "7 €"] }],
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
    rows: [{ feat: "Canales de atención", tip: "Canales de atención disponibles.", span: "Chat y teléfono" }],
  },
];

export const empresaPricingFaqs: { q: string; a: string }[] = [
  { q: "¿Qué pasa cuando supero el límite de facturas de mi plan?", a: "Te avisamos antes de llegar al límite anual. Puedes subir de plan en cualquier momento y solo pagas la diferencia prorrateada; no se interrumpe tu facturación." },
  { q: "¿Necesito una asesoría para usar Kabilio?", a: "Sí. Todos los planes (Colaborativo, Básico y Estándar) son para empresas cuya asesoría trabaja con Kabilio, de modo que tu asesor recibe tus facturas y gastos automáticamente. Si tu asesoría todavía no usa Kabilio, puedes recomendársela para empezar a trabajar juntos en la misma plataforma." },
  { q: "¿Cómo funciona el descuento de los 2 primeros meses?", a: "En el plan mensual aplicamos un 50 % de descuento sobre la cuota durante los dos primeros meses; a partir del tercero se cobra la tarifa estándar. El plan anual es exactamente ese mismo importe (los 12 meses, con los 2 primeros al 50 %) cobrado en un único pago, sin coste adicional." },
  { q: "¿Puedo cambiar de plan o cancelar cuando quiera?", a: "Sí. Puedes subir, bajar o cancelar tu plan desde tu cuenta en cualquier momento, sin permanencia. Los cambios se aplican en el siguiente ciclo de facturación." },
  { q: "¿Está incluida la comunicación con mi asesoría?", a: "Sí, en todos los planes. Tu asesor recibe tus facturas y gastos de forma automática, sin que tengas que enviárselos a final de mes." },
  { q: "¿Mis datos están seguros?", a: "Tratamos tus datos conforme al RGPD y aplicamos medidas de seguridad alineadas con la norma ISO 27001. Tú decides qué información compartes con tu asesoría." },
];
