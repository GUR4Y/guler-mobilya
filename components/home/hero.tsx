import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full bg-[#EFECE6] border-b border-[#E7E2DA] overflow-hidden">
      <div className="container-custom py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Sol Kolon: Tipografi & CTA */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#9A6836]">
              Güler Mobilya Koleksiyonu
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1E1E1C] leading-[1.15]">
              Yaşam Alanınıza <br />
              <span className="font-semibold">Yeni Bir Dokunuş</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6E6A64] font-normal leading-relaxed max-w-lg">
              Konforu, işlevselliği ve zamansız tasarımı yaşam alanlarınızla buluşturan Güler Mobilya koleksiyonlarını keşfedin.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#1E1E1C] text-white text-sm font-medium tracking-wide hover:bg-[#333330] transition-colors shadow-sm"
              >
                <span>Ürünleri Keşfet</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-[#1E1E1C] text-[#1E1E1C] text-sm font-medium tracking-wide hover:bg-[#1E1E1C] hover:text-white transition-colors"
              >
                <BookOpen size={16} />
                <span>Kataloğu İncele</span>
              </Link>
            </div>
          </div>

          {/* Sağ Kolon: Büyük Yüksek Kaliteli Mobilya Görseli */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-lg overflow-hidden border border-[#E7E2DA] shadow-sm bg-[#FFFFFF]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u3195299943_une_vue_sur_lespace_toil_--ar_11_--sref_httpss.mj_f1cd1575-c301-46fa-8b30-665ae1ab22a0_3_bloom_subtle_6x.png-EslKdscYhdWOUeP4RBajclEejxh8iO.jpeg"
                alt="Güler Mobilya — Modern ve zarif yaşam alanı mobilya koleksiyonu"
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
