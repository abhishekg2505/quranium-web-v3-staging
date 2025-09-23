"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const NotificationBar = () => {
  return (
    <div className="mb-2 relative">
      <div className="px-4 before:absolute before:inset-0 before:bg-[url('/images/homepage/nb-small.webp')] md:before:bg-[url('/images/homepage/nb-large.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:-z-10">
        <div className="relative">
          <div className="relative z-10  mx-auto  flex flex-row items-center justify-center gap-5 py-[15px]">
            <h5 className="text-white text-p2 md:text-h6 font-medium leading-tight">
              <span className="text-[#00FFA5]"></span> Meet Quranium at CV Summit Zurich — 23 to 24
              September, 2025
            </h5>

            <div className="">
              <Link
                href="https://luma.com/CVSummit2025?coupon=QURANIUM_FREE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group relative overflow-hidden text-[#000] hover:text-[#000] bg-[#00FFA5]  border-[#00FFA5] hover:bg-transparent">
                  <span className="absolute inset-0 z-0 bg-[#fff] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#000] group-hover:text-[#000] transition-colors duration-500">
                    Register Today
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
