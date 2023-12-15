import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionFour = () => {
  return (
    <>
      <>
        <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
        <TextImageCard data={carddata.slice(0, 1)} />
      </>
    </>
  );
};

export default SectionFour;
