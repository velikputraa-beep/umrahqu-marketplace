"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Scale,
  Calendar,
  Clock,
  Plane,
  Hotel,
  Star,
  Users,
  Check,
  ChevronRight,
  ShieldCheck,
  Lock,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/marketplace/ProductCard";
import { toggleCompare, useCompare } from "@/lib/compare";

export default function PackageDetailClient({ paket, relatedPackages }) {
  const images =
    paket.gallery && paket.gallery.length > 0 ? paket.gallery : [paket.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const imageIndex = Math.max(0, images.indexOf(selectedImage));
  const [isLiked, setIsLiked] = useState(false);
  const { isSelected } = useCompare();
  const compared = isSelected(paket.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500">
        <Link href="/" className="hover:text-emerald-dark transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link
          href="/paket"
          className="hover:text-emerald-dark transition-colors"
        >
          Cari Paket
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-medium truncate max-w-md">
          {paket.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Gallery + Tabs */}
        <div className="lg:col-span-8 space-y-8">
          {/* Gallery */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 border border-black/5 shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt={paket.title}
              className="w-full h-full object-cover transition-all duration-300"
            />

            <button
              type="button"
              onClick={() => setIsLiked(!isLiked)}
              aria-label="Simpan ke daftar keinginan"
              className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer ${
                isLiked
                  ? "bg-white text-rose-500"
                  : "bg-white/90 hover:bg-white text-gray-700"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${isLiked ? "fill-rose-500 text-rose-500" : ""}`}
              />
            </button>

            {images.length > 1 && (
              <span className="absolute bottom-4 right-4 text-[11px] font-semibold text-white bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {imageIndex + 1} / {images.length}
              </span>
            )}
          </div>

          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3 -mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === img
                      ? "border-emerald-dark ring-2 ring-emerald-dark/20"
                      : "border-black/5 hover:border-gray-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Tabs */}
          <div className="bg-ivory-card rounded-2xl border border-black/5 p-6 shadow-xs">
            <Tabs defaultValue="ringkasan" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-xl mb-6 bg-ivory p-1 rounded-xl">
                <TabsTrigger
                  value="ringkasan"
                  className="text-xs sm:text-sm font-semibold rounded-lg data-[state=active]:bg-ivory-card data-[state=active]:text-emerald-dark data-[state=active]:shadow-xs"
                >
                  Ringkasan
                </TabsTrigger>
                <TabsTrigger
                  value="itinerary"
                  className="text-xs sm:text-sm font-semibold rounded-lg data-[state=active]:bg-ivory-card data-[state=active]:text-emerald-dark data-[state=active]:shadow-xs"
                >
                  Itinerary
                </TabsTrigger>
                <TabsTrigger
                  value="fasilitas"
                  className="text-xs sm:text-sm font-semibold rounded-lg data-[state=active]:bg-ivory-card data-[state=active]:text-emerald-dark data-[state=active]:shadow-xs"
                >
                  Fasilitas
                </TabsTrigger>
                <TabsTrigger
                  value="ulasan"
                  className="text-xs sm:text-sm font-semibold rounded-lg data-[state=active]:bg-ivory-card data-[state=active]:text-emerald-dark data-[state=active]:shadow-xs"
                >
                  Ulasan ({paket.reviews?.length || 0})
                </TabsTrigger>
              </TabsList>

              {/* TAB 1: RINGKASAN */}
              <TabsContent value="ringkasan" className="space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {paket.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-ivory rounded-xl border border-black/5 flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-emerald-dark shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                        Maskapai
                      </span>
                      <span className="font-semibold text-gray-800">
                        {paket.airline}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-ivory rounded-xl border border-black/5 flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-dark shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                        Durasi
                      </span>
                      <span className="font-semibold text-gray-800">
                        {paket.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-ivory rounded-xl border border-black/5 flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-emerald-dark shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                        Tanggal Berangkat
                      </span>
                      <span className="font-semibold text-gray-800">
                        {paket.departure_date}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-ivory rounded-xl border border-black/5 flex items-center gap-2.5">
                    <Hotel className="w-4 h-4 text-emerald-dark shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                        Hotel Makkah
                      </span>
                      <span className="font-semibold text-gray-800">
                        {paket.hotel}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-ivory rounded-xl border border-black/5 flex items-center gap-2.5 sm:col-span-2">
                    <Hotel className="w-4 h-4 text-emerald-dark shrink-0" />
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                        Hotel Madinah
                      </span>
                      <span className="font-semibold text-gray-800">
                        {paket.hotel_madinah}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Fasilitas Utama
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {paket.includes?.map((inc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-gray-700 bg-ivory p-2.5 rounded-lg border border-black/5"
                      >
                        <Check className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* TAB 2: ITINERARY */}
              <TabsContent value="itinerary" className="space-y-6">
                <h3 className="text-base font-bold text-gray-900">
                  Rencana Perjalanan ({paket.duration})
                </h3>
                <div className="relative border-l-2 border-emerald-dark/25 pl-6 ml-3 space-y-8">
                  {paket.itinerary?.map((item) => (
                    <div key={item.day} className="relative group">
                      <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-dark ring-4 ring-ivory transition-transform group-hover:scale-125" />
                      <span className="text-[10px] font-bold text-emerald-dark uppercase tracking-wider block mb-1">
                        Hari {item.day}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* TAB 3: FASILITAS */}
              <TabsContent value="fasilitas" className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Termasuk
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {paket.includes?.map((inc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-gray-700 bg-ivory p-2.5 rounded-lg border border-black/5"
                      >
                        <Check className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Tidak Termasuk
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {paket.excludes?.map((exc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-gray-500 bg-ivory/60 p-2.5 rounded-lg border border-black/5"
                      >
                        <span className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          ✕
                        </span>
                        <span>{exc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* TAB 4: ULASAN */}
              <TabsContent value="ulasan" className="space-y-4">
                {paket.reviews?.length ? (
                  paket.reviews.map((rev, i) => (
                    <div
                      key={i}
                      className="bg-ivory p-4 rounded-xl border border-black/5 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900">
                          {rev.name}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {rev.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, s) => (
                          <Star
                            key={s}
                            className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-500 py-6 text-center">
                    Belum ada ulasan untuk paket ini.
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right: Sticky Booking Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-ivory-card rounded-2xl border border-black/5 p-6 shadow-sm space-y-5">
            <span className="inline-block bg-emerald-dark text-white text-[11px] font-semibold px-3 py-1 rounded-full">
              {paket.category}
            </span>

            <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              {paket.title}
            </h1>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-dark">
                {paket.price}
              </span>
              <span className="text-xs text-gray-500 font-normal">/ orang</span>
            </div>

            {paket.cashback && (
              <div className="bg-gold text-stone-950 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>{paket.cashback}</span>
              </div>
            )}

            <div className="p-4 bg-ivory rounded-xl border border-black/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-dark" />
                  Sisa Kursi
                </span>
                <span className="font-bold text-emerald-dark">
                  {paket.seats_left}/{paket.seats_total}
                </span>
              </div>
              <div className="w-full bg-ivory h-2 rounded-full overflow-hidden border border-black/5">
                <div
                  className="bg-emerald-dark h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(paket.seats_left / paket.seats_total) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-2.5">
              <Button
                asChild
                className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-bold h-11 rounded-xl text-sm shadow-xs transition-colors"
              >
                <Link href={`/checkout?slug=${paket.slug}`}>Pesan</Link>
              </Button>

              <Button
                variant="outline"
                onClick={() => toggleCompare(paket.slug)}
                aria-pressed={compared}
                className={`w-full h-11 rounded-xl text-sm font-semibold border-emerald-dark transition-colors ${
                  compared
                    ? "bg-emerald-dark text-white hover:bg-emerald-deep"
                    : "text-emerald-dark hover:bg-emerald-dark/5"
                }`}
              >
                <Scale className="w-4 h-4 mr-1.5" />
                {compared ? "Bandingkan (Dipilih)" : "Bandingkan"}
              </Button>
            </div>

            <p className="text-[11px] text-gray-500 text-center leading-relaxed">
              Bayar via saldo dompet, transfer, atau pembayaran lainnya
            </p>

            <Link
              href={`/travel/${paket.travel_slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-emerald-dark hover:underline pt-1"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{paket.travel_name}</span>
            </Link>

            <div className="border-t border-black/5 pt-4 space-y-2">
              <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Keamanan &amp; Jaminan
              </h4>
              {[
                "Pembayaran aman & terenkripsi",
                "Travel partner terverifikasi",
                "Jaminan keberangkatan",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-dark shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Packages */}
      {relatedPackages && relatedPackages.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Paket Umrah Lainnya
              </h2>
              <div className="w-10 h-1 bg-gold rounded-full mt-1.5" />
            </div>
            <Link
              href="/paket"
              className="text-xs font-semibold text-emerald-dark hover:underline"
            >
              Lihat Semua
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedPackages.slice(0, 4).map((p) => (
              <ProductCard key={p.id} paket={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
