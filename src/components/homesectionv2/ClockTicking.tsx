"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ClockTicking = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      // Animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate gradient line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
        },
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-4 md:px-20 bg-[#0C0318]">
      <div className="max-w-7xl mx-auto pt-[80px] pb-[50px] px-[16px]">
        <h1
          ref={mainTitleRef}
          className="text-center text-h4 md:text-h3 font-montserrat font-semibold text-white mb-[15px]"
        >
          <span className="bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
            The Clock is Ticking
          </span>
        </h1>
        <p ref={headingRef} className="text-p1 font-open-sans mb-[15px] text-center">
          Existing L1s rely on ECDSA encryption, which is rapidly approaching obsolescence as
          computing power increases.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%]  overflow-hidden gap-10 items-center text-center md:text-left border-[1.5px] border-[#3A3A3A] rounded-[16px] p-5 md:p-10 mt-10">
          <div className="relative mx-auto w-full max-w-[300px] aspect-[300/300]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-contain md:object-cover z-0"
            >
              <source src="/videos/homepage/sandbox.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative md:pr-20">
            <h4 className="text-h4 font-montserrat font-semibold  text-left">
              <span className="bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
                The Quantum Threat is Real.
              </span>
              Your Digital Assets Are Not Safe.
            </h4>
            <p ref={headingRef} className="text-p1 font-open-sans mb-[15px] text-left">
              The &rsquo;Store Now, Decrypt Later&rsquo; threat is no longer a theory, it means
              current smart contracts and wallets are fundamentally unsafe. A secure solution that
              lasts 30+ years doesn&rsquo;t exist...{" "}
              <span className="bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text italic">
                Until now
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockTicking;
