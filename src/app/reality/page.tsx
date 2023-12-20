import BgBanner from "@/components/Banner/BgBanner";
import Full from "@/components/Banner/Full";
import TextBanner from "@/components/Banner/TextBanner";
import SectionFour from "@/components/Pageconfigurator/SectionFour";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import RealitySecFive from "@/components/Reality/RealitySecFive";
import RealitySecFour from "@/components/Reality/RealitySecFour";
import PageSection from "@/components/Section/PageSection";
import PageTopSection from "@/components/Section/PageTopSection";
import { realitypagecard } from "@/constants/imagecard";
import { realitymaindata, realityseceight, realitytextdata, realitytoptext, seceighttext } from "@/constants/realitypagedata";

const page = () => {
  return (
    <>
      <div className="layout">
        <PageTopSection data={realitymaindata} />
        <div className="py-[7rem]">
          <TextBanner />
        </div>
        <SectionFour textimgcard={realitypagecard} titlecontent={realitytextdata[4]} />
        <PageSection content={realitytoptext} />
        <RealitySecFour />
        <RealitySecFive />
        <SectionFour textimgcard={realitypagecard.slice(1, 3)} titlecontent={realitytextdata[4]} />
      </div>
      <Full />
      <div className="pt-[60px]">
        <RealitySecEight data={realityseceight[0]} textcarddata={seceighttext.slice(0, 3)} />
      </div>
      <div className="py-[60px]">
        <RealitySecEight data={realityseceight[1]} secondtitle={realityseceight[1]} textcarddata={seceighttext.slice(0, 3)} />
      </div>
      <BgBanner />
    </>
  );
};

export default page;
