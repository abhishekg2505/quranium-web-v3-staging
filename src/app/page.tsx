import HeroSection from "@/src/components/homepage/HeroSection";
import Partners from "@/src/components/homepage/Partners";
import Uncrackable from "@/src/components/homepage/Uncrackable";
import Forging from "@/src/components/homepage/Forging";
import Podcast from "@/src/components/homepage/Podcast";
import Spotlight from "@/src/components/homepage/Spotlight";
import Roadshow from "@/src/components/homepage/Roadshow";
import QuantumCarousel from "@/src/components/homepage/QuantumCarousel";
import QuraniumText from "@/src/components/homepage/QuraniumText";
import FeaturedCardSlider from "../components/homepage/FeaturedCardSlider";
import PressReleases from "../components/homepage/PressReleases";
import WeAreUncrackable from "../components/homepage/WeAreUncrackable";
import Feature from "../components/homepage/Feature";
import InMedia from "../components/homepage/InMedia";
import RoadshowV2 from "../components/homepage/RoadshowV2";
import Pulse from "../components/homepage/Pulse";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <Uncrackable />
      <div className="z-10 bg-background">
        <Feature />
        <Partners />
        {/* <Roadshow /> */}
        <RoadshowV2 />

        <Spotlight />
        <InMedia />
        <Podcast />
        {/* <PressReleases /> */}
        {/* <WeAreUncrackable /> */}
        <Pulse />
        <QuraniumText />
      </div>
    </main>
  );
}
