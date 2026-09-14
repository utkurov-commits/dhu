"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // 1. Katta ramkadagi rasmlar animatsiyasi
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 2. Mahsulotlar ro'yxati (uzluksiz aylanish uchun)
  const products = [
    {
      title: "UZD Apparatlari",
      link: "/mahsulotlar/uzd",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Kardiologiya",
      link: "/mahsulotlar/kardiologiya",
      img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Laboratoriya",
      link: "/mahsulotlar/laboratoriya",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Jarrohlik jihozlari",
      link: "/mahsulotlar/jarrohlik",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Silliq cheksiz aylanish uchun massivni takrorlaymiz
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="flex flex-col bg-slate-50">
      
      {/* 1. HERO SECTION (Kichraytirilgan nafis yozuvlar va chap pastki burchak) */}
      <section className="pt-6 pb-12 px-4 max-w-[1400px] mx-auto w-full">
        <div className="relative h-[80vh] min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex">
          
          {heroImages.map((src, index) => (
            <img 
              key={src}
              src={src} 
              alt="Medtexnika Jihozlari" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${heroIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent z-10"></div>

          <div className="relative z-20 w-full h-full p-8 md:p-12 lg:p-16 flex flex-col justify-end items-start text-left">
            <h1 className="animate-fade-in-up text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl leading-tight drop-shadow-lg">
              Klinikangiz uchun <br /> 
              <span className="text-blue-400">Zamonaviy Medtexnika</span>
            </h1>
            
            <p className="animate-fade-in-up delay-100 text-base md:text-lg text-slate-200 max-w-lg mb-8 leading-relaxed drop-shadow-md">
              O'zbekiston bo'ylab yuqori sifatli tibbiyot uskunalarini yetkazib beramiz. Ishonchli hamkor, aniq tashxis.
            </p>

            <Link 
              href="/mahsulotlar" 
              className="animate-fade-in-up delay-200 bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,78,216,0.5)] hover:-translate-y-1 inline-block"
            >
              Katalogni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MAHSULOTLAR KATEGORIYASI (Uzluksiz aylanuvchi lenta) */}
      <section className="py-20 max-w-[1400px] mx-auto w-full relative z-20 overflow-hidden">
        <div className="flex justify-between items-end mb-10 px-4 md:px-8">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">Bizning Mahsulotlar</h2>
            <p className="text-slate-500">Tibbiyot apparatlarining asosiy toifalari</p>
          </div>
          <Link href="/mahsulotlar" className="hidden md:block text-blue-700 font-semibold hover:underline">
            Barchasini ko'rish →
          </Link>
        </div>

        <div className="w-full overflow-hidden relative flex">
          <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <div className="animate-marquee gap-6 px-4">
            {duplicatedProducts.map((item, index) => (
              <Link key={index} href={item.link} className="w-[300px] md:w-[350px] group block shrink-0">
                <div className="bg-white rounded-[2rem] p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
                  <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative bg-slate-100 mb-4">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 px-2 text-center group-hover:text-blue-700 transition-colors">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BIZ HAQIMIZDA (Shaxsiy rasm va Premium ko'kimtir ramka) */}
      <section id="biz-haqimizda" className="py-24 bg-white px-4 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Chap taraf: Shaxsiy rasm (Bo'sh joylarsiz, vertikal format) */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[10px] border-slate-50 w-full max-w-[400px] aspect-[3/4] bg-slate-100">
              <img 
                src="/rasm.jpg" 
                alt="DHU Farm Rahbari" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2000&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
          
          {/* O'ng taraf: Premium ko'kimtir ramka ichidagi ma'lumot */}
          <div className="w-full lg:w-7/12 relative group">
            <div className="bg-gradient-to-br from-blue-50/90 to-white border border-blue-100 p-8 md:p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
              
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-300 opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-blue-100/60 text-blue-700 font-bold tracking-widest uppercase mb-4 px-5 py-2 rounded-full text-sm border border-blue-200 backdrop-blur-sm shadow-sm">
                  DHU Farm MCHJ
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Sizning ishonchli <br className="hidden md:block"/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">tibbiyot hamkoringiz</span>
                </h2>
                
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                  Biz O'zbekiston bozoriga jahon standartlariga javob beradigan sifatli tibbiyot uskunalarini yetkazib beramiz. Maqsadimiz — shifoxonalar va klinikalarni zamonaviy jihozlar bilan ta'minlash orqali aniq tashxis va davolashga hissa qo'shish.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-slate-800 font-semibold text-lg bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                    <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">✓</span> 
                    Yuqori sifat va rasmiy sertifikatlar
                  </li>
                  <li className="flex items-center gap-4 text-slate-800 font-semibold text-lg bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                    <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">✓</span> 
                    O'zbekiston bo'ylab ishonchli yetkazib berish
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}