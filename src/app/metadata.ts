import type { Metadata } from "next";

export const siteConfig = {
  name: "Eterno Hair Transplant Clinic",
  description: "Leading hair transplant clinic in Kochi, Kerala. Expert FUE, FUT, DHI, PRP treatments by Dr. Chacko Cyriac. 5000+ successful procedures.",
  url: "https://eternoclinic.com",
  ogImage: "/og-image.jpg",
  phone: "+919645921944",
  email: "eternocosmeticsurgery@gmail.com",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
  ],
  authors: [{ name: "Dr. Chacko Cyriac" }],
  creator: "Eterno Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
