import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Daftar Keinginan
        </h1>
        <p className="text-xs text-gray-500 mt-1">0 paket tersimpan</p>
      </div>

      <div className="bg-ivory-card rounded-2xl border border-black/5 p-14 text-center space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-full bg-ivory border border-black/5 flex items-center justify-center mx-auto text-emerald-dark">
          <Heart className="w-6 h-6" />
        </div>
        <h2 className="text-base font-bold text-gray-900">
          Belum ada paket yang disimpan
        </h2>
        <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
          Tekan ikon hati pada kartu paket saat mencari untuk menyimpannya di
          sini.
        </p>
        <Button
          asChild
          className="bg-emerald-dark hover:bg-emerald-deep text-white font-semibold h-10 rounded-xl text-sm px-6"
        >
          <Link href="/paket">Temukan Paket</Link>
        </Button>
      </div>
    </div>
  );
}
