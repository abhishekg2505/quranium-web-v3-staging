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
    title: "80%",
    description:
      "Of projects fail due to fragile execution. Most projects fail before they launch. ",
  },
  {
    title: "14%",
    description:
      "Average yearly return from crypto projects. Most projects fade fast, with no lasting impact",
  },
  {
    title: "5%",
    description:
      "of projects have a quantum strategy as the 2030 deadline looms; while various networks remain unready for Q-Day.",
  },
  {
    title: "90%",
    description:
      "Of startups fail in the first year. The reality of building in the crypto and blockchain ecosystem is harsh.",
  },
];

export default function YourPathway() {
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
        <h2 ref={mainTitleRef} className="text-h5 md:text-h3 font-montserrat font-bold">
          Your pathway to building <br />
          uncrackable projects for Web3
        </h2>
        <p
          ref={para1Ref}
          className="text-p2 font-open-sans text-gray-300 max-w-4xl mt-4 mx-auto md:mx-0"
        >
          Web3 is full of builders, but the odds are stacked against them.
        </p>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 mt-[60px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group"
            >
              <div className="relative w-full h-auto md:h-[350px] bg-[#0C0318]">
                {/* Front Side */}
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px] h-full">
                  <div className="bg-[url('/images/grant-program/grid.png')] bg-no-repeat bg-right-top bg-[length:150px_150px] bg-[#0C0318] hover:bg-[#1B0637] p-6 h-full rounded-[20px] flex flex-col items-start text-left py-16">
                    <h3 className="text-[80px] font-montserrat leading-normal font-extralight mt-5 bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
                      {card.title}
                    </h3>
                    <p className="text-p2 font-open-sans">{card.description}</p>
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
