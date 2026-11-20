"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Check, ArrowRight } from "lucide-react";
import { TRAVEL_PARTNERS } from "@/data/dummy";

export default function TravelPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("az");

  const filteredTravels = useMemo(() => {
    let result = [...TRAVEL_PARTNERS];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }

    if (sortOrder === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "paket") {
      result.sort((a, b) => b.package_count - a.package_count);
    }

    return result;
  }, [searchTerm, sortOrder]);

  return (
    <div className="space-y-8 pb-20">
      {/* 1. HERO */}
      <section className="relative min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden bg-emerald-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2000&q=85"
          alt="Kaaba Makkah"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-emerald-deep/60 to-emerald-deep/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Travel Partner <span className="text-gold">UmrahQu</span>
          </h1>

          <div className="max-w-xl mx-auto bg-ivory-card rounded-full pl-5 pr-3 py-2 flex items-center shadow-lg border border-black/5">
            <Search className="w-4 h-4 text-gray-400 shrink-0 mr-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari nama travel..."
              className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* 2. LIST */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 text-xs text-gray-600">
          <span>
            <strong className="text-gray-900 font-semibold">
              {filteredTravels.length}
            </strong>{" "}
            travel ditemukan
          </span>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-ivory-card border border-black/5 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:border-emerald-dark cursor-pointer shadow-xs"
          >
            <option value="az">Nama A–Z</option>
            <option value="paket">Paket terbanyak</option>
          </select>
        </div>

        {filteredTravels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTravels.map((travel) => (
              <div
                key={travel.id}
                className="bg-ivory-card rounded-2xl border border-black/5 p-5 flex items-center justify-between hover:border-emerald-dark/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4 min-w-0 pr-2">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-ivory border border-black/5 flex items-center justify-center overflow-hidden">
                      {travel.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={travel.logo}
                          alt={travel.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-emerald-dark font-bold text-sm">
                          {travel.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div
                      title="Mitra Resmi Terverifikasi"
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-dark text-white flex items-center justify-center ring-2 ring-ivory-card shadow-xs"
                    >
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-dark transition-colors truncate">
                      {travel.name}
                    </h3>
                    <span className="text-[11px] text-gray-400 block mb-1.5 font-medium">
                      {travel.established}
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {travel.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/travel/${travel.slug}`}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-gray-400 group-hover:bg-emerald-dark group-hover:text-white group-hover:border-emerald-dark transition-all shrink-0 ml-2"
                  aria-label={`Lihat profil ${travel.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-ivory-card rounded-2xl border border-black/5 p-12 text-center space-y-3">
            <h3 className="font-bold text-gray-800 text-sm">
              Tidak ada mitra travel ditemukan
            </h3>
            <p className="text-xs text-gray-500">
              Coba gunakan kata kunci pencarian yang berbeda.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
