import React from "react";

import { studioonetitle, studiotwo } from "@/constants/studio";

import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const StudioThree = () => {
  return (
    <>
      <div className="pt-[5rem]">
        <SectionTitleAndContent content={studioonetitle[1]} />
      </div>
      <SectionImage sectionimg={studiotwo[0].img || ""} />
    </>
  );
};

export default StudioThree;
