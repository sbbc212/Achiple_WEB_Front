import RealityTextCard from "./RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import { configuratordata } from "@/constants/3dconfiguratordata";

const RealitySecFive = () => {
  return (
    <>
      <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
      <RealityTextCard />
      <RealityTextCard />
    </>
  );
};

export default RealitySecFive;
