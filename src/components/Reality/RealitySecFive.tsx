import { realitytitle, secfivetext } from "@/constants/realitypagedata";

import RealityTextCard from "./RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecFive = () => {
  return (
    <div className="py-[60px]">
      <SectionTitleAndContent content={realitytitle[0]} />
      <RealityTextCard realitytextdata={secfivetext.slice(0, 3)} />
      <div className="py-11">
        <RealityTextCard realitytextdata={secfivetext.slice(3, 6)} />
      </div>
    </div>
  );
};

export default RealitySecFive;
