import type { FeatureLandingData } from "@/components/empresas/FeatureLanding";

export const colaboracionEmpresas: FeatureLandingData = {
  eyebrow: "Portal colaborativo",
  h1: "Trabaja con tu asesoría en el mismo sitio",
  sub: "Comparte facturas, gastos y documentos, y habla con tu asesor sin salir de Kabilio. Los dos veis lo mismo, al día, sin correos ni carpetas sueltas.",
  hero: {
    invoice: { title: "Espacio compartido", n: "Tú y tu asesoría", badge: "En común", total: { label: "Documentos", amount: "128" } },
    kpis: [
      { lbl: "Compartido con tu asesor", val: "Todo" },
      { lbl: "Mensajes", val: "36" },
      { lbl: "Estado", val: "Al día" },
    ],
  },
  benefits: {
    title: "Lo que gana tu empresa trabajando con tu asesoría en Kabilio",
    text: "Un único espacio con tu asesor: la misma información, comunicación directa y nada que reenviar.",
    items: [
      { icon: `<path d="M4 5a2 2 0 0 1 2-2h5l2 3h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>`, h: "Todo en un sitio", p: "Facturas, gastos y documentos compartidos con tu asesoría, sin emails ni carpetas sueltas." },
      { icon: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`, h: "Comunicación directa", p: "Habla con tu asesor dentro de Kabilio, junto a la información de la que habláis." },
      { icon: `<path d="M20 6 9 17l-5-5"/>`, h: "Sin reenviar nada", p: "Lo que facturas y gastas llega a tu asesoría al instante, sin carreras a fin de mes." },
    ],
  },
  features: [
    {
      k: "Un mismo espacio",
      title: "Tú y tu asesoría, sobre los mismos datos",
      text: "Toda tu actividad vive en un único sitio que tu asesoría también ve, al día. Se acabaron las versiones distintas y los «¿me lo reenvías?».",
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
      k: "Comunicación",
      title: "Habla con tu asesor sin salir de Kabilio",
      text: "Un canal directo con tu asesoría dentro de la plataforma. Las dudas se resuelven donde está la información, no en un email perdido.",
      bullets: [
        { b: "Chat asesor / cliente", d: "Escríbele y responde sin cambiar de herramienta." },
        { b: "Todo en contexto", d: "Las conversaciones, junto a las facturas y documentos." },
      ],
      mock: {
        kind: "rows",
        head: "Mensajes con tu asesoría",
        rows: [
          { avatar: "GA", label: "Tu asesor: ¿Tienes la factura de marzo?" },
          { avatar: "TÚ", label: "Ya está subida en Kabilio." },
          { avatar: "GA", label: "Perfecto, la veo. Gracias." },
        ],
      },
    },
    {
      k: "Gestor documental",
      title: "Toda la documentación, centralizada",
      text: "Guarda y comparte tus documentos con tu asesoría en un solo lugar. Encuentras lo que buscas en segundos y nada se pierde por el camino.",
      bullets: [
        { b: "Documentos organizados", d: "Facturas, modelos y contratos, siempre a mano." },
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
      text: "Lo que facturas, gastas y cobras aparece en el espacio de tu asesoría en tiempo real. Sin reenviar nada a final de mes.",
      bullets: [
        { b: "Sin reenviar nada", d: "Ni facturas ni documentos que enviar a fin de mes." },
        { b: "Sin aprender nada nuevo", d: "Es el mismo entorno que ya usa tu asesoría." },
      ],
      mock: {
        kind: "flow",
        nodes: [
          { title: "Tu empresa", small: "factura y gasta" },
          { title: "Kabilio", small: "en común", highlight: true },
          { title: "Tu asesoría", small: "lo ve al día" },
        ],
      },
    },
  ],
  testimonials: {
    title: "Negocios que ya trabajan con su asesoría en Kabilio",
    text: "Autónomos y pymes que comparten todo con su gestor, sin correos ni carpetas sueltas.",
    pairs: [
      {
        empresa: { quote: "Tengo un chat directo con mi asesor dentro de Kabilio; se acabaron los emails perdidos y las dudas se resuelven al momento.", name: "Ana Serrano", sub: "Serrano Servicios", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
        asesoria: { quote: "Hablamos con el cliente donde está la información; nada se pierde en un correo.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      },
      {
        empresa: { quote: "Subo un documento y mi asesoría lo tiene al instante. Todo en el mismo sitio, sin reenviar nada.", name: "César Beltrán", sub: "Beltrán Comercio", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
        asesoria: { quote: "Sus documentos aparecen al momento en nuestro espacio; dejamos de pedirlos.", name: "Gestoría Duero", sub: "Valladolid", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      },
      {
        empresa: { quote: "Mi gestor y yo vemos exactamente lo mismo, así que trabajar juntos es mucho más rápido.", name: "Eva Márquez", sub: "Estudio Márquez", avatar: "https://randomuser.me/api/portraits/women/50.jpg" },
        asesoria: { quote: "Trabajamos sobre los mismos datos en tiempo real; se acabó el correo y el WhatsApp.", name: "Asesoría Contalia", sub: "Sevilla", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
      },
    ],
  },
  faqs: [],
  cta: {
    title: "Trabaja con tu asesoría en Kabilio",
    text: "Comparte facturas, gastos y documentos en el mismo sitio y habla con tu asesor sin salir de la plataforma. Empieza gratis, sin tarjeta.",
  },
};
