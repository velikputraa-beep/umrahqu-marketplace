"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Scale, Users, BadgeCheck } from "lucide-react";
import { toggleCompare, useCompare } from "@/lib/compare";

export default function ProductCard({ paket }) {
  const [isLiked, setIsLiked] = useState(false);
  const { isSelected } = useCompare();
  const compared = isSelected(paket.slug);

  return (
    <div className="group bg-ivory-card rounded-2xl border border-black/5 hover:border-emerald-dark/30 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Gambar Paket */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={paket.image}
          alt={paket.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          <button
            type="button"
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Tambah ke wishlist"
            title={isLiked ? "Hapus dari wishlist" : "Tambah ke wishlist"}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-all cursor-pointer ${
              isLiked
                ? "bg-white text-rose-500"
                : "bg-white/90 hover:bg-white text-gray-700 hover:text-rose-500"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-rose-500 text-rose-500" : ""}`} />
          </button>

          <button
            type="button"
            onClick={() => toggleCompare(paket.slug)}
            aria-label="Bandingkan paket"
            aria-pressed={compared}
            title={compared ? "Hapus dari perbandingan" : "Bandingkan paket"}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-all cursor-pointer ${
              compared
                ? "bg-emerald-dark text-white"
                : "bg-white/90 hover:bg-white text-gray-700 hover:text-emerald-dark"
            }`}
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/paket/${paket.slug}`}>
            <h3 className="font-semibold text-ivory-ink text-sm leading-snug line-clamp-2 hover:text-emerald-dark transition-colors mb-2">
              {paket.title}
            </h3>
          </Link>

          <div className="flex items-baseline gap-1 mb-1.5">
            <span className="font-bold text-emerald-dark text-base">
              {paket.price}
            </span>
            <span className="text-xs text-gray-500 font-normal">/org</span>
          </div>

          <p className="text-xs text-gray-500 mb-3 line-clamp-1">
            {paket.route ||
              `${paket.departure_city}, ${paket.destination_city} · ${paket.duration}`}
          </p>

          {/* Sisa Kursi & Progress Bar */}
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center justify-between text-[11px] text-gray-600">
              <span className="flex items-center gap-1 font-medium">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                Sisa Kursi
              </span>
              <span className="font-semibold text-ivory-ink">
                {paket.seats_left}/{paket.seats_total}
              </span>
            </div>
            <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-dark h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.max(10, Math.min(100, (paket.seats_left / paket.seats_total) * 100))}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Cashback (Emas) */}
        {paket.cashback && (
          <Link
            href={`/paket/${paket.slug}`}
            className="w-full bg-gold hover:bg-gold-deep text-stone-950 text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
          >
            <BadgeCheck className="w-3.5 h-3.5" />
            <span>{paket.cashback}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
