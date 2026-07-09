"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/miras-vizyon", label: "Miras & Vizyon" },
  { href: "/yayinlarimiz", label: "Yayınlarımız" },
  { href: "/iletisim", label: "İletişim" },
];

function MSOLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0 group">
      <span
        className="font-black leading-none"
        style={{ color: "var(--gold)", fontSize: "28px", letterSpacing: "0.02em" }}
      >
        MSO
      </span>
      <span className="w-px h-6 shrink-0" style={{ background: "rgba(201,168,76,0.3)" }} />
      <span className="text-[11px] tracking-[0.15em] text-white/50 uppercase whitespace-nowrap">
        Denetim &amp; S.M.M.M
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,22,40,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between" style={{ height: "88px" }}>
        <MSOLogo />

        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-white/75 hover:text-white text-sm font-medium tracking-wide transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <a
            href="https://msonet.emukellef.org/emukellef/"
            target="_blank"
            rel="noopener noreferrer"
            className="emukellef-btn flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold text-white tracking-widest uppercase whitespace-nowrap"
          >
            <ExternalLink size={12} />
            E-Mükellef Girişi
          </a>
        </div>

        <button className="xl:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ background: "var(--navy)" }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white py-3 text-sm font-medium border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://msonet.emukellef.org/emukellef/"
              target="_blank"
              rel="noopener noreferrer"
              className="emukellef-btn flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-bold text-white mt-2 tracking-widest uppercase"
            >
              <ExternalLink size={12} />
              E-Mükellef Girişi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
