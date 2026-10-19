"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"

// Tam ekran slider slaytları
const SLIDES = [
  {
    id: 1,
    image: "/hero-slide-1.jpg",
    tagline: "Güler Mobilya 2026 Koleksiyonu",
    title: "Yaşam Alanınıza Yeni Bir Dokunuş",
    description: "Konforu, işlevselliği ve zamansız tasarımı yaşam alanlarınızla buluşturan özgün mobilya modelleri.",
    primaryBtn: { text: "Ürünleri Keşfet", href: "/urunler" },
    secondaryBtn: { text: "Kataloğu İncele", href: "/katalog" },
  },
  {
    id: 2,
    image: "/hero-slide-2.jpg",
    tagline: "Özel İmalat & Tasarım",
    title: "Evinizin En Rahat ve Şık Köşesi",
    description: "Geniş oturum konforu, dayanıklı gürgen iskelet ve leke tutmaz zengin kumaş seçenekleri.",
    primaryBtn: { text: "Modelleri İncele", href: "/urunler" },
    secondaryBtn: { text: "Kataloğu İncele", href: "/katalog" },
  },
  {
    id: 3,
    image: "/hero-slide-3.jpg",
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
    <section
      className="relative w-full overflow-hidden bg-neutral-900 h-[540px] sm:h-[620px] lg:h-[calc(100svh-114px)] min-h-[500px]"
    >
      {/* Arka Plan Slider Görselleri */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Fresh ve okunaklı lüks koyuluk efekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Ön Plan Metin & CTA Alanı */}
      <div className="relative z-10 h-full container-custom flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-widest uppercase bg-white/10 backdrop-blur-md rounded-full text-amber-300 border border-white/15">
              {SLIDES[current].tagline}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12]">
              {SLIDES[current].title}
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-xl">
              {SLIDES[current].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Link
              href={SLIDES[current].primaryBtn.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-neutral-900 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl"
            >
              <span>{SLIDES[current].primaryBtn.text}</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href={SLIDES[current].secondaryBtn.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 text-sm font-medium tracking-wide transition-all"
            >
              <BookOpen size={16} />
              <span>{SLIDES[current].secondaryBtn.text}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slider Ok Butonları */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/15 flex items-center justify-center transition-all"
          aria-label="Önceki Slayt"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/15 flex items-center justify-center transition-all"
          aria-label="Sonraki Slayt"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slider Alt Çizgi İndikatörleri */}
      <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex items-center gap-2">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
