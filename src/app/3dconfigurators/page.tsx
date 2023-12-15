import BgBanner from "@/components/Banner/BgBanner";
import SectionFive from "@/components/Pageconfigurator/SectionFive";
import SectionSix from "@/components/Pageconfigurator/SectionSix";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data} />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionSix />
      <BgBanner />
    </div>
  );
};

export default page;
