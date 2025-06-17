import BeHonest from "@/src/components/ecosystem/BeHonest";
import CallToActionEcoSysytem from "@/src/components/ecosystem/CallToActionEcoSysytem";
import ConvergenceFuture from "@/src/components/ecosystem/ConvergenceFuture";
import DevelopersBuilder from "@/src/components/ecosystem/DevelopersBuilder";
import ForPartners from "@/src/components/ecosystem/ForPartners";
import HeroSection from "@/src/components/ecosystem/HeroSection";
import { ecosystemMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: ecosystemMetaData.title,
    template: `%s | ${ecosystemMetaData.title}`,
  },
  description: ecosystemMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: ecosystemMetaData.url,
    title: ecosystemMetaData.title,
    description: ecosystemMetaData.description,
    siteName: ecosystemMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: ecosystemMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ecosystemMetaData.title,
    description: ecosystemMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <BeHonest />
      <DevelopersBuilder />
      <ForPartners />
      <ConvergenceFuture />
      <CallToActionEcoSysytem />
    </main>
  );
}
