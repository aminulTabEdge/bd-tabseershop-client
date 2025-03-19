import SectionBanner from "@/components/ui/SectionBanner";
import WomenItems from "@/components/Women/WomenItems";
import React from "react";
const bg = "/assets/women/women.png";
const WomenPage = () => {
  return (
    <>
      <SectionBanner
        className="text-white"
        heading="Women"
        backgroundImagePath={bg}
      />
      <WomenItems />
    </>
  );
};

export default WomenPage;
