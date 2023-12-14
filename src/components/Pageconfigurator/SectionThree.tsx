import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionCard from "./SectionCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionThree = () => {
  return (
    <>
      {configuratordata.map((data) => {
        <div key={data.id} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
          <SectionTitleAndContent contenttitle={data.textdata[4].title} content={data.textdata[2].content} />;
          <SectionCard />
          <SectionCard />
          <SectionCard />
        </div>;
      })}
    </>
  );
};

export default SectionThree;
