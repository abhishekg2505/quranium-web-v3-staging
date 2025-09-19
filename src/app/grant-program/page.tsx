import HeroSection from "@/src/components/grant-program/HeroSection";
import { aboutUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import YourPathway from "@/src/components/grant-program/YourPathway";
import QuraniumChanges from "@/src/components/grant-program/QuraniumChanges";
import StandsUncrackable from "@/src/components/grant-program/StandsUncrackable";
import WhyQuranium from "@/src/components/grant-program/WhyQuranium";
import UncrackableMatters from "@/src/components/grant-program/UncrackableMatters";
import QuraniumPromise from "@/src/components/grant-program/QuraniumPromise";
import BeTheOne from "@/src/components/grant-program/BeTheOne";
import ActionPlan from "@/src/components/grant-program/ActionPlan";

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
export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <YourPathway />
      <QuraniumChanges />
      <StandsUncrackable />
      <WhyQuranium />
      <ActionPlan />
      <UncrackableMatters />
      <QuraniumPromise />
      <BeTheOne />
    </main>
  );
}
