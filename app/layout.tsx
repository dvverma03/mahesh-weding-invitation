import type { Metadata, Viewport } from "next";
import { Mukta, Rozha_One, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { BRIDE, CITY, COUPLE, DATE_RANGE, GROOM } from "@/lib/wedding";

const rozha = Rozha_One({
  subsets: ["latin"],
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
  title: `${COUPLE} — Wedding Invitation`,
  description: `Join us to celebrate the wedding of ${BRIDE} and ${GROOM}, ${DATE_RANGE} in ${CITY}.`,
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
      lang="en"
      className={`${rozha.variable} ${tiro.variable} ${mukta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
