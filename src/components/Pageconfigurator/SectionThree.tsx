import React from "react";

import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionThree = () => {
  return (
    <>
      {configuratordata.map((data) =>
        data.textdata.slice(2, 4).map((item) => <SectionTitleAndContent key={item.id} contenttitle={item.title} content={item.content} />),
      )}
    </>
  );
};

export default SectionThree;
