"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mediaPartners = [
  { name: "mp6", src: "/images/quantum-minds-podcast/mp6.svg" },
  { name: "mp12", src: "/images/quantum-minds-podcast/mp12.svg" },
  { name: "mp2", src: "/images/quantum-minds-podcast/mp2.svg" },
  { name: "mp4", src: "/images/quantum-minds-podcast/mp4.svg" },
  { name: "mp1", src: "/images/quantum-minds-podcast/mp1.svg" },
  { name: "mp14", src: "/images/quantum-minds-podcast/mp14.svg" },
];
const mediaPartners2 = [
  { name: "mp5", src: "/images/quantum-minds-podcast/mp5.svg" },
  { name: "mp8", src: "/images/quantum-minds-podcast/mp8.svg" },
  { name: "mp10", src: "/images/quantum-minds-podcast/mp10.svg" },
  { name: "mp11", src: "/images/quantum-minds-podcast/mp11.svg" },
  { name: "mp13", src: "/images/quantum-minds-podcast/mp13.svg" },
  { name: "mp15", src: "/images/quantum-minds-podcast/mp15.svg" },
];
const mediaPartners3 = [
  { name: "mp16", src: "/images/quantum-minds-podcast/mp16.svg" },
  { name: "mp17", src: "/images/quantum-minds-podcast/mp17.svg" },
  { name: "mp18", src: "/images/quantum-minds-podcast/mp18.svg" },
  { name: "mp19", src: "/images/quantum-minds-podcast/mp19.svg" },
  { name: "mp20", src: "/images/quantum-minds-podcast/mp20.svg" },
  { name: "mp21", src: "/images/quantum-minds-podcast/mp21.svg" },
];

export default function MediaPartner() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
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

  // Clear refs before rendering
  cardsRef.current = [];

  return (
    <div ref={sectionRef} className="px-4 md:px-20 mt-20 container">
      <div className="rounded-[30px] p-[1px] bg-roadshow-reverse-border">
        <div className="max-w-7xl bg-black mx-auto rounded-[30px] p-6">
          <h3 className="text-white font-semibold text-h4 font-montserrat text-center mb-2">
            Media Partners
          </h3>

          <div className="relative">
            {/* Optional Nav Buttons — uncomment if needed
            <div className="swiper-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
              <MoveLeft className="text-white" />
            </div>
            <div className="swiper-next absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
              <MoveRight className="text-white" />
            </div>
            */}

            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              className="overflow-hidden"
            >
              {mediaPartners.map((card, index) => (
                <SwiperSlide key={card.name}>
                  <div
                    ref={(el) => {
                      if (el) cardsRef.current.push(el);
                    }}
                    className="h-[100px] flex items-center justify-center"
                  >
                    <Image
                      src={card.src}
                      alt={card.name}
                      width={200}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                navigation={{
                  nextEl: ".swiper-next",
                  prevEl: ".swiper-prev",
                }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
                className="overflow-hidden"
              >
                {mediaPartners2.map((card, index) => (
                  <SwiperSlide key={card.name}>
                    <div
                      ref={(el) => {
                        if (el) cardsRef.current.push(el);
                      }}
                      className="h-[100px] flex items-center justify-center"
                    >
                      <Image
                        src={card.src}
                        alt={card.name}
                        width={200}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                navigation={{
                  nextEl: ".swiper-next",
                  prevEl: ".swiper-prev",
                }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
                className="overflow-hidden"
              >
                {mediaPartners3.map((card, index) => (
                  <SwiperSlide key={card.name}>
                    <div
                      ref={(el) => {
                        if (el) cardsRef.current.push(el);
                      }}
                      className="h-[100px] flex items-center justify-center"
                    >
                      <Image
                        src={card.src}
                        alt={card.name}
                        width={200}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
