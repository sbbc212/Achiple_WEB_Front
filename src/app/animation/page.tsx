import SectionTwo from "@/components/Animation/SectionTwo";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div>
      <div className="layout">
        <PageTopSection data={data} />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
};

export default page;
