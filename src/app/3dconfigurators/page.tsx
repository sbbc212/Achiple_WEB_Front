import BgBanner from "@/components/Banner/BgBanner";
import SectionFive from "@/components/Pageconfigurator/SectionFive";
import SectionFour from "@/components/Pageconfigurator/SectionFour";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { configuratordata, configuratortopdata, secsixcarddata } from "@/constants/3dconfiguratordata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={configuratortopdata} />
      <SectionTwo />
      <SectionThree />
      <SectionFour textimgcard={secsixcarddata.slice(0, 1)} titlecontent={configuratordata[0].textdata[2]} />
      <SectionFive />
      <SectionFour textimgcard={secsixcarddata} titlecontent={configuratordata[0].textdata[2]} />
      <BgBanner />
    </div>
  );
};

export default page;
