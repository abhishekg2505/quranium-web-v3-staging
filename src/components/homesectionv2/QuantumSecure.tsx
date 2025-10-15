"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function QuantumSecure() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const words = [
    "Transactions",
    "Tokenization",
    "Identity",
    "Communication",
    "Data Security",
    "Agent AI",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); // change every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  // GSAP animations for the section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainTitleRef.current, {
        scrollTrigger: { trigger: mainTitleRef.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(para1Ref.current, {
        scrollTrigger: { trigger: para1Ref.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#0C0318] px-5 pt-[104px] pb-24">
      <div className="relative max-w-7xl mx-auto md:px-[60px]">
        <div className="relative w-full">
          <h2
            ref={mainTitleRef}
            className="text-h4 md:text-h3 font-montserrat font-semibold text-center"
          >
            <span className="bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
              Your on-chain money, assets
            </span>{" "}
            and data are
            <br /> now secure from quantum attacks.
          </h2>
        </div>
      </div>

      {/* Animated text section */}
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px] mt-[100px]">
        <h2 className="text-h4 md:text-h3 font-montserrat font-semibold text-center flex justify-center items-center gap-2">
          Quantum Secure{" "}
          <span className="text-[#C994FE] h-[1.2em] flex items-center overflow-hidden relative">
            <span key={index} className="block animate-slide-up text-[#C994FE] overflow-visible">
              {words[index]}
            </span>
          </span>
        </h2>

        <Image
          src="/images/homepagev2/chartD.svg"
          alt="Chart desktop"
          width={1360}
          height={931}
          className="w-full hidden md:block"
        />
        <Image
          src="/images/homepagev2/chartM.svg"
          alt="Chart mobile"
          width={1360}
          height={931}
          className="w-full md:hidden block"
        />
      </div>
    </div>
  );
}
