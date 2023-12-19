import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionFour = () => {
  return (
    <>
      <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
        <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
      </div>{" "}
      <TextImageCard data={carddata.slice(0, 1)} />
    </>
  );
};

export default SectionFour;
