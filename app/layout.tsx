import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ScrollToTopOnRefresh } from "@/components/layout/scroll-to-top-on-refresh"
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Güler Mobilya — Yaşam Alanınıza Yeni Bir Dokunuş",
  description:
    "Konforu, işlevselliği ve zamansız tasarımı yaşam alanlarınızla buluşturan Güler Mobilya koleksiyonlarını keşfedin. Çekyat, koltuk, köşe koltuk ve özel mobilya modelleri.",
  alternates: {
    canonical: "https://gulermobilya.com.tr",
  },
  openGraph: {
    siteName: "Güler Mobilya",
    title: "Güler Mobilya — Yaşam Alanınıza Yeni Bir Dokunuş",
    description: "Konforu, işlevselliği ve zamansız tasarımı yaşam alanlarınızla buluşturan Güler Mobilya koleksiyonları.",
    type: "website",
    locale: "tr_TR",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "_bWATzYlsS7MUC53t_s2uLmWOssOGbo2I3IEeDcYTZo",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-[#F7F5F1] text-[#1E1E1C] selection:bg-[#E7E2DA] selection:text-[#1E1E1C]">
        <ScrollToTopOnRefresh />
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  )
}
