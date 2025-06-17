import { Button } from "@/src/components/ui/button";
import { MoveRight, Shield, Zap, Sparkles } from "lucide-react";
import HeroSpline from "../HeroSpline";
import Link from "next/link";
import HeroConvergence from "./HeroConvergence";

export default function HeroSection() {
  return (
    // <section className="relative w-full h-screen">
    <section className="relative w-full">
      {/* <div className="hidden xl:block min-h-screen">
        <HeroSpline />
      </div> */}

      {/* <div className="hidden xl:block relative min-h-screen w-full overflow-hidden"> */}
      <div className=" relative min-h-[89vh] md:min-h-[100dvh] w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/homepage/hero-animation.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute left-1/2 -translate-x-1/2 w-max bottom-10 md:bottom-10 2xl:bottom-20 z-20">
          <HeroConvergence />
        </div>
        <div className="absolute inset-0 w-full h-full bg-team-gradient z-10"></div>
      </div>

      {/* <div className="absolute bottom-10 xl:bottom-20 w-full"> */}
      {/* <div className="relative pt-20 pb-40 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div>
                <h1 className="max-w-2xl text-2xl md:text-4xl tracking-tightest">
                  The world&apos;s first Convergence Layer.
                  <br />A decentralized infrastructure forged where quantum, blockchain, and AI
                  unite.
                </h1>
              </div>

              <div className="flex flex-col items-start space-y-6">
                <p className="text-base md:text-lg font-normal max-w-md">
                  At Quranium, we&apos;re architecting a new foundation for digital civilization
                  where intelligence, integrity, and resilience converge.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="mailto:business@quranium.org">
                    <Button className="group">
                      Build on Quranium
                      <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link
                    href="https://validators.quranium.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">Become a Node Pioneer</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
