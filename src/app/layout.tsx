import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "OUTRAGE LASER TAG | יום הולדת שילדים לא ישכחו",
  description:
    "OUTRAGE LASER TAG עם חוויית אקשן מטורפת, חבילות לימי הולדת, ציוד מתקדם ומדריכים מקצועיים.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OUTRAGE LASER TAG | יום הולדת שילדים לא ישכחו",
    description:
      "אנחנו מגיעים עד אליך עם זירת קרב לייזר טאג מקצועית, ציוד מתקדם ומדריכים.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2mibrdyCSpgMwcPlPNw7UeLosXl3F7C2fr6qdyVcTUFD4-yEBUpx5NLuqKm0Ohdb4xp82etzcybn2Y3O7_vRUVyZsMuY4DAYr7UUthulo_3w_6f6Vp8ckJwdYStuKIA1cG9rtvwM0zouSXqBquYC5L4hWwtTqh2pdsxs4RAigJHmm128knfLW0C6Oiyo5ohsg5uDtTpa2ev1C9dB2NaGbc8EvC2ipob2DiuDr28YP0rYeOzgd0myhuvZSwmDF0Q8OnphppOAFZM",
        width: 1600,
        height: 1067,
        alt: "ילדים משחקים לייזר טאג",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUTRAGE LASER TAG | יום הולדת שילדים לא ישכחו",
    description:
      "אנחנו מגיעים עד אליך עם זירת קרב לייזר טאג מקצועית וציוד מתקדם.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2mibrdyCSpgMwcPlPNw7UeLosXl3F7C2fr6qdyVcTUFD4-yEBUpx5NLuqKm0Ohdb4xp82etzcybn2Y3O7_vRUVyZsMuY4DAYr7UUthulo_3w_6f6Vp8ckJwdYStuKIA1cG9rtvwM0zouSXqBquYC5L4hWwtTqh2pdsxs4RAigJHmm128knfLW0C6Oiyo5ohsg5uDtTpa2ev1C9dB2NaGbc8EvC2ipob2DiuDr28YP0rYeOzgd0myhuvZSwmDF0Q8OnphppOAFZM",
    ],
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
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
