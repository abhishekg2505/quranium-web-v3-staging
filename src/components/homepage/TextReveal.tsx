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
          end: "+=100", // 👈 enough scroll distance to animate slowly
          scrub: true,
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
            width: "0%",
            ease: "power2.out",
            duration: 1.3 + letters.length * 1.4,
          },
          `+=${wordIndex * 0.4}` // delay each word
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-4xl mx-auto px-4 py-40 text-2xl md:text-4xl font-semibold leading-relaxed flex flex-wrap gap-x-3 gap-y-4"
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
              <span key={letterIndex} className="letter text-white/30 inline-block">
                {letter}
              </span>
            ))}
          </div>
          <div className="line-mask absolute top-0 left-0 h-full w-full bg-[#0d0d0d] opacity-90 z-10 pointer-events-none" />
        </div>
      ))}
    </section>
  );
};

export default TextReveal;
