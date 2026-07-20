"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  quote: string;
  name: string;
  avatar?: string;
  initials?: string;
  company?: string;
  asesoria?: string;
  role?: string;
};

function initialsOf(item: Item) {
  if (item.initials) return item.initials;
  return item.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function monogram(text: string) {
  return text
    .replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Carrusel de testimonios: muestra uno a la vez; se desliza para ver el resto.
export function TestimonialsCarousel({
  title,
  text,
  rating,
  items,
}: {
  title: string;
  text?: string;
  rating?: string;
  items: Item[];
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
    const n = Math.max(0, Math.min(items.length - 1, i));
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
        {items.map((t, i) => (
          <figure key={i} className="min-w-full shrink-0 snap-center px-1">
            <div className="mx-auto flex max-w-[680px] flex-col items-center rounded-2xl border border-line bg-surface p-8 text-center sm:p-10">
              {t.company && (
                <span className="mb-4 inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface2 px-3 text-sm font-extrabold text-ink">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand text-[11px] font-extrabold text-white">
                    {monogram(t.company)}
                  </span>
                  {t.company}
                </span>
              )}
              <div className="mb-3 tracking-[3px] text-gold" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className="text-pretty text-lg leading-relaxed sm:text-xl">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-200 text-sm font-extrabold text-brand">
                  {initialsOf(t)}
                  {t.avatar && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.avatar}
                      alt=""
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </span>
                <span className="text-left">
                  <b className="block text-[14px]">{t.name}</b>
                  <span className="text-[12.5px] text-ink-muted">
                    {t.company ? t.company : t.role}
                    {t.asesoria && ` · con ${t.asesoria}`}
                  </span>
                </span>
              </figcaption>
            </div>
          </figure>
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
          {items.map((_, i) => (
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

      {rating && <p className="mt-6 text-center text-[14.5px] text-ink-muted">{rating}</p>}
    </section>
  );
}
