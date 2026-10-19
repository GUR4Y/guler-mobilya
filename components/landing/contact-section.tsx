"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Reveal } from "./reveal"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="iletisim" className="py-20 lg:py-32 bg-neutral-950 text-white relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Bize Ulaşın
            </span>
            <h2 className="text-4xl lg:text-6xl font-light mb-4">
              İletişim &amp; <span className="italic font-normal text-amber-300">Randevu</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Özel mimari projeleriniz, kumaş kartelası talepleriniz veya showroom ziyareti için dilediğiniz zaman bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-semibold text-white">Showroom &amp; Merkez Ofis</h3>
                
                <div className="flex items-start gap-4 text-neutral-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Adres</h4>
                    <p className="text-sm text-neutral-400 mt-0.5">Levent Mah. Tasarım Cad. No: 42, Beşiktaş / İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-neutral-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Telefon</h4>
                    <p className="text-sm text-neutral-400 mt-0.5">+90 (212) 345 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-neutral-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-amber-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">E-posta</h4>
                    <p className="text-sm text-neutral-400 mt-0.5">info@katachistudio.com</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-neutral-400">
                  <p>Çalışma Saatleri: Hafta içi 09:00 - 19:00 | Cumartesi 10:00 - 17:00</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-6 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-400/10 text-amber-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-medium text-white">Mesajınız Alındı!</h3>
                    <p className="text-neutral-400 max-w-md mx-auto text-sm leading-relaxed">
                      Talebiniz ekibimize ulaştı. Tasarım danışmanımız en geç 24 saat içinde sizinle iletişime geçecektir.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs text-amber-400 underline hover:text-amber-300"
                    >
                      Yeni bir mesaj gönder
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1.5">Adınız Soyadınız</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Örn: Ahmet Yılmaz"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1.5">Telefon Numaranız</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="05XX XXX XX XX"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">E-posta Adresiniz</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ornek@alanadi.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">Mesajınız / Talebiniz</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Özel mobilya veya kumaş talebiniz hakkında bize bilgi verin..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-amber-400 text-neutral-950 font-semibold text-sm hover:bg-amber-300 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Mesajı Gönder</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
