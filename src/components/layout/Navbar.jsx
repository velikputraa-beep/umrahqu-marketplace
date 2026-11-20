"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Scale, Bell, Menu, X, LayoutDashboard, LogOut } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/session";
import { UNREAD_NOTIFICATIONS } from "@/data/dashboard";

const NAV_LINKS = [
  { name: "Paket", href: "/paket" },
  { name: "Tracking", href: "/tracking" },
  { name: "Travel", href: "/travel" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const { user, isSignedIn } = useSession();

  useEffect(() => {
    if (!userMenuOpen) return;
    const onPointerDown = (event) => {
      if (!userMenuRef.current?.contains(event.target)) setUserMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [userMenuOpen]);

  const isActive = (href) =>
    href === "/paket" ? pathname.startsWith("/paket") : pathname === href;

  const handleKeluar = () => {
    signOut();
    setUserMenuOpen(false);
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/85 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo variant="dark" />

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors hover:text-emerald-dark ${
                    isActive(link.href)
                      ? "text-emerald-dark font-semibold"
                      : "text-ivory-ink/60 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/compare"
                title="Bandingkan"
                aria-label="Bandingkan"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-ivory-ink/60 hover:text-emerald-dark hover:bg-ivory-card transition-colors"
              >
                <Scale className="w-5 h-5" />
              </Link>

              <button
                type="button"
                title="Notifikasi"
                aria-label="Notifikasi"
                onClick={() => isSignedIn && router.push("/dashboard/notifications")}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl text-ivory-ink/60 hover:text-emerald-dark hover:bg-ivory-card transition-colors cursor-pointer"
              >
                <Bell className="w-5 h-5" />
                {isSignedIn && (
                  <span className="absolute top-1 right-1 min-w-4 px-1 h-4 rounded-full bg-gold text-[10px] font-bold text-ivory-ink flex items-center justify-center ring-2 ring-ivory">
                    {UNREAD_NOTIFICATIONS}
                  </span>
                )}
              </button>

              <div className="h-6 w-[1px] bg-black/10" />

              {isSignedIn ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    type="button"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-1 pl-1 pr-1.5 py-1 rounded-full bg-emerald-dark hover:bg-emerald-deep transition-colors cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-full bg-ivory text-emerald-dark flex items-center justify-center text-sm font-bold ring-2 ring-ivory-card shrink-0">
                      {user.charAt(0).toUpperCase()}
                    </span>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-60 bg-ivory-card rounded-xl border border-black/5 shadow-lg p-2 space-y-1">
                      <div className="px-3 py-2">
                        <p className="text-sm font-semibold text-ivory-ink truncate">
                          {user}
                        </p>
                      </div>
                      <div className="h-px bg-black/5" />
                      <Link
                        href="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ivory-ink/80 hover:bg-ivory hover:text-emerald-dark transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard Saya
                      </Link>
                      <button
                        type="button"
                        onClick={handleKeluar}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-rose-700 hover:bg-rose-50 transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Button
                    variant="outline"
                    asChild
                    className="bg-transparent border-black/15 text-ivory-ink hover:border-emerald-dark hover:text-emerald-dark hover:bg-ivory-card font-medium px-5 h-10 rounded-lg transition-all"
                  >
                    <Link href="/login">Masuk</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-emerald-dark hover:bg-emerald-deep text-white font-medium px-5 h-10 rounded-lg shadow-sm transition-all"
                  >
                    <Link href="/register">Daftar</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-ivory-ink/70 hover:bg-ivory-card focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-ivory-card px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-emerald-dark/5 text-emerald-dark font-semibold"
                    : "text-ivory-ink/70 hover:bg-ivory"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-ivory-ink/70 hover:bg-ivory flex items-center gap-2"
            >
              <Scale className="w-4 h-4" />
              Bandingkan
            </Link>
          </div>

          {isSignedIn ? (
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-emerald-dark hover:bg-emerald-deep text-white text-center font-medium py-2.5 rounded-lg transition-colors"
            >
              Dashboard Saya
            </Link>
          ) : (
            <div className="pt-2 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                asChild
                className="w-full bg-transparent border-black/15 text-ivory-ink rounded-lg"
              >
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Masuk
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-emerald-dark hover:bg-emerald-deep text-white rounded-lg"
              >
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  Daftar
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
