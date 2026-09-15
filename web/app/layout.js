import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteInfo } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: {
    template: `%s | ${siteInfo.name}`,
    default: siteInfo.name,
  },
  description: siteInfo.tagline,
};

export default function RootLayout({ children }) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness", "ProfessionalService"],
        "name": siteInfo.name,
        "image": "https://soulcare.example.com/images/monika-portrait.png",
        "logo": "https://soulcare.example.com/images/logo_soulcare.jpeg",
        "@id": "https://soulcare.example.com/#organization",
        "url": "https://soulcare.example.com/",
        "email": "info@soulcarebymonika.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "addressCountry": "IN"
        },
        "description": siteInfo.tagline
      },
      {
        "@type": "Person",
        "@id": "https://soulcare.example.com/#monika",
        "name": "Monika Arora",
        "jobTitle": "Counselling Psychologist",
        "url": "https://soulcare.example.com/about",
        "image": "https://soulcare.example.com/images/monika-portrait.png",
        "sameAs": [
          siteInfo.instagram
        ],
        "worksFor": {
          "@id": "https://soulcare.example.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <head>
        <SchemaMarkup schema={globalSchema} />
      </head>
      <body className="min-h-full flex flex-col font-body">
        {/* ── Google Analytics 4 ──────────────────────────────────────────────
            Replace G-XXXXXXXXXX with your real GA4 Measurement ID.
            Get it from: analytics.google.com → Admin → Data Streams → your stream
        ────────────────────────────────────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
