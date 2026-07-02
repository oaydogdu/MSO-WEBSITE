import { Award, BookOpen, Users, Landmark, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const books = [
  {
    title: "YÖNET(İM)",
    subtitle: "M. Sami Özeren · Eren Özeren",
    publisher: "Sarmal Yayınevi",
    desc: "İnsanlık tarihi boyunca değişmeyen bir gerçek vardır: Birlikte hareket edenler kazanır, dağınık olanlar kaybeder. Yönetim, işte tam bu noktada başlar. Sadece bir organizasyonu, bir işletmeyi ya da bir kurumu yönlendirmek değil; aynı zamanda insanları, süreçleri ve değişimi anlamlandırmak ve yön vermektir. Bu kitap, yönetimi yalnızca teorik bir çerçeve olarak ele almak yerine, onu yaşayan, dönüşen ve sürekli gelişen bir sistem olarak sunar.",
    link: "https://www.kitapyurdu.com/kitap/yonetim/754552.html?manufacturer_id=180829",
    color: "#1a3a1a",
    accent: "#4a7c4a",
  },
  {
    title: "GİRİŞ(İM)",
    subtitle: "M. Sami Özeren · Eren Özeren Özgül",
    publisher: "Beta Yayınevi",
    sublabel: "Gelişim İçin Girişim",
    desc: "Girişimcilik ruhunu akademik bir perspektifle harmanlayan bu eser, hem teorik bilgi hem de pratik uygulama örnekleriyle okuyucuya kapsamlı bir rehber sunmaktadır.",
    link: "https://www.kitapyurdu.com/kitap/girisim-gelisim-icin-girisim/368485.html?manufacturer_id=180829",
    color: "#3a1a0a",
    accent: "#8b5a2b",
  },
];

const memberships = [
  "Serbest Muhasebeciler Mali Müşavirler Odası",
  "Vefalılar Derneği — Eski Başkan, Faal Denetim Kurulu Üyesi",
  "Vefa Vakfı — Kurucu, Faal Denetim Kurulu Üyesi",
  "Türk Gelecek Araştırmaları Vakfı — Yönetim Kurulu Üyesi",
  "PROYAK Derneği — Yönetim Kurulu Üyesi",
  "Muhasebe Uzmanları Derneği — Üye",
];

export default function MirasVizyonPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060e1c 0%, var(--navy) 60%, #0d1f3c 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>MSO Denetim</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Miras<br />
              <span style={{ color: "var(--gold)" }}>&amp; Vizyon</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              MSO&apos;nun kurucu ruhu: Mehmet Sami Özeren&apos;in yarım asrı aşan mesleki birikimi, yetiştirdiği nesil ve ilham veren eserleri.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div
                className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
                style={{ background: "var(--navy)" }}
              >
                <div className="text-center">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4 border-2"
                    style={{ background: "rgba(201,168,76,0.15)", borderColor: "var(--gold)", color: "var(--gold)" }}
                  >
                    MSÖ
                  </div>
                  <p className="text-white font-bold text-lg">Mehmet Sami Özeren</p>
                  <p className="text-sm mt-1" style={{ color: "var(--gold)" }}>Kurucu Ortak</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--navy)" }}>Unvanlar</h4>
                <ul className="space-y-2">
                  {["Mali Müşavir & Bağımsız Denetçi", "Yönetim Muhasebesi Uzmanı", "Yazar & Akademisyen"].map(u => (
                    <li key={u} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-2">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Yolculuk</p>
              <h2 className="font-display text-4xl font-bold mb-8 gold-line" style={{ color: "var(--navy)" }}>Bir Öncünün Hikayesi</h2>

              <div className="space-y-6 text-gray-500 leading-relaxed">
                <p>
                  Galatasaray İktisat ve İşletmecilik Yüksek Okulu&apos;ndan mezun olan Mehmet Sami Özeren, 1977-1984 yılları arasında <strong style={{ color: "var(--navy)" }}>Holantse Bank Uni-NV (ABN-AMRO Bank)</strong> İstanbul Merkez Şubesi&apos;nde İç Denetim Sorumlusu olarak görev yapmıştır. Bankacılık sektöründeki bu köklü deneyim, onun finansal denetim ve yönetim konusundaki uzmanlığının temelini oluşturmuştur.
                </p>
                <p>
                  1984 yılından itibaren serbest muhasebeci ve mali müşavirlik alanında kariyerini sürdüren Özeren, mesleğine olan derin bağlılığı ve etik duruşuyla sektörde saygın bir yer edinmiştir.
                </p>
                <p>
                  Yıllar içinde yetiştirdiği çok sayıda öğrenci ve meslektaş, bugün Türkiye&apos;nin önde gelen şirketlerinde <strong style={{ color: "var(--navy)" }}>CEO, CFO ve üst düzey yönetici</strong> olarak görev yapmaktadır. Bu durum, onun mesleki mirasının ve eğitimci kimliğinin en somut göstergesidir.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Users, label: "Yetiştirilen Nesil", val: "CEO & CFO'lar" },
                  { icon: BookOpen, label: "Yayınlanan Eser", val: "2 Kitap & Makaleler" },
                  { icon: Award, label: "Mesleki Deneyim", val: "40+ Yıl" },
                ].map(item => (
                  <div key={item.label} className="rounded-xl p-5 text-center" style={{ background: "rgba(10,22,40,0.04)" }}>
                    <item.icon size={22} className="mx-auto mb-3" style={{ color: "var(--gold)" }} />
                    <div className="font-display font-bold text-sm mb-1" style={{ color: "var(--navy)" }}>{item.val}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Sosyal Sorumluluk</p>
              <h2 className="font-display text-4xl font-bold text-white mb-8">Kültürel ve<br />Toplumsal Katkı</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                2010 yılında <strong className="text-white">İstanbul Kültür Başkenti Ajansı</strong>&apos;nda Artistik Komite Koordinatörlüğü görevini üstlenen Mehmet Sami Özeren, meslek sınırlarının ötesinde kültürel ve toplumsal alanlara da önemli katkılar sağlamıştır.
              </p>
              <p className="text-white/60 leading-relaxed">
                Çok sayıda vakıf ve derneğin kurucu ve yönetim kurulu üyesi olarak sivil topluma olan bağlılığını sürdürmektedir.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="space-y-3">
              {memberships.map((m) => (
                <div key={m} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Landmark size={16} className="shrink-0" style={{ color: "var(--gold)" }} />
                  <span className="text-white/70 text-sm">{m}</span>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Akademik Miras</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Yayınlanan Eserler</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {books.map((book, i) => (
              <AnimatedSection key={book.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
                  <div className="h-56 flex items-center justify-center" style={{ background: book.color }}>
                    <div className="text-center px-8">
                      <h3 className="font-display text-4xl font-black text-white mb-2">{book.title}</h3>
                      {book.sublabel && <p className="text-sm" style={{ color: book.accent }}>{book.sublabel}</p>}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-1">
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold)" }}>{book.publisher}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-4">{book.subtitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{book.desc}</p>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center gap-2 text-sm font-semibold transition-colors"
                      style={{ color: "var(--navy)" }}
                    >
                      <ExternalLink size={14} />
                      Kitabı İncele
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
