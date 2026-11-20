import { ScrollText } from "lucide-react";
import ComingSoon from "@/components/layout/ComingSoon";

export const metadata = {
  title: "Syarat & Ketentuan - UmrahQu",
  description:
    "Syarat dan ketentuan penggunaan platform marketplace UmrahQu untuk jamaah dan mitra travel.",
};

export default function TermsPage() {
  return (
    <ComingSoon
      icon={ScrollText}
      title="Syarat & Ketentuan"
      subtitle="Dokumen syarat penggunaan platform, hak dan kewajiban jamaah serta mitra travel sedang direview tim legal. Untuk pertanyaan mendesak, hubungi kami via WhatsApp."
      backHref="/faq"
    />
  );
}
