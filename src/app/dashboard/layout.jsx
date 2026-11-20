"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Ticket,
  Heart,
  Wallet,
  Bell,
  Settings,
} from "lucide-react";
import { UNREAD_NOTIFICATIONS } from "@/data/dashboard";
import { useSession } from "@/lib/session";

const MENU = [
  { label: "Ringkasan", href: "/dashboard", icon: LayoutDashboard },
  { label: "Pesanan Saya", href: "/dashboard/bookings", icon: Ticket },
  { label: "Daftar Keinginan", href: "/dashboard/wishlist", icon: Heart },
  { label: "Cashback", href: "/dashboard/cashback", icon: Wallet },
  { label: "Notifikasi", href: "/dashboard/notifications", icon: Bell },
  { label: "Pengaturan", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const { user } = useSession();
  const unread = UNREAD_NOTIFICATIONS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-3 space-y-3">
          <div className="bg-emerald-dark text-white px-4 py-3 rounded-xl font-bold text-sm shadow-xs">
            Dashboard Jemaah
          </div>

          <nav className="bg-ivory-card rounded-2xl border border-black/5 p-2 space-y-0.5 shadow-xs">
            {MENU.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    active
                      ? "bg-emerald-dark text-white"
                      : "text-gray-600 hover:bg-ivory hover:text-emerald-dark"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.label === "Notifikasi" && unread > 0 && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        active ? "bg-white/20 text-white" : "bg-gold text-stone-950"
                      }`}
                    >
                      {unread}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {user && (
            <p className="text-[11px] text-gray-400 px-3 truncate">{user}</p>
          )}
        </aside>

        <main className="lg:col-span-9 min-w-0">{children}</main>
      </div>
    </div>
  );
}
