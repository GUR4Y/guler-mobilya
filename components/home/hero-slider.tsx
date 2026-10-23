"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

// Tam ekran slider slaytları
const SLIDES = [
  {
    id: 1,
    image: "/hero-slide-1.jpg",
    imageMobile: "/hero-slide-1-mobile.jpg",
    tagline: "Güler Mobilya 2026 Koleksiyonu",
    title: "Yaşam Alanınıza Yeni Bir Dokunuş",
    description: "Konforu, işlevselliği ve zamansız tasarımı yaşam alanlarınızla buluşturan özgün mobilya modelleri.",
    primaryBtn: { text: "Ürünleri Keşfet", href: "/urunler" },
    secondaryBtn: { text: "Kataloğu İncele", href: "/katalog" },
  },
  {
    id: 2,
    image: "/hero-slide-2.jpg",
    imageMobile: "/hero-slide-2-mobile.jpg",
    tagline: "Özel İmalat & Tasarım",
    title: "Evinizin En Rahat ve Şık Köşesi",
    description: "Geniş oturum konforu, dayanıklı gürgen iskelet ve leke tutmaz zengin kumaş seçenekleri.",
    primaryBtn: { text: "Modelleri İncele", href: "/urunler" },
    secondaryBtn: { text: "Kataloğu İncele", href: "/katalog" },
  },
  {
    id: 3,
    image: "/hero-slide-3.jpg",
    imageMobile: "/hero-slide-3-mobile.jpg",
    tagline: "Mobilya Döşeme & Yenileme",
    title: "Eski Mobilyalarınıza İkinci Bir Hayat",
    description: "Yıpranmış koltuk, çekyat ve sandalyelerinizi usta ellerde baştan aşağı yeniliyoruz.",
    primaryBtn: { text: "Döşeme Atölyesini Gör", href: "/doseme" },
    secondaryBtn: { text: "Kataloğu İncele", href: "/katalog" },
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // Otomatik geçiş (6 saniyede bir)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length)

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 h-[560px] sm:h-[600px] lg:h-[calc(100vh-114px)] min-h-[500px]">
      {/* Arka Plan Slider Görselleri (Saf CSS Opaklık Geçişi - Sıfır Titreme) */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          {/* Mobil İçin Optimize Edilmiş Dikey Görsel (3:4 Dikey Oran) */}
          <div className="relative w-full h-full block sm:hidden">
            <Image
              src={slide.imageMobile}
              alt={slide.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Masaüstü & Tablet İçin Geniş Yatay Görsel (16:9 Oran) */}
          <div className="relative w-full h-full hidden sm:block">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Fresh ve okunaklı lüks koyuluk efekti: Mobilde dikey degrade, masaüstünde soldan sağa degrade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/75 sm:bg-gradient-to-r sm:from-black/85 sm:via-black/55 sm:to-black/30" />
        </div>
      ))}

      {/* Ön Plan Metin & CTA Alanı */}
      <div className="relative z-10 h-full container-custom flex items-center pb-14 sm:pb-0">
        <div className="max-w-2xl text-white space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-widest uppercase bg-black/40 rounded-full text-amber-300 border border-white/20 backdrop-blur-xs">
              {SLIDES[current].tagline}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.16] sm:leading-[1.12]">
              {SLIDES[current].title}
            </h1>

            <p className="text-sm sm:text-lg text-white/85 font-normal leading-relaxed max-w-xl">
              {SLIDES[current].description}
            </p>
          </div>

          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
            <Link
              href={SLIDES[current].primaryBtn.href}
              className="group btn-elevate btn-shadow-light btn-sheen btn-sheen-dark inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-neutral-900 text-sm font-semibold tracking-wide hover:bg-[#FAF9F6] shadow-md transition-all active:scale-[0.985]"
            >
              <span>{SLIDES[current].primaryBtn.text}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href={SLIDES[current].secondaryBtn.href}
              className="group btn-elevate btn-shadow-outline inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 hover:border-white/60 text-sm font-medium tracking-wide backdrop-blur-xs shadow-sm transition-all active:scale-[0.985]"
            >
              <BookOpen size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span>{SLIDES[current].secondaryBtn.text}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sağ Üst WhatsApp İletişim Baloncuğu */}
      <div className="absolute top-4 right-4 sm:top-7 sm:right-8 lg:right-12 z-20">
        <a
          href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
            "Merhaba Güler Mobilya, siteniz üzerinden ulaşıyorum. Mobilya modelleri ve fiyatlar hakkında bilgi alabilir miyim?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group btn-elevate btn-shadow-emerald btn-sheen inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white border border-emerald-300/40 backdrop-blur-md shadow-lg transition-all active:scale-[0.985]"
          title="Güler Mobilya WhatsApp İletişim Hattı"
          aria-label="WhatsApp İletişim Hattı"
        >
          {/* Canlı Çevrimiçi Pulse Noktası */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100" />
          </span>

          {/* Orijinal WhatsApp Vektör Logosu */}
          <svg
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-current shrink-0 text-white group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>

          {/* İletişim Metni */}
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] text-emerald-100 font-light hidden sm:inline">
              Canlı Destek &amp; Fiyat
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              WhatsApp İletişim
            </span>
          </div>
        </a>
      </div>

      {/* Slider Ok Butonları */}
      <div className="absolute bottom-5 right-4 sm:bottom-8 sm:right-12 z-20 flex items-center gap-2.5">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/25 hover:border-white/50 flex items-center justify-center transition-all duration-300 backdrop-blur-xs shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
          aria-label="Önceki Slayt"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/25 hover:border-white/50 flex items-center justify-center transition-all duration-300 backdrop-blur-xs shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
          aria-label="Sonraki Slayt"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Slider Alt Çizgi İndikatörleri */}
      <div className="absolute bottom-5 left-4 sm:bottom-8 sm:left-12 z-20 flex items-center gap-2">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-7 sm:w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
