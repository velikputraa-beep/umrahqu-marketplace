import Logo from "./Logo";
import { PAKET_UMRAH, TRAVEL_PARTNERS } from "@/data/dummy";

export default function AuthLeftPanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-12 xl:p-16 bg-emerald-deep text-white overflow-hidden min-h-screen">
      {/* Subtle Islamic Geometric Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      />
      {/* Decorative Star Overlays */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Top: Logo */}
      <div className="relative z-10">
        <Logo variant="light" />
      </div>

      {/* Middle: Content & Stats */}
      <div className="relative z-10 max-w-md my-auto py-12 space-y-8">
        <div>
          <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Temukan Paket Umrah <span className="text-gold">Sempurna</span>
          </h2>
          <p className="text-sm text-emerald-100/70 leading-relaxed">
            Bergabung dengan jamaah yang telah mempercayakan perjalanan ibadah
            mereka bersama UmrahQu.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-8 pt-4">
          <div>
            <span className="block text-3xl font-extrabold text-white">
              {TRAVEL_PARTNERS.length}
            </span>
            <span className="text-xs text-emerald-200/70">
              Travel Mitra Terverifikasi
            </span>
          </div>
          <div className="h-10 w-[1px] bg-emerald-800/80" />
          <div>
            <span className="block text-3xl font-extrabold text-white">
              {PAKET_UMRAH.length}
            </span>
            <span className="text-xs text-emerald-200/70">
              Paket Umrah Aktif
            </span>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="relative z-10 text-xs text-emerald-200/40">
        © 2026 UmrahQu. Seluruh hak cipta.
      </div>
    </div>
  );
}
