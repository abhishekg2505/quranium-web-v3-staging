import React from "react";
import Image from "next/image";
import { mpLogos } from "@/src/constants/mp";
import Link from "next/link";

const MpGrid = () => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-[30px] items-center">
          {mpLogos.map((logo, idx) => {
            const imageElement = (
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto object-fill"
                width={224}
                height={50}
                priority
              />
            );

            return logo.url ? (
              <Link
                href={logo.url}
                target="_blank"
                key={idx}
                className="flex justify-center items-center"
              >
                {imageElement}
              </Link>
            ) : (
              <div key={idx} className="flex justify-center items-center">
                {imageElement}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MpGrid;
