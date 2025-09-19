"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Step 1",
    description: "Apply",
  },
  {
    title: "Step 2",
    description: "Technical Review",
  },
  {
    title: "Step 3",
    description: "Community Signal",
  },
  {
    title: "Step 4",
    description: "Decision",
  },
  {
    title: "Step 5",
    description: "Milestones",
  },
  {
    title: "Step 6",
    description: "Payouts",
  },
];

export default function ActionPlan() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
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
    <div ref={sectionRef} className="relative bg-[#030712] px-5 pt-16 pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2 ref={mainTitleRef} className="text-h5 md:text-h4 font-montserrat font-bold text-center">
          Action Plan and How it Works?
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            loop={false}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1.1,
              },
              1024: {
                slidesPerView: 5.1,
              },
            }}
            className="overflow-hidden flex mt-10 "
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  key={index}
                  className="group"
                >
                  <div className="relative w-full">
                    {/* Front Side */}
                    <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                      <div className="bg-[url('/images/grant-program/grid.png')] bg-no-repeat bg-right-top bg-[length:150px_150px] bg-[#0D031B] hover:bg-[#1B0637] p-6 h-full rounded-[20px] flex flex-col items-start text-left py-10">
                        <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular text-center font-medium mt-5 bg-[linear-gradient(258.27deg,#FFFFFF_16.23%,#4C00FF_134.71%)] text-transparent bg-clip-text">
                          {card.title}
                        </h3>
                        <p className="text-p3 font-open-sans text-gray-300">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
            {/* Left Arrow */}
            <div className="swiper-prev md:absolute md:-left-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveLeft className="text-white" />
            </div>

            {/* Right Arrow */}
            <div className="swiper-next md:absolute md:-right-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
