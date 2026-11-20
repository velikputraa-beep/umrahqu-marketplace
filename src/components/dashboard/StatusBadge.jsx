const STATUS_STYLE = {
  Menunggu: "bg-amber-100 text-amber-900 border-amber-200",
  Diproses: "bg-sky-100 text-sky-900 border-sky-200",
  Dikonfirmasi: "bg-emerald-dark/10 text-emerald-dark border-emerald-dark/25",
  Selesai: "bg-gray-100 text-gray-700 border-gray-200",
  "Menunggu Batal": "bg-orange-100 text-orange-900 border-orange-200",
  Refund: "bg-violet-100 text-violet-900 border-violet-200",
  Dibatalkan: "bg-rose-100 text-rose-800 border-rose-200",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${
        STATUS_STYLE[status] ?? "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      {status}
    </span>
  );
}
