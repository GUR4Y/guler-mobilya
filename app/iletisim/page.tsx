import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SITE_CONFIG } from "@/data/site-config"
import { Phone, ChevronRight, Home, Clock } from "lucide-react"
import { ContactMessageForm } from "@/components/contact/contact-message-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İletişim — Güler Mobilya",
  description:
    "Güler Mobilya ile iletişime geçin. Ürünlerimiz, kumaş seçenekleri ve döşeme hizmetlerimiz hakkında bilgi almak için telefon veya sosyal medya kanallarımızdan bize ulaşabilirsiniz.",
}

export default function IletisimPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F1]">
      <Header />

      <main className="flex-1">
        {/* Başlık */}
        <section className="bg-[#FFFFFF] border-b border-[#E7E2DA] py-12 lg:py-16">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-xs text-[#6E6A64] mb-4">
              <Link href="/" className="hover:text-[#1E1E1C] flex items-center gap-1">
                <Home size={12} /> Ana Sayfa
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#1E1E1C] font-medium">İletişim</span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6836] block mb-1">
              Bize Ulaşın
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1C] tracking-tight">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-sm sm:text-base text-[#6E6A64] mt-2 max-w-xl font-normal leading-relaxed">
              Ürünlerimiz, model detayları ve tüm sorularınız için doğrudan müşteri hattımız veya sosyal medya kanallarımız üzerinden bize ulaşabilirsiniz.
            </p>
          </div>
        </section>

        {/* İletişim Kanalları & Bilgi Formu */}
        <section className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Sol Kolon: Doğrulanmış İletişim Kanalları (Kesinlikle sahte adres/e-posta içermez) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
                  <h2 className="text-xl font-medium text-[#1E1E1C]">
                    Müşteri Hattı &amp; İletişim
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 text-[#1E1E1C]">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-[#6E6A64] block font-light">Telefon Numarası</span>
                        <a
                          href={SITE_CONFIG.phoneTel}
                          className="text-lg font-semibold text-[#1E1E1C] hover:text-[#9A6836] transition-colors"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                        <p className="text-xs text-[#8E8A84] mt-0.5">Tıklayarak doğrudan arayabilirsiniz.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pt-4 border-t border-[#E7E2DA]">
                      <div className="w-10 h-10 rounded-full bg-[#EFECE6] flex items-center justify-center shrink-0 text-[#1E1E1C]">
                        <Clock size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-[#6E6A64] block font-light">Çalışma Bilgisi</span>
                        <p className="text-sm font-medium text-[#1E1E1C]">Pazartesi – Pazar</p>
                        <p className="text-xs text-[#8E8A84] mt-0.5">Haftanın 7 günü kesintisiz hizmet vermekteyiz.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sosyal Medya Kartı */}
                <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded-lg p-6 sm:p-8 space-y-4 shadow-xs">
                  <h3 className="text-base font-medium text-[#1E1E1C]">
                    Sosyal Medya Hesaplarımız
                  </h3>
                  <p className="text-xs text-[#6E6A64] leading-relaxed font-light">
                    Güncel modellerimiz, atölye döşeme videolarımız ve yeni tasarımlarımız için bizi takip edin:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {/* Instagram */}
                    <a
                      href={SITE_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] hover:bg-[#F7F5F1] text-xs font-medium text-[#1E1E1C] transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current text-pink-600" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Instagram</span>
                    </a>

                    {/* TikTok */}
                    <a
                      href={SITE_CONFIG.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] hover:bg-[#F7F5F1] text-xs font-medium text-[#1E1E1C] transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current text-neutral-900" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-6.07 6.32 6.34 6.34 0 0 0 10.86 4.48c1.34-1.34 2.1-3.15 2.1-5.05V8.8a8.31 8.31 0 0 0 4.86 1.57v-3.47c-.82-.01-1.63-.08-2.5-.21z"/>
                      </svg>
                      <span>TikTok</span>
                    </a>

                    {/* YouTube */}
                    <a
                      href={SITE_CONFIG.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] hover:bg-[#F7F5F1] text-xs font-medium text-[#1E1E1C] transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current text-red-600" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>YouTube</span>
                    </a>

                    {/* Facebook */}
                    <a
                      href={SITE_CONFIG.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] hover:bg-[#F7F5F1] text-xs font-medium text-[#1E1E1C] transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
                    </a>

                    {/* X / Twitter */}
                    <a
                      href={SITE_CONFIG.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] hover:bg-[#F7F5F1] text-xs font-medium text-[#1E1E1C] transition-colors col-span-1 sm:col-span-2"
                    >
                      <svg className="w-4 h-4 fill-current text-neutral-800" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>X (Twitter)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sağ Kolon: Doğrudan WhatsApp Mesaj Formu */}
              <div className="lg:col-span-7">
                <ContactMessageForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
