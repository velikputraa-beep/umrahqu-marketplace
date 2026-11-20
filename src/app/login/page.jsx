"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLeftPanel from "@/components/layout/AuthLeftPanel";
import Logo from "@/components/layout/Logo";
import { signIn } from "@/lib/session";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Email dan kata sandi wajib diisi.");
      return;
    }
    setError("");
    signIn(email.trim());
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-ivory-card">
      {/* Left Panel (Desktop) */}
      <AuthLeftPanel />

      {/* Right Form Panel */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 min-h-screen">
        {/* Mobile Header Logo */}
        <div className="lg:hidden mb-8">
          <Logo variant="dark" />
        </div>

        <div className="w-full max-w-md mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Masuk ke Akun Anda
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Email */}
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

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  aria-label="Tampilkan kata sandi"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-[11px] font-semibold text-gray-500 hover:text-emerald-dark transition-colors"
              >
                Lupa Kata Sandi?
              </Link>
            </div>

            {error && (
              <p className="text-[11px] text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-xs transition-colors cursor-pointer mt-2"
            >
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-ivory-card px-3 text-gray-400">atau</span>
            </div>
          </div>

          <div className="text-center space-y-2.5 text-xs text-gray-600">
            <p>
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="font-bold text-gray-900 hover:text-emerald-dark hover:underline"
              >
                Daftar di sini
              </Link>
            </p>
            <p>
              Punya travel?{" "}
              <Link
                href="/register/travel"
                className="font-bold text-gray-900 hover:text-emerald-dark hover:underline"
              >
                Daftar sebagai Travel
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
