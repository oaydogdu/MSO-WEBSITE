import Image from "next/image";
import Link from "next/link";
import { Landmark, ExternalLink, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { books } from "@/data/books";
import { articles } from "@/data/articles";

const ozerenArticles = articles.filter((a) => a.author === "Mehmet Sami Özeren");

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
        className="pt-28 pb-16 md:pt-40 md:pb-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060e1c 0%, var(--navy) 60%, #0d1f3c 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Yarım Asırlık Birikim</p>
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
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start">
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div
                className="relative rounded-2xl overflow-hidden aspect-square"
                style={{ background: "var(--navy)" }}
              >
                <Image
                  src="/team/mehmetsami.jpg"
                  alt="Mehmet Sami Özeren"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(0deg, rgba(6,14,28,0.9) 0%, rgba(6,14,28,0.1) 45%, transparent 70%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-white font-bold text-lg">Mehmet Sami Özeren</p>
                  <p className="text-sm mt-1" style={{ color: "var(--gold)" }}>Kurucu Ortak</p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 rounded-xl p-5 md:p-6 border border-gray-100">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 md:mb-4" style={{ color: "var(--navy)" }}>Unvanlar</h4>
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
              <h2 className="font-display text-4xl font-bold mb-5 md:mb-8 gold-line" style={{ color: "var(--navy)" }}>Bir Öncünün Hikayesi</h2>

              <div className="space-y-4 md:space-y-6 text-gray-500 leading-relaxed">
                <p>
                  1953 yılında İstanbul Eminönü&apos;nde dünyaya gelen Mehmet Sami Özeren, yükseköğrenimini Galatasaray İktisat ve İşletmecilik Yüksek Okulu&apos;nda tamamlamıştır. 1976&apos;daki mezuniyetinin ardından <strong style={{ color: "var(--navy)" }}>Holantse Bank Uni-NV (ABN-AMRO Bank)</strong> İstanbul Merkez Şubesi&apos;nde İç Denetim Sorumlusu olarak göreve başlamış, yaklaşık yedi yıl süren bu bankacılık deneyimi onun finansal denetim ve yönetim konusundaki uzmanlığının temelini oluşturmuştur.
                </p>
                <p>
                  Banka yıllarında girişimcilik ruhundan da ödün vermeyen Özeren, aynı dönemde bir reklam şirketi kurarak başarılı işlere imza atmıştır. Yine bu yıllarda, 1971 yılında kurulmuş ancak sınırlı bir müşteri portföyüyle faaliyet gösteren bugünkü şirketimizi devralmıştır. Kendi ifadesiyle amacı başlangıçta muhasebe değil daha çok müşavirlik yapmaktı; zamanla ve bir nevi zorunluluktan bu alana yönelerek MSO&apos;nun bugünkü temelini atmıştır — <strong style={{ color: "var(--navy)" }}>şirketimizin 1971 kuruluş tarihi de bu devralma hikâyesinden gelmektedir.</strong>
                </p>
                <p>
                  1984 yılında bankacılık kariyerini noktalayıp kendini tamamen Serbest Muhasebeci ve Mali Müşavirliğe adayan Özeren, yıllar içinde yetiştirdiği çok sayıda öğrenci ve meslektaşıyla da iz bırakmıştır. Bugün bu isimlerin birçoğu Türkiye&apos;nin önde gelen şirketlerinde <strong style={{ color: "var(--navy)" }}>CEO, CFO ve üst düzey yönetici</strong> olarak görev yapmaktadır — mesleki mirasının ve eğitimci kimliğinin en somut göstergesi.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-14 md:py-24" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Sosyal Sorumluluk</p>
              <h2 className="font-display text-4xl font-bold text-white mb-5 md:mb-8">Kültürel ve<br />Toplumsal Katkı</h2>
              <p className="text-white/60 leading-relaxed mb-4 md:mb-6">
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

      {/* Books & Articles */}
      <section className="py-14 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Akademik Miras</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Yayınlanan Eserler</h2>
          </AnimatedSection>

          <p className="text-xs font-bold tracking-widest uppercase mb-4 md:mb-6" style={{ color: "var(--navy)" }}>Kitaplar</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
            {books.map((book, i) => (
              <AnimatedSection key={book.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-start h-full">
                  <div className="w-36 sm:w-44 flex-shrink-0 bg-gray-50 p-4">
                    <Image src={book.cover} alt={book.title} width={400} height={520} className="w-full h-auto rounded-md shadow-md" />
                  </div>
                  <div className="p-5 md:p-8 flex flex-col flex-1 min-w-0">
                    <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "var(--navy)" }}>{book.title}</h3>
                    {book.sublabel && <p className="text-sm mb-2" style={{ color: book.accent }}>{book.sublabel}</p>}
                    <div className="mb-1">
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--gold)" }}>{book.publisher}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-3">{book.subtitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 md:hidden">{book.desc}</p>
                    <p className="hidden md:block text-gray-500 text-sm leading-relaxed flex-1">{book.descLong}</p>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-6 flex items-center gap-2 text-sm font-semibold transition-colors"
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

          {ozerenArticles.length > 0 && (
            <div className="mt-8 md:mt-16">
              <p className="text-xs font-bold tracking-widest uppercase mb-4 md:mb-6" style={{ color: "var(--navy)" }}>Makaleler</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {ozerenArticles.map((article, i) => (
                  <AnimatedSection key={article.slug} delay={i * 0.1}>
                    <Link href={`/yayinlarimiz/${article.slug}`} className="block h-full">
                      <div className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                          {article.author} · {article.date}
                        </p>
                        <h3 className="font-display text-xl font-bold mb-3 leading-tight" style={{ color: "var(--navy)" }}>
                          {article.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-6 flex-1">{article.excerpt}</p>
                        <span className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                          Yayınlarımız&apos;da Oku <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Library */}
      <section className="relative h-[420px] md:h-[560px] flex items-end overflow-hidden">
        <Image
          src="/miras/kutuphane.jpg"
          alt="Mehmet Sami Özeren Kütüphanesi"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(6,14,28,0.94) 0%, rgba(6,14,28,0.6) 45%, rgba(6,14,28,0.2) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 md:pb-16 w-full">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4" style={{ color: "var(--gold)" }}>Kişisel Koleksiyon</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Mehmet Sami Özeren Kütüphanesi</h2>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-5 md:mb-8">
              Yılların birikimini bir araya getiren zengin kişisel kütüphanesi, ofisimizde ziyaretçilerimizi ağırlamaya devam ediyor.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 px-6 py-3 text-xs font-bold tracking-widest uppercase"
              style={{ background: "var(--gold)", color: "var(--navy)" }}
            >
              Bizi Ziyaret Edin <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
