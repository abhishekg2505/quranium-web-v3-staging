"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    counter: "150,000+",
    description: "Community",
    image: "images/homepagev2/community.svg",
    classcss: "",
  },
  {
    counter: "30,000+",
    description: "Wallets created on-chain",
    image: "images/homepagev2/wallet.svg",
    classcss: "",
  },
  {
    counter: "153,000+",
    description: "Testnet Transactions",
    image: "images/homepagev2/transaction.svg",
    classcss: "",
  },

  {
    counter: "80+",
    description: "MOUs signed",
    image: "images/homepagev2/signed.svg",
    classcss: "col-start-2",
  },
];

export default function Traction() {
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
    <div ref={sectionRef} className="relative bg-[#0C0318] px-5 pt-16 pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <div className="relative grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 mt-[60px] gap-5 ">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group ${card.classcss}`}
            >
              <div className="relative w-full h-auto md:h-[266px]">
                {/* Front Side */}
                <div className="rounded-[20px] h-full p-[1px] bg-roadshow-reverse-border group-hover:bg-purple-border">
                  <div className="bg-[#181022] hover:bg-[#1B0637] p-6 h-full rounded-[20px] flex flex-col items-center text-center">
                    <Image
                      src={card.image}
                      alt={card.description}
                      width={40}
                      height={40}
                      className="mx-auto"
                    />
                    <h3 className="text-h4 md:text-[60px] font-montserrat leading-none font-bold text-center mt-10 mb-5 text-[#C894FF]">
                      {card.counter}
                    </h3>
                    <p className="text-p2 font-montserrat font-normal">{card.description}</p>
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
