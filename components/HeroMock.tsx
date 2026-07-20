import { Icon } from "./Icon";

// Mock visual de la app (sin imágenes externas). Simula un panel de
// conciliación bancaria con IA. Puramente decorativo.
export function HeroMock() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-brand-100 via-pink to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        {/* Barra superior */}
        <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 rounded bg-surface px-2 py-0.5 text-xs text-ink-muted ring-1 ring-line">
            app.kabilio.ai
          </span>
        </div>

        <div className="grid grid-cols-3">
          {/* Sidebar */}
          <div className="col-span-1 space-y-2 border-r border-line p-4">
            {["Panel", "Bancos", "Facturas", "Clientes"].map((label, i) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                  i === 1 ? "bg-brand-50 font-semibold text-brand" : "text-ink-muted"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {label}
              </div>
            ))}
          </div>

          {/* Contenido */}
          <div className="col-span-2 space-y-3 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-ink">Conciliación de hoy</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-green/10 px-2 py-0.5 text-[10px] font-semibold text-green">
                <Icon name="sparkles" className="h-3 w-3" /> IA activa
              </span>
            </div>

            {[
              { name: "Transf. Mercadona SL", amount: "1.240,00 €", ok: true },
              { name: "Domiciliación Endesa", amount: "318,45 €", ok: true },
              { name: "Ingreso cliente #4821", amount: "2.900,00 €", ok: false },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-lg border border-line px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-md ${
                      row.ok ? "bg-green/10 text-green" : "bg-peach text-[#a5791b]"
                    }`}
                  >
                    <Icon name={row.ok ? "check" : "sync"} className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs text-ink-soft">{row.name}</span>
                </div>
                <span className="text-xs font-semibold text-ink">{row.amount}</span>
              </div>
            ))}

            <div className="rounded-lg bg-brand p-3 text-white">
              <p className="text-[10px] uppercase tracking-wide text-brand-100">Conciliado automáticamente</p>
              <p className="text-lg font-bold">94%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
