import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const anchorCards = [
  {
    title: "Builders",
    link: "#builders",
    media: "/images/ecosystem-new/find-out-more/builders.svg",
  },
  {
    title: "Ambassadors",
    link: "#ambassadors",
    media: "/images/ecosystem-new/find-out-more/ambassadors.svg",
  },
  {
    title: "Strategic Partners",
    link: "#strategic-partners",
    media: "/images/ecosystem-new/find-out-more/strategic-partners.svg",
  },
  {
    title: "Community",
    link: "#community",
    media: "/images/ecosystem-new/find-out-more/community.svg",
  },
  {
    title: "Media",
    link: "#media",
    media: "/images/ecosystem-new/find-out-more/media.svg",
  },
];

const AnchorCards = () => {
  return (
    <section className="py-16 container mx-auto px-4 md:px-20">
      <h2 className="text-h5 md:text-h4 font-montserrat font-bold text-center mb-10">
        Find out more
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-5 gap-y-10">
        {anchorCards.map((card, index) => (
          <Link key={index} href={card.link} className="md:basis-[32%]">
            <div className="group perspective">
              <div className="relative w-full transition-transform">
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                  <div className="bg-[#0D031B] py-[22px] px-[30px] h-full rounded-[20px] flex flex-col justify-start items-start text-left hover:bg-[#1B0637] bg-[url(/images/ecosystem-new/find-out-more/mesh.png)] bg-right-top transition-colors duration-300 ease-in-out">
                    <Image src={card.media} alt="icon" width={50} height={50} />
                    <div className="flex flex-col md:flex-row flex-wrap items-end justify-between w-full">
                      <div className="md:basis-10/12">
                        <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular font-medium mt-5">
                          {card.title}
                        </h3>
                      </div>
                      <span className="group text-center">
                        <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnchorCards;
