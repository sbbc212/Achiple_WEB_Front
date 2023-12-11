import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <SectionTitleAndContent key={data.id} contenttitle={data.textdata[1].title} content={data.textdata[1].content} />
      ))}
    </div>
  );
};

export default SectionTwo;
