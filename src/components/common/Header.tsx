// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";
// import { Button } from "../ui/button";
// import MobileMenu from "./MobileMenu";
// import { navLinks } from "@/src/constants/navLink";
// import React, { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { usePathname } from "next/navigation";
// // import NotificationBar from "./NotificationBar";

// export default function Header() {
//   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
//   const hideTimeout = useRef<NodeJS.Timeout | null>(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredSubItem, setHoveredSubItem] = useState<any>(null);

//   const headerRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);
//   const navItemRefs = useRef<HTMLDivElement[]>([]);
//   const submenuRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const contactRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.2 });

//       tl.from(headerRef.current, {
//         // y: -30,
//         //opacity: 0,
//         duration: 0.6,
//         ease: "power3.out",
//       })
//         .from(logoRef.current, {
//           opacity: 0,
//           y: -20,
//           duration: 0.4,
//           ease: "power2.out",
//         })
//         .from(
//           navItemRefs.current,
//           {
//             opacity: 0,
//             y: -10,
//             duration: 0.4,
//             stagger: 0.1,
//             ease: "power2.out",
//           },
//           "-=0.2"
//         )
//         .from(
//           contactRef.current,
//           {
//             opacity: 0,
//             y: -10,
//             duration: 0.4,
//             ease: "power2.out",
//           },
//           "-=0.2"
//         );
//     });

//     return () => ctx.revert();
//   }, [pathname]);

//   useEffect(() => {
//     submenuRefs.current.forEach((ref, idx) => {
//       if (!ref) return;

//       if (openDropdownIndex === idx) {
//         gsap.set(ref, {
//           pointerEvents: "auto",
//           visibility: "visible",
//           display: "block",
//         });

//         gsap.fromTo(
//           ref,
//           {
//             opacity: 0,
//             scale: 0.95,
//             clipPath: "inset(10% 20% 90% 20%)",
//           },
//           {
//             opacity: 1,
//             scale: 1,
//             clipPath: "inset(0% 0% 0% 0%)",
//             duration: 0.3,
//             ease: "power2.out",
//           }
//         );
//       } else {
//         gsap.to(ref, {
//           opacity: 0,
//           scale: 0.95,
//           clipPath: "inset(10% 20% 90% 20%)",
//           pointerEvents: "none",
//           duration: 0.2,
//           ease: "power2.in",
//           onComplete: () => {
//             gsap.set(ref, { visibility: "hidden" });
//           },
//         });
//       }
//     });
//   }, [openDropdownIndex]);

//   const handleMouseEnter = (index: number) => {
//     if (hideTimeout.current) clearTimeout(hideTimeout.current);
//     setOpenDropdownIndex(index);
//   };

//   const handleMouseLeave = () => {
//     hideTimeout.current = setTimeout(() => setOpenDropdownIndex(null), 150);
//   };

//   const handleSubMenuClick = () => setOpenDropdownIndex(null);

//   return (
//     <header
//       ref={headerRef}
//       className="fixed z-[60] top-5 left-0 right-0 tracking-tightest transition-all duration-300"
//     >
//       {/* NotificationBar hide on scroll */}
//       {/* <NotificationBar /> */}
//       <div className="relative px-4 md:px-10 lg:px-10 xl:px-20">
//         <div className="px-5 xl:px-10 py-2.5 md:py-2.5 max-w-[1180px] mx-auto flex items-center justify-between rounded-[20px] bg-[rgba(80,80,80,0.10)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[122px]">
//           {/* Logo */}
//           <div ref={logoRef}>
//             <Link href="/" className="shrink-0 p-3 block">
//               <Image src="/logo.svg" alt="Quranium Logo" width={152} height={22} priority />
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-4 2xl:gap-8">
//             <nav className="flex items-start gap-3 xl:gap-6 px-3 py-1">
//               {navLinks.map((item, idx) => (
//                 <div
//                   key={item.itemName}
//                   className="relative group"
//                   ref={(el) => {
//                     navItemRefs.current[idx] = el!;
//                   }}
//                   onMouseEnter={() => handleMouseEnter(idx)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {item.link ? (
//                     <Link
//                       href={item.link}
//                       className="flex items-center gap-2 text-center hover:opacity-60 duration-300"
//                     >
//                       <span className="text-p3 font-semibold leading-[26px] text-white-1">
//                         {item.itemName}
//                       </span>
//                       {item.subMenu && <ChevronDown className="stroke-2 text-white-1" size={16} />}
//                     </Link>
//                   ) : (
//                     <div className="flex items-center gap-2 cursor-default text-white-1 font-semibold text-p3 leading-[26px]">
//                       {item.itemName}
//                       {item.subMenu && <ChevronDown className="stroke-2 text-white-1" size={16} />}
//                     </div>
//                   )}

