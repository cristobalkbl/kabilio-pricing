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
      { icon: `<path d="M4 5a2 2 0 0 1 2-2h5l2 3h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>`, h: "Todo en un sitio", p: "Modelos, contratos y otros documentos compartidos con tu asesoría, sin emails ni carpetas sueltas." },
      { icon: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>`, h: "Documentación organizada", p: "Todo clasificado y localizable en segundos; nada se pierde por el camino." },
      { icon: `<path d="M20 6 9 17l-5-5"/>`, h: "Sin reenviar nada", p: "Subes un documento y tu asesoría lo tiene al instante, sin correos a fin de mes." },
    ],
  },
  features: [
    {
      k: "Un mismo espacio",
      title: "Tú y tu asesoría, sobre los mismos datos",
      text: "Toda tu documentación vive en un único sitio que tu asesoría también ve, al día. Se acabaron las versiones distintas y los documentos duplicados.",
      bullets: [
        { b: "La misma información", d: "Ves lo mismo que tu asesor, actualizado en tiempo real." },
        { b: "Sin sistemas paralelos", d: "Ni Excel por un lado ni correos por otro." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tú", small: "tu empresa" },
          { title: "Kabilio", small: "en común", highlight: true },
          { title: "Tu asesoría", small: "al día" },
        ],
      },
    },
    {
      k: "Gestor documental",
      title: "Toda la documentación, centralizada",
      text: "Comparte con tu asesoría documentos como modelos, contratos y nóminas en un solo lugar. Encuentras lo que buscas en segundos y nada se pierde por el camino.",
      bullets: [
        { b: "Documentos organizados", d: "Modelos, contratos y nóminas, siempre a mano." },
        { b: "Compartido con tu asesor", d: "Lo subes tú y tu asesoría lo tiene al momento." },
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
      title: "Todo llega solo a tu asesoría",
      text: "Lo que subes aparece en el espacio de tu asesoría en tiempo real. Sin reenviar nada a final de mes.",
      bullets: [
        { b: "Sin reenviar nada", d: "Ni documentos ni archivos que enviar a fin de mes." },
        { b: "Sin aprender nada nuevo", d: "Es el mismo entorno que ya usa tu asesoría." },
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
