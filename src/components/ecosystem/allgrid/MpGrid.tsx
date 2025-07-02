import React from "react";
import Image from "next/image";
import { mpLogos } from "@/src/constants/mp";

const MpGrid = () => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-[60px] items-center">
          {mpLogos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto  object-fill"
                width={224}
                height={50}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MpGrid;
