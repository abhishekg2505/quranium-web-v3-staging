// components/TimelineCard.tsx
import React from "react";
import { timelineData } from "@/src/constants/timelineData";
import Image from "next/image";

interface CardProps {
  event: timelineData;
}

const VerticalTimeLineCard: React.FC<CardProps> = ({ event }) => (
  <div
    className={`border-[1.5px] border-[#FFFFFF33] p-[1.5px] rounded-[20px] ${
      event.row === "above" ? "mb-2.5" : "mt-1"
    }`}
  >
    <div
      className={` ${
        event.planned ? "bg-[#0E002A]" : "bg-[#181022]"
      }  bg-right-bottom w-[400px] rounded-[20px] px-6 py-4`}
    >
      <div className="flex flex-row items-center justify-between mt-5">
        {event.period && (
          <h5 className="text-h5 font-montserrat font-medium">
            <span className="text-[#01B879]">{event.period}</span>
          </h5>
        )}
        {event.planned && (
          <div className="flex flex-row items-center text-p4 font-open-sans px-3 rounded-[5px] py-1 text-[#ffffff] bg-[#601DFF] font-semibold">
            <Image src="/images/about/flag.png" alt="Flag" width={18} height={18} /> Planned
          </div>
        )}
      </div>
      <ul className="mt-2 list-none list-inside">
        {event.items.map((item, i) => (
          <li key={i} className="flex flex-row gap-x-2 justify-start items-start mt-2">
            <Image
              src="/images/about/star.png"
              alt="star"
              width={20}
              height={24}
              className="w-[20px] h-[24px] flex-shrink-0"
            />
            <div className="text-p3 font-open-sans font-normal">
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default VerticalTimeLineCard;
