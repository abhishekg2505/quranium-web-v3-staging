import Image from "next/image";
import { timelineData } from "@/src/constants/timelineData";
import QuraniumJourneyCard from "./QuraniumJourney/QuraniumJourneyCard";
import { MoveRight } from "lucide-react";

export default function QuraniumJourney() {
  const aboveEvents = timelineData.filter((e) => e.row === "above");
  const belowEvents = timelineData.filter((e) => e.row === "below");

  const eventsLength = Math.max(aboveEvents.length, belowEvents.length);

  return (
    <>
      <div className="h-[50px] md:h-[105px]"></div>
      <div className="w-full  px-4 md:pl-10 relative overflow-x-hidden">
        <h3 className="text-h5 md:text-h3 font-montserrat font-semibold text-center md:mb-[78px] absolute top-0 left-0 w-full">
          Quranium&rsquo;s Uncrackable Journey
        </h3>
        <div className="absolute right-10 top-1/2 w-[100px] h-[100px] animate-left-right">
          <p className="text-p3 font-montserrat">Slide right</p>
          <MoveRight className="d-inline-block" />
        </div>

        {/* Center line */}
        <div className="absolute left-20 right-0 top-1/2 w-[2000px] h-[1.5px] bg-[linear-gradient(90deg,_rgba(164,127,255,0)_0%,_#A47FFF_10.58%,_#A47FFF_79.33%,_rgba(164,127,255,0)_100%)]" />

        <div className="overflow-x-auto scrollbar-hide relative pt-[125px] pb-24 px-4 pl-4 md:pl-10 ">
          <div className="relative z-10 min-w-max1 max-w-[2000px]">
            {/* ABOVE ROW */}
            <ul className="flex min-w-max mb-10 pl-[180px]">
              {timelineData.map((event, idx) =>
                event.row === "above" ? (
                  <li key={idx} className="relative flex flex-col items-center justify-end">
                    <QuraniumJourneyCard event={event} />
                    <div className="aboveImg w-[10px] absolute z-10 -bottom-[40px]">
                      <Image src="/images/about/upward.svg" alt="Upwnward" width={62} height={10} />
                    </div>
                  </li>
                ) : (
                  <li key={idx} className="w-[110px]" />
                )
              )}
            </ul>

            {/* DOTS ROW */}
            <ul className="flex space-x-16 min-w-max items-center">
              {timelineData.map((_, idx) => (
                <li key={idx} className="flex justify-center w-[480px]">
                  {/* <span className="relative z-10 flex h-7 w-7 items-center justify-center">
                <span className="h-5 w-5 rounded-full bg-blue-600 border-4 border-white" />
              </span> */}
                </li>
              ))}
            </ul>

            {/* BELOW ROW */}
            <ul className="flex  min-w-max mt-10">
              {timelineData.map((event, idx) =>
                event.row === "below" ? (
                  <li key={idx} className="relative flex flex-col items-center">
                    <div className="belowImg w-[10px] absolute z-10 -top-[50px]">
                      <Image
                        src="/images/about/downward.svg"
                        alt="Downward"
                        width={62}
                        height={10}
                      />
                    </div>
                    <QuraniumJourneyCard event={event} />
                  </li>
                ) : (
                  <li key={idx} className="w-[110px]" />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
