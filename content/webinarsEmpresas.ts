// Webinars de presentación del producto para empresas (mismo webinar, varias
// fechas) y vídeos de la academy. Se usa en la aside de contacto y en la
// sección de webinars.
// TODO: sustituir por las fechas, los vídeos y los enlaces reales.

// Calendario de webinars: la página donde se ven todas las fechas y se reserva.
// TODO: apuntar a la URL real del calendario cuando exista.
export const webinarsCalendarHref = "/recursos";

// Colección de la video academy en el centro de ayuda.
export const academyHref =
  "https://help.kabilio.es/es/collections/1459848-video-academy-kabilio-empresas";

export const WEBINAR_TITLE = "Presentación de Kabilio para empresas";

export type Webinar = { weekday: string; day: string; month: string; time: string };

export const webinars: Webinar[] = [
  { weekday: "Miércoles", day: "13", month: "Ago", time: "10:00 h (CEST)" },
  { weekday: "Jueves", day: "21", month: "Ago", time: "17:00 h (CEST)" },
  { weekday: "Miércoles", day: "3", month: "Sep", time: "10:00 h (CEST)" },
];

// Vídeos destacados de la academy, con su duración.
export const academyVideos: { title: string; length: string }[] = [
  { title: "Emite tu primera factura con Verifactu", length: "2 min" },
  { title: "Sube tus gastos y que lleguen a tu asesoría", length: "2 min" },
  { title: "Conecta tu banco y controla la tesorería", length: "2 min" },
];
