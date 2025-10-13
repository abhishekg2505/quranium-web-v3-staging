"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// const cards = [
//   {
//     title: "Global Roadshow",
//     image: "images/homepagev2/beuncrackable.svg",
//     counter: "300+",
//     description: "F2F Events, 30+ Countries",
//   },
//   {
//     title: "Virtual Roundtables",
//     image: "images/homepagev2/tuc.svg",
//     counter: "178K+",
//     description: "Watch Hours",
//   },
//   {
//     title: "Thought Leadership Podcast",
//     image: "images/homepagev2/qmp.svg",
//     counter: "832K+",
//     description: "Watch Hours",
//   },
// ];

export default function QuantumSecure() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
      });
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
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
    <div
      ref={sectionRef}
      className="relative bg-[#0C0318] px-5 pt-16 pb-24 bg-[url('/images/homepagev2/secure.webp')] bg-contain bg-right bg-no-repeat"
    >
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <div className="relative max-w-[974px]">
          <h2
            ref={mainTitleRef}
            className="text-h4 md:text-h3 font-montserrat font-normal text-left"
          >
            Your on-chain money, assets and data are now secure from quantum attacks.
          </h2>
          <p className="text-p1 font-open-sans font-normal text-left">
            Existing L1s like Bitcoin, Ethereum, and Solana rely on ECDSA encryption, which is
            rapidly approaching obsolescence as computing power increases.
          </p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-6 mt-[60px]"></div>
      </div>
    </div>
  );
}
