import HeroSection from "@/src/components/documents/HeroSection";
import { documetsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import CoreDocuments from "@/src/components/documents/CoreDocuments";

export const metadata = {
  title: {
    default: documetsMetaData.title,
    template: `%s | ${documetsMetaData.title}`,
  },
  description: documetsMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: documetsMetaData.url,
    title: documetsMetaData.title,
    description: documetsMetaData.description,
    siteName: documetsMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: documetsMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: documetsMetaData.title,
    description: documetsMetaData.description,
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
