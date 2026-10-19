"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Sparkles, MessageSquare, Check, ShieldCheck, Droplets, PawPrint, Eye } from "lucide-react"
import { INITIAL_FABRICS } from "@/data/fabrics"
import { Fabric } from "@/types/fabric"
import { SITE_CONFIG } from "@/data/site-config"

export function UpholsteryFabrics() {
  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [activeFabric, setActiveFabric] = useState<Fabric>(INITIAL_FABRICS[0])

  const collections = useMemo(() => {
    const list = Array.from(new Set(INITIAL_FABRICS.map((f) => f.collection).filter(Boolean)))
    return ["all", ...list] as string[]
  }, [])

  const filteredFabrics = useMemo(() => {
    if (selectedCollection === "all") return INITIAL_FABRICS
    return INITIAL_FABRICS.filter((f) => f.collection === selectedCollection)
  }, [selectedCollection])

  return (
    <section id="kumaslar" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Kumaş &amp; Doku Koleksiyonu
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
              Özel Seçim Kumaş Kartelası: <span className="font-semibold">Dokunun &amp; Keşfedin</span>
            </h2>
          </div>
          <p className="text-sm text-[#6E6A64] max-w-md font-normal leading-relaxed">
            Döşemelerimizde kullandığımız tüm kumaşlar yüksek Martindale sürtünme testinden geçmiş, kolay silinebilir ve leke tutmaz sertifikalıdır.
          </p>
        </div>

        {/* Kumaş Koleksiyon Filtreleri */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
          {collections.map((col) => {
            const label = col === "all" ? "Tüm Kumaş Serileri" : col
            const isActive = selectedCollection === col
            return (
              <button
                key={col}
                type="button"
                onClick={() => setSelectedCollection(col)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#1E1E1C] text-white shadow-xs font-semibold"
                    : "bg-[#F7F5F1] text-[#6E6A64] hover:bg-[#EFECE6] hover:text-[#1E1E1C]"
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* 2 Kolonlu Kumaş Keşfi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Sol: Kumaş Kartları Izgarası */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {filteredFabrics.map((fabric) => {
              const isSelected = activeFabric.id === fabric.id
              return (
                <div
                  key={fabric.id}
                  onClick={() => setActiveFabric(fabric)}
                  className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-200 group bg-[#F7F5F1] flex flex-col ${
                    isSelected
                      ? "border-[#1E1E1C] ring-2 ring-[#1E1E1C] shadow-md scale-[1.02]"
                      : "border-[#E7E2DA] hover:border-[#9A6836] hover:shadow-xs"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                    <Image
                      src={fabric.image}
                      alt={fabric.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/70 text-white backdrop-blur-md">
                        {fabric.code}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#1E1E1C] leading-none mb-1">
                        {fabric.name}
                      </h4>
                      <p className="text-[11px] text-[#6E6A64] truncate">
                        {fabric.collection}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-[#1E1E1C] text-white flex items-center justify-center shrink-0">
                        <Check size={10} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sağ: Seçili Kumaş Detay & Özellik Vitrini */}
          <div className="lg:col-span-5">
            <div className="bg-[#F7F5F1] border border-[#E7E2DA] rounded-2xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9A6836] font-semibold block mb-1">
                    Seçili Kumaş Kartelası
                  </span>
                  <h3 className="text-2xl font-bold text-[#1E1E1C]">
                    {activeFabric.name} <span className="font-light text-base text-[#6E6A64]">#{activeFabric.code}</span>
                  </h3>
                  <p className="text-xs text-[#6E6A64] mt-0.5">{activeFabric.collection} Serisi</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white shadow-md relative overflow-hidden shrink-0">
                  <Image src={activeFabric.image} alt={activeFabric.name} fill className="object-cover" />
                </div>
              </div>

              {/* Büyük Görsel Önizlemesi */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E7E2DA] shadow-xs">
                <Image
                  src={activeFabric.image}
                  alt={activeFabric.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Kumaş Performans Özellikleri */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#1E1E1C] uppercase tracking-wider block">
                  Kumaş Performans Kriterleri:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-[#E7E2DA] flex items-center gap-2">
                    <Droplets size={16} className="text-[#9A6836] shrink-0" />
                    <span className="font-medium text-[#1E1E1C]">Su &amp; Sıvı İtici</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#E7E2DA] flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
                    <span className="font-medium text-[#1E1E1C]">Kolay Silinebilir</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#E7E2DA] flex items-center gap-2">
                    <PawPrint size={16} className="text-[#9A6836] shrink-0" />
                    <span className="font-medium text-[#1E1E1C]">Pati / Tırnak Dostu</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#E7E2DA] flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-600 shrink-0" />
                    <span className="font-medium text-[#1E1E1C]">&gt;45.000 Martindale</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Kumaş Kartelası Talebi */}
              <div className="pt-2">
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Merhaba Güler Mobilya, sitenizdeki ${activeFabric.collection} serisinden "${activeFabric.name} (#${activeFabric.code})" kumaşını çok beğendim. Döşeme yenileme için bu kumaşın kartela renklerini ve metre fiyatını öğrenebilir miyim?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wide shadow-md transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>Bu Kumaş İçin Numune &amp; Bilgi İste</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
