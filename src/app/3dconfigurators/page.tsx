import SectionCard from "@/components/Pageconfigurator/SectionCard";
import SectionFive from "@/components/Pageconfigurator/SectionFive";
import SectionSix from "@/components/Pageconfigurator/SectionSix";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection />
      <SectionTwo />
      <SectionThree />
      <SectionCard />
      <SectionFive />
      <SectionSix />
    </div>
  );
};

export default page;
