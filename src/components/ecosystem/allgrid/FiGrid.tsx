import React from "react";
import Image from "next/image";
import { fiLogos } from "@/src/constants/fi";

const FiGrid = () => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-[60px]">
          {fiLogos.map((logo, idx) => (
            <div key={idx} className="basis-1/6">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto max-h-10 md:max-h-14 object-contain"
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

export default FiGrid;
