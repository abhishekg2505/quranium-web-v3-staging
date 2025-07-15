"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Qwarriors = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".animation-wrapper", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          ".team-title",
          {
            opacity: 0,
            y: 90,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".team-button",
          {
            opacity: 0,
            y: 70,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        ref={sectionRef}
        className="px-4 md:px-20 pb-10 md:pb-[80px] p-[1px] rounded-[20px] bg-black"
      >
        <div className="animation-wrapper relative  p-4 md:p-[30px] rounded-[20px] container mx-auto bg-[#0F0825]">
          <div className="flex flex-col md:flex-row md:justify-between items-start relative z-10 max-w-7xl mx-auto">
            <div className="max-w-[246px]">
              <h2 className="team-title text-white text-h4 md:text-h3 font-montserrat font-semibold">
                Q-Warriors
              </h2>
            </div>

            <div className="team-button pt-5 md:pt-0 max-w-[610px]">
              <p className="text-p2 font-open-sans">
                <span className="font-bold">Q-Warriors</span> are an elite circle of Quranium
                believers dedicated to shaping the world alongside our mission.{" "}
                <span className="font-bold">Not core ambassadors,</span> but a vital force within
                the ecosystem, they earn special recognition, exclusive perks, prizes, and monthly
                raffles as they help power Quranium forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qwarriors;
