import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"

interface CatalogCalloutBannerProps {
  categoryTitle?: string
}

export function CatalogCalloutBanner({ categoryTitle }: CatalogCalloutBannerProps) {
  return (
    <div className="mt-10 lg:mt-14 p-5 sm:p-7 bg-[#FFFFFF] rounded-xl border border-[#E7E2DA] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-[#F7F5F1] border border-[#E7E2DA] text-[#9A6836] flex items-center justify-center shrink-0">
          <BookOpen size={20} />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-[#1E1E1C]">
            {categoryTitle
              ? `Sergilenen ${categoryTitle.toLowerCase()} vitrin seçkimizdir — Ürünlerimiz bunlarla sınırlı değildir.`
              : "Modellerimiz vitrin seçkimizdir — Ürünlerimiz bunlarla sınırlı değildir."}
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A64] mt-1 font-normal leading-relaxed">
            Daha fazla model, kumaş ve renk seçeneği için dijital kataloğumuzu inceleyebilirsiniz.
          </p>
        </div>
      </div>

      <Link
        href="/katalog"
        className="group btn-elevate btn-shadow-dark btn-sheen inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1E1E1C] hover:bg-[#2E2E2B] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shrink-0 shadow-xs active:scale-[0.985] w-full sm:w-auto"
      >
        <span>Kataloğu Gör</span>
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  )
}
