"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATUS_SEMUA, BOOKINGS } from "@/data/dashboard";
import StatusBadge from "@/components/dashboard/StatusBadge";

const AKTIF_STATUS = ["Menunggu", "Diproses", "Dikonfirmasi"];

export default function BookingsPage() {
  const [status, setStatus] = useState("Semua");

  const filtered = useMemo(
    () => (status === "Semua" ? BOOKINGS : BOOKINGS.filter((b) => b.status === status)),
    [status]
  );

  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((b) => {
      if (!map.has(b.month)) map.set(b.month, []);
      map.get(b.month).push(b);
    });
    return [...map.entries()];
  }, [filtered]);

  const bulanIni = BOOKINGS.filter((b) => b.month === "November 2026").length;

  const stats = [
    { label: "Total Pemesanan", value: BOOKINGS.length },
    {
      label: "Aktif",
      value: BOOKINGS.filter((b) => AKTIF_STATUS.includes(b.status)).length,
    },
    { label: "Bulan Ini", value: bulanIni },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Pesanan Saya
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-ivory-card rounded-2xl border border-black/5 p-5 shadow-xs"
          >
            <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">
              {s.label}
            </span>
            <span className="text-2xl font-extrabold text-emerald-dark mt-1 block">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {STATUS_SEMUA.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors cursor-pointer ${
              status === s
                ? "bg-emerald-dark text-white border-emerald-dark"
                : "bg-ivory-card text-gray-600 border-black/10 hover:border-emerald-dark hover:text-emerald-dark"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {grouped.length > 0 ? (
        <div className="space-y-6">
          {grouped.map(([month, items]) => (
            <section key={month} className="space-y-2">
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                {month}
              </h3>
              <div className="bg-ivory-card rounded-2xl border border-black/5 divide-y divide-black/5 shadow-xs">
                {items.map((b) => (
                  <div
                    key={b.code}
                    className="p-4 flex flex-wrap items-center justify-between gap-3 hover:bg-ivory transition-colors"
                  >
                    <div className="min-w-0">
                      <Link
                        href={`/paket/${b.package_slug}`}
                        className="text-xs font-bold text-gray-900 hover:text-emerald-dark transition-colors block truncate"
                      >
                        {b.package_title}
                      </Link>
                      <Link
                        href={`/dashboard/bookings/${b.code}`}
                        className="text-[11px] text-gray-400 font-mono mt-0.5 hover:text-emerald-dark hover:underline transition-colors block"
                      >
                        {b.code}
                      </Link>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-[11px] text-gray-500">
                        {b.pax} Peserta
                      </span>
                      <span className="text-xs font-semibold text-gray-800">
                        {b.price}
                      </span>
                      <span className="text-[11px] text-gray-400">{b.date}</span>
                      <StatusBadge status={b.status} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <p className="text-[11px] text-gray-400">
            Menampilkan 1-{filtered.length} dari {filtered.length} pemesanan
          </p>
        </div>
      ) : (
        <div className="bg-ivory-card rounded-2xl border border-black/5 p-12 text-center space-y-2">
          <h3 className="font-bold text-gray-800 text-sm">
            Tidak ada pemesanan
          </h3>
          <p className="text-xs text-gray-500">
            Belum ada pesanan dengan status {status.toLowerCase()}.
          </p>
        </div>
      )}
    </div>
  );
}
