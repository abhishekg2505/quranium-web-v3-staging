import React from "react";
import Marquee from "../ui/marquee";
import { ROADSHOW_CITIES } from "@/src/constants/roadshowCities";

interface CitiesCardProps {
  name: string;
}

const CitiesCard: React.FC<CitiesCardProps> = ({ name }) => (
  <div className="p-[1px] bg-roadshow-stats-border rounded-lg">
    <div className="flex items-center justify-center gap-2 h-[50px] px-6 py-3 rounded-lg lg:h-[42px] min-w-[100px] sm:h-[40px] bg-[#14033C] roadshow-city-card-gradient">
      <div className="text-white-1 font-bold text-lg">{name}</div>
    </div>
  </div>
);

const renderMarquee = (
  cities: {
    name: string;
  }[],
  reverse = false
) => (
  <Marquee pauseOnHover reverse={reverse} className="[--duration:100s] mt-4:first-child">
    {cities.map((city) => (
      <CitiesCard key={city.name} name={city.name} />
    ))}
  </Marquee>
);

const ProudlyDiverse = () => {
  const [firstRow, secondRow] = [
    ROADSHOW_CITIES.slice(0, ROADSHOW_CITIES.length / 2),
    ROADSHOW_CITIES.slice(ROADSHOW_CITIES.length / 2),
  ];
  return (
    <section className="">
      <div className="">
        <div className="flex flex-col overflow-hidden w-full gap-x-2">
          {renderMarquee(firstRow)}
          {renderMarquee(secondRow, true)}
        </div>
      </div>
    </section>
  );
};

export default ProudlyDiverse;
