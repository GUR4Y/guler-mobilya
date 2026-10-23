"use client"

import { useState } from "react"
import { MessageSquare, Send, Sparkles, Phone } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-config"

const QUICK_TOPICS = [
  "Döşeme & Yenileme Fiyatı Almak İstiyorum",
  "Mobilya Modelleri Hakkında Bilgi",
  "Kumaş & Renk Seçenekleri",
]

export function ContactMessageForm() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const textToSend =
      message.trim() ||
      "Merhaba Güler Mobilya, siteniz üzerinden ulaşıyorum. Mobilya modelleriniz ve döşeme yenileme hizmetleriniz hakkında bilgi alabilir miyim?"

    const url = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(textToSend)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleQuickTopic = (topic: string) => {
    setMessage((prev) => (prev ? `${prev}\n\nKonu: ${topic}` : `Merhaba Güler Mobilya, ${topic.toLowerCase()} hakkında bilgi almak istiyorum.`))
  }

  return (
    <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
          <MessageSquare size={13} />
          <span>WhatsApp Doğrudan Destek Hattı</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1E1E1C]">
          Bize Mesaj Gönderin
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6A64] mt-1.5 font-light leading-relaxed">
          Öğrenmek istediğiniz mobilya modelini veya döşeme yenileme talebinizi aşağıya yazın; butona bastığınızda mesajınız doğrudan şirket WhatsApp hattımıza iletilecektir.
        </p>
      </div>

      {/* Hızlı Konu Seçenekleri */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-medium text-[#8E8A84] flex items-center gap-1">
          <Sparkles size={11} className="text-[#9A6836]" /> Hızlı Başlangıç Konuları:
        </span>
        <div className="flex flex-wrap gap-2">
          {QUICK_TOPICS.map((topic, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleQuickTopic(topic)}
              className="btn-elevate text-xs bg-[#F7F5F1] hover:bg-[#EAE6DF] text-[#4A4742] hover:text-[#1E1E1C] px-3.5 py-1.5 rounded-full border border-[#E7E2DA] hover:border-[#1E1E1C]/30 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              + {topic}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-[#1E1E1C] mb-2">
            Mesajınız / Talebiniz
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Örn: 3'lü koltuk takımımın sünger ve kumaşını yeniletmek istiyorum, ortalama maliyet öğrenebilir miyim? / Köşe koltuk modelinizin ölçü ve renkleri hakkında bilgi alabilir miyim?..."
            className="w-full px-4 py-3 rounded-xl border border-[#E7E2DA] bg-[#F7F5F1] text-sm text-[#1E1E1C] placeholder-[#8E8A84] focus:outline-none focus:border-[#1E1E1C] focus:bg-white transition-all resize-none leading-relaxed"
          />
        </div>

        {/* WhatsApp Gönder Butonu */}
        <button
          type="submit"
          className="group btn-elevate btn-shadow-emerald btn-sheen w-full py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-[0.985] cursor-pointer"
        >
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
          <span>Mesajı WhatsApp ile Gönder</span>
        </button>

        {/* Bilgilendirme */}
        <div className="pt-2 border-t border-[#E7E2DA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6E6A64]">
          <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            WhatsApp hattımız aktif &amp; hızlı dönüş yapılır
          </span>

          <a
            href={SITE_CONFIG.phoneTel}
            className="text-[#1E1E1C] hover:text-[#9A6836] font-medium flex items-center gap-1 transition-colors"
          >
            <Phone size={13} />
            <span>Doğrudan Ara: {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </form>
    </div>
  )
}
