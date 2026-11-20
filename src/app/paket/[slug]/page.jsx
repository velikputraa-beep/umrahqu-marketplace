import { notFound } from "next/navigation";
import { PAKET_UMRAH } from "@/data/dummy";
import PackageDetailClient from "@/components/marketplace/PackageDetailClient";

export async function generateStaticParams() {
  return PAKET_UMRAH.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const paket = PAKET_UMRAH.find((p) => p.slug === slug);

  if (!paket) {
    return {
      title: "Paket Tidak Ditemukan - UmrahQu",
    };
  }

  return {
    title: `${paket.title} - UmrahQu`,
    description: paket.description,
  };
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const paket = PAKET_UMRAH.find((p) => p.slug === slug);

  if (!paket) {
    notFound();
  }

  const relatedPackages = PAKET_UMRAH.filter((p) => p.id !== paket.id);

  return (
    <PackageDetailClient paket={paket} relatedPackages={relatedPackages} />
  );
}
