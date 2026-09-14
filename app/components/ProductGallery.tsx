"use client";
import { useState, useEffect } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Har 4 soniyada rasmni avtomatik almashtirish
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full aspect-[4/3] bg-white border border-slate-200 overflow-hidden group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      
      {/* Slayder nuqtalari (Dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#1a365d] w-4" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}