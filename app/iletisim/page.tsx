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
                        <p className="text-sm font-medium text-[#1E1E1C]">Pazartesi – Cumartesi</p>
                        <p className="text-xs text-[#8E8A84] mt-0.5">Mesai saatleri içerisinde bilgi alabilirsiniz.</p>
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
                    Güncel ürün görselleri ve paylaşımlarımız için bizi takip edebilirsiniz:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={SITE_CONFIG.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] text-xs font-medium text-[#1E1E1C] transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>X / Twitter</span>
                    </a>
                    <a
                      href={SITE_CONFIG.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md border border-[#E7E2DA] hover:border-[#1E1E1C] text-xs font-medium text-[#1E1E1C] transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
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
