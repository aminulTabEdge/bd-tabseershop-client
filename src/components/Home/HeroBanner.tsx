import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[80vh]">
      <Image
        src="/assets/home/hero-banner.png"
        alt="Tabedge Hero banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default HeroBanner;
