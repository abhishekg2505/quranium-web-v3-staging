"use client";

import Image from "next/image";

export default function InstitutionalReady() {
  const cards = [
    {
      title: "Time Horizon",
      desc: "Regulated assets (securities, health data, IP) must remain valid 10–30+ years",
      sub: "SLH-DSA (SPHINCS+) Hash-based signatures give the most conservative, future-proof guarantee",
      sub2: "",
    },
    {
      title: "Auditability & Compliance",
      desc: "Simpler primitives = easier audits, fewer hidden risks, higher regulator confidence",
      sub: "Hash functions are the most battle-tested primitive in cryptography",
      sub2: "",
    },
    {
      title: "Trade-off",
      desc: "Institutions want both performance and long term assurance",
      sub: "Lattice = speed today but security compromised",
      sub2: "Hash-based = uncompromising security for decades, that’s Quranium",
    },
  ];

  return (
    <section className="relative bg-[#0C0318] py-24 px-4 md:px-20 overflow-hidden">
      {/* Left glowing image */}
      <div className="absolute left-0 top-[55%] -translate-y-1/2 hidden md:block z-[9]">
        <Image
          src="/images/homepagev2/left-glow.webp"
          alt="Left Glow"
          width={250}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right glowing image */}
      <div className="absolute right-0 top-[57%] -translate-y-1/2 hidden md:block z-[9]">
        <Image
          src="/images/homepagev2/right-glow.webp"
          alt="Right Glow"
          width={228}
          height={450}
          className="object-contain"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-h4 md:text-h3 font-montserrat font-semibold">Institutional Ready</h2>
        <p className="text-p1 font-open-sans mt-4 mb-[60px]">Quramium&rsquo;s Core Advantages</p>

        {/* Cards */}
        <div className="flex flex-col gap-[40px] relative z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#181022] md:w-[854px] mx-auto border-[1.5px] border-[#FFFFFF33] rounded-[16px] p-5 text-center"
            >
              <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 hidden md:block z-[1]">
                <Image
                  src="/images/homepagev2/white-line.png"
                  alt="Left Image"
                  width={100}
                  height={11}
                  className="object-contain"
                />
              </div>

              {/* Right Image */}
              <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 hidden md:block z-[1]">
                <Image
                  src="/images/homepagev2/purple-line.png"
                  alt="Right Image"
                  width={100}
                  height={11}
                  className="object-contain"
                />
              </div>
              <h3 className="text-h4 font-montserrat font-semibold text-[#D6DDE6]">{card.title}</h3>
              <p className="text-p1 font-open-sans my-[10px]">{card.desc}</p>
              <p className="text-p1 text-[#C894FF] font-open-sans">{card.sub}</p>
              <p className="text-p1 text-[#C894FF] font-open-sans">{card.sub2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
