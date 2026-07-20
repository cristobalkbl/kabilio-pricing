"use client";

import { useEffect, useRef, useState } from "react";
import { RawSvg } from "./RawSvg";

type Step = { icon: string; title: string; text: string };

// "Cómo funciona": 3 pasos que se revelan al entrar en viewport y se
// resaltan en secuencia 1 → 2 → 3, con una línea de progreso que los une.
export function HowItWorks({
  eyebrow,
  title,
  subtitle,
  steps,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  steps: Step[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(steps.length - 1);
      return;
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const t = setTimeout(() => {
      setActive(0);
      i = 1;
      interval = setInterval(() => {
        setActive(i % steps.length);
        i++;
      }, 1400);
    }, 450);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, [inView, steps.length]);

  const progress = active <= 0 ? 0 : active / (steps.length - 1);

  return (
    <section className="py-14">
      <div className="container">
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-brand">{eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-base text-ink-muted">{subtitle}</p>}
        </div>

        <div ref={ref} className="relative grid gap-6 md:grid-cols-3">
          {/* Línea que une los pasos (solo escritorio) */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[70px] hidden h-0.5 rounded bg-line md:block" />
          <div
            className="pointer-events-none absolute left-[16.66%] top-[70px] hidden h-0.5 rounded bg-brand transition-[width] duration-700 md:block"
            style={{ width: `calc(66.68% * ${progress})` }}
          />

          {steps.map((step, idx) => {
            const isActive = idx === active;
            const isDone = active > idx;
            const dark = isActive || isDone;
            return (
              <div
                key={step.title}
                className="relative z-10 text-center transition-all duration-500"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(18px)",
                  transitionDelay: `${idx * 0.13}s`,
                }}
              >
                <span
                  className={`mx-auto mb-[18px] block w-fit rounded-full border px-3.5 py-0.5 text-[12.5px] font-extrabold tracking-[0.06em] transition-colors duration-300 ${
                    dark ? "border-brand bg-brand text-white" : "border-line bg-surface2 text-brand"
                  }`}
                >
                  {idx + 1}
                </span>
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 [&_svg]:h-[27px] [&_svg]:w-[27px] ${
                    dark ? "bg-brand text-white" : "bg-brand-100 text-brand"
                  } ${isActive ? "scale-110" : ""}`}
                >
                  <RawSvg html={step.icon} />
                </span>
                <h3 className="mx-auto mt-4 mb-2.5 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto max-w-[300px] text-[14.5px] leading-relaxed text-ink-muted">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
