import { Newspaper } from "lucide-react";
import ComingSoon from "@/components/layout/ComingSoon";

export const metadata = {
  title: "Blog & Artikel - UmrahQu",
  description:
    "Panduan ibadah umrah, tips memilih paket, dan berita terbaru dari dunia perjalanan halal.",
};

export default function ArticlesPage() {
  return (
    <ComingSoon
      icon={Newspaper}
      title="Blog & Artikel"
      subtitle="Kumpulan panduan manasik, tips persiapan umrah, dan artikel perjalanan halal sedang kami tulis. Jawaban cepat sudah tersedia di halaman FAQ."
      backHref="/faq"
    />
  );
}
