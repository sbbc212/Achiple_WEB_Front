import { realitypagecard } from "@/constants/imagecard";
import { realitytextdata } from "@/constants/realitypagedata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const RealitySecTwo = () => {
  return (
    <>
      <SectionTitleAndContent content={realitytextdata[4]} />
      <TextImageCard data={realitypagecard} />
    </>
  );
};

export default RealitySecTwo;
