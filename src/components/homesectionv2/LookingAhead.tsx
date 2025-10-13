// "use client";

// import Image from "next/image";
// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const phases = [
//   {
//     key: "phase1",
//     label: "Phase I 2025",
//     color: "bg-[linear-gradient(180deg,#0021C7_0%,#000D4E_100%)]", // blue
//     content: (
//       <div>
//         <h3 className="text-h4 font-semibold font-montserrat mb-4 text-white">
//           Quantum Secure Layer-1 Blockchain Infrastructure
//         </h3>
//         <ul className="list-none space-y-3">
//           <li className="">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image
//                 src="/images/homepagev2/check-circle.svg"
//                 alt="check circle"
//                 width={20}
//                 height={20}
//               />
//               Core IP developed for Quantum-Secure public ecosystem
//             </div>

//             <ul className="pl-6">
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image
//                     src="/images/homepagev2/check-circle.svg"
//                     alt="check circle"
//                     width={20}
//                     height={20}
//                   />
//                   SLHDSA
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image
//                     src="/images/homepagev2/check-circle.svg"
//                     alt="check circle"
//                     width={20}
//                     height={20}
//                   />
//                   PoS
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image
//                     src="/images/homepagev2/check-circle.svg"
//                     alt="check circle"
//                     width={20}
//                     height={20}
//                   />
//                   EVM Compatibility
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image
//                     src="/images/homepagev2/check-circle.svg"
//                     alt="check circle"
//                     width={20}
//                     height={20}
//                   />
//                   Wallet
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image
//                     src="/images/homepagev2/check-circle.svg"
//                     alt="check circle"
//                     width={20}
//                     height={20}
//                   />
//                   DEX
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image
//                     src="/images/homepagev2/check-circle.svg"
//                     alt="check circle"
//                     width={20}
//                     height={20}
//                   />
//                   Quests Platform
//                 </div>
//               </li>
//             </ul>
//           </li>

//           <li className="flex items-start">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image
//                 src="/images/homepagev2/check-circle.svg"
//                 alt="check circle"
//                 width={20}
//                 height={20}
//               />
//               Established Post-quantum thought leadership
//             </div>
//           </li>
//           <li className="flex items-start">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//               Launch public mainnet
//             </div>
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     key: "phase2",
//     label: "Phase II 2026",
//     color: "bg-[linear-gradient(180deg,#00AA4E_0%,#003317_100%)]", // green
//     content: (
//       <div className="text-white">
//         <h3 className="text-h4 font-semibold font-montserrat mb-4">
//           Post-quantum Financial Infrastructure
//         </h3>
//         <ul className="space-y-3">
//           <li className="flex items-start">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//               Secure $8 Trillion Industry
//             </div>
//           </li>
//           <li className="flex items-start">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//               Solutions for banking and institutional finance
//             </div>
//           </li>
//           <li className="">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//               Institutional grade solutions for
//             </div>
//             <ul className="pl-6">
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Post-quantum BTC
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Post-quantum reserves
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Post-quantum DATs
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Post-quantum banking
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Post-quantum payments
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Post-quantum remittance
//                 </div>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     key: "phase3",
//     label: "Phase III 2027",
//     color: "bg-[linear-gradient(180deg,#550083_0%,#13001D_100%)]", // purple
//     content: (
//       <div className="text-white">
//         <h3 className="text-h4 font-semibold font-montserrat mb-4">
//           Post-quantum Agentic AI Infrastructure
//         </h3>
//         <ul className="space-y-3">
//           <li className="flex items-start">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//               Post-quantum Agentic AI Infrastructure
//             </div>
//           </li>

//           <li className="">
//             <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//               <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//               Agent to agent interactions
//             </div>
//             <ul className="pl-6">
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   ID
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Data
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   Payments
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
//                   <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
//                   IoT
//                 </div>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     ),
//   },
// ];

