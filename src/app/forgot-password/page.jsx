"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import AuthLeftPanel from "@/components/layout/AuthLeftPanel";
import Logo from "@/components/layout/Logo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-ivory-card">
      <AuthLeftPanel />

      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 min-h-screen">
        <div className="lg:hidden mb-8">
          <Logo variant="dark" />
        </div>

        <div className="w-full max-w-md mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Lupa Kata Sandi
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Masukkan email akun Anda. Kami mengirim tautan pemulihan kata
              sandi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
                />
              </div>
            </div>

            {sent && (
              <p className="text-[11px] text-emerald-dark bg-emerald-dark/5 border border-emerald-dark/20 rounded-lg px-3 py-2">
                Tautan pemulihan dikirim ke {email} (demo — tidak ada email
                sungguhan).
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-xs transition-colors cursor-pointer mt-2"
            >
              Kirim Tautan Pemulihan
            </button>
          </form>

          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-emerald-dark transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}
