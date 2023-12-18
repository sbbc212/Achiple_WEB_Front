import { realitytextdata, realitytitle, seceighttext } from "@/constants/realitypagedata";

import RealityTextCard from "./RealityTextCard";
import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecNine = () => {
  return (
    <div className=" layout">
      <SectionTitleAndContent content={realitytitle[1]} />
      <SectionImage sectionimg={realitytextdata[0].img || ""} />
      <div className="py-[7rem]">
        <SectionTitleAndContent content={realitytitle[1]} />
        <RealityTextCard realitytextdata={seceighttext} />
      </div>
    </div>
  );
};

export default RealitySecNine;
