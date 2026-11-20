import Link from "next/link";
import { MessageSquare, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-emerald-deep text-emerald-100/70 pt-16 pb-8 overflow-hidden border-t-2 border-transparent [border-image:linear-gradient(90deg,#f3b53f,#0d3d2b)_1]">
      {/* Star pattern overlay, sama seperti umrahqu.com */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark/60 via-emerald-deep to-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kolom 1: Logo & Info */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Platform pencarian dan perbandingan paket umrah terpercaya di Indonesia.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                HUBUNGI KAMI
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@umrahqu.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 flex items-center justify-center text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              TAUTAN CEPAT
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Produk */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              PRODUK
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/paket" className="hover:text-emerald-400 transition-colors">
                  Paket
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="hover:text-emerald-400 transition-colors">
                  Promo
                </Link>
              </li>
              <li>
                <Link href="/travel" className="hover:text-emerald-400 transition-colors">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-emerald-400 transition-colors">
                  Bandingkan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Ikuti Kami */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              IKUTI KAMI
            </h3>
            <div className="flex items-center space-x-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/60 text-xs text-gray-400 text-center sm:text-left">
          <p>© 2026 UmrahQu — PT. Universal Big Data. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
