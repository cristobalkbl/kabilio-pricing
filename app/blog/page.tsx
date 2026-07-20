import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Actualidad contable y fiscal, automatización con IA, Verifactu y consejos para asesorías, gestorías y pymes. El blog de Kabilio.",
  path: "/blog",
});

const posts = [
  {
    category: "Normativa",
    title: "Verifactu: qué cambia y cómo prepararte sin agobios",
    excerpt:
      "Repasamos las claves de la Ley Antifraude y qué debe hacer tu negocio para cumplir a tiempo.",
    date: "10 de julio de 2026",
    readingTime: "6 min",
  },
  {
    category: "Automatización",
    title: "Cómo la IA concilia el 90% de tus movimientos bancarios",
    excerpt:
      "Explicamos, sin tecnicismos, cómo funciona la conciliación automática y qué la hace fiable.",
    date: "1 de julio de 2026",
    readingTime: "5 min",
  },
  {
    category: "Despachos",
    title: "5 tareas que tu asesoría debería dejar de hacer a mano",
    excerpt:
      "Identifica el trabajo repetitivo que te está costando horas facturables cada mes.",
    date: "24 de junio de 2026",
    readingTime: "4 min",
  },
  {
    category: "Pymes",
    title: "Guía rápida de facturación para autónomos en 2026",
    excerpt:
      "Lo esencial para facturar bien, cobrar a tiempo y no llevarte sorpresas con Hacienda.",
    date: "17 de junio de 2026",
    readingTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Ideas para trabajar mejor con la contabilidad"
        subtitle="Normativa, automatización y buenas prácticas para asesorías, gestorías y empresas."
      />

      <section className="bg-white py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-card"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand">
                  {post.category}
                </span>
                <span className="text-ink-muted">{post.readingTime} de lectura</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-ink group-hover:text-brand">
                <Link href="/blog">{post.title}</Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <p className="mt-6 text-xs text-ink-muted">{post.date}</p>
            </article>
          ))}
        </div>

        <div className="container mt-12 text-center text-sm text-ink-muted">
          Pronto publicaremos más artículos. ¿Hay algún tema que te interese?{" "}
          <Link href="/contacto" className="font-medium text-brand hover:underline">
            Cuéntanoslo
          </Link>
          .
        </div>
      </section>

      <CTABanner
        title="Automatiza tu contabilidad con Kabilio"
        subtitle="Pide una demo y pon en práctica lo que lees en el blog."
      />
    </>
  );
}
