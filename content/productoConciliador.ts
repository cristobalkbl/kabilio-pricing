import type { ProductData } from "@/components/producto/ProductSections";

const ICO_BANK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V9l7-4 7 4v12"/><path d="M9 21v-6h6v6"/></svg>`;
const ICO_SPARK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3z"/><path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/></svg>`;
const ICO_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/></svg>`;

export const conciliador: ProductData = {
  eyebrow: "Conciliador para asesorías",
  h1: "Conciliación bancaria con IA y reglas que entienden cada movimiento",
  lead: "Kabilio empareja automáticamente cada movimiento con su factura y su asiento, y resuelve casos complejos como cobros parciales o agrupados.",
  heroMedia: `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" aria-label="Movimiento bancario conciliado con su factura">
    <rect x="18" y="46" width="172" height="228" rx="12" fill="#f3f0ec" stroke="#e4ded5" stroke-width="2"/>
    <text x="36" y="72" font-family="Manrope,sans-serif" font-size="12" font-weight="800" fill="#3a2f7a">Movimientos</text>
    <g font-family="Manrope,sans-serif" font-size="10" font-weight="700" fill="#111827">
      <rect x="36" y="86" width="136" height="34" rx="7" fill="#fff" stroke="#e4ded5"/><rect x="48" y="97" width="66" height="6" rx="3" fill="#d7dde6"/><rect x="48" y="107" width="40" height="5" rx="2.5" fill="#e4e9f0"/><text x="160" y="106" text-anchor="end">578,00</text>
      <rect x="36" y="126" width="136" height="34" rx="7" fill="#fff" stroke="#e4ded5"/><rect x="48" y="137" width="54" height="6" rx="3" fill="#d7dde6"/><rect x="48" y="147" width="46" height="5" rx="2.5" fill="#e4e9f0"/><text x="160" y="146" text-anchor="end">121,38</text>
      <rect x="36" y="166" width="136" height="34" rx="7" fill="#fff" stroke="#e4ded5"/><rect x="48" y="177" width="70" height="6" rx="3" fill="#d7dde6"/><rect x="48" y="187" width="38" height="5" rx="2.5" fill="#e4e9f0"/><text x="160" y="186" text-anchor="end">1.240,00</text>
    </g>
    <rect x="206" y="128" width="52" height="64" rx="14" fill="#e9e3fd" stroke="#ddd5fd" stroke-width="2"/>
    <text x="232" y="165" text-anchor="middle" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#3a2f7a">IA</text>
    <path d="M190 150 h16" stroke="#ddd5fd" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M258 160 h34" stroke="#ddd5fd" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M285 153 l8 7 -8 7" fill="none" stroke="#ddd5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="300" y="60" width="142" height="200" rx="14" fill="#fff" stroke="#ddd5fd" stroke-width="2"/>
    <text x="320" y="90" font-family="Manrope,sans-serif" font-size="12" font-weight="800" fill="#3a2f7a">Conciliado</text>
    <g font-family="Manrope,sans-serif" font-size="10" font-weight="600" fill="#6b7280">
      <rect x="320" y="104" width="104" height="26" rx="6" fill="#f3f0ec"/><rect x="332" y="113" width="52" height="7" rx="3.5" fill="#c9bff0"/><text x="414" y="121" text-anchor="end">578,00</text>
      <rect x="320" y="136" width="104" height="26" rx="6" fill="#f3f0ec"/><rect x="332" y="145" width="60" height="7" rx="3.5" fill="#c9bff0"/><text x="414" y="153" text-anchor="end">Factura</text>
    </g>
    <circle cx="371" cy="200" r="18" fill="#dff3e6"/>
    <path d="M362 200 l6 6 12 -13" fill="none" stroke="#15914b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="371" y="242" text-anchor="middle" font-family="Manrope,sans-serif" font-size="11" font-weight="800" fill="#15914b">Emparejado</text>
  </svg>`,
  how: {
    eyebrow: "Cómo funciona",
    title: "Del movimiento bancario al asiento, sin cuadrar a mano",
    subtitle: "Integra, empareja con IA y contabiliza en tres pasos.",
    steps: [
      { icon: ICO_BANK, title: "Integra los movimientos", text: "Conecta las cuentas de tus clientes de forma automática o, si lo prefieres, importa los movimientos desde un Excel." },
      { icon: ICO_SPARK, title: "La IA propone el emparejamiento", text: "Con qué asiento y factura corresponde cada movimiento, con reglas avanzadas e IA. Incluso cobros parciales o agrupados." },
      { icon: ICO_CHECK, title: "Validas y se contabiliza", text: "Revisas la propuesta y, al validar, el asiento va directo a tu software contable con trazabilidad completa." },
    ],
  },
  features: {
    eyebrow: "Funcionalidades",
    title: "Toda la conciliación, en un solo sitio",
    rows: [
      {
        title: "Integración automática de movimientos",
        bullets: [
          "Conecta con las cuentas de tus clientes de forma rápida y segura, sin pedir extractos.",
          "Actualiza los movimientos bancarios de forma continua.",
          "Cobertura del 99% de los bancos españoles.",
          "¿Prefieres Excel? Un importador identifica las columnas automáticamente.",
        ],
        chips: ["Conexión bancaria", "Importador Excel", "99% bancos"],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="20" width="380" height="200" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <rect x="20" y="20" width="380" height="34" rx="12" fill="#e9e3fd"/><rect x="40" y="33" width="120" height="8" rx="4" fill="#3a2f7a"/>
          <g font-family="Manrope,sans-serif" font-size="10" font-weight="700">
            <rect x="40" y="70" width="340" height="34" rx="8" fill="#f3f0ec"/><circle cx="60" cy="87" r="9" fill="#ddd5fd"/><rect x="80" y="83" width="130" height="8" rx="4" fill="#d7dde6"/><rect x="316" y="78" width="64" height="18" rx="9" fill="#dff3e6"/><text x="348" y="91" text-anchor="middle" fill="#15914b">Conectado</text>
            <rect x="40" y="112" width="340" height="34" rx="8" fill="#f3f0ec"/><circle cx="60" cy="129" r="9" fill="#ddd5fd"/><rect x="80" y="125" width="104" height="8" rx="4" fill="#d7dde6"/><rect x="316" y="120" width="64" height="18" rx="9" fill="#dff3e6"/><text x="348" y="133" text-anchor="middle" fill="#15914b">Conectado</text>
            <rect x="40" y="154" width="340" height="34" rx="8" fill="#f3f0ec"/><circle cx="60" cy="171" r="9" fill="#fde9d6"/><rect x="80" y="167" width="120" height="8" rx="4" fill="#d7dde6"/><rect x="316" y="162" width="64" height="18" rx="9" fill="#fdeecd"/><text x="348" y="175" text-anchor="middle" fill="#a5791b">Excel</text>
          </g>
        </svg>`,
      },
      {
        title: "Conciliación avanzada",
        bullets: [
          "Emparejamiento automático: propone con qué asiento y factura se corresponde cada movimiento.",
          "Sugerencias basadas en IA y reglas de conciliación avanzadas.",
          "Reconoce y gestiona casos complejos como cobros parciales o agrupados.",
        ],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="34" y="46" width="150" height="148" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <text x="50" y="72" font-family="Manrope,sans-serif" font-size="10" font-weight="800" fill="#3a2f7a">Movimiento</text>
          <rect x="50" y="88" width="90" height="7" rx="3.5" fill="#d7dde6"/><rect x="50" y="104" width="70" height="7" rx="3.5" fill="#e4e9f0"/>
          <text x="168" y="150" text-anchor="end" font-family="Manrope,sans-serif" font-size="12" font-weight="800" fill="#111827">578,00</text>
          <rect x="236" y="46" width="150" height="148" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <text x="252" y="72" font-family="Manrope,sans-serif" font-size="10" font-weight="800" fill="#3a2f7a">Factura</text>
          <rect x="252" y="88" width="90" height="7" rx="3.5" fill="#d7dde6"/><rect x="252" y="104" width="70" height="7" rx="3.5" fill="#e4e9f0"/>
          <text x="370" y="150" text-anchor="end" font-family="Manrope,sans-serif" font-size="12" font-weight="800" fill="#111827">578,00</text>
          <path d="M184 120 h52" stroke="#ddd5fd" stroke-width="2.5" stroke-dasharray="2 6" stroke-linecap="round"/>
          <rect x="185" y="196" width="50" height="24" rx="12" fill="#e9e3fd"/><text x="210" y="212" text-anchor="middle" font-family="Manrope,sans-serif" font-size="10" font-weight="800" fill="#3a2f7a">IA</text>
          <circle cx="210" cy="120" r="17" fill="#dff3e6"/><path d="M201 120 l6 6 12 -13" fill="none" stroke="#15914b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      },
      {
        title: "Vista unificada y colaborativa",
        bullets: [
          "Toda la información en un mismo sitio: cuentas, facturas y asientos, sin salir de Kabilio.",
          "Filtros por fecha, importe o concepto para encontrar lo que buscas.",
          "Acceso opcional al cliente para consultar saldos, movimientos y conciliaciones.",
        ],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="24" width="380" height="192" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <rect x="20" y="24" width="130" height="192" rx="12" fill="#f3f0ec"/>
          <rect x="38" y="48" width="80" height="8" rx="4" fill="#3a2f7a"/>
          <rect x="38" y="78" width="94" height="7" rx="3.5" fill="#d7dde6"/><rect x="38" y="100" width="80" height="7" rx="3.5" fill="#d7dde6"/><rect x="38" y="122" width="94" height="7" rx="3.5" fill="#d7dde6"/>
          <g font-family="Manrope,sans-serif" font-size="10" font-weight="700">
            <rect x="170" y="60" width="210" height="30" rx="7" fill="#f3f0ec"/><circle cx="188" cy="75" r="7" fill="#15914b"/><rect x="204" y="71" width="110" height="7" rx="3.5" fill="#d7dde6"/>
            <rect x="170" y="98" width="210" height="30" rx="7" fill="#f3f0ec"/><circle cx="188" cy="113" r="7" fill="#e8a33d"/><rect x="204" y="109" width="130" height="7" rx="3.5" fill="#d7dde6"/>
            <rect x="170" y="136" width="210" height="30" rx="7" fill="#f3f0ec"/><circle cx="188" cy="151" r="7" fill="#15914b"/><rect x="204" y="147" width="96" height="7" rx="3.5" fill="#d7dde6"/>
          </g>
        </svg>`,
      },
      {
        title: "Contabilización sin esfuerzos",
        bullets: [
          "Cada cuenta bancaria queda vinculada a su cuenta contable.",
          "Al validar, los asientos se trasladan directamente a A3, sin archivos.",
          "Trazabilidad garantizada: del movimiento bancario hasta el asiento final.",
        ],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="30" y="70" width="120" height="100" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <text x="46" y="96" font-family="Manrope,sans-serif" font-size="10" font-weight="800" fill="#3a2f7a">Movimiento</text>
          <rect x="46" y="110" width="80" height="7" rx="3.5" fill="#d7dde6"/><rect x="46" y="126" width="60" height="7" rx="3.5" fill="#e4e9f0"/>
          <path d="M150 120 h56" stroke="#3a2f7a" stroke-width="2.5" stroke-dasharray="2 6" stroke-linecap="round"/>
          <path d="M200 113 l8 7 -8 7" fill="none" stroke="#3a2f7a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="214" y="52" width="170" height="136" rx="12" fill="#f3f0ec" stroke="#e4ded5" stroke-width="2"/>
          <text x="230" y="78" font-family="Manrope,sans-serif" font-size="11" font-weight="800" fill="#3a2f7a">Asiento en A3</text>
          <g font-family="Manrope,sans-serif" font-size="9" font-weight="600" fill="#6b7280">
            <rect x="230" y="92" width="140" height="22" rx="6" fill="#fff"/><rect x="242" y="99" width="80" height="6" rx="3" fill="#c9bff0"/><text x="360" y="107" text-anchor="end">578,00</text>
            <rect x="230" y="120" width="140" height="22" rx="6" fill="#fff"/><rect x="242" y="127" width="60" height="6" rx="3" fill="#c9bff0"/><text x="360" y="135" text-anchor="end">578,00</text>
          </g>
          <rect x="230" y="152" width="90" height="24" rx="8" fill="#111827"/><text x="275" y="168" text-anchor="middle" font-family="Manrope,sans-serif" font-size="10" font-weight="700" fill="#fff">Validado</text>
        </svg>`,
      },
    ],
  },
  a3: {
    title: "Integración absoluta con A3",
    items: [
      { bold: "Sincroniza bidireccionalmente", text: "asocia automáticamente cada cuenta bancaria a su cuenta contable en el plan de cuentas del cliente." },
      { bold: "Exporta automáticamente", text: "envía los asientos conciliados directamente a A3, con trazabilidad de punta a punta." },
      { bold: "Evita duplicados", text: "sin registros duplicados ni errores de traspaso manual." },
    ],
  },
  why: {
    eyebrow: "Por qué Kabilio",
    title: "Lo que gana tu despacho",
    cards: [
      {
        kicker: "Seguridad y cumplimiento",
        title: "Conexión bancaria segura",
        text: "Agregador certificado bajo PSD2 e ISO 27001. Kabilio nunca almacena las credenciales de tus clientes.",
        shot: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M180 28l27 12v21c0 17-13 27-27 33-14-6-27-16-27-33V40z" fill="#e9e3fd" stroke="#3a2f7a" stroke-width="3" stroke-linejoin="round"/><path d="M167 70l9 9 19-21" fill="none" stroke="#3a2f7a" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/><text x="180" y="132" text-anchor="middle" font-family="Manrope,sans-serif" font-size="16" font-weight="800" fill="#3a2f7a">PSD2 · ISO 27001</text></svg>`,
      },
      {
        kicker: "Ahorro de tiempo",
        title: "Ahorra horas cada mes",
        text: "Automatizas el emparejamiento y dejas de conciliar movimiento a movimiento.",
        shot: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g transform="translate(180,73)"><circle r="34" fill="#e9e3fd" stroke="#3a2f7a" stroke-width="3"/><path d="M0 -18 V2 L15 10" fill="none" stroke="#3a2f7a" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
      },
      {
        kicker: "Sin errores",
        title: "Adiós a los errores manuales",
        text: "Trazabilidad completa, del movimiento bancario hasta el asiento final.",
        shot: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="128" cy="75" r="16" fill="#e9e3fd" stroke="#3a2f7a" stroke-width="3"/><circle cx="232" cy="75" r="16" fill="#e9e3fd" stroke="#3a2f7a" stroke-width="3"/><path d="M144 75 h72" stroke="#3a2f7a" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/><path d="M120 75 l6 6 12 -13" fill="none" stroke="#3a2f7a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M224 75 l6 6 12 -13" fill="none" stroke="#3a2f7a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Asesorías que ya concilian con IA",
    items: [
      { initials: "MC", quote: "Con Kabilio hemos reducido el tiempo dedicado a lo más repetitivo, como conciliar los movimientos, y centramos al equipo en lo de más valor para el cliente.", name: "Mar Castellà", role: "Socia en Castellá" },
      { initials: "GG", quote: "Gracias a la IA de Kabilio hemos cortado drásticamente las horas de cuadrar el banco y bajado los picos de trabajo.", name: "Guillem Gimeno", role: "CEO en Deal Tax & Legal" },
      { initials: "AM", quote: "Queríamos liberar al equipo de tareas rutinarias para dar un servicio de valor. Kabilio nos permite hacerlo hoy.", name: "Alex Martínez Comín", role: "CEO en Martínez Comín" },
    ],
  },
  demo: {
    title: "Mira el Conciliador de Kabilio en acción",
    text: "Sigue un movimiento bancario: entra, la IA propone el emparejamiento y tú validas.",
  },
  faqs: [
    { q: "¿En qué se diferencia de otras herramientas de conciliación?", a: "Propone las conciliaciones de forma automática usando IA y reglas sofisticadas. Además, toda la información —facturas, asientos y movimientos— está en el mismo entorno, y puedes usar tanto conexiones bancarias como importadores avanzados." },
    { q: "¿Kabilio se conecta con todos los bancos?", a: "Kabilio usa un agregador bancario certificado que permite conectar con el 99% de las entidades financieras en España." },
    { q: "¿Es seguro conectar cuentas bancarias a Kabilio?", a: "Sí. Trabajamos con proveedores certificados bajo la directiva europea PSD2, que garantizan un acceso seguro y cifrado. Kabilio no almacena ni guarda las credenciales de acceso a los bancos." },
    { q: "¿El Conciliador es independiente del resto?", a: "No. Para que este módulo funcione es necesario tener también el módulo de Procesador de facturas." },
    { q: "¿Es compatible con mi software de contabilidad?", a: "Kabilio tiene integración completa con A3ECO/A3CON: toda la información sincronizada en tiempo real. Si usas otro software, escríbenos y te avisamos en cuanto tengamos la integración." },
  ],
  cta: {
    title: "Deja que la IA de Kabilio concilie los movimientos por ti",
    text: "Te enseñamos en una demo cómo Kabilio integra los movimientos, propone el emparejamiento con IA y contabiliza en tu software.",
  },
};
