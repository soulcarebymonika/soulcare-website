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
  metadataBase: new URL("https://soulcarebymonika.com"),
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
        "image": "https://soulcarebymonika.com/images/monika-portrait.png",
        "logo": "https://soulcarebymonika.com/images/logo_soulcare.jpeg",
        "@id": "https://soulcarebymonika.com/#organization",
        "url": "https://soulcarebymonika.com/",
        "email": "info@soulcarebymonika.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "addressCountry": "IN"
        },
        "description": siteInfo.tagline,
        "medicalSpecialty": [
          "Psychiatry",
          "MentalHealth"
        ],
        "availableService": [
          { "@type": "MedicalTherapy", "name": "Individual Counselling" },
          { "@type": "MedicalTherapy", "name": "Couple Therapy" },
          { "@type": "MedicalTherapy", "name": "Family Therapy" },
          { "@type": "MedicalTherapy", "name": "Adolescence Counselling" },
          { "@type": "MedicalTherapy", "name": "Cognitive Behaviour Therapy (CBT)" },
          { "@type": "MedicalTherapy", "name": "Trauma & PTSD Support" },
          { "@type": "MedicalTherapy", "name": "Anxiety & Depression Counselling" }
        ],
        "founder": { "@id": "https://soulcarebymonika.com/#monika" }
      },
      {
        "@type": "Person",
        "@id": "https://soulcarebymonika.com/#monika",
        "name": "Monika Arora",
        "jobTitle": "Counselling Psychologist",
        "url": "https://soulcarebymonika.com/about",
        "image": "https://soulcarebymonika.com/images/monika-portrait.png",
        "sameAs": [
          siteInfo.instagram
        ],
        "worksFor": {
          "@id": "https://soulcarebymonika.com/#organization"
        },
        "knowsAbout": [
          "Cognitive Behaviour Therapy",
          "Psychodynamic Therapy",
          "Anxiety",
          "Depression",
          "Stress and Burnout",
          "PTSD and Trauma",
          "Grief and Loss",
          "Relationship Counselling",
          "Adolescent Mental Health",
          "Addiction Counselling",
          "Family Therapy",
          "Personal Growth",
          "OCD",
          "Sleep Disorders",
          "Anger Management"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Academic background in Psychology"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Guidance & Counselling"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Child Guidance & Counselling"
          }
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Counselling Psychologist",
          "occupationLocation": {
            "@type": "City",
            "name": "Dehradun"
          },
          "skills": "CBT, Psychodynamic Therapy, Adolescent Counselling, Trauma Support, Family Therapy"
        },
        "description": "Monika Arora is a Counselling Psychologist based in Dehradun, India, specialising in CBT and psychodynamic therapy for adolescents and adults. She founded Soulcare in May 2025 and has supported over 100 clients."
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
          src="https://www.googletagmanager.com/gtag/js?id=G-WZ81RP1SXM"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZ81RP1SXM');
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
