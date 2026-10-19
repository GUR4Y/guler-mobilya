import Link from "next/link"
import Image from "next/image"
import { PRODUCTS } from "@/data/products"
import { ArrowRight } from "lucide-react"

export function NewProducts() {
  const newProducts = PRODUCTS.filter((p) => p.isNew)
  const heroProduct = newProducts[0] || PRODUCTS[1]
  const sideProducts = newProducts.slice(1, 3).length === 2 ? newProducts.slice(1, 3) : PRODUCTS.slice(2, 4)

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E7E2DA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Sezon Koleksiyonu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C]">
              Yeni Modeller
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

        {/* Editorial Layout: Sol tarafta büyük ürün, sağda 2 adet ürün */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Büyük Ürün (Sol) */}
          <div className="lg:col-span-7 flex flex-col group">
            <Link
              href={`/urunler/${heroProduct.slug}`}
              className="relative aspect-[16/11] bg-[#EFECE6] rounded-lg overflow-hidden border border-[#E7E2DA] block"
            >
              <Image
                src={heroProduct.images[0]}
                alt={heroProduct.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-4 left-4 bg-[#1E1E1C] text-white text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-sm">
                Yeni Model
              </span>
            </Link>
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6E6A64] font-light uppercase tracking-wider">
                  {heroProduct.category}
                </span>
                <h3 className="text-xl font-medium text-[#1E1E1C] group-hover:text-[#9A6836] transition-colors mt-0.5">
                  <Link href={`/urunler/${heroProduct.slug}`}>
                    {heroProduct.name}
                  </Link>
                </h3>
              </div>
              <Link
                href={`/urunler/${heroProduct.slug}`}
                className="text-xs font-medium text-[#1E1E1C] hover:text-[#9A6836] flex items-center gap-1"
              >
                İncele →
              </Link>
            </div>
          </div>

          {/* Sağ Kolon: 2 Küçük Ürün */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {sideProducts.map((prod) => (
              <div key={prod.id} className="group flex flex-col">
                <Link
                  href={`/urunler/${prod.slug}`}
                  className="relative aspect-[16/9] bg-[#EFECE6] rounded-lg overflow-hidden border border-[#E7E2DA] block"
                >
                  <Image
                    src={prod.images[0]}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>
                <div className="pt-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#6E6A64] font-light uppercase tracking-wider">
                      {prod.category}
                    </span>
                    <h3 className="text-base font-medium text-[#1E1E1C] group-hover:text-[#9A6836] transition-colors">
                      <Link href={`/urunler/${prod.slug}`}>
                        {prod.name}
                      </Link>
                    </h3>
                  </div>
                  <Link
                    href={`/urunler/${prod.slug}`}
                    className="text-xs font-medium text-[#1E1E1C] hover:text-[#9A6836]"
                  >
                    İncele →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
