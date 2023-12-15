import { configuratordata } from "@/constants/3dconfiguratordata";
import { mainlastsection } from "@/constants/maindata";

import RealityTextCard from "./RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecFive = () => {
  return (
    <>
      <SectionTitleAndContent content={configuratordata[0].textdata[5]} />
      <RealityTextCard realitytextdata={mainlastsection} />
      <RealityTextCard realitytextdata={mainlastsection} />
    </>
  );
};

export default RealitySecFive;
