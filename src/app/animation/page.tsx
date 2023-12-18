import AnimationSecFour from "@/components/Animation/AnimationSecFour";
import SectionThree from "@/components/Animation/SectionThree";
import SectionTwo from "@/components/Animation/SectionTwo";
import BgBanner from "@/components/Banner/BgBanner";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data} />
      <SectionTwo />
      <SectionThree />
      <AnimationSecFour />
      <BgBanner />
    </div>
  );
};

export default page;
