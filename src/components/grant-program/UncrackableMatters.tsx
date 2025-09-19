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
    title: "Weak code and rushed launches invite exploits that destroy trust.",
    image: "/images/grant-program/heart.svg",
  },
  {
    title: "Hype-driven rewards vanish fast without real infrastructure.",

    image: "/images/grant-program/graph.svg",
  },
  {
    title: "Today’s cryptography has an expiry date - the quantum threat is coming.",

    image: "/images/grant-program/hourglass.svg",
  },
  {
    title: "Real adoption only comes from the projects that are built to last.",

    image: "/images/grant-program/widget.svg",
  },
];

export default function UncrackableMatters() {
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
          This Is Why Being Uncrackable Matters in Web3
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-6 mt-[60px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group"
            >
              <div className="relative w-full h-auto bg-[#0C0318]">
                {/* Front Side */}
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px] h-full">
                  <div className="bg-[url('/images/grant-program/grid.png')] bg-no-repeat bg-right-top bg-[length:150px_150px] bg-[#0D031B] hover:bg-[#1B0637] px-6 h-full rounded-[20px] flex flex-col items-start text-left py-16">
                    <Image src={card.image} alt="icons" width={48} height={48} />
                    <h5 className="text-h5 font-montserrat font-medium text-left mt-5">
                      {card.title}
                    </h5>
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
