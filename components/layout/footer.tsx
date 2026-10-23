import Link from "next/link"
import { Phone, MapPin } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/data/categories"
import { SITE_CONFIG } from "@/data/site-config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1E1E1C] text-[#E7E2DA] pt-16 pb-8 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Sol Kolon: Marka & Açıklama */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-white inline-block"
            >
              GÜLER <span className="font-light tracking-widest text-[#A8A49D]">MOBİLYA</span>
            </Link>
            <p className="text-sm text-[#A8A49D] leading-relaxed max-w-sm font-light">
              {SITE_CONFIG.shortDesc} Mobilya üretimi, özel tasarım ve döşeme yenileme hizmetleri.
            </p>
            <div className="pt-2 space-y-2">
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 text-sm text-white hover:text-[#C79D6D] transition-colors"
              >
                <Phone size={15} className="text-[#C79D6D]" />
                <span className="font-medium">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs text-[#A8A49D] hover:text-white transition-colors max-w-xs leading-relaxed"
                title="Google Haritalar'da Aç"
              >
                <MapPin size={14} className="text-[#C79D6D] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </a>
            </div>
            {/* Sosyal İkonlar */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white hover:bg-white/5 transition-colors"
                aria-label="Güler Mobilya Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white hover:bg-white/5 transition-colors"
                aria-label="Güler Mobilya TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-6.07 6.32 6.34 6.34 0 0 0 10.86 4.48c1.34-1.34 2.1-3.15 2.1-5.05V8.8a8.31 8.31 0 0 0 4.86 1.57v-3.47c-.82-.01-1.63-.08-2.5-.21z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white hover:bg-white/5 transition-colors"
                aria-label="Güler Mobilya YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white hover:bg-white/5 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white hover:bg-white/5 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Orta Kolon: Menü */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Menü
            </h4>
            <ul className="space-y-2 text-sm text-[#A8A49D]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-white transition-colors">
                  Modeller
                </Link>
              </li>
              <li>
                <Link href="/doseme" className="hover:text-white transition-colors">
                  Döşeme &amp; Yenileme
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-white transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ Kolon: Ürünler Kategorileri */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Ürün Kategorileri
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#A8A49D]">
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/urunler/${cat.slug}`}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Alt Satır: Telif */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8A84]">
          <p>© {currentYear} {SITE_CONFIG.brandName}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
