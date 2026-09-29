import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalModalProvider from "@/components/GlobalModalProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AYUKAL | Where Ancient Wisdom Supports Modern Living",
    template: "%s | AYUKAL Ayurvedic Wellness",
  },
  description:
    "AYUKAL brings authentic Ayurvedic-inspired wellness into modern everyday living. Explore pure Ashwagandha, Moringa, and Vitality Booster formulations.",
  keywords: [
    "AYUKAL",
    "Ayurveda",
    "Organic Wellness",
    "Ashwagandha Powder",
    "Moringa Tablets",
    "Vitality Booster",
    "Indian Wellness Brand",
  ],
  authors: [{ name: "AYUKAL Wellness" }],
  openGraph: {
    title: "AYUKAL — Ancient Wisdom for Modern Living",
    description:
      "Premium Ayurvedic botanicals and organic wellness formulations for everyday vitality.",
    siteName: "AYUKAL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1C201D] font-sans">
        <GlobalModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </GlobalModalProvider>
      </body>
    </html>
  );
}
