# UmrahQu Marketplace — Project Rules

## Tech Stack (NON-NEGOTIABLE)
- Framework: Next.js 15 (App Router)
- Language: JavaScript MURNI (.jsx dan .js). DILARANG PAKAI TYPESCRIPT!
- Styling: Tailwind CSS v4
- UI Components: shadcn/ui (Radix UI + Nova theme)
- Icons: Lucide React

## Design System (WAJIB DIIKUTI)
- Web Marketplace ini pakai tema TERANG (Light Mode) dengan background putih (`bg-white` atau `bg-gray-50`).
- Warna Utama: Hijau Gelap (Emerald-800 / `text-emerald-800` atau `bg-emerald-800`).
- Warna Aksen: Emas/Kuning (Amber-500).
- Gaya UI: Bersih, modern, premium (seperti travel agent mewah).
- Semua Card WAJIB pakai `rounded-xl` atau `rounded-2xl` dan shadow tipis.

## Aturan Penulisan Kode
- GUNAKAN EKSTENSI `.jsx` untuk semua file komponen, halaman (`page.jsx`), dan layout (`layout.jsx`).
- Gunakan Server Components by default. Client Component (`"use client"`) HANYA jika butuh interaksi.
- Semua tombol dan link WAJIB ada hover state.
- Link internal WAJIB pakai `<Link>` dari `next/link`.
- Selalu pakai komponen dari shadcn/ui.
- Gunakan ikon dari `lucide-react`.

## Struktur Folder
- `src/app/` : Untuk halaman (routing)
- `src/components/layout/` : Navbar, Footer
- `src/components/marketplace/` : Komponen khusus Marketplace
- `src/components/ui/` : Komponen shadcn (JANGAN DIUBAH)
- `src/data/` : File dummy data (nanti diganti data asli)
- `referensi/` : Folder screenshot referensi

## Fitur Marketplace
- Home (hero, search, paket unggulan, travel partner, trust badges)
- Listing Paket (filter, sort)
- Detail Paket (gallery, itinerary, review)
- Halaman Travel (profil travel)
- Login / Register (Jamaah)
- Dashboard Jamaah (pesanan, wishlist)
- Checkout
