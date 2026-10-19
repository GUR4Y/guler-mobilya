"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle2, MessageSquare, Layers, Sparkles, Star } from "lucide-react"
import { UPHOLSTERY_PROJECTS, UpholsteryProject } from "@/data/upholstery"
import { SITE_CONFIG } from "@/data/site-config"

function ProjectCard({ project }: { project: UpholsteryProject }) {
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
          className="object-cover object-center transition-all duration-500 group-hover/img:scale-[1.02]"
          priority={project.id === "uph-real-1"}
        />

        {/* Durum Rozeti */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm transition-colors duration-300 ${
              showAfter ? "bg-emerald-700/90 text-white" : "bg-neutral-900/90 text-neutral-200"
            }`}
          >
            {showAfter ? "Yenilenmiş Hali (Sonra)" : "Eski Hali (Önce)"}
          </span>
        </div>

        {/* Etkileşimli Butonlar */}
        <div className="absolute bottom-4 inset-x-4 flex items-center justify-center z-10">
          <div className="bg-black/85 backdrop-blur-md p-1 rounded-full flex gap-1 border border-white/20 shadow-xl">
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

      {/* Proje Bilgileri */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs uppercase tracking-wider text-[#9A6836] font-semibold">
              {project.category}
            </span>
            <span className="text-[11px] text-[#8E8A84] font-medium">No: {project.id}</span>
          </div>

          <h3 className="text-lg font-semibold text-[#1E1E1C] leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6E6A64] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Yapılan İşlemler Özeti */}
        <div className="pt-3 border-t border-[#E7E2DA] space-y-2 text-xs">
          <div className="flex items-start gap-2 text-[#4A4742]">
            <Layers size={13} className="text-[#9A6836] shrink-0 mt-0.5" />
            <span>
              <strong>Kumaş:</strong> {project.specs.fabric}
            </span>
          </div>
          <div className="flex items-start gap-2 text-[#4A4742]">
            <CheckCircle2 size={13} className="text-emerald-700 shrink-0 mt-0.5" />
            <span>
              <strong>Sünger &amp; İskelet:</strong> {project.specs.foam} • {project.specs.skeleton}
            </span>
          </div>
          {project.specs.woodFinish && (
            <div className="flex items-start gap-2 text-[#4A4742]">
              <Sparkles size={13} className="text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Ahşap Cila:</strong> {project.specs.woodFinish}
              </span>
            </div>
          )}
        </div>

        {/* Müşteri Yorumu (Varsa) */}
        {project.testimonial && (
          <div className="bg-[#F7F5F1] p-3 rounded-xl border border-[#E7E2DA]/80 space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(project.testimonial.rating)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span className="text-[11px] text-[#6E6A64] font-medium">
                {project.testimonial.customer} ({project.testimonial.location})
              </span>
            </div>
            <p className="text-xs italic text-[#4A4742] line-clamp-2">
              "{project.testimonial.comment}"
            </p>
          </div>
        )}

        {/* WhatsApp Hızlı Fiyat Butonu */}
        <div className="pt-2">
          <a
            href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
              `Merhaba Güler Mobilya, döşeme sayfanızdaki "${project.title}" projenizi gördüm. Benim de benzer bir mobilyam var, yenileme fiyatı almak için fotoğraf gönderiyorum.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#1E1E1C] text-[#1E1E1C] text-xs font-semibold hover:bg-[#1E1E1C] hover:text-white transition-colors"
          >
            <MessageSquare size={13} />
            <span>Benzer Mobilya İçin Fiyat Sor</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export function UpholsteryGallery() {
  return (
    <section id="projeler" className="py-16 sm:py-20 lg:py-24 bg-[#F7F5F1] border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Önce &amp; Sonra Dönüşüm Galerisi
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
              Atölyemizden Çıkan <span className="font-semibold">Gerçek Dönüşümler</span>
            </h2>
          </div>
          <p className="text-sm text-[#6E6A64] max-w-md font-normal leading-relaxed">
            Fotoğraflardaki "Önce" ve "Sonra" butonlarına tıklayarak eski mobilyaların nasıl sıfır mağaza kalitesinde modern parçalara dönüştüğünü tek bakışta inceleyin.
          </p>
        </div>

        {/* Proje Kartları Izgarası (Tek Celsede Tümü Birlikte) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPHOLSTERY_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
