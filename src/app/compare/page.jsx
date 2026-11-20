"use client";

import Link from "next/link";
import { Scale, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PAKET_UMRAH } from "@/data/dummy";
import { clearCompare, toggleCompare, useCompare } from "@/lib/compare";

const ROWS = [
  { label: "Harga", key: "price" },
  { label: "Jenis", key: "jenis" },
  { label: "Kategori", key: "category" },
  { label: "Durasi", key: "duration" },
  { label: "Maskapai", key: "airline" },
  { label: "Hotel Makkah", key: "hotel" },
  { label: "Hotel Madinah", key: "hotel_madinah" },
  { label: "Keberangkatan", key: "departure_city" },
  { label: "Tanggal Berangkat", key: "departure_date" },
  { label: "Sisa Kursi", render: (p) => `${p.seats_left}/${p.seats_total}` },
  { label: "Travel", key: "travel_name" },
];

export default function ComparePage() {
  const { slugs } = useCompare();
  const selected = PAKET_UMRAH.filter((p) => slugs.includes(p.slug));

  if (selected.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-ivory border border-black/5 flex items-center justify-center mx-auto text-emerald-dark">
          <Scale className="w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Bandingkan Paket
        </h1>
        <p className="text-xs font-medium text-gray-500">0 paket dipilih</p>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Pilih paket dari halaman Paket untuk mulai membandingkan
        </p>
        <Button
          asChild
          className="bg-emerald-dark hover:bg-emerald-deep text-white font-semibold h-10 rounded-xl text-sm px-6"
        >
          <Link href="/paket">Cari Paket</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bandingkan Paket</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            {selected.length} paket dipilih
          </p>
        </div>
        <button
          type="button"
          onClick={clearCompare}
          className="text-xs font-semibold text-rose-700 hover:text-rose-800 flex items-center gap-1.5 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
          Kosongkan
        </button>
      </div>

      <div className="bg-ivory-card rounded-2xl border border-black/5 overflow-x-auto shadow-xs">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="sticky left-0 bg-ivory-card text-left p-4 font-bold text-gray-500 uppercase tracking-wider text-[11px] min-w-[160px]">
                Detail
              </th>
              {selected.map((p) => (
                <td key={p.id} className="p-4 min-w-[220px] align-top">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleCompare(p.slug)}
                      aria-label={`Hapus ${p.title}`}
                      className="absolute -top-1 right-0 w-6 h-6 rounded-full bg-ivory hover:bg-rose-100 text-gray-500 hover:text-rose-700 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full aspect-[16/10] object-cover rounded-xl mb-2.5"
                    />
                    <Link
                      href={`/paket/${p.slug}`}
                      className="font-bold text-gray-900 hover:text-emerald-dark transition-colors leading-snug line-clamp-2"
                    >
                      {p.title}
                    </Link>
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-t border-black/5">
                <th className="sticky left-0 bg-ivory-card text-left p-4 font-semibold text-gray-500">
                  {row.label}
                </th>
                {selected.map((p) => (
                  <td
                    key={p.id}
                    className="p-4 text-gray-800 align-top border-l border-black/5"
                  >
                    {row.render ? row.render(p) : p[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
