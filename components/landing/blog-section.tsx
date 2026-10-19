"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

const blogPosts = [
  {
    id: 1,
    title: "2026 İç Mimarlık ve Mobilya Trendleri: Organik Formlar & Sessiz Lüks",
    excerpt: "Yaşam alanlarında doğallığın, sakin tonların ve zamansız kıvrımlı hatların yükselişi.",
    date: "15 Mart 2026",
    readTime: "4 dk okuma",
    image: "/modern-armchair-pillows.png",
    category: "Tasarım",
  },
  {
    id: 2,
    title: "Doğru Kumaş Seçimi Rehberi: Kadife, Bukle ve Ketenin Uyumu",
    excerpt: "Mobilyalarınızda doku bütünlüğü ve uzun ömürlü kullanım için kumaş seçme ipuçları.",
    date: "02 Mart 2026",
    readTime: "6 dk okuma",
    image: "/material-oak-macro.png",
    category: "Malzeme & Zanaat",
  },
  {
    id: 3,
    title: "Minimalist Yaşam Alanı Düzenleme: Mekanlara Nefes Aldıran Detaylar",
    excerpt: "Az eşya ile fonksiyonel, estetik ve ferah iç mekan kurgusu nasıl yapılır?",
    date: "20 Şubat 2026",
    readTime: "5 dk okuma",
    image: "/green-modular-loveseat.png",
    category: "İlham",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-neutral-900 text-white">
      <div className="container-custom">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
                Tasarım Günlüğü
              </span>
              <h2 className="text-4xl lg:text-6xl font-light">
                Son Yazılar &amp; <span className="italic font-normal text-amber-300">İlham</span>
              </h2>
            </div>
            <p className="text-neutral-400 max-w-md mt-4 md:mt-0 text-sm md:text-base leading-relaxed">
              Tasarım vizyonumuz, kumaş trendleri ve yaşam alanlarına değer katan mimari dokunuşlar.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.15}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-neutral-800/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full hover:border-amber-400/30 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium leading-snug group-hover:text-amber-300 transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors">
                    <span>Devamını Oku</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
