import { TrendingUp, BookOpen, Shield, BarChart3, Scale, Users, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    slug: "vergi-danismanligi",
    icon: TrendingUp,
    title: "Vergi Danışmanlığı",
    desc: "Mali yükümlülüklerinizi en doğru şekilde yerine getirmeniz için kapsamlı vergi danışmanlığı hizmetleri sunuyoruz.",
    items: ["Kurumlar Vergisi Danışmanlığı", "KDV Danışmanlığı", "Uluslararası Vergi Planlaması", "Transfer Fiyatlandırması", "Vergi Uyum Hizmetleri", "Vergi Davaları & İtiraz"],
    featured: true,
  },
  {
    slug: "muhasebe-diskaynak",
    icon: BookOpen,
    title: "Muhasebe & Dışkaynak",
    desc: "İşletmenizin finansal süreçlerini profesyonel kadromuzla etkin ve verimli şekilde yönetiyoruz.",
    items: ["Muhasebe Hizmetleri", "Bordro Yönetimi", "Mali Raporlama", "CFO Dışkaynak Hizmetleri"],
    featured: true,
  },
  {
    slug: "denetim-guvence",
    icon: Shield,
    title: "Denetim & Güvence",
    desc: "AKSİS Uluslararası Bağımsız Denetim A.Ş. ortaklığımız aracılığıyla bağımsız ve güvenilir denetim hizmetleri sunuyoruz.",
    items: ["Bağımsız Denetim", "İç Denetim", "Finansal Tablo Denetimi", "Uyum Denetimi", "SPK Denetimi"],
    partner: "AKSİS Uluslararası Bağımsız Denetim A.Ş. ortaklığı ile sunulmaktadır.",
    featured: false,
  },
  {
    slug: "finansal-danismanlik",
    icon: BarChart3,
    title: "Finansal Danışmanlık",
    desc: "Şirketinizin büyüme ve dönüşüm süreçlerinde stratejik finansal danışmanlık hizmetleri sağlıyoruz.",
    items: ["Şirket Birleşme & Satın Alma (M&A)", "Değerleme Hizmetleri", "Yeniden Yapılandırma", "Due Diligence"],
    featured: false,
  },
  {
    slug: "kurumsal-danismanlik",
    icon: Users,
    title: "Kurumsal Danışmanlık",
    desc: "İşletmenizin kurumsal yapısını güçlendirmek ve sürdürülebilir büyüme sağlamak için stratejik destek sunuyoruz.",
    items: ["Finansal Danışmanlık", "Risk Yönetimi", "Süreç & Verimlilik Danışmanlığı", "Stratejik Planlama", "Kurumsal Yönetim"],
    featured: false,
  },
  {
    slug: "hukuk-mevzuat-uyumu",
    icon: Scale,
    title: "Hukuk & Mevzuat Uyumu",
    desc: "Ticari faaliyetlerinizin yasal çerçevede yürütülmesi için hukuki danışmanlık ve mevzuat uyum hizmetleri sunuyoruz.",
    items: ["Ticaret Hukuku Danışmanlığı", "Mevzuat Uyum Hizmetleri", "Sözleşme Yönetimi"],
    featured: false,
  },
];

export default function HizmetlerimizPage() {
  return (
    <>
      <section
        className="pt-28 pb-14 md:pt-40 md:pb-24 relative"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Uzmanlık Alanlarımız</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Hizmetlerimiz</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              50 yılı aşkın deneyimimizle sunduğumuz kapsamlı finansal ve danışmanlık hizmetleri ile işletmenizin yanındayız.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Öne Çıkan Hizmetler</p>
            <h2 className="font-display text-3xl font-bold gold-line" style={{ color: "var(--navy)" }}>Ana Hizmet Alanlarımız</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 md:gap-8 md:mb-8">
            {services.filter(s => s.featured).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div id={s.slug} className="service-card bg-white rounded-2xl p-6 md:p-10 shadow-sm h-full scroll-mt-28">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-8" style={{ background: "var(--navy)" }}>
                    <s.icon size={28} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3 md:mb-4" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4 md:mb-8">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                        <ChevronRight size={14} style={{ color: "var(--gold)" }} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mb-8 mt-12 md:mb-16 md:mt-24">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Diğer Hizmetler</p>
            <h2 className="font-display text-3xl font-bold gold-line" style={{ color: "var(--navy)" }}>Tüm Hizmet Alanlarımız</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.filter(s => !s.featured).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div id={s.slug} className="service-card bg-white rounded-xl p-5 md:p-8 shadow-sm h-full scroll-mt-28">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 md:mb-6" style={{ background: "rgba(10,22,40,0.06)" }}>
                    <s.icon size={22} style={{ color: "var(--navy)" }} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 md:mb-3" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 md:mb-6">{s.desc}</p>
                  {s.partner && (
                    <p className="text-xs italic mb-4" style={{ color: "var(--gold)" }}>* {s.partner}</p>
                  )}
                  <ul className="space-y-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <ChevronRight size={12} style={{ color: "var(--gold)" }} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
