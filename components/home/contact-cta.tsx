import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

export function ContactCta() {
  return (
    <section className="py-20 lg:py-24 bg-[#F7F5F1]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block">
            İletişim &amp; Destek
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] leading-tight">
            Aklınızdaki Modeli Birlikte Bulalım
          </h2>
          <p className="text-base sm:text-lg text-[#6E6A64] leading-relaxed max-w-xl mx-auto font-normal">
            Ürünlerimiz hakkında bilgi almak için bizimle iletişime geçin.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-md bg-[#1E1E1C] text-white text-sm font-medium tracking-wide hover:bg-[#333330] transition-colors shadow-sm"
            >
              <Phone size={16} />
              <span>Hemen Ara — {SITE_CONFIG.phone}</span>
            </a>
            <Link
              href="/iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border border-[#1E1E1C] text-[#1E1E1C] text-sm font-medium tracking-wide hover:bg-[#1E1E1C] hover:text-white transition-colors"
            >
              <span>İletişim Sayfası</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
