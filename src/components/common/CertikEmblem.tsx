"use client";

import { useEffect, useRef } from "react";

const CertikEmblem = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Step 1: Inject the "hideEmblem" style
    // const style = document.createElement("style");
    // style.innerHTML = `.certik-emblem { display: block; }`;
    // document.head.appendChild(style);

    // Step 2: Set up the certik-emblem div
    const emblemDiv = document.createElement("div");
    emblemDiv.className = "certik-emblem";
    emblemDiv.setAttribute("data-id", "90c13b53");
    emblemDiv.innerHTML = `<a href="https://skynet.certik.com/projects/quranium?utm_source=SkyEmblem&amp;utm_campaign=quranium&amp;utm_medium=link" target="_blank">View project at certik.com</a>`; // ✅ REPLACE with your actual URL

    containerRef.current?.appendChild(emblemDiv);

    // Step 3: Inject the external script
    const script = document.createElement("script");
    script.src = "https://emblem.certik-assets.com/script?pid=quranium&vid=90c13b53"; // ✅ REPLACE with the actual URL from CertiK
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      script.remove();
      //style.remove();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default CertikEmblem;
