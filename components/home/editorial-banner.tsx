import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function EditorialBanner() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F1] border-b border-[#E7E2DA]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Sol Kolon: Büyük Lifestyle Mobilya Görseli (Kırpmasız Tam Görünüm) */}
          <div className="lg:col-span-7">
            <div
              style={{ aspectRatio: "768 / 338" }}
              className="relative w-full rounded-xl overflow-hidden border border-[#E7E2DA] shadow-sm bg-[#EFECE6]"
            >
              <Image
                src="/kose-koltuk-verona-ahsap-antrasit.jpg"
                alt="Evinizin en rahat köşesi — Güler Mobilya"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Sağ Kolon: Editorial Marka Mesajı (Kesinlikle uydurma istatistik veya yıl içermez) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block">
              Güler Mobilya Yaklaşımı
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] leading-tight">
              Evinizin En Rahat Köşesi
            </h2>
            <p className="text-base text-[#6E6A64] leading-relaxed font-normal">
              Yaşam alanınıza uyum sağlayan mobilyaları, farklı model ve kullanım seçenekleriyle keşfedin. Kaliteli malzeme yapısı ve fonksiyonel detaylarla evinize değer katın.
            </p>
            <div className="pt-2">
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1E1E1C] text-white text-sm font-medium tracking-wide hover:bg-[#333330] transition-colors"
              >
                <span>Tüm Ürünleri Gör</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
