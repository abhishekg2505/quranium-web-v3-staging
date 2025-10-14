"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialMedia } from "@/src/constants/socialMedia";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "QRN Rush",
    image: "/images/homepagev2/qrnrush-frame.png",
    widthClass: "w-full md:w-[31%]",
    description: "Join QRNRush, a gamified platform to earn rewards, climb ranks, and win prizes.",
  },
  {
    title: "Developers",
    image: "/images/homepagev2/qremixai-frame.png",
    widthClass: "w-full md:w-[31%]",
    description: "Develop, test, and deploy dApps securely on Quranium’s post-quantum ecosystem.",
  },
  {
    title: "DeQuip Grant Program",
    image: "/images/homepagev2/grant-program-frame.png",
    widthClass: "w-full md:w-[31%]",
    description: "Fuel your vision with our milestone-based grants and expert developer support.",
  },
  {
    title: "Our Global Roadshow",
    image: "/images/homepagev2/bu-frame.png",
    widthClass: "w-full md:w-[48%]",
    description:
      "Quranium’s Be Uncrackable Roadshow brings quantum security awareness to innovators, builders, and enterprises worldwide.",
  },
  {
    title: "Quantum Mind Podcast",
    image: "/images/homepagev2/qmpframe.png",
    widthClass: "w-full md:w-[48%]",
    description:
      "Discover inspiring stories from real innovators shaping the future of AI, quantum, and Web3 on Quantum Minds Podcast.",
  },
];

export default function Community() {
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
          className="text-h4 md:text-h3 font-montserrat font-semibold text-center"
        >
          Community
        </h2>

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
                <div className="md:h-full bg-roadshow-reverse-border group-hover:bg-purple-border p-[1px] rounded-[16px]">
                  <div className="bg-[#181022] hover:bg-[#1B0637]  h-full rounded-[16px] overflow-hidden flex flex-col justify-between text-left">
                    <div className="flex flex-col justify-center1 items-center1 gap-2 px-[32px] pt-[32px] pb-[40px]">
                      <h4 className="text-h4 font-montserrat font-semibold">{card.title}</h4>
                      <p className="text-p1 font-montserrat font-normal">{card.description}</p>
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
        <h2
          ref={mainTitleRef}
          className="text-h4 md:text-h3 font-montserrat font-semibold text-center mt-[60px]"
        >
          Join the Uncrackable Journey
        </h2>
        <p className="text-p2 font-open-sans text-center mt-[20px] mb-[16px]">
          Bringing the disruptors together. Around the world.
        </p>
        <div className="flex justify-center items-center space-x-6">
          {socialMedia.map((social, index) => (
            <div
              key={social.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <Link href={social.link} key={social.name} target="_blank">
                <Image
                  src={social.logo}
                  alt={social.name}
                  width={40}
                  height={40}
                  className="cursor-pointer hover:opacity-50 duration-300 w-6 h-6 md:w-10 md:h-10"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
