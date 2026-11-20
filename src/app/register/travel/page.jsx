"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Mail, Lock, MapPin, Phone, Eye, EyeOff } from "lucide-react";
import AuthLeftPanel from "@/components/layout/AuthLeftPanel";
import Logo from "@/components/layout/Logo";

export default function RegisterTravelPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fields = [
    { label: "Nama Travel", icon: Building2, placeholder: "Nama biro perjalanan" },
    { label: "Email Bisnis", icon: Mail, placeholder: "nama@email.com" },
    { label: "Nomor WhatsApp", icon: Phone, placeholder: "081234567890" },
    { label: "Alamat Kantor", icon: MapPin, placeholder: "Alamat lengkap" },
  ];

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
              Daftar sebagai Travel
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Jadilah mitra travel berizin resmi Kemenag RI di UmrahQu.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {fields.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 block">
                    {f.label}
                  </label>
                  <div className="relative">
                    <Icon className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder={f.placeholder}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
                    />
                  </div>
                </div>
              );
            })}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 block">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Masukkan kata sandi"
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Tampilkan kata sandi"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {submitted && (
              <p className="text-[11px] text-emerald-dark bg-emerald-dark/5 border border-emerald-dark/20 rounded-lg px-3 py-2">
                Pendaftaran mitra travel terkirim. Tim UmrahQu akan memverifikasi
                izin travel Anda (demo — data tidak disimpan).
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-xs transition-colors cursor-pointer mt-2"
            >
              Daftar sebagai Travel
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">
            Bukan travel?{" "}
            <Link
              href="/register"
              className="font-bold text-gray-900 hover:text-emerald-dark hover:underline"
            >
              Daftar sebagai Jamaah
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
