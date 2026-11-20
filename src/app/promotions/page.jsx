import { BadgePercent } from "lucide-react";
import ComingSoon from "@/components/layout/ComingSoon";

export const metadata = {
  title: "Promo & Penawaran - UmrahQu",
  description:
    "Promo cashback, potongan harga, dan penawaran spesial paket umrah dari mitra travel UmrahQu.",
};

export default function PromotionsPage() {
  return (
    <ComingSoon
      icon={BadgePercent}
      title="Promo & Penawaran"
      subtitle="Etalase promo musiman sedang kami kurasi. Promo cashback yang aktif sudah bisa Anda lihat langsung di kartu paket dan halaman detail paket."
      backHref="/paket"
    />
  );
}
