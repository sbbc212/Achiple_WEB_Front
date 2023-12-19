import SectionThree from "@/components/Animation/SectionThree";
import BgBanner from "@/components/Banner/BgBanner";
import SectionFour from "@/components/Pageconfigurator/SectionFour";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import PageTopSection from "@/components/Section/PageTopSection";
import { animationdata, animationsecfour, animationtextdata, secfourtext } from "@/constants/animation";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data} />
      <SectionFour textimgcard={animationdata} titlecontent={animationtextdata[1]} />
      <SectionThree />
      <RealitySecEight data={animationsecfour[0]} textcarddata={secfourtext} />
      <BgBanner />
    </div>
  );
};

export default page;
