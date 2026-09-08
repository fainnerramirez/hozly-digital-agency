import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HOZLY — Marketing, Publicidad y Tecnología",
  description:
    "Transformamos ideas en estrategias, experiencias digitales y campañas que generan resultados reales. Agencia digital premium de innovación, diseño y desarrollo.",
  keywords: [
    "HOZLY",
    "Agencia Digital",
    "Marketing Digital",
    "Publicidad",
    "Desarrollo Web",
    "Branding",
    "Diseño UI/UX",
    "Tecnología",
    "Estrategia Digital",
  ],
  authors: [{ name: "HOZLY Agencia Digital" }],
  creator: "HOZLY",
  publisher: "HOZLY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HOZLY — Marketing, Publicidad y Tecnología",
    description:
      "Transformamos ideas en estrategias, experiencias digitales y campañas que generan resultados reales.",
    url: "https://hozly.agency",
    siteName: "HOZLY Agencia Digital",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOZLY — Marketing, Publicidad y Tecnología",
    description:
      "Transformamos ideas en estrategias, experiencias digitales y campañas que generan resultados reales.",
    creator: "@hozlyagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${poppins.variable} scroll-smooth dark`}
    >
      <body className="bg-[#0A0A0A] text-white font-body selection:bg-[#D4AF37] selection:text-[#0A0A0A] min-h-screen flex flex-col antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
