"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
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
const cards = [
  {
    title: "Our Global Roadshow",
    image: "/images/homepagev2/bu-frame.png",
    widthClass: "w-full md:w-[31%]",
    description:
      "Quranium’s Be Uncrackable Roadshow brings quantum security awareness to innovators, builders, and enterprises worldwide.",
    counter: "300+",
    subheading: "F2F Events, 30+ Countries",
    link: "https://www.beuncrackable.com/",
    target: "_blank",
  },
  {
    title: "Quantum Mind Podcast",
    image: "/images/homepagev2/qmp-frame.png",
    widthClass: "w-full md:w-[31%]",
    description:
      "Discover inspiring stories from real innovators shaping the future of AI, quantum, and Web3 on Quantum Minds Podcast.",
    counter: "832K+",
    subheading: "Watch Hours",
    link: "https://www.quantummindspodcast.com/",
    target: "_blank",
  },
  {
    title: "The Uncrackable Conversation",
    image: "/images/homepagev2/tuc-frame.png",
    widthClass: "w-full md:w-[31%]",
    description: "Conversations with the minds building the future of Web3.",
    counter: "178K+",
    subheading: "Watch Hours",
    link: "https://www.quranium.org/the-uncrackable-conversation",
    target: "_self",
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
    <div ref={sectionRef} className="relative bg-[#0C0318] px-5 pt-[210px]">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h4 md:text-h3 font-montserrat font-semibold text-center"
        >
          Thought Leadership
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
              <Link
                href={card.link}
                target={card.target}
                className="relative w-full h-auto md:h-full overflow-hidden"
              >
                {/* Front Side */}
                <div className="md:h-full bg-roadshow-reverse-border group-hover:bg-purple-border p-[1px] rounded-[16px]">
                  <div className="bg-[#181022] hover:bg-[#1B0637]  h-full rounded-[16px] overflow-hidden flex flex-col justify-between text-left">
                    <div className="flex flex-col justify-center1 items-center1 gap-2 px-[32px] pt-[32px] pb-[40px]">
                      <h4 className="text-h4 font-montserrat font-semibold">{card.title}</h4>
                      <p className="text-p1 font-montserrat font-normal">{card.description}</p>
                    </div>
                    <div className="w-full relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={660}
                        height={304}
                        className="w-full"
                      />
                      <div className="w-full absolute p-5 bottom-0 left-0">
                        <h4 className="text-[#C894FF] text-h4 font-montserrat font-semibold">
                          {card.counter}
                        </h4>
                        <h6 className="text-h6 font-montserrat font-medium">{card.subheading}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
