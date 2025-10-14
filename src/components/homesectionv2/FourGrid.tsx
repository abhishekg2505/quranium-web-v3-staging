"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Uncrackable Security",
    image: "/images/homepagev2/uncrackable-security.webp",
    widthClass: "w-full md:w-[58%]",
    description:
      "SLH-DSA is significantly more robust than stateful and lattice-based alternatives, providing security for decades.",
    linkTitle: "Read Whitepaper →",
    link: "#",
  },
  {
    title: "EVM-Compatible",
    image: "/images/homepagev2/evm-compatible.webp",
    widthClass: "w-full md:w-[38%]",
    description:
      "Don't rebuild your project. Seamlessly deploy your existing Solidity contracts on our quantum-secure foundation.",
    linkTitle: "Read Technical Docs →",
    link: "#",
  },
  {
    title: "QRemix AI",
    image: "/images/homepagev2/QRemix-AI.webp",
    widthClass: "w-full md:w-[38%]",
    description: "Accelerate development with our AI Smart Contract Deployment tool.",
    linkTitle: "Explore QRemix →",
    link: "#",
  },
  {
    title: "QSafe Wallet",
    image: "/images/homepagev2/QSafe-Wallet.webp",
    widthClass: "w-full md:w-[58%]",
    description:
      "Protect your holdings with our native, quantum-secure wallet integrated across 70+ major chains.",
    linkTitle: "Explore QSafe Wallet →",
    link: "#",
  },
];

export default function FourGrid() {
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
    <div ref={sectionRef} className="relative bg-[#0C0318] px-5  pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <div className="relative flex flex-row flex-wrap  gap-6 mt-[60px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group ${card.widthClass}`}
            >
              <div className="relative w-full h-auto md:h-full overflow-hidden">
                {/* Front Side */}
                <div className="bg-roadshow-reverse-border group-hover:bg-purple-border p-[1px] h-auto md:h-full rounded-[16px]">
                  <div className="bg-[#181022] hover:bg-[#1B0637]  h-auto md:h-full rounded-[16px] overflow-hidden flex flex-col justify-between text-left">
                    <div className="flex flex-col justify-center1 items-center1 gap-2 px-[32px] pt-[32px] pb-[40px]">
                      <h4 className="text-h4 font-montserrat font-semibold">{card.title}</h4>
                      <p className="text-p1 font-montserrat font-normal">{card.description}</p>
                      <Link
                        href={card.link}
                        className="text-h6 font-montserrat font-medium text-[#C994FE]"
                      >
                        {card.linkTitle}
                      </Link>
                    </div>

                    <Image
                      src={card.image}
                      alt={card.title}
                      width={660}
                      height={304}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
