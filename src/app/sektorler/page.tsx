import { ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const sectors = [
  {
    no: "01",
    title: "Kıymetli Madenler ve Kuyumculuk Endüstrisi",
    items: ["Kıymetli Madenler Üretim & Ticareti", "Sarraflık ve Kuyumculuk Sanayi"],
  },
  {
    no: "02",
    title: "Sağlık, Tıp ve Medikal Teknolojileri",
    items: ["Sağlık Kurumları & Klinik İşletmeciliği", "Doktorlar, Uzman Hekimler ve Medikal Hizmetler", "İlaç Sanayi ve Eczacılık Hizmetleri"],
  },
  {
    no: "03",
    title: "Ağır Sanayi, Enerji ve Altyapı Yönetimi",
    items: ["Endüstriyel İmalat & Ağır Sanayi", "Demir-Çelik ve Metalurji Sanayi", "Enerji, Petrol ve Akaryakıt Sektörü"],
  },
  {
    no: "04",
    title: "Tekstil, Hazır Giyim ve Moda Endüstrisi",
    items: ["Tekstil Üretimi, İhracatı ve Hazır Giyim Endüstrisi"],
  },
  {
    no: "05",
    title: "Endüstriyel Tarım, Gıda ve Hayvancılık",
    items: ["Gıda Sanayi, Üretim & Tedarik Zinciri Yönetimi", "Endüstriyel Tarım ve Sürdürülebilir Tarım Teknolojileri"],
  },
  {
    no: "06",
    title: "Gayrimenkul, İnşaat ve Mimari Tasarım",
    items: ["Gayrimenkul Geliştirme, Yatırım & İnşaat", "Mimarlık, Mühendislik ve Planlama Hizmetleri"],
  },
  {
    no: "07",
    title: "Kurumsal Danışmanlık, Hukuk ve Strateji",
    items: ["Stratejik Yönetim & Kurumsal Danışmanlık", "Hukuk, Avukatlık ve Hukuki Danışmanlık Hizmetleri", "Varlık Değerleme & Ekspertiz Hizmetleri"],
  },
  {
    no: "08",
    title: "Teknoloji, Bilişim ve Dijital Dönüşüm",
    items: ["Bilişim Teknolojileri, Yazılım & Yapay Zeka Çözümleri", "İleri Teknoloji ve Dijital Altyapı Hizmetleri"],
  },
  {
    no: "09",
    title: "Uluslararası Lojistik, Taşımacılık ve Dış Ticaret",
    items: ["Tedarik Zinciri Yönetimi, Ulaşım & Lojistik", "Deniz Taşımacılığı ve Deniz Ticareti", "Gümrük Müşavirliği & Dış Ticaret Operasyonları"],
  },
  {
    no: "10",
    title: "Otomotiv ve Mobilite Endüstrisi",
    items: ["Otomotiv Sanayi, Distribütörlük & Araç Ticareti"],
  },
  {
    no: "11",
    title: "Perakende, Ticaret ve Hizmet Sektörü",
    items: ["Perakende Ticaret & Hızlı Tüketim Ürünleri (FMCG)", "Dayanıklı Tüketim Malları & Elektrikli Ev Aletleri", "Kozmetik ve Kişisel Bakım Endüstrisi", "Turizm, Otelcilik ve Konaklama Yönetimi", "Gastronomi ve Yiyecek/İçecek (Horeca) İşletmeciliği"],
  },
  {
    no: "12",
    title: "Sivil Toplum Kuruluşları ve Kooperatifler",
    items: ["Vakıf, Dernek ve Sivil Toplum Kuruluşları (STK)", "Tarımsal ve Ticari Kooperatif Yönetimleri"],
  },
];

export default function SektorlerPage() {
  return (
    <>
      <section
        className="pt-40 pb-24 relative"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>MSO Denetim</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Hizmet Verdiğimiz Sektörler</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              29&apos;dan fazla alt sektörde edindiğimiz derin sektörel bilgi ve deneyimle işletmenizin ihtiyaçlarını tam olarak anlıyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, i) => (
              <AnimatedSection key={sector.no} delay={(i % 4) * 0.08}>
                <div
                  className="rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 h-full"
                  style={{ background: "#fafafa" }}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <span className="font-display text-4xl font-bold shrink-0" style={{ color: "rgba(10,22,40,0.08)", lineHeight: 1 }}>{sector.no}</span>
                    <h3 className="font-display text-lg font-bold leading-tight" style={{ color: "var(--navy)" }}>{sector.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {sector.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
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
