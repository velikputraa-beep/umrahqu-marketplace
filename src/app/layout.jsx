import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UmrahQu - Marketplace Umrah, Haji, & Wisata Halal",
  description:
    "Cari, bandingkan dan pesan paket umrah langsung dari biro travel terpercaya dan berizin resmi Kemenag RI.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
