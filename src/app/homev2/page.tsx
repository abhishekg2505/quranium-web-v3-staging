import HeroSection from "@/src/components/homesectionv2/HeroSection";
import UncrackableTeam from "@/src/components/about/UncrackableTeam";
import Team from "@/src/components/about/Team";
import TeamCarousel from "@/src/components/about/TeamCarousel";
import { aboutUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import ClockTicking from "@/src/components/homesectionv2/ClockTicking";
import QuantumThreat from "@/src/components/homesectionv2/QuantumThreat";
import ThoughtLeadership from "@/src/components/homesectionv2/ThoughtLeadership";
import Traction from "@/src/components/homesectionv2/Traction";
import Community from "@/src/components/homesectionv2/Community";
import Partners from "@/src/components/homesectionv2/Partners";
import BackedBy from "@/src/components/homesectionv2/BackedBy";
import InstitutionalReady from "@/src/components/homesectionv2/InstitutionalReady";

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
export default function Homev2() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <ClockTicking />
      <QuantumThreat />
      <InstitutionalReady />
      <BackedBy />
      <ThoughtLeadership />
      <TeamCarousel />
      <Traction />
      <Community />
      <Partners />
      <Team />
      <UncrackableTeam />
    </main>
  );
}
