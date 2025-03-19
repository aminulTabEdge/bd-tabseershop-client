import MensItems from "@/components/Mens/MensItems";
import SectionBanner from "@/components/ui/SectionBanner";

const MenPage = async () => {
  const bg = "/assets/mens/mens.png";
  return (
    <>
      <SectionBanner
        className="text-white"
        heading="Mens"
        backgroundImagePath={bg}
      />
      <MensItems />
    </>
  );
};

export default MenPage;
