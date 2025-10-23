import Image from "next/image";
import { SpotlightData } from "@/src/types/spotlight";

export const SpotlightCard = ({ spotlight }: { spotlight: SpotlightData }) => {
  return (
    <div className="group h-full shrink-0 w-80 rounded-[20px] p-[1px] bg-card-border">
      <div className="relative bg-[#181022] hover:bg-[#1B0637] rounded-[20px] overflow-hidden flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={spotlight.attributes.image.data?.attributes?.url}
            alt={spotlight.attributes.image.data?.attributes?.alternativeText || "Spotlight Image"}
            fill
            className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-fill"
          />
        </div>
        <div className="px-5 pt-4 pb-10">
          <p className="text-h6 font-montserrat font-medium">{spotlight.attributes.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
