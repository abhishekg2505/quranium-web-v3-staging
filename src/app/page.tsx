// import HeroSection from "@/src/components/homepage/HeroSection";
// import Partners from "@/src/components/homepage/Partners";
// import Uncrackable from "@/src/components/homepage/Uncrackable";
// import Forging from "@/src/components/homepage/Forging";
// import Podcast from "@/src/components/homepage/Podcast";
// import Spotlight from "@/src/components/homepage/Spotlight";
// import Roadshow from "@/src/components/homepage/Roadshow";
// import QuantumCarousel from "@/src/components/homepage/QuantumCarousel";
// import QuraniumText from "@/src/components/homepage/QuraniumText";
// import FeaturedCardSlider from "../components/homepage/FeaturedCardSlider";
// import PressReleases from "../components/homepage/PressReleases";
// import WeAreUncrackable from "../components/homepage/WeAreUncrackable";
// import Feature from "../components/homepage/Feature";
// import InMedia from "../components/homepage/InMedia";
// import RoadshowV2 from "../components/homepage/RoadshowV2";
// import Pulse from "../components/homepage/Pulse";
// import TextReveal from "@/src/components/homepage/TextReveal";
// import QsafeWallet from "@/src/components/homepage/QsafeWallet";
import HeroSection from "@/src/components/homesectionv2/HeroSection";
import TeamCarousel from "@/src/components/homesectionv2/TeamCarousel";
import ClockTicking from "@/src/components/homesectionv2/ClockTicking";
import ThoughtLeadership from "@/src/components/homesectionv2/ThoughtLeadership";
import Traction from "@/src/components/homesectionv2/Traction";
import Community from "@/src/components/homesectionv2/Community";
import Partners from "@/src/components/homesectionv2/Partners";
import InstitutionalReady from "@/src/components/homesectionv2/InstitutionalReady";
import QuantumResistance from "@/src/components/homesectionv2/QuantumResistance";
import InNews from "@/src/components/homesectionv2/InNews";
import FourGrid from "@/src/components/homesectionv2/FourGrid";
import VerticalTimeLine from "@/src/components/homesectionv2/VerticalTimeLine";
import LookingAhead from "@/src/components/homesectionv2/LookingAhead";
import QuantumSecure from "@/src/components/homesectionv2/QuantumSecure";
import Spotlight from "@/src/components/homesectionv2/Spotlight";
import FooterSocial from "@/src/components/homesectionv2/FooterSocial";
import Team from "@/src/components/homesectionv2/Team";
export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      {/* <HeroSection />
      <Uncrackable />
      <TextReveal /> */}

      {/* <div className="z-10 bg-background"> */}
      {/* <Feature />
        <Partners /> */}
      {/* <QsafeWallet /> */}
      {/* <Roadshow /> */}
      {/* <RoadshowV2 /> */}

      {/* <Spotlight />
        <InMedia />
        <Podcast /> */}
      {/* <PressReleases /> */}
      {/* <WeAreUncrackable /> */}
      {/* <Pulse />
        <QuraniumText /> */}
      {/* </div> */}
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
