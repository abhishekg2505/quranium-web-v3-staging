"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialMedia } from "@/src/constants/socialMedia";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function FooterSocial() {
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
    <div ref={sectionRef} className="relative bg-[#0C0318] px-5 pt-16 pb-[140px]">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
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
