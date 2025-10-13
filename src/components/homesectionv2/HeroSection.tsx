"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      // Animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate gradient line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
        },
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-4 md:px-20 bg-[#0C0318]">
      <div className="max-w-7xl mx-auto pt-[50px] pb-[106px] md:pt-36 px-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-center md:text-left">
          {/* Left Side */}
          <div className="relative z-10 order-2 md:order-1">
            <h1
              ref={mainTitleRef}
              className="text-center md:text-left text-h4 md:text-h3 font-montserrat font-semibold text-white mb-[15px]"
            >
              The World&rsquo;s First
              <br />
              <span className="bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
                Quantum-Secure Layer-1
              </span>
              <br />
              Blockchain built for <br />
              institutions
            </h1>
            <p ref={headingRef} className="text-p1 font-open-sans mb-[15px]">
              Future-proofing the next $10 Trillion of digital assets
            </p>
          </div>

          {/* Right Side - Video */}
          <div
            ref={cardsRef}
            className="w-full h-auto aspect-square flex items-center justify-center mt-10 md:mt-0 relative order-1 md:order-2 md:w-full md:h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="inset-0 w-full h-full object-cover z-0 md:hidden block"
            >
              <source src="/videos/homepage/herovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-[792px] h-[792px] md:absolute right-0 top-[-100px] hidden md:block z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className=" inset-0 w-full h-full object-contain md:object-fill z-0"
          >
            <source src="/videos/homepage/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
