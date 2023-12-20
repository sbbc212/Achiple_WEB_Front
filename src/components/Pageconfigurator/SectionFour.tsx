import React from "react";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import type { TextDataItem } from "@/constants/3dconfiguratordata";
import type { CarddataType } from "@/constants/imagecard";

const SectionFour = ({ textimgcard, titlecontent }: { textimgcard: CarddataType[]; titlecontent: TextDataItem }) => {
  return (
    <div className="pt-[60px]">
      <SectionTitleAndContent content={titlecontent} />
      <TextImageCard data={textimgcard} />
    </div>
  );
};

export default SectionFour;
