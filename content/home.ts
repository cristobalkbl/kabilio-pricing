import type { Feature } from "@/components/FeatureGrid";
import type { Testimonial } from "@/components/TestimonialSection";

export const home = {
  hero: {
    eyebrow: "Contabilidad con IA",
    title: "La contabilidad de tus clientes, conciliada por IA mientras duermes",
    subtitle:
      "Kabilio conecta los bancos de tus clientes, concilia los movimientos y procesa las facturas automáticamente. Tu equipo deja de picar datos y se dedica a asesorar.",
    primaryCta: { label: "Pedir demo", href: "/solicita-una-demo" },
    secondaryCta: { label: "Ver precios", href: "/asesores/precios" },
    highlights: [
      "Sin permanencia",
      "Puesta en marcha en 48 h",
      "Soporte en español",
    ],
  },
  stats: [
    { value: "94%", label: "de los movimientos conciliados sin intervención" },
    { value: "12 h", label: "ahorradas por gestor y mes" },
    { value: "+150", label: "asesorías y gestorías confían en Kabilio" },
    { value: "99,9%", label: "de disponibilidad del servicio" },
  ],
  features: <Feature[]>[
    {
      icon: "sync",
      title: "Conciliación bancaria automática",
      description:
        "Conectamos los bancos de tus clientes vía PSD2 y la IA empareja cada movimiento con su factura o asiento. Tú solo revisas las excepciones.",
    },
    {
      icon: "invoice",
      title: "Facturas procesadas con IA",
      description:
        "Sube un PDF, una foto o reenvía un email: Kabilio extrae importes, base, IVA y proveedor, y genera el asiento contable listo para validar.",
    },
    {
      icon: "users",
      title: "Colaboración con tus clientes",
      description:
        "Tus clientes suben documentos desde el móvil y resuelven dudas en la misma plataforma. Se acabaron las carpetas de Drive y los WhatsApp sueltos.",
    },
    {
      icon: "shield",
      title: "Datos seguros y cumplimiento",
      description:
        "Infraestructura en la UE, cifrado de extremo a extremo y cumplimiento del RGPD. Tus datos y los de tus clientes, siempre protegidos.",
    },
    {
      icon: "chart",
      title: "Cuadros de mando en tiempo real",
      description:
        "Tesorería, resultados y previsión de cada cliente actualizados al minuto para que asesores con datos, no con intuiciones.",
    },
    {
      icon: "folder",
      title: "Se integra con tu software",
      description:
        "Exporta a los principales programas de contabilidad del mercado español y sincroniza modelos y libros sin duplicar trabajo.",
    },
  ],
  steps: [
    {
      title: "Conecta los bancos y sube documentos",
      description:
        "En minutos vinculas las cuentas de tus clientes y empiezas a recibir facturas por email, móvil o web.",
    },
    {
      title: "La IA concilia y contabiliza",
      description:
        "Kabilio empareja movimientos con facturas, detecta duplicados y propone los asientos contables.",
    },
    {
      title: "Tu equipo revisa y asesora",
      description:
        "Solo validas las excepciones y dedicas el tiempo que sobra a lo que de verdad aporta valor: asesorar.",
    },
  ],
  testimonials: <Testimonial[]>[
    {
      quote:
        "Hemos reducido a la mitad el tiempo de cierre mensual. La conciliación que antes nos llevaba días ahora está lista cada mañana.",
      name: "Marta Ferrer",
      role: "Socia directora",
      company: "Ferrer Asesores",
    },
    {
      quote:
        "El procesamiento de facturas con IA es lo que más nos ha sorprendido. Acierta el proveedor y el IVA prácticamente siempre.",
      name: "Javier Ruiz",
      role: "Responsable de contabilidad",
      company: "Gestoría Ruiz & Asociados",
    },
    {
      quote:
        "Nuestros clientes por fin nos mandan las facturas a tiempo porque hacerlo desde el móvil les resulta muy fácil.",
      name: "Lucía Gómez",
      role: "Fundadora",
      company: "Núcleo Gestión",
    },
  ],
};
