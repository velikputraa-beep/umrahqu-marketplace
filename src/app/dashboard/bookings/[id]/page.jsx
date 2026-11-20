import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Clock, Sparkles } from "lucide-react";
import { BOOKINGS } from "@/data/dashboard";
import StatusBadge from "@/components/dashboard/StatusBadge";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const booking = BOOKINGS.find(
    (b) => b.code.toUpperCase() === String(id).toUpperCase()
  );
  return {
    title: booking ? `Pesanan ${booking.code} - UmrahQu` : "Pesanan - UmrahQu",
  };
}

export default async function BookingDetailPage({ params }) {
  const { id } = await params;
  const booking = BOOKINGS.find(
    (b) => b.code.toUpperCase() === String(id).toUpperCase()
  );

  if (!booking) notFound();

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
        <Link
          href="/dashboard"
          className="hover:text-emerald-dark transition-colors"
        >
          Dashboard
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link
          href="/dashboard/bookings"
          className="hover:text-emerald-dark transition-colors"
        >
          Pesanan Saya
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-medium font-mono">
          {booking.code}
        </span>
      </nav>

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {booking.package_title}
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            {booking.travel_name} · {booking.pax} Peserta · {booking.date}
          </p>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-ivory-card rounded-2xl border border-black/5 p-5 shadow-xs">
          <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">
            Nomor Booking
          </span>
          <span className="text-base font-bold font-mono text-emerald-dark mt-1 block">
            {booking.code}
          </span>
        </div>
        <div className="bg-ivory-card rounded-2xl border border-black/5 p-5 shadow-xs">
          <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">
            Total Harga
          </span>
          <span className="text-base font-extrabold text-emerald-dark mt-1 block">
            {booking.price}
          </span>
        </div>
      </div>

      {/* Coming Soon — rincian lengkap pesanan */}
      <div className="relative bg-ivory-card rounded-2xl border border-black/5 overflow-hidden shadow-xs">
        <div className="relative bg-emerald-deep px-6 py-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark/70 via-emerald-deep to-black/70" />
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 2%, transparent 0%)",
              backgroundSize: "100px 100px",
            }}
          />
          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold bg-gold text-stone-950">
              <Sparkles className="w-3.5 h-3.5" />
              COMING SOON
            </span>
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto text-gold">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-white">
              Rincian Pesanan
            </h2>
            <p className="text-xs text-emerald-100/75 max-w-md mx-auto leading-relaxed">
              Data jamaah, dokumen perjalanan, status pembayaran bertahap, dan
              timeline persiapan keberangkatan sedang kami siapkan.
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/paket/${booking.package_slug}`}
            className="w-full sm:w-auto text-center text-xs font-semibold text-emerald-dark border border-emerald-dark/30 hover:border-emerald-dark hover:bg-emerald-dark/5 rounded-xl px-5 py-2.5 transition-colors"
          >
            Lihat Paket Ini
          </Link>
          <Link
            href="/dashboard/bookings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-emerald-dark hover:bg-emerald-deep rounded-xl px-5 py-2.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Pesanan Saya
          </Link>
        </div>
      </div>
    </div>
  );
}
