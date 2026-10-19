"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react"
import { UPHOLSTERY_FAQS } from "@/data/upholstery"
import { SITE_CONFIG } from "@/data/site-config"

export function UpholsteryFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="sss" className="py-16 sm:py-20 lg:py-24 bg-[#F7F5F1] border-b border-[#E7E2DA]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sol Kolon: Başlık & Hızlı Danışma Kutusu */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
                Merak Edilenler
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
                Sıkça Sorulan <span className="font-semibold">Sorular</span>
              </h2>
              <p className="text-sm text-[#6E6A64] mt-3 leading-relaxed">
                Mobilya döşeme ve sünger yenileme süreçlerimizle ilgili aklınıza gelebilecek tüm soruların yanıtları:
              </p>
            </div>

            {/* Hızlı Danışma Kutusu */}
            <div className="bg-white border border-[#E7E2DA] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7F5F1] border border-[#E7E2DA] flex items-center justify-center text-[#9A6836] shrink-0">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1E1C]">Farklı bir sorunuz mu var?</h4>
                  <p className="text-xs text-[#6E6A64]">Doğrudan döşeme ustamıza sorabilirsiniz.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    "Merhaba Güler Mobilya, döşeme hizmetinizle ilgili özel bir sorum var, bilgi alabilir miyim?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors shadow-2xs"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp'tan Hemen Sor</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#1E1E1C] text-[#1E1E1C] hover:bg-[#1E1E1C] hover:text-white text-xs font-semibold transition-colors"
                >
                  <Phone size={13} />
                  <span>Ara: {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Akordeon Sorular */}
          <div className="lg:col-span-7 space-y-3">
            {UPHOLSTERY_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E7E2DA] rounded-xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-[#FBF9F6]"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#1E1E1C] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#6E6A64] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1E1E1C]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4A4742] leading-relaxed border-t border-[#E7E2DA]/60 bg-[#FAFAFA]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
