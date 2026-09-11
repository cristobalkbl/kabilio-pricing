"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Feat = { icon: string; title: string; text: string; href?: string };

function Ico({ paths, className }: { paths: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.85} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: paths }} />
  );
}

export function AllFeaturesGrid({ features }: { features: Feat[] }) {
  const pathname = usePathname();
  // No mostrar la funcionalidad de la página que se está viendo.
  const items = features.filter((a) => a.href !== pathname);

  return (
    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((a) =>
        a.href ? (
          <Link
            key={a.title}
            href={a.href}
            className="group flex flex-col rounded-[14px] border border-line bg-surface p-5 transition duration-200 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand">
              <Ico paths={a.icon} className="h-5 w-5" />
            </span>
            <h3 className="mb-1.5 text-base font-bold group-hover:text-brand">{a.title}</h3>
            <p className="mb-3 text-[13.5px] leading-snug text-ink-muted">{a.text}</p>
            <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-bold text-brand">
              Ver más
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ) : (
          <div key={a.title} className="rounded-[14px] border border-line bg-surface p-5">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand">
              <Ico paths={a.icon} className="h-5 w-5" />
            </span>
            <h3 className="mb-1.5 text-base font-bold">{a.title}</h3>
            <p className="text-[13.5px] leading-snug text-ink-muted">{a.text}</p>
          </div>
        )
      )}
    </div>
  );
}
