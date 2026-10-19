"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sparkles, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Ürünler", href: "/urunler", isDropdown: true },
  { name: "Katalog", href: "/#katalog" },
  { name: "Blog", href: "/#blog" },
  { name: "İletişim", href: "/#iletisim" },
]

const productCategories = [
  { name: "Çekyat Modelleri", href: "/urunler?cat=cekyat-modelleri", desc: "Pratik açılır yataklı modeller" },
  { name: "Koltuk Modelleri", href: "/urunler?cat=koltuk-modelleri", desc: "Tekli berjer ve salon koltukları" },
  { name: "Köşe Koltuk Modelleri", href: "/urunler?cat=kose-koltuk-modelleri", desc: "Geniş L ve U köşe takımları" },
  { name: "Mutfak ve Balkon Köşeleri", href: "/urunler?cat=mutfak-balkon-koseleri", desc: "Kompakt masa & balkon takımları" },
  { name: "Çay Seti Modelleri", href: "/urunler?cat=cay-seti-modelleri", desc: "2 berjer ve sehpalı takımlar" },
  { name: "Puf, Benç ve Oturak Modelleri", href: "/urunler?cat=puf-benc-oturak-modelleri", desc: "Döşemeli bençler ve puflar" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isProductHovered, setIsProductHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b",
        isScrolled
          ? "bg-black/75 border-white/10 shadow-lg"
          : "bg-black/30 border-white/10",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-8">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold tracking-widest text-white transition-colors"
              aria-label="KATACHI Studio Home"
            >
              KATACHI
            </Link>
          </motion.div>

          {/* Masaüstü Menü Linkleri: Ana Sayfa, Ürünler (Dropdown), Katalog, Blog, İletişim */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsProductHovered(true)}
                    onMouseLeave={() => setIsProductHovered(false)}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1.5 py-2 group"
                    >
                      <span>{link.name}</span>
                      <span className="text-[10px] text-amber-400 transition-transform duration-200 group-hover:rotate-180">
                        ▼
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Mega Dropdown Menüsü */}
                    <AnimatePresence>
                      {isProductHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-50"
                        >
                          <div className="flex items-center justify-between px-3 pb-3 mb-2 border-b border-white/10 text-xs">
                            <span className="font-semibold text-amber-400 uppercase tracking-wider">
                              Mobilya Kategorileri
                            </span>
                            <Link
                              href="/urunler"
                              className="text-white/70 hover:text-white flex items-center gap-1"
                            >
                              Tümünü Gör ({productCategories.length}) →
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {productCategories.map((cat) => (
                              <Link
                                key={cat.name}
                                href={cat.href}
                                className="p-3 rounded-xl hover:bg-white/5 transition-colors group flex flex-col"
                              >
                                <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                                  {cat.name}
                                </span>
                                <span className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                                  {cat.desc}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            })}
          </nav>

          {/* Sağ Aksiyon: İletişim / Döşeme */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/doseme"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Döşeme &amp; Yenileme</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-5 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-white py-1"
              >
                Ana Sayfa
              </Link>

              {/* Mobil Ürün Kategorileri Accordion */}
              <div className="py-2 border-y border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400">
                  <span>Ürün Kategorileri</span>
                  <Link
                    href="/urunler"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[11px] text-white/80 underline"
                  >
                    Tümü
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-neutral-300 hover:text-amber-400 py-1 flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight size={12} className="text-neutral-500" />
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href="/#katalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-white py-1"
              >
                Katalog
              </a>
              <a
                href="/#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-white py-1"
              >
                Blog
              </a>
              <a
                href="/#iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-white py-1"
              >
                İletişim
              </a>
            </nav>

            <div className="pt-2 border-t border-white/10">
              <Link
                href="/doseme"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-white text-black"
              >
                <span>Döşeme &amp; Yenileme</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

