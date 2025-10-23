"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type TeamCardProps = {
  person: {
    name: string;
    designation: string;
    twitter: string;
    linkedin: string;
    img: string;
    description: string[];
  };
};

export default function Advisor({ person }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="group overflow-hidden border rounded-[16px] border-[#3D3546] hover:border-[#C48FFB]">
      <div className="relative w-full">
        {/* Front Side */}
        <div className="bg-roadshow-reverse-border1 group-hover:bg-purple-border1 p-[0px] rounded-[16px]">
          <div className="relative bg-[#181022] overflow-hidden h-full rounded-[16px] flex flex-col ">
            <Image
              src={person.img}
              alt={person.name}
              width={320}
              height={426}
              className="w-full rounded-[0px] scale-[1.1]"
            />
            <div className="absolute bottom-0 left-0 w-full h-[150px]">
              <Link
                href={person.linkedin}
                className="h-full flex flex-row justify-between items-start gap-4 px-6 py-5 text-p3 hover:bg-[#1B0337] rounded-[10px]"
                target="_blank"
              >
                <div className="">
                  <p className="text-p2 font-open-sans">{person.name}</p>
                  <p className="text-p3 font-open-sans text-[#AFAFAF] leading-normal">
                    {person.designation}
                  </p>
                </div>
                <Image
                  src="/images/common/header/right-arrow.svg"
                  alt="Arrow Right"
                  width={13}
                  height={13}
                  className="mt-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
