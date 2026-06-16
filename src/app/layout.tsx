import type { Metadata } from "next";
import { Oxanium, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const oxanium = Oxanium({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "פולס ארנה | לייזר טאג לילדים, ימי הולדת וקבוצות",
  description:
    "מתחם לייזר טאג פרימיום לילדים, ימי הולדת, קבוצות ואירועים עם זירה ממוזגת, חבילות מפעילות וחוויית משחק immersive.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "פולס ארנה | לייזר טאג לילדים, ימי הולדת וקבוצות",
    description:
      "זירת לייזר טאג כהה, נוצצת ובטוחה עם חבילות יום הולדת, קבוצות ובתי ספר.",
    images: [
      {
        url: "/images/hero-laser-tag.png",
        width: 1790,
        height: 1006,
        alt: "ילדים משחקים לייזר טאג בזירה מוארת בניאון",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "פולס ארנה | לייזר טאג לילדים, ימי הולדת וקבוצות",
    description:
      "מסיבת יום הולדת או אירוע קבוצתי עם לייזר טאג פרימיום וזירה immersive.",
    images: ["/images/hero-laser-tag.png"],
  },
};

export const viewport = {
  themeColor: "#06070d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${oxanium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
