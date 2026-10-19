export interface UpholsteryProject {
  id: string
  title: string
  category: string
  categorySlug: string
  description: string
  beforeImage: string
  afterImage: string
  aspectRatio: string
  specs: {
    fabric: string
    foam: string
    skeleton: string
    duration: string
    woodFinish?: string
  }
  testimonial?: {
    customer: string
    location: string
    comment: string
    rating: number
  }
}

export const UPHOLSTERY_CATEGORIES = [
  { slug: "all", title: "Tüm Projeler" },
  { slug: "kose-koltuk", title: "Köşe Takımları" },
  { slug: "cekyat-kanepe", title: "Koltuk / Kanepe" },
  { slug: "berjer-koltuk", title: "Berjer & Koltuk" },
  { slug: "ticari-mobilya", title: "Kuaför & Döner Koltuk" },
]

export const UPHOLSTERY_PROJECTS: UpholsteryProject[] = [
  {
    id: "uph-real-1",
    title: "L Köşe Koltuk Kumaş & Sünger Yenileme",
    category: "Köşe Takımı",
    categorySlug: "kose-koltuk",
    description: "Yıpranmış ve deseni eskimiş kumaş söküldü, sırt ve oturum süngerleri yüksek dansite ortopedik süngerle takviye edilip vizon kadife kumaş ile baştan kaplandı.",
    beforeImage: "/upholstery/real/proje-1-kose-takimi-before.jpg",
    afterImage: "/upholstery/real/proje-1-kose-takimi-after.jpg",
    aspectRatio: "aspect-[16/10]",
    specs: {
      fabric: "Vizon Yumuşak Doku Kadife (Silinebilir & Sıvı İtici)",
      foam: "35 DNS HR Ortopedik Blok Sünger Takviyesi",
      skeleton: "Gürgen İskelet Sıkılama & Sandık Mekanizması",
      duration: "1 - 2 Hafta",
    },
    testimonial: {
      customer: "Fatma Y.",
      location: "Bursa",
      comment: "Eski çiçekli yastıklı halinden eser kalmadı, salonumuza modern ve çok ferah bir hava kattı. Oturumu ilk günkü gibi!",
      rating: 5,
    },
  },
  {
    id: "uph-real-2",
    title: "Chesterfield Koltuktan Yarmalı Modele Dönüşüm",
    category: "Koltuk / Kanepe",
    categorySlug: "cekyat-kanepe",
    description: "Eski kapitone baklava dikişli krem koltuk, karkas modifikasyonu ile trend dikey yarmalı sırt tasarımına kavuşturuldu; açık gri kumaş ve kontrast kırlentlerle sıfırlandı.",
    beforeImage: "/upholstery/real/proje-2-yarmali-acik-gri-before.jpg",
    afterImage: "/upholstery/real/proje-2-yarmali-acik-gri-after.jpg",
    aspectRatio: "aspect-[16/10]",
    specs: {
      fabric: "Açık Gri / Buz Mavisi Leke Tutmaz Dokuma Kumaş",
      foam: "32 DNS Özel Dikey Yarmalı Sırt Blok Süngeri",
      skeleton: "Karkas Modifikasyonu & Yarmalı Form Çıtalaması",
      duration: "1 - 2 Hafta",
    },
    testimonial: {
      customer: "Serkan B.",
      location: "Bursa",
      comment: "Klasik eski modeli yarmalı modern modele çevirdiler. Yeni koltuk alsak bu kadar kaliteli olamazdı.",
      rating: 5,
    },
  },
  {
    id: "uph-real-3",
    title: "Yıpranmış Koltuktan Yarmalı Antrasit Modele Dönüşüm",
    category: "Koltuk / Kanepe",
    categorySlug: "cekyat-kanepe",
    description: "Oturum kumaşı delinmiş ve yıpranmış koltuk tamamen söküldü; yay mekanizması onarılıp modern dikey yarmalı sırt formu verilerek antrasit kumaşla yenilendi.",
    beforeImage: "/upholstery/real/proje-3-yarmali-antrasit-before.jpg",
    afterImage: "/upholstery/real/proje-3-yarmali-antrasit-after.jpg",
    aspectRatio: "aspect-[16/10]",
    specs: {
      fabric: "Koyu Antrasit / Lacivert Dokulu Lüks Kumaş",
      foam: "35 DNS HR Çökmeyen Yüksek Yoğunluklu Sünger",
      skeleton: "Çelik Zikzak Yay Tamiri & Yarmalı Karkas",
      duration: "1 - 2 Hafta",
    },
    testimonial: {
      customer: "Mehmet A.",
      location: "Bursa",
      comment: "Kumaşında yanık ve yırtıklar vardı, çöpe atacaktık. Atölye öyle bir yeniledi ki mağazadan yeni almış gibiyiz.",
      rating: 5,
    },
  },
  {
    id: "uph-real-4",
    title: "Klasik Berjer Komple İskelet & Kapitone Yenileme",
    category: "Berjer & Koltuk",
    categorySlug: "berjer-koltuk",
    description: "Alt süngeri çökmüş ve astarı yırtılmış berjerin iskeleti sıfırlandı, elastik kolonları bağlandı, sırtına şık kapitone dikiş atılarak antrasit kadife ve gold ayakla kaplandı.",
    beforeImage: "/upholstery/real/proje-4-berjer-kapitone-before-16-10.jpg",
    afterImage: "/upholstery/real/proje-4-berjer-kapitone-after-16-10.jpg",
    aspectRatio: "aspect-[16/10]",
    specs: {
      fabric: "Antrasit İtalyan Kadife & Geometrik Bel Kırlenti",
      foam: "35 DNS HR Formunu Koruyan Berjer Oturum Süngeri",
      skeleton: "Alt Çelik Kolon & Yay Takviyesi, Gold Metal Ayak",
      duration: "1 Hafta",
    },
    testimonial: {
      customer: "Bahar T.",
      location: "Bursa",
      comment: "İskeleti hurdaya çıkmış gibiydi, teslim edildiğinde gözlerime inanamadım. Gerçekten harika bir zanaat.",
      rating: 5,
    },
  },
  {
    id: "uph-real-5",
    title: "Kuaför & Saç Yıkama Koltuğu Deri Yenileme",
    category: "Kuaför & Ticari Koltuk",
    categorySlug: "ticari-mobilya",
    description: "Süngerleri dökülen ve derisi tamamen parçalanan kuaför saç yıkama koltuğu, suya ve kimyasallara dayanıklı 1. sınıf siyah deri ve güçlendirilmiş süngerle sıfırlandı.",
    beforeImage: "/upholstery/real/proje-kuafor-koltugu-before-16-10.jpg",
    afterImage: "/upholstery/real/proje-kuafor-koltugu-after-16-10.jpg",
    aspectRatio: "aspect-[16/10]",
    specs: {
      fabric: "Suya & Kimyasallara Dayanıklı Ağır Hizmet Tipi Siyah Deri",
      foam: "35 DNS Yüksek Yoğunluklu Su İtici Sünger",
      skeleton: "Ergonomik Yıkama Karkası Onarımı & Pas Önleme",
      duration: "3 İş Günü",
    },
    testimonial: {
      customer: "Salon Sahibi",
      location: "Bursa",
      comment: "Sıfır saç yıkama ünitesi almaya kalksak servet ödeyecektik. Hem konforu arttı hem de derisi taş gibi sağlam oldu.",
      rating: 5,
    },
  },
  {
    id: "uph-real-6",
    title: "Döner Çalışma Koltuğu Mat Deri Yenileme",
    category: "Döner Koltuk",
    categorySlug: "ticari-mobilya",
    description: "Dökülen ve çatlayan eski suni derisi söküldü, ergonomik süngeri kalınlaştırıldı ve yüksek sürtünme dayanımlı mat siyah deri ile komple kaplandı.",
    beforeImage: "/upholstery/real/proje-5-doner-koltuk-deri-before-16-10.jpg",
    afterImage: "/upholstery/real/proje-5-doner-koltuk-deri-after-16-10.jpg",
    aspectRatio: "aspect-[16/10]",
    specs: {
      fabric: "Ağır Hizmet Tipi Aşınmaz Mat Siyah Suni Deri",
      foam: "Ergonomik Yüksek Yoğunluklu Oturum Süngeri",
      skeleton: "Döner Mekanizma & Krom Ayak Polisaj / Yağlama",
      duration: "2 İş Günü",
    },
    testimonial: {
      customer: "Caner D.",
      location: "Bursa",
      comment: "Derisi döküldüğü için kullanamıyorduk. Hem mekanizma bakımı yapıldı hem de derisi sıfır oldu.",
      rating: 5,
    },
  },
]

