"use client";
import HeroConvergence from "./HeroConvergence";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-overlay", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          const el = document.querySelector(".hero-overlay");
          if (el) el.remove();
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // <section className="relative w-full h-screen">
    <section ref={containerRef} className="relative w-full">
      {/* <div className="absolute inset-0 bg-black z-20 hero-overlay" /> */}

      <div
        className="
      pointer-events-none absolute inset-0 z-0
      bg-gradient-to-t from-[#3E0D7A] to-transparent
      bg-no-repeat
      [background-size:200%_200%]
      [background-position:50%_0%]
      animate-gradient-y
      will-change-[background-position]
      [transform:translateZ(0)]
      backface-hidden
    "
      />
      <div className=" relative min-h-[89vh] md:min-h-[100dvh] w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden1 sm:block1 absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/homepage/convergence_element_transperent.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/*<video
          autoPlay
          muted
          loop
          playsInline
          className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/homepage/home-hero-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <div className="hidden sm:block absolute inset-0 w-full h-full z-0">
          <iframe
            src="https://my.spline.design/heroicanimationwebsitefilechangedaniamtion-kOrpiG9mfKpIeZ5TneoG9LRy/"
            width="100%"
            height="100%"
          ></iframe>
        </div> */}
        {/* <div className="block sm:hidden absolute inset-0 w-full h-full z-0">
          <iframe
            src="https://my.spline.design/heroicanimationwebsitefilemobilever-p44JR9ATT8kicWBhdAiVVsZa/"
            width="100%"
            height="100%"
            className="w-full"
          ></iframe>
        </div> */}
        {/* <div className="block sm:hidden absolute inset-0 z-0 overflow-hidden">
          <div className="relative w-[450px] h-full left-1/2 -translate-x-1/2">
            <iframe
              src="https://my.spline.design/heroicanimationwebsitefilemobilever-p44JR9ATT8kicWBhdAiVVsZa/"
              width="450"
              height="100%"
              className="pointer-events-none w-[450px] h-full"
            ></iframe>
          </div>
        </div> */}

        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/homepage/home-hero-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="absolute left-1/2 -translate-x-1/2 w-max bottom-10 md:bottom-10 2xl:bottom-20 z-20">
          <HeroConvergence />
        </div>
        <div className="absolute inset-0 w-full h-full bg-team-gradient z-10"></div>
      </div>
    </section>
  );
}
