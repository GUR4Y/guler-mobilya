export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  coverImage: string
  content: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "yasam-alanlarinda-organik-formlar-ve-sicak-tonlar",
    title: "Yaşam Alanlarında Organik Formlar ve Sıcak Tonların Yükselişi",
    excerpt: "Keskin köşelerden uzaklaşarak kıvrımlı hatlara ve doğadan ilham alan toprak tonlarına yönelen modern iç mekan yaklaşımları.",
    category: "Tasarım & Trendler",
    date: "14 Mart 2026",
    readTime: "4 dk okuma",
    coverImage: "/modern-armchair-pillows.png",
    content: [
      "Son yıllarda iç mekan tasarımında en belirgin dönüşümlerden biri, katı ve keskin geometrik hatların yerini yumuşak, organik formlara bırakması oldu. İnsanların evlerinde daha fazla huzur, sığınak ve konfor hissi araması mobilya tercihlerini de doğrudan etkiledi.",
      "Kavisli koltuklar, dairesel puflar ve oval hatlara sahip masalar mekanın enerjisini akışkan hale getirirken alanın daha geniş ve ferah algılanmasını sağlıyor. Özellikle bej, taş, kiremit ve adaçayı yeşili gibi doğal paletler bu formlarla kusursuz bir denge yakalıyor.",
      "Güler Mobilya olarak koleksiyonlarımızda hem ergonomiyi hem de bu zamansız form akışını ön planda tutarak, yaşam alanlarınıza hem sıcaklık hem de modern bir duruş katmayı hedefliyoruz.",
    ],
  },
  {
    slug: "dogru-koltuk-ve-kumas-secimi-rehberi",
    title: "Koltuk Seçiminde Kumaş Dokusunun ve İskelet Kalitesinin Önemi",
    excerpt: "Uzun yıllar ilk günkü formunu ve konforunu koruyan bir mobilya için kumaş yapısı, sünger dansitesi ve iskelet detayları.",
    category: "Rehber & Bilgi",
    date: "28 Şubat 2026",
    readTime: "5 dk okuma",
    coverImage: "/green-velvet-modular-chair.png",
    content: [
      "Bir koltuğun görsel güzelliği kadar, göze görünmeyen iç yapı detayları da onun yaşam ömrünü belirler. Fırınlanmış gürgen ağacından imal edilen bir iskelet, esneme veya gıcırdama yapmadan uzun yıllar dayanıklılık sunar.",
      "Kumaş seçiminde ise yaşam tarzınızı göz önünde bulundurmalısınız. Yoğun kullanılan oturma odalarında leke tutmaz, kolay silinebilir keten ve chenille dokumalar öne çıkarken; daha rafine ve şık köşelerde kadife ve bukle kumaşlar mekana derinlik katar.",
      "Doğru sünger yoğunluğu (DNS) seçimi de oturum konforunun çökmesini engeller. 32-35 DNS aralığındaki soft süngerler vücudu dengeli destekleyerek ideal rahatlığı sağlar.",
    ],
  },
  {
    slug: "kucuk-alanlarda-maksimum-konfor-cekyat-ve-kose-cozumleri",
    title: "Küçük Alanlarda Maksimum İşlev: Çekyat ve Fonksiyonel Köşe Çözümleri",
    excerpt: "Metrekareyi verimli kullanan, gerektiğinde yatak olabilen ve sandık alanıyla depolama sağlayan akıllı mobilya önerileri.",
    category: "Fikirler",
    date: "12 Şubat 2026",
    readTime: "3 dk okuma",
    coverImage: "/cloud-white-sofa.png",
    content: [
      "Şehir yaşamında kompakt dairelerin artması, mobilyaların birden fazla görevi üstlenmesini zorunlu kılıyor. Artık çekyatlar sadece 'misafir gelince açılan' eski usul kanepeler değil; modern tasarımın ayrılmaz birer parçası.",
      "Sıfır makas mekanizmasına sahip çekyat modelleri, duvardan öne çekmeye gerek kalmadan tek hareketle konforlu bir yatağa dönüşürken geniş alt sandığı ile fazla eşyaları saklamanızı sağlar.",
      "Köşe takımlarında ise değiştirilebilir modüller, salonun geometrisine göre sağ veya sol yönde konumlandırılarak alan kaybını tamamen ortadan kaldırır.",
    ],
  },
]
