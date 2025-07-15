"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QaProgram = () => {
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
    <div
      id="ambassadors"
      ref={sectionRef}
      className="scroll-mt-24 rounded-[20px] px-4 md:px-20 bg-[#130525]"
    >
      <div className="max-w-7xl mx-auto py-[50px] md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-center md:text-left text-h4 md:text-h3 font-montserrat font-semibold"
            >
              The Quranium Ambassador Program
            </h3>
            <h5 className="text-center md:text-left text-h5 font-montserrat font-medium mt-[15px]">
              Real Voices. Real Impact.
            </h5>
            <p className="text-p2 font-open-sans mt-[15px] mb-[20px]">
              The Quranium Ambassador Program is where talent meets purpose; a global initiative
              that empowers individuals to actively shape the future of quantum-secure
              infrastructure. Whether you&rsquo;re a public thought leader, a community educator, or
              a hands-on builder, there&rsquo;s a place for you here.
            </p>
            <Link href="/community#quranium-ambassador-program">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                  Find out more
                </span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div
            ref={cardsRef}
            className="flex items-center justify-center mt-10 md:mt-0 relative w-full"
          >
            <Image
              src="/images/ecosystem-new/qap.webp"
              alt="QAP"
              width={336}
              height={362}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QaProgram;
