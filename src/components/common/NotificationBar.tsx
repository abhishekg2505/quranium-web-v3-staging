"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const NotificationBar = () => {
  return (
    <div className="mb-2 relative">
      <div className="px-4 before:absolute before:inset-0 before:bg-[url('/images/homepage/nb-small.webp')] md:before:bg-[url('/images/homepage/nb-large.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:-z-10">
        <div className="relative">
          <div className="relative z-10  mx-auto  flex flex-row items-center justify-center gap-5 py-[5px]">
            <h5 className="text-white text-p2 md:text-h6 font-normal md:font-medium leading-tight">
              <span className="text-[#D0FF04]">$QRN</span> Public Pre-Sale is now live on Republic -
              Ends Soon.
            </h5>

            <div className="">
              <Link href="https://republic.com/quranium" target="_blank" rel="noopener noreferrer">
                <Button className="group relative overflow-hidden text-[#601dff] hover:text-[#ffffff] bg-[#ffffff]">
                  <span className="absolute inset-0 z-0 bg-[#601dff] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#601dff] group-hover:text-[#ffffff] transition-colors duration-500">
                    Invest Now
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
