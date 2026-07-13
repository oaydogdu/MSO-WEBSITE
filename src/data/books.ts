export interface Book {
  title: string;
  subtitle: string;
  publisher: string;
  sublabel?: string;
  desc: string;
  descLong: string;
  link: string;
  accent: string;
  cover: string;
}

export const books: Book[] = [
  {
    title: "YÖNET(İM)",
    subtitle: "M. Sami Özeren · Eren Özeren",
    publisher: "Sarmal Yayınevi",
    desc: "İnsanı, süreci ve değişimi yöneten, yaşayan bir sistem anlayışı.",
    descLong: "İnsanlık tarihi boyunca değişmeyen bir gerçek vardır: Birlikte hareket edenler kazanır, dağınık olanlar kaybeder. Yönetim, işte tam bu noktada başlar. Sadece bir organizasyonu, bir işletmeyi ya da bir kurumu yönlendirmek değil; aynı zamanda insanları, süreçleri ve değişimi anlamlandırmak ve yön vermektir. Bu kitap, yönetimi yalnızca teorik bir çerçeve olarak ele almak yerine, onu yaşayan, dönüşen ve sürekli gelişen bir sistem olarak sunar.",
    link: "https://www.kitapyurdu.com/kitap/yonetim/754552.html?manufacturer_id=180829",
    accent: "#4a7c4a",
    cover: "/books/yonetim-v2.jpg",
  },
  {
    title: "GİRİŞ(İM)",
    subtitle: "M. Sami Özeren · Eren Özeren Özgül",
    publisher: "Beta Yayınevi",
    sublabel: "Gelişim İçin Girişim",
    desc: "Girişimcilik ruhunu disiplinler arası bir bakışla ele alan bir eser.",
    descLong: "Girişimcilik, günlük hayatta sıkça kullanılan ama nadiren gerçek anlamıyla ele alınan bir kavramdır. GİRİŞ(İM), bu kavramı yalnızca cesaret ya da fikir sahibi olmakla sınırlamaz; matematikten psikolojiye, sosyolojiden ekonomiye uzanan disiplinler arası bir bakışla girişimcinin sahip olması gereken istek, ideal, ataklık ve amaca yönelme niteliklerini bir araya getirir. Bu kitap, girişimciliği hazır bir formül olarak sunmak yerine, girişim ruhunu besleyen düşünce sistematiğini ve bu ruhu harekete geçiren araç ve yöntemleri anlamlandırır.",
    link: "https://www.kitapyurdu.com/kitap/girisim-gelisim-icin-girisim/368485.html?manufacturer_id=180829",
    accent: "#8b5a2b",
    cover: "/books/girisim-v3.jpg",
  },
];
