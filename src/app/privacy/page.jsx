import { ShieldCheck } from "lucide-react";
import ComingSoon from "@/components/layout/ComingSoon";

export const metadata = {
  title: "Kebijakan Privasi - UmrahQu",
  description:
    "Bagaimana UmrahQu mengumpulkan, menggunakan, dan melindungi data pribadi jamaah.",
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      icon={ShieldCheck}
      title="Kebijakan Privasi"
      subtitle="Penjelasan lengkap soal pengumpulan data, enkripsi pembayaran, dan hak Anda atas data pribadi sedang kami finalisasi. Semua transaksi di UmrahQu diproses melalui kanal terenkripsi."
      backHref="/faq"
    />
  );
}
