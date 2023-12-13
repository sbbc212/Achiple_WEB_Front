import React from "react";

import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import TextImageCard from "@/components/textimagecard/TextImageCard";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection />
      <SectionTwo />
      <TextImageCard datatype={""} />
      <TextImageCard datatype={""} />
    </div>
  );
};

export default page;
