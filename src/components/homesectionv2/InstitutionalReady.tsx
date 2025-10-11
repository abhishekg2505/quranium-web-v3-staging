"use client";

import Image from "next/image";

export default function InstitutionalReady() {
  const cards = [
    {
      title: "Time Horizon",
      desc: "Regulated assets (securities, health data, IP) must remain valid 10–30+ years",
      sub: "SLH-DSA (SPHINCS+) hash-based signatures give the most conservative, future proof guarantee",
    },
    {
      title: "Auditability & Compliance",
      desc: "Simpler primitives = easier audits, fewer hidden risks, higher regulator confidence",
      sub: "Hash functions are the most battle-tested primitive in cryptography",
    },
    {
      title: "Trade-off",
      desc: "Institutions want both performance and long term assurance",
      sub: "Lattice = speed today, Hash based = uncompromising security for decades",
    },
  ];

  return (
    <section className="relative bg-[#0a071a] py-24 overflow-hidden">
      {/* Left glowing image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
        <Image
          src="/images/homepagev2/left-glow.webp"
          alt="Left Glow"
          width={250}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right glowing image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
        <Image
          src="/images/homepagev2/right-glow.webp"
          alt="Right Glow"
          width={250}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-h3 font-montserrat font-semibold">Institutional Ready</h2>
        <p className="text-p1 font-open-sans mt-4 mb-[60px]">Quramium&rsquo;s Core Advantages</p>

        {/* Center vertical gradient line */}
        <div className="absolute left-1/2 top-[200px] bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6] to-transparent"></div>

        {/* Cards */}
        <div className="flex flex-col gap-[52px] relative z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#181022] max-w-[730px] mx-auto border-[1.5px] border-[#FFFFFF33] rounded-[16px] px-8 py-8 md:py-10 text-center"
            >
              {/* Connector dot */}
              <div
                className={`absolute top-1/2 w-4 h-4 rounded-full bg-[#3b82f6] border-4 border-[#0a071a] -translate-y-1/2 ${
                  index % 2 === 0
                    ? "md:-right-[38px] left-1/2 md:left-auto"
                    : "md:-left-[38px] left-1/2 md:left-auto"
                }`}
              ></div>

              {/* Dotted connector line */}
              <div
                className={`absolute top-1/2 h-[2px] w-[100vw] -translate-y-1/2 hidden md:block ${
                  index % 2 === 0
                    ? "right-full bg-[radial-gradient(circle,_rgba(59,130,246,0.8)_1px,_transparent_1px)] bg-[length:8px_2px]"
                    : "left-full bg-[radial-gradient(circle,_rgba(59,130,246,0.8)_1px,_transparent_1px)] bg-[length:8px_2px]"
                }`}
              ></div>

              <h3 className="text-h4 font-montserrat font-semibold text-[#D6DDE6]">{card.title}</h3>
              <p className="text-p1 font-open-sans my-5">{card.desc}</p>
              <p className="text-p1 text-[#C894FF] font-open-sans">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
