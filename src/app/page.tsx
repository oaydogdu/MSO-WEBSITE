import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Shield, TrendingUp, BookOpen, Scale, BarChart3, Users, Award, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import LogoMarquee from "@/components/LogoMarquee";
import { clients } from "@/data/clients";
import { articles } from "@/data/articles";

const services = [
  { icon: TrendingUp, title: "Vergi Danışmanlığı", desc: "Kurumlar vergisi, KDV, transfer fiyatlandırması ve vergi uyum hizmetleri ile mali yükümlülüklerinizi güvence altına alıyoruz.", href: "/hizmetlerimiz#vergi-danismanligi" },
  { icon: BookOpen, title: "Muhasebe & Dışkaynak", desc: "Muhasebe, bordro yönetimi, mali raporlama ve CFO dışkaynak hizmetleriyle işletmenizin finansal süreçlerini yönetiyoruz.", href: "/hizmetlerimiz#muhasebe-diskaynak" },
  { icon: Shield, title: "Denetim & Güvence", desc: "AKSİS Uluslararası Bağımsız Denetim A.Ş. ortaklığımız aracılığıyla bağımsız denetim, iç denetim ve SPK denetimi hizmetleri sunuyoruz.", href: "/hizmetlerimiz#denetim-guvence" },
  { icon: BarChart3, title: "Finansal Danışmanlık", desc: "Şirket birleşme & satın alma, değerleme, yeniden yapılandırma ve due diligence süreçlerinde yanınızdayız.", href: "/hizmetlerimiz#finansal-danismanlik" },
  { icon: Users, title: "Kurumsal Danışmanlık", desc: "Stratejik yönetim, risk yönetimi ve kurumsal yönetim alanlarında işletmenizin sürdürülebilir büyümesine katkı sağlıyoruz.", href: "/hizmetlerimiz#kurumsal-danismanlik" },
  { icon: Scale, title: "Hukuk & Mevzuat Uyumu", desc: "Ticaret hukuku danışmanlığı, mevzuat uyum hizmetleri ve sözleşme yönetimi alanlarında kapsamlı destek sağlıyoruz.", href: "/hizmetlerimiz#hukuk-mevzuat-uyumu" },
];

const stats = [
  { value: "1971", label: "Kuruluş Yılı" },
  { value: "50+", label: "Yıllık Deneyim" },
  { value: "11", label: "Uzman Kadro" },
  { value: "29+", label: "Hizmet Sektörü" },
];

const sectors = [
  "Kıymetli Madenler & Kuyumculuk",
  "Sağlık, Tıp & Medikal",
  "Ağır Sanayi & Enerji",
  "Gayrimenkul & İnşaat",
  "Teknoloji & Bilişim",
  "Uluslararası Lojistik",
];


