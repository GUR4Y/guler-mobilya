import Link from "next/link"
import { PRODUCTS } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"
import { ArrowRight } from "lucide-react"

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4)

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E7E2DA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Seçkin Tasarımlar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C]">
              Öne Çıkan Modeller
            </h2>
          </div>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E1E1C] hover:text-[#9A6836] transition-colors mt-4 md:mt-0"
          >
            <span>Tüm Modelleri Gör</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4 Ürün Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
