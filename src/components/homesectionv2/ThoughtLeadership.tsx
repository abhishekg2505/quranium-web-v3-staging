"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Global Roadshow",
    image: "images/homepagev2/beuncrackable.svg",
    counter: "300+",
    description: "F2F Events, 30+ Countries",
  },
  {
    title: "Virtual Roundtables",
    image: "images/homepagev2/tuc.svg",
    counter: "178K+",
    description: "Watch Hours",
  },
  {
    title: "Thought Leadership Podcast",
    image: "images/homepagev2/qmp.svg",
    counter: "832K+",
    description: "Watch Hours",
  },
];

export default function ThoughtLeadership() {
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
    <div ref={sectionRef} className="relative bg-[#030712] px-5 pt-[210px] pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h4 md:text-h3 font-montserrat font-semibold text-center"
        >
          Thought Leadership
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
              <div className="relative w-full h-auto md:h-[329px]">
                {/* Front Side */}
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                  <div className="bg-[#181022] hover:bg-[#1B0637] p-6 h-full rounded-[20px] flex flex-col text-center py-16">
                    <div className="flex flex-row justify-center items-center gap-4">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={131}
                        height={67}
                        className=""
                      />
                      <div
                        className="h-[60px] w-[1px]"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)",
                        }}
                      ></div>
                      <p className="text-p3 font-montserrat font-normal">{card.title}</p>
                    </div>
                    <h3 className="text-h3 font-montserrat leading-normal font-bold text-center mt-5 text-[#C894FF]">
                      {card.counter}
                    </h3>
                    <p className="text-p1 font-montserrat font-normal">{card.description}</p>
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
