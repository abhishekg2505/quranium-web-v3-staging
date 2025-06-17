import Image from "next/image";
import { SpotlightData } from "@/src/types/spotlight";

export const SpotlightCard = ({ spotlight }: { spotlight: SpotlightData }) => {
  return (
    <div className="h-full shrink-0 w-80 rounded-[20px] p-[1px] bg-card-border">
      <div className="relative bg-[#0D0C14] rounded-[20px] overflow-hidden flex flex-col h-full">
        <div className="relative aspect-video">
          <Image
            src={spotlight.attributes.image.data?.attributes?.url}
            alt={spotlight.attributes.title}
            fill
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
