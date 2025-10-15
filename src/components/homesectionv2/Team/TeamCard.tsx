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

export default function TeamCard({ person }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="group overflow-hidden">
      <div className="relative w-full">
        {/* Front Side */}
        <div className="bg-roadshow-reverse-border group-hover:bg-purple-border p-[1px] rounded-[20px]">
          <div className="relative bg-[#181022] overflow-hidden h-full rounded-[16px] flex flex-col">
            <Image
              src={person.img}
              alt={person.name}
              width={320}
              height={426}
              className="w-full rounded-[16px] h-[369px] md:h-[426px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <Link
                href={person.linkedin}
                className="h-full flex flex-row justify-between items-center gap-4 px-6 py-5 text-p3 hover:bg-[#1B0337] rounded-[10px]"
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
