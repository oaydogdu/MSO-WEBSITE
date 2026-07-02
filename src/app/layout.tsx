import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MSO Denetim & S.M.M.M | Rakamların Ötesinde, Gerçek Değer.",
  description: "1971'den bu yana mali müşavirlik, bağımsız denetim ve vergi danışmanlığı alanlarında Türkiye genelinde hizmet veren MSO Denetim ve Serbest Muhasebeci Mali Müşavirlik A.Ş.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