export const HOME_UPHOLSTERY_PROJECT_IDS = [
  "uph-real-5", // Kuaför & Saç Yıkama Koltuğu Deri Yenileme
  "uph-real-4", // Klasik Berjer Komple İskelet & Kapitone Yenileme
  "uph-real-3", // Yıpranmış Koltuktan Yarmalı Antrasit Modele Dönüşüm
]

export const HOME_UPHOLSTERY_PROJECTS: UpholsteryProject[] = HOME_UPHOLSTERY_PROJECT_IDS
  .map((id) => UPHOLSTERY_PROJECTS.find((p) => p.id === id))
  .filter((p): p is UpholsteryProject => Boolean(p))

export const UPHOLSTERY_SERVICES = [
  {
    id: "serv-1",
    title: "Koltuk & Berjer Döşeme",
    shortDesc: "Yıpranmış kumaşların sökümü, iskelet güçlendirme, 35 DNS HR sünger takviyesi ve titiz usta dikişi.",
    badge: "En Çok Tercih Edilen",
    details: [
      "Komple kumaş ve sünger sökümü",
      "Gürgen iskelet sıkılama & çatlak onarımı",
      "32 / 35 DNS HR ortopedik süngerleme",
      "Özel seçim silinebilir & leke tutmaz kumaş kartelası",
    ],
  },
  {
    id: "serv-2",
    title: "Çekyat & Mekanizma Yenileme",
    shortDesc: "Sarkan, gıcırdayan veya açılmayan sıfır makas çekyat mekanizmalarının onarımı ve kumaş değişimi.",
    badge: "Fonksiyonel Onarım",
    details: [
      "Sıfır makas yatak mekanizması değişimi",
      "Çelik zikzak yay takviyesi",
      "Sandık içi temizlik ve taban güçlendirme",
      "Silinebilir ve leke tutmaz kumaş kaplama",
    ],
  },
  {
    id: "serv-3",
    title: "Köşe Koltuk Revizyonu",
    shortDesc: "L koltuk ve modüler takımlarda çöken oturumların doldurulması ve salona özel renk değişimi.",
    badge: "Geniş Alanlar İçin",
    details: [
      "Modüler kilit ve birleşim aparatları",
      "Çökmelere karşı yüksek dansite blok sünger",
      "Yastık içi silikon boncuk elyaf dolgu",
      "Fermuarlı yıkanabilir sırt kılıfları",
    ],
  },
  {
    id: "serv-4",
    title: "Kuaför & Ofis Koltuğu Kaplama",
    shortDesc: "Kuaför yıkama koltukları, ofis ve döner koltukların ağır hizmet tipi deri ile kaplanması.",
    badge: "Hızlı Teslimat (2-3 Gün)",
    details: [
      "Kuaför saç yıkama koltuğu deri yenileme",
      "Ofis döner koltuğu aşınmaz deri kaplama",
      "Mekanizma, amortisör ve iskelet bakımı",
      "Kimyasallara ve suya dayanıklı malzeme",
    ],
  },
  {
    id: "serv-5",
    title: "Özel Model Değişikliği (Yarmalı Sırt vb.)",
    shortDesc: "Eski kapitone veya klasik modellerin modern dikey yarmalı sırt gibi çağdaş tasarımlara dönüştürülmesi.",
    badge: "Tasarım Dönüşümü",
    details: [
      "Karkas ve iskelet form revizyonu",
      "Dikey yarmalı sırt sünger çıtalaması",
      "Kollara özel modern hat kazandırma",
      "Özel kırlent ve renk kombinasyonları",
    ],
  },
  {
    id: "serv-6",
    title: "İskelet Güçlendirme & Ahşap Cila",
    shortDesc: "Masif gürgen iskelet bakımı, kırık parça değişimi, meşe/ceviz cila ve fırınlanmış lake boya uygulaması.",
    badge: "Zanaat İşçiliği",
    details: [
      "Gürgen iskelet kurtlanma koruması",
      "Çizik giderme ve zımparalama",
      "İpek mat, ceviz, meşe veya beyaz cila",
      "Titreşim ve gıcırtı önleyici takozlama",
    ],
  },
]

