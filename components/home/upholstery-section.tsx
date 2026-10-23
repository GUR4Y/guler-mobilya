"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import { HOME_UPHOLSTERY_PROJECTS, UpholsteryProject } from "@/data/upholstery"
import { SITE_CONFIG } from "@/data/site-config"

function BeforeAfterCard({ project }: { project: UpholsteryProject }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="bg-white border border-[#E7E2DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Görsel Alanı & Before/After Toggle (Tıklanınca öncesi/sonrası arasında geçiş yapar) */}
      <div
        onClick={() => setShowAfter((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setShowAfter((prev) => !prev)
          }
        }}
        title={showAfter ? "Önceki halini görmek için tıklayın" : "Yenilenmiş sonrasını görmek için tıklayın"}
        className={`relative ${project.aspectRatio || "aspect-[16/10]"} bg-[#1C1C1A] overflow-hidden w-full cursor-pointer select-none group/img`}
      >
        {/* Ana Fotoğraf: object-cover ile çerçeveyi tam doldurur */}
        <Image
          src={showAfter ? project.afterImage : project.beforeImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 md:group-hover/img:scale-[1.02]"
        />

        {/* Durum Rozeti */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm transition-colors duration-300 ${
              showAfter
                ? "bg-emerald-700/90 text-white"
                : "bg-neutral-900/90 text-neutral-200"
            }`}
          >
            {showAfter ? "Yenilenmiş Hali (Sonra)" : "Eski Hali (Önce)"}
          </span>
        </div>

        {/* Etkileşimli Butonlar */}
        <div className="absolute bottom-4 inset-x-4 flex items-center justify-center gap-2 z-10">
          <div className="bg-black/85 backdrop-blur-md p-1 rounded-full flex gap-1 border border-white/20 shadow-lg">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowAfter(false)
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                !showAfter ? "bg-white text-black font-semibold shadow-sm" : "text-white/70 hover:text-white"
              }`}
            >
              Önce
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setShowAfter(true)
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                showAfter ? "bg-amber-400 text-neutral-950 font-bold shadow-sm" : "text-white/70 hover:text-white"
              }`}
            >
              Sonra
            </button>
          </div>
        </div>
      </div>

      {/* Metin Bilgisi */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wider text-[#9A6836] font-semibold mb-1">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold text-[#1E1E1C] mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[#6E6A64] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="pt-3 border-t border-[#E7E2DA] flex items-center justify-between text-xs text-neutral-600">
          <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle2 size={14} /> İskelet &amp; Sünger Yenilendi
          </span>
        </div>
      </div>
    </div>
  )
}

export function UpholsterySection() {
  return (
    <section id="doseme" className="py-20 lg:py-28 bg-[#F7F5F1] border-b border-[#E7E2DA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Döşeme &amp; Yenileme Atölyesi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] leading-tight">
              Eski Mobilyalarınıza <span className="font-semibold">İkinci Bir Hayat</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-3">
            <p className="text-sm sm:text-base text-[#6E6A64] max-w-md font-normal leading-relaxed text-left md:text-right">
              Yıpranmış veya kumaşını değiştirmek istediğiniz koltuk, çekyat ve sandalyelerinizi usta işçilik ve kaliteli kumaşlarla yeniliyoruz.
            </p>
            <Link
              href="/doseme"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#9A6836] hover:text-[#1E1E1C] transition-colors group"
            >
              <span>Tüm Döşeme Hizmetlerini ve Detaylarını Gör</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Before / After Kartları (Ana sayfada öne çıkan 3 gerçek dönüşüm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {HOME_UPHOLSTERY_PROJECTS.map((project) => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>

        {/* Döşeme Fiyat Teklifi / İletişim Kutusu */}
        <div className="bg-white border border-[#E7E2DA] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
              <Sparkles size={13} />
              <span>Fotoğrafınızı Gönderin, Fiyat Alın</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1E1E1C]">
              Koltuk veya Çekyatınızın Yenilenme Maliyetini Öğrenin
            </h3>
            <p className="text-sm text-[#6E6A64]">
              Yenilemek istediğiniz mobilyanın fotoğrafını bize iletin, kumaş ve sünger seçenekleriyle size en uygun teklifi verelim.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/doseme"
              className="group btn-elevate btn-shadow-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#1E1E1C] text-[#1E1E1C] text-sm font-semibold tracking-wide hover:bg-[#1E1E1C] hover:text-white transition-all shadow-xs active:scale-[0.985]"
            >
              <span>Detaylı Sayfayı İncele</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href={SITE_CONFIG.phoneTel}
              className="group btn-elevate btn-shadow-dark btn-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1E1C] text-white text-sm font-semibold tracking-wide hover:bg-[#2E2E2B] transition-all shadow-md active:scale-[0.985]"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Ara: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
