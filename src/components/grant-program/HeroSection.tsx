"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef(null);

  const splitWords = (el: HTMLElement, spanClass: string) => {
    const wrapWords = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const words = text.split(/(\s+)/);
        return words.map((part) => {
          if (part.trim().length === 0) return document.createTextNode(part);
          const span = document.createElement("span");
          span.className = `${spanClass} inline-block opacity-0`;
          span.textContent = part;
          return span;
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const clone = element.cloneNode(false) as HTMLElement;
        Array.from(node.childNodes).forEach((child) => {
          wrapWords(child).forEach((wrappedChild) => {
            clone.appendChild(wrappedChild);
          });
        });
        return [clone];
      } else {
        return [node];
      }
    };

    const newChildren = Array.from(el.childNodes).flatMap((node) => wrapWords(node));
    el.innerHTML = "";
    newChildren.forEach((n) => el.appendChild(n));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = document.querySelector(".hero-title") as HTMLElement;
      const subtext = document.querySelector(".hero-subtext") as HTMLElement;

      if (title) splitWords(title, "word");
      if (subtext) splitWords(subtext, "subword");

      gsap.set(".hero-title .word", { y: 100, opacity: 0 });
      gsap.set(".hero-subtext .subword", { y: 20, opacity: 0 });

      gsap.to(".hero-overlay", {
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          const el = document.querySelector(".hero-overlay");
          if (el) el.remove();
        },
      });

      gsap.to(".hero-title .word", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });

      gsap.to(".hero-subtext .subword", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.01,
        delay: 1,
      });

      const isMobile = window.innerWidth < 640;
      const buttonClass = isMobile ? ".hero-button" : ".sm-hero-button";
      gsap.from(buttonClass, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[url('/images/grant-program/gpbanner.webp')] bg-cover bg-right sm:bg-center"
    >
      <div className="absolute inset-0 bg-black z-20 hero-overlay" />
      <div className="relative pt-56 pb-40 md:pt-72 md:pb-60 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between lg:items-center gap-10">
              {/* Left Text Section */}
              <div>
                <h1 className="text-h4 md:text-h2 font-montserrat font-bold hero-title">
                  The DeQUIP Grant <br /> Program
                </h1>
                <div className="hidden sm:flex flex-col md:flex-row gap-4 mt-5 sm-hero-button">
                  <Link href="/apply-grant-program" target="_self" rel="noopener noreferrer">
                    <Button className="group w-full md:w-auto relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                        Submit Application
                        <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  <Link href="/community" target="_self" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="group w-full md:w-auto relative overflow-hidden bg-transparent"
                    >
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center bg-transparent text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                        Join Community
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col items-start space-y-6">
                <p className="text-p1 font-normal lg:max-w-[461px] hero-subtext">
                  The Decentralized Quantum-Uncrackable Infrastructure Protocol, is Quranium&rsquo;s
                  initiative that supports developers worldwide in creating future-proof projects
                  that enable adoption today and remain uncrackable tomorrow.
                </p>
                <div className="w-full flex flex-col md:flex-row gap-4 mt-10 sm:hidden hero-button">
                  <Link href="/apply-grant-program" target="_self" rel="noopener noreferrer">
                    <Button className="group w-full md:w-auto relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                        Submit Application
                        <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  <Link href="/community" target="_self" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="group w-full md:w-auto relative overflow-hidden bg-transparent"
                    >
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center bg-transparent text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                        Join Community
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
