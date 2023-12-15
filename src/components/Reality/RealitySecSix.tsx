import { realitypagecard } from "@/constants/imagecard";
import { realitytextdata } from "@/constants/realitypagedata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const RealitySecSix = () => {
  return (
    <div>
      <SectionTitleAndContent content={realitytextdata[4]} />
      <TextImageCard data={realitypagecard.slice(1, 3)} />
    </div>
  );
};

export default RealitySecSix;
