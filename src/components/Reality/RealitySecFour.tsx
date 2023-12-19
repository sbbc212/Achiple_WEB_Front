import { realityData, realitytitle } from "@/constants/realitypagedata";

import ThreeCardGroup from "../Pageconfigurator/ThreeCardGroup";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecFour = () => {
  return (
    <div className="py-[60px]">
      <SectionTitleAndContent content={realitytitle[0]} />
      <ul className="flex justify-between pb-[60px]">
        <ThreeCardGroup content={realityData} />
      </ul>
    </div>
  );
};

export default RealitySecFour;
