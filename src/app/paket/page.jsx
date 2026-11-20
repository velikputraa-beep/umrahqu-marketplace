"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  Layers,
  Clock,
  MapPin,
  Banknote,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";
import ProductCard from "@/components/marketplace/ProductCard";
import { PAKET_UMRAH } from "@/data/dummy";

const JENIS_PAKET = ["Semua Jenis Paket", "Umrah", "Haji", "Wisata Halal"];

const DURASI = [
  { label: "7-10 Hari", value: "7-10" },
  { label: "10-14 Hari", value: "10-14" },
  { label: "14-21 Hari", value: "14-21" },
];

const HARGA = [
  { label: "10–25jt", value: "10-25" },
  { label: "25–50jt", value: "25-50" },
  { label: "50–100jt", value: "50-100" },
  { label: ">100jt", value: ">100" },
];

const URUTKAN = [
  { label: "Relevansi", value: "relevansi" },
  { label: "Harga Terendah", value: "harga-rendah" },
  { label: "Harga Tertinggi", value: "harga-tinggi" },
  { label: "Durasi Terpendek", value: "durasi-pendek" },
  { label: "Durasi Terpanjang", value: "durasi-panjang" },
];

function ListingContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const initialCity = searchParams.get("city") || "";

  const [searchTerm, setSearchTerm] = useState(initialQ);
  const [selectedJenis, setSelectedJenis] = useState("Semua Jenis Paket");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [cityInput, setCityInput] = useState(initialCity);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("relevansi");
  const [showFilter, setShowFilter] = useState(false);

  const filteredPackages = useMemo(() => {
    let result = [...PAKET_UMRAH];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.travel_name.toLowerCase().includes(q) ||
          p.departure_city.toLowerCase().includes(q) ||
          p.airline.toLowerCase().includes(q) ||
          p.hotel.toLowerCase().includes(q)
      );
    }

    if (selectedJenis !== "Semua Jenis Paket") {
      result = result.filter((p) => p.jenis === selectedJenis);
    }

    if (selectedDuration === "7-10") {
      result = result.filter(
        (p) => p.duration_days >= 7 && p.duration_days <= 10
      );
    } else if (selectedDuration === "10-14") {
      result = result.filter(
        (p) => p.duration_days >= 10 && p.duration_days <= 14
      );
    } else if (selectedDuration === "14-21") {
      result = result.filter(
        (p) => p.duration_days >= 14 && p.duration_days <= 21
      );
    }

    if (cityInput.trim()) {
      const city = cityInput.toLowerCase();
      result = result.filter((p) =>
        p.departure_city.toLowerCase().includes(city)
      );
    }

    if (selectedPriceRange === "10-25") {
      result = result.filter(
        (p) => p.price_raw >= 10000000 && p.price_raw <= 25000000
      );
    } else if (selectedPriceRange === "25-50") {
      result = result.filter(
        (p) => p.price_raw > 25000000 && p.price_raw <= 50000000
      );
    } else if (selectedPriceRange === "50-100") {
      result = result.filter(
        (p) => p.price_raw > 50000000 && p.price_raw <= 100000000
      );
    } else if (selectedPriceRange === ">100") {
      result = result.filter((p) => p.price_raw > 100000000);
    }

    if (sortBy === "harga-rendah") {
      result.sort((a, b) => a.price_raw - b.price_raw);
    } else if (sortBy === "harga-tinggi") {
      result.sort((a, b) => b.price_raw - a.price_raw);
    } else if (sortBy === "durasi-pendek") {
      result.sort((a, b) => a.duration_days - b.duration_days);
    } else if (sortBy === "durasi-panjang") {
      result.sort((a, b) => b.duration_days - a.duration_days);
    }

    return result;
  }, [
    searchTerm,
    selectedJenis,
    selectedDuration,
    cityInput,
    selectedPriceRange,
    sortBy,
  ]);

  const isFiltered =
    searchTerm ||
    selectedJenis !== "Semua Jenis Paket" ||
    selectedDuration ||
    cityInput ||
    selectedPriceRange ||
    sortBy !== "relevansi";

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedJenis("Semua Jenis Paket");
    setSelectedDuration("");
    setCityInput("");
    setSelectedPriceRange("");
    setSortBy("relevansi");
  };

  const filterPanel = (
    <div className="bg-ivory-card rounded-2xl border border-black/5 p-5 space-y-5 shadow-xs">
      {/* 1. JENIS PAKET */}
      <div>
        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <Layers className="w-3.5 h-3.5 text-gray-400" />
          Jenis Paket
        </label>
        <select
          value={selectedJenis}
          onChange={(e) => setSelectedJenis(e.target.value)}
          className="w-full text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-emerald-dark"
        >
          {JENIS_PAKET.map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>
      </div>

      {/* 2. DURASI PERJALANAN */}
      <div>
        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <Clock className="w-3.5 h-3.5 text-gray-400" />
          Durasi Perjalanan
        </label>
        <div className="space-y-1.5">
          {DURASI.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() =>
                setSelectedDuration(
                  selectedDuration === item.value ? "" : item.value
                )
              }
              className={`w-full text-xs font-medium py-2 px-3 rounded-lg border text-center transition-colors cursor-pointer ${
                selectedDuration === item.value
                  ? "bg-emerald-dark text-white border-emerald-dark"
                  : "bg-ivory hover:bg-ivory-card text-gray-800 border-transparent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. KOTA KEBERANGKATAN */}
      <div>
        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          Kota Keberangkatan
        </label>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Ketik nama kota..."
          className="w-full text-xs bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-dark"
        />
      </div>

      {/* 4. ESTIMASI HARGA */}
      <div>
        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <Banknote className="w-3.5 h-3.5 text-gray-400" />
          Estimasi Harga
        </label>
        <div className="grid grid-cols-2 gap-2">
          {HARGA.map((range) => (
            <button
              key={range.value}
              type="button"
              onClick={() =>
                setSelectedPriceRange(
                  selectedPriceRange === range.value ? "" : range.value
                )
              }
              className={`text-xs font-medium py-2 px-2 rounded-lg border text-center transition-colors cursor-pointer ${
                selectedPriceRange === range.value
                  ? "bg-emerald-dark text-white border-emerald-dark"
                  : "bg-ivory hover:bg-ivory-card text-gray-800 border-transparent"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5. URUTKAN */}
      <div>
        <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
          Urutkan
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full text-xs bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-emerald-dark"
        >
          {URUTKAN.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </div>

      {isFiltered && (
        <button
          type="button"
          onClick={resetFilters}
          className="w-full text-xs text-rose-700 hover:text-rose-800 font-medium py-2 rounded-lg border border-rose-200 hover:bg-rose-50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Filter</span>
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Search Bar Pill */}
      <div className="flex justify-center">
        <div className="w-full max-w-xl bg-ivory-card border border-black/5 rounded-full pl-5 pr-1.5 py-1.5 flex items-center shadow-xs focus-within:border-emerald-dark transition-colors">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari..."
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-emerald-dark hover:bg-emerald-deep text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            aria-label="Cari"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile filter toggle */}
      <button
        type="button"
        onClick={() => setShowFilter(!showFilter)}
        className="lg:hidden w-full text-xs font-semibold py-2.5 px-4 rounded-xl bg-emerald-dark text-white flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-emerald-deep"
      >
        <SlidersHorizontal className="w-4 h-4" />
        {showFilter ? "Tutup filter" : "Buka filter pencarian"}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Filter */}
        <aside
          className={`${showFilter ? "block" : "hidden"} lg:block lg:col-span-3 space-y-3`}
        >
          <div className="bg-emerald-dark text-white px-4 py-3 rounded-xl font-bold flex items-center gap-2 text-sm shadow-xs">
            <SlidersHorizontal className="w-4 h-4 text-emerald-200" />
            <span>Filter Pencarian</span>
          </div>
          {filterPanel}
        </aside>

        {/* Right Listing Grid */}
        <main className="lg:col-span-9 space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-600 px-1">
            <span>
              Menampilkan{" "}
              <strong className="text-gray-900 font-semibold">
                {filteredPackages.length}
              </strong>{" "}
              paket umrah
            </span>
          </div>

          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPackages.map((paket) => (
                <ProductCard key={paket.id} paket={paket} />
              ))}
            </div>
          ) : (
            <div className="bg-ivory-card rounded-2xl border border-black/5 p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mx-auto text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 text-base">
                Tidak ada paket yang sesuai
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Coba sesuaikan filter pencarian atau kata kunci untuk menemukan
                pilihan paket umrah lainnya.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-semibold text-emerald-dark hover:underline pt-2 cursor-pointer"
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ListingPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-sm text-gray-500">
          Memuat daftar paket...
        </div>
      }
    >
      <ListingContent />
    </Suspense>
  );
}
