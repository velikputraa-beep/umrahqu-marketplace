import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ChevronRight, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { TRAVEL_PARTNERS, PAKET_UMRAH } from "@/data/dummy";
import ProductCard from "@/components/marketplace/ProductCard";

export async function generateStaticParams() {
  return TRAVEL_PARTNERS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const travel = TRAVEL_PARTNERS.find((t) => t.slug === slug);
  return {
    title: travel ? `${travel.name} - UmrahQu` : "Travel Tidak Ditemukan - UmrahQu",
    description: travel?.description,
  };
}

export default async function TravelProfilePage({ params }) {
  const { slug } = await params;
  const travel = TRAVEL_PARTNERS.find((t) => t.slug === slug);

  if (!travel) notFound();

  const packages = PAKET_UMRAH.filter((p) => p.travel_slug === travel.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500">
        <Link href="/" className="hover:text-emerald-dark transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link href="/travel" className="hover:text-emerald-dark transition-colors">
          Travel
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-medium truncate">{travel.name}</span>
      </nav>

      {/* Profile Header */}
      <section className="bg-ivory-card rounded-2xl border border-black/5 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row gap-6 items-start">
        <div className="relative shrink-0">
          <div className="w-24 h-24 rounded-2xl bg-ivory border border-black/5 flex items-center justify-center overflow-hidden">
            {travel.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={travel.logo}
                alt={travel.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-emerald-dark font-bold text-2xl">
                {travel.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-dark text-white flex items-center justify-center ring-2 ring-ivory-card shadow-xs">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        <div className="space-y-3 min-w-0 flex-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {travel.name}
            </h1>
            <p className="text-[11px] text-gray-400 font-medium mt-0.5">
              {travel.established}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 bg-gold/20 text-stone-900 font-semibold px-2.5 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              {travel.rating}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-dark/10 text-emerald-dark font-semibold px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              {travel.permit_number}
            </span>
            <span className="text-gray-500 font-medium">
              {packages.length} paket aktif
            </span>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            {travel.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 pt-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
              <span>{travel.address}</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-emerald-dark shrink-0 mt-0.5" />
              <span>{travel.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Paket dari {travel.name}
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

        {packages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {packages.map((p) => (
              <ProductCard key={p.id} paket={p} />
            ))}
          </div>
        ) : (
          <div className="bg-ivory-card rounded-2xl border border-black/5 p-12 text-center space-y-2">
            <h3 className="font-bold text-gray-800 text-sm">
              Belum ada paket aktif
            </h3>
            <p className="text-xs text-gray-500">
              Travel ini sedang tidak membuka pendaftaran paket.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
