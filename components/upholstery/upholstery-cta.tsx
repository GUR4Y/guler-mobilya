"use client"

import { Phone, MessageSquare, Sparkles, MapPin, Camera, Clock } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

export function UpholsteryCta() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="bg-[#1E1E1C] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Arka Plan Dekoratif Işıltı */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A6836]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-white/15">
              <Sparkles size={13} />
              <span>Hızlı &amp; Zahmetsiz Fiyatlandırma</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
              Koltuklarınızın Fotoğrafını Çekin, <br className="hidden sm:inline" />
              <span className="font-semibold text-white">15 Dakikada Fiyat Alın</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D4CEBF] max-w-2xl mx-auto font-light leading-relaxed">
              Yenilemek istediğiniz koltuk, çekyat veya sandalyenizin birkaç açıdan fotoğrafını WhatsApp hattımıza iletin.
              Kumaş metrajını ve net fiyat aralığını hemen çıkaralım.
            </p>

            {/* Aksiyon Butonları */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <a
                href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                  "Merhaba Güler Mobilya, döşeme yaptırmak istediğim mobilyamın fotoğrafını ekliyorum. Fiyat ve kumaş seçenekleri hakkında bilgi alabilir miyim?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-elevate btn-shadow-emerald btn-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold tracking-wide shadow-lg transition-all active:scale-[0.985]"
              >
                <Camera size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Fotoğraf Gönder (WhatsApp)</span>
              </a>

              <a
                href={SITE_CONFIG.phoneTel}
                className="group btn-elevate btn-shadow-outline w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide border border-white/20 hover:border-white/40 transition-all active:scale-[0.985]"
              >
                <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Alt Güvenceler */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A8A49D]">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-amber-400" />
                <span>Pazartesi – Pazar (Haftanın 7 Günü)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-amber-400" />
                <span>Ücretsiz Keşif &amp; Kartela Tanıtımı</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400" />
                <span>Güler Mobilya İmalat &amp; Döşeme Atölyesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
