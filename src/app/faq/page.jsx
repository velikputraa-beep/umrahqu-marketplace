"use client";

import { useState, useMemo } from "react";
import { Search, Sparkles, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/dummy";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [openId, setOpenId] = useState(1); // Default open item 1

  const categories = ["Semua", "Umum", "Travel", "Jemaah", "Akun"];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchCat =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchSearch =
        !searchTerm.trim() ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[340px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Emerald/Black Gradient */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2000&q=85"
            alt="Masjidil Haram"
            className="w-full h-full object-cover object-center filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-950/40 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full flex flex-col items-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-900/60 text-emerald-200 backdrop-blur-md border border-emerald-500/30 mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pusat Bantuan UmrahQu</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Pertanyaan <span className="text-gold">Umum</span>
          </h1>
          <p className="text-sm text-gray-200 max-w-xl">
            Temukan jawaban atas pertanyaan yang sering ditanyakan
          </p>
        </div>
      </section>

      {/* 2. MAIN ACCORDION & SEARCH AREA */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search Bar Input */}
        <div className="bg-ivory-card rounded-2xl border border-black/5 pl-4 pr-3 py-3 flex items-center shadow-md focus-within:border-emerald-dark transition-colors relative z-10 -mt-14">
          <Search className="w-4 h-4 text-gray-400 shrink-0 mr-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari pertanyaan..."
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-dark text-white shadow-xs"
                  : "bg-ivory-card hover:bg-ivory text-gray-700 border border-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Cards */}
        <div className="space-y-3 pt-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-ivory-card rounded-2xl border border-black/5 overflow-hidden shadow-xs hover:border-emerald-dark/30 transition-all"
                >
                  {/* Trigger Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-[#faf7ee] text-amber-900 border border-amber-200/60 text-[11px] font-semibold">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-emerald-dark/10 text-emerald-dark" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fafcfb]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-ivory-card rounded-2xl border border-black/5 p-12 text-center space-y-3">
              <h3 className="font-bold text-gray-800 text-sm">
                Pertanyaan tidak ditemukan
              </h3>
              <p className="text-xs text-gray-500">
                Silakan coba gunakan kata kunci lain atau pilih kategori Semua.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
