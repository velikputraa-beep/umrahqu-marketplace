"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { NOTIFICATIONS } from "@/data/dashboard";

export default function NotificationsPage() {
  const [items, setItems] = useState(NOTIFICATIONS);

  const readAll = () =>
    setItems(items.map((n) => ({ ...n, unread: false })));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Notifikasi
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            {items.filter((n) => n.unread).length} belum dibaca
          </p>
        </div>
        <button
          type="button"
          onClick={readAll}
          className="text-xs font-semibold text-emerald-dark hover:text-emerald-deep border border-emerald-dark/30 hover:border-emerald-dark rounded-lg px-3 py-1.5 transition-colors cursor-pointer"
        >
          Tandai semua dibaca
        </button>
      </div>

      <div className="bg-ivory-card rounded-2xl border border-black/5 divide-y divide-black/5 shadow-xs">
        {items.map((n) => (
          <div key={n.id} className="p-4 flex items-start gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                n.unread
                  ? "bg-emerald-dark text-white"
                  : "bg-ivory text-gray-400"
              }`}
            >
              <Bell className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold text-gray-900">{n.title}</p>
                <span className="text-[11px] text-gray-400 shrink-0">
                  {n.time}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                {n.body}
              </p>
            </div>
            {n.unread && (
              <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
