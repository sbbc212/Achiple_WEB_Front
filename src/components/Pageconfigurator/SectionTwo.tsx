import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionTwo = () => {
  return (
    <>
      {configuratordata.map((data) => (
        <div key={data.id} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
          <SectionTitleAndContent key={data.id} contenttitle={data.textdata[1].title} content={data.textdata[1].content} />
          <SectionImage sectionimg={data?.textdata[1].img || ""} />
        </div>
      ))}
    </>
  );
};

export default SectionTwo;
