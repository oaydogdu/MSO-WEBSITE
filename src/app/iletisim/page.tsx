import { MapPin, Phone, PhoneCall, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function IletisimPage() {
  return (
    <>
      <section
        className="pt-40 pb-24"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>MSO Denetim</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">İletişim</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Uzman ekibimizle görüşmek ve işletmenize özel çözümler için bizimle iletişime geçin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>İletişim Bilgileri</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(10,22,40,0.06)" }}>
                      <MapPin size={18} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>Adres</p>
                      <p className="text-gray-500 text-sm leading-relaxed">Nef12 Merter Ofis B Blok<br />No 33 Kat 4, Merter/İstanbul</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(10,22,40,0.06)" }}>
                      <Phone size={18} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>Telefon</p>
                      <a href="tel:+902125336969" className="text-gray-500 text-sm hover:text-navy transition-colors">+90 212 533 69 69</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(10,22,40,0.06)" }}>
                      <PhoneCall size={18} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>Faks</p>
                      <p className="text-gray-500 text-sm">+90 212 533 66 30</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(10,22,40,0.06)" }}>
                      <Mail size={18} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>E-Posta</p>
                      <a href="mailto:aliaydogdu@msonet.org" className="text-gray-500 text-sm hover:text-navy transition-colors">aliaydogdu@msonet.org</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(10,22,40,0.06)" }}>
                      <Clock size={18} style={{ color: "var(--navy)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "var(--navy)" }}>Çalışma Saatleri</p>
                      <p className="text-gray-500 text-sm">Pazartesi – Cuma</p>
                      <p className="text-gray-500 text-sm">08:30 – 18:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>Ofis Konumumuz</p>
              <div className="rounded-2xl overflow-hidden h-[420px] lg:h-full" style={{ border: "1px solid rgba(10,22,40,0.08)" }}>
                <iframe
                  src="https://www.google.com/maps?q=Nef12+Merter+Ofis+B+Blok+No+33+Kat+4+Merter+Istanbul&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MSO Denetim Ofis Konumu"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
