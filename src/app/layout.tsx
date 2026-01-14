import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eternoclinic.com'),
  title: {
    default: "Eterno Hair Transplant Clinic | Leading Hair Restoration in Kochi, Kerala",
    template: "%s | Eterno Clinic"
  },
  description: "Expert hair transplant services in Kochi, Kerala. FUE, FUT, DHI, PRP treatments by Dr. Chacko Cyriac, MCh Plastic Surgery. 7000+ successful procedures, patients from 26+ countries.",
  keywords: [
    "hair transplant Kerala",
    "hair transplant Kochi",
    "FUE hair transplant India",
    "FUT hair transplant",
    "DHI hair restoration",
    "Dr Chacko Cyriac",
    "beard transplant Kerala",
    "eyebrow transplant",
    "PRP hair treatment",
    "hair loss treatment Kochi",
    "best hair transplant surgeon Kerala",
    "hair restoration India"
  ],
  authors: [{ name: "Dr. Chacko Cyriac", url: "https://eternoclinic.com/about" }],
  creator: "Eterno Hair Transplant Clinic",
  publisher: "Eterno Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eternoclinic.com",
    siteName: "Eterno Hair Transplant Clinic",
    title: "Eterno Hair Transplant Clinic | Expert Hair Restoration in Kochi",
    description: "Leading hair transplant clinic in Kochi, Kerala. Expert FUE, FUT, DHI, PRP treatments by internationally trained surgeon Dr. Chacko Cyriac.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eterno Hair Transplant Clinic - Dr. Chacko Cyriac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eterno Hair Transplant Clinic | Expert Hair Restoration",
    description: "Leading hair transplant clinic in Kochi, Kerala. FUE, FUT, DHI treatments by Dr. Chacko Cyriac.",
    images: ["/og-image.jpg"],
    creator: "@eternoclinic",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://eternoclinic.com",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eterno Hair Transplant Clinic",
    "description": "Leading hair transplant clinic in Kochi, Kerala offering FUE, FUT, DHI, PRP procedures",
    "url": "https://eternoclinic.com",
    "logo": "https://eternoclinic.com/logo.png",
    "image": "https://eternoclinic.com/clinic-image.jpg",
    "telephone": "+919645921944",
    "email": "eternocosmeticsurgery@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, AC Estate, Janatha Junction, S.A. Road, Vytilla,",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9312",
      "longitude": "76.2673"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "sameAs": [
      "https://facebook.com/eternoclinic",
      "https://instagram.com/eternoclinic",
      "https://youtube.com/eternoclinic"
    ]
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Chacko Cyriac",
    "honorificPrefix": "Dr.",
    "jobTitle": "Senior Consultant Plastic Surgeon",
    "medicalSpecialty": ["Plastic Surgery", "Hair Restoration Surgery", "Cosmetic Surgery"],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Post Graduate Institute of Medical Education and Research, Chandigarh"
    },
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Eterno Hair Transplant Clinic"
    },
    "description": "MCh Plastic Surgery with international training from UK, USA, Canada, and Singapore. Specialist in advanced hair restoration techniques."
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
