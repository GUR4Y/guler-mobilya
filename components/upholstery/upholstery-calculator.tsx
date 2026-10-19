"use client"

import { useState, useMemo } from "react"
import { Calculator, MessageSquare, Phone, Check, Sparkles, ArrowRight, Info, ShieldCheck } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

interface FurnitureOption {
  id: string
  name: string
  fabricMeters: string
  baseCostMin: number
  baseCostMax: number
}

const FURNITURE_OPTIONS: FurnitureOption[] = [
  { id: "berjer", name: "Tekli Berjer / Koltuk", fabricMeters: "~4-5 metre", baseCostMin: 2800, baseCostMax: 4200 },
  { id: "ikili", name: "2'li Koltuk", fabricMeters: "~9-11 metre", baseCostMin: 4800, baseCostMax: 6800 },
  { id: "uclu", name: "3'lü Koltuk / Kanepe", fabricMeters: "~12-14 metre", baseCostMin: 5800, baseCostMax: 8500 },
  { id: "cekyat", name: "Mekanizmalı Çekyat", fabricMeters: "~10-12 metre", baseCostMin: 4900, baseCostMax: 7200 },
  { id: "kose", name: "L Köşe Koltuk Takımı", fabricMeters: "~18-22 metre", baseCostMin: 8500, baseCostMax: 13500 },
  { id: "sandalye", name: "6'lı Sandalye Takımı", fabricMeters: "~6-8 metre", baseCostMin: 3600, baseCostMax: 5400 },
  { id: "sedir", name: "Balkon / Sedir Minder Grubu", fabricMeters: "Özel Ölçü", baseCostMin: 3200, baseCostMax: 5000 },
]

interface ScopeOption {
  id: string
  name: string
  desc: string
  multiplier: number
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: "kumas",
    name: "Sadece Kumaş Yüz Değişimi",
    desc: "Mevcut sünger sağlam ise kumaş sökümü, dikimi ve kaplama işçiliği.",
    multiplier: 1.0,
  },
  {
    id: "sunger",
    name: "Kumaş + 35 DNS HR Süngerleme",
    desc: "Çökmüş süngerlerin ortopedik HR blok süngerlerle yenilenmesi ve kumaş kaplama.",
    multiplier: 1.35,
  },
  {
    id: "restorasyon",
    name: "Komple Restorasyon & Cila",
    desc: "İskelet sıkılama, çelik yay/makas tamiri, 35 DNS süngerleme, kumaş ve ahşap cila.",
    multiplier: 1.65,
  },
]

interface FabricTierOption {
  id: string
  name: string
  desc: string
  multiplier: number
}

const FABRIC_TIERS: FabricTierOption[] = [
  {
    id: "standart",
    name: "Silinebilir Keten & Dokuma",
    desc: "Leke tutmaz, ferah, dayanıklı günlük kumaşlar.",
    multiplier: 1.0,
  },
  {
    id: "bukle",
    name: "Lüks Bukle & Kadife",
    desc: "Trend yumuşak doku, zengin renk doygunluğu.",
    multiplier: 1.18,
  },
  {
    id: "nubuk",
    name: "İtalyan Nubuk (Su İtici & Pati Dostu)",
    desc: "Tırnak geçirmez, sıvı itici, yüksek sürtünme dayanımlı.",
    multiplier: 1.3,
  },
  {
    id: "deri",
    name: "Suni / Hakiki Deri",
    desc: "Ağır hizmet tipi, silinebilir şık deri kaplama.",
    multiplier: 1.45,
  },
]

