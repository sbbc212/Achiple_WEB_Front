import { realitytitle, seceighttext } from "@/constants/realitypagedata";

import RealityTextCard from "./RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecFive = () => {
  return (
    <div className="py-[60px]">
      <SectionTitleAndContent content={realitytitle[0]} />
      <RealityTextCard realitytextdata={seceighttext.slice(0, 3)} />
      <RealityTextCard realitytextdata={seceighttext.slice(3, 6)} />
    </div>
  );
};

export default RealitySecFive;
