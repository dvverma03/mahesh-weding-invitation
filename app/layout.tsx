import type { Metadata, Viewport } from "next";
import { Mukta, Rozha_One, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { BRIDE, CITY, DATE_RANGE, GROOM } from "@/lib/wedding";

const rozha = Rozha_One({
  subsets: ["latin", "devanagari"],
  weight: "400",
  variable: "--font-rozha",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["latin", "devanagari"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-tiro",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mukta",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRIDE} संग ${GROOM} — शुभ विवाह निमंत्रण`,
  description: `${BRIDE} एवं ${GROOM} के शुभ विवाह में आप सादर आमंत्रित हैं — ${DATE_RANGE}, ${CITY}।`,
};

export const viewport: Viewport = {
  themeColor: "#1f0a24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${rozha.variable} ${tiro.variable} ${mukta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