export const UPHOLSTERY_STEPS = [
  {
    step: "01",
    title: "Fotoğraf ile Hızlı Değerlendirme",
    desc: "Yenilemek istediğiniz koltuk veya sandalyenin fotoğraflarını WhatsApp hattımıza gönderin. 15 dakika içinde kumaş metrajı ve ortalama fiyat aralığını iletelim.",
  },
  {
    step: "02",
    title: "Kumaş Seçimi & Ücretsiz Keşif",
    desc: "Showroom'umuzda özenle seçilmiş trend kumaş kartelamızı dokunarak inceleyin veya kartelalarımızı adresinize getirelim; tarzınıza ve evinize en uygun dokuyu birlikte seçelim.",
  },
  {
    step: "03",
    title: "Atölyemizde Usta Zanaatı",
    desc: "Mobilyanızı evinizden teslim alalım. İskelet sıkılama, çelik yay kontrolü, 35 DNS HR ortopedik süngerleme ve titiz lazer kesim dikişle baştan yaratalım.",
  },
  {
    step: "04",
    title: "Özenli Ambalaj & Kapıya Teslim",
    desc: "Yenilenen mobilyalarınızı toz ve darbeye karşı koruyucu ambalajlarla sarıp, söz verdiğimiz günde evinize getirip kurulumunu tamamlayalım.",
  },
]

