import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { mainlastsection } from "@/constants/maindata";

import RealityTextCard from "./RealityTextCard";
import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const RealitySecNine = () => {
  return (
    <div className=" layout">
      <SectionTitleAndContent content={configuratordata[0].textdata[1]} />
      <SectionImage sectionimg={configuratordata[0].textdata[1].img || ""} />
      <div className="py-[7rem]">
        <SectionTitleAndContent content={configuratordata[0].textdata[3]} />
        <RealityTextCard realitytextdata={mainlastsection} />
      </div>
    </div>
  );
};

export default RealitySecNine;
