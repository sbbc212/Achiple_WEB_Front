import SectionFive from "@/components/Pageconfigurator/SectionFive";
import SectionFour from "@/components/Pageconfigurator/SectionFour";
import SectionSix from "@/components/Pageconfigurator/SectionSix";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data[2]} />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionSix />
    </div>
  );
};

export default page;
