import HeroSection from "@/src/components/technical/HeroSection";
import EmergingThreats from "@/src/components/technical/Emergingthreats";
import CoreLayer from "@/src/components/technical/CoreLayer";
import HybridArchitecture from "@/src/components/technical/HybridArchitecture";
import CallToAction from "@/src/components/technical/CallToAction";

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <EmergingThreats />
      <CoreLayer />
      <HybridArchitecture />
      <CallToAction />
    </main>
  );
}
