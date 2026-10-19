"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/product/product-card"
import { CatalogCalloutBanner } from "@/components/product/catalog-callout-banner"
import { PRODUCTS } from "@/data/products"
import { PRODUCT_CATEGORIES } from "@/data/categories"
import { ChevronRight, Home } from "lucide-react"

export default function UrunlerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return PRODUCTS
    return PRODUCTS.filter((p) => p.categorySlug === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F1]">
      <Header />

      <main className="flex-1">
        {/* Sade Hero Başlığı */}
        <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-12 lg:py-16">
          <div className="container-custom">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#6E6A64] mb-4">
              <Link href="/" className="hover:text-[#1E1E1C] flex items-center gap-1">
                <Home size={12} /> Ana Sayfa
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#1E1E1C] font-medium">Ürünlerimiz</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] tracking-tight">
              Ürünlerimiz
            </h1>
            <p className="text-sm sm:text-base text-[#6E6A64] mt-2 max-w-xl font-normal">
              Güler Mobilya'nın zamansız tasarıma ve konfora sahip tüm modellerini inceleyin.
            </p>
          </div>
        </section>

        {/* Kategori Filtreleri Barı (Mobilde alt satıra saran, masaüstünde tek satır) */}
        <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-3 sticky top-20 z-20 shadow-xs">
          <div className="container-custom">
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 py-0.5">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === "all"
                    ? "bg-[#1E1E1C] text-white shadow-xs"
                    : "bg-[#F7F5F1] text-[#6E6A64] hover:text-[#1E1E1C] hover:bg-[#EFECE6]"
                }`}
              >
                Tümü ({PRODUCTS.length})
              </button>

              {PRODUCT_CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.categorySlug === cat.slug).length
                const isActive = selectedCategory === cat.slug
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-[#1E1E1C] text-white shadow-xs"
                        : "bg-[#F7F5F1] text-[#6E6A64] hover:text-[#1E1E1C] hover:bg-[#EFECE6]"
                    }`}
                  >
                    {cat.title} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ürün Listesi */}
        <section className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="mb-8 flex items-center justify-between text-xs text-[#6E6A64]">
              <span>
                Toplam <strong className="text-[#1E1E1C] font-semibold">{filteredProducts.length}</strong> model sergileniyor
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Vitrin Dışı & Daha Fazlası İçin Katalog Çağrısı */}
            <CatalogCalloutBanner />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
