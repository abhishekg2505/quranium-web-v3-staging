"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Kapil Dhiman",
    image: "/images/homepagev2/kapil.webp",
    description: "Co-founder and CEO",
  },
  {
    title: "Yaduvendra Yadav",
    image: "/images/homepagev2/yaduvendra.webp",
    description: "Co-founder and CTO",
  },
  {
    title: "Zeeshan Khan",
    image: "/images/homepagev2/zeeshan.webp",
    description: "Co-founder and COO",
  },
];

export default function LeadershipSection() {
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
      <div className="relative max-w-4xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h4 md:text-h3 font-montserrat font-normal text-center"
        >
          Leadership
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-6 mt-[60px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group"
            >
              <div className="relative w-full">
                {/* Front Side */}
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                  <div className="relative bg-[#181022] overflow-hidden h-full rounded-[20px] flex flex-col">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={320}
                      height={426}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 w-full">
                      <Link
                        href=""
                        className="flex flex-row justify-between items-start gap-4 px-6 py-5 text-p3 hover:bg-[#1B0337] rounded-[10px]"
                        target="_self"
                      >
                        <div className="">
                          <p className="text-p2 font-open-sans">{card.title}</p>
                          <p className="text-p3 font-open-sans text-[#AFAFAF] leading-normal">
                            {card.description}
                          </p>
                        </div>
                        <Image
                          src="/images/common/header/right-arrow.svg"
                          alt="Arrow Right"
                          width={13}
                          height={13}
                          className="mt-2"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/about-us/#team">
            <Button variant="outline" className="group relative overflow-hidden">
              <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                Explore all Team Members
                <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
