import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-widest" style={{ color: "var(--gold)" }}>MSO</span>
              <p className="text-xs tracking-widest text-white/50 uppercase mt-1">Denetim &amp; S.M.M.M</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              MSO Denetim ve Serbest Muhasebeci Mali Müşavirlik Anonim Şirketi
            </p>
            <p className="text-white/40 text-xs mt-4">1971&apos;den bu yana güveninizin adresi.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {["Vergi Danışmanlığı", "Muhasebe & Dışkaynak", "Denetim & Güvence", "Finansal Danışmanlık", "Hukuk & Mevzuat"].map(s => (
                <li key={s}>
                  <Link href="/hizmetlerimiz" className="text-white/60 hover:text-white text-sm transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>Kurumsal</h4>
            <ul className="space-y-3">
              {[
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/ekibimiz", label: "Ekibimiz" },
                { href: "/miras-vizyon", label: "Miras & Vizyon" },
                { href: "/sektorler", label: "Sektörler" },
                { href: "/iletisim", label: "İletişim" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                Nef12 Merter Ofis B Blok No 33 Kat 4, Merter/İstanbul
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="shrink-0" style={{ color: "var(--gold)" }} />
                +90 212 533 69 69
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="shrink-0" style={{ color: "var(--gold)" }} />
                aliaydogdu@msonet.org
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock size={16} className="shrink-0" style={{ color: "var(--gold)" }} />
                Pzt–Cuma: 08:30–18:30
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} MSO Denetim ve S.M.M.M A.Ş. Tüm hakları saklıdır.
          </p>
          <p className="text-white/30 text-xs">1971&apos;den Bu Yana · Türkiye Genelinde Hizmet</p>
        </div>
      </div>
    </footer>
  );
}
