'use client'

import React, { useState, useRef } from 'react'
import { 
  FolderKanban, 
  Palette, 
  Sparkles, 
  Coins, 
  ArrowUpRight, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Activity,
  Plus,
  RefreshCw,
  Search,
  Upload,
  SlidersHorizontal,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Trash2,
  Check,
  X
} from 'lucide-react'

export interface FabricItem {
  id: string
  name: string
  code: string
  collection: string
  color: string
  colorName: string
  textureImage: string
  isActive: boolean
}

export const INITIAL_FABRICS: FabricItem[] = [
  {
    id: "fabric-1",
    name: "Luna Cream",
    code: "LUN-1245",
    collection: "Bouclé Nordic",
    color: "#F3EDE2",
    colorName: "Krem Bej",
    textureImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-2",
    name: "Onyx Bouclé",
    code: "LUN-1280",
    collection: "Bouclé Nordic",
    color: "#27272A",
    colorName: "Antrasit Kömür",
    textureImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-3",
    name: "Forest Emerald Velvet",
    code: "VEL-4410",
    collection: "Royal Velvet",
    color: "#1E3A2F",
    colorName: "Zümrüt Yeşil",
    textureImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-4",
    name: "Midnight Sapphire Velvet",
    code: "VEL-4488",
    collection: "Royal Velvet",
    color: "#1B2A4A",
    colorName: "Gece Mavisi",
    textureImage: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-5",
    name: "Natural Dune Linen",
    code: "LIN-0812",
    collection: "Pure Belgian Linen",
    color: "#D8CBB7",
    colorName: "Doğal Kumtaşı",
    textureImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-6",
    name: "Sage Mineral Linen",
    code: "LIN-0899",
    collection: "Pure Belgian Linen",
    color: "#8FA392",
    colorName: "Adaçayı Yeşili",
    textureImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-7",
    name: "Cognac Saddle Leather",
    code: "LEA-9010",
    collection: "Heritage Aniline Leather",
    color: "#8B4513",
    colorName: "Konyak Taba",
    textureImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  },
  {
    id: "fabric-8",
    name: "Terracotta Chenille",
    code: "CHE-3100",
    collection: "Contemporary Chenille",
    color: "#C2593F",
    colorName: "Terracotta Kiremit",
    textureImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85",
    isActive: true,
  }
]

