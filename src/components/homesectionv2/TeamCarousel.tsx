import React from "react";
import Image from "next/image";
import Carousel from "@/src/components/common/Carousel";

const images = [
  {
    src: "/images/homepagev2/roadshow/01.webp",
  },
  {
    src: "/images/homepagev2/roadshow/02.webp",
  },
  {
    src: "/images/homepagev2/roadshow/03.webp",
  },
  {
    src: "/images/homepagev2/roadshow/04.webp",
  },
  {
    src: "/images/homepagev2/roadshow/05.webp",
  },
  {
    src: "/images/homepagev2/roadshow/06.webp",
  },
  {
    src: "/images/homepagev2/roadshow/07.webp",
  },
  {
    src: "/images/homepagev2/roadshow/08.webp",
  },
  {
    src: "/images/homepagev2/roadshow/09.webp",
  },
  {
    src: "/images/homepagev2/roadshow/01.webp",
  },
  {
    src: "/images/homepagev2/roadshow/02.webp",
  },
  {
    src: "/images/homepagev2/roadshow/03.webp",
  },
  {
    src: "/images/homepagev2/roadshow/04.webp",
  },
  {
    src: "/images/homepagev2/roadshow/05.webp",
  },
  {
    src: "/images/homepagev2/roadshow/06.webp",
  },
  {
    src: "/images/homepagev2/roadshow/07.webp",
  },
  {
    src: "/images/homepagev2/roadshow/08.webp",
  },
  {
    src: "/images/homepagev2/roadshow/09.webp",
  },
];

const TeamCarousel = () => {
  const [firstRow, secondRow] = [
    images.slice(0, images.length / 2),
    images.slice(images.length / 2),
  ];
  return (
    <div className="space-y-8 py-10 bg-[#0C0318]">
      <Carousel direction="left" speed={100}>
        {[...firstRow, ...firstRow].map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 mx-2 w-[342px] h-[183px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={`image-${i}`}
              fill
              className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
            />
          </div>
        ))}
      </Carousel>
      <Carousel direction="right" speed={100}>
        {[...secondRow, ...secondRow].map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 mx-2 w-[342px] h-[183px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={`image-${i}`}
              fill
              className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TeamCarousel;
