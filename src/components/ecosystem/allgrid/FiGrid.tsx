import React from "react";
import Image from "next/image";
import { fiLogos } from "@/src/constants/fi";

const FiGrid = () => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-[60px] items-center">
          {fiLogos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center">
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
