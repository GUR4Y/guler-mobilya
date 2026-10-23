"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle2, MessageSquare, Layers, Sparkles, Star, X, Quote } from "lucide-react"
import { UPHOLSTERY_PROJECTS, UpholsteryProject } from "@/data/upholstery"
import { SITE_CONFIG } from "@/data/site-config"

interface ProjectCardProps {
  project: UpholsteryProject
  onOpenReview: (project: UpholsteryProject) => void
}

function ProjectCard({ project, onOpenReview }: ProjectCardProps) {
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

        {/* Müşteri Yorumu (Tıklanınca büyük kartta detaylı açılır) */}
        {project.testimonial && (
          <button
            type="button"
            onClick={() => onOpenReview(project)}
            title="Yorumun tamamını büyük kartta görmek için tıklayın"
            className="w-full text-left bg-[#F7F5F1] hover:bg-[#EFECE6] p-3.5 rounded-xl border border-[#E7E2DA]/80 hover:border-[#9A6836]/40 space-y-1.5 transition-all duration-200 group/review cursor-pointer"
          >
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
            <p className="text-xs italic text-[#4A4742] line-clamp-2 leading-relaxed">
              "{project.testimonial.comment}"
            </p>
            <div className="pt-0.5 flex items-center justify-between text-[11px] text-[#9A6836] font-medium group-hover/review:text-[#7A4F23]">
              <span>Yorumun tamamını gör</span>
              <span className="text-xs font-bold transition-transform group-hover/review:translate-x-0.5">↗</span>
            </div>
          </button>
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
  const [selectedReviewProject, setSelectedReviewProject] = useState<UpholsteryProject | null>(null)

  // ESC tuşuna basınca modalı kapat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedReviewProject(null)
      }
    }
    if (selectedReviewProject) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedReviewProject])

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

        {/* Proje Kartları Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPHOLSTERY_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenReview={(p) => setSelectedReviewProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Büyük Yorum Kartı Modalı */}
      {selectedReviewProject && selectedReviewProject.testimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedReviewProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E7E2DA] p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kapat Butonu */}
            <button
              type="button"
              onClick={() => setSelectedReviewProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F5F1] hover:bg-[#EFECE6] text-[#6E6A64] hover:text-[#1E1E1C] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>

            {/* Rozet & Puan */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                <CheckCircle2 size={13} className="text-emerald-700" />
                <span>Doğrulanmış Müşteri Deneyimi</span>
              </span>
              <div className="flex items-center gap-1 text-amber-500 ml-auto mr-10 sm:mr-0">
                {[...Array(selectedReviewProject.testimonial.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* İlgili Proje Önizlemesi */}
            <div className="flex items-center gap-3.5 p-3.5 bg-[#F7F5F1] rounded-2xl border border-[#E7E2DA] mb-6">
              <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-[#E7E2DA]">
                <Image
                  src={selectedReviewProject.afterImage}
                  alt={selectedReviewProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9A6836] block">
                  {selectedReviewProject.category}
                </span>
                <h4 className="text-xs sm:text-sm font-medium text-[#1E1E1C] truncate">
                  {selectedReviewProject.title}
                </h4>
              </div>
            </div>

            {/* Yorumun Tamamı (Büyük Tipografi ve Alıntı Vurgusu) */}
            <div className="relative mb-6 bg-[#FCFBF9] p-5 rounded-2xl border border-[#E7E2DA]/60">
              <Quote className="w-8 h-8 text-[#9A6836]/25 mb-2" />
              <p className="text-base sm:text-lg text-[#1E1E1C] font-normal leading-relaxed italic">
                "{selectedReviewProject.testimonial.comment}"
              </p>
            </div>

            {/* Müşteri & Konum Bilgisi */}
            <div className="pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
              <div>
                <span className="block text-sm font-semibold text-[#1E1E1C]">
                  {selectedReviewProject.testimonial.customer}
                </span>
                <span className="text-xs text-[#6E6A64]">
                  {selectedReviewProject.testimonial.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Merhaba Güler Mobilya, döşeme sayfanızdaki "${selectedReviewProject.title}" projesini ve müşteri yorumunu gördüm. Ben de mobilyam için fiyat almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-elevate btn-shadow-dark btn-sheen px-4 py-2 rounded-full bg-[#1E1E1C] hover:bg-[#2E2E2B] text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5 active:scale-95 shadow-xs"
                >
                  <MessageSquare size={13} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Fiyat Sor</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedReviewProject(null)}
                  className="btn-elevate px-4 py-2 rounded-full bg-[#F7F5F1] hover:bg-[#EAE6DF] text-[#1E1E1C] text-xs font-semibold transition-all cursor-pointer border border-[#E7E2DA] hover:border-[#1E1E1C]/30 active:scale-95 shadow-xs"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
