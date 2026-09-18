import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DHU Farm MCHJ - Tibbiyot uskunalari",
  description: "O'zbekiston bo'ylab zamonaviy tibbiyot jihozlarini yetkazib berish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        
        {/* YANGI NAVBAR KOMPONENTI */}
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* RASMIY PREMIUM FOOTER */}
        <footer id="boglanish" className="bg-[#0A1128] text-slate-300 pt-16 pb-8 border-t-[6px] border-[#1a365d]">
          <div className="max-w-[1400px] mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 border-b border-slate-800 pb-12">
              
              {/* 1. Kompaniya */}
              <div>
                <Link href="/" className="text-3xl tracking-tight mb-6 inline-block bg-white px-4 py-2 rounded-lg">
                  <span className="font-extrabold text-[#1a365d]">DHU</span>
                  <span className="font-light text-slate-500 ml-1.5">FARM</span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  "DHU Farm" MCHJ — O'zbekiston Respublikasi hududida zamonaviy va sifatli tibbiyot uskunalarini yetkazib beruvchi korxona.
                </p>
                <p className="text-xs text-slate-500 font-mono">STIR: 309 123 456 (Namuna)</p>
              </div>

              {/* 2. Havolalar */}
              <div>
                <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Mijozlar uchun</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/mahsulotlar" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">▸</span> Katalog</Link></li>
                  <li><Link href="/#biz-haqimizda" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">▸</span> Kompaniya haqida</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">▸</span> Sertifikat va Litsenziyalar</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-blue-500">▸</span> Yetkazib berish va o'rnatish</Link></li>
                </ul>
              </div>

              {/* 3. Aloqa */}
              <div>
                <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Aloqa markazi</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Samarqand sh., Urgut tumani, AL-Buxoriy ko'chasi (Namuna manzili)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href="tel:+998901234567" className="hover:text-white transition-colors">+998 90 251 60 01</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:info@dhufarm.uz" className="hover:text-white transition-colors">info@dhufarm.uz</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Ish vaqti: Dush-Jum, 09:00 - 18:00</span>
                  </li>
                </ul>
              </div>

              {/* 4. Tarmoqlar */}
              <div>
                <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Biz ijtimoiy tarmoqlarda</h3>
                <div className="flex items-center gap-4">
                  {/* Telegram Icon */}
                  <a href="https://t.me/dhufarm" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#2AABEE] hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </a>
                  {/* Instagram Icon */}
                  <a href="https://instagram.com/dhufarm" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  {/* Facebook Icon */}
                  <a href="https://facebook.com/dhufarm" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Eng pastki yozuvlar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
              <p>© {new Date().getFullYear()} "DHU Farm" MCHJ. Barcha huquqlar himoyalangan.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-slate-300 transition-colors">Maxfiylik siyosati</Link>
                <span>|</span>
                <Link href="#" className="hover:text-slate-300 transition-colors">Foydalanish shartlari</Link>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}