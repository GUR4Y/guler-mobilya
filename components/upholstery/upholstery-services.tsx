"use client"

import { Check, ArrowRight, Wrench, Sparkles } from "lucide-react"
import { UPHOLSTERY_SERVICES } from "@/data/upholstery"
import { SITE_CONFIG } from "@/data/site-config"

export function UpholsteryServices() {
  return (
    <section id="hizmetler" className="py-16 sm:py-20 lg:py-24 bg-[#F7F5F1] border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
              Atölye Uzmanlıklarımız
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
              Kapsamlı <span className="font-semibold">Döşeme &amp; Onarım Hizmetleri</span>
            </h2>
          </div>
          <p className="text-sm text-[#6E6A64] max-w-md font-normal leading-relaxed">
            Sadece kumaş dikmiyoruz; mobilyanızın iskeletini, yay mekanizmalarını ve sünger konforunu sıfırdan revize ediyoruz.
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {UPHOLSTERY_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E7E2DA] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold text-[#9A6836] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    {service.badge}
                  </span>
                  <Wrench size={16} className="text-[#8E8A84] group-hover:text-[#1E1E1C] transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-[#1E1E1C] mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6A64] leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#E7E2DA] text-xs">
                  {service.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[#4A4742]">
                      <Check size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E2DA]/60">
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Merhaba Güler Mobilya, "${service.title}" hizmetiniz hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#1E1E1C] hover:text-[#9A6836] py-1 transition-colors"
                >
                  <span>Bu Hizmet İçin Fiyat Sor</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
