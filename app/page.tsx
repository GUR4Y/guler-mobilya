import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSlider } from "@/components/home/hero-slider"
import { CategoryShowcase } from "@/components/home/category-showcase"
import { UpholsterySection } from "@/components/home/upholstery-section"
import { CatalogBanner } from "@/components/home/catalog-banner"
import { ContactCta } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <main className="flex-1">
        {/* Güler Mobilya 2026 Resmi Canlı Sürüm */}
        <HeroSlider />

        {/* 2. Sadeleştirilmiş Mobilya Modelleri (6 Kategori Vitrini) */}
        <CategoryShowcase />

        {/* 3. Mobilya Döşeme & Yenileme Atölyesi (Before / After Karşılaştırmalı) */}
        <UpholsterySection />

        {/* 4. Katalog Keşfi Bannerı */}
        <CatalogBanner />

        {/* 5. Doğrudan İletişim / Arama CTA */}
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
