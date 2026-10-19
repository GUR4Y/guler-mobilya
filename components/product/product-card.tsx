import Link from "next/link"
import Image from "next/image"
import { Product } from "@/data/products"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  let cardAspectRatio = "4 / 3"

  if (product.categorySlug === "kose-koltuk-modelleri") {
    cardAspectRatio = "768 / 338"
  } else if (product.categorySlug === "puf-benc-oturak-modelleri") {
    cardAspectRatio = "576 / 1024"
  } else if (product.categorySlug === "cekyat-modelleri" || product.categorySlug === "cay-seti-modelleri") {
    cardAspectRatio = "819 / 1024"
  } else if (product.categorySlug === "koltuk-modelleri") {
    cardAspectRatio = "4 / 3"
  }

  return (
    <article className="group flex flex-col bg-white p-3 rounded-xl border border-[#E7E2DA] hover:border-[#1E1E1C]/30 hover:shadow-md transition-all duration-300">
      {/* Görsel Alanı (Tam Çerçeveye Uyumlu - Boşluksuz ve Kırpmasız) */}
      <Link
        href={`/urunler/${product.slug}`}
        style={{ aspectRatio: cardAspectRatio }}
        className="relative w-full bg-[#EFECE6] overflow-hidden rounded-lg block"
      >
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#1E1E1C] text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
            Yeni
          </span>
        )}
      </Link>

      {/* Kart Bilgileri (Temiz katalog görünümü, fiyatsız, sepetsiz) */}
      <div className="pt-3.5 pb-1 flex flex-col flex-1">
        <span className="text-xs text-[#6E6A64] font-light uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-base font-medium text-[#1E1E1C] group-hover:text-[#9A6836] transition-colors leading-snug">
          <Link href={`/urunler/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <div className="pt-2 mt-auto">
          <Link
            href={`/urunler/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E1E1C] group-hover:text-[#9A6836] transition-colors"
          >
            <span>İncele</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </article>
  )
}
