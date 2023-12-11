import React from "react";

import SectionTwo from "@/components/Pageconfigurator/sectiontwo";
import TextImageCard from "@/components/textimagecard/TextImageCard";

import Page_top_section from "@/components/Section/Page_top_section";

const page = () => {
  return (
    <div className="layout">
      <Page_top_section />
      <SectionTwo />
      <TextImageCard type="imgright" />
      <TextImageCard type="imgleft" />
    </div>
  );
};

export default page;
