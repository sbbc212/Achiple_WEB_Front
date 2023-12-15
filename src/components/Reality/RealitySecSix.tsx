import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import { realitypagecard } from "@/constants/imagecard";
import { realitytextdata } from "@/constants/realitypagedata";

const RealitySecSix = () => {
  return (
    <div>
      <SectionTitleAndContent content={realitytextdata[4]} />
      <TextImageCard data={realitypagecard.slice(1, 3)} datatype={realitytextdata[4].datatype} />
    </div>
  );
};

export default RealitySecSix;
