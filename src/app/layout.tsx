import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildPageMetadata } from "@/lib/metadata";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: BUSINESS.name,
    description: BUSINESS.supporting,
    path: "/",
  }),
  title: {
    default: `${BUSINESS.name} | Websites for local businesses`,
    template: `%s | ${BUSINESS.name}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  url: SITE_URL,
  email: BUSINESS.email,
  telephone: BUSINESS.phoneDisplay,
  description: BUSINESS.supporting,
  areaServed: "GB",
  founder: {
    "@type": "Person",
    name: BUSINESS.founder,
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
