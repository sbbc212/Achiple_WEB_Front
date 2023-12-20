import BgBanner from "@/components/Banner/BgBanner";
import Full from "@/components/Banner/Full";
import TextBanner from "@/components/Banner/TextBanner";
import SectionFour from "@/components/Pageconfigurator/SectionFour";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import PageTopSection from "@/components/Section/PageTopSection";
import { shardcarddata, sharetextdata, sharethreetextcard, sharetop } from "@/constants/share";

const page = () => {
  return (
    <>
      <div className="layout">
        <PageTopSection data={sharetop} />
        <div className="pt-[60px]">
          <SectionFour textimgcard={shardcarddata} titlecontent={sharetextdata[0]} />
        </div>
      </div>
      <Full />
      <div className="layout pt-[60px]">
        <RealitySecEight data={sharetextdata[0]} secondtitle={sharetextdata[1]} textcarddata={sharethreetextcard} />
        <div className="py-[5rem]">
          <TextBanner />
        </div>
        <BgBanner />
      </div>
    </>
  );
};

export default page;
