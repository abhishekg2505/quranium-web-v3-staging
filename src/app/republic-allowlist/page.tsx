import HeroSection from "@/src/components/republic-allowlist/HeroSection";
import { republicAllowlistMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import RepublicAllowlistForm from "@/src/components/republic-allowlist/RepublicAllowlistForm";
import { Suspense } from "react";

export const metadata = {
  title: {
    default: republicAllowlistMetaData.title,
    template: `%s | ${republicAllowlistMetaData.title}`,
  },
  description: republicAllowlistMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: republicAllowlistMetaData.url,
    title: republicAllowlistMetaData.title,
    description: republicAllowlistMetaData.description,
    siteName: republicAllowlistMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: republicAllowlistMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: republicAllowlistMetaData.title,
    description: republicAllowlistMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
export default function Contact() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <RepublicAllowlistForm />
      </Suspense>
    </main>
  );
}
