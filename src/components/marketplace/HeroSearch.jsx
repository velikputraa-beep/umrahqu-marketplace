"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar } from "lucide-react";

const BULAN_2026 = [
  "Januari 2026",
  "Februari 2026",
  "Maret 2026",
  "April 2026",
  "Mei 2026",
  "Juni 2026",
  "Juli 2026",
  "Agustus 2026",
  "September 2026",
  "Oktober 2026",
  "November 2026",
  "Desember 2026",
];

export default function HeroSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("q", search.trim());
    if (city.trim()) params.set("city", city.trim());
    if (month) params.set("month", month);

    router.push(`/paket?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-ivory-card rounded-2xl p-3 sm:p-4 shadow-2xl max-w-4xl mx-auto border border-white/20 text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* TRAVEL / PAKET */}
        <div className="md:col-span-4 px-3 py-1.5 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
            TRAVEL / PAKET
          </label>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari travel atau paket..."
              className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* KEBERANGKATAN */}
        <div className="md:col-span-3 px-3 py-1.5 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
            KEBERANGKATAN
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Kota asal..."
              className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* WAKTU */}
        <div className="md:col-span-3 px-3 py-1.5">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
            WAKTU
          </label>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full text-sm text-gray-700 bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="">Semua Bulan</option>
              {BULAN_2026.map((bulan) => (
                <option key={bulan} value={bulan}>
                  {bulan}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* TOMBOL CARI (EMAS) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-deep text-stone-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Cari</span>
          </button>
        </div>
      </div>
    </form>
  );
}
