"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BeTheOne = () => {
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
      <div className="max-w-7xl mx-auto py-[50px] md:pt-[160px] md:pb-[200px] px-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10">
            <h2
              ref={mainTitleRef}
              className="text-center md:text-left text-h4 md:text-h2 font-montserrat font-bold text-white mb-[15px]"
            >
              Be the 1 in 10 <br />
              that lasts.
            </h2>
            <div ref={headingRef} className="flex flex-row gap-5 mt-5">
              <Link href="#" target="_self" rel="noopener noreferrer">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Submit Application
                    <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group relative overflow-hidden bg-transparent">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center bg-transparent text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                    Join Community
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Video */}

          <div
            ref={cardsRef}
            className="flex items-center justify-center mt-10 md:mt-0 relative w-full"
          >
            <p className="text-p2 font-open-sans mb-[15px]">
              Build the next wave of secure, EVM-compatible apps and infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeTheOne;
