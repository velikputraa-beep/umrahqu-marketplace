import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Headphones,
  BadgeCheck,
  TrendingUp,
  CreditCard,
  Lock,
  ArrowRight,
} from "lucide-react";
import HeroSearch from "@/components/marketplace/HeroSearch";
import ProductCard from "@/components/marketplace/ProductCard";
import { PAKET_UMRAH, TRAVEL_PARTNERS } from "@/data/dummy";

const KEUNGGULAN = [
  {
    icon: Scale,
    title: "Bandingkan Paket",
    desc: "Bandingkan harga, fasilitas, dan itinerary dari berbagai travel dalam satu tampilan.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Terpercaya",
    desc: "Semua travel partner kami telah terverifikasi dan memiliki track record yang baik.",
  },
  {
    icon: Headphones,
    title: "Mudah & Cepat",
    desc: "Proses pemesanan yang mudah dengan dukungan pelanggan 24/7.",
  },
];

const TRUST_BADGES = [
  {
    icon: Lock,
    title: "Pembayaran Aman",
    desc: "Dana tersimpan hingga perjalanan terkonfirmasi",
  },
  {
    icon: ShieldCheck,
    title: "Travel Terverifikasi",
    desc: "Semua mitra terdaftar & berizin resmi Kemenhaj RI",
  },
  {
    icon: TrendingUp,
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi",
  },
  {
    icon: CreditCard,
    title: "Bayar Bertahap",
    desc: "DP dulu, pelunasan maksimal H-30 keberangkatan",
  },
];

function SectionTitle({ title, href, cta = "Semua" }) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-dark tracking-tight">
          {title}
        </h2>
        <div className="w-12 h-1 bg-gold rounded-full mt-2" />
      </div>
      <Link
        href={href}
        className="text-sm font-semibold text-ivory-ink/70 hover:text-emerald-dark flex items-center gap-1 transition-colors"
      >
        {cta} <ArrowRight className="w-4 h-4 ml-0.5" />
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2000&q=85"
            alt="Masjidil Haram Makkah"
            className="w-full h-full object-cover object-center filter brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm text-white/85 mb-4">
            Marketplace Umrah, Haji, Wisata Halal
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 drop-shadow-sm">
            Cari, Bandingkan &amp; Pesan Langsung
          </h1>

          <div className="w-full max-w-4xl">
            <HeroSearch />
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-sm font-medium mt-8 flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-white">{TRAVEL_PARTNERS.length}</span>{" "}
              Travel Mitra Terverifikasi
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40"></span>
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-white">{PAKET_UMRAH.length}</span>{" "}
              Paket Umrah Aktif
            </span>
          </div>
        </div>
      </section>

      {/* 2. SECTION PAKET UMRAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <SectionTitle title="Paket Umrah" href="/paket" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {PAKET_UMRAH.map((paket) => (
            <ProductCard key={paket.id} paket={paket} />
          ))}
        </div>
      </section>

      {/* 3. SECTION KENAPA PILIH UMRAHQU? */}
      <section className="bg-ivory/60 border-y border-black/5 mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-dark tracking-tight">
              Kenapa Pilih UmrahQu?
            </h2>
            <div className="w-12 h-1 bg-gold rounded-full mt-2 mb-3" />
            <p className="text-sm text-ivory-ink/60">
              Kami membantu Anda menemukan paket umrah terbaik dengan mudah dan terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEUNGGULAN.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-emerald-dark text-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-emerald-deep transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5">{title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION TRAVEL PARTNER (MARQUEE LOGO) */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Travel Partner Terpercaya" href="/travel" />
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...TRAVEL_PARTNERS, ...TRAVEL_PARTNERS].map((travel, idx) => (
              <Link
                key={`${travel.slug}-${idx}`}
                href={`/travel/${travel.slug}`}
                className="bg-ivory-card rounded-xl border border-black/5 hover:border-emerald-dark/40 hover:shadow-sm px-4 py-3 flex items-center gap-3 shrink-0 transition-all group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={travel.logo}
                  alt={travel.name}
                  loading="lazy"
                  className="w-9 h-9 rounded-lg object-cover bg-white border border-black/5 shrink-0"
                />
                <span className="text-xs font-semibold text-ivory-ink group-hover:text-emerald-dark whitespace-nowrap">
                  {travel.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION TRUST BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_BADGES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-ivory-card border border-black/5 rounded-2xl p-5 flex items-start gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-deep flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-ivory-ink text-sm mb-1">{title}</h4>
                <p className="text-xs text-ivory-ink/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "UmrahQu - Teman Perjalanan Terbaikmu",
};
