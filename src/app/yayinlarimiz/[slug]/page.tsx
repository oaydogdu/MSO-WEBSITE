import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function MakalePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <>
      <section
        className="pt-28 pb-14 md:pt-40 md:pb-20 relative"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/yayinlarimiz"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6 md:mb-8"
              style={{ color: "var(--gold)" }}
            >
              <ArrowLeft size={12} /> Tüm Yayınlar
            </Link>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
              {article.author} · {article.authorTitle} · {article.date}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-gray-600 leading-relaxed text-lg">
            {article.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="font-display text-2xl md:text-3xl font-bold mt-8 md:mt-12 mb-5 first:mt-0"
                    style={{ color: "var(--navy)" }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "subheading") {
                return (
                  <h3
                    key={i}
                    className="font-display text-xl font-bold mt-8 mb-3"
                    style={{ color: "var(--navy)" }}
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 mb-5">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mb-5">
                  {block.text}
                </p>
              );
            })}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
