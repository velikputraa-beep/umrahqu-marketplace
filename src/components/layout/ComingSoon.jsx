import Link from "next/link";
import { Sparkles, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon({ title, subtitle, icon: Icon, backHref = "/" }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative bg-ivory-card rounded-2xl border border-black/5 overflow-hidden shadow-xs">
        {/* Header band — pola bintang & gradien hijau, sama seperti footer */}
        <div className="relative bg-emerald-deep px-8 py-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark/70 via-emerald-deep to-black/70" />
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 2%, transparent 0%)",
              backgroundSize: "100px 100px",
            }}
          />
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold bg-gold text-stone-950 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              COMING SOON
            </span>

            {Icon && (
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto text-gold backdrop-blur-sm">
                <Icon className="w-7 h-7" />
              </div>
            )}

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-emerald-100/75 max-w-lg mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Action area */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-transparent border-emerald-dark/30 text-emerald-dark hover:bg-emerald-dark/5 hover:border-emerald-dark h-11 rounded-xl text-sm font-semibold px-5"
          >
            <Link href={backHref} className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </Button>
          <Button
            asChild
            className="w-full sm:w-auto bg-emerald-dark hover:bg-emerald-deep text-white h-11 rounded-xl text-sm font-semibold px-5"
          >
            <Link href="/paket" className="inline-flex items-center gap-2">
              <Search className="w-4 h-4" />
              Jelajahi Paket Umrah
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
