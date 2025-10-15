import HeroSection from "@/src/components/homesectionv2/HeroSection";
import TeamCarousel from "@/src/components/homesectionv2/TeamCarousel";
import { siteMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import ClockTicking from "@/src/components/homesectionv2/ClockTicking";
import ThoughtLeadership from "@/src/components/homesectionv2/ThoughtLeadership";
import Traction from "@/src/components/homesectionv2/Traction";
import Community from "@/src/components/homesectionv2/Community";
import Partners from "@/src/components/homesectionv2/Partners";
import InstitutionalReady from "@/src/components/homesectionv2/InstitutionalReady";
import QuantumResistance from "@/src/components/homesectionv2/QuantumResistance";
// import LeadershipSection from "@/src/components/homesectionv2/LeadershipSection";
import InNews from "@/src/components/homesectionv2/InNews";
import FourGrid from "@/src/components/homesectionv2/FourGrid";
import VerticalTimeLine from "@/src/components/homesectionv2/VerticalTimeLine";
import LookingAhead from "@/src/components/homesectionv2/LookingAhead";
import QuantumSecure from "@/src/components/homesectionv2/QuantumSecure";
import Spotlight from "@/src/components/homesectionv2/Spotlight";
import FooterSocial from "@/src/components/homesectionv2/FooterSocial";
import Team from "@/src/components/homesectionv2/Team";

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
export default function Homev2() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <ClockTicking />
      <QuantumResistance />
      <FourGrid />
      <QuantumSecure />
      <InstitutionalReady />
      <Partners />
      <ThoughtLeadership />
      <TeamCarousel />
      <Spotlight />
      <InNews />
      <Community />
      <Traction />
      {/* <LeadershipSection /> */}
      <Team />
      <VerticalTimeLine />
      <LookingAhead />
      <FooterSocial />
    </main>
  );
}
