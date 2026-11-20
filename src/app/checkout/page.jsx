"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronRight,
  Minus,
  Plus,
  User,
  CreditCard,
  ClipboardList,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PAKET_UMRAH } from "@/data/dummy";

const STEPS = [
  { no: 1, label: "Data Jamaah", icon: User },
  { no: 2, label: "Pembayaran", icon: CreditCard },
  { no: 3, label: "Instruksi", icon: ClipboardList },
];

const HUBUNGAN = [
  "Diri Sendiri",
  "Suami-Istri",
  "Anak",
  "Orang Tua",
  "Saudara",
  "Lainnya",
];

const emptyJamaah = () => ({
  nama: "",
  telepon: "",
  jenis_kelamin: "Laki-laki",
  hubungan: "Diri Sendiri",
  catatan: "",
});

function CheckoutContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const paket = useMemo(
    () => PAKET_UMRAH.find((p) => p.slug === slug),
    [slug]
  );

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [jamaah, setJamaah] = useState([emptyJamaah()]);
  const [openIndex, setOpenIndex] = useState(0);

  if (!paket) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-3">
        <h1 className="text-xl font-bold text-gray-900">Terjadi Kesalahan</h1>
        <p className="text-sm text-gray-600">
          Parameter slug paket tidak ditemukan.
        </p>
        <Button
          asChild
          variant="outline"
          className="border-emerald-dark text-emerald-dark hover:bg-emerald-dark/5"
        >
          <Link href="/paket">Kembali ke Cari Paket</Link>
        </Button>
      </div>
    );
  }

  const updateCount = (next) => {
    const capped = Math.min(20, Math.max(1, next));
    setCount(capped);
    setJamaah((prev) =>
      Array.from({ length: capped }, (_, i) => prev[i] || emptyJamaah())
    );
  };

  const isComplete = (j) =>
    j.nama.trim() && j.telepon.trim() && j.jenis_kelamin;

  const allComplete = jamaah.every(isComplete);

  const totalPrice = `Rp ${(paket.price_raw * count).toLocaleString("id-ID")}`;

  const updateJamaah = (idx, patch) =>
    setJamaah((prev) =>
      prev.map((j, i) => (i === idx ? { ...j, ...patch } : j))
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
        <Link href="/" className="hover:text-emerald-dark transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link
          href="/paket"
          className="hover:text-emerald-dark transition-colors"
        >
          Cari Paket
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link
          href={`/paket/${paket.slug}`}
          className="hover:text-emerald-dark transition-colors truncate max-w-[220px]"
        >
          {paket.title}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-medium">Pembayaran</span>
      </nav>

      {/* Stepper */}
      <div className="flex items-center gap-3 sm:gap-6 max-w-2xl">
        {STEPS.map((s) => {
          const done = step > s.no;
          const active = step === s.no;
          return (
            <div key={s.no} className="flex items-center gap-2.5 flex-1">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  done
                    ? "bg-emerald-dark text-white"
                    : active
                      ? "bg-emerald-dark text-white ring-4 ring-emerald-dark/15"
                      : "bg-ivory text-gray-400 border border-black/10"
                }`}
              >
                {done ? <Check className="w-4 h-4" /> : s.no}
              </span>
              <span
                className={`text-xs font-semibold hidden sm:block ${
                  active || done ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Form */}
        <div className="lg:col-span-8 space-y-6">
          {step === 1 && (
            <>
              {/* Jumlah Jamaah */}
              <div className="bg-ivory-card rounded-2xl border border-black/5 p-5 flex items-center justify-between shadow-xs">
                <div>
                  <h2 className="text-sm font-bold text-gray-900">
                    Jumlah Jamaah
                  </h2>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Maksimal 20 Jamaah
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateCount(count - 1)}
                    disabled={count <= 1}
                    aria-label="Kurangi jamaah"
                    className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:border-emerald-dark hover:text-emerald-dark disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-base font-bold text-gray-900">
                    {count}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateCount(count + 1)}
                    disabled={count >= 20}
                    aria-label="Tambah jamaah"
                    className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:border-emerald-dark hover:text-emerald-dark disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Jamaah Accordions */}
              <div className="space-y-3">
                {jamaah.map((j, idx) => (
                  <div
                    key={idx}
                    className="bg-ivory-card rounded-2xl border border-black/5 shadow-xs overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      className="w-full p-4 flex items-center justify-between gap-3 hover:bg-ivory transition-colors cursor-pointer"
                    >
                      <div className="text-left min-w-0">
                        <p className="text-xs font-bold text-gray-900">
                          Jamaah {idx + 1}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {j.jenis_kelamin} ·{" "}
                          {isComplete(j) ? "Lengkap" : "Belum Lengkap"}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          openIndex === idx ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {openIndex === idx && (
                      <div className="p-4 pt-0 space-y-3.5 border-t border-black/5">
                        <div className="pt-4 space-y-1.5">
                          <label className="text-xs font-semibold text-gray-700 block">
                            Nama Lengkap (sesuai KTP) *
                          </label>
                          <input
                            type="text"
                            value={j.nama}
                            onChange={(e) =>
                              updateJamaah(idx, { nama: e.target.value })
                            }
                            placeholder="Masukkan nama sesuai KTP"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-gray-700 block">
                            No. Telepon / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            value={j.telepon}
                            onChange={(e) =>
                              updateJamaah(idx, { telepon: e.target.value })
                            }
                            placeholder="Contoh: 081234567890"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-700 block">
                              Jenis Kelamin *
                            </label>
                            <select
                              value={j.jenis_kelamin}
                              onChange={(e) =>
                                updateJamaah(idx, {
                                  jenis_kelamin: e.target.value,
                                })
                              }
                              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-emerald-dark transition-colors"
                            >
                              <option>Laki-laki</option>
                              <option>Perempuan</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-700 block">
                              Hubungan dengan Pemesan
                            </label>
                            <select
                              value={j.hubungan}
                              onChange={(e) =>
                                updateJamaah(idx, { hubungan: e.target.value })
                              }
                              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-emerald-dark transition-colors"
                            >
                              {HUBUNGAN.map((h) => (
                                <option key={h}>{h}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-gray-700 block">
                            Catatan Tambahan untuk Travel (opsional)
                          </label>
                          <textarea
                            rows={3}
                            value={j.catatan}
                            onChange={(e) =>
                              updateJamaah(idx, { catatan: e.target.value })
                            }
                            placeholder="Contoh: butuh kursi roda, makan rendah garam..."
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark transition-colors resize-none"
                          />
                          <p className="text-[11px] text-gray-400 leading-relaxed">
                            Catatan ini akan tersimpan dan dapat dibaca oleh staf
                            operasional travel di Admin Panel.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => allComplete && setStep(2)}
                disabled={!allComplete}
                className="w-full bg-emerald-dark hover:bg-emerald-deep disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold h-12 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Lanjutkan
              </button>
            </>
          )}

          {step === 2 && (
            <div className="bg-ivory-card rounded-2xl border border-black/5 p-8 space-y-4 shadow-xs text-center">
              <CreditCard className="w-10 h-10 text-emerald-dark mx-auto" />
              <h2 className="text-base font-bold text-gray-900">
                Metode Pembayaran
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pilih metode pembayaran: saldo dompet, transfer bank, atau
                pembayaran lainnya. Halaman ini masih prototype — tidak ada
                transaksi yang diproses.
              </p>
              <div className="flex gap-3 justify-center pt-2">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="border-black/10 text-gray-600 hover:bg-ivory h-10 rounded-xl text-xs font-semibold"
                >
                  Kembali
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="bg-emerald-dark hover:bg-emerald-deep text-white h-10 rounded-xl text-xs font-semibold px-5"
                >
                  Lanjut ke Instruksi
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-ivory-card rounded-2xl border border-black/5 p-8 space-y-4 shadow-xs text-center">
              <ClipboardList className="w-10 h-10 text-emerald-dark mx-auto" />
              <h2 className="text-base font-bold text-gray-900">
                Instruksi Pembayaran
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Nomor virtual account dan tata cara konfirmasi pembayaran akan
                ditampilkan di sini setelah pesanan dibuat.
              </p>
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="border-black/10 text-gray-600 hover:bg-ivory h-10 rounded-xl text-xs font-semibold"
              >
                Kembali ke Data Jamaah
              </Button>
            </div>
          )}
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-ivory-card rounded-2xl border border-black/5 p-6 space-y-4 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900">
              Ringkasan Pesanan
            </h2>

            <Link
              href={`/travel/${paket.travel_slug}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-dark hover:underline"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              {paket.travel_name}
            </Link>

            <p className="text-xs font-bold text-gray-800 leading-snug">
              {paket.title}
            </p>

            <div className="space-y-2 text-xs border-t border-black/5 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Harga</span>
                <span className="font-semibold text-gray-800">{paket.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Jml. Jamaah</span>
                <span className="font-semibold text-gray-800">x{count}</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between border-t border-black/5 pt-4">
              <span className="text-xs font-semibold text-gray-700">
                Total Pembayaran
              </span>
              <span className="text-lg font-extrabold text-emerald-dark">
                {totalPrice}
              </span>
            </div>

            <p className="text-[11px] text-gray-400 leading-relaxed">
              {allComplete
                ? "Data jamaah lengkap. Silakan lanjutkan ke pembayaran."
                : "Lengkapi nama, no. telepon, dan jenis kelamin seluruh jamaah untuk melanjutkan."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-sm text-gray-500">
          Memuat formulir pemesanan...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
