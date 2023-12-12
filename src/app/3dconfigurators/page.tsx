import SectionCard from "@/components/Pageconfigurator/SectionCard";
import SectionFive from "@/components/Pageconfigurator/SectionFive";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import TextImageCard from "@/components/textimagecard/TextImageCard";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection />
      <SectionTwo />
      <SectionThree />
      <SectionCard />
      <SectionFive />
      <TextImageCard type="imgright" />
      <TextImageCard type="imgleft" />
    </div>
  );
};

export default page;
