"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { verticalTimeLineData } from "@/src/constants/verticalTimeLineData";
import VerticalTimeLineCard from "./VerticalTimeLine/VerticalTimeLineCard";

export default function VerticalTimeLine() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [atStart, setAtStart] = useState(true);

  const aboveEvents = verticalTimeLineData.filter((e) => e.row === "above");
  const belowEvents = verticalTimeLineData.filter((e) => e.row === "below");

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setAtStart(scrollLeft <= 10);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    };

    handleScroll(); // Set initial state
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (atEnd) {
      // If already at end, and user clicks left arrow, go all the way back
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Scroll forward by 400px
      container.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-[50px] md:h-[105px] bg-[#010301]"></div>
      <div className="w-full px-4 md:pl-10 relative overflow-x-hidden bg-[#030712]">
        <h3 className="text-h5 md:text-h3 font-montserrat font-semibold text-center md:mb-[78px] absolute top-0 left-0 w-full">
          Roadmap
        </h3>

        {/* Scroll Arrow */}
        {!atStart || !atEnd ? (
          <div
            onClick={handleArrowClick}
            className={`absolute z-[11] top-[48%] md:top-[47%] w-[100px] h-[100px] transition-all duration-500 ${
              atEnd ? "left-5" : "right-5"
            } cursor-pointer animate-left-right`}
          >
            <Image
              src="/images/about/btn.svg"
              alt="Arrow"
              width={72}
              height={72}
              className={`w-[42px] h-[42px] md:w-[72px] md:h-[72px] ${atEnd ? "rotate-180" : ""}`}
            />
          </div>
        ) : null}

        {/* Center line */}
        <div className="absolute z-10 left-20 right-0 top-1/2 w-[2000px] h-[1.5px] bg-[linear-gradient(90deg,rgba(1,184,121,0)_0%,#01B879_5%,#01B879_93.75%,rgba(1,184,121,0)_100%)]" />

        <div
          ref={scrollContainerRef}
          className="scrollablearea overflow-x-auto scrollbar-hide relative pt-[125px] pb-24 px-4 pl-4 md:pl-10 "
        >
          <div className="relative z-10 min-w-max1 max-w-[2000px]">
            {/* ABOVE ROW */}
            <ul className="flex min-w-max mb-10 pl-[180px]">
              {verticalTimeLineData.map((event, idx) =>
                event.row === "above" ? (
                  <li key={idx} className="relative flex flex-col items-center justify-end">
                    <VerticalTimeLineCard event={event} />
                    <div className="aboveImg w-[10px] absolute z-10 -bottom-[43px]">
                      <Image
                        src="/images/homepagev2/upward.svg"
                        alt="Upward"
                        width={62}
                        height={10}
                      />
                    </div>
                  </li>
                ) : (
                  <li key={idx} className="w-[80px] md:w-[110px]" />
                )
              )}
            </ul>

            {/* Dots row */}
            <ul className="flex space-x-16 min-w-max items-center">
              {verticalTimeLineData.map((_, idx) => (
                <li key={idx} className="flex justify-center w-[480px]" />
              ))}
            </ul>

            {/* BELOW ROW */}
            <ul className="flex min-w-max mt-10">
              {verticalTimeLineData.map((event, idx) =>
                event.row === "below" ? (
                  <li key={idx} className="relative flex flex-col items-center">
                    <div className="belowImg w-[10px] absolute z-10 -top-[43px]">
                      <Image
                        src="/images/homepagev2/downward.svg"
                        alt="Downward"
                        width={62}
                        height={10}
                      />
                    </div>
                    <VerticalTimeLineCard event={event} />
                  </li>
                ) : (
                  <li key={idx} className="w-[80px] md:w-[110px]" />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