export function UpholsteryCalculator() {
  const [selectedFurniture, setSelectedFurniture] = useState<string>("uclu")
  const [selectedScope, setSelectedScope] = useState<string>("sunger")
  const [selectedFabricTier, setSelectedFabricTier] = useState<string>("bukle")

  const currentFurniture = FURNITURE_OPTIONS.find((f) => f.id === selectedFurniture) || FURNITURE_OPTIONS[2]
  const currentScope = SCOPE_OPTIONS.find((s) => s.id === selectedScope) || SCOPE_OPTIONS[1]
  const currentFabricTier = FABRIC_TIERS.find((f) => f.id === selectedFabricTier) || FABRIC_TIERS[1]

  const calculation = useMemo(() => {
    const totalMultiplier = currentScope.multiplier * currentFabricTier.multiplier
    const minPrice = Math.round((currentFurniture.baseCostMin * totalMultiplier) / 100) * 100
    const maxPrice = Math.round((currentFurniture.baseCostMax * totalMultiplier) / 100) * 100
    return { minPrice, maxPrice }
  }, [currentFurniture, currentScope, currentFabricTier])

  // Hazır WhatsApp Mesajı Oluşturucu
  const whatsappMessage = useMemo(() => {
    return encodeURIComponent(
      `Merhaba Güler Mobilya, döşeme hesaplayıcınızdan şu seçimi yaptım:\n` +
        `• Mobilya: ${currentFurniture.name}\n` +
        `• İşlem Kapsamı: ${currentScope.name}\n` +
        `• Kumaş Tercihi: ${currentFabricTier.name}\n` +
        `• Sitedeki Tahmini Aralık: ${calculation.minPrice.toLocaleString("tr-TR")} ₺ – ${calculation.maxPrice.toLocaleString("tr-TR")} ₺\n\n` +
        `Mobilyamın fotoğraflarını iletiyorum, net teklif verebilir misiniz?`
    )
  }, [currentFurniture, currentScope, currentFabricTier, calculation])

  return (
    <section id="fiyat-hesaplayici" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Başlık */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold uppercase tracking-wider text-[#9A6836] mb-3">
            <Calculator size={13} />
            <span>İnteraktif Döşeme Fiyat Hesaplayıcı</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
            Yenileme Maliyetini <span className="font-semibold">Anında Hesaplayın</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6A64] mt-3 leading-relaxed">
            Mobilya türünüzü ve tercih ettiğiniz malzemeleri seçerek ortalama fiyat aralığını görün, tek tıkla ustanıza WhatsApp üzerinden danışın.
          </p>
        </div>

        {/* Hesaplayıcı Ana Kutusu */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Sol Kolon: Seçim Alanları */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Adım: Mobilya Türü */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1C] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1E1E1C] text-white flex items-center justify-center text-[11px]">
                    1
                  </span>
                  <span>Mobilya Türünü Seçin</span>
                </label>
                <span className="text-[11px] text-[#8E8A84]">Gereken Kumaş: {currentFurniture.fabricMeters}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FURNITURE_OPTIONS.map((f) => {
                  const isSelected = selectedFurniture === f.id
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFurniture(f.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-[#1E1E1C] bg-[#F7F5F1] text-[#1E1E1C] shadow-xs font-semibold ring-1 ring-[#1E1E1C]"
                          : "border-[#E7E2DA] bg-white text-[#6E6A64] hover:border-[#1E1E1C] hover:text-[#1E1E1C]"
                      }`}
                    >
                      <span>{f.name}</span>
                      {isSelected && <Check size={14} className="text-[#1E1E1C]" />}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 2. Adım: İşlem Kapsamı */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1C] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#1E1E1C] text-white flex items-center justify-center text-[11px]">
                  2
                </span>
                <span>İşlem Kapsamını Belirleyin</span>
              </label>
              <div className="space-y-2.5">
                {SCOPE_OPTIONS.map((s) => {
                  const isSelected = selectedScope === s.id
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedScope(s.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? "border-[#1E1E1C] bg-[#F7F5F1] text-[#1E1E1C] shadow-xs ring-1 ring-[#1E1E1C]"
                          : "border-[#E7E2DA] bg-white text-[#6E6A64] hover:border-[#1E1E1C] hover:text-[#1E1E1C]"
                      }`}
                    >
                      <div>
                        <span className="text-xs sm:text-sm font-semibold block text-[#1E1E1C]">{s.name}</span>
                        <span className="text-xs text-[#6E6A64] font-normal leading-relaxed">{s.desc}</span>
                      </div>
                      <div className="shrink-0 mt-0.5">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-[#1E1E1C] bg-[#1E1E1C] text-white" : "border-[#C5C0B7]"
                          }`}
                        >
                          {isSelected && <Check size={10} />}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3. Adım: Kumaş Kalite Segmenti */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#1E1E1C] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#1E1E1C] text-white flex items-center justify-center text-[11px]">
                  3
                </span>
                <span>Kumaş Tercihini Seçin</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FABRIC_TIERS.map((ft) => {
                  const isSelected = selectedFabricTier === ft.id
                  return (
                    <button
                      key={ft.id}
                      type="button"
                      onClick={() => setSelectedFabricTier(ft.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-[#1E1E1C] bg-[#F7F5F1] text-[#1E1E1C] shadow-xs ring-1 ring-[#1E1E1C]"
                          : "border-[#E7E2DA] bg-white text-[#6E6A64] hover:border-[#1E1E1C] hover:text-[#1E1E1C]"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-xs font-semibold text-[#1E1E1C]">{ft.name}</span>
                        {isSelected && <Check size={13} className="text-[#1E1E1C]" />}
                      </div>
                      <span className="text-[11px] text-[#6E6A64] leading-snug">{ft.desc}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Canlı Fiyat & Teklif Özeti */}
          <div className="lg:col-span-5">
            <div className="bg-[#F7F5F1] border border-[#E7E2DA] rounded-2xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-sm">
              <div className="border-b border-[#E7E2DA] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#9A6836] font-semibold block mb-1">
                  Tahmini Döşeme Maliyeti
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-[#1E1E1C]">
                    {calculation.minPrice.toLocaleString("tr-TR")} ₺
                  </span>
                  <span className="text-lg text-[#6E6A64]">ile</span>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#1E1E1C]">
                    {calculation.maxPrice.toLocaleString("tr-TR")} ₺
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    <Sparkles size={11} /> Sıfır Mobilyaya Göre ~%65 Tasarruf
                  </span>
                </div>
              </div>

              {/* Seçimlerin Özeti */}
              <div className="space-y-3 text-xs">
                <span className="font-semibold text-[#1E1E1C] block uppercase tracking-wider text-[11px]">
                  Seçtiğiniz Konfigürasyon:
                </span>
                <div className="bg-white p-3.5 rounded-xl border border-[#E7E2DA] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6E6A64]">Mobilya:</span>
                    <strong className="text-[#1E1E1C]">{currentFurniture.name}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6E6A64]">İşlem Kapsamı:</span>
                    <strong className="text-[#1E1E1C]">{currentScope.name}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6E6A64]">Kumaş Dokusu:</span>
                    <strong className="text-[#1E1E1C]">{currentFabricTier.name}</strong>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-[#E7E2DA]/60">
                    <span className="text-[#6E6A64]">Kumaş Metrajı:</span>
                    <span className="text-[#9A6836] font-medium">{currentFurniture.fabricMeters}</span>
                  </div>
                </div>
              </div>

              {/* Bilgilendirme Notu */}
              <div className="flex items-start gap-2 text-[11px] text-[#6E6A64] bg-white/60 p-3 rounded-lg border border-[#E7E2DA]">
                <Info size={14} className="text-[#9A6836] shrink-0 mt-0.5" />
                <p>
                  * Nihai fiyat, mobilyanızın net iskelet ölçüleri, dikiş detayları ve tercih edeceğiniz tam kumaş serisine göre belirlenir.
                </p>
              </div>

              {/* Butonlar */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold tracking-wide shadow-md transition-all duration-200"
                >
                  <MessageSquare size={16} />
                  <span>Bu Seçimle WhatsApp'tan Fiyat İste</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#1E1E1C] text-[#1E1E1C] hover:bg-[#1E1E1C] hover:text-white text-xs font-semibold transition-colors"
                >
                  <Phone size={13} />
                  <span>Telefonla Doğrudan Danış: {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
