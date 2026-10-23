"use client"

import { SITE_CONFIG } from "@/data/site-config"

export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Merhaba Güler Mobilya, siteniz üzerinden ulaşıyorum. Mobilya modelleri ve fiyatlar hakkında bilgi alabilir miyim?"
  )
  const href = `${SITE_CONFIG.whatsappUrl}?text=${message}`

  return (
    <aside
      aria-label="WhatsApp İletişim Hattı"
      className="fixed top-[116px] sm:top-[124px] right-3 sm:right-6 lg:right-8 z-40 pointer-events-auto"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group btn-elevate btn-shadow-emerald btn-sheen inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-emerald-600/95 hover:bg-emerald-500 text-white border border-emerald-400/40 backdrop-blur-md shadow-lg transition-all active:scale-[0.985]"
        title="Güler Mobilya WhatsApp İletişim Hattı"
      >
        {/* Çevrimiçi Nabız / Pulse Noktası */}
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-100" />
        </span>

        {/* Orijinal WhatsApp Vektör Logosu */}
        <svg
          className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] fill-current shrink-0 text-white group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Metin Alanı */}
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] text-emerald-100 font-light hidden sm:inline">
            Canlı Destek &amp; Fiyat
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            WhatsApp İletişim
          </span>
        </div>
      </a>
    </aside>
  )
}
