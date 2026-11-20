"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  PackageCheck,
  Clock,
  Plane,
  FileCheck,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKINGS } from "@/data/dashboard";
import StatusBadge from "@/components/dashboard/StatusBadge";

export default function TrackingPage() {
  const [bookingCode, setBookingCode] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const code = bookingCode.trim().toUpperCase();
    if (!code) return;
    const found = BOOKINGS.find((b) => b.code.toUpperCase() === code);
    setResult(found ?? { notFound: true, code });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-dark/10 text-emerald-dark border border-emerald-dark/20">
          Lacak Pesanan Umrah
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Tracking Pesanan Umrah
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
          Pantau progres persiapan ibadah Anda, mulai dari konfirmasi
          pendaftaran, penerbitan visa, tiket pesawat, hingga pengiriman
          koper perlengkapan.
        </p>
      </div>

      {/* Form */}
      <div className="bg-ivory-card rounded-2xl border border-black/5 p-6 sm:p-8 shadow-xs max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
              Nomor Booking
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={bookingCode}
                onChange={(e) => setBookingCode(e.target.value)}
                placeholder="Contoh: UMRAHQ-XXXXXX"
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark uppercase font-mono transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
              Kota Keberangkatan (Opsional)
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Contoh: Jakarta"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-xs transition-colors cursor-pointer"
          >
            Cari Pesanan
          </button>
        </form>

        {result?.notFound && (
          <div className="mt-8 pt-6 border-t border-black/5 text-center space-y-2">
            <p className="text-sm font-bold text-gray-900">
              Pesanan {result.code} tidak ditemukan
            </p>
            <p className="text-xs text-gray-500">
              Coba kode contoh: {BOOKINGS[0].code}
            </p>
          </div>
        )}

        {result && !result.notFound && (
          <div className="mt-8 pt-6 border-t border-black/5 space-y-6">
            <div className="p-4 bg-emerald-dark/5 rounded-xl border border-emerald-dark/20 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-[11px] text-emerald-dark font-medium block">
                  Status Pemesanan {result.code}
                </span>
                <span className="text-base font-bold text-gray-900 block mt-0.5 truncate">
                  {result.package_title}
                </span>
                <span className="text-[11px] text-gray-500">
                  {result.travel_name} · {result.date}
                </span>
              </div>
              <StatusBadge status={result.status} />
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {[
                { icon: FileCheck, label: "Booking", note: "Selesai", done: true },
                {
                  icon: PackageCheck,
                  label: "Perlengkapan",
                  note: "Dikirim",
                  done: true,
                },
                {
                  icon: Clock,
                  label: "Visa & Tiket",
                  note: "Proses",
                  done: false,
                  current: true,
                },
                {
                  icon: Plane,
                  label: "Berangkat",
                  note: "Menunggu",
                  done: false,
                },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="space-y-1.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                        s.done
                          ? "bg-emerald-dark text-white"
                          : s.current
                            ? "bg-gold text-stone-950"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-gray-900 block">
                      {s.label}
                    </span>
                    <span
                      className={`text-[10px] font-medium ${
                        s.done
                          ? "text-emerald-dark"
                          : s.current
                            ? "text-amber-700"
                            : "text-gray-400"
                      }`}
                    >
                      {s.note}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <Button
          variant="ghost"
          asChild
          className="text-gray-600 hover:text-emerald-dark"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
