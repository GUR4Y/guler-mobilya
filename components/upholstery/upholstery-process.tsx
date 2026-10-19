"use client"

import { MessageSquare, Palette, Hammer, Truck } from "lucide-react"
import { UPHOLSTERY_STEPS } from "@/data/upholstery"

const STEP_ICONS = [
  <MessageSquare key="1" size={20} className="text-[#9A6836]" />,
  <Palette key="2" size={20} className="text-[#9A6836]" />,
  <Hammer key="3" size={20} className="text-[#9A6836]" />,
  <Truck key="4" size={20} className="text-[#9A6836]" />,
]

export function UpholsteryProcess() {
  return (
    <section id="surec" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Başlık */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
            Adım Adım Döşeme Rehberi
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
            4 Kolay Adımda <span className="font-semibold">Zahmetsiz Yenileme</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6A64] mt-3 leading-relaxed">
            Evinizden çıkmadan, tek bir fotoğraf göndererek başlayan ve kapınıza teslim edilen profesyonel atölye sürecimiz:
          </p>
        </div>

        {/* Adımlar Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {UPHOLSTERY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#F7F5F1] border border-[#E7E2DA] rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#9A6836] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-light tracking-tight text-[#9A6836] font-mono">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E2DA] flex items-center justify-center shadow-2xs">
                    {STEP_ICONS[idx]}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[#1E1E1C] mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6A64] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E7E2DA]/60 text-[11px] font-medium text-[#9A6836] flex items-center gap-1">
                <span>Adım {idx + 1} / 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
