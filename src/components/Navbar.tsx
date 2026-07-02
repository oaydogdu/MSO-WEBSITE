"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/miras-vizyon", label: "Miras & Vizyon" },
  { href: "/iletisim", label: "İletişim" },
];

function MSOLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Icon Mark */}
      <div className="relative w-10 h-10 shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top-left arrow */}
          <path d="M18 6L6 6L6 18" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L14 14" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Top-right arrow */}
          <path d="M22 6L34 6L34 18" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M34 6L26 14" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Bottom-left arrow */}
          <path d="M6 22L6 34L18 34" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 34L14 26" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Bottom-right arrow */}
          <path d="M34 22L34 34L22 34" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M34 34L26 26" stroke="#4A9FD4" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="text-2xl font-black tracking-[0.12em] transition-colors"
          style={{ color: "var(--gold)", letterSpacing: "0.15em" }}
        >
          MSO
        </span>
        <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase mt-0.5">
          Denetim &amp; S.M.M.M
        </span>
      </div>
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
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-22" style={{ height: "80px" }}>
        <MSOLogo />

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-white/75 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.emukellef.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="emukellef-btn flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold text-white tracking-widest uppercase"
          >
            <ExternalLink size={12} />
            E-Mükellef Girişi
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ background: "var(--navy)" }}>
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white py-2 text-sm font-medium border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.emukellef.com.tr"
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
