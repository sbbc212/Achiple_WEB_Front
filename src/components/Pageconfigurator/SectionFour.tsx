import React from "react";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import type { TextDataItem } from "@/constants/3dconfiguratordata";
import type { CarddataType } from "@/constants/imagecard";

const SectionFour = ({ textimgcard, titlecontent }: { textimgcard: CarddataType[]; titlecontent: TextDataItem }) => {
  return (
    <>
      <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
        <SectionTitleAndContent content={titlecontent} />
      </div>
      <TextImageCard data={textimgcard} />
    </>
  );
};

export default SectionFour;
