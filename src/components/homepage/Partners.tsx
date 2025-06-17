"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Partners = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const partnersLogos = [
    { src: "/partners-logo/align-ai.svg", alt: "Align AI Logo" },
    { src: "/partners-logo/biskit.svg", alt: "Biskit Logo" },
    { src: "/partners-logo/bybit.svg", alt: "Bybit Logo" },
    { src: "/partners-logo/exequantum.svg", alt: "Exequantum Logo" },
    { src: "/partners-logo/happy-bridge.svg", alt: "Happy Bridge Logo" },
    { src: "/partners-logo/icp-logo.svg", alt: "ICP Logo" },
    { src: "/partners-logo/inofi.svg", alt: "Inofi Logo" },
    { src: "/partners-logo/matter-id.svg", alt: "Matter ID Logo" },
    { src: "/partners-logo/metasig.svg", alt: "Metasig Logo" },
    { src: "/partners-logo/pwc.svg", alt: "PwC Logo" },
    { src: "/partners-logo/qnet.svg", alt: "QNet Logo" },
    { src: "/partners-logo/turf-gaming.svg", alt: "Turf Gaming Logo" },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;

    // Kill existing tween if any
    tweenRef.current?.kill();

    const tween = gsap.to(marquee, {
      x: `-${totalWidth}px`,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <section>
      <h2 className="text-h4 text-center font-montserrat font-semibold">Our Partners</h2>
      <div className="relative pt-5 pb-20 overflow-hidden">
        <div className={`absolute w-full h-full origin-top-left rotate-[2.42deg]`}>
          <div className="bg-violet-2 -mx-[10vw] px-[10vw] py-12">
            <div className="h-10"></div>
          </div>
        </div>
        <div className={`relative origin-top-right rotate-[-2.42deg]`}>
          <div className="bg-violet-1 -mx-[10vw] px-[10vw] py-10 md:py-12">
            <div
              ref={marqueeRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex items-center gap-8 md:gap-10 whitespace-nowrap will-change-transform"
            >
              {[...partnersLogos, ...partnersLogos].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  height={50}
                  width={0}
                  className="w-auto h-auto max-h-12 object-contain shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
