"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          pin: true, // 👈 pin until animation finishes
        },
      });

      wordRefs.current.forEach((wordEl, wordIndex) => {
        const mask = wordEl.querySelector(".line-mask") as HTMLDivElement;
        const letters = wordEl.querySelectorAll("span.letter");

        if (!mask || letters.length === 0) return;

        tl.to(
          mask,
          {
            xPercent: 100,
            ease: "power2.out",
            duration: 4 + letters.length * 2,
          },
          `+=${wordIndex * 2}`
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="container mx-auto px-4 md:px-10 py-40 flex flex-wrap gap-x-3 gap-y-4 text-h5 md:text-h2 font-montserrat font-semibold"
    >
      {text.split(" ").map((word, wordIndex) => (
        <div
          key={wordIndex}
          ref={(el) => {
            if (el) wordRefs.current[wordIndex] = el;
          }}
          className="relative inline-block overflow-hidden"
        >
          <div className="relative z-0 flex">
            {word.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className="letter text-[#EAEAEA] inline-block text-h5 md:text-h2 font-montserrat font-semibold md:leading-[74px]"
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="line-mask absolute top-0 left-0 h-full w-full bg-[#0C0318] opacity-90 z-10 pointer-events-none" />
        </div>
      ))}
    </section>
  );
};

export default TextReveal;
