"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pnc from "./Pnc";

gsap.registerPlugin(ScrollTrigger);

const OurStrategicPartners = () => {
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
    <div ref={sectionRef} className="rounded-[20px] pb-10 px-4 md:px-20 bg-[#0C0318]">
      <div className="max-w-7xl mx-auto py-[50px] md:py-20 px-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-left text-h4 md:text-h3 font-montserrat font-semibold"
            >
              Our Strategic Partners
            </h3>

            <p className="text-p2 font-open-sans mt-[15px] mb-[20px]">
              Our strategic partners span blockchain innovators, AI pioneers, cybersecurity leaders,
              infrastructure providers, Web3 platforms, investors, GTM collaborators, and ecosystem
              builders.
            </p>
            <Link href="#">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                  Contact us
                </span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div
            ref={cardsRef}
            className="flex flex-col items-center justify-center mt-10 md:mt-0 relative w-full"
          >
            <p className="text-p2 font-open-sans mb-5">
              We&rsquo;re building the future of secure, intelligent infrastructure, and we&rsquo;re
              not doing it alone. <strong>Quranium</strong> partners with visionary enterprises,
              researchers, and developers to co-create the convergence era.
            </p>
            <div className="mt-[15px]  p-[10px] bg-[#A47FFF26] rounded-[10px] w-fit">
              <p className="text-p3 italic text-[#EAEAEA] font-open-sans leading-normal text-left">
                From joint R&D to ecosystem integration and thought leadership, we&rsquo;re always
                looking to collaborate with those shaping tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pnc />
    </div>
  );
};

export default OurStrategicPartners;
