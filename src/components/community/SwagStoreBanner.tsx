"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const SwagStoreBanner = () => {
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
    <div ref={sectionRef} className="px-4 md:px-20">
      <div className="max-w-7xl mx-auto py-[50px] md:py-[87px] md:px-[80px] rounded-[20px] bg-[url('/images/community/merch/ssbgs.webp')] md:bg-[url('/images/community/merch/ssbgl.webp')] bg-cover bg-bottom sm:bg-right bg-no-repeat">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="flex flex-col h-[640px] md:h-auto justify-end md:justify-center items-start gap-5 relative w-full">
            <h5 ref={mainTitleRef} className="text-h5 font-montserrat font-medium">
              Quranium&rsquo;s Official Merch
            </h5>
            <Image
              ref={cardsRef}
              src="/images/community/merch/sslogo.png"
              alt="Quantum"
              width={406}
              height={444}
              className="w-full"
            />
            <p ref={headingRef} className="text-p2 font-open-sans text-left">
              From stylish tees to eye-catching collectibles, every piece is designed to spark
              conversations and connect you with fellow Web3 enthusiasts.
            </p>
            <Link
              href="https://swag-store-by-quranium.myshopify.com"
              target="_self"
              rel="noopener noreferrer"
            >
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff] bg-[#ffffff]">
                <span className="absolute inset-0 z-0 bg-[#601dff] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#000000] group-hover:text-[#ffffff] transition-colors duration-500">
                  Shop Now
                </span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="relative z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SwagStoreBanner;
