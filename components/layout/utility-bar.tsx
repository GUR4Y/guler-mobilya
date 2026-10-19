import Link from "next/link"
import { Phone } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

export function UtilityBar() {
  return (
    <div id="utility-bar" className="bg-[#1E1E1C] text-[#E7E2DA] text-xs py-2 border-b border-white/5">
      <div className="container-custom flex items-center justify-between">
        {/* Tıklanabilir Telefon */}
        <a
          href={SITE_CONFIG.phoneTel}
          className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 font-medium tracking-wide"
        >
          <Phone size={13} className="text-[#C79D6D]" />
          <span>Müşteri Hattı: {SITE_CONFIG.phone}</span>
        </a>

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center gap-4 text-xs">
          <span className="text-[#8E8A84] hidden sm:inline">Bizi Takip Edin:</span>
          <a
            href={SITE_CONFIG.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Güler Mobilya X / Twitter"
          >
            {/* X SVG */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Güler Mobilya Facebook"
          >
            {/* Facebook SVG */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
