import SectionThree from "@/components/Animation/SectionThree";
import SectionTwo from "@/components/Animation/SectionTwo";
import BgBanner from "@/components/Banner/BgBanner";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import PageTopSection from "@/components/Section/PageTopSection";
import { animationsecfour, secfourtext } from "@/constants/animation";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data} />
      <SectionTwo />
      <SectionThree />
      <RealitySecEight data={animationsecfour} textcarddata={secfourtext} />
      <BgBanner />
    </div>
  );
};

export default page;
