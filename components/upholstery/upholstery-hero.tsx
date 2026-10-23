"use client"

import Link from "next/link"
import { Home, ChevronRight, Phone, MessageSquare, Sparkles, ShieldCheck, Truck, Clock, Award } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

export function UpholsteryHero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projeler")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-[#FFFFFF] border-b border-[#E7E2DA] overflow-hidden">
      {/* İnce Arka Plan Dokusu */}
      <div className="absolute inset-0 bg-[radial-gradient(#E7E2DA_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container-custom relative py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#6E6A64] mb-6">
          <Link href="/" className="hover:text-[#1E1E1C] flex items-center gap-1 transition-colors">
            <Home size={12} /> Ana Sayfa
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1E1E1C] font-medium">Döşeme &amp; Yenileme Atölyesi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Sol: Metin & CTA */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[#9A6836] text-xs font-semibold tracking-wide">
              <Sparkles size={13} className="text-amber-600" />
              <span>35+ YILLIK ATÖLYE TECRÜBESİ • USTALIKLA MOBİLYA YENİLEME</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] tracking-tight leading-[1.15]">
              Eski Mobilyalarınıza <br className="hidden sm:inline" />
              <span className="font-semibold text-[#1E1E1C]">İkinci Bir Hayat Kazandırın</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6E6A64] max-w-2xl font-normal leading-relaxed">
              Çöken süngerler ve yıpranan kumaşlar için yüksek meblağlarla yeni mobilya almanıza gerek yok.
              Fırınlanmış masif iskeletinizi koruyarak <strong>35 DNS HR ortopedik süngerler</strong> ve{" "}
              <strong>özel seçim silinebilir &amp; leke tutmaz trend kumaş</strong> kartelamızla koltuk, çekyat ve sandalyelerinizi mağaza kalitesinin de üzerine çıkarıyoruz.
            </p>

            {/* Aksiyon Butonları */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  "Merhaba Güler Mobilya, döşeme ve yenileme hizmetiniz hakkında bilgi almak ve koltuğumun fotoğrafını gönderip fiyat öğrenmek istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-elevate btn-shadow-emerald btn-sheen inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold tracking-wide shadow-md transition-all active:scale-[0.985]"
              >
                <MessageSquare size={17} className="group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp ile Fotoğraf Gönder, Fiyat Al</span>
              </a>

              <button
                type="button"
                onClick={handleScrollToProjects}
                className="group btn-elevate btn-shadow-outline inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#1E1E1C] text-[#1E1E1C] hover:bg-[#1E1E1C] hover:text-white text-sm font-medium tracking-wide transition-all shadow-xs active:scale-[0.985] cursor-pointer"
              >
                <span>Dönüşüm Projelerini İncele</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Güven Rozetleri */}
            <div className="pt-6 border-t border-[#E7E2DA] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#1E1E1C]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#9A6836] shrink-0" />
                <span className="font-medium">%100 Masif &amp; Usta İşçilik</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-[#9A6836] shrink-0" />
                <span className="font-medium">Kapıdan Alım &amp; Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#9A6836] shrink-0" />
                <span className="font-medium">1 – 2 Haftada Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#9A6836] shrink-0" />
                <span className="font-medium">Özel Seçim Kumaş Kartelası</span>
              </div>
            </div>
          </div>

          {/* Sağ: İstatistik & Bilgi Kartı */}
          <div className="lg:col-span-4">
            <div className="bg-[#F7F5F1] border border-[#E7E2DA] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E2DA]">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#1E1E1C]">1.500+</span>
                  <p className="text-xs text-[#6E6A64]">Yenilenen Koltuk &amp; Çekyat</p>
                </div>
                <div className="h-8 w-px bg-[#E7E2DA]" />
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-700">%65</span>
                  <p className="text-xs text-[#6E6A64]">Ortalama Bütçe Tasarrufu</p>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-[#1E1E1C] uppercase tracking-wider text-[11px]">
                  Atölyemizde Ne Yapıyoruz?
                </h2>
                <ul className="space-y-2 text-xs text-[#4A4742] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A6836] font-bold">✓</span>
                    <span>İskelet sıfırlama, gürgen sıkılama ve gıcırtı onarımı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A6836] font-bold">✓</span>
                    <span>32 ve 35 DNS HR çökmeyen ortopedik blok sünger montajı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A6836] font-bold">✓</span>
                    <span>Sıvı itici, leke tutmaz, pati dostu kumaş seçenekleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A6836] font-bold">✓</span>
                    <span>Ahşap ayak zımparalama, ceviz/meşe cila yenileme</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="group btn-elevate btn-shadow-dark btn-sheen w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E1E1C] text-white text-xs font-semibold hover:bg-[#2E2E2B] transition-all shadow-sm active:scale-[0.985]"
                >
                  <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Doğrudan Atölyeyi Ara: {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
