"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Post-Quantum Secure L1",
    description:
      "Trusted by 125,000+ testnet users, Quranium delivers quantum-secure infrastructure built for Q-Day and beyond.",
    image: "/images/grant-program/shield.svg",
  },
  {
    title: "Guidance that matters",
    description:
      "Our advisory network includes leaders from PwC, Saudi Aramco, DMCC, The Sandbox, and pioneers in blockchain, AI, and cryptography, bringing decades of expertise to help you build with confidence.",
    image: "/images/grant-program/compass.svg",
  },
  {
    title: "Hands-on building support",
    description:
      "From ideas to working dApps, we back you every step of the way. Leverage a growing partner network across DeFi, AI, and infrastructure, supported by a global team of 50+ contributors across 12 countries.",
    image: "/images/grant-program/hand-stars.svg",
  },
  {
    title: "Test, launch, scale",
    description:
      "Access the tools, infrastructure, and community feedback you need to grow with confidence, from first test to full adoption, all within Quranium’s rapidly expanding ecosystem.",
    image: "/images/grant-program/rocket.svg",
  },
  {
    title: "Community & collaboration",
    description:
      "Build alongside like-minded innovators, from 1M+ gamer alliances to founders and advisors who’ve scaled unicorn L1s, launched global Web3 protocols, and led initiatives at Intel, Google, Uber, and PwC.",
    image: "/images/grant-program/users.svg",
  },
  {
    title: "Rewards with purpose",
    description:
      "Compete for grants, grow your project, and leave a lasting mark in Web3’s most quantum-secure ecosystem.",
    image: "/images/grant-program/medal.svg",
  },
];

export default function WhyQuranium() {
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
    <div ref={sectionRef} className="relative bg-[#030712] px-5 pt-16 pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h5 md:text-h3 font-montserrat font-semibold text-center"
        >
          Why Quranium
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-[60px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group"
            >
              <div className="relative w-full h-auto md:h-[370px] bg-[#0C0318]">
                {/* Front Side */}
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px] h-full">
                  <div className="bg-[url('/images/grant-program/grid.png')] bg-no-repeat bg-right-top bg-contain bg-[#0D031B] p-6 h-full rounded-[20px] flex flex-col items-start text-left py-16">
                    <Image src={card.image} alt="icons" width={48} height={48} />
                    <h5 className="text-h5 font-montserrat font-medium text-left mt-5">
                      {card.title}
                    </h5>
                    <p className="text-p2 font-open-sans text-left">{card.description}</p>
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
