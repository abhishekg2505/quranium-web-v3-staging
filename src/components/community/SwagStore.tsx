"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SwagStore: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const para2Ref = useRef(null);
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/swag-products");
      const data = await res.json();
      setProducts(data);
    }
    loadProducts();
  }, []);
  // console.log("Products:", products);
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
        delay: 0.2,
        ease: "power2.out",
      });
      gsap.from(para1Ref.current, {
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

      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="swag-store"
      className="scroll-mt-24 pt-16 pb-[120px] container mx-auto px-4 md:px-20 bg-background overflow-hidden"
    >
      <div className="space-y-0 md:space-y-12">
        <div className="grid md:grid-cols-[60%_40%] gap-6 md:gap-0 items-start pb-[0px]">
          <div>
            <h2 className="text-h4 md:text-h3 font-montserrat font-semibold">
              Presenting Quranium Swag Store
            </h2>
            <h5 className="text-h5 font-montserrat font-medium my-[15px]">
              Gear for the Quantum Future, Swag built on the future of trust
            </h5>
            <p className="text-p2 font-open-sans text-white-2">
              From tees and hoodies to caps, the Quranium Swag Store has everything to rep the
              movement. Each piece carries the spirit of Web3 and the power of quantum secure
              blockchain. It&rsquo;s more than merch, it&rsquo;s proof of belonging.
            </p>
          </div>
          <div className="md:text-right hidden md:block">
            <Link href="https://swag-store-by-quranium.myshopify.com/products" target="_blank">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Shop the Swag Store
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Slider */}

        <div className="relative w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onResize={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation]}
            speed={500}
            loop={false}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            className="my-linear-swiper overflow-hidden1 flex mt-10 "
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  key={product._id}
                  className="group perspective "
                >
                  <Link
                    href={
                      product.onlineStoreUrl ||
                      `https://swag-store-by-quranium.myshopify.com/products/${product.handle}`
                    }
                    target="_blank"
                    className="relative w-full bg-[#100A29] bg-card-gradient p-[1px] rounded-[20px]"
                  >
                    <div className="overflow-hidden rounded-[20px_20px_0px_0px] flex flex-col justify-start items-start text-left transition-colors duration-300 ease-in-out">
                      {product.images.edges[0]?.node?.src && (
                        <Image
                          src={product.images.edges[0].node.src}
                          alt={product.images.edges[0].node.altText || product.title}
                          width={360}
                          height={360}
                          className="transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="bg-[#100A29] flex flex-col gap-[12px] p-5 rounded-[0px_0px_20px_20px]">
                      <h6 className="text-h6 font-montserrat font-medium">{product.title}</h6>
                      <div className="h-full w-full flex flex-row justify-between items-center text-left transition-colors duration-300 ease-in-out">
                        <h6 className="text-h6 font-montserrat font-medium">
                          ${product.variants.edges[0]?.node?.price.amount}
                        </h6>
                        <div className="flex flex-col md:flex-row flex-wrap items-end justify-between">
                          <div className="md:basis-10/12"></div>

                          <Image
                            src="/images/community/merch/gradient-arrow-right.svg"
                            alt="Gradient Arrow Right"
                            width={20}
                            height={20}
                            className="ml-2 transition-all duration-400 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
            {/* Left Arrow */}
            <div
              className={`group flex items-center justify-center swiper-prev absolute left-0 top-1/2 md:transform md:-translate-y-1/2 z-10 bg-background border border-[#999999]  w-10 h-10 rounded-full cursor-pointer ${
                isBeginning ? "opacity-50 pointer-events-none" : "opacity-100"
              }`}
            >
              <Image
                src="/images/community/merch/gradient-arrow-left.svg"
                alt="Gradient Arrow Left"
                width={20}
                height={20}
                className="transition-all duration-400 group-hover:-translate-x-1"
              />
            </div>

            {/* Right Arrow */}
            <div
              className={`group flex items-center justify-center swiper-next absolute right-0 top-1/2 md:transform md:-translate-y-1/2 z-10 bg-background border border-[#999999] w-10 h-10 rounded-full cursor-pointer ${
                isEnd ? "opacity-50 pointer-events-none" : "opacity-100"
              }`}
            >
              <Image
                src="/images/community/merch/gradient-arrow-right.svg"
                alt="Gradient Arrow Right"
                width={20}
                height={20}
                className="transition-all duration-400 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
        <div className="text-center block md:hidden mt-0">
          <Link href="https://swag-store-by-quranium.myshopify.com/products" target="_blank">
            <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
              <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                Shop the Swag Store
                <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SwagStore;
