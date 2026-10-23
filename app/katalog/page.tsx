import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SITE_CONFIG } from "@/data/site-config"
import { BookOpen, Download, Phone, ChevronRight, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Güler Mobilya Katalog — Koleksiyonlarımızı İnceleyin",
  description:
    "Güler Mobilya ürün kataloğu. Modellerimizi tek bir yerde inceleyin ve yaşam alanınıza en uygun seçenekleri keşfedin.",
}

export default function KatalogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F1]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb & Başlık */}
        <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-12 lg:py-16">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-xs text-[#6E6A64] mb-4">
              <Link href="/" className="hover:text-[#1E1E1C] flex items-center gap-1">
                <Home size={12} /> Ana Sayfa
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#1E1E1C] font-medium">Katalog</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6836] block mb-1">
              Dijital Yayın
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] tracking-tight">
              Güler Mobilya Katalog
            </h1>
            <p className="text-sm sm:text-base text-[#6E6A64] mt-2 max-w-xl font-normal leading-relaxed">
              Tüm ürün koleksiyonlarımızı, detaylı görselleri ve tasarım çizgimizi bir arada inceleyebilirsiniz.
            </p>
          </div>
        </section>

        {/* Katalog İçerik Alanı */}
        <section className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto bg-[#FFFFFF] border border-[#E7E2DA] rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Katalog Kapak Görseli (Çerçeveye Tam Oturan, Boşluksuz ve Kırpmasız) */}
                <div
                  style={{ aspectRatio: "723 / 639" }}
                  className="lg:col-span-7 relative w-full bg-[#EFECE6] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E7E2DA]"
                >
                  <Image
                    src="/guler-mobilya-katalog-kapak.png"
                    alt="Güler Mobilya 2026 Ürün Kataloğu Kapağı"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Katalog Detay ve Aksiyonlar */}
                <div className="lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6836] block mb-2">
                      Katalog Hakkında
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#1E1E1C] tracking-tight">
                      Yaşam Alanlarına İlham Veren Çözümler
                    </h2>
                    <p className="text-sm text-[#6E6A64] mt-3 leading-relaxed font-normal">
                      Sitemizdeki modeller showroom vitrin seçkimizdir. Dijital kataloğumuzda çekyat modellerinden köşe takımlarına, ergonomik berjerlerden tamamlayıcı puf ve balkon oturma köşelerine kadar onlarca ek model ve zengin kumaş alternatifini bulabilirsiniz.
                    </p>
                  </div>

                  {/* Aksiyon Butonları */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={SITE_CONFIG.catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group btn-elevate btn-shadow-dark btn-sheen inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1E1E1C] text-white text-sm font-medium tracking-wide hover:bg-[#2E2E2B] transition-all shadow-sm active:scale-[0.985]"
                    >
                      <BookOpen size={16} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>Kataloğu Görüntüle (PDF)</span>
                    </a>
                    <a
                      href={SITE_CONFIG.catalogUrl}
                      download="Guler-Mobilya-2026-Katalog.pdf"
                      className="group btn-elevate btn-shadow-outline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#1E1E1C] text-[#1E1E1C] text-sm font-medium tracking-wide hover:bg-[#1E1E1C] hover:text-white transition-all shadow-xs active:scale-[0.985]"
                    >
                      <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                      <span>PDF İndir</span>
                    </a>
                  </div>

                  {/* Kumaş ve Döşeme Bilgisi */}
                  <div className="pt-4 border-t border-[#E7E2DA] flex items-center justify-between text-xs text-[#6E6A64]">
                    <span>* Kumaş alternatifleri ve döşeme hizmetlerimiz için bize ulaşabilirsiniz.</span>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="inline-flex items-center gap-1.5 text-[#1E1E1C] font-semibold hover:text-[#9A6836] transition-colors shrink-0 ml-2"
                    >
                      <Phone size={13} />
                      <span>{SITE_CONFIG.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
