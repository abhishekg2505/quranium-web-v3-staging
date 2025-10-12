"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    key: "phase1",
    label: "Phase I – 2025",
    color: "bg-[linear-gradient(180deg,#0021C7_0%,#000D4E_100%)]", // blue
    content: (
      <div>
        <h3 className="text-h4 font-semibold font-montserrat mb-4 text-white">
          Quantum Secure Layer-1 Blockchain Infrastructure
        </h3>
        <ul className="list-none space-y-3">
          <li className="">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image
                src="/images/homepagev2/check-circle.svg"
                alt="check circle"
                width={20}
                height={20}
              />
              Core IP developed for Quantum-Secure public ecosystem
            </div>

            <ul className="pl-6">
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  SLHDSA
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  PoS
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  EVM Compatibility
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  Wallet
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  DEX
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  Quests Platform
                </div>
              </li>
            </ul>
          </li>

          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image
                src="/images/homepagev2/check-circle.svg"
                alt="check circle"
                width={20}
                height={20}
              />
              Established Post-quantum thought leadership
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Launch public mainnet
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "phase2",
    label: "Phase II – 2026",
    color: "bg-[linear-gradient(180deg,#00AA4E_0%,#003317_100%)]", // green
    content: (
      <div className="text-white">
        <h3 className="text-h4 font-semibold font-montserrat mb-4">Phase II Content</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>Feature or milestone for 2026
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>Another improvement
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "phase3",
    label: "Phase III – 2027",
    color: "bg-[linear-gradient(180deg,#550083_0%,#13001D_100%)]", // purple
    content: (
      <div className="text-white">
        <h3 className="text-h4 font-semibold font-montserrat mb-4">Phase III Content</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>Major roadmap milestone
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>Future development goal
          </li>
        </ul>
      </div>
    ),
  },
];

export default function LookingAhead() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const [activePhase, setActivePhase] = useState(phases[0].key);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#030712] px-5 pt-16 pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h4 md:text-h3 font-montserrat font-semibold text-left"
        >
          Looking Ahead
        </h2>
        <p ref={para1Ref} className="text-p1 font-open-sans font-normal mt-5">
          The Uncrackable Future
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-[40%_60%] md:grid-cols-[30%_70%] gap-6 mt-[60px]">
          {/* left side */}
          <div className="relative flex justify-center items-start">
            <Image
              src="/images/homepagev2/shell.webp"
              alt="shell"
              width={395}
              height={702}
              className="w-full max-w-[360px] mx-auto"
              priority
            />
          </div>
          {/* right side */}
          <div>
            {/* Tab Bar */}
            <div className="flex mb-2 gap-3">
              {phases.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActivePhase(p.key)}
                  className={`
                    px-5 py-2 text-h4 font-montserrat rounded-[4px] font-semibold text-white
                    ${activePhase === p.key ? p.color : "bg-[#17171a] text-[#a3a3a3]"}
                    transition-colors duration-150 border-none focus:outline-none
                  `}
                  type="button"
                >
                  {p.label}
                </button>
              ))}
            </div>
            {/* Active Tab Content */}
            <div className="rounded-b-2xl rounded-[16px] bg-[#0120C533] px-[32px] py-5 min-h-[360px]">
              {phases.find((p) => p.key === activePhase)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
