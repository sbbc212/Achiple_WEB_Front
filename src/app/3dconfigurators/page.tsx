import React from "react";

import ExampleSection from "@/components/Pageconfigurator/ExampleSection";
import SectionThree from "@/components/Pageconfigurator/SectionThree";
import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import ContentAndImage from "@/components/Section/ContentAndImage";
import PageTopSection from "@/components/Section/PageTopSection";
import TextImageCard from "@/components/textimagecard/TextImageCard";

const page = () => {
  return (
    <>
      <div className="layout">
        <PageTopSection />
        <SectionTwo />
        <SectionThree />
        <ExampleSection />
        <TextImageCard type="imgright" />
        <TextImageCard type="imgleft" />
      </div>
      <ContentAndImage />
    </>
  );
};

export default page;
