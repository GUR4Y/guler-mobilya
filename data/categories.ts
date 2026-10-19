export interface ProductCategory {
  slug: string
  title: string
  shortDesc: string
  image: string
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "cekyat-modelleri",
    title: "Çekyat Modelleri",
    shortDesc: "Pratik açılır mekanizmalı, yatak olabilen fonksiyonel ve konforlu tasarımlar.",
    image: "/showcase-cekyat.jpg",
  },
  {
    slug: "koltuk-modelleri",
    title: "Koltuk Modelleri",
    shortDesc: "Zarif hatlara sahip tekli berjerler ve modern salon koltukları.",
    image: "/koltuk-vizon-ahsap.jpg",
  },
  {
    slug: "kose-koltuk-modelleri",
    title: "Köşe Koltuk Modelleri",
    shortDesc: "Geniş oturumlu, konfor odaklı modüler ve estetik köşe takımları.",
    image: "/showcase-kose-koltuk.jpg",
  },
  {
    slug: "mutfak-balkon-koseleri",
    title: "Mutfak ve Balkon Köşeleri",
    shortDesc: "Mutfak ve balkon yaşam alanları için kompakt, dayanıklı köşe oturma grupları.",
    image: "/mutfak-kose-palazzo-mermer-set.jpg",
  },
  {
    slug: "cay-seti-modelleri",
    title: "Çay Seti Modelleri",
    shortDesc: "Keyifli dinlenme anları için ikili berjer ve sehpa kombinleri.",
    image: "/showcase-cay-seti.jpg",
  },
  {
    slug: "puf-benc-oturak-modelleri",
    title: "Puf, Benç ve Oturak Modelleri",
    shortDesc: "Yaşam alanlarını tamamlayan döşemeli bençler, silindir puflar ve oturaklar.",
    image: "/showcase-puf-oturak.jpg",
  },
]
