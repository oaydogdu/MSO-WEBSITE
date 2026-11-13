import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const managers = [
  {
    name: "Mehmet Sami Özeren",
    title: "Kurucu Ortak",
    photo: "/team/mehmetsami.jpg",
    expertise: "Mali Müşavir & Bağımsız Denetçi · Yönetim Muhasebesi Uzmanı",
    bio: "1953 yılında İstanbul Eminönü'nde dünyaya gelen Mehmet Sami Özeren, yükseköğrenimini Galatasaray İktisat ve İşletmecilik Yüksek Okulu'nda tamamlamıştır. 1977-1984 yılları arasında Hollantse Bank Uni-NV (ABN-AMRO Bank) İstanbul Merkez Şube'de İç Denetim Sorumlusu olarak görev yapan Özeren, bu dönemde bir reklam şirketi kurmuş, aynı zamanda 1971 yılında kurulmuş bugünkü şirketimizi devralarak mesleki yolculuğuna yön vermiştir. 1984'te bankacılık kariyerini noktalayıp kendini tamamen Serbest Muhasebeci Mali Müşavirliğe adayan Özeren, Vefa Vakfı'nın kurucuları arasında yer almış, Türk Gelecek Araştırmaları Vakfı ve PROYAK Derneği'nde yönetim kurulu üyelikleri üstlenmiş, 2010 yılında ise İstanbul Kültür Başkenti Ajansı'nda Artistik Komite Koordinatörü olarak ajansın tüm projelerinin operasyonel direktörlüğünü yürütmüştür. Bugün de kaleme aldığı kitap ve makalelerle mesleki birikimini paylaşmaya devam etmektedir.",
    badges: ["Kurucu Ortak", "Bağımsız Denetçi", "Yönetim Muhasebesi Uzmanı", "Vefa Vakfı Kurucusu", "İKBA Artistik Komite Koordinatörü"],
  },
  {
    name: "Ali Aydoğdu",
    title: "Yönetici Ortak",
    photo: "/team/aliaydogdu-v4.jpg",
    expertise: "Mali Müşavir & Bağımsız Denetçi",
    bio: "1977 yılında Tokat'ın Erbaa ilçesinde dünyaya gelen Ali Aydoğdu, ilk ve orta öğrenimini Erbaa'da tamamlamış, lise eğitimini İstanbul Bakırköy Ticaret Lisesi'nde, yükseköğrenimini ise Anadolu Üniversitesi'nde bitirmiştir. Kariyeri boyunca ulusal ve uluslararası ölçekte yetkin şirketlere finansal danışmanlık ve denetim hizmetleri sunan Aydoğdu, sektörel gelişim ve sivil toplum faaliyetlerine de aktif katılım sağlayarak geçmişte Meslekte Birlik Grubu Yönetim Kurulu Üyeliği, TÜRMOB Delegeliği ve Yeşilay Denetim Kurulu Üyeliği gibi idari görevler üstlenmiştir. Mali müşavirlik ve kurumsal finansman alanındaki derin tecrübesinin yanı sıra AKSİS Uluslararası Bağımsız Denetim A.Ş. Ortağı ve Denetçisi olan Aydoğdu, bugün şirketimizin Yönetici Ortağı olarak kurumsal hedeflerimize ve stratejik büyüme yolculuğumuza liderlik etmektedir.",
    badges: ["Yönetici Ortak", "Bağımsız Denetçi", "AKSİS Uluslararası Bağımsız Denetim A.Ş. Ortağı", "TÜRMOB Delegesi", "Yeşilay Denetim Kurulu"],
  },
  {
    name: "Ali Pınar",
    title: "Yönetici",
    photo: "/team/alipinar-v2.jpg",
    expertise: "Mali Müşavir & Bağımsız Denetçi",
    bio: "1977 yılında Konya'da dünyaya gelen Ali Pınar, ilköğretimini İstanbul Eyüpsultan ilçesinde, lise öğrenimini Bayrampaşa Ticaret Meslek Lisesi'nde, lisans eğitimini Anadolu Üniversitesi İşletme Fakültesi'nde, yüksek lisansını ise Trakya Üniversitesi Sosyal Bilimler Enstitüsü'nde Muhasebe ve Denetim alanında tamamlamıştır. 1992-1998 yılları arasında çeşitli muhasebe ve mali müşavirlik ofislerinde görev alan Pınar, 2000-2020 yılları arasında Sırdaş Denetim ve Yönetim Danışmanlığı YMM A.Ş.'de Vergi Denetim Müdürü olarak tam tasdik denetimleri, KDV iadesi ve vergi danışmanlığı çalışmalarını yürütmüş; inşaat, enerji, havacılık, tarım, imalat sanayi, tekstil, perakende, çevre hizmetleri, yayıncılık ve eğitim gibi birçok sektörden orta ve büyük ölçekli şirketlere hizmet vermiştir. Geçmişte İstanbul Meslekte Birlik Grubu Yönetim Kurulu Üyeliği, İSMMMO Danışma Meclisi Üyeliği, TÜRMOB Delegeliği ve Yeşilay Delegeliği görevlerini üstlenmiştir. 2021 yılından bu yana MSO Denetim SMMM A.Ş. bünyesinde muhasebe, vergi denetimi ve vergi danışmanlığı alanlarında çalışmalarını sürdürmekte; şirketin kurumsal hedeflerine ve profesyonel hizmet yaklaşımına katkı sağlamaya devam etmektedir.",
    badges: ["Yönetici", "Bağımsız Denetçi", "İSMMMO Üyesi", "KGK Üyesi"],
  },
];

