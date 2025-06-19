import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import FeaturedCardSlider from "./FeaturedCardSliderV2";

const Feature = () => {
  return (
    <section className="py-16 md:py-[107px] container mx-auto px-4">
      <div className="relative py-16 md:py-20 rounded-[20px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/images/homepage/forging/bg-image-forging.webp')] bg-no-repeat bg-cover opacity-25" />
        {/* <div className="absolute inset-0 bg-multi-layer-gradient opacity-25" /> */}

        {/* Foreground content */}
        <div className="relative z-10 max-w-[984px] mx-auto text-white">
          <p className="pt-4 text-center text-p2 max-w-[732px] mx-auto font-open-sans text-white-2">
            In a world where machines make decisions, data moves autonomously, and quantum computers
            challenge the very structure of digital trust, we need more than a Blockchain.
          </p>
          <FeaturedCardSlider />
          <div className="flex flex-col items-center gap-y-5">
            <p className="text-h4">Secure. Fast. Intelligent</p>
            <Link href="/ecosystem">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Build on Quranium
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
