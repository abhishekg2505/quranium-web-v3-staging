import { timeline } from "@/src/constants/verticalTimeLine";
import Image from "next/image";

const VerticalTimeLine = () => (
  <div className="flex flex-col items-center py-10 bg-[#030712] min-h-screen">
    <h2 className="text-3xl font-bold text-white mb-10">Roadmap</h2>

    <div className="relative w-full max-w-4xl mx-auto">
      {/* Middle vertical line (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-green-400 via-green-300 to-green-500" />

      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-y-16 gap-x-6
          relative
        "
      >
        {timeline.map((section, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={section.period}
              className={`
                relative 
                max-w-[400px] 
                mx-auto 
                ${isLeft ? "md:justify-self-end" : "md:justify-self-start"}
              `}
            >
              {/* Connector lines toward the center */}

              {/* Card */}
              <div className="relative bg-[#181022] border border-[#FFFFFF33] rounded-[16px] p-6 shadow-md">
                <div
                  className={`hidden md:block absolute top-10 -translate-y-1/2 z-10 ${
                    isLeft ? "right-[-40px]" : "left-[-40px]"
                  }`}
                >
                  <Image
                    src={
                      isLeft
                        ? "/images/homepagev2/left-green-line.svg" // left card points right
                        : "/images/homepagev2/right-green-line.svg" // right card points left
                    }
                    alt="connector"
                    width={39}
                    height={0}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl text-green-300 font-semibold mb-3">{section.period}</h3>
                <ul className="mt-2 list-none">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex flex-row gap-x-2 items-start mt-2">
                      <Image
                        src="/images/about/star.png"
                        alt="star"
                        width={20}
                        height={24}
                        className="w-[20px] h-[24px] flex-shrink-0"
                      />
                      <div className="text-p3 font-open-sans font-normal text-[#D6DDE6]">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default VerticalTimeLine;
