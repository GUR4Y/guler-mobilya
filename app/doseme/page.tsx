import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { UpholsteryHero } from "@/components/upholstery/upholstery-hero"
import { UpholsteryGallery } from "@/components/upholstery/upholstery-gallery"
import { UpholsteryComparison } from "@/components/upholstery/upholstery-comparison"
import { UpholsteryFaq } from "@/components/upholstery/upholstery-faq"
import { UpholsteryCta } from "@/components/upholstery/upholstery-cta"

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Mobilya Döşeme & Yenileme Atölyesi — Güler Mobilya",
  description:
    "Eski koltuk, çekyat ve sandalyelerinize ikinci bir hayat. 35 DNS HR ortopedik süngerleme, leke tutmaz ve silinebilir seçkin kumaş kartelası, iskelet güçlendirme ve usta işçilik ile profesyonel mobilya döşeme.",
  keywords: [
    "koltuk döşeme",
    "mobilya döşeme",
    "çekyat yüz değişimi",
    "koltuk süngeri yenileme",
    "berjer döşeme",
    "mobilya tamiri",
    "Güler Mobilya döşeme atölyesi",
  ],
  openGraph: {
    title: "Mobilya Döşeme & Yenileme Atölyesi — Güler Mobilya",
    description:
      "Yıpranmış mobilyalarınıza usta ellerden sıfır ayarında yenileme. WhatsApp üzerinden tek tıkla fotoğraf gönderip teklif alın.",
    images: ["/green-velvet-modular-chair.png"],
  },
}

export default function DosemePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F1]">
      <Header />

      <main className="flex-1">
        {/* 1. Hero Bölümü: Tanıtım, İstatistikler & Hızlı WhatsApp CTA */}
        <UpholsteryHero />

        {/* 2. Öncesi & Sonrası Dönüşüm Galerisi (Tek Celsede Tümü Birlikte) */}
        <UpholsteryGallery />

        {/* 4. Neden Yeni Mobilya Almak Yerine Döşetmelisiniz? Karşılaştırma Tablosu */}
        <UpholsteryComparison />

        {/* 5. Sıkça Sorulan Sorular (Akordeon) */}
        <UpholsteryFaq />

        {/* 8. Fotoğraf Gönder & Hızlı Teklif Al CTA */}
        <UpholsteryCta />
      </main>

      <Footer />
    </div>
  )
}
