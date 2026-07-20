import { Button } from "./Button";
import { primaryCta } from "@/content/site";

type Props = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Banda de conversión oscura. Por defecto usa el CTA principal "Pedir demo".
export function CTABanner({
  title,
  subtitle,
  ctaLabel = primaryCta.label,
  ctaHref = primaryCta.href,
}: Props) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tightish text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-white/75">{subtitle}</p>}
            <div className="mt-8 flex justify-center">
              <Button href={ctaHref} variant="light">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
