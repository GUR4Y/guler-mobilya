import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/product/product-card"
import { CatalogCalloutBanner } from "@/components/product/catalog-callout-banner"
import { PRODUCTS, Product } from "@/data/products"
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/categories"
import { SITE_CONFIG } from "@/data/site-config"
import { ChevronRight, Home, Phone, ShieldCheck, Tag } from "lucide-react"
import type { Metadata } from "next"

interface DynamicSlugPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categoryParams = PRODUCT_CATEGORIES.map((c) => ({ slug: c.slug }))
  const productParams = PRODUCTS.map((p) => ({ slug: p.slug }))
  return [...categoryParams, ...productParams]
}

export async function generateMetadata({ params }: DynamicSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug)
  if (category) {
    return {
      title: `${category.title} — Güler Mobilya`,
      description: `${category.title}: ${category.shortDesc}`,
    }
  }

  const product = PRODUCTS.find((p) => p.slug === slug)
  if (product) {
    return {
      title: `${product.name} — Güler Mobilya`,
      description: product.description || `${product.name} mobilya modeli Güler Mobilya koleksiyonunda.`,
    }
  }

  return { title: "Sayfa Bulunamadı | Güler Mobilya" }
}

export default async function DynamicSlugPage({ params }: DynamicSlugPageProps) {
  const { slug } = await params

  // 1. Durum: Kategori Sayfası (/urunler/cekyat-modelleri vb.)
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug)
  if (category) {
    const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === slug)

    return (
      <div className="min-h-screen flex flex-col bg-[#F7F5F1]">
        <Header />

        <main className="flex-1">
          {/* Kategori Hero */}
          <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-12 lg:py-16">
            <div className="container-custom">
              <div className="flex items-center gap-2 text-xs text-[#6E6A64] mb-4">
                <Link href="/" className="hover:text-[#1E1E1C] flex items-center gap-1">
                  <Home size={12} /> Ana Sayfa
                </Link>
                <ChevronRight size={12} />
                <Link href="/urunler" className="hover:text-[#1E1E1C]">
                  Ürünler
                </Link>
                <ChevronRight size={12} />
                <span className="text-[#1E1E1C] font-medium">{category.title}</span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6836] block mb-1">
                Mobilya Kategorisi
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] tracking-tight">
                {category.title}
              </h1>
              <p className="text-sm sm:text-base text-[#6E6A64] mt-2 max-w-xl font-normal leading-relaxed">
                {category.shortDesc}
              </p>
            </div>
          </section>

          {/* Diğer Kategorilere Geçiş Sekmeleri (Mobilde alt satıra saran, masaüstünde tek satır) */}
          <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-3 sticky top-20 z-20 shadow-xs">
            <div className="container-custom">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 py-0.5">
                <Link
                  href="/urunler"
                  className="btn-elevate px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap bg-[#F7F5F1] text-[#6E6A64] hover:text-[#1E1E1C] hover:bg-[#EAE6DF] transition-all shadow-2xs hover:shadow-xs active:scale-95"
                >
                  Tüm Ürünler
                </Link>

                {PRODUCT_CATEGORIES.map((cat) => {
                  const isActive = cat.slug === slug
                  return (
                    <Link
                      key={cat.slug}
                      href={`/urunler/${cat.slug}`}
                      className={`btn-elevate px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
                        isActive
                          ? "bg-[#1E1E1C] text-white shadow-xs"
                          : "bg-[#F7F5F1] text-[#6E6A64] hover:text-[#1E1E1C] hover:bg-[#EAE6DF] hover:shadow-xs"
                      }`}
                    >
                      {cat.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Ürün Grid */}
          <section className="py-12 lg:py-20">
            <div className="container-custom">
              <div className="mb-8 text-xs text-[#6E6A64]">
                <span>Bu kategoride <strong className="text-[#1E1E1C] font-semibold">{categoryProducts.length}</strong> model sergileniyor</span>
              </div>

              {categoryProducts.length > 0 ? (
                <div
                  className={`grid ${
                    slug === "puf-benc-oturak-modelleri"
                      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
                      : slug === "kose-koltuk-modelleri"
                      ? "grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                  }`}
                >
                  {categoryProducts.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-[#FFFFFF] rounded-lg border border-[#E7E2DA]">
                  <p className="text-sm text-[#6E6A64]">Bu kategoriye ait modeller güncellenmektedir.</p>
                </div>
              )}

              {/* Vitrin Dışı & Daha Fazlası İçin Katalog Çağrısı */}
              <CatalogCalloutBanner categoryTitle={category.title} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }

  // 2. Durum: Ürün Detay Sayfası (/urunler/[slug])
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (product) {
    const isWide = product.categorySlug === "kose-koltuk-modelleri"
    const isTall = product.categorySlug === "puf-benc-oturak-modelleri"
    const isPortrait = product.categorySlug === "cekyat-modelleri" || product.categorySlug === "cay-seti-modelleri"
    const relatedProducts = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 3)

    return (
      <div className="min-h-screen flex flex-col bg-[#F7F5F1]">
        <Header />

        <main className="flex-1">
          {/* Breadcrumb */}
          <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-4">
            <div className="container-custom">
              <div className="flex items-center gap-2 text-xs text-[#6E6A64]">
                <Link href="/" className="hover:text-[#1E1E1C] flex items-center gap-1">
                  <Home size={12} /> Ana Sayfa
                </Link>
                <ChevronRight size={12} />
                <Link href="/urunler" className="hover:text-[#1E1E1C]">
                  Ürünler
                </Link>
                <ChevronRight size={12} />
                <Link href={`/urunler/${product.categorySlug}`} className="hover:text-[#1E1E1C]">
                  {product.category}
                </Link>
                <ChevronRight size={12} />
                <span className="text-[#1E1E1C] font-medium">{product.name}</span>
              </div>
            </div>
          </section>

          {/* Ürün Detay Bölümü: Sol Galeri, Sağ Bilgiler */}
          <section className="py-12 lg:py-20">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Sol Kolon: Büyük Ürün Galerisi (Tam Çerçeveye Uyumlu) */}
                <div className={`${isWide ? "lg:col-span-8" : isTall ? "lg:col-span-5" : isPortrait ? "lg:col-span-6" : "lg:col-span-7"} space-y-4`}>
                  <div
                    style={{
                      aspectRatio: isWide ? "768 / 338" : isTall ? "576 / 1024" : isPortrait ? "819 / 1024" : "4 / 3",
                      maxWidth: isTall ? "440px" : isPortrait ? "520px" : undefined,
                    }}
                    className="relative w-full bg-[#EFECE6] rounded-xl overflow-hidden border border-[#E7E2DA] shadow-xs mx-auto"
                  >
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </div>
                  {product.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-3">
                      {product.images.map((img, idx) => (
                        <div
                          key={idx}
                          style={{ aspectRatio: isWide ? "768 / 338" : isTall ? "576 / 1024" : isPortrait ? "819 / 1024" : "4 / 3" }}
                          className="relative w-full bg-[#EFECE6] rounded-md overflow-hidden border border-[#E7E2DA]"
                        >
                          <Image src={img} alt={`${product.name} detay`} fill sizes="25vw" className="object-cover object-center" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sağ Kolon: Ürün Detayları & Bilgi Al CTA */}
                <div className={`${isWide ? "lg:col-span-4" : isTall ? "lg:col-span-7" : isPortrait ? "lg:col-span-6" : "lg:col-span-5"} space-y-6`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6836] block mb-2">
                      {product.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
                      {product.name}
                    </h1>
                    {product.productCode && (
                      <div className="flex items-center gap-1.5 text-xs text-[#6E6A64] mt-2">
                        <Tag size={13} />
                        <span>Ürün Kodu: <strong className="text-[#1E1E1C]">{product.productCode}</strong></span>
                      </div>
                    )}
                  </div>

                  {product.description && (
                    <p className="text-sm sm:text-base text-[#6E6A64] leading-relaxed font-normal">
                      {product.description}
                    </p>
                  )}


                  {product.features && product.features.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-[#E7E2DA]">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E1E1C]">
                        Öne Çıkan Özellikler
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#6E6A64]">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9A6836]" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* İletişim / Bilgi Al CTA */}
                  <div className="pt-4 border-t border-[#E7E2DA] space-y-3">
                    <span className="text-xs text-[#6E6A64] block font-light">
                      Bu model hakkında detaylı bilgi, kumaş alternatifleri veya sipariş detayları için:
                    </span>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={SITE_CONFIG.phoneTel}
                        className="group btn-elevate btn-shadow-dark btn-sheen inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#1E1E1C] text-white text-sm font-medium tracking-wide hover:bg-[#2E2E2B] transition-all shadow-sm active:scale-[0.985] flex-1"
                      >
                        <Phone size={15} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span>Bilgi Al ({SITE_CONFIG.phone})</span>
                      </a>
                      <Link
                        href="/iletisim"
                        className="group btn-elevate btn-shadow-outline inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-[#1E1E1C] text-[#1E1E1C] text-sm font-medium tracking-wide hover:bg-[#1E1E1C] hover:text-white transition-all shadow-xs active:scale-[0.985]"
                      >
                        <span>İletişim</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benzer / İlgili Modeller */}
              {relatedProducts.length > 0 && (
                <div className="mt-20 pt-16 border-t border-[#E7E2DA]">
                  <h2 className="text-2xl font-light text-[#1E1E1C] mb-8">
                    Aynı Kategorideki Diğer Modeller
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                    {relatedProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              )}

              {/* Vitrin Dışı & Daha Fazlası İçin Katalog Çağrısı */}
              <CatalogCalloutBanner categoryTitle={product.category} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }

  // Eşleşme yoksa 404
  notFound()
}