// export default function LookingAhead() {
//   const sectionRef = useRef(null);
//   const mainTitleRef = useRef(null);
//   const para1Ref = useRef(null);
//   const [activePhase, setActivePhase] = useState(phases[0].key);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(mainTitleRef.current, {
//         scrollTrigger: {
//           trigger: mainTitleRef.current,
//           start: "top 90%",
//         },
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power2.out",
//         delay: 0.5,
//       });

//       gsap.from(para1Ref.current, {
//         scrollTrigger: {
//           trigger: para1Ref.current,
//           start: "top 90%",
//         },
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power2.out",
//         delay: 1.5,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={sectionRef} className="relative bg-[#030712] px-5 pt-16 pb-24">
//       <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
//         <h2
//           ref={mainTitleRef}
//           className="text-h4 md:text-h3 font-montserrat font-semibold text-left"
//         >
//           Looking Ahead
//         </h2>
//         <p ref={para1Ref} className="text-p1 font-open-sans font-normal mt-5">
//           The Uncrackable Future
//         </p>

//         <div className="relative grid grid-cols-1 sm:grid-cols-[40%_60%] md:grid-cols-[30%_70%] gap-6 mt-[60px]">
//           {/* left side */}
//           <div className="relative flex justify-center items-start">
//             <Image
//               src="/images/homepagev2/shell.webp"
//               alt="shell"
//               width={395}
//               height={702}
//               className="w-full max-w-[360px] mx-auto"
//               priority
//             />
//           </div>
//           {/* right side */}
//           <div>
//             {/* Tab Bar */}
//             <div className="flex mb-2 gap-3">
//               {phases.map((p) => (
//                 <button
//                   key={p.key}
//                   onClick={() => setActivePhase(p.key)}
//                   className={`
//                     md:px-5 px-2 py-2 text-h6 md:text-h4 font-montserrat rounded-[16px] md:rounded-[4px] font-semibold text-white
//                     ${activePhase === p.key ? p.color : "bg-[#17171a] text-[#a3a3a3]"}
//                     transition-colors duration-150 border-none focus:outline-none
//                   `}
//                   type="button"
//                 >
//                   {p.label}
//                 </button>
//               ))}
//             </div>
//             {/* Active Tab Content */}
//             <div className="rounded-b-2xl rounded-[16px] bg-[#0120C533] px-[32px] py-5 min-h-[360px]">
//               {phases.find((p) => p.key === activePhase)?.content}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { phases } from "@/src/constants/phases"; // your data from above
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import gsap from "gsap";
const phases = [
  {
    key: "phase1",
    label: "Phase I 2025",
    color: "bg-[linear-gradient(180deg,#0021C7_0%,#000D4E_100%)]",
    tabarea: "bg-[#0120C533]",
    video: "/videos/homepage/shell-blue.mp4",
    content: (
      <div>
        <h3 className="text-h5 font-semibold font-montserrat mb-4 text-white">
          Quantum Secure Layer-1 Blockchain Infrastructure
        </h3>
        <ul className="list-none space-y-3">
          <li className="">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image
                src="/images/homepagev2/check-circle.svg"
                alt="check circle"
                width={20}
                height={20}
              />
              Core IP developed for Quantum-Secure public ecosystem
            </div>

            <ul className="pl-6">
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  SLHDSA
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  PoS
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  EVM Compatibility
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  Wallet
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  DEX
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image
                    src="/images/homepagev2/check-circle.svg"
                    alt="check circle"
                    width={20}
                    height={20}
                  />
                  Quests Platform
                </div>
              </li>
            </ul>
          </li>

          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image
                src="/images/homepagev2/check-circle.svg"
                alt="check circle"
                width={20}
                height={20}
              />
              Established Post-quantum thought leadership
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Launch public mainnet
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "phase2",
    label: "Phase II 2026",
    color: "bg-[linear-gradient(180deg,#00AA4E_0%,#003317_100%)]",
    tabarea: "bg-[#013518]",
    video: "/videos/homepage/shell-green.mp4",
    content: (
      <div className="text-white">
        <h3 className="text-h5 font-semibold font-montserrat mb-4">
          Post-quantum Financial Infrastructure
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Secure $8 Trillion Industry
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Solutions for banking and institutional finance
            </div>
          </li>
          <li className="">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Institutional grade solutions for
            </div>
            <ul className="pl-6">
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Post-quantum BTC
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Post-quantum reserves
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Post-quantum DATs
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Post-quantum banking
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Post-quantum payments
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Post-quantum remittance
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "phase3",
    label: "Phase III 2027",
    color: "bg-[linear-gradient(180deg,#550083_0%,#13001D_100%)]",
    tabarea: "bg-[#150021]",
    video: "/videos/homepage/shell-purple.mp4",
    content: (
      <div className="text-white">
        <h3 className="text-h5 font-semibold font-montserrat mb-4">
          Post-quantum Agentic AI Infrastructure
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Post-quantum Agentic AI Infrastructure
            </div>
          </li>

          <li className="">
            <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
              <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
              Agent to agent interactions
            </div>
            <ul className="pl-6">
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  ID
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Data
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  Payments
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex gap-2 text-h6 font-montserrat font-medium mb-2">
                  <Image src="/images/homepagev2/circle.svg" alt="circle" width={20} height={20} />
                  IoT
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
];
export default function LookingAhead() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animate card when 'current' changes
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [current]);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % phases.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + phases.length) % phases.length);

  return (
    <section className="relative bg-[#0B0117] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* ---- Title ---- */}
        <div className="text-center mb-10">
          <h2 className="text-h3 font-montserrat font-semibold mb-2">Looking Ahead</h2>
          <p className="text-p1 font-open-sans text-gray-300">The Uncrackable Future</p>
        </div>

        {/* ---- Tabs ---- */}
        <div className="flex flex-wrap justify-center gap-4">
          {phases.map((phase, idx) => (
            <button
              key={phase.key}
              onClick={() => setCurrent(idx)}
              className={`px-5 py-2 rounded-[16px] md:rounded-[4px] font-montserrat text-h5 font-normal transition-all duration-300 ${
                phase.color
              } ${current === idx ? "" : ""}`}
            >
              <span className={`${current === idx ? "underline" : ""}`}>{phase.label}</span>
            </button>
          ))}
        </div>

        {/* ---- Slider Layout ---- */}
        <div
          ref={cardRef}
          className="relative grid grid-cols-1 md:grid-cols-[30%_70%] items-center"
        >
          {/* ---- Left Side (Video) ---- */}
          <div className="flex justify-center items-center relative">
            <video
              key={phases[current].video}
              src={phases[current].video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[360px] rounded-2xl object-contain shadow-lg"
            />
          </div>

          {/* ---- Right Side (Content Card) ---- */}
          <div
            className={`relative transition-all duration-500 rounded-2xl p-8 ${phases[current].tabarea} shadow-lg`}
          >
            {phases[current].content}
          </div>

          {/* ---- Navigation Arrows ---- */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-[-4%] top-1/2 -translate-y-1/2 bg-[#181022]/60 hover:bg-[#181022]/90 p-3 rounded-full border border-white/20 z-10 transition"
          >
            <MoveLeftIcon className="w-4 h-4 group-hover:stroke-[#ffffff]" />
          </button>
          <button
            onClick={nextSlide}
            className="group absolute right-0 md:right-[-4%] top-1/2 -translate-y-1/2 bg-[#181022]/60 hover:bg-[#181022]/90 p-3 rounded-full border border-white/20 z-10 transition"
          >
            <MoveRightIcon className="w-4 h-4 group-hover:stroke-[#ffffff]" />
          </button>
        </div>
      </div>
    </section>
  );
}
