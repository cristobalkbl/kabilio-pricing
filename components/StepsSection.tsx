import { SectionHeading } from "./SectionHeading";

type Step = { title: string; description: string };

export function StepsSection({
  eyebrow,
  title,
  subtitle,
  steps,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
}) {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mb-14">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </div>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
