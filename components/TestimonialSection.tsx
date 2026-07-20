import { SectionHeading } from "./SectionHeading";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  testimonials: Testimonial[];
};

// Sección de testimonios: citas de clientes con nombre y empresa.
export function TestimonialSection({ eyebrow, title, testimonials }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="container">
        {title && (
          <div className="mb-14">
            <SectionHeading eyebrow={eyebrow} title={title} />
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface2 p-6"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-300" fill="currentColor" aria-hidden="true">
                <path d="M7 7h4v6a4 4 0 0 1-4 4H6v-2h1a2 2 0 0 0 2-2v-1H7V7Zm8 0h4v6a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2v-1h-2V7Z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-ink-soft">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink-muted">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
