import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChromeGate } from "@/components/ChromeGate";
import { site } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// Metadata base del sitio. `metadataBase` permite que las URLs relativas
// (canonical, og:image) se resuelvan automáticamente contra el dominio.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="flex min-h-screen flex-col">
        <ChromeGate header={<Header />} footer={<Footer />}>
          {children}
        </ChromeGate>
      </body>
    </html>
  );
}
