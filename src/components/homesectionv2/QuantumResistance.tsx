"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "EVM Compatible",
    description: ["Seamless deployment of solidity contracts"],
    color: "text-[#CF57FF]",
  },
  {
    title: "QxSwap - Quantum-secure Decentralized Exchange",
    description: [
      "Institution-grade DEX for high-speed, quantum-secure asset exchange ",
      "Built for scalable and efficient liquidity across global markets",
    ],

    color: "text-[#FF77D6]",
  },
  {
    title: "QRemix AI ",
    description: ["AI Smart Contract Deployment"],
    color: "text-[#00FFA5]",
  },
  {
    title: "QSafe Quantum-secure Wallet",
    description: [
      "Access to native Quranium chain tokens and NFTs",
      "Integrated with 70 other major chains including BTC, Ethereum, Solana",
    ],

    color: "text-[#436AFF]",
  },
  {
    title: "SLH-DSA Layer-1 Infra (Stateless Hash-Based Digital Signature Algorithm)",
    description: [
      "Stateless significantly more robust than stateful",
      "Hash based cryptography is stronger than lattice-based",
    ],

    color: "text-[#B57EFF]",
  },
];

export default function QuantumResistance() {
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
    <div ref={sectionRef} className="relative bg-[#0C0318] px-5 pt-[150px] pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h4 md:text-h3 font-montserrat font-semibold text-center"
        >
          Quranium:{" "}
          <span className="bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
            Quantum-Resistance
          </span>{" "}
          Redefined
        </h2>
        <p className="text-p1 font-open-sans text-center mt-5">
          Quranium is the first L1 to adopt SLH-DSA (Stateless Hash-Based Digital Signature
          Algorithm), <br />
          the most conservative, future-proof security primitive in cryptography.
        </p>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[40%_60%]  gap-6 mt-[20px] md:mt-[60px]">
          <div className="flex items-center justify-center mt-10 md:mt-0 relative w-full h-full">
            <div className="w-[274px] h-full relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 md:scale-[1.2]"
              >
                <source src="/videos/homepage/layers.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="relative flex flex-col gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="flex flex-col"
              >
                <h3 className={`text-h5 font-montserrat leading-normal font-medium ${card.color}`}>
                  {card.title}
                </h3>
                {card.description.map((desc, index) => (
                  <p key={index} className="text-p1 font-montserrat font-normal text-[#ECECEC]">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