export function DashboardContent({ currentTab, setCurrentTab }: { currentTab: string; setCurrentTab: (tab: string) => void }) {
  // Fabric state
  const [fabrics, setFabrics] = useState<FabricItem[]>(INITIAL_FABRICS)
  const [selectedFabric, setSelectedFabric] = useState<FabricItem>(INITIAL_FABRICS[0])
  const [searchFabric, setSearchFabric] = useState("")

  // Visualizer Workspace state
  const [originalImage, setOriginalImage] = useState<string>(
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85"
  )
  const [enhancedMasterImage, setEnhancedMasterImage] = useState<string>(
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85"
  )
  const [enhancementStatus, setEnhancementStatus] = useState<"idle" | "enhancing" | "ready">("ready")
  
  // Render Cache
  const [renderCache, setRenderCache] = useState<Record<string, string>>({
    "fabric-1": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85",
    "fabric-2": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    "fabric-3": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85",
    "fabric-4": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1600&q=85",
    "fabric-5": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=85",
    "fabric-6": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    "fabric-7": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85",
    "fabric-8": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=85",
  })
  const [currentRenderImage, setCurrentRenderImage] = useState<string>(
    renderCache["fabric-1"] || originalImage
  )
  const [isRendering, setIsRendering] = useState(false)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [zoomLevel, setZoomLevel] = useState(1)

  // Admin New Fabric Modal state
  const [isNewFabricModalOpen, setIsNewFabricModalOpen] = useState(false)
  const [newFabricData, setNewFabricData] = useState({
    name: "",
    code: "",
    collection: "Bouclé Nordic",
    color: "#E2D9CC",
    colorName: "",
    textureImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Upload Furniture Image
  const handleUploadImage = (file: File) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      setOriginalImage(dataUrl)
      setCurrentRenderImage(dataUrl)
      setEnhancementStatus("enhancing")

      // STEP 1: ONE-TIME ENHANCEMENT PIPELINE
      setTimeout(() => {
        setEnhancedMasterImage(dataUrl)
        setEnhancementStatus("ready")
        setCurrentRenderImage(dataUrl)
      }, 1500)
    }
    reader.readAsDataURL(file)
  }

  // Material Replacement Selection
  const handleSelectFabric = (fabric: FabricItem) => {
    setSelectedFabric(fabric)

    // Cache hit: instant
    if (renderCache[fabric.id]) {
      setCurrentRenderImage(renderCache[fabric.id])
      setIsRendering(false)
      return
    }

    // Cache miss: generate strictly from Enhanced Master
    setIsRendering(true)
    setTimeout(() => {
      const result = fabric.textureImage
      setRenderCache(prev => ({ ...prev, [fabric.id]: result }))
      setCurrentRenderImage(result)
      setIsRendering(false)
    }, 1400)
  }

  // Toggle fabric active status
  const handleToggleFabric = (id: string) => {
    setFabrics(prev => prev.map(f => f.id === id ? { ...f, isActive: !f.isActive } : f))
  }

  // Delete fabric
  const handleDeleteFabric = (id: string) => {
    if (confirm("Bu kumaşı silmek istediğinize emin misiniz?")) {
      setFabrics(prev => prev.filter(f => f.id !== id))
    }
  }

  // Add new fabric
  const handleAddFabric = (e: React.FormEvent) => {
    e.preventDefault()
    const item: FabricItem = {
      id: `fab-${Date.now()}`,
      name: newFabricData.name,
      code: newFabricData.code,
      collection: newFabricData.collection,
      color: newFabricData.color,
      colorName: newFabricData.colorName,
      textureImage: newFabricData.textureImage,
      isActive: true,
    }
    setFabrics([item, ...fabrics])
    setIsNewFabricModalOpen(false)
    setNewFabricData({
      name: "",
      code: "",
      collection: "Bouclé Nordic",
      color: "#E2D9CC",
      colorName: "",
      textureImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    })
  }

  // =========================================================================
  // VIEW: 1. OVERVIEW (GENEL BAKIŞ)
  // =========================================================================
  if (currentTab === 'overview') {
    return (
      <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
        {/* Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Fabrika Sahibi Konsolu Aktif
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-stone-900">
              Yönetim & Kumaş Görselleştirici Özeti
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Mobilya modellerini tek tıkla yükleyin, kumaş kataloğunu yönetin ve fotogerçekçi kaplamaları önizleyin.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentTab('visualizer')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Kumaş Görselleştiriciyi Başlat
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('fabrics')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-50 transition-colors shadow-sm"
            >
              <Palette className="w-3.5 h-3.5" />
              Kumaş Yönetimi (Admin)
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Kayıtlı Kumaş Çeşidi</span>
              <Palette className="w-4 h-4 text-stone-700" />
            </div>
            <div className="text-2xl font-bold text-stone-900 mt-3">{fabrics.length}</div>
            <div className="text-[11px] text-stone-500 mt-1">5 Aktif Koleksiyon</div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Mobilya Modelleri</span>
              <FolderKanban className="w-4 h-4 text-stone-700" />
            </div>
            <div className="text-2xl font-bold text-stone-900 mt-3">12 Model</div>
            <div className="text-[11px] text-stone-500 mt-1">Enhanced Master Kayıtlı</div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>AI Render Cache Oranı</span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-stone-900 mt-3">94.8%</div>
            <div className="text-[11px] text-emerald-600 font-medium mt-1">Sıfır Ekstra AI Maliyeti</div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Kalan AI Kredisi</span>
              <Coins className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-stone-900 mt-3">2,450</div>
            <div className="text-[11px] text-stone-500 mt-1">Fabrika Enterprise Planı</div>
          </div>
        </div>

        {/* Quick Launch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => setCurrentTab('visualizer')}
            className="cursor-pointer bg-white border border-stone-200 hover:border-stone-900 rounded-3xl p-6 transition-all shadow-xs group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-stone-900 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </div>
            <h3 className="font-bold text-base text-stone-900 mb-1">AI Kumaş Görselleştirici Workspace</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Koltuk ve mobilya fotoğraflarınızı yükleyin, Step 1 kalitesini iyileştirin ve sağdaki kumaş kataloğundan dilediğiniz kumaşı uygulayın.
            </p>
          </div>

          <div 
            onClick={() => setCurrentTab('fabrics')}
            className="cursor-pointer bg-white border border-stone-200 hover:border-stone-900 rounded-3xl p-6 transition-all shadow-xs group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-900 flex items-center justify-center border border-stone-200">
                <Palette className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </div>
            <h3 className="font-bold text-base text-stone-900 mb-1">Admin Kumaş Yönetimi</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Fabrikanızın ürettiği yeni kumaşları, renk kodlarını ve yüksek çözünürlüklü dokuları kataloğa ekleyin veya silin.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // =========================================================================
  // VIEW: 2. VISUALIZER WORKSPACE (3 BÖLÜMLÜ ÇALIŞMA ALANI)
  // =========================================================================
  if (currentTab === 'visualizer') {
    return (
      <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-stone-100">
        {/* Workspace Sub Header */}
        <div className="h-12 bg-white border-b border-stone-200 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-xs text-stone-800">Model: Nordic Minimalist Sofa</span>
            <span className="text-[10px] text-stone-500 font-mono bg-stone-100 px-2 py-0.5 rounded">
              Aktif Kumaş: {selectedFabric.name} ({selectedFabric.code})
            </span>
          </div>

          <div className="flex items-center gap-3">
            {enhancementStatus === "enhancing" && (
              <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 animate-spin" /> Step 1: Kalite iyileştiriliyor...
              </span>
            )}
            {isRendering && (
              <span className="text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 animate-spin" /> {selectedFabric.name} döşeniyor...
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                const a = document.createElement("a")
                a.href = currentRenderImage
                a.download = `furniture-${selectedFabric.code}.jpg`
                a.click()
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800"
            >
              <Download className="w-3.5 h-3.5" />
              HD İndir
            </button>
          </div>
        </div>

        {/* 3-Column Split */}
        <div className="flex-1 flex overflow-hidden">
          {/* SOL PANEL (Kompakt Kontroller) */}
          <aside className="w-64 border-r border-stone-200 bg-white p-4 flex flex-col justify-between shrink-0 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                  Yeni Mobilya Yükle
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleUploadImage(file)
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-stone-300 hover:border-stone-800 rounded-xl p-4 text-center transition-colors flex flex-col items-center gap-1.5 hover:bg-stone-50"
                >
                  <Upload className="w-4 h-4 text-stone-500" />
                  <span className="text-xs font-semibold text-stone-800">Fotoğraf Seç</span>
                  <span className="text-[10px] text-stone-400">JPG, PNG, WEBP</span>
                </button>
              </div>

              {/* Pipeline Status */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs space-y-2">
                <div className="font-semibold text-stone-800 flex items-center justify-between text-[11px]">
                  <span>AI Pipeline Kuralı</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="space-y-1 text-[11px] text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> Orijinal Görsel Alındı
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> Enhanced Master (Tek Seferlik)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> Sıfır Generation Drift
                  </div>
                </div>
              </div>

              {/* View Controls */}
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                  Karşılaştırma
                </span>
                <button
                  type="button"
                  onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                  className={`w-full py-2 px-3 rounded-lg border text-xs font-medium flex items-center justify-between transition-colors ${
                    showBeforeAfter ? "bg-stone-900 border-stone-900 text-white" : "bg-white border-stone-200 text-stone-700"
                  }`}
                >
                  <span>Önce / Sonra Slider</span>
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentRenderImage(enhancedMasterImage)}
                  className="w-full py-2 px-3 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50 flex items-center justify-between"
                >
                  <span>Enhanced Orijinali Göster</span>
                  <Sparkles className="w-3.5 h-3.5 text-stone-400" />
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400 flex justify-between">
              <span>Geometri Koruması:</span>
              <span className="text-emerald-600 font-medium">Birebir</span>
            </div>
          </aside>

          {/* ORTA PANEL (Büyük Preview & Zoom/Slider) */}
          <section className="flex-1 bg-stone-950 relative flex items-center justify-center p-6 overflow-hidden select-none">
            <div 
              className="relative w-full h-full max-w-4xl max-h-[75vh] rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl transition-transform"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {!showBeforeAfter ? (
                <img
                  src={currentRenderImage}
                  alt="Furniture Preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={currentRenderImage}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={enhancedMasterImage}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-contain max-w-none"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      ÖNCE
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    SONRA ({selectedFabric.name})
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white text-stone-900 shadow-lg flex items-center justify-center text-[10px] font-bold">
                      ↔
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                </div>
              )}

              {/* Rendering state overlay */}
              {isRendering && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-30">
                  <div className="bg-stone-900 text-white px-4 py-2.5 rounded-xl border border-stone-700 flex items-center gap-2.5 text-xs shadow-xl">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                    <span>{selectedFabric.name} döşemesi hesaplanıyor...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom floating zoom bar */}
            <div className="absolute bottom-6 bg-stone-900/90 backdrop-blur text-white px-3.5 py-1.5 rounded-full flex items-center gap-3 border border-stone-700 text-xs shadow-lg">
              <button type="button" onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.25))}>
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] text-stone-400">{Math.round(zoomLevel * 100)}%</span>
              <button type="button" onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.25))}>
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <div className="w-[1px] h-3 bg-stone-700" />
              <button type="button" onClick={() => setZoomLevel(1)}>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>

          {/* SAĞ PANEL (Sticky Kumaş Kataloğu) */}
          <aside className="w-72 border-l border-stone-200 bg-white flex flex-col shrink-0">
            <div className="p-4 border-b border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs text-stone-900">Kumaş Kataloğu</h3>
                <span className="text-[10px] font-mono text-stone-400">{fabrics.filter(f => f.isActive).length} Kumaş</span>
              </div>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Kumaş ara..."
                  value={searchFabric}
                  onChange={(e) => setSearchFabric(e.target.value)}
                  className="w-full pl-7 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Fabrics list */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {fabrics
                .filter(f => f.isActive && (f.name.toLowerCase().includes(searchFabric.toLowerCase()) || f.code.toLowerCase().includes(searchFabric.toLowerCase())))
                .map((fabric) => {
                  const isSelected = selectedFabric.id === fabric.id
                  const isCached = !!renderCache[fabric.id]
                  return (
                    <button
                      key={fabric.id}
                      type="button"
                      onClick={() => handleSelectFabric(fabric)}
                      className={`w-full text-left p-2 rounded-xl border flex items-center gap-3 transition-all ${
                        isSelected 
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-white text-stone-900 border-stone-200 hover:border-stone-400"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-stone-200/60 bg-stone-100">
                        <img src={fabric.textureImage} alt={fabric.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-xs truncate">{fabric.name}</div>
                        <div className={`text-[10px] font-mono ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                          {fabric.code}
                        </div>
                        <div className={`text-[10px] truncate ${isSelected ? "text-stone-400" : "text-stone-400"}`}>
                          {fabric.collection}
                        </div>
                      </div>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : isCached ? (
                        <span className="text-[9px] font-mono text-stone-400 bg-stone-100 px-1 py-0.5 rounded shrink-0">
                          hazır
                        </span>
                      ) : null}
                    </button>
                  )
                })}
            </div>
          </aside>
        </div>
      </div>
    )
  }

  // =========================================================================
  // VIEW: 3. ADMIN KUMAŞ YÖNETİMİ
  // =========================================================================
  if (currentTab === 'fabrics') {
    return (
      <div className="p-6 md:p-8 space-y-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-stone-900">
              Admin Kumaş Yönetimi
            </h1>
            <p className="text-xs text-stone-500 mt-0.5">
              Fabrika kumaş kataloğuna yeni kumaşlar ve doku fotoğrafları ekleyin, durumlarını güncelleyin.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsNewFabricModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Yeni Kumaş Ekle
          </button>
        </div>

        {/* Fabrics Table */}
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-100/70 border-b border-stone-200 text-stone-600 font-semibold uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Texture</th>
                <th className="py-3 px-4">Kumaş Adı</th>
                <th className="py-3 px-4">Kod</th>
                <th className="py-3 px-4">Koleksiyon</th>
                <th className="py-3 px-4">Renk</th>
                <th className="py-3 px-4">Durum</th>
                <th className="py-3 px-4 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {fabrics.map((fabric) => (
                <tr key={fabric.id} className="hover:bg-stone-50/80 transition-colors">
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-stone-200">
                      <img src={fabric.textureImage} alt={fabric.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-3 px-4 font-semibold text-stone-900">{fabric.name}</td>
                  <td className="py-3 px-4 font-mono text-stone-500">{fabric.code}</td>
                  <td className="py-3 px-4 text-stone-600">{fabric.collection}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full border border-stone-300" style={{ backgroundColor: fabric.color }} />
                      <span>{fabric.colorName || fabric.color}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      type="button"
                      onClick={() => handleToggleFabric(fabric.id)}
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                        fabric.isActive ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-stone-100 text-stone-400"
                      }`}
                    >
                      {fabric.isActive ? "Aktif" : "Pasif"}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleDeleteFabric(fabric.id)}
                      className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal: New Fabric */}
        {isNewFabricModalOpen && (
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl border border-stone-200 shadow-xl max-w-md w-full p-6 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                <h3 className="font-semibold text-sm">Yeni Kumaş Tanımla</h3>
                <button type="button" onClick={() => setIsNewFabricModalOpen(false)}>
                  <X className="w-4 h-4 text-stone-400 hover:text-stone-700" />
                </button>
              </div>

              <form onSubmit={handleAddFabric} className="space-y-3.5">
                <div>
                  <label className="font-medium text-stone-700 block mb-1">Kumaş Adı</label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Royal Bouclé"
                    value={newFabricData.name}
                    onChange={(e) => setNewFabricData({ ...newFabricData, name: e.target.value })}
                    className="w-full p-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-medium text-stone-700 block mb-1">Kumaş Kodu</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: BOC-900"
                      value={newFabricData.code}
                      onChange={(e) => setNewFabricData({ ...newFabricData, code: e.target.value })}
                      className="w-full p-2 border border-stone-200 rounded-lg font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-stone-700 block mb-1">Renk</label>
                    <input
                      type="text"
                      placeholder="Örn: Vizon Bej"
                      value={newFabricData.colorName}
                      onChange={(e) => setNewFabricData({ ...newFabricData, colorName: e.target.value })}
                      className="w-full p-2 border border-stone-200 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium text-stone-700 block mb-1">Doku (Texture) Fotoğraf URL</label>
                  <input
                    type="url"
                    required
                    value={newFabricData.textureImage}
                    onChange={(e) => setNewFabricData({ ...newFabricData, textureImage: e.target.value })}
                    className="w-full p-2 border border-stone-200 rounded-lg font-mono text-[11px]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setIsNewFabricModalOpen(false)}
                    className="px-3.5 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white font-semibold hover:bg-stone-800"
                  >
                    Kumaşı Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  }

  // =========================================================================
  // VIEW: 4. MOBİLYA PROJELERİ & PIPELINE
  // =========================================================================
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-6xl mx-auto">
      <div className="border-b border-stone-200 pb-5">
        <h1 className="text-xl font-bold tracking-tight text-stone-900">
          Kayıtlı Mobilya Modelleri & Pipeline Durumu
        </h1>
        <p className="text-xs text-stone-500 mt-0.5">
          Her mobilya için tek seferlik oluşturulmuş Enhanced Master dosyaları.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" 
              alt="Nordic Sofa" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xs text-stone-900">Nordic 3-Seater Minimalist Sofa</h3>
          <div className="text-[11px] text-emerald-600 font-medium mt-1">✓ Enhanced Master Hazır</div>
          <div className="text-[11px] text-stone-500 mt-0.5">8 Kayıtlı Kumaş Renderı</div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" 
              alt="Velvet Armchair" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xs text-stone-900">Mid-Century Velvet Armchair</h3>
          <div className="text-[11px] text-emerald-600 font-medium mt-1">✓ Enhanced Master Hazır</div>
          <div className="text-[11px] text-stone-500 mt-0.5">14 Kayıtlı Kumaş Renderı</div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80" 
              alt="Lounge Chair" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xs text-stone-900">Curved Lounge Chair</h3>
          <div className="text-[11px] text-emerald-600 font-medium mt-1">✓ Enhanced Master Hazır</div>
          <div className="text-[11px] text-stone-500 mt-0.5">5 Kayıtlı Kumaş Renderı</div>
        </div>
      </div>
    </div>
  )
}
