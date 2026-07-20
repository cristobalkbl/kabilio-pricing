import type { ProductData } from "@/components/producto/ProductSections";

// Iconos de los pasos (con estilo de trazo).
const ICO_UPLOAD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M12 3v11"/><path d="M8 7l4-4 4 4"/></svg>`;
const ICO_SPARK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3z"/><path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/></svg>`;
const ICO_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/></svg>`;

export const procesador: ProductData = {
  eyebrow: "Procesador de facturas con IA",
  h1: "Procesa y contabiliza las facturas de tus clientes, con IA",
  lead: "La IA interpreta, clasifica y te propone el asiento completo con un 95% de fiabilidad. Tú revisas y validas.",
  heroMedia: `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" aria-label="Factura procesada y asiento propuesto">
    <rect x="24" y="30" width="150" height="200" rx="12" fill="#f3f0ec" stroke="#e4ded5" stroke-width="2"/>
    <rect x="42" y="52" width="70" height="9" rx="4" fill="#111827"/>
    <rect x="42" y="74" width="114" height="6" rx="3" fill="#d7dde6"/>
    <rect x="42" y="90" width="114" height="6" rx="3" fill="#e4e9f0"/>
    <rect x="42" y="120" width="80" height="6" rx="3" fill="#e4e9f0"/>
    <rect x="42" y="200" width="70" height="12" rx="4" fill="#111827"/>
    <rect x="14" y="126" width="170" height="4" rx="2" fill="#3a2f7a"/>
    <rect x="196" y="120" width="60" height="70" rx="14" fill="#e9e3fd" stroke="#ddd5fd" stroke-width="2"/>
    <text x="226" y="160" text-anchor="middle" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#3a2f7a">IA</text>
    <path d="M174 130 C186 130 186 152 196 154" fill="none" stroke="#ddd5fd" stroke-width="2.5"/>
    <path d="M256 155 h40" stroke="#ddd5fd" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M289 148 l8 7 -8 7" fill="none" stroke="#ddd5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="310" y="70" width="126" height="180" rx="14" fill="#fff" stroke="#ddd5fd" stroke-width="2"/>
    <text x="330" y="100" font-family="Manrope,sans-serif" font-size="12" font-weight="800" fill="#3a2f7a">Asiento propuesto</text>
    <rect x="330" y="116" width="86" height="7" rx="3.5" fill="#e4e9f0"/>
    <rect x="330" y="132" width="70" height="7" rx="3.5" fill="#e4e9f0"/>
    <rect x="330" y="148" width="86" height="7" rx="3.5" fill="#e4e9f0"/>
    <rect x="330" y="200" width="80" height="30" rx="8" fill="#111827"/>
    <text x="370" y="219" text-anchor="middle" font-family="Manrope,sans-serif" font-size="11" font-weight="700" fill="#fff">Validar</text>
    <text x="373" y="184" font-family="Manrope,sans-serif" font-size="11" font-weight="800" fill="#15914b">95% fiabilidad</text>
  </svg>`,
  how: {
    eyebrow: "Cómo funciona",
    title: "El procesador de facturas más fiable, con IA",
    subtitle: "De la factura al asiento, sin picar datos.",
    steps: [
      { icon: ICO_UPLOAD, title: "Sube o recibe la factura", text: "Por email dedicado, carpetas, subida o foto. Lee PDF e imágenes y separa multipágina." },
      { icon: ICO_SPARK, title: "La IA la entiende y propone el asiento", text: "Interpreta y clasifica: contrapartida, tipo de operación y modelos, con 95% de fiabilidad." },
      { icon: ICO_CHECK, title: "Tú tienes la última palabra", text: "Validas en un clic —de una en una o en masa— y el asiento va directo a tu A3." },
    ],
  },
  features: {
    eyebrow: "Funcionalidades",
    title: "Todo el procesamiento, automatizado",
    rows: [
      {
        title: "Procesamiento completamente automatizado",
        bullets: [
          "Organiza las facturas automáticamente entre emitidas y recibidas.",
          "Asigna un estado a cada factura para que el asesor tome la acción correspondiente.",
          "Búsqueda y contabilización masiva; lo contabilizado va directo a A3.",
        ],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="20" width="380" height="200" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <rect x="20" y="20" width="380" height="34" rx="12" fill="#e9e3fd"/><rect x="40" y="33" width="90" height="8" rx="4" fill="#3a2f7a"/>
          <g font-family="Manrope,sans-serif" font-size="10" font-weight="700">
            <rect x="40" y="70" width="340" height="30" rx="7" fill="#f3f0ec"/><rect x="56" y="81" width="120" height="7" rx="3.5" fill="#d7dde6"/><rect x="300" y="76" width="64" height="18" rx="9" fill="#dff3e6"/><text x="332" y="89" text-anchor="middle" fill="#15914b">Contab.</text>
            <rect x="40" y="106" width="340" height="30" rx="7" fill="#f3f0ec"/><rect x="56" y="117" width="150" height="7" rx="3.5" fill="#d7dde6"/><rect x="300" y="112" width="64" height="18" rx="9" fill="#fdeecd"/><text x="332" y="125" text-anchor="middle" fill="#a5791b">Revisar</text>
            <rect x="40" y="142" width="340" height="30" rx="7" fill="#f3f0ec"/><rect x="56" y="153" width="100" height="7" rx="3.5" fill="#d7dde6"/><rect x="300" y="148" width="64" height="18" rx="9" fill="#dff3e6"/><text x="332" y="161" text-anchor="middle" fill="#15914b">Contab.</text>
          </g>
        </svg>`,
      },
      {
        title: "Detección de duplicados",
        bullets: [
          "Varios canales para asesor y cliente: email dedicado, carpetas virtuales, subida de ficheros.",
          "Lee fotos y PDF, y separa los multipágina de forma automática.",
          "Valida automáticamente si hay facturas duplicadas.",
        ],
        chips: ["Foto (JPG/PNG)", "PDF", "Multipágina"],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="40" y="40" width="120" height="160" rx="8" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <rect x="58" y="60" width="70" height="8" rx="4" fill="#111827"/>
          <rect x="58" y="82" width="84" height="6" rx="3" fill="#e4e9f0"/>
          <rect x="58" y="96" width="84" height="6" rx="3" fill="#e4e9f0"/>
          <rect x="34" y="118" width="132" height="4" rx="2" fill="#3a2f7a"/>
          <rect x="58" y="170" width="60" height="10" rx="3" fill="#111827"/>
          <g>
            <rect x="210" y="52" width="170" height="34" rx="9" fill="#fff" stroke="#e4ded5"/><circle cx="228" cy="69" r="8" fill="#e9e3fd"/><rect x="248" y="65" width="90" height="8" rx="4" fill="#d7dde6"/>
            <rect x="210" y="94" width="170" height="34" rx="9" fill="#fff" stroke="#e4ded5"/><circle cx="228" cy="111" r="8" fill="#f8d5e4"/><rect x="248" y="107" width="70" height="8" rx="4" fill="#d7dde6"/>
            <rect x="210" y="136" width="170" height="34" rx="9" fill="#fff" stroke="#e4ded5"/><circle cx="228" cy="153" r="8" fill="#fde9d6"/><rect x="248" y="149" width="100" height="8" rx="4" fill="#d7dde6"/>
          </g>
          <text x="295" y="192" text-anchor="middle" font-family="Manrope,sans-serif" font-size="10" font-weight="700" fill="#6b7280">email · carpetas · subida</text>
        </svg>`,
      },
      {
        title: "Asignación de cuentas contables",
        bullets: [
          "Propone el asiento completo: contrapartida, tipo de operación y modelos.",
          "Crea automáticamente perfiles y cuentas de proveedores y clientes.",
          "El asesor revisa las clasificaciones y contabiliza de forma masiva. Siempre decides tú.",
        ],
        media: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="30" y="26" width="360" height="188" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
          <text x="50" y="58" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#3a2f7a">Asiento propuesto</text>
          <g font-family="Manrope,sans-serif" font-size="10" font-weight="600" fill="#6b7280">
            <rect x="50" y="76" width="310" height="26" rx="6" fill="#f3f0ec"/><rect x="64" y="85" width="140" height="7" rx="3.5" fill="#c9bff0"/><text x="330" y="93" text-anchor="end">578,00</text>
            <rect x="50" y="108" width="310" height="26" rx="6" fill="#f3f0ec"/><rect x="64" y="117" width="110" height="7" rx="3.5" fill="#c9bff0"/><text x="330" y="125" text-anchor="end">121,38</text>
            <rect x="50" y="140" width="310" height="26" rx="6" fill="#f3f0ec"/><rect x="64" y="149" width="150" height="7" rx="3.5" fill="#c9bff0"/><text x="330" y="157" text-anchor="end">699,38</text>
          </g>
          <rect x="50" y="178" width="96" height="26" rx="8" fill="#111827"/><text x="98" y="195" text-anchor="middle" font-family="Manrope,sans-serif" font-size="11" font-weight="700" fill="#fff">Validar</text>
          <rect x="156" y="178" width="96" height="26" rx="8" fill="#fff" stroke="#e4ded5"/><text x="204" y="195" text-anchor="middle" font-family="Manrope,sans-serif" font-size="11" font-weight="700" fill="#3a2f7a">Editar</text>
        </svg>`,
      },
      {
        title: "Espacio de trabajo colaborativo",
        bullets: [
          "Visión global de las tareas por realizar para cada cliente.",
          "Toda la documentación y su estado, centralizada y segura.",
          "Das acceso opcional a tus clientes al mismo espacio.",
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
    ],
  },
  a3: {
    title: "Integración absoluta con A3",
    items: [
      { bold: "Sincroniza bidireccionalmente", text: "proveedores, clientes y cuentas contables siempre íntegros y actualizados." },
      { bold: "Exporta automáticamente", text: "transferencia en tiempo real; las facturas se añaden al asiento de tu software contable." },
      { bold: "Sin exportaciones manuales", text: "que restan productividad a tu equipo." },
    ],
  },
  why: {
    eyebrow: "Por qué Kabilio",
    title: "Lo que gana tu despacho",
    cards: [
      {
        kicker: "Seguridad y cumplimiento",
        title: "Tus datos, siempre protegidos",
        text: "Certificación ISO 27001 y cumplimiento del RGPD en toda la plataforma.",
        shot: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M180 28l27 12v21c0 17-13 27-27 33-14-6-27-16-27-33V40z" fill="#e9e3fd" stroke="#3a2f7a" stroke-width="3" stroke-linejoin="round"/><path d="M167 70l9 9 19-21" fill="none" stroke="#3a2f7a" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/><text x="180" y="132" text-anchor="middle" font-family="Manrope,sans-serif" font-size="17" font-weight="800" fill="#3a2f7a">ISO 27001 · GDPR</text></svg>`,
      },
      {
        kicker: "Ahorro de tiempo",
        title: "Menos tiempo contabilizando",
        text: "Tu equipo deja de picar datos y solo revisa y valida.",
        shot: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><text x="180" y="100" text-anchor="middle" font-family="Manrope,sans-serif" font-size="58" font-weight="800" fill="#3a2f7a">85%</text></svg>`,
      },
      {
        kicker: "Enfócate en asesorar",
        title: "Dedica tu tiempo a asesorar",
        text: "Deja las tareas repetitivas a la IA y centra al equipo en lo que de verdad aporta valor a tus clientes.",
        shot: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g transform="translate(180,74)"><path d="M0 -34a24 24 0 0 0-14 43c4 3 5 6 5 10h18c0-4 1-7 5-10a24 24 0 0 0-14-43z" fill="#e9e3fd" stroke="#3a2f7a" stroke-width="3" stroke-linejoin="round"/><rect x="-9" y="20" width="18" height="8" rx="2" fill="#3a2f7a"/></g></svg>`,
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Asesorías que ya procesan con IA",
    items: [
      { initials: "MC", quote: "Con Kabilio hemos reducido el tiempo dedicado a lo más repetitivo, como contabilizar facturas, y centramos al equipo en lo de más valor para el cliente.", name: "Mar Castellà", role: "Socia en Castellá" },
      { initials: "GG", quote: "Gracias a la IA de Kabilio hemos cortado drásticamente las horas de introducir facturas y bajado los picos de trabajo.", name: "Guillem Gimeno", role: "CEO en Deal Tax & Legal" },
      { initials: "AM", quote: "Queríamos liberar al equipo de tareas rutinarias para dar un servicio de valor. Kabilio nos permite hacerlo hoy.", name: "Alex Martínez Comín", role: "CEO en Martínez Comín" },
    ],
  },
  demo: {
    title: "Mira el procesador de Kabilio en acción",
    text: "Sigue una factura de principio a fin: entra, la IA propone el asiento y tú validas.",
  },
  faqs: [
    { q: "¿En qué se diferencia de un OCR?", a: "Un OCR usa plantillas para extraer datos sin comprenderlos. Kabilio los entiende e interpreta, y por eso el acierto en la propuesta contable completa es mucho mayor, incluso en los casos más complejos." },
    { q: "¿Es compatible con mi software de contabilidad?", a: "Kabilio tiene integración completa con A3ECO/A3CON: toda la información sincronizada en tiempo real. Si usas otro software, escríbenos y te avisamos en cuanto tengamos la integración." },
    { q: "¿Cómo se implementa Kabilio?", a: "Una sesión de 15 min con tu informático para crear el conector con A3ECO/A3CON, y otra de 60 min de formación con el contable que vaya a usar el producto." },
    { q: "¿Mi cliente tiene que cambiar su forma de trabajar?", a: "No. Y, si quieres, puedes darle acceso al espacio colaborativo para que comparta y consulte la información contigo más fácilmente." },
    { q: "¿Cómo protegéis mis datos?", a: "La información se aloja en la nube de AWS y cumplimos con el RGPD; todos los modelos de IA que usamos están bajo ese marco." },
  ],
  cta: {
    title: "Deja que la IA de Kabilio procese las facturas por ti",
    text: "Te enseñamos en una demo cómo el Procesador interpreta, propone y contabiliza las facturas de tus clientes en tu software contable.",
  },
};
