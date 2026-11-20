import Link from "next/link";

export default function Logo({ variant = "dark", className = "" }) {
  const isLight = variant === "light"; // White text for dark backgrounds

  return (
    <Link href="/" className={`inline-flex items-center gap-1 group ${className}`}>
      <span className={`font-black text-2xl tracking-wider select-none flex items-center ${isLight ? "text-white" : "text-gray-900"}`}>
        <span>UMRAH</span>
        <span className="text-emerald-500 font-extrabold relative inline-block mx-0.5">
          Q
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-white/80" : "bg-emerald-700"}`}></span>
          </span>
        </span>
        <span>U</span>
      </span>
    </Link>
  );
}
