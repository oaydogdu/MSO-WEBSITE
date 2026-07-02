import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const managers = [
  {
    name: "Mehmet Sami Özeren",
    title: "Kurucu Ortak",
    expertise: "Mali Müşavir & Bağımsız Denetçi · Yönetim Muhasebesi Uzmanı",
    badges: ["Kurucu Ortak", "Bağımsız Denetçi", "Yönetim Muhasebesi Uzmanı"],
  },
  {
    name: "Ali Aydoğdu",
    title: "Yönetici Ortak",
    expertise: "Mali Müşavir & Bağımsız Denetçi",
    bio: "1977 yılında Tokat'ın Erbaa ilçesinde dünyaya gelen Ali Aydoğdu, lise eğitimini İstanbul Bakırköy Ticaret Lisesi'nde, yükseköğrenimini ise Anadolu Üniversitesi'nde tamamlamıştır. Kariyeri boyunca sektörün öncü şirketleriyle stratejik çalışmalar yürüten Aydoğdu, 2 dönem İstanbul TÜRMOB Delegesi olarak görev yapmıştır.",
    badges: ["Yönetici Ortak", "Bağımsız Denetçi", "2x TÜRMOB Delegesi"],
  },
];

const team = [
  { name: "Hatice Akbaş", title: "Serbest Muhasebeci Mali Müşavir", photo: "/team/hatice.jpg" },
  { name: "Mustafa Zor", title: "Serbest Muhasebeci Mali Müşavir", photo: "/team/mustafa.jpg" },
  { name: "Ali Pınar", title: "Serbest Muhasebeci Mali Müşavir & Bağımsız Denetçi" },
  { name: "Ali Kemal Özdemir", title: "Muhasebe Uzmanı", photo: "/team/kemal.jpg" },
  { name: "Ceyda Güven", title: "Muhasebe Sorumlusu", photo: "/team/ceyda.jpg" },
  { name: "Beyza Arslan", title: "Muhasebe Sorumlusu", photo: "/team/beyza.jpg" },
  { name: "Tamer Turan", title: "Muhasebe Sorumlusu", photo: "/team/tamer.jpg" },
  { name: "Mert Aydoğdu", title: "IT Sorumlusu", photo: "/team/mert.jpg" },
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
        className="pt-40 pb-24"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>MSO Denetim</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Ekibimiz</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              11 kişilik uzman kadromuz ile işletmenizin her ihtiyacında profesyonel destek sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Managers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Liderlik</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Yöneticilerimiz</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {managers.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1}>
                <div className="team-card rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full">
                  <div className="h-64 flex items-center justify-center" style={{ background: "var(--navy)" }}>
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold border-2"
                      style={{ background: "rgba(201,168,76,0.15)", borderColor: "var(--gold)", color: "var(--gold)" }}
                    >
                      <Initials name={m.name} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-xl font-bold mb-1" style={{ color: "var(--navy)" }}>{m.name}</h3>
                    <p className="font-medium mb-1" style={{ color: "var(--gold)" }}>{m.title}</p>
                    <p className="text-gray-400 text-sm mb-4">{m.expertise}</p>
                    {m.bio && <p className="text-gray-500 text-sm leading-relaxed mb-6">{m.bio}</p>}
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Profesyoneller</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Uzman Kadromuz</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={(i % 6) * 0.07}>
                <div className="team-card bg-white rounded-xl p-6 shadow-sm flex items-center gap-5 border border-gray-100 h-full">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover object-top shrink-0 border-2"
                      style={{ borderColor: "rgba(201,168,76,0.35)" }}
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
