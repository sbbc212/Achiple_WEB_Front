import SectionFour from "@/components/Animation/SectionFour";
import SectionThree from "@/components/Animation/SectionThree";
import SectionTwo from "@/components/Animation/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data[1]} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default page;