const team = [
  { name: "Hatice Akbaş", title: "Serbest Muhasebeci Mali Müşavir", photo: "/team/hatice.jpg" },
  { name: "Ali Kemal Özdemir", title: "Muhasebe Uzmanı", photo: "/team/kemal.jpg" },
  { name: "Mustafa Zor", title: "Serbest Muhasebeci Mali Müşavir", photo: "/team/mustafa.jpg" },
  { name: "Ceyda Güven", title: "Muhasebe Sorumlusu", photo: "/team/ceyda.jpg", photoScale: 1.08 },
  { name: "Tamer Turan", title: "Muhasebe Sorumlusu", photo: "/team/tamer.jpg" },
  { name: "İsmail Arslan", title: "Muhasebe Sorumlusu", photo: "/team/ismail.jpg" },
  { name: "Oğuzhan Aydoğdu", title: "Operasyon Direktörü", photo: "/team/oguzhan.jpg" },
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  return <>{parts[0][0]}{parts[parts.length - 1][0]}</>;
}

export default function EkibimizPage() {
  return (
    <>
      <section
        className="pt-28 pb-16 md:pt-40 md:pb-24"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Profesyonel Kadromuz</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Ekibimiz</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              10 kişilik uzman kadromuz ile işletmenizin her ihtiyacında profesyonel destek sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Managers */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Liderlik</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Yöneticilerimiz</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8">
            {managers.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1}>
                <div className="team-card rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full">
                  {/* Compact mobile header */}
                  <div className="md:hidden flex items-center gap-3 p-3" style={{ background: "var(--navy)" }}>
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover object-top border-2 shrink-0"
                        style={{ borderColor: "var(--gold)" }}
                      />
                    ) : (
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold border-2 shrink-0"
                        style={{ background: "rgba(201,168,76,0.15)", borderColor: "var(--gold)", color: "var(--gold)" }}
                      >
                        <Initials name={m.name} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-0.5">{m.name}</h3>
                      <p className="font-medium text-sm" style={{ color: "var(--gold)" }}>{m.title}</p>
                    </div>
                  </div>

                  {/* Original full banner (desktop) */}
                  <div className="hidden md:flex h-64 items-center justify-center" style={{ background: "var(--navy)" }}>
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        width={176}
                        height={176}
                        className="w-44 h-44 rounded-full object-cover object-top border-2"
                        style={{ borderColor: "var(--gold)" }}
                      />
                    ) : (
                      <div
                        className="w-44 h-44 rounded-full flex items-center justify-center text-5xl font-bold border-2"
                        style={{ background: "rgba(201,168,76,0.15)", borderColor: "var(--gold)", color: "var(--gold)" }}
                      >
                        <Initials name={m.name} />
                      </div>
                    )}
                  </div>
                  <div className="p-4 md:p-8">
                    <div className="hidden md:block">
                      <h3 className="font-display text-xl font-bold mb-1" style={{ color: "var(--navy)" }}>{m.name}</h3>
                      <p className="font-medium mb-1" style={{ color: "var(--gold)" }}>{m.title}</p>
                    </div>
                    <p className="text-gray-400 text-sm mb-2 md:mb-4 mt-0">{m.expertise}</p>
                    {m.bio && <p className="text-gray-500 text-sm leading-relaxed mb-3 md:mb-6">{m.bio}</p>}
                    {m.badges && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {m.badges.map(b => (
                          <span
                            key={b}
                            className="text-xs px-3 py-1 rounded-full border font-medium"
                            style={{ borderColor: "rgba(201,168,76,0.3)", color: "var(--gold)", background: "rgba(201,168,76,0.06)" }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Profesyoneller</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Uzman Kadromuz</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={(i % 6) * 0.07}>
                <div className="team-card bg-white rounded-xl p-5 md:p-6 shadow-sm flex items-center gap-5 border border-gray-100 h-full">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover object-top shrink-0 border-2"
                      style={{
                        borderColor: "rgba(201,168,76,0.35)",
                        transform: member.photoScale ? `scale(${member.photoScale})` : undefined,
                      }}
                    />
                  ) : (
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-base font-bold shrink-0"
                      style={{ background: "rgba(10,22,40,0.06)", color: "var(--navy)" }}
                    >
                      <Initials name={member.name} />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display font-bold text-sm mb-1" style={{ color: "var(--navy)" }}>{member.name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{member.title}</p>
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
