"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  title: string;
  description: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "500+",
    description: "Hours of watch time",
  },
  {
    title: "35+",
    description: "Watched from Countries",
  },
  {
    title: "20M+",
    description: "Reach through Media Partners",
  },
];

const WatchCounter: React.FC = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <>
      <div
        ref={sectionRef}
        className="px-0 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-6 rounded-xl md:px-6 pt-0 pb-[30px]"
      >
        {threats.map((threat, index) => (
          <div
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            key={index}
            className="bg-roadshow-reverse-border rounded-[20px] p-[1px] md:min-h-[329px]"
          >
            <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-right-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-center items-center text-center p-6 md:pb-[40px] h-full hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
              <div className="flex flex-col items-center text-center">
                <h3
                  className="text-[100px] font-montserrat font-normal text-transparent bg-clip-text leading-none"
                  style={{
                    backgroundImage: "linear-gradient(258.27deg, #FFFFFF 16.23%, #4C00FF 134.71%)",
                  }}
                >
                  {threat.title}
                </h3>

                <h5 className="text-h5 font-montserrat font-medium mt-5">{threat.description}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchCounter;
