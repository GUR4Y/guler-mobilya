import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/data/categories"

export function CategoryShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Sadeleşmiş ve Net Başlık */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Koleksiyonlar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C]">
              Mobilya Modellerimiz
            </h2>
          </div>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E1E1C] hover:text-[#9A6836] transition-colors mt-4 md:mt-0"
          >
            <span>Tüm Modelleri Gör</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 6 Kategori Kartı: Tümü aynı boyutta, mobilyaları tam gösteren ve çerçeveye oturan düzen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/urunler/${cat.slug}`}
              className="group relative flex flex-col bg-[#F7F5F1] rounded-2xl overflow-hidden border border-[#E7E2DA] hover:border-[#1E1E1C]/40 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Tüm kartlar eşit 4:3 oranında, mobilya objeleri tam görünür */}
                <div className="relative aspect-[4/3] bg-[#EAE6DF] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover md:group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1E1E1C] group-hover:text-[#9A6836] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#6E6A64] line-clamp-1 mt-1 font-normal">
                    {cat.shortDesc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#E7E2DA] group-hover:border-[#1E1E1C] group-hover:bg-[#1E1E1C] group-hover:text-white flex items-center justify-center text-[#1E1E1C] transition-all duration-200 shrink-0 ml-3">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Vitrin Notu & Katalog Yönlendirmesi */}
        <div className="mt-10 p-5 sm:p-6 bg-[#F7F5F1] rounded-xl border border-[#E7E2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#1E1E1C] text-[#E0B27A] flex items-center justify-center shrink-0 hidden sm:flex">
              <BookOpen size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1E1E1C]">
                Modellerimiz vitrin seçkimizden ibarettir — Ürünlerimiz bunlarla sınırlı değildir.
              </p>
              <p className="text-xs text-[#6E6A64] mt-0.5">
                Daha fazla model, kumaş ve renk seçeneği için dijital kataloğumuzu inceleyebilirsiniz.
              </p>
            </div>
          </div>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1E1E1C] hover:bg-[#333330] text-white text-xs sm:text-sm font-medium tracking-wide transition-colors shrink-0 shadow-xs"
          >
            <span>Kataloğu Gör</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
