"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NotificationBar = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const boxRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mb-5 relative">
      <div
        ref={sectionRef}
        className="px-4 before:absolute before:inset-0 before:bg-[url('/images/homepage/nb-small.webp')] md:before:bg-[url('/images/homepage/nb-large.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:-z-10"
      >
        <div ref={boxRef} className="relative">
          <div className="relative z-10  mx-auto  flex flex-row items-center justify-center gap-5 py-[10px]">
            <h5
              ref={sectionRef}
              className="text-white text-p2 md:text-h6 font-normal md:font-medium leading-tight"
            >
              $QRN Public Pre-Sale is now live on Republic.
            </h5>

            <div ref={buttonRef} className="">
              <Link href="https://republic.com/quranium" target="_blank" rel="noopener noreferrer">
                <Button className="group relative overflow-hidden text-[#601dff] hover:text-[#ffffff] bg-[#ffffff]">
                  <span className="absolute inset-0 z-0 bg-[#601dff] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#601dff] group-hover:text-[#ffffff] transition-colors duration-500">
                    Invest Now
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
