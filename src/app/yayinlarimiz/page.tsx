import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { articles } from "@/data/articles";
import { books } from "@/data/books";

export default function YayinlarimizPage() {
  return (
    <>
      <section
        className="pt-28 pb-16 md:pt-40 md:pb-24 relative"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Bilgi Birikimimiz</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Yayınlarımız</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Kurucu ortaklarımızın mesleki deneyim ve birikimlerinden yola çıkarak kaleme aldığı kitaplar ve makaleler.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Books */}
      <section className="py-14 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Akademik Miras</p>
            <h2 className="font-display text-3xl font-bold gold-line" style={{ color: "var(--navy)" }}>Kitaplarımız</h2>
          </AnimatedSection>
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
        </div>
      </section>

      {/* Articles */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>Düşünce Yazıları</p>
            <h2 className="font-display text-3xl font-bold gold-line" style={{ color: "var(--navy)" }}>Makalelerimiz</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {articles.map((article, i) => (
              <AnimatedSection key={article.slug} delay={(i % 6) * 0.08}>
                <Link href={`/yayinlarimiz/${article.slug}`} className="block h-full">
                  <div className="service-card bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4" style={{ color: "var(--gold)" }}>
                      {article.author} · {article.date}
                    </p>
                    <h3 className="font-display text-xl font-bold mb-3 md:mb-4 leading-tight" style={{ color: "var(--navy)" }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-6 flex-1">{article.excerpt}</p>
                    <span className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                      Devamını Oku <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
