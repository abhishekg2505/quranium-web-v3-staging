"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { phases } from "@/src/constants/phases"; // your data from above
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import gsap from "gsap";
const phases = [
  {
    key: "phase1",
    label: "Phase I",
    color: "bg-[#4F0179]",
    tabarea: "bg-[#25003A]",
    video: "/videos/homepage/shell-purple.webm",
    content: (
      <div>
        <h3 className="text-h5 font-semibold font-montserrat mb-4 text-white">
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
              Core IP developed for Quantum-Secure Layer-1 ecosystem
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
              Established post-quantum thought leadership
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "phase2",
    label: "Phase II",
    color: "bg-[#017234]",
    tabarea: "bg-[#013518]",
    video: "/videos/homepage/shell-green.webm",
    content: (
      <div className="text-white">
        <h3 className="text-h5 font-semibold font-montserrat mb-4">
          Post-quantum Financial Infrastructure
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image
                src="/images/homepagev2/check-circle.svg"
                alt="circle"
                width={20}
                height={20}
              />
              Solutions for banking and institutional finance
            </div>
          </li>
          <li className="">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image
                src="/images/homepagev2/check-circle.svg"
                alt="circle"
                width={20}
                height={20}
              />
              Institutional grade solutions for
            </div>
            <ul className="pl-6">
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  Post-quantum BTC
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  Post-quantum reserves
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  Post-quantum DATs
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  Post-quantum banking
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  Post-quantum payments
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="circle"
                    width={20}
                    height={20}
                  />
                  Post-quantum remittance
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "phase3",
    label: "Phase III 2026",
    color: "bg-[#01178B]",
    tabarea: "bg-[#191E3F]",
    video: "/videos/homepage/shell-blue.webm",
    content: (
      <div className="text-white">
        <h3 className="text-h5 font-semibold font-montserrat mb-4">
          Post-quantum Agentic AI Infrastructure
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Post-quantum Agentic AI Infrastructure
            </div>
          </li>

          <li className="">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Agent to agent interactions
            </div>
            <ul className="pl-6">
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  ID
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Data
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Payments
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  IoT
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
];
export default function LookingAhead() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animate card when 'current' changes
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [current]);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % phases.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + phases.length) % phases.length);

  return (
    <section className="relative bg-[#0C0318] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* ---- Title ---- */}
        <div className="text-center mb-10">
          <h2 className="text-h3 font-montserrat font-semibold mb-2">Looking Ahead</h2>
          <p className="text-p1 font-open-sans text-gray-300">The Uncrackable Future</p>
        </div>

        {/* ---- Tabs ---- */}
        <div className="flex flex-wrap justify-between gap-4 md:gap-0">
          {phases.map((phase, idx) => (
            <button
              aria-label={phase.label}
              key={phase.key}
              onClick={() => setCurrent(idx)}
              className={`px-5 py-2 w-full  md:w-[32%] rounded-[16px] md:rounded-[4px] font-montserrat text-h5 font-normal transition-all duration-300 ${
                phase.color
              } ${current === idx ? "opacity-100" : "opacity-30"} `}
            >
              <span className={``}>{phase.label}</span>
            </button>
          ))}
        </div>

        {/* ---- Slider Layout ---- */}
        <div
          ref={cardRef}
          className={`relative grid grid-cols-1 md:grid-cols-[40%_60%] items-center mt-5 rounded-[16px] py-5 ${phases[current].tabarea}`}
        >
          {/* ---- Left Side (Video) ---- */}
          <div className="flex justify-center items-center relative">
            <video
              key={phases[current].video}
              src={phases[current].video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[260px] object-contain"
            />
          </div>

          {/* ---- Right Side (Content Card) ---- */}
          <div className={`relative transition-all duration-500 p-8 `}>
            {phases[current].content}
          </div>

          {/* ---- Navigation Arrows ---- */}
          <button
            aria-label="Previous slide"
            onClick={prevSlide}
            className="absolute left-0 md:left-[-2%] top-1/2 -translate-y-1/2 bg-[#181022]/60 hover:bg-[#181022]/90 p-3 rounded-full border border-white/20 z-10 transition"
          >
            <MoveLeftIcon className="w-4 h-4 group-hover:stroke-[#ffffff]" />
          </button>
          <button
            aria-label="Next slide"
            onClick={nextSlide}
            className="group absolute right-0 md:right-[-2%] top-1/2 -translate-y-1/2 bg-[#181022]/60 hover:bg-[#181022]/90 p-3 rounded-full border border-white/20 z-10 transition"
          >
            <MoveRightIcon className="w-4 h-4 group-hover:stroke-[#ffffff]" />
          </button>
        </div>
      </div>
    </section>
  );
}
