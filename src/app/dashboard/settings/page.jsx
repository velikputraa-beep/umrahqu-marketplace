"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Lock, LogOut } from "lucide-react";
import { PROFIL_JEMAHAH } from "@/data/dashboard";
import { signOut } from "@/lib/session";

export default function SettingsPage() {
  const router = useRouter();
  const [nama, setNama] = useState(PROFIL_JEMAHAH.nama);
  const [telepon, setTelepon] = useState(PROFIL_JEMAHAH.telepon);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  const handleLogout = () => {
    signOut();
    router.push("/");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Pengaturan Akun
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-ivory-card rounded-2xl border border-black/5 p-6 space-y-5 shadow-xs"
      >
        <h2 className="text-sm font-bold text-gray-900">Profil</h2>

        {/* Foto Profil */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 block">
            Foto Profil
          </label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-dark text-white flex items-center justify-center text-xl font-bold ring-2 ring-ivory border border-black/5">
              {(nama || "?").charAt(0).toUpperCase()}
            </div>
            <label className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-dark border border-emerald-dark/30 hover:border-emerald-dark hover:bg-emerald-dark/5 rounded-lg px-3 py-2 cursor-pointer transition-colors">
              <Camera className="w-4 h-4" />
              <span>Unggah foto</span>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 block">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-emerald-dark transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 block">
            Email
          </label>
          <input
            type="email"
            value={PROFIL_JEMAHAH.email}
            disabled
            className="w-full px-4 py-2.5 bg-ivory border border-black/5 rounded-xl text-sm text-gray-500 cursor-not-allowed"
          />
          <p className="text-[11px] text-gray-400">
            Email tidak dapat diubah.
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 block">
            Nomor WhatsApp
          </label>
          <input
            type="tel"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-emerald-dark transition-colors"
          />
        </div>

        {saved && (
          <p className="text-xs text-emerald-dark bg-emerald-dark/5 border border-emerald-dark/20 rounded-lg px-3 py-2">
            Perubahan profil tersimpan (demo).
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-semibold py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
        >
          Simpan Perubahan
        </button>
      </form>

      {/* Ganti Kata Sandi */}
      <div className="bg-ivory-card rounded-2xl border border-black/5 p-6 space-y-5 shadow-xs">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-dark" />
          Ganti Kata Sandi
        </h2>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 block">
            Kata Sandi Baru
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi baru"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-gray-700 block">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Masukkan kata sandi lagi"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
          />
        </div>

        <button
          type="button"
          className="w-full bg-emerald-dark hover:bg-emerald-deep text-white font-semibold py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
        >
          Perbarui Kata Sandi
        </button>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="w-full border border-rose-300 text-rose-700 hover:bg-rose-50 font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        <span>Keluar</span>
      </button>
    </div>
  );
}
