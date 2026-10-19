import Link from "next/link"
import Image from "next/image"
import { BookOpen, ArrowRight } from "lucide-react"

export function CatalogBanner() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFECE6] border-b border-[#E7E2DA]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-[#FFFFFF] border border-[#E7E2DA] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sol Kolon: Metin ve Aksiyon */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block">
                  Dijital Yayın
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] leading-tight tracking-tight">
                  Güler Mobilya <br />
                  <span className="font-semibold">Kataloğunu Keşfedin</span>
                </h2>
                <p className="text-sm sm:text-base text-[#6E6A64] leading-relaxed font-normal">
                  Modellerimizi tek bir yerde inceleyin ve yaşam alanınıza en uygun seçenekleri keşfedin.
                </p>
              </div>
              <div>
                <Link
                  href="/katalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#1E1E1C] hover:bg-[#333330] text-white text-sm font-medium tracking-wide transition-colors shadow-xs"
                >
                  <BookOpen size={16} />
                  <span>Kataloğu İncele</span>
                </Link>
              </div>
            </div>

            {/* Sağ Kolon: Katalog Kapağı (Çerçeveye Tam Sığan, Boşluksuz ve Kırpmasız) */}
            <div
              style={{ aspectRatio: "723 / 639" }}
              className="lg:col-span-7 relative w-full bg-[#EFECE6] overflow-hidden border-b lg:border-b-0 lg:border-l border-[#E7E2DA] order-1 lg:order-2"
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
          </div>
        </div>
      </div>
    </section>
  )
}
