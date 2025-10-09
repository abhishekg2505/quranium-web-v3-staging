"use client";

import React, { useState } from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetOverlay,
} from "@/src/components/ui/sheet";
import { Sheet } from "@/src/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/constants/navLink";
import Image from "next/image";

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const pathname = usePathname() || "";

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };
  const normalizePath = (path: string) => {
    if (!path) return "";
    return path.startsWith("/") ? path.replace(/\/$/, "") : `/${path.replace(/\/$/, "")}`;
  };

  //check if parent or sublink matches current route
  const isActive = (link: string) => normalizePath(pathname) === normalizePath(link);

  const isParentActive = (item: (typeof navLinks)[0]) => {
    if (item.link && isActive(item.link)) return true;
    if (item.subMenu) {
      return item.subMenu.some((sub) => isActive(sub.subMenuLink));
    }
    return false;
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          {isSheetOpen ? (
            <X className="h-10 w-10 stroke-2 stroke-violet-1" />
          ) : (
            <Menu className="h-10 w-10 stroke-2 stroke-violet-1" />
          )}
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-[calc(100dvh-82px)] bg-background border-t-0 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent w-full !max-w-none"
        >
          <div className="h-full overflow-y-auto pt-[100px]">
            <nav>
              {navLinks.map((item, idx) => (
                <div key={item.itemName} className="mb-4">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleSubMenu(idx)}
                  >
                    <Link
                      href={item.link || "#"}
                      className={`text-lg font-medium ${
                        isParentActive(item)
                          ? "text-[#AE87FF]" // 🔥 Active color
                          : "text-white-1"
                      }`}
                      target={item.link?.startsWith("http") ? "_blank" : "_self"}
                      rel={item.link?.startsWith("http") ? "noopener noreferrer" : ""}
                      onClick={() => item.link && setIsSheetOpen(false)}
                    >
                      <SheetTitle
                        className={`text-lg font-normal ${
                          isParentActive(item)
                            ? "text-[#AE87FF]" // 🔥 Active color
                            : "text-white-1"
                        }`}
                      >
                        {item.itemName}
                      </SheetTitle>
                    </Link>
                    {item.subMenu && <ChevronDown className="ml-2" />}
                  </div>
                  {openSubMenuIndex === idx && item.subMenu && (
                    <div className="pl-4 mt-2">
                      {item.subMenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.subMenuLink}
                          className="flex flex-row justify-start items-start gap-4 py-1"
                          target={subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"}
                          rel={subItem.subMenuLink.startsWith("http") ? "noopener noreferrer" : ""}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          <Image
                            src={subItem.icon}
                            alt={subItem.subMenuName}
                            width={45}
                            height={45}
                            className="mb-4"
                          />
                          <div>
                            <h4 className="text-p2 font-open-sans text-left">
                              {subItem.subMenuName}
                            </h4>
                            <p className="text-p3 font-open-sans text-[#AFAFAF] leading-[100%] text-left">
                              {subItem.subMenuDesc}
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
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* <div className="mb-4">
                <Link
                  href="/contact-us"
                  className="text-lg font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <SheetTitle className="text-white-1 font-normal">Contact</SheetTitle>
                </Link>
              </div> */}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
