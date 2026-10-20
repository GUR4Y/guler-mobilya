"use client"

import { useEffect } from "react"

export function ScrollToTopOnRefresh() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Tarayıcının yenileme anındaki eski scroll pozisyonunu hatırlamasını engelle
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"
      }

      // Sayfa ilk yüklendiğinde veya yenilendiğinde en başa kaydır
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })

      // Safari ve mobilde geri/ileri veya önbellek yenilemesinde en başa dön
      const handlePageShow = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }

      window.addEventListener("pageshow", handlePageShow)
      return () => window.removeEventListener("pageshow", handlePageShow)
    }
  }, [])

  return null
}