//                   {/* Dropdown */}
//                   {item.subMenu && (
//                     <div
//                       ref={(el) => {
//                         submenuRefs.current[idx] = el;
//                       }}
//                       className="absolute top-full left-0 pt-4 w-max z-50"
//                       style={{
//                         opacity: 0,
//                         visibility: "hidden",
//                         pointerEvents: "none",
//                         transformOrigin: "top center",
//                       }}
//                     >
//                       <div className="border border-[rgba(255,255,255,0.15)] bg-background rounded-xl shadow-xl overflow-hidden">
//                         {item.subMenu.map((subItem, subIdx) => (
//                           <Link
//                             key={subIdx}
//                             href={subItem.subMenuLink}
//                             onClick={handleSubMenuClick}
//                             className={`block px-4 py-3 text-p3 whitespace-nowrap hover:bg-white/5 transition-colors duration-200 ${
//                               subIdx !== 0 ? "border-t border-[rgba(255,255,255,0.1)]" : ""
//                             }`}
//                             target={subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"}
//                             rel={
//                               subItem.subMenuLink.startsWith("http") ? "noopener noreferrer" : ""
//                             }
//                           >
//                             {subItem.subMenuName}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Contact Button */}
//             <div ref={contactRef}>
//               <Link href="/contact-us">
//                 <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
//                   <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
//                   <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
//                     Contact us
//                   </span>
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Nav */}
//           <div className="lg:hidden">
//             <MobileMenu />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks } from "@/src/constants/navLink"; // <-- your navLinks with Products + Initiatives
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const submenuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredNavIdx, setHoveredNavIdx] = useState<number | null>(null);

  const [hoveredSubItem, setHoveredSubItem] = useState<any>(null);
  const pathname = usePathname() || "";
  // console.log("pathname", pathname);
  // Normalize paths (remove trailing slash)
  const normalizePath = (path: string) => {
    if (!path) return "";
    return path.startsWith("/") ? path.replace(/\/$/, "") : `/${path.replace(/\/$/, "")}`;
  };

  // Check if parent nav item is active
  const isParentActive = (item: (typeof navLinks)[0]) => {
    if (item.link && normalizePath(pathname).startsWith(normalizePath(item.link))) return true;
    if (item.subMenu) {
      return item.subMenu.some((sub) =>
        normalizePath(pathname).startsWith(normalizePath(sub.subMenuLink))
      );
    }
    return false;
  };

  // Keep track of a timeout per menu
  const leaveTimeouts = useRef<NodeJS.Timeout[]>([]);

  const handleMouseEnter = (idx: number) => {
    setHoveredNavIdx(idx);
    // Clear any pending close timeout for this index
    if (leaveTimeouts.current[idx]) {
      clearTimeout(leaveTimeouts.current[idx]);
    }

    const submenu = submenuRefs.current[idx];
    if (submenu) {
      submenu.style.opacity = "1";
      submenu.style.visibility = "visible";
      submenu.style.pointerEvents = "auto";
      submenu.style.transform = "translateY(0)";
    }
    const item = navLinks[idx];
    if (item && Array.isArray(item.subMenu) && item.subMenu.length > 0) {
      setHoveredSubItem(item.subMenu[0]);
    } else {
      setHoveredSubItem(null);
    }
  };

  const handleMouseLeave = (idx: number) => {
    setHoveredNavIdx(null);
    // Set a timeout so it doesn’t instantly close
    leaveTimeouts.current[idx] = setTimeout(() => {
      const submenu = submenuRefs.current[idx];
      if (submenu) {
        submenu.style.opacity = "0";
        submenu.style.visibility = "hidden";
        submenu.style.pointerEvents = "none";
        submenu.style.transform = "translateY(-10px)";
      }
      setHoveredSubItem(null);
    }, 250);
  };

  const handleSubMenuClick = () => {
    setHoveredSubItem(null);
  };

  return (
    <header
      ref={headerRef}
      className="fixed z-[99] top-5 left-0 right-0 tracking-tightest transition-all duration-300"
    >
      <div className="relative px-4 md:px-10 lg:px-10 xl:px-20">
        <div
          className={`relative px-5 xl:px-10 py-2.5 md:py-2.5 max-w-[1180px] mx-auto flex items-center justify-between  bg-[#0C0218] ${
            hoveredNavIdx !== null && navLinks[hoveredNavIdx]?.subMenu
              ? "border border-b-0 rounded-[20px_20px_0px_0px] border-[rgba(255,255,255,0.06)]"
              : "border rounded-[20px] border-[rgba(255,255,255,0.06)]"
          }`}
        >
          {/* Logo */}
          <div ref={logoRef}>
            <Link href="/" className="shrink-0 p-3 block">
              <Image src="/logo.svg" alt="Quranium Logo" width={152} height={22} priority />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 2xl:gap-8">
            <nav className="flex items-start gap-3 xl:gap-6 px-3 py-1">
              {navLinks.map((item, idx) => (
                <div
                  key={item.itemName}
                  className="relative1 group"
                  ref={(el) => {
                    navItemRefs.current[idx] = el!;
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-center duration-300 group-hover:text-[#AE87FF]"
                    >
                      <span
                        className={`text-p1 font-normal leading-[26px]  group-hover:text-[#AE87FF] ${
                          hoveredNavIdx === idx || isParentActive(item)
                            ? "text-[#AE87FF]"
                            : "text-white-1"
                        }`}
                      >
                        {item.itemName}
                      </span>
                      {item.subMenu && <ChevronDown className="stroke-2 text-white-1" size={16} />}
                    </Link>
                  ) : (
                    <div
                      className={`flex items-center gap-2 text-p1 font-normal leading-[26px] cursor-pointer ${
                        hoveredNavIdx === idx || isParentActive(item)
                          ? "text-[#AE87FF]"
                          : "text-white-1"
                      }`}
                    >
                      {item.itemName}
                      {item.subMenu && (
                        <ChevronDown
                          className={`stroke-2 text-white-1 ${
                            hoveredNavIdx === idx || isParentActive(item)
                              ? "group-hover:stroke-[#AE87FF]"
                              : "group-hover:stroke-[#ffffff]"
                          }`}
                          size={16}
                        />
                      )}
                    </div>
                  )}

                  {/* Dropdown */}
                  {item.subMenu && (
                    <div
                      ref={(el) => {
                        submenuRefs.current[idx] = el;
                      }}
                      className="overflow-y-auto absolute top-[81%] left-0  w-full z-[99] transition-all duration-300 border bg-[#0C0218] border-t-0 border-[rgba(255,255,255,0.06)] rounded-[0px_0px_20px_20px] overflow-hidden"
                      style={{
                        opacity: 0,
                        visibility: "hidden",
                        pointerEvents: "none",
                        transform: "translateY(-10px)",
                        transformOrigin: "top center",
                      }}
                    >
                      {/* Mega menu for Products */}
                      {item.itemName === "Products" ? (
                        <div className="pb-10 px-10 overflow-hidden">
                          <div className="flex w-full gap-10 pt-5">
                            {/* Left list */}
                            <div className="relative w-1/2 px-2 flex flex-col justify-center items-center text-center">
                              {"preview" in (hoveredSubItem || {}) && hoveredSubItem?.preview && (
                                <>
                                  <Image
                                    src={hoveredSubItem.preview.img}
                                    alt={hoveredSubItem.preview.title}
                                    width={1086}
                                    height={500}
                                    className="max-w-full"
                                  />
                                  <Link
                                    href={hoveredSubItem.preview.source}
                                    className="absolute bottom-0 left-0 right-0 w-[90%] mx-auto flex flex-row justify-between items-start gap-4"
                                    target={
                                      hoveredSubItem.preview.source.startsWith("http")
                                        ? "_blank"
                                        : "_self"
                                    }
                                    rel={
                                      hoveredSubItem.preview.source.startsWith("http")
                                        ? "noopener noreferrer"
                                        : ""
                                    }
                                  >
                                    <div>
                                      <h4 className="text-p1 font-open-sans text-left">
                                        {hoveredSubItem.preview.title}
                                      </h4>
                                      <p className="text-p3 font-open-sans text-[#AFAFAF] leading-[100%] text-left">
                                        {hoveredSubItem.preview.desc}
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
                                </>
                              )}
                            </div>

                            {/* Right preview */}
                            <div className="w-1/2">
                              {item.subMenu.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={subItem.subMenuLink}
                                  onClick={handleSubMenuClick}
                                  onMouseEnter={() => setHoveredSubItem(subItem)}
                                  target={
                                    subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"
                                  }
                                  rel={
                                    subItem.subMenuLink.startsWith("http")
                                      ? "noopener noreferrer"
                                      : ""
                                  }
                                  className="flex flex-row justify-between items-start gap-4 px-4 py-2 text-p3 hover:bg-[#1B0337] rounded-[10px]"
                                >
                                  <div className="flex flex-row justify-start items-start gap-4">
                                    <Image
                                      src={subItem.icon}
                                      alt={subItem.subMenuName}
                                      width={45}
                                      height={45}
                                      className="mb-4"
                                    />
                                    <div className="">
                                      <p className="text-p2 font-open-sans">
                                        {subItem.subMenuName}
                                      </p>
                                      <p className="text-p3 font-open-sans text-[#AFAFAF] leading-normal">
                                        {subItem.subMenuDesc}
                                      </p>
                                    </div>
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
                          </div>
                        </div>
                      ) : (
                        // Simple dropdown for Initiatives, About, etc.
                        <div className="bg-[#0C0218] pb-10 px-10 overflow-hidden">
                          <div className="grid grid-cold-1 md:grid-cols-2 gap-x-10 pt-5">
                            {item.subMenu.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.subMenuLink}
                                onClick={handleSubMenuClick}
                                className="flex flex-row justify-start items-start gap-4 px-4 py-3 text-p3 hover:bg-[#1B0337] rounded-[10px]"
                                target={subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"}
                                rel={
                                  subItem.subMenuLink.startsWith("http")
                                    ? "noopener noreferrer"
                                    : ""
                                }
                              >
                                <Image
                                  src={subItem.icon}
                                  alt={subItem.subMenuName}
                                  width={45}
                                  height={45}
                                  className="mb-4"
                                />
                                <div className="">
                                  <p className="text-p2 font-open-sans">{subItem.subMenuName}</p>
                                  <p className="text-p3 font-open-sans text-[#AFAFAF] leading-normal">
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
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button */}
            {/* <div ref={contactRef}>
              <Link href="/contact-us">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Contact us
                  </span>
                </Button>
              </Link>
            </div> */}
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
