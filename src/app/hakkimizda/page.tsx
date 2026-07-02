import { Award, Shield, Users, MapPin, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const credentials = [
  { title: "TÜRMOB Üyeliği", desc: "Türkiye Serbest Muhasebeciler Mali Müşavirler ve Yeminli Mali Müşavirler Odaları Birliği üyesiyiz." },
  { title: "Bağımsız Denetim Yetkisi", desc: "Her iki kurucu ortağımız bağımsız denetim yetkisine sahip olup alanında lider denetim hizmetleri sunmaktadır." },
  { title: "Muhasebe Uzmanlığı Sertifikası", desc: "Türkiye Muhasebe Uzmanları Derneği onaylı muhasebe uzmanlığı belgesine sahibiz." },
  { title: "Aksis Denetim Ortaklığı", desc: "Denetim hizmetlerini alanında uzman Aksis Denetim ortaklığımız aracılığıyla sunmaktayız." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section
        className="pt-40 pb-24 relative"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>MSO Denetim</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Hakkımızda</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              1971&apos;den bu yana güvenin, uzmanlığın ve dürüstlüğün simgesi olarak Türkiye genelinde hizmet veriyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Tarihçemiz</p>
              <h2 className="font-display text-4xl font-bold mb-8 gold-line" style={{ color: "var(--navy)" }}>Köklü Bir Geçmiş,<br />Güçlü Bir Gelecek</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                1971 yılında kurulan MSO – ÖZEREN Müşavirlik, kuruluşundan bu yana konularında yetkinliklerini kanıtlamış çözüm ortaklarının katılımını sağlayarak mali müşavirlik alanında hizmet vermektedir.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Yarım asrı aşan deneyimimiz boyunca binlerce işletmenin yanında yer alarak onların mali sorumluluklarını yasalar çerçevesinde en doğru şekilde yerine getirmelerine destek olduk.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Bugün MSO Denetim ve Serbest Muhasebeci Mali Müşavirlik Anonim Şirketi çatısı altında, 11 kişilik uzman kadromuz ve Aksis Denetim ortaklığımızla Türkiye genelinde 29&apos;dan fazla sektörde hizmet vermeye devam ediyoruz.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="grid grid-cols-2 gap-6">
              {[
                { value: "1971", label: "Kuruluş Yılı", icon: Award },
                { value: "50+", label: "Yıl Deneyim", icon: Shield },
                { value: "11", label: "Uzman Çalışan", icon: Users },
                { value: "29+", label: "Hizmet Sektörü", icon: MapPin },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-8 text-center" style={{ background: "var(--navy)" }}>
                  <item.icon size={24} className="mx-auto mb-4" style={{ color: "var(--gold)" }} />
                  <div className="font-display text-3xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-white/50 text-xs tracking-wide uppercase">{item.label}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Misyonumuz</p>
              <div className="w-14 h-0.5 mb-8" style={{ background: "var(--gold)" }} />
              <p className="text-white/70 leading-relaxed text-lg">
                Hizmet verdiğimiz işletmelerin mali yükümlülüklerini yasal çerçevede eksiksiz ve zamanında yerine getirmelerini sağlamak; bu süreçte onları doğru bilgi ve bilinçle desteklemek temel önceliğimizdir.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                Küçük ve orta ölçekli işletmelerden büyük ve kurumsal yapılara kadar geniş bir müşteri portföyüne yönetim, finans ve strateji alanlarında kapsamlı danışmanlık hizmetleri sunarak işletmelerin sürdürülebilir büyümelerine ve verimliliğin artırılmasına katkı sağlamaktayız. Mükelleflerimizin haklarını en geniş çerçevede korumak, risklerini minimize etmek ve tüm mali sorumluluklarını güvenle yerine getirmelerini sağlayarak onların vazgeçilmez stratejik ortağı olmak en büyük hedefimizdir.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Vizyonumuz</p>
              <div className="w-14 h-0.5 mb-8" style={{ background: "var(--gold)" }} />
              <p className="text-white/70 leading-relaxed text-lg">
                Mesleğimizi ileriye taşıyan öncüler arasında yer alarak, sektörde özgün bir ekol oluşturmak ve sürdürülebilir bir mesleki miras bırakmaktır.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Sertifikalar & Üyelikler</p>
            <h2 className="font-display text-4xl font-bold gold-line" style={{ color: "var(--navy)" }}>Mesleki Yetkinliklerimiz</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm flex items-start gap-6 h-full">
                  <CheckCircle size={24} className="shrink-0 mt-1" style={{ color: "var(--gold)" }} />
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--navy)" }}>{c.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
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
