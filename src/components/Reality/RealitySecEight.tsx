import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { mainlastsection } from "@/constants/maindata";

import RealityTextCard from "./RealityTextCard";
import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecEight = () => {
  return (
    <div className="layout">
      <SectionTitleAndContent content={configuratordata[0].textdata[1]} />
      <SectionImage sectionimg={configuratordata[0].textdata[1].img || ""} />
      <RealityTextCard realitytextdata={mainlastsection} />
    </div>
  );
};

export default RealitySecEight;