export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#060d1a" }}>
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/>
              </pattern>
              <radialGradient id="glow1" cx="75%" cy="40%" r="50%">
                <stop offset="0%" stopColor="rgba(74,159,212,0.12)"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="glow2" cx="20%" cy="70%" r="40%">
                <stop offset="0%" stopColor="rgba(201,168,76,0.08)"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <rect width="100%" height="100%" fill="url(#glow1)"/>
            <rect width="100%" height="100%" fill="url(#glow2)"/>
          </svg>
          <div className="absolute" style={{ top: 0, right: "28%", width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.2) 40%, rgba(201,168,76,0.1) 70%, transparent)" }} />
          <div className="particle absolute rounded-full" style={{ width: 500, height: 500, top: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(74,159,212,0.07) 0%, transparent 70%)", animationDuration: "8s" }} />
          <div className="particle absolute rounded-full" style={{ width: 300, height: 300, bottom: "5%", left: "5%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", animationDuration: "6s", animationDelay: "2s" }} />
          <Image
            src="/logo-full.png"
            alt=""
            width={1600}
            height={897}
            unoptimized
            className="absolute select-none"
            style={{ top: "50%", left: "50%", width: "1600px", height: "auto", transform: "translate(-50%, -50%)", opacity: 0.04 }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-28 pb-20 relative z-10 w-full">
          <div className="animate-fadeInUp mb-8" style={{ opacity: 0, animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-dm)" }}>
                Muhasebe Sistem Organizasyon
              </span>
            </div>
          </div>

          {/* Display font headlines */}
          <div className="animate-fadeInUp mb-2" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <h1 className="font-display font-bold text-white leading-none" style={{ fontSize: "clamp(4rem, 9vw, 8.5rem)", letterSpacing: "-0.01em", fontStyle: "italic" }}>
              Rakamların Ötesinde,
            </h1>
          </div>
          <div className="animate-fadeInUp mb-10" style={{ opacity: 0, animationDelay: "0.35s" }}>
            <h1 className="font-display font-bold leading-none" style={{ fontSize: "clamp(4rem, 9vw, 8.5rem)", letterSpacing: "-0.01em", color: "var(--gold)" }}>
              Gerçek Değer.
            </h1>
          </div>

          <div className="animate-fadeInUp flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mb-12" style={{ opacity: 0, animationDelay: "0.5s" }}>
            <div className="w-16 h-px shrink-0 self-center md:self-end mb-2" style={{ background: "var(--gold)" }} />
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-dm)" }}>
              1971&apos;den bu yana mali müşavirlik, denetim ve vergi danışmanlığı alanlarında
              Türkiye genelinde güvenilir ve stratejik çözümler sunuyoruz.
            </p>
          </div>

          <div className="animate-fadeInUp flex flex-wrap items-center gap-4" style={{ opacity: 0, animationDelay: "0.65s" }}>
            <Link href="/hizmetlerimiz" className="flex items-center gap-3 px-8 py-4 text-xs font-bold text-white tracking-[0.15em] uppercase transition-all hover:translate-y-[-2px] hover:shadow-2xl" style={{ background: "var(--gold)" }}>
              Hizmetlerimiz <ArrowRight size={14} />
            </Link>
            <Link href="/iletisim" className="flex items-center gap-3 px-8 py-4 text-xs font-bold text-white tracking-[0.15em] uppercase border transition-all hover:bg-white/5" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              Bize Ulaşın
            </Link>
            <div className="ml-auto hidden lg:block text-right">
              <div className="font-display font-bold" style={{ fontSize: "3rem", color: "var(--gold)", opacity: 0.2, lineHeight: 1 }}>1971</div>
              <div className="text-white/20 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-dm)" }}>Kuruluş Yılı</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-white/20" />
          <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Keşfet</span>
        </div>
        <div className="absolute bottom-10 right-8 hidden lg:block">
          <p className="text-white/15 text-xs tracking-widest uppercase text-right" style={{ fontFamily: "var(--font-dm)" }}>
            MSO Denetim & S.M.M.M<br />İstanbul, Türkiye
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-8 md:py-16 border-b" style={{ background: "var(--navy)", borderColor: "rgba(201,168,76,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-8 px-6">
                <div className="font-display font-bold mb-2" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--gold)", lineHeight: 1 }}>
                  <CountUp value={stat.value} />
                </div>
                <div className="text-white/40 text-xs tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section className="py-14 md:py-28 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <AnimatedSection>
            <p className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Referanslarımız</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold gold-line inline-block" style={{ color: "var(--navy)" }}>
              Güvenle Hizmet Verdiğimiz Kurumların Bazıları
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <LogoMarquee clients={clients} />
        </AnimatedSection>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-14 md:py-28" style={{ background: "#f8f9fa" }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-20 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Hizmetlerimiz</p>
              <h2 className="font-display font-bold leading-tight gold-line" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--navy)" }}>
                Kapsamlı<br />Finansal Çözümler
              </h2>
            </div>
            <Link href="/hizmetlerimiz" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase transition-colors shrink-0" style={{ color: "var(--navy)" }}>
              Tüm Hizmetler <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="service-card bg-white p-4 md:p-10 shadow-sm border border-gray-100 h-full">
                  <div className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-8 border" style={{ borderColor: "rgba(10,22,40,0.1)" }}>
                    <s.icon size={16} className="md:hidden" style={{ color: "var(--navy)" }} />
                    <s.icon size={20} className="hidden md:block" style={{ color: "var(--navy)" }} />
                  </div>
                  <h3 className="font-display font-semibold text-sm md:text-xl mb-2 md:mb-4 leading-snug" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <p className="hidden md:block text-gray-400 text-sm leading-relaxed mb-8">{s.desc}</p>
                  <Link href={s.href} className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors" style={{ color: "var(--gold)" }}>
                    Detaylı Bilgi <ArrowRight size={12} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-14 md:py-28" style={{ background: "var(--navy)" }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 lg:mb-6" style={{ color: "var(--gold)" }}>Hakkımızda</p>
              <h2 className="font-display font-bold text-white mb-4 lg:mb-8 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                50 Yılı Aşkın<br />Mesleki Birikim
              </h2>
              <p className="text-white/50 leading-relaxed mb-3 lg:mb-6 text-lg">
                1971 yılından bu yana edindiğimiz derin uzmanlık ve güven ile Türkiye&apos;nin önde gelen mali müşavirlik firmalarından biri olma yolculuğumuzu kararlılıkla sürdürüyoruz.
              </p>
              <p className="text-white/40 leading-relaxed mb-5 lg:mb-10 text-sm">
                TÜRMOB üyesi, bağımsız denetim yetkisine sahip uzman kadromuzla küçük işletmelerden büyük kurumlara kadar her ölçekte işletmeye hizmet veriyoruz.
              </p>
              <Link href="/hakkimizda" className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                Daha Fazla Bilgi <ArrowRight size={12} />
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right" className="min-w-0">
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {[
                  { icon: Award, title: "TÜRMOB Üyesi", desc: "Serbest Muhasebeciler Mali Müşavirler Odası onaylı" },
                  { icon: Shield, title: "Bağımsız Denetçi", desc: "Her iki ortağımız denetim yetkisine sahip" },
                  { icon: Users, title: "11 Uzman", desc: "Alanında deneyimli profesyonel kadro" },
                  { icon: MapPin, title: "Türkiye Geneli", desc: "Tüm Türkiye'de kesintisiz hizmet" },
                ].map((item) => (
                  <div key={item.title} className="p-4 lg:p-7" style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.02)" }}>
                    <item.icon size={20} className="mb-2 lg:mb-4" style={{ color: "var(--gold)" }} />
                    <h4 className="text-white font-semibold text-sm mb-1 lg:mb-2">{item.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SECTORS ─── */}
      <section className="py-14 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-20 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Sektörler</p>
              <h2 className="font-display font-bold leading-tight gold-line" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--navy)" }}>
                Hizmet Verdiğimiz<br />Sektörler
              </h2>
            </div>
            <Link href="/sektorler" className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase shrink-0" style={{ color: "var(--gold)" }}>
              Tüm Sektörler <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(10,22,40,0.06)" }}>
            {sectors.map((s, i) => (
              <AnimatedSection key={s} delay={i * 0.07}>
                <div className="group flex items-center gap-6 p-8 bg-white transition-all duration-300 hover:bg-[var(--navy)] hover:shadow-xl hover:z-10 relative">
                  <span className="text-3xl font-display font-bold shrink-0 w-10 transition-colors duration-300 text-[rgba(10,22,40,0.08)] group-hover:text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-sm transition-colors duration-300 text-[var(--navy)] group-hover:text-white">{s}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── E-MUKELLEF ─── */}
      <section className="py-14 md:py-28 relative overflow-hidden" style={{ background: "#060d1a" }}>
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full"><defs><pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid2)"/></svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
        </div>
        <AnimatedSection className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-6" style={{ color: "var(--gold)" }}>Dijital Hizmetler</p>
            <h2 className="font-display font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              E-Mükellef<br />Platformu
            </h2>
            <p className="text-white/40 leading-relaxed mb-12 text-lg max-w-xl mx-auto">
              Mali süreçlerinizi dijital ortamda kolayca yönetin. Belgelerinize, bildirimlerinize ve mali tablolarınıza her yerden ulaşın.
            </p>
            <a href="https://msonet.emukellef.org/emukellef/" target="_blank" rel="noopener noreferrer" className="emukellef-btn inline-flex items-center gap-3 px-12 py-5 text-white font-bold text-xs tracking-[0.3em] uppercase">
              <ExternalLink size={14} />
              E-Mükellef&apos;e Giriş Yapın
            </a>
            <p className="text-white/30 text-sm mt-6">
              Şifrenizi unuttuysanız veya henüz bir hesabınız yoksa,{" "}
              <Link href="/iletisim" className="underline hover:text-white transition-colors" style={{ color: "var(--gold)" }}>
                bizimle iletişime geçin
              </Link>.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── PUBLICATIONS TEASER ─── */}
      <section className="py-12 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Bilgi Birikimimiz</p>
              <h2 className="font-display font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)" }}>
                Yayınlarımız
              </h2>
            </div>
            <Link
              href="/yayinlarimiz"
              className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--navy)" }}
            >
              Tümünü Gör <ArrowRight size={12} />
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {articles.slice(0, 3).map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <Link href={`/yayinlarimiz/${article.slug}`} className="service-card group block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                    {article.author} · {article.date}
                  </p>
                  <h3 className="font-display text-lg font-bold mb-3 leading-snug transition-colors group-hover:text-[var(--gold)]" style={{ color: "var(--navy)" }}>
                    {article.title}
                  </h3>
                  <p className="hidden md:block text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--navy)" }}>
                    Devamını Oku <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIBRARY ─── */}
      <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
        <Image
          src="/miras/kutuphane.jpg"
          alt="Mehmet Sami Özeren Kütüphanesi"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(6,14,28,0.95) 0%, rgba(6,14,28,0.55) 50%, rgba(6,14,28,0.15) 100%)" }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-14 w-full">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Kurucu Mirası</p>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              Mehmet Sami Özeren Kütüphanesi
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl">
              Kurucumuzun yıllar içinde bir araya getirdiği kişisel kütüphanesi, MSO&apos;nun bilgiye ve deneyime verdiği değerin en somut yansımasıdır.
            </p>
            <Link
              href="/miras-vizyon"
              className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Miras &amp; Vizyonu Keşfedin <ArrowRight size={12} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-14 md:py-28" style={{ background: "#f8f9fa" }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>İletişim</p>
              <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--navy)" }}>
                Bugün Bir<br />Adım Atın
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/iletisim" className="flex items-center gap-3 px-10 py-5 text-xs font-bold text-white tracking-[0.15em] uppercase transition-all hover:translate-y-[-2px]" style={{ background: "var(--navy)" }}>
                İletişime Geçin <ArrowRight size={16} />
              </Link>
              <a href="tel:+902125336969" className="flex items-center gap-3 px-10 py-5 text-xs font-bold tracking-[0.15em] uppercase border-2 transition-all" style={{ borderColor: "var(--navy)", color: "var(--navy)" }}>
                +90 212 533 69 69
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
