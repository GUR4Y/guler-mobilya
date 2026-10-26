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
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
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
        Subtle Button Hover Effects
        12:20 AM
        Patronun isteği doğrultusunda, üst menü / navbar (Ana Sayfa, Ürünler) alanına dokunmadan, doğrudan sayfanın ana bölümü olan

        Hero Slider
        div'inin sağ üst köşesine şık ve lüks bir WhatsApp İletişim Baloncuğu eklendi.

        Eklenen Özellikler:
        Konumlandırma:

        Menü çubuğunun dışında, doğrudan sayfa div'inin sağ üst köşesinde yer alır (absolute top-4 right-4 sm:top-7 sm:right-8 lg:right-12).
        Hem mobilde hem de masaüstünde slider görseli ve metinleriyle çakışmadan ferahça durur.
        Görsel Tasarım & Mikro Efektler:

        Canlı Çevrimiçi Göstergesi: Müşteri temsilcisinin aktif olduğunu hissettiren yeşil yanıp sönen nabız (pulse) ışığı.
        Orijinal WhatsApp Vektör Logosu: Net ve tanınabilir WhatsApp ikonu.
        Metin Alanı: Masaüstünde "Canlı Destek & Fiyat — WhatsApp İletişim" hiyerarşisi, mobilde kompakt şık görünüm.
        Lüks Cam & Işık Efekti: backdrop-blur-md, zümrüt yeşili degrade arka plan, üzerine gelindiğinde az önce hazırladığımız mikro yükselme (-2px) ve zarif ışık yansıması (sheen) animasyonu.
        Doğrudan Bağlantı:

        Tıklandığında otomatik olarak Güler Mobilya resmi WhatsApp hattına (0544 407 92 39) hazır selamlaşma ve fiyat sorma mesajıyla bağlanır.
        12:20 AM
        sabıt kalmasın kaydırdıkca benle beraber o da ınsın bıde her sayfada olsa kotu mu olur ya bı deneyelım her sayfada olsun
        12:26 AM
        İstediğiniz gibi güncelledim! Artık WhatsApp iletişim baloncuğu sadece bir bölümde takılı kalmıyor; siz sayfayı aşağı kaydırdıkça ekranın sağ üstünde sizinle birlikte akıcı şekilde süzülüyor ve sitedeki tüm sayfalarda aktif olarak çalışıyor.

        Yapılan Düzenlemeler:
        Sayfayla Birlikte İnen (Floating / Sticky) Düzen:



        FloatingWhatsApp
        bileşeni fixed konumlandırma ile hazırlandı (top-[116px] sm:top-[124px] right-3 sm:right-6 lg:right-8).
        Üst menü / navbar ile çakışmaz, menünün hemen altında sayfa alanının sağ üst köşesinde her zaman görünür ve erişilebilir kalır.
        Tüm Sayfalarda Geçerli (Global Layout Entegrasyonu):



        RootLayout
        seviyesine eklendi.
        Artık Ana Sayfa, Modellerimiz, Ürün Detayları, Döşeme & Yenileme, Katalog ve İletişim dahil tüm sayfalarda kesintisiz olarak çalışır.
        Lüks & Kurumsal Detaylar:

        Canlı Müşteri Hattı Göstergesi: Yeşil nabız (pulse) efektiyle online/aktif hissi verir.
        Mikro Etkileşim: Üzerine gelindiğinde hafifçe 2px yükselir (btn-elevate), doğal yeşil gölgesi derinleşir ve içinden hafif bir ışık huzmesi (btn-sheen) geçer.
        Doğrudan WhatsApp İletişimi: Tıklandığında doğrudan şirket hattına (0544 407 92 39) bağlanır.
        Production derleme ve kod testleri sıfır hatayla başarıyla tamamlandı.

        Floating WhatsApp iletişim baloncuğunuz tüm sayfalarda sayfa kaydırmasıyla birlikte akıcı şekilde çalışır durumda hazır! İstediğiniz başka bir detay veya ince ayar olursa memnuniyetle yardımcı olurum.

        12:26 AM
        favıcon olarak bunu ayarla
        12:35 AM
        layout.tsx
      </div>

      {/* Slider Alt Çizgi İndikatörleri */}
      <div className="absolute bottom-5 left-4 sm:bottom-8 sm:left-12 z-20 flex items-center gap-2">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "w-7 sm:w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
