import HeroSection from "@/src/components/documents/HeroSection";

import { aboutUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import CoreDocuments from "@/src/components/documents/CoreDocuments";

export const metadata = {
  title: {
    default: aboutUsMetaData.title,
    template: `%s | ${aboutUsMetaData.title}`,
  },
  description: aboutUsMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: aboutUsMetaData.url,
    title: aboutUsMetaData.title,
    description: aboutUsMetaData.description,
    siteName: aboutUsMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: aboutUsMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutUsMetaData.title,
    description: aboutUsMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
export default function Documents() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <CoreDocuments />
    </main>
  );
}
