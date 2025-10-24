"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const anchorCards = [
  {
    title: "Whitepaper",
    desc: "Regulatory and technical overview of the QRN token under MiCAR, outlining its purpose, use, and governance.",
    link: "/whitepaper",
  },
  {
    title: "Core Chain",
    desc: "Technical documentation of Quranium’s quantum-secure Proof-of-Stake architecture, detailing SLH-DSA integration, validator protocols, and performance scaling.",
    link: "https://docs.quranium.org",
  },
  {
    title: "QSafe Wallet",
    desc: "Comprehensive guide to Quranium’s quantum-secure, multi-chain wallet with ML-KEM encryption, cross-chain transactions, and best security practices.",
    link: "http://docs.qsafewallet.com",
  },
  {
    title: "QRemix AI",
    desc: "Documentation for Quranium’s AI-powered IDE, featuring contract creation, AI code generation, debugging, and secure smart contract deployment.",
    link: "http://docs.qremix.org",
  },
  {
    title: "QRN Scan",
    desc: "Guide to exploring Quranium’s blockchain data, transactions, blocks, and wallets, through the official quantum-secure explorer.",
    link: "http://docs.qrnscan.com",
  },
  {
    title: "Lightpaper",
    desc: "Explore the blueprint behind Quranium’s quantum-secure foundation.",
    link: "https://docsend.com/view/mgz5m2vwpsgvmfkr",
  },
];

const CoreDocuments = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
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
    <section
      ref={sectionRef}
      className="md:pt-[100px] pb-[160px] container mx-auto px-4 bg-background"
    >
      <h2
        ref={mainTitleRef}
        className="text-h4 md:text-h3 font-montserrat font-semibold text-center mb-[60px]"
      >
        Core Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        {anchorCards.map((card, index) => (
          <div
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            key={index}
          >
            <Link href={card.link} target="_blank" rel="noopener noreferrer">
              <div className="group perspective h-full">
                <div className="relative w-full h-full transition-transform">
                  <div className="bg-roadshow-reverse-border h-full p-[1px] rounded-[24px]">
                    <div className="bg-[#0C0318] py-[22px] px-[30px] h-full rounded-[24px] flex flex-col justify-between items-start text-left hover:bg-[#0A001F] hover:bg-[url('/images/common/svgicons/corner.png')] bg-contain bg-right-top bg-no-repeat transition-all duration-300 ease-in-out">
                      <div>
                        <h5 className="font-montserrat text-h5 font-medium">{card.title}</h5>
                        <p className="text-p3 font-open-sans font-normal mt-2 mb-10">{card.desc}</p>
                      </div>
                      <Image
                        src="/images/common/svgicons/right-arrow.svg"
                        alt="icon"
                        width={27}
                        height={21}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreDocuments;
