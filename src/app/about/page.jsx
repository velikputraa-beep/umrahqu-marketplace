import { Building2 } from "lucide-react";
import ComingSoon from "@/components/layout/ComingSoon";

export const metadata = {
  title: "Tentang UmrahQu - Marketplace Umrah, Haji, & Wisata Halal",
  description:
    "Profil UmrahQu, platform pencarian dan perbandingan paket umrah terpercaya di Indonesia.",
};

export default function AboutPage() {
  return (
    <ComingSoon
      icon={Building2}
      title="Tentang UmrahQu"
      subtitle="Halaman profil perusahaan, visi misi, dan tim di balik UmrahQu sedang kami siapkan. Sementara ini, kenali mitra travel kami lewat halaman Travel."
    />
  );
}