export const UPHOLSTERY_FAQS = [
  {
    question: "Döşeme yenileme işlemi ne kadar sürer?",
    answer:
      "Döşeme ve yenileme süresi mobilyanızın türüne, yapılacak işlemlerin kapsamına ve atölyemizin iş yoğunluğuna bağlı olarak genellikle 1 ila 2 hafta arasında tamamlanarak adresinize teslim edilmektedir. Kuaför koltuğu, döner koltuk veya sandalye gibi daha küçük parçalar ise 2-3 günde teslim edilebilmektedir.",
  },
  {
    question: "Yeni mobilya almak yerine döşetmek ne kadar tasarruf sağlar?",
    answer:
      "Bugün piyasada kaliteli fırınlanmış gürgen iskeletli yeni bir koltuk takımının veya kuaför ekipmanının fiyatı çok yüksektir. Eski mobilyanızın sağlam iskeletini koruyarak sıfır ayarında yeniletmek, yeni bir ürün satın almaya göre yaklaşık %60 - %70 daha ekonomiktir.",
  },
  {
    question: "Kendi aldığım kumaşı getirebilir miyim?",
    answer:
      "Elbette! Eğer kumaşınızı kendiniz temin ettiyseniz, sadece iskelet bakımı, süngerleme ve dikim/işçilik hizmetimizden faydalanabilirsiniz. Kumaş metrajı konusunda öncesinde danışabilirsiniz.",
  },
  {
    question: "Mobilyaları evden alıp tekrar eve teslim ediyor musunuz?",
    answer:
      "Evet. Bölge genelinde kendi nakliye ve taşıma ekibimiz mobilyalarınızı kapınızdan özenle alır, atölye işlemlerinin ardından koruyucu ambalajla tekrar evinize kadar getirir ve yerine yerleştirir.",
  },
  {
    question: "Hangi sünger kalitesini kullanıyorsunuz?",
    answer:
      "Standart ucuz süngerler kesinlikle kullanmıyoruz. Oturumlarda çökmeye ve deformasyona karşı dayanıklı 32 DNS ve 35 DNS HR (High Resilient - Yüksek Esneklik) ortopedik süngerler tercih ediyoruz. Tercihinize göre yumuşak, orta veya sert sünger seçimi yapabilirsiniz.",
  },
  {
    question: "Model değişikliği (örneğin düz koltuktan yarmalı modele) yapabiliyor musunuz?",
    answer:
      "Evet! Atölyemizin en güçlü uzmanlıklarından biri model dönüşümüdür. Karkas çıtalaması ve özel sünger kalıplama teknikleriyle eski chesterfield veya klasik modelleri dikey yarmalı sırt gibi en yeni trend tasarımlara dönüştürüyoruz.",
  },
  {
    question: "Kumaş ve deri seçenekleriniz nelerdir, silinebilir mi?",
    answer:
      "En çok tercih edilen trend renk ve dokulardan özenle oluşturulmuş seçkin kumaş ve deri kartelamız mevcuttur. Koleksiyonumuzda bukle, kadife, keten, nubuk, şönil ve ağır hizmet tipi suni deri alternatifleri bulunmaktadır. Kumaşlarımızın tamamı leke tutmaz (Easy-Clean), su itici ve silinebilir özelliktedir.",
  },
]
