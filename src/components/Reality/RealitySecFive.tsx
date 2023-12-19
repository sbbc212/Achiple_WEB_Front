import { realitytitle, seceighttext } from "@/constants/realitypagedata";

import RealityTextCard from "./RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecFive = () => {
  return (
    <div className="py-[60px]">
      <SectionTitleAndContent content={realitytitle[0]} />
      <RealityTextCard realitytextdata={seceighttext} />
      <RealityTextCard realitytextdata={seceighttext} />
    </div>
  );
};

export default RealitySecFive;
