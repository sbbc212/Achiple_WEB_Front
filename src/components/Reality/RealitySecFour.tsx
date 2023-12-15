import { configuratordata } from "@/constants/3dconfiguratordata";
import { realityData } from "@/constants/realitypagedata";

import ThreeCardGroup from "../Pageconfigurator/ThreeCardGroup";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecFour = () => {
  return (
    <>
      <SectionTitleAndContent content={configuratordata[0].textdata[3]} />
      <ul className="flex justify-between pb-[60px]">
        <ThreeCardGroup content={realityData} />
      </ul>
    </>
  );
};

export default RealitySecFour;
