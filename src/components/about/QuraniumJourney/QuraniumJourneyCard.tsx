// components/TimelineCard.tsx
import React from "react";
import { timelineData } from "@/src/constants/timelineData";
import Image from "next/image";

interface CardProps {
  event: timelineData;
}

const QuraniumJourneyCard: React.FC<CardProps> = ({ event }) => (
  <div
    className={`bg-card-border p-[1px] rounded-[20px] ${event.row === "above" ? "mb-3" : "mt-3"}`}
  >
    <div
      className={` ${
        event.planned ? "bg-[#0E002A]" : "bg-[#0D0419]"
      } hover:bg-[url(/images/about/mesh.png)] bg-contain bg-no-repeat bg-right-bottom w-[400px] rounded-[20px] px-6 py-4`}
    >
      <ul className="mt-2 list-none list-inside">
        {event.items.map((item, i) => (
          <li key={i} className="flex flex-row gap-x-2 justify-start items-start mt-2">
            <div className="basis-[25px]">
              <Image src="/images/about/star.png" alt="star" width={25} height={29} />
            </div>
            <div className="text-p2 font-open-sans font-normal">
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center justify-between mt-5">
        {event.period && (
          <h5 className="text-h5 font-montserrat font-medium">
            <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
              {event.period}
            </span>
          </h5>
        )}
        {event.planned && (
          <div className="flex flex-row items-center text-p4 font-open-sans px-3 rounded-[5px] py-1 text-[#ffffff] bg-[#601DFF] font-semibold">
            Planned
          </div>
        )}
      </div>
    </div>
  </div>
);

export default QuraniumJourneyCard;
