"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroConvergence() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state (invisible)
    gsap.set([h1Ref.current, titlesRef.current?.children, lineRef.current], {
      opacity: 0,
      y: 20,
    });

    // Animation sequence
    const tl = gsap.timeline({ delay: 3 }); // 3-second delay after render

    tl.to(h1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Ensure children are not undefined
    const children = titlesRef.current ? Array.from(titlesRef.current.children) : [];

    tl.to(
      children,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.to(
      lineRef.current,
      {
        opacity: 1,
        width: "100%", // Optional: animate width growth
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center font-sans tracking-normal leading-normal">
      <h1
        ref={h1Ref}
        className="pb-5 text-h4 md:text-h2 font-montserrat font-bold text-transparent bg-gradient-to-r from-white-1 to-[#B18FFF] bg-clip-text"
        style={{ opacity: 0 }}
      >
        The Convergence Layer
      </h1>

      <div
        ref={titlesRef}
        className="pb-3 flex items-center gap-6 text-white-1/80 text-p3 md:text-p2 font-open-sans"
      >
        <div className="flex items-center gap-2" style={{ opacity: 0 }}>
          <Image
            src="/images/homepage/hero-convergence/quantum-icon.svg"
            alt="Quantum"
            width={24}
            height={24}
          />
          <span>Quantum</span>
        </div>
        <div className="flex items-center gap-2" style={{ opacity: 0 }}>
          <Image
            src="/images/homepage/hero-convergence/blockchain-icon.svg"
            alt="Blockchain"
            width={24}
            height={24}
          />
          <span>Blockchain</span>
        </div>
        <div className="flex items-center gap-2" style={{ opacity: 0 }}>
          <Image
            src="/images/homepage/hero-convergence/ai-icon.svg"
            alt="AI"
            width={24}
            height={24}
          />
          <span>AI</span>
        </div>
      </div>

      <div
        ref={lineRef}
        style={{ opacity: 0 }}
        className="w-0 h-[1px] bg-gradient-to-r from-[#FFFFFF00] via-white-1 to-[#FFFFFF00]"
      />
    </section>
  );
}
