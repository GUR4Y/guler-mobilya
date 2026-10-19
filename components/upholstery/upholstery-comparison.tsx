"use client"

import { Check, X, ShieldAlert, Sparkles, TrendingUp } from "lucide-react"

export function UpholsteryComparison() {
  const comparisonItems = [
    {
      feature: "İskelet Kalitesi & Dayanıklılık",
      upholstery: "Eski sağlam fırınlanmış masif gürgen ağacı iskeletiniz korunur ve sıkılanır.",
      upholsteryPositive: true,
      newFurniture: "Günümüz seri üretimlerinde genellikle hafif kavak veya sunta (yonga levha) kullanılır.",
      newPositive: false,
    },
    {
      feature: "Bütçe & Maliyet Tasarrufu",
      upholstery: "Eşdeğer kalitede sıfır bir mobilya satın almaya göre %60 - %70 daha ekonomiktir.",
      upholsteryPositive: true,
      newFurniture: "Yüksek mağaza kâr marjları, KDV ve lojistik maliyetleriyle gereksiz yüksek harcama.",
      newPositive: false,
    },
    {
      feature: "Sünger Dansitesi & Konfor",
      upholstery: "İstediğiniz sertlikte 32 DNS veya 35 DNS HR (ortopedik çökmeyen) sünger takılır.",
      upholsteryPositive: true,
      newFurniture: "Maliyeti düşürmek için çoğunlukla 22 - 28 DNS kısa ömürlü süngerler tercih edilir.",
      newPositive: false,
    },
    {
      feature: "Kumaş & Renk Özgürlüğü",
      upholstery: "Özenle seçilmiş trend renkler, zengin dokular ve silinebilir kumaş kartelası arasından özgür seçim.",
      upholsteryPositive: true,
      newFurniture: "Mağazanın sunduğu sınırlı 2-3 standart renk ve kumaş seçeneğine bağlı kalırsınız.",
      newPositive: false,
    },
    {
      feature: "Evinize & Salonunuza Uyum",
      upholstery: "Mevcut salonunuza, halınıza ve odanıza zaten milimetrik uyan ölçüler korunur.",
      upholsteryPositive: true,
      newFurniture: "Yeni ölçü arama stresi, kapılardan geçmeme veya odaya büyük/küçük gelme riski.",
      newPositive: false,
    },
    {
      feature: "Sürdürülebilirlik & Çevre",
      upholstery: "Sağlam ahşap israf edilmez, doğaya sıfır atık ve sürdürülebilir döngü kazandırılır.",
      upholsteryPositive: true,
      newFurniture: "Eski mobilyanın çöpe gitmesi ve karbon ayak izi yüksek yeni üretim tüketimi.",
      newPositive: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F5F1] border-b border-[#E7E2DA]">
      <div className="container-custom">
        {/* Başlık */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#9A6836] block mb-2">
            Akılcı &amp; Ekonomik Tercih
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#1E1E1C] tracking-tight">
            Neden Yeni Mobilya Almak Yerine <span className="font-semibold">Döşetmelisiniz?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6A64] mt-3 leading-relaxed">
            Eski koltuklarınızın iskeleti aslında günümüz fabrikasyon mobilyalarından katbekat daha sağlamdır. İşte döşeme yaptırmanın somut avantajları:
          </p>
        </div>

        {/* Karşılaştırma Tablosu */}
        <div className="max-w-5xl mx-auto bg-white border border-[#E7E2DA] rounded-2xl overflow-hidden shadow-sm">
          {/* Başlık Satırı */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#1E1E1C] text-white p-4 sm:p-5 text-xs sm:text-sm font-semibold">
            <div className="md:col-span-4 flex items-center">
              <span>Karşılaştırma Kriteri</span>
            </div>
            <div className="md:col-span-4 flex items-center gap-1.5 text-amber-400 font-bold mt-2 md:mt-0">
              <Sparkles size={14} />
              <span>Güler Mobilya ile Döşeme</span>
            </div>
            <div className="md:col-span-4 flex items-center gap-1.5 text-neutral-400 mt-2 md:mt-0">
              <ShieldAlert size={14} />
              <span>Piyasadan Yeni Mobilya Satın Almak</span>
            </div>
          </div>

          {/* Satırlar */}
          <div className="divide-y divide-[#E7E2DA]">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm gap-3 md:gap-4 items-center ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#FBF9F6]"
                }`}
              >
                {/* Kriter */}
                <div className="md:col-span-4 font-semibold text-[#1E1E1C]">
                  {item.feature}
                </div>

                {/* Döşeme Avantajı */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-[#1E1E1C] bg-emerald-50/60 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="leading-relaxed font-medium">{item.upholstery}</span>
                </div>

                {/* Yeni Mobilya Dezavantajı */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-[#6E6A64] bg-neutral-100/50 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} strokeWidth={2.5} />
                  </div>
                  <span className="leading-relaxed">{item.newFurniture}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
