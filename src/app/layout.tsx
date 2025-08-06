// src/app/layout.tsx
import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha Charcoal International | Premium Indonesian Charcoal & Biomass",
  description:
    "Alpha Charcoal International: sustainably sourced charcoal & biomass from Kalimantan, Indonesia.",
  keywords: [
    // 🇮🇩 Indonesian
    "arang kokas premium",
    "ekspor arang Indonesia",
    "arang kalimantan berkualitas",
    "produsen arang Kalimantan",
    "arang serbuk sawdust charcoal",
    "arang briket terbaik",
    "arang industri ramah lingkungan",
    "pasokan arang untuk ekspor",
    "supplier arang biomassa",
    "jual arang bakar eksport",

    // 🇬🇧 English
    "premium Indonesian charcoal",
    "Kalimantan charcoal exporter",
    "sustainable biomass supplier",
    "sawdust charcoal briquettes",
    "bulk charcoal for export",
    "eco-friendly charcoal Indonesia",
    "biomass energy products",
    "Indonesian charcoal manufacturer",
    "high-calorific charcoal",
    "global charcoal delivery",

    // 🇸🇦 Arabic
    "فحم إندونيسي فاخر",
    "تصدير فحم كاليمانتان",
    "مورّد نشا الخشب",
    "بركيت فحم نشا الخشب",
    "فحم صديق للبيئة",
    "فحم صناعي عالي الجودة",
    "شركة فحم بإندونيسيا",
    "فحم للتصدير بكميات كبيرة",
    "فحم كتلة",
    "منتجات الكتلة الحيوية",
  ],
  icons: {
    icon: "/alpha-logo.png",      // standard favicon (browsers will auto‐resize)
    shortcut: "/alpha-logo.png",  // modern browsers’ shortcut icon
    apple: "/alpha-logo.png",     // for iOS home‐screen touch icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F7F3EF]">
      <body className="antialiased bg-[#F7F3EF]">
        <Navbar />
        <main className="pt-[64px]">{children}</main>
      </body>
    </html>
  );
}
