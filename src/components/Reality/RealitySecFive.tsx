import RealityTextCard from "./RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import { configuratordata } from "@/constants/3dconfiguratordata";

const RealitySecFive = () => {
  return (
    <>
      <SectionTitleAndContent content={configuratordata[0].textdata[5]} />
      <RealityTextCard />
      <RealityTextCard />
    </>
  );
};

export default RealitySecFive;
