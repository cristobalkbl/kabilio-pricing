"use client";

import { useEffect, useRef, useState } from "react";

export type TSide = { quote: string; name: string; sub: string; avatar?: string };
export type TPair = { empresa: TSide; asesoria: TSide };

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function Avatar({ side }: { side: TSide }) {
  return (
    <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-200 text-sm font-extrabold text-brand">
      {initialsOf(side.name)}
      {side.avatar && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={side.avatar}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </span>
  );
}

function Cite({ tag, side, tone }: { tag: string; side: TSide; tone: "empresa" | "asesoria" }) {
  return (
    <figure
      className={`flex flex-col rounded-[18px] border p-7 ${
        tone === "asesoria" ? "border-lav bg-brand-100" : "border-line bg-surface"
      }`}
    >
      <span className="mb-3 text-[11px] font-bold uppercase tracking-wide text-brand">{tag}</span>
      <blockquote className="mb-5 flex-1 text-base leading-relaxed">“{side.quote}”</blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar side={side} />
        <span>
          <b className="block text-[13.5px]">{side.name}</b>
          <span className="text-[12.5px] text-ink-muted">{side.sub}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// Carrusel de testimonios en pareja: empresa + su asesoría, uno a la vez.
export function PairedTestimonials({
  title,
  text,
  pairs,
}: {
  title: string;
  text?: string;
  pairs: TPair[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => setActive(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const n = Math.max(0, Math.min(pairs.length - 1, i));
    el.scrollTo({ left: el.clientWidth * n, behavior: "smooth" });
  };

  return (
    <section className="py-8">
      <div className="mx-auto mb-8 max-w-[640px] text-center">
        <h2 className="mb-2.5 text-[30px] font-bold tracking-tight">{title}</h2>
        {text && <p className="text-base leading-snug text-ink-muted">{text}</p>}
      </div>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pairs.map((p, i) => (
          <div key={i} className="min-w-full shrink-0 snap-center px-1">
            <div className="relative mx-auto grid max-w-[880px] gap-4 md:grid-cols-2">
              <Cite tag="La empresa" side={p.empresa} tone="empresa" />
              <Cite tag="Su asesoría" side={p.asesoria} tone="asesoria" />
              <span className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface font-extrabold text-brand shadow-card md:grid">
                ↔
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Anterior"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-lg text-ink transition-colors hover:bg-surface2"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {pairs.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${i === active ? "bg-brand" : "bg-line"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Siguiente"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-lg text-ink transition-colors hover:bg-surface2"
        >
          ›
        </button>
      </div>
    </section>
  );
}
