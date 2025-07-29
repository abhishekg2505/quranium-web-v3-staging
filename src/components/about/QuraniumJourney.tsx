"use client";
import { timelineData } from "@/src/constants/timelineData";
import clsx from "clsx";

export default function QuraniumJourney() {
  return (
    <div className="relative w-full overflow-x-auto py-12 px-4">
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500/30 z-0" />

      {/* Timeline container */}
      <div className="flex space-x-10 relative z-10 min-w-max">
        {timelineData.map((item, index) => {
          const isAbove = index % 2 === 0;
          return (
            <div
              key={index}
              className={clsx(
                "relative flex flex-col items-center w-72 min-w-[18rem]",
                isAbove ? "translate-y-[-140px]" : "translate-y-[140px]"
              )}
            >
              {/* Point on the line */}
              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10" />

              {/* Card */}
              <div className="bg-[#1c1a2e] text-white border border-white/10 rounded-xl p-6 mt-4 shadow-md">
                <div className="text-sm text-white/70 mb-2">{item.quarter}</div>
                <ul className="text-sm space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">★</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
