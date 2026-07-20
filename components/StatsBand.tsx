type Stat = { value: string; label: string };

export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-line bg-surface py-12">
      <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
