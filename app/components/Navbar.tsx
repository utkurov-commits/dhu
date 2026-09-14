"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO (Rasmingizdagi dizaynga moslashtirildi) */}
        <Link href="/" className="text-2xl tracking-tight">
          <span className="font-extrabold text-[#1a365d]">DHU</span>
          <span className="font-light text-slate-500 ml-1.5">FARM</span>
        </Link>
        
        {/* KOMPYUTER UCHUN MENYU */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-[#1a365d] transition-colors">Bosh sahifa</Link>
          <Link href="/mahsulotlar" className="hover:text-[#1a365d] transition-colors">Mahsulotlar</Link>
          <Link href="/#biz-haqimizda" className="hover:text-[#1a365d] transition-colors">Biz haqimizda</Link>
        </nav>

        {/* BOG'LANISH TUGMASI (Kompyuterda) */}
        <Link 
          href="#boglanish" 
          className="hidden md:inline-flex bg-[#1a365d] hover:bg-blue-800 text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-sm"
        >
          Bog'lanish
        </Link>

        {/* TELEFON UCHUN GAMBURGER TUGMA */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-[#1a365d]"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* TELEFON UCHUN OCHILADIGAN MENYU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
          <Link href="/" onClick={() => setIsOpen(false)} className="block font-medium text-slate-600 hover:text-[#1a365d]">Bosh sahifa</Link>
          <Link href="/mahsulotlar" onClick={() => setIsOpen(false)} className="block font-medium text-slate-600 hover:text-[#1a365d]">Mahsulotlar</Link>
          <Link href="/#biz-haqimizda" onClick={() => setIsOpen(false)} className="block font-medium text-slate-600 hover:text-[#1a365d]">Biz haqimizda</Link>
          <Link href="#boglanish" onClick={() => setIsOpen(false)} className="block mt-4 text-center bg-[#1a365d] text-white px-6 py-3 rounded-xl font-semibold">
            Bog'lanish
          </Link>
        </div>
      )}
    </header>
  );
}