import Link from "next/link"
import { Phone } from "lucide-react"
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
            <div className="pt-2">
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 text-sm text-white hover:text-[#C79D6D] transition-colors"
              >
                <Phone size={15} className="text-[#C79D6D]" />
                <span className="font-medium">{SITE_CONFIG.phone}</span>
              </a>
            </div>
            {/* Sosyal İkonlar */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#A8A49D] hover:text-white hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
