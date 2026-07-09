import type { Metadata, Viewport } from "next";
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

const title = "MSO Denetim & S.M.M.M | Rakamların Ötesinde, Gerçek Değer.";
const description = "1971'den bu yana mali müşavirlik, bağımsız denetim ve vergi danışmanlığı alanlarında Türkiye genelinde hizmet veren MSO Denetim ve Serbest Muhasebeci Mali Müşavirlik A.Ş.";

export const metadata: Metadata = {
  metadataBase: new URL("https://msodenetim.com.tr"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "tr_TR",
    type: "website",
    images: ["/logo-full.png"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo-full.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "MSO Denetim ve Serbest Muhasebeci Mali Müşavirlik A.Ş.",
  alternateName: "MSO Denetim",
  url: "https://msodenetim.com.tr",
  logo: "https://msodenetim.com.tr/logo-full.png",
  image: "https://msodenetim.com.tr/logo-full.png",
  telephone: "+902125336969",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nef12 Merter Ofis B Blok No:33 Kat:4",
    addressLocality: "Zeytinburnu",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  foundingDate: "1971",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:30",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm), sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
