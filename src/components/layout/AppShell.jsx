"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/register/travel" ||
    pathname === "/forgot-password";

  if (isAuthPage) {
    return <main className="min-h-screen bg-ivory-card">{children}</main>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-ivory-ink">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
