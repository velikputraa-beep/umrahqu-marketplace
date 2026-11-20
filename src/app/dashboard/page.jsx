"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOKINGS } from "@/data/dashboard";
import StatusBadge from "@/components/dashboard/StatusBadge";

const AKTIF_STATUS = ["Menunggu", "Diproses", "Dikonfirmasi"];

export default function DashboardPage() {
  const aktif = BOOKINGS.filter((b) => AKTIF_STATUS.includes(b.status)).length;
  const selesai = BOOKINGS.filter((b) => b.status === "Selesai").length;
  const tanggal = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const stats = [
    { label: "Pesanan Aktif", value: aktif },
    { label: "Daftar Keinginan", value: 0 },
    { label: "Selesai", value: selesai },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Salam, Jemaah
        </h1>
        <p className="text-xs text-gray-500 mt-1">{tanggal}</p>
      </div>

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

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">Pesanan Terakhir</h2>
          <Link
            href="/dashboard/bookings"
            className="text-xs font-semibold text-emerald-dark hover:underline inline-flex items-center gap-1"
          >
            Semua
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="bg-ivory-card rounded-2xl border border-black/5 divide-y divide-black/5 shadow-xs">
          {BOOKINGS.slice(0, 4).map((b) => (
            <div
              key={b.code}
              className="p-4 flex items-center justify-between gap-4 hover:bg-ivory transition-colors"
            >
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">
                  {b.package_title}
                </p>
                <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                  <Link
                    href={`/dashboard/bookings/${b.code}`}
                    className="hover:text-emerald-dark hover:underline transition-colors"
                  >
                    {b.code}
                  </Link>{" "}
                  · {b.date}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-semibold text-gray-800 hidden sm:block">
                  {b.price}
                </span>
                <StatusBadge status={b.status} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
