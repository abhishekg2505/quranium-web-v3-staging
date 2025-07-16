import BeHonest from "@/src/components/ecosystem/BeHonest";
import CallToActionEcoSysytem from "@/src/components/ecosystem/CallToActionEcoSysytem";
import ConvergenceFuture from "@/src/components/ecosystem/ConvergenceFuture";
import DevelopersBuilder from "@/src/components/ecosystem/DevelopersBuilder";
import ForPartners from "@/src/components/ecosystem/ForPartners";
import HeroSection from "@/src/components/ecosystem/HeroSection";
import { ecosystemMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import TabSection from "@/src/components/ecosystem/TabSection";
import AnchorCards from "@/src/components/ecosystem/AnchorCards";
import QaProgram from "@/src/components/ecosystem/QaProgram";
import OurStrategicPartners from "@/src/components/ecosystem/OurStrategicPartners";
import OurMediaPartners from "@/src/components/ecosystem/OurMediaPartners";
import OurCommunity from "@/src/components/ecosystem/OurCommunity";

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
      <TabSection />
      <AnchorCards />
      <ForPartners />
      {/* <BeHonest />  old one*/}
      <DevelopersBuilder />
      {/* <ConvergenceFuture /> old*/}
      <CallToActionEcoSysytem />
      <QaProgram />
      <OurStrategicPartners />
      <OurCommunity />
      <OurMediaPartners />
    </main>
  );
}
