import { CASHBACK_HISTORY, CASHBACK_TOTAL } from "@/data/dashboard";

export default function CashbackPage() {
  const stats = [
    { label: "Total Cashback", value: CASHBACK_TOTAL.total },
    { label: "Tersedia", value: CASHBACK_TOTAL.tersedia },
    { label: "Tertunda", value: CASHBACK_TOTAL.tertunda },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Cashback</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-ivory-card rounded-2xl border border-black/5 p-5 shadow-xs"
          >
            <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">
              {s.label}
            </span>
            <span className="text-lg font-extrabold text-emerald-dark mt-1 block">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      <section className="space-y-2">
        <h2 className="text-base font-bold text-gray-900">Riwayat Cashback</h2>
        <div className="bg-ivory-card rounded-2xl border border-black/5 divide-y divide-black/5 shadow-xs">
          {CASHBACK_HISTORY.map((c) => (
            <div
              key={c.amount + c.date}
              className="p-4 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">
                  {c.package_title}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">{c.date}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-extrabold text-emerald-dark">
                  {c.amount}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-emerald-dark/10 text-emerald-dark border-emerald-dark/25">
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
