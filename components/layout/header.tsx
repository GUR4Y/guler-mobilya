"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react"
import { UtilityBar } from "./utility-bar"
import { PRODUCT_CATEGORIES } from "@/data/categories"
import { SITE_CONFIG } from "@/data/site-config"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sayfa değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }, [pathname])

  return (
    <>
      <UtilityBar />
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5F1]/95 backdrop-blur-md shadow-sm border-b border-[#E7E2DA]"
            : "bg-[#F7F5F1] border-b border-[#E7E2DA]/60"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Sol: Marka Logo */}
            <div className="flex-1 flex items-center justify-start">
              <Link
                href="/"
                className="text-2xl lg:text-[26px] font-semibold tracking-tight text-[#1E1E1C] hover:opacity-90 transition-opacity"
              >
                GÜLER <span className="font-light tracking-widest text-[#6E6A64]">MOBİLYA</span>
              </Link>
            </div>

            {/* Orta: Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-8 shrink-0">
              <Link
                href="/"
                className={`text-sm tracking-wide transition-colors py-2 ${
                  pathname === "/" ? "text-[#1E1E1C] font-semibold" : "text-[#6E6A64] hover:text-[#1E1E1C]"
                }`}
              >
                Ana Sayfa
              </Link>

              {/* Ürünler Dropdown / Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="/urunler"
                  className={`text-sm tracking-wide transition-colors py-2 inline-flex items-center gap-1.5 ${
                    pathname.startsWith("/urunler")
                      ? "text-[#1E1E1C] font-semibold"
                      : "text-[#6E6A64] hover:text-[#1E1E1C]"
                  }`}
                >
                  <span>Ürünler</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#1E1E1C]" : ""}`}
                  />
                </Link>

                {/* Dropdown Menü Kartı */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] pt-2 animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded-lg shadow-xl p-5">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E2DA]/60">
                        <span className="text-xs uppercase tracking-wider text-[#6E6A64] font-medium">
                          Ürün Kategorileri
                        </span>
                        <Link
                          href="/urunler"
                          className="text-xs text-[#1E1E1C] font-medium hover:underline flex items-center gap-1"
                        >
                          Tüm Ürünleri İncele →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/urunler/${cat.slug}`}
                            className="p-3 rounded-md hover:bg-[#F7F5F1] transition-colors group flex flex-col"
                          >
                            <span className="text-sm font-medium text-[#1E1E1C] group-hover:text-[#9A6836] transition-colors">
                              {cat.title}
                            </span>
                            <span className="text-xs text-[#6E6A64] line-clamp-1 mt-0.5 font-light">
                              {cat.shortDesc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/doseme"
                className={`text-sm tracking-wide transition-colors py-2 ${
                  pathname === "/doseme" ? "text-[#1E1E1C] font-semibold" : "text-[#6E6A64] hover:text-[#1E1E1C]"
                }`}
              >
                Döşeme &amp; Yenileme
              </Link>

              <Link
                href="/katalog"
                className={`text-sm tracking-wide transition-colors py-2 ${
                  pathname === "/katalog" ? "text-[#1E1E1C] font-semibold" : "text-[#6E6A64] hover:text-[#1E1E1C]"
                }`}
              >
                Katalog
              </Link>

              <Link
                href="/iletisim"
                className={`text-sm tracking-wide transition-colors py-2 ${
                  pathname === "/iletisim" ? "text-[#1E1E1C] font-semibold" : "text-[#6E6A64] hover:text-[#1E1E1C]"
                }`}
              >
                İletişim
              </Link>
            </nav>

            {/* Sağ: Dengeleyici Alan (Desktop) & Mobil Hamburger Menü */}
            <div className="flex-1 flex items-center justify-end">
              <div className="flex lg:hidden items-center gap-2">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="p-2 text-[#1E1E1C] hover:bg-[#EFECE6] rounded-md transition-colors"
                  aria-label="Telefonla Ara"
                >
                  <Phone size={18} />
                </a>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-[#1E1E1C] hover:bg-[#EFECE6] rounded-md transition-colors"
                  aria-label="Menü"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobil Menü Paneli */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E7E2DA] bg-[#F7F5F1] px-5 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`text-base font-medium py-1.5 ${
                  pathname === "/" ? "text-[#1E1E1C]" : "text-[#6E6A64]"
                }`}
              >
                Ana Sayfa
              </Link>

              {/* Mobil Ürünler Accordion */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                  className="w-full flex items-center justify-between text-base font-medium text-[#1E1E1C] py-1.5"
                >
                  <span>Ürünler</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#6E6A64] transition-transform duration-200 ${
                      isMobileCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileCategoryOpen && (
                  <div className="pl-3 pt-2 pb-1 space-y-2 border-l border-[#E7E2DA] ml-2 mt-1">
                    <Link
                      href="/urunler"
                      className="block text-sm font-medium text-[#1E1E1C] py-1 hover:text-[#9A6836]"
                    >
                      Tüm Ürünler →
                    </Link>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/urunler/${cat.slug}`}
                        className="block text-sm text-[#6E6A64] hover:text-[#1E1E1C] py-1"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/doseme"
                className={`text-base font-medium py-1.5 ${
                  pathname === "/doseme" ? "text-[#1E1E1C]" : "text-[#6E6A64]"
                }`}
              >
                Döşeme &amp; Yenileme
              </Link>

              <Link
                href="/katalog"
                className={`text-base font-medium py-1.5 ${
                  pathname === "/katalog" ? "text-[#1E1E1C]" : "text-[#6E6A64]"
                }`}
              >
                Katalog
              </Link>

              <Link
                href="/iletisim"
                className={`text-base font-medium py-1.5 ${
                  pathname === "/iletisim" ? "text-[#1E1E1C]" : "text-[#6E6A64]"
                }`}
              >
                İletişim
              </Link>
            </nav>

            <div className="pt-4 border-t border-[#E7E2DA]">
              <a
                href={SITE_CONFIG.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#1E1E1C] text-white text-sm font-medium tracking-wide"
              >
                <Phone size={15} />
                <span>{SITE_CONFIG.phone} — Hemen Ara</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
